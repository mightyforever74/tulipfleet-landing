import en from './en';
import tr from './tr';
import type { LegalBundle } from './types';

const bundles: Record<string, LegalBundle> = { en, tr };

export function getLegal(locale: string): LegalBundle {
  return bundles[locale] ?? en;
}

export type { LegalBundle, LegalPageContent, LegalSection } from './types';
