/** Types partagés du projet */

export interface SEOProps {
  title: string
  description?: string
  ogImage?: string
  noindex?: boolean
  canonical?: string
  type?: "website" | "article"
  publishedAt?: Date
}

export interface BreadcrumbItem {
  name: string
  href: string
}

// Portfolio types

export type ProjectCategory = "webflow" | "seo" | "google-ads" | "dev" | "side-project"

export type Project = {
  slug: string
  title: string
  client: string
  category: ProjectCategory
  year: number
  tags: string[]
  description: string
  longDescription?: string
  results?: string
  image: string
  link?: string
  featured: boolean
}

export type Service = {
  id: string
  icon: string
  title: string
  description: string
  deliverables: string[]
  startingPrice?: string
}

export type SkillGroup = {
  category: string
  items: string[]
}
