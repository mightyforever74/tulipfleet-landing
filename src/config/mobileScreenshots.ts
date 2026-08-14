/**
 * Curated product screenshots for the landing ticker / bridge carousel.
 * Only real product UI (web/mobile) or real TulipFleet hardware photos.
 * Marketing one-pagers / stock atmosphere frames live in public/screenshots/archive/.
 *
 * Captions: no announcement dates, no forbidden generics,
 * no claims that break [LIVE] / roadmap discipline.
 */
export interface MobileShot {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: { en: string; tr: string };
  caption: { en: string; tr: string };
  /** Prefer in phone frame carousel */
  phoneCycle?: boolean;
  /** Visual treatment in the ticker */
  kind: 'phone' | 'hardware';
}

export const MOBILE_SHOTS: MobileShot[] = [
  {
    id: '01',
    src: '/screenshots/mobile/01-fuel.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    kind: 'phone',
    alt: {
      en: 'TulipFleet fuel entry on driver app',
      tr: 'TulipFleet sürücü uygulamasında yakıt girişi',
    },
    caption: {
      en: 'Fuel entry on the driver app — litres, cost and odometer become structured fleet cost data.',
      tr: 'Sürücü uygulamasında yakıt girişi — litre, maliyet ve kilometre yapılandırılmış filo maliyet verisine dönüşür.',
    },
  },
  {
    id: '02',
    src: '/screenshots/mobile/02-esp32box.jpg',
    width: 720,
    height: 1280,
    kind: 'hardware',
    alt: {
      en: 'TulipFleet ESP32 vehicle IoT box',
      tr: 'TulipFleet ESP32 araç IoT kutusu',
    },
    caption: {
      en: 'Our ESP32 vehicle box — GPS and accelerometer telemetry over TLS-MQTT.',
      tr: 'ESP32 araç kutumuz — TLS-MQTT ile GPS ve ivmeölçer telemetrisi.',
    },
  },
  {
    id: '05',
    src: '/screenshots/mobile/05-driver-nav.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    kind: 'phone',
    alt: {
      en: 'Driver navigation and task progress',
      tr: 'Sürücü navigasyon ve görev ilerlemesi',
    },
    caption: {
      en: 'Driver navigation — route, task progress and live position in one flow.',
      tr: 'Sürücü navigasyonu — rota, görev ilerlemesi ve canlı konum tek akışta.',
    },
  },
  {
    id: '08',
    src: '/screenshots/mobile/08-live.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
    kind: 'phone',
    alt: {
      en: 'Live fleet map on mobile',
      tr: 'Mobilde canlı filo haritası',
    },
    caption: {
      en: 'Live fleet map on mobile — vehicles and jobs on the same screen.',
      tr: 'Mobilde canlı filo haritası — araçlar ve görevler aynı ekranda.',
    },
  },
  {
    id: '09',
    src: '/screenshots/mobile/09-gps.jpg',
    width: 720,
    height: 1280,
    kind: 'phone',
    alt: {
      en: 'GPS tracking tied to jobs',
      tr: 'Görevlere bağlı GPS takibi',
    },
    caption: {
      en: 'GPS tracking tied to the vehicle and the job — position you can act on.',
      tr: 'Araca ve göreve bağlı GPS takibi — üzerine karar verilebilecek konum.',
    },
  },
  {
    id: '11',
    src: '/screenshots/mobile/11-heffing.jpg',
    width: 720,
    height: 1280,
    kind: 'phone',
    alt: {
      en: 'Vrachtwagenheffing cost view',
      tr: 'Vrachtwagenheffing maliyet görünümü',
    },
    caption: {
      en: 'Vrachtwagenheffing cost — distance + class, official Period-1 tariffs.',
      tr: 'Vrachtwagenheffing maliyeti — mesafe + sınıf, resmi Period-1 tarifeleri.',
    },
  },
  {
    id: '13',
    src: '/screenshots/mobile/13-exceptions.jpg',
    width: 720,
    height: 1280,
    kind: 'phone',
    alt: {
      en: 'Operational exception monitors',
      tr: 'Operasyon istisna monitörleri',
    },
    caption: {
      en: 'Exception monitors split comms loss from location mismatch.',
      tr: 'İstisna monitörleri iletişim kopukluğunu konum sapmasından ayırır.',
    },
  },
  {
    id: '14',
    src: '/screenshots/mobile/14-ze-zone.jpg',
    width: 720,
    height: 1280,
    kind: 'phone',
    alt: {
      en: 'ZE-Zone compliance check before assignment',
      tr: 'Atama öncesi ZE-Zone uyum kontrolü',
    },
    caption: {
      en: 'ZE-Zone and heffing checked before assignment — diesel vs electric cost visible.',
      tr: 'Atama öncesi ZE-Zone ve heffing — dizel / elektrikli maliyet farkı görünür.',
    },
  },
  {
    id: '10',
    src: '/screenshots/mobile/10-carbon.jpg',
    width: 720,
    height: 1280,
    kind: 'phone',
    alt: {
      en: 'Carbon readiness from fleet activity',
      tr: 'Filo aktivitesinden karbon hazırlığı',
    },
    caption: {
      en: 'Fuel and route activity into methodology-backed CO₂e estimates.',
      tr: 'Yakıt ve rota aktivitesi yönteme dayalı CO₂e tahminine dönüşür.',
    },
  },
];

export const PHONE_CYCLE_SHOTS = MOBILE_SHOTS.filter((s) => s.phoneCycle);
