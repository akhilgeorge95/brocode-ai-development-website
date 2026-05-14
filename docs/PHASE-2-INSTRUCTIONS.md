# Phase 2 — Build Conventions for Brief-Driven Pages

All 10 build agents read this doc in addition to their specific page list.

## 1. The contract

For every page you own:

1. **Read its brief** at `/docs/conversion-briefs/<slug>.md` first.
2. **Skim** the existing content data file (if any) at `/src/data/<category>/<slug>.ts` — it has useful body prose you may reuse.
3. **Skim** the lead-magnet entry in `/scripts/lead-magnets.mjs` for the file path of the gated PDF.
4. **Write the page** to `/src/app/<route>/page.tsx` as a **bespoke .tsx file** — NOT through a template.

Each page is its own self-contained React component, composed from the shared component library but ordered and styled to its brief.

> **The non-negotiable standard:** "If you swapped the URL between any two service pages, the hero copy, the visuals, the form fields, the proof points, and the comparison angle should immediately look out of place." Every page must feel built for its specific persona.

## 2. Available shared components

Import paths (all are at `/src/components/...`):

- `Header`, `Footer`, `LenisProvider`, `WhatsAppFloat` — wired in root layout; do not re-import.
- `SubHero`, `ParallaxHero`, `VideoBackground` — hero variants.
- `Reveal`, `Parallax` (parallax/Parallax) — motion wrappers.
- `SectionHeading` — eyebrow + title + description block.
- `Breadcrumbs` — breadcrumb nav.
- `ServiceCard`, `IndustryCard`, `FeatureGrid` — content cards.
- `CTABlock` — full-bleed CTA with video background.
- `StatsCounter`, `RelatedLinks`.
- `LongPageTemplate` — **do NOT use this in Phase 2.** It's the old template.

### New Phase 2 primitives at `/src/components/ui/`
- `BentoGrid` + `BentoCell` (with `span`, `variant` props) — composable bento blocks.
- `GlassCard` — glassmorphism container.
- `MagneticButton` — magnetic hover button. Use this for hero CTAs.
- `ScrollTimeline` — scroll-pinned process/timeline.
- `GradientMesh` — animated CSS mesh-gradient background.
- `FAQ` (with `FAQItem[]`) — accordion FAQ block. **Required** on any page whose brief lists FAQs in field 18.
- `CompareTable` (with `CompareRow[]`) — competitor comparison table. **Required** where brief field 20 names competitors.
- `ProofBand` — quick four-up stat ribbon.

### Form primitives at `/src/components/forms/`
- `QuoteForm` with `config: PageFormConfig` — multi-step quote form.
- `LeadMagnetGate` — gated PDF download form.
- Types: `PageFormConfig`, `FormField`, `LeadMagnetGateProps`.

### Sticky mobile bar
- `StickyMobileBar` — render at end of page for mobile-only sticky CTAs. Required on conversion pages (services, industries). Optional on legal pages.

### WhatsApp helpers
- `buildWhatsAppLink(message)` from `@/lib/site` — pass the brief's field 15 verbatim text.

## 3. Page anatomy (you compose the order from brief field 18)

Each page generally contains some subset of:

- **Hero** (per brief field 17) — `ParallaxHero` OR `SubHero` OR a custom bespoke hero with `GradientMesh`/`BentoGrid`. Do not always default to ParallaxHero — vary.
- **Trust strip / proof band** — `ProofBand` or a logo row.
- **Problem statement** — quoted from brief fields 7 + 8.
- **Mechanism / how it works** — `ScrollTimeline` is excellent here. Or `BentoGrid`.
- **Comparison vs competitors** — `CompareTable`, fed by brief field 20. **Mandatory** on pages where brief field 20 names specific competitors.
- **Proof / case study band** — text or `BentoCell` quotes.
- **Lead-magnet gate** — `LeadMagnetGate` with the slug-specific PDF path and title from the brief field 13.
- **FAQ** — `FAQ` component, fed by brief field 11 (objections) + content from existing data file.
- **Final CTA + form** — `QuoteForm` with a per-page `PageFormConfig` derived from brief field 16. Include the per-page WhatsApp message (brief field 15).
- **Related links** — `RelatedLinks` with the 5 hrefs from brief field 19.
- **`StickyMobileBar`** at the end.

## 4. Per-page form config

