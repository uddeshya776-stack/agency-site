/* Atmosphere and events that are not part of the machine's surfaces:
   - backdrop: a screen-space gradient with a cold halo behind the subject and a faint beam
   - dust: very sparse cold motes in the air
   - frost: fine slow ice crystals around the mixing chamber (chapter 3)
   - signal: the pulse head and the attenuator flashes on the chapter-2 line
   - glow: a soft billboard under the mixing-chamber plate (chapter 3 and the wide shots) */
import * as THREE from 'three';
import { mulberry32 } from './util.js';

const backdropVS = /* glsl */`varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }`;
const backdropFS = /* glsl */`
uniform vec2 uRes, uHalo; uniform float uHaloAmt, uCold, uBeam;
varying vec2 vUv;
void main(){
  vec3 top = mix(vec3(0.0030, 0.0040, 0.0068), vec3(0.0020, 0.0034, 0.0070), uCold);
  vec3 bot = mix(vec3(0.0010, 0.0014, 0.0024), vec3(0.0008, 0.0013, 0.0028), uCold);
  vec3 col = mix(bot, top, smoothstep(0.0, 1.0, vUv.y));
  vec2 d = (vUv - uHalo) * vec2(uRes.x / uRes.y, 1.0);
  float h = exp(-dot(d, d) * 2.4);
  float h2 = exp(-dot(d, d) * 9.0);
  vec3 haloC = mix(vec3(0.0085, 0.0135, 0.024), vec3(0.0055, 0.0150, 0.032), uCold);
  col += haloC * (h * 0.9 + h2 * 0.5) * uHaloAmt;
  float bx = (vUv.x - uHalo.x) * uRes.x / uRes.y;
  float beam = exp(-bx * bx / 0.018) * smoothstep(-0.1, 1.0, vUv.y) * uBeam;
  col += vec3(0.013, 0.020, 0.036) * beam;
  gl_FragColor = vec4(col, 1.0);
}`;

const dustVS = /* glsl */`
attribute float aSeed; uniform float uTime, uProj; varying float vA;
void main(){
  vec3 p = position;
  p.y = mod(p.y - uTime * (0.015 + 0.03 * aSeed) + 5.5, 12.5) - 5.5;
  p.x += sin(uTime * 0.11 + aSeed * 40.0) * 0.12;
  p.z += cos(uTime * 0.09 + aSeed * 23.0) * 0.12;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  gl_PointSize = clamp(uProj * (0.0035 + 0.0045 * aSeed) / max(dist, 0.05), 1.0, 7.0);
  vA = smoothstep(0.35, 1.6, dist) * (1.0 - smoothstep(10.0, 26.0, dist)) * (0.25 + 0.75 * aSeed);
  gl_Position = projectionMatrix * mv;
}`;
const dustFS = /* glsl */`
uniform float uAmt; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = (1.0 - smoothstep(0.2, 1.0, r)) * vA * uAmt;
  gl_FragColor = vec4(vec3(0.55, 0.72, 1.0) * 0.5 * a, a);
}`;

const frostVS = /* glsl */`
attribute float aSeed; uniform float uTime, uProj, uAmt; varying float vA;
void main(){
  vec3 p = position;
  float t = uTime;
  p.y = mod(p.y - t * (0.012 + 0.02 * aSeed) + 4.4, 2.8) - 4.4;     // drift down through the band
  float sw = t * (0.05 + 0.05 * aSeed) + aSeed * 31.0;
  p.x += sin(sw) * 0.06; p.z += cos(sw * 0.8) * 0.06;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  gl_PointSize = clamp(uProj * (0.0028 + 0.003 * aSeed) / max(dist, 0.05), 1.0, 5.0);
  float tw = 0.55 + 0.45 * sin(t * (1.5 + 2.0 * aSeed) + aSeed * 50.0);
  float band = smoothstep(-4.4, -3.9, p.y) * (1.0 - smoothstep(-2.0, -1.6, p.y));
  vA = uAmt * tw * band * smoothstep(0.25, 0.9, dist) * (1.0 - smoothstep(6.0, 14.0, dist));
  gl_Position = projectionMatrix * mv;
}`;
const frostFS = /* glsl */`
varying float vA;
void main(){
  vec2 q = gl_PointCoord - 0.5;
  float r = length(q) * 2.0;
  float core = 1.0 - smoothstep(0.0, 0.55, r);
  float star = max(0.0, 1.0 - abs(q.x) * 14.0) * max(0.0, 1.0 - abs(q.y) * 2.2) + max(0.0, 1.0 - abs(q.y) * 14.0) * max(0.0, 1.0 - abs(q.x) * 2.2);
  float a = (core + star * 0.35) * vA;
  gl_FragColor = vec4(vec3(0.78, 0.9, 1.0) * a, a);
}`;

const signalVS = /* glsl */`
attribute float aIdx;
uniform vec3 uHead; uniform float uHeadAmp; uniform float uFlash[4]; uniform float uProj, uVis;
varying float vA; varying float vHead;
void main(){
  bool head = aIdx < 0.5;
  vec3 p = head ? uHead : position;
  float amp = head ? uHeadAmp : uFlash[int(aIdx + 0.5) - 1];
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float size = head ? 0.11 : 0.12;
  gl_PointSize = clamp(uProj * size / max(-mv.z, 0.05), 2.0, 96.0);
  vA = amp * uVis;
  vHead = head ? 1.0 : 0.0;
  gl_Position = projectionMatrix * mv;
}`;
const signalFS = /* glsl */`
uniform vec3 uColor; varying float vA; varying float vHead;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = exp(-r * r * mix(7.0, 9.0, vHead)) * (1.0 - smoothstep(0.85, 1.0, r));
  float core = exp(-r * r * 60.0) * vHead;
  gl_FragColor = vec4(uColor * (a + core * 1.5) * vA, 1.0);
}`;

