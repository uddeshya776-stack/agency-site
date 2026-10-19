/* The dilution-refrigerator "chandelier", fully procedural and built in time slices.
   Six gold stages on rods, banks of semi-rigid coax (CuNi / stainless / NbTi / copper)
   bent between every stage and merged per gap, thermalisation clamps, ties and marker
   sleeves, instanced SMA bulkheads and attenuators, the central column, and the tail
   below the mixing chamber that carries the processor package (the die is in chip.js). */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mulberry32, clamp, lerp, smoothstep } from './util.js';
import { makePlateTextures } from './textures.js';
import { GOLD, patchMaterial } from './materials.js';

const DEG = Math.PI / 180;

export const STAGES = [
  { key: '300K', label: 'NADIR  ·  STAGE 01  ·  300 K', y: 3.50, R: 2.05, t: 0.20, bore: 0.30 },
  { key: '50K', label: 'NADIR  ·  STAGE 02  ·  50 K', y: 2.25, R: 1.88, t: 0.13, bore: 0.30 },
  { key: '4K', label: 'NADIR  ·  STAGE 03  ·  4 K', y: 1.00, R: 1.68, t: 0.13, bore: 0.28 },
  { key: 'STILL', label: 'NADIR  ·  STAGE 04  ·  STILL', y: -0.30, R: 1.44, t: 0.12, bore: 0.24 },
  { key: 'CP', label: 'NADIR  ·  STAGE 05  ·  100 mK', y: -1.30, R: 1.26, t: 0.11, bore: 0.26 },
  { key: 'MXC', label: 'NADIR  ·  STAGE 06  ·  MXC', y: -2.35, R: 1.10, t: 0.13, bore: 0.0 },
];

export const CHIP_AZ = 18 * DEG;     // direction the processor faces
export const HOLDER_Y = -3.22;       // holder centre height

// Coax families (linear metal F0 tint, roughness, outer radius in scene units)
const CABLE = {
  cuni: { tint: [0.66, 0.61, 0.56], rough: 0.32, r: 0.0105 },
  ss: { tint: [0.56, 0.57, 0.585], rough: 0.38, r: 0.0078 },
  nbti: { tint: [0.49, 0.50, 0.53], rough: 0.28, r: 0.0075 },
  cu: { tint: [0.93, 0.62, 0.50], rough: 0.30, r: 0.0105 },
};
// per sector: outer bank gap types [g0..g4], inner bank gap types, inner size
const SECTORS = [
  { sc: 45, outer: ['cuni', 'cuni', 'nbti', 'nbti', 'nbti'], inner: ['ss', 'ss', 'ss', 'ss', 'cu'], size: 0.8 },
  { sc: 105, outer: ['ss', 'ss', 'ss', 'ss', 'ss'], inner: ['cuni', 'cuni', 'nbti', 'nbti', 'nbti'], size: 0.75 },
  { sc: 165, outer: ['cuni', 'cuni', 'cuni', 'cuni', 'cu'], inner: ['ss', 'ss', 'ss', 'ss', 'ss'], size: 0.85 },
  { sc: 225, outer: ['cuni', 'cuni', 'nbti', 'nbti', 'nbti'], inner: null, size: 1 },
  { sc: 285, outer: ['ss', 'ss', 'cuni', 'cuni', 'cuni'], inner: ['ss', 'ss', 'cu', 'cu', 'cu'], size: 0.75 },
  { sc: 345, outer: ['cuni', 'cuni', 'cuni', 'cuni', 'cuni'], inner: ['ss', 'ss', 'nbti', 'nbti', 'nbti'], size: 0.8 },
];
const PULSE_SECTOR = 345;

// ---------------------------------------------------------------- helpers
const _v = new THREE.Vector3();
const P = (r, th, y) => new THREE.Vector3(r * Math.sin(th), y, r * Math.cos(th));

function setColor(geo, fn) {
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    _v.fromBufferAttribute(pos, i);
    const c = fn(_v);
    col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}
