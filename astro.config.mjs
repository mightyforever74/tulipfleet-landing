// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { ACTIVE_LOCALES } from './src/i18n/types.ts';
import { isNlLegalPath } from './src/lib/seo.ts';

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
  if (!INDEXABLE_LOCALES.has(locale)) return false;
  // NL legal çevirisi gelince geri aç
  if (isNlLegalPath(pathname)) return false;
  return true;
}

/**
 * Strip leftover nl-NL hreflang pointers to untranslated legal pages.
 * Filter already drops those URLs from the urlset; this keeps clusters clean
 * if a legal loc is reintroduced without updating i18n.
 * NL legal çevirisi gelince geri aç
 * @param {import('@astrojs/sitemap').SitemapItem} item
 */
function serializeSitemapItem(item) {
  if (!item.links?.length) return item;
  const links = item.links.filter((link) => !isNlLegalPath(new URL(link.url).pathname));
  if (links.length <= 1) return { ...item, links: undefined };
  return { ...item, links };
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: SITE,
  trailingSlash: 'always',
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
      serialize: serializeSitemapItem,
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
