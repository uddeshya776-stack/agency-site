/* Product page: gallery with a live 3D view, size, free engraving previewed on the bottle,
   notes, accordions, story and cross-sell. Returns a dispose function. */
import { SCENTS, euro, picture } from './data.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function renderProduct(el, s, { addToBag, cardHTML, splitReveal, gsap, ScrollTrigger, motion, isTouch }) {
  let size = 50, engraving = '', viewer = null, viewerLoading = null, disposed = false;
  const others = SCENTS.filter((x) => x.id !== s.id);
  const pairs = others.slice(0, 4);
  const sill = (n) => `<div class="dots5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`;

  el.innerHTML = `
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><a href="#shop">Shop</a><span>/</span><span aria-current="page">${s.name}</span></nav>
    <div class="pdp">
      <div class="gallery" data-gallery>
        <div class="gallery__thumbs" role="tablist" aria-label="Images">
          <button type="button" role="tab" class="is-on" data-slide="0" aria-label="Bottle">${picture(`card-${s.id}`, { sizes: '76px', alt: '' })}</button>
          <button type="button" role="tab" data-slide="1" aria-label="Detail">${picture(`detail-${s.id}`, { sizes: '76px', alt: '' })}</button>
          <button type="button" role="tab" data-slide="2" class="thumb-3d" aria-label="Live 3D view">3D</button>
          <button type="button" role="tab" data-slide="3" aria-label="The collection">${picture('discovery', { sizes: '76px', alt: '' })}</button>
        </div>
        <div class="gallery__main">
          <span class="gallery__badge" data-badge hidden>Live 3D</span>
          <div class="gallery__slide is-on">${picture(`card-${s.id}`, { sizes: '(min-width: 900px) 52vw, 100vw', alt: `${s.name}, 50 ml bottle`, loading: 'eager', fetchpriority: 'high' })}</div>
          <div class="gallery__slide">${picture(`detail-${s.id}`, { sizes: '(min-width: 900px) 52vw, 100vw', alt: `${s.name}, close-up of the onyx cap and print` })}</div>
          <div class="gallery__slide gallery__slide--3d" data-3d>
            <canvas data-pdp-canvas></canvas>
            <div class="gallery__loading" data-3d-loading>Pouring the glass…</div>
            <p class="gallery__hint" data-3d-hint>Drag to turn the bottle</p>
          </div>
          <div class="gallery__slide">${picture('discovery', { sizes: '(min-width: 900px) 52vw, 100vw', alt: 'The Discovery Set' })}</div>
        </div>
      </div>

      <div class="buy">
        <div class="buy__head">
          <div class="buy__family"><span class="card__swatch" style="background:${s.liquid}"></span><span class="eyebrow">No. ${s.no} · ${s.family}</span></div>
          <h1 class="buy__title">${s.name}</h1>
          <p class="buy__line">${s.line}</p>
          <div class="buy__rating"><span class="stars">★★★★★</span><span>4.9 · ${300 + s.no * 117} reviews</span></div>
        </div>
        <div class="buy__price"><span data-price>${euro(s.price[50])}</span><small data-ppm>${euro(Math.round(s.price[50] / 0.5))} / 100 ml</small></div>

        <div>
          <div class="opt-label"><span>Size</span><span>Extrait de parfum · 24%</span></div>
          <div class="sizes">
            <label class="size"><input type="radio" name="size" value="50" checked><b>50 ml</b><span>${euro(s.price[50])}</span></label>
            <label class="size"><input type="radio" name="size" value="100"><b>100 ml</b><span>${euro(s.price[100])}</span></label>
          </div>
        </div>

        <div class="engrave">
          <div class="opt-label"><label for="engrave">Engraving, complimentary</label><span>Previewed live in 3D</span></div>
          <div class="engrave__field">
            <input id="engrave" type="text" maxlength="12" placeholder="Your initials or a name" autocomplete="off" spellcheck="false" data-engrave>
            <span class="engrave__count" data-engrave-count>0/12</span>
          </div>
          <p class="engrave__note">Engraved by hand in gold on the onyx cap. Engraved bottles ship in 48 hours.</p>
        </div>

        <div>
          <div class="opt-label"><span>The collection</span><span>${s.name}</span></div>
          <div class="swatches">${SCENTS.map((x) => `<a href="#/product/${x.id}" class="${x.id === s.id ? 'is-on' : ''}" aria-label="${x.name}" title="${x.name}"><i style="background:${x.liquid}"></i></a>`).join('')}</div>
        </div>

        <div class="buy__cta">
          <button class="btn btn--dark btn--block" type="button" data-add>Add to bag · <span data-add-price>${euro(s.price[50])}</span></button>
          <a class="btn btn--ghost btn--block" href="#discovery">Try it first in the Discovery Set · €38</a>
        </div>
        <div class="buy__perks"><div>Free engraving</div><div>2 samples included</div><div>30 day returns</div></div>

        <dl class="pyramid">
          <div><dt>Top</dt><dd>${s.notes.top.join(', ')}</dd></div>
          <div><dt>Heart</dt><dd>${s.notes.heart.join(', ')}</dd></div>
          <div><dt>Base</dt><dd>${s.notes.base.join(', ')}</dd></div>
        </dl>
        <dl class="meters">
          <div><dt>Wear</dt><dd>${s.wear}</dd></div>
          <div><dt>Longevity</dt><dd>${s.longevity}</dd></div>
          <div><dt>Sillage</dt><dd>${sill(s.sillage)}</dd></div>
        </dl>
        <div class="acc">
          <details open><summary>The composition</summary><p>${s.story}</p></details>
          <details><summary>The ritual</summary><p>Two sprays on the pulse points, one in the air to walk through. Extraits sit close to the skin and open slowly, so give it ten minutes before you judge it.</p></details>
          <details><summary>Delivery &amp; returns</summary><p>Free delivery over €150, in 1 to 3 working days within the EU. Unopened bottles can be returned within 30 days; engraved bottles are final sale.</p></details>
          <details><summary>Ingredients</summary><p>Alcohol denat., parfum (fragrance), aqua. Vegan and cruelty free. Glass made in Normandy, onyx cut in Portugal.</p></details>
        </div>
      </div>
    </div>
  </div>

  <section class="pdp-story">
    <div class="container pdp-story__inner">
      <div>
        <p class="eyebrow eyebrow--light">The story of No. ${s.no}</p>
        <h2 data-split>${s.line.replace(/\.$/, '')}, <em>${s.mood.split(',')[0].toLowerCase()}.</em></h2>
        <p>${s.story}</p>
      </div>
      <div class="pdp-story__media" data-reveal-img>${picture(`detail-${s.id}`, { sizes: '(min-width: 900px) 45vw, 100vw', alt: `${s.name} on its set` })}</div>
    </div>
  </section>

  <section class="pairs">
    <div class="container">
      <header class="section-head"><p class="eyebrow">Wear it with</p><h2 class="section-title" data-split>The rest of <em>the collection.</em></h2></header>
      <div class="grid">${pairs.map((x) => cardHTML(x, { sizes: '(min-width: 900px) 23vw, 50vw' })).join('')}</div>
    </div>
  </section>

  <div class="sticky-buy" data-sticky>
    <p class="sticky-buy__name">${s.name}<small data-sticky-meta>50 ml · ${euro(s.price[50])}</small></p>
    <button class="btn btn--light" type="button" data-add-sticky>Add to bag</button>
  </div>`;

  const $ = (q) => el.querySelector(q);
  const $$ = (q) => [...el.querySelectorAll(q)];

  /* gallery */
  const slides = $$('.gallery__slide'), thumbs = $$('[data-slide]');
  let cur = 0;
  function show(i) {
    cur = i;
    slides.forEach((x, k) => x.classList.toggle('is-on', k === i));
    thumbs.forEach((x, k) => { x.classList.toggle('is-on', k === i); x.setAttribute('aria-selected', String(k === i)); });
    $('[data-badge]').hidden = i !== 2;
    if (i === 2) load3D(); else if (viewer) viewer.stop();
  }
  thumbs.forEach((t) => t.addEventListener('click', () => show(Number(t.dataset.slide))));
  // swipe between images on touch (not on the 3D slide, which turns the bottle)
  let sx = null;
  $('.gallery__main').addEventListener('touchstart', (e) => { sx = cur === 2 ? null : e.touches[0].clientX; }, { passive: true });
  $('.gallery__main').addEventListener('touchend', (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show((cur + (dx < 0 ? 1 : -1) + slides.length) % slides.length);
  });

  async function load3D() {
    if (viewer) { viewer.start(); viewer.resize(); return viewer; }
    if (viewerLoading) return viewerLoading;
    viewerLoading = (async () => {
      try {
        const { createBottleViewer } = await import('./viewer/index.js');
        if (disposed) return null;
        const v = await createBottleViewer({ canvas: $('[data-pdp-canvas]'), mode: 'pdp', scent: s.id, reducedMotion: !motion });
        if (disposed) { v.dispose(); return null; }
        viewer = v;
        v.setTheme?.('dark');
        v.setSize(size);
        v.setEngraving(engraving);
        v.resize();
        v.start();
        v.intro?.();
        $('[data-3d-loading]').hidden = true;
        setTimeout(() => { const h = $('[data-3d-hint]'); if (h) h.style.opacity = '0'; }, 4000);
        window.addEventListener('resize', onResize);
        return v;
      } catch (err) {
        console.warn('[ilvere] 3D viewer unavailable:', err && err.message);
        $('[data-3d-loading]').textContent = '3D preview needs WebGL 2';
        return null;
      }
    })();
    return viewerLoading;
  }
  const onResize = () => viewer && viewer.resize();

  /* options */
  function price() { return s.price[size]; }
  function syncPrice() {
    $('[data-price]').textContent = euro(price());
    $('[data-ppm]').textContent = `${euro(Math.round(price() / (size / 100)))} / 100 ml`;
    $('[data-add-price]').textContent = euro(price());
    $('[data-sticky-meta]').textContent = `${size} ml · ${euro(price())}${engraving ? ` · “${engraving}”` : ''}`;
  }
  $$('input[name="size"]').forEach((r) => r.addEventListener('change', () => {
    size = Number(r.value);
    syncPrice();
    if (viewer) viewer.setSize(size);
  }));
  const eng = $('[data-engrave]');
  eng.addEventListener('focus', () => { if (cur !== 2) show(2); });
  eng.addEventListener('input', () => {
    engraving = eng.value.replace(/[^\p{L}\p{N} .&'-]/gu, '').slice(0, 12);
    if (eng.value !== engraving) eng.value = engraving;
    $('[data-engrave-count]').textContent = `${engraving.length}/12`;
    if (viewer) viewer.setEngraving(engraving); else load3D();
    syncPrice();
  });

  const add = (from) => addToBag({ id: s.id, size, engraving, from });
  $('[data-add]').addEventListener('click', (e) => add(e.currentTarget));
  $('[data-add-sticky]').addEventListener('click', (e) => add(e.currentTarget));

  /* sticky bar on phones once the main button scrolls away */
  const sticky = $('[data-sticky]');
  const io = new IntersectionObserver(([e]) => sticky.classList.toggle('is-on', !e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
  io.observe($('[data-add]'));

  /* motion */
  const triggers = [];
  splitReveal(el);
  if (motion) {
    gsap.from($$('.buy > *'), { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay: 0.1 });
    gsap.from('.gallery__main', { clipPath: 'inset(6% 6% 6% 6% round 4px)', duration: 1.6, ease: 'expo.out' });
    $$('[data-reveal-img]').forEach((r) => {
      const t = gsap.to(r, { clipPath: 'inset(0% 0% 0% 0% round 4px)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 80%' } });
      gsap.to(r.querySelector('img'), { scale: 1, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 80%' } });
      triggers.push(t);
    });
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
