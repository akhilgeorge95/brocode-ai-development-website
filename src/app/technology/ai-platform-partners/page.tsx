import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'ai-platform-partners';
const PAGE_URL = '/technology/ai-platform-partners';

export const metadata: Metadata = {
  title: 'AI Platform Partners — NVIDIA, Microsoft, AWS, Anthropic, Databricks | Brocode',
  description:
    'Eight named AI platform partnerships at Premier, Advanced and Solution Provider tier — NVIDIA Inception Premier, Microsoft AI Cloud Partner, AWS Advanced Tier, Hugging Face Enterprise, Anthropic, Databricks, MBZUAI and TII. Procurement-ready tier ledger.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The Brocode AI Partnership Dossier 2026',
    description:
      'Eight partnerships. Forty-one joint deployments. Zero reseller-only relationships.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/ai-platform-partners.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a partnership-led architecture review',
  subtitle:
    'A 90-minute joint call: Brocode and one of NVIDIA, Microsoft, AWS, Anthropic or Databricks against your architecture team.',
  ctaLabel: 'Book the joint review',
  whatsappMessage:
    "Hi Brocode — procurement at [organisation] requires named AI platform partnerships for our vendor-qualification document. I'd like to book a partnership-led architecture review with [NVIDIA / Microsoft / AWS / Anthropic / Databricks] alongside your team this fortnight.",
  fields: [
    {
      name: 'partners',
      label: 'Which partner(s) do you want on the joint call?',
      type: 'multiselect',
      options: ['NVIDIA', 'Microsoft', 'AWS', 'Anthropic', 'Databricks', 'Hugging Face', 'OpenAI', 'MBZUAI', 'TII']
    },
    { name: 'procurementDeadline', label: 'Procurement document deadline', type: 'date' },
    {
      name: 'vendorFramework',
      label: 'Vendor-framework name or RFP reference',
      type: 'text',
      placeholder: 'e.g. CIO-AI-VF-2026-04 or "ADQ portfolio AI framework"'
    },
    {
      name: 'requiredTier',
      label: 'Required partnership tier',
      type: 'select',
      options: ['Any tier', 'Advanced or above', 'Premier or Solution Provider only']
    },
    {
      name: 'caseStudyGeography',
      label: 'Joint case study geography needed',
      type: 'multiselect',
      options: ['UAE', 'KSA', 'Qatar', 'Wider GCC', 'Not geography-specific']
    },
    {
      name: 'cosellInterest',
      label: 'Co-sell or co-build interest',
      type: 'select',
      options: ['Co-sell only', 'Co-build', 'Both', 'Not sure yet']
    }
  ]
};

type Partner = {
  name: string;
  tier: string;
  joined: string;
  motion: string;
  body: string;
  refs: number;
  linkLabel?: string;
  linkHref?: string;
};

