// Launchcontrole op dist/: verboden teksten, head-tags, hreflang, JSON-LD, FAQ, ids, alts, links, H1, lengtes.
const fs = require('fs'), path = require('path');
const dist = process.argv[2];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const all = walk(dist);
const html = all.filter(f => f.endsWith('.html'));
const P = {}; const add = (k, v) => (P[k] = P[k] || []).push(v);
const dec = s => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const vis = h => dec(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' '));
const exists = u => { const p = path.join(dist, decodeURI(u.split('#')[0].split('?')[0])); return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html'))); };
for (const f of all.filter(f => /\.(html|css|js|json|xml|txt)$/.test(f))) {
  const s = fs.readFileSync(f, 'utf8'), rel = path.relative(dist, f);
  for (const w of ['github.io', 'localhost', 'lorem']) if (s.toLowerCase().includes(w)) add('verboden: ' + w, rel);
}
const titles = {}, descs = {}, pages = {};
for (const f of html) {
  const rel = '/' + path.relative(dist, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  const h = fs.readFileSync(f, 'utf8');
  if (h.includes('http-equiv="refresh"')) continue;
  const noindex = /name="robots" content="noindex/.test(h);
  const t = vis(h);
  if (/\bTODO\b/.test(t)) add('TODO zichtbaar', rel);
  if (/\bundefined\b/.test(t) || /="undefined/.test(h)) add('undefined', rel);
  if (!/<html lang="[a-z]{2}(-[A-Z]{2})?"/.test(h)) add('html lang', rel);
  const n = (h.match(/<h1[\s>]/g) || []).length; if (n !== 1) add('H1 != 1', rel + ' ' + n);
  const ids = [...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]); const dup = ids.filter((x, i) => ids.indexOf(x) !== i); if (dup.length) add('dubbele id', rel + ' ' + [...new Set(dup)]);
  for (const m of h.matchAll(/<img\b[^>]*>/g)) { if (/alt=""/.test(m[0]) && !/aria-hidden/.test(m[0])) add('lege alt', rel + ' ' + (m[0].match(/src="([^"]+)/) || [])[1]); if (!/width=/.test(m[0]) || !/height=/.test(m[0])) add('img zonder maat', rel); }
  for (const m of h.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) if (!exists(m[1])) add('kapotte link', rel + ' -> ' + m[1]);
  for (const m of h.matchAll(/<(?:img|source|video|link)\b[^>]*?\b(?:src|poster|data-src|href)="(\/[^"]+)"/g)) if (!exists(m[1])) add('ontbrekend bestand', rel + ' -> ' + m[1]);
  for (const m of h.matchAll(/<a\b[^>]*href="https:\/\/(telepizza\.sitedish|widget\.thefork)[^"]*"[^>]*>/g)) if (!/target="_blank"/.test(m[0]) || !/rel="noopener/.test(m[0])) add('externe CTA zonder _blank/noopener', rel);
  for (const k of ['twitter:title', 'twitter:description', 'twitter:image']) if (!h.includes(`name="${k}"`)) add('mist ' + k, rel);
  if (!h.includes('property="og:image:alt"')) add('mist og:image:alt', rel);
  const can = (h.match(/rel="canonical" href="([^"]+)"/) || [])[1] || '';
  if (!can.startsWith('https://telepizza-amstelveen.nl/')) add('canonical', rel + ' ' + can);
  if (!noindex) {
    const title = dec((h.match(/<title>([^<]*)/) || [])[1] || ''), d = dec((h.match(/name="description" content="([^"]*)"/) || [])[1] || '');
    if (title.length > 60) add('title > 60', `${rel} (${title.length})`);
    if (d.length > 155 || d.length < 120) add('description buiten 120-155', `${rel} (${d.length})`);
    if (d.includes('…')) add('description afgekapt', rel);
    if (/'/.test(title + d)) add('rechte apostrof in meta', rel);
    (titles[title] = titles[title] || []).push(rel); (descs[d] = descs[d] || []).push(rel);
  }
  const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => [m[1], m[2]]);
  pages[can] = alts;
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let o; try { o = JSON.parse(m[1]); } catch { add('JSON-LD ongeldig', rel); continue; }
    if (/AggregateRating|"Review"/.test(JSON.stringify(o))) add('Review/AggregateRating-schema', rel);
    if (o['@type'] === 'BlogPosting' && !(o.headline && o.datePublished && o.dateModified && o.author && o.image && o.publisher)) add('BlogPosting onvolledig', rel);
    if (o['@type'] === 'FAQPage') for (const q of o.mainEntity) { if (!t.includes(dec(q.name))) add('FAQ-vraag niet zichtbaar', rel + ' ' + q.name.slice(0, 40)); const a = dec(q.acceptedAnswer.text.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').slice(0, 50); if (!t.replace(/\s+/g, ' ').includes(a)) add('FAQ-antwoord niet zichtbaar', rel + ' ' + a.slice(0, 40)); }
  }
}
for (const [t, r] of Object.entries(titles)) if (r.length > 1) add('dubbele title', r.join(', ') + ' :: ' + t);
for (const [d, r] of Object.entries(descs)) if (r.length > 1) add('dubbele description', r.join(', '));
for (const [can, alts] of Object.entries(pages)) for (const [l, href] of alts) { if (l === 'x-default') continue; const back = pages[href]; if (!back) add('hreflang doel ontbreekt', can + ' -> ' + href); else if (!back.some(([, h]) => h === can)) add('hreflang niet wederzijds', can + ' -> ' + href); }
for (const p of ['menu-italiaans-restaurant-amstelveen', 'catering-italiaans-restaurant-amstelveen', 'over-ons-italiaans-restaurant-amstelveen', 'pizza-amstelveen', 'pasta-amstelveen', 'restaurant-amstelveen']) {
  const f = path.join(dist, p, 'index.html'); if (!fs.existsSync(f) || fs.readFileSync(f, 'utf8').includes('http-equiv="refresh"')) add('oude URL ontbreekt', p);
}
for (const [k, v] of Object.entries(P)) { console.log(`\n## ${k} (${v.length})`); [...new Set(v)].slice(0, 12).forEach(x => console.log('  ' + x)); }
console.log('\nKlaar. Pagina\'s:', html.length);

// ---- Extra controles (punt 12) ----
{
  const Q = {}; const addq = (k, v) => (Q[k] = Q[k] || []).push(v);
  const today = new Date().toISOString().slice(0, 10);
  const wijkSent = {};
  for (const f of html) {
    const rel = '/' + path.relative(dist, f).split(path.sep).join('/').replace(/index.html$/, '');
    const h = fs.readFileSync(f, 'utf8');
    if (h.includes('http-equiv="refresh"')) continue;
    const glued = dec(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ''));
    for (const [k, re] of [['Domande', /Domande/], ['Halalal', /Halalal/], ['Favoriet vast aan woord', /[a-z]Favoriet/], ['"9 /10"', /9 \/10/], ['undefined', /\bundefined\b/], ['varkenshaas', /varkenshaas/i], ['schnitzel', /schnitzel/i], ['Schweinefilet', /Schweinefilet/], ['100% halal', /100 ?% ?(halal|helal)|%100 helal|halal 100 ?%|حلال 100/i], ['1984familiebedrijf', /1984familie/], ['score vast aan aantal', /\d,\d\d?\.\d{3}/], ['Bezorgen&', /Bezorgen&/]]) if (re.test(glued)) addq('verboden: ' + k, rel);
    for (const k of ['<title>', 'name="description"', 'rel="canonical"', '<h1']) if (!h.includes(k)) addq('mist ' + k, rel);
    if (!h.includes('application/ld+json')) addq('geen JSON-LD', rel);
    // Halalclaims: buiten de halalpagina en de FAQ alleen met het ⓘ-component; nooit een volledige claim in de meta.
    const desc = (h.match(/name="description" content="([^"]*)"/) || [])[1] || '';
    if (/al ons vlees|all our meat|100 ?%/i.test(desc) && /halal/i.test(desc)) addq('onvolledige halalclaim in meta', rel);
    if (!/halal-restaurant-amstelveen/.test(rel)) {
      const body = glued.replace(/[\s\S]*?(?=)/, '');
      const outsideFaq = h.replace(/<details[\s\S]*?<\/details>/g, ' ').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<span class="hi-pop"[\s\S]*?<\/span><\/span>/g, ' ');
      // Per sectie: een claim moet in dezelfde <section>/<footer> een ⓘ-component hebben (een ⓘ elders op de pagina telt niet).
      const claimRe = /vlees is halal|meat is halal|Fleisch ist halal|viande est halal|carne (è|es) halal|etlerimiz helal|لحومنا حلال|اللحوم لدينا حلال/i;
      for (const chunk of outsideFaq.split(/(?=<section\b|<footer\b|<header\b)/)) {
        const text = chunk.replace(/<span class="hi"[\s\S]*?<\/span><\/span>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        if (claimRe.test(text) && !chunk.includes('class="hi"')) addq('halalclaim zonder ⓘ-component', rel + ' :: ' + (text.match(new RegExp('.{0,40}(' + claimRe.source + ').{0,20}', 'i')) || [''])[0].trim());
      }
      if (/behalve gerechten met het label|except dishes labelled|außer bei Gerichten/.test(outsideFaq.replace(/<[^>]+>/g, ' '))) addq('lange halalzin buiten FAQ', rel);
    }
    // Gerechten met varkensvlees moeten het label "Niet halal" hebben en mogen nooit het label "Halal" dragen.
    for (const m of h.matchAll(/<article class="(?:it|ci)"[^>]*>([\s\S]*?)<\/article>/g)) {
      const body = m[1], name = ((body.match(/<h3[^>]*>([^<]*)/) || [])[1] || '').trim();
      const pork = /parmaham|parma ham|prosciutto|pancetta|bacon|\bspek\b|varkensvlees|\bpork\b/i.test(body.replace(/<[^>]+>/g, ' ').replace(/Pizza Truffel Prosciutto|Truffle Prosciutto Pizza|Bacon Burger|Pancetta Bianca/g, ''))
        || /^(Pizza Truffel Prosciutto|Specialiteit van de Chef|Pizza Pancetta Bianca|Bacon Burger|Pasta Carbonara)$/.test(name);
      const label = /class="(?:tag )?nh"/.test(body);
      if (pork && !label) addq('varkensvlees zonder label Niet halal', rel + ' :: ' + name);
      if (label && />\s*(Halal|Helal)\s*</.test(body)) addq('Niet halal-gerecht met Halal-label', rel + ' :: ' + name);
    }
    for (const m of h.matchAll(/srcset="([^"]+)"/g)) for (const part of m[1].split(',')) { const u = part.trim().split(' ')[0]; if (u.startsWith('/') && !exists(u)) addq('srcset kapot', rel + ' ' + u); }
    const alts = [...h.matchAll(/<img\b[^>]*\balt="([^"]+)"/g)].map(m => m[1]);
    const dupAlt = alts.filter((a, i) => alts.indexOf(a) !== i);
    if (dupAlt.length) addq('dubbele alt op pagina', rel + ' :: ' + [...new Set(dupAlt)][0].slice(0, 50));
    for (const m of h.matchAll(/<figure[^>]*>\s*<img\b[^>]*alt="([^"]+)"[^>]*>\s*<figcaption[^>]*>([^<]+)<\/figcaption>/g)) if (dec(m[1]).trim() === dec(m[2]).trim()) addq('caption = alt', rel);
    if (rel.startsWith('/blog/') && rel !== '/blog/') {
      const d = (h.match(/"datePublished":"([^"]+)"/) || [])[1]; if (d && d > today) addq('blogdatum in de toekomst', rel);
      if (!/href="\/(pizza|pasta|halal-restaurant|catering-italiaans-restaurant|restaurant|bezorgen)-amstelveen\/|href="\/catering-italiaans-restaurant-amstelveen\/"/.test(h.split('<article')[1] || '')) addq('blog zonder dienstlink', rel);
    }
    if (/^\/bezorgen-amstelveen\/[^/]+\/$/.test(rel)) {
      const main = vis((h.match(/<main[\s\S]*<\/main>/) || [''])[0]).replace(/\s+/g, ' ');
      const words = main.split(' ').filter(Boolean).length; if (words < 300) addq('wijk < 300 woorden', rel + ' ' + words);
      if (!h.includes('href="/pizza-amstelveen/"') || !h.includes('href="/bezorgen-amstelveen/"')) addq('wijk mist link pizza/bezorgen', rel);
      wijkSent[rel] = new Set(main.split(/(?<=[.!?])\s+/).filter(s => s.split(' ').length > 4));
    }
  }
  const ks = Object.keys(wijkSent);
  for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) { const a = wijkSent[ks[i]], b = wijkSent[ks[j]]; const pct = [...a].filter(s => b.has(s)).length / Math.min(a.size, b.size); if (pct > 0.6) addq('wijkpagina’s > 60% gelijk', ks[i] + ' ~ ' + ks[j]); }
  const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8'); if (!/Disallow: \/account\//.test(robots)) addq('robots', 'mist Disallow /account/');
  const sm = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8'); if (/\/account\//.test(sm)) addq('sitemap', 'bevat account');
  for (const [k, v] of Object.entries(Q)) { console.log(`\n## ${k} (${v.length})`); [...new Set(v)].slice(0, 12).forEach(x => console.log('  ' + x)); }
  console.log('Extra controles klaar.');
}
