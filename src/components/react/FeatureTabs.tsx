import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import type { Dictionary, FeatureTab, TelemetryLine } from '../../i18n/types';
import { LIVE_ZE_CITIES } from '../../config/i18n';

interface Labels {
  live: string;
  roadmap: string;
  roadmapSoon: string;
  roadmapNote: string;
  tabsAria: string;
}

interface Props {
  tabs: FeatureTab[];
  labels: Labels;
  sectionTitle: string;
  sectionSubtitle: string;
  mapAria: string;
  panel: Dictionary['features']['panel'];
  telemetry: Dictionary['features']['telemetry'];
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

function TelemetryStrip({ lines }: { lines: TelemetryLine[] }) {
  return (
    <ul className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
      {lines.map((line) => (
        <li
          key={line.label}
          className={`flex items-start gap-2 ${
            line.tone === 'live' ? 'text-offwhite' : 'text-navy-fog/70'
          }`}
        >
          <span
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
              line.tone === 'live'
                ? 'bg-emerald shadow-[0_0_6px_var(--color-emerald)]'
                : 'bg-navy-fog/50'
            }`}
            aria-hidden="true"
          />
          <span>{line.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Cities that get an inline map label (dots alone for the rest). */
const MAP_LABEL_IDS = new Set(['amsterdam', 'rotterdam', 'utrecht']);

/** Minimal Netherlands outline with live ZE-Zone city radars + telemetry strip. */
function NetherlandsMap({
  ariaLabel,
  lines,
}: {
  ariaLabel: string;
  lines: TelemetryLine[];
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-navy-line bg-navy-elevated">
      <div
        className="relative min-h-[180px] flex-1 sm:min-h-[220px]"
        role="img"
        aria-label={ariaLabel}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-navy-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy-line) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-2" aria-hidden="true">
          <path
            d="M38 12 L52 10 L62 14 L68 22 L70 32 L66 40 L72 48 L74 58 L70 68 L66 78 L62 88 L54 92 L46 90 L40 82 L36 72 L32 64 L28 54 L26 44 L28 34 L30 24 L34 16 Z"
            fill="color-mix(in srgb, var(--color-offwhite) 4%, transparent)"
            stroke="color-mix(in srgb, var(--color-navy-fog) 35%, transparent)"
            strokeWidth="0.8"
          />
          {LIVE_ZE_CITIES.map((city) => (
            <g key={city.id}>
              <circle
                className="map-radar-ring"
                cx={city.x}
                cy={city.y}
                r="4"
                fill="var(--color-emerald-dim)"
                stroke="var(--color-emerald)"
                strokeWidth="0.6"
              />
              <circle cx={city.x} cy={city.y} r="1.4" fill="var(--color-emerald)" />
              {MAP_LABEL_IDS.has(city.id) ? (
                <text
                  x={city.x + 3.2}
                  y={city.y + 1.1}
                  fill="var(--color-navy-fog)"
                  fontSize="3.2"
                  fontFamily="Manrope, system-ui, sans-serif"
                >
                  {city.label}
                </text>
              ) : null}
            </g>
          ))}
        </svg>
        <style>{`
          .map-radar-ring {
            transform-origin: center;
            transform-box: fill-box;
            animation: mapRadar 2.4s ease-out infinite;
          }
          @keyframes mapRadar {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 0.35; }
          }
          @media (prefers-reduced-motion: reduce) {
            .map-radar-ring { animation: none; opacity: 0.7; }
          }
        `}</style>
      </div>
      <div className="shrink-0 border-t border-navy-line bg-navy/50 px-3 py-2.5">
        <TelemetryStrip lines={lines} />
      </div>
    </div>
  );
}

function TabIllustration({
  hint,
  activeId,
  panel,
  mapAria,
  panelKey,
  roadmapSoonLabel,
  telemetryLines,
}: {
  hint: string;
  activeId: string;
  panel: Dictionary['features']['panel'];
  mapAria: string;
  panelKey: number;
  roadmapSoonLabel: string;
  telemetryLines: TelemetryLine[];
}) {
  return (
    <div
      key={panelKey}
      className="glass fade-in-up relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl p-5 lg:min-h-full"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-accent-dim),transparent_50%)]" />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="mb-4 flex shrink-0 items-center justify-between">
          <p className="font-display text-sm font-semibold text-offwhite">{hint}</p>
          <span className="radar-dot" aria-hidden="true" />
        </div>

        {activeId === 'compliance' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="shrink-0 rounded-xl border border-emerald/30 bg-emerald/10 p-3">
              <p className="text-xs text-navy-fog">{panel.zoneCheck}</p>
              <p className="font-display text-emerald">Amsterdam · OK</p>
            </div>
            <div className="heffing-card shrink-0 rounded-xl p-3">
              <p className="text-xs text-navy-fog">{panel.heffingDistance}</p>
              <p className="font-display">
                <span className="heffing-amount font-semibold">€12.40</span>
              </p>
            </div>
            <NetherlandsMap ariaLabel={mapAria} lines={telemetryLines} />
          </div>
        )}

        {activeId === 'routing' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="space-y-3">
              {panel.routeRows.map((row, i) => (
                <div
                  key={row}
                  className={`rounded-xl border border-navy-line bg-navy-ink/30 p-3 transition ${i === 0 ? 'border-accent/40 bg-accent/10' : ''}`}
                >
                  <p className="font-display text-sm">{row}</p>
                  <p className="mt-1 text-xs text-navy-fog">{panel.advisorySealed}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-xl border border-navy-line bg-navy-elevated/80 px-3 py-2.5">
              <TelemetryStrip lines={telemetryLines} />
            </div>
          </div>
        )}

        {activeId === 'benelux' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="rounded-xl border border-navy-line bg-navy-ink/30 p-4">
              <p className="text-xs text-navy-fog">{panel.weightClass}</p>
              <p className="font-display text-2xl font-bold">N3 · 12–18t</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-navy-line p-3 text-xs text-navy-fog">
                {panel.bridgeAware}
              </div>
              <div className="rounded-xl border border-navy-line p-3 text-xs text-navy-fog">
                {panel.tariffMapped}
              </div>
            </div>
            <div className="mt-auto rounded-xl border border-navy-line bg-navy-elevated/80 px-3 py-2.5">
              <TelemetryStrip lines={telemetryLines} />
            </div>
          </div>
        )}

        {activeId === 'fleet' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-navy-line bg-navy-ink/30 p-3">
                <p className="text-xs text-navy-fog">{panel.vehicle}</p>
                <p className="font-display text-sm">NL-42-TF</p>
              </div>
              <div className="rounded-xl border border-navy-line bg-navy-ink/30 p-3">
                <p className="text-xs text-navy-fog">{panel.driver}</p>
                <p className="font-display text-sm">{panel.driverStatus}</p>
              </div>
            </div>
            <div className="heffing-card rounded-xl p-3">
              <p className="text-xs text-navy-fog">{panel.iotBox}</p>
              <p className="font-display text-sm text-accent-soft">GPS + accel · TLS-MQTT</p>
            </div>
            <div className="mt-auto rounded-xl border border-navy-line bg-navy-elevated/80 px-3 py-2.5">
              <TelemetryStrip lines={telemetryLines} />
            </div>
          </div>
        )}

        {activeId === 'analytics' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="flex h-28 items-end gap-2 rounded-xl border border-navy-line bg-navy-elevated p-3">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-navy-fog">{panel.analyticsSummary}</p>
            <div className="mt-auto rounded-xl border border-navy-line bg-navy-elevated/80 px-3 py-2.5">
              <TelemetryStrip lines={telemetryLines} />
            </div>
          </div>
        )}

        {activeId === 'b2b' && (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <div className="rounded-xl border border-navy-line bg-navy-ink/40 p-4">
              <p className="badge-roadmap mb-2">[{roadmapSoonLabel}]</p>
              <p className="font-display text-sm">REST + Webhooks</p>
              <p className="mt-1 text-xs text-navy-fog">ERP / TMS</p>
            </div>
            <div className="rounded-xl border border-dashed border-navy-line p-3 text-xs text-navy-fog">
              {panel.apiHonest}
            </div>
            <div className="mt-auto rounded-xl border border-navy-line bg-navy-elevated/80 px-3 py-2.5">
              <TelemetryStrip lines={telemetryLines} />
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
  mapAria,
  panel,
  telemetry,
}: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? 'compliance');
  const [panelKey, setPanelKey] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tablistId = useId();
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const telemetryLines =
    telemetry[active as keyof Dictionary['features']['telemetry']] ?? telemetry.compliance;

  useEffect(() => {
    setPanelKey((k) => k + 1);
  }, [active]);

  function selectIndex(i: number) {
    const tab = tabs[i];
    if (!tab) return;
    setActive(tab.id);
    tabRefs.current[i]?.focus();
  }

  function onTabKey(e: KeyboardEvent, index: number) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectIndex((index + 1) % tabs.length);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectIndex((index - 1 + tabs.length) % tabs.length);
    }
    if (e.key === 'Home') {
      e.preventDefault();
      selectIndex(0);
    }
    if (e.key === 'End') {
      e.preventDefault();
      selectIndex(tabs.length - 1);
    }
  }

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-offwhite sm:text-4xl lg:text-5xl">
          {sectionTitle}
        </h2>
        <p className="mt-6 text-lg font-medium leading-relaxed text-navy-fog lg:text-xl">{sectionSubtitle}</p>
      </div>

      <div
        className="tab-scroll mt-10 pe-16 sm:pe-20"
        style={{ scrollPaddingInlineEnd: '5rem' }}
        role="tablist"
        aria-label={labels.tabsAria}
        id={tablistId}
      >
        {tabs.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onTabKey(e, index)}
              className="tab-btn"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch" role="tabpanel">
          <div className="space-y-5">
            {current.items.map((item) => (
              <article key={item.title} className="glass-card rounded-2xl p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <StatusBadge status={item.status} labels={labels} />
                  <h3 className="font-display text-base font-semibold text-offwhite sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-snug text-navy-fog sm:text-base">{item.body}</p>
                {item.note ? (
                  <p className="mt-1.5 text-xs italic leading-snug text-navy-fog/80 sm:text-sm">
                    {item.note}
                  </p>
                ) : null}
              </article>
            ))}
            <p className="pt-2 text-xs text-navy-fog">{labels.roadmapNote}</p>
          </div>

          <TabIllustration
            hint={current.illustrationHint}
            activeId={current.id}
            panel={panel}
            mapAria={mapAria}
            panelKey={panelKey}
            roadmapSoonLabel={labels.roadmapSoon}
            telemetryLines={telemetryLines}
          />
        </div>
      )}
    </section>
  );
}
