// Blogartikelen. body is HTML; houd feiten controleerbaar en link naar relevante pagina's.
export interface Article { slug: string; title: string; desc: string; date: string; img: string; imgAlt: string; intro: string; body: string }

export const articles: Article[] = [
  {
    slug: 'beste-pizza-amstelveen',
    title: 'De beste pizza in Amstelveen: waar let je op?',
    desc: 'Waar vind je de lekkerste pizza in Amstelveen? Zo herken je een goede pizza: het deeg, de saus, de kaas en de oven. Met tips van Telepizza, sinds 1984 aan de Amsterdamseweg.',
    date: '2026-10-30', img: '/images/pizza-groente.webp', imgAlt: 'Pizza met verse groenten en geitenkaas van Telepizza Amstelveen',
    intro: 'Iedereen heeft een mening over pizza. Toch zijn er een paar dingen waaraan je een echt goede pizza herkent. Na ruim veertig jaar pizza bakken in Amstelveen zetten we ze voor je op een rij.',
    body: `
<h2>1. Het deeg maakt het verschil</h2>
<p>Een goede pizza begint bij het deeg. Het moet de tijd krijgen om te rijzen, zodat het luchtig wordt en smaak ontwikkelt. Bij Telepizza rekken we het deeg met de hand uit in plaats van het plat te rollen. Daardoor blijft er lucht in de rand, en krijg je die herkenbare, licht krokante korst met een zachte binnenkant.</p>
<h2>2. Een eerlijke tomatensaus</h2>
<p>De saus hoort de pizza te ondersteunen, niet te overheersen. Wij maken onze tomatensaus zelf, met tomaat, kruiden en een beetje knoflook. Niet te zoet en niet te dik, zodat de smaak van de toppings goed tot zijn recht komt.</p>
<h2>3. Kaas en toppings in balans</h2>
<p>Meer is niet altijd beter. Een pizza met te veel beleg wordt zwaar en de bodem wordt slap. Kijk liever naar de kwaliteit: goede mozzarella, echte Parmezaanse kaas, verse groenten en vlees van een betrouwbare leverancier. Onze <a href="/pizza-soorten/">speciale pizza’s</a> zoals de Truffel Prosciutto en de Popeye Speciale met geitenkaas en honing laten zien hoe een paar goede ingrediënten samen een heel gerecht maken.</p>
<h2>4. Heet bakken</h2>
<p>Een pizza moet kort en heet gebakken worden. Zo bakt de bodem knapperig af terwijl de kaas net smelt. Een pizza die lang op lage temperatuur in de oven staat, wordt droog. Bij ons gaat de pizza direct na het beleggen de oven in.</p>
<h2>5. Vers is beter: eet hem aan tafel</h2>
<p>Pizza is op zijn best in de eerste minuten na de oven. Daarom proef je het verschil het meest als je in het restaurant eet. <a href="/restaurant-amstelveen/">Schuif aan in ons restaurant</a> aan de Amsterdamseweg, met een glas wijn erbij. Thuis eten kan natuurlijk ook: haal je pizza zelf af, dan is hij het snelst bij je op tafel.</p>
<h2>Welke pizza moet je proberen?</h2>
<p>Ben je voor het eerst bij Telepizza? Begin met een klassieker, zoals de margherita of de pepperoni, om het deeg en de saus te proeven. Durf je meer? Kies dan de Tele Pizza, onze huisspecialiteit met ham, salami, champignons, paprika, ui, artisjok en spinazie, of de Specialiteit van de Chef met Parmaham, rucola en pijnboompitten. Bekijk alle <a href="/pizza-amstelveen/">pizza’s in Amstelveen</a> of het volledige <a href="/menu-italiaans-restaurant-amstelveen/">menu</a>.</p>`,
  },
  {
    slug: 'halal-uit-eten-amstelveen',
    title: 'Halal uit eten in Amstelveen: Italiaans, grill en meer',
    desc: 'Halal uit eten in Amstelveen? Bij Telepizza is al het vlees halal: pizza, pasta, steaks, shoarma en kapsalon. Lees wat je kunt verwachten en wat we serveren.',
    date: '2026-10-28', img: '/images/menu/pizza-shoarma.webp', imgAlt: 'Halal pizza shoarma',
    intro: 'Een restaurant vinden waar je zonder twijfel vlees kunt bestellen is niet altijd makkelijk. Bij Telepizza Amstelveen is al ons vlees halal. Zo kan iedereen aan tafel kiezen wat hij of zij wil.',
    body: `
<h2>Al het vlees halal</h2>
<p>Bij Telepizza hoef je niet te vragen welke gerechten halal zijn: al het vlees dat we gebruiken is halal. Dat geldt voor de salami en pepperoni op de pizza, de kipfilet in de pasta, de shoarma van de spies en de steaks van de grill.</p>
<h2>Italiaanse gerechten met halal vlees</h2>
<p>Juist bij Italiaans eten is halal vlees niet vanzelfsprekend. Denk aan pizza salami, pizza pepperoni, pasta bolognese met rundergehakt of lasagne. Bij ons kun je die klassiekers gewoon bestellen. Kijk voor alle opties op onze pagina over <a href="/halal-restaurant-amstelveen/">halal eten in Amstelveen</a>.</p>
<h2>Van de grill</h2>
<p>Liever een stuk vlees? Kies een biefstuk met champignon- of peperroomsaus, een ribeye, entrecote of de ossenhaas dello chef. Ook de spare ribs, sweet of hot, zijn populair. Alles komt met gemengde salade en frites of aardappelschijfjes. Meer op de pagina <a href="/steak-grill-amstelveen/">steaks en grill</a>.</p>
<h2>Shoarma, döner en kapsalon</h2>
<p>Naast Italiaanse gerechten serveren we shoarmaschotels, pizza döner en natuurlijk de <a href="/kapsalon-amstelveen/">kapsalon</a>. Ook hier is het vlees halal, met huisgemaakte knoflooksaus en sambal.</p>
<h2>Voor gezinnen en groepen</h2>
<p>Telepizza is een familierestaurant. Grote tafels zijn geen probleem; bel ons vooraf, dan zetten we alles klaar. Ook voor <a href="/catering-italiaans-restaurant-amstelveen/">catering</a> bij feesten en bijeenkomsten kun je bij ons terecht.</p>
<h2>Openingstijden</h2>
<p>We zijn open van dinsdag tot en met zondag vanaf 15:00, tot 01:45 en op vrijdag en zaterdag tot 03:00. <a href="/contact-route/">Plan je route</a> of reserveer direct een tafel.</p>`,
  },
  {
    slug: 'verjaardag-vieren-restaurant-amstelveen',
    title: 'Je verjaardag vieren in een restaurant in Amstelveen',
    desc: 'Op zoek naar een restaurant in Amstelveen om je verjaardag te vieren? Tips voor een etentje met familie of vrienden, met grote tafels, pizza, pasta en desserts.',
    date: '2026-10-24', img: '/images/restaurant-binnen.webp', imgAlt: 'De zaal van Telepizza Amstelveen',
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
    desc: 'Hoort er room in carbonara? Over de Romeinse klassieker met ei, pecorino en guanciale, en waarom wij in Amstelveen kiezen voor een romige versie met spek en Parmezaanse kaas.',
    date: '2026-10-20', img: '/images/pasta-carbonara.webp', imgAlt: 'Romige pasta van Telepizza Amstelveen',
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
    desc: 'Wat is een kapsalon en waar komt de naam vandaan? Over het Rotterdamse gerecht met friet, shoarma, kaas en salade, en waar je een halal kapsalon eet in Amstelveen.',
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
