import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'insights-hub';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I'd like to subscribe to your Insights Digest. My role is [role] and I'm most interested in [Arabic NLP / sovereign cloud / MLOps / governance / case studies].";

export const metadata: Metadata = {
  title: 'AI Insights Hub UAE — Whitepapers, Guides, Glossary, FAQs | Brocode',
  description:
    'Every Brocode insight in one place — practitioner guides, AI vocabulary, whitepapers, customer stories, the engineering blog, and the FAQs. Sorted by role and stage, with one curated email a month.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Brocode Insights — six streams, one library',
    description:
      'Practitioner guides, an AI glossary, whitepapers, FAQs, the engineering blog, and customer stories. Routed by role and stage.',
    url: 'https://www.brocode.ae/insights',
    images: [{ url: '/images/insights/insights-hub.jpg' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode Insights — six streams, one library',
    description: 'Whitepapers, guides, glossary, FAQs, engineering blog, customer stories.'
  }
};

const STREAMS = [
  {
    eyebrow: 'Long-form',
    title: 'Practitioner guides',
    href: '/insights/guides',
    description: 'Twelve 40-80 page PDFs by named principal engineers, each tied to a public artefact on GitHub or Hugging Face.',
    count: '12 guides'
  },
  {
    eyebrow: 'Reference',
    title: 'AI glossary',
    href: '/insights/glossary',
    description: 'A curated 240-term glossary in a three-block format — plain definition, GCC example, why it matters.',
    count: '240 terms'
  },
  {
    eyebrow: 'Decision',
    title: 'Commercial FAQs',
    href: '/insights/faqs',
    description: 'Forty written answers on pricing, IP, residency, hand-over, and exit — with sample contract language inline.',
    count: '40 answers'
  },
  {
    eyebrow: 'Research',
    title: 'Whitepapers',
    href: '/insights/whitepapers',
    description: 'Co-authored research with regional operators and academics, anchored on the GCC Enterprise AI Benchmark.',
    count: '6 papers'
  },
  {
    eyebrow: 'Engineering',
    title: 'Engineering blog',
    href: '/insights/blog',
    description: 'Short technical posts from the delivery floor — four to eight a month, written by the engineers doing the work.',
    count: '120+ posts'
  },
  {
    eyebrow: 'Proof',
    title: 'Customer stories',
    href: '/insights/case-studies',
    description: 'Anonymised engagements with quantified outcomes — accuracy lifts, latency cuts, cost reductions.',
    count: '24 stories'
  }
];

const ROLE_CHIPS = [
  { label: 'CIO / CTO', stream: 'Whitepapers and the GCC Enterprise AI Benchmark' },
  { label: 'Head of AI or Data', stream: 'Practitioner guides and the engineering blog' },
  { label: 'Risk and Compliance', stream: 'Governance whitepapers and the FAQs IP-and-residency block' },
  { label: 'Procurement', stream: 'The FAQs and the Procurement Pack download' },
  { label: 'Engineer or IC', stream: 'The guides library and the engineering blog' }
];

const STAGE_CHIPS = [
  { label: 'Awareness', description: 'Start with the glossary, then move to a guide.' },
  { label: 'Evaluation', description: 'Whitepapers, case studies, and a sector-specific reference architecture.' },
  { label: 'Decision', description: 'The FAQs, the Procurement Pack, and a 30-minute commercial call.' }
];

const EDITORS_PICKS = [
  {
    editor: 'Yasmin Al Marzooqi',
    role: 'Editorial lead',
    pick: 'Arabic NLP at Production Scale (72 pages)',
    why: 'The most-shared guide of the quarter. Read chapter 3 on Khaleeji dialect handling first.',
    href: '/insights/guides'
  },
  {
    editor: 'Omar Haddad',
    role: 'Principal architect',
    pick: 'GCC Enterprise AI Benchmark 2026',
    why: 'Only 14 % of GCC enterprises with an approved AI roadmap have a production model serving customers. The data is in the appendix.',
    href: '/insights/whitepapers'
  },
  {
    editor: 'Reem Saleh',
    role: 'Head of Delivery',
    pick: 'FAQ block six — IP and weights ownership',
    why: 'The single page procurement and legal teams forward most often. The sample contract clause is inline.',
    href: '/insights/faqs'
  }
];

const MOST_READ = [
  { title: 'What is RAG?', href: '/insights/glossary', stream: 'Glossary' },
  { title: 'Fine-tuning vs RAG: when to use which', href: '/insights/glossary', stream: 'Glossary' },
  { title: 'How much does an AI project cost?', href: '/insights/faqs', stream: 'FAQ' },
  { title: 'Sovereign-cloud MLOps reference architectures', href: '/insights/guides', stream: 'Guide' },
  { title: 'Model risk for CBUAE-supervised banks', href: '/insights/whitepapers', stream: 'Whitepaper' },
  { title: 'Containing 62 % of contact-centre calls in Khaleeji Arabic', href: '/insights/case-studies', stream: 'Case study' }
];

const PROOF = [
  { value: '6 streams', label: 'Guides, glossary, FAQs, whitepapers, blog, case studies' },
  { value: '14,200', label: 'Verified-practitioner downloads since launch' },
  { value: '17 items', label: 'Updated or published in the last 30 days' },
  { value: '1 email', label: 'Curated monthly digest — five hand-picked items' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.brocode.ae/insights?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'CollectionPage',
      name: 'Brocode Insights Hub',
      description:
        'Whitepapers, practitioner guides, an AI glossary, commercial FAQs, the engineering blog, and customer stories.',
      url: 'https://www.brocode.ae/insights',
      hasPart: STREAMS.map((s) => ({
        '@type': 'CreativeWork',
        name: s.title,
        url: `https://www.brocode.ae${s.href}`,
        description: s.description
      }))
    }
  ]
};

