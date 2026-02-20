import projectidea from "../assets/images/project/project_idea.webp"
import portfolio from "../assets/images/project/portfolio.webp"
import ff_topup from "../assets/images/project/ff_topup.webp"
import eni from "../assets/images/project/eni_mail.webp"
import kiddo from "../assets/images/project/kiddo.webp"
import cpm from "../assets/images/project/cpm.webp"
import reservation from "../assets/images/project/co-reservation.webp"

//TODO Lien vers le repo 

export const projectsData = [
    {
        title: "Project-IDEA",
        description:"Siteweb générateur d'idée de projet assisté par IA pour les développeurs.",
        stacks:["React","Tailwind CSS","Nest","Prisma","PostgreSQL","Mistral AI"],
        link: "https://noobieram.github.io/project-IDEA-front/",
        github:"",
        img: projectidea
    },
    {
        title: "Mada TopUp",
        description:"Plateforme de recharge de diamants pour Free Fire.",
        stacks:["React","Tailwind CSS","Supabase (BaaS)"],
        link: "https://noobieram.github.io/FF_TopUp/",
        github:"https://github.com/NOOBIERAM/FF_TopUp#",
        img: ff_topup
    },
    {
        title: "ENI Connect",
        description:"Application de messagerie securisé conçue pour les etudiants et personnel de l'ENI",
        stacks:["React","Tailwind CSS"],
        link: "https://noobieram.github.io/FF_TopUp/",
        github:"",
        img: eni
    },
    {
        title: "Kiddo Kids",
        description:"Applicaiton éducative destinée aux enfants de 5 à 8 ans avec des jeux interactifs et des activités d’apprentissage adaptées.",
        stacks:["React","Tailwind CSS"],
        link: "",
        github:"",
        img: kiddo
    },
    {
        title: "Critical Path Method (CPM)",
        description:"Application pour le calcul automatique du chemin critique et l’affichage graphique du réseau de tâches et de leurs dépendances.",
        stacks:["VueJS","Bootstrap 5","JavaScript", "Mermaid (graph)"],
        link: "https://noobieram.github.io/FF_TopUp/",
        github:"",
        img: cpm
    },
    {
        title: "Co-Reservation",
        description:"Site de réservation de place dans une coopérative",
        stacks:["VueJS","Bootstrap 5","Express","Sequelize", "MySQL"],
        link: "https://noobieram.github.io/FF_TopUp/",
        github:"",
        img: reservation
    },
    {
        title: "Mon Portfolio",
        description:"",
        stacks:["React","Tailwind CSS"],
        link: "",
        github:"",
        img: portfolio
    }
]