# Telepizza-Amstelveen
Website voor Telepizza Amstelveen

Statische Astro-site. Gegevens aanpassen: `src/data/site.ts`, menu: `src/data/menu.ts`. Uitleg voor Hostinger: `docs/hostinger-deploy.md`.

## Bouwen

| Opdracht | Resultaat |
|---|---|
| `npm install` | eenmalig, installeert alles |
| `npm run build` | **productie** in `dist/`: basispad `/`, canonicals naar https://telepizza-amstelveen.nl, robots.txt met `Allow` en de sitemap-regel, `CNAME`, `sitemap.xml` |
| `npm run build:preview` | **preview** in `dist-preview/`: zelfde site onder `/Telepizza-Amstelveen/` voor GitHub Pages, robots.txt `Disallow: /`, geen `CNAME` |
| `npm run check` | controleert `dist/`: links, afbeeldingen, titels, beschrijvingen, canonicals, hreflang, JSON-LD, verboden teksten |
| `npm run photos` | zet nieuwe menufoto's om en werkt `MISSING_PHOTOS.md` bij |

Canonicals en og:url wijzen in beide builds naar https://telepizza-amstelveen.nl, zodat de preview nooit concurreert met het echte domein.

## Preview bijwerken (zoals nu)

De preview staat op de branch `preview` en GitHub Pages serveert die branch (Settings › Pages › Deploy from a branch › `preview`).

1. `npm run build:preview`
2. Kopieer de inhoud van `dist-preview/` naar de branch `preview` en push.

## Productie (Hostinger)

De productiesite draait op Hostinger (Apache); DNS blijft ongewijzigd. De branch `production` bevat alleen de inhoud van `dist/` (index.html in de root, zonder CNAME), inclusief `.htaccess` met https/www-doorverwijzing, 301's voor oude WordPress-adressen, 404-pagina, caching en compressie.

1. `npm run build` en `npm run check` (0 fouten).
2. Kopieer de inhoud van `dist/` (zonder `CNAME`) naar de branch `production` en push.
3. Hostinger haalt de branch op via Git (hPanel › Geavanceerd › Git) of je uploadt de bestanden naar `public_html`.

## Menufoto's toevoegen

1. Maak een foto van het gerecht zelf (geen stockfoto, geen AI-beeld, geen ander gerecht).
2. Geef het bestand de naam uit `MISSING_PHOTOS.md`, bijvoorbeeld `pizza-quattro-stagioni.jpg`. Dat is de gerechtnaam in kleine letters met streepjes.
3. Zet het in `public/images/menu-upload/`.
4. `npm run photos` maakt er `public/images/menu/<naam>.webp` van (800×600, WebP).
5. `npm run build`: de foto staat automatisch bij het juiste gerecht, met alt-tekst "<gerecht> bij Telepizza Amstelveen", lazy loading en in de image-sitemap.

## Zoekwoordposities bijwerken (maandelijks)

De zoekwoordkaart staat in `KEYWORDS.md` (en `scripts/keywords.json`, die `npm run check` gebruikt). Werk elke maand `SEO-TRACKING.md` bij:

1. Open Google Search Console voor de website.
2. Ga naar **Prestaties › Zoekresultaten** en kies het tabblad **Zoekopdrachten**.
3. Zet de periode op **Laatste 28 dagen**.
4. Klik op **Exporteren** (Google Spreadsheets of CSV).
5. Zoek per zoekwoord uit `SEO-TRACKING.md` de kolom **Positie** op en vul die in bij de kolom van deze maand (één decimaal, bijvoorbeeld 3,8).
6. Staat een zoekwoord niet in de export, vul dan "–" in (geen vertoningen).

Zakt een zoekwoord, kijk dan of de doelpagina nog klopt: staat de term in de title of H1, en linken andere pagina's ernaar? `npm run check` controleert dat automatisch.
