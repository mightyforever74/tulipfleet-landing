export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** Highlight callout (e.g. GPS retention) */
  callout?: string;
}

export interface LegalPageContent {
  title: string;
  description: string;
  intro?: string;
  sections: LegalSection[];
}

export interface LegalBundle {
  privacy: LegalPageContent;
  terms: LegalPageContent;
  imprint: LegalPageContent;
  dpa: LegalPageContent;
  subprocessors: LegalPageContent;
  deleteAccount: LegalPageContent;
}

export interface ConsentCopy {
  message: string;
  functionalNote: string;
  accept: string;
  reject: string;
  preferences: string;
  close: string;
}

export interface LegalNavCopy {
  legal: string;
  privacy: string;
  terms: string;
  imprint: string;
  dpa: string;
  subprocessors: string;
  cookiePreferences: string;
  copyright: string;
}
