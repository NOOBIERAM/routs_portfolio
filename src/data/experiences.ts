import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    company: "Douanes Toliara",
    role: "Stagiaire développeur FullStack",
    period: "Août – Déc 2024",
    description:
      "Développement d'une application de suivi des visites effectuées sur les marchandises importées au port de Toliara. Conception de l'architecture et des données, création d'interfaces utilisateur responsives, gestion du backend et des API, intégration d'une assistance IA pour analyser et extraire des données dans des fichiers PDF et images, gestion de la sécurité et des utilisateurs, notifications intelligentes en temps réel.",
    stack: ["React", "Tailwind CSS", "ExpressJs", "Socket.IO", "PostgreSQL", "Sequelize"],
  },
  {
    company: "Computer Store Antananarivo",
    role: "Stagiaire développeur FullStack",
    period: "Sep – Nov 2023",
    description:
      "Développement d'un outil de gestion des stocks de matériel informatique. Conception de l'architecture et réalisation de rapports journaliers des stocks.",
    stack: ["VueJs", "Bootstrap", "ExpressJs", "MySQL", "Sequelize"],
  },
  {
    company: "Natik Corporation",
    role: "Développeur FullStack",
    period: "Août 2023",
    description:
      "Conception et développement d'un outil de gestion des ventes. Développement des fonctionnalités et création d'interfaces interactives.",
    stack: ["Vue", "Bootstrap", "ExpressJs", "MySQL", "Sequelize"],
  },
];
