// Menufoto's: zet foto's uit public/images/menu-upload/ om naar public/images/menu/<slug>.webp
// en schrijft MISSING_PHOTOS.md met de gerechten waarvoor nog geen foto is.
// Gebruik: npm run photos
// Bestandsnaam in menu-upload = slug van de gerechtnaam, bijvoorbeeld pizza-quattro-formaggi.jpg.
// De menukaart koppelt een foto automatisch als public/images/menu/<slug>.webp bestaat.
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const up = 'public/images/menu-upload', dir = 'public/images/menu';
export const slug = n => n.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

if (existsSync(up)) {
  mkdirSync(dir, { recursive: true });
  for (const f of readdirSync(up).filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f))) {
    const name = slug(parse(f).name);
    const r = await sharp(join(up, f)).rotate().resize({ width: 800, height: 600, fit: 'cover', withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(dir, name + '.webp'));
    console.log(`${f} -> images/menu/${name}.webp (${r.width}x${r.height})`);
  }
}

// Overzicht: welke gerechten hebben een foto (eigen slug-bestand of vaste koppeling in dishes.ts)?
const m = readFileSync('src/data/menu.ts', 'utf8');
const menu = JSON.parse(m.slice(m.indexOf('= [', m.indexOf('export const menu')) + 2, m.lastIndexOf(']') + 1).replace(/,(\s*[\]}])/g, '$1'));
const d = readFileSync('src/data/dishes.ts', 'utf8');
const linked = new Set([...d.matchAll(/name: '([^']+)', img: '([^']+)'/g)].filter(x => existsSync(join(dir, x[2] + '.webp'))).map(x => x[1].toLowerCase()));
let out = '# Menufoto\'s die nog ontbreken\n\nZet een eigen foto van het gerecht in `public/images/menu-upload/` met precies de bestandsnaam hieronder (jpg, png of webp) en draai `npm run photos`. Daarna verschijnt de foto vanzelf op de menukaart.\n\nGebruik alleen echte foto\'s van het gerecht zelf: geen stockfoto\'s, geen AI-beelden en geen foto van een ander gerecht.\n';
let have = 0, miss = 0;
const rows = [];
for (const s of menu) {
  const missing = s.items.filter(i => i.price != null && !existsSync(join(dir, slug(i.name) + '.webp')) && !linked.has(i.name.toLowerCase()));
  const withPhoto = s.items.filter(i => i.price != null).length - missing.length;
  have += withPhoto; miss += missing.length;
  rows.push(`| ${s.name} | ${withPhoto} | ${missing.length} |`);
  if (missing.length) out += `\n## ${s.name}\n\n` + missing.map(i => `- ${i.name}: \`${slug(i.name)}.jpg\``).join('\n') + '\n';
}
out += `\n## Overzicht\n\n| Categorie | Met foto | Zonder foto |\n|---|---|---|\n${rows.join('\n')}\n| **Totaal** | **${have}** | **${miss}** |\n`;
writeFileSync('MISSING_PHOTOS.md', out);
console.log(`MISSING_PHOTOS.md: ${have} met foto, ${miss} zonder foto`);
