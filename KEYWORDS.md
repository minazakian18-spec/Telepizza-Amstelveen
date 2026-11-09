# Zoekwoordkaart

Elk zoekwoord heeft **één** doelpagina. Andere pagina's linken met het zoekwoord als ankertekst naar die pagina (blok "Meer van Telepizza" onder elke landingspagina, plus links in de tekst). De machineleesbare versie staat in `scripts/keywords.json`; `npm run check` controleert dat elk zoekwoord in de title of H1 van de doelpagina staat, dat geen andere pagina dezelfde term in title/H1 heeft en dat titles uniek zijn.

| Prio | Zoekwoord | Doelpagina | Title | H1 |
|---|---|---|---|---|
| 1 | italiaans restaurant amstelveen | `/` | Italiaans restaurant Amstelveen ★ 4,7 \| Telepizza | Italiaans restaurant in Amstelveen |
| 1 | italiaan amstelveen | `/` | idem | idem |
| 1 | beste italiaan amstelveen | `/` | idem | idem |
| 1 | italiaanse restaurants amstelveen | `/` | idem | idem |
| 1 | restaurant amstelveen | `/restaurant-amstelveen/` | Restaurant Amstelveen: uit eten sinds 1984 \| Telepizza | Restaurant in Amstelveen: uit eten sinds 1984 |
| 1 | catering amstelveen | `/catering-italiaans-restaurant-amstelveen/` | Catering Amstelveen \| Pizza & pasta sinds 1984 \| Telepizza | Catering Amstelveen |
| 2 | pizza amstelveen | `/pizza-amstelveen/` | Pizza Amstelveen ★ 4,7 \| Pizzeria sinds 1984 \| Telepizza | Pizzeria in Amstelveen: pizza bestellen, afhalen of hier eten |
| 2 | pizzeria amstelveen | `/pizza-amstelveen/` | idem | idem |
| 2 | pizza bestellen amstelveen | `/pizza-amstelveen/` | idem | idem |
| 2 | beste pizza amstelveen | `/pizza-amstelveen/` | idem (FAQ "Wat is de beste pizza in Amstelveen?") | idem |
| 2 | eten bestellen amstelveen | `/bezorgen-amstelveen/` | Eten bestellen Amstelveen \| Pizza bezorgen & afhalen | Eten bestellen in Amstelveen: thuisbezorgd of afhalen |
| 2 | thuisbezorgd amstelveen | `/bezorgen-amstelveen/` | idem | idem |
| 2 | eten afhalen amstelveen | `/bezorgen-amstelveen/` | idem | idem |
| 2 | pizza afhalen amstelveen | `/bezorgen-amstelveen/` | idem | idem |
| 2 | pizza bezorgen amstelveen | `/bezorgen-amstelveen/` | idem | idem |
| 2 | pasta amstelveen | `/pasta-amstelveen/` | Pasta Amstelveen \| Verse pasta vanaf € 11,45 \| Telepizza | Pasta in Amstelveen: vers bereid |
| 2 | shoarma amstelveen | `/shoarma-amstelveen/` (nieuw) | Shoarma Amstelveen \| Halal lamsshoarma, afhalen tot laat | Shoarma in Amstelveen |
| 2 | kapsalon amstelveen | `/kapsalon-amstelveen/` | Kapsalon Amstelveen € 11,95 \| Halal, afhalen tot laat | Kapsalon in Amstelveen |
| 3 | pizza amstelveen (Engels) | `/en/` | Pizza Amstelveen ★ 4.7 \| Italian since 1984 \| Telepizza | Pizza and Italian food in Amstelveen |
| 3 | italian restaurant amstelveen | `/en/italian-restaurant-amstelveen/` | Italian restaurant Amstelveen ★ 4.7 \| Since 1984 \| Telepizza | Italian restaurant in Amstelveen |
| 3 | food delivery amstelveen | `/en/pizza-delivery-amstelveen/` | Food delivery Amstelveen \| Pizza & pasta \| Telepizza | Food delivery in Amstelveen: pizza, pasta and grill |

## Regels

- Een nieuw zoekwoord? Voeg het toe aan `scripts/keywords.json` en aan deze tabel, en kies één doelpagina.
- Kannibalisatie voorkomen: zet de exacte zoekterm niet in de title of H1 van een andere pagina. Wel in de tekst, als link naar de doelpagina.
- Titles maximaal 60 tekens, met een klikreden (★ 4,7, sinds 1984, open tot 03:00, halal, prijs). Meta descriptions 120–155 tekens en eindigen met een actie (bestel, reserveer, vraag offerte aan).
- "Tot laat" in een title of meta altijd koppelen aan afhalen of hier eten, nooit aan bezorgen (bezorgen kan tot 21:00–21:30).
- Blogartikelen linken onderaan naar de bijpassende hoofdpagina (`src/pages/blog/[slug].astro`).
- Posities volgen: zie `SEO-TRACKING.md`.
