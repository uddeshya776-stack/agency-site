/* Ilvère bottle viewer: the real-time centrepiece of the hero and the product page.

   createBottleViewer({ canvas, mode = 'hero' | 'pdp', scent = 'ambre', reducedMotion = false,
                        theme = 'light', onProgress }) -> Promise<api>
   api: tier, mode, firstFrame (Promise), setProgress(t), setScent(id), setSize(50|100),
        setEngraving(text), setPointer(x, y), setFrame({ x, y, scale }), setTheme('light'|'dark', bgHex?), resize(),
        start(), stop(), intro() -> Promise, info(), dispose()

   Rendering: the glass is ray traced in its own shader (glass.js) against a procedural studio
   (env.js); onyx cap and gold collar are physically based; the scene renders premultiplied into
   a half-float MSAA target and post.js tone maps it (Khronos PBR Neutral) and composites it
   over the page colour, so the canvas is transparent: shadows and glows land on the page.
   The loop runs between start() and stop(), and skips frames when nothing moves.

   HERO CHOREOGRAPHY (setProgress, t = 0..1 over the pinned ~300vh hero; t is smoothed by a
   critically damped spring, every value below springs to its target):
     t = 0     front-on (a few degrees off axis), centred-right of the frame (portrait: centred
               and lower); a slow breathing turn and the studio drifting across the glass.
     t ~ 0.35  the camera glides close to the shoulder; the onyx cap lifts ~1.8 cm and floats
               above the collar, turning slightly; a soft strip light sweeps across the glass
               (t 0.15 .. 0.55).
     t ~ 0.7   the bottle has turned to three-quarters (~40 deg): the depth of the glass and the
               liquid; the cap has settled back on the collar.
     t = 1     settled, slightly smaller (0.9) and centred, ready for the collection section.
   PDP: drag to turn the bottle (horizontal drags only on touch, so vertical page scroll is
   never blocked; mouse also tilts within a limited polar range), inertia, gentle return to
   the front 3 s after release. Wheel and pinch do nothing. */
import * as THREE from 'three';
import { detectTier, Governor, pixelRatioFor } from './quality.js';
import { createSlicer, springStep, clamp, lerp, smoothstep, smootherstep, easeOutCubic, easeInOutCubic } from './util.js';
import { BOTTLE, roundedPrism, collarGeometry } from './geometry.js';
import { buildEnvironment } from './env.js';
import { createGlassMaterial, sigmaFromColor } from './glass.js';
import { createOnyx, createGold, createEngravingMaterial } from './materials.js';
import { createPrintTexture, createEngravingTexture, ENG_W, ENG_H } from './textures.js';
import { createPost, inverseNeutral } from './post.js';
import { GROUND, HALO } from './chunks.js';

const DEG = Math.PI / 180;

export const SCENTS = {
  ambre: { name: 'Ambre Nocturne', hex: '#B8661E' },
  figue: { name: 'Figue Solaire', hex: '#C9B45A' },
  rose: { name: 'Rose Cendrée', hex: '#D99A92' },
  iris: { name: "Sel d'Iris", hex: '#CFC8DA' },
  vetiver: { name: 'Vétiver Minuit', hex: '#4E5A3C' },
};
// absorption density per scent (pale liquids are a little denser so they still read)
const DENSITY = { ambre: 1.0, figue: 1.0, rose: 0.95, iris: 1.25, vetiver: 0.85 };

const THEMES = {
  light: { sigMul: 1.0, bg: '#EFE9E1', shadow: 0.62, caustic: 0.85, halo: [0.0, 0.0, 0.0], scatter: 0.05, irr: 1.0, envInt: 1.0, refrEnv: 0.95, bloom: 0.1 },
  dark: { sigMul: 0.8, bg: '#14110F', shadow: 0.9, caustic: 1.1, halo: [0.34, 0.25, 0.16], scatter: 0.45, irr: 0.62, envInt: 1.0, refrEnv: 1.0, bloom: 0.16 },
};

/* Hero keys. frameH: world height of the frame at the target (cm); minW: world width that must
   stay in frame (portrait); sx, sy: lens shift (NDC) placing the bottle in the frame. */
const HERO_LAND = [
  { t: 0.0, yaw: -11, elev: 5, frameH: 19.5, minW: 0, lookY: 6.3, sx: 0.32, sy: 0.0, cap: 0.0, capYaw: 0, scale: 1.0, breathe: 1.0 },
  { t: 0.35, yaw: 9, elev: 9, frameH: 12.5, minW: 0, lookY: 8.7, sx: 0.26, sy: -0.04, cap: 1.8, capYaw: 14, scale: 1.0, breathe: 0.55 },
  { t: 0.7, yaw: -40, elev: 13, frameH: 16.5, minW: 0, lookY: 6.5, sx: 0.22, sy: 0.0, cap: 0.0, capYaw: 0, scale: 1.0, breathe: 0.55 },
  { t: 1.0, yaw: -24, elev: 7, frameH: 21.5, minW: 0, lookY: 6.3, sx: 0.0, sy: 0.0, cap: 0.0, capYaw: 0, scale: 0.9, breathe: 0.8 },
];
const HERO_PORT = [
  { t: 0.0, yaw: -11, elev: 5, frameH: 27.5, minW: 11.5, lookY: 7.2, sx: 0.0, sy: -0.24, cap: 0.0, capYaw: 0, scale: 1.0, breathe: 1.0 },
  { t: 0.35, yaw: 9, elev: 9, frameH: 17, minW: 8.5, lookY: 9.4, sx: 0.0, sy: -0.16, cap: 1.8, capYaw: 14, scale: 1.0, breathe: 0.55 },
  { t: 0.7, yaw: -40, elev: 13, frameH: 21, minW: 10, lookY: 7.0, sx: 0.0, sy: -0.12, cap: 0.0, capYaw: 0, scale: 1.0, breathe: 0.55 },
  // portrait t = 1: the collection copy covers the lower ~55%: bottle small, in the upper half
  // (cap top ~15% from the top, base ~45%)
  { t: 1.0, yaw: -24, elev: 7, frameH: 38, minW: 0, lookY: 6.05, sx: 0.0, sy: 0.385, cap: 0.0, capYaw: 0, scale: 0.9, breathe: 0.8 },
];
const PDP_SHOT = { yaw: -14, elev: 8, frameH: 17.5, minW: 11.5, lookY: 7.0, sx: 0, sy: 0.02, cap: 0, capYaw: 0, scale: 1, breathe: 0 };
const KEYS = Object.keys(HERO_LAND[0]).filter((k) => k !== 't');

