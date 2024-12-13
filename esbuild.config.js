const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    outdir: 'dist',
    plugins: [svgrPlugin()],
  })
  .catch(() => process.exit(1));
