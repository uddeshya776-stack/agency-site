/* ==========================================================================
   Nadir: page controller
   Lenis smooth scroll + GSAP for the page, a lazily loaded three.js scene for
   the machine. The page reads fine without JavaScript, without WebGL and with
   reduced motion; the scene is an enhancement on top of a poster.
   ========================================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { Director } from './stage/director.js';
import { kelvinAt, formatKelvin, stageNameAt, stretchAt, markerIndexAt } from './hud.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const doc = document.documentElement;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const mq = (query) => window.matchMedia(query);
const params = new URLSearchParams(location.search);

const reduceMotion = mq('(prefers-reduced-motion: reduce)').matches;
const motion = doc.classList.contains('motion') && !reduceMotion;
const finePointer = mq('(hover: hover) and (pointer: fine)').matches;

const run = (name, fn) => {
  try { return fn(); } catch (err) { console.error(`[nadir] ${name}:`, err); return undefined; }
};

doc.classList.add('js-ready');

/* ------------------------------------------------------------ motion tokens */
const M = {
  dur: { ui: 0.6, reveal: 1.0, title: 1.15, hero: 1.4 },
  ease: { enter: 'power3.out', hero: 'expo.out', inout: 'power2.inOut' },
  stagger: 0.08,
};

ScrollTrigger.config({ ignoreMobileResize: true });

/* ------------------------------------------------------------ smooth scroll */
let lenis = null;
if (motion) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, touchMultiplier: 1.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollY = () => (lenis ? lenis.scroll : window.scrollY);
window.__lenis = lenis; // QA hook: lets test scripts jump to a scroll position

/* ------------------------------------------------------------ chapters */
const chapters = $$('[data-chapter]');
const director = new Director(chapters);
let chapter = 0;          // raw, straight from the scroll position
let shownChapter = 0;     // smoothed by the scene when it runs, else equal to raw
ScrollTrigger.addEventListener('refresh', () => director.measure());

const scrollToChapter = (k, onDone, copy) => {
  let y = director.scrollFor(k);
  // On small screens the text sits at the top of its section: don't land with it above the fold.
  if (copy) {
    const pad = parseFloat(getComputedStyle(doc).scrollPaddingTop) || 0;
    y = Math.max(0, Math.min(y, copy.getBoundingClientRect().top + window.scrollY - pad - 16));
  }
  if (lenis) lenis.scrollTo(y, { duration: 1.8, easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2), onComplete: onDone });
  else { window.scrollTo({ top: y, behavior: 'auto' }); if (onDone) onDone(); }
};

const chapterOf = (el) => {
  const section = el && el.closest('[data-chapter]');
  return section ? Number(section.dataset.chapter) : null;
};

/* ------------------------------------------------------------ HUD */
const hud = $('[data-hud]');
const gauge = $('[data-gauge]');
const ticks = $$('.gauge__tick', gauge);
const marker = $('[data-gauge-marker]');
const tempEl = $('[data-temp]');
const unitEl = $('[data-unit]');
const stageEl = $('[data-stage-name]');
const readoutValue = $('.readout__value');
const fill = $('[data-readout-bar]');
let gaugeHeight = 0;

run('gauge', () => {
  ticks.forEach((t, i) => t.style.setProperty('--y', `${(i / (ticks.length - 1)) * 100}%`));
  const measure = () => { gaugeHeight = gauge.getBoundingClientRect().height; };
  measure();
  window.addEventListener('resize', measure);
});

const majorTick = [0, 2, 4, 5, 6];
let lastText = '';
let lastStage = '';
let lastActive = -1;
const varCache = new WeakMap();
const setVar = (el, name, value) => {
  let cache = varCache.get(el);
  if (!cache) varCache.set(el, (cache = {}));
  if (cache[name] === value) return;
  cache[name] = value;
  el.style.setProperty(name, value);
};

let hudQuiet = false;

