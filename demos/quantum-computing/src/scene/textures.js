/* Procedural canvas textures: machined gold plates, the quantum die, the sample PCB.
   Drawing is split with `await slicer.maybeYield()` so no single task runs long. */
import * as THREE from 'three';
import { mulberry32 } from './util.js';

function makeCanvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function finishTex(c, { srgb = false, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.flipY = false; // UV v maps directly to canvas rows
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.anisotropy = aniso;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.needsUpdate = true;
  return t;
}

const noop = { maybeYield: async () => {} };

/**
 * Plate face textures. Planar mapping: u = x/(2R)+.5, v = z/(2R)+.5.
 * map: sRGB grayscale tint; rough: R = bump height, G = roughness.
 */
export async function makePlateTextures({ R, bore, size, holes, label, seed, stepR }, slicer = noop) {
  const rnd = mulberry32(seed);
  const cA = makeCanvas(size), cB = makeCanvas(size);
  const a = cA.getContext('2d'), b = cB.getContext('2d');
  const k = size / (2 * R);
  const cx = size / 2, cy = size / 2;
  const P = (x) => (x / (2 * R) + 0.5) * size;

  a.fillStyle = 'rgb(240,240,240)'; a.fillRect(0, 0, size, size);
  b.fillStyle = 'rgb(128,70,0)'; b.fillRect(0, 0, size, size);

  // lathe-turned face: fine concentric rings with slow roughness modulation
  const ph = rnd() * 6.28;
  const rIn = Math.max(1, bore * k), rStep = stepR * k;
  let n = 0;
  for (let r = rIn; r < rStep; r += 0.7 + rnd() * 1.3) {
    const slow = 0.5 + 0.5 * Math.sin(r * 0.045 + ph) * Math.sin(r * 0.011 + ph * 2.0);
    const rough = 0.13 + 0.10 * slow + (rnd() - 0.5) * 0.05;
    const h = 128 + ((rnd() - 0.5) * 10) | 0;
    b.strokeStyle = `rgb(${h},${Math.round(rough * 255)},0)`;
    b.lineWidth = 1.3;
    b.beginPath(); b.arc(cx, cy, r, 0, Math.PI * 2); b.stroke();
    const tone = 236 + ((rnd() - 0.5) * 10) | 0;
    a.strokeStyle = `rgb(${tone},${tone},${tone})`;
    a.lineWidth = 1.3;
    a.beginPath(); a.arc(cx, cy, r, 0, Math.PI * 2); a.stroke();
    if ((++n & 63) === 0) await slicer.maybeYield('plate rings');
  }
  // outer satin band beyond the step, and the groove at the step
  b.strokeStyle = 'rgb(128,100,0)';
  b.lineWidth = (R * k - rStep) + 2;
  b.beginPath(); b.arc(cx, cy, rStep + (R * k - rStep) / 2, 0, Math.PI * 2); b.stroke();
  a.strokeStyle = 'rgb(228,228,228)';
  a.lineWidth = (R * k - rStep) + 2;
  a.beginPath(); a.arc(cx, cy, rStep + (R * k - rStep) / 2, 0, Math.PI * 2); a.stroke();
  b.strokeStyle = 'rgb(70,150,0)'; b.lineWidth = Math.max(1.5, 0.006 * k);
  b.beginPath(); b.arc(cx, cy, rStep, 0, Math.PI * 2); b.stroke();

  // handling marks / patina: very soft blotches in the tint map
  for (let i = 0; i < 14; i++) {
    const ang = rnd() * Math.PI * 2, rr = (bore + rnd() * (R - bore)) * k;
    const x = cx + Math.cos(ang) * rr, y = cy + Math.sin(ang) * rr;
    const rad = (0.15 + rnd() * 0.45) * k;
    const g = a.createRadialGradient(x, y, 0, x, y, rad);
    const v = 205 + (rnd() * 25) | 0;
    g.addColorStop(0, `rgba(${v},${v},${v},0.35)`);
    g.addColorStop(1, `rgba(${v},${v},${v},0)`);
    a.fillStyle = g; a.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  await slicer.maybeYield('plate marks');

  const circle = (ctx, x, y, r) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0.6, r), 0, Math.PI * 2); ctx.fill(); };
  n = 0;
  for (const h of holes) {
    const x = P(h.x), y = P(h.z), r = h.r * k;
    if (h.kind === 'conn') {
      b.fillStyle = 'rgb(120,30,0)'; circle(b, x, y, r * 2.1);
      a.fillStyle = 'rgb(250,250,250)'; circle(a, x, y, r * 2.1);
      b.fillStyle = 'rgb(60,200,0)'; circle(b, x, y, r * 0.9);
      a.fillStyle = 'rgb(40,40,40)'; circle(a, x, y, r * 0.9);
    } else if (h.kind === 'port') {
      b.fillStyle = 'rgb(90,60,0)'; circle(b, x, y, r * 1.25);
      a.fillStyle = 'rgb(214,214,214)'; circle(a, x, y, r * 1.25);
      b.fillStyle = 'rgb(0,235,0)'; circle(b, x, y, r);
      a.fillStyle = 'rgb(10,10,10)'; circle(a, x, y, r);
    } else {
      b.fillStyle = 'rgb(70,170,0)'; circle(b, x, y, r * 1.35);
      a.fillStyle = 'rgb(150,150,150)'; circle(a, x, y, r * 1.35);
      b.fillStyle = 'rgb(10,230,0)'; circle(b, x, y, r);
      a.fillStyle = 'rgb(22,22,22)'; circle(a, x, y, r);
    }
    if ((++n & 127) === 0) await slicer.maybeYield('plate holes');
  }

  if (label) {
    const fs = Math.max(7, 0.042 * k);
    const ang = -0.6;
    const rr = (stepR - 0.07) * k;
    for (const [ctx, style] of [[b, 'rgb(96,150,0)'], [a, 'rgb(170,170,170)']]) {
      ctx.save();
      ctx.translate(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr);
      ctx.rotate(ang + Math.PI / 2);
      ctx.font = `600 ${fs}px Inter, "Helvetica Neue", Arial, sans-serif`;
      ctx.fillStyle = style;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(label, 0, 0);
      ctx.restore();
    }
  }
  // keep the very rim uniform (the rim faces sample this ring)
  for (const [ctx, style] of [[b, 'rgb(128,90,0)'], [a, 'rgb(232,232,232)']]) {
    ctx.strokeStyle = style; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(cx, cy, R * k - 1, 0, Math.PI * 2); ctx.stroke();
    if (bore > 0) { ctx.beginPath(); ctx.arc(cx, cy, bore * k + 1, 0, Math.PI * 2); ctx.stroke(); }
  }
  await slicer.maybeYield('plate label');
  return { map: finishTex(cA, { srgb: true }), rough: finishTex(cB) };
}

