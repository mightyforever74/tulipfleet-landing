/**
 * Phone carousel shots for the mobile bridge section.
 * May reference archived files — showcase keeps only 3 scenes in mobile/.
 */
export interface MobileShot {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: { en: string; tr: string };
  caption: { en: string; tr: string };
  phoneCycle?: boolean;
}

export const MOBILE_SHOTS: MobileShot[] = [
  {
    id: '08',
    src: '/screenshots/mobile/08-live.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    alt: {
      en: 'Live job detail on driver app',
      tr: 'Sürücü uygulamasında canlı görev detayı',
    },
    caption: {
      en: 'Driver task detail — accept and track from the pocket.',
      tr: 'Sürücü görev detayı — cebinden kabul et ve izle.',
    },
  },
  {
    id: '05',
    src: '/screenshots/archive/05-driver-nav.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    alt: {
      en: 'Driver navigation and task progress',
      tr: 'Sürücü navigasyon ve görev ilerlemesi',
    },
    caption: {
      en: 'Driver navigation — route and live position.',
      tr: 'Sürücü navigasyonu — rota ve canlı konum.',
    },
  },
  {
    id: '01',
    src: '/screenshots/archive/01-fuel.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    alt: {
      en: 'TulipFleet fuel entry on driver app',
      tr: 'TulipFleet sürücü uygulamasında yakıt girişi',
    },
    caption: {
      en: 'Fuel entry on the driver app.',
      tr: 'Sürücü uygulamasında yakıt girişi.',
    },
  },
];

export const PHONE_CYCLE_SHOTS = MOBILE_SHOTS.filter((s) => s.phoneCycle);