function renderHud(c) {
  const k = kelvinAt(c);
  const [value, unit] = formatKelvin(k);
  const text = value + unit;
  if (text !== lastText) {
    tempEl.textContent = value;
    unitEl.textContent = unit;
    lastText = text;
  }
  setVar(readoutValue, '--stretch', `${stretchAt(k).toFixed(1)}%`);

  const name = stageNameAt(c, k);
  if (name !== lastStage) { stageEl.textContent = name; lastStage = name; }

  const idx = markerIndexAt(c);
  if (marker && gaugeHeight) setVar(marker, '--marker-y', `${((idx / (ticks.length - 1)) * gaugeHeight).toFixed(1)}px`);
  const active = majorTick[Math.max(0, Math.min(4, Math.round(Math.min(c, 4))))];
  if (active !== lastActive) {
    ticks.forEach((t, i) => t.classList.toggle('is-active', i === active));
    lastActive = active;
  }
  if (fill) setVar(fill, '--fill', Math.min(1, c / 4).toFixed(3));

  const quiet = c > 4.55;
  if (quiet !== hudQuiet) { hud.classList.toggle('is-quiet', quiet); hudQuiet = quiet; }
  setVar(doc, '--shade', Math.max(0, Math.min(1, (c - 4.4) / 0.6)).toFixed(3));
}

run('hud off', () => {
  const opaque = $('[data-opaque]');
  if (!opaque || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(([e]) => hud.classList.toggle('is-off', e.isIntersecting)).observe(opaque);
});

run('gauge jumps', () => {
  $$('[data-jump]', gauge).forEach((btn) => btn.addEventListener('click', () => scrollToChapter(Number(btn.dataset.jump))));
});

/* ------------------------------------------------------------ header and nav */
const header = $('[data-header]');
let lastY = 0;
let menuOpen = false;

const navLinks = $$('.nav__list a');
const navTarget = (c) => (c < 0.5 ? null : c < 4.5 ? '#machine' : c < 5.5 ? '#processor' : c < 6.5 ? '#roadmap' : null);
let lastNav = undefined;

function onScroll(y) {
  header.classList.toggle('is-scrolled', y > 24);
  const keep = menuOpen || header.contains(document.activeElement);
  if (y > lastY + 6 && y > window.innerHeight * 0.6 && !keep) header.classList.add('is-hidden');
  else if (y < lastY - 6 || y < 80) header.classList.remove('is-hidden');
  lastY = y;
}

run('header', () => {
  if (lenis) lenis.on('scroll', (l) => onScroll(l.scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
});

/* ------------------------------------------------------------ menu */
const toggle = $('[data-menu-toggle]');
const menu = $('[data-menu]');
let scene = null;

function setMenu(open, returnFocus = true) {
  if (open === menuOpen) return;
  menuOpen = open;
  toggle.setAttribute('aria-expanded', String(open));
  $('.menu-toggle__label', toggle).textContent = open ? 'Close' : 'Menu';
  [$('main'), $('footer'), hud, $('.skip-link')].forEach((el) => { if (el) el.inert = open; });
  if (open) {
    menu.hidden = false;
    header.classList.remove('is-hidden');
    if (lenis) lenis.stop();
    if (scene) scene.stop();
    if (motion) {
      gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: true });
      gsap.fromTo($$('.menu__list li, .menu__foot', menu), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: M.ease.hero, stagger: 0.06, delay: 0.08 });
    }
    const first = $('a', menu);
    if (first) first.focus({ preventScroll: true });
  } else {
    if (lenis) lenis.start();
    if (scene && !document.hidden) scene.start();
    const done = () => { menu.hidden = true; };
    if (motion) gsap.to(menu, { opacity: 0, duration: 0.35, ease: 'power2.in', overwrite: true, onComplete: done });
    else done();
    if (returnFocus) toggle.focus();
  }
}

run('menu', () => {
  toggle.addEventListener('click', () => setMenu(!menuOpen));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) setMenu(false); });
  mq('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setMenu(false, false); });
});

