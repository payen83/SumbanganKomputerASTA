import { Donor, Testimonial, BudgetItem, DonationPackage } from '../types';

export const CAMPAIGN_TARGET = 110935;
export const INITIAL_COLLECTED = 71450;
export const TOTAL_PCS_TARGET = 30;
export const TOTAL_PRINTERS_TARGET = 5;

export const DONATION_PACKAGES: DonationPackage[] = [
  {
    id: 'pkg-pc-full',
    name: 'Pakej Mahkota Ilmu (1 PC Lengkap ACER + Monitor 144Hz)',
    amount: 3598,
    badge: 'Penaja Utama',
    popular: true,
    description: 'Menaja 1 set desktop PC ACER Veriton 2000 lengkap dengan Monitor ACER KA242YP0 23.8" FHD VA 144Hz, papan kekunci, tetikus dan pakej perisian rasmi.',
    impactLabel: 'Nama penaja / keluarga / syarikat akan diabadikan pada plat perkakasan unit komputer makmal.',
  },
  {
    id: 'pkg-pc-half',
    name: 'Pakej Harapan Digital (1/2 PC)',
    amount: 1799,
    badge: 'Paling Popular',
    description: 'Kongsi tajaan separuh unit komputer ACER Veriton bersama penyumbang lain untuk melengkapkan stesen kerja murid.',
    impactLabel: 'Menyediakan perkakasan pemprosesan berkuasa untuk 1 stesen pembelajaran amali SPM.',
  },
  {
    id: 'pkg-printer',
    name: 'Pakej Tinta Kecemerlangan (1 Pencetak CANON G3010)',
    amount: 599,
    badge: 'Keperluan Mendesak',
    description: 'Menaja 1 unit pencetak serbaguna CANON PIXMA AIO TANK G3010 dengan jaminan 3 tahun onsite untuk mencetak modul sains dan latihan amali murid.',
    impactLabel: 'Memberi manfaat cetakan berkualiti tinggi kepada lebih 600 pelajar tingkatan 1 hingga 5 setiap sesi.',
  },
  {
    id: 'pkg-ram-ssd',
    name: 'Pakej Amal Ihsan',
    amount: 350,
    description: 'Menaja komponen memori 8GB DDR5 RAM dan storan pantas PCIe NVMe SSD bagi memastikan kelancaran pengaturcaraan.',
    impactLabel: 'Memastikan aplikasi pemodelan AI & Python berjalan lancar tanpa masa henti.',
  },
  {
    id: 'pkg-infaq-ikhlas',
    name: 'Pakej Infaq Jariah Budi',
    amount: 100,
    description: 'Sumbangan amal jariah terbuka demi melengkapkan perkakasan komputer makmal dan perisian.',
    impactLabel: 'Sedekah jariah yang mengalir pahalanya setiap kali pelajar menuntut ilmu di makmal ini.',
  },
  {
    id: 'pkg-custom',
    name: 'Sumbangan Seikhlas Hati (Bebas)',
    amount: 50,
    description: 'Nilai sumbangan fleksibel mengikut kemampuan anda. Setiap ringgit membawa sinar harapan.',
    impactLabel: 'Tiada jumlah yang terlalu kecil dalam membina masa depan generasi anak-anak bangsa.',
  },
];

