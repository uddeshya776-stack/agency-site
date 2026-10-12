/* Ilvère: page logic. Smooth scroll, intro, the live 3D stage (hero + collection),
   shop grid, scent finder, product page, bag drawer and a demo checkout.
   Routes: #/ home, #/product/<id>, #/checkout. Section links (#shop…) scroll on the home view. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { SCENTS, DISCOVERY, QUIZ, byId, euro, picture } from './data.js';
import { bag } from './store.js';
import { createStage } from './stage.js';
import { renderProduct } from './product.js';
import { renderCheckout } from './checkout.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const motion = root.classList.contains('motion');
const isTouch = matchMedia('(hover: none)').matches;

/* ------------------------------------------------------------------ smooth scroll */
let lenis = null;
if (motion) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollTo = (target, opts = {}) => {
  if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4), ...opts });
  else (typeof target === 'number' ? window.scrollTo(0, target) : target.scrollIntoView());
};
const lockScroll = (on) => { if (lenis) on ? lenis.stop() : lenis.start(); document.body.style.overflow = on ? 'hidden' : ''; };

/* ------------------------------------------------------------------ toast + fly to bag */
const toastEl = $('[data-toast]');
let toastT = 0;
export function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('is-on'), 2600);
}
const bagBtn = $('[data-bag-open]');
function flyToBag(fromEl, color = '#C8A76A') {
  if (!fromEl || !motion) return;
  const a = fromEl.getBoundingClientRect();
  const b = bagBtn.querySelector('.bag-btn__count').getBoundingClientRect();
  const dot = document.createElement('i');
  dot.className = 'fly';
  dot.style.background = color;
  document.body.appendChild(dot);
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + b.width / 2, y1 = b.top + b.height / 2;
  const o = { t: 0 };
  gsap.to(o, {
    t: 1, duration: 0.9, ease: 'power2.inOut',
    onUpdate() {
      const t = o.t, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * 140;
      dot.style.transform = `translate(${x}px, ${y}px) scale(${1 - t * 0.4})`;
    },
    onComplete() { dot.remove(); bagBtn.classList.remove('bump'); void bagBtn.offsetWidth; bagBtn.classList.add('bump'); },
  });
  dot.style.left = '0'; dot.style.top = '0';
}

/* ------------------------------------------------------------------ add to bag (shared) */
export function addToBag({ id, size = 50, engraving = '', from }) {
  bag.add({ id, size, engraving });
  const s = byId(id);
  flyToBag(from, s ? s.liquid : '#14110F');
  const name = s ? `${s.name}, ${size} ml` : DISCOVERY.name;
  toast(`${name} added to your bag`);
  setTimeout(() => openBag(), motion ? 650 : 0);
}

