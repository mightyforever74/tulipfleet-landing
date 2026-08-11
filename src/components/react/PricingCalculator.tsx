import { useMemo, useState } from 'react';
import { PLANS, monthlyTotal, recommendPlan, type PlanId } from '../../lib/pricing';

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

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {copy.sectionTitle}
        </h2>
        <p className="mt-3 text-slate-muted">{copy.sectionSubtitle}</p>
      </div>

      <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <label htmlFor="vehicles" className="font-display text-sm font-semibold">
              {copy.vehiclesLabel}: <span className="text-accent-soft">{vehicles}</span>
            </label>
            <input
              id="vehicles"
              type="range"
              min={1}
              max={100}
              value={vehicles}
              onChange={(e) => setVehicles(Number(e.target.value))}
              className="mt-3 w-full accent-[#FF5722]"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className={`relative h-7 w-12 rounded-full transition ${yearly ? 'bg-emerald' : 'bg-white/15'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white transition ${yearly ? 'translate-x-5' : ''}`}
              />
            </button>
            <div>
              <p className="text-sm font-medium">{copy.yearlyLabel}</p>
              {yearly && (
                <span className="badge-live mt-1 !normal-case">{copy.yearlyBadge}</span>
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
                className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
                  isRec
                    ? 'border-accent/50 bg-accent/10 shadow-[0_0_24px_rgba(255,87,34,0.2)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold">{plan.text.name}</h3>
                    <p className="mt-1 text-xs text-slate-muted">{plan.text.blurb}</p>
                  </div>
                  {plan.popular && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-soft">
                      {copy.mostPopular}
                    </span>
                  )}
                </div>

                <p className="mt-4 font-display text-3xl font-bold">
                  €{plan.unit}
                  <span className="text-sm font-medium text-slate-muted">
                    {copy.perVehicleMonth}
                  </span>
                </p>
                {plan.id === 'enterprise' && (
                  <p className="mt-1 text-xs text-slate-muted">{copy.volumeNote}</p>
                )}

                {isRec && (
                  <p className="mt-3 text-xs font-semibold text-emerald">{copy.recommended}</p>
                )}

                <ul className="mt-4 space-y-2 text-sm text-slate-muted">
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

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-muted">{copy.monthlyEstimate}</p>
            <p className="font-display text-2xl font-bold text-offwhite">
              €{recommendedPlan.total.toFixed(0)}
              <span className="text-sm font-medium text-slate-muted">
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
          <h3 className="font-display text-xl font-bold">{compareTitle}</h3>
          <table className="mt-4 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-muted">
                <th className="py-3 pr-4 font-medium"> </th>
                {(Object.keys(copy.plans) as PlanId[]).map((id) => (
                  <th key={id} className="py-3 pr-4 font-display font-semibold text-offwhite">
                    {copy.plans[id].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-muted">EUR / vehicle / month</td>
                <td className="py-3 pr-4">€15</td>
                <td className="py-3 pr-4">€25</td>
                <td className="py-3 pr-4">€29–35</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-muted">Vehicles</td>
                <td className="py-3 pr-4">1–5</td>
                <td className="py-3 pr-4">6–20</td>
                <td className="py-3 pr-4">20+</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-muted">Focus</td>
                <td className="py-3 pr-4">{copy.plans.starter.blurb}</td>
                <td className="py-3 pr-4">{copy.plans.professional.blurb}</td>
                <td className="py-3 pr-4">{copy.plans.enterprise.blurb}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
