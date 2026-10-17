/* Ilvère: page logic. Smooth scroll, intro, the live 3D stage (hero + collection), mega menu,
   search, country/currency, wishlist, bag drawer, scent finder, gifting, boutiques, and the
   routed views: #/ home, #/shop/<category>, #/product/<id>[/<scent>], #/checkout.
   Section links (#finder…) scroll on the home view. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { SCENTS, PRODUCTS, CATEGORIES, QUIZ, BOUTIQUES, CURRENCIES, byId, productById, money, moneyOfConverted, picture, getCurrency, setCurrency, fromPrice, convert } from './data.js';
import { bag } from './store.js';
import { cardHTML, bindCardSwatches, esc, giftcardArt } from './cards.js';
import { createStage } from './stage.js';
import { renderProduct } from './product.js';
import { renderShop } from './shop.js';
import { renderCheckout } from './checkout.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const motion = root.classList.contains('motion');
const isTouch = matchMedia('(hover: none)').matches;

/* a missing image never shows a broken icon or its alt text over the layout */
document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') e.target.style.visibility = 'hidden'; }, true);

/* ------------------------------------------------------------------ smooth scroll */
let lenis = null;
if (motion) {
  lenis = new Lenis({ lerp: 0.13, wheelMultiplier: 1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollTo = (target, opts = {}) => {
  if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4), ...opts });
  else if (typeof target === 'number') window.scrollTo(0, target);
  else target.scrollIntoView();
};
let locks = 0;
const lockScroll = (on) => {
  locks = Math.max(0, locks + (on ? 1 : -1));
  const locked = locks > 0;
  if (lenis) locked ? lenis.stop() : lenis.start();
  document.body.style.overflow = locked ? 'hidden' : '';
};

/* ------------------------------------------------------------------ toast + fly to bag */
const toastEl = $('[data-toast]');
let toastT = 0;
function toast(msg) {
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
  dot.style.cssText = `background:${color};left:0;top:0`;
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
}

/* ------------------------------------------------------------------ add to bag (shared) */
function addToBag({ pid, scent = null, size = null, engraving = '', amount = null, from }) {
  const p = productById(pid);
  bag.add({ pid, scent, size, engraving, amount });
  const s = byId(p.scent || scent);
  flyToBag(from, s ? s.liquid : '#C8A76A');
  toast(`${p.name}${p.scents && s ? ', ' + s.name : ''}${p.sizes ? `, ${size || 50} ml` : ''} added to your bag`);
  setTimeout(() => openBag(), motion ? 650 : 0);
}
document.addEventListener('click', (e) => {
  const q = e.target.closest('[data-quick]');
  if (q) addToBag({ pid: q.dataset.quick, scent: q.dataset.scent || null, size: productById(q.dataset.quick).sizes ? 50 : null, from: q });
  const w = e.target.closest('[data-wish]');
  if (w) {
    const on = bag.toggleWish(w.dataset.wish);
    $$(`[data-wish="${w.dataset.wish}"]`).forEach((b) => { b.setAttribute('aria-pressed', String(on)); });
    w.classList.remove('pop'); void w.offsetWidth; w.classList.add('pop');
    toast(on ? `Saved to your wishlist` : 'Removed from your wishlist');
  }
});

/* ------------------------------------------------------------------ bag drawer */
const drawer = $('[data-drawer]');
const panel = $('[data-drawer-panel]');
let lastFocus = null;
function openBag() {
  if (!drawer.hidden && drawer.classList.contains('is-open')) return;
  closeOverlays();
  lastFocus = document.activeElement;
  renderBag();
  drawer.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add('is-open')));
  lockScroll(true);
  setTimeout(() => panel.focus(), 50);
}
function closeBag() {
  if (drawer.hidden) return;
  drawer.classList.remove('is-open');
  lockScroll(false);
  setTimeout(() => { drawer.hidden = true; }, 700);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
bagBtn.addEventListener('click', openBag);
$$('[data-bag-close]').forEach((b) => b.addEventListener('click', closeBag));
function trapFocus(e, container) {
  if (e.key !== 'Tab') return;
  const f = $$('button, a[href], input, select', container).filter((el) => !el.disabled && el.offsetParent);
  if (!f.length) return;
  if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
  else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
}
drawer.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeBag(); trapFocus(e, panel); });

