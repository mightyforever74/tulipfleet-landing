export type Locale =
  | 'en'
  | 'tr'
  | 'de'
  | 'nl'
  | 'fr'
  | 'es'
  | 'it'
  | 'bg'
  | 'ku';

export const ACTIVE_LOCALES = ['en', 'tr'] as const;
export const PLACEHOLDER_LOCALES = ['de', 'nl', 'fr', 'es', 'it', 'bg', 'ku'] as const;
export const ALL_LOCALES: Locale[] = [
  'en',
  'tr',
  'de',
  'nl',
  'fr',
  'es',
  'it',
  'bg',
  'ku',
];

export type FeatureStatus = 'live' | 'roadmap' | 'roadmap_soon';

export interface FeatureItem {
  status: FeatureStatus;
  title: string;
  body: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  items: FeatureItem[];
  illustrationHint: string;
}

export interface TickerScenario {
  id: 'a' | 'b' | 'c';
  heffingLabel: string;
  heffingLine: string;
  /** Amount substring to colour orange — rest stays neutral */
  heffingAmount?: string;
  zoneLabel: string;
  zoneLine: string;
  zoneTone: 'ok' | 'exempt' | 'alert';
}

export interface Dictionary {
  meta: {
    siteName: string;
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    features: string;
    pricing: string;
    login: string;
    tryFree: string;
    logoTodo: string;
    langLabel: string;
    langSoon: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaTrial: string;
    ctaPricing: string;
    mockupTitle: string;
    mockupLive: string;
    mockupJobs: string;
    mockupDisclaimer: string;
    scenarios: TickerScenario[];
  };
  excelStrip: {
    headline: string;
    points: [string, string, string];
  };
  stats: {
    zones: { value: number; label: string };
    coverage: { value: number; decimals: number; label: string; suffix: string };
    cities: { value: number; label: string };
    tariffs: { label: string };
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    roadmapNote: string;
    live: string;
    roadmap: string;
    roadmapSoon: string;
    tabs: FeatureTab[];
    mapAria: string;
    panel: {
      zoneCheck: string;
      heffingDistance: string;
      advisorySealed: string;
      weightClass: string;
      bridgeAware: string;
      tariffMapped: string;
      vehicle: string;
      driver: string;
      driverStatus: string;
      iotBox: string;
      analyticsSummary: string;
      apiHonest: string;
      routeRows: [string, string, string];
    };
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    vehiclesLabel: string;
    yearlyLabel: string;
    yearlyBadge: string;
    perVehicleMonth: string;
    recommended: string;
    mostPopular: string;
    volumeNote: string;
    cta: string;
    monthlyEstimate: string;
    compareTitle: string;
    plans: {
      starter: { name: string; blurb: string; features: string[] };
      professional: { name: string; blurb: string; features: string[] };
      enterprise: { name: string; blurb: string; features: string[] };
    };
    featureLabels: Record<string, string>;
  };
  trialCta: {
    title: string;
    body: string;
    button: string;
  };
  signup: {
    title: string;
    subtitle: string;
    company: string;
    adminName: string;
    adminEmail: string;
    phone: string;
    phoneOptional: string;
    vehicles: string;
    submit: string;
    loading: string;
    successTitle: string;
    successBody: string;
    successCta: string;
    error409: string;
    error429: string;
    errorGeneric: string;
    validationCompany: string;
    validationName: string;
    validationEmail: string;
  };
  earlyAccess: {
    title: string;
    body: string;
    name: string;
    email: string;
    company: string;
    vehicles: string;
    message: string;
    submit: string;
    orEmail: string;
    trialCta: string;
    trialLink: string;
    mailtoSubject: string;
    /** TODO: Replace mailto draft with POST endpoint when backend is ready. */
    todoBackend: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    contact: string;
    features: string;
    pricing: string;
    signup: string;
    earlyAccess: string;
    rights: string;
  };
  placeholder: {
    title: string;
    body: string;
    back: string;
  };
  common: {
    currency: string;
  };
}
