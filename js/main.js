// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Tutup saat klik link di dalam menu
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Tutup saat klik di luar navbar
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-inner')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

// Render featured mountains (index.html)
const featuredGrid = document.getElementById('featured-grid');
if (featuredGrid) {
  const featured = gunungData.filter(g => g.populer).slice(0, 4);
  featuredGrid.innerHTML = featured.map(g => createCard(g)).join('');
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

// Create mountain card HTML
function renderJalurCard(j) {
  var posHTML = '';
  if (j.pos && j.pos.length) {
    var posItems = j.pos.map(function(p, i) {
      var jarakBadge = p.jarakKePos === 'Start'
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

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Form submit
function submitForm(e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
  e.target.reset();
}

// ===== TIPS PENDAKIAN — SEARCH =====
function initTipsSelector() {
  var input = document.getElementById('tips-search-input');
  var dropdown = document.getElementById('tips-dropdown');
  var clearBtn = document.getElementById('tips-search-clear');
  if (!input) return;

  input.addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    clearBtn.style.display = q ? 'flex' : 'none';

    if (!q) { dropdown.innerHTML = ''; dropdown.classList.remove('open'); return; }

    var matches = gunungData.filter(function (g) {
      return g.nama.toLowerCase().includes(q);
    });

    if (!matches.length) {
      dropdown.innerHTML = '<li class="tips-dd-empty">Gunung tidak ditemukan</li>';
      dropdown.classList.add('open');
      return;
    }

    dropdown.innerHTML = matches.map(function (g) {
      var kesClass = g.kesulitan === 'Mudah' ? 'tag-mudah'
        : g.kesulitan === 'Sedang' ? 'tag-sedang'
        : g.kesulitan === 'Sulit' ? 'tag-sulit' : 'tag-sangat-sulit';
      return '<li class="tips-dd-item" data-id="' + g.id + '">'
        + '<span class="tips-dd-emoji">' + g.emoji + '</span>'
        + '<span class="tips-dd-name">' + g.nama + '</span>'
        + '<span class="tag ' + kesClass + ' tips-dd-tag">' + g.kesulitan + '</span>'
        + '</li>';
    }).join('');
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('click', function (e) {
    var item = e.target.closest('.tips-dd-item');
    if (!item) return;
    var id = item.dataset.id;
    var g = gunungData.find(function (x) { return x.id === id; });
    if (g) {
      input.value = g.nama;
      clearBtn.style.display = 'flex';
    }
    dropdown.innerHTML = '';
    dropdown.classList.remove('open');
    showTips(id);
  });

  clearBtn.addEventListener('click', function () {
    input.value = '';
    clearBtn.style.display = 'none';
    dropdown.innerHTML = '';
    dropdown.classList.remove('open');
    document.getElementById('tips-placeholder').style.display = '';
    document.getElementById('tips-detail').style.display = 'none';
    input.focus();
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tips-search-wrap')) {
      dropdown.classList.remove('open');
    }
  });

  // Navigasi keyboard
  input.addEventListener('keydown', function (e) {
    var items = dropdown.querySelectorAll('.tips-dd-item');
    var active = dropdown.querySelector('.tips-dd-item.focused');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!active) { items[0] && items[0].classList.add('focused'); }
      else {
        active.classList.remove('focused');
        var next = active.nextElementSibling;
        if (next && next.classList.contains('tips-dd-item')) next.classList.add('focused');
        else items[0] && items[0].classList.add('focused');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (active) {
        active.classList.remove('focused');
        var prev = active.previousElementSibling;
        if (prev && prev.classList.contains('tips-dd-item')) prev.classList.add('focused');
        else items[items.length - 1] && items[items.length - 1].classList.add('focused');
      }
    } else if (e.key === 'Enter') {
      if (active) { active.click(); }
    } else if (e.key === 'Escape') {
      dropdown.classList.remove('open');
    }
  });
}

function showTips(id) {
  var g = gunungData.find(function(x) { return x.id === id; });
  var p = persiapanData[id];
  if (!g || !p) return;

  // Sembunyikan placeholder, tampilkan detail
  document.getElementById('tips-placeholder').style.display = 'none';
  var detail = document.getElementById('tips-detail');
  detail.style.display = 'block';

  // Header
  var kesClass = g.kesulitan === 'Mudah' ? 'tag-mudah'
    : g.kesulitan === 'Sedang' ? 'tag-sedang'
    : g.kesulitan === 'Sulit' ? 'tag-sulit' : 'tag-sangat-sulit';

  document.getElementById('tips-detail-header').innerHTML =
    '<span class="th-emoji">' + g.emoji + '</span>'
    + '<div class="th-info">'
    + '<h3>' + g.nama + '</h3>'
    + '<div class="th-badges">'
    + '<span class="th-badge">📍 ' + g.lokasi + '</span>'
    + '<span class="th-badge tag ' + kesClass + '">' + g.kesulitan + '</span>'
    + '<span class="th-badge">📏 ' + g.ketinggian.toLocaleString('id') + ' mdpl</span>'
    + '<span class="th-badge">⏱ ' + g.waktuTempuh + '</span>'
    + '</div>'
    + '</div>';

  // Body
  document.getElementById('tips-detail-body').innerHTML =
    // Tips spesifik gunung
    '<div class="tips-section">'
    + '<h4>💡 Tips Khusus ' + g.nama + '</h4>'
    + '<ul class="tips-list-items">'
    + g.tips.map(function(t) { return '<li>' + t + '</li>'; }).join('')
    + '</ul>'
    + '</div>'

    // Persiapan fisik
    + '<div class="tips-section">'
    + '<h4>💪 Persiapan Fisik</h4>'
    + '<ul class="tips-list-items">'
    + p.fisik.map(function(t) { return '<li>' + t + '</li>'; }).join('')
    + '</ul>'
    + '</div>'

    // Perlengkapan
    + '<div class="tips-section full-width">'
    + '<h4>🎒 Perlengkapan yang Dibawa</h4>'
    + '<div class="tips-perlengkapan">'
    + p.perlengkapan.map(function(item) { return '<span>' + item + '</span>'; }).join('')
    + '</div>'
    + '</div>'

    // Dokumen & izin
    + '<div class="tips-section">'
    + '<h4>📋 Dokumen & Izin</h4>'
    + '<ul class="tips-list-items">'
    + p.dokumen.map(function(t) { return '<li>' + t + '</li>'; }).join('')
    + '</ul>'
    + '</div>'

    // Larangan
    + '<div class="tips-section">'
    + '<h4>🚫 Larangan & Peringatan</h4>'
    + '<ul class="tips-list-items">'
    + p.larangan.map(function(t) { return '<li>' + t + '</li>'; }).join('')
    + '</ul>'
    + '</div>';

  // Scroll ke section tips
  document.getElementById('tips-detail').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Inisialisasi saat halaman load
if (document.getElementById('tips-search-input')) {
  initTipsSelector();
}
