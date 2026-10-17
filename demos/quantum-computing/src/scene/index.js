/* Nadir: the production 3D scene. One entry point, createScene(), see the contract below.
   Builds the machine in time slices (no long main-thread tasks), uploads textures and
   compiles every program before resolving, then renders on demand between start()/stop().

   createScene({ canvas, reducedMotion, onProgress }) -> Promise<{
     tier, setChapter(c), setPointer(x, y), resize(), start(), stop(), intro(), firstFrame,
     project(name, out), onFrame(cb), info(), dispose()
   }>
   Chapters (float 0..7): 0 hero 300 K, 1 4 K, 2 100 mK, 3 10 mK, 4 processor, 5 specs,
   6 roadmap, 7 access. */
import * as THREE from 'three';
import { detectTier, Governor, pixelRatioFor } from '../stage/quality.js';
import { presetFor } from './presets.js';
import { buildStudioEnvironment } from './env.js';
import { createUniforms, createMaterials, PULSE_ATT } from './materials.js';
import { buildMachine, STAGES } from './machine.js';
import { buildChip } from './chip.js';
import { createEffects } from './effects.js';
import { createRig, frame, isPortraitLayout } from './rig.js';
import { createPost } from './post.js';
import { createSlicer, springStep, clamp, smoothstep, lerp, easeInOutCubic, easeOutCubic } from './util.js';

const DEG = Math.PI / 180;
const CHAPTERS = 7;
const SPRING = 4.2;                     // chapter smoothing: critically damped, ~1 s settle
const FROST_W = [0, 0.3, 1, 1, 1, 1];   // frost weight per plate (300 K .. MXC)
const FROST_ON = 0.72, FROST_OFF = 0.45, FROST_TAU = 1.1;
const PULSE_S0 = 2.12, PULSE_S1 = 5.06, PULSE_TRAVEL = 3.4, PULSE_PERIOD = 5.0, PULSE_AMP = 24.0;
const INTRO_DIM = 0.3, INTRO_MS = 2100, INTRO_AUTO_MS = 2600;
// plate anchors: rim point at the camera's azimuth plus an offset (radians, + = screen right)
const PLATE_ANCHORS = {
  plate300K: [0, -0.35], plate50K: [1, -0.35], plate4K: [2, -0.3], still: [3, -0.35], coldplate: [4, -0.4], mxc: [5, -0.62],
};

