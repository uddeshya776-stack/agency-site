// Renders the link preview card (tools/og.html) to assets/img/og-image.jpg.
// usage: node tools/og.mjs [http://127.0.0.1:8000/] [background image path, relative to tools/] [object-position]
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://127.0.0.1:8000/';
const bg = process.argv[3] || '../assets/img/poster-0-1920.webp';
const pos = process.argv[4] || '64% 46%';
const out = process.argv[5] || 'assets/img/og-image.jpg';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(`${base}tools/og.html?bg=${encodeURIComponent(bg)}&pos=${encodeURIComponent(pos)}`);
await page.waitForFunction(() => window.__done === true, null, { timeout: 20000 });
await page.locator('.card').screenshot({ path: out, type: 'jpeg', quality: 88 });
await browser.close();
console.log('saved', out);
