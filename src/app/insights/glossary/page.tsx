import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'glossary';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I came across your AI glossary. Could you send me the Pocket Guide PDF? I'd also be interested in the monthly vocabulary email.";

export const metadata: Metadata = {
  title: 'AI Glossary UAE — 240 Terms, Plain English, GCC Examples | Brocode',
  description:
    'Every AI term you will hear in a UAE boardroom, defined in under 60 seconds — plain definition, GCC example, and a one-line "why it matters" anchor. 240 terms, reviewed quarterly by named engineers, Arabic-script parity on regional terms.',
  alternates: { canonical: '/insights/glossary' },
  openGraph: {
    title: 'Brocode AI Glossary — 240 terms in 60 seconds each',
    description:
      'Plain English, regional examples, Arabic-script parity on Arabic-specific entries. Reviewed quarterly by named engineers.',
    url: 'https://www.brocode.ae/insights/glossary',
    images: [{ url: '/images/insights/glossary.jpg' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode AI Glossary — 240 terms in 60 seconds each',
    description: 'Plain English. GCC examples. Arabic-script parity.'
  }
};

type Category = 'Foundation' | 'Classical ML' | 'MLOps' | 'Governance' | 'Arabic-specific';

type Term = {
  term: string;
  arabic?: string;
  category: Category;
  definition: string;
  example: string;
  why: string;
  link?: string;
};

const SAMPLE: Term[] = [
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    category: 'Foundation',
    definition:
      'A pattern where a language model is fed relevant passages from your own corpus at query time, so its answer is grounded in your data rather than its training memory.',
    example:
      'A UAE bank uses RAG to answer customer queries against its product disclosures — the LLM cites the disclosure page rather than inventing a rate.',
    why:
      'It is the cheapest way to get an LLM to be useful on private data without retraining.',
    link: '/insights/guides'
  },
  {
    term: 'Fine-tuning',
    category: 'Foundation',
    definition:
      'Updating a model\'s weights on a small, task-specific dataset so it performs better on that task. Distinct from RAG, which leaves the weights alone.',
    example:
      'A federal entity fine-tunes Falcon-7B on 8,000 Khaleeji intent-classification examples and improves accuracy from 71 % to 88 %.',
    why:
      'It is the right answer when behaviour, not knowledge, is what you need to change.',
    link: '/insights/guides'
  },
  {
    term: 'Vector database',
    category: 'MLOps',
    definition:
      'A database optimised for nearest-neighbour search over high-dimensional embeddings, used as the retrieval layer in most RAG systems.',
    example:
      'A telco stores 4 million product-disclosure passages as 768-dim embeddings in pgvector and serves them at p95 18 ms.',
    why:
      'Choice of vector store affects latency, cost, and where the data lives — three things procurement asks about.'
  },
  {
    term: 'Context window',
    category: 'Foundation',
    definition:
      'The maximum number of tokens (roughly, sub-words) a language model can consider at one time. Beyond the window, content is forgotten.',
    example:
      'Claude 3.5 has a 200K-token window; GPT-4o has 128K; Jais 13B has 8K. Window size shapes RAG chunking strategy.',
    why:
      'Window size is the difference between answering a single email and answering a 60-page board pack.'
  },
  {
    term: 'AI agent',
    category: 'Foundation',
    definition:
      'A program that uses a language model to decide what tool to call next, in a loop, until a goal is met. Distinguished from a chatbot by its ability to take actions.',
    example:
      'A claims agent in a UAE insurer pulls the policy, queries the fraud model, drafts a settlement letter, and routes it for adjuster review.',
    why:
      'Agents close the loop between language and action — they are how AI moves from advice to work.',
    link: '/insights/guides'
  },
  {
    term: 'Khaleeji Arabic',
    arabic: 'العربية الخليجية',
    category: 'Arabic-specific',
    definition:
      'The cluster of Gulf Arabic dialects spoken across the UAE, KSA, Qatar, Bahrain, Kuwait, and Oman. Distinct from Modern Standard Arabic in vocabulary, morphology, and phonology.',
    example:
      'A Sharjah-based call to a contact-centre is in Khaleeji; an MSA-tuned model mis-transcribes 9–14 % more tokens than a Khaleeji-tuned one.',
    why:
      'Most production AI for GCC customers fails on Khaleeji unless explicitly tuned for it.',
    link: '/services/natural-language-processing'
  },
  {
    term: 'MSA (Modern Standard Arabic)',
    arabic: 'العربية الفصحى الحديثة',
    category: 'Arabic-specific',
    definition:
      'The pan-Arab literary and broadcast register, used in print, news, and official documents. Almost nobody speaks it in everyday conversation.',
    example:
      'A federal-entity letter is in MSA; the call-centre conversation about that letter is in Khaleeji.',
    why:
      'Most published Arabic NLP benchmarks score MSA — your production data is rarely MSA.',
    link: '/services/natural-language-processing'
  },
  {
    term: 'Tashkeel',
    arabic: 'التشكيل',
    category: 'Arabic-specific',
    definition:
      'Diacritical marks that disambiguate Arabic vowels and grammatical roles. Usually absent in everyday text; sometimes essential for disambiguation.',
    example:
      'Without tashkeel, the word "كتب" can mean "he wrote", "books", or "was written" — a Khaleeji intent classifier has to handle all three.',
    why:
      'Tashkeel handling is a tokenisation question with downstream model-quality effects.'
  },
  {
    term: 'Data residency',
    category: 'Governance',
    definition:
      'A requirement that data remain physically within a specified jurisdiction at rest, in transit, and during processing.',
    example:
      'A CBUAE-supervised bank requires customer PII to remain in UAE-resident infrastructure — practically, in AWS UAE North, Azure UAE North, OCI Abu Dhabi, or G42 Cloud.',
    why:
      'Residency drives architecture, vendor selection, and contract clauses. Get it wrong at design and you pay at audit.',
    link: '/services/self-hosted-llm-infrastructure'
  },
  {
    term: 'Hallucination',
    category: 'Foundation',
    definition:
      'When a language model produces a fluent, plausible answer that is factually wrong — usually because the answer was not grounded in retrieved evidence.',
    example:
      'An ungrounded chatbot tells a customer a fictitious branch is open at midnight; the customer drives there and complains.',
    why:
      'Hallucinations are the failure mode procurement most worries about. RAG, citation, and refusal patterns reduce them — not eliminate them.'
  },
  {
    term: 'Model drift',
    category: 'MLOps',
    definition:
      'A gradual deterioration in model performance because the live data distribution has drifted away from the training data.',
    example:
      'A fraud model trained pre-Ramadan misses a seasonal mule-account pattern; precision falls 12 % in the first week of the holy month.',
    why:
      'Drift detection is the single MLOps capability separating a hobby model from a production one.'
  },
  {
    term: 'Model card',
    category: 'Governance',
    definition:
      'A short structured document recording what a model does, what data trained it, how it was evaluated, and its known limits — the regulator-facing equivalent of a datasheet.',
    example:
      'A CBUAE-supervised bank publishes a model card for every AI model in customer-facing production. The card is the first thing the supervisor asks for.',
    why:
      'Model cards turn AI risk into a documented, auditable artefact. No card, no production deployment.',
    link: '/services/responsible-ai-governance'
  },
  {
    term: 'Embedding',
    category: 'Foundation',
    definition:
      'A vector of numbers representing the meaning of a piece of text, image, or audio in a high-dimensional space — so that semantically similar items sit near each other.',
    example:
      'A retailer embeds product titles in Arabic and English in a shared 768-dim space; a Khaleeji query finds the English product.',
    why:
      'Embeddings are how search escapes keyword matching and starts behaving like a human reader.'
  },
  {
    term: 'TDRA-compliance',
    category: 'Governance',
    definition:
      'Conformance with the technical and licensing standards set by the UAE Telecommunications and Digital Government Regulatory Authority for connected and AI-enabled services.',
    example:
      'A federal-entity AI service exposes APIs through a TDRA-licensed interconnect; data does not leave the UAE.',
    why:
      'TDRA-alignment is a procurement gate for federal projects. It shapes architecture and operating model.'
  },
  {
    term: 'Quantisation',
    category: 'MLOps',
    definition:
      'Reducing the numeric precision of a model\'s weights — for example, from 16-bit to 8-bit or 4-bit — to shrink memory and accelerate inference.',
    example:
      'A 13B-parameter LLM quantised to INT4 fits on a single 24 GB GPU and serves at twice the throughput.',
    why:
      'Quantisation is how a self-hosted model becomes commercially viable on a sensible GPU bill.'
  }
];

const CATEGORIES: { id: Category; label: string; count: number }[] = [
  { id: 'Foundation', label: 'Foundation models', count: 62 },
  { id: 'Classical ML', label: 'Classical ML', count: 48 },
  { id: 'MLOps', label: 'MLOps & infrastructure', count: 54 },
  { id: 'Governance', label: 'Governance & risk', count: 40 },
  { id: 'Arabic-specific', label: 'Arabic-specific', count: 36 }
];

const MOST_READ_TERMS = ['RAG', 'AI agent', 'Fine-tuning', 'Data residency', 'Vector database', 'Khaleeji Arabic'];

const PROOF = [
  { value: '240', label: 'Terms in the library' },
  { value: '5', label: 'Categories — foundation to Arabic-specific' },
  { value: 'Qtr', label: 'Reviewed every quarter by named engineers' },
  { value: '60 s', label: 'Average time to read an entry' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Brocode AI Glossary',
  description: 'A curated 240-term AI glossary with plain definitions, GCC examples, and a "why it matters" anchor on every entry.',
  url: 'https://www.brocode.ae/insights/glossary',
  hasDefinedTerm: SAMPLE.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: 'https://www.brocode.ae/insights/glossary',
    termCode: t.category
  }))
};

