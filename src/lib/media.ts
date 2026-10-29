import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Geeft het pad naar een bestand in public/images terug, of null als het (nog) niet bestaat.
// Zo bouwt de site altijd, ook als er een foto ontbreekt.
export function media(name: string): string | null {
  return existsSync(join(process.cwd(), 'public', 'images', name)) ? `/images/${name}` : null;
}