/* ------------------------------------------------------------ in-page links */
run('anchors', () => {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const target = id === '#top' ? $('#top') : id.length > 1 ? $(id) : null;
    if (!target) return;
    e.preventDefault();
    const wasMenu = menuOpen;
    if (wasMenu) setMenu(false, false);
    const k = chapterOf(target);
    const focusTarget = () => {
      const heading = $('h1, h2', target) || target;
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    };
    if (k !== null) scrollToChapter(k, focusTarget, $('.chapter__copy', target));
    else if (lenis) lenis.scrollTo(target, { duration: 1.6, onComplete: focusTarget });
    else { target.scrollIntoView(); focusTarget(); }
    if (history.replaceState) history.replaceState(null, '', id);
  });
});

/* ------------------------------------------------------------ reveals */
// Each chapter's copy reveals as one beat when it starts to enter: title lines rise
// out of their masks, then the rest follows. Hero plays on load.
const splits = new Map(); // title element -> { lines, revealed }

function revealTitle(el, delay = 0, hero = false) {
  const st = splits.get(el);
  if (!st) return;
  st.revealed = true;
  gsap.to(st.lines, { yPercent: 0, duration: hero ? M.dur.hero : M.dur.title, ease: M.ease.hero, stagger: M.stagger, delay, overwrite: true });
}

function revealCopy(copy, hero = false) {
  if (copy.dataset.revealed) return;
  copy.dataset.revealed = '1';
  const title = $('[data-split]', copy);
  const base = hero ? 0.35 : 0;
  if (title) {
    if (splits.has(title)) revealTitle(title, base, hero);
    else title.dataset.pending = String(base);
  }
  const items = $$('[data-reveal], .chapter__stage', copy).filter((el) => el.hasAttribute('data-reveal'));
  if (items.length) gsap.to(items, { autoAlpha: 1, y: 0, duration: M.dur.reveal, ease: M.ease.enter, stagger: 0.1, delay: base + (hero ? 0.55 : 0.25), overwrite: true });
}

function initReveals() {
  if (!motion) {
    doc.classList.add('split-ready');
    return;
  }

  document.fonts.ready.then(() => {
    run('split', () => {
      $$('[data-split]').forEach((el) => {
        SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line',
          autoSplit: true,
          onSplit: (self) => {
            const st = splits.get(el) || { revealed: false };
            st.lines = self.lines;
            splits.set(el, st);
            if (!st.revealed) gsap.set(self.lines, { yPercent: 125 });
            if (el.dataset.pending !== undefined) {
              const d = Number(el.dataset.pending);
              delete el.dataset.pending;
              revealTitle(el, d, el.closest('.chapter--hero') !== null);
            }
          },
        });
      });
    });
    doc.classList.add('split-ready');
    ScrollTrigger.refresh();
  });

  $$('.chapter').forEach((section) => {
    const copy = $('.chapter__copy', section);
    if (!copy) return;
    if (section.classList.contains('chapter--hero')) {
      revealCopy(copy, true);
      return;
    }
    ScrollTrigger.create({ trigger: copy, start: 'top 90%', once: true, onEnter: () => revealCopy(copy) });
  });

  $$('[data-reveal-group]').forEach((group) => {
    gsap.to(group.children, {
      autoAlpha: 1,
      y: 0,
      duration: M.dur.reveal,
      ease: M.ease.enter,
      stagger: 0.07,
      delay: 0.3,
      scrollTrigger: { trigger: group, start: 'top 92%', once: true, onEnter: () => countUp(group) },
    });
  });

  const timeline = $('[data-timeline]');
  if (timeline) {
    gsap.fromTo(timeline, { '--draw': 0 }, {
      '--draw': 1,
      ease: 'none',
      scrollTrigger: { trigger: timeline, start: 'top 96%', end: 'top 50%', scrub: 0.6 },
    });
    gsap.from($$('.timeline__item', timeline), {
      autoAlpha: 0,
      y: 20,
      duration: M.dur.reveal,
      ease: M.ease.enter,
      stagger: 0.1,
      scrollTrigger: { trigger: timeline, start: 'top 94%', once: true },
    });
  }
}

