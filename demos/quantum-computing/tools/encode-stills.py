#!/usr/bin/env python3
"""Encodes the PNG stills rendered by tools/stills.mjs into the AVIF + WebP posters
the page uses (first paint, and the fallback for reduced motion or no WebGL).

usage: python3 tools/encode-stills.py <png folder> [out folder, default assets/img]

Expects poster-<k>.png (landscape, 2560 wide) for chapters 0-7 and
poster-<k>-portrait.png (1080 wide) for chapters 0, 4 and 7. Needs Pillow 11.3+.
"""
import os
import sys

from PIL import Image

SRC = sys.argv[1]
OUT = sys.argv[2] if len(sys.argv) > 2 else 'assets/img'

LANDSCAPE = {0: (1280, 1920, 2560)}  # chapter 0 is the first paint, so it gets a 2560 too
LANDSCAPE_DEFAULT = (1280, 1920)
PORTRAIT = {0: (720, 1080), 4: (1080,), 7: (1080,)}


def encode(im, stem):
    im.save(os.path.join(OUT, stem + '.avif'), quality=68, speed=4)
    im.save(os.path.join(OUT, stem + '.webp'), quality=82, method=6)
    sizes = [os.path.getsize(os.path.join(OUT, stem + ext)) // 1024 for ext in ('.avif', '.webp')]
    print(f'{stem}: avif {sizes[0]} KB, webp {sizes[1]} KB')


def widths(im, ws, stem):
    for w in ws:
        h = round(w * im.height / im.width)
        encode(im.resize((w, h), Image.LANCZOS), f'{stem}-{w}')


os.makedirs(OUT, exist_ok=True)
for k in range(8):
    path = os.path.join(SRC, f'poster-{k}.png')
    if os.path.exists(path):
        widths(Image.open(path).convert('RGB'), LANDSCAPE.get(k, LANDSCAPE_DEFAULT), f'poster-{k}')
    path = os.path.join(SRC, f'poster-{k}-portrait.png')
    if k in PORTRAIT and os.path.exists(path):
        widths(Image.open(path).convert('RGB'), PORTRAIT[k], f'poster-{k}-portrait')
