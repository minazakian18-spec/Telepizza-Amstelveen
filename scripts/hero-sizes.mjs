import sharp from 'sharp';
import { statSync } from 'fs';
const dir = 'public/images/hero/';
for (const n of ['zaal-neon', 'volle-zaal']) {
  for (const [suf, w, q] of [['md', 828, 68], ['lg', 1200, 70]]) {
    const out = `${dir}${n}-${suf}.webp`;
    await sharp(`${dir}${n}.webp`).resize({ width: w }).webp({ quality: q, effort: 6 }).toFile(out);
    console.log(out, Math.round(statSync(out).size / 1024) + ' KB');
  }
}
