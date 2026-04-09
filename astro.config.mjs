// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import { SITE } from "./src/config/site.ts"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: "static",
  compressHTML: true,
  trailingSlash: "never",

  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: false,
  },

  // TODO: Fonts API native — activer quand disponible dans votre version d'Astro
  // fonts: [{ provider: "local", name: "Inter", cssVariable: "--font-sans" }],

  // TODO: CSP native — activer quand disponible dans votre version d'Astro
  // csp: {
  //   algorithm: "SHA-256",
  //   directives: [
  //     "default-src 'self'",
  //     "img-src 'self' data:",
  //     "font-src 'self'",
  //     "connect-src 'self'",
  //     "frame-ancestors 'none'",
  //     "upgrade-insecure-requests",
  //   ],
  // },

  integrations: [sitemap(), mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
})