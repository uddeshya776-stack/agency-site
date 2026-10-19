"""Build Wrenfold: encode images and expand <!--pic:...--> macros into index.html.

Usage (from demos/wedding-venue):
  python3 tools/build.py images <folder-of-source-pngs>   # writes assets/img/*.avif|webp
  python3 tools/build.py html                             # writes index.html from tools/index.src.html

Needs Pillow 11+ (AVIF support). Source images are named like the keys in IMAGES (hero.png, barn.png ...).
"""
import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'assets' / 'img'

# name -> (source file stem, widths, crop aspect (w/h) or None)
IMAGES = {
    'hero':          ('hero',          [1280, 1920, 2560], 16 / 9),
    'hero-portrait': ('hero_portrait', [720, 1080],        9 / 16),
    'ceremony':      ('ceremony',      [800, 1200, 1600],  3 / 2),
    'barn':          ('barn',          [800, 1200, 1600],  3 / 2),
    'lawn':          ('lawn',          [800, 1200, 1600],  3 / 2),
    'orangery':      ('orangery',      [800, 1200, 1600],  3 / 2),
    'barn-night':    ('barn_night',    [800, 1200, 1600, 2400], 3 / 2),
    'winter':        ('winter',        [800, 1200, 1600],  3 / 2),
    'suite':         ('suite',         [640, 960, 1440],   4 / 5),
    'table':         ('table',         [640, 960, 1440],   4 / 5),
    'arch':          ('arch',          [640, 960, 1440],   4 / 5),
    'aerial':        ('aerial',        [1200, 1800, 2400], 16 / 9),
}


def crop_to(im, aspect):
    w, h = im.size
    if abs(w / h - aspect) < 0.01:
        return im
    if w / h > aspect:
        nw = round(h * aspect)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = round(w / aspect)
    y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))


def encode(src_dir):
    from PIL import Image
    IMG.mkdir(parents=True, exist_ok=True)
    meta = {}
    for name, (stem, widths, aspect) in IMAGES.items():
        src = None
        for ext in ('.png', '.jpg', '.jpeg', '.webp'):
            p = Path(src_dir) / (stem + ext)
            if p.exists():
                src = p
                break
        if not src:
            print('skip (missing)', name)
            continue
        im = Image.open(src).convert('RGB')
        im = crop_to(im, aspect)
        made = []
        for w in widths:
            if w > im.width * 1.02:
                continue
            h = round(w / aspect)
            r = im.resize((w, h), Image.LANCZOS)
            r.save(IMG / f'{name}-{w}.avif', quality=58, speed=4)
            r.save(IMG / f'{name}-{w}.webp', quality=80, method=6)
            made.append(w)
        if not made:
            made = [im.width]
            im.save(IMG / f'{name}-{im.width}.avif', quality=58, speed=4)
            im.save(IMG / f'{name}-{im.width}.webp', quality=80, method=6)
        meta[name] = {'widths': made, 'aspect': aspect}
        print('ok', name, made)
        if name == 'hero':
            og = crop_to(im, 1200 / 630).resize((1200, 630), Image.LANCZOS)
            og.save(IMG / 'og-image.jpg', quality=86, optimize=True, progressive=True)
    old = {}
    mp = IMG / 'images.json'
    if mp.exists():
        old = json.loads(mp.read_text())
    old.update(meta)
    mp.write_text(json.dumps(old, indent=1))


def widths_for(name):
    mp = IMG / 'images.json'
    meta = json.loads(mp.read_text()) if mp.exists() else {}
    if name in meta:
        return meta[name]['widths'], meta[name]['aspect']
    stem, widths, aspect = IMAGES[name]
    return widths, aspect


