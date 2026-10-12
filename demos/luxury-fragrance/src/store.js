/* The bag and the wishlist: line items, complimentary samples, persistence. Tiny pub/sub. */
import { productById, byId, FREE_SHIPPING, convert } from './data.js';

const KEY = 'ilvere-bag-v2';
const WKEY = 'ilvere-wish-v1';
const listeners = new Set();
let state = load();
let wish = loadWish();

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && Array.isArray(s.items)) return { items: s.items.filter(valid), samples: Array.isArray(s.samples) ? s.samples.filter(byId).slice(0, 2) : [] };
  } catch (e) { /* storage blocked */ }
  return { items: [], samples: [] };
}
function loadWish() { try { const w = JSON.parse(localStorage.getItem(WKEY)); return Array.isArray(w) ? w.filter(productById) : []; } catch (e) { return []; } }
function valid(it) { return it && productById(it.pid) && it.qty > 0; }
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); localStorage.setItem(WKEY, JSON.stringify(wish)); } catch (e) { /* ignore */ } }
function emit(change) { save(); listeners.forEach((fn) => fn(state, change)); }

export const bag = {
  get: () => state,
  on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  add({ pid, scent = null, size = null, engraving = '', amount = null }) {
    const p = productById(pid);
    if (p.sizes && !size) size = 50;
    if (p.scents && !scent) scent = 'ambre';
    engraving = (engraving || '').trim();
    const key = [pid, scent || '', size || '', engraving, amount || ''].join('|');
    const found = state.items.find((i) => i.key === key);
    if (found) found.qty = Math.min(found.qty + 1, 9);
    else state.items.push({ key, pid, scent, size, engraving, amount, qty: 1 });
    emit({ type: 'add', key });
  },
  setQty(key, qty) {
    const it = state.items.find((i) => i.key === key);
    if (!it) return;
    if (qty <= 0) state.items = state.items.filter((i) => i.key !== key);
    else it.qty = Math.min(qty, 9);
    emit({ type: 'qty', key });
  },
  remove(key) { state.items = state.items.filter((i) => i.key !== key); emit({ type: 'remove', key }); },
  toggleSample(id) {
    const s = state.samples;
    if (s.includes(id)) state.samples = s.filter((x) => x !== id);
    else if (s.length < 2) s.push(id);
    emit({ type: 'samples' });
  },
  clear() { state = { items: [], samples: [] }; emit({ type: 'clear' }); },
  count: () => state.items.reduce((n, i) => n + i.qty, 0),
  /* unit price in USD */
  priceOf(it) {
    const p = productById(it.pid);
    if (it.amount) return it.amount;
    return typeof p.price === 'number' ? p.price : p.price[it.size];
  },
  subtotalUSD() { return state.items.reduce((n, i) => n + this.priceOf(i) * i.qty, 0); },
  /* in the shopper's currency, summed from converted line prices */
  subtotal() { return state.items.reduce((n, i) => n + convert(this.priceOf(i)) * i.qty, 0); },
  shipping() { const s = this.subtotalUSD(); return s === 0 || s >= FREE_SHIPPING ? 0 : convert(12); },
  toFreeUSD() { return Math.max(0, FREE_SHIPPING - this.subtotalUSD()); },

  /* wishlist */
  wish: () => wish,
  isWished: (pid) => wish.includes(pid),
  toggleWish(pid) {
    wish = wish.includes(pid) ? wish.filter((x) => x !== pid) : [...wish, pid];
    emit({ type: 'wish', pid });
    return wish.includes(pid);
  },
};
