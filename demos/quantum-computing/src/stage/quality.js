/* Quality tiers and a frame-time governor.
   Tier is a first guess from the device; the governor then watches real frame
   times and trades resolution (then post effects) for a steady frame rate. */

export const TIERS = {
  high: { name: 'high', maxDpr: 2, pixelBudget: 3.4e6, minScale: 0.55, post: true, msaa: 4, detail: 1 },
  mid: { name: 'mid', maxDpr: 1.5, pixelBudget: 1.9e6, minScale: 0.6, post: true, msaa: 4, detail: 0.7 },
  low: { name: 'low', maxDpr: 1.25, pixelBudget: 1.1e6, minScale: 0.65, post: false, msaa: 0, detail: 0.45 },
};

// Weak mobile and integrated GPUs. Flagship Malis (G76 and later: G710, G715, G720) are not here.
const LOW_GPU = /mali-(4\d\d|t\d+|g(31|51|52|57|68|71|72)\b)|adreno \(tm\) ([1-5]\d\d|6[01]\d)|powervr|sgx|intel\(r\) hd graphics [2-5]\d{2,3}\b|swiftshader|llvmpipe/i;
// Laptop GPUs that cannot carry the high tier (depth of field, 4x MSAA, 3.4 MP): mid instead.
const DESK_MID = /intel.*(uhd graphics|hd graphics|iris(\((r|tm)\))? plus)/i;

export function detectTier(gl) {
  const params = new URLSearchParams(location.search);
  const forced = params.get('tier');
  if (forced && TIERS[forced]) return TIERS[forced];

  const coarse = matchMedia('(pointer: coarse)').matches;
  const shortSide = Math.min(screen.width, screen.height);
  // deviceMemory is Chrome only and rounded down (a 6 GB phone reports 4), so it only flags
  // very small devices. hardwareConcurrency is left out: Safari reports 4 or 8, or a random
  // number with fingerprinting protection on.
  const mem = navigator.deviceMemory;
  const saveData = !!(navigator.connection && navigator.connection.saveData);
  let gpu = '';
  if (gl) {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    gpu = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
  }

  // touch screens (phones, tablets, including every iPhone: "Apple GPU") start at mid
  let tier = coarse || shortSide < 700 ? 'mid' : 'high';
  if (saveData || (mem !== undefined && mem <= 2) || LOW_GPU.test(gpu)) tier = 'low';
  else if (tier === 'high' && DESK_MID.test(gpu)) tier = 'mid';
  // Iris Xe keeps high, with a smaller frame and fewer depth of field taps
  if (tier === 'high' && /intel/i.test(gpu) && !/\barc\b/i.test(gpu)) return { ...TIERS.high, pixelBudget: 2.4e6, dofTaps: 10 };
  return TIERS[tier];
}

/* Watches frame times (ms) and calls onChange(scale, post, msaa) when it adapts. scale multiplies
   the device pixel ratio.
   - Decides on the mean of the last 20-30 frames since the previous change.
   - Steps down the ladder (resolution in proportional cuts, then post effects) and keeps an undo
     stack: after 2.5 s of frames within 10 % of the target, the last cut is undone (resolution
     climbs back at most 15 % at a time). An undo that does not hold is reverted, and the wait
     before the next try doubles (up to 2 min), so it settles on the best level that holds.
   - A steady 33 ms frame is either a slow GPU or a 30 Hz cap (iOS Low Power Mode, battery savers).
     One probe at 70 % resolution tells them apart: faster means GPU-bound, so the cut stays;
     not faster means a cap, so everything is restored and 33 ms becomes the target. */
export class Governor {
  constructor(tier, onChange, { ladder = ['scale', 'post'] } = {}) {
    this.tier = tier;
    this.onChange = onChange;
    this.scale = 1;
    this.post = !!tier.post;
    this.msaa = tier.msaa > 0;
    this.ladder = ladder.filter((k) => k === 'scale' || this[k]);
    this.undo = [];
    this.ring = new Float32Array(30);
    this.ri = 0;
    this.filled = 0;
    this.good = 0;
    this.upWait = 2500;
    this.lastUp = -1e9;
    this.lastUpUndo = null;
    this.capUntil = 0;
    this.probeAt = 0;
    this.probeWait = 30000;
    this.probe = null;
  }