For each page, define a local `const formConfig: PageFormConfig = { ... }` directly in the page file (no need for a separate data file). The fields you pass MUST come from brief field 16 (not generic placeholders). Set `whatsappMessage` to brief field 15.

Example:

```ts
import type { PageFormConfig } from '@/components/forms/types';

const formConfig: PageFormConfig = {
  pageSlug: 'document-intelligence',
  title: 'Request your free 500-document Arabic OCR benchmark',
  subtitle: 'A senior Arabic NLP engineer reviews your corpus and replies within one business day.',
  ctaLabel: 'Request the benchmark',
  whatsappMessage: "Hi Brocode — I'd like to discuss enterprise Arabic OCR for [org]. Could we book a 30-min call?",
  fields: [
    { name: 'volume', label: 'Monthly document volume', type: 'select', options: ['<10K', '10K–100K', '100K–1M', '>1M'], required: true },
    { name: 'docTypes', label: 'Document types', type: 'multiselect', options: ['Printed Arabic', 'Handwritten Arabic', 'Mixed Arabic-English', 'Scanned forms', 'Typed PDFs', 'Structured invoices'] },
    { name: 'languages', label: 'Languages', type: 'multiselect', options: ['MSA', 'Khaleeji dialect', 'English', 'French'] },
    { name: 'deployment', label: 'Target deployment', type: 'select', options: ['On-premise', 'Sovereign cloud (G42, Khazna)', 'Hyperscaler UAE region', 'Hybrid'] },
    { name: 'dms', label: 'Existing DMS / ERP to integrate', type: 'text', placeholder: 'SAP / OpenText / SharePoint / homegrown' },
    { name: 'goLive', label: 'Target go-live date', type: 'date' }
  ]
};
```

## 5. SEO + JSON-LD (per page)

- `export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { ... }, twitter: { ... } }` — pulled from the brief's seoTitle / seoDescription, OR write fresh ones aligned to the brief's H1 direction (brief field 9) and primary keyword (field 4).
- Embed page-specific JSON-LD using `<Script type="application/ld+json">`. For service pages use `@type: Service`. For industry pages use `@type: Service` with `audience`. For pages with FAQs use ALSO an `FAQPage` JSON-LD with the same Q&As that appear visually. For legal pages skip JSON-LD.

## 6. Tracking

Tracking is intentionally **skipped in Phase 2** at the user's request. But you must:

- Add `data-event="<event-name>"` and `data-page="<slug>"` attributes to every conversion-critical element (primary CTA, secondary CTA, WhatsApp links, form submit, lead-magnet submit). The QuoteForm and LeadMagnetGate already push to `window.dataLayer`.
- Naming: `quote_open`, `quote_submit`, `whatsapp_inline`, `whatsapp_hero`, `lead_magnet_submit`, `secondary_cta_click`.

## 7. Style and quality rules

- TypeScript strict; no `any` unless absolutely necessary.
- British spelling (organisation, optimisation, behaviour, programme, licence).
- Straight quotes only — no smart/curly.
- **NEVER use:** revolutionary, game-changing, cutting-edge, next-gen, leverage, synergy, robust (in marketing context), world-class, best-in-class, transform your business, unlock the power, harness the power.
- Headlines (H1) ≤ 12 words, benefit-driven, no hype.
- Tone: senior peer to senior peer. The reader is a CIO/CTO, not a marketer.
- Each page should have **at least 700 words of visible body text** (intro + sections + comparison + FAQ answers etc.).
- Image references: every page should reference at least one local image at `/images/<category>/<slug>.jpg` — these were downloaded in Phase 1 and exist in `/public/`. Use `next/image` for all images.
- Video references where they fit: `/videos/hero/services.mp4`, `/videos/hero/industries.mp4`, `/videos/sections/cta.mp4` — all are local.

## 8. What NOT to do

- Do NOT use `LongPageTemplate`. It's the deprecated template.
- Do NOT re-import `Header`, `Footer`, or `WhatsAppFloat` — they live in the root layout.
- Do NOT install new npm packages.
- Do NOT run `npm run build` or `npm run dev` — the maintainer runs builds.
- Do NOT edit other agents' pages, the shared components, or the briefs.
- Do NOT create new placeholder PDFs — the manifest at `/scripts/lead-magnets.mjs` already lists all 50.

## 9. Output rule

After completing your pages, return a one-line summary listing every page file you wrote and the brief it was driven from. No long reports.
