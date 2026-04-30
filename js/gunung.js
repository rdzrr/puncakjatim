// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

let filteredData = [...gunungData];

function renderJalurCard(j) {
  let posHTML = '';
  if (j.pos && j.pos.length) {
    const posItems = j.pos.map(function(p, i) {
      const jarakBadge = p.jarakKePos === 'Start'
        ? '<span class="pos-jarak pos-start">🚩 Titik Awal</span>'
        : '<span class="pos-jarak">📍 ' + p.jarakKePos + '</span>';
      return '<div class="pos-item">'
        + '<span class="pos-num">' + (i + 1) + '</span>'
        + '<div class="pos-detail">'
        + '<span class="pos-name">' + p.nama + ' <span class="pos-alt">' + p.ketinggian + '</span></span>'
        + '<span class="pos-desc">' + p.keterangan + '</span>'
        + jarakBadge
        + '</div>'
        + '</div>';
    }).join('');
    posHTML = '<div class="pos-list jalur-pos-list">' + posItems + '</div>';
  }
  return '<div class="jalur-card">'
    + '<strong>' + j.nama + '</strong>'
    + '<div class="jalur-meta"><span>⏱ ' + j.durasi + '</span><span>📏 ' + j.jarak + '</span></div>'
    + '<p>' + j.keterangan + '</p>'
    + posHTML
    + '</div>';
}

function renderCards(data) {
  const grid = document.getElementById('mountain-grid');
  const noResult = document.getElementById('no-result');

  if (data.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }

  noResult.style.display = 'none';
  grid.innerHTML = data.map(g => createCard(g)).join('');
}

function createCard(g) {
  return `
    <div class="mountain-card" onclick="openModal('${g.id}')">
      <div class="card-img" style="background-image: url('${g.foto}'); background-color: ${g.warna};">
        <span class="card-img-label">${g.ketinggian.toLocaleString('id')} mdpl</span>
        <span class="card-status status-${g.status === 'Aktif' ? 'aktif' : 'nonaktif'}">${g.status}</span>
      </div>
      <div class="card-body">
        <h3>${g.nama}</h3>
        <div class="card-meta">
          <span>📍 ${g.lokasi}</span>
          <span>📏 ${g.ketinggian.toLocaleString('id')} mdpl</span>
        </div>
        <div class="card-tags">
          <span class="tag tag-${getDifficultyClass(g.kesulitan)}">${g.kesulitan}</span>
          <span class="tag tag-time">⏱ ${g.waktuTempuh}</span>
        </div>
        <p class="card-desc">${g.deskripsi.substring(0, 120)}...</p>
        <button class="btn btn-sm btn-primary">Lihat Detail →</button>
      </div>
    </div>
  `;
}

function getDifficultyClass(k) {
  const map = { 'Mudah': 'mudah', 'Sedang': 'sedang', 'Sulit': 'sulit', 'Sangat Sulit': 'sangat-sulit' };
  return map[k] || 'sedang';
}

// Filter logic
function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const kesulitan = document.getElementById('filter-kesulitan').value;
  const ketinggian = document.getElementById('filter-ketinggian').value;

  filteredData = gunungData.filter(g => {
    const matchSearch = g.nama.toLowerCase().includes(search) || g.lokasi.toLowerCase().includes(search);
    const matchKesulitan = !kesulitan || g.kesulitan === kesulitan;
    let matchKetinggian = true;
    if (ketinggian === 'low') matchKetinggian = g.ketinggian < 2000;
    else if (ketinggian === 'mid') matchKetinggian = g.ketinggian >= 2000 && g.ketinggian <= 3000;
    else if (ketinggian === 'high') matchKetinggian = g.ketinggian > 3000;

    return matchSearch && matchKesulitan && matchKetinggian;
  });

  renderCards(filteredData);
}

document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('filter-kesulitan').addEventListener('change', applyFilters);
document.getElementById('filter-ketinggian').addEventListener('change', applyFilters);

// Initial render
renderCards(gunungData);

// Modal
function openModal(id) {
  const g = gunungData.find(x => x.id === id);
  if (!g) return;

  const content = `
    <div class="modal-header" style="background-image: url('${g.foto}'); background-color: ${g.warna};">
      <div class="modal-header-overlay"></div>
      <div class="modal-header-inner">
        <span class="modal-emoji">${g.emoji}</span>
        <div>
          <h2>${g.nama}</h2>
          <p>${g.ketinggian.toLocaleString('id')} mdpl · ${g.lokasi}</p>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-badges">
        <span class="tag tag-${getDifficultyClass(g.kesulitan)}">${g.kesulitan}</span>
        <span class="tag tag-status-${g.status === 'Aktif' ? 'aktif' : 'nonaktif'}">${g.status}</span>
        <span class="tag tag-time">⏱ ${g.waktuTempuh}</span>
      </div>

      <p class="modal-desc">${g.deskripsi}</p>

      <div class="modal-info-grid">
        <div class="info-item"><span class="info-label">Jalur Utama</span><span>${g.jalurUtama}</span></div>
        <div class="info-item"><span class="info-label">Kawasan</span><span>${g.taman}</span></div>
        <div class="info-item"><span class="info-label">Musim Terbaik</span><span>${g.musimTerbaik}</span></div>
        <div class="info-item"><span class="info-label">Tiket Masuk</span><span>${g.tiket}</span></div>
      </div>

      <h4>🗺️ Jalur Pendakian</h4>
      ${g.jalur.map(j => renderJalurCard(j)).join('')}

      <h4>💡 Tips Pendakian</h4>
      <ul class="tips-list">
        ${g.tips.map(t => `<li>${t}</li>`).join('')}
      </ul>

      <h4>🏕️ Fasilitas</h4>
      <div class="fasilitas-grid">
        ${g.fasilitas.map(f => `<span class="fasilitas-item">✓ ${f}</span>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('modal-content').innerHTML = content;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
