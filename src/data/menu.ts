// Menu en prijzen. Prijs in euro's met een punt, bijv. 12.95.
// Het volledige menu (uit de menu-PDF) kan hier per categorie worden aangevuld.
export interface Item { name: string; description?: string; price: number | null }
export const menu: { name: string; items: Item[] }[] = [
  { name: 'Specialiteiten', items: [
    { name: 'Klassieke Pepperoni Pizza', price: 12.95 },
    { name: 'Romige Pasta Carbonara', price: 12.95 },
  ] },
];
