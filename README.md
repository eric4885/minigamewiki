# MiniGameWiki

Static Next.js 15 site for Roblox mini-game tools and guides. First launch focuses on **Snowcone Stand**.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) → `out/`
- Cloudflare Pages compatible (no Node runtime, no `route.ts`)

## Develop

```bash
npm install
npm run dev
```

## Build (Cloudflare Pages)

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20+ |

```bash
npm run build
```

Site URL: https://minigamewiki.com

## Content

All Snowcone Stand data lives in `data/snowcone.json`. Pages import JSON only — no filesystem markdown reads.

**Daily / weekly update checklist (AI vs manual):** see [`CONTENT_UPDATE.md`](./CONTENT_UPDATE.md).

## Optional env (Cloudflare Pages)

See `.env.example`:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — enables GA4
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional GSC meta tag (DNS TXT is preferred)

Rebuild after changing env vars.

## Post-deploy checklist (manual)

1. Cloudflare Email Routing for `hello@minigamewiki.com`
2. Google Search Console — verify domain + submit `/sitemap.xml`
3. Create GA4 property — set env — redeploy
4. Prefer cancelling `minigameviki.com`; if kept, 301 to `minigamewiki.com`
5. Pick apex or `www` as canonical and 301 the other in Cloudflare
