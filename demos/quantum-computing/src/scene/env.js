/* Procedural photographic studio, baked once into a PMREM.
   Deep blue-black cyclorama, broad neutral scrims (the gold's body colour), hot
   strip lights (long specular streaks on rods and cables), a broken horizon band
   (thin highlight lines along every plate rim) and a dim cold under-glow. */
import * as THREE from 'three';

const softboxVS = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const softboxFS = /* glsl */`
uniform vec3 uColor; uniform float uSoft; uniform float uFall;
varying vec2 vUv;
void main(){
  vec2 q = abs(vUv - 0.5) * 2.0;
  float e = (1.0 - smoothstep(1.0 - uSoft, 1.0, q.x)) * (1.0 - smoothstep(1.0 - uSoft, 1.0, q.y));
  float grad = 1.0 - uFall * q.y * q.y;
  gl_FragColor = vec4(uColor * e * grad, 1.0);
}`;

function softbox(scene, { w, h, az, el, dist, color, intensity, soft = 0.25, fall = 0.3, roll = 0 }) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color[0], color[1], color[2]).multiplyScalar(intensity) },
      uSoft: { value: soft }, uFall: { value: fall },
    },
    vertexShader: softboxVS, fragmentShader: softboxFS,
    side: THREE.DoubleSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  const ce = Math.cos(el);
  m.position.set(Math.sin(az) * ce * dist, Math.sin(el) * dist, Math.cos(az) * ce * dist);
  m.lookAt(0, 0, 0);
  m.rotateZ(roll);
  scene.add(m);
  return m;
}

export function buildStudioEnvironment(renderer, { size = 256 } = {}) {
  const scene = new THREE.Scene();
  const cyc = new THREE.Mesh(
    new THREE.SphereGeometry(60, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        varying vec3 vDir;
        void main(){
          float y = vDir.y;
          vec3 top = vec3(0.006, 0.008, 0.013);
          vec3 hor = vec3(0.017, 0.023, 0.036);
          vec3 bot = vec3(0.003, 0.005, 0.010);
          vec3 c = y > 0.0 ? mix(hor, top, smoothstep(0.0, 0.6, y)) : mix(hor, bot, smoothstep(0.0, 0.35, -y));
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  cyc.renderOrder = -10;
  scene.add(cyc);

  const D = 14;
  const deg = Math.PI / 180;
  // broad diffusion scrims: the body colour of the gold
  softbox(scene, { w: 11, h: 13, az: -42 * deg, el: 12 * deg, dist: D, color: [0.97, 0.975, 1.0], intensity: 1.35, soft: 0.7, fall: 0.35 });
  softbox(scene, { w: 16, h: 16, az: 0, el: 86 * deg, dist: D, color: [0.93, 0.96, 1.0], intensity: 1.1, soft: 0.75, fall: 0.1 });
  softbox(scene, { w: 7, h: 11, az: 78 * deg, el: 2 * deg, dist: D, color: [0.76, 0.84, 1.0], intensity: 0.45, soft: 0.7, fall: 0.3 });
  // hot strips: crisp specular lines on rods, cable bends and plate rims
  softbox(scene, { w: 1.3, h: 18, az: -72 * deg, el: 6 * deg, dist: D, color: [1.0, 0.985, 0.965], intensity: 11.0, soft: 0.18, fall: 0.5 });
  softbox(scene, { w: 1.0, h: 18, az: 142 * deg, el: 4 * deg, dist: D, color: [0.78, 0.87, 1.0], intensity: 6.5, soft: 0.25, fall: 0.45 });
  softbox(scene, { w: 0.7, h: 14, az: 32 * deg, el: 0, dist: D, color: [0.96, 0.97, 1.0], intensity: 3.0, soft: 0.3, fall: 0.5 });
  // broken ring just under the horizon: fine highlight lines along every plate rim
  for (const [az, el, k, w] of [[-10, -4, 1.4, 6], [60, -6, 0.9, 4], [120, -3, 1.2, 5], [200, -5, 1.0, 6], [280, -4, 0.8, 5]]) {
    softbox(scene, { w, h: 0.5, az: az * deg, el: el * deg, dist: D, color: [0.9, 0.94, 1.0], intensity: k, soft: 0.6, fall: 0.0 });
  }
  // dim cold under-glow so undersides read deep blue rather than dead black
  softbox(scene, { w: 22, h: 22, az: 0, el: -89 * deg, dist: D, color: [0.2, 0.33, 0.7], intensity: 0.2, soft: 0.6, fall: 0.0 });

  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0, 0.1, 100, { size });
  pmrem.dispose();
  scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  return rt;
}
