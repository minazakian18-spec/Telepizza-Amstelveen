// "Halal vlees ⓘ" als HTML, zodat hij ook in teksten met set:html past (component HalalInfo gebruikt hetzelfde).
// Zonder JavaScript is ⓘ een link naar de halalpagina; het script in Base maakt er een knop met popover van.
export const halalCopy: Record<string, { label: string; aria: string; text: string; except: string; more: string }> = {
  nl: { label: 'Halal vlees', aria: 'Meer info over halal', text: 'Al ons vlees is halal: kalkoenham, rundersalami, runderpepperoni, kip, lamsshoarma en kalfsribs.', except: 'Uitzondering: gerechten met het label ‘Niet halal’ bevatten varkensvlees (Parmaham, bacon, pancetta, spek).', more: 'Meer over halal bij Telepizza' },
  en: { label: 'Halal meat', aria: 'More about halal', text: 'Our meat is halal: turkey ham, beef salami, beef pepperoni, chicken, lamb shawarma and veal ribs.', except: 'Exception: dishes labelled ‘Not halal’ contain pork (Parma ham, bacon, pancetta).', more: 'More about halal at Telepizza' },
  de: { label: 'Halal-Fleisch', aria: 'Mehr zu halal', text: 'Unser Fleisch ist halal: Putenschinken, Rindersalami, Rinderpepperoni, Hähnchen, Lammschawarma und Kalbsrippchen.', except: 'Ausnahme: Gerichte mit dem Hinweis ‘Nicht halal’ enthalten Schweinefleisch (Parmaschinken, Bacon, Pancetta).', more: 'Mehr über halal bei Telepizza' },
  fr: { label: 'Viande halal', aria: 'En savoir plus sur le halal', text: 'Notre viande est halal : jambon de dinde, salami et pepperoni de bœuf, poulet, chawarma d’agneau et travers de veau.', except: 'Exception : les plats marqués ‘Non halal’ contiennent du porc (jambon de Parme, bacon, pancetta).', more: 'En savoir plus sur le halal chez Telepizza' },
  it: { label: 'Carne halal', aria: 'Più informazioni sull’halal', text: 'La nostra carne è halal: prosciutto di tacchino, salame e pepperoni di manzo, pollo, shawarma di agnello e costine di vitello.', except: 'Eccezione: i piatti con l’etichetta ‘Non halal’ contengono maiale (prosciutto di Parma, bacon, pancetta).', more: 'Di più sull’halal da Telepizza' },
  es: { label: 'Carne halal', aria: 'Más información sobre halal', text: 'Nuestra carne es halal: jamón de pavo, salami y pepperoni de ternera, pollo, shawarma de cordero y costillas de ternera.', except: 'Excepción: los platos marcados ‘No halal’ contienen cerdo (jamón de Parma, bacon, panceta).', more: 'Más sobre halal en Telepizza' },
  tr: { label: 'Helal et', aria: 'Helal hakkında bilgi', text: 'Etlerimiz helaldir: hindi jambonu, dana salam, dana pepperoni, tavuk, kuzu döner ve dana kaburga.', except: 'İstisna: ‘Helal değil’ etiketli yemekler domuz eti içerir (Parma jambonu, bacon, pancetta).', more: 'Telepizza’da helal hakkında' },
  ar: { label: 'لحوم حلال', aria: 'معلومات عن الحلال', text: 'لحومنا حلال: لحم ديك رومي، سلامي وبيبروني بقري، دجاج، شاورما لحم ضأن وأضلاع عجل.', except: 'استثناء: الأطباق المميزة بعبارة ‘غير حلال’ تحتوي على لحم الخنزير.', more: 'المزيد عن الحلال' },
};
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let n = 0;
export function halalInfoHtml(lang = 'nl', label?: string) {
  const t = halalCopy[lang] ?? halalCopy.en;
  const url = '/halal-restaurant-amstelveen/';
  const id = `hi-${lang}-${++n}`;
  return `<span class="hi"><span class="hi-l">${esc(label ?? t.label)}</span> <a class="hi-btn" href="${url}" aria-label="${esc(t.aria)}" data-pop="${id}"><span aria-hidden="true">i</span></a><span class="hi-pop" id="${id}" role="dialog" aria-label="${esc(t.aria)}" hidden><span>${esc(t.text)}</span> <span>${esc(t.except)}</span> <a href="${url}">→ ${esc(t.more)}</a></span></span>`;
}
// Vervangt in een HTML-tekst de eerste halalclaim ("Ons vlees is halal", "Our meat is halal", ...) door "Halal vlees ⓘ".
const claim = /(?:Al )?(?:[Oo]ns|[Hh]et) vlees is (?:<a [^>]*>)?halal(?:<\/a>)?|Our meat is (?:<a [^>]*>)?halal(?:<\/a>)?|Unser Fleisch ist halal|Notre viande est halal|La (?:nostra )?carne è halal|Nuestra carne es halal|Etlerimiz helaldir|(?:اللحوم لدينا|لحومنا) حلال/;
export const withHalalInfo = (html: string, lang = 'nl') => html.replace(claim, () => halalInfoHtml(lang));
