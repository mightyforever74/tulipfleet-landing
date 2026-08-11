/** Lightweight count-up without animation libraries. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function animateCount(
  from: number,
  to: number,
  durationMs: number,
  onFrame: (value: number) => void,
  decimals = 0,
): () => void {
  if (prefersReducedMotion() || durationMs <= 0) {
    onFrame(to);
    return () => undefined;
  }

  const start = performance.now();
  let raf = 0;

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = from + (to - from) * eased;
    const rounded =
      decimals > 0
        ? Number(value.toFixed(decimals))
        : Math.round(value);
    onFrame(rounded);
    if (t < 1) raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

export function formatLocaleNumber(
  value: number,
  locale: string,
  decimals = 0,
): string {
  return new Intl.NumberFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
