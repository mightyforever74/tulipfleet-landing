import { useEffect, useState } from 'react';
import type { TickerScenario } from '../../i18n/types';
import { prefersReducedMotion } from '../../lib/motion';

interface JobRow {
  id: string;
  route: string;
  status: string;
  tone: 'live' | 'idle';
}

interface Props {
  title: string;
  liveLabel: string;
  jobsLabel: string;
  disclaimer: string;
  zoneTag: string;
  jobs: JobRow[];
  phonePushTitle: string;
  phonePushSub: string;
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

/** Stylised city-block map — same visual language as Tab-1 NL contour (pure SVG). */
function LiveMapPlane({ zoneTag, disclaimer }: { zoneTag: string; disclaimer: string }) {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/10 bg-navy-elevated">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 300 220"
        fill="none"
        aria-hidden="true"
      >
        {/* Water / park soft blobs */}
        <ellipse cx="48" cy="170" rx="36" ry="22" fill="rgba(59,130,246,0.12)" />
        <ellipse cx="250" cy="40" rx="28" ry="18" fill="rgba(16,185,129,0.08)" />
        <path
          d="M210 160 Q230 145 255 155 Q270 175 240 185 Q215 180 210 160Z"
          fill="rgba(16,185,129,0.1)"
        />

        {/* Street-feel lines (hand-drawn city block) */}
        <g stroke="rgba(203,213,225,0.18)" strokeWidth="1">
          <path d="M20 40 H280" />
          <path d="M20 80 H280" />
          <path d="M20 120 H280" />
          <path d="M20 160 H280" />
          <path d="M20 200 H200" />
          <path d="M60 20 V200" />
          <path d="M110 20 V200" />
          <path d="M160 20 V200" />
          <path d="M210 20 V200" />
          <path d="M260 20 V140" />
          <path d="M40 60 H90 V100 H40 Z" stroke="rgba(203,213,225,0.12)" />
          <path d="M180 90 H240 V130 H180 Z" stroke="rgba(203,213,225,0.12)" />
        </g>

        {/* Amsterdam ZE-Zone soft polygon */}
        <path
          d="M70 55 L130 48 L155 85 L140 125 L95 130 L65 95 Z"
          fill="rgba(16,185,129,0.12)"
          stroke="rgba(16,185,129,0.4)"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="92"
          textAnchor="middle"
          fill="rgba(16,185,129,0.9)"
          fontSize="11"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="600"
        >
          {zoneTag}
        </text>

        {/* Dashed route */}
        <path
          id="hero-route"
          d="M50 150 C90 110, 120 100, 160 120 S230 90, 260 70"
          stroke="#FF7043"
          strokeWidth="2"
          strokeDasharray="5 5"
          opacity="0.75"
          fill="none"
        />

        {/* Moving vehicle — CSS offset-path via foreignObject circle + CSS class on group */}
        <g className="hero-vehicle-dot">
          <circle r="5" fill="#FF5722" className="hero-vehicle-glow" />
          <circle r="2.5" fill="#FF7043" />
        </g>
      </svg>

      <p className="absolute bottom-2 left-2 z-10 flex items-center gap-2 text-[10px] text-slate-muted">
        <span className="radar-dot" aria-hidden="true" />
        {disclaimer}
      </p>
    </div>
  );
}

export default function HeroMockup({
  title,
  liveLabel,
  jobsLabel,
  disclaimer,
  zoneTag,
  jobs,
  phonePushTitle,
  phonePushSub,
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
    <div className="relative">
      {/* Soft ambient glow — no wide backdrop-blur */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-90"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, rgba(249,115,22,0.14), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(16,185,129,0.1), transparent 50%)',
          filter: 'blur(28px)',
        }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(249,115,22,0.12),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald/80" />
          <span className="ml-3 font-display text-xs text-slate-muted">{title}</span>
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide text-emerald">
            ● {liveLabel}
          </span>
        </div>

        <div className="relative grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr]">
          <LiveMapPlane zoneTag={zoneTag} disclaimer={disclaimer} />

          <div className="flex flex-col gap-3" key={`${scenario.id}-${tick}`}>
            <div
              className={`ticker-enter rounded-xl border p-3 backdrop-blur-sm ${
                scenario.zoneTone === 'alert'
                  ? 'border-red-400/35 bg-red-500/10'
                  : 'border-white/10 bg-white/[0.04]'
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

            <div className="ticker-enter heffing-card rounded-xl p-3 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-wider text-slate-muted">
                {scenario.heffingLabel}
              </p>
              <p className="mt-1 font-display text-sm text-offwhite">
                {highlightAmount(scenario.heffingLine, scenario.heffingAmount)}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-wider text-slate-muted">
                {jobsLabel}
              </p>
              <ul className="mt-2 space-y-2">
                {jobs.map((job) => (
                  <li key={job.id} className="flex items-start gap-2 text-xs">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        job.tone === 'live' ? 'bg-emerald shadow-[0_0_6px_#10b981]' : 'bg-slate-muted/60'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-semibold text-offwhite">
                        {job.id} · {job.route}
                      </span>
                      <span className="text-slate-muted">{job.status}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phone mockup — overlaps desktop card on lg+; stacks/hides below */}
      <div className="mt-4 flex justify-center lg:absolute lg:-bottom-6 lg:-right-4 lg:z-20 lg:mt-0 lg:block">
        <div className="w-[132px] rounded-[1.35rem] border border-white/15 bg-navy-deep/95 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="mb-1 flex justify-center">
            <span className="h-1 w-10 rounded-full bg-white/15" />
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-navy-elevated px-2.5 py-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[9px] font-semibold leading-snug text-offwhite">
                {phonePushTitle}
              </p>
              <p className="mt-1 text-[8px] leading-snug text-emerald">
                {phonePushSub}
              </p>
            </div>
            <div className="mt-2 space-y-1 opacity-40" aria-hidden="true">
              <div className="h-1 rounded bg-white/15" />
              <div className="h-1 w-4/5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
