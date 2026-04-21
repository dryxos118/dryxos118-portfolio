export const navItems = [
  { id: "hero", label: "Accueil" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Langages",
    items: ["TypeScript", "JavaScript", "C#", "Java", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Vue 3", "Nuxt UI", "Tailwind CSS", ".NET", "Spring Boot"],
  },
  {
    title: "Outils",
    items: ["Git", "GitHub", "Swagger", "Postman", "Docker"],
  },
  {
    title: "Méthodologie",
    items: ["Clean Code", "Responsive Design", "REST API", "UI Thinking"],
  },
];

export const experiences = [
  {
    title: "Développeur Full Stack en progression",
    subtitle: "Projets personnels",
    period: "2025 - Aujourd’hui",
    description:
      "Je développe des projets complets pour renforcer mes compétences front-end, back-end, architecture et conception d’interfaces modernes.",
  },
  {
    title: "Formation développeur",
    subtitle: "Parcours d’apprentissage",
    period: "Récent",
    description:
      "Consolidation des bases en algorithmie, APIs REST, bases de données, UI modernes et structuration de projets propres.",
  },
];

export const projects = [
  {
    title: "Pocket Budget",
    type: "Application Web",
    description:
      "Application de gestion budgétaire avec suivi des dépenses, statistiques mensuelles, architecture propre et API dédiée.",
    stack: ["Vue 3", "TypeScript", ".NET", "MySQL"],
    github: "https://github.com/dryxos118/PocketBudget",
  },
  {
    title: "Portfolio OnePage",
    type: "Portfolio",
    description:
      "Portfolio moderne pensé pour présenter clairement mon profil, mes compétences et mes projets avec une expérience fluide.",
    stack: ["Vue 3", "Nuxt UI", "Tailwind", "Motion"],
  },
  {
    title: "Blog API",
    type: "API REST",
    description:
      "API backend avec authentification JWT, bonnes pratiques, documentation Swagger et architecture organisée par fonctionnalités.",
    stack: [".NET", "JWT", "Swagger", "EF Core"],
  },
];
