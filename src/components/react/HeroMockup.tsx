import { useEffect, useState } from 'react';
import type { TickerScenario } from '../../i18n/types';
import { prefersReducedMotion } from '../../lib/motion';

interface Props {
  title: string;
  liveLabel: string;
  jobsLabel: string;
  disclaimer: string;
  scenarios: TickerScenario[];
}

function highlightAmount(line: string, amount?: string) {
  if (!amount || !line.includes(amount)) return <>{line}</>;
  const [before, after] = line.split(amount);
  return (
    <>
      {before}
      <span className="heffing-amount font-semibold">{amount}</span>
      {after}
    </>
  );
}

export default function HeroMockup({
  title,
  liveLabel,
  jobsLabel,
  disclaimer,
  scenarios,
}: Props) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const scenario = scenarios[index] ?? scenarios[0];

  useEffect(() => {
    if (prefersReducedMotion() || scenarios.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % scenarios.length);
      setTick((t) => t + 1);
    }, 3500);
    return () => window.clearInterval(id);
  }, [scenarios.length]);

  if (!scenario) return null;

  const zoneClass =
    scenario.zoneTone === 'alert'
      ? 'zone-alert'
      : scenario.zoneTone === 'ok'
        ? 'zone-ok'
        : 'zone-ok';

  return (
    <div className="glass overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald/80" />
        <span className="ml-3 font-display text-xs text-slate-muted">{title}</span>
        <span className="ml-auto badge-live !normal-case">● {liveLabel}</span>
      </div>

      <div className="relative grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr]">
        <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/10 bg-navy-elevated">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute left-[18%] top-[28%] h-24 w-24 rounded-full border border-emerald/40 bg-emerald/10" />
          <div className="absolute left-[22%] top-[32%] h-3 w-3 rounded-full bg-emerald shadow-[0_0_12px_#10b981]" />
          <div className="absolute left-[48%] top-[48%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_#ff5722]" />
          <div className="absolute left-[62%] top-[36%] h-2.5 w-2.5 rounded-full bg-accent-soft" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 300 220"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 150 C90 110, 120 100, 160 120 S230 90, 260 70"
              stroke="#FF7043"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.7"
            />
          </svg>
          <p className="absolute bottom-2 left-2 flex items-center gap-2 text-[10px] text-slate-muted">
            <span className="radar-dot" aria-hidden="true" />
            {disclaimer}
          </p>
        </div>

        <div className="flex flex-col gap-3" key={`${scenario.id}-${tick}`}>
          <div
            className={`ticker-enter rounded-xl border p-3 ${
              scenario.zoneTone === 'alert'
                ? 'border-red-400/35 bg-red-500/10'
                : 'border-white/12 bg-white/[0.04]'
            }`}
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-muted">
              {scenario.zoneLabel}
            </p>
            <p className={`mt-1 font-display text-sm font-semibold ${zoneClass}`}>
              {scenario.zoneTone === 'alert' && (
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-400 align-middle" />
              )}
              {scenario.zoneLine}
            </p>
          </div>

          <div className="ticker-enter heffing-card rounded-xl p-3">
            <p className="text-[10px] uppercase tracking-wider text-slate-muted">
              {scenario.heffingLabel}
            </p>
            <p className="mt-1 font-display text-sm text-offwhite">
              {highlightAmount(scenario.heffingLine, scenario.heffingAmount)}
            </p>
          </div>

          <div className="glass rounded-xl p-3">
            <p className="text-[10px] uppercase tracking-wider text-slate-muted">
              {jobsLabel}
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-4/5 rounded bg-white/10" />
              <div className="h-2 w-3/5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