const PARTNERS: Partner[] = [
  {
    name: 'NVIDIA',
    tier: 'Inception Premier',
    joined: '2022',
    motion: 'Co-build',
    body: 'Joint DGX-on-premise reference architecture for the UAE federal sector; named NVIDIA EMEA partnership manager available for joint calls and DGX provisioning escalations.',
    refs: 9,
    linkLabel: 'Self-hosted LLM infrastructure',
    linkHref: '/services/self-hosted-llm-infrastructure'
  },
  {
    name: 'Microsoft',
    tier: 'AI Cloud Partner — Data & AI (Azure), Build & Modernize AI Apps',
    joined: '2022',
    motion: 'Co-sell',
    body: 'Co-sell motion active in Azure UAE North; joint Azure OpenAI Service deployments documented; AppSource listing for the Brocode RAG accelerator.',
    refs: 8
  },
  {
    name: 'AWS',
    tier: 'Advanced Tier Services — ML Competency + GenAI Competency',
    joined: '2023',
    motion: 'Co-build',
    body: 'Co-build agreements active in AWS UAE North (me-central-1) and Bahrain (me-south-1); Partner Solutions Finder listing for the Brocode Bedrock + SageMaker reference stack.',
    refs: 7
  },
  {
    name: 'Hugging Face',
    tier: 'Enterprise Hub Partner',
    joined: '2023',
    motion: 'Co-build',
    body: 'Private model hosting, joint Arabic dataset publication on the Brocode org, named HF EMEA solutions architect for procurement and deployment support.',
    refs: 5
  },
  {
    name: 'Anthropic',
    tier: 'Solution Provider',
    joined: '2024',
    motion: 'Co-sell',
    body: 'Named on the regional Solution Provider list. Claude API procurement and enterprise terms route via Brocode for GCC clients with sovereign and PDPL constraints.',
    refs: 4
  },
  {
    name: 'Databricks',
    tier: 'Lakehouse Partner — Data + AI Consulting designation',
    joined: '2023',
    motion: 'Co-build',
    body: 'Joint Unity Catalog reference architectures; co-delivery model for lakehouse migrations and feature store rollouts across UAE banks.',
    refs: 4
  },
  {
    name: 'OpenAI',
    tier: 'OpenAI for Business reseller',
    joined: '2024',
    motion: 'Reseller-plus',
    body: 'GCC enterprise procurement routing for OpenAI for Business contracts with regional billing, support escalation and data-handling addenda.',
    refs: 2
  },
  {
    name: 'MBZUAI & TII',
    tier: 'Industry Affiliate / Collaboration Agreement',
    joined: '2023',
    motion: 'Research co-build',
    body: 'MBZUAI Industry Affiliate and a TII collaboration agreement for Falcon-family model adaptation and Arabic benchmark releases — including the Khaleeji Benchmark.',
    refs: 2,
    linkLabel: 'See open-source contributions',
    linkHref: '/technology/open-source'
  }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Partnerships at Premier / Advanced / Solution Provider tier',
    brocode: '8 named',
    competitors: ['1–2', '4–5 global, regional inactive', '1–2 inside the in-group stack']
  },
  {
    feature: 'Joint engineering or co-build agreements',
    brocode: 'Yes — NVIDIA, AWS, Databricks, Hugging Face',
    competitors: ['No — reseller-only', 'Rare regionally', 'In-group only']
  },
  {
    feature: 'Partner-side contact named to clients',
    brocode: 'Yes — role and region disclosed under NDA',
    competitors: ['No', 'Partner manager only', 'In-group sponsor only']
  },
  {
    feature: 'AppSource / Partner Solutions Finder listings',
    brocode: 'Microsoft AppSource + AWS Partner Solutions Finder',
    competitors: ['Sometimes Microsoft', 'Global listings only', 'Partner-portal absent']
  },
  {
    feature: 'Joint deployments in UAE since 2022',
    brocode: '41 across all partners',
    competitors: ['<10', 'Global counts only', '12–18, in-group only']
  },
  {
    feature: 'Partnership-led architecture review available',
    brocode: 'Yes — 90 minutes, joint attendance',
    competitors: ['No', 'On request, weeks of lead time', 'Sovereign-track only']
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do we verify the partnership tier on each partner portal?',
    answer:
      "Each partnership is listed on the partner's public directory: NVIDIA Inception Premier, Microsoft AI Cloud Partner with the named Specialisations, AWS Partner Solutions Finder, Hugging Face Enterprise Hub, Anthropic Solution Provider, Databricks Lakehouse Partner. We share the direct partner-portal URLs as part of the lead-magnet pack so your procurement team can verify on the partner site, not on ours."
  },
  {
    question: 'Does the partnership unlock co-sell funding for the client?',
    answer:
      'Yes, on several. AWS Migration Acceleration Program funding, Microsoft Azure Migrate and Modernize incentives, and NVIDIA Inception credit can be applied to qualifying engagements. We bring the funding application as a parallel work-stream rather than a separate process. The dossier lists the eligibility windows and approval timelines per programme.'
  },
  {
    question: 'What is the partner SLA escalation path if a model API or service degrades?',
    answer:
      'Each partner has a named escalation path. For Microsoft, severity-A issues route through the joint co-sell SLA; for AWS, through the Advanced Tier partner technical contact; for Anthropic and OpenAI, through the regional Solution Provider channel. We can convene the partner and your operations team on the same bridge within four working hours for any production incident.'
  },
  {
    question: 'Is this co-sell or co-build, or just a reseller relationship?',
    answer:
      'It depends on the partner. NVIDIA, AWS, Databricks and Hugging Face are co-build — joint engineering hours, joint reference architectures, partner-validated solutions. Microsoft is active co-sell with named regional sellers. Anthropic and OpenAI sit in a reseller-plus position with regional enterprise terms and procurement routing. We do not pretend any of them is what it is not.'
  },
  {
    question: 'Will the partner actually attend the joint architecture review?',
    answer:
      'Yes — for NVIDIA, Microsoft, AWS, Databricks and Anthropic. We book the call as a joint engagement with the named partner-side contact. Hugging Face attends remotely from EMEA. MBZUAI and TII attend research-track conversations on a planned cadence. We confirm partner attendance in writing before the review is scheduled.'
  },
  {
    question: 'Can we paste your partnership statement directly into our vendor-qualification document?',
    answer:
      'Yes — the lead-magnet pack contains a procurement-ready paragraph drafted to survive a vendor-qualification gate, with the tier, partnership year and joint-reference count for each of the eight partners. The paragraph has cleared three UAE federal procurement frameworks and two CBUAE-supervised bank frameworks at the qualification stage.'
  }
];

