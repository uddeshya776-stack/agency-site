/* The fixed 3D stage behind the hero and the collection. Loads the bottle viewer lazily;
   until it is ready (or if WebGL is unavailable) a still render stands in and follows the
   selected scent. */
import { byId } from './data.js';

export function createStage({ el, motion, isTouch }) {
  const canvas = el.querySelector('[data-stage-canvas]');
  const poster = el.querySelector('[data-stage-poster]');
  let viewer = null, failed = false;
  let progress = 0, scent = 'ambre', visible = true, active = true, px = 0, py = 0;

  function setPoster(id) {
    if (viewer) return;
    const src = poster.querySelector('source'), img = poster.querySelector('img');
    src.srcset = `assets/img/card-${id}-960.avif`;
    img.src = `assets/img/card-${id}-960.webp`;
  }
  function running() { return visible && active && !document.hidden; }
  function sync() {
    el.classList.toggle('is-hidden', !(visible && active));
    if (!viewer) return;
    if (running()) viewer.start(); else viewer.stop();
  }
  document.addEventListener('visibilitychange', sync);

  async function boot() {
    if (viewer || failed) return;
    const qs = new URLSearchParams(location.search);
    if (qs.has('no3d')) { failed = true; return; }
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) throw new Error('no webgl2');
      const { createBottleViewer } = await import('./viewer/index.js');
      const v = await createBottleViewer({ canvas, mode: 'hero', scent, reducedMotion: !motion });
      viewer = v;
      v.setTheme?.('dark');
      v.setProgress(progress);
      v.setScent(scent);
      v.resize();
      el.classList.add('is-live');
      sync();
      if (running()) v.intro?.();
      window.addEventListener('resize', () => viewer && viewer.resize());
      canvas.addEventListener('webglcontextlost', () => el.classList.remove('is-live'));
      canvas.addEventListener('webglcontextrestored', () => el.classList.add('is-live'));
    } catch (err) {
      failed = true;
      console.warn('[ilvere] 3D stage unavailable, using stills:', err && err.message);
    }
  }

  return {
    boot() {
      const go = () => boot();
      if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 1200 }); else setTimeout(go, 200);
    },
    hero(p) { progress = p; if (viewer) viewer.setProgress(p); },
    scent(id) {
      if (id === scent) return;
      scent = id;
      if (viewer) viewer.setScent(id); else setPoster(id);
    },
    pointer(x, y) { px = x; py = y; if (viewer && !isTouch) viewer.setPointer?.(x, y); },
    setVisible(v) { if (v === visible) return; visible = v; sync(); },
    setActive(v) { if (v === active) return; active = v; sync(); },
    get viewer() { return viewer; },
    get scentId() { return byId(scent).id; },
  };
}
