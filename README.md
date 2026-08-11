# TulipFleet Public Landing

Static marketing site for [TulipFleet](https://tulipfleet.com) — Astro + Tailwind + React islands.

## Stack

- **Astro** (`output: 'static'`)
- **Tailwind CSS v4**
- **React islands**: Feature Tabs, Pricing Calculator, Signup Form, Early Access Form
- **i18n**: `/en/` (default), `/tr/`; placeholders for `de`, `nl`, `fr`, `es`, `it`, `bg`, `ku`

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:4321/en/`.

## Environment

| Variable | Required | Default / behaviour |
|---|---|---|
| `PUBLIC_API_URL` | No | `https://staging-api.tulipfleet.com` — signup `POST /api/auth/public-signup` |
| `PUBLIC_APP_URL` | No | Empty in v1 → all “Log in” / post-signup links go to `/early-access`. After L-2, set `https://app.tulipfleet.com` — no code change needed. |

Both are public (`PUBLIC_`) and safe to expose in the client bundle.

## Scripts

```bash
npm run dev      # local dev
npm run build    # static output → dist/
npm run preview  # preview production build
```

## Deploy (Cloudflare Pages)

1. Connect this repo to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: **22+** (see `package.json` engines)
5. Set `PUBLIC_API_URL` / `PUBLIC_APP_URL` in Pages environment variables when ready.

Architecture:

- `tulipfleet.com` → this landing (Cloudflare Pages)
- `app.tulipfleet.com` → dispatcher web panel (separate project; not live in v1)
- `api.` / `staging-api.` / `enterprise-api.tulipfleet.com` → existing backends

Signup talks directly to the API (CORS allows `*`). No proxy in this project.

## Screenshots policy

Real product screenshots belong in `public/screenshots/` (customer-provided). Until then, only CSS illustrations with a “Representative view” note are used. Stock dashboard images are not allowed.

## Polish v1

Visual depth, accessibility, and honesty fixes on top of the v4 contract (structure/routes unchanged).

### Language switcher config

Edit `src/config/i18n.ts`:

- Add or rename a locale in the `LOCALES` array.
- Set `status: 'active'` only when dictionary + routes exist.
- Keep `status: 'coming_soon'` for languages that must appear in the dropdown but stay **disabled** (no navigation to empty placeholder pages).
- Preference is stored in `localStorage` under `LOCALE_STORAGE_KEY` (`tulipfleet-locale`) for UI marking only — **no auto-redirect** on visit.

### Hero scenario ticker copy

Ticker scenarios live in the i18n dictionaries:

- `src/i18n/en.ts` → `hero.scenarios`
- `src/i18n/tr.ts` → `hero.scenarios`

Amounts (`€5.10`, `€1.04`) and route facts are proven engine outputs — **do not invent new figures**. Scenario C is the only place a red violation indicator is used.

### Live ZE-Zone map cities

City points on the Tab-1 Netherlands map are defined in `LIVE_ZE_CITIES` inside `src/config/i18n.ts` (Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Maastricht). Leiden is not a live zone city and must not appear on the map.

### Stats band

Proven counters under the Excel strip: `dict.stats` in each locale file (21 zones, 148.8 km², 6 cities, Period-1 tariffs badge). Count-up uses IntersectionObserver + CSS/`requestAnimationFrame` only — no animation libraries.

## C-0 Yasal Zemin (GDPR / AVG shield)

No third-party analytics or ad scripts ship in this phase. Consent infrastructure must be verified **before** enabling any tracker.

### Legal page dictionaries

Skeleton legal copy (EN + TR only):

- `src/i18n/legal/en.ts`
- `src/i18n/legal/tr.ts`

Routes: `/en|tr/privacy`, `/terms`, `/imprint`, `/dpa`, `/subprocessors`. UI chrome (footer, banner) lives in `src/i18n/en.ts` / `tr.ts` under `footer` + `consent`.

### Analytics enable procedure (order is mandatory)

1. Verify cookie banner + `tf_consent` localStorage (`granted` | `denied` | `unset`).
2. Verify `ConsentScriptLoader` injects **nothing** when consent is `denied` / `unset` or `enabled: false`.
3. Only then edit `src/config/analytics.ts`: set `enabled: true` and fill the provider `id`.
4. Never reverse this order — config enable without working consent is forbidden.

```ts
export const analyticsConfig = {
  clarity: { enabled: false, id: "" },
  metaPixel: { enabled: false, id: "" },
};
```

### `[MUSTERI DOLDURACAK]` checklist (complete before NL/EU go-live)

| Field | Where |
|---|---|
| Legal entity name (TulipFleet B.V. / Asir) | Privacy, Imprint |
| KvK number | Privacy, Imprint |
| Registered address | Privacy, Imprint |
| DPO name/email or “not appointed” | Privacy, Imprint |
| Official DPA PDF link | `/dpa` |
| `privacy@tulipfleet.com` mailbox live | Privacy, Imprint, ops |
| Mobile map SDK confirmation (update subprocessors if needed) | `/subprocessors` + this README |

### Consent storage

- Key: `tf_consent` → `granted` | `denied` | `unset`
- Footer “Cookie preferences” re-opens the banner (withdrawal / change of mind).
- Accept and Reject are equal weight — no dark patterns.

## TODO

- Brand logo file (header currently uses text “TulipFleet”)
- Real screenshots in `public/screenshots/`
- Early-access form backend endpoint (v1 uses pre-filled `mailto:info@tulipfleet.com`)
- Fill placeholder locales (`de`, `nl`, `fr`, `es`, `it`, `bg`, `ku`) when activating them in `src/config/i18n.ts`
- Complete all `[MUSTERI DOLDURACAK]` legal identity fields listed under C-0
- Confirm mobile map SDK and update subprocessors list if required