export async function createScene({ canvas, reducedMotion = false, onProgress, debug = null } = {}) {
  if (!canvas) throw new Error('createScene: a canvas is required');
  const dbg = debug || {};
  const T0 = performance.now();

  // ---------------------------------------------------------------- long-task watch
  // entries arrive asynchronously, so keep listening after the build and count only the
  // tasks that started before it finished
  let longTask = 0, buildEnd = Infinity;
  let observer = null;
  try {
    if (typeof PerformanceObserver === 'function' && (PerformanceObserver.supportedEntryTypes || []).includes('longtask')) {
      observer = new PerformanceObserver((list) => {
        for (const e of list.getEntries()) if (e.startTime < buildEnd && e.duration > longTask) longTask = e.duration;
      });
      observer.observe({ type: 'longtask' });
    }
  } catch (e) { observer = null; }
  const slicer = createSlicer({ budget: 10, onProgress });

  // ---------------------------------------------------------------- renderer + tier
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: false, alpha: false, stencil: false, depth: false,   // the scene renders to its own target
    powerPreference: 'high-performance', preserveDrawingBuffer: !!dbg.preserve,
  });
  if (!renderer.extensions.has('EXT_color_buffer_float') && !renderer.extensions.has('EXT_color_buffer_half_float')) {
    renderer.dispose();
    throw new Error('createScene: half-float render targets are not supported');
  }
  // the shader error checks block on each link; keep them for tests and stills only
  renderer.debug.checkShaderErrors = Object.keys(dbg).length > 0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;     // ACES + sRGB happen in the final pass
  renderer.info.autoReset = false;
  renderer.setClearColor(0x020306, 1);
  const tier = detectTier(renderer.getContext());
  const presetName = dbg.quality === 'still' ? 'still' : tier.name;
  const preset = presetFor(presetName, dbg.preset);
  if (dbg.grain !== undefined) preset.grain = dbg.grain;
  if (presetName === 'low') preset.iridescence = 0;
  if (tier.dofTaps !== undefined && presetName !== 'still') preset.dofTaps = Math.min(preset.dofTaps, tier.dofTaps);
  const finePointer = typeof matchMedia === 'function' && matchMedia('(hover: hover) and (pointer: fine)').matches;
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  // phone and tablet GPUs are tilers: resolving 4x half-float MSAA is mostly memory traffic and
  // heat, so touch screens use FXAA instead
  const msaa = presetName === 'still' ? 4 : coarse ? 0 : Math.min(preset.msaa, tier.msaa);
  slicer.step('renderer', 0.02);
  await slicer.yield('renderer');

  // ---------------------------------------------------------------- scene basics
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(new THREE.Color().setRGB(0.0045, 0.0068, 0.012), 0.02);
  const camera = new THREE.PerspectiveCamera(30, 1.6, 0.05, 80);
  const U = createUniforms();
  for (let i = 0; i < 6; i++) U.uPlates.value[i].set(STAGES[i].y, STAGES[i].R, STAGES[i].t, 0);
  U.uSparkle.value = reducedMotion ? 0 : 1;
  const mats = createMaterials(U, preset);

  let envRT = buildStudioEnvironment(renderer, { size: preset.env });
  scene.environment = envRT.texture;
  slicer.step('environment', 0.05);
  await slicer.yield('environment');

  // ---------------------------------------------------------------- build
  const machine = await buildMachine({ preset, U, mats, slicer });
  const chip = await buildChip({ preset, U, machine, slicer, mats });
  await machine.finish();
  scene.add(machine.root);
  scene.add(chip.root);
  const fx = createEffects({ preset, U, machine });
  scene.add(fx.group);

  // lights: one cool key for crisp speculars and a cold rim; everything else is image based
  const key = new THREE.DirectionalLight(0xe4edff, 1.6);
  const KEY_POS = new THREE.Vector3(-6, 9, 7);
  key.position.copy(KEY_POS);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x86b4ff, 1.0);
  rim.position.set(7, 2, -8);
  scene.add(rim);

  const rig = createRig(chip, dbg.key);
  const post = createPost(renderer, scene, camera, { preset, msaa });
  await slicer.maybeYield('post');

  // ---------------------------------------------------------------- sizing
  let cssW = 1, cssH = 1, bufW = 1, bufH = 1, dpr = 1, dprScale = 1, portrait = false;
  const sizeV = new THREE.Vector2();
  // Returns false when nothing changed: reshaping the canvas clears it and reallocates every target.
  function applySize(force = false) {
    const w = Math.max(1, canvas.clientWidth || window.innerWidth || 1);
    const h = Math.max(1, canvas.clientHeight || window.innerHeight || 1);
    const r = dbg.dpr !== undefined ? dbg.dpr : pixelRatioFor(tier, w, h, dprScale);
    if (!force && w === cssW && h === cssH && r === dpr) return false;
    cssW = w; cssH = h; dpr = r;
    renderer.setDrawingBufferSize(cssW, cssH, dpr);
    renderer.getDrawingBufferSize(sizeV);
    bufW = sizeV.x; bufH = sizeV.y;
    post.setSize(bufW, bufH);
    portrait = dbg.portrait !== undefined ? !!dbg.portrait : isPortraitLayout(cssW, cssH);
    fx.bgMat.uniforms.uRes.value.set(bufW, bufH);
    return true;
  }
  applySize(true);

  // ---------------------------------------------------------------- state
  const chap = { x: 0, v: 0 };
  let target = 0;
  let time = dbg.time !== undefined ? dbg.time : 0;   // event clock
  let drift = time;                                     // decorative clock (frozen when reducedMotion)
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  let frostOn = false, frost = 0;
  const shot = { pos: [0, 0, 0], tgt: [0, 0, 0], fov: 30, shift: [0, 0], roll: 0, drift: 0 };
  const look = {};
  const vPos = new THREE.Vector3(), vTgt = new THREE.Vector3(), vTmp = new THREE.Vector3();
  let jitterX = 0, jitterY = 0;
  let sceneCalls = 0, sceneTris = 0, frameCalls = 0, frameTris = 0;
  // intro: the first frame matches the dimmed poster; intro() lifts it with a light sweep
  const intro = { state: 'done', t0: 0, dur: INTRO_MS, from: 1, sweep: 0, resolve: null, promise: null, armedAt: 0 };
  let fade = 1, introEnv = 0, introKey = 1;

  if (dbg.chapter !== undefined) { target = chap.x = clamp(+dbg.chapter, 0, CHAPTERS); }

  // ---------------------------------------------------------------- per-frame update
  const pathS = machine.pulse.pathS, pathP = machine.pulse.pathP;
  function samplePath(s, out) {
    const n = pathS.length;
    if (s <= pathS[0]) return out.set(pathP[0], pathP[1], pathP[2]);
    if (s >= pathS[n - 1]) return out.set(pathP[n * 3 - 3], pathP[n * 3 - 2], pathP[n * 3 - 1]);
    let lo = 0, hi = n - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (pathS[m] <= s) lo = m; else hi = m; }
    const t = (s - pathS[lo]) / Math.max(1e-6, pathS[hi] - pathS[lo]);
    return out.set(
      lerp(pathP[lo * 3], pathP[hi * 3], t),
      lerp(pathP[lo * 3 + 1], pathP[hi * 3 + 1], t),
      lerp(pathP[lo * 3 + 2], pathP[hi * 3 + 2], t));
  }
  const gainAt = (s) => (s > 2 ? 0.58 : 1) * (s > 3 ? 0.58 : 1) * (s > 4 ? 0.58 : 1) * (s > 5 ? 0.58 : 1); // matches pulseGain()

  function updateIntro(now) {
    if (intro.state === 'dim') {
      fade = INTRO_DIM; introEnv = 0; introKey = 1;
      // never stay dim: fade up on our own if intro() is not called, or the reader moves on
      if (intro.armedAt && (now - intro.armedAt > INTRO_AUTO_MS || chap.x > 0.35)) startIntro(now, false);
      return;
    }
    if (intro.state === 'playing') {
      const t = clamp((now - intro.t0) / intro.dur, 0, 1);
      const e = easeInOutCubic(clamp(t / 0.8, 0, 1));
      fade = lerp(intro.from, 1, e);
      if (intro.sweep) {
        // the studio turns past the gold: highlights travel across rims, rods and cables
        introEnv = lerp(-1.15, 0, easeOutCubic(t));
        introKey = 1 + 1.4 * Math.sin(Math.PI * t) * (1 - t * 0.4);
        const a = lerp(-1.4, 0, easeOutCubic(t));
        key.position.set(KEY_POS.x * Math.cos(a) + KEY_POS.z * Math.sin(a), KEY_POS.y, -KEY_POS.x * Math.sin(a) + KEY_POS.z * Math.cos(a));
      }
      if (t >= 1) {
        intro.state = 'done'; fade = 1; introEnv = 0; introKey = 1; key.position.copy(KEY_POS);
        if (intro.resolve) { intro.resolve(); intro.resolve = null; }
      }
      return;
    }
    fade = 1; introEnv = 0; introKey = 1;
  }
  function startIntro(now, sweep) {
    if (intro.state !== 'dim') return;
    intro.state = 'playing';
    intro.t0 = now;
    intro.from = fade;
    intro.sweep = sweep && !reducedMotion;
    intro.dur = intro.sweep ? INTRO_MS : 650;
  }

  function update(dt, now) {
    time += dt;
    if (!reducedMotion) drift += dt;
    // chapter: critically damped follow of the director's value
    if (dbg.jump) { chap.x = target; chap.v = 0; } else springStep(chap, target, SPRING, dt);
    const c = clamp(chap.x, 0, CHAPTERS);
    // pointer parallax (fine pointers only)
    const kp = 1 - Math.exp(-dt * 3.0);
    ptr.x += (ptr.tx - ptr.x) * kp;
    ptr.y += (ptr.ty - ptr.y) * kp;

    updateIntro(now);
    rig.look(c, look);
    rig.sample(c, portrait, shot);

    // ---- camera
    vPos.fromArray(shot.pos);
    vTgt.fromArray(shot.tgt);
    if (shot.drift > 0.001 && !reducedMotion) {
      // chapter 5: a slow orbit and tilt around the package
      const ang = shot.drift * 0.17 * Math.sin(drift * 0.075);
      const lift = shot.drift * 0.07 * Math.sin(drift * 0.053 + 1.3);
      const cx = chip.center.x, cz = chip.center.z;
      const dx = vPos.x - cx, dz = vPos.z - cz;
      const cs = Math.cos(ang), sn = Math.sin(ang);
      vPos.set(cx + dx * cs + dz * sn, vPos.y + lift, cz - dx * sn + dz * cs);
    }
    const dist = vPos.distanceTo(vTgt);
    if (!reducedMotion) {
      const b = 0.004 * dist;
      vPos.x += Math.sin(drift * 0.23) * b;
      vPos.y += Math.sin(drift * 0.31 + 1.0) * b * 0.6;
      vPos.z += Math.cos(drift * 0.19) * b;
      if (ptr.x !== 0 || ptr.y !== 0) {
        const yaw = -ptr.x * 0.03, lift = ptr.y * 0.018 * dist;
        vTmp.subVectors(vPos, vTgt);
        const cs = Math.cos(yaw), sn = Math.sin(yaw);
        vPos.set(vTgt.x + vTmp.x * cs + vTmp.z * sn, vPos.y + lift, vTgt.z - vTmp.x * sn + vTmp.z * cs);
      }
    }
    camera.position.copy(vPos);
    camera.up.set(0, 1, 0);
    camera.lookAt(vTgt);
    camera.rotateZ(shot.roll);
    frame(camera, shot, bufW, bufH, portrait, jitterX, jitterY);
    camera.updateMatrixWorld();

    // ---- grade, atmosphere, lens
    scene.environmentRotation.y = look.envRot + introEnv;
    scene.environmentIntensity = look.envInt;
    scene.fog.density = look.fog;
    key.intensity = 1.6 * look.key * introKey;
    const PU = post.uniforms;
    PU.toneMappingExposure.value = look.exposure;
    PU.uCold.value = look.cold;
    PU.uBloom.value = look.bloom * 0.22;
    PU.uVignette.value = look.vignette;
    PU.uSat.value = look.sat;
    PU.uBottom.value = portrait ? 0 : look.bottom;
    PU.uFade.value = fade;
    PU.uTime.value = time;
    PU.uNear.value = camera.near; PU.uFar.value = camera.far;
    PU.uFocus.value = Math.max(0.2, dist - look.focusPull);
    PU.uAperture.value = look.dof * (bufH / 1000);
    PU.uMaxCoc.value = 16 * (bufH / 1000);
    const bgU = fx.bgMat.uniforms;
    bgU.uCold.value = look.cold;
    bgU.uHaloAmt.value = look.halo;
    bgU.uBeam.value = look.beam;
    vTmp.copy(vTgt).project(camera);
    bgU.uHalo.value.set(vTmp.x * 0.5 + 0.5, vTmp.y * 0.5 + 0.5);
    fx.proj.value = bufH / (2 * Math.tan((camera.fov * DEG) / 2));
    fx.dustMat.uniforms.uAmt.value = 1 - 0.55 * smoothstep(3.4, 4.4, c);

    // ---- chapter 1: frost blooms in from the rims (with hysteresis so it does not flicker)
    if (!frostOn && c > FROST_ON) frostOn = true;
    else if (frostOn && c < FROST_OFF) frostOn = false;
    const ft = frostOn ? 1 : 0;
    frost = reducedMotion || dbg.settle ? ft : frost + (ft - frost) * (1 - Math.exp(-dt / FROST_TAU));
    U.uFrost.value = frost;
    const deep = 0.75 + 0.25 * smoothstep(1.5, 3.0, c);
    // look.frost: the wide shots (6, 7) keep only a fine rim sparkle so the gold reads
    for (let i = 0; i < 6; i++) U.uPlates.value[i].w = FROST_W[i] * frost * look.frost * (i >= 3 ? deep : 1);

    // ---- chapter 2: a signal packet runs down one line and dims at each attenuator
    const pVis = smoothstep(1.45, 1.85, c) * (1 - smoothstep(2.4, 2.8, c));
    const SU = fx.signalMat.uniforms;
    U.uPulse.value.w = pVis;
    fx.signal.visible = pVis > 0.001;
    SU.uVis.value = pVis;
    if (pVis > 0.001) {
      let s, env, ph;
      if (reducedMotion) { s = 3.55; env = 1; ph = -1; }
      else {
        ph = ((time % PULSE_PERIOD) + PULSE_PERIOD) % PULSE_PERIOD;
        if (ph < PULSE_TRAVEL) { s = PULSE_S0 + (PULSE_S1 - PULSE_S0) * (ph / PULSE_TRAVEL); env = smoothstep(0, 0.3, ph) * (1 - smoothstep(PULSE_TRAVEL - 0.25, PULSE_TRAVEL, ph)); }
        else { s = -10; env = 0; }
      }
      U.uPulse.value.x = s;
      U.uPulse.value.y = PULSE_AMP * env;
      samplePath(Math.max(s, PULSE_S0), SU.uHead.value);
      SU.uHeadAmp.value = env * gainAt(s) * 6.0;
      const fl = SU.uFlash.value;
      for (let k = 0; k < 4; k++) {
        const sk = PULSE_ATT[k];
        if (ph < 0 || sk < PULSE_S0) { fl[k] = 0; continue; }
        const tk = ((sk - PULSE_S0) / (PULSE_S1 - PULSE_S0)) * PULSE_TRAVEL;
        fl[k] = ph >= tk ? Math.exp(-(ph - tk) * 3.2) * gainAt(sk - 0.01) * 1.6 : 0;
      }
    }

    // ---- chapter 3: the cold deepens: glow under the mixing chamber, drifting ice crystals
    const breathe = reducedMotion ? 1 : 0.93 + 0.07 * Math.sin(time * 0.7);
    U.uGlow.value = look.glow * breathe;
    fx.setGlow(look.glowHalo * 0.9 * breathe);
    fx.setFrost(smoothstep(2.4, 2.95, c) * (1 - smoothstep(3.6, 4.25, c)));
    fx.drift.value = drift;
    U.uTime.value = time;

    // ---- chapters 4-7: the processor
    chip.choreo.update(time, c, reducedMotion);
    chip.CU.uGain.value = look.gain;
  }

  function render() {
    renderer.info.reset();
    post.render();
    sceneCalls = post.sceneCalls; sceneTris = post.sceneTris;
    frameCalls = renderer.info.render.calls; frameTris = renderer.info.render.triangles;
  }

  // ---------------------------------------------------------------- upload + compile
  // anisotropic filtering: worth it on the high tier, where plates are seen at grazing angles
  const ANISO = { mid: 2, low: 1 };
  if (ANISO[presetName]) for (const t of [...machine.textures, ...chip.textures]) t.anisotropy = Math.min(t.anisotropy, ANISO[presetName]);
  slicer.step('upload', 0.86);
  for (const t of [...machine.textures, ...chip.textures]) {
    renderer.initTexture(t);
    await slicer.yield('upload texture');
  }
  if (dbg.wakeAge !== undefined) chip.choreo.setWakeAge(time, dbg.wakeAge);
  // put the scene in the state of its first frame so programs and uniforms match
  if (!reducedMotion && chap.x < 0.35 && !dbg.noIntro) intro.state = 'dim';
  update(0, performance.now());

  slicer.step('shaders', 0.9);
  renderer.setRenderTarget(post.sceneRT);          // programs depend on the target: compile for it
  const compileList = [];
  scene.traverse((o) => { if ((o.isMesh || o.isPoints) && o.material) compileList.push(o); });
  const seen = new Set();
  for (const o of compileList) {
    if (seen.has(o.material)) continue;
    seen.add(o.material);
    renderer.compile(o, camera, scene);
    await slicer.yield('compile');
  }
  await renderer.compileAsync(scene, camera);       // waits for parallel compilation to finish
  renderer.setRenderTarget(null);
  await post.compile(() => slicer.maybeYield('post'));
  await slicer.yield('compile done');

  // upload vertex buffers one object at a time (render each alone into a tiny target)
  slicer.step('buffers', 0.95);
  {
    const tiny = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: true });
    const vis = compileList.map((o) => o.visible);
    const cull = compileList.map((o) => o.frustumCulled);
    compileList.forEach((o) => { o.visible = false; });
    renderer.setRenderTarget(tiny);
    for (let i = 0; i < compileList.length; i++) {
      const o = compileList[i];
      o.visible = true; o.frustumCulled = false;
      renderer.render(scene, camera);
      o.visible = false; o.frustumCulled = cull[i];
      await slicer.maybeYield('buffers');
    }
    compileList.forEach((o, i) => { o.visible = vis[i]; });
    renderer.setRenderTarget(null);
    tiny.dispose();
  }
  slicer.mark('ready');
  slicer.step('ready', 1);

  buildEnd = performance.now();
  const buildMs = Math.round(buildEnd - T0);
  if (observer) {
    try { for (const e of observer.takeRecords()) if (e.startTime < buildEnd && e.duration > longTask) longTask = e.duration; } catch (e) { /* ignore */ }
  }
  const longestSlice = Math.round(slicer.longest);
  const longestSliceLabel = slicer.longestLabel;

  // ---------------------------------------------------------------- loop
  let running = false, raf = 0, last = 0, disposed = false, lost = false, frames = 0;
  const listeners = [];
  let firstResolve;
  const firstFrame = new Promise((r) => { firstResolve = r; });
  const governor = dbg.governor === false || presetName === 'still' ? null : new Governor(tier, (scale, postOn) => {
    dprScale = scale;
    post.setEnabled(postOn);
    applySize();
  });
  const postDefault = presetName === 'still' ? true : tier.post !== false;   // the tier's starting point when no governor runs
  post.setEnabled(governor ? governor.post : postDefault);
  const fixedDt = dbg.dt;

  let snap = true;   // the first frame lands on the current chapter instead of flying in from 0
  function tick(now) {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    // pacing: at most one frame per 10 ms, so 120 Hz panels run at 60; on touch screens, 30 fps
    // while the camera rests, which keeps phones cool enough not to throttle
    const resting = coarse && intro.state === 'done' && Math.abs(chap.v) < 1e-3 && Math.abs(target - chap.x) < 1e-3;
    if (last && now - last < (resting ? 30 : 10)) return;
    const dtMs = last ? now - last : 16.7;
    last = now;
    if (snap) {
      snap = false;
      chap.x = target; chap.v = 0;
      if (intro.state === 'dim' && target >= 0.35) intro.state = 'done';
    }
    if (governor && !resting) governor.sample(dtMs, now);
    const dt = fixedDt !== undefined ? fixedDt : Math.min(0.1, Math.max(0, dtMs / 1000));
    update(dt, now);
    render();
    frames++;
    if (frames === 1) {
      if (intro.state === 'dim') intro.armedAt = now;
      requestAnimationFrame(() => firstResolve());
    }
    const c = chap.x;
    for (let i = 0; i < listeners.length; i++) listeners[i](c);
  }

  // ---------------------------------------------------------------- context loss
  const onLost = (e) => {
    e.preventDefault();
    lost = true;
    running = false;
    cancelAnimationFrame(raf);
    canvas.dispatchEvent(new CustomEvent('contextlost'));
  };
  const onRestored = () => {
    if (disposed) return;
    lost = false;
    envRT.dispose();
    envRT = buildStudioEnvironment(renderer, { size: preset.env });
    scene.environment = envRT.texture;
    applySize(true);
    canvas.dispatchEvent(new CustomEvent('contextrestored'));
  };
  canvas.addEventListener('webglcontextlost', onLost, false);
  canvas.addEventListener('webglcontextrestored', onRestored, false);

  // ---------------------------------------------------------------- anchors
  const pulseAtt = machine.pulse.att;            // attenuators on the signal line: 4 K, still, cold plate, MXC
  const attAnchor = pulseAtt[Math.min(2, pulseAtt.length - 1)] || new THREE.Vector3();
  const circAnchor = (() => {
    // the circulator that best faces the chapter-3 camera
    let best = null, bd = -2;
    const a = 18 * DEG, dx = Math.sin(a), dz = Math.cos(a);
    for (const p of machine.circulators) {
      const l = Math.hypot(p.x, p.z) || 1;
      const d = (p.x * dx + p.z * dz) / l;
      if (d > bd) { bd = d; best = p; }
    }
    return best || new THREE.Vector3(0, -2.55, 0.6);
  })();
  const anchorV = new THREE.Vector3(), viewV = new THREE.Vector3();
  function anchorPosition(name, out) {
    const pa = PLATE_ANCHORS[name];
    if (pa) {
      const st = STAGES[pa[0]];
      const az = Math.atan2(camera.position.x, camera.position.z) + pa[1];
      return out.set(Math.sin(az) * st.R, st.y - st.t * 0.5, Math.cos(az) * st.R);
    }
    if (name === 'attenuator') return out.copy(attAnchor);
    if (name === 'circulator') return out.copy(circAnchor);
    if (name === 'chip') return out.copy(chip.center).addScaledVector(chip.right, -0.5 * chip.dieW); // the die's left edge
    return null;
  }

  // ---------------------------------------------------------------- api
  const api = {
    tier,
    firstFrame,
    setChapter(c) {
      const v = +c;
      if (Number.isFinite(v)) target = clamp(v, 0, CHAPTERS);
    },
    setPointer(x, y) {
      if (!finePointer || reducedMotion) return;
      ptr.tx = clamp(+x || 0, -1, 1);
      ptr.ty = clamp(+y || 0, -1, 1);
    },
    resize() {
      if (disposed || lost || !applySize()) return;
      last = 0;   // the reshaped canvas is blank: draw the next frame even while paced
      if (!running && frames > 0) { update(0, performance.now()); render(); }
    },
    start() {
      if (running || disposed || lost) return;
      running = true;
      last = 0;
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
      if (intro.state === 'dim') startIntro(performance.now(), true);
      return intro.promise;
    },
    project(name, out) {
      out.visible = false;
      if (!anchorPosition(name, anchorV)) return out;
      viewV.copy(anchorV).applyMatrix4(camera.matrixWorldInverse);
      if (viewV.z > -camera.near) return out;
      anchorV.project(camera);
      out.x = (anchorV.x * 0.5 + 0.5) * cssW;
      out.y = (0.5 - anchorV.y * 0.5) * cssH;
      out.visible = anchorV.x > -0.98 && anchorV.x < 0.98 && anchorV.y > -0.96 && anchorV.y < 0.96;
      return out;
    },
    onFrame(cb) {
      if (typeof cb !== 'function') return () => {};
      listeners.push(cb);
      return () => { const i = listeners.indexOf(cb); if (i >= 0) listeners.splice(i, 1); };
    },
    info() {
      const mem = renderer.info.memory;
      return {
        tier: tier.name, preset: presetName, dpr: Math.round(dpr * 100) / 100, dprScale: Math.round(dprScale * 100) / 100,
        size: [bufW, bufH], css: [cssW, cssH], portrait,
        calls: frameCalls, triangles: frameTris, sceneCalls, sceneTriangles: sceneTris,
        programs: renderer.info.programs ? renderer.info.programs.length : 0,
        textures: mem.textures, geometries: mem.geometries,
        msaa: post.samples, dofTaps: post.dofOn ? post.dofTaps : 0, bloomLevels: post.bloomOn ? post.levels : 0,
        post: governor ? governor.post : postDefault,
        buildMs, longestTask: observer ? Math.round(longTask) : null, longestSlice, longestSliceLabel,
        staticTriangles: machine.stats.tris.total + chip.stats.tris,
        lines: machine.stats.lines, connectors: machine.stats.connectors, wirebonds: chip.stats.bonds, airbridges: chip.stats.bridges,
        frames, chapter: Math.round(chap.x * 1000) / 1000,
      };
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      api.stop();
      canvas.removeEventListener('webglcontextlost', onLost, false);
      canvas.removeEventListener('webglcontextrestored', onRestored, false);
      if (observer) { try { observer.disconnect(); } catch (e) { /* ignore */ } }
      listeners.length = 0;
      scene.traverse((o) => {
        if (o.isInstancedMesh) o.dispose();
        if (o.geometry) o.geometry.dispose();
        const m = o.material;
        if (m) (Array.isArray(m) ? m : [m]).forEach((x) => {
          for (const k in x) { const v = x[k]; if (v && v.isTexture) v.dispose(); }
          x.dispose();
        });
      });
      for (const t of [...machine.textures, ...chip.textures]) {
        t.dispose();
        if (t.image && typeof t.image.getContext === 'function') t.image.width = t.image.height = 0;   // free the canvas memory now
      }
      envRT.dispose();
      post.dispose();
      renderer.dispose();
      if (intro.resolve) { intro.resolve(); intro.resolve = null; }
    },
  };

  if (Object.keys(dbg).length) {
    /* Test and poster hooks (scene-test.html, tools/stills.mjs). */
    api._debug = {
      scene, camera, renderer, machine, chip, post, U, rig,
      /* Render a supersampled still: n jittered frames averaged, no grain, dithered. */
      renderStill(n = 8) {
        const H2 = [0.5, 0.3333, 0.25, 0.75, 0.125, 0.625, 0.375, 0.875, 0.0625, 0.5625, 0.3125, 0.8125, 0.1875, 0.6875, 0.4375, 0.9375];
        const H3 = [0.3333, 0.6667, 0.1111, 0.4444, 0.7778, 0.2222, 0.5556, 0.8889, 0.037, 0.3704, 0.7037, 0.1481, 0.4815, 0.8148, 0.2593, 0.5926];
        for (let k = 0; k < n; k++) {
          jitterX = (H2[k % 16] - 0.5);
          jitterY = (H3[k % 16] - 0.5);
          update(0, performance.now());
          renderer.info.reset();
          post.accumulate(k, n);
        }
        jitterX = jitterY = 0;
        post.present(1 / 255);
        frames++;
      },
      update: (dt) => update(dt, performance.now()),
      render,
      setTime(t) { time = t; drift = t; },
    };
  }
  return api;
}
