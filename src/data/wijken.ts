// Wijkpagina's /bezorgen-amstelveen/<slug>/. Elke wijk heeft eigen tekst en eigen FAQ's.
// Geen minutenbeloftes over route of levertijd; levertijd staat in de bestelwinkel.
// Middenhoven, Groenelaan en Waardhuizen hebben geen eigen pagina (301 naar /bezorgen-amstelveen/): zonder
// controleerbare kennis van die wijken zou de tekst verzonnen of gekopieerd zijn.
export interface Wijk {
  slug: string; name: string; pc?: string; todo?: boolean;
  intro: string; sections: [string, string][]; faq: [string, string][];
}

export const wijken: Wijk[] = [
  {
    slug: 'randwijck', name: 'Randwijck',
    intro: 'Randwijck is de wijk waar Telepizza thuishoort. Ons restaurant staat aan de Amsterdamseweg, de doorgaande weg die door het noorden van Amstelveen loopt. Voor bewoners van Randwijck zijn we dus echt de pizzeria om de hoek.',
    sections: [
      ['Een wijk op de grens met Amsterdam', 'Randwijck ligt in het noorden van Amstelveen, tegen Buitenveldert aan. Je merkt hier dat Amstelveen en Amsterdam in elkaar overlopen: veel bewoners werken in de stad of op de Zuidas, maar wonen liever in een rustige straat met groen voor de deur. Het is een wijk met een mix van gezinnen, ouderen en jonge stellen, en met korte lijnen naar winkels, scholen en sportvelden.'],
      ['Even langslopen of laten bezorgen', 'Omdat je zo dichtbij woont, is afhalen voor veel mensen uit Randwijck de makkelijkste keuze. Bestel online, kies afhalen en loop of fiets naar de Amsterdamseweg. Je kunt ook gewoon binnenlopen en aan de bar wachten terwijl je pizza in de oven gaat. Wil je de deur niet uit? Dan bezorgen we natuurlijk ook in Randwijck.'],
      ['Onze buren sinds 1984', 'Sommige gasten uit Randwijck komen al jaren bij ons, eerst alleen en later met hun eigen gezin. Dat maakt Randwijck voor ons meer dan een bezorgadres: het is onze eigen buurt. Kom gerust eens langs voor een etentje in het vernieuwde restaurant met de plantenwand en de neon.'],
    ],
    faq: [
      ['Hoe ver is Telepizza van Randwijck?', 'Heel dichtbij: ons restaurant staat aan de Amsterdamseweg 452, midden in het noorden van Amstelveen. Voor de meeste bewoners van Randwijck is afhalen op loop- of fietsafstand.'],
      ['Kan ik in het restaurant wachten op mijn afhaalbestelling?', 'Ja. Je kunt binnen wachten of aan de bar iets drinken terwijl we je bestelling klaarmaken.'],
      ['Bezorgen jullie in heel Randwijck?', 'Ja, Randwijck valt binnen ons bezorggebied. Je ziet de bezorgkosten en levertijd direct in de bestelwinkel.'],
    ],
  },
  {
    slug: 'elsrijk', name: 'Elsrijk',
    intro: 'Elsrijk ligt centraal in Amstelveen, tussen het Stadshart en het Amsterdamse Bos. Het is een groene woonwijk met brede lanen, veel bomen en een rustig karakter. Wie hier woont, heeft de stad en de natuur allebei dichtbij.',
    sections: [
      ['Wonen tussen park en centrum', 'Elsrijk is een van de oudere naoorlogse wijken van Amstelveen, met eengezinswoningen, lage flats en veel groen tussen de huizen. Je loopt zo naar de winkels in het centrum, en op zondag fiets je het Amsterdamse Bos in. Het is een populaire wijk voor gezinnen en voor mensen die al lang in Amstelveen wonen.'],
      ['Pizza-avond na een dag in het Bos', 'Na een middag wandelen, fietsen of spelen in het Amsterdamse Bos heeft niemand meer zin om te koken. Dan is een pizza-avond de oplossing. Bestel online een paar pizza’s, een pasta uit de oven en een salade, en laat het bezorgen in Elsrijk. Of maak er een uitje van en kom bij ons eten; de kinderen kiezen zelf hun pizza.'],
      ['Van Elsrijk naar de Amsterdamseweg', 'Ons restaurant ligt in het noorden van Amstelveen aan de Amsterdamseweg. Vanuit Elsrijk rijd of fiets je richting Amstelveen-Noord en volg je de Amsterdamseweg tot nummer 452. Afhalen is daarmee goed te doen, zeker als je toch in de buurt bent voor boodschappen of werk.'],
    ],
    faq: [
      ['Bezorgen jullie in Elsrijk?', 'Ja, Elsrijk valt binnen ons bezorggebied in Amstelveen. Vul je adres in bij het online bestellen voor de actuele bezorgkosten en levertijd.'],
      ['Hebben jullie een kindvriendelijke keuze?', 'Ja. Kinderen kiezen vaak een margherita, salami of pasta bolognese. Grote groepen met kinderen zijn ook welkom in het restaurant.'],
      ['Kan ik voor een groep in één keer bestellen?', 'Ja, combineer gerust meerdere pizza’s, pasta’s en salades in één bestelling. Voor een feest bieden we ook catering aan.'],
    ],
  },
  {
    slug: 'stadshart', name: 'Stadshart',
    intro: 'Het Stadshart is het bruisende centrum van Amstelveen, met winkels, horeca, de schouwburg, het Cobra Museum in de buurt en het Stadsplein. Hier wonen, werken en winkelen veel mensen, en daar hoort goed eten bij.',
    sections: [
      ['Na het winkelen, na de voorstelling', 'Wie een middag door het Stadshart heeft gelopen of een voorstelling heeft gezien, wil daarna vaak nog iets eten. Omdat ons restaurant tot laat open is, kun je ook na een avondvoorstelling nog bij ons terecht voor een pizza, pasta of steak. Liever direct naar huis? Bestel dan online en laat het bezorgen in het Stadshart.'],
      ['Appartementen en kantoren', 'In en rond het Stadshart staan veel appartementen en kantoren. Voor wie hier woont is bezorgen ideaal: je hoeft geen parkeerplek te zoeken en je eten komt warm aan de deur. Werk je in het centrum en loopt de dag uit? Bestel dan een paar pizza’s voor het team. Voor grotere groepen verzorgen we ook catering op kantoor.'],
      ['Even de stad uit', 'Het Stadshart is druk en gezellig, maar soms is het fijn om ergens rustig te zitten. Ons restaurant aan de Amsterdamseweg ligt in het noorden van Amstelveen, buiten de drukte van het centrum. Je zit er aan gedekte tafels onder de neon, met bediening die tijd voor je neemt.'],
    ],
    faq: [
      ['Kan ik na een voorstelling nog bij jullie eten?', 'Ja, we zijn open tot 02:00, op vrijdag en zaterdag tot 03:20. Bekijk de actuele openingstijden op de contactpagina en reserveer gerust vooraf.'],
      ['Bezorgen jullie ook in appartementencomplexen?', 'Ja. Zet je huisnummer, toevoeging en eventueel de verdieping duidelijk in je bestelling, dan bellen we aan bij de juiste deur.'],
      ['Bezorgen jullie op kantoor in het centrum?', 'Ja, ook kantoren in het Stadshart kunnen bestellen. Voor grote groepen kun je catering aanvragen.'],
    ],
  },
  {
    slug: 'oude-dorp', name: 'Oude Dorp', pc: '1181', todo: true,
    intro: 'Het Oude Dorp is het historische hart van Amstelveen. Rond de Dorpsstraat staan nog oude panden, kerken en karakteristieke huizen die laten zien hoe Amstelveen er vroeger uitzag. Het is een sfeervolle buurt met een dorps gevoel, midden in de stad.',
    sections: [
      ['Dorps wonen in een stad', 'Wie in het Oude Dorp woont, kent zijn buren. Er zijn kleine straatjes, oude gevels en een levendige Dorpsstraat met winkels en horeca. Het voelt kleinschalig, terwijl de voorzieningen van het centrum op korte afstand liggen. Een buurt waar je makkelijk een avondje samen eet.'],
      ['Thuis eten zonder te koken', 'Voor een vrijdagavond met het gezin, een spelletjesavond met vrienden of gewoon omdat je geen zin hebt om te koken: bestel bij Telepizza en laat het bezorgen. Onze pizza’s maken we met handgerekt deeg en huisgemaakte tomatensaus, en ook de pasta’s, grillgerechten en salades bereiden we vers op het moment dat je bestelt.'],
      ['Afhalen of aan tafel', 'Vanuit het Oude Dorp ga je richting Amstelveen-Noord naar de Amsterdamseweg om af te halen. Wil je liever blijven? Reserveer dan een tafel in ons restaurant. Het is een mooie afwisseling met de restaurants in het centrum: geen dorpsterras, maar een levendige zaal met een plantenwand, neon en cocktails.'],
    ],
    faq: [
      ['Bezorgen jullie in het Oude Dorp?', 'Het Oude Dorp ligt in Amstelveen; vul je postcode in bij het online bestellen om te zien of we bij je adres bezorgen en wat de levertijd is.'],
      ['Wat is populair voor een avond met vrienden?', 'Een mix van pizza’s om te delen, zoals de Telepizza, truffel prosciutto en margherita, aangevuld met een pasta en tiramisu.'],
      ['Kan ik ook telefonisch bestellen?', 'Ja, bel 020-6435287 om te bestellen of te reserveren.'],
    ],
  },
  {
    slug: 'westwijk', name: 'Westwijk',
    intro: 'Westwijk ligt aan de zuidwestkant van Amstelveen. Het is een relatief jonge wijk met veel gezinswoningen, groen en water, en met het Westwijkplein als winkelhart. Kinderen fietsen hier naar school en spelen buiten in de straat.',
    sections: [
      ['Een echte gezinswijk', 'In Westwijk wonen veel gezinnen met kinderen. Doordeweeks is het rennen tussen werk, school, sport en zwemles, en dan schiet het koken er weleens bij in. Op zulke avonden is een pizza bestellen de makkelijkste oplossing. Iedereen kiest zijn eigen favoriet, en niemand hoeft af te wassen.'],
      ['Ideeën voor een pizza-avond', 'Voor kinderen zijn de margherita, salami en Hawaii vaak de favorieten. Ouders kiezen eerder een pizza met Parmaham en rucola of de popeye speciale met geitenkaas en honing. Vul aan met een pasta bolognese of een salade, en sluit af met tiramisu. Zo heb je met één bestelling een complete maaltijd voor het hele gezin.'],
      ['Bezorgen in Westwijk', 'Westwijk ligt verder van ons restaurant dan de wijken in het noorden, maar valt binnen ons bezorggebied in Amstelveen. De verwachte levertijd zie je bij het bestellen, zodat je weet wanneer het eten er is. Vier je een verjaardag of heb je een groot feest? Kijk dan naar onze catering met pizza, pasta, salades en desserts.'],
    ],
    faq: [
      ['Bezorgen jullie in Westwijk?', 'Ja, Westwijk ligt in Amstelveen en valt binnen ons bezorggebied. De bezorgkosten en levertijd zie je bij het online bestellen.'],
      ['Wat bestellen kinderen het vaakst?', 'Margherita, salami en pasta bolognese zijn bij kinderen het populairst.'],
      ['Verzorgen jullie ook een kinderfeestje?', 'Ja, met onze catering kun je pizza’s en pasta voor een feest bestellen. Neem contact op voor een voorstel.'],
    ],
  },
  {
    slug: 'bankras-kostverloren', name: 'Bankras-Kostverloren',
    intro: 'Bankras-Kostverloren is een groene wijk in het westen van Amstelveen, met veel water, parken en wandelpaden. De woningen liggen vaak aan singels of aan het groen, waardoor de wijk een rustige, ontspannen sfeer heeft.',
    sections: [
      ['Groen en water', 'Wie in Bankras-Kostverloren woont, heeft altijd water en groen in de buurt. Op mooie dagen zitten bewoners buiten, wandelen ze met de hond langs de vijvers of spelen de kinderen in de parkjes. Het is een wijk waar je de drukte van de stad even vergeet.'],
      ['Eten in de tuin of op het balkon', 'Op een zomeravond is er weinig fijner dan buiten eten. Bestel een paar pizza’s, een salade caprese en wat te drinken, en zet de tafel in de tuin of op het balkon. In de winter maak je het juist gezellig binnen met een romige pasta of een lasagna uit de oven. Wij bezorgen in Bankras-Kostverloren, het hele jaar door.'],
      ['Liever uit eten?', 'Wil je er even uit? Ons restaurant aan de Amsterdamseweg ligt in het noorden van Amstelveen. Je eet er aan gedekte tafels, met cocktails van de bar en een kaart met pizza, pasta en gerechten van de grill. Reserveer online of bel ons voor een tafel, ook voor een grotere groep.'],
    ],
    faq: [
      ['Bezorgen jullie in Bankras-Kostverloren?', 'Ja, de wijk valt binnen ons bezorggebied in Amstelveen. Je ziet de bezorgkosten en levertijd direct in de bestelwinkel.'],
      ['Wat is een goede keuze voor een warme zomeravond?', 'Een lichte pizza zoals de margherita of tonno, gecombineerd met een frisse salade, is een goede keuze voor buiten.'],
      ['Kan ik ook vooruit bestellen?', 'Ja, in de online bestelwinkel kun je vaak een later tijdstip kiezen. Twijfel je, bel ons dan even.'],
    ],
  },
  {
    slug: 'keizer-karelpark', name: 'Keizer Karelpark',
    intro: 'Keizer Karelpark ligt in het noorden van Amstelveen en is een groene, gevarieerde wijk. Er wonen gezinnen, ouderen, starters en studenten door elkaar, en het Amsterdamse Bos en de stad Amsterdam liggen allebei dichtbij.',
    sections: [
      ['Een wijk vol variatie', 'In Keizer Karelpark staan eengezinswoningen, flats en appartementen naast elkaar. Je vindt er scholen, sportvelden en winkels in de buurt. Die mix maakt de wijk levendig: overdag is het rustig, ’s avonds komt iedereen thuis en wordt er gekookt, of juist besteld.'],
      ['Betaalbaar eten voor huisgenoten en gezinnen', 'Een avond met huisgenoten, een verjaardag met familie of gewoon een doordeweekse maaltijd: met een pizza vanaf € 9,50 eet je goed voor een eerlijke prijs. Deel een paar pizza’s, voeg een kapsalon of een schaal pasta toe, en iedereen is blij. Bestel online en laat het bezorgen in Keizer Karelpark.'],
      ['Vlak bij ons restaurant', 'Omdat Keizer Karelpark net als ons restaurant in het noorden van Amstelveen ligt, ben je vanuit de wijk snel bij de Amsterdamseweg. Afhalen is dus goed te doen. Kom je liever eten? Ons restaurant is tot laat open en je kunt online een tafel reserveren.'],
    ],
    faq: [
      ['Bezorgen jullie in Keizer Karelpark?', 'Ja, Keizer Karelpark valt binnen ons bezorggebied. Vul je adres in bij het online bestellen voor de bezorgkosten en levertijd.'],
      ['Wat kost een pizza bij Telepizza?', 'Onze pizza’s kosten van € 9,50 (margherita) tot € 14,45; de meeste tussen € 12,95 en € 13,95.'],
      ['Hebben jullie ook een kapsalon?', 'Ja, de kapsalon staat op onze kaart en is een populaire keuze om te laten bezorgen.'],
    ],
  },
  {
    slug: 'bovenkerk', name: 'Bovenkerk', pc: '1187', todo: true,
    intro: 'Bovenkerk is een dorp binnen de gemeente Amstelveen, met een eigen karakter tussen de polders, de Poel en de Noorder Legmeerplas. Het voelt landelijk, met een dorpskern, oude boerderijen en veel ruimte rondom.',
    sections: [
      ['Landelijk wonen in Amstelveen', 'Wie in Bovenkerk woont, heeft het beste van twee werelden: de rust van het platteland en de voorzieningen van Amstelveen op korte afstand. Bewoners varen op de Poel, fietsen door de polder of wandelen langs het water. Het is een plek waar je graag thuis bent, en waar je op een vrije avond best eens iets lekkers laat brengen.'],
      ['Pizza in Bovenkerk', 'Ook in Bovenkerk kun je bij Telepizza bestellen. Kies een klassieke margherita, de specialiteit van de chef met Parmaham en rucola, of de truffel prosciutto. Liever iets anders? Probeer een romige pasta, spare ribs of een steak van de grill. Vul je postcode in bij het bestellen om je bezorgopties te zien.'],
      ['Combineer het met een uitje', 'Kom je naar het noorden van Amstelveen voor boodschappen, werk of een bezoek? Neem dan je bestelling mee aan de Amsterdamseweg 452, of blijf eten in ons restaurant. Voor een verjaardag of jubileum in Bovenkerk denken we ook graag mee over catering op locatie.'],
    ],
    faq: [
      ['Bezorgen jullie in Bovenkerk?', 'Vul je postcode in bij het online bestellen om te zien of we bij jouw adres in Bovenkerk bezorgen en wat de levertijd is. Je kunt ook altijd afhalen.'],
      ['Kunnen jullie catering verzorgen in Bovenkerk?', 'Ja, neem contact op met de datum, het aantal gasten en de locatie, dan maken we een voorstel.'],
      ['Wat raden jullie aan voor een feest?', 'Een mix van pizza’s in punten, een pasta uit de oven, salades en tiramisu. Zo is er voor iedereen iets.'],
    ],
  },
  {
    slug: 'buitenveldert', name: 'Buitenveldert', pc: '1081–1083',
    intro: 'Buitenveldert ligt direct ten noorden van de Amsterdamseweg, aan de Amsterdamse kant van de grens. Na Amstelveen zelf is het ons grootste bezorggebied. Of je nu woont rond het Gelderlandplein, bij de VU of het Amsterdam UMC werkt of studeert, of een rondje door het Amstelpark hebt gemaakt: Telepizza is dichtbij.',
    sections: [
      ['Amsterdam, maar dan rustig', 'Buitenveldert hoort bij Amsterdam, maar voelt anders dan de stad. Brede lanen, veel groen, flats met ruime balkons en het Gelderlandplein als winkelcentrum. Er wonen gezinnen, ouderen, studenten en expats, en veel mensen werken op de Zuidas of bij de VU en het ziekenhuis.'],
      ['Bezorgen in Buitenveldert', 'We bezorgen in Buitenveldert in de postcodes 1081 tot en met 1083. Je bestelt online in onze eigen bestelwinkel, dus je bestelling gaat rechtstreeks naar onze keuken. Kies een pizza met handgerekt deeg, een verse pasta of iets van de grill, en wij brengen het naar je toe. Werk je in de buurt en eet je op kantoor? Ook dan kun je bestellen.'],
      ['Afhalen of aan tafel', 'Omdat ons restaurant aan de Amsterdamseweg ligt, ben je vanuit Buitenveldert snel bij ons om af te halen. Ook voor een etentje hoef je niet ver: reserveer een tafel online en eet in een zaal met plantenwand en neon. Onze menukaart is ook in het Engels beschikbaar, handig voor internationale gasten.'],
    ],
    faq: [
      ['Bezorgen jullie in heel Buitenveldert?', 'We bezorgen in Buitenveldert in de postcodes 1081–1083. Vul je adres in bij het online bestellen voor de bezorgkosten en levertijd.'],
      ['Kunnen studenten en medewerkers van de VU bestellen?', 'Ja, je kunt naar huis of naar je werkadres in Buitenveldert laten bezorgen.'],
      ['Is er een Engelse menukaart?', 'Ja, onze menukaart en website zijn ook in het Engels beschikbaar.'],
    ],
  },
  {
    slug: 'zuidas', name: 'Zuidas', pc: '1082',
    intro: 'De Zuidas is het zakendistrict van Amsterdam, rond station Amsterdam Zuid. Duizenden mensen werken hier in kantoren, en steeds meer mensen wonen er ook in nieuwe appartementencomplexen. Telepizza ligt op korte afstand, net over de grens in Amstelveen.',
    sections: [
      ['Lunch, overwerk en borrels', 'Op de Zuidas lopen werkdagen vaak uit. Een overleg dat later klaar is, een deadline die eraan komt of een team dat samen een project afrondt: dan is een paar pizza’s bestellen de snelste manier om iedereen te laten eten. Bestel online voor je kantoor op de Zuidas, of vraag catering aan voor een lunch, borrel of teamavond.'],
      ['Catering voor bedrijven', 'Voor bedrijven verzorgen we Italiaanse catering met pizza’s, pasta’s, salades en desserts, desgewenst met een mobiele bar met personeel. Eén aanspreekpunt, één bestelling en vegetarische opties voor wie geen vlees eet. Lees meer over <a href="/catering-italiaans-restaurant-amstelveen/#bedrijven">catering voor bedrijven</a> of vraag direct een offerte aan.'],
      ['Wonen op de Zuidas', 'Woon je op de Zuidas? Na een lange dag heb je misschien geen zin meer om te koken. Bestel dan een pizza, een romige carbonara of een steak van de grill en laat het thuis bezorgen. Liever er even uit? Ons restaurant aan de Amsterdamseweg ligt dichtbij, met cocktails, een levendige zaal, open tot 02:00 (vrijdag en zaterdag tot 03:20).'],
    ],
    faq: [
      ['Bezorgen jullie op kantoren op de Zuidas?', 'Ja, de Zuidas valt binnen ons bezorggebied. Zet bedrijfsnaam, verdieping en een telefoonnummer bij je bestelling.'],
      ['Kan ik catering voor een team aanvragen?', 'Ja, voor lunches, borrels en teamavonden. Vul het offerteformulier op de cateringpagina in of bel ons.'],
      ['Kan ik voor een groep reserveren in het restaurant?', 'Ja, bel ons vooraf voor een grotere groep, dan zetten we tafels voor je klaar.'],
    ],
  },
];
