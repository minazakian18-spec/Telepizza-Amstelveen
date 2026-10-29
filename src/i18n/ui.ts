// Talen van de site. Nederlands staat op de bestaande adressen; de andere talen onder /<code>/.
export const langs = ['nl', 'en', 'de', 'tr', 'ar', 'fr', 'it', 'es'] as const;
export type Lang = (typeof langs)[number];
export const foreign = langs.filter(l => l !== 'nl') as Exclude<Lang, 'nl'>[];

export const langInfo: Record<Lang, { name: string; dir: 'ltr' | 'rtl'; og: string }> = {
  nl: { name: 'Nederlands', dir: 'ltr', og: 'nl_NL' },
  en: { name: 'English', dir: 'ltr', og: 'en_GB' },
  de: { name: 'Deutsch', dir: 'ltr', og: 'de_DE' },
  tr: { name: 'Türkçe', dir: 'ltr', og: 'tr_TR' },
  ar: { name: 'العربية', dir: 'rtl', og: 'ar_AR' },
  fr: { name: 'Français', dir: 'ltr', og: 'fr_FR' },
  it: { name: 'Italiano', dir: 'ltr', og: 'it_IT' },
  es: { name: 'Español', dir: 'ltr', og: 'es_ES' },
};

// Pagina's die in alle talen bestaan, met hun adres per taal.
export type PageKey = 'home' | 'menu' | 'catering' | 'about' | 'contact';
const nlPaths: Record<PageKey, string> = {
  home: '/',
  menu: '/menu-italiaans-restaurant-amstelveen/',
  catering: '/catering-italiaans-restaurant-amstelveen/',
  about: '/over-ons-italiaans-restaurant-amstelveen/',
  contact: '/contact-route/',
};
const slugs: Record<PageKey, string> = { home: '', menu: 'menu/', catering: 'catering/', about: 'about/', contact: 'contact/' };
export const pathFor = (lang: Lang, page: PageKey) => (lang === 'nl' ? nlPaths[page] : `/${lang}/${slugs[page]}`);

type UI = {
  nav: Record<PageKey | 'delivery', string>;
  order: string; reserve: string; call: string; viewMenu: string; fullMenu: string; orderNow: string; orderShort: string;
  since: string; tagline: string; language: string; home: string;
  bandEyebrow: string; bandTitle: string; bandText: string;
  footerAbout: string; addressContact: string; route: string; hours: string; closedMon: string; discover: string;
  days: Record<'Dinsdag' | 'Woensdag' | 'Donderdag' | 'Vrijdag' | 'Zaterdag' | 'Zondag', string>;
  reviewsEyebrow: string; reviewsTitle: string; reviewsBased: string; reviewsAll: string; googleReview: string;
  halalNote: string; descNote: string;
};

