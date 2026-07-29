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
