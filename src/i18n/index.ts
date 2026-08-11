import en from './en';
import tr from './tr';
import type { Dictionary, Locale } from './types';
import { ACTIVE_LOCALES } from './types';

const dictionaries: Record<string, Dictionary> = { en, tr };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] ?? en;
}

export function isActiveLocale(locale: string): locale is 'en' | 'tr' {
  return (ACTIVE_LOCALES as readonly string[]).includes(locale);
}

export type { Dictionary, Locale };
export { ACTIVE_LOCALES, ALL_LOCALES, PLACEHOLDER_LOCALES } from './types';
