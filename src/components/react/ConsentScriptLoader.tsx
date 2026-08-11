import { useEffect } from 'react';
import { analyticsConfig } from '../../config/analytics';
import {
  CONSENT_CHANGE_EVENT,
  readConsent,
  type ConsentValue,
} from '../../lib/consent';

const INJECTED = new Set<string>();

function injectClarity(id: string) {
  if (!id || INJECTED.has('clarity')) return;
  INJECTED.add('clarity');
  type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
  const w = window as Window & { clarity?: ClarityFn };
  const queue: unknown[][] = [];
  const stub: ClarityFn = (...args: unknown[]) => {
    queue.push(args);
  };
  stub.q = queue;
  w.clarity = w.clarity || stub;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(s);
}

function injectMetaPixel(id: string) {
  if (!id || INJECTED.has('metaPixel')) return;
  INJECTED.add('metaPixel');
  type Fbq = ((...args: unknown[]) => void) & {
    queue: unknown[][];
    loaded?: boolean;
    version?: string;
    callMethod?: (...args: unknown[]) => void;
  };
  const w = window as Window & { fbq?: Fbq };
  if (!w.fbq) {
    const n: Fbq = (...args: unknown[]) => {
      if (n.callMethod) n.callMethod(...args);
      else n.queue.push(args);
    };
    n.queue = [];
    n.loaded = true;
    n.version = '2.0';
    w.fbq = n;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
  }
  w.fbq('init', id);
  w.fbq('track', 'PageView');
}

function syncScripts(consent: ConsentValue) {
  // denied / unset → zero network requests
  if (consent !== 'granted') return;

  if (analyticsConfig.clarity.enabled && analyticsConfig.clarity.id) {
    injectClarity(analyticsConfig.clarity.id);
  }
  if (analyticsConfig.metaPixel.enabled && analyticsConfig.metaPixel.id) {
    injectMetaPixel(analyticsConfig.metaPixel.id);
  }
}

/**
 * Consent-gated loader. C-0 keeps both providers enabled:false.
 * Inject only when enabled === true AND tf_consent === 'granted'.
 */
export default function ConsentScriptLoader() {
  useEffect(() => {
    syncScripts(readConsent());
    function onChange(e: Event) {
      const detail = (e as CustomEvent<{ value: ConsentValue }>).detail;
      if (detail?.value) syncScripts(detail.value);
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  return null;
}
