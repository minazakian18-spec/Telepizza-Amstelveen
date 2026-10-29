// Menu en prijzen, overgenomen uit de menu-PDF van Telepizza Amstelveen.
// Prijs in euro's met een punt, bijv. 12.95. priceText = afwijkende weergave (bijv. klein/groot).
export interface Item { name: string; description?: string; price: number | null; priceText?: string }
export interface Section { name: string; note?: string; items: Item[] }
export const menu: Section[] = [
  {
    "name": "Voorgerechten",
    "items": [
      {
        "name": "Stokbrood",
        "price": 3.95,
        "description": "Met kruidenboter"
      },
      {
        "name": "Focaccia",
        "price": 4.95,
        "description": "Met pizza bodem"
      },
      {
        "name": "Bruschetta",
        "price": 7.95,
        "description": "Geroosterd Italiaans brood met verse tomaten en basilicumsaus"
      },
      {
        "name": "Carpaccio",
        "price": 11.95,
        "description": "Rauwe ossenhaas met Parmezaane kaas en pijnboompitten"
      },
      {
        "name": "Garnalen Cocktail",
        "price": 14.95,
        "description": "Hollandse garnalen"
      },
      {
        "name": "Funghi Trifolati",
        "price": 9.95,
        "description": "Gebakken champignons in kruidenboter"
      }
    ]
  },
  {
    "name": "Soepen",
    "items": [
      {
        "name": "Minestrone",
        "price": 7.95,
        "description": "verse groentesoep"
      },
      {
        "name": "Zuppe di Pomodore",
        "price": 6.95,
        "description": "verse tomatensoep met geraspte kaas"
      }
    ]
  },
  {
    "name": "Salades",
    "items": [
      {
        "name": "Caprese Salade",
        "price": 7.45,
        "description": "Buffelkaas met verse tomaten en basilicumsaus"
      },
      {
        "name": "Griekse Salade",
        "price": 8.95,
        "description": "Gemende salade, feta, olijven, rode ui, tomaten en komkommer"
      },
      {
        "name": "Tonijn Salade",
        "price": 8.95,
        "description": "Gemende salade, tonijn, ui, tomaten en komkommer"
      },
      {
        "name": "Kip Salade",
        "price": 9.95,
        "description": "Gemende salade, kip, ui, tomaten en komkommer"
      },
      {
        "name": "Garnalen Salade",
        "price": 12.45,
        "description": "Gemende salade, garnalen, ui, tomaten en komkommer"
      },
      {
        "name": "Carpaccio Salade",
        "price": 11.95,
        "description": "met gerookte zalm"
      }
    ]
  },
  {
    "name": "Extra toppings",
    "items": [
      {
        "name": "Groenten (per topping)",
        "price": 1.75,
        "description": "Gegrilde aubergine, courgette, verse tomaat, cherrytomaat, ananas, kappertjes, brocoli, rucola, erwten, Spaanse pepper, mais, pijnboompitten, paprika, rode uien, champignons, olijven, artisjok, spinazie"
      },
      {
        "name": "Kaas (per topping)",
        "price": 2.0,
        "description": "Geraspte kaas, Parmezaanse kaas, geiten kaas, mozzarella, gorgonzola"
      },
      {
        "name": "Vlees (per topping)",
        "price": 2.5,
        "description": "Ham, salami, peperoni, kipfilet, Parmaham, bacon, bolognese, shoarma"
      },
      {
        "name": "Vis (per topping)",
        "price": 2.75,
        "description": "Tonijn, ansjovis, zalm, garnalen, zeevruchten"
      }
    ]
  },
  {
    "name": "Pasta’s",
    "items": [
      {
        "name": "Pasta Napolitana",
        "price": 11.45,
        "description": "Met huisgemaakte Napolitana saus, cherrytomaten, rucola en Parmezaanse kaas"
      },
      {
        "name": "Pasta Pesto",
        "price": 12.95,
        "description": "Met basilicum pesto, roomkaas, pijnboompitten en Parmezaanse kaas"
      },
      {
        "name": "Pasta Arrabiata",
        "price": 11.95,
        "description": "Met tomatensaus, knoflook, pikante Spaanse pepers, cherrytomaten en Parmezaanse kaas"
      },
      {
        "name": "Pasta Putanesca",
        "price": 13.95,
        "description": "Met tomatensaus, olijven, kappertjes, knoflook, ansjovis en Parmezaanse kaas"
      },
      {
        "name": "Pasta Bolognese",
        "price": 12.95,
        "description": "Met huisgemaakte rundergehakt saus en Parmezaanse kaas"
      },
      {
        "name": "Pasta Carbonara",
        "price": 12.95,
        "description": "Met spek, ei, roomsaus en Parmezaanse kaas"
      },
      {
        "name": "Pasta Quattro Formaggi",
        "price": 13.45,
        "description": "Met vier soorten kaas, rucola en pijnboompitten"
      },
      {
        "name": "Pasta Pollo",
        "price": 13.45,
        "description": "Gegrilde kipfilet, champignons, broccoli, roomsaus en Parmezaanse kaas"
      },
      {
        "name": "Pasta Vegetariana",
        "price": 12.95,
        "description": "Met rijk gevulde verse groente pasta in tomatensaus, rucola en Parmezaanse kaas"
      },
      {
        "name": "Pasta Tartufo Zucchine",
        "price": 13.95,
        "description": "Truffel pasta met champignons, roomsaus, courgette en Parmezaanse kaas"
      },
      {
        "name": "Pasta Milanese",
        "price": 13.45,
        "description": "Met huisgemaakte rundergehakt saus, champignons, uien en Parmezaanse kaas"
      },
      {
        "name": "Pasta Tonno Ansjovis",
        "price": 13.45,
        "description": "Met tonijn en ansjovis in tomatensaus en rucola"
      },
      {
        "name": "Pasta Gambereoni",
        "price": 14.45,
        "description": "Met garnalen, rosesaus, knoflook, rode uien, bleekseldererij, rucola en Parmezaanse kaas"
      },
      {
        "name": "Pasta Salmone",
        "price": 14.45,
        "description": "Met zalm, rode uien, spinazie, mosterd roomsaus, rucola en Parmezaanse kaas"
      },
      {
        "name": "Pasta Frutti di Mare",
        "price": 14.45,
        "description": "Met diverse zeevruchten, knoflook, rucola, bleekselderij en Parmezaanse kaas"
      },
      {
        "name": "Ravioli Spinazie Ricotta",
        "price": 12.95,
        "description": "Deegkussentjes gevuld met wilde spinazie, ricotta kaas, champignons in tomaten roomsaus"
      },
      {
        "name": "Tortellini Bolognesi",
        "price": 12.95,
        "description": "Deegkussentjes gevuld met rundergehakt, champignons, tomaten roomsaus en Parmezaanse kaas"
      },
      {
        "name": "Cannelloni",
        "price": 13.45,
        "description": "Deeg rollen gevuld met wilde spinazie, ricotta kaas, tomatensaus uit de oven en getopped met rucola"
      },
      {
        "name": "Lasagna al Forno",
        "price": 13.45,
        "description": "Met huisgemaakte bolognesesaus en kaas uit de oven"
      }
    ],
    "note": "Keuze uit spaghetti of penne"
  },
  {
    "name": "Vegetarische Pizza’s",
    "items": [
      {
        "name": "Pizza Margherita",
        "price": 9.5,
        "description": "Tomatensaus en kaas"
      },
      {
        "name": "Pizza Cipolla",
        "price": 11.95,
        "description": "Tomatensaus, kaas en uien"
      },
      {
        "name": "Pizza Funghi",
        "price": 12.45,
        "description": "Tomatensaus, kaas en champignons"
      },
      {
        "name": "Pizza Amara",
        "price": 11.95,
        "description": "Tomatensaus, kaas, Spaanse pepers en knoflook"
      },
      {
        "name": "Pizza Mozzarella",
        "price": 12.45,
        "description": "Tomatensaus, kaas en mozzarella kaas en cherry tomaten"
      },
      {
        "name": "Pizza Gorgonzola",
        "price": 12.45,
        "description": "Tomatensaus, kaas en gorgonzola blauwe kaas"
      },
      {
        "name": "Pizza Quattro Formaggi",
        "price": 12.95,
        "description": "Tomatensaus met vier soorten kaas"
      },
      {
        "name": "Pizza Parmigiana",
        "price": 12.95,
        "description": "Tomatensaus, kaas, gegrilde aubergine, cherry tomaten en Parmezaanse kaas"
      },
      {
        "name": "Pizza Vegetariana",
        "price": 13.95,
        "description": "Tomatensaus, kaas en rijk belegd met diverse groenten"
      }
    ]
  },
  {
    "name": "Pizza’s met vlees",
    "items": [
      {
        "name": "Pizza Salami",
        "price": 12.95,
        "description": "Tomatensaus, kaas en salami"
      },
      {
        "name": "Pizza Pepperoni",
        "price": 12.95,
        "description": "Tomatensaus, kaas en pepperoni"
      },
      {
        "name": "Pizza Borromea",
        "price": 12.95,
        "description": "Tomatensaus, kaas en ham"
      },
      {
        "name": "Pizza Hawai",
        "price": 12.95,
        "description": "Tomatensaus, kaas, ham en ananas"
      },
      {
        "name": "Pizza Capricciosa",
        "price": 12.95,
        "description": "Tomatensaus, kaas, ham champignons en artisjok"
      },
      {
        "name": "Pizza Pollo",
        "price": 13.95,
        "description": "Tomatensaus, kaas, kipfilet en champignons"
      },
      {
        "name": "Pizza Romana",
        "price": 13.95,
        "description": "Tomatensaus, kaas, pepperoni, champignons, paprika, uien en olijven"
      },
      {
        "name": "Pizza Quattro Stagioni",
        "price": 13.45,
        "description": "Tomatensaus, kaas, ham, salami, paprika en champignons"
      },
      {
        "name": "Pizza Contadina",
        "price": 13.95,
        "description": "Tomatensaus, kaas, ham, ei, spinazie en knoflook"
      },
      {
        "name": "Pizza Shoarma",
        "price": 13.95,
        "description": "Tomatensaus, kaas, shoarma en twee sauzen"
      },
      {
        "name": "Pizza Kip Shoarma",
        "price": 13.95,
        "description": "Tomatensaus, kaas, kipshoarma met knoflooksaus en sambal"
      }
    ]
  },
  {
    "name": "Pizza’s met vis",
    "items": [
      {
        "name": "Pizza Tonno",
        "price": 12.95,
        "description": "Tomatensaus, kaas, tonijn en rode uien"
      },
      {
        "name": "Pizza Tonno Speciale",
        "price": 13.95,
        "description": "Tomatensaus, kaas, tonijn, rode uien, kappertjes, olijven en rucola"
      },
      {
        "name": "Pizza Napoletana",
        "price": 13.45,
        "description": "Tomatensaus, kaas, ansjovis, kappertjes en olijven"
      },
      {
        "name": "Pizza Salmone",
        "price": 13.95,
        "description": "Tomatensaus, kaas, zalm, rode uien, kappertjes en rucola"
      },
      {
        "name": "Pizza Gamberoni",
        "price": 14.45,
        "description": "Tomatensaus, kaas, garnalen, knoflook, peterselie, rode uien en rucola"
      },
      {
        "name": "Pizza Frutti di Mare",
        "price": 14.45,
        "description": "Tomatensaus, kaas, tonijn, en diverse zeevruchten, knoflook en ansjovis"
      }
    ]
  },
  {
    "name": "Calzone’s",
    "items": [
      {
        "name": "Calzone",
        "price": 13.45,
        "description": "Dubbelgevouwen pizza met tomatensaus, kaas, ham, salami, champignons, paprika en uien"
      },
      {
        "name": "Calzone Shoarma",
        "price": 13.95,
        "description": "Dubbelgevouwen pizza met kaas, shoarma en twee sauzen"
      },
      {
        "name": "Calzone Caponata Vegetarisch",
        "price": 13.45,
        "description": "Dubbelgevouwen pizza met kaas en gebakken verse groenten"
      }
    ]
  },
  {
    "name": "Speciale Pizza’s",
    "items": [
      {
        "name": "Tele Pizza",
        "price": 13.95,
        "description": "Tomatensaus, kaas, ham, salami, champignons, paprika, ui, artisjokken en spinazie"
      },
      {
        "name": "Specialiteit van de Chef",
        "price": 14.45,
        "description": "Tomatensaus, kaas, verse tomaten, prosciutto di Parmaham, rucola, pijnboompitten en Parmazaanse kaas"
      },
      {
        "name": "Pizza Pancetta Bianca",
        "price": 14.45,
        "description": "Met becon, kaas, champignons, gekarameliseerde uien, zongedroogde tomaten en peterselie"
      },
      {
        "name": "Pizza BBQ Chicken",
        "price": 13.95,
        "description": "BBQ-saus, kaas, kip, mais en paprika"
      },
      {
        "name": "Pizza Truffel Prosciutto",
        "price": 14.45,
        "description": "Truffel mascarpone, scheutjes tomatensaus, Parmaham, gegrilde courgette, rucola en Parmerzaanse kaas"
      },
      {
        "name": "Pizza Carpaccio",
        "price": 13.95,
        "description": "Scheutjes tomatensaus, runder carpaccio, basilicum pesto, pijnboompitten, basilicum, rucola en Parmezaanse kaas"
      },
      {
        "name": "Pizza Popeye Speciale",
        "price": 14.45,
        "description": "Scheutjes tomatensaus, spinazie, geitenkaas, gekarameliseerde uien, zongedroogde tomaten, gegrilde courgette getopped met honing"
      },
      {
        "name": "Pizza Nutella",
        "price": 12.45,
        "description": "Luchtige bodem met romige Nutella bestrooid met poedersuiker en aardbei"
      }
    ]
  },
  {
    "name": "Vleesgerechten",
    "items": [
      {
        "name": "Bistecca ai Funghi",
        "price": 24.95,
        "description": "Biefstuk in champignon roomsaus"
      },
      {
        "name": "Bistecca al Pepe Verde",
        "price": 24.95,
        "description": "Biefstuk in peperroomsaus"
      },
      {
        "name": "Entecote",
        "price": 27.95,
        "description": "In champignon roomsaus of peperroomsaus"
      },
      {
        "name": "Ribeye",
        "price": 24.95,
        "description": "In champignon roomsaus of peperroomsaus"
      },
      {
        "name": "Ossenhaas Dello Chef",
        "price": 31.95,
        "description": "Haasbiefstuk in champignon roomsaus of peperroomsaus"
      },
      {
        "name": "Scalloppina",
        "price": 24.95,
        "description": "Schnizel in champignon roomsaus of peperroomsaus"
      },
      {
        "name": "Varkenshaas",
        "price": 23.95,
        "description": "in champignon roomsaus of peperroomsaus"
      },
      {
        "name": "Spare Ribs",
        "price": 19.95,
        "description": "Overgoten in een heerlijke marinade sweet of hot"
      }
    ],
    "note": "Met gemengde salade en frites of aardappelschijfjes"
  },
  {
    "name": "Visgerechten",
    "items": [
      {
        "name": "Scampi’s van de Grill",
        "price": 28.95,
        "description": "Met gemengde salade, frites of aardappelschuifjes"
      },
      {
        "name": "Calamari Fritti",
        "price": 21.95,
        "description": "Gefrituurde inktvis met gemengde salade, frites of aardappelschuifjes"
      },
      {
        "name": "Gegrilde Zalm",
        "price": 21.95,
        "description": "Met gemengde salade, frites of aardappelschuifjes"
      }
    ]
  },
  {
    "name": "Schotels",
    "items": [
      {
        "name": "Shoarma",
        "price": 16.95,
        "description": "Verse shoarma van de spies"
      },
      {
        "name": "Shoarma Speciaal",
        "price": 17.95,
        "description": "Met paprika, ui en champignons"
      },
      {
        "name": "Kipfilet",
        "price": 18.95,
        "description": "De beste stukken kippenborst"
      }
    ],
    "note": "Met gemengde salade en frites of aardappelschijfjes"
  },
  {
    "name": "Burgers",
    "items": [
      {
        "name": "Klassieke Burger",
        "price": 10.45,
        "description": "sla, zoet zure augurk, rode uien, ketchup en tomaat"
      },
      {
        "name": "Cheese Burger",
        "price": 11.45,
        "description": "sla, zoet zure augurk, rode uien, cheddar kaas, ketchup en tomaat"
      },
      {
        "name": "Bacon Burger",
        "price": 12.95,
        "description": "sla, zoet zure augurk, rode uien, crispy bacon, ketchup en tomaat"
      },
      {
        "name": "Hamburger Menu",
        "price": 16.95,
        "description": "Klassieke burger geserveerd met friet en saus"
      }
    ]
  },
  {
    "name": "Snacks",
    "items": [
      {
        "name": "Kaasstengels",
        "price": 5.95,
        "description": "Met chilisaus"
      },
      {
        "name": "Bitterballen",
        "price": 4.95,
        "description": "Met mosterd"
      },
      {
        "name": "Kipbuggets",
        "price": 5.95,
        "description": "Met chilisaus"
      },
      {
        "name": "Vlammetjes",
        "price": 4.95,
        "description": "6 stuks met chilisaus"
      }
    ]
  },
  {
    "name": "Bijgerechten",
    "items": [
      {
        "name": "Friet",
        "price": 4.95,
        "description": "Met huisgemaakte chilimayonaise"
      },
      {
        "name": "Side Salade",
        "price": 4.95
      }
    ]
  },
  {
    "name": "Sauzen",
    "items": [
      {
        "name": "Ketchup / Mayonaise / Sambal",
        "price": 0.75
      },
      {
        "name": "Knoflooksaus / Chilimayonaise",
        "price": 1.0
      }
    ]
  },
  {
    "name": "IJs & dessert",
    "items": [
      {
        "name": "Ben & Jerry’s",
        "price": 4.5,
        "priceText": "€ 4,50 / € 8,95",
        "description": "Strawberry Cheesecake Aardbeiencheesecake-roomijs met aarbei & havermoutkoekjes chunks"
      },
      {
        "name": "Ben & Jerry’s",
        "price": 4.5,
        "priceText": "€ 4,50 / € 8,95",
        "description": "Chocolate Fudge Brownie Chocoladeroomijs met chocolate fudge brownie chunks"
      },
      {
        "name": "Caffe Glase",
        "price": 8.45,
        "description": "Vanille ijs met koffie en slagroom"
      },
      {
        "name": "Dame Blanche",
        "price": 9.45,
        "description": "Vanille ijs met chocoladesaus en slagroom"
      },
      {
        "name": "Gelato Misto con Advocaat",
        "price": 8.45,
        "description": "Gemengde ijs met advocaat en slagroom"
      },
      {
        "name": "Tartufo",
        "price": 8.45,
        "description": "Italiaanse truffel"
      },
      {
        "name": "Tiramisu",
        "price": 5.95,
        "description": "Speciaal dessert van het huis"
      }
    ]
  }
];
