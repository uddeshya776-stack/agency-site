/* Quality tiers and a frame-time governor.
   Tier is a first guess from the device; the governor then watches real frame
   times and trades resolution (then post effects) for a steady frame rate. */

export const TIERS = {
  high: { name: 'high', maxDpr: 2, pixelBudget: 3.4e6, minScale: 0.55, post: true, msaa: 4, detail: 1 },
  mid: { name: 'mid', maxDpr: 1.5, pixelBudget: 1.9e6, minScale: 0.6, post: true, msaa: 4, detail: 0.7 },
  low: { name: 'low', maxDpr: 1.25, pixelBudget: 1.1e6, minScale: 0.65, post: false, msaa: 0, detail: 0.45 },
};

const LOW_GPU = /(mali-[gt]?[0-7]\d|mali-4|adreno \(tm\) [1-5]\d\d|powervr|sgx|intel\(r\) hd graphics [2-5]\d{2,3}|swiftshader|llvmpipe)/i;

export function detectTier(gl) {
  const params = new URLSearchParams(location.search);
  const forced = params.get('tier');
  if (forced && TIERS[forced]) return TIERS[forced];

  const coarse = matchMedia('(pointer: coarse)').matches;
  const shortSide = Math.min(screen.width, screen.height);
  const mem = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const saveData = !!(navigator.connection && navigator.connection.saveData);

  let tier = coarse || shortSide < 700 ? 'mid' : 'high';
  if (saveData || mem <= 2 || cores <= 2) tier = 'low';
  else if ((coarse || shortSide < 700) && (mem <= 4 || cores <= 4)) tier = 'low';

  if (gl) {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    if (LOW_GPU.test(gpu)) tier = 'low';
  }
  return TIERS[tier];
}

/* Watches frame times (ms) and calls onChange(scale, postOn) when it adapts.
   scale multiplies the device pixel ratio. Hysteresis keeps it from flapping. */
export class Governor {
  constructor(tier, onChange) {
    this.tier = tier;
    this.onChange = onChange;
    this.scale = 1;
    this.post = tier.post;
    this.ema = 16.7;
    this.frames = 0;
    this.lastChange = 0;
    this.upgrades = 0;
  }

  sample(dt, now) {
    if (dt <= 0 || dt > 250) return; // tab switches, long stalls: ignore
    this.frames++;
    this.ema += (dt - this.ema) * 0.08;
    if (this.frames < 45) return; // warm-up: shader compiles, first uploads

    const since = now - this.lastChange;
    if (this.ema > 25 && since > 900) {
      if (this.scale > this.tier.minScale + 0.01) {
        this.scale = Math.max(this.tier.minScale, this.scale * 0.82);
      } else if (this.post) {
        this.post = false;
      } else {
        return;
      }
      this.commit(now);
    } else if (this.ema < 13.5 && since > 4000 && this.scale < 1 && this.upgrades < 3) {
      this.scale = Math.min(1, this.scale * 1.12);
      this.upgrades++;
      this.commit(now);
    }
  }

  commit(now) {
    this.lastChange = now;
    this.ema = 16.7;
    this.frames = 30; // short re-settle before judging again
    this.onChange(this.scale, this.post);
  }
}

/* Device pixel ratio that respects the tier's cap and pixel budget. */
export function pixelRatioFor(tier, width, height, scale = 1) {
  const dpr = Math.min(window.devicePixelRatio || 1, tier.maxDpr);
  const budget = Math.sqrt(tier.pixelBudget / Math.max(1, width * height));
  return Math.max(0.5, Math.min(dpr, budget) * scale);
}
