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
    id: "game-tracker",
    title: "Game Tracker",
    image: GAMETRACKER,
    shortDescription:
      "Application de suivi et de gestion des jeux vidéo sur différents supports.",
    description:
      "Application développée avec ASP.NET Core, Blazor et Entity Framework Core permettant la gestion complète d'une bibliothèque de jeux vidéo : bibliothèque, wishlist, plateformes, genres, tags, favoris, notation et statistiques.",
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
