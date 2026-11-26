// Pembuat grafik SVG murni — tanpa pustaka, tanpa request jaringan.
// Semua grafik digambar dari angka di data.js.

function fmt(n) {
  return String(n).replace('.', ',');
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Grafik batang vertikal dari seri tahunan.
export function barChart(series, years, opts = {}) {
  const width = opts.width || 640;
  const height = opts.height || 260;
  const color = opts.color || '#0f766e';
  const padL = 56;
  const padB = 30;
  const padT = 14;
  const plotW = width - padL - 16;
  const plotH = height - padT - padB;
  const max = Math.max(...series.values);
  const min = Math.min(0, ...series.values);
  const range = max - min || 1;
  const slot = plotW / series.values.length;
  const barW = Math.min(44, slot * 0.58);
  let bars = '';
  series.values.forEach((v, i) => {
    const h = ((v - min) / range) * plotH;
    const x = padL + slot * i + (slot - barW) / 2;
    const y = padT + plotH - h;
    bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="4" fill="${color}"><title>${years[i]}: ${fmt(v)} ${esc(series.unit)}</title></rect>`;
    bars += `<text x="${(x + barW / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" font-size="12" fill="#1f2937" font-weight="600">${fmt(v)}</text>`;
    bars += `<text x="${(x + barW / 2).toFixed(1)}" y="${height - 8}" text-anchor="middle" font-size="12" fill="#6b7280">${years[i]}</text>`;
  });
  const zeroY = padT + plotH - ((0 - min) / range) * plotH;
  return `<svg viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-label="Grafik batang ${esc(series.label)} ${years[0]}–${years[years.length - 1]}">
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#d1d5db" />
    <line x1="${padL}" y1="${zeroY.toFixed(1)}" x2="${width - 16}" y2="${zeroY.toFixed(1)}" stroke="#9ca3af" />
    ${bars}
  </svg>`;
}

// Grafik garis dari seri tahunan.
export function lineChart(series, years, opts = {}) {
  const width = opts.width || 640;
  const height = opts.height || 260;
  const color = opts.color || '#b45309';
  const padL = 56;
  const padB = 30;
  const padT = 16;
  const plotW = width - padL - 16;
  const plotH = height - padT - padB;
  const max = Math.max(...series.values);
  const min = Math.min(...series.values);
  const range = max - min || 1;
  const px = (i) => padL + (plotW * i) / (series.values.length - 1);
  const py = (v) => padT + plotH - ((v - min) / range) * plotH;
  const points = series.values.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  let dots = '';
  series.values.forEach((v, i) => {
    dots += `<circle cx="${px(i).toFixed(1)}" cy="${py(v).toFixed(1)}" r="4.5" fill="${color}"><title>${years[i]}: ${fmt(v)} ${esc(series.unit)}</title></circle>`;
    dots += `<text x="${px(i).toFixed(1)}" y="${(py(v) - 10).toFixed(1)}" text-anchor="middle" font-size="12" fill="#1f2937" font-weight="600">${fmt(v)}</text>`;
    dots += `<text x="${px(i).toFixed(1)}" y="${height - 8}" text-anchor="middle" font-size="12" fill="#6b7280">${years[i]}</text>`;
  });
  return `<svg viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-label="Grafik garis ${esc(series.label)} ${years[0]}–${years[years.length - 1]}">
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#d1d5db" />
    <line x1="${padL}" y1="${(padT + plotH).toFixed(1)}" x2="${width - 16}" y2="${(padT + plotH).toFixed(1)}" stroke="#9ca3af" />
    <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
    ${dots}
  </svg>`;
}

// Grafik batang horizontal untuk pangsa (mis. struktur umur).
export function shareBars(rows, opts = {}) {
  const color = opts.color || '#0f766e';
  return rows
    .map(
      (r) => `<div class="share-row">
        <div class="share-label">${esc(r.group)}</div>
        <div class="share-track"><div class="share-fill" style="width:${r.share}%;background:${color}"></div></div>
        <div class="share-value">${fmt(r.share)}%</div>
      </div>`,
    )
    .join('');
}
