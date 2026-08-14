import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    siteName: 'TulipFleet',
    title: 'TulipFleet — Fleet management for NL & EU zero-emission rules',
    description:
      'See ZE-Zone risk, 2026 truck toll costs, and driver status on one screen. Built for Dutch and EU logistics managers who are done juggling Excel.',
    ogLocale: 'en_US',
  },
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    connect: 'Connect',
    login: 'Log in',
    tryFree: 'Try free',
    logoTodo: 'TODO: replace text logo with brand mark file',
    langLabel: 'Language',
    langSoon: 'Soon',
  },
  hero: {
    badge: '🇪🇺 NL & EU Zero-Emission Compliance Ready',
    title: 'Run your fleet in Europe’s zero-emission era',
    subtitle:
      'See Amsterdam emission fines, 2026 truck toll charges, and how your drivers are doing on the road — from one screen. Let the system handle the rule maze so you can run the operation.',
    ctaTrial: '14-day free trial',
    ctaPricing: 'Calculate pricing',
    mockupTitle: 'TulipFleet Live Dispatch',
    mockupLive: 'Live demo',
    mockupJobs: 'Jobs',
    mockupDisclaimer: 'Representative view',
    mockupZoneTag: 'ZE',
    jobs: [
      {
        id: 'TLP-0142',
        route: 'Rotterdam → Utrecht',
        status: 'En route',
        tone: 'live',
      },
      {
        id: 'TLP-0143',
        route: 'Leiden delivery',
        status: 'Assigned',
        tone: 'idle',
      },
    ],
    phonePushTitle: '🔔 New Task Assigned',
    phonePushSub: '● Accepted → Live Tracking',
    scenarios: [
      {
        id: 'a',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Leiden route 28km · Euro-6 · Heffing: €5.10',
        heffingAmount: '€5.10',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'Amsterdam ZE-Zone: OK',
        zoneTone: 'ok',
      },
      {
        id: 'b',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Same route · Electric · Heffing: €1.04',
        heffingAmount: '€1.04',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'Rotterdam ZE-Zone: Exempt (Ontheffing)',
        zoneTone: 'exempt',
      },
      {
        id: 'c',
        heffingLabel: 'ZE-Zone',
        heffingLine: 'Utrecht Centrum · Euro-5',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'ZE-Zone VIOLATION WARNING',
        zoneTone: 'alert',
      },
    ],
  },
  excelStrip: {
    headline: 'Don’t bin your Excel files — bring your existing process into TulipFleet.',
    points: ['Easy migration', 'We move the data with you', 'Fast adaptation'],
  },
  stats: {
    zones: { value: 21, label: 'Active ZE-Zones' },
    coverage: { value: 148.8, decimals: 1, label: 'Coverage', suffix: 'km²' },
    cities: { value: 6, label: 'Cities live integrated' },
    tariffs: { label: 'Period-1 toll tariffs loaded' },
  },
  mobileBridge: {
    title: 'Office to field, live: command centre & mobile field bridge',
    body: 'In B2B fleet management, don’t leave your strongest card in your pocket. TulipFleet isn’t only a desktop product — it’s a mobile bridge that stays alive between your office and the field, 24/7. With mobile admin functions, at your desk or on the road: watch every vehicle on the live map, see operational alerts (exception notifications) and job distribution, and even assign a new job from your phone in one tap.',
    advisory:
      'Run jobs through TulipFleet’s advisory filters in the dispatcher panel. See suggested routes and recommendations with their reasons, pick what fits, and watch the outcome live. The final call stays with you.',
    liveBadge: 'Live on iOS + Android',
    storesTodo: 'TODO: [MUSTERI DOLDURACAK: magaza linkleri]',
    appStore: 'Download on the App Store',
    playStore: 'Get it on Google Play',
    cycleLabel: 'Live operations loop',
    steps: [
      'Assign from dispatcher',
      'Push to the driver’s phone',
      'Job accepted',
      'Track on the live map',
      'Delivery completed',
      'Sealed end-of-job report',
    ],
  },
  screenshotStrip: {
    title: 'Real product screens — from office to pocket',
    subtitle: 'Captured from the live TulipFleet apps. No stock dashboards.',
    placeholderTodo: 'TODO: [MUSTERI DOLDURACAK: gorsel+caption]',
  },
  connect: {
    navCta: 'Developers & ERP — TulipFleet Connect',
    sectionTitle: 'TulipFleet Connect for ERP / TMS teams',
    sectionBody:
      'REST + Webhooks for ZE-Zone checks, Vrachtwagenheffing cost, and job/fleet data — on the roadmap, shipping soon under contract.',
    sectionLink: 'See Connect early access',
    pageTitle: 'TulipFleet Connect',
    pageBadge: 'Roadmap — soon',
    pageIntro:
      'Connect is our B2B API layer for teams that already run an ERP or TMS and need compliance + cost signals next to their own workflows.',
    valueProp:
      'REST + Webhook API for your ERP/TMS: ZE-Zone compliance queries, Vrachtwagenheffing cost calculation, and job/fleet data.',
    corridorTitle: 'Netherlands today. Benelux–Germany corridor next.',
    corridorBody:
      'Our compliance engine is country-modular by design: today in the Netherlands, ZE-Zone checks on NDW data and Vrachtwagenheffing cost calculation are Live. The same engine is planned to expand to Belgium LEZ (Brussels / Antwerp / Ghent) and Germany Umweltzone area checks — so the right country’s rules engage automatically from your route coordinates. Cost visibility for Belgium Viapass and Germany LKW-Maut (separate OBU-based systems) is on the roadmap; we do not claim to calculate those tolls today.',
    sampleLabel: 'Sample design — will be finalised at launch',
    sampleRequest: `POST /v1/compliance/ze-zone-check
Authorization: Bearer <token>
Content-Type: application/json

{
  "vehicle_id": "NL-42-TF",
  "destination": { "lat": 52.0907, "lon": 5.1214 }
}`,
    sampleResponse: `{
  "zone": "Utrecht Centrum",
  "status": "exemption_required",
  "heffing_estimate_eur": 5.10
}`,
    formTitle: 'Request Connect early access',
    formBody:
      'Tell us your ERP/TMS setup and what you want to query first. We’ll follow up by email — no fake docs, no fake keys.',
    name: 'Your name',
    email: 'Work email',
    company: 'Company',
    scenario: 'Use case (ERP/TMS + what you need)',
    submit: 'Open email draft',
    orEmail: 'Or write us directly: info@tulipfleet.com',
    mailtoSubject: 'TulipFleet Connect early access',
    todoBackend:
      'TODO: Replace mailto draft with POST endpoint when Connect waitlist API is ready.',
  },
  features: {
    sectionTitle: 'What you get today — and what’s next',
    sectionSubtitle:
      'Live features are in production. Roadmap items are planned; we never pretend they’re shipping today.',
    roadmapNote:
      'Roadmap features are prioritised and rolled out under contract scope.',
    live: 'Live',
    roadmap: 'Roadmap',
    roadmapSoon: 'Roadmap — soon',
    mapAria: 'Netherlands map with live ZE-Zone cities',
    panel: {
      zoneCheck: 'ZE-Zone check',
      heffingDistance: 'Heffing (distance + class)',
      advisorySealed: 'Advisory · reason sealed',
      weightClass: 'Weight class',
      bridgeAware: 'Bridge limit aware',
      tariffMapped: 'Tariff mapped',
      vehicle: 'Vehicle',
      driver: 'Driver',
      driverStatus: 'On job',
      iotBox: 'ESP32 IoT box',
      analyticsSummary: 'Jobs · fuel · carbon summary',
      apiHonest: 'No fake API keys. No live counters.',
      routeRows: ['Route A · score 92', 'Route B · score 84', 'Route C · score 71'],
    },
    tabs: [
      {
        id: 'compliance',
        label: 'NL & EU compliance',
        illustrationHint: 'ZE-Zone map + toll cost',
        items: [
          {
            status: 'live',
            title: 'Vrachtwagenheffing cost engine',
            body: 'NL truck road charge from July 2026 — distance + vehicle class, using official Period-1 tariffs.',
          },
          {
            status: 'live',
            title: 'ZE-Zones',
            body: 'Amsterdam, Rotterdam and 20 Dutch cities / 21 active zones. Checks and ontheffing handling via official NDW national data. You’re connected to the Netherlands’ current ZE-Zone and road-charge data hub.',
          },
          {
            status: 'roadmap',
            title: 'Benelux–DE corridor expansion',
            body: 'BE LEZ + DE Umweltzone area checks (country-modular engine). Cost visibility for separate OBU-based systems (e.g. Viapass, LKW-Maut) is planned on the roadmap — not calculated today.',
          },
          {
            status: 'roadmap',
            title: 'Green routing & CO₂ footprint',
            body: 'Carbon visibility today is planned to grow into CSRD-aligned formal reporting — your ESG journey, step by step.',
          },
          {
            status: 'roadmap',
            title: 'EV range & charging planning',
            body: 'Range and charge planning that respects Dutch grid constraints — being brought online.',
          },
        ],
      },
      {
        id: 'routing',
        label: 'Smart route & dispatch',
        illustrationHint: 'Advisory dispatch board',
        items: [
          {
            status: 'live',
            title: 'Advisory dispatch',
            body: 'Scored suggestions from distance, time windows, ZE-Zone/heffing and load criteria — with conflict checks and reason-stamped approvals. AI doesn’t decide for you; it puts the best call in front of you.',
          },
          {
            status: 'live',
            title: 'Live fleet tracking',
            body: 'Real-time position and job status over MQTT/IoT telemetry.',
          },
          {
            status: 'roadmap',
            title: 'Advanced tour optimisation',
            body: 'Multi-stop, SLA-aware optimisation — inside the Advisory frame — is being rolled out.',
          },
          {
            status: 'roadmap',
            title: 'Dynamic same-day re-routing & live ETA',
            body: 'In-day re-routing and live ETAs are planned for the roadmap.',
          },
        ],
      },
      {
        id: 'benelux',
        label: 'Netherlands & Benelux',
        illustrationHint: 'Weight-class aware routing',
        items: [
          {
            status: 'live',
            title: 'Weight-class awareness',
            body: 'Tariff and compliance mapping by vehicle weight class.',
          },
          {
            status: 'roadmap',
            title: 'Historic city / bridge–quay weight limits',
            body: 'Routing that respects historic-centre and bridge/quay weight limits is being brought online.',
          },
          {
            status: 'roadmap',
            title: 'HOS & Smart Tachograph V2 checks',
            body: 'Driving/rest (HOS) and Smart Tachograph V2 oversight is planned.',
          },
        ],
      },
      {
        id: 'fleet',
        label: 'Fleet, vehicle & driver',
        illustrationHint: 'Fleet cards + IoT box',
        items: [
          {
            status: 'live',
            title: 'Fleet & job management',
            body: 'Assign → accept → complete, with vehicle and driver cards.',
          },
          {
            status: 'live',
            title: 'Driver mobile app',
            body: 'Live on iOS and Android — job flow with push notifications.',
          },
          {
            status: 'live',
            title: 'Fuel & cost records',
            body: 'Keep fuel and cost entries next to the jobs that caused them.',
          },
          {
            status: 'live',
            title: 'Integrated hardware (IoT)',
            body: 'Our own ESP32 vehicle box — GPS + accelerometer telemetry over TLS-MQTT. Not software alone: hardware and software as one stack.',
          },
          {
            status: 'roadmap',
            title: 'Driver coaching & safety score',
            body: 'Spec and hardware ready: hard-brake and swerve analysis from accelerometer data — manage driver safety with evidence.',
          },
          {
            status: 'roadmap',
            title: 'Cold chain / reefer sensor monitoring',
            body: 'Reefer sensor monitoring is being brought online.',
          },
          {
            status: 'roadmap',
            title: 'Contracted carrier support',
            body: 'Support for contracted carriers is planned under roadmap scope.',
          },
        ],
      },
      {
        id: 'analytics',
        label: 'Ops analytics & documents',
        illustrationHint: 'Ops dashboard charts',
        items: [
          {
            status: 'live',
            title: 'Operations boards',
            body: 'Fleet stats plus job / fuel / carbon summary charts.',
          },
          {
            status: 'live',
            title: 'Self-service subscription',
            body: 'Quota management, request–approval flow, and a 14-day free trial.',
          },
          {
            status: 'roadmap',
            title: 'Cost-to-serve analytics',
            body: 'Cost-to-serve analytics is planned for the roadmap.',
          },
          {
            status: 'roadmap',
            title: 'Digital documents & e-CMR recognition',
            body: 'Digital document and e-CMR recognition is being brought online.',
          },
        ],
      },
      {
        id: 'b2b',
        label: 'B2B enterprise connectivity',
        illustrationHint: 'API & webhooks',
        items: [
          {
            status: 'roadmap_soon',
            title: 'TulipFleet Connect B2B API',
            body: 'RESTful & webhook infrastructure for ERP/TMS. Coming soon — no fake keys, no fake counters.',
          },
        ],
      },
    ],
  },
  pricing: {
    sectionTitle: 'Pricing that scales with your fleet',
    sectionSubtitle: 'Pick a vehicle count. We’ll recommend the right plan — no surprises.',
    vehiclesLabel: 'Number of vehicles',
    yearlyLabel: 'Bill yearly',
    yearlyBadge: '10% off on yearly billing',
    perVehicleMonth: '/vehicle/month',
    recommended: 'Recommended for you',
    mostPopular: 'Most popular',
    volumeNote: 'Up to €35 by volume',
    cta: 'Start 14-day free trial',
    monthlyEstimate: 'Estimated monthly',
    compareTitle: 'Compare plans',
    plans: {
      starter: {
        name: 'Starter',
        blurb: '1–5 vehicles · basic tracking',
        features: ['Basic live tracking', 'Driver mobile app', 'Job assign → complete'],
      },
      professional: {
        name: 'Professional',
        blurb: '6–20 vehicles · toll & routing',
        features: [
          'Everything in Starter',
          'Vrachtwagenheffing cost engine',
          'Advisory dispatch & routing',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        blurb: '20+ vehicles · ZE-Zone & B2B API',
        features: [
          'Everything in Professional',
          'ZE-Zone compliance',
          'Priority access to TulipFleet Connect B2B API',
          'Priority onboarding',
        ],
      },
    },
    featureLabels: {
      basic_tracking: 'Basic tracking',
      toll_routing: 'Toll & routing',
      ze_zone: 'ZE-Zone compliance',
      b2b_api: 'B2B API',
    },
  },
  trialCta: {
    title: 'Fourteen days. Your fleet. No credit card theatre.',
    body: 'Open a trial, plug in a few vehicles, and see ZE-Zone and heffing numbers next to the jobs — before you commit.',
    button: 'Start free trial',
  },
  signup: {
    title: 'Start your 14-day free trial',
    subtitle: 'Company account in a few fields. We’ll email you next steps.',
    company: 'Company name',
    adminName: 'Your name',
    adminEmail: 'Work email',
    phone: 'Phone',
    phoneOptional: 'optional',
    vehicles: 'Estimated vehicles',
    submit: 'Create trial account',
    loading: 'Setting up your company account, a few seconds…',
    successTitle: 'Your account is open!',
    successBody:
      "Check your email, then set your password with ‘Forgot password’ on the login screen.",
    successCta: 'Go to login',
    error409:
      'An account with this email already exists. Try logging in or resetting your password.',
    error429: 'Too many attempts in a short time. Please wait a bit and try again.',
    errorGeneric: 'Something went wrong on our side. Please try again in a moment.',
    validationCompany: 'Company name needs at least 2 characters.',
    validationName: 'Your name needs at least 2 characters.',
    validationEmail: 'Please enter a valid work email.',
    privacyBefore: 'By submitting, you accept the ',
    privacyLink: 'Privacy Policy',
    privacyAfter: '.',
  },
  earlyAccess: {
    title: 'Web panel is in early access — let’s do a live demo for you.',
    body: 'The dispatcher web panel is live with selected customers. Public open access is close. Reserve your place in line, or book a walkthrough with us.',
    name: 'Your name',
    email: 'Email',
    company: 'Company',
    vehicles: 'Fleet size',
    message: 'What do you want to see?',
    submit: 'Open email draft',
    orEmail: 'Or write us directly: info@tulipfleet.com',
    trialCta: 'Don’t want to wait? Try it yourself →',
    trialLink: '14-day free trial',
    mailtoSubject: 'TulipFleet early access / demo request',
    todoBackend:
      'TODO: Replace mailto draft submit with POST endpoint when early-access API is ready.',
  },
  footer: {
    tagline: 'Fleet software for NL & EU zero-emission logistics.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    contact: 'Contact',
    features: 'Features',
    pricing: 'Pricing',
    signup: 'Free trial',
    earlyAccess: 'Early access',
    connect: 'Connect',
    privacy: 'Privacy',
    terms: 'Terms',
    imprint: 'Imprint',
    dpa: 'DPA',
    subprocessors: 'Subprocessors',
    cookiePreferences: 'Cookie preferences',
    copyright: '© 2026 TulipFleet — Fleet Management System',
    rights: 'All rights reserved.',
  },
  consent: {
    message:
      'We only want to use cookies to understand how the site is used. The choice is yours.',
    functionalNote:
      'Strictly necessary (functional) cookies are next to none on this site — we keep them minimal on purpose.',
    accept: 'Accept',
    reject: 'Reject',
    preferences: 'Cookie preferences',
    close: 'Close',
  },
  placeholder: {
    title: 'This language is coming soon',
    body: 'We’re preparing this locale. English and Turkish are available today.',
    back: 'Back to English',
  },
  common: {
    currency: 'EUR',
  },
};

export default en;
