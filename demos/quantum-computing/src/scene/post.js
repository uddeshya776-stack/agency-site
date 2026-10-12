/* Post pipeline (no EffectComposer), one full-screen triangle per pass:
     1. scene -> MSAA half-float target (+ resolved depth texture when DOF is on)
     2. dual-filter bloom: soft-knee prefilter, down chain, tent up chain (half or quarter res)
     3. final pass: bloom add, gather depth of field (high tier), FXAA (no-MSAA tiers),
        ACES, sRGB, cold white balance, shadow tint, vignette, grain, fade.
   Raw shader materials, so their programs never depend on the bound render target.
   Stills: N jittered frames are averaged in a half-float accumulator, then dithered. */
import * as THREE from 'three';

const HEAD = 'precision highp float;\n';
const VS = HEAD + `attribute vec3 position; varying vec2 vUv;
void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const prefilterFS = HEAD + `
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold, uKnee;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb
         + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb;
  c *= 0.25;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(min(c * contrib, vec3(40.0)), 1.0);
}`;
const downFS = HEAD + `
uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
  c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}`;
const upFS = HEAD + `
uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel; uniform float uRadius; varying vec2 vUv;
void main(){
  vec2 o = uTexel * uRadius;
  vec3 c = texture2D(tSrc, vUv + vec2(-o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(tSrc, vUv + vec2(0.0, -o.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb;
  c *= 2.0;
  c += texture2D(tSrc, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb
     + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, o.y)).rgb;
  c += texture2D(tSrc, vUv).rgb * 4.0;
  c /= 16.0;
  gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
}`;

const finalFS = (dofTaps) => HEAD + `
#define DOF_TAPS ${dofTaps}
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tBloom;
uniform float uBloom, uTime, uCold, uVignette, uGrain, uFade, uSat, uFxaa, uBottom, uWeight, uDofSeed;
uniform float uNear, uFar, uFocus, uAperture, uMaxCoc;
uniform vec2 uRes;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
float lumaT(vec3 c){ float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); return l / (1.0 + l); }
vec3 fxaa(vec2 uv){
  vec2 px = 1.0 / uRes;
  vec3 cM = texture2D(tScene, uv).rgb;
  float lNW = lumaT(texture2D(tScene, uv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = lumaT(texture2D(tScene, uv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = lumaT(texture2D(tScene, uv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = lumaT(texture2D(tScene, uv + vec2( 1.0,  1.0) * px).rgb);
  float lM = lumaT(cM);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.03, lMax * 0.12)) return cM;
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
  float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcpDirMin, vec2(-8.0), vec2(8.0)) * px;
  vec3 a = 0.5 * (texture2D(tScene, uv + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(tScene, uv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 b = a * 0.5 + 0.25 * (texture2D(tScene, uv - dir * 0.5).rgb + texture2D(tScene, uv + dir * 0.5).rgb);
  float lB = lumaT(b);
  return (lB < lMin || lB > lMax) ? a : b;
}
#if DOF_TAPS > 0
float viewZ(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / ((uFar - uNear) * d - uFar) * -1.0; }
float cocOf(float z){ return min(uAperture * abs(z - uFocus) / max(z, 1e-3), uMaxCoc); }
#endif
void main(){
  vec3 col = vec3(0.0);
  bool done = false;
  #if DOF_TAPS > 0
  if (uAperture > 0.01) {
    float c0 = cocOf(viewZ(vUv));
    if (c0 > 0.6) {
      vec3 acc = texture2D(tScene, vUv).rgb; float wsum = 1.0;
      float rot = hash(gl_FragCoord.xy + uDofSeed * 17.0) * 6.2831;
      for (int i = 0; i < DOF_TAPS; i++) {
        float fi = float(i) + 0.5;
        float r = sqrt(fi / float(DOF_TAPS)) * c0;
        float a = fi * 2.39996323 + rot;
        vec2 suv = vUv + vec2(cos(a), sin(a)) * r / uRes;
        float cs = cocOf(viewZ(suv));
        // a tap counts if its own blur disc reaches us (in-focus edges do not smear outward)
        float w = clamp(cs - r + 1.0, 0.0, 1.0);
        acc += texture2D(tScene, suv).rgb * w; wsum += w;
      }
      col = acc / wsum;
      done = true;
    }
  }
  #endif
  if (!done) col = uFxaa > 0.5 ? fxaa(vUv) : texture2D(tScene, vUv).rgb;
  col += texture2D(tBloom, vUv).rgb * uBloom;

  // white balance drifts colder as the machine cools
  col *= mix(vec3(1.02, 1.0, 0.97), vec3(0.95, 0.99, 1.06), uCold);
  col = ACESFilmicToneMapping(col);
  col = sRGBTransferOETF(vec4(col, 1.0)).rgb;
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(l), col, uSat), 0.0);
  // split tone: lift the deepest shadows toward blue-black
  vec3 shadowTint = mix(vec3(0.006, 0.011, 0.020), vec3(0.004, 0.013, 0.028), uCold);
  col += shadowTint * (1.0 - smoothstep(0.0, 0.35, l));
  vec2 dv = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  float vig = smoothstep(1.2, 0.25, length(dv) * 1.05);
  col *= mix(1.0 - uVignette, 1.0, vig);
  col *= 1.0 - uBottom * smoothstep(0.4, 0.0, vUv.y);
  float g = hash(gl_FragCoord.xy + fract(uTime * 7.13) * 91.7) - 0.5;
  col += g * uGrain * (1.0 - 0.7 * l);
  col *= uFade;
  gl_FragColor = vec4(max(col, 0.0) * uWeight, 1.0);
}`;

const copyFS = HEAD + `
uniform sampler2D tSrc; uniform float uDither; varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb;
  c += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.xy * 1.37 + 5.3) - 1.0) * uDither;
  gl_FragColor = vec4(c, 1.0);
}`;

function tri() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  return g;
}
const raw = (fs, uniforms, extra = {}) => new THREE.RawShaderMaterial({ vertexShader: VS, fragmentShader: fs, uniforms, depthTest: false, depthWrite: false, ...extra });

export function createPost(renderer, scene, camera, { preset, msaa }) {
  const dofTaps = preset.dofTaps | 0;
  const levels = preset.bloomLevels | 0;
  const div = preset.bloomDiv || 2;
  const samples = Math.min(msaa | 0, renderer.capabilities.maxSamples || 4);
  let W = 4, H = 4;

  const depthTexture = dofTaps > 0 ? new THREE.DepthTexture(4, 4) : null;
  const sceneRT = new THREE.WebGLRenderTarget(4, 4, {
    type: THREE.HalfFloatType, samples, depthBuffer: true, stencilBuffer: false,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
    ...(depthTexture ? { depthTexture } : {}),
  });
  const mk = () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
  const down = Array.from({ length: levels }, mk);
  const up = Array.from({ length: Math.max(0, levels - 1) }, mk);
  let accum = null;
  const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  black.needsUpdate = true;

  const prefilter = raw(prefilterFS, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.2 }, uKnee: { value: 0.6 } });
  const downM = raw(downFS, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const upM = raw(upFS, { tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1.0 } });
  const U = {
    tScene: { value: sceneRT.texture }, tDepth: { value: depthTexture || black }, tBloom: { value: black },
    uBloom: { value: 0.25 }, uTime: { value: 0 }, uCold: { value: 0 }, uVignette: { value: 0.55 }, uGrain: { value: preset.grain },
    uFade: { value: 1 }, uSat: { value: 1.05 }, uFxaa: { value: samples === 0 ? 1 : 0 }, uBottom: { value: 0 }, uWeight: { value: 1 }, uDofSeed: { value: 0 },
    uNear: { value: camera.near }, uFar: { value: camera.far }, uFocus: { value: 10 }, uAperture: { value: 0 }, uMaxCoc: { value: 14 },
    uRes: { value: new THREE.Vector2(4, 4) },
    toneMappingExposure: { value: 1 },
  };
  const finalM = raw(finalFS(dofTaps), U);
  const finalAdd = raw(finalFS(dofTaps), U, { blending: THREE.AdditiveBlending, transparent: true });
  const copyM = raw(copyFS, { tSrc: { value: null }, uDither: { value: 0 } });

  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(tri(), prefilter);
  quad.frustumCulled = false;
  const pass = (mat, target) => {
    quad.material = mat;
    renderer.setRenderTarget(target);
    renderer.render(quad, quadCam);
  };

  let bloomOn = levels > 0;
  let dofOn = dofTaps > 0;

  const api = {
    sceneRT, uniforms: U, samples, dofTaps, levels,
    sceneCalls: 0, sceneTris: 0,
    get bloomOn() { return bloomOn; },
    get dofOn() { return dofOn; },
    setSize(w, h) {
      W = Math.max(1, Math.round(w)); H = Math.max(1, Math.round(h));
      sceneRT.setSize(W, H);
      if (depthTexture) { depthTexture.image.width = W; depthTexture.image.height = H; }
      let bw = Math.max(1, Math.round(W / div)), bh = Math.max(1, Math.round(H / div));
      for (let i = 0; i < levels; i++) {
        down[i].setSize(bw, bh);
        if (i < levels - 1) up[i].setSize(bw, bh);
        bw = Math.max(1, bw >> 1); bh = Math.max(1, bh >> 1);
      }
      U.uRes.value.set(W, H);
      if (accum) accum.setSize(W, H);
    },
    /* Governor hook: false drops bloom and depth of field (FXAA covers no-MSAA tiers). */
    setEnabled(on) {
      bloomOn = on && levels > 0;
      dofOn = on && dofTaps > 0;
    },
    renderScene() {
      renderer.setRenderTarget(sceneRT);
      renderer.render(scene, camera);
      api.sceneCalls = renderer.info.render.calls;
      api.sceneTris = renderer.info.render.triangles;
    },
    renderBloom() {
      if (!bloomOn) { U.tBloom.value = black; return; }
      prefilter.uniforms.tSrc.value = sceneRT.texture;
      prefilter.uniforms.uTexel.value.set(1 / W, 1 / H);
      pass(prefilter, down[0]);
      for (let i = 1; i < levels; i++) {
        downM.uniforms.tSrc.value = down[i - 1].texture;
        downM.uniforms.uTexel.value.set(1 / down[i - 1].width, 1 / down[i - 1].height);
        pass(downM, down[i]);
      }
      let src = down[levels - 1];
      for (let i = levels - 2; i >= 0; i--) {
        upM.uniforms.tSrc.value = src.texture;
        upM.uniforms.tAdd.value = down[i].texture;
        upM.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
        pass(upM, up[i]);
        src = up[i];
      }
      U.tBloom.value = levels > 1 ? up[0].texture : down[0].texture;
    },
    render() {
      api.renderScene();
      api.renderBloom();
      const ap = U.uAperture.value;
      if (!dofOn) U.uAperture.value = 0;
      U.uWeight.value = 1;
      pass(finalM, null);
      U.uAperture.value = ap;
    },
    /* One jittered sub-frame of a supersampled still: accumulate into a half-float target. */
    accumulate(k, n) {
      if (!accum) accum = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
      api.renderScene();
      api.renderBloom();
      U.uWeight.value = 1 / n;
      U.uDofSeed.value = k * 0.618;
      if (k === 0) {
        pass(finalM, accum);
      } else {
        const ac = renderer.autoClear;
        renderer.autoClear = false;
        pass(finalAdd, accum);
        renderer.autoClear = ac;
      }
      U.uWeight.value = 1;
      U.uDofSeed.value = 0;
    },
    present(dither = 1 / 255) {
      copyM.uniforms.tSrc.value = accum.texture;
      copyM.uniforms.uDither.value = dither;
      pass(copyM, null);
    },
    /* Compile every pass program up front (raw shaders: target-independent). */
    async compile() {
      for (const m of [prefilter, downM, upM, finalM, copyM]) {
        quad.material = m;
        await renderer.compileAsync(quad, quadCam);
      }
    },
    dispose() {
      sceneRT.dispose(); if (depthTexture) depthTexture.dispose();
      down.forEach((r) => r.dispose()); up.forEach((r) => r.dispose());
      if (accum) accum.dispose();
      [prefilter, downM, upM, finalM, finalAdd, copyM].forEach((m) => m.dispose());
      quad.geometry.dispose(); black.dispose();
    },
  };
  return api;
}
