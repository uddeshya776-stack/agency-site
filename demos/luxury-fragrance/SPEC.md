# Ilvère — design spec (shared by everyone building demo 3)

Concept e-commerce site for a FICTIONAL Paris fragrance house. Goal: a prospect opens it and says "yes, build me this". Ultra-premium, cinematic, quiet luxury (think Byredo / Le Labo / Aesop / Diptyque level art direction, but original). Original visuals only: no stock, no downloaded models/HDRIs/textures, everything procedural.

## Brand
- Name: **ILVÈRE** (Maison Ilvère, Paris). Tagline: "Perfume, written slowly." Extraits de parfum, 24% concentration, macerated 8 weeks.
- Palette: bone #EFE9E1 (main bg), ink #14110F (text, dark sections), smoke #2A2522, warm grey #8C847C, champagne gold #C8A76A (sparingly), plus each scent's liquid colour.
- Type: a high-contrast display serif (italic used for emphasis) + a clean grotesk. Self-hosted woff2.

## The bottle (identical in Blender renders and in the three.js viewer)
Units: centimetres, Y up, origin at the centre of the bottle's bottom face.
- **Body**: heavy clear glass block, rectangular with softly rounded vertical edges. Width 6.2 (X), depth 3.4 (Z), height 8.0 (Y). Vertical edge radius 0.9, top/bottom edge bevel radius 0.25. Optical glass, IOR 1.5, very slightly warm-tinted (almost clear).
- **Base**: solid glass, 1.4 thick (the liquid starts at y=1.4). Walls 0.45 thick on sides, 0.45 front/back. Glass top shoulder at y=8.0 is flat.
- **Liquid**: fills the inner cavity from y=1.4 to y=6.6 (meniscus flat). Inner cavity = body inset by the wall thickness, edge radius 0.45. Liquid IOR 1.36, colour per scent (below), mostly transparent with absorption so thick parts read deeper.
- **Collar**: polished champagne-gold ring at the neck, cylinder dia 2.0, height 0.5, sits at y=8.0..8.5.
- **Cap**: a sculpted **monolith of polished black onyx** (stone, slightly glossy, faint warm veining), rounded-rectangle block width 3.4, depth 2.4, height 3.6, edge radius 0.35, sitting on the collar at y=8.5..12.1. Thin gold hairline ring (0.06) at the bottom of the cap.
- **Front print** (on the front glass face, z=+1.7, centred x): "ILVÈRE" in widely tracked serif caps, cap height 0.42, gold-ish white, at y=5.7; below it the scent name in small italic serif at y=4.9; "EXTRAIT DE PARFUM · 50 ML" tiny grotesk caps at y=2.3. (If text is too hard in Blender, a clean SVG/texture decal is fine.)
- **Dip tube**: thin clear tube from the collar down to y=1.6 (subtle).
- 100 ml size: same design scaled 1.18 on all axes (used for the size switch in the viewer).

## The five scents (liquid colour hex, then notes)
| id | Name | Liquid | Mood | Top / Heart / Base | Price 50 ml / 100 ml |
|---|---|---|---|---|---|
| ambre | **Ambre Nocturne** | #B8661E deep amber | candlelit, warm | Pink pepper, mandarin / Labdanum, benzoin / Vanilla absolute, smoked oud | €245 / €345 |
| figue | **Figue Solaire** | #C9B45A pale green-gold | sun on fig leaves | Bergamot, fig leaf / Fig milk, jasmine sambac / Cedar, white musk | €225 / €315 |
| rose | **Rose Cendrée** | #D99A92 blush rose | rose and incense ash | Saffron, lychee / Turkish rose, papyrus / Incense, ash accord, ambrette | €240 / €335 |
| iris | **Sel d'Iris** | #CFC8DA pale lilac, nearly clear | sea air and powder | Sea salt, pear / Orris butter, violet leaf / Ambrette seed, driftwood | €260 / €365 |
| vetiver | **Vétiver Minuit** | #4E5A3C smoky olive-ink | midnight, black pepper | Black pepper, cardamom / Haitian vetiver, iris / Ink accord, patchouli, birch tar | €235 / €330 |

Also sold: Discovery Set (5 × 2 ml vials in a black lacquered case, €38).

## Art direction for imagery (Blender)
- Studio product photography language: one large soft key, gentle rim lights, deep soft shadows, caustics/refraction visible through the glass onto the surface (this is the "wow").
- Surfaces: travertine stone plinths, still water, raw linen, sand, polished black stone. Each scent has a set that hints at its notes (e.g. ambre: dark warm stone + amber candle glow; figue: warm limestone + hard sun with leaf shadow gobo; rose: blush plaster + soft haze; iris: pale stone + water ripple caustics; vetiver: black slate + cool low light).
- Grade: AgX, slightly warm, filmic, no oversaturation.
