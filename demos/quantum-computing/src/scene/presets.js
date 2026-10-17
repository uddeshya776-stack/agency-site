/* Scene detail per quality tier (tier names come from src/stage/quality.js).
   high: DOF + half-res bloom; mid: no DOF, quarter-res bloom; low: no DOF, no bloom,
   no MSAA (FXAA in the final pass), fewer cables and segments. 'still' is the poster
   renderer: everything at maximum, no grain. */

const BASE = {
  plateSegs: 160, tex: 1024, chipTex: 2048, pcbTex: 1024, env: 256,
  nOuter: 10, nInner: 6, radial: 6, density: 0.75, aniso: 0.55, rodSegs: 16,
  bellows: true, wirebonds: 18, airbridges: 1, clamps: true, ties: true, labels: 22,
  dofTaps: 14, bloomLevels: 5, bloomDiv: 2, msaa: 4, fxaa: false,
  dust: 420, frost: 260, frostOctaves: 2, grain: 0.032,
};

export const SCENE_PRESETS = {
  high: { ...BASE },
  mid: {
    ...BASE,
    plateSegs: 112, chipTex: 1024, pcbTex: 512, env: 128,
    nOuter: 8, nInner: 5, radial: 5, density: 0.58, aniso: 0.3, rodSegs: 12,
    wirebonds: 12, airbridges: 0.5, labels: 12,
    dofTaps: 0, bloomLevels: 4, bloomDiv: 4, msaa: 4,
    dust: 240, frost: 150, frostOctaves: 1, grain: 0.03,
  },
  low: {
    ...BASE,
    plateSegs: 72, tex: 512, chipTex: 1024, pcbTex: 512, env: 128,
    nOuter: 6, nInner: 3, radial: 4, density: 0.4, aniso: 0, rodSegs: 8,
    bellows: false, wirebonds: 8, airbridges: 0, ties: false, labels: 0,
    dofTaps: 0, bloomLevels: 0, bloomDiv: 4, msaa: 0, fxaa: true,
    dust: 120, frost: 90, frostOctaves: 1, grain: 0.028,
  },
  still: {
    ...BASE,
    plateSegs: 224, env: 512, radial: 8, density: 1.0, rodSegs: 24,
    wirebonds: 22, labels: 26,
    dofTaps: 32, bloomLevels: 6, bloomDiv: 2, msaa: 4,
    dust: 420, frost: 260, grain: 0,
  },
};

export function presetFor(tierName, overrides) {
  const p = { ...(SCENE_PRESETS[tierName] || SCENE_PRESETS.mid) };
  if (overrides) Object.assign(p, overrides);
  return p;
}
