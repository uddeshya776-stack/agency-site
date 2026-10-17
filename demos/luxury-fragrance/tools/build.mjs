// Bundles src/ into assets/js/: main.js loads with the page, the 3D bottle viewer is a
// separate chunk fetched after the intro.
// usage: node tools/build.mjs [--watch]
import { context } from 'esbuild';
import { rmSync, existsSync } from 'node:fs';

const watch = process.argv.includes('--watch');
rmSync('assets/js', { recursive: true, force: true });

// while the viewer is being written, a missing src/viewer/index.js becomes a stub that
// rejects, so the page falls back to its stills
const optionalViewer = {
  name: 'optional-viewer',
  setup(b) {
    b.onResolve({ filter: /\/viewer\/index\.js$/ }, (a) => (existsSync('src/viewer/index.js') ? undefined : { path: 'viewer-stub', namespace: 'stub' }));
    b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: 'export async function createBottleViewer(){ throw new Error("viewer not built"); }' }));
  },
};

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
  plugins: [optionalViewer],
});

if (watch) await ctx.watch();
else {
  await ctx.rebuild();
  await ctx.dispose();
}
