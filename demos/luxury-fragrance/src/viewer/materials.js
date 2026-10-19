/* Physically based materials for the opaque parts: polished black onyx (procedural warm veining
   in object space, clearcoat), champagne gold (anisotropic polish) and the engraving fill. */
import * as THREE from 'three';
import { NOISE } from './chunks.js';

export function createOnyx() {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0x050404, roughness: 0.26, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.035,
    ior: 1.55, specularIntensity: 1,
  });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObj = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vObj;\n${NOISE}
float onyxVeins(vec3 p, out float cloud){
  vec3 q = p * 0.55 + vec3(3.1, -9.0, 1.7);
  float n = fbm3(q * 1.3) + 0.5 * fbm3(q * 3.1 + 11.0);
  float band = (q.x * 0.7 + q.y * 1.0 + q.z * 0.35) * 2.1 + n * 5.5;
  float m = abs(sin(band));
  float m2 = abs(sin(band * 1.7 + 2.0 + n * 3.0));
  cloud = smoothstep(0.3, 1.0, fbm3(q * 0.8 + 4.0));
  // fine hairline veins, fading in and out along their length
  float fadeA = smoothstep(0.3, 0.7, fbm3(q * 0.7 + 21.0));
  float fadeB = smoothstep(0.45, 0.8, fbm3(q * 0.9 - 13.0));
  return pow(1.0 - m, 70.0) * fadeA * 0.8 + pow(1.0 - m2, 140.0) * fadeB * 0.5 + pow(1.0 - m, 8.0) * 0.06 * fadeA;
}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
  float onyxCloud;
  float onyxV = onyxVeins(vObj, onyxCloud);
  diffuseColor.rgb = vec3(0.0065, 0.0055, 0.005) * (0.7 + 0.6 * onyxCloud) + vec3(0.13, 0.085, 0.05) * onyxV;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor * (0.85 + 0.4 * onyxCloud) - onyxV * 0.08, 0.04, 1.0);`);
  };
  m.customProgramCacheKey = () => 'onyx-v1';
  return m;
}

export function createGold({ rough = 0.16, aniso = 0.5 } = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color().setRGB(0.93, 0.76, 0.5), metalness: 1, roughness: rough,
    anisotropy: aniso, anisotropyRotation: 0, clearcoat: 0, envMapIntensity: 1,
  });
}

export function createEngravingMaterial(tex) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color().setRGB(0.95, 0.77, 0.48), metalness: 1, roughness: 0.32,
    alphaMap: tex, bumpMap: tex, bumpScale: 2.5,
    transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
}
