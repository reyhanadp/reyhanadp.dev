// Semua konten teks website ada di sini.
// Edit nilai-nilai di bawah untuk update isi web — tidak perlu sentuh file .astro.
// Link yang dikosongkan ("") otomatis tidak ditampilkan.

export const profile = {
  name: "Reyhan Audian Dwi Putra",
  title: "Mobile Developer & Data Engineer",
  tagline:
    "Membangun aplikasi mobile dan sistem data/observability untuk skala enterprise — dari React Native hingga Elastic Stack.",
  email: "reyhanadp@gmail.com",
  phone: "0857-3795-3188",
  location: "Bandung, Indonesia",
  careerStart: 2019,
  availability: "", // contoh: "Terbuka untuk peluang baru" — kosongkan untuk sembunyikan
  links: {
    linkedin: "", // contoh: "https://linkedin.com/in/username"
    github: "", // contoh: "https://github.com/username"
  },
};

export const about = [
  "Software engineer dengan pengalaman lintas data engineering/observability (Elastic Stack, Grafana, Pentaho) dan mobile development (React Native, Android Native).",
  "Elastic Certified Engineer dengan rekam jejak membangun dashboard end-to-end untuk klien enterprise seperti PT Bank Mandiri, serta mengembangkan dan memelihara aplikasi mobile berskala nasional — 99% Usahaku dan DigiPOS untuk Telkomsel.",
];

export const skillGroups = [
  {
    label: "Mobile & Frontend",
    items: ["React Native", "Android (Java)", "JavaScript", "HTML & CSS"],
  },
  {
    label: "Backend & Data",
    items: ["PHP (Native & CodeIgniter)", "SQL", "Elasticsearch", "Logstash", "Pentaho"],
  },
  {
    label: "Observability & Tools",
    items: ["Kibana", "Grafana", "Linux (CentOS)", "Mendix"],
  },
];

export const experience = [
  {
    role: "Mobile Developer",
    company: "PT DAnS Multi Pro",
    period: "2022 — Sekarang",
    summary:
      "Mengembangkan dan memelihara aplikasi 99% Usahaku (React Native) dan DigiPOS (Android Native) untuk Telkomsel.",
    highlights: [
      "Mengembangkan fitur baru dan mengintegrasikannya dengan API",
      "Memperbaiki bug serta meningkatkan performa, keamanan, dan kualitas kode",
      "Melakukan code review rekan tim sebelum merge",
      "Mengikuti best practice terkini dalam pengembangan mobile",
    ],
  },
  {
    role: "IT Consultant",
    company: "PT Indonesia Global Solusindo",
    period: "2019 — 2022",
    summary:
      "Membangun integrasi data dan dashboard monitoring untuk klien enterprise: PT Bank Mandiri, PT Finnet Indonesia, PT Bank Sahabat Sampoerna, dan KSP Sahabat Mitra Sejati.",
    highlights: [
      "Merancang pipeline data dari berbagai sumber (Sitescope, AppDynamics, UiPath, F5) ke Elasticsearch/InfluxDB",
      "Membangun dashboard end-to-end di Kibana & Grafana untuk mempercepat troubleshooting",
      "Membuat watcher otomatis untuk memblokir transaksi ilegal, lengkap dengan alert email",
      "Meraih sertifikasi Elastic Certified Engineer",
    ],
  },
];

