import { useEffect, useState, type ReactNode } from 'react';
import { PHONE_CYCLE_SHOTS, type MobileShot } from '../../config/mobileScreenshots';
import { prefersReducedMotion } from '../../lib/motion';

interface Props {
  locale: 'en' | 'tr' | string;
}

export default function PhoneCarousel({ locale }: Props) {
  const shots = PHONE_CYCLE_SHOTS.length > 0 ? PHONE_CYCLE_SHOTS : [];
  const [index, setIndex] = useState(0);
  const lang = locale === 'tr' ? 'tr' : 'en';

  useEffect(() => {
    if (shots.length < 2 || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % shots.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [shots.length]);

  if (shots.length === 0) {
    return (
      <PhoneFrame>
        <div className="flex h-full items-center justify-center bg-navy-elevated p-6 text-center text-xs text-slate-muted">
          TODO: [MUSTERI DOLDURACAK: gorsel+caption]
        </div>
      </PhoneFrame>
    );
  }

  const current = shots[index] as MobileShot;

  return (
    <PhoneFrame>
      <div className="relative h-full w-full overflow-hidden bg-navy">
        {shots.map((shot, i) => (
          <img
            key={shot.id}
            src={shot.src}
            alt={shot.alt[lang]}
            width={shot.width}
            height={shot.height}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <p className="absolute bottom-0 left-0 right-0 bg-navy/80 px-3 py-2 text-[10px] leading-snug text-slate-muted backdrop-blur-sm">
          {current.caption[lang]}
        </p>
      </div>
    </PhoneFrame>
  );
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[240px] sm:w-[260px]">
      <div className="rounded-[2rem] border border-white/20 bg-navy-deep p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="mb-2 flex justify-center">
          <span className="h-1.5 w-16 rounded-full bg-white/15" />
        </div>
        <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem] border border-white/10">
          {children}
        </div>
      </div>
    </div>
  );
}
