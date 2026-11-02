import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Zet data-track op links naar Sitedish (bestellen), TheFork (reserveren), tel: (bellen) en Google Maps (route).
const track = {
  name: 'data-track',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = d => readdirSync(d).flatMap(n => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
      const kind = href => /sitedish\.shop/.test(href) ? 'click_order' : /thefork\./.test(href) ? 'click_reserve' : /^tel:/.test(href) ? 'click_call' : /google\.[a-z.]+\/maps/.test(href) ? 'click_route' : null;
      for (const f of walk(fileURLToPath(dir)).filter(f => f.endsWith('.html'))) {
        const html = readFileSync(f, 'utf8');
        const out = html.replace(/<a\b([^>]*?)href="([^"]+)"([^>]*)>/g, (m, a, href, b) => {
          const k = kind(href.replace(/&amp;/g, '&'));
          return k && !/data-track=/.test(m) ? `<a${a}href="${href}"${b} data-track="${k}">` : m;
        });
        if (out !== html) writeFileSync(f, out);
      }
    },
  },
};

export default defineConfig({
  site: 'https://telepizza-amstelveen.nl',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [sitemap({ filter: (p) => !p.includes('404') && !/\/(tr|ar)\//.test(p) }), track],
});