def picture(name, sizes, alt, cls, loading):
    widths, aspect = widths_for(name)
    w = widths[-1]
    h = round(w / aspect)
    fallback = widths[min(1, len(widths) - 1)]
    avif = ', '.join(f'assets/img/{name}-{x}.avif {x}w' for x in widths)
    webp = ', '.join(f'assets/img/{name}-{x}.webp {x}w' for x in widths)
    pri = ' fetchpriority="high"' if loading == 'eager' else ''
    dec = 'sync' if loading == 'eager' else 'async'
    return (f'<picture><source type="image/avif" srcset="{avif}" sizes="{sizes}">'
            f'<source type="image/webp" srcset="{webp}" sizes="{sizes}">'
            f'<img class="{cls}" src="assets/img/{name}-{fallback}.webp" width="{w}" height="{h}" '
            f'alt="{alt}" loading="{loading}" decoding="{dec}"{pri}></picture>')


def hero_picture():
    """Art-directed hero: portrait render on phones, landscape elsewhere."""
    pw, pa = widths_for('hero-portrait')
    lw, la = widths_for('hero')
    out = '<picture>'
    for fmt in ('avif', 'webp'):
        out += (f'<source type="image/{fmt}" media="(max-width: 767px) and (orientation: portrait)" '
                f'srcset="{", ".join(f"assets/img/hero-portrait-{x}.{fmt} {x}w" for x in pw)}" sizes="100vw">')
        out += (f'<source type="image/{fmt}" '
                f'srcset="{", ".join(f"assets/img/hero-{x}.{fmt} {x}w" for x in lw)}" sizes="100vw">')
    out += (f'<img class="hero__img" src="assets/img/hero-{lw[min(1, len(lw)-1)]}.webp" width="{lw[-1]}" '
            f'height="{round(lw[-1] / la)}" alt="The honey-stone manor house at Wrenfold across a misty lawn at golden hour" '
            f'fetchpriority="high" decoding="sync"></picture>')
    return out


def preload_hero():
    pw, _ = widths_for('hero-portrait')
    lw, _ = widths_for('hero')
    return (
        '<link rel="preload" as="image" type="image/avif" fetchpriority="high" '
        f'imagesrcset="{", ".join(f"assets/img/hero-portrait-{x}.avif {x}w" for x in pw)}" imagesizes="100vw" '
        'media="(max-width: 767px) and (orientation: portrait)">\n  '
        '<link rel="preload" as="image" type="image/avif" fetchpriority="high" '
        f'imagesrcset="{", ".join(f"assets/img/hero-{x}.avif {x}w" for x in lw)}" imagesizes="100vw" '
        'media="(min-width: 768px), (orientation: landscape)">'
    )


def hero_video():
    v = ROOT / 'assets' / 'video'
    if not (v / 'hero.mp4').exists():
        return ''
    return ('<video class="hero__film" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1" '
            'data-film data-webm="assets/video/hero.webm" data-mp4="assets/video/hero.mp4"></video>')


def html():
    import re
    src = (ROOT / 'tools' / 'index.src.html').read_text()

    def rep(m):
        parts = m.group(1).split('|')
        name, sizes, alt, cls, loading = (parts + [''] * 5)[:5]
        if name == 'hero':
            return hero_picture()
        return picture(name, sizes, alt, cls, loading or 'lazy')

    out = re.sub(r'<!--pic:(.*?)-->', rep, src)
    out = out.replace('<!--preload:hero-->', preload_hero())
    out = out.replace('<!--video:hero-->', hero_video())
    meta = {}
    for name in IMAGES:
        w, a = widths_for(name)
        meta[name] = {'widths': w, 'aspect': round(a, 5)}
    spots = ROOT / 'tools' / 'aerial-hotspots.json'
    js = 'window.WRENFOLD_IMAGES=' + json.dumps(meta, separators=(',', ':')) + ';'
    if spots.exists():
        raw = json.loads(spots.read_text())
        js += 'window.WRENFOLD_HOTSPOTS=' + json.dumps({k: [round(v[0], 4), round(v[1], 4)] if isinstance(v, list) else [round(v['x'], 4), round(v['y'], 4)] for k, v in raw.items()}, separators=(',', ':')) + ';'
    out = out.replace('<!--images-json-->', '<script>' + js + '</script>')
    (ROOT / 'index.html').write_text(out)
    print('wrote index.html', len(out))


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'html'
    if cmd == 'images':
        encode(sys.argv[2])
    else:
        html()
