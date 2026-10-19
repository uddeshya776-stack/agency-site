/* Small math helpers and a time-sliced build scheduler. No side effects on import. */

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const smootherstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
};
export const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
export const easeInOutCubic = (t) => {
  t = clamp(t, 0, 1);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/* Frame-rate independent exponential approach. */
export const damp = (a, b, lambda, dt) => b + (a - b) * Math.exp(-lambda * dt);

/* Deterministic PRNG (mulberry32). */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function rnd() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Critically damped spring, exact solution: frame-rate independent, no overshoot.
   state = { x, v }, returns nothing (mutates). omega ~ 2 / settle time. */
export function springStep(state, target, omega, dt) {
  const x0 = state.x - target;
  const e = Math.exp(-omega * dt);
  const tmp = (state.v + omega * x0) * dt;
  state.v = (state.v - omega * tmp) * e;
  state.x = target + (x0 + tmp) * e;
}

/* Yield to the main thread so input and rendering can run between build chunks. */
export function yieldToMain() {
  const s = globalThis.scheduler;
  if (s && typeof s.yield === 'function') return s.yield();
  return new Promise((resolve) => {
    if (typeof MessageChannel === 'function') {
      const ch = new MessageChannel();
      ch.port1.onmessage = () => { ch.port1.close(); resolve(); };
      ch.port2.postMessage(0);
    } else {
      setTimeout(resolve, 0);
    }
  });
}

/* Cooperative build scheduler: call `await slicer.maybeYield()` inside loops. It yields
   when the current slice has run longer than `budget` ms and records the longest slice. */
export function createSlicer({ budget = 12, onProgress } = {}) {
  const now = () => performance.now();
  let sliceStart = now();
  const s = {
    longest: 0,
    longestLabel: '',
    label: '',
    progress: 0,
    slices: 0,
    due() { return now() - sliceStart > budget; },
    async yield(label) {
      const d = now() - sliceStart;
      if (d > s.longest) { s.longest = d; s.longestLabel = label || s.label; }
      s.slices++;
      await yieldToMain();
      sliceStart = now();
    },
    async maybeYield(label) {
      if (now() - sliceStart > budget) await s.yield(label);
    },
    step(label, progress) {
      s.label = label;
      if (progress !== undefined) {
        s.progress = progress;
        if (onProgress) {
          try { onProgress(progress); } catch (e) { /* listener errors must not break the build */ }
        }
      }
    },
    /* close the current slice without yielding (for the final synchronous tail) */
    mark(label) {
      const d = now() - sliceStart;
      if (d > s.longest) { s.longest = d; s.longestLabel = label || s.label; }
    },
  };
  return s;
}
