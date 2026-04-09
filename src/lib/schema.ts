import { SITE } from "@config/site"

/** Schema JSON-LD WebSite avec SearchAction */
export function buildWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.lang,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/recherche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

/** Schema JSON-LD Organization */
export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    sameAs: [
      // Ajouter les URLs des réseaux sociaux ici
    ],
  }
}

/** Schema JSON-LD BreadcrumbList */
export function buildBreadcrumb(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  }
}

/** Schema JSON-LD CreativeWork — page projet */
export function buildCreativeWork(project: {
  title: string
  description: string
  url: string
  image?: string
  client?: string
  year?: string | number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE.url}${project.url}`,
    image: project.image?.startsWith("http") ? project.image : `${SITE.url}${project.image}`,
    ...(project.client && { contributor: { "@type": "Organization", name: project.client } }),
    ...(project.year && { dateCreated: String(project.year) }),
    author: { "@type": "Person", name: SITE.author },
  }
}

/** Schema JSON-LD Article — prêt pour le blog */
export function buildArticle(post: {
  title: string
  description: string
  url: string
  publishedAt: Date
  updatedAt?: Date
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE.url}${post.url}`,
    datePublished: post.publishedAt.toISOString(),
    ...(post.updatedAt && { dateModified: post.updatedAt.toISOString() }),
    image: post.image ? `${SITE.url}${post.image}` : `${SITE.url}${SITE.ogImage}`,
    author: {
      "@type": "Person",
      name: SITE.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/favicon.svg`,
      },
    },
  }
}
