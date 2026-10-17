/* Procedural photographic studio for the bottle, baked twice from one scene:
   - a sharp cube map (glass is optically smooth: it reflects and refracts the studio as is),
   - a PMREM for the physically based cap, collar and engraving.
   Large soft scrims (body of the reflections), hot strip lights (long crisp highlights down
   the rounded glass edges), black flags (the dark refraction bands that define glass on a
   light backdrop), a warm key and a cool fill. Two moods: 'light' (bone studio) and 'dark'. */
import * as THREE from 'three';

const DEG = Math.PI / 180;

const panelVS = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const panelFS = /* glsl */`
uniform vec3 uColor; uniform float uSoft; uniform float uFall; uniform float uMul;
varying vec2 vUv;
void main(){
  vec2 q = abs(vUv - 0.5) * 2.0;
  float e = (1.0 - smoothstep(1.0 - uSoft, 1.0, q.x)) * (1.0 - smoothstep(1.0 - uSoft, 1.0, q.y));
  float grad = 1.0 - uFall * (vUv.y - 0.5) * 2.0 * 0.5 - uFall * 0.5 * q.y * q.y;
  // uMul = 1: additive light; uMul = 0: a flag that blocks what is behind it
  gl_FragColor = vec4(uColor * grad, e);
}`;

function panel(scene, { w, h, az, el, dist = 14, color, intensity = 1, soft = 0.25, fall = 0.2, roll = 0, flag = false }) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color[0], color[1], color[2]).multiplyScalar(intensity) },
      uSoft: { value: soft }, uFall: { value: fall }, uMul: { value: flag ? 0 : 1 },
    },
    vertexShader: panelVS, fragmentShader: panelFS,
    side: THREE.DoubleSide, transparent: true, depthWrite: false, depthTest: false,
    blending: flag ? THREE.NormalBlending : THREE.CustomBlending,
    blendSrc: THREE.SrcAlphaFactor, blendDst: THREE.OneFactor, blendEquation: THREE.AddEquation,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  const ce = Math.cos(el);
  m.position.set(Math.sin(az) * ce * dist, Math.sin(el) * dist, Math.cos(az) * ce * dist);
  m.lookAt(0, 0, 0);
  m.rotateZ(roll);
  m.renderOrder = flag ? 1 : 2;
  scene.add(m);
  return m;
}

const MOODS = {
  light: {
    top: [0.5, 0.48, 0.46], hor: [0.3, 0.28, 0.26], floor: [0.06, 0.055, 0.05], back: [0.7, 0.67, 0.63],
    flag: [0.006, 0.0055, 0.005], key: 3.4, strip: 10.0, fill: 1.2,
  },
  dark: {
    top: [0.022, 0.02, 0.019], hor: [0.035, 0.031, 0.028], floor: [0.012, 0.011, 0.01], back: [0.03, 0.026, 0.023],
    flag: [0.0, 0.0, 0.0], key: 3.6, strip: 11.0, fill: 0.9,
  },
};

