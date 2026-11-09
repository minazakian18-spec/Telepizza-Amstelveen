// Zoekt woorden die in de tekstweergave aan het volgende element vastplakken:
// inline-elementen (span, b, a, small, ...) zonder spatie ertussen, kleine letter gevolgd door hoofdletter of cijfer.
const fs = require('fs'), path = require('path');
const dist = process.argv[2];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const block = 'p|div|li|ul|ol|h[1-6]|section|nav|header|footer|figure|figcaption|article|aside|main|dt|dd|dl|tr|td|th|table|br|form|label|details|summary|blockquote|button|select|option|textarea|input|img|svg';
const hits = {};
for (const f of walk(dist).filter(f => f.endsWith('.html'))) {
  const h = fs.readFileSync(f, 'utf8');
  if (h.includes('http-equiv="refresh"')) continue;
  let t = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(new RegExp(`<\\/?(?:${block})\\b[^>]*>`, 'gi'), ' ')
    .replace(/<[^>]+>/g, '\u0001')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'");
  for (const m of t.matchAll(/([a-zà-ÿ.!?’)]{2})\u0001+([A-Z0-9€])/g)) {
    const ctx = t.slice(Math.max(0, m.index - 25), m.index + 25).replace(/\u0001/g, '|').replace(/\s+/g, ' ');
    (hits[ctx] = hits[ctx] || []).push(path.relative(dist, f).split(path.sep).join('/'));
  }
}
const keys = Object.keys(hits);
for (const k of keys.slice(0, 40)) console.log(hits[k].length, JSON.stringify(k), hits[k][0]);
console.log('geplakt:', keys.length);
process.exitCode = keys.length ? 1 : 0;
