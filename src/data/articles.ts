// Blogartikelen. body is HTML; houd feiten controleerbaar en link naar relevante pagina's.
export interface Article { slug: string; title: string; desc: string; date: string; updated?: string; img: string; imgAlt: string; intro: string; body: string }

export const articles: Article[] = [
  {
    slug: 'beste-pizza-amstelveen',
    title: 'Waar herken je een goede pizza aan? Tips uit onze keuken',
    desc: 'Waaraan herken je een goede pizza? Over deeg, rijstijd, saus, kaas, toppings en de oven, met tips uit de keuken van Telepizza, pizza bakken sinds 1984.',
    date: '2026-10-30', updated: '2026-11-09', img: '/images/pizza-groente.webp', imgAlt: 'Pizza met verse groenten en geitenkaas van Telepizza Amstelveen',
    intro: 'Iedereen heeft een mening over pizza, maar over een paar dingen zijn pizzabakkers het eens. Na ruim veertig jaar pizza bakken aan de Amsterdamseweg zetten we op een rij waaraan je een goede pizza herkent, of je hem nu bij ons eet of ergens anders.',
    body: `
<h2>Het deeg: de basis van alles</h2>
<p>Een pizza is zo goed als zijn deeg. Bloem, water, gist, zout en een beetje olijfolie: meer is er niet nodig, maar de verhouding en de tijd maken het verschil. Goed deeg krijgt de tijd om te rijzen. Tijdens het rijzen ontwikkelt het smaak en wordt het soepel, waardoor het later licht verteerbaar is. Deeg dat te snel gemaakt wordt, smaakt vlak en wordt taai.</p>
<p>Je ziet het verschil al aan de rand. Een goede pizza heeft een rand met luchtbellen, die van buiten knapperig is en van binnen zacht. Dat krijg je alleen als het deeg met de hand wordt uitgerekt. Een deegroller drukt de lucht eruit; met je handen duw je de lucht juist naar de rand. Daarom rekken wij elke bodem met de hand uit, al sinds de eerste pizza die we in 1984 bakten.</p>

<h2>Hoe dik moet een pizza zijn?</h2>
<p>Dat is een kwestie van smaak. Een Napolitaanse pizza heeft een dunne bodem en een dikke, luchtige rand. Een Romeinse pizza is juist dun en krokant tot aan de rand. Een goede pizza is in elk geval niet zo dun dat hij scheurt onder het beleg, en niet zo dik dat je vooral brood eet. Pak een punt op: zakt de punt helemaal door, dan is de bodem te nat of te dun. Blijft hij stijf als een cracker, dan is hij te lang gebakken.</p>

<h2>De tomatensaus</h2>
<p>De saus hoort de pizza te dragen, niet te overheersen. Een goede tomatensaus is eenvoudig: tomaat, een beetje knoflook, olijfolie en kruiden zoals oregano of basilicum. Hij is niet zoet en niet waterig. Te veel saus maakt de bodem slap, te weinig maakt de pizza droog. Wij maken onze tomatensaus zelf, zodat we de smaak en de dikte precies goed kunnen houden.</p>

<h2>Kaas en toppings in balans</h2>
<p>Meer is niet altijd beter. Een pizza met een berg beleg wordt zwaar, en het vocht uit groenten en vlees maakt de bodem slap. Kijk liever naar de kwaliteit en de combinatie. Een paar goede ingrediënten die bij elkaar passen, zeggen meer dan tien halve. Denk aan Parmaham met rucola en Parmezaanse kaas, of geitenkaas met spinazie en een beetje honing, zoals op onze Popeye Speciale.</p>
<p>Let ook op wanneer toppings op de pizza gaan. Rucola, Parmaham en verse basilicum horen er pas na het bakken op; in de oven verliezen ze hun frisheid. Kaas moet net gesmolten zijn en licht bruin op de plekken waar hij bubbelt, niet olieachtig of verbrand.</p>

<h2>De oven: kort en heet</h2>
<p>Een pizza hoort kort en heet gebakken te worden. Bij een hoge temperatuur bakt de bodem knapperig af terwijl de kaas net smelt en de rand mooi kleurt. Bak je te lang op een lage temperatuur, dan droogt de pizza uit voordat hij goed gebakken is. Een paar donkere plekjes op de rand zijn geen fout maar een teken van een hete oven.</p>

<h2>Wat ervaring je leert</h2>
<p>Pizza bakken lijkt eenvoudig, maar het verschil zit in de details. Hoe het deeg voelt op een warme zomerdag of een vochtige herfstavond. Hoeveel saus een bodem kan hebben. Wanneer een pizza uit de oven moet. Dat leer je niet uit een recept, maar door het elke dag te doen. Sinds 1984 bakken we pizza’s voor gasten in Amstelveen, Buitenveldert en verder, en nog steeds proeven we elke dag of het goed is.</p>

<h2>Eet hem vers</h2>
<p>Pizza is op zijn best in de eerste minuten na de oven. Daarom proef je het verschil het meest als je aan tafel eet. Laat je hem bezorgen, eet hem dan meteen, en warm een koude punt op in de oven in plaats van in de magnetron. Zo blijft de bodem knapperig.</p>

<h2>Proef het zelf</h2>
<p>Ben je voor het eerst bij ons? Begin met een klassieker zoals de margherita of de pepperoni, zodat je het deeg en de saus goed proeft. Durf je meer, kies dan de Telepizza, onze huisspecialiteit, of de Specialiteit van de Chef met Parmaham en rucola. Alles over onze pizza’s, prijzen en bezorging lees je op de pagina <a href="/pizza-amstelveen/">pizza Amstelveen</a>. Liever aan tafel? <a href="/restaurant-amstelveen/">Reserveer in ons restaurant</a> aan de Amsterdamseweg.</p>
`,
  },
  {
    slug: 'halal-uit-eten-amstelveen',
    title: 'Halal uit eten in Amstelveen: Italiaans, grill en meer',
    desc: 'Halal uit eten in Amstelveen? Bij Telepizza is al het vlees halal: pizza, pasta, steaks, shoarma en kapsalon. Lees wat we serveren.',
    date: '2026-10-28', img: '/images/eigen/steak-grill.webp', imgAlt: 'Steak van de grill bij Telepizza Amstelveen',
    intro: 'Een restaurant vinden waar je zonder twijfel vlees kunt bestellen is niet altijd makkelijk. Bij Telepizza Amstelveen is al ons vlees halal. Zo kan iedereen aan tafel kiezen wat hij of zij wil.',
    body: `
<h2>Al het vlees halal</h2>
<p>Bij Telepizza hoef je niet te vragen welke gerechten halal zijn: al het vlees dat we gebruiken is halal. Dat geldt voor de salami en pepperoni op de pizza, de kipfilet in de pasta, de shoarma van de spies en de steaks van de grill.</p>
<h2>Italiaanse gerechten met halal vlees</h2>
<p>Juist bij Italiaans eten is halal vlees niet vanzelfsprekend. Denk aan pizza salami, pizza pepperoni, pasta bolognese met rundergehakt of lasagne. Bij ons kun je die klassiekers gewoon bestellen. Kijk voor alle opties op onze pagina over <a href="/halal-restaurant-amstelveen/">halal eten in Amstelveen</a>.</p>
<h2>Van de grill</h2>
<p>Liever een stuk vlees? Kies een biefstuk met champignon- of peperroomsaus, een ribeye, entrecote of de ossenhaas dello chef. Ook de spare ribs, sweet of hot, zijn populair. Alles komt met gemengde salade en frites of aardappelschijfjes. Meer op de pagina <a href="/steak-grill-amstelveen/">steaks en grill</a>.</p>
<h2>Shoarma, döner en kapsalon</h2>
<p>Naast Italiaanse gerechten serveren we shoarmaschotels, pizza shoarma en natuurlijk de <a href="/kapsalon-amstelveen/">kapsalon</a> (ook met döner). Ook hier is het vlees halal, met huisgemaakte knoflooksaus en sambal.</p>
<h2>Voor gezinnen en groepen</h2>
<p>Telepizza is een familierestaurant. Grote tafels zijn geen probleem; bel ons vooraf, dan zetten we alles klaar. Ook voor <a href="/catering-italiaans-restaurant-amstelveen/">catering</a> bij feesten en bijeenkomsten kun je bij ons terecht.</p>
<h2>Openingstijden</h2>
<p>We zijn open van dinsdag tot en met zondag vanaf 15:00, tot 01:45 en op vrijdag en zaterdag tot 03:00. <a href="/contact-route/">Plan je route</a> of reserveer direct een tafel.</p>`,
  },
  {
    slug: 'verjaardag-vieren-restaurant-amstelveen',
    title: 'Je verjaardag vieren in een restaurant in Amstelveen',
    desc: 'Op zoek naar een restaurant in Amstelveen om je verjaardag te vieren? Tips voor een etentje met familie of vrienden, met pizza, pasta en desserts.',
    date: '2026-10-24', img: '/images/ph/gasten.webp', imgAlt: 'Neon in de zaal van Telepizza Amstelveen',
    intro: 'Een verjaardag vier je het liefst samen, aan een lange tafel met goed eten. Italiaans eten is daarvoor ideaal: er is voor iedereen iets, van kinderen tot opa en oma. Zo organiseer je het.',
    body: `
<h2>Waarom Italiaans werkt voor een feestje</h2>
<p>Pizza en pasta vallen bij bijna iedereen in de smaak. Je kunt delen, iedereen kiest zijn eigen favoriet en er zijn vegetarische opties en gerechten met vis of vlees. Bij Telepizza is bovendien al het vlees halal, dus ook dat hoef je niet apart te regelen.</p>
<h2>Tip 1: reserveer op tijd</h2>
<p>Vooral op vrijdag- en zaterdagavond is het druk. Reserveer daarom een paar dagen van tevoren via TheFork of bel ons op 020-6435287. Geef het aantal personen door en of er kinderen bij zijn, dan zetten we de tafels klaar.</p>
<h2>Tip 2: begin met iets om te delen</h2>
<p>Bestel een paar voorgerechten voor op tafel: stokbrood met kruidenboter, focaccia, bruschetta of carpaccio. Zo kan iedereen meteen aanschuiven terwijl de hoofdgerechten worden bereid.</p>
<h2>Tip 3: mix pizza, pasta en grill</h2>
<p>Laat iedereen kiezen uit pizza, <a href="/pasta-amstelveen/">pasta</a> of iets van de <a href="/steak-grill-amstelveen/">grill</a>. Pizza’s zijn ook leuk om in het midden te zetten en te delen.</p>
<h2>Tip 4: sluit af met een dessert</h2>
<p>Een verjaardag zonder toetje bestaat niet. Kies huisgemaakte tiramisu, een dame blanche of een coupe met advocaat. Laat het ons weten als er iemand jarig is.</p>
<h2>Thuis of op kantoor vieren?</h2>
<p>Liever thuis of op het werk? Dan verzorgen we <a href="/catering-italiaans-restaurant-amstelveen/">catering</a>, met desgewenst een mobiele bar met cocktails en mocktails.</p>
<h2>Waar zitten we?</h2>
<p>Telepizza ligt aan de Amsterdamseweg 452 in Amstelveen, met gratis parkeren in de buurt. Bekijk ons <a href="/restaurant-amstelveen/">restaurant</a> of ga direct naar het <a href="/menu-italiaans-restaurant-amstelveen/">menu</a>.</p>`,
  },
  {
    slug: 'pasta-carbonara-romeins-of-romig',
    title: 'Pasta carbonara: Romeins of romig?',
    desc: 'Hoort er room in carbonara? De Romeinse klassieker met ei, pecorino en guanciale, en waarom wij kiezen voor een romige versie met spek.',
    date: '2026-10-20', img: '/images/ph/pasta-penne.webp', imgAlt: 'Pasta uit de keuken van Telepizza Amstelveen',
    intro: 'Weinig gerechten zorgen voor zoveel discussie als carbonara. Puristen zeggen: nooit room. Toch is de romige variant in Nederland enorm populair. Wat is het verschil, en hoe maken wij hem?',
    body: `
<h2>De Romeinse carbonara</h2>
<p>De klassieke carbonara komt uit Rome. Het recept is kort: pasta, eidooier, geraspte pecorino romano, gebakken guanciale (gezouten varkenswang) en veel zwarte peper. De saus ontstaat doordat het ei en de kaas binden met een beetje kookwater van de pasta. Room hoort er in die versie niet in.</p>
<h2>De romige variant</h2>
<p>Buiten Italië wordt carbonara vaak met room gemaakt. Dat geeft een zachtere, vollere saus die minder snel schift. Veel van onze gasten kennen en waarderen juist die smaak.</p>
<h2>Zo maken wij hem bij Telepizza</h2>
<p>Onze pasta carbonara maken we met spek, ei, roomsaus en Parmezaanse kaas. Omdat al ons vlees halal is, gebruiken we geen varkensvlees. Je kiest zelf of je hem met spaghetti of penne wilt. Het resultaat is romig, hartig en vullend: niet de Romeinse versie, maar wel een gerecht waar gasten voor terugkomen.</p>
<h2>Andere pasta’s om te proberen</h2>
<p>Hou je van romig? Probeer dan ook de Pasta Tartufo Zucchine met truffel, champignons en courgette, of de Pasta Salmone met zalm en mosterd-roomsaus. Liever iets met tomaat? Kies arrabbiata, puttanesca of onze huisgemaakte bolognese. Alle opties staan op de pagina <a href="/pasta-amstelveen/">pasta in Amstelveen</a>.</p>
<h2>Proef het zelf</h2>
<p>Carbonara is het lekkerst direct uit de pan. <a href="/restaurant-amstelveen/">Kom bij ons eten</a> aan de Amsterdamseweg en bestel er een frisse salade of een stokbroodje met kruidenboter bij.</p>`,
  },
  {
    slug: 'wat-is-een-kapsalon',
    title: 'Wat is een kapsalon? Het verhaal van een Nederlandse klassieker',
    desc: 'Wat is een kapsalon en waar komt de naam vandaan? Over het Rotterdamse gerecht met friet, shoarma en kaas, en waar je halal kapsalon eet in Amstelveen.',
    date: '2026-10-16', img: '/images/menu/kapsalon.webp', imgAlt: 'Kapsalon met shoarma, kaas en salade',
    intro: 'Friet, vlees, gesmolten kaas en salade in één bak: de kapsalon is misschien wel het bekendste Nederlandse snackgerecht van deze eeuw. Maar waarom heet het eigenlijk zo?',
    body: `
<h2>Waar komt de naam vandaan?</h2>
<p>De kapsalon komt uit Rotterdam en is ontstaan in de jaren 2000. Volgens het bekende verhaal vroeg een kapper bij een shoarmazaak in de buurt steeds om dezelfde combinatie: friet met shoarma, kaas uit de oven en salade erop. Het gerecht werd naar zijn zaak vernoemd. Daarna verspreidde de kapsalon zich snel door heel Nederland en zelfs daarbuiten.</p>
<h2>Wat zit erin?</h2>
<p>Een kapsalon bestaat uit lagen. Onderin ligt friet, daarop shoarma of ander vlees, dan een laag kaas die in de oven smelt. Bovenop komt een frisse salade met sla, tomaat en komkommer, en daarover saus: meestal knoflooksaus en sambal.</p>
<h2>De kapsalon bij Telepizza</h2>
<p>Bij Telepizza kies je uit drie varianten: kapsalon shoarma, kapsalon kip shoarma en kapsalon döner, elk voor € 11,95. Al ons vlees is halal en onze knoflooksaus en sambal maken we zelf. Liever vegetarisch? Dan is de schotel falafel een goed alternatief.</p>
<h2>Kapsalon en pizza aan één tafel</h2>
<p>Het mooie aan Telepizza is dat iedereen aan tafel iets anders kan kiezen. De een neemt een pizza of pasta, de ander een kapsalon of shoarmaschotel. Zo is er altijd iets voor iedereen, zeker met een groep.</p>
<h2>Laat op de avond</h2>
<p>De kapsalon is bij uitstek een gerecht voor na een avond uit. Wij zijn <a href="/laat-open-amstelveen/">open tot 01:45</a>, op vrijdag en zaterdag tot 03:00. Lees meer over onze <a href="/kapsalon-amstelveen/">kapsalon in Amstelveen</a> of bekijk het <a href="/menu-italiaans-restaurant-amstelveen/#kapsalon">menu</a>.</p>`,
  },
];

import { moreArticles } from './articles-more';
articles.push(...moreArticles);
articles.sort((a, b) => b.date.localeCompare(a.date));
