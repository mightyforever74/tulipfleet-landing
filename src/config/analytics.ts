/**
 * Consent-gated analytics / ad scripts.
 * NEVER enable until C-0 consent infrastructure is verified.
 * C-2/C-3: flip `enabled` + set `id` — loader injects only when tf_consent === 'granted'.
 */
export const analyticsConfig = {
  clarity: { enabled: false, id: '' },
  metaPixel: { enabled: false, id: '' },
} as const;

export type AnalyticsProvider = keyof typeof analyticsConfig;
