// NusaData — perutean hash dan perender halaman.
// Setiap halaman dibangun dari data.js; setiap angka membawa sumber dan tahun.

import { SERIES, INDICATORS, PROVINCES, FACTS, AGE_GROUPS, YEARS } from './data.js';
import { barChart, lineChart, shareBars } from './charts.js';

const page = document.getElementById('page');
const navLinks = [...document.querySelectorAll('.site-nav a')];

function sourceLine(source, year) {
  return `<p class="source-note">Sumber: ${source} · ${year}</p>`;
}

function factCards(facts) {
  return `<div class="facts">${facts
    .map(
      (f) => `<div class="fact">
        <div class="f-value">${f.value}</div>
        <div class="f-name">${f.name}</div>
        <div class="f-source">Sumber: ${f.source} · ${f.year}</div>
      </div>`,
    )
    .join('')}</div>`;
}

function yearOptions(selected) {
  return YEARS.map((y) => `<option value="${y}"${y === selected ? ' selected' : ''}>${y}</option>`).join('');
}

function renderHome(year) {
  const cards = INDICATORS[year]
    .map(
      (c) => `<div class="card">
        <div class="k-label">${c.name}</div>
        <div class="k-value">${c.value} <span class="k-unit">${c.unit}</span></div>
        <p class="k-source">Sumber: ${c.source} · ${c.year}</p>
      </div>`,
    )
    .join('');
  page.innerHTML = `
    <h1>Statistik Indonesia dalam satu tempat</h1>
    <p class="lede">Enam indikator utama Indonesia, dari jumlah penduduk sampai Indeks Pembangunan Manusia. Pilih tahun untuk melihat angkanya, lalu buka halaman topik untuk grafik dan rinciannya.</p>
    <div class="controls">
      <label for="year-select">Tahun data:</label>
      <select id="year-select">${yearOptions(year)}</select>
    </div>
    <div class="cards">${cards}</div>
    <section class="panel">
      <h2>Produk Domestik Bruto 2019–2024</h2>
      <div class="chart-wrap">${barChart(SERIES.pdb, YEARS, { color: '#0f766e' })}</div>
      ${sourceLine(SERIES.pdb.source, '2019–2024')}
    </section>
    <h2>Jelajahi berdasarkan topik</h2>
    <div class="explore">
      <a href="#/penduduk"><strong>Penduduk</strong><span>281,6 juta jiwa pada 2024, sebaran provinsi, dan struktur umur.</span></a>
      <a href="#/ekonomi"><strong>Ekonomi</strong><span>PDB, pertumbuhan, inflasi, perdagangan, dan kemiskinan.</span></a>
      <a href="#/kesehatan"><strong>Kesehatan</strong><span>Harapan hidup, stunting, dan fasilitas kesehatan.</span></a>
      <a href="#/pendidikan"><strong>Pendidikan</strong><span>Lama sekolah, harapan lama sekolah, dan partisipasi kuliah.</span></a>
      <a href="#/lingkungan"><strong>Lingkungan</strong><span>Hutan, deforestasi, dan energi terbarukan.</span></a>
    </div>`;
  document.getElementById('year-select').addEventListener('change', (e) => {
    renderHome(Number(e.target.value));
  });
}

function renderPenduduk() {
  page.innerHTML = `
    <h1>Penduduk Indonesia</h1>
    <p class="lede">Jumlah penduduk Indonesia naik dari 268,1 juta pada 2019 menjadi 281,6 juta pada 2024. Tiga provinsi di Jawa menampung lebih dari separuh penduduk.</p>
    <section class="panel">
      <h2>Jumlah penduduk 2019–2024</h2>
      <div class="chart-wrap">${lineChart(SERIES.penduduk, YEARS, { color: '#0f766e' })}</div>
      ${sourceLine(SERIES.penduduk.source, '2019–2024')}
    </section>
    <section class="panel">
      <h2>Struktur umur 2024</h2>
      ${shareBars(AGE_GROUPS)}
      ${sourceLine(AGE_GROUPS[0].source, 2024)}
    </section>
    <section class="panel">
      <h2>Provinsi berpenduduk terbanyak</h2>
      <div class="controls">
        <label for="prov-search">Cari provinsi:</label>
        <input type="search" id="prov-search" placeholder="mis. Jawa Barat" aria-label="Cari provinsi">
        <button class="btn" id="sort-name" type="button">Urutkan nama</button>
        <button class="btn" id="sort-pop" type="button" aria-pressed="true">Urutkan jumlah</button>
      </div>
      <div class="table-wrap">
        <table class="data" id="prov-table">
          <thead><tr><th>Provinsi</th><th class="num">Penduduk (juta jiwa)</th></tr></thead>
          <tbody></tbody>
        </table>
        <p class="empty-note" id="prov-empty" hidden>Tidak ada provinsi yang cocok.</p>
      </div>
      ${sourceLine(PROVINCES[0].source, 2024)}
    </section>`;

  const tbody = document.querySelector('#prov-table tbody');
  const empty = document.getElementById('prov-empty');
  const search = document.getElementById('prov-search');
  const sortName = document.getElementById('sort-name');
  const sortPop = document.getElementById('sort-pop');
  let sortBy = 'pop';

  function draw() {
    const q = search.value.trim().toLowerCase();
    let rows = PROVINCES.filter((p) => p.name.toLowerCase().includes(q));
    rows = [...rows].sort((a, b) =>
      sortBy === 'name' ? a.name.localeCompare(b.name, 'id') : b.population - a.population,
    );
    tbody.innerHTML = rows
      .map((p) => `<tr><td>${p.name}</td><td class="num">${String(p.population).replace('.', ',')}</td></tr>`)
      .join('');
    empty.hidden = rows.length > 0;
    sortName.setAttribute('aria-pressed', String(sortBy === 'name'));
    sortPop.setAttribute('aria-pressed', String(sortBy === 'pop'));
  }
  search.addEventListener('input', draw);
  sortName.addEventListener('click', () => { sortBy = 'name'; draw(); });
  sortPop.addEventListener('click', () => { sortBy = 'pop'; draw(); });
  draw();
}

