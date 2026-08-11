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

## TODO

- Brand logo file (header currently uses text “TulipFleet”)
- Real screenshots in `public/screenshots/`
- Early-access form backend endpoint (v1 uses pre-filled `mailto:info@tulipfleet.com`)
- Fill placeholder locales (`de`, `nl`, `fr`, `es`, `it`, `bg`, `ku`)
