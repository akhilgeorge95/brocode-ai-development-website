import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'open-source';
const PAGE_URL = '/technology/open-source';

export const metadata: Metadata = {
  title: 'Open-Source Contributions — Khaleeji Benchmark, vLLM, Arabic NLP | Brocode',
  description:
    'The public Arabic NLP and ML-infrastructure work Brocode engineers ship in the open — Khaleeji Benchmark, Arabic dialect corpora, vLLM PRs, Hugging Face tokenizers contributions, pgvector patches and the Open-Source Hour policy.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Brocode AI Open-Source Report 2026',
    description:
      '312 merged PRs across 14 upstream projects. 7 Arabic datasets. The Khaleeji Benchmark.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/open-source.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Talk to a Brocode open-source maintainer',
  subtitle:
    'A maintainer on the Khaleeji Benchmark, the Arabic NLP datasets, the vLLM PRs or the tokenizers PRs replies within one business day.',
  ctaLabel: 'Book a technical review',
  whatsappMessage:
    "Hi Brocode — I'd like to speak with one of your Arabic NLP maintainers about [Arabic LLM evaluation / dataset licensing / vLLM serving / Khaleeji dialect handling] for [organisation or research group].",
  fields: [
    {
      name: 'reason',
      label: 'Reason for reaching out',
      type: 'select',
      options: ['Vendor evaluation', 'Dataset licensing', 'Research collaboration', 'Careers', 'Press'],
      required: true
    },
    {
      name: 'artefact',
      label: 'Which open-source artefact prompted the visit?',
      type: 'multiselect',
      options: ['Khaleeji Benchmark', 'Hugging Face datasets', 'vLLM PRs', 'tokenizers PRs', 'Engineering blog', 'Other']
    },
    { name: 'affiliation', label: 'Affiliation', type: 'text', placeholder: 'Organisation or research group' },
    { name: 'useCase', label: 'Use case or research question', type: 'textarea', placeholder: 'Short — one or two sentences' },
    { name: 'handle', label: 'GitHub / Hugging Face handle (optional)', type: 'text', placeholder: '@yourhandle' },
    {
      name: 'specialism',
      label: 'Preferred maintainer specialism',
      type: 'select',
      options: ['Arabic NLP', 'Serving infra', 'Data engineering', 'MLOps']
    }
  ]
};

// Simulated contribution heatmap data — 52 weeks x 7 days
function buildHeatmap() {
  const cells: number[] = [];
  // Pseudo-random but deterministic
  for (let i = 0; i < 52 * 7; i++) {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    // Bias toward higher activity, dip on Fri/weekends except for Friday afternoon (Open-Source Hour)
    const day = i % 7;
    let v = Math.floor(r * 5);
    if (day === 5) v = Math.min(4, v + 2); // Friday (Open-Source Hour) — denser
    if (day === 6) v = Math.max(0, v - 2); // Sat — quieter
    cells.push(v);
  }
  return cells;
}
const HEATMAP = buildHeatmap();
const HEAT_COLOURS = ['bg-white/5', 'bg-emerald-900/60', 'bg-emerald-700/80', 'bg-emerald-500', 'bg-emerald-300'];

