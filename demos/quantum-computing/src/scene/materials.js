/* Shared uniforms and the one shader patch every metal in the machine uses.
   The patch adds (all driven by uniforms, so nothing recompiles while scrolling):
   - frost: a white-blue rime that creeps in from the plate rims onto nearby hardware
     (chapter 1 onwards), with fine glints that fade with distance;
   - the faint ice-blue glow under the mixing-chamber plate (chapter 3);
   - a fake gold-to-gold bounce on down-facing surfaces;
   - on cables only: per-vertex roughness and the travelling signal pulse (chapter 2). */
import * as THREE from 'three';

export const PULSE_ATT = [2, 3, 4, 5]; // attenuator positions along the pulse line (s = plate index)

export function createUniforms() {
  const plates = [];
  for (let i = 0; i < 6; i++) plates.push(new THREE.Vector4(0, 1, 0.1, 0));
  return {
    uTime: { value: 0 },
    uFrost: { value: 0 },                    // 0..1, global switch for the frost branch
    uPlates: { value: plates },              // per plate: (top y, radius, thickness, frost weight)
    uGlow: { value: 0 },                     // mixing-chamber under-glow
    uGlowPos: { value: new THREE.Vector3(0, -2.64, 0) },
    uGlowColor: { value: new THREE.Color(0.32, 0.72, 1.0) },
    uPulse: { value: new THREE.Vector4(-10, 0, 0.055, 0.0) }, // head s, amplitude, half-width (s units), visible 0..1
    uPulseColor: { value: new THREE.Color(0.32, 0.72, 1.0) },
    uSparkle: { value: 1 },                  // frost glints on/off (reduced motion keeps them static)
  };
}

const COMMON_FS = /* glsl */`
varying vec3 vWPos;
uniform float uTime, uFrost, uGlow, uSparkle;
uniform vec4 uPlates[6];
uniform vec3 uGlowPos, uGlowColor;
float nHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(nHash(i), nHash(i + vec3(1, 0, 0)), f.x), mix(nHash(i + vec3(0, 1, 0)), nHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(nHash(i + vec3(0, 0, 1)), nHash(i + vec3(1, 0, 1)), f.x), mix(nHash(i + vec3(0, 1, 1)), nHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float frostField(vec3 p, vec3 n) {
  float r = length(p.xz);
  float acc = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 pl = uPlates[i];
    if (pl.w < 0.002) continue;
    float dy = p.y - pl.x;                                   // 0 at the top face, -t at the bottom face
    float inSlab = step(-pl.z - 0.006, dy) * step(dy, 0.006);
    // on the plate: a rime band that creeps inward from the rim as the stage cools
    // (on the side face it grows from both corners, so the middle of the edge stays gold longest)
    float reach = 0.03 + 0.2 * pl.w;
    float dc = min(max(-dy, 0.0), max(dy + pl.z, 0.0));
    float rim = smoothstep(reach, 0.0, max(pl.y - r, 0.0) + dc * 2.2) * inSlab;
    // hardware just above / below the faces: connectors, clamps, cable ends
    float vy = max(dy, 0.0) + max(-(dy + pl.z), 0.0);
    float hw = smoothstep(0.025 + 0.1 * pl.w, 0.0, vy) * (1.0 - inSlab) * step(r, pl.y);
    acc = max(acc, pl.w * max(rim, hw * 0.8));
  }
  return acc * mix(0.75, 1.0, clamp(n.y * 0.5 + 0.5, 0.0, 1.0));
}
`;

const CABLE_VS_DECL = /* glsl */`
attribute vec2 aCab;
varying vec2 vCab;
`;
const CABLE_FS_DECL = /* glsl */`
varying vec2 vCab;
uniform vec4 uPulse;
uniform vec3 uPulseColor;
float pulseGain(float s) {
  // visible intensity after each attenuator the signal has passed (a clear step per stage,
  // gentler than the real 20 dB so the packet can still be followed down to the MXC)
  float g = 1.0;
  if (s > 2.0) g *= 0.58;
  if (s > 3.0) g *= 0.58;
  if (s > 4.0) g *= 0.58;
  if (s > 5.0) g *= 0.58;
  return g;
}
`;

