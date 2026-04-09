export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

/** Colonnes du footer (vide pour le portfolio one-page) */
export const FOOTER_SECTIONS: FooterSection[] = []

/** Liens légaux inline (bas du footer) */
export const FOOTER_LINKS: FooterLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
]

/** Réseaux sociaux */
export const SOCIAL_LINKS: { label: string; href: string; icon: string }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/maximedaon", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/maximedaon", icon: "github" },
]
