// Maakt dist/sitemap.xml: alle indexeerbare pagina's met hreflang-alternates uit de <head>, lastmod
// en <image:image> voor de gerecht- en sfeerfoto's op de pagina (zonder de kleine -sm-versies).
// Draait automatisch na `npm run build`; los te draaien met `node scripts/build-sitemap.mjs [dist]`.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = process.argv[2] ?? 'dist';
const walk = d => readdirSync(d).flatMap(n => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const today = new Date().toISOString().slice(0, 10);
const urls = [];
let images = 0;
for (const f of walk(out).filter(f => f.endsWith('.html'))) {
  const h = readFileSync(f, 'utf8');
  if (/name="robots" content="noindex/.test(h) || /http-equiv="refresh"/.test(h)) continue;
  const loc = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!loc || /\/(404|account)\b/.test(loc)) continue;
  const origin = new URL(loc).origin;
  const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => `    <xhtml:link rel="alternate" hreflang="${m[1]}" href="${m[2]}"/>`);
  const srcs = [...h.matchAll(/<img\b[^>]*\bsrc="(\/images\/(?:menu|ph|eigen|hero)\/[^"]+\.webp)"/g)].map(m => m[1]).filter(u => !u.includes('-sm.'));
  const imgs = [...new Set(srcs)].slice(0, 20).map(u => `    <image:image><image:loc>${origin}${u}</image:loc></image:image>`);
  images += imgs.length;
  const extra = [...alts, ...imgs];
  urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${extra.join('\n')}${extra.length ? '\n' : ''}  </url>`);
}
urls.sort();
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`sitemap.xml: ${urls.length} pagina's, ${images} afbeeldingen`);
