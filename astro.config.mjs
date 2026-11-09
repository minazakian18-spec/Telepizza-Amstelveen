import { defineConfig } from 'astro/config';
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
          if (!k || /data-track=/.test(m)) return m;
          const isCta = k === 'click_order' || k === 'click_reserve';
          const ext = (isCta && !/target=/.test(m) ? ' target="_blank"' : '') + (isCta && !/rel=/.test(m) ? ' rel="noopener"' : '');
          return `<a${a}href="${href}"${b}${ext} data-track="${k}">`;
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
  // Vervallen of samengevoegde pagina's. Op GitHub Pages worden dit statische doorverwijspagina's;
  // op Hostinger staan dezelfde regels als echte 301 in public/.htaccess.
  redirects: {
    '/pizza-soorten/': '/menu-italiaans-restaurant-amstelveen/#pizza',
    '/catering-bedrijven-amstelveen/': '/catering-italiaans-restaurant-amstelveen/#bedrijven',
    '/blog/laat-eten-amstelveen/': '/laat-open-amstelveen/',
    '/bezorgen-amstelveen/middenhoven/': '/bezorgen-amstelveen/',
    '/bezorgen-amstelveen/groenelaan/': '/bezorgen-amstelveen/',
    '/bezorgen-amstelveen/waardhuizen/': '/bezorgen-amstelveen/',
  },
  integrations: [track],
});
