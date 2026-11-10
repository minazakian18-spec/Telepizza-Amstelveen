// Gerechten met eigen foto (uit de Telepizza-bestelwinkel). Prijzen gelijk aan het menu.
export interface Dish { name: string; img: string; price: number; text: string; tag?: string; notHalal?: boolean; en?: string }

export const dishes: Record<string, Dish> = {
  telePizza: { name: 'Telepizza', img: 'tele-pizza', price: 13.95, text: 'Kalkoenham, rundersalami, champignons, paprika, ui, artisjok en spinazie.', tag: 'Huisspecialiteit', en: "Turkey ham, beef salami, mushrooms, pepper, onion, artichoke and spinach." },
  truffel: { name: 'Pizza Truffel Prosciutto', img: 'pizza-truffel', price: 14.45, text: 'Truffelmascarpone, Parmaham (varkensvlees), gegrilde courgette, rucola en Parmezaan.', tag: 'Favoriet', notHalal: true, en: "Truffle mascarpone, Parma ham (pork), grilled courgette, rocket and Parmesan." },
  pepperoni: { name: 'Pizza Pepperoni', img: 'pizza-pepperoni', price: 12.95, text: 'Tomatensaus, kaas en runderpepperoni op handgerekt deeg.', en: "Tomato sauce, cheese and beef pepperoni on hand-stretched dough." },
  margherita: { name: 'Pizza Margherita', img: 'pizza-margherita', price: 9.5, text: 'Tomatensaus en kaas. De klassieker.', en: "Tomato sauce and cheese. The classic." },
  chef: { name: 'Specialiteit van de Chef', img: 'pizza-chef', price: 14.45, text: 'Verse tomaat, Parmaham (varkensvlees), rucola, pijnboompitten en Parmezaan.', notHalal: true, en: "Fresh tomato, Parma ham (pork), rocket, pine nuts and Parmesan." },
  carpaccioPizza: { name: 'Pizza Carpaccio', img: 'pizza-carpaccio', price: 13.95, text: 'Runder carpaccio, pesto, pijnboompitten, rucola en Parmezaan.', en: "Beef carpaccio, pesto, pine nuts, rocket and Parmesan." },
  popeye: { name: 'Pizza Popeye Speciale', img: 'pizza-popeye', price: 14.45, text: 'Spinazie, geitenkaas, gekarameliseerde ui, getopt met honing.', tag: 'Vegetarisch', en: "Spinach, goat’s cheese, caramelised onion, topped with honey." },
  bbq: { name: 'Pizza BBQ Chicken', img: 'pizza-bbq', price: 13.95, text: 'BBQ-saus, kaas, kip, mais en paprika.', en: "BBQ sauce, cheese, chicken, sweetcorn and pepper." },
  shoarmaPizza: { name: 'Pizza Shoarma', img: 'pizza-shoarma', price: 13.95, text: 'Kaas, lamsshoarma, knoflooksaus en sambal.', en: "Cheese, lamb shawarma, garlic sauce and sambal." },
  quattro: { name: 'Pizza Quattro Formaggi', img: 'pizza-quattro-formaggi', price: 12.95, text: 'Tomatensaus met vier soorten kaas.', tag: 'Vegetarisch', en: "Tomato sauce with four cheeses." },
  gamberoniPizza: { name: 'Pizza Gamberoni', img: 'pizza-gamberoni', price: 14.45, text: 'Garnalen, knoflook, peterselie, rode ui en rucola.', en: "Prawns, garlic, parsley, red onion and rocket." },
  calzone: { name: 'Calzone', img: 'calzone', price: 13.45, text: 'Dubbelgevouwen pizza met kalkoenham, rundersalami, champignons en paprika.', en: "Folded pizza with turkey ham, beef salami, mushrooms and pepper." },
  carbonara: { name: 'Pasta Carbonara', img: 'pasta-carbonara', price: 12.95, text: 'Spek (varkensvlees), ei, roomsaus en Parmezaanse kaas.', notHalal: true, tag: 'Favoriet', en: "Bacon (pork), egg, cream sauce and Parmesan." },
  bolognese: { name: 'Pasta Bolognese', img: 'pasta-bolognese', price: 12.95, text: 'Huisgemaakte rundergehaktsaus en Parmezaan.', en: "Homemade beef ragù and Parmesan." },
  tartufo: { name: 'Pasta Tartufo Zucchine', img: 'pasta-tartufo', price: 13.95, text: 'Truffelpasta met champignons, roomsaus en courgette.', en: "Truffle pasta with mushrooms, cream and courgette." },
  salmone: { name: 'Pasta Salmone', img: 'pasta-salmone', price: 14.45, text: 'Zalm, spinazie, rode ui en mosterd-roomsaus.', en: "Salmon, spinach, red onion and creamy mustard sauce." },
  gamberoniPasta: { name: 'Pasta Gamberoni', img: 'pasta-gamberoni', price: 14.45, text: 'Garnalen in rosésaus met knoflook en rucola.', en: "Prawns in rosé sauce with garlic and rocket." },
  pollo: { name: 'Pasta Pollo', img: 'pasta-pollo', price: 13.45, text: 'Gegrilde kip, champignons, broccoli en roomsaus.', en: "Grilled chicken, mushrooms, broccoli and cream sauce." },
  lasagna: { name: 'Lasagne al Forno', img: 'lasagna', price: 13.45, text: 'Huisgemaakte bolognesesaus en kaas uit de oven.', en: "Homemade bolognese and cheese from the oven." },
  shoarmaSchotel: { name: 'Shoarma Schotel', img: 'shoarma-schotel', price: 16.95, text: 'Verse lamsshoarma van de spies met salade en frites.', tag: 'Halal', en: "Fresh lamb shawarma from the spit with salad and fries." },
  kipSchotel: { name: 'Kip Shoarma Schotel', img: 'kip-shoarma-schotel', price: 16.95, text: 'Kipshoarma met salade, friet en twee sauzen.', tag: 'Halal', en: "Chicken shawarma with salad, fries and two sauces." },
  ribs: { name: 'Spare Ribs', img: 'spare-ribs', price: 19.95, text: 'Halal kalfsribs in een huisgemaakte marinade, sweet of hot.', tag: 'Grill', en: "Halal veal ribs in a homemade marinade, sweet or hot." },
  baconBurger: { name: 'Bacon Burger', img: 'bacon-burger', price: 12.95, text: 'Crispy bacon (varkensvlees), sla, augurk, rode ui en burgersaus.', notHalal: true, en: "Crispy bacon (pork), lettuce, pickle, red onion and burger sauce." },
  burgerMenu: { name: 'Hamburger Menu', img: 'hamburger-menu', price: 16.95, text: 'Klassieke burger met friet en saus.', en: "Classic burger with fries and sauce." },
  caprese: { name: 'Caprese Salade', img: 'caprese', price: 7.45, text: 'Buffelmozzarella, verse tomaten en basilicum.', en: "Buffalo mozzarella, fresh tomatoes and basil." },
  tiramisu: { name: 'Tiramisu', img: 'tiramisu', price: 5.95, text: 'Huisgemaakt dessert van het huis.', en: "Homemade house dessert." },
};

