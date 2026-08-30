import type { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Aquasense",
    description:
      "Projet embarqué de mesure du niveau d'eau avec ESP32 et capteur à ultrasons HC-SR04. Mesures filtrées par filtre médian anti-pics, envoyées vers ThingSpeak en Wi-Fi (ESP32) ou GSM/GPRS (SIM800L).",
    stack: ["Arduino", "API ThingSpeak", "ESP32", "HC-SR04", "SIM800L"],
    github: "https://github.com/NOOBIERAM/Aquasense-Pro---ESP32",
    image: "/images/project/aquasense.webp",
  },
  {
    id: 2,
    title: "SUDOKU Solver",
    description:
      "Résolution et génération de Sudoku 9×9 par programmation par contraintes (CSP) : propagation de contraintes, backtracking et solveur Google OR-Tools.",
    stack: ["React", "Tailwind CSS", "FastAPI", "Python", "Google OR-Tools"],
    github: "https://github.com/NOOBIERAM/Sudoku_solver",
    image: "/images/project/sudoku.webp",
  },
  {
    id: 3,
    title: "Project-IDEA",
    description: "Générateur d'idées de projets assisté par IA pour les développeurs.",
    stack: ["React", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Mistral AI"],
    demo: "https://noobieram.github.io/project-IDEA-front/",
    image: "/images/project/project_idea.webp",
  },
  {
    id: 4,
    title: "Mada TopUp",
    description: "Plateforme de recharge de diamants pour Free Fire.",
    stack: ["React", "Tailwind CSS", "Supabase"],
    demo: "https://noobieram.github.io/FF_TopUp/",
    github: "https://github.com/NOOBIERAM/FF_TopUp",
    image: "/images/project/ff_topup.webp",
  },
  {
    id: 5,
    title: "ENI Connect",
    description: "Application de messagerie sécurisée pour les étudiants et le personnel de l'ENI.",
    stack: ["React", "Tailwind CSS"],
    image: "/images/project/eni_mail.webp",
  },
  {
    id: 6,
    title: "Kiddo Kids",
    description:
      "Application éducative pour enfants de 5 à 8 ans, avec jeux interactifs et activités d'apprentissage adaptées.",
    stack: ["React", "Tailwind CSS"],
    image: "/images/project/kiddo.webp",
  },
  {
    id: 7,
    title: "Critical Path Method (CPM)",
    description:
      "Calcul automatique du chemin critique et affichage graphique du réseau de tâches et de leurs dépendances.",
    stack: ["VueJS", "Bootstrap 5", "JavaScript", "Mermaid"],
    github: "https://github.com/NOOBIERAM/CPM-manager",
    image: "/images/project/cpm.webp",
  },
  {
    id: 8,
    title: "Co-Reservation",
    description: "Site de réservation de places dans une coopérative.",
    stack: ["VueJS", "Bootstrap 5", "Express", "Sequelize", "MySQL"],
    image: "/images/project/co-reservation.webp",
  },
  {
    id: 9,
    title: "Mon Portfolio",
    description: "Ce site : portfolio personnel minimaliste au style terminal.",
    stack: ["React", "Tailwind CSS"],
    demo: "https://routsgg.me",
    image: "/images/project/portfolio.webp",
  },
];