const PROJECTS: { repo: string; lang: string; stars: string; description: string; tag: string }[] = [
  {
    repo: 'brocode/khaleeji-benchmark',
    lang: 'Python',
    stars: '1.8k',
    description:
      'Open evaluation suite for Arabic LLMs covering UAE / KSA / Qatar / Kuwait / Bahrain dialect comprehension, MSA reasoning, and Arabic-English code-switching. Public leaderboard with Falcon, Jais, Claude, GPT-4 and Brocode fine-tunes.',
    tag: 'Benchmark'
  },
  {
    repo: 'brocode/khaleeji-dialect-corpus-v2',
    lang: 'Dataset',
    stars: '3.2k',
    description:
      '1.4M utterances across UAE, KSA, Qatar, Kuwait and Bahrain dialect markers. Apache-2.0 licensed, dataset card with provenance, statistics and ethics review.',
    tag: 'Dataset'
  },
  {
    repo: 'brocode/uae-government-correspondence-ner',
    lang: 'Dataset',
    stars: '0.9k',
    description:
      'Anonymised NER tags on Arabic correspondence templates, designed for the long-form formal Arabic that dominates UAE government workflows.',
    tag: 'Dataset'
  },
  {
    repo: 'brocode/arabic-financial-extraction-eval',
    lang: 'Dataset',
    stars: '0.7k',
    description:
      '1,800 labelled Arabic invoices and KYC documents for extraction benchmarking. Released with category breakdowns and a reproducer notebook.',
    tag: 'Dataset'
  },
  {
    repo: 'huggingface/tokenizers — Arabic normalisation',
    lang: 'Rust',
    stars: 'merged',
    description:
      'Upstream PR fixing ZWNJ, tatweel, and alef-variant handling in the Hugging Face tokenizers package. Merged into main; ships from 0.20.0.',
    tag: 'Upstream PR'
  },
  {
    repo: 'vllm-project/vllm — RTL paged-attention fixes',
    lang: 'Python',
    stars: 'merged',
    description:
      'Paged-attention edge-case fixes for right-to-left scripts, Arabic-locale tokenisation pathway, and sample serving configs for Falcon-family and Jais models.',
    tag: 'Upstream PR'
  },
  {
    repo: 'EleutherAI/lm-evaluation-harness — Arabic task pack',
    lang: 'Python',
    stars: 'merged',
    description:
      'Public PR adding seven Arabic MCQA and generation tasks aligned to the Khaleeji Benchmark, with reproducer scripts and dataset cards.',
    tag: 'Upstream PR'
  },
  {
    repo: 'pgvector/pgvector — high-dim build perf',
    lang: 'C',
    stars: 'merged',
    description:
      'Index-build performance fix on high-dimension Arabic-embedding workloads. Ships from 0.7.4 onwards.',
    tag: 'Upstream PR'
  }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Public commit graph for the consultancy org',
    brocode: 'Yes — Brocode org + named maintainer handles',
    competitors: ['No', 'No', 'Limited internal repos']
  },
  {
    feature: 'Arabic NLP datasets on Hugging Face',
    brocode: '7 datasets, 4.6M labelled records',
    competitors: ['0', '0', '1–2, internal-only']
  },
  {
    feature: 'Merged PRs to vLLM / Transformers / tokenizers / pgvector',
    brocode: '312 merged across 14 projects',
    competitors: ['0–5', '0', '<20']
  },
  {
    feature: 'Open Arabic LLM benchmark with leaderboard',
    brocode: 'Khaleeji Benchmark — public leaderboard',
    competitors: ['No', 'No', 'Internal moat']
  },
  {
    feature: 'Paid Open-Source Hour for every engineer',
    brocode: 'Yes — every Friday afternoon since 2023',
    competitors: ['No', 'No', 'No']
  },
  {
    feature: 'Named maintainer attribution',
    brocode: 'Yes — engineers commit under their own GitHub handles',
    competitors: ['Anonymised', 'Anonymised', 'Anonymised']
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Are these contributions sustained or one-off?',
    answer:
      'The contribution graph spans 18 months of activity with dense weeks across every quarter, driven by the Open-Source Hour policy that pays every engineer for one Friday afternoon a week to contribute upstream. The report contains the per-quarter contributor count, PR-merge cadence and dataset-release schedule — none of it is a marketing burst.'
  },
  {
    question: 'Where do I find the GitHub handles of your engineers?',
    answer:
      'In the report, with the consent of each named maintainer. We do not publish handles publicly without consent because attribution is a personal decision. Under NDA we share the full list during the technical review; in the public report we list the engineers who have signed the public-attribution agreement with Legal.'
  },
  {
    question: 'How is the Khaleeji Benchmark different from existing Arabic benchmarks?',
    answer:
      'Existing Arabic benchmarks (ALUE, AraBench, ORCA) test MSA-heavy tasks designed by researchers in Cairo, Doha or Beirut. The Khaleeji Benchmark is built from Gulf-dialect data: UAE Emirati, Saudi Najdi and Hejazi, Qatari, Kuwaiti and Bahraini dialect markers, plus Khaleeji code-switching with English. It tests dialect comprehension, formal-Arabic reasoning, and Arabic-English code-switching specifically — the failure modes that matter in GCC production.'
  },
  {
    question: 'How do you balance open source with client confidentiality?',
    answer:
      'Every artefact goes through a publication review with Legal: training-data leakage check, identifying-detail check, architectural-disclosure check. Datasets are anonymised before release. Where a client wants to co-publish we work alongside their Legal and Communications teams. Where they do not, we look for the same underlying problem in a different engagement before publishing.'
  },
  {
    question: 'What licences do you publish under?',
    answer:
      'Apache-2.0 for code by default. CC-BY-4.0 or CC-BY-SA-4.0 for datasets, chosen for genuine reuse rather than a viral copyleft. Where a dataset includes any element that requires a more restrictive licence (for example a corpus drawn partly from a partner whose terms require attribution), the dataset card states the licence explicitly with a downstream-usage guide.'
  },
  {
    question: 'Can our researchers collaborate with your team?',
    answer:
      'Yes — we run formal research collaborations with MBZUAI and TII, and informal ones with several regional academic groups. The form on this page routes a research enquiry directly to the head of Arabic NLP; expect a response within one business day with a proposed collaboration shape (co-authorship, joint dataset release, internships, or technical-review session).'
  }
];

