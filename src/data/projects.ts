export interface Project {
  id: string
  title: string
  category?: string
  image: string
  description: string
  technologies: string[]
  link?: string
  details: string
  achievements?: string[]
}
const baseUrl = import.meta.env.BASE_URL


export const projects: Project[] = [

  {
    id: "kaaraange",
    title: "Kaaraange Kids",
    category: "IoT & Sécurité des enfants",
    image: `${baseUrl}images/logo-light.webp`,
    description:
      "Plateforme de suivi et de sécurité des enfants avec géolocalisation temps réel et intégration IoT.",
      
    technologies:[
      "Django",
      "Django REST",
      "Vue.js",
      "PostgreSQL",
      "Firebase",
      "IoT"
    ],
    achievements: [
      "GITEX Africa Morocco 2025 – Marrakech",
      "VivaTech 2025 – Paris",
      "Sélectionné pour représenter le Sénégal aux ECOWAS Startup Awards 2026 – Abuja",
      "Accompagnement dans le cadre de la New Deal Technologique"
    ],
    link:"https://www.kaaraange.org",
    details:
      "Conception d'une architecture backend sécurisée, développement des API REST, gestion des utilisateurs, géolocalisation, zones de sécurité et système de notifications."
  },


  {
    id:"wer",

    title:"WER",
    category: "Santé & Bien-être",
    image:`${baseUrl}images/wer_logo.png`,

    description:
      "Plateforme de soins différés permettant la gestion des demandes médicales, remboursements et suivis.",

    technologies:[
      "Laravel",
      "Vue.js",
      "API REST",
      "Paiement",
      "Swagger"
    ],
    achievements: [
      "1er prix – Dakar Innovation Days 2023",
      "Incubation par ACASSAA",
      "Accompagnement par Orange Startup Studio"
    ],
    link:"https://www.wer.sn",

    details:
      "Développement backend, conception des API, intégration des services externes et gestion des processus métier."
  },


  {
    id:"kanimmo",

    title:"KANIMMO",
    category: "Immobilier & Gestion",
    image:`${baseUrl}images/logo_mixte.png`,

    description:
      "Application de gestion immobilière pour le suivi des biens, paiements et comptabilité.",

    technologies:[
      "Laravel",
      "Vue.js",
      "MySQL"
    ],

    link:"https://www.kanimmo.com",

    details:
      "Développement backend, gestion des modules métier, optimisation des performances et maintenance évolutive."
  },


  {
    id:"mlouma",

    title:"Mlouma",
    category: "Agriculture & Marché",


    image:`${baseUrl}images/hero-bg.jpg`,
    

    description:
      "Plateforme agricole proposant des alertes météo, informations marché et contenus pédagogiques.",

    technologies:[
      "Django",
      "API REST",
      "SMS",
      "PostgreSQL"
    ],

    link:"https://www.mlouma.sn",

    details:
      "Développement de fonctionnalités backend, intégration SMS et services liés aux producteurs."
  },

  {
    id: "sahel-assistance",
    title: "Sahel Assistance",
    category: "Santé",
    image: `${baseUrl}images/logo_sahel.c518e8de.png`,
    description:
      "Plateforme de santé permettant aux patients de consulter des professionnels de santé à distance ou en cabinet, avec ou sans rendez-vous.",
    technologies: [
      "Laravel",
      "Vue.js",
      "API REST",
      "Téléconsultation",
      "Rendez-vous"
    ],
    link: "https://sahelassistance.com/",
    details:
      "Développement d'une plateforme de mise en relation entre patients et professionnels de santé, avec gestion des consultations en téléconsultation et en cabinet, prise de rendez-vous et parcours patient accessible 24H/24 et 7J/7."
  },


  {
    id:"basesn",

    title:"BASE-SN",
    category: "Suivi & Évaluation de projets",

    image:`${baseUrl}images/logo-BASE.jpg`,

    description:
      "Plateforme de suivi et évaluation de projets avec tableaux de bord et rapports automatisés.",

    technologies:[
      "Django",
      "Dashboard",
      "PDF",
      "Excel"
    ],

    link:"https://base-sn.com",

    details:
      "Création des APIs, dashboards KPI, génération de rapports et système de suivi sécurisé."
  }


]