/**
 * C-08 — Three-scene product showcase.
 * Swap `src` filenames here to update scenes without touching component code.
 * Keep only these three files under public/screenshots/mobile/.
 */
export type ShowcaseKind = 'panel' | 'phone' | 'hardware';

export type ShowcaseSceneId = 'office' | 'pocket' | 'vehicle';

export interface ShowcaseScene {
  id: ShowcaseSceneId;
  /** Public URL under /screenshots/mobile/ */
  src: string;
  kind: ShowcaseKind;
  width: number;
  height: number;
  alt: { en: string; tr: string };
}

export const PRODUCT_SHOWCASE: ShowcaseScene[] = [
  {
    id: 'office',
    src: '/screenshots/mobile/14-ze-zone.jpg',
    kind: 'panel',
    width: 1200,
    height: 900,
    alt: {
      en: 'TulipFleet dispatcher live fleet overview',
      tr: 'TulipFleet dispac canlı filo özeti',
    },
  },
  {
    id: 'pocket',
    src: '/screenshots/mobile/08-live.jpg',
    kind: 'phone',
    width: 720,
    height: 1280,
    alt: {
      en: 'Driver app task detail on mobile',
      tr: 'Sürücü uygulamasında görev detayı',
    },
  },
  {
    id: 'vehicle',
    src: '/screenshots/mobile/02-esp32box.jpg',
    kind: 'hardware',
    width: 1200,
    height: 900,
    alt: {
      en: 'TulipFleet ESP32 vehicle telemetry box',
      tr: 'TulipFleet ESP32 araç telemetri kutusu',
    },
  },
];
