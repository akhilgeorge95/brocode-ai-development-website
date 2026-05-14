# Brocode Solutions — AI Software Development

The production marketing website for **Brocode Solutions**, a UAE-headquartered
enterprise AI engineering consultancy serving the GCC and beyond. The site
ships 50 published pages covering services, industries, technology, insights,
and corporate content.

> Live: [https://www.brocode.ae](https://www.brocode.ae)

---

## Tech stack

- **Next.js 14** — App Router, React Server Components, route-level metadata
- **TypeScript 5** — strict typing across pages, data, and components
- **Tailwind CSS 3** — utility-first styling with a custom design system
- **Framer Motion** — declarative micro-interactions and section transitions
- **GSAP** — scroll-driven hero and timeline animations
- **Lenis** — smooth-scroll integration tuned for accessibility

---

## Getting started

Prerequisites: **Node.js 20+** and **npm 10+**.

```bash
# 1. Install dependencies
npm install

# 2. Download all third-party images and videos into /public
#    (one-time setup — assets are git-ignored)
npm run fetch:assets

# 3. Start the development server on http://localhost:3000
npm run dev
```

The dev server hot-reloads pages, components, data files, and styles.

---

## Folder structure

```
aidevelopment-ae-website/
├── src/
│   ├── app/              # App Router routes, layouts, sitemap, robots
│   ├── components/       # Reusable UI: header, footer, sections, primitives
│   ├── data/             # Page-content data (LongPage, service/industry copy)
│   └── lib/              # Site config, navigation maps, utilities
├── scripts/              # Build-time tooling (asset fetch, manifest)
├── public/               # Static assets — favicons, downloaded images/videos
├── CREDITS.md            # Third-party asset attribution
└── README.md
```

Key files:

- `src/lib/site.ts` — global site config (URL, brand, address, social)
- `src/lib/nav.ts` — canonical list of Services / Industries / Technology / Insights URLs
- `src/app/sitemap.ts` — derives `sitemap.xml` from `nav.ts` (single source of truth)
- `scripts/asset-manifest.mjs` — registry of every remote image and video used

---

## Asset workflow

Images and videos are **not committed to the repository**. Instead, every
remote asset is registered in [`scripts/asset-manifest.mjs`](./scripts/asset-manifest.mjs)
together with its destination path under `/public` and a credit line.

Running:

```bash
npm run fetch:assets
```

walks the manifest and downloads each file into `/public/images/...` or
`/public/videos/...` so they can be served statically by Next.js. This keeps
the repo lightweight, makes asset sources auditable, and lets us swap files
without re-encoding history.

All third-party assets are royalty-free (Unsplash, Pexels, Coverr). Full
attribution lives in [CREDITS.md](./CREDITS.md).

---

## Build & deploy

```bash
# Production build (typechecks, lints, optimises)
npm run build

# Serve the production build locally
npm start
```

The site is statically optimised where possible and may be deployed to any
Node-compatible host (Vercel recommended). Set `NEXT_PUBLIC_*` environment
variables as needed by your hosting environment; no secrets are required at
build time.

---

## Content architecture

Pages are **data-driven**, not bespoke. Each long-form page (service,
industry, technology, insights, legal) renders against a shared `LongPage`
type defined under `src/data/`. A single page template consumes the typed
data and lays out hero, sections, callouts, FAQ, related links, and CTA.

Benefits:

- New service or industry pages are added by writing a typed data object
  and registering the slug in `src/lib/nav.ts` — the sitemap, navigation,
  footer, and SEO metadata all update automatically.
- Editorial reviewers work in `src/data/**` with full TypeScript validation.
- Visual changes propagate site-wide via the shared template.

---

## Accessibility & performance

We treat both as engineering requirements, not afterthoughts:

- **WCAG 2.2 AA** target for colour contrast, focus order, and reduced-motion
- Semantic HTML, ARIA only where the native element is insufficient
- Smooth scrolling respects `prefers-reduced-motion`
- All animation hooks degrade gracefully on slow networks and low-power devices
- Images served at appropriate dimensions; video posters provided for every
  hero video; `loading="lazy"` and `decoding="async"` used consistently
- Core Web Vitals tracked against the green threshold on every deploy

---

## License

All rights reserved © Brocode Solutions. The source code in this repository
is proprietary and may not be copied, modified, or redistributed without
written permission.

Third-party image and video assets are licensed by their respective
contributors via Unsplash, Pexels, and Coverr — see [CREDITS.md](./CREDITS.md)
for the full attribution list.

---

## Credits

See [CREDITS.md](./CREDITS.md) for the full list of attributed photographers,
videographers, and asset sources used across the site.
