// Data persiapan pendakian per gunung
const persiapanData = {
  semeru: {
    fisik: [
      'Latihan cardio minimal 3 bulan sebelum pendakian (lari, bersepeda)',
      'Latihan naik turun tangga dengan beban ransel 10-15 kg',
      'Uji coba mendaki gunung lebih rendah dulu (Arjuno/Welirang)',
      'Pastikan tidak ada riwayat penyakit jantung atau paru-paru'
    ],
    perlengkapan: [
      '🎒 Carrier 60-80L', '⛺ Tenda 4 musim', '🛏️ Sleeping bag -10°C',
      '🧥 Jaket down tebal', '🌧️ Jas hujan poncho', '💡 Headlamp + baterai cadangan',
      '🥾 Sepatu gunung waterproof', '🧤 Sarung tangan tebal', '🧣 Buff/balaclava',
      '💊 P3K lengkap', '🍱 Logistik 4 hari', '💧 Botol air 3L+',
      '🗺️ Peta TNBTS', '📱 GPS/kompas', '🔧 Trekking pole'
    ],
    dokumen: [
      'SIMAKSI online via website TNBTS (wajib)',
      'KTP/identitas diri',
      'Surat keterangan sehat dari dokter',
      'Asuransi perjalanan (sangat disarankan)',
      'Nomor darurat SAR: 0341-787777'
    ],
    larangan: [
      'Dilarang mendekati kawah Jonggring Saloko',
      'Dilarang mendaki dari sisi selatan (gas beracun)',
      'Dilarang membuang sampah di jalur',
      'Dilarang memetik bunga edelweis'
    ]
  },
  arjuno: {
    fisik: [
      'Latihan cardio 1-2 bulan sebelum pendakian',
      'Latihan jalan jauh dengan beban ransel 8-12 kg',
      'Pemanasan dan peregangan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L', '⛺ Tenda 3 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket fleece + windbreaker', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung', '🧤 Sarung tangan', '💊 P3K',
      '🍱 Logistik 3 hari', '💧 Botol air 2L+', '🔧 Trekking pole'
    ],
    dokumen: [
      'Daftar di pos registrasi Tretes/Lawang/Sumber Brantas',
      'KTP/identitas diri',
      'Biaya tiket Rp 21.000 (WNI)'
    ],
    larangan: [
      'Gunakan masker saat melewati area belerang Welirang',
      'Jangan mendekati kawah Welirang terlalu lama',
      'Dilarang membuang sampah di jalur'
    ]
  },
  raung: {
    fisik: [
      'Wajib berpengalaman mendaki gunung 3.000+ mdpl sebelumnya',
      'Latihan fisik intensif minimal 3 bulan',
      'Latihan teknik panjat tebing dasar (untuk Puncak Sejati)',
      'Kondisi fisik prima, tidak ada riwayat penyakit serius'
    ],
    perlengkapan: [
      '🎒 Carrier 60-80L', '⛺ Tenda 4 musim', '🛏️ Sleeping bag -10°C',
      '🧥 Jaket down tebal', '🌧️ Jas hujan', '💡 Headlamp + cadangan',
      '🥾 Sepatu gunung high-cut', '🧤 Sarung tangan', '⛑️ Helm pendaki',
      '🪢 Tali karmantel 30m', '🔗 Harness + carabiner', '🔩 Figure 8 + prusik',
      '💊 P3K lengkap', '🍱 Logistik 5 hari', '💧 Air 5-6L (tidak ada sumber air atas)'
    ],
    dokumen: [
      'SIMAKSI di basecamp Kalibaru/Sumberwringin (wajib)',
      'KTP/identitas diri',
      'Surat keterangan sehat',
      'Nomor darurat SAR Banyuwangi: 0333-421072'
    ],
    larangan: [
      'Dilarang mendaki sendirian — minimal 3 orang',
      'Dilarang mendaki saat status gunung Waspada atau lebih',
      'Jangan melewati Puncak Sejati tanpa pengalaman dan alat panjat',
      'Cek status erupsi sebelum berangkat di magma.esdm.go.id'
    ]
  },
  bromo: {
    fisik: [
      'Tidak diperlukan persiapan fisik khusus',
      'Cocok untuk semua kalangan termasuk lansia dan anak-anak',
      'Bisa naik kuda atau jeep jika tidak ingin berjalan'
    ],
    perlengkapan: [
      '🧥 Jaket tebal (suhu 5-10°C pagi hari)', '😷 Masker (bau belerang)',
      '💡 Senter/headlamp (untuk sunrise trip)', '🥾 Sepatu nyaman',
      '🧤 Sarung tangan', '🧣 Syal/buff', '📷 Kamera',
      '💧 Air minum', '☀️ Sunscreen (siang hari)'
    ],
    dokumen: [
      'Tiket masuk TNBTS Rp 29.000 (weekday) / Rp 34.000 (weekend)',
      'KTP untuk pendaftaran di gerbang',
      'Booking jeep bisa via online atau langsung di Cemoro Lawang'
    ],
    larangan: [
      'Dilarang mendekati kawah saat status Waspada atau lebih',
      'Dilarang membuang sampah di lautan pasir',
      'Hormati upacara adat Yadnya Kasada suku Tengger'
    ]
  },
  welirang: {
    fisik: [
      'Latihan cardio 1-2 bulan sebelum pendakian',
      'Latihan jalan jauh dengan beban ransel',
      'Biasakan bernapas dengan masker saat olahraga'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L', '⛺ Tenda 3 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket fleece + windbreaker', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung', '😷 Masker gas N95 (wajib)', '🧤 Sarung tangan',
      '💊 P3K', '🍱 Logistik 2 hari', '💧 Botol air 2L+'
    ],
    dokumen: [
      'Daftar di pos registrasi Tretes',
      'KTP/identitas diri',
      'Biaya tiket Rp 21.000 (WNI)'
    ],
    larangan: [
      'Wajib pakai masker N95 di area kawah belerang',
      'Jangan terlalu lama di area fumarol',
      'Dilarang membuang sampah di jalur'
    ]
  },
  ijen: {
    fisik: [
      'Tidak diperlukan persiapan fisik khusus',
      'Cocok untuk pendaki pemula',
      'Untuk blue fire: siapkan mental begadang (berangkat dini hari)'
    ],
    perlengkapan: [
      '🎒 Daypack 20-30L', '🧥 Jaket tebal', '😷 Masker gas (WAJIB, bukan masker biasa)',
      '💡 Headlamp kuat (untuk malam hari)', '🥾 Sepatu gunung',
      '🧤 Sarung tangan', '💧 Air minum 2L', '📷 Kamera',
      '🔦 Senter cadangan', '💊 Obat mual (gas SO2)'
    ],
    dokumen: [
      'Tiket masuk Rp 5.000 (weekday) / Rp 7.500 (weekend)',
      'KTP untuk pendaftaran di Paltuding',
      'Daftar sebelum pukul 02.00 WIB untuk blue fire'
    ],
    larangan: [
      'DILARANG turun ke dasar kawah tanpa pemandu resmi',
      'Wajib pakai masker gas — gas SO2 sangat berbahaya',
      'Dilarang mendekati kawah saat status Waspada',
      'Jangan buang sampah di kawasan kawah'
    ]
  },
  argopuro: {
    fisik: [
      'Wajib berpengalaman mendaki gunung multi-hari sebelumnya',
      'Latihan fisik intensif minimal 2 bulan',
      'Latihan jalan jauh dengan beban berat (10-15 kg)',
      'Kondisi fisik prima untuk trek 63 km'
    ],
    perlengkapan: [
      '🎒 Carrier 70-80L', '⛺ Tenda 3-4 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket tebal', '🌧️ Jas hujan', '💡 Headlamp + cadangan',
      '🥾 Sepatu gunung waterproof', '🗺️ Peta + kompas (wajib)',
      '💊 P3K lengkap', '🍱 Logistik 6 hari', '💧 Botol air 3L+',
      '🔧 Trekking pole', '📱 GPS offline'
    ],
    dokumen: [
      'Daftar di pos Baderan (Situbondo) atau Bermi (Probolinggo)',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)',
      'Beritahu keluarga rencana pendakian lengkap'
    ],
    larangan: [
      'Dilarang mendaki sendirian — minimal 4 orang',
      'Jangan tinggalkan jalur utama tanpa pemandu',
      'Dilarang membuang sampah di kawasan suaka margasatwa',
      'Hormati situs mistis Puncak Rengganis'
    ]
  },
  penanggungan: {
    fisik: [
      'Cocok untuk pendaki pemula',
      'Latihan jalan kaki 1-2 minggu sebelumnya sudah cukup',
      'Pemanasan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Daypack 20-30L', '🧥 Jaket ringan', '🌧️ Jas hujan',
      '💡 Headlamp', '🥾 Sepatu gunung', '💧 Air minum 2L',
      '💊 P3K dasar', '🍱 Bekal makanan', '📷 Kamera'
    ],
    dokumen: [
      'Daftar di pos Tamiajeng atau Jolotundo',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'DILARANG merusak atau mengambil artefak purbakala',
      'Jangan coret-coret situs candi',
      'Dilarang membuang sampah di jalur',
      'Hormati kawasan cagar budaya'
    ]
  },
  kelud: {
    fisik: [
      'Tidak diperlukan persiapan fisik khusus',
      'Cocok untuk wisata keluarga',
      'Tersedia ojek jika tidak ingin berjalan jauh'
    ],
    perlengkapan: [
      '🧥 Jaket ringan', '😷 Masker (bau belerang)',
      '🥾 Sepatu nyaman', '💧 Air minum',
      '📷 Kamera', '☀️ Sunscreen'
    ],
    dokumen: [
      'Tiket masuk Rp 15.000 (WNI)',
      'KTP untuk pendaftaran di gerbang',
      'Cek status gunung di magma.esdm.go.id sebelum berangkat'
    ],
    larangan: [
      'DILARANG mendekati kawah saat status Waspada atau lebih',
      'Cek status gunung sebelum berkunjung',
      'Dilarang membuang sampah di kawasan wisata'
    ]
  },
  kawi: {
    fisik: [
      'Latihan cardio 1 bulan sebelum pendakian',
      'Latihan jalan jauh dengan beban ransel 8-10 kg',
      'Pemanasan dan peregangan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L', '⛺ Tenda 3 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket fleece + windbreaker', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung', '💊 P3K', '🍱 Logistik 2 hari',
      '💧 Botol air 2L+', '🔧 Trekking pole'
    ],
    dokumen: [
      'Daftar di pos Precet atau Sirahkencong',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan merusak vegetasi di sabana Kawi',
      'Hormati kawasan Pesarean Gunung Kawi'
    ]
  },
  butak: {
    fisik: [
      'Latihan cardio 1-2 bulan sebelum pendakian',
      'Latihan naik turun tangga dengan beban ransel',
      'Siapkan mental untuk Tanjakan PHP yang panjang'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L', '⛺ Tenda 3 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket fleece + windbreaker', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung waterproof', '💊 P3K', '🍱 Logistik 2 hari',
      '💧 Botol air 2L+ (isi di Pos 1)', '🔧 Trekking pole'
    ],
    dokumen: [
      'Daftar di pos perizinan Panderman, Desa Pesanggrahan, Kota Batu',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Hati-hati pohon tua rawan patah di sekitar Pos 3',
      'Dilarang membuang sampah di jalur',
      'Jangan merusak bunga edelweis di sabana'
    ]
  },
  panderman: {
    fisik: [
      'Cocok untuk pendaki pemula',
      'Latihan jalan kaki 1-2 minggu sudah cukup',
      'Pemanasan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Daypack 20-30L', '🧥 Jaket ringan', '🌧️ Jas hujan',
      '💡 Headlamp', '🥾 Sepatu gunung', '💧 Air minum 2L',
      '💊 P3K dasar', '🍱 Bekal makanan'
    ],
    dokumen: [
      'Daftar di pos Latar Ombo, Kota Batu',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan mendaki sendirian',
      'Beritahu keluarga rencana pendakian'
    ]
  },
  lincing: {
    fisik: [
      'Latihan cardio ringan 2-3 minggu sebelumnya',
      'Cocok untuk pendaki pemula hingga menengah',
      'Pemanasan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Carrier 40-50L', '🧥 Jaket fleece', '🌧️ Jas hujan',
      '💡 Headlamp', '🥾 Sepatu gunung', '💧 Air minum 2L',
      '💊 P3K', '🍱 Logistik 1 hari', '😷 Masker debu'
    ],
    dokumen: [
      'Daftar di Basecamp Arjuno Via Lawang, Wonorejo',
      'KTP/identitas diri',
      'Biaya tiket Rp 15.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan merusak tanaman perkebunan teh',
      'Ikuti arahan pemandu lokal'
    ]
  },
  lawu: {
    fisik: [
      'Latihan cardio 1-2 bulan sebelum pendakian',
      'Latihan jalan jauh dengan beban ransel 8-12 kg',
      'Siapkan pakaian sangat tebal — Lawu termasuk gunung terdingin di Jawa'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L', '⛺ Tenda 4 musim', '🛏️ Sleeping bag -10°C',
      '🧥 Jaket down tebal (wajib)', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung waterproof', '🧤 Sarung tangan tebal', '🧣 Balaclava',
      '💊 P3K', '🍱 Logistik 2 hari', '💧 Botol air 2L+'
    ],
    dokumen: [
      'Daftar di pos Cemoro Sewu (Magetan) atau Cemoro Kandang (Karanganyar)',
      'KTP/identitas diri',
      'Biaya tiket Rp 15.000 (WNI)'
    ],
    larangan: [
      'JANGAN tinggalkan api unggun menyala — kebakaran 2015 menewaskan 6 pendaki',
      'Patuhi larangan tidak tertulis di kawasan sakral',
      'Dilarang membuang sampah di jalur',
      'Hati-hati kabut tebal yang datang tiba-tiba'
    ]
  },
  wilis: {
    fisik: [
      'Wajib berpengalaman mendaki gunung sebelumnya',
      'Latihan fisik intensif 2 bulan sebelum pendakian',
      'Latihan navigasi peta dan kompas'
    ],
    perlengkapan: [
      '🎒 Carrier 60-70L', '⛺ Tenda 3-4 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket tebal', '🌧️ Jas hujan', '💡 Headlamp + cadangan',
      '🥾 Sepatu gunung waterproof', '🗺️ Peta + kompas (wajib)',
      '💊 P3K lengkap', '🍱 Logistik 3 hari', '💧 Botol air 3L+',
      '📱 GPS offline', '🔧 Trekking pole'
    ],
    dokumen: [
      'Daftar di Kare Eco Adventure, Desa Kare, Madiun (jalur resmi)',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)',
      'Beritahu keluarga rencana pendakian lengkap'
    ],
    larangan: [
      'Gunakan jalur resmi Via Kare — hindari jalur tidak resmi',
      'Dilarang mendaki sendirian — beberapa kasus tersesat pernah terjadi',
      'Jangan tinggalkan jalur utama tanpa pemandu',
      'Dilarang membuang sampah di kawasan cagar alam'
    ]
  },
  anjasmoro: {
    fisik: [
      'Pendakian resmi DITUTUP — cek status terbaru sebelum berencana',
      'Jika dibuka kembali: wajib berpengalaman mendaki gunung terjal',
      'Latihan fisik intensif diperlukan karena topografi sangat curam'
    ],
    perlengkapan: [
      '🎒 Carrier 60L', '⛺ Tenda 3-4 musim', '🛏️ Sleeping bag -5°C',
      '🧥 Jaket tebal', '🌧️ Jas hujan', '💡 Headlamp',
      '🥾 Sepatu gunung waterproof', '🗺️ Peta + kompas',
      '💊 P3K', '🍱 Logistik 2 hari', '💧 Botol air 2L+'
    ],
    dokumen: [
      '⚠️ Hubungi Tahura Raden Soerjo untuk status terkini',
      'KTP/identitas diri',
      'Izin khusus dari pengelola kawasan'
    ],
    larangan: [
      '⚠️ Pendakian resmi DITUTUP untuk melindungi ekosistem',
      'Dilarang mendaki tanpa izin resmi',
      'Jangan ganggu flora-fauna yang dilindungi',
      'Dilarang membuang sampah di kawasan'
    ]
  },
  budugasu: {
    fisik: [
      'Cocok untuk pemula, tidak perlu persiapan fisik khusus',
      'Latihan jalan kaki ringan 1-2 minggu sudah cukup',
      'Pemanasan sebelum memulai pendakian'
    ],
    perlengkapan: [
      '🎒 Daypack 20-30L', '🧥 Jaket ringan', '🌧️ Jas hujan',
      '🥾 Sepatu gunung atau sneakers', '💧 Air minum 2L',
      '💊 P3K dasar', '🍱 Bekal makanan', '📷 Kamera',
      '☀️ Sunscreen & topi'
    ],
    dokumen: [
      'Daftar di pos registrasi Lawang',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur dan savana',
      'Jangan merusak vegetasi savana',
      'Dilarang membawa kendaraan bermotor ke jalur pendakian'
    ]
  },
  petuklesung: {
    fisik: [
      'Cocok untuk pemula, tidak perlu persiapan fisik khusus',
      'Latihan jalan kaki ringan 1-2 minggu sudah cukup',
      'Pemanasan sebelum memulai pendakian'
    ],
    perlengkapan: [
      '🎒 Daypack 20-30L', '🧥 Jaket ringan', '🌧️ Jas hujan',
      '🥾 Sepatu gunung atau sneakers', '💧 Air minum 2L',
      '💊 P3K dasar', '🍱 Bekal makanan', '📷 Kamera'
    ],
    dokumen: [
      'Daftar di pos registrasi Lawang',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan merusak vegetasi dan tanaman di jalur',
      'Beritahu keluarga rencana pendakian'
    ]
  },
  batok: {
    fisik: [
      'Tidak diperlukan persiapan fisik khusus untuk wisata kawasan',
      'Cocok untuk semua kalangan termasuk keluarga',
      'Pendakian ke puncak DILARANG — hanya wisata kawasan lautan pasir'
    ],
    perlengkapan: [
      '🧥 Jaket tebal (suhu 5-10°C pagi hari)', '😷 Masker (bau belerang)',
      '🥾 Sepatu nyaman', '💧 Air minum',
      '🧤 Sarung tangan', '📷 Kamera',
      '☀️ Sunscreen'
    ],
    dokumen: [
      'Tiket masuk TNBTS Rp 29.000 (weekday) / Rp 34.000 (weekend)',
      'KTP untuk pendaftaran di gerbang'
    ],
    larangan: [
      '⚠️ DILARANG mendaki ke puncak Gunung Batok',
      'Hormati kawasan suci suku Tengger',
      'Dilarang membuang sampah di lautan pasir',
      'Patuhi arahan petugas TNBTS'
    ]
  },
  baluran: {
    fisik: [
      'Untuk wisata savana: tidak perlu persiapan fisik khusus',
      'Untuk pendakian puncak: latihan fisik intensif 1-2 bulan',
      'Kondisi fisik prima karena jalur kemungkinan tidak terawat'
    ],
    perlengkapan: [
      '🎒 Carrier 50-60L (jika mendaki)', '⛺ Tenda 3 musim',
      '🛏️ Sleeping bag', '🧥 Jaket', '🌧️ Jas hujan',
      '💡 Headlamp', '🥾 Sepatu gunung', '💧 Air 3L+ (tidak ada sumber air)',
      '💊 P3K', '🍱 Logistik 2 hari', '🗺️ Peta + kompas'
    ],
    dokumen: [
      'Izin khusus dari Balai TN Baluran (wajib untuk pendakian)',
      'KTP/identitas diri',
      'Tiket masuk TN Baluran Rp 15.000 (WNI)',
      'Hubungi: 082332213114 jauh hari sebelum berangkat'
    ],
    larangan: [
      'DILARANG mendaki tanpa izin resmi dari Balai TN Baluran',
      'Jangan ganggu satwa liar (banteng, rusa, merak)',
      'Dilarang membuang sampah di kawasan taman nasional',
      'Patuhi arahan ranger/pemandu resmi'
    ]
  },
  gunungmalang: {
    fisik: [
      'Latihan cardio ringan 2-3 minggu sebelum pendakian',
      'Cocok untuk pendaki pemula hingga menengah',
      'Pemanasan dan peregangan sebelum mendaki'
    ],
    perlengkapan: [
      '🎒 Carrier 40-50L', '🧥 Jaket fleece', '🌧️ Jas hujan',
      '💡 Headlamp', '🥾 Sepatu gunung', '💧 Air minum 2L',
      '💊 P3K', '🍱 Logistik 1 hari', '🔧 Trekking pole (opsional)'
    ],
    dokumen: [
      'Daftar di Basecamp Bukit Jabal, Kab. Malang',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)',
      'Booking tiket via WA admin Bukit Jabal'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan merusak vegetasi hutan',
      'Beritahu keluarga rencana pendakian',
      'Jangan mendaki sendirian'
    ]
  },
  bukitjabal: {
    fisik: [
      'Tidak perlu persiapan fisik khusus',
      'Sangat cocok untuk pemula dan wisata keluarga',
      'Pemanasan ringan sebelum memulai sudah cukup'
    ],
    perlengkapan: [
      '🎒 Daypack 15-20L', '🧥 Jaket ringan', '🌧️ Jas hujan',
      '🥾 Sepatu gunung atau sneakers', '💧 Air minum 1,5L',
      '💊 P3K dasar', '🍱 Bekal makanan ringan', '📷 Kamera'
    ],
    dokumen: [
      'Booking tiket via WhatsApp admin Bukit Jabal sebelum berangkat',
      'KTP/identitas diri',
      'Biaya tiket Rp 10.000 (WNI)'
    ],
    larangan: [
      'Dilarang membuang sampah di jalur',
      'Jangan merusak tanaman dan vegetasi',
      'Patuhi arahan pengelola basecamp'
    ]
  },
  bukitpremium: {
    fisik: [
      'Tidak perlu persiapan fisik khusus',
      'Cocok untuk semua kalangan termasuk keluarga',
      'Bisa naik jeep jika tidak ingin berjalan kaki'
    ],
    perlengkapan: [
      '🧥 Jaket sangat tebal (suhu bisa di bawah 5°C dini hari)',
      '🧤 Sarung tangan', '🧣 Syal/buff', '💡 Senter/headlamp',
      '🥾 Sepatu nyaman', '💧 Air minum', '📷 Kamera'
    ],
    dokumen: [
      'Tiket masuk kawasan wisata setempat',
      'KTP/identitas diri'
    ],
    larangan: [
      'Dilarang membuang sampah di kawasan',
      'Hormati warga lokal Tengger',
      'Patuhi arahan pemandu/pengelola setempat'
    ]
  }
};
