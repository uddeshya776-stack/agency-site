/* The Q-25 processor package: interposer PCB, the die (5x5 transmon lattice whose
   qubits, couplers and readout resonators light from uniform arrays), instanced
   aluminium airbridges and wedge bonds, a pocket lip with corner clips, and the
   choreography that drives the lights per chapter. */
import * as THREE from 'three';
import { makeChipTextures, makePCBTextures, chipLayout } from './textures.js';
import { patchMaterial } from './materials.js';
import { clamp, smoothstep, mulberry32 } from './util.js';

const N = 5;
const NQ = 25;
const NC = 40;

// Lattice tables (pure constants). PAIRS: coupler index -> qubit pair (horizontal i + 4j,
// vertical 20 + i + 5j). QC: couplers touching each qubit (for the hopping random walk).
// LAYERS: four interleaved coupler patterns, as on large lattice processors.
const { PAIRS, QC, LAYERS } = (() => {
  const pairs = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N - 1; i++) pairs[i + 4 * j] = [j * N + i, j * N + i + 1];
  for (let j = 0; j < N - 1; j++) for (let i = 0; i < N; i++) pairs[20 + i + 5 * j] = [j * N + i, (j + 1) * N + i];
  const qc = Array.from({ length: NQ }, () => []);
  pairs.forEach((p, c) => { qc[p[0]].push(c); qc[p[1]].push(c); });
  const layers = [[], [], [], []];
  for (let j = 0; j < N; j++) for (let i = 0; i < N - 1; i++) layers[i % 2].push(i + 4 * j);
  for (let j = 0; j < N - 1; j++) for (let i = 0; i < N; i++) layers[2 + (j % 2)].push(20 + i + 5 * j);
  return { PAIRS: pairs, QC: qc, LAYERS: layers };
})();

