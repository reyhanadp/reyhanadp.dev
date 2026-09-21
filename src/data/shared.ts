// Data yang sama untuk semua bahasa: kontak, link, dan aset proyek.
// Teks yang diterjemahkan ada di en.ts dan id.ts.

import type { ProjectAssets } from "./types";

export const profile = {
  name: "Reyhan Audian Dwi Putra",
  email: "reyhanadp@gmail.com",
  phone: "0857-3795-3188",
  location: "Bandung, Indonesia",
  careerStart: 2019,
  links: {
    linkedin: "", // contoh: "https://linkedin.com/in/username"
    github: "", // contoh: "https://github.com/username"
  },
};

// Setiap slug di sini harus punya pasangan teks di en.ts dan id.ts.
export const projectAssets: ProjectAssets[] = [
  {
    slug: "masogi",
    tags: ["React Native", "Next.js", "TypeScript"],
    link: "", // contoh: link Play Store / App Store
    screenshots: [],
  },
  {
    slug: "digipos-outlet",
    tags: ["Android Native", "Java", "Kotlin", "MVVM"],
    link: "",
    screenshots: [],
  },
  {
    slug: "mytelkomsel",
    ongoing: true,
    tags: ["Android Native", "Kotlin"],
    link: "",
    screenshots: [],
  },
  {
    slug: "digipos-dashboard",
    tags: ["React", "TypeScript"],
    link: "",
    screenshots: [],
  },
  {
    slug: "swarapoint",
    tags: ["React Native", "TypeScript"],
    link: "",
    screenshots: [],
  },
  {
    slug: "digipos-lite",
    tags: ["Android Native", "Java", "Kotlin"],
    link: "",
    screenshots: [],
  },
  {
    slug: "comm-apps-rekat",
    tags: ["React Native", "TypeScript"],
    link: "",
    screenshots: [],
  },
  {
    slug: "cb-umma",
    tags: ["React Native", "TypeScript"],
    link: "",
    screenshots: [],
  },
  {
    slug: "bank-mandiri-monitoring-dashboard",
    tags: ["Pentaho", "InfluxDB", "Kapacitor", "MSSQL", "Grafana"],
    link: "",
    screenshots: [],
  },
  {
    slug: "bank-mandiri-rpa-dashboard",
    tags: ["Logstash", "Elasticsearch", "Kibana", "UiPath"],
    link: "",
    screenshots: [],
  },
  {
    slug: "elk-implementation",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Watcher", "F5"],
    link: "",
    screenshots: [],
  },
  {
    slug: "portal-karyawan-isgs",
    tags: ["React Native", "PHP", "MySQL"],
    link: "",
    screenshots: [],
  },
];
