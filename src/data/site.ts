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
  // Nieuwsbrief via Brevo (double opt-in). Zonder formAction worden pop-up en inschrijfformulieren niet getoond.
  // Voor een testbuild kan PUBLIC_BREVO_FORM als omgevingsvariabele worden meegegeven.
  newsletter: {
    formAction: (import.meta.env.PUBLIC_BREVO_FORM || null) as string | null, // TODO-CONTROLEREN: Brevo-formulier-URL (Brevo › Contacten › Formulieren › Delen › HTML-code › action="...")
    delaySeconds: 15,
    scrollPercent: 50,
    hideDays: 30,
  },
  privacyUrl: '/privacy/',
  adsId: null as string | null,
  // Bezorging. TODO-CONTROLEREN: alleen invullen als het klopt; lege waarden worden niet getoond.
  delivery: {
    fee: null as string | null, // bijv. '€ 2,50'
    minimum: null as string | null, // bijv. '€ 15,00'
    time: null as string | null, // bijv. '30–45 minuten'
    postcodes: '1181–1188 (Amstelveen), 1081–1083 (Buitenveldert en Zuidas) en 1075–1076 (Willemspark en Stadionbuurt)',
    // Bron: https://telepizza.sitedish.shop/informatie (november 2026). Actuele bedragen staan altijd in de bestelwinkel.
    zones: [
      ['1181', 'Elsrijk-West', '€ 14,95', '€ 2,25', 'zie bestelwinkel'],
      ['1182', 'Karselaankwartier en Bos', '€ 14,95', '€ 2,25', 'zie bestelwinkel'],
      ['1183', 'Bankras', '€ 14,95', '€ 2,50', '€ 30'],
      ['1184', 'Over-Ouderkerk', '€ 24,99', '€ 2,75', '€ 30'],
      ['1185', 'Keizer Karelpark-West', '€ 19,95', '€ 2,65', '€ 30'],
      ['1186', 'Groenelaan', '€ 19,95', '€ 2,65', '€ 30'],
      ['1187', 'Bovenkerk', '€ 24,95', '€ 3,50', '€ 35'],
      ['1188', 'Bovenkerkerpolder', '€ 19,95', '€ 2,65', '€ 35'],
      ['1081', 'Buitenveldert-West', '€ 14,95', '€ 2,50', '€ 30'],
      ['1082', 'Zuidas', '€ 14,95', '€ 2,50', '€ 30'],
      ['1083', 'Buitenveldert-Oost', '€ 19,95', '€ 2,50', '€ 30'],
      ['1075', 'Willemspark', '€ 24,95', '€ 2,50', '€ 30'],
      ['1076', 'Stadionbuurt', '€ 24,95', '€ 2,75', '€ 35'],
    ] as [string, string, string, string, string][],
    hours: 'Dinsdag t/m donderdag 16:00–21:00, vrijdag en zaterdag 16:00–21:30, zondag 16:00–20:30, maandag gesloten.',
    payment: 'iDEAL | Wero',
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
  // Scores op reviewplatforms (Google gecontroleerd 9 november 2026; TheFork 1 november 2026). Bijwerken als de cijfers veranderen.
  platforms: [
    { id: 'google', name: 'Google', score: '4,7', max: '5', count: 0, url: 'https://www.google.com/maps/place/Restaurant+Telepizza/@52.3169572,4.857271,17z' },
    { id: 'thefork', name: 'TheFork', score: '9', max: '10', count: 149, url: 'https://widget.thefork.com/d10a03f4-2fab-4cc5-a1a6-ca3b826a931b' },
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
  // Google-score volgens het Google Bedrijfsprofiel (9 november 2026: 4,7 uit 1.426).
  // TODO-CONTROLEREN: actuele aantal reviews. Dit getal wordt overal op de site gebruikt.
  rating: { label: 'Excellent', value: 4.7, count: 1426 },
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

export { wijken } from './wijken';

// Google-score en -aantal staan op één plek (rating); de platformkaart neemt ze over.
const g = site.platforms.find(p => p.id === 'google');
if (g) { g.count = site.rating.count; g.score = String(site.rating.value).replace('.', ','); }