/* ------------------------------------------------------------------ bag drawer */
const drawer = $('[data-drawer]');
const panel = $('[data-drawer-panel]');
let lastFocus = null;
function openBag() {
  if (!drawer.hidden && drawer.classList.contains('is-open')) return;
  lastFocus = document.activeElement;
  renderBag();
  drawer.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add('is-open')));
  lockScroll(true);
  setTimeout(() => panel.focus(), 50);
}
function closeBag() {
  drawer.classList.remove('is-open');
  lockScroll(false);
  setTimeout(() => { drawer.hidden = true; }, 700);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
bagBtn.addEventListener('click', openBag);
$$('[data-bag-close]').forEach((b) => b.addEventListener('click', closeBag));
drawer.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBag();
  if (e.key === 'Tab') {
    const f = $$('button, a[href], input', panel).filter((el) => !el.disabled && el.offsetParent);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

function thumb(id) {
  const base = id === 'discovery' ? 'discovery' : `card-${id}`;
  return `<img src="assets/img/${base}-640.webp" alt="" width="640" height="800" loading="lazy">`;
}
export function lineItemHTML(it, { controls = true } = {}) {
  const s = byId(it.id);
  const name = s ? s.name : DISCOVERY.name;
  const meta = s
    ? `<span>Extrait de parfum · ${it.size} ml</span>${it.engraving ? `<span>Engraved: <em>${esc(it.engraving)}</em></span>` : ''}`
    : '<span>5 × 2 ml · credited on your first bottle</span>';
  return `<div class="line-item" data-key="${esc(it.key)}">
    <div class="line-item__img">${thumb(it.id)}</div>
    <div><h3>${name}</h3><div class="line-item__meta">${meta}${controls ? '' : `<span>Qty ${it.qty}</span>`}</div>
      ${controls ? `<div class="qty"><button type="button" data-qty="-1" aria-label="One less">−</button><span>${it.qty}</span><button type="button" data-qty="1" aria-label="One more">+</button></div>` : ''}
    </div>
    <div class="line-item__right"><span class="line-item__price">${euro(bag.priceOf(it) * it.qty)}</span>${controls ? '<button type="button" class="remove" data-remove>Remove</button>' : ''}</div>
  </div>`;
}
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function renderBag() {
  const st = bag.get();
  const n = bag.count();
  $('[data-bag-count-title]').textContent = n ? `(${n})` : '';
  const toFree = bag.toFree();
  $('[data-ship]').innerHTML = n
    ? `${toFree > 0 ? `You are <b>${euro(toFree)}</b> away from complimentary delivery.` : 'Your order ships <b>free</b>, wrapped and engraved by hand.'}
       <div class="ship-bar"><i style="transform: scaleX(${Math.min(1, bag.subtotal() / 150)})"></i></div>`
    : 'Free delivery on orders over €150.';
  const body = $('[data-bag-body]');
  if (!n) {
    body.innerHTML = `<div class="empty"><h3>Your bag is empty.</h3><p>Perhaps start with the Discovery Set.</p><button class="btn btn--dark" type="button" data-empty-shop>Shop the collection</button></div>`;
    $('[data-bag-foot]').innerHTML = '';
    $('[data-empty-shop]', body).addEventListener('click', () => { closeBag(); goSection('#shop'); });
    return;
  }
  body.innerHTML = st.items.map((it) => lineItemHTML(it)).join('') + `
    <div class="samples"><h3>Choose 2 complimentary samples <span>${st.samples.length}/2</span></h3>
      <div class="samples__list">${SCENTS.map((s) => {
        const on = st.samples.includes(s.id);
        return `<button type="button" class="chip" data-sample="${s.id}" aria-pressed="${on}" ${!on && st.samples.length >= 2 ? 'disabled' : ''}><i style="background:${s.liquid}"></i>${s.name}</button>`;
      }).join('')}</div></div>`;
  const ship = bag.shipping();
  $('[data-bag-foot]').innerHTML = `
    <div class="sum-row"><span>Subtotal</span><span>${euro(bag.subtotal())}</span></div>
    <div class="sum-row"><span>Delivery</span><span>${ship ? euro(ship) : 'Complimentary'}</span></div>
    <div class="sum-row sum-row--total"><span>Total</span><span>${euro(bag.subtotal() + ship)}</span></div>
    <a class="btn btn--dark btn--block" href="#/checkout" data-checkout>Checkout</a>
    <small>Taxes included. Engraving and gift wrapping are always free.</small>`;
  $('[data-checkout]').addEventListener('click', () => closeBag());
}
$('[data-bag-body]').addEventListener('click', (e) => {
  const li = e.target.closest('[data-key]');
  const q = e.target.closest('[data-qty]');
  if (li && q) {
    const it = bag.get().items.find((i) => i.key === li.dataset.key);
    if (it) bag.setQty(it.key, it.qty + Number(q.dataset.qty));
  } else if (li && e.target.closest('[data-remove]')) bag.remove(li.dataset.key);
  const sm = e.target.closest('[data-sample]');
  if (sm) bag.toggleSample(sm.dataset.sample);
});
function syncBagButton() {
  const n = bag.count();
  $('[data-bag-count]').textContent = n;
  bagBtn.classList.toggle('has-items', n > 0);
  bagBtn.setAttribute('aria-label', `Open bag, ${n} item${n === 1 ? '' : 's'}`);
}
bag.on((st, ch) => {
  syncBagButton();
  if (!drawer.hidden) {
    const y = $('[data-bag-body]').scrollTop;
    renderBag();
    $('[data-bag-body]').scrollTop = y;
    if (ch.type !== 'add') $$('.line-item', drawer).forEach((el) => { el.style.animation = 'none'; });
  }
});
syncBagButton();

/* ------------------------------------------------------------------ announce bar */
(() => {
  const ps = $$('.announce__track p');
  let i = 0;
  ps[0].classList.add('is-on');
  if (!motion) return;
  setInterval(() => {
    ps[i].classList.remove('is-on'); ps[i].classList.add('is-off');
    const prev = ps[i];
    setTimeout(() => prev.classList.remove('is-off'), 900);
    i = (i + 1) % ps.length;
    ps[i].classList.add('is-on');
  }, 4200);
})();

/* ------------------------------------------------------------------ header states + menu */
const header = $('[data-header]');
let lastY = 0;
function updateHeader() {
  const y = window.scrollY;
  const view = currentView;
  header.classList.toggle('is-stuck', y > 30 || view !== 'home');
  let light = view !== 'home';
  if (view === 'home') {
    // light header whenever a light section sits under it
    const probe = document.elementsFromPoint(window.innerWidth / 2, 40).find((el) => el.matches?.('.section, .lineup, .site-footer, .hero, .collection'));
    light = !!probe && !probe.matches('.section--dark, .site-footer, .hero, .collection');
  }
  header.classList.toggle('is-light', light);
  const hide = y > 400 && y > lastY + 4 && !document.body.classList.contains('menu-open');
  if (hide) header.classList.add('is-hidden');
  else if (y < lastY - 4 || y < 400) header.classList.remove('is-hidden');
  lastY = y;
}
window.addEventListener('scroll', updateHeader, { passive: true });

const menuBtn = $('[data-menu-btn]');
const menu = $('[data-menu]');
function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if (open) {
    menu.hidden = false;
    lockScroll(true);
    gsap.fromTo($$('nav a', menu), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.06, duration: 0.8, ease: 'expo.out' });
  } else { menu.hidden = true; lockScroll(false); }
}
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));

