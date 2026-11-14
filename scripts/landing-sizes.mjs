// Maakt een mobiele versie (760 px breed) van de hero-foto's van de landingspagina's: <naam>-m.webp.
import sharp from 'sharp';
import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import { join } from 'path';
const pages = ['src/pages', 'src/pages/en'].flatMap(d => readdirSync(d).filter(f => f.endsWith('.astro')).map(f => join(d, f)));
const imgs = new Set(pages.flatMap(p => [...readFileSync(p, 'utf8').matchAll(/\bimg="(\/images\/[^"]+\.webp)"/g)].map(m => m[1])));
for (const i of imgs) {
  const src = join('public', i), out = src.replace(/\.webp$/, '-m.webp');
  if (!existsSync(src)) continue;
  await sharp(src).resize({ width: 760, withoutEnlargement: true }).webp({ quality: 68, effort: 6 }).toFile(out);
  console.log(out, Math.round(statSync(src).size / 1024) + ' KB ->', Math.round(statSync(out).size / 1024) + ' KB');
}
