// Bundles src/ into assets/js/: main.js loads with the page, the 3D scene is a
// separate chunk fetched after the page has finished loading.
// usage: node tools/build.mjs [--watch]
import { context } from 'esbuild';
import { rmSync } from 'node:fs';

const watch = process.argv.includes('--watch');
rmSync('assets/js', { recursive: true, force: true });

const ctx = await context({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  splitting: true,
  outdir: 'assets/js',
  chunkNames: 'chunks/[name]-[hash]',
  minify: true,
  target: 'es2020',
  legalComments: 'eof',
  logLevel: 'info',
});

if (watch) await ctx.watch();
else {
  await ctx.rebuild();
  await ctx.dispose();
}