/* section links: scroll on home, or go home first */
function goSection(hash) {
  if (document.body.classList.contains('menu-open')) setMenu(false);
  const target = $(hash);
  if (!target) return;
  if (currentView !== 'home') {
    pendingSection = hash;
    location.hash = '#/';
    return;
  }
  // the collection is a long pinned section: land at its start
  scrollTo(target, { offset: hash === '#collection' || hash === '#top' ? 0 : -20 });
}
let pendingSection = null;
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.startsWith('#/')) { if (document.body.classList.contains('menu-open')) setMenu(false); return; }
  if (href.length > 1) { e.preventDefault(); goSection(href); }
});
$('[data-home]').addEventListener('click', (e) => {
  if (currentView === 'home') { e.preventDefault(); scrollTo(0); history.replaceState(null, '', '#/'); }
});

/* ------------------------------------------------------------------ shop grid */
function cardHTML(s, { sizes = '(min-width: 900px) 31vw, 50vw' } = {}) {
  return `<article class="card">
    <a class="card__media" href="#/product/${s.id}" aria-label="${s.name}">
      ${picture(`card-${s.id}`, { sizes, alt: `${s.name} bottle on its set`, cls: 'card__main' })}
      ${picture(`detail-${s.id}`, { sizes, alt: '', cls: 'card__alt' })}
    </a>
    <button type="button" class="card__quick" data-quick="${s.id}"><span>Add to bag · 50 ml</span><span>${euro(s.price[50])}</span></button>
    <div class="card__info">
      <h3 class="card__name"><a href="#/product/${s.id}"><span class="card__swatch" style="background:${s.liquid}"></span>${s.name}</a></h3>
      <span class="card__price">from ${euro(s.price[50])}</span>
      <p class="card__mood">${s.mood}</p>
    </div>
  </article>`;
}
export { cardHTML };
const grid = $('[data-grid]');
grid.innerHTML = SCENTS.map((s, i) => cardHTML(s).replace('<article class="card">', `<article class="card">${i === 0 ? '<span class="card__tag">Bestseller</span>' : i === 3 ? '<span class="card__tag">New batch</span>' : ''}`)).join('') + `
  <article class="card card--set">
    <a class="card__media" href="#discovery" aria-label="The Discovery Set">
      ${picture('discovery', { sizes: '(min-width: 900px) 31vw, 50vw', alt: 'The Discovery Set', cls: 'card__main' })}
    </a>
    <button type="button" class="card__quick" data-quick="discovery"><span>Add to bag</span><span>${euro(DISCOVERY.price)}</span></button>
    <div class="card__info"><h3 class="card__name"><a href="#discovery">The Discovery Set</a></h3><span class="card__price">${euro(DISCOVERY.price)}</span><p class="card__mood">${DISCOVERY.line}</p></div>
  </article>`;
document.addEventListener('click', (e) => {
  const q = e.target.closest('[data-quick]');
  if (q) addToBag({ id: q.dataset.quick, size: 50, from: q });
  const d = e.target.closest('[data-add-discovery]');
  if (d) addToBag({ id: 'discovery', from: d });
});

