import type { Service } from "@types/index"

// EDIT: adapter les prix et livrables selon l'offre actuelle
export const services: Service[] = [
  {
    id: "webflow",
    icon: "◈",
    title: "Développement Webflow",
    description: "Sites vitrines performants, animations GSAP, intégrations tierces et CMS Webflow.",
    deliverables: ["Site responsive livré", "Animations & interactions", "GTM + Analytics", "Formation à l'édition"],
    startingPrice: "À partir de 1 500€",
  },
  {
    id: "google-ads",
    icon: "◎",
    title: "Google Ads",
    description: "Setup, optimisation et suivi de campagnes Search pour artisans et PME.",
    deliverables: ["Audit compte existant", "Structuration campagnes", "Tracking conversions", "Rapport mensuel"],
    startingPrice: "À partir de 400€/mois",
  },
  {
    id: "seo",
    icon: "◇",
    title: "SEO & Contenu",
    description: "Audit technique, stratégie de contenu EEAT, netlinking et suivi positions.",
    deliverables: ["Audit technique complet", "Plan de contenu", "Articles optimisés", "Suivi GSC mensuel"],
    startingPrice: "À partir de 600€",
  },
  {
    id: "dev",
    icon: "◻",
    title: "Développement front-end",
    description: "Intégration Astro/Tailwind, landing pages, composants et outils sur-mesure.",
    deliverables: ["Composants réutilisables", "Responsive garanti", "Code documenté", "Deploy Cloudflare/Vercel"],
    startingPrice: "Sur devis",
  },
]