  sample(dt, now) {
    if (dt <= 0 || dt > 250) return; // tab switches, long stalls: ignore
    this.ring[this.ri] = dt;
    this.ri = (this.ri + 1) % 30;
    if (this.filled < 30) this.filled++;
    if (this.filled < 20) return; // 20 frames since the start or since the last change
    let lo = 1e9, sum = 0, band = 0;
    for (let i = 0; i < this.filled; i++) {
      const v = this.ring[i];
      sum += v;
      if (v < lo) lo = v;
      if (v > 31 && v < 36) band++;
    }
    const mean = sum / this.filled;
    const min = this.tier.minScale;
    if (this.probe) { this.endProbe(now, mean); return; }
    if (lo < 22 && this.capUntil === Infinity) { this.capUntil = 0; this.probeAt = 0; } // the cap went away
    if (band >= this.filled - 2 && now >= this.probeAt && now - this.lastUp > 3000 && this.scale > min + 0.01) {
      this.startProbe(now);
      return;
    }
    const target = now < this.capUntil ? 33.3 : 16.7;
    if (mean > target * 1.3) {
      if (now - this.lastUp < 3000 && this.lastUpUndo) { // the last upgrade did not hold: revert it
        const u = this.lastUpUndo;
        this.undo.push({ k: u.k, v: this[u.k] });
        this[u.k] = u.v;
        this.upWait = Math.min(120000, this.upWait * 2);
        this.lastUpUndo = null;
        this.lastUp = -1e9;
        this.commit();
        return;
      }
      for (const k of this.ladder) {
        if (k === 'scale') {
          if (this.scale <= min + 0.01) continue;
          this.undo.push({ k, v: this.scale });
          this.scale = Math.max(min, this.scale * Math.min(0.9, Math.max(0.7, Math.sqrt(target / mean))));
        } else {
          if (!this[k]) continue;
          this.undo.push({ k, v: true });
          this[k] = false;
        }
        this.commit();
        return;
      }
    } else if (mean < target * 1.1) {
      this.good += dt;
      if (this.good > this.upWait && this.undo.length) {
        const u = this.undo.pop();
        let v = u.v;
        if (u.k === 'scale' && v > this.scale * 1.15 + 0.01) { this.undo.push(u); v = this.scale * 1.15; }
        this.lastUpUndo = { k: u.k, v: this[u.k] };
        this[u.k] = v;
        this.lastUp = now;
        this.commit();
      }
    } else {
      this.good = 0;
    }
  }

  startProbe(now) {
    this.probe = { scale: this.scale };
    this.undo.push({ k: 'scale', v: this.scale }); // popped again if this turns out to be a cap
    this.scale = Math.max(this.tier.minScale, this.scale * 0.7); // half the pixels
    this.commit();
  }

  endProbe(now, mean) {
    const p = this.probe;
    this.probe = null;
    this.probeAt = now + this.probeWait;
    this.probeWait = Math.min(240000, this.probeWait * 2);
    if (mean < 16.7 * 1.3) { // GPU-bound: keep the cut and climb back through the undo stack
      this.capUntil = 0;
      this.upWait = 2500;
      this.good = 0;
    } else { // a 30 Hz cap: restore, and aim for 33 ms
      this.undo.pop();
      this.scale = p.scale;
      this.capUntil = Infinity;
      this.probeAt = Infinity;
      this.commit();
    }
  }

  commit() {
    this.good = 0;
    this.filled = 0;
    this.ri = 0;
    this.onChange(this.scale, this.post, this.msaa);
  }
}

/* Device pixel ratio that respects the tier's cap and pixel budget. */
export function pixelRatioFor(tier, width, height, scale = 1) {
  const dpr = Math.min(window.devicePixelRatio || 1, tier.maxDpr);
  const budget = Math.sqrt(tier.pixelBudget / Math.max(1, width * height));
  return Math.max(0.5, Math.min(dpr, budget) * scale);
}
