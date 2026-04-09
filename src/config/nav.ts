export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
  children?: NavChild[]
}

/** Liens de navigation principale */
export const NAV_LINKS: NavLink[] = [
  { label: "Projets", href: "/#projets" },
  { label: "Services", href: "/#services" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
]
