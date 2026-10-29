# Website online zetten via Hostinger (stap voor stap)

Zo werkt het straks:
1. Je past iets aan in GitHub (bijv. een prijs in `src/data/menu.ts`) — dat kan gewoon in de browser, op telefoon of laptop.
2. GitHub bouwt de site automatisch en zet het resultaat op de branch **`deploy`** (zie `.github/workflows/deploy.yml`).
3. Hostinger haalt de branch `deploy` op en zet hem in `public_html`.

> Let op: de oude WordPress-site blijft draaien totdat jij stap B uitvoert. Maak eerst een back-up!

## A. Eenmalig: GitHub klaarzetten
1. Voeg deze PR samen (merge) in `main`.
2. Ga naar **Actions** in GitHub en controleer dat "Build en publiceer naar deploy-branch" groen is. Daarna bestaat de branch `deploy`.
3. Is de repository privé? Dan heeft Hostinger een sleutel nodig (zie stap B.3).

## B. Eenmalig: Hostinger koppelen
1. **Back-up**: hPanel → *Websites* → telepizza-amstelveen.nl → *Bestanden* → *Back-ups*. Maak een back-up van bestanden én database van WordPress.
2. hPanel → *Geavanceerd* → **Git**.
3. Privé-repo: klik bij *SSH-sleutel* op **Genereren**, kopieer de sleutel en zet hem in GitHub: repo → *Settings* → *Deploy keys* → *Add deploy key* (alleen lezen).
4. Vul bij *Repository maken* in:
   - Repository: `git@github.com:minazakian18-spec/Telepizza-Amstelveen.git`
   - Branch: `deploy`
   - Map (directory): leeg laten (= `public_html`). Hostinger eist een **lege** map: verplaats de oude WordPress-bestanden eerst naar een map buiten `public_html` (of verwijder ze na de back-up).
5. Klik **Maken** en daarna **Deploy**. De site staat nu live.
6. **Automatisch bijwerken**: klik bij de repo op *Automatische deployment* → kopieer de **webhook-URL**. In GitHub: *Settings* → *Webhooks* → *Add webhook* → plak de URL, content type `application/json`, event "Just the push event". Voortaan wordt elke wijziging binnen een paar minuten live.
7. Controleer: open https://telepizza-amstelveen.nl, het menu en een oude link. `.htaccess` (zit in de build) stuurt http→https en www→zonder www door.

## C. Google Search Console (zichtbaarheid in Google)
1. Ga naar https://search.google.com/search-console → *Property toevoegen* → **Domein** → `telepizza-amstelveen.nl`.
2. Kopieer de TXT-record en voeg die toe in hPanel → *Domeinen* → *DNS / Nameservers* → *TXT-record*. Klik in Google op *Verifiëren* (kan tot een paar uur duren).
3. Menu *Sitemaps* → vul in `sitemap-index.xml` → *Indienen*.
4. Kijk na 1–2 weken bij *Prestaties*: zoekwoorden, klikken en positie.

## D. Google Analytics (echte bezoekcijfers)
1. Ga naar https://analytics.google.com → *Beheer* → *Account maken* → property "Telepizza Amstelveen" → *Web*-stream met `https://telepizza-amstelveen.nl`.
2. Kopieer de **Metings-ID** (`G-XXXXXXX`) en geef die door (of zet hem zelf in `src/layouts/Base.astro`). Tip: overweeg privacy-vriendelijk zonder cookies (bijv. Plausible), dan heb je geen cookiebanner nodig. Met Google Analytics heb je in Nederland wél toestemming (cookiebanner) nodig.
3. Koppel Analytics aan Search Console: Analytics → *Beheer* → *Search Console-links*.

## E. Google Bedrijfsprofiel (belangrijkst voor lokaal!)
Controleer op https://business.google.com dat adres, telefoon, openingstijden, foto's en de website-link kloppen. Vraag tevreden klanten om een review.

## Iets aanpassen?
- Bedrijfsgegevens, telefoon, openingstijden: `src/data/site.ts`
- Menu en prijzen: `src/data/menu.ts`
- Teksten: `src/pages/…`
Open het bestand op github.com → potloodje → aanpassen → *Commit changes*. Klaar.
