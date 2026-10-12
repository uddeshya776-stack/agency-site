/* Camera and grade per chapter (0..7), and the aspect-aware framing.
   Each chapter is a "shot": camera, target, vertical fov at the reference aspect,
   lens shift (fraction of the frame, via setViewOffset) and roll. Two key sets:
   landscape (composed at 1440x900) and portrait (composed at 390x844). */
import { clamp, lerp, smootherstep } from './util.js';

const DEG = Math.PI / 180;
export const LAND_ASPECT = 1.6;
export const PORT_ASPECT = 390 / 844;

const LAND = [
  { pos: [5.25, 2.45, 15.3], tgt: [0.0, 0.18, 0.0], fov: 30, shift: [0.16, -0.01], roll: 0 },
  { orbit: { az: 28, r: 4.3, y: 1.95, ay: 1.5, pan: 0.9 }, fov: 36, shift: [0.06, 0.0], roll: -0.025 },
  { orbit: { az: -22, r: 3.6, y: -0.5, ay: -0.9, pan: 0.75 }, fov: 38, shift: [0.06, 0.0], roll: 0.02 },
  { orbit: { az: 18, r: 3.26, y: -3.15, ay: -2.6, pan: 0.35 }, fov: 40, shift: [0.06, 0.02], roll: -0.015 },
  { chip: { d: 1.0, side: 0.95, up: 0.42, pan: 0.3 }, fov: 30, shift: [0.04, 0.0], roll: 0 },
  { chip: { d: 1.0, side: -0.62, up: -0.2, pan: 0.2 }, fov: 30, shift: [0.18, 0.0], roll: 0.012, drift: 1 },
  { pos: [3.6, -7.6, 6.6], tgt: [0.0, -0.2, 0.0], fov: 46, shift: [0.17, 0.24], roll: 0 },
  { ring: { az: -15, r: 16.2, y: 1.2, ty: -0.1 }, fov: 31, shift: [0.17, 0.0], roll: 0 },
];
const PORT = [
  { pos: [4.6, 2.2, 13.6], tgt: [0.0, 0.6, 0.0], fov: 62, shift: [0.0, -0.14], roll: 0 },
  { orbit: { az: 34, r: 5.2, y: 2.3, ay: 1.4, pan: 0.85 }, fov: 56, shift: [0.0, -0.16], roll: -0.03 },
  { orbit: { az: -22, r: 4.3, y: -0.35, ay: -0.85, pan: 0.0 }, fov: 58, shift: [0.0, -0.17], roll: 0.02 },
  { orbit: { az: 18, r: 3.6, y: -3.3, ay: -2.75, pan: 0.0 }, fov: 60, shift: [0.0, -0.12], roll: -0.015 },
  { chip: { d: 1.7, side: 0.35, up: 0.35, pan: 0.0 }, fov: 46, shift: [0.0, -0.14], roll: 0 },
  { chip: { d: 1.6, side: -0.5, up: 0.45, pan: 0.0 }, fov: 42, shift: [0.0, -0.16], roll: 0, drift: 1 },
  { pos: [3.4, -8.0, 7.4], tgt: [0.0, -0.6, 0.0], fov: 64, shift: [0.0, -0.14], roll: 0 },
  { ring: { az: -15, r: 15.5, y: 1.4, ty: 0.4 }, fov: 52, shift: [0.0, -0.12], roll: 0 },
];

