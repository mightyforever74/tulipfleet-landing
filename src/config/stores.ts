/**
 * App store badge destinations.
 * Leave empty until store listings are live — badges still render, href falls back to '#'.
 * TODO: [MUSTERI DOLDURACAK: magaza linkleri]
 */
export const storeLinks = {
  appStoreUrl: '',
  playStoreUrl: '',
} as const;

export function resolveStoreHref(url: string): string {
  return url.trim().length > 0 ? url.trim() : '#';
}
