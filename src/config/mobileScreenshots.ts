/**
 * Curated mobile product screenshots for the landing ticker / bridge carousel.
 * Captions are filtered: no announcement dates, no forbidden generics,
 * no claims that break [LIVE] / roadmap discipline.
 *
 * Source archive: C:\dispatcher\public\screenshots\mobile
 * Files are copied into public/screenshots/mobile/ for static deploy.
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
}

export const MOBILE_SHOTS: MobileShot[] = [
  {
    id: '01',
    src: '/screenshots/mobile/01-fuel.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
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
    alt: {
      en: 'Driver navigation and task progress',
      tr: 'Sürücü navigasyon ve görev ilerlemesi',
    },
    caption: {
      en: 'Driver navigation screen — route, task progress and live position in one operational flow.',
      tr: 'Sürücü navigasyon ekranı — rota, görev ilerlemesi ve canlı konum tek operasyon akışında.',
    },
  },
  {
    id: '06',
    src: '/screenshots/mobile/06-fleet-overview.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'Fleet operational overview',
      tr: 'Filo operasyon özeti',
    },
    caption: {
      en: 'Live GPS visibility and fuel management on one operational picture.',
      tr: 'Canlı GPS görünürlüğü ve yakıt yönetimi tek operasyon görünümünde.',
    },
  },
  {
    id: '08',
    src: '/screenshots/mobile/08-live.jpg',
    width: 720,
    height: 1280,
    phoneCycle: true,
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
    alt: {
      en: 'Vrachtwagenheffing cost view',
      tr: 'Vrachtwagenheffing maliyet görünümü',
    },
    caption: {
      en: 'Vrachtwagenheffing cost engine — distance + vehicle class, official Period-1 tariffs.',
      tr: 'Vrachtwagenheffing maliyet motoru — mesafe + araç sınıfı, resmi Period-1 tarifeleri.',
    },
  },
  {
    id: '13',
    src: '/screenshots/mobile/13-exceptions.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'Operational exception monitors',
      tr: 'Operasyon istisna monitörleri',
    },
    caption: {
      en: 'Exception monitors split communication loss from location mismatch — clear next steps for dispatch.',
      tr: 'İstisna monitörleri iletişim kopukluğunu konum sapmasından ayırır — dispac için net sonraki adım.',
    },
  },
  {
    id: '14',
    src: '/screenshots/mobile/14-ze-zone.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'ZE-Zone compliance check before assignment',
      tr: 'Atama öncesi ZE-Zone uyum kontrolü',
    },
    caption: {
      en: 'ZE-Zone and heffing checked before assignment — same trip, diesel vs electric cost visible.',
      tr: 'Atama öncesi ZE-Zone ve heffing kontrolü — aynı seferde dizel / elektrikli maliyet farkı görünür.',
    },
  },
  {
    id: '03',
    src: '/screenshots/mobile/03-ops.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'Operational intelligence dashboard',
      tr: 'Operasyonel istihbarat panosu',
    },
    caption: {
      en: 'Ops board for fleet stats — jobs, fuel and carbon summaries side by side.',
      tr: 'Filo istatistik panosu — görev, yakıt ve karbon özetleri yan yana.',
    },
  },
  {
    id: '07',
    src: '/screenshots/mobile/07-pricing.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'TulipFleet pricing and hardware demo',
      tr: 'TulipFleet fiyatlandırma ve donanım demosu',
    },
    caption: {
      en: 'Clear per-vehicle pricing — start small, grow with the fleet.',
      tr: 'Net araç-başı fiyat — küçük başlayın, filoyla büyütün.',
    },
  },
  {
    id: '10',
    src: '/screenshots/mobile/10-carbon.jpg',
    width: 720,
    height: 1280,
    alt: {
      en: 'Carbon readiness from fleet activity',
      tr: 'Filo aktivitesinden karbon hazırlığı',
    },
    caption: {
      en: 'Fuel and route activity turned into methodology-backed CO₂e estimates for reporting readiness.',
      tr: 'Yakıt ve rota aktivitesi, raporlama hazırlığı için yönteme dayalı CO₂e tahminine dönüşür.',
    },
  },
];

export const PHONE_CYCLE_SHOTS = MOBILE_SHOTS.filter((s) => s.phoneCycle);