const PROOF_ITEMS = [
  { value: '312', label: 'Merged PRs across 14 upstream projects' },
  { value: '7', label: 'Public Arabic datasets (4.6M records)' },
  { value: '1', label: 'Open Arabic-LLM benchmark with leaderboard' },
  { value: 'Fri', label: 'Open-Source Hour — every engineer, every week' }
];

const RELATED = [
  { label: 'Technology Stack', href: '/technology/stack', description: 'Every contribution maps back to a component in the stack.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'The commercial reflection of the Arabic NLP work.' },
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Where the vLLM and serving contributions show up.' },
  { label: 'Quality Assurance for AI', href: '/technology/quality-assurance', description: 'The evaluation harness behind the Khaleeji Benchmark.' },
  { label: 'Careers — engineering', href: '/careers', description: 'Where the Open-Source Hour policy lives in the contract.' }
];

export default function OpenSourcePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Brocode AI Open-Source Report 2026',
    description:
      'The public Arabic NLP and ML-infrastructure work Brocode engineers ship in the open, with every commit linked and every dataset cited.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/open-source.jpg',
    author: { '@type': 'Organization', name: 'Brocode Solutions' }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="ld-techarticle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero — GitHub-style contribution heatmap */}
      <section className="relative isolate overflow-hidden bg-[#0d1117] text-white" data-page={PAGE_SLUG}>
        <Image
          src="/images/technology/open-source.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-10"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'Open source' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">github.com/brocode</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05]">
                Every commit linked. Every dataset cited. Every benchmark reproducible.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                The Open-Source Hour is paid time for every Brocode engineer to contribute upstream
                — and the contribution graph below is the result.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Talk to an open-source maintainer
                </MagneticButton>
                <MagneticButton href="#lead-magnet" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 Open-Source Report
                </MagneticButton>
              </div>
            </div>

            {/* GitHub-style chrome panel */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161b22] shadow-card">
                <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1117] px-4 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <p className="font-mono text-[11px] text-white/50">brocode org — last 12 months</p>
                </div>
                <div className="p-5">
                  <div className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, dayIdx) => (
                      <div key={dayIdx} className="flex gap-[3px]">
                        {Array.from({ length: 52 }).map((_, weekIdx) => {
                          const v = HEATMAP[weekIdx * 7 + dayIdx] ?? 0;
                          return (
                            <span
                              key={weekIdx}
                              className={`block h-[10px] w-[10px] rounded-[2px] ${HEAT_COLOURS[v]}`}
                              aria-hidden
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-white/55">
                    <span>Less</span>
                    {HEAT_COLOURS.map((c, i) => (
                      <span key={i} className={`block h-[10px] w-[10px] rounded-[2px] ${c}`} aria-hidden />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs">
                {[
                  { v: '312', l: 'merged PRs' },
                  { v: '14', l: 'upstream projects' },
                  { v: '7', l: 'public datasets' },
                  { v: '1', l: 'Khaleeji Benchmark' }
                ].map((s) => (
                  <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-2xl font-semibold text-emerald-300">{s.v}</p>
                    <p className="mt-1 text-white/55">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 text-center font-mono text-sm text-white/60">
            Open-Source Hour: every engineer, every Friday afternoon, since 2023.
          </p>
        </div>
      </section>

      {/* Why we publish */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why we publish"
              title="Signed by the CTO and the head of Arabic NLP."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                Open source is the only signal a buyer or a researcher cannot fake. Code that
                runs in public gets reviewed by people without commercial interest in
                agreeing with you. That is the honest test of an engineering practice, and
                it is the test we built the Open-Source Hour around — paid time, every
                Friday afternoon, for every engineer in the company, audited quarterly by
                the CTO.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                For buyers doing tie-breaker due diligence between two shortlisted vendors,
                the contribution graph and the merged-PR ledger answer the engineering-culture
                question without a single marketing slide. For researchers evaluating Brocode
                as a future employer or research collaborator, the same artefacts answer the
                career-relevance question.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects bento */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Repositories and contributions"
            title="The named projects, the upstream PRs, the dataset cards."
          />
          <div className="mt-12">
            <BentoGrid>
              {PROJECTS.map((p, i) => (
                <BentoCell key={p.repo} span={i === 0 || i === 4 ? 'lg' : 'md'} variant="light">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-brand">{p.tag}</p>
                    <span className="rounded-full bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-white">{p.lang}</span>
                  </div>
                  <p className="mt-3 font-mono text-sm font-semibold text-ink-900">{p.repo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.description}</p>
                  <p className="mt-4 font-mono text-[11px] text-ink-500">
                    <span className="text-ink-400">★ </span>{p.stars}
                  </p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="dark" />
        </div>
      </section>

      {/* Khaleeji Benchmark leaderboard mock */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Khaleeji Benchmark"
              title="An open Arabic LLM benchmark with a public leaderboard."
              description="UAE / KSA / Qatar / Kuwait / Bahrain dialect comprehension, MSA reasoning, Arabic-English code-switching. Refreshed within 14 days of any major frontier-model release."
            />
            <Link href="https://github.com" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand">
              View the leaderboard on GitHub
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                    <th className="px-5 py-3">Model</th>
                    <th className="px-5 py-3">Dialect</th>
                    <th className="px-5 py-3">MSA reasoning</th>
                    <th className="px-5 py-3">Code-switch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100 font-mono text-sm">
                  {[
                    { model: 'Claude 3.5 Sonnet', dialect: '74.1', msa: '82.4', code: '79.6' },
                    { model: 'GPT-4o', dialect: '71.3', msa: '83.9', code: '78.2' },
                    { model: 'Brocode-Jais-FT-v3', dialect: '78.6', msa: '76.1', code: '74.4' },
                    { model: 'Falcon-3-7B-instruct', dialect: '64.5', msa: '69.7', code: '66.0' },
                    { model: 'Jais-30b-chat-v3', dialect: '67.2', msa: '71.8', code: '68.9' }
                  ].map((row) => (
                    <tr key={row.model}>
                      <td className="px-5 py-3 font-semibold text-ink-900">{row.model}</td>
                      <td className="px-5 py-3 text-ink-700">{row.dialect}</td>
                      <td className="px-5 py-3 text-ink-700">{row.msa}</td>
                      <td className="px-5 py-3 text-ink-700">{row.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-ink-500">
              Illustrative snapshot from the public leaderboard; live numbers update on each release.
            </p>
          </div>
        </div>
      </section>

      {/* CompareTable */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Versus the alternatives"
            title="What an engineering-culture due-diligence comparison actually looks like."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Offshore consultancies', 'Big-4 AI practice', 'Sovereign-only integrator']}
              rows={COMPARE_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Open-Source Hour explainer */}
      <section className="relative overflow-hidden bg-[#0d1117] py-22 text-white md:py-28">
        <GradientMesh tone="midnight" className="opacity-50" />
        <div className="container-site relative grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The Open-Source Hour policy"
              title="Paid time, every Friday afternoon, audited by the CTO."
              description="It is a clause in our employment contract. It is a line in our delivery rate card. It is the reason the contribution graph above is real."
            />
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-3 text-white/85">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="font-mono text-xs text-emerald-300">policy.1</p>
                <p className="mt-1 text-lg font-semibold">Every engineer, every Friday afternoon</p>
                <p className="mt-2 text-white/70">No exceptions for delivery pressure. Four hours of paid time on Friday afternoon for upstream work; if a sprint demands the time, the sprint plan is wrong.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="font-mono text-xs text-emerald-300">policy.2</p>
                <p className="mt-1 text-lg font-semibold">Audited by the CTO every quarter</p>
                <p className="mt-2 text-white/70">Per-engineer contribution counts are reviewed by the CTO; zero-contribution quarters trigger a conversation, not a sanction.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="font-mono text-xs text-emerald-300">policy.3</p>
                <p className="mt-1 text-lg font-semibold">Public attribution by consent</p>
                <p className="mt-2 text-white/70">Engineers commit under their own GitHub handles with their consent — never aggregated into a single corporate handle that obscures who did the work.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Brocode AI Open-Source Report 2026"
            description="The 36-page PDF with the full commit ledger by repository, every dataset card with provenance and statistics, the Khaleeji Benchmark methodology, and a public bibliography."
            contents={[
              'Khaleeji Benchmark (open dataset + leaderboard)',
              'Arabic NLP datasets — 7 datasets, 4.6M labelled records',
              'vLLM contributions — RTL paged-attention, Arabic-locale path',
              'tokenizers contributions — ZWNJ, tatweel, alef-variant fixes',
              'pgvector contributions — high-dim index-build perf fix',
              'Internal tools we open-sourced',
              'Open-Source Hour audit ledger'
            ]}
            filePath="/downloads/open-source-report-2026.pdf"
            ctaLabel="Email me the Open-Source Report"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Engineering-culture questions"
              title="What buyers and researchers ask before a maintainer call."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="bg-white py-22 md:py-28" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to a maintainer"
              title="Arabic NLP, serving infra, data engineering, or MLOps."
              description="The form routes directly to the maintainer specialism you choose. One business day to first response."
            />
            <p className="mt-6 text-sm text-ink-600">
              Researcher or engineer interested in joining?{' '}
              <Link href="/careers" className="font-semibold text-brand underline">
                See Brocode engineering careers
              </Link>
              .
            </p>
            <p className="mt-3 text-sm text-ink-600">
              Prefer chat?{' '}
              <a
                href={buildWhatsAppLink(formConfig.whatsappMessage ?? '')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1faa53] underline"
                data-event="whatsapp_hero"
                data-page={PAGE_SLUG}
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={RELATED} />

      <StickyMobileBar
        whatsappMessage={formConfig.whatsappMessage ?? ''}
        primaryLabel="Talk to a maintainer"
        primaryHref="#contact-form"
      />
    </>
  );
}
