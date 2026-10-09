import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = 'https://ragno-typhojem.github.io/berkepersonalpage.github.io/';
const assert = (condition, message) => { if (!condition) throw new Error(message); };

export async function check() {
  const [html, css, js, sitemap] = await Promise.all(['index.html', 'stylesheet.css', 'script.js', 'sitemap.xml'].map(file => readFile(resolve(root, file), 'utf8')));
  assert((html.match(/<h1\b/g) || []).length === 1, 'The page must have one primary heading.');
  assert(html.includes(`<link rel="canonical" href="${siteUrl}">`), 'The canonical URL must remain the existing GitHub Pages site.');
  assert(sitemap.includes(`<loc>${siteUrl}</loc>`), 'The sitemap must point to the existing site.');
  assert(!/\son\w+=/i.test(html), 'Use accessible event listeners instead of inline handlers.');
  assert(!/@import|url\(["']?https?:/i.test(css), 'Fonts and runtime assets must be self-hosted.');
  new Script(js, { filename: 'script.js' });

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert(ids.length === new Set(ids).size, 'Duplicate HTML IDs.');
  const resources = new Set(['CV_MustafaBerkeSimsekler.pdf', 'assets/images/social-preview.jpg']);
  for (const [, value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (value.startsWith('#')) assert(ids.includes(value.slice(1)), `Missing anchor: ${value}`);
    else if (!/^(https?:|mailto:|data:)/i.test(value)) resources.add(value);
  }
  for (const [, value] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    value.split(',').forEach(candidate => resources.add(candidate.trim().split(/\s+/)[0]));
  }
  for (const [, value] of css.matchAll(/url\("([^"]+)"\)/g)) resources.add(value);
  await Promise.all([...resources].map(async file => {
    const path = resolve(root, file);
    assert(path.startsWith(root + '/'), `Asset escapes the site: ${file}`);
    assert((await stat(path)).isFile(), `Missing local resource: ${file}`);
  }));
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt=/.test(tag[0]), 'Every image needs alternative text.');
    assert(/\bwidth=/.test(tag[0]) && /\bheight=/.test(tag[0]), 'Every image needs dimensions to reserve layout space.');
  }
  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert(/rel="[^"]*noopener/.test(tag[0]), 'External tabs must use noopener.');
  }
  const structured = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
  assert(structured.mainEntity.name === 'Mustafa Berke Şimşekler', 'Invalid structured profile.');
  const dictionary = new Script(`(${js.match(/const turkish = (\{[\s\S]+?\n  \});/)[1]})`).runInNewContext();
  const keys = new Set([...html.matchAll(/data-(?:i18n(?:-alt|-aria)?|caption-key|alt)="([^"]+)"/g)].map(match => match[1]));
  for (const key of keys) assert(typeof dictionary[key] === 'string' && dictionary[key].length, `Missing Turkish translation: ${key}`);
  assert(Buffer.byteLength(js) < 30000, 'JavaScript exceeds the 30 kB budget.');
  assert(Buffer.byteLength(css) < 35000, 'CSS exceeds the 35 kB budget.');
  let assetBytes = 0;
  for (const folder of ['assets/images', 'assets/fonts', 'assets/illustrations']) {
    for (const file of await readdir(resolve(root, folder))) assetBytes += (await stat(resolve(root, folder, file))).size;
  }
  assert(assetBytes < 1500000, 'Optimized media exceeds the 1.5 MB budget.');
  console.log(`Static checks passed: ${resources.size} local resources, ${keys.size} translated labels, metadata, anchors, JavaScript and media budgets.`);
  return { resources: resources.size, translations: keys.size, assetBytes };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await check();
}
