// Konten website dalam bahasa Indonesia.
// Struktur file ini harus sama persis dengan en.ts.

import type { LocaleContent } from "./types";

const id: LocaleContent = {
  jobTitle: "Frontend Developer & Data Engineer",
  tagline:
    "Membangun aplikasi mobile & web serta sistem data/observability untuk skala enterprise — dari React Native dan Android Native hingga Elastic Stack.",
  availability: "", // contoh: "Terbuka untuk peluang baru"

  about: [
    "Software engineer dengan pengalaman lintas mobile development (React Native, Android Native) dan data engineering/observability (Elastic Stack, Grafana, Pentaho).",
    "Elastic Certified Engineer dengan rekam jejak membangun dashboard end-to-end untuk klien enterprise seperti PT Bank Mandiri, serta mengembangkan dan memelihara portofolio aplikasi mobile & web — mulai dari tooling outlet/reseller Telkomsel hingga beberapa aplikasi komunitas/membership — untuk pengguna berskala nasional maupun komunitas.",
  ],

  skillGroups: [
    {
      label: "Mobile & Frontend",
      items: ["React Native", "TypeScript", "Android Native (Java & Kotlin)", "Next.js", "JavaScript", "HTML & CSS"],
    },
    {
      label: "Backend & Data",
      items: ["PHP (Native & CodeIgniter)", "SQL", "Elasticsearch", "Logstash", "Pentaho"],
    },
    {
      label: "Observability & Tools",
      items: ["Kibana", "Grafana", "Linux (CentOS)", "Mendix"],
    },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "PT DAnS Multi Pro",
      period: "2022 — Sekarang",
      summary:
        "Membangun dan memelihara UI/frontend di berbagai aplikasi mobile & web — mulai dari tooling outlet/reseller Telkomsel (Android Native, React) hingga beberapa aplikasi komunitas/membership (React Native) — dari pengembangan tahap awal hingga codebase besar yang sudah berjalan lama.",
      highlights: [
        "Membangun UI dan mengintegrasikannya dengan API di codebase Android Native, React Native, dan React",
        "Memiliki penuh fitur-fitur besar dari awal hingga akhir, mulai dari fitur point-of-sale yang berjalan bertahun-tahun hingga overhaul UI konfirmasi pembelian yang sedang berlangsung",
        "Menjadi kontributor utama atau terbanyak di beberapa proyek, termasuk rebrand aplikasi secara penuh",
        "Memperbaiki bug serta meningkatkan performa, keamanan, dan kualitas kode di seluruh portofolio",
        "Melakukan code review rekan tim sebelum merge dan menyiapkan alur kerja mock API lokal agar tim tetap bisa bekerja",
      ],
    },
    {
      role: "IT Consultant",
      company: "PT Indonesia Global Solusindo",
      period: "2019 — 2022",
      summary:
        "Membangun integrasi data dan dashboard monitoring untuk klien enterprise: PT Bank Mandiri, PT Finnet Indonesia, PT Bank Sahabat Sampoerna, dan KSP Sahabat Mitra Sejati.",
      highlights: [
        "Merancang pipeline data dari berbagai sumber (SiteScope, AppDynamics, UiPath, F5) ke Elasticsearch/InfluxDB",
        "Membangun dashboard end-to-end di Kibana & Grafana untuk mempercepat troubleshooting",
        "Membuat watcher otomatis untuk memblokir transaksi ilegal, lengkap dengan alert email",
        "Meraih sertifikasi Elastic Certified Engineer",
      ],
    },
  ],

  projects: [
    {
      slug: "mytelkomsel",
      title: "MyTelkomsel",
      client: "Telkomsel",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (Android)",
      period: "Jul 2026 — Sekarang",
      description:
        "Aplikasi konsumen utama Telkomsel untuk pembelian, pembayaran tagihan, dan manajemen akun. Memimpin overhaul UI/UX alur konfirmasi pasca-pembelian yang dipakai di banyak jenis transaksi.",
      details: [
        "MyTelkomsel adalah aplikasi mobile konsumen utama Telkomsel yang digunakan untuk pembelian, pembayaran tagihan, dan manajemen akun, dibangun dan dipelihara oleh tim engineering besar lintas vendor untuk sekumpulan aplikasi dan library yang saling terkait.",
        "Fokus utama saya adalah memimpin overhaul UI/UX pada layar konfirmasi pasca-pembelian yang dipakai di banyak jenis transaksi (pembayaran tagihan, voucher digital, top-up, dan lainnya), ditambah memperbaiki bug produksi pada alur checkout/status pembayaran dan crash saat startup.",
      ],
      highlights: [
        "Memimpin overhaul UI/UX pada layar konfirmasi pasca-pembelian yang dipakai di banyak jenis transaksi",
        "Memperbarui shared component/resource library yang dipakai di seluruh aplikasi sebagai bagian dari overhaul tersebut",
        "Memperbaiki beberapa bug produksi pada alur checkout/status pembayaran",
        "Memperbaiki crash saat startup dan beberapa bug lain di berbagai bagian aplikasi",
        "Melakukan refactor dan menyelesaikan temuan code-quality sebagai bagian dari maintenance berkelanjutan",
      ],
      linkLabel: "Lihat di Play Store",
    },
    {
      slug: "swarapoint",
      title: "SwaraPoin",
      client: "Confidential",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer",
      period: "Nov 2025 — Agu 2026",
      description:
        "Aplikasi rewards/loyalty dengan fitur berbasis audio untuk mendeteksi promo di sekitar toko, ditambah fitur akun, katalog rewards, dan penukaran voucher. Kontributor utama, bertanggung jawab atas sebagian besar codebase aplikasi.",
      details: [
        "SwaraPoin adalah aplikasi mobile rewards/loyalty yang mencakup fitur berbasis audio untuk mendeteksi promo di sekitar toko, di samping fitur standar akun, katalog rewards, dan penukaran voucher.",
        "Sebagai developer utama di tim beranggotakan sekitar 6 engineer, saya bertanggung jawab atas sebagian besar fitur dan codebase aplikasi — mulai dari onboarding dan manajemen akun hingga release pipeline dan test coverage — sepanjang perjalanan proyek ini.",
      ],
      highlights: [
        "Developer utama yang bertanggung jawab atas sebagian besar fitur dan codebase aplikasi",
        "Membangun screen inti aplikasi: onboarding/login, manajemen akun, katalog rewards, dan penukaran voucher",
        "Mengintegrasikan dan memelihara fitur proximity berbasis audio untuk mendeteksi promo di sekitar",
        "Menyiapkan dan memelihara security hardening, crash reporting, dan tooling monitoring",
        "Menyiapkan dan memelihara release/build pipeline untuk Android dan iOS",
      ],
      linkLabel: "",
    },
    {
      slug: "comm-apps-rekat",
      title: "RekatApp",
      client: "Confidential",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer",
      period: "Mei 2025",
      description:
        "Aplikasi mobile untuk program membership komunitas/organisasi, mencakup pembayaran digital, pembayaran tagihan, dan informasi umum, mendukung beberapa organisasi mitra sekaligus.",
      details: [
        "RekatApp adalah aplikasi mobile untuk program membership komunitas/organisasi, mencakup pembayaran digital, pembayaran tagihan, dan informasi umum, serta mendukung beberapa organisasi mitra dalam satu aplikasi.",
        "Saya membantu membangun fondasi dan fitur inti aplikasi sejak tahap awal, mengembangkan fitur baru secara end-to-end, dan menyiapkan alur kerja pengembangan lokal agar tim tetap bisa bekerja saat backend API belum tersedia.",
      ],
      highlights: [
        "Membangun fondasi dan fitur inti aplikasi sejak tahap awal, mendukung beberapa organisasi mitra sekaligus",
        "Mengembangkan fitur baru secara end-to-end, dari perencanaan hingga rilis",
        "Menulis unit test untuk membantu menemukan masalah lebih awal dan menjaga codebase tetap andal",
        "Memperbaiki masalah produksi yang dilaporkan pada sebagian alur onboarding",
        "Menyiapkan alur kerja mock API lokal agar tim tetap bisa mengembangkan aplikasi saat backend belum tersedia",
      ],
      linkLabel: "",
    },
    {
      slug: "cb-umma",
      title: "Cahaya Berkah Umma",
      client: "Confidential",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (solo builder)",
      period: "Mar 2025",
      description:
        "Aplikasi mobile untuk organisasi komunitas, mencakup pembayaran digital, pembayaran tagihan, dan informasi umum — dibangun sendiri dari nol untuk Android dan iOS.",
      details: [
        "Cahaya Berkah Umma adalah aplikasi mobile untuk organisasi komunitas, mencakup dompet digital, pembayaran tagihan, top-up/isi ulang, dan konten informasi.",
        "Saya membangun seluruh aplikasi ini sendirian dari nol untuk Android dan iOS, termasuk penerapan langkah keamanan yang sesuai untuk aplikasi yang menangani pembayaran. Aplikasi ini kemudian menjadi dasar untuk versi baru yang mendukung banyak organisasi sekaligus (RekatApp).",
      ],
      highlights: [
        "Membangun seluruh aplikasi dari nol sendirian, mencakup Android dan iOS",
        "Mengimplementasikan fitur lengkap: dompet digital, pembayaran tagihan, top-up/isi ulang, dan konten informasi",
        "Menerapkan langkah keamanan yang sesuai untuk aplikasi yang menangani pembayaran",
        "Menjadi dasar bagi versi aplikasi berikutnya yang mendukung banyak organisasi sekaligus",
      ],
      linkLabel: "",
    },
    {
      slug: "masogi",
      title: "Masogi",
      client: "Confidential",
      category: "Mobile & Web App",
      group: "software",
      role: "Mobile & Web Engineer",
      period: "Jul 2024 — Jun 2025",
      description:
        "Aplikasi komunitas lintas platform (mobile + web) dengan fitur pembayaran digital dan informasi umum. Kontributor terbanyak di tim beranggotakan 12 orang, termasuk rebrand aplikasi secara penuh.",
      details: [
        "Masogi adalah aplikasi komunitas yang tersedia di mobile maupun web, menawarkan fitur dompet digital, transaksi harian seperti pembayaran tagihan/pulsa/data, serta konten informasi umum. Aplikasi ini kemudian melalui rebrand penuh dan diluncurkan ulang dengan nama berbeda.",
        "Saya menjadi kontributor terbanyak di tim beranggotakan sekitar 12 engineer selama 11 bulan proyek berjalan, membangun dan memelihara logic yang dipakai bersama oleh aplikasi mobile dan web agar fitur tetap konsisten di kedua platform, serta mengerjakan porsi besar dari halaman/screen aplikasi di keduanya.",
      ],
      highlights: [
        "Kontributor terbanyak di tim berdasarkan jumlah kontribusi sepanjang proyek berjalan",
        "Membangun dan memelihara logic bersama yang dipakai aplikasi mobile dan web agar fitur tetap konsisten di kedua platform",
        "Memimpin pengerjaan teknis rebrand aplikasi secara penuh (nama, logo, tampilan) di mobile dan web",
        "Membangun fitur dompet digital dan transaksi harian (pembayaran tagihan, top-up pulsa/data, roaming)",
        "Memperbaiki banyak temuan code-quality serta bug di iOS dan Android",
      ],
      linkLabel: "",
    },
    {
      slug: "digipos-dashboard",
      title: "DigiPOS Dashboard",
      client: "Telkomsel",
      category: "Web App",
      group: "software",
      role: "Frontend Engineer",
      period: "Mar 2025",
      description:
        "Dashboard admin berbasis web internal untuk mengelola operasional beberapa tools internal ekosistem outlet/reseller Telkomsel, dibangun sebagai kumpulan modul micro-frontend.",
      details: [
        "DigiPOS Dashboard adalah dashboard admin berbasis web internal untuk mengelola operasional beberapa tools/modul internal di ekosistem outlet/reseller Telkomsel, dibangun oleh tim 15+ engineer sebagai kumpulan modul micro-frontend.",
        "Saya membangun area manajemen user & role (daftar user, pembuatan/edit role, dan matriks permission), sebuah shared library komponen form yang dipakai di berbagai modul, dan menjadi satu-satunya kontributor yang membangun fitur baru terkait pricing dari nol.",
      ],
      highlights: [
        "Membangun area manajemen user & role: daftar user, pembuatan/edit role, dan matriks permission",
        "Membangun shared library komponen form yang dipakai di berbagai modul dashboard",
        "Satu-satunya kontributor yang membangun fitur baru terkait pricing dari nol",
        "Melakukan refactor pada routing utama aplikasi dan penanganan autentikasi",
        "Memperbaiki bug dan merapikan kode yang ditemukan saat integrasi maupun setelah merge",
      ],
      linkLabel: "",
    },
    {
      slug: "digipos-outlet",
      title: "DigiPOS Outlet",
      client: "Telkomsel",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (Android)",
      period: "Mei 2023 — Mar 2026",
      description:
        "Aplikasi Android utama untuk jaringan outlet/reseller Telkomsel, mencakup transaksi harian, layanan digital, dan fitur point-of-sale bawaan untuk pemilik outlet.",
      details: [
        "DigiPOS Outlet adalah aplikasi Android utama yang digunakan jaringan outlet dan reseller Telkomsel untuk transaksi harian dan layanan digital, termasuk fitur point-of-sale bawaan untuk pemilik outlet. Ini adalah proyek dengan durasi terpanjang yang pernah saya kerjakan, hampir 3 tahun bersama tim 30+ engineer.",
        "Kontribusi terbesar saya adalah memiliki penuh sebuah fitur point-of-sale utama dari awal hingga akhir — katalog produk, keranjang, pembayaran (termasuk pembayaran berbasis QR), cetak struk, dan laporan penjualan — beserta alur registrasi/onboarding untuk fitur tersebut, termasuk setup identitas dan pemilihan metode pembayaran.",
      ],
      highlights: [
        "Memiliki penuh sebuah fitur point-of-sale utama dari awal hingga akhir: katalog, keranjang, pembayaran, cetak struk, dan laporan penjualan",
        "Membangun alur registrasi/onboarding untuk fitur tersebut, termasuk setup identitas dan pemilihan metode pembayaran",
        "Migrasi beberapa layar lama ke arsitektur aplikasi yang lebih modern sebagai bagian dari modernisasi berkelanjutan",
        "Membangun fitur loyalty/engagement, termasuk automated test-nya",
        "Memperbaiki banyak crash produksi dan masalah reliabilitas yang dilaporkan lewat crash monitoring",
      ],
      linkLabel: "Lihat di Play Store",
    },
    {
      slug: "digipos-lite",
      title: "DigiPOS Lite",
      client: "Telkomsel",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (Android)",
      period: "Des 2023 — Mei 2024",
      description:
        "Aplikasi Android bergaya point-of-sale untuk jaringan outlet/reseller Telkomsel, mencakup transaksi harian dan manajemen saldo multi-wallet.",
      details: [
        "DigiPOS Lite adalah aplikasi Android bergaya point-of-sale untuk jaringan outlet dan reseller Telkomsel, mencakup transaksi harian dan manajemen saldo multi-wallet, dibangun oleh tim 20+ engineer.",
        "Pekerjaan saya berfokus pada alur onboarding/aktivasi untuk dompet digital, memperbaiki bug di alur login/OTP/reset password dan alur pembayaran, serta berkontribusi pada rebrand aplikasi secara menyeluruh.",
      ],
      highlights: [
        "Membangun dan menyempurnakan alur onboarding/aktivasi untuk berbagai pilihan dompet digital",
        "Memperbaiki masalah pengambilan foto pada alur verifikasi identitas yang menghambat aktivasi outlet",
        "Memperbaiki crash produksi yang dilaporkan pada alur pembayaran",
        "Memperbaiki berbagai bug pada alur login, OTP, dan reset password",
        "Berkontribusi pada rebrand aplikasi secara menyeluruh",
      ],
      linkLabel: "Lihat di Play Store",
    },
    {
      slug: "portal-karyawan-isgs",
      title: "Portal Karyawan IS-GS",
      client: "Internal — PT Indonesia Global Solusindo",
      category: "Mobile & Web",
      group: "software",
      role: "IT Technical Consultant",
      period: "2021",
      description:
        "Aplikasi mobile dan web untuk portal karyawan internal, dibangun dengan React Native di sisi mobile serta PHP dan MySQL di sisi backend.",
      details: [
        "Proyek internal untuk membangun portal karyawan PT Indonesia Global Solusindo yang bisa diakses lewat aplikasi mobile maupun web.",
        "Sisi mobile dikembangkan dengan React Native, sementara backend dan web dibangun menggunakan PHP dengan database MySQL.",
      ],
      highlights: [
        "Mengembangkan aplikasi mobile portal karyawan dengan React Native",
        "Membangun backend dan web portal menggunakan PHP dan MySQL",
      ],
      linkLabel: "",
    },
    {
      slug: "elk-implementation",
      title: "ELK Implementation",
      client: "PT Finnet Indonesia & Bank Sahabat Sampoerna",
      category: "Data & Observability",
      group: "data",
      role: "IT Technical Consultant",
      period: "2020",
      description:
        "Pipeline log F5 ke Elasticsearch, watcher otomatis untuk memblokir akun dengan transaksi terlarang berdasarkan rule tertentu, alert email, dan dashboard Kibana.",
      details: [
        "Implementasi Elastic Stack (Elasticsearch, Logstash, Kibana) untuk mendeteksi dan memblokir transaksi yang melanggar rule tertentu di PT Finnet Indonesia dan PT Bank Sahabat Sampoerna.",
        "Log dari F5 diintegrasikan menggunakan Logstash ke Elasticsearch. Watcher dikonfigurasi untuk memblokir akun yang melakukan transaksi terlarang secara otomatis dan mengirimkan alert ke email, sementara Kibana digunakan sebagai dashboard end-to-end.",
      ],
      highlights: [
        "Membangun pipeline Logstash dari F5 ke Elasticsearch",
        "Mengonfigurasi watcher untuk blocking otomatis dan alert email berdasarkan rule transaksi",
        "Membangun dashboard monitoring end-to-end di Kibana",
      ],
      linkLabel: "",
    },
    {
      slug: "bank-mandiri-rpa-dashboard",
      title: "RPA Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      group: "data",
      role: "IT Technical Consultant",
      period: "2019 — 2020",
      description:
        "Integrasi data UiPath (MSSQL) melalui Logstash ke Elasticsearch, ditampilkan dalam dashboard Kibana custom untuk monitoring proses RPA.",
      details: [
        "Dashboard custom untuk memonitor proses Robotic Process Automation (UiPath) di PT Bank Mandiri. Dashboard bawaan UiPath dinilai kurang fleksibel, sehingga dibutuhkan dashboard end-to-end yang bisa disesuaikan dengan kebutuhan tim.",
        "Data dari database MSSQL UiPath diintegrasikan menggunakan Logstash dan disimpan ke Elasticsearch, kemudian divisualisasikan dalam dashboard Kibana.",
      ],
      highlights: [
        "Membangun pipeline Logstash dari database MSSQL UiPath ke Elasticsearch",
        "Merancang dashboard Kibana yang disesuaikan dengan kebutuhan monitoring RPA",
      ],
      linkLabel: "",
    },
    {
      slug: "bank-mandiri-monitoring-dashboard",
      title: "Monitoring Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      group: "data",
      role: "IT Technical Consultant",
      period: "2019",
      description:
        "Integrasi data dari HP SiteScope dan AppDynamics via Pentaho ke InfluxDB, event management dengan Kapacitor, dan dashboard Grafana end-to-end untuk troubleshooting yang lebih cepat.",
      details: [
        "Dashboard monitoring end-to-end untuk sistem SOA, MCM, MIB, SCM, dan MPS di PT Bank Mandiri. Tujuannya adalah memberikan visibilitas menyeluruh agar proses troubleshooting jadi lebih cepat dan terarah.",
        "Data dari monitoring tools HP SiteScope dan AppDynamics diintegrasikan menggunakan Pentaho dan disimpan ke InfluxDB. Event management ditangani oleh Kapacitor dengan penyimpanan di MSSQL, lalu seluruh data divisualisasikan dalam dashboard Grafana.",
      ],
      highlights: [
        "Merancang pipeline integrasi data dari HP SiteScope dan AppDynamics dengan Pentaho",
        "Menyimpan data time-series ke InfluxDB dan event ke MSSQL melalui Kapacitor",
        "Membangun dashboard Grafana end-to-end untuk kebutuhan troubleshooting",
      ],
      linkLabel: "",
    },
  ],

  education: [
    {
      school: "Universitas Komputer Indonesia (UNIKOM)",
      degree: "S1 Teknik Informatika",
      period: "2014 — 2019",
      detail: "IPK 3.35",
    },
    {
      school: "SMA Plus Al-Ghifari",
      degree: "Jurusan IPA",
      period: "2011 — 2014",
      detail: "",
    },
  ],

  certifications: [
    { name: "Elastic Certified Engineer", year: "2021 — 2023" },
    { name: "React Native Apps Developer", year: "2022" },
    { name: "Mendix Rapid Developer", year: "2021" },
    { name: "Oracle Database 11g – SQL Fundamental", year: "2018" },
  ],

  ui: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      education: "Pendidikan",
      contact: "Kontak",
    },
    hero: {
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      yearsExperience: "Tahun pengalaman",
      enterpriseProjects: "Proyek enterprise",
      certifications: "Sertifikasi",
    },
    about: { eyebrow: "Tentang", title: "Siapa saya" },
    experience: { eyebrow: "Pengalaman", title: "Perjalanan karier" },
    projects: {
      eyebrow: "Proyek",
      title: "Yang pernah saya kerjakan",
      description:
        "Klik salah satu proyek untuk melihat detailnya. Sebagian besar adalah pekerjaan milik klien/perusahaan, sehingga nama klien dan source code tidak selalu dipublikasikan.",
      groups: {
        software: "Mobile & Web Development",
        data: "Data & Observability",
      },
      countLabel: "proyek",
      ongoing: "Sedang berjalan",
    },
    education: {
      eyebrow: "Pendidikan",
      title: "Pendidikan & Sertifikasi",
      educationLabel: "Pendidikan",
      certificationsLabel: "Sertifikasi",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari berkolaborasi",
      description: "Tertarik bekerja sama atau punya pertanyaan? Kirim email — saya akan membalas secepatnya.",
    },
    footer: { builtWith: "Dibuat dengan Astro & Tailwind CSS" },
    project: {
      allProjects: "Semua proyek",
      aboutProject: "Tentang proyek",
      myContribution: "Kontribusi saya",
      screenshots: "Screenshot",
      otherProjects: "Proyek lainnya",
      viewAll: "Lihat semua",
      openProject: "Buka proyek",
      client: "Klien",
      role: "Peran",
      period: "Periode",
      category: "Kategori",
      techStack: "Tech stack",
    },
    a11y: {
      toggleTheme: "Ganti tema terang/gelap",
      openMenu: "Buka menu",
      switchLanguage: "Ganti bahasa",
      backToTop: "Kembali ke atas",
    },
  },
};

export default id;
