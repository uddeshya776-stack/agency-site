/* Product page for every product type:
   - extraits: gallery with a live 3D view, size, free engraving previewed on the bottle
   - multi-scent products (candle, diffuser, body, travel): scent selector, notes follow
   - e-gift card: amount, recipient, message, delivery date
   Returns a dispose function. */
import { SCENTS, PRODUCTS, byId, money, picture, fromPrice } from './data.js';
import { giftcardArt, esc } from './cards.js';

export function renderProduct(el, p, scentArg, { addToBag, cardHTML, splitReveal, revealImages, gsap, ScrollTrigger, motion }) {
  const isPerfume = !!p.sizes;
  const isGift = p.id === 'giftcard';
  let scent = p.scent || (p.scents ? scentArg || 'ambre' : null);
  let size = isPerfume ? 50 : null, engraving = '', amount = isGift ? 100 : null;
  let viewer = null, viewerLoading = null, disposed = false;
  const s = () => (scent ? byId(scent) : null);
  const sill = (n) => `<div class="dots5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`;
  const price = () => (isGift ? amount : isPerfume ? p.price[size] : p.price);
  const reviews = 300 + (p.id.charCodeAt(0) * 37) % 900;

  /* gallery slides */
  const slides = [];
  if (isGift) slides.push({ label: 'E-gift card', html: giftcardArt(amount) });
  else {
    slides.push({ label: 'Product', thumb: p.img, html: picture(p.img, { sizes: '(min-width: 900px) 52vw, 100vw', alt: p.name, loading: 'eager', fetchpriority: 'high' }) });
    if (isPerfume) {
      slides.push({ label: 'Detail', thumb: `detail-${p.id}`, html: picture(`detail-${p.id}`, { sizes: '(min-width: 900px) 52vw, 100vw', alt: `${p.name}, close-up of the onyx cap and print` }) });
      slides.push({ label: 'Live 3D view', is3d: true });
    }
    if (p.alt && !isPerfume) slides.push({ label: 'In the home', thumb: p.alt, html: picture(p.alt, { sizes: '(min-width: 900px) 52vw, 100vw', alt: '' }) });
    slides.push({ label: 'The collection', thumb: 'lineup', html: picture('lineup', { sizes: '(min-width: 900px) 52vw, 100vw', alt: 'The five bottles' }) });
  }
  const thumbsHTML = slides.length > 1 ? `<div class="gallery__thumbs" role="tablist" aria-label="Images">${slides.map((sl, i) => sl.is3d
    ? `<button type="button" role="tab" data-slide="${i}" class="thumb-3d" aria-label="${sl.label}">3D</button>`
    : `<button type="button" role="tab" data-slide="${i}" ${i === 0 ? 'class="is-on"' : ''} aria-label="${sl.label}"><img src="assets/img/${sl.thumb}-${/^(lineup|banner)/.test(sl.thumb) ? 1280 : 640}.webp" alt="" loading="lazy"></button>`).join('')}</div>` : '';
  const slidesHTML = slides.map((sl, i) => sl.is3d
    ? `<div class="gallery__slide gallery__slide--3d" data-3d><canvas data-pdp-canvas></canvas><div class="gallery__loading" data-3d-loading>Pouring the glass…</div><p class="gallery__hint" data-3d-hint>Drag to turn the bottle</p></div>`
    : `<div class="gallery__slide${i === 0 ? ' is-on' : ''}" style="${isGift ? 'position:absolute' : ''}">${sl.html}</div>`).join('');

  const scentPicker = p.scents ? `<div>
      <div class="opt-label"><span>Scent</span><span data-scent-name>${s().name}</span></div>
      <div class="swatches swatches--lg" role="radiogroup" aria-label="Scent">${SCENTS.map((x) => `<button type="button" role="radio" data-pick="${x.id}" aria-checked="${x.id === scent}" class="${x.id === scent ? 'is-on' : ''}" aria-label="${x.name}" title="${x.name}"><i style="background:${x.liquid}"></i></button>`).join('')}</div>
    </div>` : isPerfume ? `<div>
      <div class="opt-label"><span>The collection</span><span>${p.name}</span></div>
      <div class="swatches">${SCENTS.map((x) => `<a href="#/product/${x.id}" class="${x.id === p.id ? 'is-on' : ''}" aria-label="${x.name}" title="${x.name}"><i style="background:${x.liquid}"></i></a>`).join('')}</div>
    </div>` : '';

  const options = isPerfume ? `<div>
      <div class="opt-label"><span>Size</span><span>Extrait de parfum · 24%</span></div>
      <div class="sizes">
        <label class="size"><input type="radio" name="size" value="50" checked><b>50 ml</b><span>${money(p.price[50])}</span></label>
        <label class="size"><input type="radio" name="size" value="100"><b>100 ml</b><span>${money(p.price[100])}</span></label>
      </div>
    </div>
    <div class="engrave">
      <div class="opt-label"><label for="engrave">Engraving, complimentary</label><span>Previewed live in 3D</span></div>
      <div class="engrave__field"><input id="engrave" type="text" maxlength="12" placeholder="Your initials or a name" autocomplete="off" spellcheck="false" data-engrave><span class="engrave__count" data-engrave-count>0/12</span></div>
      <p class="engrave__note">Engraved by hand in gold on the onyx cap. Engraved bottles ship in 48 hours.</p>
    </div>` : isGift ? `<div>
      <div class="opt-label"><span>Amount</span><span>Never expires</span></div>
      <div class="sizes sizes--4">${p.amounts.map((a) => `<label class="size"><input type="radio" name="amount" value="${a}" ${a === amount ? 'checked' : ''}><b>${money(a)}</b></label>`).join('')}</div>
    </div>
    <div class="gc-fields">
      <div class="field"><label for="gc-to">Recipient's email</label><input id="gc-to" type="email" placeholder="name@example.com" data-gc-to></div>
      <div class="field"><label for="gc-name">Their name</label><input id="gc-name" type="text" maxlength="24" data-gc-name></div>
      <div class="field"><label for="gc-msg">A note (optional)</label><input id="gc-msg" type="text" maxlength="120" placeholder="Happy birthday, with love"></div>
      <div class="field"><label for="gc-date">Send on</label><input id="gc-date" type="date" data-gc-date></div>
    </div>` : '';

  const notes = s() ? `<dl class="pyramid" data-pyramid>${pyramid(s())}</dl>
    ${isPerfume ? `<dl class="meters"><div><dt>Wear</dt><dd>${s().wear}</dd></div><div><dt>Longevity</dt><dd>${s().longevity}</dd></div><div><dt>Sillage</dt><dd>${sill(s().sillage)}</dd></div></dl>` : ''}` : '';

  const details = isPerfume ? [
    ['The composition', s().story],
    ['The ritual', 'Two sprays on the pulse points, one in the air to walk through. Extraits sit close to the skin and open slowly, so give it ten minutes before you judge it.'],
    ['Shipping &amp; returns', 'Complimentary shipping over $150. US and UK orders arrive in 1 to 3 business days; Canada, Australia and the EU in 2 to 5, duties included. Unopened bottles can be returned within 30 days; engraved bottles are final sale.'],
    ['Ingredients', 'Alcohol denat., parfum (fragrance), aqua. Vegan and cruelty free. Glass made in Normandy, onyx cut in Portugal.'],
  ] : [
    ['Details', p.desc],
    ['Shipping &amp; returns', 'Complimentary shipping over $150, duties included for the US, UK, Canada, Australia and the EU. Unused items can be returned within 30 days.'],
    ['Refills', 'Candle vessels, diffuser bottles and cream jars can be refilled in any boutique or by post, at up to 30% less.'],
  ];

  const pairs = PRODUCTS.filter((x) => x.id !== p.id && x.id !== 'giftcard').sort((a, b) => (a.cat === p.cat) - (b.cat === p.cat)).slice(0, 4);
  const titleName = p.scents ? `${p.name}` : p.name;

  el.innerHTML = `
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><a href="#/shop/${p.cat}">${p.cat[0].toUpperCase() + p.cat.slice(1)}</a><span>/</span><span aria-current="page">${p.name}</span></nav>
    <div class="pdp">
      <div class="gallery${slides.length > 1 ? '' : ' gallery--single'}" data-gallery>
        ${thumbsHTML}
        <div class="gallery__main">
          <span class="gallery__badge" data-badge hidden>Live 3D</span>
          ${slidesHTML}
          ${p.scents ? `<span class="gallery__tint" data-tint style="background: radial-gradient(60% 45% at 50% 62%, ${s().liquid}, transparent 70%)"></span>` : ''}
        </div>
      </div>

      <div class="buy">
        <div class="buy__head">
          <div class="buy__family">${s() ? `<span class="card__swatch" style="background:${s().liquid}" data-head-swatch></span>` : ''}<span class="eyebrow" data-eyebrow>${isPerfume ? `No. ${s().no} · ${s().familyLong}` : p.type}</span></div>
          <h1 class="buy__title">${titleName}</h1>
          <p class="buy__line" data-line>${isPerfume ? s().line : p.scents ? `In ${s().name}. ${s().line}` : p.desc}</p>
          <div class="buy__rating"><span class="stars">★★★★★</span><span>4.9 · ${reviews.toLocaleString('en-US')} reviews</span></div>
        </div>
        <div class="buy__price"><span data-price>${money(price())}</span><small data-ppm>${isPerfume ? `${money(Math.round(p.price[50] * 2))} / 100 ml` : 'Taxes and duties included'}</small></div>
        ${scentPicker}
        ${options}
        <div class="buy__cta">
          <button class="btn btn--dark btn--block" type="button" data-add>Add to bag · <span data-add-price>${money(price())}</span></button>
          <div class="express"><button type="button" class="express__btn" data-express>Apple Pay</button><button type="button" class="express__btn express__btn--shop" data-express>Shop Pay</button><button type="button" class="express__btn" data-express>PayPal</button></div>
          <p class="bnpl">Or 4 interest-free payments of <b data-bnpl>${money(Math.ceil(price() / 4))}</b> with <b>Klarna</b> or <b>Afterpay</b>.</p>
        </div>
        <div class="buy__perks"><div>${isPerfume ? 'Free engraving' : 'Free gift wrap'}</div><div>2 samples included</div><div>30 day returns</div></div>
        ${notes}
        <div class="acc">${details.map(([h, t], i) => `<details ${i === 0 ? 'open' : ''}><summary>${h}</summary><p data-acc="${i}">${t}</p></details>`).join('')}</div>
      </div>
    </div>
  </div>

  ${s() ? `<section class="pdp-story">
    <div class="container pdp-story__inner">
      <div>
        <p class="eyebrow eyebrow--light" data-story-eyebrow>The story of No. ${s().no}</p>
        <h2 data-story-title>${storyTitle(s())}</h2>
        <p data-story>${s().story}</p>
      </div>
      <div class="pdp-story__media" data-reveal-img data-story-img>${picture(`detail-${s().id}`, { sizes: '(min-width: 900px) 45vw, 100vw', alt: `${s().name} on its set` })}</div>
    </div>
  </section>` : ''}

  <section class="pairs">
    <div class="container">
      <header class="section-head"><p class="eyebrow">You may also like</p><h2 class="section-title" data-split>Complete <em>the ritual.</em></h2></header>
      <div class="grid grid--4">${pairs.map((x) => cardHTML(x, { sizes: '(min-width: 1100px) 23vw, 50vw', scent: x.scents ? scent : null })).join('')}</div>
    </div>
  </section>

  <div class="sticky-buy" data-sticky>
    <p class="sticky-buy__name">${p.name}<small data-sticky-meta></small></p>
    <button class="btn btn--light" type="button" data-add-sticky>Add to bag</button>
  </div>`;

  const $ = (q) => el.querySelector(q);
  const $$ = (q) => [...el.querySelectorAll(q)];

  /* gallery */
  const slideEls = $$('.gallery__slide'), thumbs = $$('[data-slide]');
  const i3d = slides.findIndex((x) => x.is3d);
  let cur = 0;
  function show(i) {
    cur = i;
    slideEls.forEach((x, k) => x.classList.toggle('is-on', k === i));
    thumbs.forEach((x, k) => { x.classList.toggle('is-on', k === i); x.setAttribute('aria-selected', String(k === i)); });
    $('[data-badge]').hidden = i !== i3d;
    if (i === i3d) load3D(); else if (viewer) viewer.stop();
  }
  thumbs.forEach((t) => t.addEventListener('click', () => show(Number(t.dataset.slide))));
  let sx = null;
  const gm = $('.gallery__main');
  gm.addEventListener('touchstart', (e) => { sx = cur === i3d ? null : e.touches[0].clientX; }, { passive: true });
  gm.addEventListener('touchend', (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show((cur + (dx < 0 ? 1 : -1) + slideEls.length) % slideEls.length);
  });

  async function load3D() {
    if (i3d < 0) return null;
    if (viewer) { viewer.start(); viewer.resize(); return viewer; }
    if (viewerLoading) return viewerLoading;
    viewerLoading = (async () => {
      try {
        const { createBottleViewer } = await import('./viewer/index.js');
        if (disposed) return null;
        const v = await createBottleViewer({ canvas: $('[data-pdp-canvas]'), mode: 'pdp', scent: p.id, reducedMotion: !motion });
        if (disposed) { v.dispose(); return null; }
        viewer = v;
        v.setTheme?.('dark');
        v.setSize(size);
        v.setEngraving(engraving);
        v.resize();
        if (cur === i3d) { v.start(); v.intro?.(); } else v.stop();
        $('[data-3d-loading]').hidden = true;
        setTimeout(() => { const h = $('[data-3d-hint]'); if (h) h.style.opacity = '0'; }, 4000);
        window.addEventListener('resize', onResize);
        return v;
      } catch (err) {
        console.warn('[ilvere] 3D viewer unavailable:', err && err.message);
        const l = $('[data-3d-loading]');
        if (l) l.textContent = '3D preview needs WebGL 2';
        return null;
      }
    })();
    return viewerLoading;
  }
  const onResize = () => viewer && viewer.resize();

  /* options */
  function sync() {
    $('[data-price]').textContent = money(price());
    $('[data-add-price]').textContent = money(price());
    $('[data-bnpl]').textContent = money(Math.ceil(price() / 4));
    if (isPerfume) $('[data-ppm]').textContent = `${money(Math.round(price() / (size / 100)))} / 100 ml`;
    $('[data-sticky-meta]').textContent = [isPerfume ? `${size} ml` : s() ? s().name : null, money(price()), engraving ? `“${engraving}”` : null].filter(Boolean).join(' · ');
  }
  $$('input[name="size"]').forEach((r) => r.addEventListener('change', () => { size = Number(r.value); sync(); if (viewer) viewer.setSize(size); }));
  $$('input[name="amount"]').forEach((r) => r.addEventListener('change', () => {
    amount = Number(r.value);
    $$('[data-gc-amount]').forEach((x) => { x.textContent = money(amount); });
    sync();
  }));
  const gcName = $('[data-gc-name]');
  if (gcName) gcName.addEventListener('input', () => { engraving = gcName.value.trim(); });
  const gcDate = $('[data-gc-date]');
  if (gcDate) gcDate.valueAsDate = new Date();

  const eng = $('[data-engrave]');
  if (eng) {
    eng.addEventListener('focus', () => { if (cur !== i3d) show(i3d); });
    eng.addEventListener('input', () => {
      engraving = eng.value.replace(/[^\p{L}\p{N} .&'-]/gu, '').slice(0, 12);
      if (eng.value !== engraving) eng.value = engraving;
      $('[data-engrave-count]').textContent = `${engraving.length}/12`;
      if (viewer) viewer.setEngraving(engraving); else load3D();
      sync();
    });
  }
  $$('[data-pick]').forEach((b) => b.addEventListener('click', () => {
    scent = b.dataset.pick;
    $$('[data-pick]').forEach((x) => { x.setAttribute('aria-checked', String(x === b)); x.classList.toggle('is-on', x === b); });
    const sc = s();
    history.replaceState(null, '', `#/product/${p.id}/${sc.id}`);
    $('[data-scent-name]').textContent = sc.name;
    $('[data-line]').textContent = `In ${sc.name}. ${sc.line}`;
    $('[data-head-swatch]').style.background = sc.liquid;
    $('[data-tint]').style.background = `radial-gradient(60% 45% at 50% 62%, ${sc.liquid}, transparent 70%)`;
    $('[data-pyramid]').innerHTML = pyramid(sc);
    $('[data-story-eyebrow]').textContent = `The story of No. ${sc.no}`;
    $('[data-story-title]').innerHTML = storyTitle(sc);
    $('[data-story]').textContent = sc.story;
    $('[data-story-img]').innerHTML = picture(`detail-${sc.id}`, { sizes: '(min-width: 900px) 45vw, 100vw', alt: `${sc.name} on its set` });
    document.title = `${p.name} · ${sc.name} | Ilvère`;
    sync();
  }));

  const add = (from) => {
    if (isGift) {
      const to = $('[data-gc-to]');
      if (to && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(to.value.trim())) { to.setAttribute('aria-invalid', 'true'); to.focus(); return; }
    }
    addToBag({ pid: p.id, scent, size, engraving, amount, from });
  };
  $('[data-add]').addEventListener('click', (e) => add(e.currentTarget));
  $('[data-add-sticky]').addEventListener('click', (e) => add(e.currentTarget));
  $$('[data-express]').forEach((b) => b.addEventListener('click', () => { add(b); }));
  sync();

  const sticky = $('[data-sticky]');
  const io = new IntersectionObserver(([e]) => sticky.classList.toggle('is-on', !e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
  io.observe($('[data-add]'));

  splitReveal(el);
  revealImages(el);
  if (motion) {
    gsap.from($$('.buy > *'), { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay: 0.1 });
    gsap.from(gm, { clipPath: 'inset(6% 6% 6% 6% round 4px)', duration: 1.6, ease: 'expo.out' });
  }

  return () => {
    disposed = true;
    io.disconnect();
    window.removeEventListener('resize', onResize);
    if (viewer) { viewer.dispose(); viewer = null; }
    ScrollTrigger.getAll().forEach((t) => { if (t.trigger && el.contains(t.trigger)) t.kill(); });
    el.innerHTML = '';
  };
}

function pyramid(s) {
  return `<div><dt>Top</dt><dd>${s.notes.top.join(', ')}</dd></div><div><dt>Heart</dt><dd>${s.notes.heart.join(', ')}</dd></div><div><dt>Base</dt><dd>${s.notes.base.join(', ')}</dd></div>`;
}
function storyTitle(s) {
  return `${esc(s.line.replace(/\.$/, ''))}, <em>${esc(s.mood.split(',')[0].toLowerCase())}.</em>`;
}
