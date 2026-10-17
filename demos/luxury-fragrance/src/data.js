/* Ilvère catalogue. Fictional brand. Base prices in US dollars; other currencies are
   converted and rounded to boutique price points. */
export const SCENTS = [
  {
    id: 'ambre', name: 'Ambre Nocturne', no: '01',
    mood: 'Candlelit, warm, close to the skin',
    line: 'A resin glow that lasts until morning.',
    story: 'Written for the hour after dinner, when the candles are low and nobody wants to leave. Labdanum and benzoin melt into a vanilla absolute from a single grower in Madagascar, then a thread of smoked oud keeps it from ever turning sweet.',
    liquid: '#B8661E', family: 'Amber', familyLong: 'Amber · Woody',
    notes: { top: ['Pink pepper', 'Mandarin'], heart: ['Labdanum', 'Benzoin'], base: ['Vanilla absolute', 'Smoked oud'] },
    price: { 50: 265, 100: 375 }, wear: 'Evening · Fall, winter', longevity: '12 h +', sillage: 4, badge: 'Bestseller',
  },
  {
    id: 'figue', name: 'Figue Solaire', no: '02',
    mood: 'Sun on fig leaves, green and milky',
    line: 'Noon in a Provençal garden.',
    story: 'The green snap of a leaf torn from the tree, the milk that beads at the stem, the cedar of the shade you sit in. Bright bergamot opens it; jasmine sambac and soft white musk keep it on the skin long after the sun has moved.',
    liquid: '#C9B45A', family: 'Green', familyLong: 'Green · Fruity',
    notes: { top: ['Bergamot', 'Fig leaf'], heart: ['Fig milk', 'Jasmine sambac'], base: ['Cedar', 'White musk'] },
    price: { 50: 245, 100: 345 }, wear: 'Daytime · Spring, summer', longevity: '8 h', sillage: 3,
  },
  {
    id: 'rose', name: 'Rose Cendrée', no: '03',
    mood: 'Rose and incense ash, quietly smoky',
    line: 'A rose left on the altar.',
    story: 'Turkish rose, picked before dawn, laid over papyrus and a cool incense ash accord. Saffron and a drop of lychee lift it at first; hours later it settles into ambrette and smoke, a rose with a past.',
    liquid: '#D99A92', family: 'Floral', familyLong: 'Floral · Smoky',
    notes: { top: ['Saffron', 'Lychee'], heart: ['Turkish rose', 'Papyrus'], base: ['Incense', 'Ash accord', 'Ambrette'] },
    price: { 50: 260, 100: 365 }, wear: 'Any hour · All year', longevity: '10 h', sillage: 3,
  },
  {
    id: 'iris', name: "Sel d'Iris", no: '04',
    mood: 'Sea air, powder and salt',
    line: 'Iris roots, aged three years, by the sea.',
    story: 'Orris butter is the most patient material in perfumery: the roots rest three years before they give anything. We set it against sea salt and a crisp pear, then let ambrette seed and pale driftwood carry it, like linen drying in the wind off the Atlantic.',
    liquid: '#CFC8DA', family: 'Fresh', familyLong: 'Powdery · Aquatic',
    notes: { top: ['Sea salt', 'Pear'], heart: ['Orris butter', 'Violet leaf'], base: ['Ambrette seed', 'Driftwood'] },
    price: { 50: 285, 100: 395 }, wear: 'Daytime · Spring, summer', longevity: '9 h', sillage: 2, badge: 'New batch',
  },
  {
    id: 'vetiver', name: 'Vétiver Minuit', no: '05',
    mood: 'Midnight, black pepper and ink',
    line: 'Ink still wet on the page.',
    story: 'Haitian vetiver, smoky and rooted, sharpened with black pepper and cardamom. Underneath, an ink accord we spent a year on, with patchouli and a drop of birch tar. For people who write letters they never send.',
    liquid: '#4E5A3C', family: 'Woody', familyLong: 'Woody · Spicy',
    notes: { top: ['Black pepper', 'Cardamom'], heart: ['Haitian vetiver', 'Iris'], base: ['Ink accord', 'Patchouli', 'Birch tar'] },
    price: { 50: 255, 100: 355 }, wear: 'Evening · All year', longevity: '12 h +', sillage: 4,
  },
];

/* every product in the store. Fragrance products are the scents themselves (ids = scent ids);
   the others come in each of the five scents. */
