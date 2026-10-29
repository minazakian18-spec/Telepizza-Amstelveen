// TODO eigenaar: vul hier het echte menu in (naam, beschrijving, prijs in euro's, bijv. 9.5).
// De oude site kon tijdens het bouwen niet worden uitgelezen, dus er zijn GEEN prijzen verzonnen.
// Voorbeeld item: { name: 'Pizza Margherita', description: 'Tomatensaus, mozzarella', price: 9.5 }
export interface Item { name: string; description?: string; price: number | null }
export const menu: { name: string; items: Item[] }[] = [
  { name: 'Pizza', items: [] },
  { name: 'Pasta', items: [] },
  { name: 'Shoarma', items: [] },
  { name: 'IJs & desserts', items: [] },
  { name: 'Dranken', items: [] },
];
