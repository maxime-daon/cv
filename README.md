# Template Starter — Astro 6

Template de depart pour sites statiques professionnels. Host-agnostique, TypeScript strict, SEO-ready.

## Stack

- **Astro 6** — mode statique (`output: "static"`)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **TypeScript strict** avec path aliases
- **ESLint + Prettier + Husky** — lint et format automatiques au commit

## Prerequis

- Node.js **22+**

## Demarrage rapide

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:4321`.

## Configuration

Modifier **`src/config/site.ts`** en premier — c'est la source de verite pour le nom du site, l'URL, la description, etc.

Fichiers de configuration :
- `src/config/site.ts` — informations globales du site
- `src/config/nav.ts` — liens de navigation
- `src/config/footer.ts` — liens du footer et reseaux sociaux

## Commandes

| Commande | Action |
|---|---|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Previsualiser le build localement |
| `npm run lint` | Linter le code |
| `npm run format` | Formater le code |
| `npm run format:check` | Verifier le formatage |

## Deploiement

Ce template est **host-agnostique**. Les exemples de configuration pour chaque hebergeur sont dans `deploy/` :

- `deploy/cloudflare-pages/_headers.example` — headers de securite Cloudflare
- `deploy/netlify/netlify.toml.example` — configuration Netlify
- `deploy/vercel/vercel.json.example` — configuration Vercel

Chaque fichier contient les headers de securite recommandes (HSTS, X-Frame-Options, CSP, etc.).

## Checklist lancement

- [ ] Modifier `src/config/site.ts` avec les vraies informations
- [ ] Remplacer `public/og-default.jpg` par la vraie image OG (1200x630)
- [ ] Remplacer le favicon (`public/favicon.svg`)
- [ ] Completer les pages mentions legales et politique de confidentialite
- [ ] Tester sur [securityheaders.com](https://securityheaders.com)
- [ ] Verifier les performances sur [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Configurer Google Search Console et soumettre le sitemap
- [ ] Mettre en place le bandeau cookies si necessaire

## Ajout du CMS Sanity

<!-- Section a completer lors de l'integration Sanity -->
<!-- Le BlogLayout et les pages blog/ sont prets a etre branches -->
