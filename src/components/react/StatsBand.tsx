import { useEffect, useRef, useState } from 'react';
import {
  animateCount,
  formatLocaleNumber,
  prefersReducedMotion,
} from '../../lib/motion';

interface StatCopy {
  zones: { value: number; label: string };
  coverage: { value: number; decimals: number; label: string; suffix: string };
  cities: { value: number; label: string };
  tariffs: { label: string };
}

interface Props {
  locale: string;
  stats: StatCopy;
}

export default function StatsBand({ locale, stats }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [zones, setZones] = useState(0);
  const [coverage, setCoverage] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setZones(stats.zones.value);
      setCoverage(stats.coverage.value);
      setCities(stats.cities.value);
      setStarted(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stats]);

  useEffect(() => {
    if (!started) return;
    const stop1 = animateCount(0, stats.zones.value, 1200, setZones);
    const stop2 = animateCount(
      0,
      stats.coverage.value,
      1200,
      setCoverage,
      stats.coverage.decimals,
    );
    const stop3 = animateCount(0, stats.cities.value, 1200, setCities);
    return () => {
      stop1();
      stop2();
      stop3();
    };
  }, [started, stats]);

  return (
    <section
      ref={ref}
      className="border-b border-white/10 bg-navy-deep/60"
      aria-label="Proven coverage figures"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <Stat
          value={formatLocaleNumber(zones, locale)}
          label={stats.zones.label}
        />
        <Stat
          value={`${formatLocaleNumber(coverage, locale, stats.coverage.decimals)} ${stats.coverage.suffix}`}
          label={stats.coverage.label}
        />
        <Stat
          value={formatLocaleNumber(cities, locale)}
          label={stats.cities.label}
        />
        <div className="flex items-center gap-3 rounded-2xl border border-emerald/25 bg-emerald/10 px-4 py-4">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/20 text-emerald"
            aria-hidden="true"
          >
            ✓
          </span>
          <p className="font-display text-sm font-semibold text-offwhite">
            {stats.tariffs.label}
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <p className="font-display text-2xl font-bold text-accent-soft sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-muted">{label}</p>
    </div>
  );
}
