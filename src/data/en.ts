// Konten website dalam bahasa Inggris (bahasa default).
// Struktur file ini harus sama persis dengan id.ts.

import type { LocaleContent } from "./types";

const en: LocaleContent = {
  jobTitle: "Frontend Developer & Data Engineer",
  tagline:
    "Building mobile and web apps and data/observability systems at enterprise scale — from React Native and Android Native to the Elastic Stack.",
  availability: "", // example: "Open to new opportunities"

  about: [
    "Frontend engineer with experience building user interfaces across mobile (React Native, native Android) and web (React, Next.js), plus a background in data engineering/observability (Elastic Stack, Grafana, Pentaho).",
    "Elastic Certified Engineer with a track record of building end-to-end dashboards for enterprise clients such as Bank Mandiri, and of developing and maintaining a portfolio of mobile and web apps — spanning Telkomsel's outlet/reseller tooling and several community/membership apps — for nationwide and community-scale user bases.",
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
      period: "2022 — Present",
      summary:
        "Building and maintaining the UI/frontend across a portfolio of mobile and web apps — spanning Telkomsel's outlet/reseller tooling (native Android, React) and several community/membership apps (React Native) — from early-stage builds to long-running, large-team codebases.",
      highlights: [
        "Build UI and integrate it with backend APIs across native Android, React Native, and React codebases",
        "Own major features end-to-end, from a long-running point-of-sale feature to an ongoing purchase-confirmation UI overhaul",
        "Serve as primary or top contributor on several projects, including a full app rebrand",
        "Fix bugs and improve app performance, security, and code quality across the portfolio",
        "Review teammates' code before merge and set up local mock-API workflows to keep the team unblocked",
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
      slug: "mytelkomsel",
      title: "MyTelkomsel",
      client: "Telkomsel",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (Android)",
      period: "Jul 2026 — Present",
      description:
        "Telkomsel's main consumer app for purchases, bill payments, and account management. Led a UI/UX overhaul of the post-purchase confirmation flow used across many transaction types.",
      details: [
        "MyTelkomsel is Telkomsel's main consumer mobile app, used for purchases, bill payments, and account management, built and maintained by a large, multi-vendor engineering team across a family of related apps and libraries.",
        "My main focus has been leading a UI/UX overhaul of the post-purchase confirmation screen used across many different transaction types (bill payments, digital vouchers, top-up, and more), plus fixing production bugs in the checkout/payment-status flow and a startup crash.",
      ],
      highlights: [
        "Led a UI/UX overhaul of the post-purchase confirmation screen used across many transaction types",
        "Updated a shared component/resource library used across the app as part of that overhaul",
        "Fixed several production bugs in the checkout/payment-status flow",
        "Fixed a startup crash and several smaller bugs across different parts of the app",
        "Refactored parts of the codebase and resolved code-quality findings as part of ongoing maintenance",
      ],
      linkLabel: "View on Play Store",
    },
    {
      slug: "swarapoint",
      title: "SwaraPoin",
      client: "Confidential",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer",
      period: "Nov 2025 — Aug 2026",
      description:
        "A rewards/loyalty app with an audio-based feature for detecting nearby in-store promotions, plus account, rewards catalog, and voucher-redemption features. Primary contributor, responsible for the majority of the app's codebase.",
      details: [
        "SwaraPoin is a rewards/loyalty mobile app that includes an audio-based feature for detecting nearby in-store promotions, alongside standard account, rewards catalog, and voucher-redemption features.",
        "As the primary developer on a team of about 6 engineers, I was responsible for most of the app's features and codebase — from onboarding and account management to the release pipeline and test coverage — over the project's life so far.",
      ],
      highlights: [
        "Primary developer responsible for most of the app's features and codebase",
        "Built core app screens: onboarding/login, account management, rewards catalog, and voucher redemption",
        "Integrated and maintained an audio-based proximity feature used to detect nearby promotions",
        "Set up and maintained security hardening, crash reporting, and monitoring tooling",
        "Set up and maintained the release/build pipeline for Android and iOS",
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
      period: "May 2025",
      description:
        "A mobile app for a community/organization membership program, covering digital payment, bill payment, and general information features, supporting multiple partner organizations.",
      details: [
        "RekatApp is a mobile app for a community/organization membership program, covering digital payment, bill payment, and general information features, and supporting multiple partner organizations within a single app.",
        "I helped build the app's foundation and core features from an early stage, delivering new features end-to-end and setting up a local development workflow so the team could keep working even when the backend API was unavailable.",
      ],
      highlights: [
        "Built the app's foundation and core features from an early stage, supporting multiple partner organizations",
        "Developed new features end-to-end, from planning to release",
        "Wrote unit tests to help catch issues early and keep the codebase reliable",
        "Fixed a reported production issue affecting part of the onboarding flow",
        "Set up a local mock-API workflow so the team could keep developing when the backend was unavailable",
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
        "A mobile app for a community organization, covering digital payment, bill payment, and general information features — built solo from scratch for both Android and iOS.",
      details: [
        "Cahaya Berkah Umma is a mobile app for a community organization, covering digital wallet, bill payments, top-up/recharge, and informational content.",
        "I built the entire app from scratch by myself for both Android and iOS, including security measures appropriate for an app that handles payments. It later became the basis for a newer version supporting multiple organizations at once (RekatApp).",
      ],
      highlights: [
        "Built the entire app from scratch solo, covering both Android and iOS",
        "Implemented a full feature set: digital wallet, bill payments, top-up/recharge, and informational content",
        "Added security measures appropriate for a payments-handling app",
        "Became the foundation for a newer multi-organization version of the app",
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
        "A cross-platform community app (mobile + web) offering digital payments and general information features. Top contributor on a 12-person team, including a full app rebrand.",
      details: [
        "Masogi is a community app available on both mobile and web, offering digital wallet features, everyday bill/credit/data top-up transactions, and general information content. It later went through a full rebrand and relaunch under a different name.",
        "I was the top contributor on a team of about 12 engineers over the project's 11-month run, building and maintaining logic shared between the mobile app and the web app so features stayed consistent across both, and delivering a large share of the app's screens on both platforms.",
      ],
      highlights: [
        "Top contributor on the team by number of contributions over the project's lifetime",
        "Built and maintained shared logic used by both the mobile and web apps so features stayed consistent across platforms",
        "Led the technical work behind a full app rebrand (name, logo, look and feel) across mobile and web",
        "Built out digital wallet and everyday transaction features (bill payments, credit/data top-up, roaming)",
        "Fixed a large number of code-quality issues and bugs across iOS and Android",
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
        "An internal web-based admin dashboard used to manage operations across several internal tools for Telkomsel's outlet/reseller ecosystem, built as a set of micro-frontend modules.",
      details: [
        "DigiPOS Dashboard is an internal web-based admin dashboard used to manage operations across several internal tools/modules for Telkomsel's outlet/reseller ecosystem, built by a team of 15+ engineers as a set of micro-frontend modules.",
        "I built the user & role management area (user listing, role creation/editing, and a permissions matrix), a shared library of reusable form components used across modules, and was the sole contributor building a new pricing-related feature from the ground up.",
      ],
      highlights: [
        "Built the user & role management area: user listing, role creation/editing, and a permissions matrix",
        "Built a shared library of reusable form components used across the dashboard's modules",
        "Sole contributor who built a new pricing-related feature from the ground up",
        "Refactored core app routing and authentication handling",
        "Fixed bugs and cleaned up code found during integration and after merges",
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
      period: "May 2023 — Mar 2026",
      description:
        "The main Android app for Telkomsel's outlet/reseller network, covering everyday transactions, digital services, and a built-in point-of-sale feature for outlet owners.",
      details: [
        "DigiPOS Outlet is the main Android app used by Telkomsel's outlet and reseller network for everyday transactions and digital services, including a built-in point-of-sale feature for outlet owners. It's the longest-running project I've worked on, spanning close to 3 years across a team of 30+ engineers.",
        "My largest body of work was owning a major point-of-sale feature end-to-end — product catalog, cart, payment (including QR-based payment), receipt printing, and sales reporting — alongside registration/onboarding for that feature, including identity setup and payment method selection.",
      ],
      highlights: [
        "Owned a major point-of-sale feature end-to-end: catalog, cart, payment, receipt printing, and sales reporting",
        "Built the registration/onboarding flow for that feature, including identity setup and payment method selection",
        "Migrated several older screens to a more modern app architecture as part of an ongoing modernization effort",
        "Built a loyalty/engagement feature, including its automated tests",
        "Fixed numerous production crashes and reliability issues reported through crash monitoring",
      ],
      linkLabel: "View on Play Store",
    },
    {
      slug: "digipos-lite",
      title: "DigiPOS Lite",
      client: "Telkomsel",
      category: "Mobile App",
      group: "software",
      role: "Mobile Engineer (Android)",
      period: "Dec 2023 — May 2024",
      description:
        "A point-of-sale style Android app for Telkomsel's outlet/reseller network, covering everyday transactions and multi-wallet balance management.",
      details: [
        "DigiPOS Lite is a point-of-sale style Android app for Telkomsel's outlet and reseller network, covering everyday transactions and multi-wallet balance management, built by a team of 20+ engineers.",
        "My work has centered on onboarding/activation flows for digital wallets, fixing bugs across login/OTP/password-reset and the payment flow, and contributing to an app-wide rebrand.",
      ],
      highlights: [
        "Built and improved onboarding/activation flows for multiple digital wallet options",
        "Fixed a photo-capture issue in the identity-verification flow that was blocking outlet activation",
        "Fixed a reported production crash affecting the payment flow",
        "Fixed various bugs in login, OTP, and password-reset flows",
        "Contributed to an app-wide rebrand",
      ],
      linkLabel: "View on Play Store",
    },
    {
      slug: "portal-karyawan-isgs",
      title: "IS-GS Employee Portal",
      client: "Internal — PT Indonesia Global Solusindo",
      category: "Mobile & Web",
      group: "software",
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
    {
      slug: "elk-implementation",
      title: "ELK Implementation",
      client: "PT Finnet Indonesia & Bank Sahabat Sampoerna",
      category: "Data & Observability",
      group: "data",
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
      slug: "bank-mandiri-rpa-dashboard",
      title: "RPA Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      group: "data",
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
      slug: "bank-mandiri-monitoring-dashboard",
      title: "Monitoring Dashboard",
      client: "PT Bank Mandiri",
      category: "Data & Observability",
      group: "data",
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
        "Click a project to see the details. Most of these are client/employer-owned work, so client names and source code are not always public.",
      groups: {
        software: "Mobile & Web Development",
        data: "Data & Observability",
      },
      countLabel: "projects",
      ongoing: "Ongoing",
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
      backToTop: "Back to top",
    },
  },
};

export default en;