function sampleKeys(keys, t, out) {
  t = clamp(t, 0, 1);
  let i = 0;
  while (i < keys.length - 2 && t > keys[i + 1].t) i++;
  const a = keys[i], b = keys[i + 1];
  const u = smootherstep(a.t, b.t, t);
  for (const k of KEYS) out[k] = lerp(a[k], b[k], u);
  return out;
}

const hexToLinear = (hex) => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; };
const hexToDisplay = (hex) => { const c = new THREE.Color(hex); const o = {}; c.getRGB(o, THREE.SRGBColorSpace); return [o.r, o.g, o.b]; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// event animations run on the wall clock, so they finish on time even when frames are slow
const wall = () => performance.now() / 1000;

export async function createBottleViewer({ canvas, mode = 'hero', scent = 'ambre', reducedMotion = false, theme = 'light', onProgress, debug = null } = {}) {
  if (!canvas) throw new Error('createBottleViewer: a canvas is required');
  const params = new URLSearchParams(location.search);
  const dbg = debug || (params.has('debug') ? {} : null);
  const pdp = mode === 'pdp';
  if (!SCENTS[scent]) scent = 'ambre';
  const slicer = createSlicer({ budget: 10, onProgress });

  // ------------------------------------------------------------------ renderer + tier
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: false, alpha: true, premultipliedAlpha: true, depth: false, stencil: false,
    powerPreference: 'high-performance', preserveDrawingBuffer: !!(dbg && dbg.preserve),
  });
  if (!renderer.extensions.has('EXT_color_buffer_float') && !renderer.extensions.has('EXT_color_buffer_half_float')) {
    renderer.dispose();
    throw new Error('createBottleViewer: half-float render targets are not supported');
  }
  renderer.debug.checkShaderErrors = !!dbg;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(0x000000, 0);
  const tier = detectTier(renderer.getContext());
  const q = tier.name;
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  const finePointer = typeof matchMedia === 'function' && matchMedia('(hover: hover) and (pointer: fine)').matches;
  slicer.step('renderer', 0.05);
  await slicer.yield('renderer');

  // ------------------------------------------------------------------ fonts (for the print)
  try {
    if (document.fonts) {
      const loads = ["400 64px 'Ilvere Display'", "italic 400 64px 'Ilvere Display'", "500 32px 'Ilvere Sans'"].map((f) => document.fonts.load(f).catch(() => null));
      await Promise.race([Promise.all(loads).then(() => document.fonts.ready), sleep(1500)]);
    }
  } catch (e) { /* fall back to system serif */ }

  // ------------------------------------------------------------------ scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1.6, 1, 400);
  let themeName = THEMES[theme] ? theme : 'light';
  let envSet = buildEnvironment(renderer, { mood: themeName, cubeSize: q === 'high' ? 512 : 256, pmremSize: 256 });
  scene.environment = envSet.pmrem;
  slicer.step('environment', 0.25);
  await slicer.yield('environment');

  // shared uniforms: glass, ground and halo all read them
  const S = {
    uShadowOff: { value: new THREE.Vector2(1.2, -2.0) },
    uShadowAmt: { value: 0.6 },
    uCaustic: { value: new THREE.Vector3() },
    uCapLift: { value: 0 },
    uBg: { value: new THREE.Vector3(0.8, 0.8, 0.8) },
    uHaloCol: { value: new THREE.Vector3() },
    uHaloPos: { value: new THREE.Vector3(0, 0, 0.8) },
    uViewProj: { value: new THREE.Matrix4() },
    uAspect: { value: 1.6 },
    uRot: { value: new THREE.Matrix3() },
    uScale: { value: 1 },
    uBottlePos: { value: new THREE.Vector3() },
  };

  // textures
  const printSize = q === 'low' ? 1024 : 2048;
  const printA = createPrintTexture(printSize), printB = createPrintTexture(printSize);
  const engTex = createEngravingTexture(q === 'low' ? 512 : 1024);
  let size = 50;
  let printFront = printB;   // the texture currently shown (uDecalMix = 1 shows B)
  printB.userData.draw(SCENTS[scent].name, size);
  printA.userData.draw(SCENTS[scent].name, size);
  slicer.step('textures', 0.4);
  await slicer.yield('textures');

  // bottle
  const bottle = new THREE.Group();
  bottle.name = 'bottle';
  scene.add(bottle);
  const segC = q === 'low' ? 14 : 22, segB = q === 'low' ? 6 : 10;
  const glassGeo = roundedPrism(BOTTLE.w / 2, BOTTLE.d / 2, BOTTLE.r, BOTTLE.h, BOTTLE.bevel, 0, segC, segB);
  const glassMat = createGlassMaterial({ tier, env: envSet.cube, decalA: printA, decalB: printB });
  Object.assign(glassMat.uniforms, S);
  const glass = new THREE.Mesh(glassGeo, glassMat);
  glass.name = 'glass';
  bottle.add(glass);

  const goldMat = createGold({ rough: 0.12, aniso: 0.0 });
  const collar = new THREE.Mesh(collarGeometry(q === 'low' ? 64 : 112), goldMat);
  collar.name = 'collar';
  bottle.add(collar);

  const capGroup = new THREE.Group();
  capGroup.name = 'capGroup';
  bottle.add(capGroup);
  const C = BOTTLE.cap;
  const ringH = C.ring;
  const onyx = createOnyx();
  const cap = new THREE.Mesh(roundedPrism(C.w / 2, C.d / 2, C.r, C.h - ringH, [0.05, C.r], C.y0 + ringH, segC, segB), onyx);
  cap.name = 'cap';
  capGroup.add(cap);
  const hairMat = createGold({ rough: 0.2, aniso: 0.0 });
  const hair = new THREE.Mesh(roundedPrism(C.w / 2 + 0.004, C.d / 2 + 0.004, C.r + 0.004, ringH, 0.012, C.y0, segC, 3), hairMat);
  hair.name = 'hairline';
  capGroup.add(hair);
  // a small gold disc under the cap hides the collar's open top when the cap lifts
  const capBottom = new THREE.Mesh(new THREE.CircleGeometry(0.62, 48), goldMat);
  capBottom.rotation.x = -Math.PI / 2;
  capBottom.position.y = BOTTLE.collar.y0 + BOTTLE.collar.h - 0.002;
  bottle.add(capBottom);
  // the spray actuator under the cap (seen when the cap floats)
  const actProfile = [[0.0, 8.5], [0.18, 8.5], [0.18, 8.62], [0.4, 8.64], [0.42, 8.68], [0.42, 9.12], [0.39, 9.2], [0.3, 9.24], [0.0, 9.25]].map(([x, y]) => new THREE.Vector2(x, y));
  const actuator = new THREE.Mesh(new THREE.LatheGeometry(actProfile, q === 'low' ? 32 : 64), goldMat);
  actuator.name = 'actuator';
  bottle.add(actuator);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 20), new THREE.MeshPhysicalMaterial({ color: 0x050403, roughness: 0.35 }));
  nozzle.rotation.x = Math.PI / 2;
  nozzle.position.set(0, 9.02, 0.41);
  nozzle.name = 'nozzle';
  bottle.add(nozzle);
  const engMat = createEngravingMaterial(engTex);
  const engraving = new THREE.Mesh(new THREE.PlaneGeometry(ENG_W, ENG_H), engMat);
  engraving.name = 'engraving';
  engraving.position.set(0, C.y0 + C.h * 0.36, C.d / 2 + 0.0015);
  engraving.visible = false;
  engraving.renderOrder = 3;
  capGroup.add(engraving);

  // a warm key for crisp edges on the onyx and gold (the glass takes its light from the studio)
  const key = new THREE.DirectionalLight(0xfff1e0, 1.4);
  key.position.set(-8, 14, 10);
  scene.add(key);

  // ground: contact shadow and caustic (premultiplied: rgb adds light, alpha darkens)
  const groundMat = new THREE.ShaderMaterial({
    uniforms: S,
    vertexShader: /* glsl */`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform mat3 uRot; uniform float uScale; uniform vec3 uBottlePos;
      ${GROUND}
      varying vec3 vW;
      void main(){
        vec3 l = transpose(uRot) * (vW - uBottlePos) / uScale;
        vec2 gt = groundTerms(l.xz);
        gl_FragColor = vec4(uCaustic * gt.y, gt.x);
      }`,
    transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.renderOrder = 2;
  ground.name = 'ground';
  scene.add(ground);

  // halo: the pool of light on the backdrop (additive, only where nothing else is drawn)
  const haloGeo = new THREE.BufferGeometry();
  haloGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const haloMat = new THREE.ShaderMaterial({
    uniforms: S,
    vertexShader: /* glsl */`varying vec2 vNdc; void main(){ vNdc = position.xy; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,
    fragmentShader: /* glsl */`${HALO}\nvarying vec2 vNdc;\nvoid main(){ gl_FragColor = vec4(haloAtNdc(vNdc), 0.0); }`,
    transparent: true, depthWrite: false, depthTest: true,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  halo.frustumCulled = false;
  halo.renderOrder = 1;
  halo.name = 'halo';
  scene.add(halo);
  slicer.step('geometry', 0.55);
  await slicer.yield('geometry');

  const post = createPost(renderer, scene, camera, {
    msaa: q === 'low' ? 2 : 4,
    bloomLevels: q === 'low' ? 0 : q === 'mid' ? 4 : 5,
  });

  // ------------------------------------------------------------------ theme
  const GU = glassMat.uniforms, PU = post.uniforms;
  let themeCfg = THEMES[themeName];
  function applyTheme(name, bgHex) {
    themeCfg = THEMES[name] || THEMES.light;
    const bgD = hexToDisplay(bgHex || themeCfg.bg);
    const bgLinTarget = hexToLinear(bgHex || themeCfg.bg);
    const bgScene = inverseNeutral(bgLinTarget, PU.uExposure.value);
    S.uBg.value.set(bgScene[0], bgScene[1], bgScene[2]);
    PU.uBg.value.copy(S.uBg.value);
    PU.uBgD.value.set(bgD[0], bgD[1], bgD[2]);
    PU.uBloom.value = themeCfg.bloom;
    S.uShadowAmt.value = themeCfg.shadow;
    S.uHaloCol.value.set(themeCfg.halo[0], themeCfg.halo[1], themeCfg.halo[2]);
    GU.uScatter.value = themeCfg.scatter;
    GU.uSigMul.value = themeCfg.sigMul;
    GU.uIrr.value = themeCfg.irr;
    GU.uRefrEnv.value = themeCfg.refrEnv;
    GU.uEnvInt.value = themeCfg.envInt;
  }
  applyTheme(themeName);

  // ------------------------------------------------------------------ scent state
  const sigCur = new THREE.Vector3(), sigTmp = new THREE.Vector3();
  const caustCur = new THREE.Vector3(), caustFrom = new THREE.Vector3(), caustTo = new THREE.Vector3();
  function causticFor(id, out) {
    sigmaFromColor(SCENTS[id].hex, sigTmp, 2.4, DENSITY[id]);
    // light through ~2 cm of liquid, normalised so pale and dark scents both glow
    const r = Math.exp(-sigTmp.x * 2.0), g = Math.exp(-sigTmp.y * 2.0), b = Math.exp(-sigTmp.z * 2.0);
    const m = Math.max(r, g, b, 1e-3);
    const k = 0.35 + 0.65 * m;
    return out.set(r / m * k, g / m * k, b / m * k);
  }
  sigmaFromColor(SCENTS[scent].hex, GU.uSigB.value, 2.4, DENSITY[scent]);
  GU.uSigA.value.copy(GU.uSigB.value);
  causticFor(scent, caustCur);
  const scentAnim = { active: false, t0: 0, dur: 0.95, decal: 1 };

  // ------------------------------------------------------------------ sizing
  let cssW = 1, cssH = 1, dpr = 1, dprScale = 1, portrait = false;
  function applySize(force = false) {
    const w = Math.max(1, canvas.clientWidth || window.innerWidth || 1);
    const h = Math.max(1, canvas.clientHeight || window.innerHeight || 1);
    const r = dbg && dbg.dpr !== undefined ? dbg.dpr : pixelRatioFor(tier, w, h, dprScale);
    if (!force && w === cssW && h === cssH && r === dpr) return false;
    cssW = w; cssH = h; dpr = r;
    renderer.setDrawingBufferSize(cssW, cssH, dpr);
    const v = new THREE.Vector2();
    renderer.getDrawingBufferSize(v);
    post.setSize(v.x, v.y);
    portrait = cssW / cssH < 0.85;
    camera.aspect = cssW / cssH;
    S.uAspect.value = camera.aspect;
    return true;
  }
  applySize(true);

  // ------------------------------------------------------------------ state
  const prog = { x: 0, v: 0 };
  let progTarget = 0;
  const sizeS = { x: 1, v: 0, target: 1 };
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  const shot = {};
  let time = 0;           // decorative clock (frozen with reducedMotion)
  let clock = 0;          // event clock
  const drag = { active: false, id: -1, x0: 0, y0: 0, lx: 0, ly: 0, lt: 0, axis: null, yaw: 0, yawV: 0, elev: 0, elevV: 0, last: -1e9 };
  const intro = { state: reducedMotion ? 'done' : 'pending', t0: 0, dur: 1.85, resolve: null, promise: null, armedAt: 0 };
  let fade = reducedMotion ? 1 : 0;
  let dirty = true;
  const vTmp = new THREE.Vector3(), vL = new THREE.Vector3(), m4 = new THREE.Matrix4();
  const envRotM = new THREE.Matrix4();
  // smoothed visual channels (each springs to its target for a jitter-free feel)
  const ch = {};
  for (const k of KEYS) ch[k] = { x: 0, v: 0 };
  let channelsInit = false;
  // page nudges (setFrame): offsets in viewport fractions and a size multiplier, eased
  const frm = { x: { x: 0, v: 0 }, y: { x: 0, v: 0 }, s: { x: 1, v: 0 } };
  const frmT = { x: 0, y: 0, s: 1 };

  function update(dt) {
    clock += dt;
    if (!reducedMotion) time += dt;
    // progress spring (critically damped, ~1.1 s settle)
    springStep(prog, progTarget, 3.6, dt);
    // size: soft underdamped spring (a whisper of overshoot)
    {
      const k = 70, c = 2 * 0.72 * Math.sqrt(70);   // damping ratio 0.72: ~3 % overshoot
      const n = Math.max(1, Math.ceil(dt / 0.008));
      const h = dt / n;
      for (let i = 0; i < n; i++) {
        const acc = -k * (sizeS.x - sizeS.target) - c * sizeS.v;
        sizeS.v += acc * h; sizeS.x += sizeS.v * h;
      }
    }
    const kp = 1 - Math.exp(-dt * 2.5);
    ptr.x += (ptr.tx - ptr.x) * kp;
    ptr.y += (ptr.ty - ptr.y) * kp;

    // ---- shot
    if (pdp) Object.assign(shot, PDP_SHOT);
    else sampleKeys(portrait ? HERO_PORT : HERO_LAND, prog.x, shot);
    if (!channelsInit || reducedMotion) { for (const k of KEYS) { ch[k].x = shot[k]; ch[k].v = 0; } channelsInit = true; }
    else for (const k of KEYS) springStep(ch[k], shot[k], 5.0, dt);
    const s = {};
    for (const k of KEYS) s[k] = ch[k].x;
    if (reducedMotion) { frm.x.x = frmT.x; frm.y.x = frmT.y; frm.s.x = frmT.s; }
    else { springStep(frm.x, frmT.x, 4.0, dt); springStep(frm.y, frmT.y, 4.0, dt); springStep(frm.s, frmT.s, 4.0, dt); }
    s.sx += frm.x.x * 2; s.sy -= frm.y.x * 2; s.frameH /= Math.max(0.2, frm.s.x); s.minW /= Math.max(0.2, frm.s.x);

    // ---- intro
    let introYaw = 0, introDolly = 1, sweepTheta = 0, sweepInt = 0, envRot = 0;
    if (intro.state === 'pending') {
      fade = 0;
      if (intro.armedAt && wall() - intro.armedAt > 2.6) startIntro();
    }
    if (intro.state === 'playing') {
      const u = clamp((wall() - intro.t0) / intro.dur, 0, 1);
      fade = easeOutCubic(clamp(u / 0.42, 0, 1));
      const e = easeInOutCubic(u);
      sweepTheta = lerp(-62, 58, e) * DEG;
      sweepInt = Math.sin(Math.PI * clamp(u * 1.05, 0, 1)) * 7.0;
      introYaw = lerp(-16, 0, easeOutCubic(u)) * DEG;
      introDolly = lerp(1.07, 1.0, easeOutCubic(u));
      envRot = lerp(-0.5, 0, easeOutCubic(u));
      if (u >= 1) { intro.state = 'done'; fade = 1; if (intro.resolve) { intro.resolve(); intro.resolve = null; } }
    } else if (intro.state === 'done') {
      fade = 1;
    }
    // hero sweep around t ~ 0.35
    if (!pdp) {
      const ph = smoothstep(0.14, 0.56, prog.x);
      if (ph > 0 && ph < 1) {
        const hi = Math.sin(Math.PI * ph) * 8.0;
        if (hi > sweepInt) { sweepInt = hi; sweepTheta = lerp(-58, 58, ph) * DEG; }
        envRot += Math.sin(Math.PI * ph) * 0.35 * (ph - 0.5) * 2;
      }
    }

    // ---- pdp orbit
    if (pdp) {
      if (!drag.active) {
        drag.yaw += drag.yawV * dt;
        drag.elev += drag.elevV * dt;
        const damp = Math.exp(-dt * 3.2);
        drag.yawV *= damp; drag.elevV *= damp;
        if (clock - drag.last > 3.0) {
          const home = Math.round(drag.yaw / (2 * Math.PI)) * 2 * Math.PI;
          const st = { x: drag.yaw, v: drag.yawV };
          springStep(st, home, 1.9, dt);
          drag.yaw = st.x; drag.yawV = st.v;
          const se = { x: drag.elev, v: drag.elevV };
          springStep(se, 0, 1.9, dt);
          drag.elev = se.x; drag.elevV = se.v;
        }
      }
      drag.elev = clamp(drag.elev, -8 * DEG, 24 * DEG);
    }

    // ---- bottle
    const breathe = reducedMotion ? 0 : s.breathe;
    const yaw = s.yaw * DEG + introYaw + (pdp ? drag.yaw : 0) + breathe * (Math.sin(time * 0.37) * 3.2 + Math.sin(time * 0.21 + 1.3) * 1.6) * DEG;
    const scale = s.scale * sizeS.x;
    bottle.rotation.set(0, yaw, 0);
    bottle.scale.setScalar(scale);
    bottle.position.set(0, 0, 0);
    const lift = Math.max(0, s.cap);
    const bob = reducedMotion ? 0 : Math.sin(time * 1.15) * 0.07 * smoothstep(0.3, 1.2, lift);
    capGroup.position.y = lift + bob;
    capGroup.rotation.set(0, s.capYaw * DEG + (reducedMotion ? 0 : Math.sin(time * 0.6) * 1.5 * DEG * smoothstep(0.3, 1.2, lift)), lift * 0.012);
    bottle.updateMatrixWorld(true);

    // ---- camera: orbit around the look-at point, lens shift places the bottle in the frame
    const hs = s.scale;   // framing follows the hero scale; the 100 ml size grows in frame
    const fov = camera.fov * DEG;
    let d = (s.frameH * hs * 0.5) / Math.tan(fov / 2);
    if (s.minW > 0) {
      const hf = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);
      d = Math.max(d, (s.minW * hs * 0.5) / Math.tan(hf / 2));
    }
    d *= introDolly;
    const camYaw = (finePointer && !reducedMotion ? -ptr.x * 3.2 : 0) * DEG;
    const el = (s.elev + (finePointer && !reducedMotion ? ptr.y * 2.0 : 0)) * DEG + (pdp ? drag.elev : 0);
    vL.set(0, s.lookY * hs, 0);
    camera.position.set(vL.x + Math.sin(camYaw) * Math.cos(el) * d, vL.y + Math.sin(el) * d, vL.z + Math.cos(camYaw) * Math.cos(el) * d);
    camera.up.set(0, 1, 0);
    camera.lookAt(vL);
    camera.near = Math.max(0.5, d * 0.25); camera.far = d + 120;
    camera.updateProjectionMatrix();
    camera.projectionMatrix.elements[8] = -s.sx;
    camera.projectionMatrix.elements[9] = -s.sy;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    camera.updateMatrixWorld(true);

    // ---- shared uniforms
    S.uViewProj.value.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    S.uRot.value.setFromMatrix4(m4.makeRotationY(yaw));
    S.uScale.value = scale;
    S.uBottlePos.value.copy(bottle.position);
    GU.uScale.value = scale;
    vTmp.copy(camera.position);
    bottle.worldToLocal(vTmp);
    GU.uCamLocal.value.copy(vTmp);
    GU.uTime.value = time + clock * (reducedMotion ? 1 : 0);
    // halo behind the bottle
    vTmp.set(0, 5.4 * scale, 0).applyMatrix4(S.uViewProj.value);
    S.uHaloPos.value.set(vTmp.x, vTmp.y + 0.02, Math.max(0.15, (12.1 * scale / (s.frameH * hs)) * 0.72));
    // key shadow direction (world) into bottle-local units
    const ox = 3.1, oz = 1.3, cy = Math.cos(yaw), sy = Math.sin(yaw);
    S.uShadowOff.value.set(ox * cy - oz * sy, ox * sy + oz * cy);
    // sweep and studio rotation
    GU.uSweepInt.value = sweepInt;
    GU.uSweepN.value.set(Math.cos(sweepTheta), 0, -Math.sin(sweepTheta));
    GU.uSweepF.value.set(Math.sin(sweepTheta), 0, Math.cos(sweepTheta));
    const er = envRot + (reducedMotion ? 0 : Math.sin(time * 0.11) * 0.06);
    scene.environmentRotation.set(0, er, 0);
    GU.uEnvRot.value.setFromMatrix4(envRotM.makeRotationY(er));
    scene.environmentIntensity = 1 + sweepInt * 0.05;

    // ---- scent change: the new colour rises through the liquid with a swirl
    if (scentAnim.active) {
      const u = clamp((wall() - scentAnim.t0) / scentAnim.dur, 0, 1);
      const e = reducedMotion ? 1 : easeInOutCubic(u);
      GU.uFront.value = lerp(0.4, 7.6, e);
      GU.uSwirl.value = reducedMotion ? 0 : Math.sin(Math.PI * u);
      caustCur.lerpVectors(caustFrom, caustTo, e);
      const ud = clamp((wall() - scentAnim.t0) / 0.6, 0, 1);
      const dm = reducedMotion ? 1 : smoothstep(0, 1, ud);
      GU.uDecalMix.value = scentAnim.decal === 1 ? dm : 1 - dm;
      if (u >= 1 && ud >= 1) {
        scentAnim.active = false;
        GU.uSigA.value.copy(GU.uSigB.value);
        GU.uSwirl.value = 0; GU.uFront.value = 20;
      }
    }
    S.uCaustic.value.copy(caustCur).multiplyScalar(themeCfg.caustic);
    PU.uFade.value = fade;
  }

  function startIntro() {
    if (intro.state !== 'pending') return;
    intro.state = 'playing';
    intro.t0 = wall();
  }

  function busy() {
    if (dirty || intro.state !== 'done' || scentAnim.active || drag.active) return true;
    if (Math.abs(prog.x - progTarget) > 1e-4 || Math.abs(prog.v) > 1e-4) return true;
    if (Math.abs(sizeS.x - sizeS.target) > 1e-4 || Math.abs(sizeS.v) > 1e-4) return true;
    if (Math.abs(ptr.x - ptr.tx) > 1e-4 || Math.abs(ptr.y - ptr.ty) > 1e-4) return true;
    for (const k of KEYS) if (Math.abs(ch[k].v) > 1e-4) return true;
    for (const k of ['x', 'y', 's']) if (Math.abs(frm[k].x - frmT[k]) > 1e-4 || Math.abs(frm[k].v) > 1e-4) return true;
    if (pdp && (Math.abs(drag.yawV) > 1e-4 || Math.abs(drag.elevV) > 1e-4 || Math.abs(drag.elev) > 1e-4)) return true;
    if (pdp && Math.abs(drag.yaw - Math.round(drag.yaw / (2 * Math.PI)) * 2 * Math.PI) > 1e-4) return true;
    if (!reducedMotion && !pdp) return 2;      // only the slow hero breathing: 30 fps is enough
    return false;
  }

  function render() {
    post.render();
    dirty = false;
  }

  // ------------------------------------------------------------------ compile
  slicer.step('shaders', 0.7);
  update(0);
  renderer.setRenderTarget(post.sceneRT);
  await renderer.compileAsync(scene, camera);
  renderer.setRenderTarget(null);
  await slicer.yield('compile');
  await post.compile();
  for (const t of [printA, printB, engTex]) renderer.initTexture(t);
  await slicer.yield('upload');
  slicer.step('ready', 1);

  // ------------------------------------------------------------------ pdp input
  const listeners = [];
  const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); listeners.push([el, ev, fn, opt]); };
  if (pdp) {
    canvas.style.touchAction = 'pan-y';
    canvas.style.cursor = 'grab';
    const YAW_PER_PX = () => (Math.PI * 1.15) / Math.max(320, cssW * 0.6);
    on(canvas, 'pointerdown', (e) => {
      if (drag.active || (e.pointerType === 'mouse' && e.button !== 0)) return;
      drag.active = true; drag.id = e.pointerId; drag.x0 = drag.lx = e.clientX; drag.y0 = drag.ly = e.clientY;
      drag.lt = performance.now(); drag.axis = e.pointerType === 'mouse' ? 'both' : null;
      drag.yawV = 0; drag.elevV = 0; drag.last = clock;
      if (drag.axis) { try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } canvas.style.cursor = 'grabbing'; }
      dirty = true;
    });
    on(canvas, 'pointermove', (e) => {
      if (!drag.active || e.pointerId !== drag.id) return;
      const now = performance.now();
      if (!drag.axis) {
        const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
        if (Math.hypot(dx, dy) < 6) return;
        if (Math.abs(dx) > Math.abs(dy) * 1.1) { drag.axis = 'x'; try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } }
        else { drag.active = false; return; }    // vertical: the page scrolls
      }
      const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
      const dts = Math.max(1, now - drag.lt) / 1000;
      const k = YAW_PER_PX();
      drag.yaw += dx * k;
      const vy = (dx * k) / dts;
      drag.yawV = lerp(drag.yawV, vy, 0.5);
      if (drag.axis === 'both') {
        drag.elev = clamp(drag.elev + dy * k * 0.6, -8 * DEG, 24 * DEG);
        drag.elevV = lerp(drag.elevV, (dy * k * 0.6) / dts, 0.5);
      }
      drag.lx = e.clientX; drag.ly = e.clientY; drag.lt = now; drag.last = clock;
      dirty = true;
    });
    const end = (e) => {
      if (!drag.active || e.pointerId !== drag.id) return;
      drag.active = false; drag.last = clock;
      if (performance.now() - drag.lt > 90) { drag.yawV = 0; drag.elevV = 0; }   // held still before release
      drag.yawV = clamp(drag.yawV, -9, 9);
      drag.elevV = clamp(drag.elevV, -3, 3);
      canvas.style.cursor = 'grab';
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    };
    on(canvas, 'pointerup', end);
    on(canvas, 'pointercancel', end);
    on(canvas, 'lostpointercapture', end);
  }

  // fonts that arrive later: redraw the print and the engraving
  let engravingText = '';
  const redrawText = () => {
    const name = SCENTS[scent].name;
    printA.userData.draw(name, size);
    printB.userData.draw(name, size);
    if (engravingText) engTex.userData.draw(engravingText);
    dirty = true;
  };
  if (document.fonts && document.fonts.addEventListener) on(document.fonts, 'loadingdone', redrawText);

  // ------------------------------------------------------------------ loop
  let running = false, raf = 0, last = 0, disposed = false, lost = false, frames = 0;
  let firstResolve;
  const firstFrame = new Promise((r) => { firstResolve = r; });
  const governor = (dbg && dbg.governor === false) ? null : new Governor(tier, (scale, postOn) => {
    dprScale = scale;
    post.setEnabled(postOn);
    applySize();
    dirty = true;
  });
  post.setEnabled(governor ? governor.post : tier.post !== false);

  let idleAcc = 0;
  function tick(now) {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    if (last && now - last < 10) return;          // 120 Hz panels run at 60
    const dtMs = last ? now - last : 16.7;
    last = now;
    const dt = Math.min(0.1, Math.max(0, dtMs / 1000));
    const b = busy();
    if (!b) { clock += dt; idleAcc = 0; return; }
    let step = dt + idleAcc / 1000;
    if (b === 2) {
      // breathing alone: render at about 30 fps to free the GPU and keep scrolling smooth
      if (idleAcc + dtMs < 30) { idleAcc += dtMs; return; }
    }
    idleAcc = 0;
    step = Math.min(0.1, step);
    if (governor && b !== 2) governor.sample(dtMs, now);
    update(step);
    render();
    frames++;
    if (frames === 1) {
      if (intro.state === 'pending') intro.armedAt = wall();
      requestAnimationFrame(() => firstResolve());
    }
  }

  // ------------------------------------------------------------------ context loss
  const onLost = (e) => { e.preventDefault(); lost = true; running = false; cancelAnimationFrame(raf); };
  const onRestored = () => {
    if (disposed) return;
    lost = false;
    envSet.dispose();
    envSet = buildEnvironment(renderer, { mood: themeName, cubeSize: q === 'high' ? 512 : 256, pmremSize: 256 });
    scene.environment = envSet.pmrem;
    GU.uEnv.value = envSet.cube;
    for (const t of [printA, printB, engTex]) t.needsUpdate = true;
    applySize(true);
    dirty = true;
    api.start();
  };
  on(canvas, 'webglcontextlost', onLost, false);
  on(canvas, 'webglcontextrestored', onRestored, false);

  // ------------------------------------------------------------------ api
  const api = {
    tier: tier.name,
    mode: pdp ? 'pdp' : 'hero',
    firstFrame,
    setProgress(t) {
      const v = +t;
      if (Number.isFinite(v)) { progTarget = clamp(v, 0, 1); if (reducedMotion) { prog.x = progTarget; prog.v = 0; } dirty = true; }
    },
    setScent(id) {
      if (!SCENTS[id] || id === scent) return;
      scent = id;
      // start from whatever is on screen now
      if (scentAnim.active) GU.uSigA.value.copy(GU.uSigB.value);
      caustFrom.copy(caustCur);
      causticFor(id, caustTo);
      sigmaFromColor(SCENTS[id].hex, GU.uSigB.value, 2.4, DENSITY[id]);
      // the hidden print gets the new name, then crossfades in
      const back = printFront === printB ? printA : printB;
      back.userData.draw(SCENTS[id].name, size);
      printFront = back;
      scentAnim.decal = back === printB ? 1 : 0;
      scentAnim.active = true;
      // not drawing yet (before the first frame, or stopped): no one would see the swirl
      scentAnim.t0 = running && frames > 0 && !reducedMotion ? wall() : -1e9;
      dirty = true;
      if (!running && frames > 0 && !lost && !disposed) { update(0); render(); }
    },
    setSize(ml) {
      const v = +ml === 100 ? 100 : 50;
      if (v === size) return;
      size = v;
      sizeS.target = v === 100 ? 1.18 : 1.0;
      if (reducedMotion) { sizeS.x = sizeS.target; sizeS.v = 0; }
      printA.userData.draw(SCENTS[scent].name, size);
      printB.userData.draw(SCENTS[scent].name, size);
      dirty = true;
    },
    setEngraving(text) {
      const t = String(text == null ? '' : text).replace(/[\u0000-\u001f]/g, '').slice(0, 12);
      if (t === engravingText) return;
      engravingText = t;
      engraving.visible = engTex.userData.draw(t);
      dirty = true;
    },
    /* Nudge the composition on top of the choreography (eased): x, y in viewport fractions
       (x > 0 moves the bottle right, y > 0 moves it down), scale multiplies its size on screen.
       setFrame({}) or setFrame() resets to { x: 0, y: 0, scale: 1 }. */
    setFrame({ x = 0, y = 0, scale = 1 } = {}) {
      frmT.x = clamp(+x || 0, -0.5, 0.5);
      frmT.y = clamp(+y || 0, -0.5, 0.5);
      frmT.s = clamp(+scale || 1, 0.3, 2);
      dirty = true;
    },
    setPointer(x, y) {
      if (!finePointer || reducedMotion) return;
      ptr.tx = clamp(+x || 0, -1, 1);
      ptr.ty = clamp(+y || 0, -1, 1);
    },
    setTheme(name, bgHex) {
      const n = THEMES[name] ? name : 'light';
      if (n !== themeName) {
        themeName = n;
        envSet.dispose();
        envSet = buildEnvironment(renderer, { mood: n, cubeSize: q === 'high' ? 512 : 256, pmremSize: 256 });
        scene.environment = envSet.pmrem;
        GU.uEnv.value = envSet.cube;
      }
      applyTheme(n, bgHex);
      dirty = true;
      if (!running && frames > 0 && !lost && !disposed) { update(0); render(); }
    },
    resize() {
      if (disposed || lost || !applySize()) return;
      dirty = true;
      last = 0;
      if (!running && frames > 0) { update(0); render(); }
    },
    start() {
      if (running || disposed || lost) return;
      running = true;
      last = 0;
      dirty = true;
      raf = requestAnimationFrame(tick);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    },
    intro() {
      if (intro.state === 'done') return Promise.resolve();
      if (!intro.promise) intro.promise = new Promise((r) => { intro.resolve = r; });
      startIntro();
      dirty = true;
      return intro.promise;
    },
    info() {
      const mem = renderer.info.memory;
      return {
        tier: tier.name, mode: api.mode, dpr: Math.round(dpr * 100) / 100, dprScale: Math.round(dprScale * 100) / 100,
        css: [cssW, cssH], portrait, msaa: post.samples, bloom: post.bloomOn,
        programs: renderer.info.programs ? renderer.info.programs.length : 0,
        textures: mem.textures, geometries: mem.geometries, frames,
        progress: Math.round(prog.x * 1000) / 1000, size, scent, theme: themeName, intro: intro.state,
        longestSlice: Math.round(slicer.longest),
      };
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      api.stop();
      for (const [el, ev, fn, opt] of listeners) el.removeEventListener(ev, fn, opt);
      listeners.length = 0;
      if (pdp) { canvas.style.touchAction = ''; canvas.style.cursor = ''; }
      const mats = new Set();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => mats.add(m));
      });
      mats.forEach((m) => m.dispose());
      for (const t of [printA, printB, engTex]) {
        t.dispose();
        if (t.image && t.image.getContext) t.image.width = t.image.height = 0;
      }
      envSet.dispose();
      post.dispose();
      renderer.renderLists.dispose();
      renderer.dispose();
      if (intro.resolve) { intro.resolve(); intro.resolve = null; }
    },
  };

  if (dbg) {
    api._debug = {
      scene, camera, renderer, post, glassMat, S,
      step(dt = 1 / 60, n = 1) { for (let i = 0; i < n; i++) update(dt); render(); frames++; },
      settle() {
        prog.x = progTarget; prog.v = 0; sizeS.x = sizeS.target; sizeS.v = 0;
        if (intro.state !== 'done') { intro.state = 'done'; fade = 1; }
        channelsInit = false;
        if (scentAnim.active) { scentAnim.t0 = -1e9; }
        for (const k of ['x', 'y', 's']) { frm[k].x = frmT[k]; frm[k].v = 0; }
        update(0); update(0.001); render(); frames++;
      },
      setTime(t) { time = t; },
      scentAt(u, from) { if (from && SCENTS[from]) { sigmaFromColor(SCENTS[from].hex, GU.uSigA.value, 2.4, DENSITY[from]); causticFor(from, caustFrom); } scentAnim.active = true; scentAnim.t0 = wall() - u * scentAnim.dur; update(0); render(); frames++; },
      introAt(u) { intro.state = 'playing'; intro.t0 = wall() - u * intro.dur; update(0); render(); frames++; },
      skipIntro() { intro.state = 'done'; fade = 1; },
    };
  }
  return api;
}
