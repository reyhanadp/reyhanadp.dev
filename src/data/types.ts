export type Lang = "en" | "id";

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export type ProjectGroup = "software" | "data";

export interface ProjectText {
  slug: string; // harus cocok dengan slug di shared.ts
  title: string;
  client: string;
  category: string;
  group: ProjectGroup; // subgrup di section Projects
  role: string;
  period: string;
  description: string; // ringkasan singkat untuk kartu
  details: string[]; // paragraf di halaman detail
  highlights: string[]; // poin kontribusi
  linkLabel: string; // label tombol link, mis. "View on Play Store"
}

export interface ProjectAssets {
  slug: string;
  tags: string[];
  link: string; // kosongkan kalau tidak ada
  ongoing?: boolean; // true kalau proyek masih berjalan
  // Taruh gambar di public/projects/<slug>/ lalu daftarkan di sini
  screenshots: { src: string; alt: string }[];
}

export type Project = ProjectText & ProjectAssets;

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  year: string;
}

export interface UIStrings {
  nav: {
    about: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    viewProjects: string;
    contactMe: string;
    yearsExperience: string;
    enterpriseProjects: string;
    certifications: string;
  };
  about: { eyebrow: string; title: string };
  experience: { eyebrow: string; title: string };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { software: string; data: string };
    countLabel: string; // mis. "projects" -> "9 projects"
    ongoing: string; // badge untuk proyek yang masih berjalan
  };
  education: {
    eyebrow: string;
    title: string;
    educationLabel: string;
    certificationsLabel: string;
  };
  contact: { eyebrow: string; title: string; description: string };
  footer: { builtWith: string };
  project: {
    allProjects: string;
    aboutProject: string;
    myContribution: string;
    screenshots: string;
    otherProjects: string;
    viewAll: string;
    openProject: string;
    client: string;
    role: string;
    period: string;
    category: string;
    techStack: string;
  };
  a11y: {
    toggleTheme: string;
    openMenu: string;
    switchLanguage: string;
    backToTop: string;
  };
}

export interface LocaleContent {
  jobTitle: string;
  tagline: string;
  availability: string; // kosongkan untuk sembunyikan badge
  about: string[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectText[];
  education: EducationItem[];
  certifications: Certification[];
  ui: UIStrings;
}