export const pick = (...keys: (keyof typeof dishes)[]) => keys.map(k => dishes[k]);
export const eur = (p: number, lang = 'nl') => lang === 'en' ? '€' + p.toFixed(2) : lang === 'nl' ? '€ ' + p.toFixed(2).replace('.', ',') : p.toFixed(2).replace('.', ',') + ' €';
// Gerechtnamen die in andere talen anders heten (de rest is Italiaans en blijft gelijk).
export const dishName: Record<string, Record<string, string>> = {
  'Specialiteit van de Chef': { en: 'Chef’s Speciality', de: 'Spezialität des Küchenchefs', fr: 'Spécialité du chef', it: 'Specialità dello chef', es: 'Especialidad del chef', tr: 'Şefin Spesiyali', ar: 'طبق الشيف الخاص' },
  'Pizza Truffel Prosciutto': { en: 'Truffle Prosciutto Pizza', de: 'Pizza Trüffel Prosciutto', fr: 'Pizza Truffe Prosciutto', it: 'Pizza Tartufo e Prosciutto', es: 'Pizza Trufa y Prosciutto', tr: 'Trüflü Prosciutto Pizza', ar: 'بيتزا الكمأة والبروشوتو' },
  'Shoarma Schotel': { en: 'Shawarma Platter', de: 'Schawarma-Teller' },
  'Kip Shoarma Schotel': { en: 'Chicken Shawarma Platter', de: 'Hähnchen-Schawarma-Teller' },
  'Vlees (per topping)': { en: 'Meat (per topping)', de: 'Fleisch (pro Belag)', fr: 'Viande (par garniture)', it: 'Carne (per condimento)', es: 'Carne (por ingrediente)', tr: 'Et (malzeme başına)', ar: 'لحم (لكل إضافة)' },
  'Parmaham of bacon (per topping)': { en: 'Parma ham or bacon (per topping)', de: 'Parmaschinken oder Bacon (pro Belag)', fr: 'Jambon de Parme ou bacon (par garniture)', it: 'Prosciutto di Parma o bacon (per condimento)', es: 'Jamón de Parma o bacon (por ingrediente)', tr: 'Parma jambonu veya bacon (malzeme başına)', ar: 'لحم بارما أو بيكون (لكل إضافة)' },
  'Overig (per topping)': { en: 'Other (per topping)', de: 'Sonstiges (pro Belag)', fr: 'Autre (par garniture)', it: 'Altro (per condimento)', es: 'Otros (por ingrediente)', tr: 'Diğer (malzeme başına)', ar: 'أخرى (لكل إضافة)' },
  'Groenten (per topping)': { en: 'Vegetables (per topping)', de: 'Gemüse (pro Belag)', fr: 'Légumes (par garniture)', it: 'Verdure (per condimento)', es: 'Verduras (por ingrediente)', tr: 'Sebze (malzeme başına)', ar: 'خضار (لكل إضافة)' },
  'Kaas (per topping)': { en: 'Cheese (per topping)', de: 'Käse (pro Belag)', fr: 'Fromage (par garniture)', it: 'Formaggio (per condimento)', es: 'Queso (por ingrediente)', tr: 'Peynir (malzeme başına)', ar: 'جبن (لكل إضافة)' },
  'Vis (per topping)': { en: 'Fish (per topping)', de: 'Fisch (pro Belag)', fr: 'Poisson (par garniture)', it: 'Pesce (per condimento)', es: 'Pescado (por ingrediente)', tr: 'Balık (malzeme başına)', ar: 'سمك (لكل إضافة)' },
  'Caprese Salade': { en: 'Caprese Salad', de: 'Caprese-Salat', fr: 'Salade Caprese', it: 'Insalata Caprese', es: 'Ensalada Caprese' },
};

export const notHalalLabel: Record<string, string> = { nl: 'Niet halal', en: 'Not halal', de: 'Nicht halal', fr: 'Non halal', it: 'Non halal', es: 'No halal', tr: 'Helal değil', ar: 'غير حلال' };
