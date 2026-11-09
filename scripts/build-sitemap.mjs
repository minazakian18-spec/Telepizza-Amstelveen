// Maakt dist/sitemap.xml: alle indexeerbare pagina's met hreflang-alternates uit de <head> en lastmod.
// Draait automatisch na `npm run build`; los te draaien met `node scripts/build-sitemap.mjs [dist]`.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = process.argv[2] ?? 'dist';
const walk = d => readdirSync(d).flatMap(n => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const today = new Date().toISOString().slice(0, 10);
const urls = [];
for (const f of walk(out).filter(f => f.endsWith('.html'))) {
  const h = readFileSync(f, 'utf8');
  if (/name="robots" content="noindex/.test(h) || /http-equiv="refresh"/.test(h)) continue;
  const loc = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!loc || /\/(404|account)\b/.test(loc)) continue;
  const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => `    <xhtml:link rel="alternate" hreflang="${m[1]}" href="${m[2]}"/>`);
  urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alts.join('\n')}${alts.length ? '\n' : ''}  </url>`);
}
urls.sort();
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`sitemap.xml: ${urls.length} pagina's`);
