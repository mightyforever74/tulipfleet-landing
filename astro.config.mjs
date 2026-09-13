// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { ACTIVE_LOCALES } from './src/i18n/types.ts';

const SITE = 'https://tulipfleet.com';
/** @type {Set<string>} */
const INDEXABLE_LOCALES = new Set(ACTIVE_LOCALES);

/**
 * Keep /en/ + /tr/ + /nl/ pages only.
 * Drop the root Astro.redirect('/en/') HTML page (already noindex)
 * and coming-soon placeholder locales (de, fr, …).
 * @param {string} page
 */
function includeInSitemap(page) {
  const { pathname } = new URL(page);
  if (pathname === '/') return false;
  const locale = pathname.split('/').filter(Boolean)[0];
  return INDEXABLE_LOCALES.has(locale);
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'de', 'nl', 'fr', 'es', 'it', 'bg', 'ku'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: includeInSitemap,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          tr: 'tr-TR',
          nl: 'nl-NL',
        },
      },
    }),
  ],
});