export default function GlossaryPage() {
  return (
    <>
      <Script id="glossary-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Typographic search-feel hero */}
      <section className="relative isolate overflow-hidden bg-[#fbf6ec]">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div className="flex h-full items-center justify-center">
            <p className="font-serif text-[20rem] leading-none text-ink-900 tracking-tighter">A</p>
          </div>
        </div>
        <div className="container-site relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'AI Glossary' }]} />
          <div className="mt-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              The Brocode AI Glossary · 240 terms · 5 categories
            </p>
            <h1 className="mt-5 text-balance text-display-xl text-ink-900">
              Every AI term you&apos;ll hear in a UAE boardroom — defined in under 60 seconds.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              Plain English, a one-sentence GCC example, and a one-line note on why it matters to your business. No
              Wikipedia walls of text. Arabic-script parity on Arabic-specific entries. Reviewed quarterly by a named
              principal engineer.
            </p>
          </div>

          {/* Search-feel widget */}
          <div className="mt-12 max-w-3xl">
            <div className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-6 py-5 shadow-card transition focus-within:border-brand">
              <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-ink-400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Try: RAG · fine-tuning · Arabic NLP · data residency · MLOps · AI agent"
                className="flex-grow bg-transparent text-base text-ink-900 placeholder:text-ink-400 focus:outline-none"
                aria-label="Search the glossary"
              />
              <span className="hidden rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold text-white sm:inline">
                240 terms
              </span>
            </div>

            {/* A–Z jump bar */}
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l) => (
                <li key={l}>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-semibold text-ink-700 hover:bg-ink-900 hover:text-white">
                    {l}
                  </span>
                </li>
              ))}
            </ul>

            {/* Category filter chips */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-semibold text-ink-700">
                    {c.label}
                    <span className="text-ink-400">{c.count}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href="#pocket" variant="primary" size="lg" event="secondary_cta_click">
              Download the 24-page Pocket Guide
            </MagneticButton>
            <MagneticButton href="#subscribe" variant="secondary" size="lg" event="secondary_cta_click">
              Get the monthly vocabulary email
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* How an entry is built */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How an entry is built"
              title="A consistent three-block format on every term."
              description="The shortest accurate answer, in the same shape every time. Definition. Example. Why it matters."
            />
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-5 text-sm leading-relaxed text-ink-700">
              <li className="rounded-2xl border border-ink-100 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Block 1 · Plain definition</p>
                <p className="mt-2 text-base text-ink-900">
                  Forty words or fewer. No jargon. No analogies that require a second analogy. A non-technical reader
                  can quote it into a board paper.
                </p>
              </li>
              <li className="rounded-2xl border border-ink-100 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Block 2 · UAE / GCC example</p>
                <p className="mt-2 text-base text-ink-900">
                  One sentence, regionally grounded. A UAE bank, a federal entity, a Saudi retailer, a Qatari hospital
                  — the example is recognisable to a GCC reader within five seconds.
                </p>
              </li>
              <li className="rounded-2xl border border-ink-100 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Block 3 · Why it matters to your business</p>
                <p className="mt-2 text-base text-ink-900">
                  One sentence on the commercial or operational consequence. If the visitor remembers nothing else,
                  this is the line they remember.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-16">
        <div className="container-site">
          <ProofBand items={PROOF} variant="dark" />
        </div>
      </section>

      {/* Most-read this month */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Most-read this month"
            title="What other readers searched for first."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {MOST_READ_TERMS.map((t, i) => (
              <li key={t} className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm shadow-card">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-900 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-semibold text-ink-900">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Browse by category"
            title="Five tracks across the 240 terms."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <article className="card flex h-full flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.count} terms</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{c.label}</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    {c.id === 'Foundation' && 'LLM, transformer, attention, embedding, RAG, context window, agent, tool use.'}
                    {c.id === 'Classical ML' && 'Supervised, unsupervised, reinforcement, gradient descent, overfitting, ROC.'}
                    {c.id === 'MLOps' && 'Training, inference, drift, observability, model registry, vector database.'}
                    {c.id === 'Governance' && 'Model risk, bias, fairness, audit trail, data residency, TDRA, CBUAE, FSRA.'}
                    {c.id === 'Arabic-specific' && 'Khaleeji, MSA, NER, tashkeel, tatweel — with Arabic-script parity.'}
                  </p>
                  <span className="link-arrow mt-5 inline-flex text-sm font-semibold text-brand">
                    Browse this category
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample 15 terms inline — BentoGrid with three-block format */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sample entries — read inline"
            title="Fifteen terms in the three-block format."
            description="The first chapter of the glossary, rendered openly. Arabic-script parity is shown on Arabic-specific terms."
          />
          <BentoGrid className="mt-12">
            {SAMPLE.map((t, i) => (
              <BentoCell
                key={t.term}
                span={i === 0 || i === 5 ? 'lg' : 'md'}
                variant={i === 0 ? 'dark' : i === 5 ? 'brand' : 'light'}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        i === 0 || i === 5
                          ? 'rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white'
                          : 'rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white'
                      }
                    >
                      {t.category}
                    </span>
                    {t.arabic && (
                      <span
                        className={
                          i === 0 || i === 5
                            ? 'text-base text-white/90'
                            : 'text-base text-ink-700'
                        }
                        dir="rtl"
                        lang="ar"
                      >
                        {t.arabic}
                      </span>
                    )}
                  </div>
                  <h3 className={i === 0 || i === 5 ? 'mt-4 text-xl font-semibold text-white' : 'mt-4 text-xl font-semibold text-ink-900'}>
                    {t.term}
                  </h3>
                  <dl className={i === 0 || i === 5 ? 'mt-4 space-y-3 text-sm text-white/85' : 'mt-4 space-y-3 text-sm text-ink-700'}>
                    <div>
                      <dt className={i === 0 || i === 5 ? 'text-[11px] font-semibold uppercase tracking-wider text-white/60' : 'text-[11px] font-semibold uppercase tracking-wider text-brand'}>
                        Definition
                      </dt>
                      <dd className="mt-1">{t.definition}</dd>
                    </div>
                    <div>
                      <dt className={i === 0 || i === 5 ? 'text-[11px] font-semibold uppercase tracking-wider text-white/60' : 'text-[11px] font-semibold uppercase tracking-wider text-brand'}>
                        GCC example
                      </dt>
                      <dd className="mt-1">{t.example}</dd>
                    </div>
                    <div>
                      <dt className={i === 0 || i === 5 ? 'text-[11px] font-semibold uppercase tracking-wider text-white/60' : 'text-[11px] font-semibold uppercase tracking-wider text-brand'}>
                        Why it matters
                      </dt>
                      <dd className="mt-1">{t.why}</dd>
                    </div>
                  </dl>
                  {t.link && (
                    <Link
                      href={t.link}
                      className={i === 0 || i === 5 ? 'link-arrow mt-5 inline-flex text-sm font-semibold text-amber-300' : 'link-arrow mt-5 inline-flex text-sm font-semibold text-brand'}
                      data-event="secondary_cta_click"
                      data-page={SLUG}
                    >
                      Read the practitioner guide
                    </Link>
                  )}
                </div>
              </BentoCell>
            ))}
          </BentoGrid>
          <p className="mt-10 text-center text-sm text-ink-600">
            Reviewed by Yasmin Al Marzooqi, Head of Arabic NLP — last refresh February 2026.
          </p>
        </div>
      </section>

      {/* Featured Arabic-specific terms */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Arabic-specific entries — English and Arabic side-by-side"
            title="Five regional terms in script-parity format."
            description="Where the term is anchored in the regional context, the Arabic rendering sits beside the English. Reviewed by a native MSA editor."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SAMPLE.filter((t) => t.category === 'Arabic-specific').map((t) => (
              <li key={t.term}>
                <GlassCard padding="lg">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-ink-900">{t.term}</h3>
                    <p className="text-2xl text-ink-900" dir="rtl" lang="ar">{t.arabic}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{t.definition}</p>
                  <p className="mt-4 rounded-lg border-l-2 border-brand bg-surface-muted p-4 text-sm text-ink-700">
                    <strong className="font-semibold text-ink-900">Why it matters:</strong> {t.why}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pocket Guide download */}
      <section id="pocket" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Brocode AI Glossary — Pocket Guide"
            description="A 24-page downloadable distillation of the 60 most-asked terms, formatted for printing or reading on a phone. The three-block format is preserved. The Arabic-script parity is preserved."
            contents={[
              'The 60 most-asked terms in the three-block format',
              'Foundation, Classical ML, MLOps, Governance, Arabic-specific',
              'Arabic-script parity on Arabic-specific terms',
              'Printable single-sheet quick-reference at the back',
              'Reviewed by Yasmin Al Marzooqi — last refresh February 2026'
            ]}
            filePath="/downloads/brocode-ai-glossary-pocket-guide.pdf"
            ctaLabel="Email me the Pocket Guide"
            thumbnail="/images/insights/glossary.jpg"
          />
        </div>
      </section>

      {/* Monthly vocabulary subscription */}
      <section id="subscribe" className="bg-white py-22">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-surface-muted p-8 shadow-card md:p-12">
            <SectionHeading
              eyebrow="Monthly vocabulary email"
              title="Three new terms. One practitioner guide. One minute to read."
              align="center"
              description="One short email per month. You can unsubscribe in one click, and we will not put you on a sales rotation."
            />
            <form action="/api/contact" method="post" className="mt-8 space-y-4">
              <input type="hidden" name="type" value="glossary_monthly" />
              <input type="hidden" name="pageSlug" value={SLUG} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="vname" className="mb-1 block text-xs font-medium text-ink-700">First name *</label>
                  <input id="vname" name="name" required className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="vemail" className="mb-1 block text-xs font-medium text-ink-700">Work email *</label>
                  <input id="vemail" type="email" name="email" required className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="vrole" className="mb-1 block text-xs font-medium text-ink-700">Role band</label>
                  <select id="vrole" name="role" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>Executive (C-suite, EVP, SVP)</option>
                    <option>Senior management</option>
                    <option>Practitioner</option>
                    <option>Student or researcher</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vcountry" className="mb-1 block text-xs font-medium text-ink-700">Country</label>
                  <select id="vcountry" name="country" className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm">
                    <option value="">Select…</option>
                    <option>UAE</option><option>KSA</option><option>Qatar</option><option>Bahrain</option>
                    <option>Kuwait</option><option>Oman</option><option>Egypt</option><option>Other</option>
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-3 pt-1">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300" />
                <span className="text-xs text-ink-700">
                  Send me the monthly Brocode AI vocabulary email — three terms, one guide, one click to unsubscribe.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                data-event="lead_magnet_submit"
                data-page={SLUG}
              >
                Subscribe to the monthly vocabulary email
              </button>
              <p className="text-center text-sm text-ink-500">
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
                {' '}for the Pocket Guide PDF.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Suggest a term */}
      <section className="bg-surface-muted py-16">
        <div className="container-site">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white p-8 text-center shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Glossary editorial</p>
            <h2 className="text-xl font-semibold text-ink-900">
              Missing a term? Suggest one — the editorial team reviews suggestions monthly.
            </h2>
            <p className="max-w-xl text-sm text-ink-600">
              Common requests in the last quarter: speculative decoding, ICV (in-country value), tatweel, prompt injection,
              and federated learning. Three of these will be in the next refresh.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand"
              data-event="secondary_cta_click"
              data-page={SLUG}
            >
              Suggest a term
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Next steps"
        items={[
          { label: 'Insights hub', href: '/insights', description: 'Whitepapers, guides, FAQs, blog, case studies — the wider library.' },
          { label: 'Practitioner guides', href: '/insights/guides', description: 'Each glossary term links to the guide that goes deeper.' },
          { label: 'Commercial FAQs', href: '/insights/faqs', description: 'When the question moves from "what is this?" to "how does Brocode answer this?".' },
          { label: 'NLP services', href: '/services/natural-language-processing', description: 'For Arabic-specific terms with a commercial reflection.' },
          { label: 'Generative AI development', href: '/services/generative-ai-development', description: 'For LLM-related terms with a commercial reflection.' }
        ]}
      />
    </>
  );
}
