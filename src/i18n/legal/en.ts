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
  deleteAccount: {
    title: 'Account and data deletion',
    description: 'How to delete your TulipFleet account and the personal data linked to it.',
    intro:
      'This page explains how users of the TulipFleet mobile app (drivers and fleet managers) can request deletion of their account and associated personal data, what is deleted, what we must keep, and how long it takes.',
    sections: [
      {
        heading: '1. Who this applies to',
        paragraphs: [
          'TulipFleet is a business (B2B) fleet-management service. Driver and manager accounts are created under a company workspace administered by that company. You can request deletion yourself, or your company administrator can request it on your behalf.',
        ],
      },
      {
        heading: '2. How to request deletion',
        paragraphs: [
          'Send an email from the address registered to your account with the subject line “Account deletion”:',
        ],
        list: [
          'info@tulipfleet.com (primary) or privacy@tulipfleet.com',
          'Include: your account email, your company name, and whether you want the whole account deleted or only specific data (see section 4).',
          'We confirm receipt within 5 business days and may ask for a verification step to make sure the request comes from the account holder.',
        ],
      },
      {
        heading: '3. What is deleted',
        paragraphs: ['When an account is deleted we remove or irreversibly anonymise:'],
        list: [
          'Your profile (name, email, phone, language and app settings)',
          'Login credentials and session tokens',
          'Push-notification tokens and device identifiers linked to your login',
          'Your association with vehicle location history, tasks, fuel entries and alerts — those records are anonymised so they can no longer be linked to you',
        ],
        callout:
          'Vehicle location (GPS) data is already deleted automatically after 7 days, independent of any request.',
      },
      {
        heading: '4. What we keep, and why',
        paragraphs: [
          'Some records must be retained for the company that owns the workspace or by law, in anonymised or aggregated form:',
        ],
        list: [
          'Operational fleet records that belong to the company (trip summaries, task history, fuel totals) — kept without any personal identifier',
          'Invoicing and accounting records — up to 7 years under Dutch tax law',
          'Security logs required to investigate abuse — up to 90 days',
        ],
      },
      {
        heading: '5. Timeline',
        paragraphs: [
          'Full deletion is completed within 30 days of a verified request. Backups that still contain the data are overwritten within a further 30 days. You receive a confirmation email when deletion is complete.',
        ],
      },
      {
        heading: '6. Deleting data without deleting the account',
        paragraphs: [
          'If you want to keep your account but remove specific data (for example fuel entries or your phone number), state this in your request. Your rights under GDPR articles 15–21 (access, rectification, erasure, restriction, portability, objection) apply in full — see our Privacy Policy.',
        ],
      },
      {
        heading: '7. Contact',
        paragraphs: ['info@tulipfleet.com', 'privacy@tulipfleet.com'],
      },
    ],
  },
};

export default en;
