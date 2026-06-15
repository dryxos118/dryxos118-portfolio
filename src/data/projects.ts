import THEBARAPP from "@/assets/images/the_bar_app.png";
import GAMETRACKER from "@/assets/images/gameTracker.png";
import PORTFOLIO from "@/assets/images/portfolio.png";
import { getSkills, type Skill } from "./skills";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly tags: Skill[];
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
    tags: getSkills([
      "Java",
      "Spring Boot",
      "Vue.js",
      "Vuetify",
      "JPA / Hibernate",
      "JWT",
      "MySQL",
    ]),
    repoFront: "https://github.com/dryxos118/the_bar-app_web",
    repoBack: "https://github.com/dryxos118/the_bar_app",
  },
  {
    id: "game-tracker",
    title: "Game Tracker",
    image: GAMETRACKER,
    shortDescription: "Application de suivi et de gestion des jeux vidéo.",
    description:
      "Application de suivi et de gestion des jeux vidéo avec possibilité d'ajouter, modifier et supprimer des jeux, ainsi que de noter les jeux. Authentification sécurisée par JWT et stockage côté serveur avec ASP.NET / C#.",
    tags: getSkills([
      "C#",
      "Blazor",
      ".NET / ASP.NET",
      "Entity Framework",
      "MudBlazor",
      "SQL Lite",
    ]),
    repoUrl: "https://github.com/dryxos118/GameTracker",
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
    tags: getSkills([
      "Vue.js",
      "TypeScript",
      "NuxtUI",
      "Tailwind CSS",
      "EmailJS",
    ]),
    link: "https://dryxos118.github.io/dryxos118-portfolio/",
    repoUrl: "https://github.com/dryxos118/dryxos118-portfolio",
  },
];