function ensureIndex(geo) {
  if (!geo.index) {
    const n = geo.attributes.position.count;
    const idx = new Uint32Array(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  return geo;
}
/* Keep position + normal, bake a colour (tint x AO), optional transform. */
function prep(geo, matrix, colorFn) {
  if (matrix) geo.applyMatrix4(matrix);
  for (const k of Object.keys(geo.attributes)) if (k !== 'position' && k !== 'normal') geo.deleteAttribute(k);
  ensureIndex(geo);
  return setColor(geo, typeof colorFn === 'function' ? colorFn : () => colorFn || [1, 1, 1]);
}
const _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(1, 1, 1);
const M4 = (pos, rotY = 0, rotX = 0, rotZ = 0, s = 1) => {
  _q.setFromEuler(_e.set(rotX, rotY, rotZ, 'YXZ'));
  _s.set(s, s, s);
  return new THREE.Matrix4().compose(pos, _q, _s);
};
const triCount = (g) => (g.index ? g.index.count : g.attributes.position.count) / 3;

// Lathe made of independent strips (crisp chamfers, flat faces), planar UVs and
// circumferential tangents for the anisotropic "turned" highlight.
function latheStrips(profile, segs, R) {
  const pos = [], nor = [], uv = [], tan = [], idx = [];
  let base = 0;
  for (let k = 0; k < profile.length - 1; k++) {
    const [r0, y0] = profile[k], [r1, y1] = profile[k + 1];
    const dr = r1 - r0, dy = y1 - y0, len = Math.hypot(dr, dy);
    if (len < 1e-7) continue;
    const nr = -dy / len, ny = dr / len;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2, s = Math.sin(a), c = Math.cos(a);
      for (const [r, y] of [[r0, y0], [r1, y1]]) {
        pos.push(r * s, y, r * c);
        nor.push(nr * s, ny, nr * c);
        uv.push((r * s) / (2 * R) + 0.5, (r * c) / (2 * R) + 0.5);
        tan.push(c, 0, -s, 1);
      }
    }
    for (let i = 0; i < segs; i++) {
      const a = base + i * 2, b = a + 1, c2 = a + 2, d = a + 3;
      idx.push(a, b, c2, b, d, c2);
    }
    base += (segs + 1) * 2;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('tangent', new THREE.Float32BufferAttribute(tan, 4));
  g.setIndex(idx);
  return g;
}

/* Tube along a curve with colour and the cable attribute (s for the pulse line, roughness). */
function cableTube(curve, segs, radius, radial, colorFn, sBase, rough) {
  const tg = new THREE.TubeGeometry(curve, segs, radius, radial, false);
  const uv = tg.attributes.uv;
  const n = uv.count;
  const cab = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    cab[i * 2] = sBase >= 0 ? sBase + uv.getX(i) : -1;
    cab[i * 2 + 1] = rough;
  }
  prep(tg, null, colorFn);
  tg.setAttribute('aCab', new THREE.BufferAttribute(cab, 2));
  return tg;
}

// ------------------------------------------------------------------ build
export async function buildMachine({ preset: Q, U, mats, slicer }) {
  const rnd = mulberry32(20261011);
  const root = new THREE.Group();
  root.name = 'machine';
  const goldParts = [], silverParts = [], darkParts = [], dielParts = [];
  const tris = { plates: 0, cables: 0, connectors: 0, misc: 0 };
  const textures = [];
  const meshes = [];
  const add = (m) => { root.add(m); meshes.push(m); return m; };

  // ---------- layout of the coax lines (banks of parallel lines)
  const RODS = [15, 75, 135, 195, 255, 315].map((d) => d * DEG);
  const PT_ANG = 225 * DEG;
  const groups = [];
  for (const S of SECTORS) {
    const isPT = S.sc === 225;
    groups.push({
      sc: S.sc, ang: (S.sc - 11 + rnd() * 4) * DEG, f: 0.74 + rnd() * 0.06,
      n: isPT ? Math.ceil(Q.nOuter / 2) : Q.nOuter, layout: 'arc', outer: true, types: S.outer, size: 1,
    });
    if (S.inner) {
      groups.push({
        sc: S.sc, ang: (S.sc + 15 + rnd() * 4) * DEG, f: 0.5 + rnd() * 0.05,
        n: Q.nInner, layout: rnd() < 0.5 ? 'arc' : 'radial', outer: false, types: S.inner, size: S.size,
      });
    }
  }
  const lines = [];
  for (const g of groups) {
    for (let k = 0; k < g.n; k++) {
      const o = k - (g.n - 1) / 2;
      let th = g.ang, f = g.f;
      if (g.layout === 'arc') th += o * (0.046 / (g.f * 1.6));
      else { f += o * (0.05 / 1.6); th += (k % 2 ? 1 : -1) * 0.012; }
      lines.push({ g, k, th, f, jit: 0.97 + rnd() * 0.06, rj: (rnd() - 0.5) * 0.06, pulse: false });
    }
  }
  // the signal line for chapter 2: an even line in the middle of the front outer bank
  const pulseBank = groups.find((g) => g.outer && g.sc === PULSE_SECTOR);
  const pk = Math.max(0, Math.floor((pulseBank.n - 1) / 2) & ~1);
  const pulseLine = lines.find((l) => l.g === pulseBank && l.k === pk);
  pulseLine.pulse = true;
  const hasAtt = (l, s) => (s === 2 || s === 3 || s === 5) ? l.k % 2 === 0 : (s === 4 && l.pulse);

  // ---------- cable path shapes
  const shapeFor = (g, gap) => {
    const r = mulberry32(Math.floor(g.ang * 1000) * 7 + gap * 131)();
    const r2 = mulberry32(Math.floor(g.ang * 1000) * 3 + gap * 17)();
    if (g.outer) {
      if (gap === 0) return r < 0.6 ? { type: 's', bulge: 0.28 + r2 * 0.22, twist: (r2 - 0.5) * 0.25 } : { type: 'loop', loopR: 0.085 + r2 * 0.03, at: 0.45 };
      if (gap === 1) return r < 0.5 ? { type: 'loop', loopR: 0.08 + r2 * 0.03, at: 0.5 } : { type: 's', bulge: 0.22 + r2 * 0.18, twist: (r2 - 0.5) * 0.35 };
      if (gap === 2) return r < 0.45 ? { type: 's', bulge: 0.18 + r2 * 0.2, twist: (r2 - 0.5) * 0.5 } : (r < 0.75 ? { type: 'coil', coilR: 0.034, turns: 1.6, at: 0.45 } : { type: 'loop', loopR: 0.09, at: 0.55 });
      if (gap === 3) return r < 0.5 ? { type: 's', bulge: 0.12 + r2 * 0.12, twist: (r2 - 0.5) * 0.3 } : { type: 'loop', loopR: 0.075, at: 0.5 };
      return r < 0.5 ? { type: 's', bulge: 0.1 + r2 * 0.1, twist: 0.0 } : { type: 'coil', coilR: 0.032, turns: 1.6, at: 0.5 };
    }
    if (gap === 0) return { type: 's', bulge: -0.06 - r2 * 0.06, twist: (r2 - 0.5) * 0.7 };
    if (gap === 1) return r < 0.5 ? { type: 's', bulge: 0.05, twist: 0.35 * (r2 < 0.5 ? 1 : -1) } : { type: 'coil', coilR: 0.04, turns: 2, at: 0.5 };
    if (gap === 2) return { type: 's', bulge: 0.08 + r2 * 0.06, twist: (r2 - 0.5) * 0.4 };
    if (gap === 3) return r < 0.6 ? { type: 's', bulge: 0.04, twist: 0.25 } : { type: 'loop', loopR: 0.06, at: 0.5 };
    return { type: 's', bulge: 0.06, twist: -0.2 };
  };

  function cablePoints(A, B, sh, line, rad) {
    const e = 0.07;
    const pts = [P(A.r, A.th, A.y), P(A.r, A.th, A.y - e * 0.6)];
    const yA = A.y - e, yB = B.y + e;
    const jitter = (mulberry32(line.k * 97 + Math.floor(line.th * 1e4))() - 0.5);
    if (sh.type === 's') {
      const bulge = sh.bulge * (1 + jitter * 0.12);
      const n = 9;
      for (let i = 0; i <= n; i++) {
        const s = i / n;
        const ease = s * s * (3 - 2 * s);
        const bump = Math.pow(Math.sin(Math.PI * s), 1.4);
        pts.push(P(lerp(A.r, B.r, ease) + bulge * bump, A.th + sh.twist * Math.sin(Math.PI * s), lerp(yA, yB, s)));
      }
    } else if (sh.type === 'loop') {
      const casc = (line.k - (line.g.n - 1) / 2) * 0.022 * (line.g.ang > 3.1 ? -1 : 1);
      const yl = lerp(yA, yB, clamp(sh.at + casc, 0.25, 0.75) + jitter * 0.02);
      const rl = lerp(A.r, B.r, sh.at);
      const Rl = sh.loopR;
      pts.push(P(lerp(A.r, rl, 0.5), A.th, lerp(yA, yl, 0.45)));
      const n = 16;
      for (let i = 0; i <= n; i++) {
        const phi = (i / n) * Math.PI * 2;
        const w = (rad * 2.6) * (i / n);
        pts.push(P(rl + Rl - Rl * Math.cos(phi), A.th + w / rl, yl - Rl * Math.sin(phi)));
      }
      pts.push(P(lerp(rl, B.r, 0.5), B.th + rad * 2.6 / rl, lerp(yl, yB, 0.55)));
      pts.push(P(B.r, B.th, yB));
    } else if (sh.type === 'coil') {
      if (line.k % 3 !== 0) return cablePoints(A, B, { type: 's', bulge: 0.04, twist: 0.0 }, line, rad);
      const yl = lerp(yA, yB, sh.at - 0.15);
      const rl = lerp(A.r, B.r, sh.at - 0.15);
      pts.push(P(lerp(A.r, rl, 0.5), A.th, lerp(yA, yl, 0.5)));
      const Rc = sh.coilR, turns = sh.turns, pitch = 0.07;
      const n = Math.round(12 * turns);
      const u = new THREE.Vector3(Math.sin(A.th), 0, Math.cos(A.th));
      const v = new THREE.Vector3(Math.cos(A.th), 0, -Math.sin(A.th));
      for (let i = 0; i <= n; i++) {
        const phi = (i / n) * turns * Math.PI * 2;
        const ax = rl + Rc;
        const p = new THREE.Vector3().copy(u).multiplyScalar(ax - Rc * Math.cos(phi)).addScaledVector(v, Rc * Math.sin(phi));
        p.y = yl - pitch * (phi / (Math.PI * 2));
        pts.push(p);
      }
      const yEnd = yl - pitch * turns;
      pts.push(P(lerp(rl, B.r, 0.5), B.th, lerp(yEnd, yB, 0.5)));
      pts.push(P(B.r, B.th, yB));
    }
    pts.push(P(B.r, B.th, B.y + e * 0.4), P(B.r, B.th, B.y));
    return pts;
  }

  // Ambient occlusion baked per vertex: deep inside the bundle and just under a plate = darker.
  const plateRadiusAt = (y) => {
    for (let i = 0; i < STAGES.length - 1; i++) {
      const a = STAGES[i], b = STAGES[i + 1];
      if (y <= a.y && y >= b.y) return lerp(b.R, a.R, (y - b.y) / (a.y - b.y));
    }
    return y > STAGES[0].y ? STAGES[0].R : STAGES[5].R;
  };
  const aoAt = (p, yTopUnder, yBottomTop) => {
    const rr = Math.hypot(p.x, p.z);
    const Rl = plateRadiusAt(p.y);
    let ao = lerp(0.3, 1.0, smoothstep(0.25, 0.92, rr / Rl));
    ao *= lerp(0.5, 1.0, smoothstep(0.0, 0.32, yTopUnder - p.y));
    ao *= lerp(0.75, 1.0, smoothstep(0.0, 0.2, p.y - yBottomTop));
    return clamp(ao, 0.18, 1.0);
  };

  // ---------- stage plates
  const plates = [];
  const connTop = [], connBot = [], attTop = [];
  const pulseAtt = [];       // world positions of the attenuators on the pulse line
  const aniso = Q.aniso > 0;
  for (let s = 0; s < STAGES.length; s++) {
    slicer.step('plates', 0.05 + 0.25 * (s / STAGES.length));
    const st = STAGES[s];
    const holes = [];
    for (const l of lines) {
      const r = l.f * st.R;
      holes.push({ x: r * Math.sin(l.th), z: r * Math.cos(l.th), r: 0.011, kind: 'conn' });
    }
    const nb = Math.round(st.R * 22);
    for (let i = 0; i < nb; i++) {
      const a = (i / nb) * Math.PI * 2 + 0.07;
      holes.push({ x: 0.975 * st.R * Math.sin(a), z: 0.975 * st.R * Math.cos(a), r: 0.0075, kind: 'bolt' });
    }
    for (let i = 0; i < 5; i++) {
      const a = rnd() * Math.PI * 2, rr = (0.3 + rnd() * 0.45) * st.R;
      holes.push({ x: rr * Math.sin(a), z: rr * Math.cos(a), r: 0.04 + rnd() * 0.05, kind: 'port' });
    }
    for (let gI = 0; gI < 7; gI++) {
      const a = rnd() * Math.PI * 2, rr = (0.25 + rnd() * 0.6) * st.R;
      const cx = rr * Math.sin(a), cz = rr * Math.cos(a);
      const nx = 3 + Math.floor(rnd() * 4), nz = 2 + Math.floor(rnd() * 3);
      for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++)
        holes.push({ x: cx + (i - nx / 2) * 0.05, z: cz + (j - nz / 2) * 0.05, r: 0.006, kind: 'tap' });
    }
    const stepR = st.R * 0.955;
    const tex = await makePlateTextures({ R: st.R, bore: st.bore, size: Q.tex, holes, label: st.label, seed: 100 + s, stepR }, slicer);
    textures.push(tex.map, tex.rough);
    const c = 0.013, sd = 0.007;
    const prof = [];
    const b0 = st.bore > 0 ? st.bore + c : 0;
    prof.push([b0, 0], [stepR, 0], [stepR, -sd], [st.R - c, -sd], [st.R, -sd - c], [st.R, -st.t + c], [st.R - c, -st.t], [b0, -st.t]);
    if (st.bore > 0) prof.push([st.bore, -st.t + c], [st.bore, -c], [st.bore + c, 0]);
    const geo = latheStrips(prof, Q.plateSegs, st.R);
    if (!aniso) geo.deleteAttribute('tangent');
    const params = {
      color: new THREE.Color().setRGB(GOLD[0], GOLD[1], GOLD[2]), metalness: 1, roughness: 1.0,
      map: tex.map, roughnessMap: tex.rough,
    };
    if (Q.bump !== false) { params.bumpMap = tex.rough; params.bumpScale = 0.6; }
    const mat = aniso
      ? new THREE.MeshPhysicalMaterial({ ...params, anisotropy: Q.aniso, anisotropyRotation: Math.PI / 2 })
      : new THREE.MeshStandardMaterial(params);
    patchMaterial(mat, U, { bounce: 0.85, octaves: Q.frostOctaves });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = st.y;
    mesh.name = 'plate-' + st.key;
    add(mesh);
    plates.push(mesh);
    tris.plates += triCount(geo);

    // connectors: on top (lines arriving from above), below (lines leaving)
    for (const l of lines) {
      const r = l.f * st.R;
      const x = r * Math.sin(l.th), z = r * Math.cos(l.th);
      const ao = lerp(0.45, 1.0, smoothstep(0.3, 0.9, l.f));
      const att = hasAtt(l, s);
      if (s > 0 || l.g.outer) (att ? attTop : connTop).push({ x, y: st.y, z, rot: rnd() * 1.05, ao });
      if (att && l.pulse) pulseAtt.push(new THREE.Vector3(x, st.y + 0.05, z));
      if (s < STAGES.length - 1) connBot.push({ x, y: st.y - st.t, z, rot: rnd() * 1.05, ao: ao * 0.8 });
    }
    // socket-head bolts on the rim band
    const nB = Math.round(st.R * 11);
    const boltGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.012, 10, 1, false);
    for (let i = 0; i < nB; i++) {
      const a = (i / nB) * Math.PI * 2 + 0.07 + Math.PI / nB;
      const rr = 0.975 * st.R;
      goldParts.push(prep(boltGeo.clone(), M4(new THREE.Vector3(rr * Math.sin(a), st.y - sd + 0.006, rr * Math.cos(a))), [0.9, 0.9, 0.9]));
    }
    boltGeo.dispose();
    await slicer.yield('plate ' + st.key);
  }

  // ---------- posts between stages (gold-plated rods with collars)
  for (let s = 0; s < STAGES.length - 1; s++) {
    const up = STAGES[s], lo = STAGES[s + 1];
    const y0 = up.y - up.t, y1 = lo.y;
    const h = y0 - y1;
    for (let i = 0; i < RODS.length; i++) {
      const a = RODS[i];
      const r = 0.9 * lo.R;
      const x = r * Math.sin(a), z = r * Math.cos(a);
      const rod = new THREE.CylinderGeometry(0.026, 0.026, h, Q.rodSegs, 1, true);
      goldParts.push(prep(rod, M4(new THREE.Vector3(x, (y0 + y1) / 2, z)), [1, 1, 1]));
      const col = new THREE.CylinderGeometry(0.043, 0.043, 0.05, Q.rodSegs, 1, false);
      goldParts.push(prep(col.clone(), M4(new THREE.Vector3(x, y0 - 0.025, z)), [0.85, 0.85, 0.85]));
      goldParts.push(prep(col, M4(new THREE.Vector3(x, y1 + 0.025, z)), [0.85, 0.85, 0.85]));
    }
  }
  await slicer.maybeYield('rods');

  // ---------- cables (merged per gap), with the pulse path sampled for the sprite
  const cables = [];
  const pulsePath = [];        // [{s, p: Vector3}]
  const tieCandidates = [];    // {gap, a: curve, b: curve, r}
  const sleeveCandidates = []; // {curve, r}
  for (let gap = 0; gap < STAGES.length - 1; gap++) {
    slicer.step('cables', 0.32 + 0.4 * (gap / (STAGES.length - 1)));
    const up = STAGES[gap], lo = STAGES[gap + 1];
    const geos = [];
    const yTopUnder = up.y - up.t, yBottomTop = lo.y;
    const curvesByGroup = new Map();
    for (const l of lines) {
      const sh = shapeFor(l.g, gap);
      const type = CABLE[l.g.types[gap]];
      const rad = type.r * l.g.size * (l.g.outer ? 1 : 0.95);
      const att = hasAtt(l, gap + 1);
      const A = { r: l.f * up.R, th: l.th, y: yTopUnder - 0.032 };
      const B = { r: l.f * lo.R, th: l.th, y: yBottomTop + (att ? 0.088 : 0.032) };
      const pts = cablePoints(A, B, sh, l, rad);
      const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.5);
      const len = curve.getLength();
      const extra = sh.type === 'loop' ? 22 : (sh.type === 'coil' && l.k % 3 === 0 ? 34 : 0);
      const segs = Math.round(clamp((len * 30 + extra) * Q.density, 10, 120));
      const tint = type.tint, j = l.jit;
      const tr = tint[0] * j, tgc = tint[1] * j, tb = tint[2] * j;
      geos.push(cableTube(curve, segs, rad, Q.radial, (p) => {
        const ao = aoAt(p, yTopUnder, yBottomTop);
        return [tr * ao, tgc * ao, tb * ao];
      }, l.pulse ? gap : -1, clamp(type.rough + l.rj, 0.18, 0.6)));
      if (l.pulse) {
        const n = 40;
        for (let i = gap === 0 ? 0 : 1; i <= n; i++) pulsePath.push({ s: gap + i / n, p: curve.getPointAt(i / n) });
      }
      if (sh.type === 's') {
        let arr = curvesByGroup.get(l.g);
        if (!arr) curvesByGroup.set(l.g, (arr = []));
        arr.push({ curve, rad, k: l.k });
      }
      if (gap < 3 || rnd() < 0.5) sleeveCandidates.push({ curve, rad, gap });
      await slicer.maybeYield('cables');
    }
    for (const [g, arr] of curvesByGroup) {
      for (let i = 0; i + 1 < arr.length; i += 2) tieCandidates.push({ gap, g, a: arr[i], b: arr[i + 1] });
    }
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    const mesh = new THREE.Mesh(merged, mats.cable);
    mesh.name = 'cables-' + gap;
    add(mesh);
    cables.push(mesh);
    tris.cables += triCount(merged);
    await slicer.yield('cables merge');
  }

  // ---------- thermalisation clamps under each plate (gold-plated copper bars + screws)
  if (Q.clamps) {
    const screw = new THREE.CylinderGeometry(0.0085, 0.0085, 0.008, 8, 1, false);
    for (let s = 0; s < STAGES.length - 1; s++) {
      const st = STAGES[s];
      const y = st.y - st.t - 0.064;
      for (const g of groups) {
        const radial = g.layout === 'radial';
        const rL = g.f * st.R;
        let w, depth, r, rotY;
        if (radial) {
          w = (g.n - 1) * (0.05 / 1.6) * st.R + 0.06;
          depth = 0.062; r = rL; rotY = g.ang + Math.PI / 2;
        } else {
          const half = ((g.n - 1) / 2) * (0.046 / (g.f * 1.6));
          const sag = rL * (1 - Math.cos(half));
          w = 2 * rL * Math.sin(half) + 0.06;
          depth = 0.034 + sag; r = rL - sag / 2; rotY = g.ang;
        }
        const c = P(r, g.ang, y);
        const bar = new THREE.BoxGeometry(w, 0.026, depth);
        goldParts.push(prep(bar, M4(c, rotY), [0.78, 0.78, 0.78]));
        // two cap screws: on the outer face of arc bars, underneath radial ones
        const along = new THREE.Vector3(Math.cos(rotY), 0, -Math.sin(rotY));
        const out = new THREE.Vector3(Math.sin(rotY), 0, Math.cos(rotY));
        for (const sgn of [-1, 1]) {
          const p = c.clone().addScaledVector(along, sgn * (w / 2 - 0.016));
          let m;
          if (radial) {
            p.y -= 0.017;
            m = new THREE.Matrix4().makeTranslation(p.x, p.y, p.z);
          } else {
            p.addScaledVector(out, depth / 2 + 0.004);
            m = new THREE.Matrix4().makeBasis(along, out, new THREE.Vector3().crossVectors(along, out)).setPosition(p);
          }
          goldParts.push(prep(screw.clone(), m, [0.7, 0.7, 0.7]));
        }
      }
      await slicer.maybeYield('clamps');
    }
    screw.dispose();
  }

  // ---------- ties binding pairs of neighbouring lines, and marker sleeves / label flags
  const tieRnd = mulberry32(77);
  if (Q.ties) {
    const tA = new THREE.Vector3(), tB = new THREE.Vector3(), tan = new THREE.Vector3(), ax = new THREE.Vector3(), ay = new THREE.Vector3();
    let count = 0;
    for (const c of tieCandidates) {
      if (tieRnd() > 0.32 || count > 40) continue;
      const u = 0.24 + tieRnd() * 0.12;
      c.a.curve.getPointAt(u, tA);
      c.b.curve.getPointAt(u, tB);
      if (tA.distanceTo(tB) > 0.09) continue;
      c.a.curve.getTangentAt(u, tan);
      const mid = tA.clone().add(tB).multiplyScalar(0.5);
      ax.subVectors(tB, tA);
      const half = ax.length() / 2 + c.a.rad + 0.004;
      ax.addScaledVector(tan, -ax.dot(tan)).normalize();
      ay.crossVectors(tan, ax).normalize();
      const minor = Math.max(c.a.rad, c.b.rad) + 0.004;
      const pts = [];
      for (let i = 0; i < 18; i++) {
        const a = (i / 18) * Math.PI * 2;
        pts.push(mid.clone().addScaledVector(ax, Math.cos(a) * half).addScaledVector(ay, Math.sin(a) * minor));
      }
      const ring = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 18, 0.0026, 4, true);
      dielParts.push(prep(ring, null, [0.022, 0.022, 0.026]));
      count++;
    }
    await slicer.maybeYield('ties');
  }
  if (Q.labels > 0) {
    const COLS = [[0.80, 0.76, 0.64], [0.80, 0.76, 0.64], [0.86, 0.86, 0.84], [0.78, 0.55, 0.10], [0.55, 0.06, 0.05], [0.07, 0.16, 0.5]];
    const p = new THREE.Vector3(), tan = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), side = new THREE.Vector3();
    const qq = new THREE.Quaternion();
    const picks = sleeveCandidates.filter(() => tieRnd() < 0.5).slice(0, Q.labels);
    for (let i = 0; i < picks.length; i++) {
      const c = picks[i];
      const u = 0.06 + tieRnd() * 0.05;
      c.curve.getPointAt(u, p);
      c.curve.getTangentAt(u, tan);
      qq.setFromUnitVectors(up, tan);
      const col = COLS[Math.floor(tieRnd() * COLS.length)];
      const sl = new THREE.CylinderGeometry(c.rad * 1.42, c.rad * 1.42, 0.03, 8, 1, false);
      dielParts.push(prep(sl, new THREE.Matrix4().compose(p, qq, _s.set(1, 1, 1)), col));
      if (i % 3 === 0) {
        // a printed flag tab sticking out of the sleeve
        side.set(p.x, 0, p.z).normalize();
        const flag = new THREE.BoxGeometry(0.0016, 0.026, 0.032);
        const m = new THREE.Matrix4().compose(p.clone().addScaledVector(side, c.rad * 1.42 + 0.017), qq, _s.set(1, 1, 1));
        const rot = new THREE.Matrix4().makeRotationY(Math.atan2(side.x, side.z));
        flag.applyMatrix4(rot);
        flag.applyMatrix4(new THREE.Matrix4().makeTranslation(m.elements[12], m.elements[13], m.elements[14]));
        dielParts.push(prep(flag, null, [0.84, 0.81, 0.70]));
      }
    }
    await slicer.maybeYield('labels');
  }

  // ---------- above the top plate: room-temperature looms rising into the dark + suspension
  {
    const st = STAGES[0];
    const geos = [];
    for (const g of groups) {
      if (!g.outer) continue;
      for (let k = 0; k < 4; k++) {
        const th = g.ang + (k - 1.5) * 0.05;
        const r0 = g.f * st.R;
        const pts = [P(r0, th, st.y + 0.06), P(r0, th, st.y + 0.25), P(r0 * 0.92, th + 0.04, st.y + 1.2), P(r0 * 0.75, th + 0.08, st.y + 2.6), P(r0 * 0.62, th + 0.1, st.y + 4.5)];
        const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
        const tg = new THREE.TubeGeometry(curve, Math.round(26 * Q.density) + 6, 0.02, Q.radial, false);
        geos.push(prep(tg, null, (p) => { const f = 1 - smoothstep(st.y + 0.5, st.y + 3.5, p.y); const v = 0.05 + 0.1 * f; return [v, v * 1.04, v * 1.1]; }));
      }
    }
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    const mesh = new THREE.Mesh(merged, mats.dark);
    mesh.name = 'rt-looms';
    add(mesh);
    tris.cables += triCount(merged);
    for (const g of groups) {
      if (!g.outer) continue;
      const r0 = g.f * st.R;
      const box = new THREE.BoxGeometry(0.34, 0.07, 0.15);
      goldParts.push(prep(box, M4(P(r0, g.ang, st.y + 0.035), g.ang), [0.95, 0.95, 0.95]));
    }
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.5;
      const rod = new THREE.CylinderGeometry(0.04, 0.04, 6, Q.rodSegs, 1, true);
      goldParts.push(prep(rod, M4(P(1.78, a, st.y + 3.0)), (p) => { const f = 1 - smoothstep(st.y + 0.3, st.y + 4.0, p.y); return [f, f, f]; }));
    }
  }
  await slicer.maybeYield('looms');

  // ---------- central column: still pumping line (bellows), still pot, heat exchanger, mixing chamber
  {
    const segsR = Q.rodSegs + 8;
    for (let s = 0; s < 3; s++) {
      const up = STAGES[s], lo = STAGES[s + 1];
      const y0 = up.y - up.t, y1 = lo.y;
      const prof = [];
      const h = y0 - y1;
      if (Q.bellows) {
        const period = 0.04, n = Math.floor(h / period) * 6;
        for (let i = 0; i <= n; i++) {
          const y = y1 + (i / n) * h;
          const ph = ((y - y1) / period) * Math.PI * 2;
          prof.push(new THREE.Vector2(0.15 + 0.011 * (0.5 + 0.5 * Math.cos(ph)), y));
        }
      } else {
        prof.push(new THREE.Vector2(0.155, y1), new THREE.Vector2(0.155, y0));
      }
      const lathe = new THREE.LatheGeometry(prof, segsR);
      silverParts.push(prep(lathe, null, (p) => { const ao = 0.42 * lerp(0.5, 1, smoothstep(0, 0.25, y0 - p.y)) * lerp(0.6, 1, smoothstep(0, 0.3, p.y - y1)); return [ao, ao, ao]; }));
      for (const yy of [y0 - 0.02, y1 + 0.02]) {
        const fl = new THREE.CylinderGeometry(0.21, 0.21, 0.04, segsR, 1, false);
        goldParts.push(prep(fl, M4(new THREE.Vector3(0, yy, 0)), [0.9, 0.9, 0.9]));
      }
      await slicer.maybeYield('bellows');
    }
    // pulse-tube cold head (two stages) in its own sector
    const ptx = 1.12;
    const pt1 = new THREE.CylinderGeometry(0.11, 0.11, STAGES[0].y - STAGES[0].t - STAGES[1].y, segsR, 1, true);
    silverParts.push(prep(pt1, M4(P(ptx, PT_ANG, (STAGES[0].y - STAGES[0].t + STAGES[1].y) / 2)), [0.9, 0.9, 0.9]));
    const pt2 = new THREE.CylinderGeometry(0.065, 0.065, STAGES[1].y - STAGES[1].t - STAGES[2].y, segsR, 1, true);
    silverParts.push(prep(pt2, M4(P(ptx * 0.92, PT_ANG, (STAGES[1].y - STAGES[1].t + STAGES[2].y) / 2)), [0.9, 0.9, 0.9]));
    for (const [yy, rr, rx] of [[STAGES[1].y + 0.04, 0.19, ptx], [STAGES[2].y + 0.035, 0.13, ptx * 0.92], [STAGES[0].y - STAGES[0].t - 0.03, 0.17, ptx], [STAGES[1].y - STAGES[1].t - 0.03, 0.11, ptx * 0.92]]) {
      const fl = new THREE.CylinderGeometry(rr, rr, 0.07, segsR, 1, false);
      goldParts.push(prep(fl, M4(P(rx, PT_ANG, yy)), [0.95, 0.95, 0.95]));
    }
    // still pot
    const still = STAGES[3];
    const pot = new THREE.CylinderGeometry(0.34, 0.34, 0.26, segsR + 8, 1, false);
    goldParts.push(prep(pot, M4(new THREE.Vector3(0, still.y - still.t - 0.13, 0)), (p) => { const ao = lerp(0.6, 1, smoothstep(still.y - still.t, still.y - still.t - 0.2, p.y)); return [ao, ao, ao]; }));
    const lid = new THREE.CylinderGeometry(0.38, 0.38, 0.03, segsR + 8, 1, false);
    goldParts.push(prep(lid, M4(new THREE.Vector3(0, still.y - still.t - 0.27, 0)), [0.9, 0.9, 0.9]));
    // continuous heat exchanger: silver helix from the still to the mixing chamber
    const mxc = STAGES[5];
    const hy0 = still.y - still.t - 0.29, hy1 = mxc.y + 0.38;
    const helixPts = [];
    const turns = 7.5;
    for (let i = 0; i <= 120; i++) {
      const t = i / 120;
      const a = t * turns * Math.PI * 2;
      helixPts.push(new THREE.Vector3(Math.sin(a) * 0.2, lerp(hy0, hy1, t), Math.cos(a) * 0.2));
    }
    const helix = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(helixPts), Math.round(260 * Q.density), 0.013, Q.radial, false);
    silverParts.push(prep(helix, null, [0.55, 0.55, 0.55]));
    const core = new THREE.CylinderGeometry(0.05, 0.05, hy0 - hy1, 10, 1, true);
    silverParts.push(prep(core, M4(new THREE.Vector3(0, (hy0 + hy1) / 2, 0)), [0.3, 0.3, 0.3]));
    // mixing chamber can
    const mc = new THREE.CylinderGeometry(0.3, 0.3, 0.34, segsR + 8, 1, false);
    goldParts.push(prep(mc, M4(new THREE.Vector3(0, mxc.y + 0.17, 0)), [1, 1, 1]));
    const mcl = new THREE.CylinderGeometry(0.34, 0.34, 0.035, segsR + 8, 1, false);
    goldParts.push(prep(mcl, M4(new THREE.Vector3(0, mxc.y + 0.355, 0)), [0.95, 0.95, 0.95]));
    // step heat exchangers: stacks of sintered-silver discs
    const cp = STAGES[4];
    for (const [a, rr] of [[PT_ANG, 0.56], [PT_ANG + 0.42, 0.6]]) {
      for (let i = 0; i < 6; i++) {
        const y = cp.y - cp.t - 0.12 - i * 0.12;
        const disc = new THREE.CylinderGeometry(0.11, 0.11, 0.07, segsR, 1, false);
        silverParts.push(prep(disc, M4(P(rr, a, y)), [0.85, 0.85, 0.85]));
      }
      const tube = new THREE.CylinderGeometry(0.018, 0.018, cp.y - cp.t - mxc.y, 8, 1, true);
      silverParts.push(prep(tube, M4(P(rr, a, (cp.y - cp.t + mxc.y) / 2)), [0.7, 0.7, 0.7]));
    }
    // HEMT amplifiers on the 4K plate + a magnetic shield can on the still plate
    const k4 = STAGES[2];
    for (const ad of [30, 100, 170, 300]) {
      const a = ad * DEG;
      const box = new RoundedBoxGeometry(0.16, 0.06, 0.09, 2, 0.006);
      goldParts.push(prep(box, M4(P(0.52, a, k4.y + 0.03), a), [1, 1, 1]));
      // two SMA ports on the amplifier's ends
      for (const sgn of [-1, 1]) {
        const port = new THREE.CylinderGeometry(0.011, 0.011, 0.03, 8, 1, false);
        const ax = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a));
        const pos = P(0.52, a, k4.y + 0.03).addScaledVector(ax, sgn * 0.093);
        const m = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), ax)).setPosition(pos);
        goldParts.push(prep(port, m, [0.85, 0.85, 0.85]));
      }
    }
    const can = new THREE.CylinderGeometry(0.12, 0.12, 0.3, segsR, 1, false);
    darkParts.push(prep(can, M4(P(0.55 * STAGES[3].R, 330 * DEG, STAGES[3].y + 0.15)), [1, 1, 1]));
    const canLid = new THREE.CylinderGeometry(0.125, 0.125, 0.025, segsR, 1, false);
    goldParts.push(prep(canLid, M4(P(0.55 * STAGES[3].R, 330 * DEG, STAGES[3].y + 0.31)), [0.95, 0.95, 0.95]));
  }
  await slicer.yield('column');

  // ---------- below the mixing chamber: cold finger, holder, circulators (die etc. in chip.js)
  const holder = {};
  const circulators = [];
  {
    slicer.step('holder', 0.76);
    const mxc = STAGES[5];
    const yU = mxc.y - mxc.t;
    const face = new THREE.Vector3(Math.sin(CHIP_AZ), 0, Math.cos(CHIP_AZ));
    const right = new THREE.Vector3(Math.cos(CHIP_AZ), 0, -Math.sin(CHIP_AZ));
    const Wd = 0.62, Dd = 0.13;
    const holderC = new THREE.Vector3(0, HOLDER_Y, 0).addScaledVector(face, 0.08);
    const L2W = (x, y, z) => new THREE.Vector3().copy(holderC).addScaledVector(right, x).addScaledVector(face, z).add(new THREE.Vector3(0, y, 0));
    Object.assign(holder, { face, right, Wd, Dd, center: holderC, L2W });
    // cold finger: a machined bar hung from a clamp block
    const fBot = HOLDER_Y - 0.2, fz = -Dd / 2 - 0.027;
    const finger = new RoundedBoxGeometry(0.17, yU - fBot, 0.05, 2, 0.008);
    goldParts.push(prep(finger, M4(L2W(0, (yU + fBot) / 2 - HOLDER_Y, fz), CHIP_AZ), [0.9, 0.9, 0.9]));
    const clampY = yU - 0.04 - HOLDER_Y;
    const clampBlock = new RoundedBoxGeometry(0.3, 0.08, 0.1, 2, 0.01);
    goldParts.push(prep(clampBlock, M4(L2W(0, clampY, fz), CHIP_AZ), [0.82, 0.82, 0.82]));
    for (const sx of [-0.105, 0.105]) {
      const cap = new THREE.CylinderGeometry(0.016, 0.016, 0.014, 14, 1, false);
      goldParts.push(prep(cap, M4(L2W(sx, clampY, fz + 0.057), CHIP_AZ, Math.PI / 2), [0.8, 0.8, 0.8]));
      const hex = new THREE.CylinderGeometry(0.007, 0.007, 0.004, 6, 1, false);
      darkParts.push(prep(hex, M4(L2W(sx, clampY, fz + 0.063), CHIP_AZ, Math.PI / 2), [1, 1, 1]));
    }
    for (const sx of [-0.045, 0.045]) {
      const cap = new THREE.CylinderGeometry(0.012, 0.012, 0.01, 12, 1, false);
      goldParts.push(prep(cap, M4(L2W(sx, Wd / 2 + 0.07, fz + 0.03), CHIP_AZ, Math.PI / 2), [0.8, 0.8, 0.8]));
      const hex = new THREE.CylinderGeometry(0.005, 0.005, 0.003, 6, 1, false);
      darkParts.push(prep(hex, M4(L2W(sx, Wd / 2 + 0.07, fz + 0.035), CHIP_AZ, Math.PI / 2), [1, 1, 1]));
    }
    // holder body + raised frame (the package lid frame) with corner screws
    const body = new RoundedBoxGeometry(Wd, Wd, Dd, 2, 0.012);
    goldParts.push(prep(body, M4(L2W(0, 0, 0), CHIP_AZ), [1, 1, 1]));
    const fw = 0.055, fh = 0.028;
    holder.fw = fw; holder.fh = fh;
    for (const [x, y, w, h] of [[0, Wd / 2 - fw / 2, Wd, fw], [0, -Wd / 2 + fw / 2, Wd, fw], [Wd / 2 - fw / 2, 0, fw, Wd - 2 * fw], [-Wd / 2 + fw / 2, 0, fw, Wd - 2 * fw]]) {
      const bar = new RoundedBoxGeometry(w, h, fh, 2, 0.006);
      goldParts.push(prep(bar, M4(L2W(x, y, Dd / 2 + fh / 2), CHIP_AZ), [0.95, 0.95, 0.95]));
    }
    for (const [x, y] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const sc = new THREE.CylinderGeometry(0.017, 0.017, 0.012, 12, 1, false);
      goldParts.push(prep(sc, M4(L2W(x * (Wd / 2 - fw / 2), y * (Wd / 2 - fw / 2), Dd / 2 + fh + 0.006), CHIP_AZ, Math.PI / 2), [0.8, 0.8, 0.8]));
      const hole = new THREE.CylinderGeometry(0.008, 0.008, 0.004, 6, 1, false);
      darkParts.push(prep(hole, M4(L2W(x * (Wd / 2 - fw / 2), y * (Wd / 2 - fw / 2), Dd / 2 + fh + 0.012), CHIP_AZ, Math.PI / 2), [1, 1, 1]));
    }
    // SMA launches on the holder sides + cables up to circulators / filters under the MXC plate
    const sideConn = [];
    for (let i = 0; i < 4; i++) sideConn.push({ x: -0.2 + i * 0.133, y: Wd / 2, dir: [0, 1] });
    for (let i = 0; i < 4; i++) sideConn.push({ x: Wd / 2, y: -0.2 + i * 0.133, dir: [1, 0] });
    const holderCables = [];
    let ci = 0;
    for (const c of sideConn) {
      const base = L2W(c.x, c.y, 0);
      const dir = new THREE.Vector3().addScaledVector(right, c.dir[0]).add(new THREE.Vector3(0, c.dir[1], 0));
      const rotM = new THREE.Matrix4().makeBasis(new THREE.Vector3().crossVectors(dir, face).normalize(), dir.clone().normalize(), face.clone());
      const conn = new THREE.CylinderGeometry(0.02, 0.02, 0.05, 6, 1, false);
      conn.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.025, 0));
      conn.applyMatrix4(rotM);
      conn.applyMatrix4(new THREE.Matrix4().makeTranslation(base.x, base.y, base.z));
      goldParts.push(prep(conn, null, [1, 1, 1]));
      const ferr = new THREE.CylinderGeometry(0.012, 0.012, 0.03, 8, 1, false);
      ferr.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.065, 0));
      ferr.applyMatrix4(rotM);
      ferr.applyMatrix4(new THREE.Matrix4().makeTranslation(base.x, base.y, base.z));
      goldParts.push(prep(ferr, null, [0.9, 0.9, 0.9]));
      const start = base.clone().addScaledVector(dir, 0.075);
      const p1 = start.clone().addScaledVector(dir, 0.1);
      const th = Math.atan2(start.x, start.z) + (c.dir[1] ? (ci - 1.5) * 0.12 : c.dir[0] * 0.35);
      const rr = c.dir[1] ? 0.42 + (ci % 2) * 0.12 : 0.62 + (ci % 3) * 0.08;
      const isCirc = ci % 2 === 0;
      const end = P(rr, th, yU - 0.135);
      const approach = end.clone().add(new THREE.Vector3(0, -0.06, 0));
      const p2 = new THREE.Vector3(lerp(p1.x, end.x, 0.4), lerp(p1.y, approach.y, 0.5), lerp(p1.z, end.z, 0.4));
      const curve = new THREE.CatmullRomCurve3([start, p1, p2, approach, end], false, 'centripetal');
      const type = ci % 3 === 0 ? CABLE.cu : CABLE.nbti;
      const tint = type.tint;
      holderCables.push(cableTube(curve, Math.round(40 * Q.density) + 8, 0.0092, Q.radial, () => tint, -1, type.rough));
      if (isCirc) {
        const box = new RoundedBoxGeometry(0.1, 0.12, 0.085, 2, 0.008);
        silverParts.push(prep(box, M4(P(rr, th, yU - 0.065), th), [0.62, 0.62, 0.64]));
        const mag = new THREE.CylinderGeometry(0.03, 0.03, 0.02, 14, 1, false);
        darkParts.push(prep(mag, M4(P(rr + 0.048, th, yU - 0.065), th, Math.PI / 2), [1, 1, 1]));
        circulators.push(P(rr + 0.05, th, yU - 0.065));
      } else {
        const fl = new THREE.CylinderGeometry(0.022, 0.022, 0.13, 10, 1, false);
        silverParts.push(prep(fl, M4(P(rr, th, yU - 0.07)), [0.9, 0.9, 0.9]));
      }
      ci++;
    }
    const merged = mergeGeometries(holderCables, false);
    holderCables.forEach((g) => g.dispose());
    const mesh = new THREE.Mesh(merged, mats.cable);
    mesh.name = 'cables-tail';
    add(mesh);
    cables.push(mesh);
    tris.cables += triCount(merged);
    // a ring of extra filters / isolators under the MXC plate for density
    for (let i = 0; i < 10; i++) {
      const a = CHIP_AZ + Math.PI + (i - 4.5) * 0.3;
      const fl = new THREE.CylinderGeometry(0.024, 0.024, 0.22, 10, 1, false);
      silverParts.push(prep(fl, M4(P(0.78, a, yU - 0.11)), [0.85, 0.85, 0.85]));
    }
  }
  await slicer.yield('holder');

  // ---------- connectors & attenuators (instanced)
  const hexNut = (r, h, y) => { const g = new THREE.CylinderGeometry(r, r, h, 6, 1, true); g.translate(0, y, 0); const cap = new THREE.CircleGeometry(r, 6); cap.rotateX(-Math.PI / 2); cap.rotateY(Math.PI / 2); cap.translate(0, y + h / 2, 0); return [g, cap]; };
  const strip = (arr) => arr.map((x) => { x.deleteAttribute('uv'); return x.toNonIndexed(); });
  const sma = (() => {
    const g = [...hexNut(0.021, 0.012, 0.006)];
    const body = new THREE.CylinderGeometry(0.0125, 0.0145, 0.026, 6, 1, true); body.translate(0, 0.025, 0); g.push(body);
    return mergeGeometries(strip(g), false);
  })();
  const att = (() => {
    const g = [...hexNut(0.021, 0.012, 0.006)];
    const body = new THREE.CylinderGeometry(0.0165, 0.0165, 0.058, 8, 1, true); body.translate(0, 0.041, 0); g.push(body);
    g.push(...hexNut(0.019, 0.01, 0.075));
    const fer = new THREE.CylinderGeometry(0.0125, 0.0125, 0.008, 6, 1, true); fer.translate(0, 0.084, 0); g.push(fer);
    return mergeGeometries(strip(g), false);
  })();
  const makeInst = (geo, list, flip, name, silverEvery) => {
    const im = new THREE.InstancedMesh(geo, mats.conn, list.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
    const col = new THREE.Color();
    list.forEach((c, i) => {
      e.set(flip ? Math.PI : 0, c.rot, 0, 'YXZ');
      q.setFromEuler(e);
      p.set(c.x, c.y, c.z);
      m.compose(p, q, sc);
      im.setMatrixAt(i, m);
      const silver = silverEvery && (i % silverEvery === 0);
      if (silver) col.setRGB(0.82 * c.ao, 0.84 * c.ao, 0.88 * c.ao); else col.setRGB(GOLD[0] * c.ao, GOLD[1] * c.ao, GOLD[2] * c.ao);
      im.setColorAt(i, col);
    });
    im.instanceMatrix.needsUpdate = true;
    im.instanceColor.needsUpdate = true;
    im.name = name;
    im.computeBoundingSphere();
    add(im);
    tris.connectors += triCount(geo) * list.length;
    return im;
  };
  makeInst(sma, connTop, false, 'sma-top', 5);
  makeInst(sma, connBot, true, 'sma-bottom', 7);
  makeInst(att, attTop, false, 'attenuators', 3);
  await slicer.maybeYield('connectors');

  // ---------- merged static parts
  const addMerged = async (parts, mat, name) => {
    if (!parts.length) return null;
    const merged = mergeGeometries(parts, false);
    parts.forEach((g) => g.dispose());
    const mesh = new THREE.Mesh(merged, mat);
    mesh.name = name;
    add(mesh);
    tris.misc += triCount(merged);
    await slicer.maybeYield('merge ' + name);
    return mesh;
  };
  const extra = { goldParts, silverParts, darkParts, dielParts };

  pulsePath.sort((a, b) => a.s - b.s);
  const pathS = new Float32Array(pulsePath.length);
  const pathP = new Float32Array(pulsePath.length * 3);
  pulsePath.forEach((e, i) => { pathS[i] = e.s; pathP[i * 3] = e.p.x; pathP[i * 3 + 1] = e.p.y; pathP[i * 3 + 2] = e.p.z; });

  return {
    root, plates, cables, meshes, textures, holder, circulators, extra,
    finish: async () => {
      await addMerged(goldParts, mats.gold, 'gold-parts');
      await addMerged(silverParts, mats.silver, 'silver-parts');
      await addMerged(darkParts, mats.dark, 'dark-parts');
      await addMerged(dielParts, mats.diel, 'diel-parts');
      tris.total = Math.round(tris.plates + tris.cables + tris.connectors + tris.misc);
    },
    pulse: { line: pulseLine, att: pulseAtt, pathS, pathP },
    stats: { lines: lines.length, connectors: connTop.length + connBot.length + attTop.length, tris },
    prep, M4,
  };
}
