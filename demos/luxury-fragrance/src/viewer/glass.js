/* The glass body, ray traced in its own fragment shader.
   The mesh is the exact outer surface (roundedPrism); each fragment refines onto a signed
   distance field of the bottle and follows the light path through it: glass (IOR 1.5, faint warm
   absorption), the inner cavity filled with liquid (IOR 1.36, Beer-Lambert absorption from the
   scent colour) up to a meniscus, the air pocket and neck above it, the dip tube, total internal
   reflection, Fresnel splits at every interface, and a last refraction into the studio: the
   backdrop colour of the page, the pool of light behind the bottle, the contact shadow and the
   caustic on the ground. The front print is enamel on the outer face, so it is drawn here too.
   Everything is in bottle-local space (cm, origin at the centre of the bottom face). */
import * as THREE from 'three';
import { NOISE, GROUND, HALO } from './chunks.js';
import { BOTTLE } from './geometry.js';

const VS = /* glsl */`
varying vec3 vLocal;
void main(){
  vLocal = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const FS = /* glsl */`
precision highp float;
uniform samplerCube uEnv;
uniform mat3 uEnvRot;
uniform float uEnvInt;
uniform vec3 uCamLocal;
uniform mat3 uRot;            // bottle rotation (local -> world directions)
uniform float uScale;
uniform vec3 uBottlePos;
uniform vec3 uSigA, uSigB;    // liquid absorption (1/cm): previous and current scent
uniform float uFront;         // scent change: height of the rising front (cm), > 8 when done
uniform float uSwirl;         // 0..1 strength of the swirl during a change
uniform float uTime;
uniform float uLevel;
uniform float uScatter;
uniform float uSigMul;        // theme: liquids read lighter against a dark backdrop
uniform vec3 uGlassSig;
uniform sampler2D uDecalA, uDecalB;
uniform float uDecalMix;
uniform vec3 uInk;
uniform float uIrr;
uniform vec3 uSweepN, uSweepF;
uniform float uSweepInt;
uniform float uDebug;
uniform float uRefrEnv;       // how much of the studio deviated rays see (vs the backdrop)
varying vec3 vLocal;
${NOISE}
${GROUND}
${HALO}

const float IOR_G = 1.5, IOR_L = 1.36;