function buildStudioScene(mood) {
  const M = MOODS[mood] || MOODS.light;
  const scene = new THREE.Scene();
  const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const cyc = new THREE.Mesh(
    new THREE.SphereGeometry(40, 64, 32),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, depthTest: false,
      uniforms: { uTop: { value: v3(M.top) }, uHor: { value: v3(M.hor) }, uFloor: { value: v3(M.floor) }, uBack: { value: v3(M.back) } },
      vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        uniform vec3 uTop, uHor, uFloor, uBack;
        varying vec3 vDir;
        void main(){
          vec3 d = normalize(vDir);
          vec3 c = d.y > 0.0 ? mix(uHor, uTop, smoothstep(0.0, 0.7, d.y)) : mix(uHor, uFloor, smoothstep(0.0, 0.25, -d.y));
          // the seamless sweep behind the bottle (-z) is the brightest wall
          float back = smoothstep(0.2, 0.95, -d.z) * (1.0 - smoothstep(0.1, 0.6, abs(d.y)));
          c = mix(c, uBack, back);
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  cyc.renderOrder = 0;
  scene.add(cyc);

  const warm = [1.0, 0.95, 0.88], neutral = [1.0, 0.985, 0.96], cool = [0.86, 0.92, 1.0];
  // black flags left and right of the set: the dark bands inside the glass edges
  panel(scene, { w: 7, h: 26, az: -64 * DEG, el: 0, color: M.flag, flag: true, soft: 0.3 });
  panel(scene, { w: 7, h: 26, az: 66 * DEG, el: 0, color: M.flag, flag: true, soft: 0.3 });
  panel(scene, { w: 12, h: 9, az: 180 * DEG, el: -28 * DEG, color: M.flag, flag: true, soft: 0.6 });
  // front strip just left of the lens: the tall soft highlight down the front face and the cap
  panel(scene, { w: 2.6, h: 16, az: -9 * DEG, el: 8 * DEG, color: neutral, intensity: M.key * 0.55, soft: 0.6, fall: 0.5 });
  // a second narrow strip right of the lens: a glancing band across the front face at rest
  panel(scene, { w: 1.3, h: 14, az: -23 * DEG, el: 4 * DEG, color: warm, intensity: M.strip * 0.32, soft: 0.45, fall: 0.4 });
  // key: a big warm softbox high front-left (the soft gradient across the front face)
  panel(scene, { w: 12, h: 9, az: -32 * DEG, el: 30 * DEG, color: warm, intensity: M.key, soft: 0.55, fall: 0.35 });
  // overhead scrim
  panel(scene, { w: 18, h: 14, az: 0, el: 84 * DEG, color: neutral, intensity: M.key * 0.55, soft: 0.7, fall: 0.1 });
  // cool fill right
  panel(scene, { w: 8, h: 12, az: 48 * DEG, el: 12 * DEG, color: cool, intensity: M.fill, soft: 0.7, fall: 0.3 });
  // hot strips: long crisp vertical highlights on the rounded edges
  panel(scene, { w: 1.1, h: 22, az: -102 * DEG, el: 4 * DEG, color: neutral, intensity: M.strip, soft: 0.22, fall: 0.25 });
  panel(scene, { w: 0.9, h: 22, az: 112 * DEG, el: 4 * DEG, color: warm, intensity: M.strip * 0.8, soft: 0.22, fall: 0.25 });
  // rims behind: bright lines refracted through the back edges
  panel(scene, { w: 0.8, h: 20, az: -152 * DEG, el: 6 * DEG, color: cool, intensity: M.strip * 0.7, soft: 0.25, fall: 0.3 });
  panel(scene, { w: 0.8, h: 20, az: 150 * DEG, el: 6 * DEG, color: warm, intensity: M.strip * 0.7, soft: 0.25, fall: 0.3 });
  // a low horizontal strip in front: a thin line along the top bevel and the collar
  panel(scene, { w: 16, h: 0.7, az: 10 * DEG, el: 14 * DEG, color: neutral, intensity: M.strip * 0.35, soft: 0.4, fall: 0.0 });
  return scene;
}

export function buildEnvironment(renderer, { mood = 'light', cubeSize = 256, pmremSize = 256 } = {}) {
  const scene = buildStudioScene(mood);
  const cubeRT = new THREE.WebGLCubeRenderTarget(cubeSize, {
    type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter,
  });
  const cubeCam = new THREE.CubeCamera(0.1, 100, cubeRT);
  const prevTarget = renderer.getRenderTarget();
  const prevTM = renderer.toneMapping;
  renderer.toneMapping = THREE.NoToneMapping;
  cubeCam.update(renderer, scene);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const pmremRT = pmrem.fromScene(scene, 0, 0.1, 100, { size: pmremSize });
  pmrem.dispose();
  renderer.toneMapping = prevTM;
  renderer.setRenderTarget(prevTarget);
  scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  return {
    cube: cubeRT.texture, pmrem: pmremRT.texture,
    dispose() { cubeRT.dispose(); pmremRT.dispose(); },
  };
}
