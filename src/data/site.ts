// Centrale bedrijfsgegevens. Pas deze waarden aan; de hele site werkt ze automatisch bij.
// Er is bewust NIETS verzonnen: onbekende waarden staan op null en worden op de site
// netjes weggelaten of als "volgt binnenkort" getoond.

export const site = {
  name: 'Telepizza Amstelveen',
  url: 'https://telepizza-amstelveen.nl',
  street: 'Amsterdamseweg 452',
  postalCode: '1181 BW',
  city: 'Amstelveen',
  country: 'NL',
  phone: '+31206435287' as string | null,
  phoneDisplay: '020-6435287' as string | null,
  email: 'contact.telepizza@gmail.com' as string | null,
  orderUrl: 'https://telepizza.sitedish.shop/' as string | null,
  // Meting. TODO-CONTROLEREN: vul het GA4-meet-ID (G-XXXXXXX) en eventueel het Google Ads-ID (AW-XXXXXXX) in.
  // Zolang deze op null staan, wordt er niets gemeten en verschijnt er geen cookiebanner.
  ga4Id: null as string | null,
  adsId: null as string | null,
  // Bezorging. TODO-CONTROLEREN: alleen invullen als het klopt; lege waarden worden niet getoond.
  delivery: {
    fee: null as string | null, // bijv. '€ 2,50'
    minimum: null as string | null, // bijv. '€ 15,00'
    time: null as string | null, // bijv. '30–45 minuten'
    postcodes: '1181–1188 (Amstelveen) en 1081–1083 (Buitenveldert/Zuidas)', // TODO-CONTROLEREN tegen het bezorggebied in Sitedish
  },
  // TODO-CONTROLEREN: klopt "gratis parkeren in de buurt"?
  parkingNote: 'Parkeren kan in de buurt van het restaurant.',
  reserveUrl: 'https://widget.thefork.com/d10a03f4-2fab-4cc5-a1a6-ca3b826a931b' as string | null,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Telepizza+Amsterdamseweg+452+Amstelveen',
  sameAs: ['https://www.instagram.com/telepizza_nl/', 'https://www.tiktok.com/@telepizza_nl'] as string[],
  // Socials met icoon op de site. Facebook verschijnt zodra hier een link staat.
  social: {
    instagram: 'https://www.instagram.com/telepizza_nl/',
    tiktok: 'https://www.tiktok.com/@telepizza_nl',
    facebook: null as string | null,
  },
  // Scores op reviewplatforms (gecontroleerd 1 november 2026). Bijwerken als de cijfers veranderen.
  platforms: [
    { id: 'google', name: 'Google', score: '4,7', max: '5', count: 1404, url: 'https://www.google.com/maps/place/Restaurant+Telepizza/@52.3169572,4.857271,17z' },
    { id: 'thefork', name: 'TheFork', score: '9', max: '10', count: 149, url: 'https://widget.thefork.com/d10a03f4-2fab-4cc5-a1a6-ca3b826a931b' },
    { id: 'tripadvisor', name: 'Tripadvisor', score: '4,2', max: '5', count: 48, url: 'https://www.tripadvisor.nl/Search?q=Telepizza%20Amstelveen' },
    { id: 'sitedish', name: 'Sitedish', score: '5', max: '5', count: 197, url: 'https://telepizza.sitedish.shop/' },
  ],
  // Prijzen/vermeldingen die bovenaan de site getoond worden. Alleen invullen als ze echt zijn toegekend.
  awards: [] as { label: string; by: string }[],
    foundingYear: 1984,
  // Maandag gesloten. Sluitingstijd na middernacht valt op de volgende dag.
  hours: [
    { day: 'Dinsdag', schema: 'Tuesday', open: '15:00', close: '01:45' },
    { day: 'Woensdag', schema: 'Wednesday', open: '15:00', close: '01:45' },
    { day: 'Donderdag', schema: 'Thursday', open: '15:00', close: '01:45' },
    { day: 'Vrijdag', schema: 'Friday', open: '15:00', close: '03:00' },
    { day: 'Zaterdag', schema: 'Saturday', open: '15:00', close: '03:00' },
    { day: 'Zondag', schema: 'Sunday', open: '15:00', close: '01:45' },
  ] as { day: string; schema: string; open: string; close: string }[],
  // Google-score volgens het Google Bedrijfsprofiel (1 november 2026: 4,7 uit 1.404).
  // TODO-CONTROLEREN: actuele aantal reviews. Dit getal wordt overal op de site gebruikt.
  rating: { label: 'Excellent', value: 4.7, count: 1404 },
  googleReviewsUrl: 'https://www.google.com/maps/place/Restaurant+Telepizza/@52.3169572,4.857271,17z',
  // Echte Google-reviews (Google Maps en de huidige site), nieuwste eerst.
  reviews: [
    { author: 'Georgin Forham', lang: 'nl', text: 'Wij hebben hier gegeten bij Telepizza en het was heerlijk. Zowel de pizza, pasta als de calzone waren van goede kwaliteit en smaakten erg vers. Wij hadden gereserveerd via hun eigen website en kwamen rond 18:00 aan in een volle zaak, wat altijd een goed teken is. Ondanks de drukte werden we vriendelijk ontvangen en snel geholpen.' },
    { author: 'René Nobel', lang: 'nl', text: 'Vandaag gegeten bij Telepizza in Amstelveen. Echt een uitstekende ervaring. Het eten was heerlijk en goed bereid. Maar wat mij vooral opviel was de fantastische klantenservice. Een heus familie bedrijf waar je als een warm bad binnen komt.' },
    { author: 'Sebastiaan van der Pal', lang: 'nl', text: 'Gerund door vader en zoon. Net opgeknapt en heeft een gezellige sfeer. Het zijn vriendelijke mensen en de pizza was dikke prima. Als ik hier in de buurt woonde zou dit een vaste plek worden.' },
    { author: 'can olcer', lang: 'en', text: 'It was great and our server Thomas was the best, service was very fast and the food was also delicious and prices are affordable as well.' },
    { author: 'Paul Hupe', lang: 'de', text: 'Gute Pizza und guter Service. Der Laden ist ein wenig klein, ist aber mekern auf höchstem Neveau. In großen und ganzen ein super Erlebniss. Kann ich nur weiter empfehlen.' },
    { author: 'Ivan Alexeev', lang: 'en', text: 'Very tasty food, perfect service!' },
    { author: 'Batman', lang: 'en', text: 'All went great, ate pizza and loved it, Thomas the waiter was very kind and easy to talk to.' },
    { author: 'Maik Hupe', lang: 'de', text: 'Super gute Pizza und hervorragender Service. Wir sind durch the Fork auf die Pizzeria gestoßen und wurden wie immer nicht enttäuscht.' },
    { author: 'Noah Silva', lang: 'en', text: 'Lovely place!' },
    { author: 'Ian', lang: 'en', text: 'Thomas was amazing!!' },
  ] as { author: string; lang: string; text: string }[],
  // TODO-CONTROLEREN: geldt halal echt voor ál het vlees (ook salami, pepperoni, spek, Parmaham)?
  // Zo niet: "halal vlees beschikbaar" + aanduiding per gerecht. Zie het eindrapport voor alle pagina's.
  halal: true,
  geo: { lat: 52.3169572, lng: 4.857271 } as { lat: number; lng: number } | null,
};

