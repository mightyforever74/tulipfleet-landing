import { PLANS } from './pricing';
import { HREFLANG_BY_LOCALE, isLegalSlug, pathSlug } from './seo';

export type JsonLdKind = 'home' | 'pricing' | 'legal' | 'none';

const SOFTWARE_ID = '#software';
const ORG_ID = '#organization';
const WEBSITE_ID = '#website';

export function jsonLdKind(
  path: string,
  opts: { active: boolean; noindex: boolean },
): JsonLdKind {
  if (!opts.active || opts.noindex) return 'none';
  const slug = pathSlug(path);
  if (slug === '') return 'home';
  if (slug === 'pricing') return 'pricing';
  if (isLegalSlug(path)) return 'legal';
  return 'none';
}

function inLanguageTag(locale: string): string {
  if (locale in HREFLANG_BY_LOCALE) {
    return HREFLANG_BY_LOCALE[locale as keyof typeof HREFLANG_BY_LOCALE];
  }
  return locale;
}

function absoluteId(site: URL, hash: string): string {
  return new URL(hash, site).href;
}

function organizationNode(site: URL) {
  return {
    '@type': 'Organization',
    '@id': absoluteId(site, ORG_ID),
    name: 'TulipFleet',
    url: site.href,
    email: 'info@tulipfleet.com',
    founder: {
      '@type': 'Person',
      name: 'Cem Sahinkaya',
    },
  };
}

function softwareApplication(opts: {
  site: URL;
  canonical: string;
  description: string;
  locale: string;
  unitText: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': absoluteId(opts.site, SOFTWARE_ID),
    name: 'TulipFleet',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    inLanguage: inLanguageTag(opts.locale),
    description: opts.description,
    url: opts.canonical,
    offers: PLANS.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.pricePerVehicle.toFixed(2),
      priceCurrency: 'EUR',
      unitText: opts.unitText,
    })),
    provider: organizationNode(opts.site),
  };
}

function websiteNode(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteId(site, WEBSITE_ID),
    name: 'TulipFleet',
    url: site.href,
    inLanguage: ['en-US', 'tr-TR', 'nl-NL'],
    publisher: { '@id': absoluteId(site, ORG_ID) },
  };
}

export function buildJsonLd(opts: {
  kind: JsonLdKind;
  site: URL;
  canonical: string;
  title: string;
  description: string;
  locale: string;
  unitText: string;
}): Record<string, unknown>[] {
  if (opts.kind === 'none') return [];
  if (opts.kind === 'legal') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: opts.title,
        description: opts.description,
        url: opts.canonical,
        inLanguage: inLanguageTag(opts.locale),
      },
    ];
  }
  const app = softwareApplication(opts);
  if (opts.kind === 'home') return [app, websiteNode(opts.site)];
  return [app];
}
