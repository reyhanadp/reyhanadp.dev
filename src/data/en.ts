// Konten website dalam bahasa Inggris (bahasa default).
// Struktur file ini harus sama persis dengan id.ts.

import type { LocaleContent } from "./types";

const en: LocaleContent = {
  jobTitle: "Mobile Developer & Data Engineer",
  tagline:
    "Building mobile apps and data/observability systems at enterprise scale — from React Native to the Elastic Stack.",
  availability: "", // example: "Open to new opportunities"

  about: [
    "Software engineer with experience across data engineering/observability (Elastic Stack, Grafana, Pentaho) and mobile development (React Native, native Android).",
    "Elastic Certified Engineer with a track record of building end-to-end dashboards for enterprise clients such as Bank Mandiri, and of developing and maintaining nationwide-scale mobile apps — 99% Usahaku and DigiPOS for Telkomsel.",
  ],

  skillGroups: [
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
  ],

  experience: [
    {
      role: "Mobile Developer",
      company: "PT DAnS Multi Pro",
      period: "2022 — Present",
      summary:
        "Developing and maintaining the 99% Usahaku (React Native) and DigiPOS (native Android) apps for Telkomsel.",
      highlights: [
        "Build new features and integrate them with backend APIs",
        "Fix bugs and improve app performance, security, and code quality",
        "Review teammates' code before it is merged",
        "Keep up with current mobile development best practices",
      ],
    },
    {
      role: "IT Consultant",
      company: "PT Indonesia Global Solusindo",
      period: "2019 — 2022",
      summary:
        "Built data integrations and monitoring dashboards for enterprise clients: Bank Mandiri, Finnet Indonesia, Bank Sahabat Sampoerna, and KSP Sahabat Mitra Sejati.",
      highlights: [
        "Designed data pipelines from multiple sources (SiteScope, AppDynamics, UiPath, F5) into Elasticsearch/InfluxDB",
        "Built end-to-end monitoring dashboards in Kibana and Grafana to speed up troubleshooting",
        "Created automated watchers to block illegal transactions, complete with email alerts",
        "Earned the Elastic Certified Engineer certification",
      ],
    },
  ],

  projects: [
    {
      slug: "99-usahaku",
      title: "99% Usahaku",
      client: "Telkomsel",
      category: "Mobile App",
      role: "Mobile Developer",
      period: "2022 — Present",
      description:
        "A marketplace app for MSME and Telkomsel products on Android/iOS. Building new features, API integrations, and performance improvements for a nationwide user base.",
      details: [
        "99% Usahaku is Telkomsel's marketplace app that brings products from small and medium businesses together with Telkomsel's digital products in a single platform. It is available on Android and iOS and built with React Native.",
        "Development follows an agile process so new features ship regularly. I work across the full mobile development cycle — from building the UI for new features and integrating APIs to keeping the app stable and performant at nationwide scale.",
      ],
      highlights: [
        "Build user interfaces for new features and integrate them with backend APIs",
        "Resolve bugs reported from production",
        "Improve the app's security, performance, and code quality",
        "Review other developers' contributions before they are merged",
        "Keep up with evolving concepts and best practices in mobile development",
      ],
      linkLabel: "View on Play Store",
    },
    {
      slug: "digipos",
      title: "DigiPOS",
      client: "Telkomsel",
      category: "Mobile App",
      role: "Mobile Developer",
      period: "2023",
      description:
        "A sales app for Telkomsel products used by retail outlets and individuals, built with native Android.",
      details: [
        "DigiPOS is the app used by retail outlets and individual sellers for Telkomsel product sales. It is built natively for Android.",
        "Like 99% Usahaku, the project runs on an agile process. My focus was developing new features along with their API integrations, while maintaining code quality through code review and bug fixes.",
      ],
      highlights: [
        "Build user interfaces for new features and integrate them with backend APIs",
        "Resolve bugs in the app",
        "Improve the app's security, performance, and code quality",
        "Review code to prevent bugs from reaching production",
      ],
      linkLabel: "View on Play Store",
    },
    {
      slug: "bank-mandiri-monitoring-dashboard",
      title: "Monitoring Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      role: "IT Technical Consultant",
      period: "2019",
      description:
        "Integrated data from HP SiteScope and AppDynamics via Pentaho into InfluxDB, event management with Kapacitor, and an end-to-end Grafana dashboard for faster troubleshooting.",
      details: [
        "An end-to-end monitoring dashboard for Bank Mandiri's SOA, MCM, MIB, SCM, and MPS systems. The goal was full visibility so that troubleshooting becomes faster and more targeted.",
        "Data from the HP SiteScope and AppDynamics monitoring tools was integrated with Pentaho and stored in InfluxDB. Event management was handled by Kapacitor with storage in MSSQL, and everything was visualized in Grafana dashboards.",
      ],
      highlights: [
        "Designed the data integration pipeline from HP SiteScope and AppDynamics using Pentaho",
        "Stored time-series data in InfluxDB and events in MSSQL via Kapacitor",
        "Built end-to-end Grafana dashboards for troubleshooting",
      ],
      linkLabel: "",
    },
    {
      slug: "bank-mandiri-rpa-dashboard",
      title: "RPA Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      role: "IT Technical Consultant",
      period: "2019 — 2020",
      description:
        "Integrated UiPath data (MSSQL) through Logstash into Elasticsearch, presented in a custom Kibana dashboard for monitoring RPA processes.",
      details: [
        "A custom dashboard for monitoring Robotic Process Automation (UiPath) processes at Bank Mandiri. UiPath's built-in dashboard was not flexible enough, so the team needed an end-to-end dashboard tailored to their needs.",
        "Data from UiPath's MSSQL database was integrated using Logstash and stored in Elasticsearch, then visualized in Kibana dashboards.",
      ],
      highlights: [
        "Built the Logstash pipeline from UiPath's MSSQL database into Elasticsearch",
        "Designed Kibana dashboards tailored to RPA monitoring needs",
      ],
      linkLabel: "",
    },
    {
      slug: "elk-implementation",
      title: "ELK Implementation",
      client: "PT Finnet Indonesia & Bank Sahabat Sampoerna",
      category: "Data & Observability",
      role: "IT Technical Consultant",
      period: "2020",
      description:
        "F5 log pipeline into Elasticsearch, automated watchers that block accounts with prohibited transactions based on defined rules, email alerts, and Kibana dashboards.",
      details: [
        "An Elastic Stack (Elasticsearch, Logstash, Kibana) implementation to detect and block transactions that violate specific rules at Finnet Indonesia and Bank Sahabat Sampoerna.",
        "Logs from F5 were integrated with Logstash into Elasticsearch. Watchers were configured to automatically block accounts performing prohibited transactions and send email alerts, while Kibana served as the end-to-end dashboard.",
      ],
      highlights: [
        "Built the Logstash pipeline from F5 into Elasticsearch",
        "Configured watchers for automatic blocking and email alerts based on transaction rules",
        "Built end-to-end monitoring dashboards in Kibana",
      ],
      linkLabel: "",
    },
    {
      slug: "portal-karyawan-isgs",
      title: "IS-GS Employee Portal",
      client: "Internal — PT Indonesia Global Solusindo",
      category: "Mobile & Web",
      role: "IT Technical Consultant",
      period: "2021",
      description:
        "Mobile and web apps for an internal employee portal, built with React Native on mobile and PHP with MySQL on the backend.",
      details: [
        "An internal project to build an employee portal for PT Indonesia Global Solusindo, accessible through both a mobile app and the web.",
        "The mobile side was developed with React Native, while the backend and web were built with PHP and a MySQL database.",
      ],
      highlights: [
        "Developed the employee portal mobile app with React Native",
        "Built the backend and web portal with PHP and MySQL",
      ],
      linkLabel: "",
    },
  ],

  education: [
    {
      school: "Universitas Komputer Indonesia (UNIKOM)",
      degree: "Bachelor's degree in Informatics Engineering",
      period: "2014 — 2019",
      detail: "GPA 3.35",
    },
    {
      school: "SMA Plus Al-Ghifari",
      degree: "High school, Science major",
      period: "2011 — 2014",
      detail: "",
    },
  ],

  certifications: [
    { name: "Elastic Certified Engineer", year: "2021 — 2023" },
    { name: "React Native Apps Developer", year: "2022" },
    { name: "Mendix Rapid Developer", year: "2021" },
    { name: "Oracle Database 11g – SQL Fundamentals", year: "2018" },
  ],

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      viewProjects: "View projects",
      contactMe: "Get in touch",
      yearsExperience: "Years of experience",
      enterpriseProjects: "Enterprise projects",
      certifications: "Certifications",
    },
    about: { eyebrow: "About", title: "Who I am" },
    experience: { eyebrow: "Experience", title: "Career journey" },
    projects: {
      eyebrow: "Projects",
      title: "What I've worked on",
      description:
        "Click a project to see the details. Most of these are enterprise client work, so the source code is not public.",
    },
    education: {
      eyebrow: "Education",
      title: "Education & Certifications",
      educationLabel: "Education",
      certificationsLabel: "Certifications",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description: "Interested in collaborating or have a question? Send me an email — I'll reply as soon as I can.",
    },
    footer: { builtWith: "Built with Astro & Tailwind CSS" },
    project: {
      allProjects: "All projects",
      aboutProject: "About the project",
      myContribution: "My contribution",
      screenshots: "Screenshots",
      otherProjects: "Other projects",
      viewAll: "View all",
      openProject: "Open project",
      client: "Client",
      role: "Role",
      period: "Period",
      category: "Category",
      techStack: "Tech stack",
    },
    a11y: {
      toggleTheme: "Toggle light/dark theme",
      openMenu: "Open menu",
      switchLanguage: "Switch language",
    },
  },
};

export default en;
