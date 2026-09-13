import type { Dictionary } from './types';

const nl: Dictionary = {
  meta: {
    siteName: 'TulipFleet',
    title: 'TulipFleet: Wagenparkbeheer voor NL- en EU-zero-emissieregels',
    description:
      'Zie zero-emissiezonerisico, vrachtwagenheffing vanaf 2026 en chauffeurstatus op één scherm. Voor Nederlandse en EU-logistiekmanagers die klaar zijn met Excel-geschuif.',
    ogLocale: 'nl_NL',
  },
  nav: {
    features: 'Functies',
    pricing: 'Prijzen',
    connect: 'Connect',
    login: 'Inloggen',
    tryFree: 'Probeer gratis',
    logoTodo: 'TODO: replace text logo with brand mark file',
    langLabel: 'Taal',
    langSoon: 'Binnenkort',
    menu: 'Menu',
  },
  hero: {
    badge: '🇪🇺 Klaar voor zero-emissie in NL en de EU',
    title: 'Beheer uw wagenpark in het zero-emissietijdperk',
    subtitle:
      'Zie emissieboetes in Amsterdam, de vrachtwagenheffing vanaf 2026 en hoe uw chauffeurs het op de weg doen. Vanuit één scherm. Het systeem ontwart de regels, u houdt de operatie.',
    ctaTrial: '14 dagen proberen',
    ctaPricing: 'Bereken prijs',
    mockupTitle: 'TulipFleet Live Dispatch',
    mockupLive: 'Live demo',
    mockupJobs: 'Opdrachten',
    mockupDisclaimer: 'Representatieve weergave',
    mockupZoneTag: 'Amsterdam ZE',
    jobs: [
      {
        id: 'TLP-0142',
        route: 'Rotterdam → Utrecht',
        status: 'Onderweg',
        tone: 'live',
      },
      {
        id: 'TLP-0143',
        route: 'Levering Leiden',
        status: 'Toegewezen',
        tone: 'idle',
      },
    ],
    phonePushTitle: '🔔 Nieuwe opdracht',
    phonePushSub: '● Geaccepteerd → live volgen',
    scenarios: [
      {
        id: 'a',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Route Leiden 28km · Euro-6 · Heffing: €5.10',
        heffingAmount: '€5.10',
        zoneLabel: 'ZE-zone',
        zoneLine: 'Amsterdam zero-emissiezone: OK',
        zoneTone: 'ok',
      },
      {
        id: 'b',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Zelfde route · elektrisch · Heffing: €1.04',
        heffingAmount: '€1.04',
        zoneLabel: 'ZE-zone',
        zoneLine: 'Rotterdam zero-emissiezone: ontheffing',
        zoneTone: 'exempt',
      },
      {
        id: 'c',
        heffingLabel: 'ZE-zone',
        heffingLine: 'Utrecht Centrum · Euro-5',
        zoneLabel: 'ZE-zone',
        zoneLine: 'WAARSCHUWING: overtreding zero-emissiezone',
        zoneTone: 'alert',
      },
    ],
  },
  excelStrip: {
    headline: 'Gooi uw Excel niet weg. Neem uw bestaande werkwijze mee naar TulipFleet.',
    points: ['Eenvoudige migratie', 'Wij verhuizen de data met u mee', 'Snel ingewerkt'],
  },
  stats: {
    zones: { value: 21, label: 'Actieve zero-emissiezones' },
    coverage: { value: 148.8, decimals: 1, label: 'Dekking', suffix: 'km²' },
    cities: { value: 6, label: 'Steden live gekoppeld' },
    tariffs: { label: 'Period-1-heffingstarieven geladen' },
  },
  mobileBridge: {
    title: 'Plan op kantoor, voer uit op de weg',
    subtitle: 'Aansturing op uw bureau, uitvoering in de broekzak van uw chauffeur.',
    body: "TulipFleet werkt aan twee kanten: wijs een opdracht toe vanuit het panel en die landt direct op de telefoon van uw chauffeur. Voertuigen op de live kaart, meldingen op zak. Wijs onderweg met één tik een opdracht toe.",
    liveBadge: 'Live op iOS + Android',
    storesTodo: 'TODO: [MUSTERI DOLDURACAK: magaza linkleri]',
    appStore: 'Download in de App Store',
    playStore: 'Ontdek het op Google Play',
    cycleLabel: 'Live operatiecyclus',
    steps: [
      'Opdracht toewijzen',
      'Push binnen, chauffeur accepteert',
      'Live volgen',
      'Afgeleverd',
      'Rapport verzegeld',
    ],
  },
  screenshotStrip: {
    title: 'Echte productschermen, van kantoor tot broekzak',
    subtitle:
      'Van kantoorpanelen tot de broekzak van de chauffeur: live schermen van elk moment in de operatie.',
    closeLabel: 'Sluiten',
    scenes: {
      office: {
        badge: 'KANTOOR, COMMANDOCENTRUM',
        caption: 'Wijs opdrachten toe en volg live, vanaf kantoor.',
      },
      pocket: {
        badge: 'BROEKZAK CHAUFFEUR',
        caption: 'Landt in de broekzak van de chauffeur, wordt geaccepteerd.',
      },
      vehicle: {
        badge: 'VOERTUIGHARDWARE',
        caption: 'Live telemetrie en locatie vanuit het voertuig.',
      },
    },
  },
  connect: {
    navCta: 'Developers en ERP: TulipFleet Connect',
    sectionTitle: 'TulipFleet Connect voor ERP- en TMS-teams',
    sectionBody:
      'REST + webhooks voor zero-emissiezonechecks, Vrachtwagenheffing-kosten en opdracht- en wagenparkdata. Op de roadmap, onder contract binnenkort live.',
    sectionLink: 'Bekijk Connect',
    pageTitle: 'TulipFleet Connect',
    pageBadge: 'Roadmap, binnenkort',
    pageIntro:
      'Connect is onze B2B-API-laag voor teams die al een ERP of TMS draaien en naleving plus kostensignalen naast hun eigen workflows nodig hebben.',
    valueProp:
      'REST + webhook-API voor uw ERP/TMS: zero-emissiezonevragen, Vrachtwagenheffing-kostenberekening, en opdracht- en wagenparkdata.',
    corridorTitle: 'Nederland nu. Daarna de corridor Benelux-Duitsland.',
    corridorBody:
      'Onze compliance-engine is per land modulair: in Nederland zijn zero-emissiezonechecks op NDW-data en de Vrachtwagenheffing-kostenberekening Live. Dezelfde engine moet uitbreiden naar Belgische LEZ (Brussel / Antwerpen / Gent) en Duitse Umweltzone-gebiedschecks, zodat de regels van het juiste land automatisch ingrijpen vanaf uw routecoördinaten. Kostenzicht op Belgische Viapass en Duitse LKW-Maut (aparte OBU-systemen) staat op de roadmap. We beweren niet die tol nu te berekenen.',
    sampleLabel: 'Voorbeelddesign, wordt bij lancering vastgelegd',
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
    formTitle: 'Vraag Connect-toegang aan',
    formBody:
      'Vertel uw ERP/TMS-setup en wat u als eerste wilt bevragen. Wij reageren per e-mail. Geen nepdocs, geen nepsleutels.',
    name: 'Uw naam',
    email: 'Zakelijke e-mail',
    company: 'Bedrijf',
    scenario: 'Toepassing (ERP/TMS + wat u nodig hebt)',
    submit: 'Open e-mail',
    orEmail: 'Of mail direct: info@tulipfleet.com',
    mailtoSubject: 'TulipFleet Connect vroege toegang',
    todoBackend:
      'TODO: Replace mailto draft with POST endpoint when Connect waitlist API is ready.',
  },
  features: {
    sectionTitle: 'Wat u vandaag krijgt, en wat erna komt',
    sectionSubtitle:
      'Functies die u nu gebruikt, en wat we daarna bouwen. Helder, zonder opsmuk.',
    roadmapNote:
      'Roadmap-functies krijgen prioriteit en gaan live binnen de contractscope.',
    live: 'Live',
    roadmap: 'Roadmap',
    roadmapSoon: 'Roadmap, binnenkort',
    mapAria: 'Kaart van Nederland met live zero-emissiezonesteden',
    panel: {
      zoneCheck: 'ZE-zonecheck',
      heffingDistance: 'Heffing (afstand + klasse)',
      advisorySealed: 'Advies, reden vastgelegd',
      weightClass: 'Gewichtsklasse',
      bridgeAware: 'Bruglimiet meegenomen',
      tariffMapped: 'Tarief gekoppeld',
      vehicle: 'Voertuig',
      driver: 'Chauffeur',
      driverStatus: 'Op rit',
      iotBox: 'ESP32 IoT-box',
      analyticsSummary: 'Opdrachten, brandstof, CO₂',
      apiHonest: 'Geen nepsleutels. Geen live tellers.',
      routeRows: ['Route A, score 92', 'Route B, score 84', 'Route C, score 71'],
    },
    telemetry: {
      compliance: [
        { label: 'NDW ZE-zonefeed: synchroon', tone: 'live' },
        { label: 'Period-1-tarieven: geladen', tone: 'live' },
        { label: '21 actieve zones: gemonitord', tone: 'live' },
      ],
      routing: [
        { label: 'Adviserende planning: actief', tone: 'live' },
        { label: 'Live telemetrie: binnen', tone: 'live' },
      ],
      benelux: [
        { label: 'Gewichtsklasse-koppeling: live', tone: 'live' },
        { label: 'Historische / bruglimieten: gepland', tone: 'planned' },
      ],
      fleet: [
        { label: 'Wagenpark- en opdrachtbeheer: live', tone: 'live' },
        { label: 'Chauffeursapp: live', tone: 'live' },
      ],
      analytics: [
        { label: 'Operatieboards: live', tone: 'live' },
        { label: 'Zelfservice-abonnement: live', tone: 'live' },
      ],
      b2b: [
        { label: 'TulipFleet Connect API: gepland', tone: 'planned' },
        { label: 'ERP / TMS-webhooks: gepland', tone: 'planned' },
      ],
    },
    tabs: [
      {
        id: 'compliance',
        label: 'NL- en EU-naleving',
        illustrationHint: 'ZE-zonekaart + heffingkosten',
        items: [
          {
            status: 'live',
            title: 'Vrachtwagenheffing-kostenengine',
            body: 'NL-vrachtwagenheffing vanaf juli 2026: afstand + voertuigklasse, met officiële Period-1-tarieven.',
          },
          {
            status: 'live',
            title: 'Zero-emissiezones',
            body: '20 steden / 21 actieve zones. Checks en ontheffing via officiële NDW-data.',
            note: 'U bent aangesloten op de actuele zero-emissiezone- en heffingdata van Nederland.',
          },
          {
            status: 'roadmap',
            title: 'Uitbreiding corridor Benelux-DE',
            body: 'Daarna BE LEZ + DE Umweltzone-gebiedschecks. Kostenzicht alleen gepland voor Viapass/LKW-Maut.',
          },
          {
            status: 'roadmap',
            title: 'Groene routing en CO₂-voetafdruk',
            body: 'CO₂-inzicht nu, CSRD-rapportage later. Stapsgewijs naar ESG.',
          },
          {
            status: 'roadmap',
            title: 'EV-actieradius en laadplanning',
            body: 'Actieradius- en laadplanning die rekening houdt met het Nederlandse net.',
          },
        ],
      },
      {
        id: 'routing',
        label: 'Slimme route en planning',
        illustrationHint: 'Adviserend planningsbord',
        items: [
          {
            status: 'live',
            title: 'Adviserende planning',
            body: 'Gescoorde voorstellen op afstand, tijdvensters, zero-emissiezone/heffing en lading, met conflictchecks en goedkeuringen met redenstempel. AI besluit niet voor u; het legt de beste keuze voor.',
          },
          {
            status: 'live',
            title: 'Live wagenpark volgen',
            body: 'Realtime positie en opdrachtstatus via MQTT/IoT-telemetrie.',
          },
          {
            status: 'roadmap',
            title: 'Geavanceerde ritoptimalisatie',
            body: 'Optimalisatie met meerdere stops en SLA, binnen het advieskader, wordt uitgerold.',
          },
          {
            status: 'roadmap',
            title: 'Dynamisch herplannen en live ETA',
            body: 'Herplannen overdag en live ETA’s staan op de roadmap.',
          },
        ],
      },
      {
        id: 'benelux',
        label: 'Nederland en Benelux',
        illustrationHint: 'Routing met gewichtsklasse',
        items: [
          {
            status: 'live',
            title: 'Gewichtsklasse meegenomen',
            body: 'Tarief- en nalevingskoppeling per gewichtsklasse van het voertuig.',
          },
          {
            status: 'roadmap',
            title: 'Gewichtslimieten binnenstad, brug en kade',
            body: 'Routing die limieten in historische kernen, op bruggen en kades respecteert, komt eraan.',
          },
          {
            status: 'roadmap',
            title: 'Rij- en rusttijden en Smart Tachograph V2',
            body: 'Toezicht op rij- en rusttijden (HOS) en Smart Tachograph V2 is gepland.',
          },
        ],
      },
      {
        id: 'fleet',
        label: 'Wagenpark, voertuig en chauffeur',
        illustrationHint: 'Wagenparkkaarten + IoT-box',
        items: [
          {
            status: 'live',
            title: 'Wagenpark- en opdrachtbeheer',
            body: 'Toewijzen → accepteren → afronden, met voertuig- en chauffeurkaarten.',
          },
          {
            status: 'live',
            title: 'Chauffeursapp',
            body: 'Live op iOS en Android. Opdrachtflow met pushmeldingen.',
          },
          {
            status: 'live',
            title: 'Brandstof- en kostenregistratie',
            body: 'Houd brandstof en kosten bij naast de opdrachten die ze veroorzaakten.',
          },
          {
            status: 'live',
            title: 'Geïntegreerde hardware (IoT)',
            body: 'Onze eigen ESP32-voertuigbox: GPS + accelerometer-telemetrie over TLS-MQTT. Niet alleen software: hardware en software als één stack.',
          },
          {
            status: 'roadmap',
            title: 'Chauffeurscoaching en veiligheidsscore',
            body: 'Specificatie en hardware klaar: hard remmen en uitwijkmanoeuvres uit accelerometerdata. Stuur op veiligheid met bewijs.',
          },
          {
            status: 'roadmap',
            title: 'Koelketen / reefer-sensormonitoring',
            body: 'Monitoring van reefersensoren komt eraan.',
          },
          {
            status: 'roadmap',
            title: 'Contractvervoerders',
            body: 'Ondersteuning voor contractvervoerders is gepland binnen de roadmap.',
          },
        ],
      },
      {
        id: 'analytics',
        label: 'Operatie-analyse en documenten',
        illustrationHint: 'Operatiedashboardgrafieken',
        items: [
          {
            status: 'live',
            title: 'Operatieboards',
            body: 'Wagenparkcijfers plus grafieken voor opdrachten, brandstof en CO₂.',
          },
          {
            status: 'live',
            title: 'Zelfservice-abonnement',
            body: 'Quotabeheer, aanvraag-goedkeuringsflow en 14 dagen gratis proberen.',
          },
          {
            status: 'roadmap',
            title: 'Cost-to-serve-analyse',
            body: 'Cost-to-serve-analyse staat op de roadmap.',
          },
          {
            status: 'roadmap',
            title: 'Digitale documenten en e-CMR',
            body: 'Digitale documenten en e-CMR-herkenning komen eraan.',
          },
        ],
      },
      {
        id: 'b2b',
        label: 'B2B-enterprisekoppeling',
        illustrationHint: 'API en webhooks',
        items: [
          {
            status: 'roadmap_soon',
            title: 'TulipFleet Connect B2B API',
            body: 'REST- en webhook-infrastructuur voor ERP/TMS. Binnenkort. Geen nepsleutels, geen neptellers.',
          },
        ],
      },
    ],
  },
  pricing: {
    sectionTitle: 'Prijzen die meegroeien met uw wagenpark',
    sectionSubtitle: 'Kies een aantal voertuigen. Wij raden het juiste pakket aan. Geen verrassingen.',
    vehiclesLabel: 'Aantal voertuigen',
    yearlyLabel: 'Jaarlijks factureren',
    yearlyBadge: '10% korting per jaar',
    perVehicleMonth: '/voertuig/maand',
    recommended: 'Aanbevolen',
    mostPopular: 'Meest gekozen',
    volumeNote: 'Tot €35 bij volume',
    cta: 'Start 14 dagen proef',
    monthlyEstimate: 'Geschatte maandprijs',
    compareTitle: 'Vergelijk pakketten',
    plans: {
      starter: {
        name: 'Starter',
        blurb: '1-5 voertuigen · basis volgen',
        features: ['Basis live volgen', 'Chauffeursapp', 'Opdracht toewijzen → afronden'],
      },
      professional: {
        name: 'Professional',
        blurb: '6-20 voertuigen · heffing en routing',
        features: [
          'Alles uit Starter',
          'Vrachtwagenheffing-kostenengine',
          'Adviserende planning en routing',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        blurb: '20+ voertuigen · ZE-zone en B2B API',
        features: [
          'Alles uit Professional',
          'Naleving zero-emissiezone',
          'Voorrang op TulipFleet Connect B2B API',
          'Voorrang bij onboarding',
        ],
      },
    },
    featureLabels: {
      basic_tracking: 'Basis volgen',
      toll_routing: 'Heffing en routing',
      ze_zone: 'Naleving zero-emissiezone',
      b2b_api: 'B2B API',
    },
  },
  trialCta: {
    title: 'Veertien dagen. Uw wagenpark. Zonder creditcard.',
    body: 'Open een proef, koppel een paar voertuigen en zie zero-emissiezone- en heffingcijfers naast de opdrachten. Voordat u tekent.',
    button: 'Start gratis proef',
  },
  signup: {
    title: 'Start uw 14 dagen gratis proef',
    subtitle: 'Bedrijfsaccount in een paar velden. Wij mailen de vervolgstappen.',
    company: 'Bedrijfsnaam',
    adminName: 'Uw naam',
    adminEmail: 'Zakelijke e-mail',
    phone: 'Telefoon',
    phoneOptional: 'optioneel',
    vehicles: 'Geschat aantal voertuigen',
    submit: 'Account aanmaken',
    loading: 'Uw bedrijfsaccount wordt klaargezet, een paar seconden…',
    successTitle: 'Uw account staat open.',
    successBody:
      'Check uw e-mail en stel daarna uw wachtwoord in via Wachtwoord vergeten op het inlogscherm.',
    successCta: 'Naar inloggen',
    error409:
      'Er bestaat al een account met dit e-mailadres. Log in of reset uw wachtwoord.',
    error429: 'Te veel pogingen in korte tijd. Wacht even en probeer opnieuw.',
    errorGeneric: 'Er ging iets mis aan onze kant. Probeer het zo opnieuw.',
    validationCompany: 'Bedrijfsnaam heeft minstens 2 tekens nodig.',
    validationName: 'Uw naam heeft minstens 2 tekens nodig.',
    validationEmail: 'Vul een geldig zakelijk e-mailadres in.',
    privacyBefore: 'Door te versturen gaat u akkoord met de ',
    privacyLink: 'privacyverklaring',
    privacyAfter: '.',
  },
  earlyAccess: {
    title: 'Het webpanel is in vroege toegang. We doen een live demo voor u.',
    body: 'Het dispatcher-webpanel draait bij geselecteerde klanten. Openbare toegang is dichtbij. Reserveer uw plek, of plan een doorloop met ons.',
    name: 'Uw naam',
    email: 'E-mail',
    company: 'Bedrijf',
    vehicles: 'Wagenparkgrootte',
    message: 'Wat wilt u zien?',
    submit: 'Open e-mail',
    orEmail: 'Of mail direct: info@tulipfleet.com',
    trialCta: 'Liever niet wachten? Probeer het zelf →',
    trialLink: '14 dagen proberen',
    mailtoSubject: 'TulipFleet vroege toegang / demoverzoek',
    todoBackend:
      'TODO: Replace mailto draft submit with POST endpoint when early-access API is ready.',
  },
  footer: {
    tagline: 'Wagenparksoftware voor zero-emissielogistiek in NL en de EU.',
    product: 'Product',
    company: 'Bedrijf',
    legal: 'Juridisch',
    contact: 'Contact',
    features: 'Functies',
    pricing: 'Prijzen',
    signup: 'Gratis proef',
    earlyAccess: 'Vroege toegang',
    connect: 'Connect',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    imprint: 'Colofon',
    dpa: 'DPA',
    subprocessors: 'Subverwerkers',
    cookiePreferences: 'Cookies',
    copyright: '© 2026 TulipFleet - Fleet Management System',
    rights: 'Alle rechten voorbehouden.',
  },
  consent: {
    message:
      'We willen cookies alleen gebruiken om te zien hoe de site wordt gebruikt. De keuze is aan u.',
    functionalNote:
      'Strikt noodzakelijke (functionele) cookies zijn hier nauwelijks aanwezig. Dat houden we bewust klein.',
    accept: 'Akkoord',
    reject: 'Weigeren',
    preferences: 'Cookievoorkeuren',
    close: 'Sluiten',
  },
  placeholder: {
    title: 'Deze taal volgt binnenkort',
    body: 'We werken aan dit locale. Engels en Turks zijn nu beschikbaar.',
    back: 'Terug naar Engels',
  },
  common: {
    currency: 'EUR',
  },
};

export default nl;
