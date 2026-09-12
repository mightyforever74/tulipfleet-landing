import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  LOCALES,
  LOCALE_STORAGE_KEY,
  type LocaleCode,
} from '../../config/i18n';

interface Props {
  currentLocale: string;
  label: string;
  soonLabel: string;
}

function swapLocaleInPath(pathname: string, next: LocaleCode): string {
  const parts = pathname.split('/');
  // ['', 'en', 'pricing', ...]
  if (parts.length > 1 && LOCALES.some((l) => l.code === parts[1])) {
    parts[1] = next;
    const joined = parts.join('/');
    return joined.endsWith('/') || parts.length > 3 ? joined : `${joined}/`;
  }
  return `/${next}/`;
}

export default function LanguageSwitcher({
  currentLocale,
  label,
  soonLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [remembered, setRemembered] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const current =
    LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0]!;

  useEffect(() => {
    try {
      setRemembered(localStorage.getItem(LOCALE_STORAGE_KEY));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function choose(code: LocaleCode, status: 'active' | 'coming_soon') {
    if (status !== 'active') return;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
    setRemembered(code);
    setOpen(false);
    if (code === currentLocale) return;
    const next = swapLocaleInPath(window.location.pathname, code);
    const hash = window.location.hash;
    const search = window.location.search;
    window.location.href = `${next}${search}${hash}`;
  }

  function onListKey(e: KeyboardEvent) {
    const active = LOCALES.filter((l) => l.status === 'active');
    const idx = active.findIndex((l) => l.code === currentLocale);
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = active[(idx + 1) % active.length];
      if (next) choose(next.code, 'active');
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const next = active[(idx - 1 + active.length) % active.length];
      if (next) choose(next.code, 'active');
    }
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="flex h-10 items-center gap-1.5 rounded-xl border border-navy-line bg-navy-ink/40 px-2.5 text-sm text-navy-fog transition hover:border-accent/40 hover:text-offwhite active:scale-[0.98]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="font-display font-semibold uppercase">{current.code}</span>
        <span aria-hidden="true" className="text-[10px] opacity-70">
          ▾
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          tabIndex={-1}
          onKeyDown={onListKey}
          className="absolute right-0 z-50 mt-2 max-h-72 w-52 overflow-auto rounded-xl border border-navy-line bg-navy-ink/95 p-1 shadow-nav backdrop-blur-md"
        >
          {LOCALES.map((locale) => {
            const selected = locale.code === currentLocale;
            const rememberedMark = remembered === locale.code && !selected;
            const disabled = locale.status === 'coming_soon';
            return (
              <li key={locale.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => choose(locale.code, locale.status)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                    disabled
                      ? 'cursor-not-allowed text-navy-fog/50'
                      : selected
                        ? 'bg-accent/15 text-offwhite'
                        : 'text-navy-fog hover:bg-white/5 hover:text-offwhite'
                  }`}
                >
                  <span aria-hidden="true">{locale.flag}</span>
                  <span className="font-display font-semibold uppercase">
                    {locale.code}
                  </span>
                  <span className="flex-1 truncate">{locale.nativeName}</span>
                  {disabled && (
                    <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
                      {soonLabel}
                    </span>
                  )}
                  {selected && <span className="text-accent-soft">✓</span>}
                  {rememberedMark && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" title="Remembered" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