function chipShader(mat, U, CU) {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { uQ: CU.uQ, uC: CU.uC, uReadout: CU.uReadout, uGain: CU.uGain, uQColor: CU.uQColor, uCColor: CU.uCColor, uRColor: CU.uRColor, uTime: U.uTime });
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uQ[${NQ}];
        uniform float uC[${NC}];
        uniform float uReadout, uGain, uTime;
        uniform vec3 uQColor, uCColor, uRColor;`)
      .replace('#include <emissivemap_fragment>', `
        {
          vec2 tuv = vEmissiveMapUv;
          vec4 em = texture2D(emissiveMap, tuv);
          vec2 g = (tuv - ${chipLayout().x0.toFixed(4)}) / ${chipLayout().pitch.toFixed(4)};
          vec2 gi = clamp(floor(g + 0.5), 0.0, 4.0);
          float q = uQ[int(gi.x) + 5 * int(gi.y)];
          vec2 f = g - floor(g + 0.5);
          float cpl;
          if (abs(f.y) < abs(f.x)) cpl = uC[int(clamp(floor(g.x), 0.0, 3.0)) + 4 * int(gi.y)];
          else cpl = uC[20 + int(gi.x) + 5 * int(clamp(floor(g.y), 0.0, 3.0))];
          totalEmissiveRadiance = (uQColor * (em.r * q) + uCColor * (em.b * cpl) + uRColor * (em.g * uReadout)) * uGain;
        }`);
  };
  mat.customProgramCacheKey = () => 'nadir-die';
  return mat;
}

/* Arc of a wedge bond, real units, starting at the die pad and landing outward on the PCB.
   Local frame: +x outward, +y out of the die plane, z along the die edge. */
function bondGeometry(len, loop, drop) {
  const pts = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const x = len * t;
    const rise = Math.sin(Math.PI * Math.pow(t, 0.75)) * loop;  // steep rise at the ball, long tail
    pts.push(new THREE.Vector3(x, rise - drop * t, 0));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.00085, 4, false);
}
/* Airbridge: a flat-topped arch across a coplanar waveguide (local x across the line). */
function bridgeGeometry(span, h) {
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    pts.push(new THREE.Vector3(span * (t - 0.5), h * Math.pow(Math.sin(Math.PI * t), 0.45), 0));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 8, 0.00048, 4, false);
}

export async function buildChip({ preset: Q, U, machine, slicer, mats }) {
  const H = machine.holder;
  const { L2W, face, right, Wd, Dd, fw } = H;
  const root = new THREE.Group();
  root.name = 'chip';
  const textures = [];

  // chip uniforms
  const CU = {
    uQ: { value: new Float32Array(NQ) },
    uC: { value: new Float32Array(NC) },
    uReadout: { value: 0 },
    uGain: { value: 1 },
    uQColor: { value: new THREE.Color(0.30, 0.74, 1.0).multiplyScalar(2.4) },
    uCColor: { value: new THREE.Color(0.62, 0.86, 1.0).multiplyScalar(2.2) },
    uRColor: { value: new THREE.Color(0.30, 0.62, 1.0).multiplyScalar(0.9) },
  };

  // ---------- PCB
  slicer.step('chip', 0.8);
  const pcbTex = await makePCBTextures(Q.pcbTex, [5, 5, 5, 5], slicer);
  textures.push(pcbTex.map, pcbTex.mr);
  const pcbW = Wd - 2 * fw;
  const pcbGeo = new THREE.BoxGeometry(pcbW, pcbW, 0.006);
  flipV(pcbGeo);
  const pcbMat = patchMaterial(new THREE.MeshStandardMaterial({ map: pcbTex.map, roughnessMap: pcbTex.mr, metalnessMap: pcbTex.mr, roughness: 1, metalness: 1 }), U, { octaves: Q.frostOctaves });
  const pcb = new THREE.Mesh(pcbGeo, pcbMat);
  pcb.position.copy(L2W(0, 0, Dd / 2 + 0.003));
  pcb.rotation.y = Math.atan2(face.x, face.z);
  pcb.name = 'pcb';
  root.add(pcb);

  // ---------- die
  const chipTex = await makeChipTextures(Q.chipTex, slicer);
  textures.push(chipTex.map, chipTex.mr, chipTex.em);
  const lay = chipTex.layout;
  const dieW = pcbW * 0.476 * 0.96;
  const dieT = 0.01;
  const dieGeo = new THREE.BoxGeometry(dieW, dieW, dieT);
  flipV(dieGeo);
  const dieMat = new THREE.MeshPhysicalMaterial({
    map: chipTex.map, roughnessMap: chipTex.mr, metalnessMap: chipTex.mr, roughness: 1, metalness: 1,
    emissive: 0xffffff, emissiveMap: chipTex.em, emissiveIntensity: 1,
    iridescence: Q.iridescence ?? 0.55, iridescenceIOR: 1.45, iridescenceThicknessRange: [260, 520],
  });
  chipShader(dieMat, U, CU);
  const die = new THREE.Mesh(dieGeo, dieMat);
  const zTop = Dd / 2 + 0.006 + dieT;           // die top surface (holder local z)
  die.position.copy(L2W(0, 0, Dd / 2 + 0.006 + dieT / 2));
  die.rotation.y = Math.atan2(face.x, face.z);
  die.name = 'die';
  root.add(die);
  await slicer.maybeYield('die');

  // die texture space (u right, v down) -> world, at a height above the die surface
  const UP = new THREE.Vector3(0, 1, 0);
  const D2W = (u, v, z = 0) => L2W((u - 0.5) * dieW, -(v - 0.5) * dieW, zTop + z);
  const center = D2W(0.5, 0.5, 0.0005);

  // ---------- pocket lip and corner clips (merged into the machine's gold parts)
  {
    const { prep, M4 } = machine;
    const gold = machine.extra.goldParts;
    const lipIn = dieW / 2 + 0.007, lipW = 0.006, lipH = 0.004;
    const zLip = Dd / 2 + 0.006 + lipH / 2;
    const yaw = Math.atan2(face.x, face.z);
    for (const [x, y, w, h] of [[0, lipIn + lipW / 2, 2 * (lipIn + lipW), lipW], [0, -lipIn - lipW / 2, 2 * (lipIn + lipW), lipW], [lipIn + lipW / 2, 0, lipW, 2 * lipIn], [-lipIn - lipW / 2, 0, lipW, 2 * lipIn]]) {
      gold.push(prep(new THREE.BoxGeometry(w, h, lipH), M4(L2W(x, y, zLip), yaw), [0.9, 0.9, 0.9]));
    }
    // L-shaped clips holding the die corners, each with a tiny screw
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const cx = sx * (dieW / 2 + 0.004), cy = sy * (dieW / 2 + 0.004);
      gold.push(prep(new THREE.BoxGeometry(0.03, 0.009, 0.004), M4(L2W(cx - sx * 0.008, cy, zTop + 0.002), yaw), [0.95, 0.95, 0.95]));
      gold.push(prep(new THREE.BoxGeometry(0.009, 0.03, 0.004), M4(L2W(cx, cy - sy * 0.008, zTop + 0.002), yaw), [0.95, 0.95, 0.95]));
      gold.push(prep(new THREE.CylinderGeometry(0.0045, 0.0045, 0.004, 10), M4(L2W(cx + sx * 0.002, cy + sy * 0.002, zTop + 0.005), yaw, Math.PI / 2), [0.75, 0.75, 0.75]));
    }
  }

  // ---------- wedge bonds (instanced): signal bonds at the flux pads, ground bonds along each edge
  const basis = new THREE.Matrix4();
  const mtx = new THREE.Matrix4();
  const sc = new THREE.Vector3();
  const ax = new THREE.Vector3(), az = new THREE.Vector3();
  const sideDir = [[0, -1], [0, 1], [-1, 0], [1, 0]];   // in (u, v): top, bottom, left, right
  const bonds = [];
  for (const [x, y, o] of lay.pads) {
    // pad side from its position
    const s = o === 'v' ? (y < 0.5 ? 0 : 1) : (x < 0.5 ? 2 : 3);
    bonds.push({ u: x, v: y, s, sig: true });
  }
  const perSide = Math.max(2, Q.wirebonds);
  for (let s = 0; s < 4; s++) {
    for (let i = 0; i < perSide; i++) {
      const t = 0.08 + (i + 0.5) / perSide * 0.84;
      let u, v;
      if (s === 0) { u = t; v = 0.035; } else if (s === 1) { u = t; v = 0.965; } else if (s === 2) { u = 0.035; v = t; } else { u = 0.965; v = t; }
      const tooClose = bonds.some((b) => b.s === s && Math.hypot(b.u - u, b.v - v) < 0.035);
      if (!tooClose) bonds.push({ u, v, s, sig: false });
    }
  }
  const rb = mulberry32(31);
  const bondGeo = bondGeometry(0.036, 0.0145, dieT + 0.0005);
  const bondMat = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.26 }), U, { octaves: Q.frostOctaves });
  bondMat.color.setRGB(1.0, 0.76, 0.42);   // gold ball bonds read richer against the die than aluminium wedges
  const bridgeMat = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.3 }), U, { octaves: Q.frostOctaves });
  bridgeMat.color.setRGB(0.82, 0.84, 0.88);
  const bondIM = new THREE.InstancedMesh(bondGeo, bondMat, bonds.length);
  bonds.forEach((b, i) => {
    const [du, dv] = sideDir[b.s];
    const start = D2W(b.u, b.v, 0.0004);
    // outward direction in world: u -> right, v -> -up
    ax.set(0, 0, 0).addScaledVector(right, du).addScaledVector(UP, -dv).normalize();
    az.crossVectors(ax, face).normalize();
    basis.makeBasis(ax, face, az);
    const len = (b.sig ? 1.15 : 0.9 + rb() * 0.2);
    sc.set(len, b.sig ? 1.1 : 0.85 + rb() * 0.2, 1);
    mtx.copy(basis).scale(sc).setPosition(start);
    bondIM.setMatrixAt(i, mtx);
  });
  bondIM.instanceMatrix.needsUpdate = true;
  bondIM.computeBoundingSphere();
  bondIM.name = 'wirebonds';
  root.add(bondIM);

  // ---------- airbridges (instanced) across couplers and flux lines
  const bridges = [];
  if (Q.airbridges > 0) {
    for (const c of lay.couplers) {
      const [[x0, y0], [x1, y1]] = c.pts;
      bridges.push({ u: (x0 + x1) / 2, v: (y0 + y1) / 2, du: x1 - x0, dv: y1 - y0, span: 0.0042 + 0.006 + 0.004 });
    }
    for (const pts of lay.flux) {
      for (let k = 0; k < pts.length - 1; k++) {
        const [x0, y0] = pts[k], [x1, y1] = pts[k + 1];
        const len = Math.hypot(x1 - x0, y1 - y0);
        const n = Math.floor(len / 0.05 * Q.airbridges);
        for (let i = 1; i <= n; i++) {
          const t = i / (n + 1);
          bridges.push({ u: x0 + (x1 - x0) * t, v: y0 + (y1 - y0) * t, du: x1 - x0, dv: y1 - y0, span: 0.004 + 0.006 + 0.004 });
        }
      }
    }
  }
  let bridgeIM = null;
  if (bridges.length) {
    const bGeo = bridgeGeometry(0.0142 * dieW * 1.25, 0.0011);
    bridgeIM = new THREE.InstancedMesh(bGeo, bridgeMat, bridges.length);
    const along = new THREE.Vector3();
    bridges.forEach((b, i) => {
      // line direction in world, then the bridge spans across it
      along.set(0, 0, 0).addScaledVector(right, b.du).addScaledVector(UP, -b.dv).normalize();
      ax.crossVectors(face, along).normalize();
      basis.makeBasis(ax, face, along);
      mtx.copy(basis).setPosition(D2W(b.u, b.v, 0.0002));
      bridgeIM.setMatrixAt(i, mtx);
    });
    bridgeIM.instanceMatrix.needsUpdate = true;
    bridgeIM.computeBoundingSphere();
    bridgeIM.name = 'airbridges';
    root.add(bridgeIM);
  }
  await slicer.maybeYield('bonds');

  const tris = pcbGeo.index.count / 3 + dieGeo.index.count / 3 + (bondGeo.index.count / 3) * bonds.length + (bridgeIM ? (bridgeIM.geometry.index.count / 3) * bridges.length : 0);

  return {
    root, textures, CU, center, normal: face.clone(), right: right.clone(), dieW,
    meshes: [pcb, die, bondIM, bridgeIM].filter(Boolean),
    stats: { bonds: bonds.length, bridges: bridges.length, tris: Math.round(tris) },
    choreo: createChoreo(CU),
  };
}

/* BoxGeometry v runs bottom->top; the canvases are drawn top->bottom with flipY off. */
function flipV(geo) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
  uv.needsUpdate = true;
}

/* ------------------------------------------------------------------ choreography
   Chapter 4: qubits wake in a sweep, then a two-qubit gate hops between neighbours.
   Chapter 5: an "algorithm": four interleaved coupler layers with single-qubit flickers
   and a readout flash per cycle. Chapters 6-7: everything glows steadily. */
const IDLE = 0.2, AWAKE = 0.62;
const WAKE_AT = 3.55, REARM_AT = 3.2;
const WAKE_STEP = 0.07, WAKE_DUR = 2.3, GATE = 1.05;

const hash01 = (n) => {
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n ^= n >>> 16;
  return (n >>> 0) / 4294967296;
};

function createChoreo(CU) {
  const Q = CU.uQ.value, C = CU.uC.value;
  const qa = new Float32Array(NQ), ca = new Float32Array(NC);   // gate phase
  const qb = new Float32Array(NQ), cb = new Float32Array(NC);   // algorithm phase
  // wake order: a diagonal sweep from the corner nearest the lens, with a little shuffle
  const order = new Float32Array(NQ);
  {
    const r = mulberry32(5);
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) order[j * N + i] = (i + (N - 1 - j)) + r() * 0.8;
    const sorted = Array.from(order).map((v, k) => [v, k]).sort((a, b) => a[0] - b[0]);
    sorted.forEach(([, k], n) => { order[k] = n; });
  }
  // gate walk: a deterministic random walk over neighbouring couplers, extended in place
  const WALK_START = 10, WALK_SEED = 99;
  let ws = WALK_SEED, walkN = 0, walkC = WALK_START;
  const wrand = () => {
    ws = (ws + 0x6d2b79f5) >>> 0;
    let t = ws;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  function pairAt(n) {
    if (n < walkN) { ws = WALK_SEED; walkN = 0; walkC = WALK_START; }
    while (walkN < n) {
      const pr = PAIRS[walkC];
      const q = wrand() < 0.5 ? pr[0] : pr[1];
      const list = QC[q];
      let pick = Math.floor(wrand() * (list.length - 1));
      for (let i = 0; i < list.length; i++) {
        if (list[i] === walkC) continue;
        if (pick-- === 0) { walkC = list[i]; break; }
      }
      walkN++;
    }
    return walkC;
  }

  const st = { wakeAt: -1e9, armed: true, last: 0 };

  function idle(t, out) {
    for (let k = 0; k < NQ; k++) out[k] = IDLE * (0.86 + 0.14 * Math.sin(t * 1.3 + k * 1.7));
  }

  return {
    state: st,
    /* Force the wake to have started `age` seconds ago (tests and stills). */
    setWakeAge(time, age) { st.wakeAt = time - age; st.armed = false; },
    update(time, c, reduced) {
      // arm / trigger the wake with hysteresis on the smoothed chapter
      if (st.armed && c >= WAKE_AT) { st.wakeAt = time; st.armed = false; }
      else if (!st.armed && c < REARM_AT) { st.armed = true; st.wakeAt = -1e9; }

      const kAlg = smoothstep(4.4, 4.85, c) * (1 - smoothstep(5.45, 5.85, c));
      const kSteady = smoothstep(5.45, 5.85, c);
      let readout = 0;

      // ---- gate phase (chapter 4)
      const tw = reduced ? (st.armed ? -1 : 99) : time - st.wakeAt;
      if (st.armed || tw < 0) {
        if (reduced) for (let k = 0; k < NQ; k++) qa[k] = IDLE; else idle(time, qa);
        ca.fill(0);
      } else {
        for (let k = 0; k < NQ; k++) {
          const tau = tw - order[k] * WAKE_STEP;
          if (tau < 0) qa[k] = IDLE * (0.86 + 0.14 * Math.sin(time * 1.3 + k * 1.7));
          else {
            const attack = clamp(tau / 0.06, 0, 1);
            qa[k] = IDLE + (AWAKE - IDLE) * attack + 1.1 * attack * Math.exp(-tau * 4.5);
            if (!reduced) qa[k] *= 0.94 + 0.06 * Math.sin(time * 2.1 + k * 2.3);
          }
        }
        ca.fill(0);
        const tg = tw - WAKE_DUR;
        if (tg > 0 && !reduced) {
          const n = Math.floor(tg / GATE);
          const tau = (tg - n * GATE) / GATE;
          const cIdx = pairAt(n);
          const env = Math.pow(Math.sin(Math.PI * tau), 2);
          ca[cIdx] = env * 1.25;
          const pr = PAIRS[cIdx];
          const swap = 0.5 + 0.5 * Math.cos(2 * Math.PI * 2.5 * tau);
          qa[pr[0]] += env * 0.95 * swap;
          qa[pr[1]] += env * 0.95 * (1 - swap);
        } else if (reduced && !st.armed) {
          ca[WALK_START] = 0.9; qa[PAIRS[WALK_START][0]] += 0.45; qa[PAIRS[WALK_START][1]] += 0.45;
        }
      }

      // ---- algorithm phase (chapter 5)
      if (kAlg > 0.001) {
        const cyc = 3.4;
        const tc = reduced ? 0.3 : (time % cyc + cyc) % cyc;
        cb.fill(0.04);
        for (let k = 0; k < NQ; k++) qb[k] = AWAKE * 0.85;
        if (tc < 2.6) {
          const L = Math.min(3, Math.floor(tc / 0.65));
          const tau = (tc - L * 0.65) / 0.65;
          const env = Math.pow(Math.sin(Math.PI * Math.min(1, tau / 0.85)), 2);
          const layer = LAYERS[L];
          for (let n = 0; n < layer.length; n++) {
            const ci = layer[n];
            cb[ci] = 0.15 + env * 1.05;
            const pr = PAIRS[ci];
            const swap = 0.5 + 0.5 * Math.cos(2 * Math.PI * 1.5 * tau + ci);
            qb[pr[0]] += env * 0.5 * swap;
            qb[pr[1]] += env * 0.5 * (1 - swap);
          }
          // single-qubit gates between layers: brief, scattered flickers
          if (!reduced && tau > 0.8) {
            const fl = (tau - 0.8) / 0.2;
            for (let k = 0; k < NQ; k++) if (((k * 7 + L * 3) % 5) === 0) qb[k] += 0.5 * Math.sin(Math.PI * fl);
          }
        } else {
          // measurement: readout resonators flash, qubits settle to a random bitstring
          const tau = (tc - 2.6) / 0.8;
          readout = Math.sin(Math.PI * tau);
          const cycle = reduced ? 3 : Math.floor(time / cyc);
          for (let k = 0; k < NQ; k++) {
            const bit = hash01(k * 31 + cycle * 977 + 7) < 0.45 ? 1.35 : 0.28;
            qb[k] = AWAKE * 0.85 + (bit - AWAKE * 0.85) * readout;
          }
        }
      }

      // ---- blend: gate -> algorithm -> steady
      for (let k = 0; k < NQ; k++) {
        let v = qa[k] + (qb[k] - qa[k]) * kAlg;
        v += (0.82 - v) * kSteady;
        Q[k] = v;
      }
      for (let k = 0; k < NC; k++) {
        let v = ca[k] + (cb[k] - ca[k]) * kAlg;
        v += (0.22 - v) * kSteady;
        C[k] = v;
      }
      CU.uReadout.value = readout * kAlg + 0.25 * kSteady;
    },
  };
}
