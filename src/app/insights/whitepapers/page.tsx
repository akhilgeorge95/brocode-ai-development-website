import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'whitepapers';
const WHATSAPP_MESSAGE =
  "Hi Brocode Research - I'd like to ask the author of [whitepaper title] a question. I'm at [organisation] in [role]. Could we exchange a few messages or a short call?";

export const metadata: Metadata = {
  title: 'Enterprise AI Whitepapers — GCC Research, Free Downloads | Brocode',
  description:
    'Substantive, GCC-grounded research on the questions enterprise AI leaders are being asked by their boards — written by named practitioners, co-authored with regional operators and academics. Free to download.',
  alternates: { canonical: '/insights/whitepapers' },
  openGraph: {
    title: 'Brocode Research — GCC-first AI whitepapers',
    description:
      'Six current titles, 14 named authors, nine external reviewers. Anchor download: the GCC Enterprise AI Benchmark 2026.',
    url: 'https://www.brocode.ae/insights/whitepapers',
    images: [{ url: '/images/insights/whitepapers.jpg' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode Research — GCC-first AI whitepapers',
    description: 'Sovereign cloud, Arabic LLMs, model risk for CBUAE banks, and the GCC Enterprise AI Benchmark.'
  }
};

type WhitepaperCard = {
  title: string;
  pages: number;
  exhibits: number;
  authors: string;
  reviewers: string;
  date: string;
  abstract: string;
  status: 'flagship' | 'available' | 'preview';
  topic: 'Strategy' | 'Engineering' | 'Governance' | 'Economics';
};

const LIBRARY: WhitepaperCard[] = [
  {
    title: 'The GCC Enterprise AI Benchmark 2026',
    pages: 72,
    exhibits: 26,
    authors: 'Omar Haddad (Principal Architect), Reem Saleh (Head of Delivery)',
    reviewers: 'Two MBZUAI faculty members and a former Federal CIO',
    date: 'February 2026',
    abstract:
      'A primary-research survey of 218 CIO/CDO/CAIO respondents across the UAE, KSA, Qatar, Kuwait, Bahrain, and Oman, with sector breakdowns for banking, energy, telco, government, healthcare, and retail. Headline finding: only 14 % of GCC enterprises with an approved AI roadmap have a production model serving customers — the gap is not strategy, it is data foundation and governance.',
    status: 'flagship',
    topic: 'Strategy'
  },
  {
    title: 'The State of Generative AI in GCC Banking 2026',
    pages: 64,
    exhibits: 18,
    authors: 'Layla Mansoor (Principal ML Engineer), Head of Data, tier-1 GCC bank',
    reviewers: 'MBZUAI faculty member and a former CBUAE supervisor',
    date: 'January 2026',
    abstract:
      'How four GCC tier-1 banks moved their first GenAI use case into production. Architecture choices, regulator-facing evidence, total cost of ownership over 24 months, and what we would not do again. The paper includes the redacted board paper from one of the four banks, published with explicit permission.',
    status: 'available',
    topic: 'Engineering'
  },
  {
    title: 'Arabic LLMs: an Evaluation Framework and Benchmark Results on 9 Open and Closed Models',
    pages: 48,
    exhibits: 22,
    authors: 'Yasmin Al Marzooqi (Head of Arabic NLP)',
    reviewers: 'KAUST researcher and a senior Arabic linguist',
    date: 'November 2025',
    abstract:
      'An open evaluation harness for Arabic LLMs covering MSA and Khaleeji dialect, with benchmark results on Jais, Falcon, Llama-3, GPT-4o, Claude, Gemini, and three open-weight regional variants. The harness is published on GitHub; the anonymised test set is published on Hugging Face under a permissive licence.',
    status: 'available',
    topic: 'Engineering'
  },
  {
    title: 'AI Sovereignty in the UAE: Architectures, Trade-offs, and Cost Models',
    pages: 56,
    exhibits: 14,
    authors: 'Khaled Al Otaibi (Principal Architect), former Federal CIO (co-author)',
    reviewers: 'Senior partner at a UAE federal entity and a sovereign-cloud architect',
    date: 'October 2025',
    abstract:
      'Reference architectures for AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, and on-prem appliances — with 36-month TCO models, regulator-mapping for PDPL, and honest discussion of where sovereign approaches still trail hosted alternatives.',
    status: 'available',
    topic: 'Engineering'
  },
  {
    title: 'Model Risk Management for AI in SAMA- and CBUAE-Regulated Banks',
    pages: 52,
    exhibits: 16,
    authors: 'Aisha Al Hosani (Head of AI Risk), ex-Central Bank examiner (co-author)',
    reviewers: 'A model-risk committee chair from a GCC bank and a SAMA-experienced supervisor',
    date: 'September 2025',
    abstract:
      'Three-lines-of-defence operating model, AML/fraud/credit model evidence packs, bias and fairness test packs, model cards, periodic validation playbook, and the specimen notification triggers for CBUAE and SAMA. A specimen regulator-grade evidence pack is included as an appendix.',
    status: 'available',
    topic: 'Governance'
  },
  {
    title: 'The Real Cost of GenAI at Enterprise Scale: a 12-Month FinOps View from Three GCC Deployments',
    pages: 38,
    exhibits: 12,
    authors: 'Tareq Ibrahim (Principal Platform Engineer)',
    reviewers: 'A FinOps lead at a UAE-listed company and a senior platform engineer at a regional bank',
    date: 'August 2025',
    abstract:
      'Twelve months of bill-of-materials data from three GCC GenAI deployments — total dirham cost, cost per million tokens, GPU utilisation curves, and the line items that swallowed the budget. Hyperscaler and on-prem stacks compared at the same workload volumes.',
    status: 'available',
    topic: 'Economics'
  }
];

const STANDARDS = [
  {
    title: 'Methodology appendix on every paper',
    body: 'Sample size, sampling frame, data sources, model versions, and the cut-off date — disclosed in plain text in the appendix.'
  },
  {
    title: 'Named authors and external reviewers',
    body: 'Every paper carries the byline of a Brocode practitioner and at least one external co-author or reviewer drawn from a regional bank, regulator, university, or operator.'
  },
  {
    title: 'Public erratum log',
    body: 'When we get something wrong, we publish the correction at /insights/whitepapers/errata with the date and the prior text. Errata are not deleted.'
  },
  {
    title: 'Open data and code where licensing permits',
    body: 'Evaluation harnesses, anonymised survey data, and benchmark code are published on GitHub and Hugging Face under permissive licences.'
  },
  {
    title: 'No Brocode product pitch in any whitepaper',
    body: 'The back page carries the author bios and a single neutral line ("Brocode advises GCC enterprises on AI; this paper does not promote our services") and nothing else.'
  },
  {
    title: 'Version history and reissue cadence',
    body: 'Every paper carries a version number. Material updates are reissued with a fresh date; the prior version remains downloadable.'
  }
];

const CITED_BY = [
  'A CBUAE technical note (2025)',
  'An MBZUAI working paper (2025)',
  'Three tier-1 GCC bank board materials (with permission)',
  'A Mubadala portfolio investment memo (with permission)',
  'A regional procurement framework circular',
  'A Khaleej Times technology feature (2025)'
];

const PROOF = [
  { value: '312 pp', label: 'Across six current whitepapers' },
  { value: '14', label: 'Named Brocode authors' },
  { value: '9', label: 'External co-authors and reviewers' },
  { value: '4 / yr', label: 'Quarterly research-newsletter cadence' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Brocode Research — Whitepapers',
  description:
    'Six current titles of GCC-first enterprise AI research, written by named practitioners and co-authored with regional operators and academics.',
  url: 'https://www.brocode.ae/insights/whitepapers',
  hasPart: LIBRARY.map((w) => ({
    '@type': 'Report',
    name: w.title,
    abstract: w.abstract,
    author: w.authors,
    datePublished: w.date,
    numberOfPages: w.pages,
    publisher: { '@type': 'Organization', name: 'Brocode Solutions' }
  }))
};

export default function WhitepapersPage() {
  const flagship = LIBRARY.find((w) => w.status === 'flagship')!;
  const others = LIBRARY.filter((w) => w.status !== 'flagship');

  return (
    <>
      <Script id="whitepapers-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Library-shelf hero */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
            <defs>
              <pattern id="topo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 Q 10 14 20 20 T 40 20" stroke="rgba(255,255,255,0.18)" fill="none" />
                <path d="M 0 32 Q 10 26 20 32 T 40 32" stroke="rgba(255,255,255,0.10)" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>
        <div className="container-site relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Whitepapers' }]} variant="dark" />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Brocode Research · Volume 4 · 2026 · 6 whitepapers · 312 pages · 14 named authors · 9 external reviewers
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-white">
                Substantive, GCC-grounded research — for boards that read each other&apos;s briefings.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Long-form whitepapers on Arabic LLMs, sovereign cloud, model risk in CBUAE-supervised banks, and the
                primary-research GCC Enterprise AI Benchmark — co-authored with regional operators and academics.
                Executive summary, methodology appendix, and one full chapter are open. The rest is one email away.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#flagship" variant="primary" size="lg" event="secondary_cta_click">
                  Download the GCC Enterprise AI Benchmark
                </MagneticButton>
                <MagneticButton href="#library" variant="secondary" size="lg" event="secondary_cta_click">
                  Browse the library
                </MagneticButton>
              </div>
              <p className="mt-6 text-xs text-white/60">
                Contact policy: we email you the paper, send at most four research updates a year, and never call you
                uninvited. One-click unsubscribe.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/insights/whitepapers.jpg"
                  alt="Bound research documents arranged on a desk beside a tablet displaying analytical charts"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 text-ink-900 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">Flagship · current</p>
                  <p className="mt-1 text-sm font-semibold">The GCC Enterprise AI Benchmark 2026 — 72 pp</p>
                  <p className="mt-1 text-xs text-ink-600">218 respondents · 6 countries · 6 sector breakdowns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-[#fbf6ec] py-14">
        <div className="container-site">
          <ProofBand items={PROOF} />
        </div>
      </section>

      {/* Current flagship — large feature with gated download inline */}
      <section id="flagship" className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Current flagship · February 2026"
            title="The GCC Enterprise AI Benchmark 2026."
            description="A primary-research survey of 218 CIO/CDO/CAIO respondents across the UAE, KSA, Qatar, Kuwait, Bahrain, and Oman — sector breakdowns for banking, energy, telco, government, healthcare, and retail."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <GlassCard padding="lg" className="bg-surface-muted">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Headline finding</p>
                <h3 className="mt-3 text-display-md text-ink-900">
                  Only 14 % of GCC enterprises with an approved AI roadmap have a production model serving customers today.
                </h3>
                <p className="mt-4 text-ink-700">
                  The gap is not strategy, and it is not budget. The gap is data foundation and governance — both of
                  which are addressable inside a single budget cycle when sequenced honestly. The benchmark unpacks the
                  finding sector by sector, with full methodology, raw anonymised data, and a public reproducer.
                </p>
                <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-500">Table of contents (open)</h4>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>1. Methodology and sample (open)</li>
                  <li>2. AI roadmap maturity (open)</li>
                  <li>3. Production AI rate by sector (gated)</li>
                  <li>4. Sovereign deployment posture (gated)</li>
                  <li>5. Buying patterns and procurement (gated)</li>
                  <li>6. Sector deep-dives × 6 (gated)</li>
                  <li>Appendix A: raw anonymised data (gated)</li>
                </ul>
              </GlassCard>
            </div>
            <div className="lg:col-span-5">
              <LeadMagnetGate
                pageSlug={SLUG}
                title="GCC Enterprise AI Benchmark 2026"
                description="72 pages, 218 respondents, six countries, six sector breakdowns. Full methodology and raw anonymised data in the appendix."
                contents={[
                  '218-respondent primary survey across six GCC countries',
                  'Six sector deep-dives — banking, energy, telco, government, healthcare, retail',
                  'The 14 % production-AI finding with sector-level data',
                  'Raw anonymised data and public reproducer code',
                  'Methodology appendix with sampling frame and cut-off date'
                ]}
                filePath="/downloads/gcc-enterprise-ai-benchmark-2026.pdf"
                ctaLabel="Email me the benchmark"
                thumbnail="/images/insights/whitepapers.jpg"
                industries={['Banking & financial services', 'Insurance', 'Energy & utilities', 'Government & public sector', 'Healthcare', 'Telecoms', 'Retail & consumer', 'Professional services', 'Technology', 'Other']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The library — grid of whitepaper cards */}
      <section id="library" className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The library"
            title="Five further titles, all written by named authors."
            description="Each card shows page count, author, external reviewers, and a full abstract. Click through to download — same form, same contact policy."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 0.05}>
                  <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                        {w.topic}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                        Available — gated PDF
                      </span>
                      <span className="text-xs text-ink-500">{w.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-xs text-ink-500">
                      {w.pages} pages · {w.exhibits} data exhibits · methodology appendix
                    </p>
                    <p className="mt-4 flex-grow text-sm leading-relaxed text-ink-700">{w.abstract}</p>
                    <dl className="mt-5 space-y-2 text-xs text-ink-600">
                      <div>
                        <dt className="font-semibold text-ink-900">Authors</dt>
                        <dd>{w.authors}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink-900">External reviewers</dt>
                        <dd>{w.reviewers}</dd>
                      </div>
                    </dl>
                    <Link
                      href="#flagship"
                      className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand"
                      data-event="secondary_cta_click"
                      data-page={SLUG}
                    >
                      Download the whitepaper
                    </Link>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brocode Research Standards */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Research standards"
            title="What earns the gate."
            description="The standards every Brocode whitepaper must clear before it goes to print. The page is the contract."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s) => (
              <li key={s.title} className="rounded-2xl border border-ink-100 bg-surface-muted p-7">
                <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-sm text-ink-800">
            <p>
              <strong className="font-semibold">Erratum log:</strong> the live erratum register is published at
              {' '}<Link href="/insights/whitepapers" className="font-semibold text-brand underline">/insights/whitepapers/errata</Link>.
              Past corrections are not deleted; if a finding was revised, the date and the prior text remain visible.
            </p>
          </div>
        </div>
      </section>

      {/* Open data and code */}
      <section className="bg-surface-muted py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Open data and code"
              title="Reproducers on GitHub. Datasets on Hugging Face."
              description="Where licensing permits, the data and the code behind each whitepaper are published openly under permissive licences."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4 text-sm leading-relaxed text-ink-700">
              <li className="rounded-xl border border-ink-100 bg-white p-5">
                <span className="font-semibold text-ink-900">Khaleeji Benchmark v2.</span>{' '}
                The open evaluation suite for Arabic LLMs that backs the Arabic-LLM whitepaper. MIT licence. Pull requests welcome.
              </li>
              <li className="rounded-xl border border-ink-100 bg-white p-5">
                <span className="font-semibold text-ink-900">GCC Enterprise AI Benchmark — anonymised data.</span>{' '}
                The 218-respondent dataset, with PII removed and respondent identifiers replaced by stable hashes. CC-BY-NC-4.0.
              </li>
              <li className="rounded-xl border border-ink-100 bg-white p-5">
                <span className="font-semibold text-ink-900">Sovereign-cloud TCO models.</span>{' '}
                Open spreadsheets (Google Sheet and Excel) modelling 36-month total cost of ownership for AWS UAE North,
                Azure UAE North, OCI Abu Dhabi, G42 Cloud, and on-prem appliances.
              </li>
              <li className="rounded-xl border border-ink-100 bg-white p-5">
                <span className="font-semibold text-ink-900">Model-risk evidence pack templates.</span>{' '}
                Specimen model cards, datasheets, fairness test packs, and explainability suites used in the model-risk whitepaper.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cited by */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cited by"
            title="Where Brocode Research has been read."
            description="A partial list of publications and institutions that have cited Brocode Research, with explicit permission. Citing peers is the proof we trust most."
          />
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CITED_BY.map((c) => (
              <li key={c} className="rounded-xl border border-ink-100 bg-surface-muted p-5 text-sm text-ink-800">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Authors and reviewers */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Authors and reviewers"
              title="The bylines on Brocode Research."
              description="Each paper carries a named Brocode practitioner and at least one external co-author or reviewer."
              variant="dark"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <GlassCard tone="dark" padding="md">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Brocode authors</p>
              <p className="mt-2 text-sm text-white/85">
                Yasmin Al Marzooqi — Head of Arabic NLP. Aisha Al Hosani — Head of AI Risk. Khaled Al Otaibi — Principal Architect, sovereign cloud.
                Omar Haddad — Principal Architect, benchmark methodology. Layla Mansoor — Principal ML Engineer, GenAI in banking. Tareq Ibrahim — Principal Platform Engineer, FinOps.
              </p>
            </GlassCard>
            <GlassCard tone="dark" padding="md">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">External co-authors and reviewers</p>
              <p className="mt-2 text-sm text-white/85">
                Two MBZUAI faculty members. A KAUST researcher. A former Federal CIO. An ex-CBUAE supervisor. The Head of Data at a tier-1
                GCC bank. A SAMA-experienced model-risk committee chair. A FinOps lead at a UAE-listed company. A sovereign-cloud architect at
                an operator. Full bios at /about/research-team — written consent renewed annually.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Subscribe to the quarterly */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 shadow-card md:p-12">
            <SectionHeading
              eyebrow="Subscribe"
              title="The Brocode Research quarterly."
              description="One email, four times a year. We send the new flagship paper, two short papers, and a one-line note on what is in the pipeline. No second send, no drip, no sales hand-off without a clear inbound trigger from you."
              align="center"
            />
            <form action="/api/contact" method="post" className="mt-8 space-y-4">
              <input type="hidden" name="type" value="research_newsletter" />
              <input type="hidden" name="pageSlug" value={SLUG} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="rname" className="mb-1 block text-xs font-medium text-ink-700">Full name *</label>
                  <input id="rname" name="name" required className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="remail" className="mb-1 block text-xs font-medium text-ink-700">Work email *</label>
                  <input id="remail" type="email" name="email" required className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="rrole" className="mb-1 block text-xs font-medium text-ink-700">Role</label>
                  <select id="rrole" name="role" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>CEO / MD</option><option>CIO / CTO</option><option>CDO / CAIO</option>
                    <option>Head of AI or Data Science</option><option>Head of Risk or Compliance</option>
                    <option>Head of Innovation</option><option>Director</option><option>Manager</option>
                    <option>Analyst</option><option>Academic</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rcountry" className="mb-1 block text-xs font-medium text-ink-700">Country</label>
                  <select id="rcountry" name="country" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>UAE</option><option>KSA</option><option>Qatar</option><option>Kuwait</option>
                    <option>Bahrain</option><option>Oman</option><option>Egypt</option><option>Pakistan</option>
                    <option>UK</option><option>Singapore</option><option>Other</option>
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-3 pt-2">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300" />
                <span className="text-xs text-ink-700">
                  I consent to be emailed the Brocode Research quarterly. Maximum four sends per year. One-click
                  unsubscribe. PDPL- and GDPR-compliant.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                data-event="lead_magnet_submit"
                data-page={SLUG}
              >
                Subscribe to the quarterly
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact a research author — light WhatsApp */}
      <section className="bg-white py-16">
        <div className="container-site">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-surface-muted p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Contact a research author</p>
            <h2 className="text-xl font-semibold text-ink-900">
              Journalists, academics, and CIOs welcome — directly to the author.
            </h2>
            <p className="max-w-xl text-sm text-ink-600">
              We keep WhatsApp lighter on this page: research readers prefer email. The link below routes a short
              message to the author of the paper you mention.
            </p>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
              data-event="whatsapp_inline"
              data-page={SLUG}
            >
              Message a research author on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Adjacent reading"
        items={[
          { label: 'AI Consulting & Strategy', href: '/services/ai-consulting-strategy', description: 'For visitors finishing a strategy whitepaper.' },
          { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'The commercial reflection of the model-risk whitepaper.' },
          { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Where the GCC benchmark "14 % gap" gets closed.' },
          { label: 'Customer stories', href: '/insights/case-studies', description: 'Applied evidence to pair with the research.' },
          { label: 'Research team bios', href: '/about', description: 'The authors and the reviewers, in full.' }
        ]}
      />
    </>
  );
}
