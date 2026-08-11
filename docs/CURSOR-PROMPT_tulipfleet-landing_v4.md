# CURSOR GOREV: TulipFleet Public Landing (Astro + Tailwind) — Human & B2B Edition v4 (FINAL)

Sen TulipFleet'in bas UI/UX Tasarimcisi, Metin Yazari (Copywriter) ve Frontend Gelistiricisisin.
Gorevin: Vercel/Stripe kalitesinde, gorsel acidan zengin, insan eliyle yazildigi hissedilen samimi ve net bir Landing Page insa etmek.
Asagidaki sozlesmeye HARFIYEN uy. Tahmin etme; dokumanda olmayan bir sey gerekirse TODO olarak isaretle.

## 0. KREATIF DIREKTOR STANDARTLARI & GORSEL TASARIM
- YENI ve BAGIMSIZ proje: `tulipfleet-landing` (Astro static).
- Renk Paleti:
  * Arka Plan: Rich Dark Navy (`#0A0F24` / `#0D1427`)
  * Vurgu (Accent): Lale Turuncusu (`#FF5722` / `#FF7043`) — butonlar, CTA, glow.
  * Canli Indicator: Emerald (`#10B981`) — [CANLI] rozetleri.
  * Notr Metinler: Off-white (`#F8FAFC`) ve Slate-400 (`#94A3B8`).
- Bilesen Stili: Dark Glassmorphism (`backdrop-blur-md`, `border-white/10`).
- Mikro-etkilesim: butonlarda soft hover glow, kartlarda hover'da `-translate-y-1`.
- Responsive: mobil/tablet/desktop kusursuz.

## 0.1 INSAN RUHU VE SAMIMI PAZARLAMA DILI (HUMAN COPYWRITING RULES)
Metinler yapay zeka tarafindan jenerik/suslu ifadelerle yazilmis gibi kokmamalidir. Bir insan lojistik uzmaninin sahayi bilen samimiyeti ve netligiyle yazilmalidir:
1. YASAKLI JENERIK KELIMELER: "Devrim niteliginde", "Kesintisiz entegrasyon", "Gucunuze guc katin", "Sinirlari zorlayin", "Kusursuz deneyim", "Harika cozum" — HICBIR YERDE KULLANMA.
2. SAHA EMPATISI: suslu laf yerine dogrudan dert+cozum.
   * YANLIS: "Son teknoloji yapay zeka algoritmalarimizla filo verimliliginizi zirveye tasiyin."
   * DOGRU: "Ceza yemeden, rotadan sapmadan, Excel tablolarinda bogulmadan filonuzu yonetin."
   * NL/AB lojistik yoneticisinin gunluk stresiyle konus: Vrachtwagenheffing maliyeti, ZE-Zone cezalari, soforlerin yol stresi.
3. KISA, NET, DOGAL cumleler; teknik terimleri (NDW, PostGIS, MQTT) kibirsiz ve yerinde kullan.
4. MICROCOPY insani olsun:
   * YANLIS: "Hata kodu 409: Kayit mevcut."
   * DOGRU: "Bu e-posta adresiyle zaten bir hesabiniz var. Sifrenizi mi unuttunuz?"
   * Yukleme: "Kurumsal hesabiniz hazirlaniyor, birkac saniye..."

