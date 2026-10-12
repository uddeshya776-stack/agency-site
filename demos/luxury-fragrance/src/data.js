/* Ilvère catalogue. Fictional brand, prices in euros. */
export const SCENTS = [
  {
    id: 'ambre',
    name: 'Ambre Nocturne',
    no: '01',
    mood: 'Candlelit, warm, close to the skin',
    line: 'A resin glow that lasts until morning.',
    story: 'Written for the hour after dinner, when the candles are low and nobody wants to leave. Labdanum and benzoin melt into a vanilla absolute we buy from a single grower in Madagascar, then a thread of smoked oud keeps it from ever turning sweet.',
    liquid: '#B8661E',
    tint: '#2a1a10',
    family: 'Amber · Woody',
    notes: {
      top: ['Pink pepper', 'Mandarin'],
      heart: ['Labdanum', 'Benzoin'],
      base: ['Vanilla absolute', 'Smoked oud'],
    },
    price: { 50: 245, 100: 345 },
    wear: 'Evening · Autumn, winter',
    longevity: '12 h +',
    sillage: 4,
  },
  {
    id: 'figue',
    name: 'Figue Solaire',
    no: '02',
    mood: 'Sun on fig leaves, green and milky',
    line: 'Noon in a Provençal garden.',
    story: 'The green snap of a leaf torn from the tree, the milk that beads at the stem, the cedar of the shade you sit in. Bright bergamot opens it; jasmine sambac and soft white musk keep it on the skin long after the sun has moved.',
    liquid: '#C9B45A',
    tint: '#1f1e12',
    family: 'Green · Fruity',
    notes: {
      top: ['Bergamot', 'Fig leaf'],
      heart: ['Fig milk', 'Jasmine sambac'],
      base: ['Cedar', 'White musk'],
    },
    price: { 50: 225, 100: 315 },
    wear: 'Daytime · Spring, summer',
    longevity: '8 h',
    sillage: 3,
  },
  {
    id: 'rose',
    name: 'Rose Cendrée',
    no: '03',
    mood: 'Rose and incense ash, quietly smoky',
    line: 'A rose left on the altar.',
    story: 'Turkish rose, picked before dawn, laid over papyrus and a cool incense ash accord. Saffron and a drop of lychee lift it at first; hours later it settles into ambrette and smoke, a rose with a past.',
    liquid: '#D99A92',
    tint: '#2a1a1a',
    family: 'Floral · Smoky',
    notes: {
      top: ['Saffron', 'Lychee'],
      heart: ['Turkish rose', 'Papyrus'],
      base: ['Incense', 'Ash accord', 'Ambrette'],
    },
    price: { 50: 240, 100: 335 },
    wear: 'Any hour · All year',
    longevity: '10 h',
    sillage: 3,
  },
  {
    id: 'iris',
    name: "Sel d'Iris",
    no: '04',
    mood: 'Sea air, powder and salt',
    line: 'Iris roots, aged three years, by the sea.',
    story: 'Orris butter is the most patient material in perfumery: the roots rest three years before they give anything. We set it against sea salt and a crisp pear, then let ambrette seed and pale driftwood carry it, like linen drying in the wind off the Atlantic.',
    liquid: '#CFC8DA',
    tint: '#1c1b22',
    family: 'Powdery · Aquatic',
    notes: {
      top: ['Sea salt', 'Pear'],
      heart: ['Orris butter', 'Violet leaf'],
      base: ['Ambrette seed', 'Driftwood'],
    },
    price: { 50: 260, 100: 365 },
    wear: 'Daytime · Spring, summer',
    longevity: '9 h',
    sillage: 2,
  },
  {
    id: 'vetiver',
    name: 'Vétiver Minuit',
    no: '05',
    mood: 'Midnight, black pepper and ink',
    line: 'Ink still wet on the page.',
    story: 'Haitian vetiver, smoky and rooted, sharpened with black pepper and cardamom. Underneath, an ink accord we spent a year on, with patchouli and a drop of birch tar. For people who write letters they never send.',
    liquid: '#4E5A3C',
    tint: '#14170f',
    family: 'Woody · Spicy',
    notes: {
      top: ['Black pepper', 'Cardamom'],
      heart: ['Haitian vetiver', 'Iris'],
      base: ['Ink accord', 'Patchouli', 'Birch tar'],
    },
    price: { 50: 235, 100: 330 },
    wear: 'Evening · All year',
    longevity: '12 h +',
    sillage: 4,
  },
];

export const DISCOVERY = {
  id: 'discovery',
  name: 'The Discovery Set',
  line: 'All five extraits, 5 × 2 ml, in a black lacquered case.',
  price: 38,
  credit: 38,
};

export const FREE_SHIPPING = 150;

export const byId = (id) => SCENTS.find((s) => s.id === id);

export const euro = (n) => '€' + n.toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

/* image helpers: srcset for the renders in assets/img */
const W = { card: [640, 960, 1440], detail: [640, 960, 1440], discovery: [640, 960, 1440], lineup: [1280, 1920, 2560], atelier: [1280, 1920, 2560] };
export function srcset(base, kind, ext) {
  const k = kind || base.split('-')[0];
  return W[k].map((w) => `assets/img/${base}-${w}.${ext} ${w}w`).join(', ');
}
export function picture(base, { sizes = '100vw', alt = '', cls = '', loading = 'lazy', fetchpriority } = {}) {
  const k = base.split('-')[0];
  const w = W[k];
  const ratio = k === 'lineup' ? [2560, 1100] : k === 'atelier' ? [2560, 1440] : [1440, 1800];
  return `<picture class="${cls}">
    <source type="image/avif" srcset="${srcset(base, k, 'avif')}" sizes="${sizes}">
    <img src="assets/img/${base}-${w[1]}.webp" srcset="${srcset(base, k, 'webp')}" sizes="${sizes}" alt="${alt}"
      width="${ratio[0]}" height="${ratio[1]}" loading="${loading}" decoding="async"${fetchpriority ? ` fetchpriority="${fetchpriority}"` : ''}>
  </picture>`;
}

/* scent finder: each answer adds points to scents */
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
