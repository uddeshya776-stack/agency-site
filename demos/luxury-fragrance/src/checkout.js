/* Demo checkout: one page form with validation and a confirmation. Nothing is sent. */
import { byId, euro } from './data.js';

export function renderCheckout(el, { lineItemHTML, bag, gsap, motion }) {
  const st = bag.get();
  if (!st.items.length) {
    el.innerHTML = `<div class="container success"><h1>Your bag is empty.</h1><p>Choose a bottle first, then come back here.</p><a class="btn btn--dark" href="#shop">Shop the collection</a></div>`;
    return () => { el.innerHTML = ''; };
  }
  const ship = bag.shipping();
  const samples = st.samples.map((id) => byId(id).name);
  el.innerHTML = `
  <div class="container checkout">
    <div>
      <h1>Checkout</h1>
      <ol class="steps"><li class="is-on">Details</li><li>·</li><li class="is-on">Delivery</li><li>·</li><li class="is-on">Payment</li></ol>
      <form class="co-form" novalidate data-co>
        <fieldset>
          <legend>Contact</legend>
          <div class="field"><label for="co-email">Email</label><input id="co-email" name="email" type="email" autocomplete="email" required><span class="err"></span></div>
        </fieldset>
        <fieldset>
          <legend>Delivery</legend>
          <div class="field field--half"><label for="co-first">First name</label><input id="co-first" name="first" autocomplete="given-name" required><span class="err"></span></div>
          <div class="field field--half"><label for="co-last">Last name</label><input id="co-last" name="last" autocomplete="family-name" required><span class="err"></span></div>
          <div class="field"><label for="co-addr">Address</label><input id="co-addr" name="addr" autocomplete="street-address" required><span class="err"></span></div>
          <div class="field field--half"><label for="co-city">City</label><input id="co-city" name="city" autocomplete="address-level2" required><span class="err"></span></div>
          <div class="field field--half"><label for="co-zip">Postcode</label><input id="co-zip" name="zip" autocomplete="postal-code" required><span class="err"></span></div>
          <div class="field"><label for="co-country">Country</label><select id="co-country" name="country" autocomplete="country-name"><option>France</option><option>Germany</option><option>Italy</option><option>Spain</option><option>United Kingdom</option><option>United States</option><option>United Arab Emirates</option></select></div>
        </fieldset>
        <fieldset>
          <legend>Payment</legend>
          <div class="pay-opts">
            <label class="pay-opt"><input type="radio" name="pay" checked> <span>Card</span><span>Visa · Mastercard · Amex</span></label>
            <label class="pay-opt"><input type="radio" name="pay"> <span>Apple Pay</span><span>Express</span></label>
            <label class="pay-opt"><input type="radio" name="pay"> <span>PayPal</span><span>Pay in 3</span></label>
          </div>
        </fieldset>
        <p class="demo-note">This is a concept store: no payment is taken and nothing is sent.</p>
        <button class="btn btn--dark btn--block" type="submit">Place order · ${euro(bag.subtotal() + ship)}</button>
      </form>
    </div>
    <aside class="summary" aria-label="Order summary">
      <h2>Your order</h2>
      ${st.items.map((it) => lineItemHTML(it, { controls: false })).join('')}
      ${samples.length ? `<div class="sum-row"><span>Samples</span><span>${samples.join(', ')}</span></div>` : ''}
      <div class="sum-row"><span>Subtotal</span><span>${euro(bag.subtotal())}</span></div>
      <div class="sum-row"><span>Delivery</span><span>${ship ? euro(ship) : 'Complimentary'}</span></div>
      <div class="sum-row"><span>Gift wrapping &amp; engraving</span><span>Complimentary</span></div>
      <div class="sum-row sum-row--total"><span>Total</span><span>${euro(bag.subtotal() + ship)}</span></div>
    </aside>
  </div>`;

  const form = el.querySelector('[data-co]');
  const rules = {
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Please enter a valid email.',
    first: (v) => !!v || 'Required.', last: (v) => !!v || 'Required.', addr: (v) => v.length > 3 || 'Please enter your address.',
    city: (v) => !!v || 'Required.', zip: (v) => v.length >= 3 || 'Please enter a postcode.',
  };
  function check(input) {
    const r = rules[input.name];
    if (!r) return true;
    const res = r(input.value.trim());
    const err = input.parentElement.querySelector('.err');
    input.setAttribute('aria-invalid', String(res !== true));
    err.textContent = res === true ? '' : res;
    return res === true;
  }
  form.addEventListener('blur', (e) => { if (e.target.name && e.target.value) check(e.target); }, true);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = [...form.querySelectorAll('input[name]')].filter((i) => !check(i));
    if (bad.length) { bad[0].focus(); return; }
    const name = form.first.value.trim();
    const no = 'IV-' + Math.floor(100000 + Math.random() * 899999);
    bag.clear();
    el.innerHTML = `<div class="container success">
      <div class="success__seal"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <p class="eyebrow">Order ${no}</p>
      <h1>Merci, ${name.replace(/[<>&"]/g, '')}.</h1>
      <p>Your bottle is being engraved and wrapped in the atelier. A confirmation is on its way to your inbox (in a real store, that is).</p>
      <a class="btn btn--dark" href="#/">Back to the Maison</a></div>`;
    window.scrollTo(0, 0);
    if (motion) gsap.from(el.querySelectorAll('.success > *'), { opacity: 0, y: 24, duration: 1.1, ease: 'expo.out', stagger: 0.08 });
  });
  return () => { el.innerHTML = ''; };
}
