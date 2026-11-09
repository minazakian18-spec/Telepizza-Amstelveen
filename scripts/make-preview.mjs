// Maakt van de productiebuild (dist/) een preview voor GitHub Pages onder /Telepizza-Amstelveen/.
// Gebruik: npm run build:preview   (of: node scripts/make-preview.mjs dist dist-preview /Telepizza-Amstelveen)
// - zet het submap-pad voor alle interne links, afbeeldingen, srcset en CSS-url's
// - canonicals en og:url blijven naar https://telepizza-amstelveen.nl wijzen
// - robots.txt: Disallow: / (de preview hoort niet in Google)
// - geen CNAME en geen .htaccess (anders schakelt Pages naar het eigen domein)
import { rmSync, cpSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [src = 'dist', out = 'dist-preview', base = '/Telepizza-Amstelveen'] = process.argv.slice(2);
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });
const fixSet = v => v.split(',').map(p => p.trim().replace(/^\/(?!\/)/, base + '/')).join(', ');
const walk = d => readdirSync(d).flatMap(n => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
let n = 0;
for (const f of walk(out)) {
  if (!/\.(html|css|js)$/.test(f)) continue;
  let s = readFileSync(f, 'utf8');
  const before = s;
  s = s.replace(/\b(href|src|action|data-src|poster)="\/(?!\/)/g, `$1="${base}/`);
  s = s.replace(/\b(srcset|imagesrcset)="([^"]*)"/g, (m, a, v) => `${a}="${fixSet(v)}"`);
  s = s.replace(/content="0;url=\/(?!\/)/g, `content="0;url=${base}/`);
  s = s.replace(/url\(\s*(['"]?)\/(?!\/)/g, `url($1${base}/`);
  if (s !== before) { writeFileSync(f, s); n++; }
}
writeFileSync(join(out, '.nojekyll'), '');
rmSync(join(out, '.htaccess'), { force: true });
rmSync(join(out, 'CNAME'), { force: true });
writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`preview in ${out}: ${n} bestanden aangepast (basispad ${base})`);
