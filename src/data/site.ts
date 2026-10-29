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
  reserveUrl: 'https://widget.thefork.com/d10a03f4-2fab-4cc5-a1a6-ca3b826a931b' as string | null,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Telepizza+Amsterdamseweg+452+Amstelveen',
  sameAs: ['https://www.instagram.com/telepizza_nl/', 'https://www.tiktok.com/@telepizza_nl'] as string[],
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
  rating: { label: 'Excellent', count: 934 },
  reviews: [
    { author: 'Ivan Alexeev', text: 'Very tasty food, perfect service!' },
    { author: 'Ian', text: 'Thomas was amazing!!' },
    { author: 'can olcer', text: 'It was great and our server Thomas was the best, service was very fast and the food was also delicious and prices are affordable as well.' },
  ],
  geo: null as { lat: number; lng: number } | null,
};

export const fullAddress = `${site.street}, ${site.postalCode} ${site.city}`;

export const wijken = [
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
