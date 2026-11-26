# NusaData — Portal Statistik Indonesia

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/BendiCooL/national-statistics-site/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/BendiCooL/national-statistics-site/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

Portal statistik nasional Indonesia yang berfungsi penuh: penduduk, ekonomi, kesehatan, pendidikan, dan lingkungan. Setiap angka disertai sumber dan tahunnya.

## Isi situs

- **Beranda** — enam indikator utama (penduduk, PDB, pertumbuhan, inflasi, kemiskinan, IPM) dengan pemilih tahun 2019–2024, grafik PDB, dan tautan ke semua topik.
- **Penduduk** — grafik jumlah penduduk 2019–2024, struktur umur, dan tabel 10 provinsi berpenduduk terbanyak yang bisa dicari dan diurutkan.
- **Ekonomi** — grafik PDB (batang/garis), pertumbuhan ekonomi, dan tabel perdagangan luar negeri.
- **Kesehatan** — harapan hidup, stunting, kematian bayi, dan puskesmas.
- **Pendidikan** — rata-rata lama sekolah, harapan lama sekolah, dan partisipasi perguruan tinggi.
- **Lingkungan** — kawasan hutan, deforestasi, dan bauran energi terbarukan.

Sumber data: BPS — Badan Pusat Statistik; Bank Dunia; Kementerian Kesehatan RI; KLHK; Kementerian ESDM.

## Cara menjalankan

Situs ini statis, tanpa build step dan tanpa request jaringan. Sajikan `app/` dengan server HTTP statis apa pun, lalu buka `index.html`:

```sh
cd app && python3 -m http.server 8080
```

## Penyerahan

`main.ts` (Node 22, standard library saja) menyalin `app/` dan `screenshots/` ke `/output` dan menulis `/output/dossier.json` lewat `buildDossier` dari `vendor/makefun-frontend.ts`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Dibuat untuk bounty [Best National Statistics Site](https://make.fun/bounty/best-national-statistics-site-20261126-0539) di make.fun.
