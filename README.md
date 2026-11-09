# Telepizza-Amstelveen
Website voor Telepizza Amstelveen

Statische Astro-site. Gegevens aanpassen: `src/data/site.ts`, menu: `src/data/menu.ts`. Uitleg voor Hostinger: `docs/hostinger-deploy.md`.

## Bouwen

| Opdracht | Resultaat |
|---|---|
| `npm install` | eenmalig, installeert alles |
| `npm run build` | **productie** in `dist/`: basispad `/`, canonicals naar https://telepizza-amstelveen.nl, robots.txt met `Allow`, `Disallow: /account/` en de sitemap-regel, `CNAME`, `sitemap.xml` |
| `npm run build:preview` | **preview** in `dist-preview/`: zelfde site onder `/Telepizza-Amstelveen/` voor GitHub Pages, robots.txt `Disallow: /`, geen `CNAME` |
| `npm run check` | controleert `dist/`: links, afbeeldingen, titels, beschrijvingen, canonicals, hreflang, JSON-LD, verboden teksten |
| `npm run photos` | zet nieuwe menufoto's om en werkt `MISSING_PHOTOS.md` bij |

Canonicals en og:url wijzen in beide builds naar https://telepizza-amstelveen.nl, zodat de preview nooit concurreert met het echte domein.

## Preview bijwerken (zoals nu)

De preview staat op de branch `preview` en GitHub Pages serveert die branch (Settings › Pages › Deploy from a branch › `preview`).

1. `npm run build:preview`
2. Kopieer de inhoud van `dist-preview/` naar de branch `preview` en push.

## Van preview naar productie (eigen domein)

Pas doen als de eigenaar akkoord geeft.

1. Voeg `redesign-telepizza` samen met `main`.
2. `npm run build` en zet de inhoud van `dist/` op de branch die Pages serveert (of laat een workflow dat doen). `dist/` bevat al `CNAME` met `telepizza-amstelveen.nl`.
3. DNS bij de domeinbeheerder:
   - A-records voor `telepizza-amstelveen.nl`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME-record `www` → `minazakian18-spec.github.io`
4. GitHub › Settings › Pages: Custom domain `telepizza-amstelveen.nl`, daarna "Enforce HTTPS" aanzetten.

Let op: GitHub Pages leest geen `.htaccess`. Oude WordPress-adressen krijgen daar een doorverwijspagina in plaats van een echte 301. Op Hostinger werkt `.htaccess` wel.

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