function countUp(root) {
  $$('[data-count]', root).forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const state = { v: 0 };
    gsap.to(state, {
      v: end,
      duration: 1.4,
      ease: 'power3.out',
      onUpdate: () => { el.textContent = state.v.toFixed(decimals); },
    });
  });
}

run('reveals', initReveals);

/* ------------------------------------------------------------ form */
run('form', () => {
  const form = $('[data-form]');
  if (!form) return;
  const done = $('[data-done]');
  const status = $('[data-status]');
  const submit = $('[data-submit]');
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const announce = (msg) => {
    status.textContent = '';
    if (msg) requestAnimationFrame(() => { status.textContent = msg; });
  };
  form.noValidate = true; // without JS the browser validates the required fields itself

  const fields = [
    { el: $('#f-name'), err: $('#f-name-err'), ok: (v) => v.trim().length > 1 },
    { el: $('#f-email'), err: $('#f-email-err'), ok: (v) => emailOk(v.trim()) },
    { el: $('#f-org'), err: $('#f-org-err'), ok: (v) => v.trim().length > 1 },
  ];

  const check = (f) => {
    const valid = f.ok(f.el.value);
    f.el.setAttribute('aria-invalid', String(!valid));
    if (valid) f.el.removeAttribute('aria-describedby');
    else f.el.setAttribute('aria-describedby', f.err.id);
    f.err.hidden = valid;
    return valid;
  };

  fields.forEach((f) => {
    f.el.addEventListener('blur', () => { if (f.el.value) check(f); });
    f.el.addEventListener('input', () => { if (f.el.getAttribute('aria-invalid') === 'true') check(f); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = fields.filter((f) => !check(f));
    if (bad.length) {
      announce(bad.length === 1 ? 'One field needs attention.' : `${bad.length} fields need attention.`);
      bad[0].el.focus();
      return;
    }
    announce('Sending your request.');
    submit.setAttribute('aria-busy', 'true');
    // Demo: no backend. Swap this timeout for a fetch() to Formspree, a CRM or your own endpoint.
    setTimeout(() => {
      submit.removeAttribute('aria-busy');
      form.hidden = true;
      done.hidden = false;
      if (motion) gsap.from(done, { opacity: 0, y: 16, duration: 0.8, ease: M.ease.enter });
      done.focus({ preventScroll: true });
      announce('Request received. This is a concept site, so nothing was sent.');
      ScrollTrigger.refresh();
    }, 900);
  });
});

/* ------------------------------------------------------------ stills (static mode) */
const stage = $('[data-stage]');
const still = $('[data-still]');
const poster = $('[data-poster]');
const PORTRAIT_STILLS = new Set([0, 4, 7]);
let avif = false;
let staticMode = false;
let shownStill = -1;

const avifCheck = new Promise((resolve) => {
  const img = new Image();
  img.onload = () => resolve(img.width > 0);
  img.onerror = () => resolve(false);
  img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
});
avifCheck.then((ok) => { avif = ok; });

// Portrait screens get a portrait render where one exists; otherwise the landscape
// render is cropped around the machine, which sits right of centre.
function stillFor(k) {
  const portrait = mq('(max-aspect-ratio: 4/5)').matches;
  const ext = avif ? 'avif' : 'webp';
  if (portrait && PORTRAIT_STILLS.has(k)) return { url: `assets/img/poster-${k}-portrait-1080.${ext}`, pos: '' };
  const wide = window.innerWidth * Math.min(2, window.devicePixelRatio || 1) > 1700 ? 1920 : 1280;
  return { url: `assets/img/poster-${k}-${wide}.${ext}`, pos: portrait ? '64% 50%' : '' };
}

function showStill(c) {
  const k = Math.max(0, Math.min(7, Math.round(c)));
  if (k === shownStill) return;
  shownStill = k;
  if (k === 0) { still.classList.remove('is-on'); return; }
  const { url, pos } = stillFor(k);
  const next = new Image();
  next.decoding = 'async';
  next.src = url;
  next.onload = () => {
    if (shownStill !== k) return;
    still.style.objectPosition = pos;
    still.src = next.src;
    still.hidden = false;
    requestAnimationFrame(() => still.classList.add('is-on'));
  };
}

function enterStaticMode(reason) {
  if (staticMode) return;
  staticMode = true;
  if (reason) console.info(`[nadir] static mode: ${reason}`);
  stage.classList.remove('is-live');
  doc.classList.remove('want-3d');
  if (scene) { try { scene.dispose(); } catch (e) { /* already gone */ } scene = null; }
  showStill(chapter);
}

/* ------------------------------------------------------------ callouts */
const callouts = $$('.callout').map((el) => ({ el, anchor: el.dataset.anchor, on: Number(el.dataset.on), left: el.classList.contains('callout--left'), shown: false }));
const calloutsAllowed = () => window.innerWidth >= 1024 && finePointer !== null;
const projected = { x: 0, y: 0, visible: false };

function renderCallouts(c) {
  if (!scene || !calloutsAllowed()) return;
  for (const co of callouts) {
    const near = Math.abs(c - co.on) < 0.22;
    let show = false;
    if (near) {
      scene.project(co.anchor, projected);
      show = projected.visible;
      if (show) {
        const x = projected.x.toFixed(1);
        const y = projected.y.toFixed(1);
        co.el.style.transform = co.left
          ? `translate3d(${x}px, ${y}px, 0) translate(-100%, -50%)`
          : `translate3d(${x}px, ${y}px, 0) translate(0, -50%)`;
      }
    }
    if (show !== co.shown) { co.el.classList.toggle('is-on', show); co.shown = show; }
  }
}

/* ------------------------------------------------------------ the frame loop (page side) */
function tick() {
  chapter = director.chapterAt(scrollY());
  if (scene) scene.setChapter(chapter);
  else shownChapter = chapter;

  if (!scene) {
    renderHud(chapter);
    if (staticMode) showStill(chapter);
  }

  const nav = navTarget(shownChapter);
  if (nav !== lastNav) {
    navLinks.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === nav)));
    lastNav = nav;
  }
}
gsap.ticker.add(tick);

