/* GLSL shared by the glass, the ground and the backdrop halo, so that what the glass refracts
   (shadow, caustic, halo, backdrop colour) is exactly what is drawn around it. */

export const NOISE = /* glsl */`
float hash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash13(i), b = hash13(i + vec3(1,0,0)), c = hash13(i + vec3(0,1,0)), d = hash13(i + vec3(1,1,0));
  float e = hash13(i + vec3(0,0,1)), g = hash13(i + vec3(1,0,1)), h = hash13(i + vec3(0,1,1)), k = hash13(i + vec3(1,1,1));
  return mix(mix(mix(a,b,f.x), mix(c,d,f.x), f.y), mix(mix(e,g,f.x), mix(h,k,f.x), f.y), f.z);
}
float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++){ s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`;

/* Ground plane at local y = 0: contact shadow, a long soft key shadow, and the caustic the
   liquid focuses behind the bottle. p is in bottle-local units (cm, before the size scale). */
export const GROUND = /* glsl */`
uniform vec2 uShadowOff;      // key-light shadow offset, local xz
uniform float uShadowAmt;     // overall strength (theme)
uniform vec3 uCaustic;        // caustic colour * intensity (pre-tonemap linear)
uniform float uCapLift;       // the floating cap softens nothing on the ground, kept for symmetry
float sdRR2(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
// returns x: shadow (0..1, multiplies the backdrop), y: caustic weight
vec2 groundTerms(vec2 p){
  float sd = sdRR2(p, vec2(3.1, 1.7), 0.9);
  float outside = smoothstep(-0.25, 0.05, sd);
  // tight contact line and ambient occlusion right at the foot (light passes through the glass,
  // so under the bottle itself the ground stays fairly bright)
  float contact = exp(-abs(sd) * 10.0) * 0.5 + exp(-max(sd, 0.0) * 1.5) * 0.18 * outside + 0.05 * (1.0 - outside);
  // a long soft shadow cast away from the key, widening with distance
  float L = length(uShadowOff) + 1e-3;
  vec2 dir = uShadowOff / L;
  vec2 q = p - uShadowOff * 0.6;
  float along = max(dot(p, dir), 0.0);
  float spread = 0.7 + min(along, 8.0) * 0.35;
  float sd2 = sdRR2(q, vec2(3.1, 1.7) + abs(dir) * L * 0.45, 1.5);
  float soft = (1.0 - smoothstep(-spread, spread * 1.8, sd2)) * 0.26 * outside * exp(-along * 0.09) * (1.0 - smoothstep(4.0, 9.0, length(p) - L));
  float sh = clamp(contact + soft, 0.0, 0.9) * uShadowAmt;
  // caustic: the liquid focuses the key into a rippled lens of coloured light inside the shadow
  vec2 c = p - uShadowOff * 1.1;
  float sdc = sdRR2(c * vec2(1.0, 1.3), vec2(2.3, 0.85), 0.8);
  float ring = exp(-pow((sdc + 0.3) / 0.45, 2.0));
  float core = (1.0 - smoothstep(-1.4, 0.2, sdc)) * 0.5;
  float rip = 0.7 + 0.3 * sin(c.x * 4.1 + sin(c.y * 2.7 + c.x) * 2.2) * sin(c.y * 5.3 - c.x * 1.7);
  float caus = (ring * 0.7 + core) * rip * outside + 0.1 * (1.0 - outside);
  return vec2(sh, caus);
}
`;

/* Soft pool of light on the backdrop, centred behind the bottle (screen space, so a ray that
   leaves the glass picks up the same glow the viewer sees around the bottle). */
export const HALO = /* glsl */`
uniform vec3 uBg;             // backdrop colour, pre-tonemap linear (tone-maps to the page colour)
uniform vec3 uHaloCol;        // pool of light colour * intensity
uniform vec3 uHaloPos;        // ndc centre (xy), z: radius in ndc-y units
uniform mat4 uViewProj;
uniform float uAspect;
vec3 haloAtNdc(vec2 ndc){
  vec2 d = (ndc - uHaloPos.xy) * vec2(uAspect, 1.0);
  float r2 = dot(d, d) / (uHaloPos.z * uHaloPos.z);
  return uHaloCol * (exp(-r2 * 1.6) * 0.85 + exp(-r2 * 0.5) * 0.15);
}
vec3 haloDir(vec3 worldPos, vec3 dir){
  vec4 c = uViewProj * vec4(worldPos + dir * 400.0, 1.0);
  if (c.w <= 0.0) return vec3(0.0);
  return haloAtNdc(c.xy / c.w);
}
`;