export const ui: Record<Lang, UI> = {
  nl: {
    nav: { home: 'Home', menu: 'Menu', catering: 'Catering', about: 'Over ons', contact: 'Contact', delivery: 'Bezorgen' },
    order: 'Bestel online', reserve: 'Reserveer een tafel', call: 'Bel', viewMenu: 'Bekijk het menu', fullMenu: 'Volledig menu met prijzen', orderNow: 'Direct bestellen', orderShort: 'Bestel',
    since: 'Amstelveen · sinds 1984', tagline: 'Italiaans restaurant in Amstelveen', language: 'Taal', home: 'Home',
    bandEyebrow: 'Reserveren bij de beste', bandTitle: 'Jouw tafel staat klaar', bandText: 'Italiaans restaurant in Amstelveen, al sinds 1984. Reserveer online, bel ons of bestel direct voor afhalen en bezorgen.',
    footerAbout: 'Italiaans restaurant, pizzeria en grill aan de Amsterdamseweg. Eten in het restaurant, afhalen of bezorgen. Al ons vlees is halal.',
    addressContact: 'Adres & contact', route: 'Route plannen', hours: 'Openingstijden', closedMon: 'Maandag: gesloten', discover: 'Ontdek',
    days: { Dinsdag: 'Dinsdag', Woensdag: 'Woensdag', Donderdag: 'Donderdag', Vrijdag: 'Vrijdag', Zaterdag: 'Zaterdag', Zondag: 'Zondag' },
    reviewsEyebrow: 'Google reviews', reviewsTitle: 'Wat onze gasten zeggen', reviewsBased: 'Google-reviews', reviewsAll: 'Bekijk alle reviews op Google', googleReview: 'Google review',
    halalNote: 'Al ons vlees is halal.', descNote: '',
  },
  en: {
    nav: { home: 'Home', menu: 'Menu', catering: 'Catering', about: 'About us', contact: 'Contact', delivery: 'Delivery' },
    order: 'Order online', reserve: 'Book a table', call: 'Call', viewMenu: 'View the menu', fullMenu: 'Full menu with prices', orderNow: 'Order now', orderShort: 'Order',
    since: 'Amstelveen · since 1984', tagline: 'Italian restaurant in Amstelveen', language: 'Language', home: 'Home',
    bandEyebrow: 'Book with the best', bandTitle: 'Your table is ready', bandText: 'Italian restaurant in Amstelveen since 1984. Book online, give us a call or order for pick-up and delivery.',
    footerAbout: 'Italian restaurant, pizzeria and grill on the Amsterdamseweg. Dine in, take away or delivery. All our meat is halal.',
    addressContact: 'Address & contact', route: 'Get directions', hours: 'Opening hours', closedMon: 'Monday: closed', discover: 'Explore',
    days: { Dinsdag: 'Tuesday', Woensdag: 'Wednesday', Donderdag: 'Thursday', Vrijdag: 'Friday', Zaterdag: 'Saturday', Zondag: 'Sunday' },
    reviewsEyebrow: 'Google reviews', reviewsTitle: 'What our guests say', reviewsBased: 'Google reviews', reviewsAll: 'Read all reviews on Google', googleReview: 'Google review',
    halalNote: 'All our meat is halal.', descNote: '',
  },
  de: {
    nav: { home: 'Start', menu: 'Speisekarte', catering: 'Catering', about: 'Über uns', contact: 'Kontakt', delivery: 'Lieferung' },
    order: 'Online bestellen', reserve: 'Tisch reservieren', call: 'Anrufen', viewMenu: 'Speisekarte ansehen', fullMenu: 'Komplette Karte mit Preisen', orderNow: 'Jetzt bestellen', orderShort: 'Bestellen',
    since: 'Amstelveen · seit 1984', tagline: 'Italienisches Restaurant in Amstelveen', language: 'Sprache', home: 'Start',
    bandEyebrow: 'Reservieren beim Besten', bandTitle: 'Ihr Tisch wartet', bandText: 'Italienisches Restaurant in Amstelveen seit 1984. Reservieren Sie online, rufen Sie uns an oder bestellen Sie zum Abholen und Liefern.',
    footerAbout: 'Italienisches Restaurant, Pizzeria und Grill an der Amsterdamseweg. Im Restaurant essen, abholen oder liefern lassen. Unser gesamtes Fleisch ist halal.',
    addressContact: 'Adresse & Kontakt', route: 'Route planen', hours: 'Öffnungszeiten', closedMon: 'Montag: geschlossen', discover: 'Entdecken',
    days: { Dinsdag: 'Dienstag', Woensdag: 'Mittwoch', Donderdag: 'Donnerstag', Vrijdag: 'Freitag', Zaterdag: 'Samstag', Zondag: 'Sonntag' },
    reviewsEyebrow: 'Google-Bewertungen', reviewsTitle: 'Das sagen unsere Gäste', reviewsBased: 'Google-Bewertungen', reviewsAll: 'Alle Bewertungen auf Google', googleReview: 'Google-Bewertung',
    halalNote: 'Unser gesamtes Fleisch ist halal.', descNote: 'Beschreibungen der Gerichte auf Englisch.',
  },
  tr: {
    nav: { home: 'Ana sayfa', menu: 'Menü', catering: 'Catering', about: 'Hakkımızda', contact: 'İletişim', delivery: 'Teslimat' },
    order: 'Online sipariş', reserve: 'Masa ayırt', call: 'Ara', viewMenu: 'Menüyü gör', fullMenu: 'Fiyatlarıyla tüm menü', orderNow: 'Hemen sipariş ver', orderShort: 'Sipariş',
    since: 'Amstelveen · 1984’ten beri', tagline: 'Amstelveen’de İtalyan restoranı', language: 'Dil', home: 'Ana sayfa',
    bandEyebrow: 'En iyisinde rezervasyon', bandTitle: 'Masanız hazır', bandText: '1984’ten beri Amstelveen’de İtalyan restoranı. Online rezervasyon yapın, bizi arayın veya gel-al ve teslimat için sipariş verin.',
    footerAbout: 'Amsterdamseweg’de İtalyan restoranı, pizzacı ve ızgara. Restoranda yiyin, gel-al veya eve teslimat. Tüm etlerimiz helaldir.',
    addressContact: 'Adres & iletişim', route: 'Yol tarifi', hours: 'Çalışma saatleri', closedMon: 'Pazartesi: kapalı', discover: 'Keşfet',
    days: { Dinsdag: 'Salı', Woensdag: 'Çarşamba', Donderdag: 'Perşembe', Vrijdag: 'Cuma', Zaterdag: 'Cumartesi', Zondag: 'Pazar' },
    reviewsEyebrow: 'Google yorumları', reviewsTitle: 'Misafirlerimiz ne diyor', reviewsBased: 'Google yorumu', reviewsAll: 'Tüm yorumları Google’da gör', googleReview: 'Google yorumu',
    halalNote: 'Tüm etlerimiz helaldir.', descNote: 'Yemek açıklamaları İngilizcedir.',
  },
  ar: {
    nav: { home: 'الرئيسية', menu: 'قائمة الطعام', catering: 'تقديم الطعام', about: 'من نحن', contact: 'اتصل بنا', delivery: 'التوصيل' },
    order: 'اطلب أونلاين', reserve: 'احجز طاولة', call: 'اتصل', viewMenu: 'عرض القائمة', fullMenu: 'القائمة الكاملة بالأسعار', orderNow: 'اطلب الآن', orderShort: 'اطلب',
    since: 'أمستلفين · منذ 1984', tagline: 'مطعم إيطالي في أمستلفين', language: 'اللغة', home: 'الرئيسية',
    bandEyebrow: 'احجز لدى الأفضل', bandTitle: 'طاولتك جاهزة', bandText: 'مطعم إيطالي في أمستلفين منذ 1984. احجز أونلاين، اتصل بنا أو اطلب للاستلام والتوصيل.',
    footerAbout: 'مطعم إيطالي وبيتزا ومشويات في شارع Amsterdamseweg. تناول الطعام في المطعم أو الاستلام أو التوصيل. جميع اللحوم لدينا حلال.',
    addressContact: 'العنوان والتواصل', route: 'الاتجاهات', hours: 'ساعات العمل', closedMon: 'الاثنين: مغلق', discover: 'اكتشف',
    days: { Dinsdag: 'الثلاثاء', Woensdag: 'الأربعاء', Donderdag: 'الخميس', Vrijdag: 'الجمعة', Zaterdag: 'السبت', Zondag: 'الأحد' },
    reviewsEyebrow: 'تقييمات Google', reviewsTitle: 'ماذا يقول ضيوفنا', reviewsBased: 'تقييمًا على Google', reviewsAll: 'كل التقييمات على Google', googleReview: 'تقييم Google',
    halalNote: 'جميع اللحوم لدينا حلال.', descNote: 'وصف الأطباق باللغة الإنجليزية.',
  },
  fr: {
    nav: { home: 'Accueil', menu: 'Menu', catering: 'Traiteur', about: 'À propos', contact: 'Contact', delivery: 'Livraison' },
    order: 'Commander en ligne', reserve: 'Réserver une table', call: 'Appeler', viewMenu: 'Voir le menu', fullMenu: 'Menu complet avec prix', orderNow: 'Commander', orderShort: 'Commander',
    since: 'Amstelveen · depuis 1984', tagline: 'Restaurant italien à Amstelveen', language: 'Langue', home: 'Accueil',
    bandEyebrow: 'Réservez chez les meilleurs', bandTitle: 'Votre table vous attend', bandText: 'Restaurant italien à Amstelveen depuis 1984. Réservez en ligne, appelez-nous ou commandez à emporter ou en livraison.',
    footerAbout: 'Restaurant italien, pizzeria et grill sur l’Amsterdamseweg. Sur place, à emporter ou en livraison. Toute notre viande est halal.',
    addressContact: 'Adresse & contact', route: 'Itinéraire', hours: 'Horaires', closedMon: 'Lundi : fermé', discover: 'Découvrir',
    days: { Dinsdag: 'Mardi', Woensdag: 'Mercredi', Donderdag: 'Jeudi', Vrijdag: 'Vendredi', Zaterdag: 'Samedi', Zondag: 'Dimanche' },
    reviewsEyebrow: 'Avis Google', reviewsTitle: 'Ce que disent nos clients', reviewsBased: 'avis Google', reviewsAll: 'Tous les avis sur Google', googleReview: 'Avis Google',
    halalNote: 'Toute notre viande est halal.', descNote: 'Descriptions des plats en anglais.',
  },
  it: {
    nav: { home: 'Home', menu: 'Menù', catering: 'Catering', about: 'Chi siamo', contact: 'Contatti', delivery: 'Consegna' },
    order: 'Ordina online', reserve: 'Prenota un tavolo', call: 'Chiama', viewMenu: 'Vedi il menù', fullMenu: 'Menù completo con prezzi', orderNow: 'Ordina ora', orderShort: 'Ordina',
    since: 'Amstelveen · dal 1984', tagline: 'Ristorante italiano ad Amstelveen', language: 'Lingua', home: 'Home',
    bandEyebrow: 'Prenota dai migliori', bandTitle: 'Il tuo tavolo ti aspetta', bandText: 'Ristorante italiano ad Amstelveen dal 1984. Prenota online, chiamaci o ordina da asporto e a domicilio.',
    footerAbout: 'Ristorante italiano, pizzeria e grill sull’Amsterdamseweg. Al tavolo, da asporto o a domicilio. Tutta la nostra carne è halal.',
    addressContact: 'Indirizzo & contatti', route: 'Indicazioni', hours: 'Orari', closedMon: 'Lunedì: chiuso', discover: 'Scopri',
    days: { Dinsdag: 'Martedì', Woensdag: 'Mercoledì', Donderdag: 'Giovedì', Vrijdag: 'Venerdì', Zaterdag: 'Sabato', Zondag: 'Domenica' },
    reviewsEyebrow: 'Recensioni Google', reviewsTitle: 'Cosa dicono i nostri ospiti', reviewsBased: 'recensioni Google', reviewsAll: 'Tutte le recensioni su Google', googleReview: 'Recensione Google',
    halalNote: 'Tutta la nostra carne è halal.', descNote: 'Descrizioni dei piatti in inglese.',
  },
  es: {
    nav: { home: 'Inicio', menu: 'Carta', catering: 'Catering', about: 'Nosotros', contact: 'Contacto', delivery: 'Entrega' },
    order: 'Pedir online', reserve: 'Reservar mesa', call: 'Llamar', viewMenu: 'Ver la carta', fullMenu: 'Carta completa con precios', orderNow: 'Pedir ahora', orderShort: 'Pedir',
    since: 'Amstelveen · desde 1984', tagline: 'Restaurante italiano en Amstelveen', language: 'Idioma', home: 'Inicio',
    bandEyebrow: 'Reserva con los mejores', bandTitle: 'Tu mesa te espera', bandText: 'Restaurante italiano en Amstelveen desde 1984. Reserva online, llámanos o pide para recoger o a domicilio.',
    footerAbout: 'Restaurante italiano, pizzería y parrilla en la Amsterdamseweg. Comer en el local, para llevar o a domicilio. Toda nuestra carne es halal.',
    addressContact: 'Dirección y contacto', route: 'Cómo llegar', hours: 'Horario', closedMon: 'Lunes: cerrado', discover: 'Descubre',
    days: { Dinsdag: 'Martes', Woensdag: 'Miércoles', Donderdag: 'Jueves', Vrijdag: 'Viernes', Zaterdag: 'Sábado', Zondag: 'Domingo' },
    reviewsEyebrow: 'Reseñas de Google', reviewsTitle: 'Lo que dicen nuestros clientes', reviewsBased: 'reseñas de Google', reviewsAll: 'Todas las reseñas en Google', googleReview: 'Reseña de Google',
    halalNote: 'Toda nuestra carne es halal.', descNote: 'Descripciones de los platos en inglés.',
  },
};
