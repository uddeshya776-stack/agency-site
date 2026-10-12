/* Shop listing: category tabs, shop-the-line scent filter, sort, wishlist view. */
import { PRODUCTS, CATEGORIES, SCENTS, byId, fromPrice, picture } from './data.js';

const TITLES = {
  all: ['Shop <em>everything</em>', 'Extraits, travel sprays, candles, diffusers and body care, each in our five scents.'],
  fragrance: ['Fragrance', 'Five extraits de parfum at 24%, in 50 and 100 ml, and a refillable travel spray.'],
  home: ['Home', 'Candles poured in stone vessels and diffusers in heavy glass, made to be refilled.'],
  body: ['Body', 'Cream and wash scented with the extraits, so the perfume lasts longer on the skin.'],
  gifts: ['Gifts', 'Discovery sets and e-gift cards, wrapped by hand and sent at the hour you choose.'],
  wishlist: ['Your <em>wishlist</em>', 'Saved on this device. Sign in to keep it everywhere.'],
};
const SORTS = { featured: 'Featured', low: 'Price, low to high', high: 'Price, high to low', name: 'Name, A to Z' };

export function renderShop(el, cat, { cardHTML, bag, gsap, motion }) {
  if (!TITLES[cat]) cat = 'all';
  let scent = null, sort = 'featured';
  const count = (c) => (c === 'all' ? PRODUCTS.length : c === 'wishlist' ? bag.wish().length : PRODUCTS.filter((p) => p.cat === c).length);
  const [title, lede] = TITLES[cat];
  el.innerHTML = `<div class="container listing">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span aria-current="page">${cat === 'all' ? 'Shop' : title.replace(/<[^>]+>/g, '')}</span></nav>
    <header class="listing__head"><div><h1 class="listing__title">${title}</h1><p class="listing__lede">${lede}</p></div></header>
    <nav class="tabs" aria-label="Categories">
      ${[['all', 'All'], ...CATEGORIES.map((c) => [c.id, c.name]), ['wishlist', 'Wishlist']].map(([id, n]) => `<a href="#/shop/${id}" ${id === cat ? 'aria-current="page"' : ''}>${n} <small>${count(id)}</small></a>`).join('')}
    </nav>
    ${cat === 'wishlist' ? '' : `<div class="toolbar">
      <div class="filters" role="group" aria-label="Shop by scent"><span class="filters__label">Shop the line</span>
        ${SCENTS.map((s) => `<button type="button" class="chip" data-line="${s.id}" aria-pressed="false"><i style="background:${s.liquid}"></i>${s.name}</button>`).join('')}
      </div>
      <div class="toolbar__right"><span data-count></span>
        <label class="select"><span class="sr-only">Sort by</span><select data-sort>${Object.entries(SORTS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></label>
      </div>
    </div>`}
    <div class="grid" data-list></div>
  </div>`;

  const list = el.querySelector('[data-list]');
  function items() {
    let ps = cat === 'all' ? PRODUCTS.slice() : cat === 'wishlist' ? PRODUCTS.filter((p) => bag.isWished(p.id)) : PRODUCTS.filter((p) => p.cat === cat);
    if (scent) ps = ps.filter((p) => p.scents || p.scent === scent);
    if (sort === 'low') ps.sort((a, b) => fromPrice(a) - fromPrice(b));
    if (sort === 'high') ps.sort((a, b) => fromPrice(b) - fromPrice(a));
    if (sort === 'name') ps.sort((a, b) => a.name.localeCompare(b.name));
    return ps;
  }
  function draw() {
    const ps = items();
    const c = el.querySelector('[data-count]');
    if (c) c.textContent = `${ps.length} product${ps.length === 1 ? '' : 's'}${scent ? ' in ' + byId(scent).name : ''}`;
    if (!ps.length) {
      list.innerHTML = `<div class="listing__empty" style="grid-column:1/-1"><h2>${cat === 'wishlist' ? 'Nothing saved yet.' : 'Nothing here yet.'}</h2><p>Tap the heart on any product to keep it here.</p><a class="btn btn--dark" href="#/shop/all">Shop everything</a></div>`;
      return;
    }
    const cards = ps.map((p) => cardHTML(p, { scent: p.scents ? scent : null }));
    if (cat === 'all' && !scent && sort === 'featured') {
      cards.splice(4, 0, `<a class="promo" href="#/shop/home">${picture('banner-home', { sizes: '(min-width: 900px) 48vw, 100vw', alt: '' })}<span class="eyebrow eyebrow--light">The home collection</span><b>Your scent, in every room.</b><span class="btn btn--light" style="justify-self:start">Shop home</span></a>`);
    }
    list.innerHTML = cards.join('');
    if (motion) gsap.from(list.children, { opacity: 0, y: 40, duration: 1, ease: 'expo.out', stagger: 0.04 });
  }
  el.addEventListener('click', (e) => {
    const b = e.target.closest('[data-line]');
    if (!b) return;
    scent = scent === b.dataset.line ? null : b.dataset.line;
    el.querySelectorAll('[data-line]').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.line === scent)));
    draw();
  });
  const sel = el.querySelector('[data-sort]');
  if (sel) sel.addEventListener('change', () => { sort = sel.value; draw(); });
  draw();
  return () => { el.innerHTML = ''; };
}