const glowVS = /* glsl */`
uniform float uSize; varying vec2 vP;
void main(){
  vP = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uSize;
  gl_Position = projectionMatrix * mv;
}`;
const glowFS = /* glsl */`
uniform vec3 uColor; uniform float uAmt; varying vec2 vP;
void main(){
  float r2 = dot(vP, vP) * 4.0;
  float a = (exp(-r2 * 3.0) * 0.6 + exp(-r2 * 12.0) * 0.4) * (1.0 - smoothstep(0.7, 1.0, r2));
  gl_FragColor = vec4(uColor * a * uAmt, 1.0);
}`;

function fsTriangle() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  return g;
}

export function createEffects({ preset, U, machine }) {
  const group = new THREE.Group();
  group.name = 'effects';
  const proj = { value: 800 };      // px per world unit at distance 1 (drawing-buffer pixels)
  const drift = { value: 0 };       // particle clock (frozen under reduced motion)

  // ---- backdrop
  const bgMat = new THREE.ShaderMaterial({
    uniforms: { uRes: { value: new THREE.Vector2(1, 1) }, uHalo: { value: new THREE.Vector2(0.62, 0.55) }, uHaloAmt: { value: 1 }, uCold: { value: 0 }, uBeam: { value: 0 } },
    vertexShader: backdropVS, fragmentShader: backdropFS, depthTest: false, depthWrite: false, fog: false,
  });
  const bg = new THREE.Mesh(fsTriangle(), bgMat);
  bg.frustumCulled = false; bg.renderOrder = -1000; bg.name = 'backdrop';
  group.add(bg);

  // ---- dust
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uTime: drift, uProj: proj, uAmt: { value: 1 } },
    vertexShader: dustVS, fragmentShader: dustFS,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  {
    const N = preset.dust;
    const rnd = mulberry32(5);
    const pos = new Float32Array(N * 3), seed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = rnd() * Math.PI * 2, r = 0.6 + Math.sqrt(rnd()) * 5.0;
      pos[i * 3] = Math.sin(a) * r; pos[i * 3 + 1] = -5.5 + rnd() * 12.5; pos[i * 3 + 2] = Math.cos(a) * r;
      seed[i] = rnd();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const pts = new THREE.Points(g, dustMat);
    pts.frustumCulled = false; pts.name = 'dust';
    group.add(pts);
  }

  // ---- frost crystals around the mixing chamber
  const frostMat = new THREE.ShaderMaterial({
    uniforms: { uTime: drift, uProj: proj, uAmt: { value: 0 } },
    vertexShader: frostVS, fragmentShader: frostFS,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const frostPts = (() => {
    const N = preset.frost;
    const rnd = mulberry32(17);
    const pos = new Float32Array(N * 3), seed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = rnd() * Math.PI * 2, r = 0.15 + Math.sqrt(rnd()) * 1.55;
      pos[i * 3] = Math.sin(a) * r; pos[i * 3 + 1] = -4.4 + rnd() * 2.8; pos[i * 3 + 2] = Math.cos(a) * r;
      seed[i] = rnd();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const pts = new THREE.Points(g, frostMat);
    pts.frustumCulled = false; pts.name = 'frost-particles';
    pts.visible = false;
    group.add(pts);
    return pts;
  })();

  // ---- signal pulse head + attenuator flashes
  const att = machine.pulse.att;
  const signalMat = new THREE.ShaderMaterial({
    uniforms: {
      uHead: { value: new THREE.Vector3() }, uHeadAmp: { value: 0 }, uFlash: { value: new Float32Array(4) },
      uProj: proj, uVis: { value: 0 }, uColor: { value: U.uPulseColor.value },
    },
    vertexShader: signalVS, fragmentShader: signalFS,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const signal = (() => {
    const pos = new Float32Array(5 * 3), idx = new Float32Array(5);
    for (let i = 0; i < 5; i++) {
      idx[i] = i;
      const a = att[Math.max(0, Math.min(att.length - 1, i - 1))];
      if (i > 0 && a) { pos[i * 3] = a.x; pos[i * 3 + 1] = a.y; pos[i * 3 + 2] = a.z; }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aIdx', new THREE.BufferAttribute(idx, 1));
    const pts = new THREE.Points(g, signalMat);
    pts.frustumCulled = false; pts.name = 'signal';
    pts.visible = false;
    pts.renderOrder = 10;
    group.add(pts);
    return pts;
  })();

  // ---- soft glow under the mixing-chamber plate
  const glowMat = new THREE.ShaderMaterial({
    uniforms: { uSize: { value: 1.5 }, uColor: { value: new THREE.Color(0.10, 0.26, 0.42) }, uAmt: { value: 0 } },
    vertexShader: glowVS, fragmentShader: glowFS,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), glowMat);
  glow.position.copy(U.uGlowPos.value);
  glow.frustumCulled = false; glow.name = 'mxc-glow';
  glow.visible = false;
  group.add(glow);

  return {
    group, bgMat, dustMat, frostMat, signalMat, glowMat, frostPts, signal, glow, proj, drift,
    setGlow(a) { glowMat.uniforms.uAmt.value = a; glow.visible = a > 0.002; },
    setFrost(a) { frostMat.uniforms.uAmt.value = a; frostPts.visible = a > 0.002; },
  };
}