/* ------------------------------------------------------------------ scent finder */
(() => {
  const card = $('[data-finder-card]');
  let step = 0, scores = {};
  function progress() { return `<div class="finder__progress">${QUIZ.map((_, i) => `<i class="${i < step ? 'is-done' : ''}"></i>`).join('')}</div>`; }
  function show() {
    if (step < QUIZ.length) {
      const q = QUIZ[step];
      card.innerHTML = `${progress()}<div class="finder__step"><p class="eyebrow">Question ${step + 1} of ${QUIZ.length}</p>
        <h3 class="finder__q">${q.q}</h3>
        <div class="finder__answers">${q.a.map((a, i) => `<button type="button" data-a="${i}"><small>0${i + 1}</small>${a.t}</button>`).join('')}</div></div>`;
    } else {
      const best = SCENTS.slice().sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0))[0];
      card.innerHTML = `${progress()}<div class="finder__result">
        <a class="card__media" href="#/product/${best.id}">${picture(`card-${best.id}`, { sizes: '260px', alt: best.name })}</a>
        <div><p class="eyebrow">Your scent</p><h3>${best.name}</h3><p>${best.line} ${best.mood}.</p>
          <div class="actions"><button class="btn btn--dark" type="button" data-quick="${best.id}">Add · ${euro(best.price[50])}</button><a class="btn btn--ghost" href="#/product/${best.id}">Discover</a></div>
          <button class="finder__restart" type="button" data-restart>Start again</button></div></div>`;
    }
    if (motion) gsap.from(card.children[1], { opacity: 0, y: 24, duration: 0.8, ease: 'expo.out' });
  }
  card.addEventListener('click', (e) => {
    const b = e.target.closest('[data-a]');
    if (b) {
      const a = QUIZ[step].a[Number(b.dataset.a)];
      Object.entries(a.s).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });
      step++; show();
    }
    if (e.target.closest('[data-restart]')) { step = 0; scores = {}; show(); }
  });
  show();
})();

/* ------------------------------------------------------------------ newsletter */
$('[data-news-form]').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.currentTarget, msg = $('[data-news-msg]'), v = f.email.value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  msg.classList.toggle('is-error', !ok);
  msg.textContent = ok ? 'Thank you. Your first letter arrives with the next batch.' : 'Please enter a valid email address.';
  if (ok) f.reset();
});

