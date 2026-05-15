import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'deep-learning-solutions';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I lead R&D at [organisation] and we have a deep-learning prototype that needs to move from a notebook to our on-premise GPU cluster. The domain is [seismic / materials / life sciences / defence / energy / other]. Could a senior applied-research engineer take a 30-minute call this week?";

export const metadata: Metadata = {
  title: 'Deep Learning Consultancy UAE | On-Premise GPU R&D Pod | Brocode',
  description:
    'A working, validated deep-learning system on your proprietary data, running on your own GPU cluster, delivered in two quarters by a UAE-resident applied-research pod with shipped transformers, GNNs, and physics-informed nets.',
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: 'Deep Learning, on your cluster, in two quarters - Brocode Solutions',
    description:
      'Applied-research pod that ships transformers, GNNs, U-Nets, and physics-informed neural nets on air-gapped DGX/H100 estates in the UAE.',
    url: `https://www.brocode.ae/services/${SLUG}`,
    images: [{ url: `/images/services/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep Learning on your cluster - Brocode Solutions',
    description: 'Air-gapped research-to-production deep learning for UAE R&D.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Scope a 12-week deep-learning prototype with an applied-research lead',
  subtitle:
    'A Brocode applied-research lead reads your brief, replies with a draft architecture and team, and books a call within one business day.',
  ctaLabel: 'Scope the 12-week prototype',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'researchDomain',
      label: 'Research domain',
      type: 'select',
      required: true,
      options: [
        'Energy & subsurface',
        'Materials & chemistry',
        'Life sciences & drug discovery',
        'Defence & sensing',
        'Robotics',
        'Climate & sustainability',
        'Other'
      ]
    },
    {
      name: 'currentState',
      label: 'Current state of the work',
      type: 'select',
      options: [
        'Published paper to reproduce',
        'Internal prototype on public data',
        'Internal prototype on proprietary data',
        'Production candidate needing hardening'
      ]
    },
    {
      name: 'architecture',
      label: 'Architecture family',
      type: 'multiselect',
      options: [
        'CNN',
        'U-Net',
        'Transformer',
        'GNN',
        'Physics-informed NN',
        'Diffusion',
        'RL',
        'Foundation-model fine-tune',
        'Custom'
      ]
    },
    {
      name: 'compute',
      label: 'Compute environment',
      type: 'select',
      options: [
        'On-premise air-gapped cluster',
        'On-premise connected cluster',
        'G42 Cloud',
        'Hyperscaler UAE region',
        'No cluster yet'
      ]
    },
    {
      name: 'classification',
      label: 'Data sensitivity classification',
      type: 'select',
      options: ['Open', 'Commercial-in-confidence', 'Restricted', 'Secret', 'Above secret']
    },
    {
      name: 'demoDate',
      label: 'Target demo window',
      type: 'date',
      helper: 'Typical responses 8 / 16 / 24 weeks.'
    }
  ]
};

const architectures = [
  { name: 'Transformer', shipped: 'Transient-fault classifier on subsurface seismic signals, 8x improvement over baseline CNN.' },
  { name: 'GNN', shipped: 'ADMET property prediction for medicinal-chemistry triage, integrated into the daily workflow.' },
  { name: 'U-Net', shipped: '3D seismic horizon picking on a proprietary subsurface volume, 87% agreement with senior interpreter.' },
  { name: 'PINN', shipped: 'Transient turbine thermo-mechanics, 60x speed-up over legacy FEM at 4.2% MAE on validation.' },
  { name: 'Diffusion', shipped: 'Synthetic SAR tile generation for limited-label training in defence-adjacent sensing.' },
  { name: 'RL', shipped: 'Tokamak-style control loop for a sovereign energy research programme - simulator only, pre-publication.' }
];

const objections = [
  {
    objection:
      'Have you actually shipped a transformer / GNN / physics-informed net in production, or only fine-tuned an off-the-shelf model? Show me the architectures and the validation evidence.',
    response:
      'Public commits, pre-prints, and conference talks for every Brocode applied-research engineer are linked from their individual page on the site. Every engagement closes with a Reproducible Research Pack: containerised training, fixed seeds, documented validation protocol, hold-out metrics, ablation table, and a model card co-signed by the Brocode lead and the client SME. The same engineer presents it to your science committee.',
    proof: 'Proof: anonymised ADNOC-tier reference - 3D seismic interpretation U-Net retrained on a proprietary subsurface volume, 87% horizon-picking agreement with the senior interpreter, deployed on the internal DGX cluster.'
  },
  {
    objection:
      'Our cluster is air-gapped. Your team will have to work on-site, badge in, and never take code or data out. Are you set up for that operating model?',
    response:
      'Yes. Our default delivery mode for energy, defence-adjacent, and life-sciences clients is on-site, on the client\'s badge, with no code or data leaving the perimeter. The pod commissions the DGX, H100, or H200 SuperPOD inside your network, configures the training stack with your security operations team, and writes every commit into your repos. Brocode engineers are cleared for the relevant security classifications on a per-engagement basis.',
    proof: 'Proof: anonymised TII-adjacent reference - physics-informed neural net for transient turbine thermo-mechanics, 60x speed-up over the legacy FEM solver at 4.2% MAE, the full programme delivered on-site on an air-gapped cluster.'
  },
  {
    objection:
      'We have worked with a university group before. The papers are good but nothing runs in production. How do you avoid that failure mode?',
    response:
      'Different operating model. The university partnership is calibrated to a publication; the Brocode pod is calibrated to a working system on your cluster, with a sign-off from your domain SME against the validation protocol. The two are complementary - we routinely co-publish with the same academic groups. The Reproducibility Checklist we share lets you score any vendor or partner against the same bar before you commit.',
    proof: 'Proof: anonymised Mubadala-portfolio biotech reference - graph neural net for ADMET property prediction, integrated into the medicinal-chemistry team\'s daily triage workflow within 14 weeks, with a joint pre-print authored alongside the client\'s computational chemistry lead.'
  }
];

const compareRows = [
  {
    feature: 'Delivery target',
    brocode: 'Working system on your cluster, 24 weeks',
    competitors: ['Publication, ~18 months', 'Publication or prototype, US-billed', 'Slide deck + advisory', '9-14 months to hire pod']
  },
  {
    feature: 'On-premise air-gapped delivery',
    brocode: true,
    competitors: [true, false, false, true]
  },
  {
    feature: 'Named applied-research lead with PhD + publications',
    brocode: 'Yes - public commits and pre-prints linked',
    competitors: ['Yes', 'Rotating consultants', 'Partner + offshore', 'Depends on hire']
  },
  {
    feature: 'Reproducible Research Pack at every milestone',
    brocode: 'Containerised, fixed seeds, ablations, model card',
    competitors: ['Paper appendix', 'Not standard', 'Not standard', false]
  },
  {
    feature: 'Domain SME sign-off workflow',
    brocode: 'Required before milestone close',
    competitors: ['Author review only', false, false, false]
  },
  {
    feature: 'UAE-billed in AED',
    brocode: true,
    competitors: [true, false, true, true]
  },
  {
    feature: 'Joint authorship / IP model',
    brocode: 'Optional co-publication, IP to client',
    competitors: ['IP often joint with university', 'IP to vendor', 'IP murky', 'IP to client']
  },
  {
    feature: 'Blended engineering rate',
    brocode: '40-50% under US-billed hyperscaler PSO',
    competitors: ['Lower, fixed grant scope', 'US-billed premium', 'US-billed premium', '~AED 7-10M / year fully loaded']
  }
];

const faqItems = [
  ...objections.map((o) => ({ question: o.objection, answer: `${o.response}\n\n${o.proof}` })),
  {
    question: 'Who owns the IP and the publication rights?',
    answer:
      'The default position: all model artefacts, weights, and training pipelines belong to the client on creation. Publication rights are negotiated per engagement; for sensitive programmes the default is no publication. For non-sensitive work we frequently co-publish with the client\'s scientists, with Brocode engineers as co-authors. The agreement is captured in the engagement contract before kickoff.'
  },
  {
    question: 'How do you size the GPU cluster, and do you sell hardware?',
    answer:
      'We do not sell GPU hardware. We size the cluster based on the architecture family, the dataset volume, and the target training-iteration budget. For a 70B-class foundation-model fine-tune we typically specify 8x H100 SXM5; for a U-Net on 3D seismic volumes a 4x H100 PCIe node may suffice. We will write the BoM, the power and cooling sizing, and the procurement specification, and we will commission whichever supplier wins the tender.'
  },
  {
    question: 'How does milestone structure work, and how do payments tie to it?',
    answer:
      'A typical 24-week programme has four milestones at weeks 4, 12, 18, and 24, each tied to a Reproducible Research Pack deliverable that the client SME signs before the milestone closes. Payment terms follow milestone sign-off. If a milestone misses the validation gate, we extend the milestone, not the invoice schedule.'
  },
  {
    question: 'Can you work alongside our university partner?',
    answer:
      'Yes - this is a frequent operating model. The university group typically owns the novel contribution and the publication; Brocode owns the engineering, the cluster, and the production-readiness work. We have signed three-party engagement structures with MBZUAI and Khalifa University groups and can share the contract template under NDA.'
  },
  {
    question: 'How do you handle data classification above commercial-in-confidence?',
    answer:
      'For restricted, secret, and above-secret data, the pod is co-located on the client site for the full engagement, all credentials and devices are client-issued, and every engineer is cleared at the appropriate level under the client\'s vetting process. No code or data leaves the perimeter. We have run programmes under this model for defence-adjacent and sovereign-energy research clients.'
  }
];

const proofItems = [
  { value: '87%', label: 'Seismic horizon-picking agreement on proprietary subsurface volume' },
  { value: '60x', label: 'PINN speed-up over legacy FEM solver - turbine thermo-mechanics' },
  { value: '2 / 12', label: 'Academic prototypes reproducible on a fresh cluster in two weeks' },
  { value: '840 hr', label: 'Median engineering hours to harden paper-quality prototype to production' }
];

const relatedItems = [
  {
    label: 'Machine Learning Development',
    href: '/services/machine-learning-development',
    description: 'For audiences whose problem is production ML rather than novel research.'
  },
  {
    label: 'Self-Hosted LLM Infrastructure',
    href: '/services/self-hosted-llm-infrastructure',
    description: 'For foundation-model fine-tuning on owned GPU estates.'
  },
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'The platform spine that keeps the research-grade system alive in production.'
  },
  {
    label: 'Energy & Utilities',
    href: '/industries/energy-utilities',
    description: 'The dominant industry for subsurface and turbine deep-learning work.'
  },
  {
    label: 'Healthcare',
    href: '/industries/healthcare',
    description: 'Drug-discovery and molecular GNN deployment for life-sciences R&D.'
  }
];

export default function DeepLearningSolutionsPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Deep Learning Solutions',
    serviceType: 'Applied deep-learning research and engineering',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Singapore', 'United Kingdom'],
    description:
      'A research-to-production pod that delivers transformers, GNNs, U-Nets, PINNs, and foundation-model fine-tunes on the client\'s own on-premise GPU cluster, with Reproducible Research Packs at every milestone.',
    url: `https://www.brocode.ae/services/${SLUG}`
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="service-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO - research montage with air-gapped cluster widget */}
      <section className="relative isolate overflow-hidden bg-[#0a1424] text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Deep Learning Solutions' }
            ]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4 text-cyan-300/70">Applied research, on your cluster</p>
              <h1 className="text-balance text-display-2xl">
                Deep learning that <span className="text-cyan-300">runs on your DGX.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Transformers, GNNs, U-Nets, and physics-informed networks - shipped on proprietary data, on your air-gapped GPU estate, in two quarters. By a pod with published PhDs and the engineering discipline to take a paper to a working system.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" event="quote_open">
                  Scope the 12-week prototype
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                >
                  WhatsApp the research lead
                </a>
              </div>
            </div>

            {/* Hero visual: four-panel research montage */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3">
                {/* Seismic panel */}
                <div className="aspect-square rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0a1a30] to-[#081226] p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px bg-cyan-300/40"
                        style={{ top: `${(i / 14) * 100}%`, transform: `translateY(${Math.sin(i * 0.7) * 6}px)` }}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-wider text-cyan-300/80">Panel 01 - U-Net</p>
                    <p className="mt-1 text-sm font-semibold text-white">3D seismic interpretation</p>
                    <p className="mt-1 text-[11px] text-white/60">Horizon agreement 87%</p>
                  </div>
                </div>

                {/* Molecular graph panel */}
                <div className="aspect-square rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0a1a30] to-[#081226] p-4 relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-50">
                    <g stroke="#67e8f9" strokeWidth="0.6" fill="none">
                      <line x1="20" y1="40" x2="50" y2="55" />
                      <line x1="50" y1="55" x2="80" y2="40" />
                      <line x1="50" y1="55" x2="50" y2="80" />
                      <line x1="20" y1="40" x2="35" y2="25" />
                      <line x1="80" y1="40" x2="65" y2="25" />
                      <line x1="35" y1="25" x2="65" y2="25" />
                    </g>
                    <g fill="#fbbf24">
                      <circle cx="20" cy="40" r="3.5" />
                      <circle cx="50" cy="55" r="4.5" />
                      <circle cx="80" cy="40" r="3.5" />
                      <circle cx="50" cy="80" r="3" />
                      <circle cx="35" cy="25" r="3" />
                      <circle cx="65" cy="25" r="3" />
                    </g>
                  </svg>
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-wider text-cyan-300/80">Panel 02 - GNN</p>
                    <p className="mt-1 text-sm font-semibold text-white">ADMET property prediction</p>
                    <p className="mt-1 text-[11px] text-white/60">Node-importance heatmap</p>
                  </div>
                </div>

                {/* PINN turbine panel */}
                <div className="aspect-square rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0a1a30] to-[#081226] p-4 relative overflow-hidden">
                  <div className="absolute inset-x-4 bottom-4 h-1/2 rounded-lg bg-gradient-to-tr from-orange-500/20 via-amber-400/30 to-cyan-300/30" />
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-wider text-cyan-300/80">Panel 03 - PINN</p>
                    <p className="mt-1 text-sm font-semibold text-white">Turbine thermo-mechanics</p>
                    <p className="mt-1 text-[11px] text-white/60">60x faster than FEM</p>
                  </div>
                </div>

                {/* SAR detection panel */}
                <div className="aspect-square rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0a1a30] to-[#081226] p-4 relative overflow-hidden">
                  <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-1 opacity-60">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className={`rounded-sm ${i === 4 || i === 7 ? 'border border-cyan-300' : 'bg-white/5'}`} />
                    ))}
                  </div>
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-wider text-cyan-300/80">Panel 04 - Transformer</p>
                    <p className="mt-1 text-sm font-semibold text-white">SAR tile detection</p>
                    <p className="mt-1 text-[11px] text-white/60">Defence-adjacent</p>
                  </div>
                </div>
              </div>

              {/* Cluster widget */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-[#0a1a30]/80 p-4 backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/20 text-cyan-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="6" rx="1" />
                    <rect x="3" y="14" width="18" height="6" rx="1" />
                    <circle cx="6" cy="7" r="0.5" fill="currentColor" />
                    <circle cx="6" cy="17" r="0.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="font-mono text-xs">
                  <p className="text-cyan-300">DGX-H100 - 8 GPU</p>
                  <p className="text-white/60">Abu Dhabi - air-gapped</p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  online
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Pre-print to production gap */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The pre-print to production gap"
            title="A paper that works on a laptop is not a system that survives a board science committee."
            description="Three failure modes account for nearly every stuck R&D programme we audit. Each is named, sampled, and addressed in the Reproducible Research Pack."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Irreproducible code',
                body:
                  'A repo of notebooks with hard-coded paths, missing seeds, and a private dataset reference. In our internal audit, 10 of 12 academic prototypes failed to reproduce end-to-end on a fresh cluster within two weeks.'
              },
              {
                title: 'Missing domain validation',
                body:
                  'A model with strong public-benchmark numbers and no comparison to the domain expert ground truth. The Brocode default is a structured SME sign-off on a hold-out set drawn from your operational data.'
              },
              {
                title: 'No on-prem deployment path',
                body:
                  'A working notebook on a researcher\'s laptop with no air-gapped serving plan. Brocode commissions the DGX, H100, or H200 estate inside your perimeter as part of every engagement.'
              }
            ].map((g) => (
              <Reveal key={g.title}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold text-ink-900">{g.title}</h3>
                  <p className="mt-3 text-sm text-ink-700">{g.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architectures we ship */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Architectures we ship"
            title="Six architecture families. Each with a working reference in production today."
            description="If your domain is not on this list, the call still happens. We have a curated specialist bench beyond the six below."
          />
          <BentoGrid className="mt-12">
            {architectures.map((a, i) => (
              <BentoCell key={a.name} span={i === 0 ? 'lg' : i === 3 ? 'lg' : 'md'} variant={i % 2 === 0 ? 'light' : 'glass'}>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{a.name}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">What we&apos;ve shipped</h3>
                <p className="mt-3 text-sm text-ink-700">{a.shipped}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* The Research-to-Production Pod */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Research-to-Production Pod"
            title="One applied-research lead. Two senior DL engineers. One domain SME. One MLOps engineer."
            description="The fixed shape. Every name in the proposal is on the contract. The applied-research lead carries a published PhD in an adjacent domain."
            variant="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { role: 'Applied-Research Lead', detail: 'Published PhD in the adjacent domain - vision, NLP, physics, chemistry, or RL. Public commits and pre-prints linked from their engineer page.' },
              { role: 'Senior DL Engineers (x2)', detail: 'PyTorch 2.x, JAX/Flax, DeepSpeed and FSDP for multi-GPU training. Hugging Face Transformers and PEFT for foundation-model fine-tuning.' },
              { role: 'Domain SME', detail: 'Sub-contracted from a curated UAE specialist bench - subsurface geologist, computational chemist, control-systems engineer, or radiologist, as required.' },
              { role: 'MLOps Engineer', detail: 'NVIDIA Triton, TensorRT, DVC, Weights & Biases. Commissions the cluster, the training stack, and the eval harness inside your perimeter.' }
            ].map((p) => (
              <Reveal key={p.role}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{p.role}</p>
                  <p className="mt-3 text-sm text-white/80">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-premise GPU enablement */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="On-premise GPU enablement"
            title="DGX, H100, H200 SuperPOD - or G42 Cloud bare metal. Your perimeter, your keys."
            description="No client data ever transits a US-billed hyperscaler. The default operating model is on-site, on the client's badge, on your network."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <GlassCard className="lg:col-span-1">
              <p className="eyebrow">Hardware sizing</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">BoM and procurement spec written by the pod</h3>
              <p className="mt-3 text-sm text-ink-700">
                We do not sell hardware. We write the bill of materials, the power and cooling sizing, and the procurement specification. Your supplier wins the tender; we commission the result.
              </p>
            </GlassCard>
            <GlassCard className="lg:col-span-1">
              <p className="eyebrow">Stack</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">PyTorch 2.x + Lightning, JAX/Flax, Triton, TensorRT</h3>
              <p className="mt-3 text-sm text-ink-700">
                DeepSpeed and FSDP for multi-GPU training; Hugging Face Transformers and PEFT for foundation-model fine-tuning. Weights & Biases for tracking, DVC for data versioning.
              </p>
            </GlassCard>
            <GlassCard className="lg:col-span-1">
              <p className="eyebrow">Key management</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Customer-managed keys, HSM-backed</h3>
              <p className="mt-3 text-sm text-ink-700">
                Thales or Entrust HSM patterns for model weights, dataset encryption, and registry signatures. Audit-trail wired into your SIEM from day one.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="What R&D directors push back on"
            title="Three honest objections, three honest answers."
          />
          <div className="mt-12 space-y-6">
            {objections.map((o, i) => (
              <Reveal key={i}>
                <article className="grid grid-cols-1 gap-6 rounded-2xl border border-ink-100 bg-white p-7 md:grid-cols-12 md:p-9">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-3 text-lg font-semibold italic text-ink-900">&ldquo;{o.objection}&rdquo;</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-ink-700">{o.response}</p>
                    <p className="mt-4 rounded-xl border-l-2 border-brand bg-surface-muted px-4 py-3 text-sm text-ink-700">{o.proof}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Validation protocol + image break */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={`/images/services/${SLUG}.jpg`}
            alt="Applied-research engineer reviewing experiment runs on a multi-monitor workstation inside an air-gapped research lab"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 py-22 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70">The Reproducible Research Pack</p>
            <h2 className="mt-3 text-display-md">What you get at every milestone, signed by both leads.</h2>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Containerised training image with pinned dependencies</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Fixed random seeds and documented hardware fingerprint</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Validation protocol with the held-out set sample composition</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Ablation table covering at least the four design decisions</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Model card aligned to the client&apos;s domain reporting standard</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />Co-signature from the Brocode lead and the client SME</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Academic partner, hyperscaler PSO, Big-4, or hire-in. Where each fits."
            description="The four routes a CSO weighs when this budget reaches the science committee. We complement the academic route rather than replace it."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['University partner', 'Google / AWS ML Solutions Lab', 'IBM / Accenture Applied AI', 'DIY hiring more PhDs']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Working with universities */}
      <section className="bg-surface-muted py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">Working with universities and consortia</p>
            <h2 className="mt-3 text-display-md text-ink-900">We complement, we do not replace.</h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-ink-700">
            <p>
              The publication-quality prototype that comes from an MBZUAI, KU, NYU AD, or KAUST group is genuinely good. It is rarely a system that runs against operational data on an air-gapped cluster within two quarters. That is what Brocode adds.
            </p>
            <p>
              Our typical engagement structure is three-party: the academic group, the operational sponsor, and Brocode. The academic group owns the novel contribution and the publication; the sponsor owns the data, the cluster, and the operational outcome; Brocode owns the engineering bridge between them.
            </p>
            <p>
              Joint IP, joint authorship, and joint deliverables are all negotiable. We have signed this structure with three named groups in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-white py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="From Pre-print to Production: a Reproducibility & Hardening Playbook for UAE R&D Teams"
            description="A 40-page PDF and a 30-item reproducibility checklist (CSV). Built around twelve real deep-learning engagements in energy, defence-adjacent, and life-sciences R&D."
            contents={[
              'Experiment tracking standards',
              'Data and model lineage',
              'GPU cluster economics',
              'Reproducer kit standards',
              'Publication and IP guidance',
              'Internal benchmark: 2 of 12 papers reproducible end-to-end on a fresh cluster within two weeks'
            ]}
            filePath="/downloads/applied-research-reproducibility-playbook.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions from R&D directors</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked.</h2>
            <p className="mt-4 text-ink-600">
              These answers are pulled directly from the engagement contracts we sign for energy, defence-adjacent, and life-sciences clients.
            </p>
            <Link href="/contact" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand" data-event="secondary_cta_click" data-page={SLUG}>
              Ask a different question
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="relative isolate overflow-hidden bg-[#0a1424] py-22 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-cyan-300/70">Talk to the applied-research lead</p>
            <h2 className="mt-3 text-display-lg">A 30-minute call this week. No salesperson on the line.</h2>
            <p className="mt-5 max-w-lg text-white/80">
              Tell us the domain, the data classification, and the demo window. We come back with a draft architecture, the named lead, and three references you can phone within 48 hours.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p><strong className="text-white">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-white">Email:</strong> hello@brocode.ae</p>
              <p><strong className="text-white">HQ:</strong> Al Maryah Island, ADGM, Abu Dhabi</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 text-ink-900 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Scope the prototype" primaryHref="#contact-form" />
    </>
  );
}
