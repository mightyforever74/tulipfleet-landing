import type { LegalBundle } from './types';

/** Skeleton legal copy — company facts use [MUSTERI DOLDURACAK] placeholders. No invented counsel. */
const en: LegalBundle = {
  privacy: {
    title: 'Privacy Policy',
    description:
      'How TulipFleet processes personal data for the public website and trial signup.',
    intro:
      'This page describes how we process personal data when you use tulipfleet.com and related trial signup flows. It is a living document; company identity fields marked below still need customer completion.',
    sections: [
      {
        heading: '1. Data controller',
        paragraphs: [
          '[MUSTERI DOLDURACAK: TulipFleet B.V. / Asir — full legal name, KvK number, registered address, and DPO contact if appointed].',
          'Until those details are filled in, you can reach us at privacy@tulipfleet.com or info@tulipfleet.com.',
        ],
      },
      {
        heading: '2. Hosting',
        paragraphs: [
          'This website and related infrastructure are hosted with Hetzner Online GmbH (Germany — Falkenstein). Processing takes place in the EU under Hetzner’s terms as a processor / hosting provider.',
        ],
      },
      {
        heading: '3. Data we collect',
        paragraphs: [
          'We collect only what we need to run the service you ask for.',
        ],
        list: [
          'Signup form: company name, admin name, work email, phone (optional), estimated vehicle count.',
          'Technical server logs: IP address, timestamp, user-agent — used for security and abuse prevention, kept only as long as operationally necessary.',
        ],
      },
      {
        heading: '4. GPS / location data retention (product)',
        paragraphs: [
          'Where the TulipFleet product processes vehicle location (GPS) data for live tracking, the following retention rule applies.',
        ],
        callout:
          '7-day data retention policy: location data is automatically deleted after 7 days. We do not keep GPS traces beyond that window.',
      },
      {
        heading: '5. Purpose of processing',
        paragraphs: [
          'We process signup data to open a trial account and for operational communication about that account (activation, password reset, support).',
          'We do not sell personal data. Marketing or analytics scripts are only loaded if you grant cookie consent and those tools are explicitly enabled in our configuration (currently off).',
        ],
      },
      {
        heading: '6. Your rights & complaints (AVG / GDPR)',
        paragraphs: [
          'Under AVG articles 15–21 you may request access, rectification, erasure, restriction, portability, and object to certain processing. Contact privacy@tulipfleet.com.',
          'You may also lodge a complaint with the Dutch supervisory authority: Autoriteit Persoonsgegevens (APNL) — https://www.autoriteitpersoonsgegevens.nl/',
        ],
      },
      {
        heading: '7. Contact',
        paragraphs: [
          'privacy@tulipfleet.com (privacy alias — [MUSTERI DOLDURACAK: confirm mailbox is live])',
          'info@tulipfleet.com',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    description: 'Trial and early-access terms for TulipFleet.',
    intro:
      'These terms apply to the public website trial signup and early-access use of TulipFleet. Product contracts for paying customers may add or supersede clauses in a signed order form / DPA.',
    sections: [
      {
        heading: '1. Trial',
        paragraphs: [
          'The free trial lasts 14 days, includes up to 5 vehicles, and carries no payment commitment. When the trial ends, access may stop unless you subscribe.',
        ],
      },
      {
        heading: '2. Early access / “as is”',
        paragraphs: [
          'Parts of the dispatcher web panel are in early access. Features may change. The service is provided “as is” during early access — we work hard to keep it stable, but we do not promise uninterrupted or error-free operation in this phase.',
        ],
      },
      {
        heading: '3. Liability cap',
        paragraphs: [
          'To the extent permitted by Dutch law, TulipFleet’s total liability arising from the service is limited to the subscription fees you paid to us in the 12 months before the claim (12-month fee liability cap). Nothing here limits liability that cannot be limited under mandatory Dutch law.',
        ],
      },
      {
        heading: '4. Governing law',
        paragraphs: [
          'These terms are governed by the laws of the Netherlands. Courts of the Netherlands have jurisdiction, without prejudice to mandatory consumer protections where they apply.',
        ],
      },
      {
        heading: '5. Contact',
        paragraphs: ['info@tulipfleet.com', 'privacy@tulipfleet.com'],
      },
    ],
  },
  imprint: {
    title: 'Imprint / Colophon',
    description: 'Legal identity of the TulipFleet website operator.',
    sections: [
      {
        heading: 'Company details',
        paragraphs: [
          'Legal name: [MUSTERI DOLDURACAK: TulipFleet B.V. / Asir — exact registered name]',
          'KvK (Chamber of Commerce) number: [MUSTERI DOLDURACAK: KvK number]',
          'Registered address: [MUSTERI DOLDURACAK: street, postcode, city, country]',
          'Email: info@tulipfleet.com · privacy@tulipfleet.com',
          'DPO (if appointed): [MUSTERI DOLDURACAK: DPO name / email, or “not appointed”]',
        ],
      },
    ],
  },
  dpa: {
    title: 'Data Processing Agreement (information)',
    description:
      'How enterprise customers obtain a GDPR Art. 28 DPA — no fabricated contract text on this page.',
    intro:
      'This is an information page only. We do not publish a fake or AI-generated DPA body here.',
    sections: [
      {
        heading: 'Enterprise DPA',
        paragraphs: [
          'With our enterprise customers we sign a GDPR Article 28–aligned Data Processing Agreement (DPA).',
          'For DPA requests and the official draft, email privacy@tulipfleet.com.',
          '[MUSTERI DOLDURACAK: PDF link to the official DPA draft once available]',
        ],
      },
    ],
  },
  subprocessors: {
    title: 'Subprocessors',
    description:
      'Factual list of sub-processors used for TulipFleet infrastructure and product services.',
    intro:
      'We only list providers we actually use. Google Maps is not used in the dispatcher/backend layer and is not listed here.',
    sections: [
      {
        heading: 'Current subprocessors',
        paragraphs: [
          'The following organisations process data on our behalf in connection with TulipFleet:',
        ],
        list: [
          'Hetzner Online GmbH (Germany) — Cloud hosting & infrastructure',
          'HERE Technologies (Germany/Netherlands) — Enterprise routing, toll & ZE-Zone calculation',
          'Expo Push Notification Service (United States) — Mobile push relay; transfers under Standard Contractual Clauses (SCCs)',
        ],
      },
      {
        heading: 'Updates',
        paragraphs: [
          'We will update this list when providers change. Mobile map SDK confirmation is tracked separately — [MUSTERI DOLDURACAK / TODO: confirm mobile map SDK; update this list if needed].',
        ],
      },
    ],
  },
};

export default en;
