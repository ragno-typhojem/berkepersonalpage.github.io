import { cp, mkdir, rm, lstat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { check, root } from './check.mjs';

await check();
const destination = resolve(root, 'dist');
try {
  if ((await lstat(destination)).isSymbolicLink()) throw new Error('Refusing to replace a symlinked build directory.');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'stylesheet.css', 'script.js', 'assets', 'photosrc', 'CV_MustafaBerkeSimsekler.pdf', 'CV_MustafaBerkeSimsekler.docx', 'sitemap.xml', 'robots.txt', '.nojekyll']) {
  await cp(resolve(root, file), resolve(destination, file), { recursive: true });
}
console.log('Static build ready in dist/. GitHub Pages continues to serve the repository root; no deployment configuration was changed.');
