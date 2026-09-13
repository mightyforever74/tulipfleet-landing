export type LocaleCode =
  | 'en'
  | 'tr'
  | 'de'
  | 'nl'
  | 'fr'
  | 'es'
  | 'it'
  | 'bg'
  | 'ku';

export interface LocaleOption {
  code: LocaleCode;
  /** English label for accessibility */
  name: string;
  /** Display name in that language */
  nativeName: string;
  flag: string;
  status: 'active' | 'coming_soon';
}

/**
 * Single source of truth for the header language switcher.
 * To enable a locale: set status to 'active' and ship dictionary + routes.
 * Coming-soon locales stay visible but disabled (no navigation to empty pages).
 */
export const LOCALES: LocaleOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', status: 'active' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', status: 'active' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', status: 'coming_soon' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', status: 'active' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', status: 'coming_soon' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', status: 'coming_soon' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', status: 'coming_soon' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬', status: 'coming_soon' },
  { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî', flag: '☀️', status: 'coming_soon' },
];

export const LOCALE_STORAGE_KEY = 'tulipfleet-locale';

export const ACTIVE_LOCALE_CODES = LOCALES.filter((l) => l.status === 'active').map(
  (l) => l.code,
);

/** Live ZE-Zone cities shown on the NL map (proven list — do not invent). */
export const LIVE_ZE_CITIES = [
  { id: 'amsterdam', label: 'Amsterdam', x: 48, y: 38 },
  { id: 'rotterdam', label: 'Rotterdam', x: 42, y: 52 },
  { id: 'denhaag', label: 'Den Haag', x: 36, y: 48 },
  { id: 'utrecht', label: 'Utrecht', x: 52, y: 46 },
  { id: 'eindhoven', label: 'Eindhoven', x: 58, y: 68 },
  { id: 'maastricht', label: 'Maastricht', x: 62, y: 88 },
] as const;
