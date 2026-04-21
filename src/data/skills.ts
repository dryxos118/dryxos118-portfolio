export interface Skill {
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly type: "MAIN_STACK" | "OTHER_TECHNOLOGIES" | "TOOLS" | "PRACTICES";
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skills: Skill[] = [
  // MAIN STACK
  {
    name: "Vue.js",
    icon: "simple-icons:vuedotjs",
    color: "#42B883",
    type: "MAIN_STACK",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    color: "#3178C6",
    type: "MAIN_STACK",
  },
  {
    name: "C#",
    icon: "simple-icons:csharp",
    color: "#178600",
    type: "MAIN_STACK",
  },
  {
    name: ".NET / ASP.NET",
    icon: "simple-icons:dotnet",
    color: "#936BC8",
    type: "MAIN_STACK",
  },
  {
    name: "Entity Framework",
    icon: "simple-icons:dotnet",
    color: "#936BC8",
    type: "MAIN_STACK",
  },
  {
    name: "JWT",
    icon: "simple-icons:jsonwebtokens",
    color: "#000000",
    type: "MAIN_STACK",
  },
  {
    name: "MySQL",
    icon: "simple-icons:mysql",
    color: "#4479A1",
    type: "MAIN_STACK",
  },

  // OTHER TECHNOLOGIES
  {
    name: "HTML5",
    icon: "simple-icons:html5",
    color: "#E44D26",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "CSS3",
    icon: "simple-icons:css3",
    color: "#1572B6",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    color: "#F7DF1E",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Java",
    icon: "simple-icons:openjdk",
    color: "#ED8B00",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Dart",
    icon: "simple-icons:dart",
    color: "#0175C2",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "SQL",
    icon: "simple-icons:mysql",
    color: "#3B82F6",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Bootstrap",
    icon: "simple-icons:bootstrap",
    color: "#7952B3",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Swagger",
    icon: "simple-icons:swagger",
    color: "#6DB33F",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "GraphQL",
    icon: "simple-icons:graphql",
    color: "#E10098",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "React",
    icon: "simple-icons:react",
    color: "#61DAFB",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Vite",
    icon: "simple-icons:vite",
    color: "#646CFF",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
    color: "#888888",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Blazor",
    icon: "simple-icons:dotnet",
    color: "#936BC8",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "XUnit",
    icon: "simple-icons:x",
    color: "#181717",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Spring Boot",
    icon: "simple-icons:springboot",
    color: "#6DB33F",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Hibernate",
    icon: "simple-icons:hibernate",
    color: "#59666C",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "JUnit",
    icon: "simple-icons:junit5",
    color: "#25A162",
    type: "OTHER_TECHNOLOGIES",
  },
  {
    name: "Flutter",
    icon: "simple-icons:flutter",
    color: "#02569B",
    type: "OTHER_TECHNOLOGIES",
  },

  // TOOLS
  {
    name: "VS Code",
    icon: "simple-icons:visualstudiocode",
    color: "#0078BA",
    type: "TOOLS",
  },
  {
    name: "Visual Studio",
    icon: "simple-icons:visualstudio",
    color: "#936BC8",
    type: "TOOLS",
  },
  {
    name: "GitHub",
    icon: "simple-icons:github",
    color: "#181717",
    type: "TOOLS",
  },
  {
    name: "GitHub Actions",
    icon: "simple-icons:githubactions",
    color: "#2088FF",
    type: "TOOLS",
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
    color: "#2496ED",
    type: "TOOLS",
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    color: "#68A063",
    type: "TOOLS",
  },
  {
    name: "npm",
    icon: "simple-icons:npm",
    color: "#CB3837",
    type: "TOOLS",
  },
  {
    name: "Maven",
    icon: "simple-icons:apachemaven",
    color: "#C71A36",
    type: "TOOLS",
  },
  {
    name: "Figma",
    icon: "simple-icons:figma",
    color: "#F24E1E",
    type: "TOOLS",
  },
  {
    name: "Postman",
    icon: "simple-icons:postman",
    color: "#FF6C37",
    type: "TOOLS",
  },
  {
    name: "Firebase",
    icon: "simple-icons:firebase",
    color: "#FFCA28",
    type: "TOOLS",
  },

  // PRACTICES
  {
    name: "Agile",
    icon: "simple-icons:scrumalliance",
    color: "#009FDA",
    type: "PRACTICES",
  },
  {
    name: "Clean Code",
    icon: "simple-icons:codefactor",
    color: "#F44A6A",
    type: "PRACTICES",
  },
  {
    name: "Daily Standups",
    icon: "simple-icons:googlecalendar",
    color: "#4285F4",
    type: "PRACTICES",
  },
  {
    name: "Web Development",
    icon: "simple-icons:googlechrome",
    color: "#4285F4",
    type: "PRACTICES",
  },
  {
    name: "REST API",
    icon: "simple-icons:fastapi",
    color: "#009688",
    type: "PRACTICES",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Stack principale",
    skills: skills.filter((skill) => skill.type === "MAIN_STACK"),
  },
  {
    title: "Autres technologies",
    skills: skills.filter((skill) => skill.type === "OTHER_TECHNOLOGIES"),
  },
  {
    title: "Outils",
    skills: skills.filter((skill) => skill.type === "TOOLS"),
  },
  {
    title: "Pratiques",
    skills: skills.filter((skill) => skill.type === "PRACTICES"),
  },
];
