import THEBARAPP from "@/assets/images/the_bar_app.png";
import POCKETBUDGET from "@/assets/images/pocket_budget.png";
import PORTFOLIO from "@/assets/images/portfolio.png";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly image?: string;
  readonly link?: string;
  readonly repoUrl?: string;
  readonly repoFront?: string;
  readonly repoBack?: string;
  readonly featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "the-bar-app",
    title: "The Bar App",
    image: THEBARAPP,
    shortDescription:
      "Application full stack de gestion d’un catalogue de boissons et des stocks.",
    description:
      "Application web complète pour la gestion d’un catalogue de boissons, des stocks, des catégories, des ingrédients et des favoris. Développement d’une API REST sécurisée avec Spring Boot et intégration d’un front moderne en Vue 3 avec Vuetify.",
    tags: ["Spring Boot", "Vue 3", "Vuetify", "JPA/Hibernate", "JWT"],
    repoFront: "https://github.com/dryxos118/the_bar-app_web",
    repoBack: "https://github.com/dryxos118/the_bar_app",
  },
  {
    id: "pocket-budget",
    title: "Pocket Budget",
    image: POCKETBUDGET,
    shortDescription:
      "Application de gestion de budget personnel avec suivi et visualisation des dépenses.",
    description:
      "Application de gestion de budget personnel avec suivi des dépenses, gestion de comptes et visualisation de données via tableaux et graphiques interactifs. Authentification sécurisée par JWT et stockage côté serveur avec ASP.NET / C#.",
    tags: ["Blazor", "MudBlazor", "C#", "ASP.NET", "JWT"],
    repoUrl: "https://github.com/dryxos118/PocketBudget",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    image: PORTFOLIO,
    shortDescription:
      "Portfolio personnel responsive présentant mon profil, mes compétences et mes projets.",
    description:
      "Portfolio personnel développé pour présenter mon parcours, mes compétences, mes projets et mes objectifs professionnels. Design moderne, responsive, navigation fluide par ancres et formulaire de contact avec EmailJS.",
    tags: ["React", "TypeScript", "Bootstrap", "EmailJS"],
    link: "https://dryxos118.github.io/mon-portfolio/",
    repoUrl: "https://github.com/dryxos118/mon-portfolio",
  },
];
