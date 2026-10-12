/* Post pipeline, one full-screen triangle per pass (no EffectComposer):
     1. scene -> MSAA half-float RGBA target, premultiplied, cleared to transparent
     2. dual-filter bloom on the brightest highlights only (mid/high tiers)
     3. final: composite over the page colour in scene-linear space, bloom, exposure,
        Khronos PBR Neutral tone mapping (keeps the scent colours true), sRGB, then
        "un-composite" against the page colour so the canvas stays transparent: opaque
        pixels keep alpha 1, shadows become alpha, glows become additive light. */
import * as THREE from 'three';

const HEAD = 'precision highp float;\n';
const VS = HEAD + `attribute vec3 position; varying vec2 vUv;
void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const prefilterFS = HEAD + `
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold, uKnee;
varying vec2 vUv;
void main(){
  vec4 a = texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)), b = texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5));
  vec4 c4 = texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)), d = texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5));
  vec3 c = (a.rgb + b.rgb + c4.rgb + d.rgb) * 0.25;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(min(c * contrib, vec3(30.0)), 1.0);
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
uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv + vec2(-o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(tSrc, vUv + vec2(0.0, -o.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb;
  c *= 2.0;
  c += texture2D(tSrc, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb
     + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, o.y)).rgb;
  c += texture2D(tSrc, vUv).rgb * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`;

const finalFS = HEAD + `
uniform sampler2D tScene; uniform sampler2D tBloom;
uniform float uBloom, uExposure, uFade;
uniform vec3 uBg;          // page colour, scene-linear (tone-maps to uBgD)
uniform vec3 uBgD;         // page colour, display sRGB 0..1
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
vec3 neutral(vec3 color){
  const float StartCompression = 0.8 - 0.04;
  const float Desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < StartCompression) return color;
  float d = 1. - StartCompression;
  float newPeak = 1. - d * d / (peak + d - StartCompression);
  color *= newPeak / peak;
  float g = 1. - 1. / (Desaturation * (peak - newPeak) + 1.);
  return mix(color, vec3(newPeak), g);
}
vec3 oetf(vec3 c){ c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
void main(){
  vec4 s = texture2D(tScene, vUv);
  vec3 full = s.rgb + (1.0 - s.a) * uBg + texture2D(tBloom, vUv).rgb * uBloom;
  vec3 disp = oetf(neutral(full * uExposure));
  disp += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  // the page shows through where the scene left it untouched
  float a = s.a;
  vec3 r = disp / max(uBgD, vec3(1e-3));
  a = max(a, 1.0 - min(r.x, min(r.y, r.z)));
  a = clamp(a, 0.0, 1.0);
  vec3 o = max(disp - (1.0 - a) * uBgD, 0.0);
  gl_FragColor = vec4(o, a) * uFade;
}`;

function tri() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  return g;
}
const raw = (fs, uniforms, extra = {}) => new THREE.RawShaderMaterial({ vertexShader: VS, fragmentShader: fs, uniforms, depthTest: false, depthWrite: false, ...extra });

export function createPost(renderer, scene, camera, { msaa = 4, bloomLevels = 5 }) {
  let formatSamples = 0;
  try {
    const gl = renderer.getContext();
    const list = gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA16F, gl.SAMPLES);
    formatSamples = list && list.length ? list[0] : 0;
  } catch (e) { formatSamples = 0; }
  const samples = Math.min(msaa | 0, renderer.capabilities.maxSamples || 4, formatSamples);
  const levels = bloomLevels | 0;
  let W = 4, H = 4;
  const sceneRT = new THREE.WebGLRenderTarget(4, 4, {
    type: THREE.HalfFloatType, samples, depthBuffer: true, stencilBuffer: false,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
  });
  const mk = () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
  const down = Array.from({ length: levels }, mk);
  const up = Array.from({ length: Math.max(0, levels - 1) }, mk);
  const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  black.needsUpdate = true;

  const prefilter = raw(prefilterFS, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 2.2 }, uKnee: { value: 1.0 } });
  const downM = raw(downFS, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const upM = raw(upFS, { tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const U = {
    tScene: { value: sceneRT.texture }, tBloom: { value: black },
    uBloom: { value: 0.12 }, uExposure: { value: 1 }, uFade: { value: 1 },
    uBg: { value: new THREE.Vector3(0.8, 0.8, 0.8) }, uBgD: { value: new THREE.Vector3(0.9, 0.9, 0.9) },
  };
  const finalM = raw(finalFS, U);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(tri(), prefilter);
  quad.frustumCulled = false;
  const pass = (mat, target) => {
    quad.material = mat;
    renderer.setRenderTarget(target);
    renderer.render(quad, quadCam);
  };
  let bloomOn = levels > 0;

  const api = {
    sceneRT, uniforms: U, samples, levels,
    get bloomOn() { return bloomOn; },
    setSize(w, h) {
      W = Math.max(1, Math.round(w)); H = Math.max(1, Math.round(h));
      sceneRT.setSize(W, H);
      let bw = Math.max(1, Math.round(W / 2)), bh = Math.max(1, Math.round(H / 2));
      for (let i = 0; i < levels; i++) {
        down[i].setSize(bw, bh);
        if (i < levels - 1) up[i].setSize(bw, bh);
        bw = Math.max(1, bw >> 1); bh = Math.max(1, bh >> 1);
      }
    },
    setEnabled(on) { bloomOn = on && levels > 0; },
    render() {
      renderer.setRenderTarget(sceneRT);
      renderer.clear(true, true, false);
      renderer.render(scene, camera);
      if (bloomOn) {
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
      } else {
        U.tBloom.value = black;
      }
      pass(finalM, null);
    },
    async compile() {
      const tiny = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
      for (const m of [prefilter, downM, upM, finalM]) {
        quad.material = m;
        await renderer.compileAsync(quad, quadCam);
        pass(m, tiny);
      }
      renderer.setRenderTarget(null);
      tiny.dispose();
    },
    dispose() {
      sceneRT.dispose();
      down.forEach((r) => r.dispose()); up.forEach((r) => r.dispose());
      [prefilter, downM, upM, finalM].forEach((m) => m.dispose());
      quad.geometry.dispose(); black.dispose();
    },
  };
  return api;
}

/* JS twin of the shader's Neutral curve, and its inverse (so a page colour can be fed to the
   scene in linear units that come out of the tone mapper unchanged). */
export function neutralJS(c) {
  let [r, g, b] = c;
  const start = 0.76, desat = 0.15;
  const x = Math.min(r, g, b);
  const off = x < 0.08 ? x - 6.25 * x * x : 0.04;
  r -= off; g -= off; b -= off;
  const peak = Math.max(r, g, b);
  if (peak < start) return [r, g, b];
  const d = 1 - start;
  const np = 1 - (d * d) / (peak + d - start);
  r *= np / peak; g *= np / peak; b *= np / peak;
  const k = 1 - 1 / (desat * (peak - np) + 1);
  return [r + (np - r) * k, g + (np - g) * k, b + (np - b) * k];
}
export function inverseNeutral(target, exposure = 1) {
  let x = target.slice();
  for (let i = 0; i < 60; i++) {
    const y = neutralJS(x.map((v) => v * exposure));
    x = x.map((v, k) => Math.max(0, v + (target[k] - y[k]) * 1.1));
  }
  return x;
}
