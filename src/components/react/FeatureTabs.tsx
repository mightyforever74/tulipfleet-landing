import { useState } from 'react';
import type { FeatureTab } from '../i18n/types';

interface Labels {
  live: string;
  roadmap: string;
  roadmapSoon: string;
  roadmapNote: string;
}

interface Props {
  tabs: FeatureTab[];
  labels: Labels;
  sectionTitle: string;
  sectionSubtitle: string;
}

function StatusBadge({
  status,
  labels,
}: {
  status: 'live' | 'roadmap' | 'roadmap_soon';
  labels: Labels;
}) {
  if (status === 'live') {
    return <span className="badge-live">[{labels.live}]</span>;
  }
  if (status === 'roadmap_soon') {
    return <span className="badge-roadmap">[{labels.roadmapSoon}]</span>;
  }
  return <span className="badge-roadmap">[{labels.roadmap}]</span>;
}

function TabIllustration({ hint, activeId }: { hint: string; activeId: string }) {
  return (
    <div className="glass relative min-h-[320px] overflow-hidden rounded-2xl p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,87,34,0.15),transparent_50%)]" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-offwhite">{hint}</p>
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
        </div>

        {activeId === 'compliance' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-emerald/30 bg-emerald/10 p-3">
              <p className="text-xs text-slate-muted">ZE-Zone check</p>
              <p className="font-display text-emerald">Amsterdam · OK</p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-3">
              <p className="text-xs text-slate-muted">Heffing (distance + class)</p>
              <p className="font-display text-accent-soft">€12.40</p>
            </div>
            <div className="h-28 rounded-xl border border-white/10 bg-navy-elevated">
              <div
                className="h-full w-full opacity-50"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>
          </div>
        )}

        {activeId === 'routing' && (
          <div className="space-y-3">
            {['Route A · score 92', 'Route B · score 84', 'Route C · score 71'].map((row, i) => (
              <div
                key={row}
                className={`rounded-xl border border-white/10 bg-white/5 p-3 transition ${i === 0 ? 'border-accent/40 bg-accent/10' : ''}`}
              >
                <p className="font-display text-sm">{row}</p>
                <p className="mt-1 text-xs text-slate-muted">Advisory · reason sealed</p>
              </div>
            ))}
          </div>
        )}

        {activeId === 'benelux' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-muted">Weight class</p>
              <p className="font-display text-2xl font-bold">N3 · 12–18t</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 p-3 text-xs text-slate-muted">Bridge limit aware</div>
              <div className="rounded-xl border border-white/10 p-3 text-xs text-slate-muted">Tariff mapped</div>
            </div>
          </div>
        )}

        {activeId === 'fleet' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-slate-muted">Vehicle</p>
                <p className="font-display text-sm">NL-42-TF</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-slate-muted">Driver</p>
                <p className="font-display text-sm">On job</p>
              </div>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-3">
              <p className="text-xs text-slate-muted">ESP32 IoT box</p>
              <p className="font-display text-sm text-accent-soft">GPS + accel · TLS-MQTT</p>
            </div>
          </div>
        )}

        {activeId === 'analytics' && (
          <div className="space-y-3">
            <div className="flex h-28 items-end gap-2 rounded-xl border border-white/10 bg-navy-elevated p-3">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-slate-muted">Jobs · fuel · carbon summary</p>
          </div>
        )}

        {activeId === 'b2b' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4">
              <p className="badge-roadmap mb-2">[Roadmap — soon]</p>
              <p className="font-display text-sm">REST + Webhooks</p>
              <p className="mt-1 text-xs text-slate-muted">ERP / TMS connectivity</p>
            </div>
            <div className="rounded-xl border border-dashed border-white/15 p-3 text-xs text-slate-muted">
              No fake API keys. No live counters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FeatureTabs({
  tabs,
  labels,
  sectionTitle,
  sectionSubtitle,
}: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? 'compliance');
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {sectionTitle}
        </h2>
        <p className="mt-3 text-slate-muted">{sectionSubtitle}</p>
      </div>

      <div
        className="mt-8 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Feature categories"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition ${
                selected
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,87,34,0.3)]'
                  : 'border border-white/10 bg-white/5 text-slate-muted hover:text-offwhite'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-8 grid gap-8 lg:grid-cols-2" role="tabpanel">
          <div className="space-y-4">
            {current.items.map((item) => (
              <article
                key={item.title}
                className="glass-card rounded-2xl p-4 sm:p-5"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <StatusBadge status={item.status} labels={labels} />
                  <h3 className="font-display text-base font-semibold sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-muted">{item.body}</p>
              </article>
            ))}
            <p className="pt-2 text-xs text-slate-muted">{labels.roadmapNote}</p>
          </div>

          <TabIllustration hint={current.illustrationHint} activeId={current.id} />
        </div>
      )}
    </section>
  );
}
