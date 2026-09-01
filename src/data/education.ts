import type { EducationItem } from "../types";

export const educationData: EducationItem[] = [
  {
    period: "2024 – 2026",
    degree: "Master en informatique",
    school: "ENI — École Nationale d'Informatique, Fianarantsoa",
    specialty: "Génie Logiciel et Bases de Données",
    status: "current",
    diplome: null,
  },
  {
    period: "2021 – 2024",
    degree: "Licence en informatique",
    school: "ENI — École Nationale d'Informatique, Fianarantsoa",
    specialty: "Génie Logiciel et Bases de Données",
    status: "done",
    diplome: {
      name: "Licence en informatique",
      honors: "Mention Bien",
      period: "2023",
    }
  },
];
