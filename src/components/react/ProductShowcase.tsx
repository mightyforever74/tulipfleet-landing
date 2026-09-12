import { useEffect, useId, useRef, useState } from 'react';
import { PRODUCT_SHOWCASE, type ShowcaseScene } from '../../config/showcase';

interface SceneCopy {
  badge: string;
  caption: string;
}

interface Props {
  locale: string;
  title: string;
  subtitle: string;
  closeLabel: string;
  scenes: {
    office: SceneCopy;
    pocket: SceneCopy;
    vehicle: SceneCopy;
  };
}

function SceneVisual({ scene, lang }: { scene: ShowcaseScene; lang: 'en' | 'tr' }) {
  if (scene.kind === 'phone') {
    return (
      <div className="showcase-frame showcase-frame--phone">
        <div className="showcase-phone-bezel">
          <span className="showcase-phone-notch" aria-hidden="true" />
          <img
            src={scene.src}
            alt={scene.alt[lang]}
            width={scene.width}
            height={scene.height}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  if (scene.kind === 'hardware') {
    return (
      <div className="showcase-frame showcase-frame--hardware">
        <img
          src={scene.src}
          alt={scene.alt[lang]}
          width={scene.width}
          height={scene.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="showcase-frame showcase-frame--panel">
      <img
        src={scene.src}
        alt={scene.alt[lang]}
        width={scene.width}
        height={scene.height}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

export default function ProductShowcase({
  locale,
  title,
  subtitle,
  closeLabel,
  scenes: copy,
}: Props) {
  const lang = locale === 'tr' ? 'tr' : 'en';
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ShowcaseScene | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [active]);

  function openScene(scene: ShowcaseScene) {
    setActive(scene);
  }

  function closeScene() {
    setActive(null);
  }

  return (
    <section className="border-y border-navy-line py-24 lg:py-32" aria-labelledby={titleId}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={titleId} className="font-display text-3xl font-bold tracking-tight text-offwhite sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-[65ch] text-lg font-medium leading-relaxed text-navy-fog lg:text-xl">{subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRODUCT_SHOWCASE.map((scene) => {
            const text = copy[scene.id];
            return (
              <button
                key={scene.id}
                type="button"
                className="showcase-card group text-left"
                onClick={() => openScene(scene)}
                aria-haspopup="dialog"
              >
                <SceneVisual scene={scene} lang={lang} />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-accent-soft">
                  [{text.badge}]
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-navy-fog sm:text-base">
                  {text.caption}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="showcase-dialog m-auto max-h-[90vh] w-[min(92vw,52rem)] rounded-2xl border border-navy-line bg-navy-ink p-3 text-offwhite shadow-hero-window backdrop:bg-navy-ink/80 open:flex open:flex-col"
        onClose={closeScene}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeScene();
        }}
      >
        {active ? (
          <>
            <div className="mb-2 flex items-center justify-between gap-3 px-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                [{copy[active.id].badge}]
              </p>
              <button
                type="button"
                className="rounded-lg border border-navy-line px-3 py-1.5 text-xs text-navy-fog transition hover:text-offwhite"
                onClick={closeScene}
              >
                {closeLabel}
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-navy-line bg-navy">
              <img
                src={active.src}
                alt={active.alt[lang]}
                width={active.width}
                height={active.height}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
            <p className="mt-3 px-1 text-sm font-medium text-navy-fog">{copy[active.id].caption}</p>
          </>
        ) : null}
      </dialog>
    </section>
  );
}
