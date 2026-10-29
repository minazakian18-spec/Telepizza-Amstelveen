// Centrale bedrijfsgegevens. Alles met TODO moet de eigenaar nog invullen/controleren.
// Er is bewust NIETS verzonnen: onbekende waarden staan op null en worden op de site
// netjes weggelaten of als "volgt binnenkort" getoond.

export const site = {
  name: 'Telepizza Amstelveen',
  url: 'https://telepizza-amstelveen.nl',
  // Bron: gemeente Amstelveen (vergunningsbesluiten 2025). TODO: eigenaar bevestigen.
  street: 'Amsterdamseweg 452',
  postalCode: '1181 BW',
  city: 'Amstelveen',
  country: 'NL',
  // TODO: telefoonnummer invullen, bijv. '+31201234567' en weergave '020 123 4567'
  phone: null as string | null,
  phoneDisplay: null as string | null,
  // TODO: e-mailadres invullen
  email: null as string | null,
  // TODO: link naar online bestellen (eigen bestelsysteem of Thuisbezorgd)
  orderUrl: null as string | null,
  // TODO: link of manier om te reserveren
  reserveUrl: null as string | null,
  // TODO: Google Maps-link van het bedrijfsprofiel (plaats-URL)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Telepizza+Amsterdamseweg+452+Amstelveen',
  // TODO: social media links
  sameAs: [] as string[],
  // TODO: openingstijden invullen, bijv. { day: 'Maandag', schema: 'Monday', open: '16:00', close: '22:00' }
  hours: [] as { day: string; schema: string; open: string; close: string }[],
  // TODO: coördinaten controleren in Google Maps
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