float sdRR(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
float sdPrism(vec3 p, float cy, vec3 he, float r, float rb){
  vec3 q = p - vec3(0.0, cy, 0.0);
  float d2 = sdRR(q.xz, he.xz, r);
  vec2 w = vec2(d2 + rb, abs(q.y) - he.y + rb);
  return min(max(w.x, w.y), 0.0) + length(max(w, 0.0)) - rb;
}
float sdOuter(vec3 p){ return sdPrism(p, 4.0, vec3(3.1, 4.0, 1.7), 0.9, 0.25); }
float sdCav(vec3 p){ return sdPrism(p, 4.475, vec3(2.65, 3.075, 1.25), 0.45, 0.35); }
float sdNeck(vec3 p){ return max(length(p.xz) - 0.55, abs(p.y - 7.85) - 0.45); }
float sdCavN(vec3 p){ return min(sdCav(p), sdNeck(p)); }
float lev(vec3 p){ return uLevel + 0.085 * exp(-max(-sdCav(p), 0.0) / 0.075); }
float sdById(vec3 p, int id){
  if (id == 0) return sdOuter(p);
  if (id == 1) return sdCavN(p);
  if (id == 2) return sdCav(p);
  return p.y - lev(p);           // 3: liquid surface (negative below)
}
vec3 gradOf(vec3 p, int id){
  const vec2 k = vec2(1.0, -1.0) * 0.0015;
  return normalize(k.xyy * sdById(p + k.xyy, id) + k.yyx * sdById(p + k.yyx, id) + k.yxy * sdById(p + k.yxy, id) + k.xxx * sdById(p + k.xxx, id));
}
float medSD(vec3 p, int m){
  if (m == 1) return max(sdOuter(p), -sdCavN(p));
  if (m == 2) return max(sdCav(p), p.y - lev(p));
  return max(sdCavN(p), lev(p) - p.y);
}

float fresnelD(float ci, float eta){
  ci = clamp(ci, 0.0, 1.0);
  float st2 = eta * eta * (1.0 - ci * ci);
  if (st2 >= 1.0) return 1.0;
  float ct = sqrt(1.0 - st2);
  float rs = (eta * ci - ct) / (eta * ci + ct);
  float rp = (ci - eta * ct) / (ci + eta * ct);
  return 0.5 * (rs * rs + rp * rp);
}

vec3 toWorld(vec3 p){ return uRot * (p * uScale) + uBottlePos; }

vec3 env(vec3 dL){
  vec3 dW = uRot * dL;
  vec3 c = textureLod(uEnv, uEnvRot * dW, 0.0).rgb * uEnvInt;
  // the moving strip light of the light sweep (hero and intro)
  float s = dot(dW, uSweepN);
  float face = smoothstep(-0.1, 0.5, dot(dW, uSweepF));
  c += uSweepInt * face * (exp(-s * s / 0.005) * 1.0 + exp(-s * s / 0.06) * 0.15) * smoothstep(-0.6, 0.2, dW.y) * vec3(1.0, 0.97, 0.92);
  return c;
}

// what a ray leaving the glass sees (pre-tonemap linear, premultiplied over the backdrop)
vec3 background(vec3 p, vec3 dL, vec3 rd0W){
  vec3 dW = uRot * dL;
  if (dL.y < -0.002) {
    float t = max(p.y, 0.0) / -dL.y;
    if (t < 80.0) {
      vec3 g = p + dL * t;
      vec2 gt = groundTerms(g.xz);
      vec3 gw = toWorld(g);
      vec4 c = uViewProj * vec4(gw, 1.0);
      vec3 halo = c.w > 0.0 ? haloAtNdc(c.xy / c.w) : vec3(0.0);
      return uCaustic * gt.y + (1.0 - gt.x) * (uBg + halo);
    }
  }
  vec3 back = uBg + haloDir(toWorld(p), dW);
  float w = smoothstep(0.82, 0.985, dot(dW, rd0W));
  return mix(env(dL) * uRefrEnv, back, w);
}

vec3 liquidSigma(vec3 p){
  if (uSwirl < 0.001) return uSigB;
  vec3 q = p * vec3(0.9, 0.55, 0.9) + vec3(0.0, -uTime * 0.6, uTime * 0.25);
  float n = fbm3(q) + 0.5 * fbm3(q * 2.3 + 3.1);
  float swirlR = length(p.xz);
  float f = clamp((uFront - p.y + (n - 0.75) * 2.2 + sin(atan(p.z, p.x) * 2.0 + uTime * 2.0 + p.y) * 0.25 * swirlR) / 0.9 + 0.5, 0.0, 1.0);
  return mix(uSigA, uSigB, f);
}

float max3(vec3 v){ return max(v.x, max(v.y, v.z)); }

vec3 shade(vec3 entry, out float cplx, out vec3 nEntry, out vec3 pEntry){
  vec3 ro = uCamLocal;
  vec3 rd = normalize(entry - ro);
  vec3 rd0W = normalize(uRot * rd);
  if (uDebug > 2.5) { cplx = 0.0; nEntry = vec3(0.0); pEntry = entry; return background(entry, rd, rd0W); }
  // refine onto the distance field
  vec3 p = entry - rd * 0.06;
  for (int i = 0; i < 10; i++) { float d = sdOuter(p); p += rd * d; if (abs(d) < 0.0004) break; }
  if (sdOuter(p) > 0.02) p = entry;
  vec3 n = gradOf(p, 0);
  float ci = max(dot(-rd, n), 0.0);
  float F = fresnelD(ci, 1.0 / IOR_G);
  vec3 rdR = reflect(rd, n);
  vec3 acc = env(rdR) * F;
  vec3 tp = vec3(1.0 - F);

  nEntry = n; pEntry = p;
  vec3 rdR0 = rdR;
  rd = refract(rd, n, 1.0 / IOR_G);
  int med = 1;
  bool done = false;
  int nev = 0; int nomiss = 1;
  vec3 pushN = -n;   // nudges each march start off the surface, into the medium it travels in
  for (int e = 0; e < EVENTS; e++) {
    nev = e;
    vec3 p0 = p + pushN * 0.004 + rd * 0.006;
    vec3 q = p0;
    float tt = 0.0;
    bool hit = false;
    float prevT = 0.0;
    for (int i = 0; i < MAX_STEPS; i++) {
      float d = medSD(q, med);
      if (d > -0.0012 && tt > 0.015) {
        // bracketed: bisect between the last inside sample and this one
        float a = prevT, b = tt;
        for (int k = 0; k < 6; k++) { float m = 0.5 * (a + b); if (medSD(p0 + rd * m, med) > -0.0012) b = m; else a = m; }
        tt = b; q = p0 + rd * tt;
        hit = true; break;
      }
      prevT = tt;
      float st = max(-d * 0.95, min(0.008 + tt * 0.04, 0.12));
      q += rd * st; tt += st;
    }
    float seg = tt + 0.006;
    if (med == 1) {
      tp *= exp(-uGlassSig * seg);
    } else {
      if (med == 2) {
        vec3 sig;
        if (uSwirl < 0.001) sig = uSigB;
        else sig = (liquidSigma(p0 + rd * seg * 0.2) + liquidSigma(p0 + rd * seg * 0.5) + liquidSigma(p0 + rd * seg * 0.8)) / 3.0;
        sig *= uSigMul;
        vec3 tcol = exp(-sig * 1.3);
        vec3 trans = exp(-sig * seg);
        // light scattered toward the eye inside the liquid gives it body on dark backdrops
        float chroma = max3(tcol) - min(tcol.x, min(tcol.y, tcol.z));
        acc += tp * tcol * uScatter * (chroma + 0.08) * (1.0 - exp(-seg * 0.45)) * uIrr;
        if (uSwirl > 0.001) {
          float fm = uFront - (p0.y + rd.y * seg * 0.5);
          acc += tp * tcol * uSwirl * 0.22 * exp(-fm * fm / 0.35) * uIrr;
        }
        tp *= trans;
      }
      // dip tube: a thin clear tube on the axis, read by its two bright edges
      vec2 a2 = rd.xz;
      float aa = dot(a2, a2);
      if (aa > 1e-4) {
        float tc = clamp(-dot(p0.xz, a2) / aa, 0.0, seg);
        float dist = length(p0.xz + a2 * tc);
        float yc = p0.y + rd.y * tc;
        if (yc > 1.6 && yc < 8.0 && dist < 0.2) {
          float edge = exp(-pow((dist - 0.085) / 0.022, 2.0));
          acc += tp * edge * 0.55 * uIrr;
          tp *= 1.0 - 0.14 * step(dist, 0.11);
        }
      }
    }
    if (!hit) { nomiss = 0; p = q - pushN * 0.004 - rd * 0.006; continue; }   // long grazing run: keep marching
    p = q;
    int nxt; vec3 nO; float n1, n2;
    if (med == 1) {
      n1 = IOR_G;
      if (abs(sdOuter(p)) < abs(sdCavN(p))) { nxt = 0; nO = gradOf(p, 0); n2 = 1.0; }
      else { nO = -gradOf(p, 1); if (p.y < lev(p) && p.y < 7.2) { nxt = 2; n2 = IOR_L; } else { nxt = 3; n2 = 1.0; } }
    } else if (med == 2) {
      n1 = IOR_L;
      if (abs(p.y - lev(p)) < abs(sdCav(p))) { nxt = 3; nO = gradOf(p, 3); n2 = 1.0; }
      else { nxt = 1; nO = gradOf(p, 2); n2 = IOR_G; }
    } else {
      n1 = 1.0;
      if (p.y > 7.95) {   // up the neck: the dark underside of the gold collar
        acc += tp * vec3(0.10, 0.075, 0.04) * uIrr;
        tp = vec3(0.0); done = true; break;
      }
      if (abs(lev(p) - p.y) < abs(sdCavN(p)) && p.y < 7.0) { nxt = 2; nO = -gradOf(p, 3); n2 = IOR_L; }
      else { nxt = 1; nO = gradOf(p, 1); n2 = IOR_G; }
    }
    float c = dot(rd, nO);
    float eta = n1 / n2;
    vec3 rt = refract(rd, -nO, eta);
    if (dot(rt, rt) < 1e-4) { rd = reflect(rd, nO); pushN = -nO; continue; }   // total internal reflection
    float Fr = fresnelD(c, eta);
    if (nxt == 0) {
      vec3 b;
#ifdef DISPERSION
      vec3 rr = refract(rd, -nO, (IOR_G - 0.014) / n2);
      vec3 rb = refract(rd, -nO, (IOR_G + 0.014) / n2);
      b = vec3(dot(rr, rr) > 1e-4 ? background(p, rr, rd0W).r : background(p, rt, rd0W).r,
               background(p, rt, rd0W).g,
               dot(rb, rb) > 1e-4 ? background(p, rb, rd0W).b : background(p, rt, rd0W).b);
#else
      b = background(p, rt, rd0W);
#endif
      acc += tp * (1.0 - Fr) * b;
      tp *= Fr;
      rd = reflect(rd, nO);
      pushN = -nO;
      if (max3(tp) < 0.08) { done = true; break; }
      continue;
    }
    tp *= 1.0 - Fr;
    rd = rt;
    pushN = nO;
    med = nxt;
  }
  // trapped light (many internal bounces): a smooth average of the studio, so edges never sparkle
  if (!done) acc += tp * uBg * 0.72;
  cplx = float(nev) + (done ? 0.0 : 6.0) + (nomiss == 1 ? 0.0 : 6.0);
  return acc;
}

void main(){
  vec3 dx = dFdx(vLocal), dy = dFdy(vLocal);
  float cx; vec3 n, p;
  vec3 col = shade(vLocal, cx, n, p);
#if SSAA > 1
  // complex light paths (many bounces near edges): supersample within the pixel
  if (cx >= 4.0) {
    float c2; vec3 n2, p2;
#if SSAA > 2
    col += shade(vLocal + dx * 0.375 + dy * 0.125, c2, n2, p2);
    col += shade(vLocal - dx * 0.125 + dy * 0.375, c2, n2, p2);
    col += shade(vLocal - dx * 0.375 - dy * 0.125, c2, n2, p2);
    col *= 0.25;
#else
    col += shade(vLocal + dx * 0.35 - dy * 0.35, c2, n2, p2);
    col *= 0.5;
#endif
  }
#endif
  // enamel print on the front face (mixed over the whole light path it covers)
  if (n.z > 0.97 && p.z > 1.6) {
    vec2 duv = vec2((p.x + 2.6) / 5.2, (p.y - 1.5) / 5.2);
    if (duv.x > 0.0 && duv.x < 1.0 && duv.y > 0.0 && duv.y < 1.0) {
      vec2 gx = dFdx(duv), gy = dFdy(duv);
      float a = mix(textureGrad(uDecalA, duv, gx, gy).a, textureGrad(uDecalB, duv, gx, gy).a, uDecalMix);
      vec3 rd = normalize(p - uCamLocal);
      vec3 ink = uInk * uIrr + env(reflect(rd, n)) * 0.07;
      col = mix(col, ink, a);
    }
  }
  if (uDebug > 0.5 && uDebug < 2.5) col = vec3(cx / float(EVENTS), 0.5, 0.5);
  gl_FragColor = vec4(col, 1.0);
}`;

export function createGlassMaterial({ tier, env, decalA, decalB }) {
  const q = tier.name;
  const defines = {
    MAX_STEPS: q === "high" ? 80 : q === "mid" ? 60 : 44,
    EVENTS: q === "high" ? 16 : q === "mid" ? 12 : 8,
  };
  if (q === 'high') defines.DISPERSION = 1;
  defines.SSAA = q === 'high' ? 4 : q === 'mid' ? 2 : 1;
  const uniforms = {
    uEnv: { value: env },
    uEnvRot: { value: new THREE.Matrix3() },
    uEnvInt: { value: 1 },
    uCamLocal: { value: new THREE.Vector3() },
    uRot: { value: new THREE.Matrix3() },
    uScale: { value: 1 },
    uBottlePos: { value: new THREE.Vector3() },
    uSigA: { value: new THREE.Vector3() },
    uSigB: { value: new THREE.Vector3() },
    uFront: { value: 20 },
    uSwirl: { value: 0 },
    uTime: { value: 0 },
    uLevel: { value: BOTTLE.liquidTop },
    uScatter: { value: 0.2 },
    uSigMul: { value: 1 },
    uGlassSig: { value: new THREE.Vector3(0.006, 0.009, 0.016) },
    uDecalA: { value: decalA },
    uDecalB: { value: decalB },
    uDecalMix: { value: 1 },
    uInk: { value: new THREE.Color(0.92, 0.86, 0.74) },
    uIrr: { value: 1 },
    uSweepN: { value: new THREE.Vector3(1, 0, 0) },
    uSweepF: { value: new THREE.Vector3(0, 0, 1) },
    uSweepInt: { value: 0 },
    uRefrEnv: { value: 1 },
    uDebug: { value: 0 },
  };
  return new THREE.ShaderMaterial({ uniforms, defines, vertexShader: VS, fragmentShader: FS });
}

/* Absorption coefficients (1/cm) that make ~2.5 cm of liquid read as the scent colour. */
export function sigmaFromColor(hex, out = new THREE.Vector3(), depth = 2.4, density = 1) {
  const c = new THREE.Color(hex);   // linear (ColorManagement converts the sRGB hex)
  const f = (v) => -Math.log(Math.max(0.004, Math.min(0.999, v))) / depth * density;
  return out.set(f(c.r), f(c.g), f(c.b));
}
