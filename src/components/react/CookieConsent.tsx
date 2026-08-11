import { useEffect, useState } from 'react';
import {
  CONSENT_CHANGE_EVENT,
  readConsent,
  writeConsent,
  type ConsentValue,
} from '../../lib/consent';

interface Copy {
  message: string;
  functionalNote: string;
  accept: string;
  reject: string;
  preferences: string;
  close: string;
}

interface Props {
  copy: Copy;
}

/**
 * Equal-weight Accept / Reject — no dark patterns.
 * Stores tf_consent in localStorage; footer can re-open preferences.
 */
export default function CookieConsent({ copy }: Props) {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentValue>('unset');

  useEffect(() => {
    const current = readConsent();
    setConsent(current);
    setVisible(current === 'unset');

    function onOpen() {
      setVisible(true);
    }
    function onChange(e: Event) {
      const detail = (e as CustomEvent<{ value: ConsentValue }>).detail;
      if (detail?.value) setConsent(detail.value);
    }

    window.addEventListener('tf-consent-open', onOpen);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => {
      window.removeEventListener('tf-consent-open', onOpen);
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    };
  }, []);

  function choose(value: 'granted' | 'denied') {
    writeConsent(value);
    setConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={copy.preferences}
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="glass mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/15 p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.45)] sm:flex-row sm:items-end sm:gap-6">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-offwhite sm:text-base">
            {copy.message}
          </p>
          <p className="mt-2 text-xs text-slate-muted">{copy.functionalNote}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:min-w-[12rem] sm:flex-row">
          <button
            type="button"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-display font-semibold text-offwhite transition hover:bg-white/10"
            onClick={() => choose('denied')}
          >
            {copy.reject}
          </button>
          <button
            type="button"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-display font-semibold text-offwhite transition hover:bg-white/10"
            onClick={() => choose('granted')}
          >
            {copy.accept}
          </button>
        </div>
        {consent !== 'unset' && (
          <button
            type="button"
            className="text-xs text-slate-muted hover:text-offwhite sm:self-start"
            onClick={() => setVisible(false)}
          >
            {copy.close}
          </button>
        )}
      </div>
    </div>
  );
}
