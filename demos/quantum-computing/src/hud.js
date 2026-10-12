/* The instrument panel's maths: chapter (0..7) -> stage temperature, label,
   readout width and gauge position. No three.js here, so it loads with the page. */

// Temperature at each chapter, in kelvin. Between chapters we interpolate in log space,
// which is how a fridge cools: fast at first, then ever slower.
const KELVIN = [300, 4, 0.1, 0.0098, 0.0098, 0.0098, 0.0098, 0.0098];
const LOG_MAX = Math.log10(300);
const LOG_MIN = Math.log10(0.0098);

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function kelvinAt(c) {
  c = clamp(c, 0, KELVIN.length - 1);
  const i = Math.min(KELVIN.length - 2, Math.floor(c));
  const f = c - i;
  return Math.exp(Math.log(KELVIN[i]) * (1 - f) + Math.log(KELVIN[i + 1]) * f);
}

const out = ['', ''];
export function formatKelvin(k) {
  if (k >= 1) {
    out[0] = k.toFixed(k >= 10 ? 1 : 2);
    out[1] = 'K';
  } else {
    const mk = k * 1000;
    out[0] = mk.toFixed(mk >= 100 ? 0 : 1);
    out[1] = 'mK';
  }
  return out;
}

export function stageNameAt(c, k) {
  if (c >= 3.6) return 'Nadir Q-25 processor';
  if (k > 120) return 'Room temperature';
  if (k > 10) return 'First pulse-tube stage';
  if (k > 1.6) return 'Second pulse-tube stage';
  if (k > 0.3) return 'Still';
  if (k > 0.03) return 'Cold plate';
  return 'Mixing chamber';
}

// Hot numerals are wide, cold ones condensed: font-stretch from 125% down to 75%.
export function stretchAt(k) {
  const t = clamp((Math.log10(k) - LOG_MIN) / (LOG_MAX - LOG_MIN), 0, 1);
  return 75 + 50 * t;
}

// Gauge ticks: 300 K, 50 K, 4 K, 800 mK, 100 mK, 10 mK, QPU (indices 0..6).
// Chapters land on the major ticks; the minor ones are passed on the way down.
const LANDING = [0, 2, 4, 5, 6];
export function markerIndexAt(c) {
  c = clamp(c, 0, 4);
  const i = Math.min(3, Math.floor(c));
  const f = c - i;
  return LANDING[i] + (LANDING[i + 1] - LANDING[i]) * f;
}
