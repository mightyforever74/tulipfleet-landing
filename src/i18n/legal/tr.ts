import type { LegalBundle } from './types';

/** İskelet hukuki metin — şirket bilgileri [MUSTERI DOLDURACAK]. Uydurma avukatlık metni yok. */
const tr: LegalBundle = {
  privacy: {
    title: 'Gizlilik Politikası',
    description:
      'TulipFleet’in genel site ve deneme kaydı için kişisel verileri nasıl işlediği.',
    intro:
      'Bu sayfa, tulipfleet.com ve deneme kayıt akışlarında kişisel verileri nasıl işlediğimizi anlatır. Canlı bir belgedir; aşağıdaki şirket kimlik alanları müşteri tarafından doldurulacaktır.',
    sections: [
      {
        heading: '1. Veri sorumlusu',
        paragraphs: [
          '[MUSTERI DOLDURACAK: TulipFleet B.V. / Asir — tam unvan, KvK numarası, resmi adres ve atanmışsa DPO iletişimi].',
          'Bu alanlar doldurulana kadar bize privacy@tulipfleet.com veya info@tulipfleet.com üzerinden yazabilirsiniz.',
        ],
      },
      {
        heading: '2. Hosting',
        paragraphs: [
          'Bu site ve ilgili altyapı Hetzner Online GmbH (Almanya — Falkenstein) üzerinde barındırılır. İşleme AB içinde, Hetzner’in işleyici / hosting koşulları çerçevesinde gerçekleşir.',
        ],
      },
      {
        heading: '3. Topladığımız veriler',
        paragraphs: [
          'Yalnızca istediğiniz hizmeti sunmak için gerekeni toplarız.',
        ],
        list: [
          'Kayıt formu: firma adı, yönetici adı, iş e-postası, telefon (opsiyonel), tahmini araç sayısı.',
          'Teknik sunucu logları: IP adresi, zaman damgası, user-agent — güvenlik ve kötüye kullanım önleme için; yalnızca operasyonel olarak gerekli süre tutulur.',
        ],
      },
      {
        heading: '4. GPS / konum verisi saklama süresi (ürün)',
        paragraphs: [
          'TulipFleet ürünü canlı takip için araç konum (GPS) verisi işlediğinde aşağıdaki saklama kuralı uygulanır.',
        ],
        callout:
          '7 günlük otomatik silme politikası (7-day data retention policy): Konum verileri 7 gün sonra otomatik silinir. GPS izlerini bu sürenin ötesinde tutmayız.',
      },
      {
        heading: '5. İşleme amacı',
        paragraphs: [
          'Kayıt verilerini deneme hesabı açmak ve bu hesapla ilgili operasyonel iletişim (aktivasyon, şifre sıfırlama, destek) için işleriz.',
          'Kişisel verileri satmayız. Pazarlama veya analitik script’ler yalnızca çerez izni verirseniz ve yapılandırmada açıkça etkinleştirilmişlerse yüklenir (şu an kapalı).',
        ],
      },
      {
        heading: '6. Haklarınız ve şikayet (AVG / GDPR)',
        paragraphs: [
          'AVG md. 15–21 kapsamında erişim, düzeltme, silme, kısıtlama, taşınabilirlik ve belirli işlemlere itiraz talep edebilirsiniz. privacy@tulipfleet.com adresine yazın.',
          'Hollanda denetim makamına şikayette bulunabilirsiniz: Autoriteit Persoonsgegevens (APNL) — https://www.autoriteitpersoonsgegevens.nl/',
        ],
      },
      {
        heading: '7. İletişim',
        paragraphs: [
          'privacy@tulipfleet.com (gizlilik alias — [MUSTERI DOLDURACAK: alias’ın açık olduğunu doğrula])',
          'info@tulipfleet.com',
        ],
      },
    ],
  },
  terms: {
    title: 'Kullanım Koşulları',
    description: 'TulipFleet deneme ve erken erişim koşulları.',
    intro:
      'Bu koşullar genel site deneme kaydı ve TulipFleet erken erişimi için geçerlidir. Ücretli kurumsal müşterilerde imzalı sipariş formu / DPA ek hükümler getirebilir.',
    sections: [
      {
        heading: '1. Deneme (trial)',
        paragraphs: [
          'Ücretsiz deneme 14 gündür, en fazla 5 araç kapsar ve ödeme taahhüdü yoktur. Süre bitince abone olmazsanız erişim sona erebilir.',
        ],
      },
      {
        heading: '2. Erken erişim / “olduğu gibi”',
        paragraphs: [
          'Dispatcher web panelinin bir kısmı erken erişimdedir. Özellikler değişebilir. Erken erişimde hizmet “olduğu gibi” sunulur — istikrar için çalışırız; bu fazda kesintisiz veya hatasız çalışma vaadi vermeyiz.',
        ],
      },
      {
        heading: '3. Sorumluluk sınırı',
        paragraphs: [
          'Hollanda hukukunun izin verdiği ölçüde, hizmetten doğan toplam sorumluluğumuz talepten önceki 12 ayda bize ödediğiniz abonelik tutarı ile sınırlıdır (12-month fee liability cap). Zorunlu Hollanda hukukuyla sınırlanamayacak sorumluluklar bu maddeyle kısıtlanmaz.',
        ],
      },
      {
        heading: '4. Uygulanacak hukuk',
        paragraphs: [
          'Bu koşullara Hollanda hukuku uygulanır. Tüketiciler için zorunlu korumalar saklı kalmak kaydıyla Hollanda mahkemeleri yetkilidir.',
        ],
      },
      {
        heading: '5. İletişim',
        paragraphs: ['info@tulipfleet.com', 'privacy@tulipfleet.com'],
      },
    ],
  },
  imprint: {
    title: 'Künye / Colofon',
    description: 'TulipFleet site işletmecisinin yasal kimliği.',
    sections: [
      {
        heading: 'Şirket bilgileri',
        paragraphs: [
          'Unvan: [MUSTERI DOLDURACAK: TulipFleet B.V. / Asir — tescilli tam unvan]',
          'KvK numarası: [MUSTERI DOLDURACAK: KvK numarası]',
          'Resmi adres: [MUSTERI DOLDURACAK: sokak, posta kodu, şehir, ülke]',
          'E-posta: info@tulipfleet.com · privacy@tulipfleet.com',
          'DPO (atanmışsa): [MUSTERI DOLDURACAK: DPO adı / e-posta, veya “atanmamış”]',
        ],
      },
    ],
  },
  dpa: {
    title: 'Veri İşleme Sözleşmesi (bilgilendirme)',
    description:
      'Kurumsal müşterilerin GDPR md. 28 DPA’yı nasıl talep edeceği — bu sayfada uydurma sözleşme metni yoktur.',
    intro:
      'Bu yalnızca bilgilendirme sayfasıdır. Burada sahte veya yapay zekâ ile üretilmiş DPA gövdesi yayınlamıyoruz.',
    sections: [
      {
        heading: 'Kurumsal DPA',
        paragraphs: [
          'Kurumsal müşterilerimizle GDPR md. 28 uyumlu Veri İşleme Sözleşmesi (DPA) imzalıyoruz.',
          'DPA talepleriniz ve resmi taslak için: privacy@tulipfleet.com',
          '[MUSTERI DOLDURACAK: Resmi DPA taslağı hazır olunca PDF linki]',
        ],
      },
    ],
  },
  subprocessors: {
    title: 'Alt Veri İşleyiciler',
    description:
      'TulipFleet altyapısı ve ürün hizmetleri için kullanılan alt işleyicilerin olgusal listesi.',
    intro:
      'Yalnızca gerçekten kullandığımız sağlayıcıları listeleriz. Google Maps dispatcher/backend katmanında yoktur ve bu listede yer almaz.',
    sections: [
      {
        heading: 'Güncel alt işleyiciler',
        paragraphs: [
          'TulipFleet kapsamında adımıza veri işleyen kuruluşlar:',
        ],
        list: [
          'Hetzner Online GmbH (Almanya) — Bulut hosting ve altyapı',
          'HERE Technologies (Almanya/Hollanda) — Kurumsal rotalama, toll ve ZE-Zone hesaplama',
          'Expo Push Notification Service (ABD) — Mobil push rölesi; aktarımlar Standart Sözleşme Maddeleri (SCC) kapsamında',
        ],
      },
      {
        heading: 'Güncellemeler',
        paragraphs: [
          'Sağlayıcı değişince bu listeyi güncelleriz. Mobil harita SDK teyidi ayrı takip edilir — [MUSTERI DOLDURACAK / TODO: mobil harita SDK’sını teyit et; gerekirse listeyi güncelle].',
        ],
      },
    ],
  },
  deleteAccount: {
    title: 'Hesap ve veri silme',
    description: 'TulipFleet hesabınızı ve hesabınıza bağlı kişisel verileri nasıl sildirebileceğiniz.',
    intro:
      'Bu sayfa, TulipFleet mobil uygulaması kullanıcılarının (sürücüler ve filo yöneticileri) hesaplarını ve bağlı kişisel verilerini nasıl sildirebileceğini, nelerin silindiğini, nelerin saklanmak zorunda olduğunu ve sürecin ne kadar sürdüğünü açıklar.',
    sections: [
      {
        heading: '1. Kimler için geçerli',
        paragraphs: [
          'TulipFleet kurumsal (B2B) bir filo yönetim hizmetidir. Sürücü ve yönetici hesapları, ilgili şirketin yönettiği bir çalışma alanı altında açılır. Silme talebini kendiniz yapabilir ya da şirket yöneticiniz sizin adınıza iletebilir.',
        ],
      },
      {
        heading: '2. Silme talebi nasıl yapılır',
        paragraphs: [
          'Hesabınıza kayıtlı e-posta adresinden, konu satırı “Hesap silme” olacak şekilde e-posta gönderin:',
        ],
        list: [
          'info@tulipfleet.com (birincil) veya privacy@tulipfleet.com',
          'Ekleyin: hesap e-postanız, şirket adınız ve hesabın tamamının mı yoksa yalnızca belirli verilerin mi silineceği (bkz. 4. bölüm).',
          'Talebi 5 iş günü içinde teyit ederiz; talebin hesap sahibinden geldiğinden emin olmak için bir doğrulama adımı isteyebiliriz.',
        ],
      },
      {
        heading: '3. Neler silinir',
        paragraphs: ['Hesap silindiğinde şunları kaldırır veya geri döndürülemez biçimde anonimleştiririz:'],
        list: [
          'Profiliniz (ad, e-posta, telefon, dil ve uygulama ayarları)',
          'Giriş bilgileri ve oturum anahtarları',
          'Girişinize bağlı bildirim (push) anahtarları ve cihaz tanımlayıcıları',
          'Araç konum geçmişi, görevler, yakıt kayıtları ve ikazlarla olan bağınız — bu kayıtlar sizinle ilişkilendirilemeyecek şekilde anonimleştirilir',
        ],
        callout: 'Araç konum (GPS) verileri, talepten bağımsız olarak zaten 7 gün sonra otomatik silinir.',
      },
      {
        heading: '4. Neler saklanır ve neden',
        paragraphs: [
          'Bazı kayıtlar, çalışma alanının sahibi şirket adına veya yasal zorunluluk gereği anonim ya da toplu biçimde saklanmak zorundadır:',
        ],
        list: [
          'Şirkete ait operasyonel filo kayıtları (sefer özetleri, görev geçmişi, yakıt toplamları) — kişisel tanımlayıcı olmadan',
          'Faturalama ve muhasebe kayıtları — Hollanda vergi mevzuatı gereği 7 yıla kadar',
          'Kötüye kullanım incelemesi için gerekli güvenlik günlükleri — 90 güne kadar',
        ],
      },
      {
        heading: '5. Süre',
        paragraphs: [
          'Doğrulanmış talepten itibaren 30 gün içinde silme tamamlanır. Veriyi hâlâ içeren yedekler sonraki 30 gün içinde üzerine yazılarak yok edilir. Silme tamamlandığında e-posta ile bilgilendirilirsiniz.',
        ],
      },
      {
        heading: '6. Hesabı kapatmadan veri silme',
        paragraphs: [
          'Hesabınızı korumak ama belirli verileri (örneğin yakıt kayıtları veya telefon numaranız) sildirmek istiyorsanız bunu talebinizde belirtin. KVKK/GDPR 15–21. maddelerdeki haklarınız (erişim, düzeltme, silme, kısıtlama, taşınabilirlik, itiraz) tam olarak geçerlidir — bkz. Gizlilik Politikası.',
        ],
      },
      {
        heading: '7. İletişim',
        paragraphs: ['info@tulipfleet.com', 'privacy@tulipfleet.com'],
      },
    ],
  },
};

export default tr;