export const fullAddress = `${site.street}, ${site.postalCode} ${site.city}`;

export const wijken = [
  { slug: 'buitenveldert', name: 'Buitenveldert', pc: '1081–1083', text: 'Buitenveldert ligt direct ten noorden van de Amsterdamseweg, op een paar minuten van ons restaurant. Na Amstelveen zelf is het ons grootste bezorggebied. Of je nu woont rond het Gelderlandplein, bij de VU en het Amsterdam UMC werkt of studeert, of een rondje door het Amstelpark hebt gemaakt: een pizza met handgerekt deeg, een romige pasta of een steak van de grill bestel je eenvoudig online. Liever zelf ophalen? Afhalen aan de Amsterdamseweg 452 is vanuit Buitenveldert vlakbij. Voor een avondje uit kom je natuurlijk ook gewoon bij ons eten.' },
  { slug: 'zuidas', name: 'Zuidas', pc: '1082–1083', text: 'Op de Zuidas wonen en werken duizenden mensen in kantoren en appartementen. Na een lange werkdag of tijdens een overleg dat uitloopt, is een vers bereide pizza of pasta een makkelijke keuze. Bestel online voor thuis of op kantoor. Organiseer je een lunch, borrel of teamavond? Dan verzorgen wij Italiaanse catering met pizza, pasta, salades en desserts, desgewenst met een mobiele bar. Lees meer over <a href="/catering-italiaans-restaurant-amstelveen/#bedrijven">catering voor bedrijven</a>. En wie liever even de deur uit gaat: ons restaurant aan de Amsterdamseweg ligt op korte afstand.' },
  { slug: 'oude-dorp', name: 'Oude Dorp', pc: '1181', todo: true, text: 'Het Oude Dorp is het historische hart van Amstelveen, met de Dorpsstraat, oude panden en gezellige straatjes. Vanuit het Oude Dorp ben je zo bij ons restaurant aan de Amsterdamseweg om af te halen of aan tafel te gaan. Liever thuis eten? Bestel je pizza, pasta of grillgerecht online. Ideaal na een wandeling langs de Amstel of een bezoek aan het Amsterdamse Bos: vers bereid eten, zonder zelf te hoeven koken.' },
  { slug: 'bovenkerk', name: 'Bovenkerk', pc: '1187', todo: true, text: 'Bovenkerk is een dorp binnen Amstelveen, met een eigen karakter tussen de polders en de Poel. Ook vanuit Bovenkerk kun je bij Telepizza bestellen. Kies een klassieke margherita, een pizza met truffel en Parmaham of een romige pasta, en geniet er thuis van met het hele gezin. Zelf afhalen kan aan de Amsterdamseweg 452, en voor een etentje buiten de deur reserveer je eenvoudig een tafel in ons restaurant.' },
  { slug: 'westwijk', name: 'Westwijk', text: 'Westwijk ligt in het zuidwesten van Amstelveen, met veel gezinnen en rustige woonstraten rond het Westwijkplein. Na een lange dag even geen zin om te koken? Dan is een pizza bestellen de makkelijkste oplossing voor het hele gezin.' },
  { slug: 'bankras-kostverloren', name: 'Bankras-Kostverloren', text: 'Bankras-Kostverloren is een groene wijk met veel water en parken. Of je nu thuis eet of een avondje met vrienden plant: met een warme pizza of pasta maak je er snel een gezellige avond van.' },
  { slug: 'elsrijk', name: 'Elsrijk', text: 'Elsrijk ligt centraal, tussen het Stadshart en het Amsterdamse Bos. Voor bewoners van Elsrijk is afhalen bij ons extra makkelijk, en natuurlijk kun je ook laten bezorgen.' },
  { slug: 'middenhoven', name: 'Middenhoven', text: 'Middenhoven is een levendige wijk in het zuiden van Amstelveen, met veel jonge gezinnen. Ideaal voor een pizza-avond op vrijdag of een snelle maaltijd door de week.' },
  { slug: 'groenelaan', name: 'Groenelaan', text: 'Groenelaan ligt in het noordoosten van Amstelveen, tegen de Amstel aan. Of je nu werkt of woont in Groenelaan: een vers bereide pizza is altijd een goed idee.' },
  { slug: 'waardhuizen', name: 'Waardhuizen', text: 'Waardhuizen is een rustige woonwijk in het zuidoosten van Amstelveen. Bestel je pizza, pasta of shoarma en geniet thuis van Italiaans eten zonder gedoe.' },
  { slug: 'stadshart', name: 'Stadshart', text: 'In het Stadshart wonen, werken en winkelen veel mensen. Na het winkelen of na kantoortijd haal je snel iets lekkers bij ons, of laat je het bezorgen.' },
  { slug: 'keizer-karelpark', name: 'Keizer Karelpark', text: 'Keizer Karelpark is een groene wijk met veel studenten en gezinnen. Een betaalbare pizza voor een avond met huisgenoten of familie bestel je eenvoudig bij ons.' },
  { slug: 'randwijck', name: 'Randwijck', text: 'Randwijck ligt in het noorden van Amstelveen, vlak bij Amsterdam en ons restaurant aan de Amsterdamseweg. Daardoor is afhalen voor bewoners van Randwijck heel dichtbij.' },
];