// Grade and atmosphere per chapter (blended with the same eased weights as the camera)
export const LOOK = [
  { envRot: 0.0, envInt: 1.0, fog: 0.010, exposure: 1.0, cold: 0.0, bloom: 0.22, halo: 1.0, key: 1.0, dof: 0.0, focusPull: 0.0, beam: 1.0, glow: 0.0, glowHalo: 0.0, gain: 0.5, bottom: 0.0, sat: 1.05, frost: 1.0, vignette: 0.55 },
  { envRot: 0.55, envInt: 1.05, fog: 0.05, exposure: 1.0, cold: 0.3, bloom: 0.24, halo: 0.8, key: 1.0, dof: 7.0, focusPull: 1.25, beam: 0.3, glow: 0.0, glowHalo: 0.0, gain: 0.5, bottom: 0.0, sat: 1.05, frost: 1.0, vignette: 0.55 },
  { envRot: -0.35, envInt: 1.0, fog: 0.07, exposure: 1.0, cold: 0.6, bloom: 0.30, halo: 0.7, key: 0.9, dof: 7.0, focusPull: 1.0, beam: 0.2, glow: 0.0, glowHalo: 0.0, gain: 0.6, bottom: 0.0, sat: 1.04, frost: 1.0, vignette: 0.55 },
  { envRot: 0.9, envInt: 0.95, fog: 0.08, exposure: 1.0, cold: 0.95, bloom: 0.32, halo: 0.7, key: 0.8, dof: 5.0, focusPull: -0.2, beam: 0.3, glow: 1.0, glowHalo: 1.0, gain: 0.8, bottom: 0.0, sat: 1.0, frost: 1.0, vignette: 0.58 },
  { envRot: 0.25, envInt: 0.9, fog: 0.14, exposure: 1.04, cold: 1.0, bloom: 0.42, halo: 0.6, key: 0.6, dof: 13.0, focusPull: 0.0, beam: 0.0, glow: 0.22, glowHalo: 0.0, gain: 1.0, bottom: 0.0, sat: 1.0, frost: 1.0, vignette: 0.6 },
  { envRot: 0.6, envInt: 1.0, fog: 0.12, exposure: 1.0, cold: 1.0, bloom: 0.45, halo: 0.45, key: 0.72, dof: 10.0, focusPull: 0.0, beam: 0.0, glow: 0.18, glowHalo: 0.0, gain: 1.0, bottom: 0.0, sat: 1.0, frost: 1.0, vignette: 0.62 },
  { envRot: -0.2, envInt: 0.95, fog: 0.03, exposure: 0.95, cold: 0.8, bloom: 0.30, halo: 0.8, key: 0.8, dof: 0.0, focusPull: 0.0, beam: 0.6, glow: 0.8, glowHalo: 0.7, gain: 0.9, bottom: 0.35, sat: 1.0, frost: 0.32, vignette: 0.6 },
  { envRot: 0.15, envInt: 0.95, fog: 0.012, exposure: 0.88, cold: 0.6, bloom: 0.30, halo: 0.9, key: 0.9, dof: 0.0, focusPull: 0.0, beam: 0.8, glow: 0.8, glowHalo: 0.6, gain: 0.9, bottom: 0.0, sat: 1.02, frost: 0.26, vignette: 0.58 },
];
const LOOK_KEYS = Object.keys(LOOK[0]);

function resolveKeys(src, chip) {
  return src.map((k) => {
    const o = { fov: k.fov, shift: k.shift.slice(), roll: k.roll || 0, drift: k.drift || 0 };
    if (k.orbit) {
      // on an orbit around the machine axis; the target is panned left of the axis so the
      // machine sits right of frame and the type keeps its negative space
      const q = k.orbit, a = q.az * DEG;
      o.pos = [Math.sin(a) * q.r, q.y, Math.cos(a) * q.r];
      const rx = Math.cos(a), rz = -Math.sin(a);
      o.tgt = [-rx * q.pan, q.ay, -rz * q.pan];
    } else if (k.chip) {
      const c = chip.center, n = chip.normal, r = chip.right, q = k.chip;
      o.pos = [c.x + n.x * q.d + r.x * q.side, c.y + q.up, c.z + n.z * q.d + r.z * q.side];
      o.tgt = [c.x - r.x * q.pan, c.y + 0.02, c.z - r.z * q.pan];
    } else if (k.ring) {
      const q = k.ring, a = q.az * DEG;
      o.pos = [Math.sin(a) * q.r, q.y, Math.cos(a) * q.r];
      o.tgt = [0, q.ty, 0];
    } else {
      o.pos = k.pos.slice();
      o.tgt = k.tgt.slice();
    }
    return o;
  });
}