## 0.2 KESIN KOD KURALLARI
- Stack: Astro (`output: 'static'`) + React Islands (yalniz: Fiyat Hesaplayici, Signup Formu, Tabbed Feature Showcase, Erken Erisim Formu).
- SEO: semantic HTML, OpenGraph, meta description, JSON-LD schema tipi `SoftwareApplication` (LogisticsService DEGIL — biz SaaS'iz).
- i18n: Astro i18n routing (`/en/`, `/tr/`; `de,nl,fr,es,it,bg,ku` bos placeholder). Varsayilan: `/en/`.
- DURUSTLUK ILKESI: sahte metrik, sahte musteri logosu, uydurma sosyal kanit YASAK.

## 0.3 YASAKLI IFADELER (ADR uyumu — hicbir yerde kullanma)
- "Tam otonom" / "fully autonomous" rotalama-dispac (urun konumu: Advisory — insan karar verir)
- Multimodal liman/demiryolu/denizyolu orkestrasyonu (kapsam disi — HIC BAHSEDILMEZ)
- 3PL / gig-worker pazaryeri orkestrasyonu
- Heffing icin "yol tipine gore" anlatim (ucretlendirme yol tipi ayrimi ICERMEZ; "mesafe + arac sinifi bazli" DOGRU ifadedir, "km-bazli" da dogrudur)
- "1-Tikla Ice Aktar" gibi var olmayan ozellik vaatleri

## 1. SAYFA YAPISI
- `/` : Hero + Excel Gecis Seridi + Feature Tabs + Interactive Pricing + Trial CTA + Footer
- `/pricing` : Karsilastirma tablosu + Fiyat Hesaplayici
- `/signup` : Glassmorphism Trial Kayit Formu
- `/early-access` : Erken Erisim / Demo Randevu Formu (§4.1)
- Header Nav: Logo "TulipFleet" (metin; logo dosyasi TODO) · Ozellikler · Fiyatlar · [Giris Yap] · [Ucretsiz Dene] (turuncu)
  * [Giris Yap] v1 davranisi (D-L4=a): `/early-access` sayfasina gider. Buton altinda mikro not YOK — sayfa kendini anlatir. `PUBLIC_APP_URL` dolu oldugunda (L-2 sonrasi) tek satirla app'e cevrilecek sekilde env-tabanli kur:
    href = PUBLIC_APP_URL || "/early-access"

## 1.1 HERO
- Sol:
  * Rozet: "🇪🇺 NL & EU Zero-Emission Compliance Ready" (turuncu subtle glow capsule)
  * Baslik: "Filonuzu Avrupa'nin Zero-Emission Caginda Yonetin" (gradient typography)
  * Alt metin: "Amsterdam'daki emisyon cezasini, 2026 kamyon toll ucretlerini ve soforlerin yoldaki durumunu tek ekrandan gorun. Karmasik kurallari sistem cozsun, siz isinize bakin."
  * Butonlar: [14 Gun Ucretsiz Deneme] (turuncu) + [Fiyatlari Hesapla] (outline, smooth scroll)
- Sag (UI Mockup Window): saf CSS/Tailwind ile karanlik "TulipFleet Live Dispatch" pano ILLUSTRASYONU.
  Icinde: harita gorunumu illustrasyonu, "Amsterdam ZE-Zone: OK", "Heffing: €12.40" widget kartlari.
  KOSEDE MIKRO NOT ZORUNLU: "Temsili gorunum" (kucuk, slate-400). Gercek urun kareleri §6'daki screenshots/ politikasina tabidir.

## 1.2 "EXCEL'DEN TULIPFLEET'E" GECIS SERIDI
- Hafif turuncu/lacivert gradient serit:
  * "Excel dosyalarinizi cope atmayin — mevcut sureclerinizi TulipFleet'e tasiyin."
  * Yan vurgular (vaat-guvenli dil): "Kolay gecis" · "Verilerinizi birlikte tasiyoruz" · "Hizli adaptasyon"
  * "1-Tikla Ice Aktar" / "0 Egitim Maliyeti" GIBI IDDIALAR YASAK (ozellik yok; §0.3).

## 2. FEATURE TABS (React Island) — IKI-KATMANLI ROZET DISIPLINI
Alti sekme. Sekme degisince solda detay, sagda sik UI illustrasyon karti.
[CANLI] (emerald) = bugun calisan, kanitli. [YOL HARITASI] (mavi/gri) = planli; fiil zamani "planlaniyor/devreye aliniyor", ASLA "sunuyoruz". Rozetler degistirilemez.
Yol Haritasi bolum altina bir kez su not: "Yol haritasi ozellikleri sozlesme kapsaminda onceliklendirilerek devreye alinir."

### Tab 1 — NL & AB Uyumluluk ve Surdurulebilirlik
- [CANLI] Vrachtwagenheffing Maliyet Motoru: Temmuz 2026'da yururluge giren NL kamyon yol ucreti; resmi Period-1 tarifeleriyle mesafe + arac sinifi bazli hesap.
- [CANLI] ZE-Zones: Amsterdam, Rotterdam dahil 20 Hollanda sehri / 21 aktif bolge; resmi NDW ulusal verisiyle denetim + muafiyet (ontheffing) yonetimi. Mesaj: "Hollanda'nin guncel ZE-Zone ve yol ucreti veri merkezine baglisiniz."
- [YOL HARITASI] Yesil rotalama & CO2 ayak izi: bugun karbon gorunumu -> CSRD-uyumlu resmi raporlamaya kademeli gecis ("ESG yolculugu" anlatimi).
- [YOL HARITASI] EV menzil & sarj planlamasi (NL sebeke kisitlari).

### Tab 2 — Akilli Rota & Sevkiyat
- [CANLI] Karar Destekli Dispac (Advisory): mesafe, zaman penceresi, ZE-Zone/heffing ve yuk kriterleriyle skorlanmis oneriler; cakisma denetimi + gerekce-muhurlu onay akisi. Slogan: "Yapay zeka yerinize karar vermez, en iyi karari onunuze koyar."
- [CANLI] Canli Filo Takibi: MQTT/IoT telemetriyle gercek zamanli konum ve gorev durumu.
- [YOL HARITASI] Gelismis tur optimizasyonu (coklu-durak, SLA farkindali — Advisory cercevesinde).
- [YOL HARITASI] Dinamik gun-ici yeniden rotalama ve canli ETA.
(NOT: "Otonom CVRP/VRPTW" ifadesi KALDIRILDI — §0.3.)

### Tab 3 — Hollanda & Beneluks Ozel
- [CANLI] Agirlik-sinifi farkindaligi: arac agirlik siniflarina gore tarife/uyum eslemesi.
- [YOL HARITASI] Tarihi sehir / kopru-rihtim agirlik kisit rotalamasi.
- [YOL HARITASI] Surus/dinlenme (HOS) & Akilli Takograf V2 denetimi.
(NOT: "Multimodal liman" satiri KALDIRILDI — §0.3.)

### Tab 4 — Filo, Arac & Surucu
- [CANLI] Filo & Gorev Yonetimi: atama-kabul-tamamlama akisi, arac/surucu kartlari.
- [CANLI] Surucu Mobil Uygulamasi: iOS + Android yayinda; push bildirimli gorev akisi.
- [CANLI] Yakit & Maliyet Kayitlari.
- [CANLI] Entegre Donanim (IoT): kendi ESP32 tabanli arac kutumuz — GPS + ivmeolcer telemetrisi, TLS-MQTT. "Sadece yazilim degil, donanim-yazilim butunlugu."
- [YOL HARITASI] Surucu Koclugu & Guvenlik Skoru (spec + donanim hazir): ivmeolcer verisiyle sert fren/savrulma analizi — "surucu guvenligini veriye dayali yonetin."
- [YOL HARITASI] Cold Chain / frigorifik sensor izleme.
- [YOL HARITASI] Sozlesmeli Tasiyici (Contracted Carrier) destegi.

### Tab 5 — Idari Analitik & Belgeler
- [CANLI] Operasyon panolari: filo istatistikleri, gorev/yakit/karbon ozet grafikleri.
- [CANLI] Self-Service Abonelik: kota yonetimi, talep-onay akisi, 14 gun ucretsiz deneme.
- [YOL HARITASI] Cost-to-Serve analitigi.
- [YOL HARITASI] Dijital belge & e-CMR tanima.

### Tab 6 — B2B Enterprise Connectivity
- [YOL HARITASI - YAKINDA] TulipFleet Connect B2B API: ERP/TMS icin RESTful & Webhook altyapisi. "Yakinda" rozeti zorunlu; sahte API key / canli sayac YASAK.

## 3. INTERAKTIF FIYAT HESAPLAYICI (React Island, saf frontend)
- Paketler (in-memory): Starter EUR 15/arac/ay (1-5, temel takip) · Professional EUR 25 (6-20, +toll & rota; "En Populer") · Enterprise EUR 29-35 (20+, +ZE-Zone Compliance & B2B API).
- Slider 1-100; <=5 Starter, 6-20 Professional, >20 Enterprise onerilir. Enterprise'da 29 goster, "hacme gore 35'e kadar" notu.
- Yillik toggle: %10 indirim + "Yillik odemede %10 kazanc" yesil rozeti.
- CTA: "14 Gun Ucretsiz Deneme Baslat" -> `/signup?vehicles={n}`

## 4. TRIAL SIGNUP FORMU (React Island — Glassmorphism)
Endpoint: `POST {PUBLIC_API_URL}/api/auth/public-signup` (env `PUBLIC_API_URL`, varsayilan `https://staging-api.tulipfleet.com`)
Alanlar: company_name (min2) · admin_name (min2) · admin_email (email) · phone (ops.) · estimated_vehicles (query'den on-dolu) · hp_field (gizli honeypot: gorsel olarak gizli, autocomplete off, her zaman "" gonderilir).
Yanitlar (microcopy §0.1 kurallariyla):
- 201: basari modali -> "Hesabiniz acildi! E-postanizi kontrol edin ve giris ekranindaki 'Sifremi Unuttum' adimiyla sifrenizi belirleyin." + [Giris Ekranina Git] (href = PUBLIC_APP_URL || "/early-access")
- 409: "Bu e-posta adresiyle zaten kayitli bir hesap var. Giris yapmayi veya sifre sifirlamayi deneyin."
- 429: "Kisa surede cok fazla deneme yapildi. Lutfen biraz bekleyip tekrar deneyin."
- 400 / ag hatasi: insani dille dinamik hata.

## 4.1 ERKEN ERISIM / DEMO SAYFASI (`/early-access`) — D-L4=a
- Baslik: "Web paneli erken erisimde — size ozel canli demo yapalim."
- Kisa metin: dispatcher web panelinin secili musterilerle canli oldugu, herkese acilisin yakin oldugu durustce soylenir; "sirada yerinizi ayirin" tonu.
- Form (mailto YOK; simdilik API'siz): ad, e-posta, firma, arac sayisi, mesaj -> v1'de form POST edilecek endpoint YOK: formu `mailto:info@tulipfleet.com` YERINE su cozumle kur: submit'te alanlari `info@tulipfleet.com` adresine onceden doldurulmus bir e-posta taslagi olarak acan `mailto:` linki + ayrica "veya dogrudan yazin: info@tulipfleet.com" satiri. (Backend endpoint'i eklendiginde degisecek — TODO isaretle.)
- Trial CTA'sini burada da goster: "Beklemeden kendiniz deneyin -> 14 Gun Ucretsiz Trial" (/signup).

## 5. TESLIM KISTASLARI
- README: kurulum, env (`PUBLIC_API_URL`, `PUBLIC_APP_URL` — bos birakilabilir), Cloudflare Pages deploy notlari.
- `npm run build` %100 hatasiz, sifir TS/Astro uyarisi.
- Kucuk, mesajli commit'ler.

## 6. DEPLOYMENT & ENTEGRASYON MIMARISI (bilgi — koda gomulecek davranislar yukarida)
- Hedef mimari: `tulipfleet.com` = bu landing (Cloudflare Pages, statik). `app.tulipfleet.com` = dispatcher web paneli (AYRI proje; L-2 fazinda yayinlanacak, su an yayinlanmadi). `api./staging-api./enterprise-api.tulipfleet.com` = mevcut backend'ler (degismez).
- Bu yuzden `PUBLIC_APP_URL` v1'de BOS -> tum "Giris" hedefleri /early-access'e duser. L-2 tamamlaninca env'e `https://app.tulipfleet.com` yazilir, baska kod degisikligi GEREKMEZ — bunu saglayacak sekilde kodla.
- CORS: signup backend'i `access-control-allow-origin: *` doner (olculmus) — proxy kurma.
- Gorsel politikasi: gercek urun ekran goruntuleri repo'daki `public/screenshots/` klasorunden kullanilir (musteri tarafindan saglanacak; yoksa yer tutucu + TODO). Stok "dashboard" gorseli, uydurma urun karesi YASAK. Hero'daki CSS mockup'i "Temsili gorunum" notuyla serbest.
