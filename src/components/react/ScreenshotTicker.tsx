import { useEffect, useState } from 'react';
import { MOBILE_SHOTS } from '../../config/mobileScreenshots';
import { prefersReducedMotion } from '../../lib/motion';

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  placeholderTodo: string;
}

export default function ScreenshotTicker({
  locale,
  title,
  subtitle,
  placeholderTodo,
}: Props) {
  const lang = locale === 'tr' ? 'tr' : 'en';
  const [reduce, setReduce] = useState(false);
  const shots = MOBILE_SHOTS;

  useEffect(() => {
    setReduce(prefersReducedMotion());
  }, []);

  const useTicker = shots.length >= 10 && !reduce;

  return (
    <section className="section-pad overflow-hidden border-y border-white/5" aria-labelledby="shot-strip-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="shot-strip-title" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-muted sm:text-lg">{subtitle}</p>
      </div>

      {shots.length === 0 ? (
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-xs text-slate-muted"
            >
              {placeholderTodo}
            </div>
          ))}
        </div>
      ) : useTicker ? (
        <div className="shot-ticker mt-10" aria-hidden={false}>
          <div className="shot-ticker-track">
            {[...shots, ...shots].map((shot, i) => (
              <figure key={`${shot.id}-${i}`} className="shot-card">
                <img
                  src={shot.src}
                  alt={shot.alt[lang]}
                  width={shot.width}
                  height={shot.height}
                  loading="lazy"
                  className="h-56 w-auto rounded-xl object-cover object-top sm:h-64"
                />
                <figcaption className="mt-2 max-w-[180px] text-xs leading-snug text-slate-muted">
                  {shot.caption[lang]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-4 sm:px-6">
          {shots.map((shot) => (
            <figure key={shot.id} className="glass overflow-hidden rounded-2xl p-2">
              <img
                src={shot.src}
                alt={shot.alt[lang]}
                width={shot.width}
                height={shot.height}
                loading="lazy"
                className="aspect-[9/16] w-full rounded-xl object-cover object-top"
              />
              <figcaption className="mt-2 px-1 pb-1 text-xs leading-snug text-slate-muted">
                {shot.caption[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
