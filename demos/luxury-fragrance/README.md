# Ilvère — cinematic luxury fragrance store (concept)

A concept e-commerce website for a fictional Paris fragrance house, built to show established beauty and fragrance brands what a premium, cinematic store can feel like. Static HTML, CSS and JavaScript; the built files are committed, so there is nothing to install to run or host it.

Live: https://uddeshya776-stack.github.io/agency-site/demos/luxury-fragrance/

## What's inside

- **A real-time 3D bottle** (three.js): heavy glass ray traced against the exact bottle shape, with refraction, a coloured liquid, a black onyx cap and gold collar, lit by a procedural studio. Scrolling the hero glides the camera in, lifts the cap and turns the bottle; the collection section changes the liquid colour scent by scent.
- **Live engraving preview**: on a perfume's product page, typing a name engraves it in gold on the 3D cap as you type; switching 50/100 ml resizes the bottle.
- **A big-brand store**: four categories, 12 products (37 variants), mega menu, instant search (`/` or Ctrl/Cmd+K) that also matches notes, shop page with "shop the line" scent filter and sorting, wishlist, country and currency switch (USD, GBP, EUR, CAD, AUD with boutique price points).
- **Conversion features**: scent finder quiz, discovery set credited on the first bottle, two free samples picked in the bag, free-shipping progress bar, express checkout buttons, Klarna/Afterpay messaging, gifts by budget, e-gift cards with a send date, refills and loyalty, boutiques with consultation booking.
- **Bag and checkout**: slide-out bag kept on the device, quantity and sample controls, a validated one-page checkout and a confirmation (nothing is sent; it is a demo).
- **Original imagery only**: every product photo is a Blender (Cycles) render made for this demo. Render scripts live in the project's shared folder (`demos/luxury-fragrance/render-source/`).
- **Accessible and resilient**: passes an axe-core WCAG 2.2 AA scan on the home, shop and product pages; keyboard focus traps in the bag, search and region dialogs; reduced-motion support; falls back to still renders without WebGL 2 (`?no3d` forces it).

## Run it locally

```bash
cd demos/luxury-fragrance && python3 -m http.server 8000
```

It must be served over http(s); opening `index.html` from disk blocks the modules.

## Edit and rebuild

```bash
cd demos/luxury-fragrance
npm install
npm run build      # or: npm run watch
```

- `src/main.js`: page logic, router (`#/`, `#/shop/<category>`, `#/product/<id>[/<scent>]`, `#/checkout`), mega menu, search, currency, bag.
- `src/data.js`: the catalogue (scents, products, prices in USD, currencies, boutiques, quiz).
- `src/product.js`, `src/shop.js`, `src/checkout.js`, `src/cards.js`, `src/store.js`: views, cards and the bag.
- `src/stage.js`: the fixed 3D stage behind the hero and collection.
- `src/viewer/`: the 3D bottle (`createBottleViewer`, API documented at the top of `index.js`). `viewer-test.html` shows it alone (needs `npm install` and a local server).
- `SPEC.md`: the shared design spec (brand, bottle geometry, scents).

## Make it a client's store

| What | Where |
|---|---|
| Brand name, copy, sections | `index.html` |
| Products, prices, scents, boutiques | `src/data.js` |
| Colours and type | `:root` in `assets/css/styles.css`, fonts in `assets/fonts/` |
| Product photos | `assets/img/` (`card-*`, `detail-*`, AVIF + WebP at 640/960/1440) |
| Bottle shape and materials | `src/viewer/geometry.js`, `src/viewer/materials.js` |

For production the same front end can sit on Shopify (Hydrogen or a theme with these sections) so the client's team edits products and content in Shopify.