export interface Project {
  slug: string; // dipakai sebagai URL: /projects/<slug>
  title: string;
  client: string;
  category: string;
  role: string;
  period: string;
  description: string; // ringkasan singkat untuk kartu di halaman utama
  details: string[]; // paragraf penjelasan di halaman detail
  highlights: string[]; // poin tanggung jawab / kontribusi
  tags: string[];
  link: string; // contoh: link Play Store / App Store — kosongkan kalau tidak ada
  linkLabel: string;
  // Taruh gambar di folder public/projects/<slug>/ lalu daftarkan di sini, contoh:
  // { src: "/projects/99-usahaku/home.png", alt: "Halaman beranda 99% Usahaku" }
  screenshots: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "99-usahaku",
    title: "99% Usahaku",
    client: "Telkomsel",
    category: "Mobile App",
    role: "Mobile Developer",
    period: "2022 — Sekarang",
    description:
      "Aplikasi marketplace UMKM & produk Telkomsel untuk Android/iOS. Mengembangkan fitur baru, integrasi API, dan peningkatan performa aplikasi berskala nasional.",
    details: [
      "99% Usahaku adalah aplikasi marketplace milik Telkomsel yang mempertemukan produk-produk UMKM dengan produk digital Telkomsel dalam satu platform. Aplikasi ini tersedia untuk Android dan iOS dan dikembangkan menggunakan React Native.",
      "Pengembangan berjalan dengan metode agile sehingga fitur baru bisa dirilis secara berkala. Saya terlibat di seluruh siklus pengembangan mobile — mulai dari membangun antarmuka fitur baru, integrasi API, hingga menjaga stabilitas dan performa aplikasi di skala pengguna nasional.",
    ],
    highlights: [
      "Membangun user interface untuk fitur baru dan mengintegrasikannya dengan API backend",
      "Menyelesaikan bug yang dilaporkan dari produksi",
      "Meningkatkan keamanan, performa, dan kualitas kode aplikasi",
      "Melakukan code review terhadap kontribusi developer lain sebelum merge",
      "Mengikuti perkembangan konsep dan best practice pengembangan mobile",
    ],
    tags: ["React Native", "Android", "iOS"],
    link: "",
    linkLabel: "Lihat di Play Store",
    screenshots: [],
  },
  {
    slug: "digipos",
    title: "DigiPOS",
    client: "Telkomsel",
    category: "Mobile App",
    role: "Mobile Developer",
    period: "2023",
    description:
      "Aplikasi penjualan produk Telkomsel untuk outlet dan perorangan, dikembangkan dengan Android Native.",
    details: [
      "DigiPOS adalah aplikasi yang digunakan oleh outlet maupun perorangan untuk aktivitas penjualan produk Telkomsel. Aplikasi ini dibangun secara native untuk Android.",
      "Sama seperti 99% Usahaku, proyek ini dikembangkan dengan metode agile. Fokus saya adalah pengembangan fitur baru beserta integrasi API-nya, sekaligus menjaga kualitas kode melalui code review dan perbaikan bug.",
    ],
    highlights: [
      "Membangun user interface untuk fitur baru dan mengintegrasikannya dengan API backend",
      "Menyelesaikan bug yang terjadi pada aplikasi",
      "Meningkatkan keamanan, performa, dan kualitas kode aplikasi",
      "Melakukan code review untuk mencegah bug masuk ke produksi",
    ],
    tags: ["Android Native", "Java"],
    link: "",
    linkLabel: "Lihat di Play Store",
    screenshots: [],
  },
  {
    slug: "bank-mandiri-monitoring-dashboard",
    title: "Monitoring Dashboard",
    client: "PT Bank Mandiri",
    category: "Data & Observability",
    role: "IT Technical Consultant",
    period: "2019",
    description:
      "Integrasi data dari HP Sitescope dan AppDynamics via Pentaho ke InfluxDB, event management dengan Kapacitor, dan dashboard Grafana end-to-end untuk troubleshooting yang lebih cepat.",
    details: [
      "Dashboard monitoring end-to-end untuk sistem SOA, MCM, MIB, SCM, dan MPS di PT Bank Mandiri. Tujuannya adalah memberikan visibilitas menyeluruh agar proses troubleshooting jadi lebih cepat dan terarah.",
      "Data dari monitoring tools HP Sitescope dan AppDynamics diintegrasikan menggunakan Pentaho dan disimpan ke InfluxDB. Event management ditangani oleh Kapacitor dengan penyimpanan di MSSQL, lalu seluruh data divisualisasikan dalam dashboard Grafana.",
    ],
    highlights: [
      "Merancang pipeline integrasi data dari HP Sitescope dan AppDynamics dengan Pentaho",
      "Menyimpan data time-series ke InfluxDB dan event ke MSSQL melalui Kapacitor",
      "Membangun dashboard Grafana end-to-end untuk kebutuhan troubleshooting",
    ],
    tags: ["Pentaho", "InfluxDB", "Kapacitor", "MSSQL", "Grafana"],
    link: "",
    linkLabel: "",
    screenshots: [],
  },
  {
    slug: "bank-mandiri-rpa-dashboard",
    title: "RPA Dashboard",
    client: "PT Bank Mandiri",
    category: "Data & Observability",
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
    tags: ["Logstash", "Elasticsearch", "Kibana", "UiPath"],
    link: "",
    linkLabel: "",
    screenshots: [],
  },
  {
    slug: "elk-implementation",
    title: "ELK Implementation",
    client: "PT Finnet Indonesia & Bank Sahabat Sampoerna",
    category: "Data & Observability",
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
    tags: ["Elasticsearch", "Logstash", "Kibana", "Watcher", "F5"],
    link: "",
    linkLabel: "",
    screenshots: [],
  },
  {
    slug: "portal-karyawan-isgs",
    title: "Portal Karyawan IS-GS",
    client: "Internal — PT Indonesia Global Solusindo",
    category: "Mobile & Web",
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
    tags: ["React Native", "PHP", "MySQL"],
    link: "",
    linkLabel: "",
    screenshots: [],
  },
];

export const education = [
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
];

export const certifications = [
  { name: "Elastic Certified Engineer", year: "2021 — 2023" },
  { name: "React Native Apps Developer", year: "2022" },
  { name: "Mendix Rapid Developer", year: "2021" },
  { name: "Oracle Database 11g – SQL Fundamental", year: "2018" },
];
