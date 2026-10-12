/* Geometry for the Ilvère bottle. Units: cm, Y up, origin at the centre of the bottom face.
   roundedPrism() builds an exact "rounded rectangle extruded with rounded top/bottom edges"
   (the same shape the glass shader's SDF describes), so silhouettes match the ray-marched
   surface and MSAA antialiases them. */
import * as THREE from 'three';

/* Bottle dimensions from SPEC.md */
export const BOTTLE = {
  w: 6.2, d: 3.4, h: 8.0, r: 0.9, bevel: 0.25,
  base: 1.4, wall: 0.45, innerR: 0.45, liquidTop: 6.6,
  collar: { r: 1.0, y0: 8.0, h: 0.5 },
  cap: { w: 3.4, d: 2.4, h: 3.6, r: 0.35, y0: 8.5, ring: 0.06 },
  neckR: 0.55, tubeR: 0.11,
  print: { brand: 5.7, name: 4.9, small: 2.3, capH: 0.42 },
  topY: 12.1,
};

/* Rounded prism: half extents a (x), b (z); corner radius r; height h from y0; top/bottom edge
   bevel rb (<= r). segC segments per quarter corner, segB per bevel quarter-arc.
   uv: u = arc length around the perimeter / perimeter, v = (y - y0) / h. */
export function roundedPrism(a, b, r, h, rb, y0 = 0, segC = 16, segB = 8, { top = true, bottom = true } = {}) {
  // rb: one bevel radius, or [bottom, top]
  const rbB = Math.min(Array.isArray(rb) ? rb[0] : rb, r), rbT = Math.min(Array.isArray(rb) ? rb[1] : rb, r);
  // perimeter directions/centres (corner centres are independent of inset)
  const ring = [];
  const corners = [[1, 1, 0], [-1, 1, Math.PI / 2], [-1, -1, Math.PI], [1, -1, Math.PI * 1.5]];
  for (const [sx, sz, a0] of corners) {
    for (let i = 0; i <= segC; i++) {
      const t = a0 + (i / segC) * (Math.PI / 2);
      ring.push({ cx: sx * (a - r), cz: sz * (b - r), dx: Math.cos(t), dz: Math.sin(t) });
    }
  }
  // z of ring uses sin with +z = "front": corner [1,1] spans angle 0..90 => +x..+z. good.
  // arc length per ring vertex (on the full radius outline)
  const lens = [0];
  for (let i = 1; i < ring.length; i++) {
    const p = ring[i - 1], q = ring[i];
    lens.push(lens[i - 1] + Math.hypot(q.cx + q.dx * r - p.cx - p.dx * r, q.cz + q.dz * r - p.cz - p.dz * r));
  }
  const per = lens[lens.length - 1] + Math.hypot(ring[0].cx + ring[0].dx * r - ring[ring.length - 1].cx - ring[ring.length - 1].dx * r, ring[0].cz + ring[0].dz * r - ring[ring.length - 1].cz - ring[ring.length - 1].dz * r);

  // profile levels: (inset s, y, normal tilt ny, nr)
  const levels = [];
  const bevel = (R, top) => {
    if (R <= 0) { levels.push({ s: 0, y: top ? y0 + h : y0, nr: 1, ny: 0 }); return; }
    for (let j = 0; j <= segB; j++) {   // bottom: angle -90 (down) .. 0 (side); top: 0 .. 90
      const t = top ? (j / segB) * (Math.PI / 2) : -Math.PI / 2 + (j / segB) * (Math.PI / 2);
      levels.push({ s: R - R * Math.cos(t), y: (top ? y0 + h - R : y0 + R) + R * Math.sin(t), nr: Math.cos(t), ny: Math.sin(t) });
    }
  };
  bevel(rbB, false);
  bevel(rbT, true);

  const pos = [], nor = [], uv = [], idx = [];
  const N = ring.length;
  for (const L of levels) {
    for (let i = 0; i < N; i++) {
      const R = ring[i], rr = r - L.s;
      pos.push(R.cx + R.dx * rr, L.y, R.cz + R.dz * rr);
      nor.push(R.dx * L.nr, L.ny, R.dz * L.nr);
      uv.push(lens[i] / per, (L.y - y0) / h);
    }
  }
  for (let l = 0; l < levels.length - 1; l++) {
    for (let i = 0; i < N; i++) {
      const i2 = (i + 1) % N;
      const A = l * N + i, B = l * N + i2, C = (l + 1) * N + i, D = (l + 1) * N + i2;
      idx.push(A, C, B, B, C, D);
    }
  }
  const cap = (L, up) => {
    const c = pos.length / 3;
    pos.push(0, L.y, 0); nor.push(0, up ? 1 : -1, 0); uv.push(0.5, up ? 1 : 0);
    const s = pos.length / 3;
    for (let i = 0; i < N; i++) {
      const R = ring[i], rr = r - L.s;
      pos.push(R.cx + R.dx * rr, L.y, R.cz + R.dz * rr);
      nor.push(0, up ? 1 : -1, 0);
      uv.push(0.5 + (R.cx + R.dx * rr) / (2 * a), 0.5 + (R.cz + R.dz * rr) / (2 * b));
    }
    for (let i = 0; i < N; i++) {
      const i2 = (i + 1) % N;
      if (up) idx.push(c, s + i2, s + i); else idx.push(c, s + i, s + i2);
    }
  };
  if (bottom) cap(levels[0], false);
  if (top) cap(levels[levels.length - 1], true);

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

/* Collar: a lathe with softly rounded edges and a small chamfered lip. */
export function collarGeometry(segs = 96) {
  const { r, y0, h } = BOTTLE.collar;
  const e = 0.06;
  const pts = [];
  const arc = (cx, cy, rad, a0, a1, n) => {
    for (let i = 0; i <= n; i++) {
      const t = a0 + (a1 - a0) * (i / n);
      pts.push(new THREE.Vector2(cx + Math.cos(t) * rad, cy + Math.sin(t) * rad));
    }
  };
  pts.push(new THREE.Vector2(0.62, y0));
  arc(r - e, y0 + e, e, -Math.PI / 2, 0, 6);
  // a fine groove a third of the way up: two highlight lines on polished gold
  pts.push(new THREE.Vector2(r, y0 + h * 0.3));
  pts.push(new THREE.Vector2(r - 0.025, y0 + h * 0.33));
  pts.push(new THREE.Vector2(r - 0.025, y0 + h * 0.37));
  pts.push(new THREE.Vector2(r, y0 + h * 0.40));
  arc(r - e, y0 + h - e, e, 0, Math.PI / 2, 6);
  pts.push(new THREE.Vector2(0.62, y0 + h));
  const g = new THREE.LatheGeometry(pts, segs);
  return g;
}
