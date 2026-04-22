import { getSkills, type Skill } from "./skills";

export interface TimelineItem {
  readonly id: string;
  readonly type: "experience" | "education";
  readonly title: string;
  readonly subtitle: string;
  readonly period: string;
  readonly description: string;
  readonly techs?: readonly Skill[];
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "exp-phantom",
    type: "experience",
    title: "Votre future équipe ?",
    subtitle: "La prochaine étape de mon parcours",
    period: "",
    description:
      "Aujourd’hui, je souhaite rejoindre une équipe dans laquelle je pourrai continuer à progresser, apporter mon énergie et contribuer à des projets concrets.",
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Développeur Full Stack",
    subtitle: "Groupe Ciuch",
    period: "Septembre 2023 – Août 2025",
    description:
      "Participation au développement d’un WCS (Warehouse Control System) en méthodologie Agile. Contribution à la création de nouvelles fonctionnalités, à la maintenance de l’application et à la résolution d’anomalies.",
    techs: getSkills(["C#", ".NET / ASP.NET", "Blazor", "GraphQL", "SQL"]),
  },
  {
    id: "edu-1",
    type: "education",
    title: "Concepteur développeur d’applications – Alternance",
    subtitle: "Foreach Academy",
    period: "Septembre 2023 – Août 2025",
    description:
      "Formation en alternance orientée développement full stack avec une montée en compétence sur le back-end, le front-end et les bonnes pratiques de développement professionnel.",
  },
  {
    id: "edu-2",
    type: "education",
    title: "Formation développeur Web & Web Mobile",
    subtitle: "Foreach Academy",
    period: "Septembre 2022 – Août 2023",
    description:
      "Apprentissage des fondamentaux du développement web moderne : intégration, front-end, back-end, bases de données, gestion de version et premiers projets complets.",
  },
];
