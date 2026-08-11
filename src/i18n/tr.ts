import type { Dictionary } from './types';

const tr: Dictionary = {
  meta: {
    siteName: 'TulipFleet',
    title: 'TulipFleet — NL & AB zero-emission kuralları için filo yönetimi',
    description:
      'ZE-Zone riskini, 2026 kamyon toll maliyetini ve sürücü durumunu tek ekrandan görün. Excel’de boğulan Hollanda ve AB lojistik ekipleri için.',
    ogLocale: 'tr_TR',
  },
  nav: {
    features: 'Özellikler',
    pricing: 'Fiyatlar',
    login: 'Giriş Yap',
    tryFree: 'Ücretsiz Dene',
    logoTodo: 'TODO: metin logo yerine marka dosyası eklenecek',
    langLabel: 'Dil',
    langSoon: 'Yakında',
  },
  hero: {
    badge: '🇪🇺 NL & EU Zero-Emission Compliance Ready',
    title: "Filonuzu Avrupa'nın Zero-Emission Çağında Yönetin",
    subtitle:
      "Amsterdam'daki emisyon cezasını, 2026 kamyon toll ücretlerini ve sürücülerin yoldaki durumunu tek ekrandan görün. Karmaşık kuralları sistem çözsün, siz işinize bakın.",
    ctaTrial: '14 Gün Ücretsiz Deneme',
    ctaPricing: 'Fiyatları Hesapla',
    mockupTitle: 'TulipFleet Live Dispatch',
    mockupLive: 'Canlı',
    mockupJobs: 'Görevler',
    mockupDisclaimer: 'Temsili görünüm',
    scenarios: [
      {
        id: 'a',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Leiden rotası 28km · Euro-6 · Heffing: €5.10',
        heffingAmount: '€5.10',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'Amsterdam ZE-Zone: OK',
        zoneTone: 'ok',
      },
      {
        id: 'b',
        heffingLabel: 'Vrachtwagenheffing',
        heffingLine: 'Aynı rota · Elektrikli · Heffing: €1.04',
        heffingAmount: '€1.04',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'Rotterdam ZE-Zone: Muaf (Ontheffing)',
        zoneTone: 'exempt',
      },
      {
        id: 'c',
        heffingLabel: 'ZE-Zone',
        heffingLine: 'Utrecht Centrum · Euro-5',
        zoneLabel: 'ZE-Zone',
        zoneLine: 'ZE-Zone İHLAL UYARISI',
        zoneTone: 'alert',
      },
    ],
  },
  excelStrip: {
    headline:
      'Excel dosyalarınızı çöpe atmayın — mevcut süreçlerinizi TulipFleet’e taşıyın.',
    points: ['Kolay geçiş', 'Verilerinizi birlikte taşıyoruz', 'Hızlı adaptasyon'],
  },
  stats: {
    zones: { value: 21, label: 'Aktif ZE-Zone' },
    coverage: { value: 148.8, decimals: 1, label: 'Kapsama', suffix: 'km²' },
    cities: { value: 6, label: 'Şehir canlı entegrasyon' },
    tariffs: { label: 'Period-1 Toll Tarifeleri Yüklü' },
  },
  features: {
    sectionTitle: 'Bugün ne var — sırada ne var',
    sectionSubtitle:
      'Canlı özellikler üretimde. Yol haritası maddeleri planlıdır; bugün varmış gibi anlatılmaz.',
    roadmapNote:
      'Yol haritası özellikleri sözleşme kapsamında önceliklendirilerek devreye alınır.',
    live: 'Canlı',
    roadmap: 'Yol Haritası',
    roadmapSoon: 'Yol Haritası — Yakında',
    mapAria: 'Canlı ZE-Zone şehirleriyle Hollanda haritası',
    panel: {
      zoneCheck: 'ZE-Zone denetimi',
      heffingDistance: 'Heffing (mesafe + sınıf)',
      advisorySealed: 'Advisory · gerekçe mühürlü',
      weightClass: 'Ağırlık sınıfı',
      bridgeAware: 'Köprü limiti farkında',
      tariffMapped: 'Tarife eşlendi',
      vehicle: 'Araç',
      driver: 'Sürücü',
      driverStatus: 'Görevde',
      iotBox: 'ESP32 IoT kutu',
      analyticsSummary: 'Görev · yakıt · karbon özeti',
      apiHonest: 'Sahte API key yok. Canlı sayaç yok.',
      routeRows: ['Rota A · skor 92', 'Rota B · skor 84', 'Rota C · skor 71'],
    },
    tabs: [
      {
        id: 'compliance',
        label: 'NL & AB uyumluluk',
        illustrationHint: 'ZE-Zone harita + toll',
        items: [
          {
            status: 'live',
            title: 'Vrachtwagenheffing Maliyet Motoru',
            body: 'Temmuz 2026’da yürürlüğe giren NL kamyon yol ücreti; resmi Period-1 tarifeleriyle mesafe + araç sınıfı bazlı hesap.',
          },
          {
            status: 'live',
            title: 'ZE-Zones',
            body: 'Amsterdam, Rotterdam dahil 20 Hollanda şehri / 21 aktif bölge; resmi NDW ulusal verisiyle denetim + muafiyet (ontheffing) yönetimi. Hollanda’nın güncel ZE-Zone ve yol ücreti veri merkezine bağlısınız.',
          },
          {
            status: 'roadmap',
            title: 'Yeşil rotalama & CO₂ ayak izi',
            body: 'Bugün karbon görünümü → CSRD-uyumlu resmi raporlamaya kademeli geçiş planlanıyor — ESG yolculuğunuz adım adım.',
          },
          {
            status: 'roadmap',
            title: 'EV menzil & şarj planlaması',
            body: 'NL şebeke kısıtlarını dikkate alan menzil ve şarj planlaması devreye alınıyor.',
          },
        ],
      },
      {
        id: 'routing',
        label: 'Akıllı rota & sevkiyat',
        illustrationHint: 'Advisory dispac panosu',
        items: [
          {
            status: 'live',
            title: 'Karar Destekli Dispac (Advisory)',
            body: 'Mesafe, zaman penceresi, ZE-Zone/heffing ve yük kriterleriyle skorlanmış öneriler; çakışma denetimi + gerekçe-mühürlü onay akışı. Yapay zeka yerinize karar vermez, en iyi kararı önünüze koyar.',
          },
          {
            status: 'live',
            title: 'Canlı Filo Takibi',
            body: 'MQTT/IoT telemetriyle gerçek zamanlı konum ve görev durumu.',
          },
          {
            status: 'roadmap',
            title: 'Gelişmiş tur optimizasyonu',
            body: 'Çoklu-durak, SLA farkındalı optimizasyon — Advisory çerçevesinde — planlanıyor.',
          },
          {
            status: 'roadmap',
            title: 'Dinamik gün-içi yeniden rotalama ve canlı ETA',
            body: 'Gün içi yeniden rotalama ve canlı ETA yol haritasında.',
          },
        ],
      },
      {
        id: 'benelux',
        label: 'Hollanda & Benelüks',
        illustrationHint: 'Ağırlık sınıfı rotalama',
        items: [
          {
            status: 'live',
            title: 'Ağırlık-sınıfı farkındalığı',
            body: 'Araç ağırlık sınıflarına göre tarife/uyum eşlemesi.',
          },
          {
            status: 'roadmap',
            title: 'Tarihi şehir / köprü-rıhtım ağırlık kısıt rotalaması',
            body: 'Tarihi merkez ve köprü/rıhtım ağırlık limitlerine duyarlı rotalama devreye alınıyor.',
          },
          {
            status: 'roadmap',
            title: 'Sürüş/dinlenme (HOS) & Akıllı Takograf V2 denetimi',
            body: 'HOS ve Smart Tachograph V2 denetimi planlanıyor.',
          },
        ],
      },
      {
        id: 'fleet',
        label: 'Filo, araç & sürücü',
        illustrationHint: 'Filo kartları + IoT kutu',
        items: [
          {
            status: 'live',
            title: 'Filo & Görev Yönetimi',
            body: 'Atama–kabul–tamamlama akışı, araç/sürücü kartları.',
          },
          {
            status: 'live',
            title: 'Sürücü Mobil Uygulaması',
            body: 'iOS + Android yayında; push bildirimli görev akışı.',
          },
          {
            status: 'live',
            title: 'Yakıt & Maliyet Kayıtları',
            body: 'Yakıt ve maliyet kayıtlarını işin yanında tutun.',
          },
          {
            status: 'live',
            title: 'Entegre Donanım (IoT)',
            body: 'Kendi ESP32 tabanlı araç kutumuz — GPS + ivmeölçer telemetrisi, TLS-MQTT. Sadece yazılım değil, donanım-yazılım bütünlüğü.',
          },
          {
            status: 'roadmap',
            title: 'Sürücü Koçluğu & Güvenlik Skoru',
            body: 'Spec + donanım hazır: ivmeölçer verisiyle sert fren/savrulma analizi — sürücü güvenliğini veriye dayalı yönetin.',
          },
          {
            status: 'roadmap',
            title: 'Cold Chain / frigorifik sensör izleme',
            body: 'Frigorifik sensör izleme devreye alınıyor.',
          },
          {
            status: 'roadmap',
            title: 'Sözleşmeli Taşıyıcı (Contracted Carrier) desteği',
            body: 'Sözleşmeli taşıyıcı desteği yol haritasında.',
          },
        ],
      },
      {
        id: 'analytics',
        label: 'İdari analitik & belgeler',
        illustrationHint: 'Operasyon panoları',
        items: [
          {
            status: 'live',
            title: 'Operasyon panoları',
            body: 'Filo istatistikleri, görev/yakıt/karbon özet grafikleri.',
          },
          {
            status: 'live',
            title: 'Self-Service Abonelik',
            body: 'Kota yönetimi, talep–onay akışı, 14 gün ücretsiz deneme.',
          },
          {
            status: 'roadmap',
            title: 'Cost-to-Serve analitiği',
            body: 'Cost-to-Serve analitiği planlanıyor.',
          },
          {
            status: 'roadmap',
            title: 'Dijital belge & e-CMR tanıma',
            body: 'Dijital belge ve e-CMR tanıma devreye alınıyor.',
          },
        ],
      },
      {
        id: 'b2b',
        label: 'B2B Enterprise Connectivity',
        illustrationHint: 'API & webhook',
        items: [
          {
            status: 'roadmap_soon',
            title: 'TulipFleet Connect B2B API',
            body: 'ERP/TMS için RESTful & Webhook altyapısı. Yakında — sahte API key / canlı sayaç yok.',
          },
        ],
      },
    ],
  },
  pricing: {
    sectionTitle: 'Filonuz büyüdükçe netleşen fiyat',
    sectionSubtitle: 'Araç sayısını seçin; doğru paketi önerelim — sürpriz yok.',
    vehiclesLabel: 'Araç sayısı',
    yearlyLabel: 'Yıllık ödeme',
    yearlyBadge: 'Yıllık ödemede %10 kazanç',
    perVehicleMonth: '/araç/ay',
    recommended: 'Sizin için önerilen',
    mostPopular: 'En Popüler',
    volumeNote: 'Hacme göre €35’e kadar',
    cta: '14 Gün Ücretsiz Deneme Başlat',
    monthlyEstimate: 'Tahmini aylık',
    compareTitle: 'Paket karşılaştırması',
    plans: {
      starter: {
        name: 'Starter',
        blurb: '1–5 araç · temel takip',
        features: ['Temel canlı takip', 'Sürücü mobil uygulaması', 'Görev atama → tamamlama'],
      },
      professional: {
        name: 'Professional',
        blurb: '6–20 araç · toll & rota',
        features: [
          'Starter’daki her şey',
          'Vrachtwagenheffing maliyet motoru',
          'Advisory dispac & rotalama',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        blurb: '20+ araç · ZE-Zone & B2B API',
        features: [
          'Professional’daki her şey',
          'ZE-Zone uyumluluk',
          "TulipFleet Connect B2B API'ye öncelikli erişim",
          'Öncelikli onboarding',
        ],
      },
    },
    featureLabels: {
      basic_tracking: 'Temel takip',
      toll_routing: 'Toll & rota',
      ze_zone: 'ZE-Zone uyumluluk',
      b2b_api: 'B2B API',
    },
  },
  trialCta: {
    title: 'On dört gün. Filo sizin. Kredi kartı tiyatrosu yok.',
    body: 'Denemeyi açın, birkaç araç ekleyin; ZE-Zone ve heffing rakamlarını işlerin yanında görün — karar vermeden önce.',
    button: 'Ücretsiz denemeyi başlat',
  },
  signup: {
    title: '14 günlük ücretsiz denemeyi başlatın',
    subtitle: 'Birkaç alanla kurumsal hesap. Sonraki adımları e-postayla iletiriz.',
    company: 'Firma adı',
    adminName: 'Adınız',
    adminEmail: 'İş e-postası',
    phone: 'Telefon',
    phoneOptional: 'opsiyonel',
    vehicles: 'Tahmini araç sayısı',
    submit: 'Deneme hesabı oluştur',
    loading: 'Kurumsal hesabınız hazırlanıyor, birkaç saniye…',
    successTitle: 'Hesabınız açıldı!',
    successBody:
      "E-postanızı kontrol edin ve giriş ekranındaki 'Şifremi Unuttum' adımıyla şifrenizi belirleyin.",
    successCta: 'Giriş Ekranına Git',
    error409:
      'Bu e-posta adresiyle zaten kayıtlı bir hesap var. Giriş yapmayı veya şifre sıfırlamayı deneyin.',
    error429:
      'Kısa sürede çok fazla deneme yapıldı. Lütfen biraz bekleyip tekrar deneyin.',
    errorGeneric: 'Bir şeyler ters gitti. Biraz sonra yeniden deneyin.',
    validationCompany: 'Firma adı en az 2 karakter olmalı.',
    validationName: 'Adınız en az 2 karakter olmalı.',
    validationEmail: 'Geçerli bir iş e-postası girin.',
    privacyBefore: "Gönder'e basarak ",
    privacyLink: 'Gizlilik Politikası',
    privacyAfter: "'ni kabul etmiş olursunuz.",
  },
  earlyAccess: {
    title: 'Web paneli erken erişimde — size özel canlı demo yapalım.',
    body: 'Dispatcher web paneli seçili müşterilerle canlı. Herkese açılış yakın. Sırada yerinizi ayırın veya birlikte bir tur atalım.',
    name: 'Adınız',
    email: 'E-posta',
    company: 'Firma',
    vehicles: 'Araç sayısı',
    message: 'Ne görmek istiyorsunuz?',
    submit: 'E-posta taslağını aç',
    orEmail: 'veya doğrudan yazın: info@tulipfleet.com',
    trialCta: 'Beklemeden kendiniz deneyin →',
    trialLink: '14 Gün Ücretsiz Trial',
    mailtoSubject: 'TulipFleet erken erişim / demo talebi',
    todoBackend:
      'TODO: Erken erişim API hazır olunca mailto taslağı POST endpoint ile değiştirilecek.',
  },
  footer: {
    tagline: 'NL & AB zero-emission lojistiği için filo yazılımı.',
    product: 'Ürün',
    company: 'Şirket',
    legal: 'Yasal',
    contact: 'İletişim',
    features: 'Özellikler',
    pricing: 'Fiyatlar',
    signup: 'Ücretsiz deneme',
    earlyAccess: 'Erken erişim',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    imprint: 'Künye',
    dpa: 'DPA',
    subprocessors: 'Alt işleyiciler',
    cookiePreferences: 'Çerez tercihleri',
    copyright: '© 2026 TulipFleet — Fleet Management System',
    rights: 'Tüm hakları saklıdır.',
  },
  consent: {
    message:
      'Çerezleri yalnız siteyi anlamak için kullanmak istiyoruz. Karar sizin.',
    functionalNote:
      'Zorunlu (functional) çerezler bu sitede yok denecek kadar az — bilerek minimal tutuyoruz.',
    accept: 'Kabul Et',
    reject: 'Reddet',
    preferences: 'Çerez tercihleri',
    close: 'Kapat',
  },
  placeholder: {
    title: 'Bu dil yakında',
    body: 'Bu dil hazırlanıyor. Bugün İngilizce ve Türkçe kullanılabilir.',
    back: 'İngilizceye dön',
  },
  common: {
    currency: 'EUR',
  },
};

export default tr;
