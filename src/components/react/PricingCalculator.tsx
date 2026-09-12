import { useEffect, useMemo, useRef, useState } from 'react';
import { PLANS, monthlyTotal, recommendPlan, type PlanId } from '../../lib/pricing';
import { animateCount, prefersReducedMotion } from '../../lib/motion';

interface PlanCopy {
  name: string;
  blurb: string;
  features: string[];
}

interface Props {
  locale: string;
  copy: {
    sectionTitle: string;
    sectionSubtitle: string;
    vehiclesLabel: string;
    yearlyLabel: string;
    yearlyBadge: string;
    perVehicleMonth: string;
    recommended: string;
    mostPopular: string;
    volumeNote: string;
    cta: string;
    monthlyEstimate: string;
    plans: {
      starter: PlanCopy;
      professional: PlanCopy;
      enterprise: PlanCopy;
    };
  };
  showCompare?: boolean;
  compareTitle?: string;
}

export default function PricingCalculator({
  locale,
  copy,
  showCompare = false,
  compareTitle,
}: Props) {
  const [vehicles, setVehicles] = useState(8);
  const [yearly, setYearly] = useState(false);
  const [flashBadge, setFlashBadge] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(0);
  const displayRef = useRef(0);
  const recommended = recommendPlan(vehicles);

  const planMeta = useMemo(() => {
    return PLANS.map((plan) => {
      const text = copy.plans[plan.id];
      const unit = plan.pricePerVehicle;
      const total = monthlyTotal(vehicles, unit, yearly);
      return { ...plan, text, total, unit };
    });
  }, [copy.plans, vehicles, yearly]);

  const recommendedPlan = planMeta.find((p) => p.id === recommended)!;
  const targetTotal = recommendedPlan.total;

  useEffect(() => {
    if (prefersReducedMotion()) {
      displayRef.current = targetTotal;
      setDisplayTotal(targetTotal);
      return;
    }
    const from = displayRef.current;
    return animateCount(from, targetTotal, 280, (v) => {
      displayRef.current = v;
      setDisplayTotal(v);
    });
  }, [targetTotal]);

  function toggleYearly() {
    setYearly((v) => {
      const next = !v;
      if (next) {
        setFlashBadge(true);
        window.setTimeout(() => setFlashBadge(false), 700);
      }
      return next;
    });
  }

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-offwhite sm:text-4xl lg:text-5xl">
          {copy.sectionTitle}
        </h2>
        <p className="mt-6 text-lg font-medium leading-relaxed text-navy-fog lg:text-xl">{copy.sectionSubtitle}</p>
      </div>

      <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <label htmlFor="vehicles" className="font-display text-sm font-semibold text-offwhite">
              {copy.vehiclesLabel}:{' '}
              <span className="text-accent-soft">{vehicles}</span>
            </label>
            <input
              id="vehicles"
              type="range"
              min={1}
              max={100}
              value={vehicles}
              onChange={(e) => setVehicles(Number(e.target.value))}
              className="slider-accent mt-4"
              aria-valuemin={1}
              aria-valuemax={100}
              aria-valuenow={vehicles}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label={copy.yearlyLabel}
              onClick={toggleYearly}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  if (yearly) toggleYearly();
                }
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  if (!yearly) toggleYearly();
                }
              }}
              className={`relative h-7 w-12 rounded-full transition ${yearly ? 'bg-emerald' : 'bg-navy-line'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-offwhite transition ${yearly ? 'translate-x-5' : ''}`}
              />
            </button>
            <div>
              <p className="text-sm font-medium text-navy-fog">{copy.yearlyLabel}</p>
              {yearly && (
                <span
                  className={`badge-live mt-1 !normal-case ${flashBadge ? 'badge-flash' : ''}`}
                >
                  {copy.yearlyBadge}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {planMeta.map((plan) => {
            const isRec = plan.id === recommended;
            return (
              <article
                key={plan.id}
                className={`rounded-2xl border p-6 transition duration-300 ${
                  isRec
                    ? '-translate-y-2 border-accent/50 bg-accent/10 shadow-glow-accent'
                    : 'border-navy-line bg-navy-ink/30'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-offwhite">{plan.text.name}</h3>
                    <p className="mt-1 text-sm font-medium text-navy-fog">{plan.text.blurb}</p>
                  </div>
                  {plan.popular && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-soft">
                      {copy.mostPopular}
                    </span>
                  )}
                </div>

                <p className="mt-6 font-display text-4xl font-bold tracking-tight text-offwhite lg:text-5xl">
                  €{plan.unit}
                  <span className="ml-1 text-base font-medium text-navy-fog">
                    {copy.perVehicleMonth}
                  </span>
                </p>
                {plan.id === 'enterprise' && (
                  <p className="mt-2 text-xs font-medium text-navy-fog">{copy.volumeNote}</p>
                )}

                {isRec && (
                  <p className="mt-3 text-xs font-semibold text-emerald">
                    {copy.recommended}
                  </p>
                )}

                <ul className="mt-5 space-y-2 text-sm font-medium text-navy-fog">
                  {plan.text.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent-soft">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-navy-line pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-navy-fog">{copy.monthlyEstimate}</p>
            <p className="font-display text-4xl font-bold tracking-tight text-offwhite lg:text-5xl">
              €{Math.round(displayTotal)}
              <span className="text-base font-medium text-navy-fog">
                {' '}
                · {recommendedPlan.text.name}
              </span>
            </p>
          </div>
          <a
            href={`/${locale}/signup?vehicles=${vehicles}`}
            className="btn-primary"
          >
            {copy.cta}
          </a>
        </div>
      </div>

      {showCompare && (
        <div className="mt-12 overflow-x-auto">
          <h3 className="font-display text-xl font-bold text-offwhite">{compareTitle}</h3>
          <table className="mt-4 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy-line text-navy-fog">
                <th className="py-3 pr-4 font-medium"> </th>
                {(Object.keys(copy.plans) as PlanId[]).map((id) => (
                  <th key={id} className="py-3 pr-4 font-display font-semibold text-offwhite">
                    {copy.plans[id].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-navy-line">
                <td className="py-3 pr-4 text-navy-fog">EUR / vehicle / month</td>
                <td className="py-3 pr-4 text-offwhite">€15</td>
                <td className="py-3 pr-4 text-offwhite">€25</td>
                <td className="py-3 pr-4 text-offwhite">€29–35</td>
              </tr>
              <tr className="border-b border-navy-line">
                <td className="py-3 pr-4 text-navy-fog">Vehicles</td>
                <td className="py-3 pr-4 text-offwhite">1–5</td>
                <td className="py-3 pr-4 text-offwhite">6–20</td>
                <td className="py-3 pr-4 text-offwhite">20+</td>
              </tr>
              <tr className="border-b border-navy-line">
                <td className="py-3 pr-4 text-navy-fog">Focus</td>
                <td className="py-3 pr-4 text-offwhite">{copy.plans.starter.blurb}</td>
                <td className="py-3 pr-4 text-offwhite">{copy.plans.professional.blurb}</td>
                <td className="py-3 pr-4 text-offwhite">{copy.plans.enterprise.blurb}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