/* Shared die layout (texture space 0..1, y down) for the painter and the 3D airbridges. */
export function chipLayout() {
  const N = 5, pitch = 0.13, x0 = 0.5 - pitch * (N - 1) / 2;
  const L = 0.044, W = 0.0085, G = 0.0062;
  const qubits = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) qubits.push({ i, j, x: x0 + i * pitch, y: x0 + j * pitch });
  const couplers = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N - 1; i++) {
    const q = qubits[j * N + i];
    couplers.push({ idx: i + 4 * j, pts: [[q.x + L + G, q.y], [q.x + pitch - L - G, q.y]] });
  }
  for (let j = 0; j < N - 1; j++) for (let i = 0; i < N; i++) {
    const q = qubits[j * N + i];
    couplers.push({ idx: 20 + i + 5 * j, pts: [[q.x, q.y + L + G], [q.x, q.y + pitch - L - G]] });
  }
  const flux = [], pads = [];
  for (let s = 0; s < 4; s++) {
    for (let i = 0; i < N; i++) {
      const q = s === 0 ? qubits[i] : s === 1 ? qubits[(N - 1) * N + i] : s === 2 ? qubits[i * N] : qubits[i * N + N - 1];
      const { x, y } = q;
      let pts, pad;
      if (s === 0) { pts = [[x + 0.012, y - L - G], [x + 0.012, 0.13], [x + 0.012, 0.085]]; pad = [x + 0.012, 0.06, 'v']; }
      else if (s === 1) { pts = [[x - 0.012, y + L + G], [x - 0.012, 0.87], [x - 0.012, 0.915]]; pad = [x - 0.012, 0.94, 'v']; }
      else if (s === 2) { pts = [[x - L - G, y - 0.012], [0.13, y - 0.012], [0.085, y - 0.012]]; pad = [0.06, y - 0.012, 'h']; }
      else { pts = [[x + L + G, y + 0.012], [0.87, y + 0.012], [0.915, y + 0.012]]; pad = [0.94, y + 0.012, 'h']; }
      flux.push(pts);
      pads.push(pad);
    }
  }
  return { N, pitch, x0, L, W, G, qubits, couplers, flux, pads };
}

