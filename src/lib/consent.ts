export const CONSENT_STORAGE_KEY = 'tf_consent';

export type ConsentValue = 'granted' | 'denied' | 'unset';

export const CONSENT_CHANGE_EVENT = 'tf-consent-change';

export function readConsent(): ConsentValue {
  if (typeof window === 'undefined') return 'unset';
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === 'granted' || raw === 'denied') return raw;
  } catch {
    /* private mode */
  }
  return 'unset';
}

export function writeConsent(value: 'granted' | 'denied'): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { value } }),
  );
}

export function openConsentPreferences(): void {
  window.dispatchEvent(new CustomEvent('tf-consent-open'));
}
