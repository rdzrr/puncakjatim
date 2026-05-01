// Data Gunung Jawa Timur - Sumber: Wikipedia Indonesia
const gunungData = [
  {
    id: 'semeru',
    nama: 'Gunung Semeru',
    emoji: '🌋',
    ketinggian: 3676,
    lokasi: 'Kab. Malang & Kab. Lumajang',
    status: 'Aktif',
    kesulitan: 'Sangat Sulit',
    waktuTempuh: '3-4 hari',
    populer: true,
    warna: '#2c5f2e',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bentang_Alam_Gunung_Semeru.jpg',
    deskripsi: 'Gunung Semeru atau Gunung Meru adalah gunung berapi kerucut tertinggi di Pulau Jawa dengan puncak Mahameru pada ketinggian 3.676 mdpl. Termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru. Kawah di puncaknya dikenal dengan nama Jonggring Saloko dan masih aktif hingga saat ini dengan letusan setiap 15-30 menit.',
    jalurUtama: 'Ranu Pani, Lumajang',
    taman: 'Taman Nasional Bromo Tengger Semeru',
    musimTerbaik: 'April – Oktober (musim kemarau)',
    tiket: 'Rp 27.500 (WNI) / Rp 207.500 (WNA)',
    jalur: [
      {
        nama: 'Via Ranu Pani (Jalur Resmi)',
        durasi: '3-4 hari PP',
        jarak: '±28 km PP',
        keterangan: 'Jalur resmi dan paling populer. Dimulai dari Ranu Pani melewati Ranu Kumbolo yang ikonik, Oro-oro Ombo, hingga Kalimati sebagai basecamp terakhir sebelum summit attack ke Puncak Mahameru.',
        pos: [
          { nama: 'Ranu Pani', ketinggian: '2.100 mdpl', keterangan: 'Pos registrasi & basecamp utama', jarakKePos: 'Start' },
          { nama: 'Ranu Kumbolo', ketinggian: '2.400 mdpl', keterangan: 'Danau indah, area camping favorit', jarakKePos: '±7 km dari Ranu Pani' },
          { nama: 'Oro-oro Ombo', ketinggian: '2.450 mdpl', keterangan: 'Padang bunga violet yang ikonik', jarakKePos: '±1 km dari Ranu Kumbolo' },
          { nama: 'Cemoro Kandang', ketinggian: '2.500 mdpl', keterangan: 'Hutan cemara lebat', jarakKePos: '±1,5 km dari Oro-oro Ombo' },
          { nama: 'Kalimati', ketinggian: '2.700 mdpl', keterangan: 'Basecamp terakhir sebelum summit attack', jarakKePos: '±2 km dari Cemoro Kandang' },
          { nama: 'Arcopodo', ketinggian: '2.900 mdpl', keterangan: 'Batas vegetasi, medan pasir dimulai', jarakKePos: '±1 km dari Kalimati' },
          { nama: 'Puncak Mahameru', ketinggian: '3.676 mdpl', keterangan: 'Puncak tertinggi Pulau Jawa', jarakKePos: '±2,5 km dari Arcopodo' }
        ]
      }
    ],
    tips: [
      'Pendakian ke puncak (summit attack) dimulai dini hari pukul 00.00-02.00 WIB dari Kalimati',
      'Hindari area selatan kawah karena gas beracun wedhus gembel',
      'Batas aman pendakian adalah Kalimati; puncak hanya boleh didaki dengan izin khusus',
      'Bawa air minimal 3 liter karena sumber air terbatas setelah Ranu Kumbolo',
      'Suhu di puncak bisa mencapai -5°C, bawa pakaian hangat yang cukup',
      'Daftar SIMAKSI online sebelum berangkat di website TNBTS'
    ],
    fasilitas: ['Pos Registrasi', 'Toilet Ranu Pani', 'Warung di Ranu Pani', 'Shelter Ranu Kumbolo', 'Sumber Air Ranu Kumbolo', 'Area Camping Kalimati']
  },
  {
    id: 'arjuno',
    nama: 'Gunung Arjuno',
    emoji: '⛰️',
    ketinggian: 3339,
    lokasi: 'Kota Batu, Kab. Malang & Kab. Pasuruan',
    status: 'Aktif',
    kesulitan: 'Sulit',
    waktuTempuh: '2-3 hari',
    populer: true,
    warna: '#1a472a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Gunung_Arjuno.jpg',
    deskripsi: 'Gunung Arjuno adalah gunung berapi kerucut dengan ketinggian 3.339 mdpl, merupakan gunung tertinggi kedua di Jawa Timur setelah Semeru. Puncaknya dikenal dengan nama Puncak Ogal Agil. Gunung ini bersebelahan dengan Gunung Welirang dan berada di bawah pengelolaan Taman Hutan Raya Raden Soerjo.',
    jalurUtama: 'Tretes, Kab. Pasuruan',
    taman: 'Taman Hutan Raya Raden Soerjo',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 21.000 (WNI) / Rp 201.000 (WNA)',
    jalur: [
      {
        nama: 'Via Tretes (Prigen, Pasuruan)',
        durasi: '2-3 hari PP',
        jarak: '±22 km PP',
        keterangan: 'Jalur paling populer melewati Gunung Welirang. Dari Tretes menuju Pondok Welirang, Kokopan, lalu ke Puncak Arjuno. Bisa sekaligus mendaki Welirang.',
        pos: [
          { nama: 'Pos Tretes', ketinggian: '800 mdpl', keterangan: 'Basecamp & pos registrasi utama', jarakKePos: 'Start' },
          { nama: 'Pondok Welirang', ketinggian: '1.700 mdpl', keterangan: 'Shelter pertama, area istirahat', jarakKePos: '±5 km dari Tretes' },
          { nama: 'Pondok Kokopan', ketinggian: '2.200 mdpl', keterangan: 'Sumber air & area camping', jarakKePos: '±4 km dari Pondok Welirang' },
          { nama: 'Pondok Arjuno', ketinggian: '2.800 mdpl', keterangan: 'Shelter terakhir sebelum puncak', jarakKePos: '±4 km dari Pondok Kokopan' },
          { nama: 'Puncak Ogal Agil', ketinggian: '3.339 mdpl', keterangan: 'Puncak tertinggi Gunung Arjuno', jarakKePos: '±2 km dari Pondok Arjuno' }
        ]
      },
      {
        nama: 'Via Lawang (Kab. Malang)',
        durasi: '2-3 hari PP',
        jarak: '±20 km PP',
        keterangan: 'Jalur dari arah timur melalui Wonorejo, Lawang. Lebih sepi dan melewati hutan lebat yang masih alami.',
        pos: [
          { nama: 'Pos Lawang', ketinggian: '500 mdpl', keterangan: 'Basecamp & pos registrasi', jarakKePos: 'Start' },
          { nama: 'Pos 1 Wonorejo', ketinggian: '1.200 mdpl', keterangan: 'Melewati hutan pinus', jarakKePos: '±4 km dari Pos Lawang' },
          { nama: 'Pos 2 Hutan Lebat', ketinggian: '2.000 mdpl', keterangan: 'Hutan montane yang rapat', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Pos 3 Punggungan', ketinggian: '2.700 mdpl', keterangan: 'Jalur menyempit di punggungan', jarakKePos: '±4 km dari Pos 2' },
          { nama: 'Puncak Ogal Agil', ketinggian: '3.339 mdpl', keterangan: 'Puncak tertinggi Gunung Arjuno', jarakKePos: '±2 km dari Pos 3' }
        ]
      },
      {
        nama: 'Via Sumber Brantas (Kota Batu)',
        durasi: '2-3 hari PP',
        jarak: '±18 km PP',
        keterangan: 'Jalur dari arah barat melalui Sumber Brantas, Bumiaji, Kota Batu. Melewati mata air Sungai Brantas.',
        pos: [
          { nama: 'Pos Sumber Brantas', ketinggian: '1.500 mdpl', keterangan: 'Basecamp & pos registrasi, dekat mata air Brantas', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Pinus', ketinggian: '2.000 mdpl', keterangan: 'Melewati hutan pinus dan perkebunan', jarakKePos: '±3 km dari Sumber Brantas' },
          { nama: 'Pos 2 Padang Edelweis', ketinggian: '2.600 mdpl', keterangan: 'Area terbuka dengan bunga edelweis', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Pos 3 Punggungan Barat', ketinggian: '3.000 mdpl', keterangan: 'Punggungan menuju puncak', jarakKePos: '±3 km dari Pos 2' },
          { nama: 'Puncak Ogal Agil', ketinggian: '3.339 mdpl', keterangan: 'Puncak tertinggi Gunung Arjuno', jarakKePos: '±1,5 km dari Pos 3' }
        ]
      }
    ],
    tips: [
      'Jalur Tretes melewati area penambangan belerang Welirang, gunakan masker',
      'Puncak Ogal Agil menawarkan pemandangan 360° yang luar biasa',
      'Bawa jaket tebal karena suhu malam bisa sangat dingin',
      'Sumber air tersedia di Pondok Kokopan',
      'Bisa kombinasi pendakian Arjuno-Welirang dalam satu trip'
    ],
    fasilitas: ['Pos Registrasi Tretes', 'Shelter Pondok Welirang', 'Sumber Air Kokopan', 'Area Camping', 'Toilet Basecamp']
  },
  {
    id: 'raung',
    nama: 'Gunung Raung',
    emoji: '🌋',
    ketinggian: 3344,
    lokasi: 'Kab. Banyuwangi, Bondowoso & Jember',
    status: 'Aktif',
    kesulitan: 'Sangat Sulit',
    waktuTempuh: '3-4 hari',
    populer: true,
    warna: '#3d1c02',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Vulcano_Gunung_Raung.jpg',
    deskripsi: 'Gunung Raung adalah gunung berapi kerucut di ujung timur Pulau Jawa dengan ketinggian 3.344 mdpl. Merupakan gunung tertinggi ketiga di Jawa Timur. Kaldera Raung adalah kaldera kering terbesar di Pulau Jawa. Pendakian ke Puncak Sejati sangat ekstrem karena hanya berupa punggungan sempit dengan jurang di kedua sisi.',
    jalurUtama: 'Kalibaru, Banyuwangi',
    taman: 'Kawasan Hutan Lindung Raung',
    musimTerbaik: 'Juni – Agustus',
    tiket: 'Rp 15.000 (WNI)',
    jalur: [
      {
        nama: 'Via Kalibaru (Banyuwangi)',
        durasi: '3-4 hari PP',
        jarak: '±30 km PP',
        keterangan: 'Jalur favorit dengan 9 pos. Melewati perkebunan kopi dan hutan lebat. Bagian tersulit adalah "Jembatan Sirotol Mustaqim" menuju Puncak Sejati, punggungan sempit dengan jurang di kanan-kiri.',
        pos: [
          { nama: 'Basecamp Kalibaru', ketinggian: '600 mdpl', keterangan: 'Basecamp & pos registrasi (Rumah Pak Suto)', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '980 mdpl', keterangan: 'Warung kopi Pak Sunarya, area perkebunan kopi', jarakKePos: '±3 km dari Basecamp' },
          { nama: 'Pos 2', ketinggian: '1.400 mdpl', keterangan: 'Perkebunan kopi dan hutan campuran', jarakKePos: '±3 km dari Pos 1' },
          { nama: 'Pos 3', ketinggian: '1.600 mdpl', keterangan: 'Jalur mulai menanjak, banyak pohon berduri', jarakKePos: '±2 km dari Pos 2' },
          { nama: 'Pos 4', ketinggian: '1.800 mdpl', keterangan: 'Area camping luas dan nyaman', jarakKePos: '±1,5 km dari Pos 3' },
          { nama: 'Pos 5', ketinggian: '2.100 mdpl', keterangan: 'Hutan lebat dengan jalur terjal', jarakKePos: '±2 km dari Pos 4' },
          { nama: 'Pos 6', ketinggian: '2.200 mdpl', keterangan: 'Jalur sempit dengan jurang di sisi kiri', jarakKePos: '±1 km dari Pos 5' },
          { nama: 'Pos 7', ketinggian: '2.500 mdpl', keterangan: 'Area camping, hutan mulai terbuka', jarakKePos: '±2 km dari Pos 6' },
          { nama: 'Pos 8', ketinggian: '2.800 mdpl', keterangan: 'Area datar menuju Puncak Wates', jarakKePos: '±2 km dari Pos 7' },
          { nama: 'Pos 9 / Puncak Bendera', ketinggian: '3.154 mdpl', keterangan: 'Persimpangan menuju Puncak Sejati', jarakKePos: '±1,5 km dari Pos 8' },
          { nama: 'Puncak Sejati', ketinggian: '3.344 mdpl', keterangan: 'Puncak tertinggi via "Jembatan Sirotol Mustaqim"', jarakKePos: '±1 km dari Puncak Bendera' }
        ]
      },
      {
        nama: 'Via Sumberwringin (Bondowoso)',
        durasi: '3-4 hari PP',
        jarak: '±28 km PP',
        keterangan: 'Dianggap lebih aman dibanding jalur Kalibaru. Melewati Pondok Sumur, Pondok Demit, Pondok Mayit, dan Pondok Angin sebelum mencapai puncak.',
        pos: [
          { nama: 'Basecamp Sumberwringin', ketinggian: '900 mdpl', keterangan: 'Basecamp & pos registrasi', jarakKePos: 'Start' },
          { nama: 'Pos 1 / Pondok Sumur', ketinggian: '1.400 mdpl', keterangan: 'Melewati kebun kopi dan hutan rimbun', jarakKePos: '±4 km dari Basecamp' },
          { nama: 'Pos 2 / Pondok Demit', ketinggian: '1.900 mdpl', keterangan: 'Jalur menanjak, suasana mistis', jarakKePos: '±3,5 km dari Pos 1' },
          { nama: 'Pos 3 / Pondok Mayit', ketinggian: '2.400 mdpl', keterangan: 'Area terbuka, pemandangan mulai luas', jarakKePos: '±3 km dari Pos 2' },
          { nama: 'Pos 4 / Pondok Angin', ketinggian: '2.900 mdpl', keterangan: 'Batas vegetasi, angin kencang', jarakKePos: '±3 km dari Pos 3' },
          { nama: 'Puncak Sejati', ketinggian: '3.344 mdpl', keterangan: 'Puncak tertinggi Gunung Raung', jarakKePos: '±2 km dari Pondok Angin' }
        ]
      }
    ],
    tips: [
      'WAJIB membawa tali karmantel, harness, carabiner, dan helm untuk keselamatan',
      'Bawa air minimal 5-6 liter karena tidak ada sumber air di jalur atas',
      'Urus SIMAKSI di basecamp sebelum mendaki',
      'Direkomendasikan hanya untuk pendaki berpengalaman',
      'Cek status gunung sebelum mendaki karena sering erupsi',
      'Pendakian ke Puncak Sejati memerlukan teknik panjat tebing dasar'
    ],
    fasilitas: ['Pos Registrasi', 'Area Camping Pos 4', 'Warung di Basecamp', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'bromo',
    nama: 'Gunung Bromo',
    emoji: '🌄',
    ketinggian: 2614,
    lokasi: 'Kab. Probolinggo, Pasuruan, Lumajang & Malang',
    status: 'Aktif',
    kesulitan: 'Mudah',
    waktuTempuh: '1 hari',
    populer: true,
    warna: '#8B4513',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Gunung_Bromo_3.jpg',
    deskripsi: 'Gunung Bromo adalah gunung berapi aktif di Jawa Timur dengan ketinggian 2.614 mdpl. Terkenal sebagai objek wisata utama Jawa Timur dengan pemandangan matahari terbit yang spektakuler dari Penanjakan. Dikelilingi lautan pasir seluas 10 km² dan berada dalam kawasan Taman Nasional Bromo Tengger Semeru.',
    jalurUtama: 'Cemoro Lawang, Probolinggo',
    taman: 'Taman Nasional Bromo Tengger Semeru',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 29.000 (WNI weekday) / Rp 34.000 (WNI weekend)',
    jalur: [
      {
        nama: 'Via Cemoro Lawang (Probolinggo)',
        durasi: '1-2 jam PP',
        jarak: '±5 km PP',
        keterangan: 'Jalur paling populer. Dari Cemoro Lawang naik jeep melintasi lautan pasir, lalu mendaki 250 anak tangga ke bibir kawah. Bisa juga berkuda melintasi lautan pasir.',
        pos: [
          { nama: 'Cemoro Lawang', ketinggian: '2.200 mdpl', keterangan: 'Pintu masuk utama, parkir & sewa jeep/kuda', jarakKePos: 'Start' },
          { nama: 'Lautan Pasir (Pasir Berbisik)', ketinggian: '2.100 mdpl', keterangan: 'Hamparan pasir vulkanik seluas 10 km², dilintasi jeep atau kuda', jarakKePos: '±2 km dari Cemoro Lawang' },
          { nama: 'Pura Luhur Poten', ketinggian: '2.150 mdpl', keterangan: 'Pura suci suku Tengger di tengah lautan pasir', jarakKePos: '±0,5 km dari Lautan Pasir' },
          { nama: 'Kaki Tangga Kawah', ketinggian: '2.300 mdpl', keterangan: 'Awal pendakian 250 anak tangga ke kawah', jarakKePos: '±1 km dari Pura Luhur Poten' },
          { nama: 'Bibir Kawah Bromo', ketinggian: '2.614 mdpl', keterangan: 'Puncak kawah aktif Gunung Bromo', jarakKePos: '±0,5 km (250 anak tangga) dari kaki tangga' }
        ]
      },
      {
        nama: 'Via Penanjakan (Sunrise Point)',
        durasi: '30 menit dari Cemoro Lawang',
        jarak: '±8 km',
        keterangan: 'Titik terbaik menyaksikan matahari terbit dengan pemandangan Bromo, Batok, dan Semeru. Ketinggian 2.770 mdpl. Berangkat dini hari pukul 03.00-04.00 WIB.',
        pos: [
          { nama: 'Cemoro Lawang', ketinggian: '2.200 mdpl', keterangan: 'Titik keberangkatan, naik jeep ke Penanjakan', jarakKePos: 'Start' },
          { nama: 'Penanjakan 1', ketinggian: '2.770 mdpl', keterangan: 'Viewpoint utama sunrise, panorama Bromo-Batok-Semeru', jarakKePos: '±4 km dari Cemoro Lawang' },
          { nama: 'Bukit King Kong', ketinggian: '2.650 mdpl', keterangan: 'Alternatif viewpoint sunrise yang lebih sepi', jarakKePos: '±1 km dari Penanjakan 1' },
          { nama: 'Seruni Point', ketinggian: '2.500 mdpl', keterangan: 'Viewpoint dengan jembatan kaca, pemandangan spektakuler', jarakKePos: '±3 km dari Cemoro Lawang' }
        ]
      }
    ],
    tips: [
      'Berangkat ke Penanjakan pukul 03.00-04.00 WIB untuk menyaksikan sunrise',
      'Gunakan masker karena bau belerang cukup menyengat di kawah',
      'Sewa jeep 4WD untuk melintasi lautan pasir, tersedia di Cemoro Lawang',
      'Bawa jaket tebal karena suhu pagi hari sangat dingin (5-10°C)',
      'Hindari mendaki saat status gunung Waspada atau lebih tinggi',
      'Festival Yadnya Kasada biasanya berlangsung bulan Juni-Juli'
    ],
    fasilitas: ['Parkir Luas', 'Toilet Umum', 'Warung Makan', 'Penyewaan Kuda', 'Penyewaan Jeep 4WD', 'Penginapan di Cemoro Lawang', 'Pemandu Wisata']
  },
  {
    id: 'welirang',
    nama: 'Gunung Welirang',
    emoji: '⛰️',
    ketinggian: 3156,
    lokasi: 'Kota Batu, Kab. Pasuruan & Kab. Mojokerto',
    status: 'Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '2 hari',
    populer: false,
    warna: '#4a7c59',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Gunung_welirang_dengan_kawah_belerang.jpg',
    deskripsi: 'Gunung Welirang adalah gunung berapi aktif dengan ketinggian 3.156 mdpl. Nama "Welirang" berarti belerang dalam bahasa Jawa, sesuai dengan karakteristiknya yang kaya fumarol dan endapan belerang. Bersebelahan dengan Gunung Arjuno dan berada dalam kawasan Taman Hutan Raya Raden Soerjo.',
    jalurUtama: 'Tretes, Kab. Pasuruan',
    taman: 'Taman Hutan Raya Raden Soerjo',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 21.000 (WNI) / Rp 201.000 (WNA)',
    jalur: [
      {
        nama: 'Via Tretes (Prigen, Pasuruan)',
        durasi: '2 hari PP',
        jarak: '±18 km PP',
        keterangan: 'Jalur utama melewati area penambangan belerang tradisional. Dari Tretes menuju Pondok Welirang, Kokopan, kawah belerang, lalu ke puncak. Sering dikombinasikan dengan pendakian Arjuno.',
        pos: [
          { nama: 'Pos Tretes', ketinggian: '800 mdpl', keterangan: 'Basecamp & pos registrasi utama', jarakKePos: 'Start' },
          { nama: 'Pondok Welirang', ketinggian: '1.700 mdpl', keterangan: 'Shelter pertama, area istirahat & camping', jarakKePos: '±5 km dari Tretes' },
          { nama: 'Pondok Kokopan', ketinggian: '2.200 mdpl', keterangan: 'Sumber air, area camping, persimpangan jalur Arjuno', jarakKePos: '±4 km dari Pondok Welirang' },
          { nama: 'Kawah Welirang', ketinggian: '3.000 mdpl', keterangan: 'Area fumarol & penambangan belerang aktif', jarakKePos: '±3 km dari Pondok Kokopan' },
          { nama: 'Puncak Welirang', ketinggian: '3.156 mdpl', keterangan: 'Puncak tertinggi Gunung Welirang', jarakKePos: '±0,5 km dari Kawah Welirang' }
        ]
      }
    ],
    tips: [
      'Wajib menggunakan masker karena gas belerang sangat pekat di kawah',
      'Bisa dikombinasikan dengan pendakian Gunung Arjuno',
      'Sumber air tersedia di Pondok Kokopan',
      'Hindari mendekati kawah terlalu lama karena gas beracun',
      'Bawa pakaian hangat untuk bermalam di Pondok Kokopan'
    ],
    fasilitas: ['Pos Registrasi Tretes', 'Shelter Pondok Welirang', 'Shelter Pondok Kokopan', 'Sumber Air', 'Area Camping']
  },
  {
    id: 'ijen',
    nama: 'Kawah Ijen',
    emoji: '🔵',
    ketinggian: 2386,
    lokasi: 'Kab. Banyuwangi & Kab. Bondowoso',
    status: 'Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: true,
    warna: '#1a6b8a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Kawah_Ijen_crater_lake.jpg',
    deskripsi: 'Kawah Ijen adalah kawah vulkanik aktif di puncak Gunung Ijen (2.386 mdpl) yang terkenal dengan fenomena api biru (blue fire) yang langka. Fenomena ini terjadi akibat pembakaran gas belerang berkonsentrasi tinggi. Kawah Ijen juga merupakan danau kawah asam terbesar di dunia dengan warna air biru kehijauan yang memukau.',
    jalurUtama: 'Paltuding, Banyuwangi',
    taman: 'Cagar Alam Kawah Ijen',
    musimTerbaik: 'April – Oktober (blue fire: sepanjang tahun, terbaik April-Oktober)',
    tiket: 'Rp 5.000 (WNI weekday) / Rp 7.500 (WNI weekend)',
    jalur: [
      {
        nama: 'Via Paltuding (Banyuwangi)',
        durasi: '3-4 jam PP',
        jarak: '±6 km PP',
        keterangan: 'Jalur utama dari Paltuding. Trekking sekitar 3 km ke bibir kawah dengan kenaikan 536 meter. Untuk melihat blue fire, berangkat dini hari pukul 01.00-02.00 WIB.',
        pos: [
          { nama: 'Paltuding', ketinggian: '1.850 mdpl', keterangan: 'Pos registrasi, parkir & warung makan', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '2.100 mdpl', keterangan: 'Jalur mulai menanjak, hutan tropis lebat', jarakKePos: '±1,5 km dari Paltuding' },
          { nama: 'Pos 2', ketinggian: '2.200 mdpl', keterangan: 'Area istirahat, pemandangan mulai terbuka', jarakKePos: '±1 km dari Pos 1' },
          { nama: 'Bibir Kawah', ketinggian: '2.386 mdpl', keterangan: 'Puncak kawah, titik melihat blue fire & danau kawah', jarakKePos: '±0,5 km dari Pos 2' },
          { nama: 'Dasar Kawah', ketinggian: '2.148 mdpl', keterangan: 'Area penambangan belerang aktif (turun ±300 m dari bibir kawah)', jarakKePos: '±0,3 km turun dari Bibir Kawah' }
        ]
      },
      {
        nama: 'Via Bondowoso',
        durasi: '4-5 jam PP',
        jarak: '±8 km PP',
        keterangan: 'Jalur alternatif dari sisi Bondowoso. Lebih panjang namun melewati pemandangan perkebunan kopi yang indah.',
        pos: [
          { nama: 'Pos Bondowoso', ketinggian: '1.600 mdpl', keterangan: 'Basecamp & pos registrasi sisi Bondowoso', jarakKePos: 'Start' },
          { nama: 'Pos 1 Perkebunan Kopi', ketinggian: '1.900 mdpl', keterangan: 'Melewati perkebunan kopi Arabika yang luas', jarakKePos: '±2 km dari Pos Bondowoso' },
          { nama: 'Pos 2 Hutan Pinus', ketinggian: '2.100 mdpl', keterangan: 'Hutan pinus dan vegetasi pegunungan', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Pos 3 Persimpangan', ketinggian: '2.250 mdpl', keterangan: 'Persimpangan jalur menuju bibir kawah', jarakKePos: '±2 km dari Pos 2' },
          { nama: 'Bibir Kawah', ketinggian: '2.386 mdpl', keterangan: 'Puncak kawah Ijen dengan danau biru kehijauan', jarakKePos: '±1 km dari Pos 3' }
        ]
      }
    ],
    tips: [
      'Untuk melihat blue fire, berangkat dari Paltuding pukul 01.00-02.00 WIB',
      'WAJIB menggunakan masker gas (bukan masker biasa) karena gas SO2 berbahaya',
      'Bawa senter/headlamp yang kuat untuk pendakian malam',
      'Jangan turun ke dasar kawah tanpa pemandu dan masker gas',
      'Bawa jaket tebal karena suhu malam sangat dingin',
      'Fenomena blue fire hanya terlihat dalam kondisi gelap (sebelum fajar)'
    ],
    fasilitas: ['Pos Registrasi Paltuding', 'Toilet Umum', 'Warung Makan', 'Parkir Luas', 'Penginapan di sekitar Paltuding', 'Pemandu Wisata']
  },
  {
    id: 'argopuro',
    nama: 'Gunung Argopuro',
    emoji: '🏔️',
    ketinggian: 3088,
    lokasi: 'Kab. Probolinggo, Jember, Bondowoso & Situbondo',
    status: 'Tidak Aktif',
    kesulitan: 'Sulit',
    waktuTempuh: '4-6 hari',
    populer: false,
    warna: '#2d5016',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Argopuro_from_a_Distance.jpg',
    deskripsi: 'Gunung Argopuro (Argapura) adalah gunung berapi kompleks yang sudah tidak aktif dengan ketinggian 3.088 mdpl. Merupakan titik tertinggi Pegunungan Iyang. Terkenal dengan jalur pendakian terpanjang di Pulau Jawa (±63 km) yang melewati padang savana, hutan lebat, dan Puncak Rengganis yang mistis.',
    jalurUtama: 'Baderan, Situbondo',
    taman: 'Suaka Margasatwa Dataran Tinggi Yang',
    musimTerbaik: 'Juni – Agustus',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Baderan – Bermi (Traverse)',
        durasi: '4-6 hari',
        jarak: '±63 km',
        keterangan: 'Jalur traverse terpanjang di Pulau Jawa. Dimulai dari Baderan (Situbondo) dan berakhir di Bermi (Probolinggo) atau sebaliknya. Melewati padang savana Cikasur yang indah dan Puncak Rengganis yang legendaris.',
        pos: [
          { nama: 'Baderan', ketinggian: '1.100 mdpl', keterangan: 'Basecamp utara & pos registrasi (Situbondo)', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Baderan', ketinggian: '1.500 mdpl', keterangan: 'Hutan tropis lebat, jalur mulai menanjak', jarakKePos: '±5 km dari Baderan' },
          { nama: 'Pos 2 Mata Air', ketinggian: '1.800 mdpl', keterangan: 'Sumber air bersih, area istirahat', jarakKePos: '±5 km dari Pos 1' },
          { nama: 'Cikasur', ketinggian: '2.100 mdpl', keterangan: 'Padang savana luas & bekas landasan pesawat peninggalan Belanda', jarakKePos: '±7 km dari Pos 2' },
          { nama: 'Cisentor', ketinggian: '2.500 mdpl', keterangan: 'Persimpangan jalur, sumber air terakhir', jarakKePos: '±8 km dari Cikasur' },
          { nama: 'Puncak Rengganis', ketinggian: '2.995 mdpl', keterangan: 'Puncak ikonik dengan situs mistis Dewi Rengganis', jarakKePos: '±5 km dari Cisentor' },
          { nama: 'Puncak Argopuro', ketinggian: '3.088 mdpl', keterangan: 'Puncak tertinggi, tugu triangulasi', jarakKePos: '±0,5 km dari Puncak Rengganis' },
          { nama: 'Pos Bermi', ketinggian: '900 mdpl', keterangan: 'Basecamp selatan & pos registrasi (Probolinggo)', jarakKePos: '±15 km dari Puncak Argopuro' }
        ]
      }
    ],
    tips: [
      'Persiapkan logistik untuk 5-6 hari karena jalur sangat panjang',
      'Bawa peta dan kompas karena jalur bisa membingungkan',
      'Sumber air tersedia di beberapa titik sepanjang jalur',
      'Cikasur adalah spot camping terbaik dengan pemandangan savana',
      'Daftarkan diri di pos Baderan atau Bermi sebelum mendaki',
      'Direkomendasikan minimal 4 orang dalam satu kelompok'
    ],
    fasilitas: ['Pos Registrasi Baderan', 'Pos Registrasi Bermi', 'Sumber Air di Cikasur', 'Area Camping Cikasur', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'penanggungan',
    nama: 'Gunung Penanggungan',
    emoji: '🏛️',
    ketinggian: 1653,
    lokasi: 'Kab. Mojokerto & Kab. Pasuruan',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#5c4033',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Gunung_Penanggungan.jpg',
    deskripsi: 'Gunung Penanggungan (Pawitra) adalah gunung berapi istirahat dengan ketinggian 1.653 mdpl. Dikenal sebagai gunung suci dalam kepercayaan Hindu-Buddha Jawa karena dipenuhi lebih dari 116 situs purbakala dari abad ke-10 hingga ke-15. Ditetapkan sebagai Cagar Budaya Provinsi Jawa Timur sejak 2015.',
    jalurUtama: 'Tamiajeng, Trawas, Mojokerto',
    taman: 'Cagar Budaya Gunung Penanggungan',
    musimTerbaik: 'Sepanjang tahun (terbaik April-Oktober)',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Tamiajeng (Trawas, Mojokerto)',
        durasi: '6-8 jam PP',
        jarak: '±10 km PP',
        keterangan: 'Jalur paling populer dan terpendek. Melewati Bukit Bayangan dan beberapa situs candi. Cukup terjal di bagian atas.',
        pos: [
          { nama: 'Tamiajeng', ketinggian: '600 mdpl', keterangan: 'Basecamp & pos registrasi, warung makan tersedia', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '800 mdpl', keterangan: 'Jalur melewati hutan pinus dan ladang warga', jarakKePos: '±1,5 km dari Tamiajeng' },
          { nama: 'Pos 2 / Bukit Bayangan', ketinggian: '1.100 mdpl', keterangan: 'Area terbuka dengan pemandangan lembah, terdapat situs candi', jarakKePos: '±1,5 km dari Pos 1' },
          { nama: 'Pos 3', ketinggian: '1.300 mdpl', keterangan: 'Jalur semakin terjal, vegetasi mulai jarang', jarakKePos: '±1,5 km dari Pos 2' },
          { nama: 'Puncak Penanggungan', ketinggian: '1.653 mdpl', keterangan: 'Puncak kerucut piroklastik, pemandangan 360° ke Selat Madura', jarakKePos: '±1 km dari Pos 3' }
        ]
      },
      {
        nama: 'Via Jolotundo (Trawas)',
        durasi: '8-10 jam PP',
        jarak: '±14 km PP',
        keterangan: 'Jalur sejarah melewati banyak situs purbakala seperti Petirtaan Jolotundo, Candi Bayi, Candi Putri, dan Candi Pura.',
        pos: [
          { nama: 'Petirtaan Jolotundo', ketinggian: '500 mdpl', keterangan: 'Pemandian suci abad ke-10, titik awal jalur sejarah', jarakKePos: 'Start' },
          { nama: 'Candi Bayi & Candi Putri', ketinggian: '700 mdpl', keterangan: 'Situs purbakala Hindu-Buddha abad ke-14', jarakKePos: '±2 km dari Jolotundo' },
          { nama: 'Candi Pura', ketinggian: '1.000 mdpl', keterangan: 'Kompleks candi di lereng barat, persimpangan jalur', jarakKePos: '±2,5 km dari Candi Bayi' },
          { nama: 'Candi Sinta', ketinggian: '1.200 mdpl', keterangan: 'Situs candi dengan relief indah', jarakKePos: '±2 km dari Candi Pura' },
          { nama: 'Pos Puncak Utara', ketinggian: '1.500 mdpl', keterangan: 'Jalur menyatu dengan jalur Tamiajeng', jarakKePos: '±2 km dari Candi Sinta' },
          { nama: 'Puncak Penanggungan', ketinggian: '1.653 mdpl', keterangan: 'Puncak kerucut piroklastik, pemandangan 360°', jarakKePos: '±1 km dari Pos Puncak Utara' }
        ]
      }
    ],
    tips: [
      'Jangan merusak atau mengambil artefak purbakala yang ditemukan di jalur',
      'Bawa air yang cukup karena tidak ada sumber air di jalur',
      'Jalur Jolotundo cocok untuk yang tertarik sejarah Hindu-Buddha',
      'Pemandangan dari puncak sangat indah, bisa melihat Selat Madura',
      'Cocok untuk pendaki pemula yang ingin mencoba gunung lebih dari 1.000 mdpl'
    ],
    fasilitas: ['Pos Registrasi Tamiajeng', 'Toilet Basecamp', 'Warung di Tamiajeng', 'Parkir Kendaraan', 'Pemandu Lokal']
  },
  {
    id: 'kelud',
    nama: 'Gunung Kelud',
    emoji: '🌋',
    ketinggian: 1731,
    lokasi: 'Kab. Kediri, Kab. Blitar & Kab. Malang',
    status: 'Aktif',
    kesulitan: 'Mudah',
    waktuTempuh: '1 hari',
    populer: true,
    warna: '#7b2d00',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Gunung_Kelud.jpg',
    deskripsi: 'Gunung Kelud adalah gunung berapi aktif di Jawa Timur dengan ketinggian 1.731 mdpl. Terletak di perbatasan Kabupaten Kediri, Blitar, dan Malang. Sejak tahun 1000 M telah meletus lebih dari 30 kali. Letusan terakhir terjadi pada 13 Februari 2014 yang abunya menjangkau Yogyakarta dan Bandung. Kini kawahnya menjadi destinasi wisata populer.',
    jalurUtama: 'Sugihwaras, Kab. Kediri',
    taman: 'Kawasan Wisata Gunung Kelud',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 15.000 (WNI)',
    jalur: [
      {
        nama: 'Via Sugihwaras (Kediri)',
        durasi: '3-4 jam PP',
        jarak: '±6 km PP',
        keterangan: 'Jalur utama dan paling populer. Jalan beraspal hingga dekat puncak, cocok untuk wisatawan umum. Dari parkiran bisa berjalan kaki atau naik ojek ke kawah.',
        pos: [
          { nama: 'Gerbang Wisata Sugihwaras', ketinggian: '1.000 mdpl', keterangan: 'Pintu masuk, loket tiket & parkir', jarakKePos: 'Start' },
          { nama: 'Pos 1 Gardu Pandang', ketinggian: '1.300 mdpl', keterangan: 'Area istirahat dengan pemandangan lembah', jarakKePos: '±2 km dari Gerbang' },
          { nama: 'Area Parkir Atas', ketinggian: '1.600 mdpl', keterangan: 'Parkir kendaraan terakhir, lanjut jalan kaki', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Kawah Kelud', ketinggian: '1.731 mdpl', keterangan: 'Kawah kering pasca letusan 2014, pemandangan spektakuler', jarakKePos: '±1 km dari Area Parkir Atas' }
        ]
      }
    ],
    tips: [
      'Cek status gunung sebelum berkunjung di magma.esdm.go.id',
      'Bawa masker karena kadang ada bau belerang di sekitar kawah',
      'Tersedia ojek dari parkiran bawah ke kawah jika tidak ingin jalan kaki',
      'Waktu terbaik berkunjung pagi hari sebelum kabut datang',
      'Jangan mendekati kawah saat status gunung Waspada atau lebih tinggi'
    ],
    fasilitas: ['Parkir Luas', 'Toilet Umum', 'Warung Makan', 'Ojek Lokal', 'Gardu Pandang', 'Jalan Beraspal ke Puncak']
  },
  {
    id: 'kawi',
    nama: 'Gunung Kawi',
    emoji: '⛰️',
    ketinggian: 2551,
    lokasi: 'Kab. Malang & Kab. Blitar',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '2 hari',
    populer: false,
    warna: '#2e5902',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Kawi-Butak.jpg',
    deskripsi: 'Gunung Kawi adalah gunung berapi yang sudah lama tidak aktif dengan ketinggian 2.551 mdpl, terletak di barat daya Kabupaten Malang berbatasan dengan Kabupaten Blitar. Dikenal juga sebagai "Gunung Putri Tidur" karena siluetnya menyerupai wanita tidur jika dilihat dari Kota Malang. Terkenal dengan Pesarean Gunung Kawi sebagai tempat ziarah.',
    jalurUtama: 'Precet, Wagir, Kab. Malang',
    taman: 'Kawasan Hutan Lindung Kawi-Butak',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Precet (Wagir, Malang)',
        durasi: '2 hari PP',
        jarak: '±16 km PP',
        keterangan: 'Jalur paling populer dari sisi Malang. Melewati hutan pinus dan perkebunan teh. Terdapat mata air di tengah jalur.',
        pos: [
          { nama: 'Pos Precet', ketinggian: '700 mdpl', keterangan: 'Basecamp & pos registrasi', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Pinus', ketinggian: '1.200 mdpl', keterangan: 'Hutan pinus lebat, jalur mulai menanjak', jarakKePos: '±3 km dari Pos Precet' },
          { nama: 'Pos 2 Mata Air', ketinggian: '1.700 mdpl', keterangan: 'Sumber air bersih, area istirahat', jarakKePos: '±3 km dari Pos 1' },
          { nama: 'Sabana Kawi', ketinggian: '2.300 mdpl', keterangan: 'Padang sabana luas, area camping favorit', jarakKePos: '±4 km dari Pos 2' },
          { nama: 'Puncak Kawi', ketinggian: '2.551 mdpl', keterangan: 'Puncak dengan pemandangan Malang, Blitar & Waduk Karangkates', jarakKePos: '±1,5 km dari Sabana' }
        ]
      },
      {
        nama: 'Via Sirahkencong (Wlingi, Blitar)',
        durasi: '2 hari PP',
        jarak: '±18 km PP',
        keterangan: 'Jalur dari sisi Blitar melewati perkebunan teh Sirahkencong yang indah. Pemandangan Kota Wlingi dan Blitar dari jalur ini sangat memukau.',
        pos: [
          { nama: 'Pos Sirahkencong', ketinggian: '900 mdpl', keterangan: 'Basecamp di area perkebunan teh', jarakKePos: 'Start' },
          { nama: 'Pos 1 Kebun Teh', ketinggian: '1.400 mdpl', keterangan: 'Melewati hamparan kebun teh yang luas', jarakKePos: '±4 km dari Sirahkencong' },
          { nama: 'Pos 2 Hutan Montane', ketinggian: '2.000 mdpl', keterangan: 'Hutan pegunungan lebat', jarakKePos: '±3 km dari Pos 1' },
          { nama: 'Sabana Kawi', ketinggian: '2.300 mdpl', keterangan: 'Bertemu jalur Precet, area camping', jarakKePos: '±4 km dari Pos 2' },
          { nama: 'Puncak Kawi', ketinggian: '2.551 mdpl', keterangan: 'Puncak tertinggi Gunung Kawi', jarakKePos: '±1,5 km dari Sabana' }
        ]
      }
    ],
    tips: [
      'Pesarean Gunung Kawi (tempat ziarah) bisa dikunjungi sebelum mendaki',
      'Bawa air yang cukup, sumber air hanya ada di Pos 2 jalur Precet',
      'Sabana Kawi adalah spot camping terbaik dengan pemandangan bintang',
      'Pemandangan dari puncak mencakup Kota Malang, Blitar, dan Waduk Karangkates',
      'Jalur Sirahkencong cocok untuk yang suka pemandangan perkebunan teh'
    ],
    fasilitas: ['Pos Registrasi Precet', 'Sumber Air Pos 2', 'Area Camping Sabana', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'butak',
    nama: 'Gunung Butak (Mbutak)',
    emoji: '🏔️',
    ketinggian: 2868,
    lokasi: 'Kab. Malang & Kab. Blitar',
    status: 'Tidak Aktif',
    kesulitan: 'Sulit',
    waktuTempuh: '2 hari',
    populer: false,
    warna: '#1c3a0e',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gunung_Buthak.jpg',
    deskripsi: 'Gunung Butak (Buthak) adalah gunung berapi kerucut tidak aktif dengan ketinggian 2.868 mdpl, merupakan puncak tertinggi Pegunungan Kawi. Terletak di perbatasan Kabupaten Malang dan Blitar. Jalurnya dikenal cukup menantang dengan hutan lumut yang lebat dan sabana edelweis yang indah di bagian atas.',
    jalurUtama: 'Via Panderman, Kota Batu',
    taman: 'Kawasan Hutan Lindung Kawi-Butak',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Panderman (Kota Batu)',
        durasi: '2 hari PP',
        jarak: '±20 km PP',
        keterangan: 'Jalur paling populer, titik awal sama dengan jalur Gunung Panderman. Melewati hutan lumut yang rapat dan sabana edelweis. Terdapat "Tanjakan PHP" yang terkenal panjang dan menguras tenaga.',
        pos: [
          { nama: 'Pos Perizinan Panderman', ketinggian: '1.000 mdpl', keterangan: 'Basecamp & pos registrasi di Desa Pesanggrahan, Kota Batu', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '1.400 mdpl', keterangan: 'Dilengkapi sumber air dan musala, ±1 jam dari basecamp', jarakKePos: '±3 km dari Basecamp' },
          { nama: 'Pos 2 (Tanjakan PHP)', ketinggian: '1.900 mdpl', keterangan: 'Area istirahat luas, awas tanjakan panjang sebelum pos ini', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Pos 3 Hutan Lumut', ketinggian: '2.400 mdpl', keterangan: 'Hutan lumut lebat dan lembap, spot camping terbaik', jarakKePos: '±3 km dari Pos 2' },
          { nama: 'Pos 4 / Cemoro Kandang', ketinggian: '2.650 mdpl', keterangan: 'Jalur melipir jurang, dominasi pohon pinus', jarakKePos: '±2 km dari Pos 3' },
          { nama: 'Sabana Edelweis', ketinggian: '2.750 mdpl', keterangan: 'Padang sabana luas dengan bunga edelweis, sumber air tersedia', jarakKePos: '±0,5 km dari Pos 4' },
          { nama: 'Puncak Butak', ketinggian: '2.868 mdpl', keterangan: 'Puncak tertinggi, pemandangan Arjuno-Welirang yang memukau', jarakKePos: '±0,5 km dari Sabana' }
        ]
      }
    ],
    tips: [
      'Pos 3 adalah tempat camping terbaik, tanah datar dan cukup luas',
      'Hati-hati pohon tua rawan patah di sekitar Pos 3',
      'Bawa air dari Pos 1 karena sumber air berikutnya di Sabana',
      'Tanjakan PHP sebelum Pos 2 sangat menguras tenaga, istirahat cukup',
      'Dari puncak bisa melihat Gunung Arjuno, Welirang, dan Kawi dengan jelas',
      'Jalur ini juga bisa dilanjutkan ke Gunung Kawi (traverse)'
    ],
    fasilitas: ['Pos Registrasi Panderman', 'Sumber Air Pos 1', 'Sumber Air Sabana', 'Area Camping Pos 3', 'Area Camping Sabana']
  },
  {
    id: 'panderman',
    nama: 'Gunung Panderman',
    emoji: '⛰️',
    ketinggian: 2045,
    lokasi: 'Kota Batu, Jawa Timur',
    status: 'Tidak Aktif',
    kesulitan: 'Mudah',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#3a6b1a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Gunung_Panderman.jpg',
    deskripsi: 'Gunung Panderman adalah gunung di Kota Batu dengan puncak Basundara setinggi 2.045 mdpl. Nama "Panderman" berasal dari kata Jawa "dermo" yang berarti sekadar, karena dahulu digunakan sebagai tempat menyepi sementara. Cocok untuk pendaki pemula karena jalurnya relatif pendek dan tidak terlalu terjal.',
    jalurUtama: 'Latar Ombo, Kota Batu',
    taman: 'Kawasan Hutan Kota Batu',
    musimTerbaik: 'Sepanjang tahun (terbaik April-Oktober)',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Latar Ombo (Kota Batu)',
        durasi: '6-7 jam PP',
        jarak: '±10 km PP',
        keterangan: 'Satu-satunya jalur resmi menuju puncak. Dari Malang ke Batu 45 menit, lalu ke Latar Ombo 90 menit, kemudian mendaki sekitar 3 jam ke puncak. Cocok untuk pendaki pemula.',
        pos: [
          { nama: 'Latar Ombo', ketinggian: '1.200 mdpl', keterangan: 'Basecamp & pos registrasi, parkir kendaraan', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '1.500 mdpl', keterangan: 'Jalur melewati hutan pinus dan ladang warga', jarakKePos: '±2 km dari Latar Ombo' },
          { nama: 'Pos 2', ketinggian: '1.750 mdpl', keterangan: 'Area istirahat, jalur mulai menanjak lebih terjal', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Pos 3', ketinggian: '1.950 mdpl', keterangan: 'Hampir sampai puncak, vegetasi mulai terbuka', jarakKePos: '±1,5 km dari Pos 2' },
          { nama: 'Puncak Basundara', ketinggian: '2.045 mdpl', keterangan: 'Puncak Panderman, pemandangan Kota Batu dan Malang', jarakKePos: '±0,5 km dari Pos 3' }
        ]
      }
    ],
    tips: [
      'Sangat cocok untuk pendaki pemula atau pertama kali mendaki',
      'Waktu tempuh ke puncak sekitar 3 jam dari Latar Ombo',
      'Bawa air yang cukup karena tidak ada sumber air di jalur',
      'Pemandangan Kota Batu dan Malang dari puncak sangat indah',
      'Bisa dikombinasikan dengan wisata Kota Batu sebelum/sesudah mendaki'
    ],
    fasilitas: ['Pos Registrasi Latar Ombo', 'Parkir Kendaraan', 'Warung di Basecamp', 'Toilet Basecamp']
  },
  {
    id: 'lincing',
    nama: 'Gunung Lincing',
    emoji: '🏔️',
    ketinggian: 1655,
    lokasi: 'Kab. Malang (Lereng Arjuno)',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#2a5c3f',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Gunung_Arjuno.jpg',
    deskripsi: 'Gunung Lincing adalah salah satu puncak di lereng Gunung Arjuno dengan ketinggian 1.655 mdpl. Aksesnya melalui kawasan Perkebunan Teh Wonosari Afdeling Gebug Lor, Lawang. Pendaki dapat mendaftar di Basecamp Arjuno Via Lawang. Menawarkan pemandangan perkebunan teh yang indah dan suasana hutan yang masih alami.',
    jalurUtama: 'Via Lawang, Kab. Malang',
    taman: 'Taman Hutan Raya Raden Soerjo',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 15.000 (WNI)',
    jalur: [
      {
        nama: 'Via Lawang (Kab. Malang)',
        durasi: '6-8 jam PP',
        jarak: '±12 km PP',
        keterangan: 'Jalur melalui kawasan Perkebunan Teh Wonosari. Daftar di Basecamp Arjuno Via Lawang. Melewati hamparan kebun teh yang indah sebelum masuk ke hutan pegunungan menuju puncak Lincing.',
        pos: [
          { nama: 'Basecamp Lawang', ketinggian: '500 mdpl', keterangan: 'Pos registrasi Arjuno Via Lawang, Wonorejo', jarakKePos: 'Start' },
          { nama: 'Pos 1 Kebun Teh Wonosari', ketinggian: '900 mdpl', keterangan: 'Melewati hamparan perkebunan teh Wonosari yang luas', jarakKePos: '±3 km dari Basecamp' },
          { nama: 'Pos 2 Batas Hutan', ketinggian: '1.200 mdpl', keterangan: 'Batas perkebunan dan hutan pegunungan', jarakKePos: '±3 km dari Pos 1' },
          { nama: 'Pos 3 Punggungan', ketinggian: '1.450 mdpl', keterangan: 'Jalur menyusuri punggungan dengan pemandangan lembah', jarakKePos: '±2 km dari Pos 2' },
          { nama: 'Puncak Lincing', ketinggian: '1.655 mdpl', keterangan: 'Puncak dengan pemandangan lereng Arjuno dan perkebunan teh', jarakKePos: '±1 km dari Pos 3' }
        ]
      }
    ],
    tips: [
      'Daftar di Basecamp Arjuno Via Lawang sebelum mendaki',
      'Pemandangan perkebunan teh Wonosari sangat indah di pagi hari',
      'Bawa jaket karena suhu di puncak cukup dingin',
      'Cocok untuk pendaki yang ingin suasana berbeda dengan nuansa perkebunan',
      'Bisa dikombinasikan dengan kunjungan ke Perkebunan Teh Wonosari'
    ],
    fasilitas: ['Pos Registrasi Lawang', 'Warung di Basecamp', 'Parkir Kendaraan', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'lawu',
    nama: 'Gunung Lawu',
    emoji: '🏔️',
    ketinggian: 3265,
    lokasi: 'Kab. Magetan & Kab. Ngawi (Jatim) – Kab. Karanganyar (Jateng)',
    status: 'Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '2 hari',
    populer: true,
    warna: '#3b1f0a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Gunung_Lawu.jpg',
    deskripsi: 'Gunung Lawu adalah gunung berapi aktif di perbatasan Jawa Tengah dan Jawa Timur dengan ketinggian 3.265 mdpl. Memiliki tiga puncak utama: Hargo Dumilah (tertinggi), Hargo Dalem, dan Hargo Dumiling. Terakhir meletus 28 November 1885. Kaya nilai sejarah dan spiritual, terdapat Candi Sukuh, Candi Cetho, serta legenda moksa Prabu Brawijaya V di puncaknya.',
    jalurUtama: 'Cemoro Sewu, Sarangan, Kab. Magetan',
    taman: 'Kawasan Hutan Lindung Gunung Lawu',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 15.000 (WNI)',
    jalur: [
      {
        nama: 'Via Cemoro Sewu (Sarangan, Magetan)',
        durasi: '2 hari PP',
        jarak: '±14 km PP',
        keterangan: 'Jalur paling populer dari sisi Jawa Timur. Jalur tertata baik dengan batu alam, cocok untuk pemula. Waktu tempuh ke puncak sekitar 7 jam. Terdapat dua sumber mata air: Sendang Panguripan dan Sendang Drajat.',
        pos: [
          { nama: 'Basecamp Cemoro Sewu', ketinggian: '1.900 mdpl', keterangan: 'Pos registrasi, parkir & warung makan di Sarangan', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '2.200 mdpl', keterangan: 'Melewati Sendang Panguripan (sumber air pertama)', jarakKePos: '±2 km dari Basecamp' },
          { nama: 'Pos 2', ketinggian: '2.500 mdpl', keterangan: 'Area istirahat, jalur mulai menanjak', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Pos 3', ketinggian: '2.750 mdpl', keterangan: 'Jalur berupa tangga batu alam', jarakKePos: '±2 km dari Pos 2' },
          { nama: 'Pos 4', ketinggian: '3.000 mdpl', keterangan: 'Pemandangan Telaga Sarangan dari kejauhan', jarakKePos: '±1,5 km dari Pos 3' },
          { nama: 'Pos 5 / Sendang Drajat', ketinggian: '3.100 mdpl', keterangan: 'Sumber air terakhir, area camping favorit', jarakKePos: '±1 km dari Pos 4' },
          { nama: 'Hargo Dalem', ketinggian: '3.150 mdpl', keterangan: 'Puncak kedua, tempat moksa Prabu Brawijaya V, terdapat warung Mbok Yem', jarakKePos: '±0,5 km dari Pos 5' },
          { nama: 'Hargo Dumilah', ketinggian: '3.265 mdpl', keterangan: 'Puncak tertinggi Gunung Lawu', jarakKePos: '±0,5 km dari Hargo Dalem' }
        ]
      },
      {
        nama: 'Via Cemoro Kandang (Tawangmangu, Jateng)',
        durasi: '2 hari PP',
        jarak: '±16 km PP',
        keterangan: 'Jalur dari sisi Jawa Tengah, lebih panjang namun pemandangan lebih beragam. Melewati 5 shelter dengan jalur yang relatif tertata baik.',
        pos: [
          { nama: 'Basecamp Cemoro Kandang', ketinggian: '1.800 mdpl', keterangan: 'Pos registrasi di Tawangmangu, Karanganyar', jarakKePos: 'Start' },
          { nama: 'Shelter 1', ketinggian: '2.100 mdpl', keterangan: 'Hutan pinus lebat', jarakKePos: '±2,5 km dari Basecamp' },
          { nama: 'Shelter 2', ketinggian: '2.400 mdpl', keterangan: 'Area istirahat dengan pemandangan lembah', jarakKePos: '±2,5 km dari Shelter 1' },
          { nama: 'Shelter 3', ketinggian: '2.700 mdpl', keterangan: 'Persimpangan jalur menuju kawah', jarakKePos: '±2 km dari Shelter 2' },
          { nama: 'Shelter 4', ketinggian: '2.950 mdpl', keterangan: 'Jalur mulai terbuka, pemandangan luas', jarakKePos: '±2 km dari Shelter 3' },
          { nama: 'Shelter 5 / Hargo Dalem', ketinggian: '3.150 mdpl', keterangan: 'Bertemu jalur Cemoro Sewu, warung Mbok Yem', jarakKePos: '±2 km dari Shelter 4' },
          { nama: 'Hargo Dumilah', ketinggian: '3.265 mdpl', keterangan: 'Puncak tertinggi Gunung Lawu', jarakKePos: '±0,5 km dari Hargo Dalem' }
        ]
      }
    ],
    tips: [
      'Warung Mbok Yem di Hargo Dalem adalah warung tertinggi di Pulau Jawa, buka 24 jam',
      'Bawa pakaian sangat tebal — Lawu termasuk gunung terdingin di Jawa',
      'Sendang Drajat adalah sumber air terakhir sebelum puncak via Cemoro Sewu',
      'Hati-hati kabut tebal yang sering datang tiba-tiba di jalur atas',
      'Jangan tinggalkan api unggun menyala — kebakaran 2015 menewaskan 6 pendaki',
      'Jalur Cemoro Sewu paling direkomendasikan untuk pemula'
    ],
    fasilitas: ['Pos Registrasi Cemoro Sewu', 'Warung Mbok Yem (Hargo Dalem)', 'Sendang Panguripan', 'Sendang Drajat', 'Area Camping Pos 5', 'Toilet Basecamp', 'Parkir Luas']
  },
  {
    id: 'wilis',
    nama: 'Gunung Wilis',
    emoji: '🏔️',
    ketinggian: 2563,
    lokasi: 'Kab. Kediri, Madiun, Nganjuk, Ponorogo, Tulungagung & Trenggalek',
    status: 'Tidak Aktif',
    kesulitan: 'Sulit',
    waktuTempuh: '2-3 hari',
    populer: false,
    warna: '#1a4a2e',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Mount_Wilis_view.jpg',
    deskripsi: 'Gunung Wilis adalah gunung berapi Tipe B yang sudah lama tidak aktif dengan puncak tertinggi Trogati (Liman) setinggi 2.563 mdpl. Merupakan pegunungan yang mencakup wilayah enam kabupaten di Jawa Timur. Dikenal sebagai "Gunung Air" terbesar di Pulau Jawa karena memiliki banyak sumber air dan air terjun. Jalur pendakiannya cukup menantang dan beberapa kasus pendaki tersesat pernah terjadi.',
    jalurUtama: 'Via Kare, Kab. Madiun',
    taman: 'Cagar Alam Gunung Wilis',
    musimTerbaik: 'Juni – Agustus',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Kare (Kab. Madiun) – Jalur Resmi',
        durasi: '2-3 hari PP',
        jarak: '±20 km PP',
        keterangan: 'Jalur resmi menuju Puncak Trogati/Liman yang dikelola Kare Eco Adventure. Dimulai dari Dusun Seweru, Desa Kare. Melewati perkebunan kopi Kandangan, Sabana Edelweis Pangangonan, dan punggungan menuju puncak.',
        pos: [
          { nama: 'Basecamp Seweru', ketinggian: '700 mdpl', keterangan: 'Pos registrasi Kare Eco Adventure, Desa Kare, Madiun', jarakKePos: 'Start' },
          { nama: 'Pos 1 Perkebunan Kopi', ketinggian: '1.100 mdpl', keterangan: 'Melewati perkebunan kopi Kandangan yang luas', jarakKePos: '±4 km dari Basecamp' },
          { nama: 'Pos 2 Afdelling Pulosari', ketinggian: '1.500 mdpl', keterangan: 'Titik awal berjalan kaki menuju sabana', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Sabana Pangangonan', ketinggian: '2.000 mdpl', keterangan: 'Padang sabana edelweis yang indah, area camping', jarakKePos: '±4 km dari Pos 2' },
          { nama: 'Pos 3 Hutan Hujan Tropis', ketinggian: '2.200 mdpl', keterangan: 'Hutan lebat dengan jalur menanjak', jarakKePos: '±2 km dari Sabana' },
          { nama: 'Watu Garuda', ketinggian: '2.450 mdpl', keterangan: 'Batu besar berbentuk garuda, pemandangan luas', jarakKePos: '±2 km dari Pos 3' },
          { nama: 'Puncak Trogati (Liman)', ketinggian: '2.563 mdpl', keterangan: 'Puncak tertinggi Gunung Wilis', jarakKePos: '±0,5 km dari Watu Garuda' }
        ]
      },
      {
        nama: 'Via Joho Semen (Kab. Kediri)',
        durasi: '2-3 hari PP',
        jarak: '±18 km PP',
        keterangan: 'Jalur populer dari sisi Kediri melalui Taman Kelir, Desa Joho. Dikelola Wana Rescue Kediri. Jalur cukup menantang dengan vegetasi lebat, beberapa kasus tersesat pernah terjadi.',
        pos: [
          { nama: 'Taman Kelir, Desa Joho', ketinggian: '600 mdpl', keterangan: 'Pos registrasi & parkir, Kec. Semen, Kediri', jarakKePos: 'Start' },
          { nama: 'Pos 1', ketinggian: '1.000 mdpl', keterangan: 'Hutan lebat, jalur mulai menanjak', jarakKePos: '±3 km dari Taman Kelir' },
          { nama: 'Pos 2', ketinggian: '1.500 mdpl', keterangan: 'Area istirahat, vegetasi sangat rapat', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Pos 3', ketinggian: '2.000 mdpl', keterangan: 'Jalur punggungan, kabut sering tebal', jarakKePos: '±4 km dari Pos 2' },
          { nama: 'Puncak Wilis', ketinggian: '2.563 mdpl', keterangan: 'Puncak tertinggi dari sisi Kediri', jarakKePos: '±3 km dari Pos 3' }
        ]
      }
    ],
    tips: [
      'Gunakan jalur resmi Via Kare untuk keamanan, hindari jalur tidak resmi',
      'Bawa peta dan kompas — beberapa pendaki pernah tersesat di jalur Kediri',
      'Sabana Pangangonan adalah spot camping terbaik dengan pemandangan edelweis',
      'Bawa air yang cukup, sumber air terbatas di jalur atas',
      'Pergi minimal 4 orang dan beritahu keluarga rencana pendakian',
      'Cek cuaca sebelum mendaki karena kabut tebal sering datang tiba-tiba'
    ],
    fasilitas: ['Pos Registrasi Kare Eco Adventure', 'Area Camping Sabana Pangangonan', 'Sumber Air Pos 1', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'anjasmoro',
    nama: 'Gunung Anjasmoro',
    emoji: '⛰️',
    ketinggian: 2372,
    lokasi: 'Kab. Jombang, Kab. Mojokerto, Kab. Malang & Kota Batu',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '2 hari',
    populer: false,
    warna: '#2b4a1a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Gunung_Anjasmoro_dari_Pujon.jpg',
    deskripsi: 'Gunung Anjasmoro adalah pegunungan di Jawa Timur dengan lebih dari 40 puncak. Puncak tertingginya adalah Puncak Gunung Biru (2.331 mdpl) dan Puncak Anjasmoro (2.269 mdpl) di wilayah Kabupaten Mojokerto. Terletak berdekatan dengan kompleks Arjuno-Welirang. Catatan penting: pendakian resmi saat ini DITUTUP untuk melindungi ekosistem dan flora-fauna yang dilindungi.',
    jalurUtama: 'Via Wonosalam, Kab. Jombang',
    taman: 'Taman Hutan Raya Raden Soerjo',
    musimTerbaik: 'April – Oktober',
    tiket: 'Informasi tiket menyesuaikan kebijakan terbaru',
    jalur: [
      {
        nama: 'Via Wonosalam (Kab. Jombang)',
        durasi: '2 hari PP',
        jarak: '±16 km PP',
        keterangan: '⚠️ PERHATIAN: Pendakian Gunung Anjasmoro saat ini resmi DITUTUP karena ekosistem masih utuh dan banyak flora-fauna dilindungi. Topografi yang curam juga membahayakan keselamatan. Informasi jalur ini hanya untuk referensi.',
        pos: [
          { nama: 'Pos Wonosalam', ketinggian: '600 mdpl', keterangan: 'Titik awal pendakian, Kec. Wonosalam, Jombang', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Bawah', ketinggian: '1.100 mdpl', keterangan: 'Hutan dipterokarp bawah yang lebat', jarakKePos: '±4 km dari Pos Wonosalam' },
          { nama: 'Pos 2 Hutan Montane', ketinggian: '1.700 mdpl', keterangan: 'Hutan pegunungan dengan vegetasi khas', jarakKePos: '±4 km dari Pos 1' },
          { nama: 'Pos 3 Punggungan', ketinggian: '2.100 mdpl', keterangan: 'Jalur punggungan menuju puncak', jarakKePos: '±3 km dari Pos 2' },
          { nama: 'Puncak Anjasmoro', ketinggian: '2.269 mdpl', keterangan: 'Salah satu puncak utama Gunung Anjasmoro', jarakKePos: '±2 km dari Pos 3' },
          { nama: 'Puncak Gunung Biru', ketinggian: '2.331 mdpl', keterangan: 'Puncak tertinggi kompleks Anjasmoro', jarakKePos: '±1 km dari Puncak Anjasmoro' }
        ]
      }
    ],
    tips: [
      '⚠️ Pendakian resmi DITUTUP — cek status terbaru sebelum berencana mendaki',
      'Hubungi Taman Hutan Raya Raden Soerjo untuk informasi terkini',
      'Gunung ini memiliki ekosistem yang sangat terjaga dan banyak satwa dilindungi',
      'Topografi sangat curam dan terjal, hanya untuk pendaki berpengalaman',
      'Pemandangan Gunung Anjasmoro dari Pujon, Malang sangat indah untuk dinikmati tanpa mendaki'
    ],
    fasilitas: ['Informasi di Tahura Raden Soerjo', 'Pemandu Lokal (jika dibuka kembali)']
  },
  {
    id: 'budugasu',
    nama: 'Bukit Budug Asu',
    emoji: '🌿',
    ketinggian: 1500,
    lokasi: 'Kec. Lawang, Kab. Malang',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#3a7d44',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Gunung_Arjuno.jpg',
    deskripsi: 'Bukit Budug Asu adalah perbukitan savana di lereng barat Gunung Arjuno, terletak di kawasan Perhutani Lawang, Kabupaten Malang. Awalnya dikenal sebagai jalur motocross dan offroad, kini berkembang menjadi destinasi wisata alam yang populer. Dari puncaknya tersaji pemandangan hamparan savana hijau luas dengan latar Gunung Arjuno yang megah.',
    jalurUtama: 'Via Lawang, Kab. Malang',
    taman: 'Kawasan Perhutani Lawang',
    musimTerbaik: 'Maret – Oktober',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Lawang (Jalur Utama)',
        durasi: '3-4 jam PP',
        jarak: '±8,5 km PP',
        keterangan: 'Jalur satu-satunya menuju puncak savana Budug Asu. Dimulai dari basecamp di Lawang, melewati hutan pinus Perhutani dan padang savana terbuka. Jalur cukup jelas dan cocok untuk pendaki pemula hingga menengah.',
        pos: [
          { nama: 'Basecamp Lawang', ketinggian: '500 mdpl', keterangan: 'Pos registrasi & parkir kendaraan', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Pinus', ketinggian: '900 mdpl', keterangan: 'Melewati hutan pinus Perhutani yang rindang', jarakKePos: '±2 km dari Basecamp' },
          { nama: 'Pos 2 Batas Savana', ketinggian: '1.200 mdpl', keterangan: 'Jalur mulai terbuka, savana mulai terlihat', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Savana Budug Asu', ketinggian: '1.400 mdpl', keterangan: 'Hamparan savana luas dengan pemandangan Arjuno', jarakKePos: '±2 km dari Pos 2' },
          { nama: 'Puncak Budug Asu', ketinggian: '1.500 mdpl', keterangan: 'Titik tertinggi, panorama 360° savana dan Arjuno', jarakKePos: '±0,5 km dari Savana' }
        ]
      }
    ],
    tips: [
      'Cocok untuk pendaki pemula dan wisata keluarga',
      'Datang pagi hari untuk menghindari kabut dan panas terik',
      'Pemandangan savana paling indah saat musim hujan (hijau) dan musim kemarau (keemasan)',
      'Bawa air yang cukup karena tidak ada sumber air di jalur',
      'Bisa dikombinasikan dengan pendakian Gunung Lincing via Lawang'
    ],
    fasilitas: ['Pos Registrasi Lawang', 'Parkir Kendaraan', 'Warung di Basecamp', 'Pemandu Lokal Tersedia']
  },
  {
    id: 'petuklesung',
    nama: 'Bukit Petuk Lesung',
    emoji: '⛰️',
    ketinggian: 1400,
    lokasi: 'Kec. Lawang, Kab. Malang',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#2e6b3e',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Gunung_Arjuno.jpg',
    deskripsi: 'Bukit Petuk Lesung adalah perbukitan di lereng Gunung Arjuno kawasan Lawang, Kabupaten Malang. Berada di kawasan Perhutani dan berdekatan dengan Bukit Budug Asu. Menawarkan pemandangan alam pegunungan yang asri dengan jalur yang melewati hutan pinus dan padang rumput terbuka.',
    jalurUtama: 'Via Lawang, Kab. Malang',
    taman: 'Kawasan Perhutani Lawang',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Lawang (Jalur Utama)',
        durasi: '3-4 jam PP',
        jarak: '±7 km PP',
        keterangan: 'Jalur dari basecamp Lawang melewati hutan pinus dan padang rumput. Jalur relatif landai di awal kemudian menanjak menuju puncak. Bisa dikombinasikan dengan Budug Asu dalam satu hari.',
        pos: [
          { nama: 'Basecamp Lawang', ketinggian: '500 mdpl', keterangan: 'Pos registrasi & parkir kendaraan', jarakKePos: 'Start' },
          { nama: 'Pos 1 Hutan Pinus', ketinggian: '850 mdpl', keterangan: 'Hutan pinus Perhutani, jalur mulai menanjak', jarakKePos: '±2 km dari Basecamp' },
          { nama: 'Pos 2 Padang Rumput', ketinggian: '1.150 mdpl', keterangan: 'Area terbuka dengan padang rumput dan pemandangan lembah', jarakKePos: '±2 km dari Pos 1' },
          { nama: 'Puncak Petuk Lesung', ketinggian: '1.400 mdpl', keterangan: 'Puncak dengan pemandangan lereng Arjuno dan lembah Lawang', jarakKePos: '±1,5 km dari Pos 2' }
        ]
      }
    ],
    tips: [
      'Cocok untuk pendaki pemula dan wisata alam keluarga',
      'Bisa dikombinasikan dengan Bukit Budug Asu dalam satu hari perjalanan',
      'Bawa air yang cukup karena tidak ada sumber air di jalur',
      'Datang pagi hari untuk pemandangan terbaik sebelum kabut datang',
      'Gunakan alas kaki yang nyaman karena jalur berbatu di beberapa bagian'
    ],
    fasilitas: ['Pos Registrasi Lawang', 'Parkir Kendaraan', 'Warung di Basecamp']
  },
  {
    id: 'batok',
    nama: 'Gunung Batok',
    emoji: '🌋',
    ketinggian: 2440,
    lokasi: 'Kab. Probolinggo & Kab. Pasuruan',
    status: 'Tidak Aktif',
    kesulitan: 'Sedang',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#6b4c11',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Gunung_Bromo_3.jpg',
    deskripsi: 'Gunung Batok adalah gunung berapi kerucut yang sudah tidak aktif dengan ketinggian 2.440 mdpl, terletak di dalam kaldera Tengger berdampingan dengan Gunung Bromo. Bentuknya yang sempurna seperti kerucut menjadikannya salah satu pemandangan ikonik kawasan Bromo. Gunung ini dianggap suci oleh suku Tengger dan secara resmi tidak boleh didaki.',
    jalurUtama: 'Kawasan Kaldera Tengger, Probolinggo',
    taman: 'Taman Nasional Bromo Tengger Semeru',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 29.000 (WNI weekday) / Rp 34.000 (WNI weekend)',
    jalur: [
      {
        nama: 'Dari Lautan Pasir (Hanya Observasi)',
        durasi: '1-2 jam PP',
        jarak: '±4 km PP',
        keterangan: '⚠️ Pendakian ke puncak Gunung Batok secara resmi DILARANG karena dianggap suci oleh suku Tengger. Pengunjung hanya dapat menikmati pemandangan Gunung Batok dari lautan pasir atau dari Penanjakan. Jalur ini hanya untuk mendekat ke kaki gunung.',
        pos: [
          { nama: 'Cemoro Lawang', ketinggian: '2.200 mdpl', keterangan: 'Titik awal, naik jeep ke lautan pasir', jarakKePos: 'Start' },
          { nama: 'Lautan Pasir', ketinggian: '2.100 mdpl', keterangan: 'Area lautan pasir, pemandangan Batok dari dekat', jarakKePos: '±2 km dari Cemoro Lawang' },
          { nama: 'Kaki Gunung Batok', ketinggian: '2.200 mdpl', keterangan: 'Titik terdekat yang boleh dikunjungi', jarakKePos: '±1 km dari Lautan Pasir' }
        ]
      }
    ],
    tips: [
      '⚠️ Pendakian ke puncak DILARANG — Gunung Batok adalah gunung suci suku Tengger',
      'Nikmati pemandangan Batok dari Penanjakan atau lautan pasir',
      'Gunung Batok paling indah difoto saat sunrise dari Penanjakan',
      'Hormati kepercayaan dan adat suku Tengger di kawasan ini',
      'Tiket masuk TNBTS sudah mencakup akses ke kawasan lautan pasir'
    ],
    fasilitas: ['Parkir Cemoro Lawang', 'Penyewaan Jeep 4WD', 'Penyewaan Kuda', 'Pemandu Wisata', 'Warung Makan']
  },
  {
    id: 'baluran',
    nama: 'Gunung Baluran',
    emoji: '🏔️',
    ketinggian: 1265,
    lokasi: 'Kab. Situbondo & Kab. Banyuwangi',
    status: 'Tidak Aktif',
    kesulitan: 'Sulit',
    waktuTempuh: '2 hari',
    populer: false,
    warna: '#7a5c1e',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gunung_Buthak.jpg',
    deskripsi: 'Gunung Baluran adalah gunung berapi istirahat dengan ketinggian 1.265 mdpl, terletak di ujung timur laut Pulau Jawa dalam kawasan Taman Nasional Baluran. Dikenal sebagai "Afrika van Java" karena savana kering dan satwa liarnya yang khas. Pendakian ke puncak sangat jarang dilakukan dan memerlukan izin khusus dari pengelola taman nasional.',
    jalurUtama: 'Karang Tekok, Kab. Situbondo',
    taman: 'Taman Nasional Baluran',
    musimTerbaik: 'Juni – Agustus',
    tiket: 'Rp 15.000 (WNI)',
    jalur: [
      {
        nama: 'Via Karang Tekok (Situbondo)',
        durasi: '2 hari PP',
        jarak: '±20 km PP',
        keterangan: '⚠️ Akses pendakian ke puncak sangat terbatas dan memerlukan izin khusus dari Balai TN Baluran. Jalur melewati perkebunan jati dan hutan lebat yang kemungkinan sudah tertutup. Sebagian besar pengunjung menikmati savana dan satwa liar dari Bekol tanpa mendaki puncak.',
        pos: [
          { nama: 'Batangan (Pintu Masuk TN)', ketinggian: '10 mdpl', keterangan: 'Gerbang utama Taman Nasional Baluran', jarakKePos: 'Start' },
          { nama: 'Bekol', ketinggian: '300 mdpl', keterangan: 'Savana ikonik, viewpoint satwa liar (banteng, rusa, merak)', jarakKePos: '±12 km dari Batangan' },
          { nama: 'Karang Tekok', ketinggian: '400 mdpl', keterangan: 'Titik awal jalur menuju puncak (izin khusus)', jarakKePos: '±5 km dari Bekol' },
          { nama: 'Puncak Baluran', ketinggian: '1.265 mdpl', keterangan: 'Puncak gunung, pemandangan Selat Bali dan Madura', jarakKePos: '±8 km dari Karang Tekok' }
        ]
      }
    ],
    tips: [
      '⚠️ Hubungi Balai TN Baluran (082332213114) jauh hari sebelum berencana mendaki',
      'Pendakian ke puncak memerlukan izin khusus dan kemungkinan perlu pemandu ranger',
      'Sebagian besar wisatawan menikmati savana Bekol tanpa mendaki puncak',
      'Bekol adalah spot terbaik melihat banteng, rusa, dan merak di pagi/sore hari',
      'Bawa air yang cukup karena tidak ada sumber air di jalur atas',
      'Kawasan ini memiliki suasana seperti Afrika dengan savana kering yang unik'
    ],
    fasilitas: ['Gerbang Batangan', 'Penginapan di Bekol', 'Toilet Umum', 'Pemandu Ranger', 'Parkir Kendaraan']
  },
  {
    id: 'bukitpremium',
    nama: 'Bukit Premium',
    emoji: '🌅',
    ketinggian: 2100,
    lokasi: 'Kec. Sukapura, Kab. Probolinggo',
    status: 'Tidak Aktif',
    kesulitan: 'Mudah',
    waktuTempuh: '1 hari',
    populer: false,
    warna: '#8b5e1a',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Gunung_Bromo_3.jpg',
    deskripsi: 'Bukit Premium adalah viewpoint premium di kawasan Tengger, Sukapura, Probolinggo, yang terletak di jalur menuju Gunung Bromo. Menawarkan pemandangan panorama kawasan Bromo-Tengger-Semeru yang spektakuler, terutama saat matahari terbit. Menjadi alternatif spot sunrise yang lebih sepi dibanding Penanjakan utama.',
    jalurUtama: 'Kec. Sukapura, Kab. Probolinggo',
    taman: 'Kawasan TNBTS, Kab. Probolinggo',
    musimTerbaik: 'April – Oktober',
    tiket: 'Rp 10.000 (WNI)',
    jalur: [
      {
        nama: 'Via Sukapura (Jalur Utama)',
        durasi: '2-3 jam PP',
        jarak: '±6 km PP',
        keterangan: 'Jalur pendek menuju Bukit Premium dari kawasan Sukapura. Bisa ditempuh dengan berjalan kaki atau menggunakan jeep lokal. Jalur melewati ladang warga Tengger dengan pemandangan yang indah.',
        pos: [
          { nama: 'Sukapura / Ngadisari', ketinggian: '1.500 mdpl', keterangan: 'Titik awal, bisa naik jeep atau jalan kaki', jarakKePos: 'Start' },
          { nama: 'Pos 1 Ladang Tengger', ketinggian: '1.800 mdpl', keterangan: 'Ladang sayuran khas Tengger, pemandangan mulai terbuka', jarakKePos: '±2 km dari Sukapura' },
          { nama: 'Puncak Bukit Premium', ketinggian: '2.100 mdpl', keterangan: 'Viewpoint panorama Bromo-Tengger-Semeru', jarakKePos: '±1 km dari Pos 1' }
        ]
      }
    ],
    tips: [
      'Datang sebelum subuh (pukul 04.00 WIB) untuk menyaksikan sunrise terbaik',
      'Bawa jaket sangat tebal — suhu kawasan Tengger bisa di bawah 5°C dini hari',
      'Bisa dikombinasikan dengan wisata Bromo dalam satu hari perjalanan',
      'Spot ini lebih sepi dibanding Penanjakan, cocok untuk foto tanpa keramaian',
      'Sewa jeep lokal tersedia di Sukapura/Ngadisari'
    ],
    fasilitas: ['Warung di Sukapura', 'Penyewaan Jeep Lokal', 'Parkir Kendaraan', 'Pemandu Lokal Tersedia']
  }
];
