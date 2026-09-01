import type { SkillCategory, SkillNode, FreeSkillGroup } from "../types";

export const skills: SkillCategory[] = [
  {
    title: "Langages",
    icon: "Code2",
    items: [
      { name: "JavaScript", logo: "https://img.icons8.com/color/48/javascript--v1.png" },
      { name: "TypeScript", logo: "https://img.icons8.com/color/48/typescript.png" },
      { name: "Python", logo: "https://img.icons8.com/color/48/python--v1.png" },
      { name: "HTML", logo: "https://img.icons8.com/color/48/html-5--v1.png" },
      { name: "CSS", logo: "https://img.icons8.com/fluency/48/css3.png" },
      { name: "Java", logo: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
      { name: "Bash", logo: "https://images.icon-icons.com/2699/PNG/512/gnu_bash_official_logo_icon_169099.png" },
      { name: "SQL", logo: "https://img.icons8.com/color/48/sql.png" },
    ],
  },
  {
    title: "Frameworks & Bibliothèques",
    icon: "Brackets",
    items: [
      { name: "React", logo: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Vue.js", logo: "https://img.icons8.com/color/48/vue-js.png" },
      { name: "Node.js", logo: "https://img.icons8.com/color/48/nodejs.png" },
      { name: "Express", logo: "https://img.icons8.com/ios/50/express-js.png" },
      { name: "NestJS", logo: "/images/logos/nest.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Alembic", logo: "https://img.icons8.com/ios-filled/50/database--v1.png" },
      { name: "Spring Boot", logo: "https://img.icons8.com/color/48/spring-logo.png" },
      { name: "Tailwind CSS", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
      { name: "Bootstrap 5", logo: "https://img.icons8.com/color/48/bootstrap.png" },
    ],
  },
  {
    title: "Développement mobile",
    icon: "Smartphone",
    items: [
      { name: "React Native", logo: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Flutter", logo: "https://img.icons8.com/fluency/48/flutter.png" },
      { name: "Dart", logo: "https://img.icons8.com/color/48/dart.png" },
    ],
  },
  {
    title: "Bases de données",
    icon: "Database",
    items: [
      { name: "PostgreSQL", logo: "https://img.icons8.com/color/48/postgreesql.png" },
      { name: "MySQL", logo: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "SQLite", logo: "https://img.icons8.com/color/48/sqlite.png" },
      { name: "Redis", logo: "https://img.icons8.com/color/48/redis--v1.png" },
      { name: "MongoDB", logo: "https://img.icons8.com/color/48/mongodb.png" },
    ],
  },
  {
    title: "Outils",
    icon: "Settings2",
    items: [
      { name: "Git", logo: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", logo: "https://img.icons8.com/glyph-neue/64/github.png" },
      { name: "GitLab", logo: "https://img.icons8.com/color/48/gitlab.png" },
      { name: "Prisma", logo: "https://img.icons8.com/ios/50/prisma-orm.png" },
      { name: "Sequelize", logo: "https://raw.githubusercontent.com/sequelize/sequelize/60b75189751e534b6853a56513df3453feb045b1/logo.svg" },
      { name: "Supabase", logo: "/images/logos/supabase.webp" },
      { name: "Jira", logo: "/images/logos/jira.webp" },
      { name: "Trello", logo: "https://img.icons8.com/color/48/trello.png" },
      { name: "Miro", logo: "https://img.icons8.com/color/48/miro--v1.png" },
      { name: "Docker", logo: "https://img.icons8.com/color/48/docker.png" },
      { name: "CI/CD", logo: "https://img.icons8.com/color/48/deployment.png" },
      { name: "GitHub Actions", logo: "https://img.icons8.com/color/48/github--v1.png" },
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Vitest", logo: "https://vitest.dev/logo.svg" },
      { name: "pytest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
    ],
  },
  {
    title: "Modélisation & Méthodologie",
    icon: "Workflow",
    items: [
      { name: "UML" },
      { name: "MERISE" },
      { name: "Agile", logo: "https://img.icons8.com/color/48/agile.png" },
      { name: "Scrum", logo: "https://img.icons8.com/color/48/scrum.png" },
    ],
  },
  {
    title: "OS",
    icon: "Cpu",
    items: [
      { name: "Ubuntu", logo: "https://img.icons8.com/color/48/ubuntu--v1.png" },
      { name: "Windows", logo: "https://img.icons8.com/fluency/48/windows-11.png" },
    ],
  },
  {
    title: "IoT",
    icon: "CircuitBoard",
    items: [
      { name: "Arduino", logo: "https://img.icons8.com/color/48/arduino.png" },
      { name: "ESP32", logo: "https://img.icons8.com/color/48/microchip.png" },
    ],
  },
];

// Hiérarchie arbre : parent → enfants (tree UX)
export const skillTree: SkillNode[] = [
  {
    name: "JavaScript",
    logo: "https://img.icons8.com/color/48/javascript--v1.png",
    icon: "Code2",
    children: [
      {
        name: "TypeScript",
        logo: "https://img.icons8.com/color/48/typescript.png",
      },
      { name: "React", logo: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Vue.js", logo: "https://img.icons8.com/color/48/vue-js.png" },
      { name: "React Native", logo: "https://img.icons8.com/color/48/react-native.png" },
      {
        name: "Node.js",
        logo: "https://img.icons8.com/color/48/nodejs.png",
        children: [
          { name: "Express",logo: "https://img.icons8.com/ios/50/express-js.png"},
          { name: "NestJS", logo: "/images/logos/nest.svg" },
          { name: "Prisma", logo: "https://img.icons8.com/ios/50/prisma-orm.png" },
          { name: "Sequelize", logo: "https://raw.githubusercontent.com/sequelize/sequelize/60b75189751e534b6853a56513df3453feb045b1/logo.svg" },
        ],
      },
    ],
  },
  {
    name: "HTML & CSS",
    logo: "https://img.icons8.com/color/48/html-5--v1.png",
    icon: "Brackets",
    children: [
      { name: "Tailwind CSS", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
      { name: "Bootstrap 5", logo: "https://img.icons8.com/color/48/bootstrap.png" },
    ],
  },
  {
    name: "Python",
    logo: "https://img.icons8.com/color/48/python--v1.png",
    icon: "Code2",
    children: [
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      { name: "Alembic", logo: "https://img.icons8.com/ios-filled/50/database--v1.png" },
    ],
  },
  {
    name: "Java",
    logo: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
    icon: "Cpu",
    children: [{ name: "Spring Boot", logo: "https://img.icons8.com/color/48/spring-logo.png" }],
  },
  {
    name: "Dart",
    logo: "https://img.icons8.com/color/48/dart.png",
    icon: "Smartphone",
    children: [{ name: "Flutter", logo: "https://img.icons8.com/fluency/48/flutter.png" }],
  },
  {
    name: "SQL",
    logo: "https://img.icons8.com/color/48/sql.png",
    icon: "Database",
    children: [
      { name: "PostgreSQL", logo: "https://img.icons8.com/color/48/postgreesql.png" },
      { name: "MySQL", logo: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "SQLite", logo: "https://img.icons8.com/color/48/sqlite.png" },
      { name: "MongoDB", logo: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "Redis", logo: "https://img.icons8.com/color/48/redis--v1.png" },
      { name: "Supabase", logo: "/images/logos/supabase.webp" },
    ],
  },
  {
    name: "Bash",
    logo: "https://images.icon-icons.com/2699/PNG/512/gnu_bash_official_logo_icon_169099.png",
    icon: "Cpu",
  },
  {
    name: "IoT",
    logo: "https://img.icons8.com/color/48/microchip.png",
    icon: "CircuitBoard",
    children: [
      { name: "Arduino", logo: "https://img.icons8.com/color/48/arduino.png" },
      { name: "ESP32", logo: "https://img.icons8.com/color/48/microchip.png" },
    ],
  },
];

// Nœuds libres = sans parent (écosystème, tooling, méthodologie, OS)
export const freeSkills: FreeSkillGroup[] = [
  {
    label: "DevOps & Outils",
    icon: "Settings2",
    items: [
      { name: "Git", logo: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", logo: "https://img.icons8.com/glyph-neue/64/github.png" },
      { name: "GitLab", logo: "https://img.icons8.com/color/48/gitlab.png" },
      { name: "Docker", logo: "https://img.icons8.com/color/48/docker.png" },
      { name: "CI/CD", logo: "https://img.icons8.com/color/48/deployment.png" },
      { name: "GitHub Actions", logo: "https://img.icons8.com/color/48/github--v1.png" },
    ],
  },
  {
    label: "Tests",
    icon: "Workflow",
    items: [
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Vitest", logo: "https://vitest.dev/logo.svg" },
      { name: "pytest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
    ],
  },
  {
    label: "Gestion & Méthodologie",
    icon: "Workflow",
    items: [
      { name: "Jira", logo: "/images/logos/jira.webp" },
      { name: "Trello", logo: "https://img.icons8.com/color/48/trello.png" },
      { name: "Miro", logo: "https://img.icons8.com/color/48/miro--v1.png" },
      { name: "Agile", logo: "https://img.icons8.com/color/48/agile.png" },
      { name: "Scrum", logo: "https://img.icons8.com/color/48/scrum.png" },
      { name: "UML" },
      { name: "MERISE" },
    ],
  },
  {
    label: "Environnement",
    icon: "Cpu",
    items: [
      { name: "Ubuntu", logo: "https://img.icons8.com/color/48/ubuntu--v1.png" },
      { name: "Windows", logo: "https://img.icons8.com/fluency/48/windows-11.png" },
    ],
  },
];
