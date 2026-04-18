import * as esbuild from 'esbuild';
import { cleanDist, prepareDist, buildOptions } from './shared.mjs';

async function run() {
  await cleanDist();
  await prepareDist();
  await esbuild.build(buildOptions());
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