export default function InsightsHubPage() {
  return (
    <>
      <Script id="insights-hub-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Hero — library-style six-card fan with role and stage routing */}
      <section className="relative isolate overflow-hidden bg-[#fdf9f1]">
        <GradientMesh tone="sand" className="opacity-50" />
        <div className="container-site relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights' }]} />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Insights Hub · Volume 4 · 2026
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                Every Brocode insight in one place — sorted by your role and your stage.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                Practitioner guides, an AI glossary, whitepapers, FAQs, the engineering blog, and customer stories — six
                streams in one library. No gate at hub level. One curated email a month if you want a digest.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#subscribe" variant="primary" size="lg" event="secondary_cta_click">
                  Subscribe to the monthly digest
                </MagneticButton>
                <MagneticButton href="#sampler" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 Sampler
                </MagneticButton>
              </div>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Updated this month: 17 items across the six streams
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
                <Image
                  src="/images/insights/insights-hub.jpg"
                  alt="A reading desk with the six Brocode insights streams arranged as a fanned-out set"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">Editor&apos;s pick</p>
                  <p className="mt-1 text-sm font-semibold text-ink-900">
                    Arabic NLP at Production Scale — chapter 3 on Khaleeji dialect handling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Role + stage routing widget */}
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <GlassCard padding="md" className="bg-white/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Browse by role</p>
              <p className="mt-2 text-sm text-ink-700">
                Pick the role that fits you and we&apos;ll surface the stream you most likely want to start in.
              </p>
              <ul className="mt-5 space-y-3">
                {ROLE_CHIPS.map((r) => (
                  <li key={r.label} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-3.5">
                    <span className="inline-flex flex-none rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
                      {r.label}
                    </span>
                    <span className="text-sm text-ink-700">{r.stream}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard padding="md" className="bg-white/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Browse by stage</p>
              <p className="mt-2 text-sm text-ink-700">
                Where are you in your AI journey? The hub re-routes by stage, not just topic.
              </p>
              <ul className="mt-5 space-y-3">
                {STAGE_CHIPS.map((s) => (
                  <li key={s.label} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-3.5">
                    <span className="inline-flex flex-none rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">
                      {s.label}
                    </span>
                    <span className="text-sm text-ink-700">{s.description}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why we publish */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Editorial note"
              title="Why we publish."
              description="A note from the editorial lead on what makes a Brocode insight worth your time."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-700">
                Most AI &quot;thought leadership&quot; is written to convert. Ours is written by the engineers who ship the
                systems. A guide that is wrong gets corrected with a public erratum. A glossary entry is reviewed by a
                named principal. A whitepaper carries a methodology appendix and a sample-size disclosure. The FAQs
                publish pricing bands and IP-ownership clauses other consultancies will not put in writing.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                We do not pretend to be neutral on Arabic NLP, sovereign cloud, or the GCC regulatory environment — we
                have shipped the systems and we have an opinion. We do try to be straight on the trade-offs, and to
                publish raw data where licensing allows. If a piece on the hub is stale, mis-tagged, or wrong, the
                editorial inbox is open.
              </p>
              <p className="mt-6 text-sm font-semibold text-ink-900">— Yasmin Al Marzooqi, Editorial Lead</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16">
        <div className="container-site">
          <ProofBand items={PROOF} variant="dark" />
        </div>
      </section>

      {/* Six streams — BentoGrid */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The six streams"
            title="One library, six ways in."
            description="Each stream is a specialist hub. Tap in, no email required at this level — gates only live on the anchor downloads inside each specialist page."
          />
          <BentoGrid className="mt-12">
            {STREAMS.map((s, i) => (
              <BentoCell key={s.href} span={i === 0 || i === 3 ? 'lg' : 'md'} variant={i === 0 ? 'dark' : 'light'}>
                <Link
                  href={s.href}
                  className="block h-full"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                >
                  <p className={i === 0 ? 'text-xs font-semibold uppercase tracking-wider text-brand-300' : 'text-xs font-semibold uppercase tracking-wider text-brand'}>
                    {s.eyebrow} · {s.count}
                  </p>
                  <h3 className={i === 0 ? 'mt-3 text-2xl font-semibold text-white' : 'mt-3 text-2xl font-semibold text-ink-900'}>
                    {s.title}
                  </h3>
                  <p className={i === 0 ? 'mt-3 text-sm text-white/75' : 'mt-3 text-sm text-ink-600'}>
                    {s.description}
                  </p>
                  <span className={i === 0 ? 'link-arrow mt-6 inline-flex text-sm font-semibold text-brand-300' : 'link-arrow mt-6 inline-flex text-sm font-semibold text-brand'}>
                    Open the stream
                  </span>
                </Link>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Editor's picks */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Editor's picks this week"
            title="Three pieces hand-picked by the editorial team."
            description="Rotates weekly. The editor's name is on every pick — curation should feel human."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {EDITORS_PICKS.map((p) => (
              <li key={p.pick} className="card flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.editor} — {p.role}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{p.pick}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-600">{p.why}</p>
                <Link
                  href={p.href}
                  className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                >
                  Open the pick
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Most-read this week */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading eyebrow="Most-read this week" title="What other readers opened first." />
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MOST_READ.map((m, i) => (
              <li key={m.title}>
                <Link
                  href={m.href}
                  className="group flex h-full items-start gap-4 rounded-xl2 border border-ink-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                >
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ink-900 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">{m.stream}</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900 group-hover:text-brand">{m.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample digest preview */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sample digest"
            title="Last month's Insights Digest — rendered inline."
            description="See exactly what you would receive before subscribing. Five items, one minute to skim."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <GlassCard padding="lg" className="bg-[#fbf6ec]">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Brocode Insights Digest · April 2026 · Volume 16
                </p>
                <h3 className="mt-3 text-display-md text-ink-900">Arabic NLP, sovereign cloud TCO, and a CBUAE update.</h3>
                <ul className="mt-6 space-y-5 text-sm leading-relaxed text-ink-700">
                  <li>
                    <span className="font-semibold text-ink-900">1. New guide — Self-hosting Falcon and Jais on a single DGX H100.</span>
                    {' '}vLLM tuning, batching, and the cost model. 52 pages, code on GitHub.
                  </li>
                  <li>
                    <span className="font-semibold text-ink-900">2. Whitepaper update — Sovereign LLM TCO refreshed for H200 pricing.</span>
                    {' '}The 36-month curve moved 11 % since November.
                  </li>
                  <li>
                    <span className="font-semibold text-ink-900">3. Glossary refresh — context window, KV cache, speculative decoding.</span>
                    {' '}Three terms that came up most in March vendor calls.
                  </li>
                  <li>
                    <span className="font-semibold text-ink-900">4. FAQ revision — pricing band on Build engagements lifted.</span>
                    {' '}USD 180K-950K now reflects current GPU pass-through.
                  </li>
                  <li>
                    <span className="font-semibold text-ink-900">5. Case study — a UAE federal entity contained 62 % of Khaleeji calls.</span>
                    {' '}Genesys-integrated, on-prem appliance, 200-call benchmark in the appendix.
                  </li>
                </ul>
              </GlassCard>
            </div>
            <div className="lg:col-span-5">
              <GlassCard padding="lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Why this digest</p>
                <h3 className="mt-3 text-xl font-semibold text-ink-900">
                  Five items. One minute. Three to four topics you pick at signup.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  Topic interests drive the curation, so the digest stays relevant. You can change topics at any time
                  from the email footer.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  We send the digest once a month. No second send. No drip campaign. No sales hand-off without a clear
                  inbound trigger from you.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Lead-magnet gate — Insights Sampler */}
      <section id="sampler" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Brocode 2026 Insights Sampler"
            description="The single best 36 pages from a 4,000+ page library — hand-picked by the editorial lead. One chapter from the most-read guide, the ten most-asked glossary terms, the five most-clicked FAQ answers, one full case study, and one engineering essay."
            contents={[
              'One full chapter from "Arabic NLP at Production Scale"',
              'The ten most-asked glossary terms in the three-block format',
              'The five most-clicked FAQ answers — pricing, IP, residency, hand-over, exit',
              'One full case study with quantified outcomes',
              'One short engineering essay from the blog'
            ]}
            filePath="/downloads/insights-sampler.pdf"
            ctaLabel="Email me the Sampler"
            thumbnail="/images/insights/insights-hub.jpg"
          />
        </div>
      </section>

      {/* Lightweight newsletter subscribe */}
      <section id="subscribe" className="bg-white py-22">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Subscribe"
                title="The monthly Insights Digest."
                description="Five hand-picked items, one minute to skim. You pick two to four topic interests at signup, and the curation follows from there."
              />
              <p className="mt-6 text-sm text-ink-600">
                Prefer WhatsApp?{' '}
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1faa53] underline"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                >
                  Message the editorial team
                </a>
                {' '}and we&apos;ll sign you up by hand.
              </p>
            </div>
            <div className="lg:col-span-7">
              <form
                action="/api/contact"
                method="post"
                className="space-y-4 rounded-2xl border border-ink-100 bg-surface-muted p-6 shadow-card"
              >
                <input type="hidden" name="type" value="newsletter" />
                <input type="hidden" name="pageSlug" value={SLUG} />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-ink-700">First name *</label>
                    <input id="name" name="name" required placeholder="Aisha" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-ink-700">Work email *</label>
                    <input id="email" type="email" name="email" required placeholder="you@yourorg.ae" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="role" className="mb-1 block text-xs font-medium text-ink-700">Role band</label>
                    <select id="role" name="role" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                      <option value="">Select…</option>
                      <option>CIO / CTO / Board</option>
                      <option>Head of AI or Data</option>
                      <option>Risk & Compliance</option>
                      <option>Procurement</option>
                      <option>Engineering IC</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block text-xs font-medium text-ink-700">Country</label>
                    <select id="country" name="country" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                      <option value="">Select…</option>
                      <option>UAE</option><option>KSA</option><option>Qatar</option><option>Bahrain</option>
                      <option>Kuwait</option><option>Oman</option><option>Egypt</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <fieldset>
                  <legend className="mb-2 text-xs font-medium text-ink-700">Topic interests (pick two to four)</legend>
                  <div className="grid grid-cols-1 gap-1.5 rounded-lg border border-ink-200 bg-white p-3 md:grid-cols-2">
                    {[
                      'Arabic NLP',
                      'Sovereign cloud',
                      'MLOps & infra',
                      'LLM applications',
                      'Agentic systems',
                      'Governance & risk',
                      'Case studies',
                      'Engineering deep dives'
                    ].map((t) => (
                      <label key={t} className="inline-flex items-center gap-2 text-sm text-ink-700">
                        <input type="checkbox" name="topics[]" value={t} className="h-4 w-4 rounded border-ink-300" />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="flex items-start gap-3 pt-1">
                  <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300" />
                  <span className="text-xs text-ink-700">
                    Send me the monthly Insights Digest — five hand-picked items, one click to unsubscribe.
                  </span>
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                  data-event="lead_magnet_submit"
                  data-page={SLUG}
                >
                  Subscribe to the digest
                </button>
                <p className="text-center text-[11px] text-ink-500">
                  One short email a month. You control the topics. Unsubscribe in one click.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Next steps"
        items={[
          { label: 'Practitioner guides', href: '/insights/guides', description: 'The largest specialist stream — 12 long-form PDFs by named engineers.' },
          { label: 'AI glossary', href: '/insights/glossary', description: '240 terms in the three-block format.' },
          { label: 'Commercial FAQs', href: '/insights/faqs', description: 'Forty answers on pricing, IP, residency, hand-over.' },
          { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Research co-authored with regional operators and academics.' },
          { label: 'Customer stories', href: '/insights/case-studies', description: 'Anonymised case studies with quantified outcomes.' }
        ]}
      />
    </>
  );
}
