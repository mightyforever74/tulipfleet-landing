import { useEffect, useState } from 'react';
import { MOBILE_SHOTS, type MobileShot } from '../../config/mobileScreenshots';
import { prefersReducedMotion } from '../../lib/motion';

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  placeholderTodo: string;
}

function ShotVisual({ shot, lang }: { shot: MobileShot; lang: 'en' | 'tr' }) {
  if (shot.kind === 'hardware') {
    return (
      <div className="shot-frame shot-frame--hardware">
        <img
          src={shot.src}
          alt={shot.alt[lang]}
          width={shot.width}
          height={shot.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="shot-frame shot-frame--phone">
      <div className="shot-phone-bezel">
        <span className="shot-phone-notch" aria-hidden="true" />
        <img
          src={shot.src}
          alt={shot.alt[lang]}
          width={shot.width}
          height={shot.height}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function ShotCard({ shot, lang }: { shot: MobileShot; lang: 'en' | 'tr' }) {
  return (
    <figure className="shot-card">
      <ShotVisual shot={shot} lang={lang} />
      <figcaption className="shot-caption">{shot.caption[lang]}</figcaption>
    </figure>
  );
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

  const useTicker = shots.length >= 6 && !reduce;

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
              <ShotCard key={`${shot.id}-${i}`} shot={shot} lang={lang} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-4 sm:px-6">
          {shots.map((shot) => (
            <ShotCard key={shot.id} shot={shot} lang={lang} />
          ))}
        </div>
      )}
    </section>
  );
}
