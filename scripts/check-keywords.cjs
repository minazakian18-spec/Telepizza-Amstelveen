// Zoekwoordcontrole (zie KEYWORDS.md):
// 1. elk zoekwoord heeft precies één doelpagina, met alle woorden van het zoekwoord in de title of H1;
//    geen andere pagina in dezelfde taal heeft de exacte zoekterm in title of H1 (tenzij een eigen, langer zoekwoord dat verklaart);
// 2. geen dubbele titles;
// 3. nieuwe pagina's hebben minstens 500 woorden unieke tekst (zinnen die op geen andere pagina staan).
const fs = require('fs'), path = require('path');
const dist = process.argv[2] || 'dist';
const kws = JSON.parse(fs.readFileSync(path.join(__dirname, 'keywords.json'), 'utf8'));
const pages = {};
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f === 'index.html') { const rel = '/' + path.relative(dist, d).split(path.sep).join('/') + '/'; pages[rel.replace('//', '/')] = fs.readFileSync(p, 'utf8'); } } })(dist);
const norm = s => s.toLowerCase().replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9à-ÿ]+/g, ' ').trim();
const info = {};
for (const [u, h] of Object.entries(pages)) {
  if (/noindex/.test((h.match(/<meta name="robots"[^>]*>/) || [''])[0])) continue;
  const t = (h.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1], h1 = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1];
  info[u] = { title: t, th: norm(t + ' | ' + h1), lang: (u.match(/^\/(en|de|fr|it|es|tr|ar)\//) || [, 'nl'])[1] };
}
const errs = [];
const words = kw => kw.replace(/\(.*\)/, '').trim().split(' ').filter(w => w !== 'beste');
const hasAll = (th, kw) => { const ws = th.split(' '); return words(kw).every(w => ws.some(x => x.startsWith(w.slice(0, Math.min(w.length, 6))))); };
const phrase = kw => ' ' + kw.replace(/\(.*\)/, '').trim() + ' ';
for (const k of kws) {
  const p = info[k.page];
  if (!p) { errs.push(`zoekwoord "${k.kw}": doelpagina ${k.page} bestaat niet`); continue; }
  if (!hasAll(p.th, k.kw)) errs.push(`zoekwoord "${k.kw}": niet in title/H1 van ${k.page}`);
  for (const [u, o] of Object.entries(info)) {
    if (u === k.page || o.lang !== p.lang || u.startsWith('/blog/')) continue;
    if ((' ' + o.th + ' ').includes(phrase(k.kw)) && !kws.some(x => x.page === u && phrase(x.kw).includes(phrase(k.kw).trim()))) errs.push(`zoekwoord "${k.kw}": ook in title/H1 van ${u} (kannibalisatie)`);
  }
}
const titles = {};
for (const [u, o] of Object.entries(info)) (titles[o.title] ||= []).push(u);
for (const [t, us] of Object.entries(titles)) if (us.length > 1) errs.push(`dubbele title "${t}": ${us.join(', ')}`);
const sentences = h => (h.match(/<main[\s\S]*<\/main>/) || [''])[0].replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.split(' ').length > 3);
for (const k of kws.filter(k => k.new)) {
  const own = sentences(pages[k.page] || '');
  const other = new Set(Object.entries(pages).filter(([u]) => u !== k.page).flatMap(([, h]) => sentences(h)));
  const n = own.filter(s => !other.has(s)).join(' ').split(' ').length;
  console.log(`unieke woorden ${k.page}: ${n}`);
  if (n < 500) errs.push(`${k.page}: ${n} unieke woorden (minimaal 500)`);
}
console.log(errs.length ? '## zoekwoorden (' + errs.length + ')\n  ' + errs.join('\n  ') : 'zoekwoorden: ' + kws.length + ' gecontroleerd, 0 fouten');
if (errs.length) process.exitCode = 1;