export const CATEGORIES = [
  { id: 'fragrance', name: 'Fragrance', blurb: 'Extraits de parfum and travel sprays' },
  { id: 'home', name: 'Home', blurb: 'Candles and diffusers' },
  { id: 'body', name: 'Body', blurb: 'Body cream and hand & body wash' },
  { id: 'gifts', name: 'Gifts', blurb: 'Discovery sets and e-gift cards' },
];

export const PRODUCTS = [
  ...SCENTS.map((s) => ({ id: s.id, cat: 'fragrance', type: 'Extrait de parfum', name: s.name, scent: s.id, img: `card-${s.id}`, alt: `detail-${s.id}`, sizes: [50, 100], price: s.price, badge: s.badge, desc: s.line })),
  { id: 'travel', cat: 'fragrance', type: 'Travel spray · 10 ml', name: 'Travel Spray', scents: true, img: 'card-travel', price: 72, desc: 'Every extrait in a gold-capped 10 ml tube with a leather sleeve. Refillable.', badge: 'Refillable' },
  { id: 'candle', cat: 'home', type: 'Scented candle · 220 g', name: 'Scented Candle', scents: true, img: 'card-candle', alt: 'banner-home', price: 92, desc: 'Coconut and rapeseed wax in a stone vessel, 55 hours of burn. Ask for a refill when it is done.' },
  { id: 'diffuser', cat: 'home', type: 'Diffuser · 200 ml', name: 'Room Diffuser', scents: true, img: 'card-diffuser', price: 135, desc: 'Heavy glass, black rattan reeds, three months of scent. Refills from $78.' },
  { id: 'cream', cat: 'body', type: 'Body cream · 200 ml', name: 'Body Cream', scents: true, img: 'card-cream', price: 78, desc: 'Shea butter and squalane, scented with the extrait. In a refillable glass jar.' },
  { id: 'wash', cat: 'body', type: 'Hand & body wash · 300 ml', name: 'Hand & Body Wash', scents: true, img: 'card-wash', price: 56, desc: 'A gentle, sulfate-free wash that leaves the scent on your hands.' },
  { id: 'discovery', cat: 'gifts', type: '5 × 2 ml', name: 'The Discovery Set', img: 'discovery', price: 42, desc: 'All five extraits in a black lacquered case. The full $42 comes back as credit on your first 50 ml.', badge: 'Start here' },
  { id: 'giftcard', cat: 'gifts', type: 'E-gift card', name: 'E-Gift Card', img: null, price: 100, amounts: [50, 100, 250, 500], desc: 'Delivered by email at the hour you choose, with a handwritten-style note.' },
];

export const productById = (id) => PRODUCTS.find((p) => p.id === id);
export const byId = (id) => SCENTS.find((s) => s.id === id);
export const FREE_SHIPPING = 150; // USD

/* ------------------------------------------------------------------ money */
export const CURRENCIES = {
  USD: { rate: 1, locale: 'en-US', label: 'United States', flag: 'US' },
  GBP: { rate: 0.79, locale: 'en-GB', label: 'United Kingdom', flag: 'GB' },
  EUR: { rate: 0.92, locale: 'fr-FR', label: 'Europe', flag: 'EU' },
  CAD: { rate: 1.37, locale: 'en-CA', label: 'Canada', flag: 'CA' },
  AUD: { rate: 1.52, locale: 'en-AU', label: 'Australia', flag: 'AU' },
};
let currency = 'USD';
try { const c = localStorage.getItem('ilvere-cur'); if (CURRENCIES[c]) currency = c; } catch (e) { /* ignore */ }
export const getCurrency = () => currency;
export function setCurrency(c) { if (!CURRENCIES[c]) return; currency = c; try { localStorage.setItem('ilvere-cur', c); } catch (e) { /* ignore */ } }
/* converted prices land on boutique price points: whole units ending in 0 or 5 above 20 */
export function convert(usd) {
  const v = usd * CURRENCIES[currency].rate;
  if (currency === 'USD') return usd;
  return v >= 20 ? Math.round(v / 5) * 5 : Math.round(v);
}
export function money(usd) {
  const c = CURRENCIES[currency];
  return new Intl.NumberFormat(c.locale, { style: 'currency', currency, maximumFractionDigits: 0, minimumFractionDigits: 0, currencyDisplay: currency === 'USD' || currency === 'GBP' || currency === 'EUR' ? 'narrowSymbol' : 'symbol' }).format(convert(usd));
}
/* sum of converted line prices, so totals always match the lines */
export function moneyOfConverted(total) {
  const c = CURRENCIES[currency];
  return new Intl.NumberFormat(c.locale, { style: 'currency', currency, maximumFractionDigits: 0, minimumFractionDigits: 0, currencyDisplay: currency === 'USD' || currency === 'GBP' || currency === 'EUR' ? 'narrowSymbol' : 'symbol' }).format(total);
}

