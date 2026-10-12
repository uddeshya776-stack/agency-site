/* The bag: line items, complimentary samples, persistence. Tiny pub/sub. */
import { byId, DISCOVERY, FREE_SHIPPING } from './data.js';

const KEY = 'ilvere-bag-v1';
const listeners = new Set();
let state = load();

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && Array.isArray(s.items)) return { items: s.items.filter(valid), samples: Array.isArray(s.samples) ? s.samples.slice(0, 2) : [] };
  } catch (e) { /* storage blocked */ }
  return { items: [], samples: [] };
}
function valid(it) { return it && (it.id === 'discovery' || byId(it.id)) && it.qty > 0; }
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } }
function emit(change) { save(); listeners.forEach((fn) => fn(state, change)); }

export const bag = {
  get: () => state,
  on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  keyOf: (id, size, engraving) => [id, size || '', (engraving || '').trim()].join('|'),
  add({ id, size = 50, engraving = '' }) {
    const key = this.keyOf(id, id === 'discovery' ? '' : size, engraving);
    const found = state.items.find((i) => i.key === key);
    if (found) found.qty = Math.min(found.qty + 1, 9);
    else state.items.push({ key, id, size: id === 'discovery' ? null : Number(size), engraving: (engraving || '').trim(), qty: 1 });
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
  priceOf(it) { return it.id === 'discovery' ? DISCOVERY.price : byId(it.id).price[it.size]; },
  subtotal() { return state.items.reduce((n, i) => n + this.priceOf(i) * i.qty, 0); },
  shipping() { const s = this.subtotal(); return s === 0 || s >= FREE_SHIPPING ? 0 : 9; },
  toFree() { return Math.max(0, FREE_SHIPPING - this.subtotal()); },
};