const cr = (p0, p1, p2, p3, t) => {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
};

export function createRig(chip, override) {
  const land = resolveKeys(LAND, chip);
  const port = resolveKeys(PORT, chip);
  if (override) {
    // test hook: replace one key (both sets) with an explicit camera
    for (const set of [land, port]) {
      const k = set[override.c];
      if (!k) continue;
      if (override.pos) k.pos = override.pos.slice();
      if (override.tgt) k.tgt = override.tgt.slice();
      if (override.fov) k.fov = override.fov;
      if (override.shift) k.shift = override.shift.slice();
    }
  }
  const n = land.length;
  const seg = { i: 0, t: 0 };
  function segment(c) {
    c = clamp(c, 0, n - 1);
    let i = Math.min(n - 2, Math.floor(c));
    let t = c - i;
    // a little hold at each chapter: eased local time
    t = lerp(t, smootherstep(0, 1, t), 0.65);
    seg.i = i; seg.t = t;
    return seg;
  }
  return {
    land, port, count: n,
    /* Camera shot at chapter c into out = {pos[3], tgt[3], fov, shift[2], roll, drift}. */
    sample(c, portrait, out) {
      const k = portrait ? port : land;
      const { i, t } = segment(c);
      const a = k[Math.max(0, i - 1)], b = k[i], d = k[i + 1], e = k[Math.min(n - 1, i + 2)];
      for (let j = 0; j < 3; j++) {
        out.pos[j] = cr(a.pos[j], b.pos[j], d.pos[j], e.pos[j], t);
        out.tgt[j] = cr(a.tgt[j], b.tgt[j], d.tgt[j], e.tgt[j], t);
      }
      out.fov = lerp(b.fov, d.fov, t);
      out.shift[0] = lerp(b.shift[0], d.shift[0], t);
      out.shift[1] = lerp(b.shift[1], d.shift[1], t);
      out.roll = lerp(b.roll, d.roll, t);
      out.drift = lerp(b.drift, d.drift, t);
      return out;
    },
    look(c, out) {
      const { i, t } = segment(c);
      const b = LOOK[i], d = LOOK[i + 1];
      for (let j = 0; j < LOOK_KEYS.length; j++) {
        const key = LOOK_KEYS[j];
        out[key] = lerp(b[key], d[key], t);
      }
      return out;
    },
  };
}

/* Is the page in its stacked (mobile / portrait) layout? Mirrors the CSS breakpoint
   (max-width: 760px), (max-aspect-ratio: 4/5). */
export function isPortraitLayout(w, h) {
  return w <= 760 || w / h <= 0.8;
}

/* Fit the shot to the viewport: below the reference aspect we keep the horizontal
   coverage (wider vertical fov), above it we keep the vertical fov and ease the lens
   shift toward the centre so ultra-wide frames do not leave a void in the middle. */
export function frame(camera, shot, W, H, portrait, jitterX = 0, jitterY = 0) {
  const A = W / H;
  const A0 = portrait ? PORT_ASPECT : LAND_ASPECT;
  let fov = shot.fov;
  let sx = shot.shift[0], sy = shot.shift[1];
  if (A < A0) {
    const t = Math.tan((fov * DEG) / 2) * (A0 / A);
    fov = (2 * Math.atan(t)) / DEG;
    if (!portrait) sx += (A0 - A) * 0.12;              // 4:3-ish desktops: a touch more to the right
  } else if (!portrait) {
    sx *= Math.pow(A0 / A, 0.6);
  }
  if (portrait && A > 0.8) sy *= 0.6;                   // small landscape windows in the stacked layout
  camera.fov = clamp(fov, 10, 100);
  camera.aspect = A;
  camera.setViewOffset(W, H, -sx * W + jitterX, sy * H + jitterY, W, H);
  camera.updateProjectionMatrix();
}
