// NusaData — program penyerah entry (Node 22, standard library saja).
//
// Menyalin app/ dan screenshots/ dari repo ini ke direktori keluaran, lalu
// menulis dossier.json dengan pustaka make.fun yang sudah di-vendor.
// Direktori keluaran dibaca dari MAKEFUN_OUTPUT_DIR; di luar grader itu
// diganti /output.
//
// Penting: /output di grader adalah mount point. Program ini TIDAK PERNAH
// menghapus direktori itu sendiri — hanya mengosongkan isinya, lalu menyalin
// file baru ke dalamnya.

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Siapkan direktori keluaran, lalu kosongkan isinya saja (bukan direktorinya).
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

// Salin situs statis dan screenshot ke keluaran.
cpSync(join(repoRoot, 'app'), join(outDir, 'app'), { recursive: true });
if (existsSync(join(repoRoot, 'screenshots'))) {
  cpSync(join(repoRoot, 'screenshots'), join(outDir, 'screenshots'), { recursive: true });
}

// Tulis dossier.json persis seperti yang ditulis pustaka make.fun —
// scorer membandingkan berkas ini byte per byte dengan hasil hitungannya.
const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
});
writeFileSync(join(outDir, 'dossier.json'), dossier);