/**
 * Superconducting die: 5x5 Xmon-style lattice on an aluminium ground plane.
 * map (sRGB), mr (G rough, B metal), em (R qubit glow mask, G readout resonators, B couplers).
 */
export async function makeChipTextures(size, slicer = noop) {
  const cC = makeCanvas(size), cM = makeCanvas(size), cE = makeCanvas(size);
  const C = cC.getContext('2d'), M = cM.getContext('2d'), E = cE.getContext('2d');
  const S = size;
  const STY = {
    sub: ['#0b111b', 'rgb(0,110,0)', 'rgb(0,0,0)'],
    metal: ['#c3ccd8', 'rgb(0,52,255)', null],
    gold: ['#d9b46a', 'rgb(0,70,255)', null],
    dark: ['#05070b', 'rgb(0,150,0)', 'rgb(0,0,0)'],
  };
  const ctxs = [C, M, E];
  const fillRect = (kind, x, y, w, h, em) => {
    const st = STY[kind];
    for (let i = 0; i < 3; i++) {
      const s = i === 2 && em ? em : st[i];
      if (!s) continue;
      ctxs[i].fillStyle = s; ctxs[i].fillRect(x * S, y * S, w * S, h * S);
    }
  };
  const strokePath = (kind, width, pts, em) => {
    const st = STY[kind];
    for (let i = 0; i < 3; i++) {
      const s = i === 2 && em ? em : st[i];
      if (!s) continue;
      const c = ctxs[i];
      c.strokeStyle = s; c.lineWidth = width * S; c.lineJoin = 'round'; c.lineCap = 'butt';
      c.beginPath(); c.moveTo(pts[0][0] * S, pts[0][1] * S);
      for (let j = 1; j < pts.length; j++) c.lineTo(pts[j][0] * S, pts[j][1] * S);
      c.stroke();
    }
  };
  const cpw = (pts, w = 0.0045, g = 0.0032, em) => { strokePath('sub', w + 2 * g, pts); strokePath('metal', w, pts, em); };

  E.fillStyle = '#000'; E.fillRect(0, 0, S, S);
  fillRect('sub', 0, 0, 1, 1);
  const m = 0.03;
  fillRect('metal', m, m, 1 - 2 * m, 1 - 2 * m);
  // flux-trapping holes ("cheesing") as a repeating pattern: one fill per channel
  {
    const tile = Math.max(4, Math.round(0.011 * S)), hole = Math.max(1, Math.round(0.0028 * S));
    for (const [ctx, metal, sub] of [[C, STY.metal[0], STY.sub[0]], [M, STY.metal[1], STY.sub[1]]]) {
      const t = makeCanvas(tile);
      const tc = t.getContext('2d');
      tc.fillStyle = metal; tc.fillRect(0, 0, tile, tile);
      tc.fillStyle = sub; tc.fillRect(0, 0, hole, hole);
      const pat = ctx.createPattern(t, 'repeat');
      ctx.save();
      ctx.translate(Math.round((m + 0.011) * S), Math.round((m + 0.011) * S));
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, Math.round((1 - 2 * m - 0.022) * S), Math.round((1 - 2 * m - 0.022) * S));
      ctx.restore();
    }
  }
  await slicer.maybeYield('chip ground');

  const lay = chipLayout();
  const { L, W, G, qubits } = lay;
  for (const { x, y } of qubits) {
    fillRect('sub', x - L - G, y - W / 2 - G, 2 * (L + G), W + 2 * G);
    fillRect('sub', x - W / 2 - G, y - L - G, W + 2 * G, 2 * (L + G));
  }
  // couplers (glow mask in B)
  for (const c of lay.couplers) cpw(c.pts, 0.004, 0.003, 'rgb(0,0,255)');
  // readout resonators: compact meanders in the diagonal cells (glow mask in G)
  for (let j = 0; j < lay.N - 1; j++) for (let i = 0; i < lay.N - 1; i++) {
    const { x, y } = qubits[j * lay.N + i];
    const cx = x + lay.pitch / 2, cy = y + lay.pitch / 2;
    const pts = [[x + L * 0.55, y + L * 0.55], [cx - 0.028, cy - 0.024]];
    let dir = 1;
    for (let t = 0; t < 7; t++) {
      const yy = cy - 0.024 + t * 0.008;
      pts.push([cx - 0.028 * dir, yy], [cx + 0.028 * dir, yy]);
      dir = -dir;
    }
    cpw(pts, 0.0026, 0.0018, 'rgb(0,140,0)');
  }
  await slicer.maybeYield('chip resonators');
  for (const pts of lay.flux) cpw(pts, 0.004, 0.003);
  for (const [x, y, o] of lay.pads) {
    if (o === 'v') { fillRect('sub', x - 0.022, y - 0.026, 0.044, 0.052); fillRect('gold', x - 0.014, y - 0.018, 0.028, 0.036); }
    else { fillRect('sub', x - 0.026, y - 0.022, 0.052, 0.044); fillRect('gold', x - 0.018, y - 0.014, 0.036, 0.028); }
  }
  // qubit islands: metal crosses; the glow mask is a hot core fading along the arms
  for (const { x, y } of qubits) {
    fillRect('metal', x - L, y - W / 2, 2 * L, W);
    fillRect('metal', x - W / 2, y - L, W, 2 * L);
    const gr = E.createRadialGradient(x * S, y * S, 0, x * S, y * S, L * S);
    gr.addColorStop(0, 'rgb(255,0,0)');
    gr.addColorStop(0.28, 'rgb(170,0,0)');
    gr.addColorStop(1, 'rgb(26,0,0)');
    E.fillStyle = gr;
    E.fillRect((x - L) * S, (y - W / 2) * S, 2 * L * S, W * S);
    E.fillRect((x - W / 2) * S, (y - L) * S, W * S, 2 * L * S);
    fillRect('dark', x + L * 0.62, y + W / 2, 0.003, G * 0.9);
  }
  for (const [x, y] of [[0.055, 0.055], [0.945, 0.055], [0.055, 0.945], [0.945, 0.945]]) {
    fillRect('sub', x - 0.016, y - 0.0025, 0.032, 0.005);
    fillRect('sub', x - 0.0025, y - 0.016, 0.005, 0.032);
  }
  for (const [ctx, st] of [[C, '#0b111b'], [M, 'rgb(0,110,0)']]) {
    ctx.font = `600 ${0.016 * S}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.fillStyle = st; ctx.textBaseline = 'middle';
    ctx.fillText('NDR-25Q  ·  REV C', 0.62 * S, 0.975 * S);
  }
  await slicer.maybeYield('chip qubits');
  return { map: finishTex(cC, { srgb: true, aniso: 8 }), mr: finishTex(cM, { aniso: 8 }), em: finishTex(cE, { aniso: 8 }), layout: lay };
}

/** Gold-plated interposer PCB with CPW fan-out and via fences. */
export async function makePCBTextures(size, sideLines, slicer = noop, seed = 9) {
  const rnd = mulberry32(seed);
  const cC = makeCanvas(size), cM = makeCanvas(size);
  const C = cC.getContext('2d'), M = cM.getContext('2d');
  const S = size;
  const gold = ['#d6b06a', 'rgb(0,62,255)'];
  const sub = ['#0c1117', 'rgb(0,150,0)'];
  const fill = (st, f) => { C.fillStyle = st[0]; M.fillStyle = st[1]; f(C); f(M); };
  const stroke = (st, w, pts) => {
    for (const [c, s] of [[C, st[0]], [M, st[1]]]) {
      c.strokeStyle = s; c.lineWidth = w * S; c.lineJoin = 'round';
      c.beginPath(); c.moveTo(pts[0][0] * S, pts[0][1] * S);
      for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0] * S, pts[i][1] * S);
      c.stroke();
    }
  };
  fill(sub, (c) => c.fillRect(0, 0, S, S));
  fill(gold, (c) => c.fillRect(0.012 * S, 0.012 * S, 0.976 * S, 0.976 * S));
  fill(sub, (c) => c.fillRect(0.255 * S, 0.255 * S, 0.49 * S, 0.49 * S));
  fill(gold, (c) => c.fillRect(0.262 * S, 0.262 * S, 0.476 * S, 0.476 * S));
  const vias = [];
  for (let s = 0; s < 4; s++) {
    const n = sideLines[s];
    for (let i = 0; i < n; i++) {
      const tChip = 0.36 + (i + 0.5) / n * 0.28;
      const tEdge = 0.2 + (i + 0.5) / n * 0.6;
      let pts;
      if (s === 0) pts = [[tChip, 0.262], [tChip, 0.2], [tEdge, 0.1], [tEdge, 0.0]];
      else if (s === 1) pts = [[tChip, 0.738], [tChip, 0.8], [tEdge, 0.9], [tEdge, 1.0]];
      else if (s === 2) pts = [[0.262, tChip], [0.2, tChip], [0.1, tEdge], [0.0, tEdge]];
      else pts = [[0.738, tChip], [0.8, tChip], [0.9, tEdge], [1.0, tEdge]];
      stroke(sub, 0.024, pts);
      stroke(gold, 0.011, pts);
      for (let k = 0; k < pts.length - 1; k++) {
        const [ax, ay] = pts[k], [bx, by] = pts[k + 1];
        const len = Math.hypot(bx - ax, by - ay); const nx = -(by - ay) / len, ny = (bx - ax) / len;
        const cnt = Math.max(1, Math.floor(len / 0.022));
        for (let v = 0; v <= cnt; v++) {
          const t = v / cnt; const px = ax + (bx - ax) * t, py = ay + (by - ay) * t;
          vias.push([px + nx * 0.026, py + ny * 0.026], [px - nx * 0.026, py - ny * 0.026]);
        }
      }
    }
  }
  for (let i = 0; i < 220; i++) {
    const x = 0.03 + rnd() * 0.94, y = 0.03 + rnd() * 0.94;
    if (x > 0.22 && x < 0.78 && y > 0.22 && y < 0.78) continue;
    vias.push([x, y]);
  }
  for (const [x, y] of vias) {
    if (x < 0.02 || x > 0.98 || y < 0.02 || y > 0.98) continue;
    if (x > 0.25 && x < 0.75 && y > 0.25 && y < 0.75) continue;
    fill(sub, (c) => { c.beginPath(); c.arc(x * S, y * S, 0.0055 * S, 0, 6.2832); c.fill(); });
  }
  for (const [x, y] of [[0.06, 0.06], [0.94, 0.06], [0.06, 0.94], [0.94, 0.94]]) {
    fill(sub, (c) => { c.beginPath(); c.arc(x * S, y * S, 0.03 * S, 0, 6.2832); c.fill(); });
  }
  await slicer.maybeYield('pcb');
  return { map: finishTex(cC, { srgb: true, aniso: 8 }), mr: finishTex(cM, { aniso: 8 }) };
}