function thumbHTML(it) {
  const p = productById(it.pid);
  if (p.id === 'giftcard') return giftcardArt(it.amount);
  return `<img src="assets/img/${p.img}-640.webp" alt="" width="640" height="800" loading="lazy">`;
}
function lineItemHTML(it, { controls = true } = {}) {
  const p = productById(it.pid);
  const s = byId(p.scent || it.scent);
  const meta = [];
  if (p.sizes) meta.push(`<span>Extrait de parfum · ${it.size} ml</span>`);
  else if (p.scents) meta.push(`<span>${p.type} · ${s.name}</span>`);
  else if (p.id === 'giftcard') meta.push('<span>Delivered by email</span>');
  else meta.push(`<span>${p.type}</span>`);
  if (it.engraving) meta.push(`<span>${p.id === 'giftcard' ? 'For' : 'Engraved'}: <em>${esc(it.engraving)}</em></span>`);
  if (!controls) meta.push(`<span>Qty ${it.qty}</span>`);
  return `<div class="line-item" data-key="${esc(it.key)}">
    <div class="line-item__img" style="position:relative">${thumbHTML(it)}</div>
    <div><h3>${p.name}</h3><div class="line-item__meta">${meta.join('')}</div>
      ${controls ? `<div class="qty"><button type="button" data-qty="-1" aria-label="One less">−</button><span>${it.qty}</span><button type="button" data-qty="1" aria-label="One more">+</button></div>` : ''}
    </div>
    <div class="line-item__right"><span class="line-item__price">${moneyOfConverted(convertLine(it))}</span>${controls ? '<button type="button" class="remove" data-remove>Remove</button>' : ''}</div>
  </div>`;
}
const convertLine = (it) => convert(bag.priceOf(it)) * it.qty;

