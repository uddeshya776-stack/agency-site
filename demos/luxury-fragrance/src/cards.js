/* Product cards, shared by the home page, the shop listing, search and the product page. */
import { byId, SCENTS, money, fromPrice, picture } from './data.js';
import { bag } from './store.js';

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/></svg>';

export function productHref(p, scent) { return `#/product/${p.id}${p.scents && scent ? '/' + scent : ''}`; }
export function giftcardArt(amount = 100) {
  return `<div class="giftcard-art"><div class="giftcard-art__card"><b>ILVÈRE</b><span><em>E-gift card</em><em data-gc-amount>${money(amount)}</em></span></div></div>`;
}

export function cardHTML(p, { sizes = '(min-width: 1100px) 23vw, (min-width: 900px) 31vw, 50vw', scent = null, badge = true } = {}) {
  const s = p.scent ? byId(p.scent) : null;
  const sel = p.scents ? (scent || 'ambre') : null;
  const selS = sel ? byId(sel) : null;
  const href = productHref(p, sel);
  const name = p.name;
  let media;
  if (p.id === 'giftcard') media = giftcardArt(100);
  else {
    media = picture(p.img, { sizes, alt: s ? `${s.name} bottle on its set` : name, cls: 'card__main' });
    if (p.alt) media += picture(p.alt, { sizes, alt: '', cls: 'card__alt' });
  }
  const glow = selS ? `<span class="card__glow" style="background: radial-gradient(70% 55% at 50% 60%, ${selS.liquid}, transparent 70%)"></span>` : '';
  const quickLabel = p.sizes ? 'Add to bag · 50 ml' : p.id === 'giftcard' ? 'Choose an amount' : 'Add to bag';
  const quick = p.id === 'giftcard'
    ? `<a class="card__quick" href="${href}"><span>${quickLabel}</span><span>from ${money(50)}</span></a>`
    : `<button type="button" class="card__quick" data-quick="${p.id}"${sel ? ` data-scent="${sel}"` : ''}><span>${quickLabel}</span><span>${money(fromPrice(p))}</span></button>`;
  const swatches = p.scents
    ? `<div class="card__swatches" role="group" aria-label="Scent">${SCENTS.map((x) => `<button type="button" data-swatch="${x.id}" aria-pressed="${x.id === sel}" aria-label="${x.name}" title="${x.name}"><i style="background:${x.liquid}"></i></button>`).join('')}</div>`
    : '';
  const wished = bag.isWished(p.id);
  return `<article class="card" data-card="${p.id}">
    ${badge && p.badge ? `<span class="card__tag">${p.badge}</span>` : ''}
    <button type="button" class="card__wish" data-wish="${p.id}" aria-pressed="${wished}" aria-label="${wished ? 'Remove from' : 'Save to'} wishlist: ${esc(name)}">${heart}</button>
    <a class="card__media" href="${href}" aria-label="${esc(name)}${selS ? ', ' + selS.name : ''}">${media}${glow}</a>
    <div class="card__info">
      <span class="card__type">${p.type}</span>
      <h3 class="card__name"><a href="${href}">${s ? `<span class="card__swatch" style="background:${s.liquid}"></span>` : ''}${esc(name)}</a></h3>
      <span class="card__price">${p.id === 'giftcard' ? 'from ' + money(50) : (p.sizes ? 'from ' : '') + money(fromPrice(p))}</span>
      <p class="card__mood" data-card-mood>${s ? s.mood : selS ? `In ${selS.name}` : p.desc}</p>
      ${swatches}
      ${quick}
    </div>
  </article>`;
}

/* delegated behaviour for swatches on any card */
export function bindCardSwatches(rootEl) {
  rootEl.addEventListener('click', (e) => {
    const sw = e.target.closest('[data-swatch]');
    if (!sw) return;
    const card = sw.closest('[data-card]');
    const id = sw.dataset.swatch, s = byId(id);
    card.querySelectorAll('[data-swatch]').forEach((b) => b.setAttribute('aria-pressed', String(b === sw)));
    const pid = card.dataset.card;
    card.querySelectorAll('a[href^="#/product/"]').forEach((a) => { a.href = `#/product/${pid}/${id}`; });
    const q = card.querySelector('[data-quick]');
    if (q) q.dataset.scent = id;
    const glow = card.querySelector('.card__glow');
    if (glow) glow.style.background = `radial-gradient(70% 55% at 50% 60%, ${s.liquid}, transparent 70%)`;
    const mood = card.querySelector('[data-card-mood]');
    if (mood) mood.textContent = `In ${s.name}`;
  });
}
