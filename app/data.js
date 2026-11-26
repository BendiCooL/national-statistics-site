// Data statistik Indonesia untuk NusaData.
// Setiap angka disertai sumber dan tahun. Angka diambil dari publikasi resmi
// BPS, Bank Dunia, Kementerian Kesehatan, KLHK, dan Kementerian ESDM.

export const SOURCES = {
  bps: 'BPS — Badan Pusat Statistik',
  wb: 'Bank Dunia (World Development Indicators)',
  kemenkes: 'Kementerian Kesehatan RI',
  klhk: 'KLHK — Kementerian Lingkungan Hidup dan Kehutanan',
  esdm: 'Kementerian ESDM',
};

export const YEARS = [2019, 2020, 2021, 2022, 2023, 2024];

// Seri tahunan 2019-2024. Nilai mengikuti urutan YEARS.
export const SERIES = {
  penduduk: {
    label: 'Jumlah penduduk',
    unit: 'juta jiwa',
    source: SOURCES.bps,
    values: [268.1, 270.2, 272.7, 275.8, 278.7, 281.6],
  },
  pdb: {
    label: 'Produk Domestik Bruto',
    unit: 'miliar US$',
    source: SOURCES.wb,
    values: [1119, 1059, 1186, 1319, 1371, 1402],
  },
  pertumbuhan: {
    label: 'Pertumbuhan ekonomi',
    unit: '% (yoy)',
    source: SOURCES.bps,
    values: [5.02, -2.07, 3.7, 5.31, 5.05, 5.03],
  },
  inflasi: {
    label: 'Inflasi',
    unit: '% (yoy)',
    source: SOURCES.bps,
    values: [2.72, 1.68, 1.87, 5.51, 2.61, 1.57],
  },
  kemiskinan: {
    label: 'Tingkat kemiskinan',
    unit: '% penduduk',
    source: SOURCES.bps,
    values: [9.41, 9.78, 10.14, 9.54, 9.36, 9.03],
  },
  pengangguran: {
    label: 'Tingkat pengangguran terbuka',
    unit: '% angkatan kerja',
    source: SOURCES.bps,
    values: [5.28, 7.07, 6.49, 5.86, 5.32, 4.91],
  },
  ipm: {
    label: 'Indeks Pembangunan Manusia',
    unit: 'skala 0–100',
    source: SOURCES.bps,
    values: [71.92, 71.94, 72.29, 72.91, 74.39, 75.02],
  },
  harapanHidup: {
    label: 'Angka harapan hidup',
    unit: 'tahun',
    source: SOURCES.bps,
    values: [71.34, 71.47, 71.57, 71.85, 73.55, 73.93],
  },
  rataLamaSekolah: {
    label: 'Rata-rata lama sekolah',
    unit: 'tahun',
    source: SOURCES.bps,
    values: [8.34, 8.48, 8.54, 8.69, 8.77, 8.85],
  },
  ekspor: {
    label: 'Nilai ekspor',
    unit: 'miliar US$',
    source: SOURCES.bps,
    values: [167.7, 163.2, 231.6, 291.9, 258.8, 264.7],
  },
  impor: {
    label: 'Nilai impor',
    unit: 'miliar US$',
    source: SOURCES.bps,
    values: [171.3, 141.6, 196.2, 237.4, 221.9, 233.7],
  },
};

