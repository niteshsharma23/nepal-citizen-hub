# सेवा नेपाल · Sewa Nepal

A simple, modern, mobile-friendly **static** website — a unified Nepal citizen
services portal. It is a pure frontend: **no backend, no database, no
authentication, no API keys, and no live data feeds**. News, market prices and
NEPSE are provided as official outbound links.

## Tech stack

- React + Vite + TypeScript (TanStack Start template)
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Minimal dependencies

## Run locally

```bash
npm install   # or: bun install
npm run dev   # or: bun run dev
```

Open http://localhost:8080

## Build

```bash
npm run build   # or: bun run build
```

## Deploy to GitHub Pages

The project is configured with a **relative asset base (`./`)** in
`vite.config.ts`, so the built site works from any repository sub-path
(e.g. `https://<username>.github.io/<repo>/`).

### Option A — GitHub Actions (recommended)

1. Push this repository to GitHub.
2. In your repo, go to **Settings → Pages** and set **Source: GitHub Actions**.
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. Push to `main`. The site will be live at
   `https://<username>.github.io/<repo>/`.

### Option B — Manual (gh-pages branch)

```bash
npm install
npm run build
npx gh-pages -d dist
```

Then set **Settings → Pages → Source: gh-pages branch**.

> Tip: if assets ever 404 after deploy, confirm `base: "./"` is present in
> `vite.config.ts`.

## Content policy

- **No real-time APIs.** Daily news, market prices and NEPSE link out to
  official sources (AMPIS, Kalimati Market, nepalstock.com, Google News).
- **No sensitive data.** Never enter citizenship numbers, NID, OTPs, passwords
  or bank details on this site — it is an information directory, not an
  official application-processing system.
- Land dispute guidance is general information, **not legal advice**. NEPSE
  information is for general awareness, **not investment advice**.

## Structure

- `src/routes/index.tsx` — the whole single-page portal
- `src/lib/sewa-data.ts` — service cards, emergency numbers, languages
- `src/components/sewa/ui.tsx` — small shared UI (cards, links, sections)
- `src/styles.css` — design tokens (dark blue / light blue / white / saffron)