export const BUDGET_BREAKDOWN: BudgetItem[] = [
  {
    id: 'item-pc',
    title: '30 Set Desktop PC ACER Veriton 2000 (VS2722G - 14100)',
    quantity: '30 Set',
    unitPrice: 3598,
    totalPrice: 107940,
    description: 'ACER Veriton 2000 VS2722G - 14100 Desktop PC bersama Monitor ACER KA242YP0 23.8" FHD VA 144Hz dengan 3 Years ACER Malaysia Onsite Local Warranty Sahaja, lengkap bersama Microsoft Office Home 2024 (Lifetime License), perisian ADOBE serta perisian Windows 11.',
    specs: [
      'Model Desktop: ACER Veriton 2000 VS2722G - 14100 Desktop PC',
      'Monitor: ACER KA242YP0 23.8" FHD VA 144Hz Monitor',
      'Pemproses: Intel Core i3-14100 (4 cores, sehingga 4.7 GHz turbo)',
      'Memori: 8 GB DDR5 4800 MHz SDRAM (upgradable)',
      'Storan: 512 GB M.2 PCIe NVMe SSD Storage',
      'Grafik: Intel UHD Graphics',
      'Sistem Operasi: Windows 11 Home',
      'Sambungan: Wi-Fi 6E (802.11ax) dan Bluetooth 5',
      'Port & Slot: 8 Port USB (termasuk USB 3.2 Gen 1 Type-C dan Type-A), HDMI, DisplayPort, VGA & slot PCIe',
      'Aksesori: Termasuk Papan Kekunci USB dan Tetikus USB',
      'Pakej Perisian 1: Microsoft Office Home 2024 (Lifetime License)',
      'Pakej Perisian 2: ADOBE Software',
      'Pakej Perisian 3: Perisian Tambahan Windows 11',
      'Jaminan: 3 Tahun ACER Malaysia Onsite Local Warranty Sahaja'
    ],
    icon: 'Monitor',
  },
  {
    id: 'item-printer',
    title: '5 Unit CANON PIXMA AIO TANK G3010',
    quantity: '5 Unit',
    unitPrice: 599,
    totalPrice: 2995,
    description: 'CANON PIXMA AIO TANK G3010 With 3 Years CANON Malaysia Onsite Warranty only. Dilengkapi sistem tangki dakwat berkapasiti tinggi GI-790 serta fungsi serbaguna Cetak, Imbas dan Salin.',
    specs: [
      'Model: CANON PIXMA AIO TANK G3010',
      'Functions: Print, Scan, and Copy (Cetak, Imbas & Salin)',
      'Print Speed: Approx. 8.8 ipm (black) and 5.0 ipm (colour)',
      'Page Yield: High-yield GI-790 ink bottles up to 7,000 pages for colour and high volumes for black',
      'Connectivity: Wi-Fi, Wireless Direct, and Mopria Print',
      'Display: 1.2-inch LCD screen',
      'Warranty: 3 Years CANON Malaysia Onsite Warranty only'
    ],
    icon: 'Printer',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Cikgu Nurul Hidayah binti Kassim',
    role: 'Guru Penyelaras ICT & Sains Komputer',
    subRole: '12 Tahun Berkhidmat di SEMESTA Raub',
    quote: '"Bila waktu amali SPM tiba, hati kami guru-guru sentiasa berdebar bimbang komputer sedia ada tiba-tiba skrin biru atau ‘hang’ separuh jalan. Anak-anak ini ada bakat luar biasa dalam koding dan robotik, tapi dikekang perkakasan uzur lebih sedekad."',
    impactStory: 'Dengan adanya 30 set komputer baharu ini, setiap anak SEMESTA akan mempunyai stesen amali sendiri tanpa perlu lagi bergilir 3 orang bagi satu komputer uzur.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    tag: 'Guru Penyelaras ICT',
  },
  {
    id: 'test-2',
    name: 'Muhammad Danish bin Azman',
    role: 'Pelajar Tingkatan 5 (Calon SPM Sains Komputer)',
    subRole: 'Ketua Unit Pengaturcaraan Kelab Robotik SEMESTA',
    quote: '"Cita-cita saya mahu menjadi jurutera kecerdasan buatan (AI). Di asrama penuh, makmal komputer inilah jendela dunia kami untuk meneroka sains terkini. Bila komputer lambat, kami bazirkan 30 minit hanya untuk muat turun modul Python."',
    impactStory: 'Bantuan para penyumbang bukan sekadar membeli monitor dan CPU, tetapi membuka pintu impian kami untuk bersaing di peringkat kebangsaan dan antarabangsa.',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    tag: 'Penerima Bantuan (Pelajar)',
  },
  {
    id: 'test-3',
    name: 'Nur Syuhada binti Ramli',
    role: 'Pelajar Tingkatan 4 Al-Biruni',
    subRole: 'Berasal dari Felda Tersang, Raub (Keluarga B40)',
    quote: '"Keluarga saya tidak mampu membelikan komputer riba sendiri untuk saya bawa ke asrama. Saya hanya bergantung sepenuhnya pada makmal sekolah untuk siapkan tugasan folio dan amali data sains. Saya amat bersyukur ada insan mulia yang sudi menyumbang."',
    impactStory: 'Makmal ini merapatkan jurang antara anak peneroka dan kemajuan teknologi bandar besar.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    tag: 'Penerima Bantuan (Pelajar)',
  },
  {
    id: 'test-4',
    name: 'Hj. Shamsudin Muhamad',
    role: 'Wakil Alumni ASTA (Batch 1991)',
    subRole: 'Penyelaras Bersama Kempen Dana Makmal SEMESTA',
    quote: '"Kami alumni ASTA (Alumni SEMESTA Tradition) tidak pernah lupa tanah Raub yang telah mendidik kami sehingga berjaya memegang pelbagai jawatan profesional hari ini. Ini adalah giliran kami memulangkan budi dan memastikan adik-adik kami tidak ketinggalan."',
    impactStory: 'Setiap sumbangan diuruskan secara telus dengan penyata akaun rasmi yang diaudit dan dipaparkan terus kepada umum.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    tag: 'Wakil Alumni ASTA',
  },
  {
    id: 'test-5',
    name: 'En. Nasriq Ahmad',
    role: 'Wakil ASTA (Batch 2000)',
    subRole: 'Jawatankuasa Teknikal & Perolehan Digital ASTA',
    quote: '"RM 110,935 ini bukan angka anggaran rawak. Kami bersama pihak sekolah telah menjalankan kajian pasaran terperinci, menuntut sebut harga terbaik dengan pembekal berdaftar agar setiap sen pelaburan penyumbang memberi pulangan nilai tertinggi."',
    impactStory: 'Pencetak dan komputer ini akan diselenggara dengan jadual berkala bersama sukarelawan alumni yang bekerja dalam bidang IT.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    tag: 'Jawatankuasa Kempen',
  }
];

