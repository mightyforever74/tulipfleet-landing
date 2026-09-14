/** App login URL. Empty in v1 → falls back to early-access (D-L4=a). */
export function getAppUrl(): string {
  const url = import.meta.env.PUBLIC_APP_URL as string | undefined;
  return url && url.trim().length > 0 ? url.trim() : '/early-access';
}

/** Public signup API base. */
export function getApiUrl(): string {
  const url = import.meta.env.PUBLIC_API_URL as string | undefined;
  return url && url.trim().length > 0
    ? url.trim().replace(/\/$/, '')
    : 'https://staging-api.tulipfleet.com';
}

export function localizePath(locale: string, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${locale}/`;
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return `/${locale}${withSlash}`;
}
