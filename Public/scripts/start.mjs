import http from 'http';
import path from 'path';
import { promises as fs } from 'fs';
import { distDir } from './shared.mjs';

const port = Number(process.env.PORT || 4173);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ttf': 'font/ttf',
};

function getSafeFilePath(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  const decodedPath = decodeURIComponent(url.pathname);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(distDir, normalizedPath === '/' ? 'index.html' : normalizedPath);

  if (!filePath.startsWith(distDir)) {
    return path.join(distDir, 'index.html');
  }

  return filePath;
}

async function readFile(filePath) {
  try {
    return await fs.readFile(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return fs.readFile(path.join(distDir, 'index.html'));
    }

    throw error;
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const filePath = getSafeFilePath(request.url || '/');
    const file = await readFile(filePath);
    const extension = path.extname(filePath);

    response.writeHead(200, {
      'Content-Type': contentTypes[extension] || 'application/octet-stream',
    });
    response.end(file);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Internal server error');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${distDir} on port ${port}`);
});