/* ------------------------------------------------------------ scene boot */
function webglAvailable() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    return true;
  } catch (e) {
    return false;
  }
}

async function bootScene() {
  const canvas = $('[data-canvas]');
  const mod = await import('./scene/index.js');
  const s = await mod.createScene({ canvas, reducedMotion: !motion });
  if (staticMode) { s.dispose(); return; }
  scene = s;
  window.__scene = s; // handy for QA from the console

  s.onFrame((c) => {
    shownChapter = c;
    renderHud(c);
    renderCallouts(c);
  });

  canvas.addEventListener('contextlost', () => enterStaticMode('WebGL context lost'));

  s.setChapter(chapter);
  s.start();
  await s.firstFrame;
  stage.classList.add('is-live');
  if (motion && chapter < 0.35) s.intro();

  if (finePointer) {
    window.addEventListener('pointermove', (e) => {
      s.setPointer((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    }, { passive: true });
  }

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (scene) scene.resize(); }, 120);
  };
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);

  document.addEventListener('visibilitychange', () => {
    if (!scene) return;
    if (document.hidden) scene.stop();
    else if (!menuOpen) scene.start();
  });
}

const want3D = motion && !params.has('static') && webglAvailable();

if (!want3D) {
  avifCheck.then(() => enterStaticMode(motion ? 'WebGL 2 unavailable' : 'reduced motion'));
} else {
  const start = () => {
    const go = () => bootScene().catch((err) => {
      console.error('[nadir] scene failed:', err);
      enterStaticMode('scene failed');
    });
    if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 1200 });
    else setTimeout(go, 200);
  };
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

/* ------------------------------------------------------------ late layout changes */
window.addEventListener('load', () => ScrollTrigger.refresh());
renderHud(0);
