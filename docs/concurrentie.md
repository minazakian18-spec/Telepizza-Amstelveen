# Concurrentie: pizza & Italiaans in Amstelveen

> Onderzoek okt 2026 via zoekmachines. De websites van concurrenten (en de oude Telepizza-site) konden vanuit de bouwomgeving niet direct worden geopend, dus paginatelling en SEO-details zijn gebaseerd op zoekresultaten en moeten met de hand worden nagekeken (TODO).

## Wie zijn de grootste concurrenten?

| Concurrent | Locatie | Type | Zichtbaarheid online (indruk) |
|---|---|---|---|
| New York Pizza | Karel Doormanweg 10 | Landelijke keten, bezorging | Hoog: sterke merknaam, eigen app, staat op openingstijden-sites |
| Gusto – World of Pizza | Dorpsstraat 84 | Pizzeria, afhalen/bezorgen | Hoog: veel positieve reviews ("beste plek in de stad"), op Visit Amstelveen |
| Villa Borghese | Amstelveen | Italiaans restaurant, steenoven | Gemiddeld: profiel op Visit Amstelveen |
| Porto Pescara 2 | Amstelveen (studentengebied) | Budget-pizzeria + shoarma/grill | Gemiddeld: lijkt het meest op Telepizza (zelfde mix) |
| Papa John's | Amstelveen | Keten | Gemiddeld |
| Sotto / Mangia Pizza | Amstelveenseweg (Amsterdam-kant) | Pizzeria | Hoog in Amsterdam, trekt ook Amstelveners |

Telepizza staat ook op Visit Amstelveen ("toegankelijke pizzeria: eten, afhalen, bezorgen; ook shoarma, pasta en ijs").

## Wat doen zij beter?
1. **Reviews**: Gusto wint op Google-reviews. Reviews zijn de nr. 1 factor in Google Maps.
2. **Bestelgemak**: ketens hebben een directe "Bestel nu"-knop en app.
3. **Thuisbezorgd**: veel klanten zoeken alleen daar.

## Concrete acties voor Telepizza
1. **Google Bedrijfsprofiel** volledig maken: openingstijden, foto's (eten + zaak), menu-link, wekelijks een update. Vraag elke tevreden klant om een review (QR-code op de pizzadoos/bon). Doel: 100+ reviews.
2. **Bestelknop**: vul `orderUrl` in `src/data/site.ts` in, zodat er op elke pagina "Online bestellen" staat.
3. **Echte foto's** toevoegen (WebP, via `astro:assets`) — concurrenten winnen op beeld.
4. **Menu met prijzen** invullen (`src/data/menu.ts`); dit komt automatisch als Menu-schema in Google.
5. **Wijkpagina's** (nieuw, 9 stuks) en **pizzasoorten/FAQ** zorgen dat je gevonden wordt op "pizza bezorgen Westwijk" etc. — de meeste concurrenten hebben dit niet.
6. **Vermeldingen** controleren: Visit Amstelveen, Thuisbezorgd, TripAdvisor, openingstijden.nl — overal hetzelfde adres/telefoon (NAP).
7. **Onderscheiden op mix**: pizza + shoarma + pasta + ijs in één bestelling; benoem dit in Google-profiel en advertenties.
8. Meten via Search Console en Analytics (zie `hostinger-deploy.md`) en elke maand vergelijken.

TODO: met de hand per concurrent nakijken: aantal Google-reviews en score, aantal pagina's (site:domein in Google), of ze bezorgen in alle wijken.

Bronnen: visitamstelveen.nl (Telepizza, Villa Borghese, Porto Pescara 2, afhalen & bezorgen), openingstijden.nl (New York Pizza Karel Doormanweg 10), wanderlog.com, gemeente Amstelveen (officielebekendmakingen.nl, adres Amsterdamseweg 452).
