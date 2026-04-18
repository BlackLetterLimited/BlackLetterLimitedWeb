import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

export const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const rootDir = path.resolve(scriptDir, '..');
export const srcDir = path.join(rootDir, 'src');
export const distDir = path.join(rootDir, 'dist');
export const htmlFiles = ['index.html', 'capability-statement.html'];

export const buildOptions = ({ watch = false } = {}) => ({
  entryPoints: [
    path.join(srcDir, 'main.jsx'),
    path.join(srcDir, 'styles.css'),
  ],
  outdir: path.join(distDir, 'assets'),
  bundle: true,
  format: 'esm',
  minify: !watch,
  sourcemap: watch,
  entryNames: '[name]',
  assetNames: '[name]',
  loader: {
    '.ttf': 'file',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      watch ? 'development' : 'production',
    ),
  },
  logLevel: 'info',
});

export async function prepareDist() {
  await fs.mkdir(distDir, { recursive: true });
  for (const htmlFile of htmlFiles) {
    await fs.copyFile(path.join(srcDir, htmlFile), path.join(distDir, htmlFile));
  }

  for (const assetName of ['BL Logo.png', 'BLSimple.jpeg', 'BLWhite.png', 'BLWhiteCrop.png', 'ARAI.png', 'CMApp.png']) {
    await fs.copyFile(path.join(rootDir, assetName), path.join(distDir, assetName));
  }
}

export async function cleanDist() {
  await fs.rm(distDir, { recursive: true, force: true });
}
