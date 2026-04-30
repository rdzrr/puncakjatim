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
    foto: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Argopuro_%28Puncak_Rengganis%29.jpg',
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
  }
];
