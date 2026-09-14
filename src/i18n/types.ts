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

export const ACTIVE_LOCALES = ['en', 'tr', 'nl'] as const;
export const PLACEHOLDER_LOCALES = ['de', 'fr', 'es', 'it', 'bg', 'ku'] as const;
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

export interface TelemetryLine {
  label: string;
  tone: 'live' | 'planned';
}

export type FeatureStatus = 'live' | 'roadmap' | 'roadmap_soon';

export interface FeatureItem {
  status: FeatureStatus;
  title: string;
  body: string;
  /** Optional one-line italic micro-note under the body */
  note?: string;
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
    connect: string;
    login: string;
    tryFree: string;
    logoTodo: string;
    langLabel: string;
    langSoon: string;
    menu: string;
    primaryAria: string;
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
    mockupZoneTag: string;
    jobs: [
      { id: string; route: string; status: string; tone: 'live' | 'idle' },
      { id: string; route: string; status: string; tone: 'live' | 'idle' },
    ];
    phonePushTitle: string;
    phonePushSub: string;
    scenarios: TickerScenario[];
  };
  excelStrip: {
    headline: string;
    points: [string, string, string];
    ariaLabel: string;
  };
  stats: {
    ariaLabel: string;
    zones: { value: number; label: string };
    coverage: { value: number; decimals: number; label: string; suffix: string };
    cities: { value: number; label: string };
    tariffs: { label: string };
  };
  mobileBridge: {
    title: string;
    subtitle: string;
    body: string;
    liveBadge: string;
    appStore: string;
    playStore: string;
    playStoreSoon: string;
    cycleLabel: string;
    steps: [string, string, string, string, string];
  };
  screenshotStrip: {
    title: string;
    subtitle: string;
    closeLabel: string;
    scenes: {
      office: { badge: string; caption: string };
      pocket: { badge: string; caption: string };
      vehicle: { badge: string; caption: string };
    };
  };
  connect: {
    navCta: string;
    sectionTitle: string;
    sectionBody: string;
    sectionLink: string;
    pageTitle: string;
    pageBadge: string;
    pageIntro: string;
    valueProp: string;
    corridorTitle: string;
    corridorBody: string;
    sampleLabel: string;
    sampleRequestLabel: string;
    sampleResponseLabel: string;
    sampleRequest: string;
    sampleResponse: string;
    formTitle: string;
    formBody: string;
    name: string;
    email: string;
    company: string;
    scenario: string;
    submit: string;
    orEmail: string;
    mailtoSubject: string;
    todoBackend: string;
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
    tabsAria: string;
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
    telemetry: {
      compliance: TelemetryLine[];
      routing: TelemetryLine[];
      benelux: TelemetryLine[];
      fleet: TelemetryLine[];
      analytics: TelemetryLine[];
      b2b: TelemetryLine[];
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
    offerUnitText: string;
    comparePriceLabel: string;
    compareVehiclesLabel: string;
    compareFocusLabel: string;
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
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
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
    legal: string;
    contact: string;
    features: string;
    pricing: string;
    signup: string;
    earlyAccess: string;
    connect: string;
    privacy: string;
    terms: string;
    imprint: string;
    dpa: string;
    subprocessors: string;
    cookiePreferences: string;
    copyright: string;
    rights: string;
  };
  consent: {
    message: string;
    functionalNote: string;
    accept: string;
    reject: string;
    preferences: string;
    close: string;
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
