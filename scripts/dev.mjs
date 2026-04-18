import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';
import {
  cleanDist,
  prepareDist,
  buildOptions,
  distDir,
  htmlFiles,
  srcDir,
} from './shared.mjs';

async function run() {
  await cleanDist();
  await prepareDist();

  const context = await esbuild.context(buildOptions({ watch: true }));
  await context.watch();

  const server = await context.serve({
    servedir: distDir,
    host: '0.0.0.0',
    port: 4173,
  });

  fs.watch(srcDir, async (eventType, filename) => {
    if (eventType === 'change' && htmlFiles.includes(filename)) {
      await prepareDist();
      console.log(`Updated dist/${filename}`);
    }
  });

  console.log(`Dev server running at http://${server.host}:${server.port}`);

  const shutdown = async () => {
    await context.dispose();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