function renderBag() {
  const st = bag.get();
  const n = bag.count();
  $('[data-bag-count-title]').textContent = n ? `(${n})` : '';
  const toFree = bag.toFreeUSD();
  $('[data-ship]').innerHTML = n
    ? `${toFree > 0 ? `You are <b>${money(toFree)}</b> away from complimentary shipping.` : 'Your order ships <b>free</b>, wrapped and sealed by hand.'}
       <div class="ship-bar"><i style="transform: scaleX(${Math.min(1, bag.subtotalUSD() / 150)})"></i></div>`
    : `Complimentary shipping on orders over ${money(150)}.`;
  const body = $('[data-bag-body]');
  if (!n) {
    body.innerHTML = `<div class="empty"><h3>Your bag is empty.</h3><p>Perhaps start with the Discovery Set.</p><a class="btn btn--dark" href="#/shop/all" data-bag-close-link>Shop the collection</a></div>`;
    $('[data-bag-foot]').innerHTML = '';
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
    <div class="sum-row"><span>Subtotal</span><span>${moneyOfConverted(bag.subtotal())}</span></div>
    <div class="sum-row"><span>Shipping</span><span>${ship ? moneyOfConverted(ship) : 'Complimentary'}</span></div>
    <div class="sum-row sum-row--total"><span>Total</span><span>${moneyOfConverted(bag.subtotal() + ship)}</span></div>
    <a class="btn btn--dark btn--block" href="#/checkout" data-bag-close-link>Checkout</a>
    <div class="express" aria-label="Express checkout"><a href="#/checkout" data-bag-close-link class="express__btn">Apple Pay</a><a href="#/checkout" data-bag-close-link class="express__btn express__btn--shop">Shop Pay</a><a href="#/checkout" data-bag-close-link class="express__btn">PayPal</a></div>
    <small>Or 4 interest-free payments of ${moneyOfConverted(Math.ceil((bag.subtotal() + ship) / 4))} with Klarna or Afterpay.</small>`;
}
panel.addEventListener('click', (e) => {
  if (e.target.closest('[data-bag-close-link]')) { closeBag(); return; }
  const li = e.target.closest('[data-key]');
  const q = e.target.closest('[data-qty]');
  if (li && q) {
    const it = bag.get().items.find((i) => i.key === li.dataset.key);
    if (it) bag.setQty(it.key, it.qty + Number(q.dataset.qty));
  } else if (li && e.target.closest('[data-remove]')) bag.remove(li.dataset.key);
  const sm = e.target.closest('[data-sample]');
  if (sm) bag.toggleSample(sm.dataset.sample);
});
function syncCounts() {
  const n = bag.count();
  $('[data-bag-count]').textContent = n;
  bagBtn.classList.toggle('has-items', n > 0);
  bagBtn.setAttribute('aria-label', `Open bag, ${n} item${n === 1 ? '' : 's'}`);
  const w = bag.wish().length, wc = $('[data-wish-count]');
  wc.hidden = !w; wc.textContent = w;
}
bag.on((st, ch) => {
  syncCounts();
  if (!drawer.hidden && ch.type !== 'wish') {
    const y = $('[data-bag-body]').scrollTop;
    renderBag();
    $('[data-bag-body]').scrollTop = y;
    if (ch.type !== 'add') $$('.line-item', drawer).forEach((el) => { el.style.animation = 'none'; });
  }
  if (ch.type === 'wish' && currentView === 'shop' && currentShopCat === 'wishlist') route();
});
syncCounts();

/* ------------------------------------------------------------------ currency */
function syncMoney() {
  const c = getCurrency();
  const sym = money(0).replace(/[\d\s.,]/g, '') || c;
  $$('[data-cur-label]').forEach((el) => { el.textContent = `${c} ${sym}`; });
  $$('[data-cur-country]').forEach((el) => { el.textContent = CURRENCIES[c].label; });
  $$('[data-money]').forEach((el) => { el.textContent = money(Number(el.dataset.money)); });
}
const region = $('[data-region]');
function openRegion() {
  closeOverlays();
  const c = getCurrency();
  $('[data-region-list]').innerHTML = Object.entries(CURRENCIES).map(([k, v]) => `<button type="button" data-cur="${k}" aria-pressed="${k === c}"><span>${v.label}</span><span>${k} · ${new Intl.NumberFormat(v.locale, { style: 'currency', currency: k, maximumFractionDigits: 0, currencyDisplay: 'narrowSymbol' }).format(0).replace(/[\d\s.,]/g, '')}</span></button>`).join('');
  region.hidden = false;
  lockScroll(true);
  setTimeout(() => $('[data-cur][aria-pressed="true"]', region)?.focus(), 30);
}
function closeRegion() { if (region.hidden) return; region.hidden = true; lockScroll(false); }
document.addEventListener('click', (e) => { if (e.target.closest('[data-region-open]')) openRegion(); });
region.addEventListener('click', (e) => {
  if (e.target.closest('[data-region-close]')) closeRegion();
  const b = e.target.closest('[data-cur]');
  if (b) {
    setCurrency(b.dataset.cur);
    closeRegion();
    rerenderPrices();
    toast(`Prices now in ${b.dataset.cur}`);
  }
});
region.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeRegion(); trapFocus(e, region); });
function rerenderPrices() {
  syncMoney();
  renderGrids();
  renderCollectionPrices();
  if (currentView !== 'home') route({ keepScroll: true });
}

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

/* ------------------------------------------------------------------ header states */
const header = $('[data-header]');
let lastY = 0;
function updateHeader() {
  const y = window.scrollY;
  header.classList.toggle('is-stuck', y > 30 || currentView !== 'home');
  let light = currentView !== 'home';
  if (currentView === 'home') {
    const probe = document.elementsFromPoint(window.innerWidth / 2, 40).find((el) => el.matches?.('.section, .lineup, .refill, .site-footer, .hero, .collection'));
    light = !!probe && !probe.matches('.section--dark, .site-footer, .hero, .collection');
  }
  header.classList.toggle('is-light', light);
  const busy = document.body.classList.contains('menu-open') || document.body.classList.contains('mega-open');
  if (y > 400 && y > lastY + 4 && !busy) header.classList.add('is-hidden');
  else if (y < lastY - 4 || y < 400) header.classList.remove('is-hidden');
  lastY = y;
}
// one header update per frame, however many scroll events arrive
let headerQueued = false;
window.addEventListener('scroll', () => {
  if (headerQueued) return;
  headerQueued = true;
  requestAnimationFrame(() => { headerQueued = false; updateHeader(); });
}, { passive: true });

/* ------------------------------------------------------------------ mega menu */
const megaBtn = $('[data-mega-btn]');
const mega = $('[data-mega]');
$('[data-mega-scents]').innerHTML = SCENTS.map((s) => `<li><a href="#/product/${s.id}"><i style="background:${s.liquid}"></i>${s.name}</a></li>`).join('');
let megaT = 0;
function setMega(open) {
  clearTimeout(megaT);
  if (open === !mega.hidden) return;
  megaBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('mega-open', open);
  mega.hidden = !open;
  if (open && motion) {
    gsap.fromTo(mega, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'expo.out' });
    gsap.fromTo($$('.mega__col, .mega__feature', mega), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.05, delay: 0.05 });
  }
}
megaBtn.addEventListener('click', () => setMega(mega.hidden));
if (!isTouch) {
  megaBtn.addEventListener('mouseenter', () => setMega(true));
  header.addEventListener('mouseleave', () => { megaT = setTimeout(() => setMega(false), 180); });
  mega.addEventListener('mouseenter', () => clearTimeout(megaT));
  $$('.site-nav a, .brand, .site-tools').forEach((el) => el.addEventListener('mouseenter', () => { megaT = setTimeout(() => setMega(false), 120); }));
}
mega.addEventListener('click', (e) => { if (e.target.closest('a')) setMega(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mega.hidden) { setMega(false); megaBtn.focus(); } });

/* ------------------------------------------------------------------ mobile menu */
const menuBtn = $('[data-menu-btn]');
const menu = $('[data-menu]');
function setMenu(open) {
  if (open === !menu.hidden) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  menu.hidden = !open;
  lockScroll(open);
  if (open) gsap.fromTo($$('nav a', menu), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'expo.out' });
}
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

/* ------------------------------------------------------------------ search */
const search = $('[data-search]');
const sInput = $('[data-search-input]');
const sBody = $('[data-search-body]');
const INDEX = PRODUCTS.map((p) => {
  const s = p.scent ? byId(p.scent) : null;
  const text = [p.name, p.type, p.desc, p.cat, s && [s.family, s.familyLong, s.mood, ...s.notes.top, ...s.notes.heart, ...s.notes.base].join(' ')].join(' ').toLowerCase();
  return { p, text };
});
const POPULAR = ['Rose', 'Vanilla', 'Candle', 'Oud', 'Gift', 'Iris', 'Travel'];
function searchResults(q) {
  q = q.trim().toLowerCase();
  if (!q) return null;
  const words = q.split(/\s+/);
  return INDEX.filter((r) => words.every((w) => r.text.includes(w))).map((r) => r.p);
}
function mark(text, q) {
  if (!q) return esc(text);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  return i < 0 ? esc(text) : esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}
function resultHTML(p, q) {
  const s = p.scent ? byId(p.scent) : null;
  const img = p.id === 'giftcard' ? giftcardArt(100) : `<img src="assets/img/${p.img}-640.webp" alt="" width="640" height="800" loading="lazy">`;
  return `<a class="s-result" href="#/product/${p.id}"><span class="s-result__img" style="position:relative">${img}</span><b>${mark(p.name, q)}</b><span>${s ? mark(s.familyLong, q) + ' · ' : ''}${money(fromPrice(p))}</span></a>`;
}
function renderSearch() {
  const q = sInput.value;
  const res = searchResults(q);
  if (!res) {
    sBody.innerHTML = `<div><p class="search__label">Popular searches</p><div class="search__chips">${POPULAR.map((t) => `<button type="button" class="chip" data-term="${t}">${t}</button>`).join('')}</div></div>
      <div><p class="search__label">Bestsellers</p><div class="search__results">${PRODUCTS.filter((p) => ['ambre', 'iris', 'candle', 'discovery'].includes(p.id)).map((p) => resultHTML(p, '')).join('')}</div></div>`;
    return;
  }
  sBody.innerHTML = res.length
    ? `<div><p class="search__label">${res.length} result${res.length === 1 ? '' : 's'} for “${esc(q.trim())}”</p><div class="search__results">${res.map((p) => resultHTML(p, q.trim())).join('')}</div></div>`
    : `<p class="search__empty">Nothing for “${esc(q.trim())}” yet. Try a note, like vanilla or rose.</p>`;
}
function openSearch() {
  closeOverlays();
  search.hidden = false;
  lockScroll(true);
  renderSearch();
  setTimeout(() => sInput.focus(), 30);
}
function closeSearch() { if (search.hidden) return; search.hidden = true; lockScroll(false); }
$('[data-search-open]').addEventListener('click', openSearch);
$('[data-search-close]').addEventListener('click', closeSearch);
sInput.addEventListener('input', renderSearch);
sBody.addEventListener('click', (e) => {
  const t = e.target.closest('[data-term]');
  if (t) { sInput.value = t.dataset.term; renderSearch(); sInput.focus(); }
  if (e.target.closest('a')) closeSearch();
});
search.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); trapFocus(e, search); });
document.addEventListener('keydown', (e) => {
  if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
});

function closeOverlays() { closeSearch(); closeRegion(); setMega(false); setMenu(false); }

/* ------------------------------------------------------------------ section links */
let pendingSection = null;
function goSection(hash) {
  closeOverlays();
  const target = $(hash);
  if (!target) return;
  if (currentView !== 'home') { pendingSection = hash; location.hash = '#/'; return; }
  scrollTo(target, { offset: hash === '#collection' ? 0 : -20 });
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.startsWith('#/')) return;
  if (href.length > 1) { e.preventDefault(); goSection(href); }
});
$('[data-home]').addEventListener('click', (e) => {
  if (currentView === 'home') { e.preventDefault(); scrollTo(0); }
});

/* ------------------------------------------------------------------ home: categories, grids, gifts */
const arrow = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const CAT_IMG = { fragrance: 'card-ambre', home: 'card-candle', body: 'card-cream', gifts: 'discovery' };
$('[data-cats]').innerHTML = CATEGORIES.map((c) => `<a class="cat" href="#/shop/${c.id}">${picture(CAT_IMG[c.id], { sizes: '(min-width: 900px) 24vw, 50vw', alt: '' })}<span class="cat__arrow">${arrow}</span><span class="cat__text"><b>${c.name}</b><span>${c.blurb}</span></span></a>`).join('');
const variantCount = PRODUCTS.reduce((n, p) => n + (p.scents ? 5 : p.sizes ? 2 : 1), 0);
$$('[data-product-count]').forEach((el) => { el.textContent = variantCount; });

const grid = $('[data-grid]');
const giftGrid = $('[data-gift-grid]');
const budgetEl = $('[data-budget]');
const BUDGETS = [{ max: 100, label: 'Under' }, { max: 150, label: 'Under' }, { max: 300, label: 'Under' }, { max: Infinity, label: 'Over' }];
let budget = 0;
function renderGrids() {
  grid.innerHTML = PRODUCTS.filter((p) => p.cat === 'fragrance' && p.sizes).concat(productById('discovery')).map((p) => cardHTML(p, { sizes: '(min-width: 900px) 31vw, 50vw' })).join('');
  grid.classList.add('grid--best');
  budgetEl.innerHTML = BUDGETS.map((b, i) => `<button type="button" data-budget-i="${i}" aria-pressed="${i === budget}">${b.max === Infinity ? `${money(300)} and over` : `Under ${money(b.max)}`}</button>`).join('');
  renderGifts();
}
function renderGifts() {
  const b = BUDGETS[budget], lo = budget === 3 ? 300 : budget > 0 ? BUDGETS[budget - 1].max : 0;
  let list = PRODUCTS.filter((p) => { const v = fromPrice(p); return b.max === Infinity ? v >= 300 || p.id === 'giftcard' : v < b.max && v >= (budget === 0 ? 0 : lo * 0.5); });
  if (budget === 3) list = [productById('iris'), productById('ambre'), productById('rose'), productById('giftcard')];
  giftGrid.innerHTML = list.slice(0, 4).map((p) => cardHTML(p, { sizes: '(min-width: 1100px) 23vw, 50vw', scent: p.scents ? ['rose', 'ambre', 'iris', 'figue'][list.indexOf(p) % 4] : null })).join('');
  if (motion) gsap.from($$('.card', giftGrid), { opacity: 0, y: 30, duration: 0.9, ease: 'expo.out', stagger: 0.06 });
}
budgetEl.addEventListener('click', (e) => {
  const b = e.target.closest('[data-budget-i]');
  if (!b) return;
  budget = Number(b.dataset.budgetI);
  $$('[data-budget-i]', budgetEl).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  renderGifts();
});
bindCardSwatches(document.body);

/* boutiques: open now, computed from the visitor's clock as a stand-in */
$('[data-boutiques]').innerHTML = BOUTIQUES.map((b) => `<li class="boutique"><b>${b.city}${b.flagship ? '<small>Flagship</small>' : ''}</b><span class="boutique__area">${b.area}</span><span class="boutique__addr">${b.addr}</span><span class="boutique__open"><i></i>${b.hours}</span></li>`).join('');
$('[data-book]').addEventListener('click', (e) => { e.preventDefault(); toast('Consultation requests open in the full store. This is a concept site.'); });

/* ------------------------------------------------------------------ scent finder */
(() => {
  const card = $('[data-finder-card]');
  let step = 0, scores = {};
  const progress = () => `<div class="finder__progress">${QUIZ.map((_, i) => `<i class="${i < step ? 'is-done' : ''}"></i>`).join('')}</div>`;
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
          <div class="actions"><button class="btn btn--dark" type="button" data-quick="${best.id}">Add · ${money(best.price[50])}</button><button class="btn btn--ghost" type="button" data-quick="discovery">Try the set · ${money(42)}</button></div>
          <button class="finder__restart" type="button" data-restart>Start again</button></div></div>`;
    }
    if (motion) gsap.from(card.children[1], { opacity: 0, y: 24, duration: 0.8, ease: 'expo.out' });
  }
  card.addEventListener('click', (e) => {
    const b = e.target.closest('[data-a]');
    if (b) {
      Object.entries(QUIZ[step].a[Number(b.dataset.a)].s).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });
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
    const st = new SplitText(el, { type: 'lines', linesClass: 'line', mask: 'lines', aria: 'none' });
    gsap.from(st.lines, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}
function revealImages(scope) {
  if (!motion) return;
  $$('[data-reveal-img]', scope).forEach((el) => {
    gsap.to(el, { clipPath: 'inset(0% 0% 0% 0% round 4px)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    gsap.to(el.querySelector('img'), { scale: 1, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
}
function homeMotion() {
  const home = $('[data-view="home"]');
  splitReveal(home);
  if (!motion) return;
  revealImages(home);
  gsap.fromTo('[data-parallax] picture', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '[data-parallax]', start: 'top bottom', end: 'bottom top', scrub: true } });
  ScrollTrigger.batch('.view--home .card, .cat, .voice, .boutique, .refill__list li', {
    start: 'top 92%', once: true,
    onEnter: (els) => gsap.from(els, { opacity: 0, y: 50, duration: 1.2, ease: 'expo.out', stagger: 0.07 }),
  });
  $$('[data-count-to]').forEach((el) => {
    const to = Number(el.dataset.countTo), o = { v: 0 };
    gsap.to(o, { v: to, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => { el.textContent = Math.round(o.v); } });
  });
}

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

let renderCollectionPrices = () => {};
function collection() {
  const names = $('[data-col-names]'), detail = $('[data-col-detail]'), dots = $('[data-col-dots]'), idx = $('[data-col-index]');
  names.innerHTML = SCENTS.map((s) => {
    const [a, ...rest] = s.name.split(' ');
    return `<p class="col-name" aria-hidden="true">${a} <em>${rest.join(' ')}</em></p>`;
  }).join('');
  detail.innerHTML = SCENTS.map((s) => `<div class="col-detail">
      <p class="col-detail__mood">${s.line} ${s.mood}.</p>
      <dl class="notes-row"><div><dt>Top</dt><dd>${s.notes.top.join(', ')}</dd></div><div><dt>Heart</dt><dd>${s.notes.heart.join(', ')}</dd></div><div><dt>Base</dt><dd>${s.notes.base.join(', ')}</dd></div></dl>
      <div class="col-detail__buy">
        <button class="btn btn--light col-detail__add" type="button" data-quick="${s.id}" aria-label="Add ${s.name}, 50 ml, to bag"><span>Add to bag</span><span class="col-detail__price"><span data-money="${s.price[50]}">${money(s.price[50])}</span><small>50 ml</small></span></button>
        <a class="btn btn--ghost-light col-detail__more" href="#/product/${s.id}">Discover</a></div>
    </div>`).join('');
  renderCollectionPrices = () => $$('[data-money]', detail).forEach((el) => { el.textContent = money(Number(el.dataset.money)); });
  dots.innerHTML = SCENTS.map((s, i) => `<li><button type="button" data-dot="${i}" aria-label="${s.name}"><span>${s.name}</span><i></i></button></li>`).join('');
  const nameEls = $$('.col-name', names), detEls = $$('.col-detail', detail), dotEls = $$('button', dots);
  const sec = $('[data-collection]');
  let cur = -1;
  const chars = nameEls.map((el) => (motion ? new SplitText(el, { type: 'chars', charsClass: 'ch' }).chars : []));
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
  if (!motion || currentView !== 'home') return;
  const st = new SplitText($('[data-hero-title]'), { type: 'lines', linesClass: 'line', mask: 'lines', aria: 'none' });
  gsap.from(st.lines, { yPercent: 115, duration: 1.6, ease: 'expo.out', stagger: 0.12, delay: 0.15 });
  gsap.from(['[data-hero-eyebrow]', '[data-hero-lede]', '[data-hero-ctas]', '[data-hero-scroll]'], { opacity: 0, y: 24, duration: 1.4, ease: 'expo.out', stagger: 0.1, delay: 0.45, clearProps: 'transform' });
}

/* ------------------------------------------------------------------ router */
let currentView = 'home';
let currentShopCat = null;
let disposeView = null;
const views = { home: $('[data-view="home"]'), shop: $('[data-view="shop"]'), product: $('[data-view="product"]'), checkout: $('[data-view="checkout"]') };
const homeY = { y: 0 };
const ctx = () => ({ addToBag, cardHTML, splitReveal, revealImages, gsap, ScrollTrigger, motion, isTouch, toast, lineItemHTML, bag, convertLine });
function route({ keepScroll = false } = {}) {
  const h = location.hash;
  let next = 'home', arg = null, arg2 = null, m;
  if ((m = h.match(/^#\/product\/([a-z]+)(?:\/([a-z]+))?/)) && productById(m[1])) { next = 'product'; arg = m[1]; arg2 = m[2] && byId(m[2]) ? m[2] : null; }
  else if ((m = h.match(/^#\/shop(?:\/([a-z]+))?/))) { next = 'shop'; arg = m[1] || 'all'; }
  else if (h.startsWith('#/checkout')) next = 'checkout';
  const y = window.scrollY;
  if (currentView === 'home' && next !== 'home') homeY.y = y;
  closeOverlays();
  if (disposeView) { disposeView(); disposeView = null; }
  Object.entries(views).forEach(([k, el]) => { el.hidden = k !== next; });
  const prevView = currentView;
  currentView = next;
  currentShopCat = next === 'shop' ? arg : null;
  if (stage) stage.setActive(next === 'home');
  if (next === 'product') {
    const p = productById(arg);
    disposeView = renderProduct(views.product, p, arg2, ctx());
    document.title = `${p.name}${arg2 ? ' · ' + byId(arg2).name : ''} | Ilvère`;
  } else if (next === 'shop') {
    disposeView = renderShop(views.shop, arg, ctx());
    document.title = `${arg === 'all' ? 'Shop all' : arg === 'wishlist' ? 'Wishlist' : (CATEGORIES.find((c) => c.id === arg) || { name: 'Shop' }).name} | Ilvère`;
  } else if (next === 'checkout') {
    disposeView = renderCheckout(views.checkout, ctx());
    document.title = 'Checkout | Ilvère';
  } else document.title = 'Ilvère | Extraits de Parfum, Paris';
  if (next !== 'home' && !keepScroll) { views[next].classList.remove('view-fade'); void views[next].offsetWidth; views[next].classList.add('view-fade'); }
  ScrollTrigger.refresh();
  const jump = (to) => { if (lenis) lenis.scrollTo(to, { immediate: true, force: true }); else window.scrollTo(0, to); };
  if (keepScroll) jump(y);
  else if (next === 'home') {
    if (pendingSection) { const t = $(pendingSection); pendingSection = null; jump(t.offsetTop - 20); }
    else if (prevView !== 'home') jump(homeY.y);
  } else jump(0);
  updateHeader();
}
window.addEventListener('hashchange', () => route());

/* ------------------------------------------------------------------ boot */
(async function boot() {
  const introDone = intro();
  stage = createStage({ el: $('[data-stage]'), motion, isTouch });
  syncMoney();
  renderGrids();
  // split text only after the fonts are in, or the measured lines break wrongly
  await Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1500))]);
  heroTimeline();
  collection();
  homeMotion();
  route();
  await introDone;
  heroIn();
  stage.boot();
  // the 3D stage only runs while the hero or the collection is on screen
  const shop = $('#shop');
  let shopTop = shop.offsetTop;
  ScrollTrigger.addEventListener('refresh', () => { shopTop = shop.offsetTop; });
  const vis = () => stage.setVisible(currentView === 'home' && window.scrollY < shopTop + 2);
  window.addEventListener('scroll', vis, { passive: true });
  vis();
  window.addEventListener('pointermove', (e) => stage.pointer(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1), { passive: true });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