export const INITIAL_DONORS: Donor[] = [
  {
    id: 'don-1',
    name: 'Dato’ Seri Ir. Hashim & Keluarga',
    amount: 7000,
    date: '2 jam yang lalu',
    packageType: 'Penaja Utama (2 PC)',
    message: 'Semoga anak-anak SEMESTA melahirkan saintis dan jurutera bertaraf dunia. Selamat maju jaya!',
    isCorporate: true,
  },
  {
    id: 'don-2',
    name: 'Alumni ASTA Batch 96 (The Pioneers)',
    amount: 10500,
    date: '4 jam yang lalu',
    packageType: 'Penaja Utama (3 PC)',
    message: 'Demi SEMESTA tercinta. Ilmu, Amal, Budi pedoman kita selamanya.',
    isCorporate: true,
  },
  {
    id: 'don-3',
    name: 'Hamba Allah (Kuantan)',
    amount: 1750,
    date: '5 jam yang lalu',
    packageType: 'Pakej Harapan Digital',
    message: 'Niat ikhlas jariah buat arwah ayahanda dan bonda. Mohon doakan kesejahteraan kami sekeluarga.',
    isAnonymous: true,
  },
  {
    id: 'don-4',
    name: 'Dr. Farhan & Dr. Sabrina',
    amount: 3500,
    date: '7 jam yang lalu',
    packageType: 'Pakej Mahkota Ilmu (1 PC)',
    message: 'Sumbangan sempena mengenang jasa cikgu-cikgu SEMESTA zaman SPM 2004.',
  },
  {
    id: 'don-5',
    name: 'Kumpulan Ibu Bapa Tingkatan 5 SPM 2026',
    amount: 2995,
    date: '10 jam yang lalu',
    packageType: 'Pakej Tinta Kecemerlangan (5 Unit)',
    message: 'Semoga anak-anak kami dapat mencetak nota dan modul peperiksaan dengan mudah dan tenang.',
    isCorporate: true,
  },
  {
    id: 'don-6',
    name: 'Khairul Anuar bin Zulkifli (ASTA 08)',
    amount: 500,
    date: '12 jam yang lalu',
    packageType: 'Pakej Amal Ihsan',
    message: 'Semoga anak-anak desa Raub terus celik teknologi dan berdaya saing.',
  },
  {
    id: 'don-7',
    name: 'Hamba Allah (Raub)',
    amount: 300,
    date: '14 jam yang lalu',
    packageType: 'Pakej Infaq Jariah Budi',
    message: 'Moga makmal ini menjadi saksi amal soleh anak-anak menuntut ilmu yang bermanfaat.',
    isAnonymous: true,
  },
  {
    id: 'don-8',
    name: 'Cikgu Azman (Bekas Guru Matematik SEMESTA)',
    amount: 1000,
    date: '1 hari yang lalu',
    packageType: 'Infaq Kasih',
    message: 'Terharu melihat inisiatif alumni. Semoga usaha murni ini dipermudahkan Allah SWT.',
  },
  {
    id: 'don-9',
    name: 'Siti Sarah binti Mokhtar',
    amount: 250,
    date: '1 hari yang lalu',
    packageType: 'Pakej Infaq Jariah Budi',
    message: 'Sedikit bekalan akhirat. Semoga diberkati.',
  },
  {
    id: 'don-10',
    name: 'Persatuan Penduduk Raub Prihatin',
    amount: 2000,
    date: '1 hari yang lalu',
    packageType: 'Infaq Komuniti',
    message: 'Kami warga Raub sentiasa berbangga dengan pencapaian SEMESTA di daerah ini.',
    isCorporate: true,
  },
];