function renderEkonomi() {
  page.innerHTML = `
    <h1>Ekonomi Indonesia</h1>
    <p class="lede">PDB Indonesia mencapai US$ 1.402 miliar pada 2024, dengan pertumbuhan 5,03%. Ekonomi sempat terkontraksi −2,07% pada 2020, lalu pulih di atas 5% sejak 2022.</p>
    <section class="panel">
      <h2>Produk Domestik Bruto 2019–2024</h2>
      <div class="controls">
        <button class="btn" id="chart-bar" type="button" aria-pressed="true">Batang</button>
        <button class="btn" id="chart-line" type="button" aria-pressed="false">Garis</button>
      </div>
      <div class="chart-wrap" id="pdb-chart">${barChart(SERIES.pdb, YEARS, { color: '#0f766e' })}</div>
      ${sourceLine(SERIES.pdb.source, '2019–2024')}
    </section>
    <section class="panel">
      <h2>Pertumbuhan ekonomi 2019–2024</h2>
      <div class="chart-wrap">${lineChart(SERIES.pertumbuhan, YEARS, { color: '#b45309' })}</div>
      ${sourceLine(SERIES.pertumbuhan.source, '2019–2024')}
    </section>
    <section class="panel">
      <h2>Perdagangan luar negeri</h2>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Tahun</th><th class="num">Ekspor (miliar US$)</th><th class="num">Impor (miliar US$)</th></tr></thead>
          <tbody>${YEARS.map((y, i) => `<tr><td>${y}</td><td class="num">${String(SERIES.ekspor.values[i]).replace('.', ',')}</td><td class="num">${String(SERIES.impor.values[i]).replace('.', ',')}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      ${sourceLine(SERIES.ekspor.source, '2019–2024')}
    </section>
    <section class="panel">
      <h2>Inflasi dan kemiskinan 2024</h2>
      <p>Inflasi 2024 tercatat 1,57% (BPS) dan tingkat kemiskinan 9,03% pada Maret 2024 (BPS) — terendah dalam enam tahun terakhir. Tingkat pengangguran terbuka Agustus 2024 sebesar 4,91% (BPS).</p>
      ${sourceLine(SERIES.inflasi.source, 2024)}
    </section>`;

  const chartBox = document.getElementById('pdb-chart');
  const btnBar = document.getElementById('chart-bar');
  const btnLine = document.getElementById('chart-line');
  btnBar.addEventListener('click', () => {
    chartBox.innerHTML = barChart(SERIES.pdb, YEARS, { color: '#0f766e' });
    btnBar.setAttribute('aria-pressed', 'true');
    btnLine.setAttribute('aria-pressed', 'false');
  });
  btnLine.addEventListener('click', () => {
    chartBox.innerHTML = lineChart(SERIES.pdb, YEARS, { color: '#0f766e' });
    btnLine.setAttribute('aria-pressed', 'true');
    btnBar.setAttribute('aria-pressed', 'false');
  });
}

function renderKesehatan() {
  page.innerHTML = `
    <h1>Kesehatan</h1>
    <p class="lede">Angka harapan hidup Indonesia naik menjadi 73,93 tahun pada 2024. Tantangan terbesarnya masih stunting: 21,5% balita pada 2023.</p>
    ${factCards(FACTS.kesehatan)}
    <section class="panel">
      <h2>Angka harapan hidup 2019–2024</h2>
      <div class="chart-wrap">${lineChart(SERIES.harapanHidup, YEARS, { color: '#0f766e' })}</div>
      ${sourceLine(SERIES.harapanHidup.source, '2019–2024')}
    </section>`;
}

function renderPendidikan() {
  page.innerHTML = `
    <h1>Pendidikan</h1>
    <p class="lede">Rata-rata lama sekolah penduduk usia 25 tahun ke atas mencapai 8,85 tahun pada 2024, dan harapan lama sekolah 13,21 tahun.</p>
    ${factCards(FACTS.pendidikan)}
    <section class="panel">
      <h2>Rata-rata lama sekolah 2019–2024</h2>
      <div class="chart-wrap">${lineChart(SERIES.rataLamaSekolah, YEARS, { color: '#b45309' })}</div>
      ${sourceLine(SERIES.rataLamaSekolah.source, '2019–2024')}
    </section>`;
}

function renderLingkungan() {
  page.innerHTML = `
    <h1>Lingkungan</h1>
    <p class="lede">Indonesia masih menyimpan 95,6 juta hektare kawasan hutan pada 2023, sementara bauran energi baru terbarukan mencapai 19,0% dari bauran energi primer.</p>
    ${factCards(FACTS.lingkungan)}
    <section class="panel">
      <h2>Indeks Pembangunan Manusia 2019–2024</h2>
      <div class="chart-wrap">${barChart(SERIES.ipm, YEARS, { color: '#0f766e' })}</div>
      ${sourceLine(SERIES.ipm.source, '2019–2024')}
    </section>`;
}

const ROUTES = {
  '': () => renderHome(2024),
  penduduk: renderPenduduk,
  ekonomi: renderEkonomi,
  kesehatan: renderKesehatan,
  pendidikan: renderPendidikan,
  lingkungan: renderLingkungan,
};

function route() {
  const name = window.location.hash.replace(/^#\/?/, '');
  const render = ROUTES[name] || ROUTES[''];
  render();
  navLinks.forEach((a) => a.classList.toggle('active', a.dataset.route === name));
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
