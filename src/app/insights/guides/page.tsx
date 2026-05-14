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
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'guides';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I'd like the Practitioner Pack for [Arabic NLP / sovereign RAG / MLOps / notebook-to-production]. Could you send the PDFs and let me know when the next guide drops?";

export const metadata: Metadata = {
  title: 'Practitioner Guides for Enterprise AI — Arabic NLP, RAG, MLOps | Brocode',
  description:
    'Long-form practitioner guides written by named Brocode engineers — 40 to 80 pages each, with companion code on GitHub. Arabic NLP at production scale, RAG that survives the regulator, MLOps for sovereign cloud.',
  alternates: { canonical: '/insights/guides' },
  openGraph: {
    title: 'Brocode Practitioner Guides — engineering handbooks for GCC AI teams',
    description:
      '12 long-form guides by named principal engineers. Arabic NLP, sovereign RAG, MLOps, notebook-to-production, vector-database selection, agentic systems.',
    url: 'https://www.brocode.ae/insights/guides',
    images: [{ url: '/images/insights/guides.jpg' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode Practitioner Guides',
    description: '12 long-form guides by named engineers. Companion code on GitHub.'
  }
};

type Track = 'NLP' | 'MLOps' | 'Sovereign Cloud' | 'Governance';

type Guide = {
  title: string;
  track: Track;
  pages: number;
  author: string;
  authorRole: string;
  reviewed: string;
  downloads: number;
  artefact: string;
  abstract: string;
};

const LIBRARY: Guide[] = [
  {
    title: 'Arabic NLP at Production Scale',
    track: 'NLP',
    pages: 72,
    author: 'Yasmin Al Marzooqi',
    authorRole: 'Head of Arabic NLP',
    reviewed: 'February 2026',
    downloads: 3120,
    artefact: 'github.com/brocode-ai/khaleeji-benchmark',
    abstract:
      'Tokenisation, Khaleeji dialect handling, NER, intent classification, RAG retrieval over Arabic corpora, and evaluation with the Khaleeji Benchmark v2. Companion code, datasets, and reproducible eval suite.'
  },
  {
    title: 'Evaluating Arabic LLMs with the Khaleeji Benchmark',
    track: 'NLP',
    pages: 40,
    author: 'Yasmin Al Marzooqi',
    authorRole: 'Head of Arabic NLP',
    reviewed: 'January 2026',
    downloads: 1840,
    artefact: 'huggingface.co/datasets/brocode-ai/khaleeji-v2',
    abstract:
      'Benchmark methodology, leaderboard interpretation, and what to score in your own evals — including code-switching cases the textbook benchmarks miss.'
  },
  {
    title: 'Self-Hosting Falcon and Jais on a Single DGX H100',
    track: 'NLP',
    pages: 52,
    author: 'Tareq Ibrahim',
    authorRole: 'Principal Platform Engineer',
    reviewed: 'March 2026',
    downloads: 2410,
    artefact: 'github.com/brocode-ai/dgx-h100-llm-stack',
    abstract:
      'vLLM tuning, batching, KV-cache sizing, GPU pricing — and the 36-month TCO model versus Azure OpenAI and OpenAI Enterprise.'
  },
  {
    title: 'RAG That Survives the Regulator',
    track: 'Governance',
    pages: 58,
    author: 'Aisha Al Hosani',
    authorRole: 'Head of AI Risk',
    reviewed: 'February 2026',
    downloads: 2670,
    artefact: 'github.com/brocode-ai/rag-evidence-pack',
    abstract:
      'Retrieval architecture, source citation, faithfulness evaluation, prompt-injection defence, audit trail and WORM logging, and control mapping to CBUAE, FSRA, and NCA.'
  },
  {
    title: 'MLOps for Sovereign-Cloud Deployments',
    track: 'Sovereign Cloud',
    pages: 66,
    author: 'Khaled Al Otaibi',
    authorRole: 'Principal Architect',
    reviewed: 'January 2026',
    downloads: 1980,
    artefact: 'github.com/brocode-ai/sovereign-mlops-blueprints',
    abstract:
      'Landing-zone patterns across AWS UAE North, Azure UAE North, OCI Abu Dhabi, and G42 Cloud. CI/CD across sovereign boundaries, cross-cloud observability, and the operating model.'
  },
  {
    title: 'From Notebook to Live Model in 90 Days',
    track: 'MLOps',
    pages: 44,
    author: 'Reem Saleh',
    authorRole: 'Head of Delivery',
    reviewed: 'November 2025',
    downloads: 3540,
    artefact: 'github.com/brocode-ai/notebook-to-production',
    abstract:
      'The 4-week discover, 12-week build, 4-week harden recipe with concrete artefacts at each stage and a sample steering deck.'
  },
  {
    title: 'Vector Database Selection for GCC Workloads',
    track: 'MLOps',
    pages: 48,
    author: 'Omar Haddad',
    authorRole: 'Principal Architect',
    reviewed: 'December 2025',
    downloads: 1620,
    artefact: 'github.com/brocode-ai/vectordb-benchmark',
    abstract:
      'pgvector, Weaviate, Vespa, Milvus, Pinecone — benchmark on a 50M-vector Arabic-English corpus, with cost, latency, and sovereignty trade-offs.'
  },
  {
    title: 'Agentic Systems in Production',
    track: 'MLOps',
    pages: 56,
    author: 'Tareq Ibrahim',
    authorRole: 'Principal Platform Engineer',
    reviewed: 'February 2026',
    downloads: 1410,
    artefact: 'github.com/brocode-ai/agent-supervisor-pattern',
    abstract:
      'The supervisor pattern with LangGraph and Temporal, exception-closure SLAs, and the test harness for non-deterministic agent workflows.'
  },
  {
    title: 'Prompt Engineering Patterns for Regulated Industries',
    track: 'NLP',
    pages: 42,
    author: 'Layla Mansoor',
    authorRole: 'Principal ML Engineer',
    reviewed: 'October 2025',
    downloads: 2230,
    artefact: 'github.com/brocode-ai/prompt-pattern-library',
    abstract:
      'Twelve named patterns with regulator-mapped redaction rules, prompt-injection defence, and an open prompt-evaluation harness.'
  },
  {
    title: 'Fine-Tuning vs RAG: a Decision Framework',
    track: 'NLP',
    pages: 46,
    author: 'Yasmin Al Marzooqi',
    authorRole: 'Head of Arabic NLP',
    reviewed: 'September 2025',
    downloads: 1980,
    artefact: 'github.com/brocode-ai/finetune-rag-decision',
    abstract:
      'When fine-tuning is the right answer, when RAG is, and when the answer is both. Cost models, evaluation methodology, and Khaleeji-specific examples.'
  },
  {
    title: 'Data Residency Law for AI in the GCC',
    track: 'Governance',
    pages: 50,
    author: 'Aisha Al Hosani',
    authorRole: 'Head of AI Risk',
    reviewed: 'December 2025',
    downloads: 1240,
    artefact: 'Reference matrix — open PDF',
    abstract:
      'UAE PDPL, DIFC DP Law, KSA PDPL, Qatar PDPPL, Bahrain PDPL — with a side-by-side regulator matrix and a sample DPA template.'
  },
  {
    title: 'AI Talent Strategy for GCC Enterprises',
    track: 'Sovereign Cloud',
    pages: 38,
    author: 'Reem Saleh',
    authorRole: 'Head of Delivery',
    reviewed: 'January 2026',
    downloads: 980,
    artefact: 'Role pack — open PDF',
    abstract:
      'How to build a 12-person AI capability in 12 months — role definitions, salary bands, hiring channels, and the relocation-versus-local trade-off.'
  }
];

const TRACKS: { id: Track; label: string; description: string; tone: string }[] = [
  { id: 'NLP', label: 'Arabic NLP', description: 'Five guides on Arabic NLP at production scale — tokenisation, dialect, fine-tuning, evaluation.', tone: 'bg-amber-50 text-amber-900' },
  { id: 'MLOps', label: 'MLOps', description: 'Four guides on notebook-to-production discipline, vector-database selection, and agentic systems.', tone: 'bg-emerald-50 text-emerald-900' },
  { id: 'Sovereign Cloud', label: 'Sovereign Cloud', description: 'Two guides on UAE-resident landing-zone patterns and the talent strategy that powers them.', tone: 'bg-sky-50 text-sky-900' },
  { id: 'Governance', label: 'Governance', description: 'Two guides on regulator-survivable RAG and data-residency law across the GCC.', tone: 'bg-rose-50 text-rose-900' }
];

const TESTIMONIALS = [
  {
    quote:
      'Forwarded the Arabic NLP guide to my team on Friday afternoon. By Monday the architecture discussion was four months ahead. The dialect chapter alone justifies the download.',
    role: 'Head of AI, UAE federal entity',
    country: 'UAE'
  },
  {
    quote:
      'The RAG governance guide reads like an audit working paper. We lifted six of the controls into our model-risk register and the second-line lead waved them through.',
    role: 'Lead ML Engineer, GCC bank',
    country: 'KSA'
  },
  {
    quote:
      'Notebook-to-90-days is the only schedule I have seen from a vendor that actually accounts for the procurement freeze in week six. The steering deck template went straight into our PMO.',
    role: 'Director of Data Platform, regional telco',
    country: 'Qatar'
  }
];

const PROOF = [
  { value: '12 guides', label: 'In the current library' },
  { value: '240 pp', label: 'In the Practitioner Pack' },
  { value: '14,200', label: 'Verified-practitioner downloads' },
  { value: '1 / qtr', label: 'New guide cadence' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Brocode Practitioner Guides',
  description:
    'Twelve long-form practitioner guides on Arabic NLP, MLOps, sovereign cloud, and AI governance.',
  url: 'https://www.brocode.ae/insights/guides',
  hasPart: LIBRARY.map((g) => ({
    '@type': 'TechArticle',
    name: g.title,
    abstract: g.abstract,
    author: g.author,
    dateModified: g.reviewed,
    numberOfPages: g.pages
  }))
};

export default function GuidesPage() {
  return (
    <>
      <Script id="guides-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Practitioner Pack hero */}
      <section className="relative isolate overflow-hidden bg-[#0a0e1f] text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-amber-500/15 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="container-site relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Practitioner guides' }]} variant="dark" />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Practitioner Pack · Q1 2026 · 4 guides · 240 pages · 3 GitHub repos
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-white">
                Engineering handbooks for teams shipping AI in the GCC — written by engineers, not marketers.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Twelve long-form practitioner guides, each 40 to 80 pages, each authored by a named Brocode principal
                engineer, each tied to a public GitHub or Hugging Face artefact. Quarterly cadence with a visible
                last-reviewed date. One email a quarter — no sales rotation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#pack" variant="primary" size="lg" event="secondary_cta_click">
                  Download the Practitioner Pack
                </MagneticButton>
                <MagneticButton href="#library" variant="secondary" size="lg" event="secondary_cta_click">
                  Browse all 12 guides
                </MagneticButton>
              </div>
              <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <li className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <p className="font-mono text-2xl font-bold text-amber-300">14,200</p>
                  <p className="mt-1 text-xs text-white/60">downloads</p>
                </li>
                <li className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <p className="font-mono text-2xl font-bold text-amber-300">12</p>
                  <p className="mt-1 text-xs text-white/60">guides</p>
                </li>
                <li className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <p className="font-mono text-2xl font-bold text-amber-300">626 pp</p>
                  <p className="mt-1 text-xs text-white/60">in the library</p>
                </li>
                <li className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <p className="font-mono text-2xl font-bold text-amber-300">9</p>
                  <p className="mt-1 text-xs text-white/60">GitHub repos</p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/insights/guides.jpg"
                  alt="Engineer working through a Brocode practitioner guide on a laptop with annotated diagrams"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1f] via-[#0a0e1f]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 text-ink-900 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">Cover · open chapter</p>
                  <p className="mt-1 text-sm font-semibold">Arabic NLP at Production Scale — 72 pp</p>
                  <p className="mt-1 text-xs text-ink-600">Chapter 3 (Khaleeji dialect handling) is open without a gate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What a Brocode guide looks like */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What a Brocode guide looks like"
              title="40 to 80 pages. Named author. Companion code. Quarterly review."
              description="The standards every guide must clear before publication."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-700">
                A guide is not a blog post and it is not a whitepaper. It is the engineering handbook a competent team
                can read on a Monday and act on by Friday. Every guide carries the photo and LinkedIn handle of the
                principal engineer who wrote it, a visible last-reviewed date, and a link to the public GitHub or
                Hugging Face artefact that backs the content. We publish the first chapter without a gate so the
                visitor can verify quality before exchanging an email.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                We send one email a quarter — the new guide and a short editorial note. No 14-touch nurture sequence,
                no sales rotation, no second send. If a guide is wrong, the erratum is published with the date and the
                prior text. The standard we hold ourselves to is whether a senior engineer who has never met us could
                use the guide unaided.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-16">
        <div className="container-site">
          <ProofBand items={PROOF} variant="dark" />
        </div>
      </section>

      {/* The Practitioner Pack — anchor lead magnet */}
      <section id="pack" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Brocode 2026 Practitioner Pack"
            description="A single ZIP containing the latest editions of the four most-downloaded guides — Arabic NLP at Production Scale, RAG That Survives the Regulator, MLOps for Sovereign-Cloud Deployments, and From Notebook to Live Model in 90 Days. Totals 240 pages and three companion GitHub repositories."
            contents={[
              'Arabic NLP at Production Scale — 72 pages (latest edition)',
              'RAG That Survives the Regulator — 58 pages (latest edition)',
              'MLOps for Sovereign-Cloud Deployments — 66 pages (latest edition)',
              'From Notebook to Live Model in 90 Days — 44 pages (latest edition)',
              'Three companion GitHub repos with pinned versions and a CHANGELOG'
            ]}
            filePath="/downloads/practitioner-pack-q1-2026.pdf"
            ctaLabel="Email me the Pack"
            thumbnail="/images/insights/guides.jpg"
          />
        </div>
      </section>

      {/* Featured guides — Bento grid */}
      <section id="library" className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The full library"
            title="Twelve guides, organised by track."
            description="Sorted by track — NLP, MLOps, Sovereign Cloud, Governance. Each tile shows the page count, the author, the last-reviewed date, and the public artefact link."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {TRACKS.map((t) => (
              <li key={t.id}>
                <span className={`rounded-full px-4 py-1.5 text-xs font-semibold ${t.tone}`}>
                  {t.label} · {LIBRARY.filter((g) => g.track === t.id).length} guides
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-16">
            {TRACKS.map((track) => (
              <div key={track.id}>
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{track.label} track</p>
                    <h3 className="mt-1 text-2xl font-semibold text-ink-900">{track.description}</h3>
                  </div>
                </div>
                <BentoGrid>
                  {LIBRARY.filter((g) => g.track === track.id).map((g, i) => (
                    <BentoCell key={g.title} span={i === 0 ? 'lg' : 'md'} variant="light">
                      <div className="flex h-full flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                            {g.pages} pp
                          </span>
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                            Reviewed {g.reviewed}
                          </span>
                          <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-800">
                            {g.downloads.toLocaleString()} downloads
                          </span>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold text-ink-900">{g.title}</h4>
                        <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-600">{g.abstract}</p>
                        <div className="mt-5 space-y-2 text-xs text-ink-500">
                          <p>
                            <span className="font-semibold text-ink-900">{g.author}</span> — {g.authorRole}
                          </p>
                          <p>
                            <span className="font-semibold text-ink-900">Public artefact:</span>{' '}
                            <span className="font-mono">{g.artefact}</span>
                          </p>
                        </div>
                        <Link
                          href="#pack"
                          className="link-arrow mt-5 inline-flex text-sm font-semibold text-brand"
                          data-event="secondary_cta_click"
                          data-page={SLUG}
                        >
                          Download this guide
                        </Link>
                      </div>
                    </BentoCell>
                  ))}
                </BentoGrid>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample chapter */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sample chapter — open without a gate"
            title="Chapter 3: Khaleeji dialect handling at production scale."
            description="From the Arabic NLP guide. The full chapter is publicly readable so you can verify the depth before exchanging an email."
          />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <article className="lg:col-span-8 rounded-2xl border border-ink-100 bg-white p-8 md:p-10 shadow-card">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-500">Chapter 3 · pages 24–38</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink-900">Why MSA-trained models fail on Khaleeji calls.</h3>
              <div className="mt-5 space-y-4 text-ink-700">
                <p>
                  Modern Standard Arabic is a literary register; almost nobody speaks it on a contact-centre call. A
                  customer in Sharjah complaining about an inflated du bill will switch between Khaleeji vocabulary, an
                  English brand name, and a Bahraini turn of phrase three times in a sentence. The MSA-tuned ASR
                  transcribes the first half competently, mis-renders the brand name, and emits a confidence score the
                  application layer treats as gospel.
                </p>
                <p>
                  The remedy is not a bigger model. It is a calibration set that contains the dialect, the
                  code-switching, and the brand-named entities the deployment actually encounters. We construct one in
                  three weeks per dialect: a 1,200-utterance reference set across MSA, Khaleeji, Levantine, and
                  Egyptian, balanced for gender, age band, channel quality, and noise profile. The set lives in the
                  client&apos;s environment, refreshes quarterly, and runs as a CI step on every model push.
                </p>
                <p>
                  The detail that matters: Khaleeji morphology produces dozens of valid surface forms for the same
                  lemma. NER trained on MSA collapses them into a single noisy class. The Khaleeji Benchmark v2 splits
                  them. The benchmark scores the same models 9–14 F1 points lower on Khaleeji than on MSA — a gap that
                  is invisible in the published model cards because the model cards report MSA.
                </p>
              </div>
              <p className="mt-6 font-mono text-xs text-ink-500">
                Chapter continues — pages 28-38 — Khaleeji NER feature engineering · dialect classifier · evaluation gates.
              </p>
            </article>
            <aside className="lg:col-span-4 space-y-5">
              <GlassCard padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Public artefact</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">github.com/brocode-ai/khaleeji-benchmark</p>
                <p className="mt-2 text-xs text-ink-600">
                  MIT-licensed eval harness with 1,200-utterance reference set. Pull requests welcome.
                </p>
              </GlassCard>
              <GlassCard padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Author</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Yasmin Al Marzooqi</p>
                <p className="mt-1 text-xs text-ink-600">Head of Arabic NLP. MBZUAI alum. Eight years on Arabic NLP in production.</p>
              </GlassCard>
            </aside>
          </div>
        </div>
      </section>

      {/* What readers say */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="What readers say"
            title="Three pull-quotes from practitioners."
            description="Anonymised at the request of their employers — role and country preserved."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.role} className="flex h-full flex-col rounded-2xl border border-ink-100 bg-surface-muted p-7">
                <p className="font-mono text-xs uppercase tracking-wider text-brand">{t.country}</p>
                <p className="mt-4 flex-grow text-base leading-relaxed text-ink-800">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-ink-900">{t.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quarterly digest subscribe */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 shadow-card md:p-12">
            <SectionHeading
              eyebrow="Quarterly digest"
              title="One email a quarter. New guide, short editorial note. That is it."
              align="center"
            />
            <form action="/api/contact" method="post" className="mt-8 space-y-4">
              <input type="hidden" name="type" value="guides_quarterly" />
              <input type="hidden" name="pageSlug" value={SLUG} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="gemail" className="mb-1 block text-xs font-medium text-ink-700">Work email *</label>
                  <input id="gemail" type="email" name="email" required placeholder="you@yourorg.ae" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="grole" className="mb-1 block text-xs font-medium text-ink-700">Role</label>
                  <select id="grole" name="role" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>Head of AI</option><option>Head of Data</option><option>Head of Engineering</option>
                    <option>Principal</option><option>Lead</option><option>IC</option>
                    <option>Researcher</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gorg" className="mb-1 block text-xs font-medium text-ink-700">Organisation type</label>
                  <select id="gorg" name="orgType" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>Bank</option><option>Telco</option><option>Government</option>
                    <option>Energy</option><option>Healthcare</option><option>Retail</option>
                    <option>Tech</option><option>Consultancy</option><option>Academic</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gcountry" className="mb-1 block text-xs font-medium text-ink-700">Country</label>
                  <select id="gcountry" name="country" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>UAE</option><option>KSA</option><option>Qatar</option><option>Bahrain</option>
                    <option>Kuwait</option><option>Oman</option><option>Egypt</option><option>Other</option>
                  </select>
                </div>
              </div>
              <fieldset>
                <legend className="mb-2 text-xs font-medium text-ink-700">Which guides interest you most?</legend>
                <div className="grid grid-cols-1 gap-1.5 rounded-lg border border-ink-200 bg-white p-3 md:grid-cols-2">
                  {LIBRARY.slice(0, 8).map((g) => (
                    <label key={g.title} className="inline-flex items-center gap-2 text-sm text-ink-700">
                      <input type="checkbox" name="interests[]" value={g.title} className="h-4 w-4 rounded border-ink-300" />
                      {g.title}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="flex items-start gap-3 pt-1">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300" />
                <span className="text-xs text-ink-700">
                  Send me the quarterly Brocode guides digest — one email per quarter, unsubscribe in one click.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                data-event="lead_magnet_submit"
                data-page={SLUG}
              >
                Subscribe to the quarterly digest
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-ink-600">
              Prefer chat?{' '}
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1faa53] underline"
                data-event="whatsapp_inline"
                data-page={SLUG}
              >
                Message us on WhatsApp
              </a>
              {' '}— a senior engineer answers.
            </p>
          </div>
        </div>
      </section>

      {/* The next guide drops in */}
      <section className="bg-white py-16">
        <div className="container-site">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-[#fbf6ec] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Next guide</p>
            <h2 className="text-xl font-semibold text-ink-900">
              &ldquo;Continuous Pre-Training of Arabic LLMs on a Sovereign Cluster&rdquo; — drops Q2 2026.
            </h2>
            <p className="max-w-xl text-sm text-ink-600">
              60 pages, authored by Yasmin Al Marzooqi and Tareq Ibrahim. Companion code lives in
              github.com/brocode-ai/continuous-pretrain.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Browse adjacent insights"
        items={[
          { label: 'Insights hub', href: '/insights', description: 'For visitors wanting whitepapers, glossary, FAQs, blog.' },
          { label: 'AI glossary', href: '/insights/glossary', description: 'For visitors who need a primer before a guide.' },
          { label: 'Open-source contributions', href: '/technology/open-source', description: 'Every guide ships with an artefact — they live here.' },
          { label: 'NLP services', href: '/services/natural-language-processing', description: 'The commercial reflection of the Arabic NLP guides.' },
          { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The commercial reflection of the MLOps guides.' }
        ]}
      />
    </>
  );
}