export const BANK_ACCOUNTS = [
  {
    bankName: 'Maybank Berhad',
    accountName: 'PERSATUAN ALUMNI SEMESTA (ASTA TRADITION)',
    accountNumber: '5560 1102 8491',
    swiftCode: 'MBBEMYKL',
    logo: 'MAYBANK',
  },
  {
    bankName: 'Bank Islam Malaysia Berhad',
    accountName: 'TABUNG PEMBANGUNAN DIGITAL SEMESTA RAUB',
    accountNumber: '0601 9010 0873 22',
    swiftCode: 'BIMBMYKL',
    logo: 'BANK ISLAM',
  },
];

export const CONTACT_PERSONS = [
  {
    name: 'Shamsudin Muhamad',
    batch: 'ASTA’91',
    phone: '012-9140112',
    whatsappUrl: 'https://wa.me/60129140112?text=Assalamualaikum%20En%20Shamsudin,%20saya%20ingin%20bertanya%20berkenaan%20Program%20Sumbangan%20Makmal%20Komputer%20SEMESTA.',
    role: 'Penyelaras Utama Kempen Dana',
  },
  {
    name: 'Nasriq Ahmad',
    batch: 'ASTA’00',
    phone: '019-2567183',
    whatsappUrl: 'https://wa.me/60192567183?text=Assalamualaikum%20En%20Nasriq,%20saya%20ingin%20bertanya%20berkenaan%20Program%20Sumbangan%20Makmal%20Komputer%20SEMESTA.',
    role: 'Jawatankuasa Teknikal & Rekod Kewangan',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    q: 'Apakah tujuan utama kempen dana RM 110,935.00 ini?',
    a: 'Kempen ini digerakkan oleh Persatuan Alumni SEMESTA (ASTA Tradition) bersama pentadbiran Sekolah Menengah Sains Tengku Abdullah (SEMESTA), Raub bagi menggantikan perkakasan makmal komputer yang telah uzur (melebihi 10 tahun). Sasaran dana adalah untuk membeli 30 unit set komputer berprestasi tinggi baharu serta 5 unit pencetak serbaguna sistem tangki dakwat.',
  },
  {
    q: 'Bolehkah saya menyumbang secara tanpa nama (Hamba Allah)?',
    a: 'Ya, tentu sekali. Anda boleh memilih pilihan "Sumbang Sebagai Hamba Allah" sewaktu mengisi borang. Nama anda akan disembunyikan daripada paparan dinding penyumbang umum bagi memelihara privasi niat ikhlas anda.',
  },
  {
    q: 'Bagaimanakah kutipan dipantau secara telus dan langsung?',
    a: 'Setiap sumbangan yang dibuat melalui portal ini (FPX, DuitNow QR, atau pindahan terus bank) direkodkan dalam sistem pangkalan data kempen secara masa nyata (live). Baki kutipan dan peratusan kemajuan dikemas kini secara automatik di laman web ini. Laporan kewangan rasmi beraudit akan dibentangkan oleh ASTA secara berkala.',
  },
  {
    q: 'Adakah saya akan menerima resit rasmi dan sijil penghargaan?',
    a: 'Ya! Setiap penyumbang akan menerima e-Resit Rasmi berserta Nombor Siri Transaksi yang sah serta E-Sijil Penghargaan Digital sejurus selepas transaksi disahkan. Anda boleh memuat turun atau mencetaknya terus daripada skrin pengesahan sumbangan.',
  },
  {
    q: 'Bolehkah syarikat korporat atau alumni berkumpulan menaja satu set komputer penuh?',
    a: 'Amat dialu-alukan! Untuk pakej penajaan 1 PC Lengkap (RM 3,598) atau lebih, pihak sekolah dan ASTA akan meletakkan plat penghargaan logam khas yang memaparkan nama penaja/syarikat pada perkakasan unit makmal berkenaan sebagai tanda terima kasih berkekalan.',
  },
  {
    q: 'Bagaimanakah cara untuk menyumbang melalui cek atau pesanan kerajaan (LO)?',
    a: 'Bagi sumbangan korporat, CSR syarikat, atau pemindahan melalui cek berpalang, sila hubungi terus Penyelaras Kempen kami iaitu En. Shamsudin Muhamad (012-9140112) atau En. Nasriq Ahmad (019-2567183) untuk penyediaan invois proforma dan surat rasmi penerimaan sumbangan institusi.',
  },
];
