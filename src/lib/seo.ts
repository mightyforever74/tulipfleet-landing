import { ACTIVE_LOCALES } from '../i18n/types';
import { localizePath } from './env';

export const HREFLANG_BY_LOCALE = {
  en: 'en-US',
  tr: 'tr-TR',
  nl: 'nl-NL',
} as const;

export const DEFAULT_HREFLANG_LOCALE = 'en' as const;

/** NL legal çevirisi gelince geri aç */
export const NL_LEGAL_SLUGS = new Set([
  'privacy',
  'terms',
  'imprint',
  'dpa',
  'subprocessors',
]);

export function pathSlug(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return '';
  return clean.replace(/^\/+|\/+$/g, '');
}

export function isNlLegalPath(pathname: string): boolean {
  const parts = pathname.split('/').filter(Boolean);
  return parts[0] === 'nl' && parts.length === 2 && NL_LEGAL_SLUGS.has(parts[1]);
}

export function isLegalSlug(path: string): boolean {
  return NL_LEGAL_SLUGS.has(pathSlug(path));
}

export function shouldEmitHreflang(opts: {
  locale: string;
  path: string;
  noindex: boolean;
  active: boolean;
}): boolean {
  if (!opts.active || opts.noindex) return false;
  if (opts.locale === 'nl' && isLegalSlug(opts.path)) return false;
  return true;
}

export function hreflangCluster(opts: {
  path: string;
  site: URL;
}): { hreflang: string; href: string }[] {
  const legal = isLegalSlug(opts.path);
  const locales = legal
    ? (['en', 'tr'] as const)
    : ACTIVE_LOCALES;

  const links = locales.map((locale) => ({
    hreflang: HREFLANG_BY_LOCALE[locale],
    href: new URL(localizePath(locale, opts.path), opts.site).href,
  }));

  links.push({
    hreflang: 'x-default',
    href: new URL(localizePath(DEFAULT_HREFLANG_LOCALE, opts.path), opts.site).href,
  });

  return links;
}
