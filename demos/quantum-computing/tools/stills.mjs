// Poster renderer: supersampled, maximum-quality PNG stills of the 3D scene (no grain),
// rendered through scene-test.html (?still=1) in headless Chromium.
//
// usage: node tools/stills.mjs [--out test/stills] [--ss 8] [--only 0,0p,4p] [--jobs 1]
//                              [--url http://localhost:8000/scene-test.html]
//
// Writes poster-<k>.png (2560x1440, chapters 0-7) and poster-<k>-portrait.png
// (1080x1920, chapters 0, 4, 7), chapter 0 in both orientations first; that is the
// naming tools/encode-stills.py expects. --only takes chapter numbers, with a 'p'
// suffix for the portrait version. Without --url the script serves the folder that
// holds node_modules/three (the import map in scene-test.html points at /node_modules)
// on a free local port. The default renderer is SwiftShader, so each still takes a
// few minutes; with a GPU, drop the --use-angle flag (PLAYWRIGHT_GPU=1).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(HERE, '..');

const argv = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = argv.indexOf('--' + name);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : dflt;
};
const OUT = path.resolve(process.cwd(), opt('out', path.join(SITE, 'test', 'stills')));
const SS = Math.max(1, Math.min(16, parseInt(opt('ss', '8'), 10) || 8));
const JOBS_N = Math.max(1, parseInt(opt('jobs', '1'), 10) || 1);
const TIMEOUT = parseInt(opt('timeout', '1200000'), 10);

const ALL = [
  { k: 0, portrait: false }, { k: 0, portrait: true },
  ...[1, 2, 3, 4, 5, 6, 7].map((k) => ({ k, portrait: false })),
  { k: 4, portrait: true }, { k: 7, portrait: true },
];
const only = opt('only', '');
const jobs = only
  ? only.split(',').map((s) => s.trim()).filter(Boolean).map((s) => ({ k: parseInt(s, 10), portrait: /p$/i.test(s) }))
    .filter((j) => ALL.some((a) => a.k === j.k && a.portrait === j.portrait))
  : ALL;

async function loadPlaywright() {
  const tries = [process.env.PLAYWRIGHT_PATH, 'playwright'].filter(Boolean);
  for (const p of tries) {
    try { return await import(p); } catch (e) { /* next */ }
  }
  throw new Error('playwright not found (set PLAYWRIGHT_PATH)');
}

// ---------------------------------------------------------------- local static server
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json',
  '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.wasm': 'application/wasm', '.hdr': 'application/octet-stream',
};
function findRoot() {
  let dir = SITE;
  for (let i = 0; i < 4; i++) {
    if (fs.existsSync(path.join(dir, 'node_modules', 'three', 'build', 'three.module.js'))) return dir;
    dir = path.dirname(dir);
  }
  throw new Error('node_modules/three not found above ' + SITE);
}
function serve(root) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      const file = path.join(root, path.normalize(rel).replace(/^([/\\])+/, ''));
      if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
      fs.stat(file, (err, st) => {
        if (err || !st.isFile()) { res.writeHead(404); res.end(); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        fs.createReadStream(file).pipe(res);
      });
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

// ---------------------------------------------------------------- render
async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  let base = opt('url', '');
  let server = null;
  if (!base) {
    const root = findRoot();
    server = await serve(root);
    const rel = path.relative(root, path.join(SITE, 'scene-test.html')).split(path.sep).join('/');
    base = `http://127.0.0.1:${server.address().port}/${rel}`;
  }
  console.log('scene:', base);
  console.log('out:  ', OUT);

  const { chromium } = await loadPlaywright();
  const args = process.env.PLAYWRIGHT_GPU ? ['--ignore-gpu-blocklist', '--enable-gpu'] : ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
  const browser = await chromium.launch({ args });

  const queue = jobs.slice();
  let failed = 0;
  async function worker() {
    while (queue.length) {
      const j = queue.shift();
      const W = j.portrait ? 1080 : 2560, H = j.portrait ? 1920 : 1440;
      const name = `poster-${j.k}${j.portrait ? '-portrait' : ''}.png`;
      const q = new URLSearchParams({ c: String(j.k), still: '1', ss: String(SS), frames: '3', tier: 'high' });
      if (j.portrait) q.set('mobile', '1');
      const t0 = Date.now();
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      try {
        await page.goto(`${base}?${q}`, { waitUntil: 'load' });
        await page.waitForFunction('window.__done === true', null, { timeout: TIMEOUT, polling: 500 });
        if (errors.length) throw new Error(errors.join(' | '));
        const file = path.join(OUT, name);
        await page.screenshot({ path: file, type: 'png', clip: { x: 0, y: 0, width: W, height: H } });
        const info = await page.evaluate(() => window.__info || {});
        console.log(`${name}  ${W}x${H}  ss ${SS}  ${((Date.now() - t0) / 1000).toFixed(0)} s  (${info.sceneTriangles || '?'} tris, build ${info.buildMs || '?'} ms)`);
      } catch (e) {
        failed++;
        console.error(`${name} FAILED: ${e.message}`);
      } finally {
        await ctx.close();
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(JOBS_N, jobs.length) }, worker));
  await browser.close();
  if (server) server.close();
  if (failed) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
