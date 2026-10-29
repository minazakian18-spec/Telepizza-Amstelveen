// Gerechten met eigen foto (uit de Telepizza-bestelwinkel). Prijzen gelijk aan het menu.
export interface Dish { name: string; img: string; price: number; text: string; tag?: string }

export const dishes: Record<string, Dish> = {
  telePizza: { name: 'Tele Pizza', img: 'tele-pizza', price: 13.95, text: 'Ham, salami, champignons, paprika, ui, artisjok en spinazie.', tag: 'Huisspecialiteit' },
  truffel: { name: 'Pizza Truffel Prosciutto', img: 'pizza-truffel', price: 14.45, text: 'Truffelmascarpone, Parmaham, gegrilde courgette, rucola en Parmezaan.', tag: 'Favoriet' },
  pepperoni: { name: 'Pizza Pepperoni', img: 'pizza-pepperoni', price: 12.95, text: 'Tomatensaus, kaas en pepperoni op handgerekt deeg.' },
  margherita: { name: 'Pizza Margherita', img: 'pizza-margherita', price: 9.5, text: 'Tomatensaus en kaas. De klassieker.' },
  chef: { name: 'Specialiteit van de Chef', img: 'pizza-chef', price: 14.45, text: 'Verse tomaat, Parmaham, rucola, pijnboompitten en Parmezaan.' },
  carpaccioPizza: { name: 'Pizza Carpaccio', img: 'pizza-carpaccio', price: 13.95, text: 'Runder carpaccio, pesto, pijnboompitten, rucola en Parmezaan.' },
  popeye: { name: 'Pizza Popeye Speciale', img: 'pizza-popeye', price: 14.45, text: 'Spinazie, geitenkaas, gekarameliseerde ui, getopt met honing.', tag: 'Vegetarisch' },
  bbq: { name: 'Pizza BBQ Chicken', img: 'pizza-bbq', price: 13.95, text: 'BBQ-saus, kaas, kip, mais en paprika.' },
  shoarmaPizza: { name: 'Pizza Shoarma', img: 'pizza-shoarma', price: 13.95, text: 'Kaas, shoarma, knoflooksaus en sambal.' },
  quattro: { name: 'Pizza Quattro Formaggi', img: 'pizza-quattro-formaggi', price: 12.95, text: 'Tomatensaus met vier soorten kaas.', tag: 'Vegetarisch' },
  gamberoniPizza: { name: 'Pizza Gamberoni', img: 'pizza-gamberoni', price: 14.45, text: 'Garnalen, knoflook, peterselie, rode ui en rucola.' },
  calzone: { name: 'Calzone', img: 'calzone', price: 13.45, text: 'Dubbelgevouwen pizza met ham, salami, champignons en paprika.' },
  carbonara: { name: 'Pasta Carbonara', img: 'pasta-carbonara', price: 12.95, text: 'Spek, ei, roomsaus en Parmezaanse kaas.', tag: 'Favoriet' },
  bolognese: { name: 'Pasta Bolognese', img: 'pasta-bolognese', price: 12.95, text: 'Huisgemaakte rundergehaktsaus en Parmezaan.' },
  tartufo: { name: 'Pasta Tartufo Zucchine', img: 'pasta-tartufo', price: 13.95, text: 'Truffelpasta met champignons, roomsaus en courgette.' },
  salmone: { name: 'Pasta Salmone', img: 'pasta-salmone', price: 14.45, text: 'Zalm, spinazie, rode ui en mosterd-roomsaus.' },
  gamberoniPasta: { name: 'Pasta Gamberoni', img: 'pasta-gamberoni', price: 14.45, text: 'Garnalen in rosésaus met knoflook en rucola.' },
  pollo: { name: 'Pasta Pollo', img: 'pasta-pollo', price: 13.45, text: 'Gegrilde kip, champignons, broccoli en roomsaus.' },
  lasagna: { name: 'Lasagna al Forno', img: 'lasagna', price: 13.45, text: 'Huisgemaakte bolognesesaus en kaas uit de oven.' },
  kapsalon: { name: 'Kapsalon Shoarma', img: 'kapsalon', price: 11.95, text: 'Friet, shoarma, gesmolten kaas, frisse salade en saus.', tag: 'Halal' },
  shoarmaSchotel: { name: 'Shoarma Schotel', img: 'shoarma-schotel', price: 16.95, text: 'Verse shoarma van de spies met salade en frites.', tag: 'Halal' },
  kipSchotel: { name: 'Kip Shoarma Schotel', img: 'kip-shoarma-schotel', price: 16.95, text: 'Kipshoarma met salade, friet en twee sauzen.', tag: 'Halal' },
  ribs: { name: 'Spare Ribs', img: 'spare-ribs', price: 19.95, text: 'In een heerlijke marinade, sweet of hot.', tag: 'Grill' },
  baconBurger: { name: 'Bacon Burger', img: 'bacon-burger', price: 12.95, text: 'Crispy bacon, sla, augurk, rode ui en burgersaus.' },
  burgerMenu: { name: 'Hamburger Menu', img: 'hamburger-menu', price: 16.95, text: 'Klassieke burger met friet en saus.' },
  caprese: { name: 'Caprese Salade', img: 'caprese', price: 7.45, text: 'Buffelmozzarella, verse tomaten en basilicum.' },
  tiramisu: { name: 'Tiramisu', img: 'tiramisu', price: 5.95, text: 'Huisgemaakt dessert van het huis.' },
};

export const pick = (...keys: (keyof typeof dishes)[]) => keys.map(k => dishes[k]);
export const eur = (p: number) => '€ ' + p.toFixed(2).replace('.', ',');