/**
 * Patch a MeshStandard/Physical material in place.
 * opts: { bounce: 0..1, cable: bool, frost: bool, glow: bool, key: string }
 */
export function patchMaterial(mat, U, opts = {}) {
  const bounce = opts.bounce || 0;
  const cable = !!opts.cable;
  const frost = opts.frost !== false;
  const glow = opts.glow !== false;
  const octaves = opts.octaves || 2;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = U.uTime;
    sh.uniforms.uFrost = U.uFrost;
    sh.uniforms.uPlates = U.uPlates;
    sh.uniforms.uGlow = U.uGlow;
    sh.uniforms.uGlowPos = U.uGlowPos;
    sh.uniforms.uGlowColor = U.uGlowColor;
    sh.uniforms.uSparkle = U.uSparkle;
    if (cable) { sh.uniforms.uPulse = U.uPulse; sh.uniforms.uPulseColor = U.uPulseColor; }

    let vs = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;' + (cable ? CABLE_VS_DECL : ''))
      .replace('#include <project_vertex>', `#include <project_vertex>
        {
          vec4 wp4 = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp4 = instanceMatrix * wp4;
          #endif
          vWPos = (modelMatrix * wp4).xyz;
        }` + (cable ? '\n        vCab = aCab;' : ''));
    sh.vertexShader = vs;

    let fs = sh.fragmentShader.replace('#include <common>', '#include <common>\n' + COMMON_FS + (cable ? CABLE_FS_DECL : ''));
    if (cable) {
      fs = fs.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n  roughnessFactor = vCab.y;');
    }
    // frost changes the surface itself (albedo, metalness, roughness) before lighting
    fs = fs.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      vec3 nWN = inverseTransformDirection(normal, viewMatrix);
      float frostAmt = 0.0;
      ${frost ? `
      float pxw = length(fwidth(vWPos));   // world size of a pixel (derivatives taken outside branches)
      if (uFrost > 0.001) {
        float field = frostField(vWPos, nWN);
        if (field > 0.002) {
          // solid where the field is strong; a ragged, feathery front where it is weak.
          // Fine noise is faded out where it would be smaller than a pixel (no shimmer).
          float nz = vNoise(vWPos * 34.0);
          ${octaves > 1 ? `
          float mz = mix(0.5, vNoise(vWPos * 72.0 + 11.3), 1.0 - smoothstep(0.35, 1.0, 72.0 * pxw));
          float fz = mix(0.5, vNoise(vWPos * 115.0 + 3.1), 1.0 - smoothstep(0.35, 1.0, 115.0 * pxw));
          float grain = mix(0.5, vNoise(vWPos * 260.0 + 7.1), 1.0 - smoothstep(0.35, 1.0, 260.0 * pxw));` : `
          float mz = nz;
          float fz = 0.5;
          float grain = 0.5;`}
          float front = field - (0.62 * nz + 0.38 * fz) * 0.6;
          float cover = smoothstep(0.04, 0.3, front);
          // fine speckle: mostly solid rime where the field is strong, metal specks show through
          // where it thins, so the front reads feathery instead of painted
          float sp = 0.55 * mz + 0.45 * fz;
          frostAmt = cover * smoothstep(0.36, 0.6, field + (sp - 0.5) * 1.0) * 0.95;
          // thin rime is a translucent blue-grey, thick rime at the corners is white
          float thick = smoothstep(0.45, 0.95, field);
          vec3 rime = mix(vec3(0.5, 0.62, 0.78), vec3(0.86, 0.93, 1.0), thick) * (0.74 + 0.26 * (0.5 * mz + 0.5 * grain));
          frostAmt *= 0.72 + 0.28 * thick;
          diffuseColor.rgb = mix(diffuseColor.rgb, rime, frostAmt);
          metalnessFactor = mix(metalnessFactor, 0.0, frostAmt);
          roughnessFactor = mix(roughnessFactor, 0.5 + 0.3 * (1.0 - grain), frostAmt);
        }
      }` : ''}
    `);
    fs = fs.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      ${frost ? `
      if (frostAmt > 0.01) {
        // a little scattered light so the rime reads white in a dark room, plus distance-faded glints
        totalEmissiveRadiance += vec3(0.03, 0.045, 0.066) * frostAmt;
        float fres = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance += vec3(0.10, 0.16, 0.24) * (fres * fres * fres) * frostAmt;
        vec3 cell = floor(vWPos * 210.0);
        float h = nHash(cell);
        float tw = uSparkle > 0.5 ? 0.5 + 0.5 * sin(uTime * 2.3 + h * 61.0) : 0.8;
        float near = 1.0 - smoothstep(2.5, 8.0, length(vViewPosition));
        totalEmissiveRadiance += vec3(0.75, 0.88, 1.0) * step(0.975, h) * tw * frostAmt * near * 2.6;
      }` : ''}
      ${glow ? `
      if (uGlow > 0.001) {
        vec3 gd = uGlowPos - vWPos;
        float gl = dot(gd, gd);
        float fall = exp(-gl * 3.2);
        float facing = 0.3 + 0.7 * clamp(dot(nWN, normalize(gd)), 0.0, 1.0);
        totalEmissiveRadiance += uGlowColor * (uGlow * fall * facing * 0.55);
      }` : ''}
      ${cable ? `
      if (vCab.x >= 0.0 && uPulse.w > 0.001) {
        float ds = vCab.x - uPulse.x;
        float head = exp(-ds * ds / (uPulse.z * uPulse.z));
        float tail = ds < 0.0 ? exp(ds * 7.0) * 0.28 : 0.0;   // short fading wake above the head
        float g = pulseGain(uPulse.x);
        totalEmissiveRadiance += uPulseColor * ((head + tail) * g * uPulse.y * uPulse.w);
      }` : ''}
    `);
    if (bounce > 0) {
      // fake gold-to-gold interreflection: surfaces facing down see warm metal, not the void
      fs = fs.replace('#include <aomap_fragment>', `#include <aomap_fragment>
        {
          float down = smoothstep(0.15, -0.85, nWN.y);
          vec3 g = diffuseColor.rgb;
          reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, reflectedLight.indirectSpecular * g * 1.25 + g * g * 0.010, down * ${bounce.toFixed(3)});
        }`);
    }
    sh.fragmentShader = fs;
  };
  const key = `nadir-${cable ? 'cable' : 'm'}-${bounce.toFixed(2)}-${frost ? 'f' + octaves : 'nf'}-${glow ? 'g' : 'ng'}`;
  mat.customProgramCacheKey = () => key;
  return mat;
}

export const GOLD = [1.0, 0.71, 0.34];

/* Metal and dielectric materials for the merged machine parts. Base colour is white
   where vertex/instance colours carry tint x baked AO. */
export function createMaterials(U, preset) {
  const o = { octaves: preset.frostOctaves };
  const gold = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 1, roughness: 0.24 }), U, { ...o, bounce: 0.6 });
  gold.color.setRGB(GOLD[0], GOLD[1], GOLD[2]);
  const silver = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 1, roughness: 0.3 }), U, o);
  silver.color.setRGB(0.64, 0.65, 0.68);
  const cable = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 1, roughness: 0.35 }), U, { ...o, cable: true });
  const dark = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 0.15, roughness: 0.42 }), U, o);
  dark.color.setRGB(0.025, 0.028, 0.034);
  const diel = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 0, roughness: 0.62 }), U, o);
  const conn = patchMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.22 }), U, o);
  return { gold, silver, cable, dark, diel, conn };
}