/* ------------------------------------------------------------------ home scroll choreography */
let stage = null;
function splitReveal(scope = document) {
  if (!motion) return;
  $$('[data-split]', scope).forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    const st = new SplitText(el, { type: 'lines', linesClass: 'line', mask: 'lines' });
    gsap.from(st.lines, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
}
function homeMotion() {
  splitReveal($('[data-view="home"]'));
  if (!motion) return;
  $$('[data-reveal-img]').forEach((el) => {
    gsap.to(el, { clipPath: 'inset(0% 0% 0% 0% round 4px)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
    gsap.to(el.querySelector('img'), { scale: 1, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
  });
  const pm = $('[data-parallax] picture');
  gsap.fromTo(pm, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '[data-parallax]', start: 'top bottom', end: 'bottom top', scrub: true } });
  $$('.card', grid).forEach((c, i) => gsap.from(c, { opacity: 0, y: 60, duration: 1.2, ease: 'expo.out', delay: (i % 3) * 0.08, scrollTrigger: { trigger: c, start: 'top 92%' } }));
  $$('.voice').forEach((c, i) => gsap.from(c, { opacity: 0, y: 40, duration: 1.1, ease: 'expo.out', delay: i * 0.07, scrollTrigger: { trigger: c, start: 'top 92%' } }));
  $$('[data-count-to]').forEach((el) => {
    const to = Number(el.dataset.countTo), o = { v: 0 };
    gsap.to(o, { v: to, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' }, onUpdate: () => { el.textContent = Math.round(o.v); } });
  });
}

/* hero copy + captions follow the hero scroll progress */
function heroTimeline() {
  const hero = $('[data-hero]');
  const copy = $$('[data-hero-eyebrow], [data-hero-title], [data-hero-lede], [data-hero-ctas]');
  const caps = $$('[data-caption]');
  const cue = $('[data-hero-scroll]');
  const windows = [[0.2, 0.44], [0.46, 0.7], [0.72, 0.96]];
  ScrollTrigger.create({
    trigger: hero, start: 'top top', end: 'bottom bottom',
    onUpdate(self) {
      const p = self.progress;
      if (stage) stage.hero(p);
      const fade = 1 - gsap.utils.clamp(0, 1, (p - 0.03) / 0.14);
      copy.forEach((el, i) => { el.style.opacity = fade; el.style.transform = `translateY(${(1 - fade) * -(30 + i * 14)}px)`; el.style.pointerEvents = fade < 0.5 ? 'none' : ''; });
      cue.style.opacity = fade;
      caps.forEach((c, i) => {
        const [a, b] = windows[i];
        const t = gsap.utils.clamp(0, 1, Math.min((p - a) / 0.06, (b - p) / 0.06));
        c.style.opacity = t;
        c.style.transform = `translateY(${(1 - t) * (p < (a + b) / 2 ? 24 : -24)}px)`;
      });
    },
  });
}

/* collection: five scents over one long pinned section */
function collection() {
  const names = $('[data-col-names]');
  const detail = $('[data-col-detail]');
  const dots = $('[data-col-dots]');
  const idx = $('[data-col-index]');
  names.innerHTML = SCENTS.map((s) => {
    const [a, ...rest] = s.name.split(' ');
    return `<p class="col-name" aria-hidden="true">${a} <em>${rest.join(' ')}</em></p>`;
  }).join('');
  detail.innerHTML = SCENTS.map((s) => `<div class="col-detail">
      <p class="col-detail__mood">${s.line} ${s.mood}.</p>
      <dl class="notes-row"><div><dt>Top</dt><dd>${s.notes.top.join(', ')}</dd></div><div><dt>Heart</dt><dd>${s.notes.heart.join(', ')}</dd></div><div><dt>Base</dt><dd>${s.notes.base.join(', ')}</dd></div></dl>
      <div class="col-detail__buy"><span class="col-detail__price">${euro(s.price[50])}<small>50 ml</small></span>
        <button class="btn btn--light" type="button" data-quick="${s.id}">Add to bag</button>
        <a class="link-u" href="#/product/${s.id}" style="font:500 11px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase">Discover</a></div>
    </div>`).join('');
  dots.innerHTML = SCENTS.map((s, i) => `<li><button type="button" data-dot="${i}" aria-label="${s.name}"><span>${s.name}</span><i></i></button></li>`).join('');
  const nameEls = $$('.col-name', names), detEls = $$('.col-detail', detail), dotEls = $$('button', dots);
  const sec = $('[data-collection]');
  let cur = -1;
  // prepare letters for the name swap
  const chars = nameEls.map((el) => {
    if (!motion) return [];
    const st = new SplitText(el, { type: 'chars', charsClass: 'ch' });
    return st.chars;
  });
  gsap.set(nameEls, { autoAlpha: 0 });
  gsap.set(detEls, { autoAlpha: 0 });
  function set(i, instant) {
    if (i === cur) return;
    const prev = cur;
    cur = i;
    const s = SCENTS[i];
    root.style.setProperty('--accent', s.liquid);
    idx.textContent = s.no;
    dotEls.forEach((d, k) => d.classList.toggle('is-on', k === i));
    if (stage) stage.scent(s.id);
    const dir = prev < 0 || i > prev ? 1 : -1;
    if (prev >= 0) {
      gsap.to(nameEls[prev], { autoAlpha: 0, duration: 0.5, delay: 0.25, overwrite: true });
      if (chars[prev].length) gsap.to(chars[prev], { yPercent: -100 * dir, opacity: 0, duration: 0.6, ease: 'power3.in', stagger: 0.015, overwrite: true });
      gsap.to(detEls[prev], { autoAlpha: 0, y: -16 * dir, duration: 0.45, ease: 'power2.in', overwrite: true });
    }
    gsap.set(nameEls[i], { autoAlpha: 1 });
    if (chars[i].length && !instant) gsap.fromTo(chars[i], { yPercent: 100 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.025, delay: 0.25, overwrite: true });
    gsap.fromTo(detEls[i], { autoAlpha: 0, y: 20 * dir }, { autoAlpha: 1, y: 0, duration: instant ? 0 : 1, ease: 'expo.out', delay: instant ? 0 : 0.45, overwrite: true });
  }
  set(0, true);
  ScrollTrigger.create({
    trigger: sec, start: 'top top', end: 'bottom bottom',
    onUpdate(self) { set(Math.min(SCENTS.length - 1, Math.floor(self.progress * SCENTS.length * 0.999)), false); },
  });
  dotEls.forEach((d, i) => d.addEventListener('click', () => {
    const top = sec.offsetTop, h = sec.offsetHeight - window.innerHeight;
    scrollTo(top + h * ((i + 0.5) / SCENTS.length), { duration: 1.2 });
  }));
  return sec;
}

/* ------------------------------------------------------------------ intro */
function intro() {
  return new Promise((resolve) => {
    const pre = $('[data-preloader]');
    if (!root.classList.contains('is-intro')) { pre.remove(); resolve(); return; }
    try { sessionStorage.setItem('ilvere-intro', '1'); } catch (e) { /* ignore */ }
    lockScroll(true);
    const tl = gsap.timeline({ onComplete: () => { pre.remove(); root.classList.remove('is-intro'); lockScroll(false); } });
    tl.to($$('[data-preloader-word] span'), { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'expo.out', stagger: 0.07 })
      .to('[data-progress]', { scaleX: 1, duration: 1.3, ease: 'power2.inOut' }, 0.2)
      .add(resolve, '-=0.2')
      .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '+=0.1');
  });
}
function heroIn() {
  if (!motion) return;
  const title = $('[data-hero-title]');
  const st = new SplitText(title, { type: 'lines', linesClass: 'line', mask: 'lines' });
  gsap.from(st.lines, { yPercent: 115, duration: 1.6, ease: 'expo.out', stagger: 0.12, delay: 0.15 });
  gsap.from(['[data-hero-eyebrow]', '[data-hero-lede]', '[data-hero-ctas]', '[data-hero-scroll]'], { opacity: 0, y: 24, duration: 1.4, ease: 'expo.out', stagger: 0.1, delay: 0.45, clearProps: 'transform' });
}

/* ------------------------------------------------------------------ router */
let currentView = 'home';
let disposeView = null;
const views = { home: $('[data-view="home"]'), product: $('[data-view="product"]'), checkout: $('[data-view="checkout"]') };
const homeY = { y: 0 };
function route() {
  const h = location.hash;
  const m = h.match(/^#\/product\/([a-z]+)/);
  const next = m && byId(m[1]) ? 'product' : h.startsWith('#/checkout') ? 'checkout' : 'home';
  if (currentView === 'home' && next !== 'home') homeY.y = window.scrollY;
  if (disposeView) { disposeView(); disposeView = null; }
  Object.entries(views).forEach(([k, el]) => { el.hidden = k !== next; });
  const prevView = currentView;
  currentView = next;
  if (stage) stage.setActive(next === 'home');
  if (next === 'product') {
    disposeView = renderProduct(views.product, byId(m[1]), { addToBag, cardHTML, splitReveal, gsap, ScrollTrigger, motion, isTouch, toast });
    document.title = `${byId(m[1]).name} | Ilvère`;
  } else if (next === 'checkout') {
    disposeView = renderCheckout(views.checkout, { lineItemHTML, bag, toast, gsap, motion });
    document.title = 'Checkout | Ilvère';
  } else document.title = 'Ilvère | Extraits de Parfum, Paris';
  if (next !== 'home') { views[next].classList.remove('view-fade'); void views[next].offsetWidth; views[next].classList.add('view-fade'); }
  ScrollTrigger.refresh();
  if (next === 'home') {
    if (pendingSection) { const t = $(pendingSection); pendingSection = null; window.scrollTo(0, homeY.y); requestAnimationFrame(() => scrollTo(t, { immediate: prevView !== 'home' ? false : false })); }
    else if (prevView !== 'home') { if (lenis) lenis.scrollTo(homeY.y, { immediate: true }); else window.scrollTo(0, homeY.y); }
  } else { if (lenis) lenis.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0); }
  updateHeader();
}
window.addEventListener('hashchange', route);

/* ------------------------------------------------------------------ boot */
(async function boot() {
  const introDone = intro();
  stage = createStage({ el: $('[data-stage]'), motion, isTouch });
  heroTimeline();
  collection();
  homeMotion();
  route();
  await introDone;
  heroIn();
  stage.boot();
  // the 3D stage only runs while the hero or the collection is on screen
  const shop = $('#shop');
  const vis = () => stage.setVisible(currentView === 'home' && window.scrollY < shop.offsetTop + 2);
  ScrollTrigger.create({ trigger: shop, start: 'top bottom', end: 'top top', onUpdate: vis, onToggle: vis });
  window.addEventListener('scroll', vis, { passive: true });
  vis();
  window.addEventListener('pointermove', (e) => stage.pointer(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1), { passive: true });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