export function fromPrice(p) { return typeof p.price === 'number' ? p.price : p.price[50]; }

/* ------------------------------------------------------------------ images */
const W = { card: [640, 960, 1440], detail: [640, 960, 1440], discovery: [640, 960, 1440], lineup: [1280, 1920, 2560], atelier: [1280, 1920, 2560], banner: [1280, 1920, 2560] };
const R = { lineup: [2560, 1100], atelier: [2560, 1440], banner: [2560, 1440] };
export function srcset(base, ext) {
  const k = base.split('-')[0];
  return W[k].map((w) => `assets/img/${base}-${w}.${ext} ${w}w`).join(', ');
}
export function picture(base, { sizes = '100vw', alt = '', cls = '', loading = 'lazy', fetchpriority } = {}) {
  const k = base.split('-')[0];
  const w = W[k], ratio = R[k] || [1440, 1800];
  return `<picture class="${cls}">
    <source type="image/avif" srcset="${srcset(base, 'avif')}" sizes="${sizes}">
    <img src="assets/img/${base}-${w[1]}.webp" srcset="${srcset(base, 'webp')}" sizes="${sizes}" alt="${alt}"
      width="${ratio[0]}" height="${ratio[1]}" loading="${loading}" decoding="async"${fetchpriority ? ` fetchpriority="${fetchpriority}"` : ''}>
  </picture>`;
}

/* ------------------------------------------------------------------ scent finder */
export const QUIZ = [
  {
    q: 'Pick an hour.',
    a: [
      { t: 'Early morning', s: { iris: 2, figue: 1 } },
      { t: 'High noon', s: { figue: 2, iris: 1 } },
      { t: 'Golden hour', s: { rose: 2, ambre: 1 } },
      { t: 'Past midnight', s: { vetiver: 2, ambre: 1 } },
    ],
  },
  {
    q: 'Where would you rather be?',
    a: [
      { t: 'A cliff above the sea', s: { iris: 2 } },
      { t: 'A walled garden', s: { figue: 2, rose: 1 } },
      { t: 'An old chapel', s: { rose: 2, vetiver: 1 } },
      { t: 'A library by the fire', s: { ambre: 2, vetiver: 1 } },
    ],
  },
  {
    q: 'And on your skin?',
    a: [
      { t: 'Clean, airy, barely there', s: { iris: 2, figue: 1 } },
      { t: 'Green and bright', s: { figue: 2 } },
      { t: 'Soft smoke', s: { rose: 1, vetiver: 2 } },
      { t: 'Warm and enveloping', s: { ambre: 3 } },
    ],
  },
];

/* ------------------------------------------------------------------ boutiques */
export const BOUTIQUES = [
  { city: 'Paris', area: 'Le Marais', addr: '14 rue de Turenne, 75003', hours: 'Mon–Sat 10:00–19:30', flagship: true },
  { city: 'London', area: 'Marylebone', addr: '41 Marylebone High Street, W1U', hours: 'Mon–Sat 10:00–19:00 · Sun 12:00–18:00' },
  { city: 'New York', area: 'SoHo', addr: '112 Greene Street, NY 10012', hours: 'Mon–Sat 11:00–19:00 · Sun 12:00–18:00' },
  { city: 'Los Angeles', area: 'West Hollywood', addr: '8440 Melrose Place, CA 90069', hours: 'Daily 11:00–19:00' },
  { city: 'Toronto', area: 'Yorkville', addr: '102 Yorkville Avenue, ON M5R', hours: 'Mon–Sat 10:00–18:00' },
  { city: 'Sydney', area: 'Paddington', addr: '23 Glenmore Road, NSW 2021', hours: 'Daily 10:00–18:00' },
  { city: 'Copenhagen', area: 'Indre By', addr: 'Store Regnegade 9, 1110', hours: 'Mon–Sat 10:00–18:00' },
  { city: 'Munich', area: 'Altstadt', addr: 'Maffeistraße 4, 80333', hours: 'Mon–Sat 10:00–19:00' },
];