const RELATED = [
  { label: 'Technology Stack', href: '/technology/stack', description: 'The opinionated, version-pinned stack these partnerships back.' },
  { label: 'Cloud Infrastructure Partners', href: '/technology/cloud-infrastructure-partners', description: 'How AWS, Azure, OCI and G42 partnerships map to UAE landing zones.' },
  { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'The NVIDIA and Hugging Face partnerships in practice.' },
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Anthropic and OpenAI partnerships, in production.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'The dominant industry for partnership-driven procurement.' }
];

const PROOF_ITEMS = [
  { value: '8', label: 'Named platform partnerships' },
  { value: '41', label: 'Joint deployments in UAE since 2022' },
  { value: 'Premier', label: 'NVIDIA Inception tier — joined 2022' },
  { value: '0', label: 'Reseller-only relationships' }
];

export default function AIPlatformPartnersPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Platform Partners — Brocode Solutions',
    description:
      'Eight named AI platform partnerships at Premier, Advanced and Solution Provider tier, with co-sell, co-build and partner-portal verification.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/ai-platform-partners.jpg'
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
      <Script id="ld-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero — partnership constellation strip */}
      <section className="relative isolate overflow-hidden bg-[#0a0e22] text-white" data-page={PAGE_SLUG}>
        <GradientMesh tone="midnight" className="opacity-50" />
        <Image
          src="/images/technology/ai-platform-partners.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'AI platform partners' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Partnership ledger</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05]">
                Eight partnerships, named tier, named contact.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Procurement asks for tier, year, joint references and a partner-side contact.
                We publish all four. The dossier below is drafted to survive a vendor-qualification gate.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a partnership-led architecture review
                </MagneticButton>
                <MagneticButton href="#lead-magnet" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 Partnership Dossier
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Partnership badges strip */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">{p.joined}</p>
                <p className="mt-2 text-sm font-semibold text-white">{p.name}</p>
                <p className="mt-1 line-clamp-2 text-[11px] text-white/55">{p.tier.split('—')[0]}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/70">
            Eight partnerships. Forty-one joint deployments. Zero reseller-only relationships.
          </p>
        </div>
      </section>

      {/* Why partnerships matter to procurement */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why partnerships matter to procurement"
              title="Written for the procurement reader, not the architect."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                Procurement frameworks across UAE federal entities, GCC tier-1 banks and
                sovereign-wealth portfolio companies routinely include a vendor-qualification
                gate that requires named platform partnerships at Premier, Advanced or Solution
                Provider tier. Vendors that cannot list the tier, the partnership year and a
                joint reference are disqualified before technical evaluation even opens — and
                most offshore consultancies and Big-4 AI practices fail at exactly this gate.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We publish the ledger below so your procurement team can paste it into the
                vendor-qualification document and move to technical evaluation in the same
                week. The lead-magnet pack contains a procurement-ready paragraph drafted to
                clear three UAE federal frameworks and two CBUAE-supervised bank frameworks at
                the qualification stage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tier ledger table */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Partnership tier ledger"
            title="Tier, year joined, co-sell motion, joint references."
            description="The named partner-side contact for each is shared under mutual NDA — partner agreements forbid public surfacing."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="bg-ink-900 text-left text-xs font-semibold uppercase tracking-wider text-white">
                  <th className="px-5 py-4">Partner</th>
                  <th className="px-5 py-4">Tier</th>
                  <th className="px-5 py-4">Joined</th>
                  <th className="px-5 py-4">Motion</th>
                  <th className="px-5 py-4 text-right">Joint refs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {PARTNERS.map((p) => (
                  <tr key={p.name} className="hover:bg-surface-muted/50">
                    <td className="px-5 py-4 font-semibold text-ink-900">{p.name}</td>
                    <td className="px-5 py-4 text-ink-700">{p.tier}</td>
                    <td className="px-5 py-4 font-mono text-ink-700">{p.joined}</td>
                    <td className="px-5 py-4 text-ink-700">{p.motion}</td>
                    <td className="px-5 py-4 text-right font-semibold text-brand">{p.refs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="dark" />
        </div>
      </section>

      {/* Eight partnership deep-dives */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Eight partnership deep-dives"
            title="What each partnership actually unlocks."
            description="Co-sell funding, joint engineering hours, partner-validated reference architectures, and named escalation paths."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-ink-900">{p.name}</h3>
                      <p className="mt-1 text-sm font-medium text-brand">{p.tier}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-ink-400">Since</p>
                      <p className="font-mono text-base font-semibold text-ink-900">{p.joined}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-ink-600">{p.body}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
                      {p.motion}
                    </span>
                    <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700">
                      {p.refs} joint references
                    </span>
                  </div>
                  {p.linkHref && p.linkLabel && (
                    <Link href={p.linkHref} className="link-arrow mt-5 inline-flex text-sm font-semibold text-brand">
                      {p.linkLabel}
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign collaborations */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-28">
        <GradientMesh tone="midnight" className="opacity-50" />
        <div className="container-site relative grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="Sovereign and regional collaborations"
              title="MBZUAI Industry Affiliate. TII Collaboration Agreement."
              description="Falcon-family adaptation and Arabic benchmark releases happen inside formal academic agreements, not loose vendor relationships."
            />
          </div>
          <div className="lg:col-span-7">
            <GlassCard tone="dark" className="border-white/10 bg-white/5">
              <ul className="space-y-5">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">MBZUAI</p>
                  <p className="mt-1 text-lg font-semibold">Industry Affiliate — research access and joint publication</p>
                  <p className="mt-2 text-white/75">
                    Co-supervised research projects on Arabic LLM evaluation; Industry Affiliate
                    access to MBZUAI compute and research scholars; joint authorship on the
                    Khaleeji Benchmark methodology paper.
                  </p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">TII</p>
                  <p className="mt-1 text-lg font-semibold">Collaboration agreement — Falcon-family adaptation</p>
                  <p className="mt-2 text-white/75">
                    Formal collaboration on Falcon-family fine-tuning for UAE federal and
                    enterprise use cases; joint Arabic benchmark releases; named TII technical
                    counterpart for model-deployment escalations.
                  </p>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CompareTable */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Versus the alternatives"
            title="Why the partnership ledger survives procurement."
            description="Offshore SI, Big-4 AI practice, sovereign-only integrator — and the partnership shape we operate."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Offshore SI', 'Big-4 AI practice', 'Sovereign-only integrator']}
              rows={COMPARE_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Partnership-led review explained */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Partnership-Led Architecture Review"
              title="90 minutes. Brocode plus one partner. Your architecture team."
            />
            <p className="mt-5 text-ink-700">
              You pick the partner whose involvement most de-risks the procurement. We book the
              joint call, prepare a shared agenda, and walk your architecture team through the
              reference design — with the partner-side contact attending live.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {[
                { n: '00:00', t: 'Joint context-setting', d: 'Brocode lead and partner counterpart introduce the relationship, the co-sell or co-build motion, and the joint references most relevant to your sector.' },
                { n: '00:15', t: 'Reference architecture walk', d: 'Live walk of the partner-validated reference architecture, with the Brocode plane mappings and pinned versions.' },
                { n: '00:45', t: 'Your constraints, our trade-offs', d: 'You raise residency, regulator and procurement constraints. The partner contact and Brocode lead respond in real time.' },
                { n: '01:15', t: 'Funding, escalation, next steps', d: 'Co-sell funding eligibility, escalation paths, and a written follow-up within 24 hours.' }
              ].map((p, i) => (
                <li key={p.n}>
                  <Reveal delay={i * 0.05}>
                    <div className="card flex items-start gap-6">
                      <span className="font-mono text-display-md text-brand">{p.n}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-ink-900">{p.t}</h3>
                        <p className="mt-2 text-ink-600">{p.d}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Brocode AI Partnership Dossier"
            description="The 28-page PDF with the partnership matrix, co-sell motion summary per partner, joint references, and a procurement-ready vendor-qualification paragraph you can paste directly into your submission."
            contents={[
              'NVIDIA Inception Premier (member since 2022)',
              'Microsoft AI Cloud Partner with Data & AI + Build & Modernize AI Apps Specialisations',
              'AWS Advanced Tier — ML and GenAI Competencies',
              'Hugging Face Enterprise Hub Partner',
              'Anthropic Solution Provider (regional list)',
              'Databricks Lakehouse Partner — Data + AI Consulting designation',
              'MBZUAI Industry Affiliate and TII collaboration agreement',
              'Procurement-ready vendor-qualification paragraph'
            ]}
            filePath="/downloads/partnership-dossier.pdf"
            ctaLabel="Email me the Partnership Dossier"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Procurement questions"
              title="What procurement asks before the qualification gate."
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
              eyebrow="Book the partnership-led review"
              title="A senior Brocode lead plus one partner against your architecture team."
              description="We can typically book the joint call inside ten working days. If your vendor-qualification deadline is tighter, tell us in the form and we will work the partner channel in parallel."
            />
            <p className="mt-6 text-sm text-ink-600">
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
        primaryLabel="Book partnership review"
        primaryHref="#contact-form"
      />
    </>
  );
}
