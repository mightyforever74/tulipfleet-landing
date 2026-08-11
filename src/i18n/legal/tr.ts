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
};

export default tr;