// Indikator utama per tahun (untuk kartu di Beranda).
// Setiap kartu: nilai, satuan, sumber, tahun.
export const INDICATORS = {
  2019: [
    { name: 'Penduduk', value: '268,1', unit: 'juta jiwa', source: SOURCES.bps, year: 2019 },
    { name: 'PDB', value: 'US$ 1.119', unit: 'miliar', source: SOURCES.wb, year: 2019 },
    { name: 'Pertumbuhan ekonomi', value: '5,02', unit: '%', source: SOURCES.bps, year: 2019 },
    { name: 'Inflasi', value: '2,72', unit: '%', source: SOURCES.bps, year: 2019 },
    { name: 'Kemiskinan', value: '9,41', unit: '%', source: SOURCES.bps, year: 2019 },
    { name: 'IPM', value: '71,92', unit: 'skala 0–100', source: SOURCES.bps, year: 2019 },
  ],
  2020: [
    { name: 'Penduduk', value: '270,2', unit: 'juta jiwa', source: SOURCES.bps, year: 2020 },
    { name: 'PDB', value: 'US$ 1.059', unit: 'miliar', source: SOURCES.wb, year: 2020 },
    { name: 'Pertumbuhan ekonomi', value: '−2,07', unit: '%', source: SOURCES.bps, year: 2020 },
    { name: 'Inflasi', value: '1,68', unit: '%', source: SOURCES.bps, year: 2020 },
    { name: 'Kemiskinan', value: '9,78', unit: '%', source: SOURCES.bps, year: 2020 },
    { name: 'IPM', value: '71,94', unit: 'skala 0–100', source: SOURCES.bps, year: 2020 },
  ],
  2021: [
    { name: 'Penduduk', value: '272,7', unit: 'juta jiwa', source: SOURCES.bps, year: 2021 },
    { name: 'PDB', value: 'US$ 1.186', unit: 'miliar', source: SOURCES.wb, year: 2021 },
    { name: 'Pertumbuhan ekonomi', value: '3,70', unit: '%', source: SOURCES.bps, year: 2021 },
    { name: 'Inflasi', value: '1,87', unit: '%', source: SOURCES.bps, year: 2021 },
    { name: 'Kemiskinan', value: '10,14', unit: '%', source: SOURCES.bps, year: 2021 },
    { name: 'IPM', value: '72,29', unit: 'skala 0–100', source: SOURCES.bps, year: 2021 },
  ],
  2022: [
    { name: 'Penduduk', value: '275,8', unit: 'juta jiwa', source: SOURCES.bps, year: 2022 },
    { name: 'PDB', value: 'US$ 1.319', unit: 'miliar', source: SOURCES.wb, year: 2022 },
    { name: 'Pertumbuhan ekonomi', value: '5,31', unit: '%', source: SOURCES.bps, year: 2022 },
    { name: 'Inflasi', value: '5,51', unit: '%', source: SOURCES.bps, year: 2022 },
    { name: 'Kemiskinan', value: '9,54', unit: '%', source: SOURCES.bps, year: 2022 },
    { name: 'IPM', value: '72,91', unit: 'skala 0–100', source: SOURCES.bps, year: 2022 },
  ],
  2023: [
    { name: 'Penduduk', value: '278,7', unit: 'juta jiwa', source: SOURCES.bps, year: 2023 },
    { name: 'PDB', value: 'US$ 1.371', unit: 'miliar', source: SOURCES.wb, year: 2023 },
    { name: 'Pertumbuhan ekonomi', value: '5,05', unit: '%', source: SOURCES.bps, year: 2023 },
    { name: 'Inflasi', value: '2,61', unit: '%', source: SOURCES.bps, year: 2023 },
    { name: 'Kemiskinan', value: '9,36', unit: '%', source: SOURCES.bps, year: 2023 },
    { name: 'IPM', value: '74,39', unit: 'skala 0–100', source: SOURCES.bps, year: 2023 },
  ],
  2024: [
    { name: 'Penduduk', value: '281,6', unit: 'juta jiwa', source: SOURCES.bps, year: 2024 },
    { name: 'PDB', value: 'US$ 1.402', unit: 'miliar', source: SOURCES.wb, year: 2024 },
    { name: 'Pertumbuhan ekonomi', value: '5,03', unit: '%', source: SOURCES.bps, year: 2024 },
    { name: 'Inflasi', value: '1,57', unit: '%', source: SOURCES.bps, year: 2024 },
    { name: 'Kemiskinan', value: '9,03', unit: '%', source: SOURCES.bps, year: 2024 },
    { name: 'IPM', value: '75,02', unit: 'skala 0–100', source: SOURCES.bps, year: 2024 },
  ],
};

// 10 provinsi berpenduduk terbanyak, estimasi pertengahan tahun (juta jiwa).
export const PROVINCES = [
  { name: 'Jawa Barat', population: 50.3, year: 2024, source: SOURCES.bps },
  { name: 'Jawa Timur', population: 41.8, year: 2024, source: SOURCES.bps },
  { name: 'Jawa Tengah', population: 37.9, year: 2024, source: SOURCES.bps },
  { name: 'Sumatera Utara', population: 16.0, year: 2024, source: SOURCES.bps },
  { name: 'Banten', population: 12.4, year: 2024, source: SOURCES.bps },
  { name: 'DKI Jakarta', population: 10.6, year: 2024, source: SOURCES.bps },
  { name: 'Sulawesi Selatan', population: 9.4, year: 2024, source: SOURCES.bps },
  { name: 'Lampung', population: 9.3, year: 2024, source: SOURCES.bps },
  { name: 'Sumatera Selatan', population: 8.8, year: 2024, source: SOURCES.bps },
  { name: 'Riau', population: 6.9, year: 2024, source: SOURCES.bps },
];

// Fakta singkat per halaman, masing-masing dengan sumber dan tahun.
export const FACTS = {
  kesehatan: [
    { name: 'Angka harapan hidup', value: '73,93 tahun', source: SOURCES.bps, year: 2024 },
    { name: 'Prevalensi stunting balita', value: '21,5%', source: SOURCES.kemenkes, year: 2023 },
    { name: 'Angka kematian bayi', value: '16,9 per 1.000 kelahiran hidup', source: SOURCES.bps, year: 2023 },
    { name: 'Jumlah puskesmas', value: '10.374 unit', source: SOURCES.kemenkes, year: 2023 },
  ],
  pendidikan: [
    { name: 'Rata-rata lama sekolah', value: '8,85 tahun', source: SOURCES.bps, year: 2024 },
    { name: 'Harapan lama sekolah', value: '13,21 tahun', source: SOURCES.bps, year: 2024 },
    { name: 'Angka partisipasi kasar perguruan tinggi', value: '31,45%', source: SOURCES.bps, year: 2023 },
    { name: 'Indeks Pembangunan Manusia', value: '75,02', source: SOURCES.bps, year: 2024 },
  ],
  lingkungan: [
    { name: 'Kawasan hutan', value: '95,6 juta hektare', source: SOURCES.klhk, year: 2023 },
    { name: 'Deforestasi neto', value: '175 ribu hektare', source: SOURCES.klhk, year: 2023 },
    { name: 'Bauran energi baru terbarukan', value: '19,0% dari bauran energi primer', source: SOURCES.esdm, year: 2023 },
    { name: 'Pertumbuhan ekonomi', value: '5,03%', source: SOURCES.bps, year: 2024 },
  ],
};

// Struktur umur penduduk 2024 (persen, BPS).
export const AGE_GROUPS = [
  { group: '0–14 tahun', share: 24.6, year: 2024, source: SOURCES.bps },
  { group: '15–64 tahun', share: 68.7, year: 2024, source: SOURCES.bps },
  { group: '65 tahun ke atas', share: 6.7, year: 2024, source: SOURCES.bps },
];
