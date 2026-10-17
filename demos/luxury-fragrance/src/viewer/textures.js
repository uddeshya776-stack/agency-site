/* Canvas textures: the enamel front print and the gold engraving on the cap.
   Fonts: the page's self-hosted 'Ilvere Display' / 'Ilvere Sans' first, then system fallbacks. */
import * as THREE from 'three';

export const SERIF = "'Ilvere Display', 'Cormorant Garamond', 'Cormorant', 'Bodoni Moda', Didot, 'Bodoni 72', 'Playfair Display', Georgia, 'Times New Roman', serif";
export const SANS = "'Ilvere Sans', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

/* Front print: the canvas maps to x in [-2.6, 2.6] cm, y in [1.5, 6.7] cm on the front face. */
const PX0 = -2.6, PY0 = 1.5, PSPAN = 5.2;

function drawTracked(ctx, text, cx, y, tracking) {
  // canvas letterSpacing is not everywhere: lay the glyphs out by hand, centred
  const chars = Array.from(text);
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + tracking * (chars.length - 1);
  let x = cx - total / 2;
  ctx.textAlign = 'left';
  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], x, y);
    x += widths[i] + tracking;
  }
  return total;
}

export function createPrintTexture(size = 1024) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.NoColorSpace;
  tex.anisotropy = 8;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.flipY = true;
  tex.userData.draw = (name, ml = 50) => {
    const ctx = canvas.getContext('2d');
    const S = size / PSPAN;                         // px per cm
    const Y = (cm) => (PY0 + PSPAN - cm) * S;       // cm (bottle y) -> canvas y
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'alphabetic';
    const cx = (0 - PX0) * S;
    // ILVÈRE: tracked serif caps, cap height 0.42 cm, centred on y = 5.7
    const capH = 0.42 * S;
    let fs = capH / 0.68;
    ctx.font = `400 ${fs}px ${SERIF}`;
    const m = ctx.measureText('H');
    const realCap = m.actualBoundingBoxAscent || fs * 0.68;
    fs *= capH / realCap;
    ctx.font = `400 ${fs}px ${SERIF}`;
    drawTracked(ctx, 'ILVÈRE', cx, Y(5.7) + capH / 2, fs * 0.42);
    // hairline rule
    ctx.fillRect(cx - 0.32 * S, Y(5.28), 0.64 * S, Math.max(1, 0.012 * S));
    // scent name: italic serif on y = 4.9
    const nfs = 0.36 * S;
    ctx.font = `italic 400 ${nfs}px ${SERIF}`;
    ctx.textAlign = 'center';
    let w = ctx.measureText(name).width;
    const maxW = 4.1 * S;
    if (w > maxW) ctx.font = `italic 400 ${nfs * maxW / w}px ${SERIF}`;
    ctx.fillText(name, cx, Y(4.9) + nfs * 0.22);
    // small caps line at y = 2.3
    const sfs = 0.15 * S;
    ctx.font = `500 ${sfs}px ${SANS}`;
    drawTracked(ctx, `EXTRAIT DE PARFUM · ${ml} ML`, cx, Y(2.3) + sfs * 0.36, sfs * 0.28);
    ctx.font = `400 ${sfs * 0.9}px ${SANS}`;
    drawTracked(ctx, 'PARIS', cx, Y(2.0) + sfs * 0.36, sfs * 0.5);
    tex.needsUpdate = true;
  };
  return tex;
}

/* Engraving on the front face of the cap: plane of ENG_W x ENG_H cm.
   G = sharp letters (alpha), R = blurred inverted letters (bump: the cut is recessed). */
export const ENG_W = 2.7, ENG_H = 0.7;
export function createEngravingTexture(w = 1024) {
  const h = Math.round(w * ENG_H / ENG_W);
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const scratch = document.createElement('canvas');
  scratch.width = w; scratch.height = h;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.NoColorSpace;
  tex.anisotropy = 8;
  tex.userData.draw = (text) => {
    const ctx = canvas.getContext('2d');
    const sx = scratch.getContext('2d');
    const t = String(text || '').toUpperCase().slice(0, 12);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(0, 0, w, h);
    if (!t) { tex.needsUpdate = true; return false; }
    // letters, white on transparent
    sx.clearRect(0, 0, w, h);
    sx.fillStyle = '#fff';
    sx.textBaseline = 'middle';
    let fs = h * 0.52;
    sx.font = `400 ${fs}px ${SERIF}`;
    const track = () => fs * 0.32;
    const measure = () => Array.from(t).reduce((a, c) => a + sx.measureText(c).width, 0) + track() * (t.length - 1);
    const maxW = w * 0.9;
    let tw = measure();
    if (tw > maxW) { fs *= maxW / tw; sx.font = `400 ${fs}px ${SERIF}`; }
    drawTracked(sx, t, w / 2, h * 0.53, track());
    // R: blurred inverted (height: 1 = surface, low = cut); G: sharp coverage
    ctx.filter = `blur(${Math.max(1, fs * 0.035)}px)`;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    // draw letters as dark into red: use the scratch as a mask
    const tmp = document.createElement('canvas');
    tmp.width = w; tmp.height = h;
    const tc = tmp.getContext('2d');
    tc.drawImage(scratch, 0, 0);
    tc.globalCompositeOperation = 'source-in';
    tc.fillStyle = 'rgb(0,255,0)';
    tc.fillRect(0, 0, w, h);
    // blurred dark letters remove red where cut
    const blurC = document.createElement('canvas');
    blurC.width = w; blurC.height = h;
    const bc = blurC.getContext('2d');
    bc.filter = `blur(${Math.max(1, fs * 0.03)}px)`;
    bc.drawImage(scratch, 0, 0);
    ctx.filter = 'none';
    ctx.globalCompositeOperation = 'destination-out';
    ctx.drawImage(blurC, 0, 0);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(tmp, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    tmp.width = tmp.height = 0; blurC.width = blurC.height = 0;
    tex.needsUpdate = true;
    return true;
  };
  return tex;
}
