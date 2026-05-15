import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import type { FAQItem } from '@/components/ui/FAQ';
import { CompareTable } from '@/components/ui/CompareTable';
import type { CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { RelatedLinks } from '@/components/RelatedLinks';
import { buildWhatsAppLink, SITE } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';
import { SovereignRack } from './_components/SovereignRack';

const SLUG = 'self-hosted-llm-infrastructure';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I am CISO / Head of Platform Security at [entity]. We need a customer-owned, in-country LLM deployment with our own HSM and KMS. Could we arrange a confidential architecture session under NDA?";

export const metadata: Metadata = {
  title: 'Sovereign On-Premise LLM Appliance — Customer-Owned, In-Country | Brocode',
  description:
    'A customer-owned 8x H100 / H200 LLM appliance with your HSM, your KMS, your model weights. Deployed and STIG-hardened in your data centre in 90 days. Zero data egress.',
  alternates: { canonical: `${SITE.url}/services/${SLUG}` },
  openGraph: {
    title: 'Sovereign On-Premise LLM Appliance — Brocode',
    description:
      'Customer-owned, in-country LLM appliance. 8x H100 / H200 + Thales / Entrust HSM + customer KMS. 90-day delivery. Zero data egress.',
    url: `${SITE.url}/services/${SLUG}`,
    images: [`/images/services/${SLUG}.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sovereign LLM Appliance — Brocode',
    description: '0 bytes egressed. 100 % customer-held keys. Llama 3, Mistral, Qwen, Jais — your choice, your hardware.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request a sovereign LLM appliance design session',
  subtitle: 'Confidential 60-minute session with our principal infrastructure architect, under NDA. Cleared-personnel intake available for federal / defence engagements.',
  ctaLabel: 'Request the design session',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'classification',
      label: 'Data classification ceiling',
      type: 'select',
      options: [
        'Public',
        'Internal',
        'Confidential',
        'Restricted-equivalent',
        'Top-Secret-equivalent (federal / defence)'
      ],
      required: true
    },
    {
      name: 'concurrentUsers',
      label: 'Expected concurrent users',
      type: 'select',
      options: ['<100', '100–1,000', '1,000–10,000', '>10,000'],
      required: true
    },
    {
      name: 'tokenBudget',
      label: 'Token budget per month',
      type: 'select',
      options: ['<50M', '50M–500M', '500M–5B', '>5B'],
      required: true
    },
    {
      name: 'posture',
      label: 'Preferred deployment posture',
      type: 'select',
      options: ['Fully air-gapped', 'DMZ-gated', 'Sovereign cloud-bursted', 'Hybrid'],
      required: true
    },
    {
      name: 'keyCustody',
      label: 'Key custody requirement',
      type: 'select',
      options: [
        'Customer HSM (Thales / Entrust)',
        'Customer-managed KMS',
        'FIPS 140-3 Level 3+ required',
        'No specific requirement'
      ],
      required: true
    },
    {
      name: 'regulator',
      label: 'Regulator / framework in scope',
      type: 'multiselect',
      options: ['TDRA', 'NESA', 'CBUAE', 'SAMA', 'DFSA', 'ADGM FSRA', 'Defence-cleared', 'Other']
    },
    {
      name: 'baseModel',
      label: 'Preferred base model family',
      type: 'multiselect',
      options: ['Llama 3', 'Mistral', 'Qwen', 'DeepSeek', 'Jais', 'Open — advise me']
    }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Hardware physically owned by customer',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'Keys held in customer HSM (Thales / Entrust)',
    brocode: true,
    competitors: ['Microsoft-managed', false, false, 'Vendor-managed'],
  },
  {
    feature: 'In-country residency (UAE / KSA)',
    brocode: true,
    competitors: ['UAE North', false, false, true]
  },
  {
    feature: 'Single-tenant inference (no shared fabric)',
    brocode: true,
    competitors: ['Multi-tenant', 'Multi-tenant', 'Multi-tenant', 'Variable']
  },
  {
    feature: 'Open-weight model choice (Llama / Mistral / Qwen / DeepSeek / Jais)',
    brocode: true,
    competitors: ['Limited', false, false, 'Limited']
  },
  {
    feature: 'Air-gapped deployment option',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'TDRA / NESA / STIG hardening pack',
    brocode: true,
    competitors: [false, false, false, 'Partial']
  },
  {
    feature: 'Customer keeps weights if engagement ends',
    brocode: true,
    competitors: [false, false, false, 'Conditional']
  }
];

const faqs: FAQItem[] = [
  {
    question: 'How do you actually prove that nothing leaves the country?',
    answer:
      'Three structural controls. First, the appliance is physically inside your data centre or your sovereign cloud tenancy — there is no Brocode-managed control plane reaching in. Second, all telemetry, logs, and metrics terminate inside your boundary; no SaaS observability vendor sees your traffic. Third, on air-gapped deployments there is no external network egress at all — model updates are delivered on signed media and verified against the customer-held attestation key. We provide a written residency posture document on day one of the engagement that legal can sign.'
  },
  {
    question: 'Open-weight models are great. Who patches Llama next quarter?',
    answer:
      'Brocode does, as part of the support line. Every quarter we deliver a curated model-update bundle: tested upstream releases (Llama, Mistral, Qwen, DeepSeek, Jais), a regression report against your safety eval set, and a rollback plan. You decide whether to promote. If a new release regresses on Arabic safety or on your customer-specific evals, we have refused to promote it — and have done so twice in the last twelve months. The customer always holds the weights for both the current and the previous build.'
  },
  {
    question: 'How do I defend this to my CFO against an Azure OpenAI consumption line?',
    answer:
      'The lead-magnet pack includes the 36-month TCO model. The crossover where the sovereign appliance becomes cheaper than Azure OpenAI UAE North sits between month 14 and month 22 depending on traffic class. For 500M tokens / month, break-even is around month 18; for 5B tokens / month it is around month 12. Below 50M tokens / month, Azure OpenAI is cheaper and we will tell you so — we have walked away from two procurement conversations where the workload was below the threshold. The CFO argument is not pure TCO; it is residency + key custody + multi-year cost certainty.'
  },
  {
    question: 'What is the exact hardware?',
    answer:
      'The reference 8x node is 8x NVIDIA H100 SXM5 (or 8x H200 for higher-context workloads), NVLink-connected, in a dual-socket Intel Xeon or AMD EPYC chassis with 2 TB DDR5 RAM and NVMe storage scoped to the corpus. The 16x and 32x variants stack two and four such nodes with InfiniBand interconnect. The customer HSM (Thales Luna or Entrust nShield) is a separate appliance behind a customer-managed KMS. Full bill of materials is in the TCO pack, with NVIDIA Elite Partner pricing and lead-time guidance.'
  },
  {
    question: 'How does fine-tuning work without data leaving the appliance?',
    answer:
      'LoRA / QLoRA fine-tuning runs entirely on the appliance, on customer corpora that never leave it. Training data hashes are recorded in the registry but the data itself never moves. The fine-tuning lane uses the same MLflow registry and Argo workflows as the rest of the platform, with model lineage signed by the customer KMS. We also ship a Llama Guard 3 + NeMo Guardrails safety eval pack and an Arabic-specific safety eval set; nothing is promoted to production until those gates pass.'
  },
  {
    question: 'What does the 90-day delivery actually look like?',
    answer:
      'Weeks 1–3 are site survey, HSM / KMS / network design, and signed residency posture. Weeks 4–8 are hardware delivery, rack install, STIG / CIS hardening, and firmware attestation. Weeks 9–11 are model deployment, RAG corpus ingest, and safety / red-team eval. Weeks 12–13 are PenTest and customer acceptance. Week 14 is go-live and handover. For federal / defence engagements, weeks 1–3 also include cleared-personnel onboarding and physical security review of the rack location.'
  },
  {
    question: 'Can you support classified / defence engagements?',
    answer:
      'Yes. Brocode operates a dedicated cleared-engagement intake for federal and defence-adjacent work in the UAE. Personnel clearances, physical security protocols, and cleared-supplier diligence are handled before any technical detail is exchanged. The standard sales path is not used for this work; the WhatsApp link above routes to the cleared intake when the data classification on the form is Restricted or above.'
  },
  {
    question: 'What happens to my appliance if Brocode goes away?',
    answer:
      'The appliance keeps running. The customer owns the hardware, the weights, the keys, and the operational documentation. Every component in the stack — vLLM, Triton, TensorRT-LLM, Llama, Milvus / Qdrant — is open or open-weight under a customer-held licence. There is no Brocode-proprietary critical-path component. We commit in writing to an exit clause that delivers a final operational handover, a 90-day support overlap, and the right to keep all weights and configurations.'
  }
];

const modelMenu = [
  {
    name: 'Llama-3.1-70B-Instruct',
    arabic: 'Strong (with fine-tune)',
    ctx: '128k',
    throughput: '~210 t/s on 8x H100',
    licence: 'Meta licence — reviewed and signed by entity'
  },
  {
    name: 'Llama-3.1-405B-Instruct',
    arabic: 'Strong (with fine-tune)',
    ctx: '128k',
    throughput: '~38 t/s on 8x H100',
    licence: 'Meta licence — reviewed and signed by entity'
  },
  {
    name: 'Mistral-Large-2',
    arabic: 'Moderate',
    ctx: '128k',
    throughput: '~160 t/s on 8x H100',
    licence: 'Mistral Research / Commercial'
  },
  {
    name: 'Mixtral-8x22B-Instruct',
    arabic: 'Moderate',
    ctx: '64k',
    throughput: '~280 t/s on 8x H100',
    licence: 'Apache 2.0'
  },
  {
    name: 'Qwen2.5-72B-Instruct',
    arabic: 'Strong',
    ctx: '128k',
    throughput: '~190 t/s on 8x H100',
    licence: 'Tongyi Qianwen — commercial'
  },
  {
    name: 'DeepSeek-V3',
    arabic: 'Moderate',
    ctx: '128k',
    throughput: '~120 t/s on 8x H100',
    licence: 'DeepSeek licence'
  },
  {
    name: 'Jais-30B-Chat-v3',
    arabic: 'Strong (Arabic-first)',
    ctx: '8k',
    throughput: '~340 t/s on 8x H100',
    licence: 'Open — Inception / G42'
  }
];

const deliveryWeeks = [
  {
    label: 'Weeks 1–3',
    title: 'Site survey + HSM / KMS / network design',
    description:
      'Residency posture document signed by customer legal. HSM / KMS design agreed with your security team. Network zoning (air-gap, DMZ, or cloud-burst) confirmed. For federal / defence: cleared-personnel onboarding.',
    metric: 'Residency posture signed'
  },
  {
    label: 'Weeks 4–8',
    title: 'Hardware delivery + STIG hardening',
    description:
      'NVIDIA H100 / H200 nodes delivered, racked, and integrated. NVLink fabric verified. STIG / CIS hardening applied to every host. Firmware attestation chain documented. Optional Confidential Computing (CC-on) for Top-Secret tiers.',
    metric: 'STIG / CIS hardening pass'
  },
  {
    label: 'Weeks 9–11',
    title: 'Model deployment + RAG + safety eval',
    description:
      'vLLM + Triton + TensorRT-LLM stack stood up. Base models loaded (Llama / Mistral / Qwen / DeepSeek / Jais — customer choice). RAG corpus ingested via Brocode Arabic OCR + Unstructured.io. Llama Guard 3 + NeMo Guardrails safety eval gates configured.',
    metric: 'Safety eval gates green'
  },
  {
    label: 'Weeks 12–13',
    title: 'PenTest + customer acceptance',
    description:
      'Third-party PenTest. Customer acceptance test against your written criteria. Operational runbooks reviewed by your SRE lead. Compliance pack — TDRA, NESA, CIS, FIPS 140-3 mapping — handed to your audit team.',
    metric: 'PenTest pass · customer countersign'
  },
  {
    label: 'Week 14',
    title: 'Go-live + handover',
    description:
      'Production cutover. 24-hour Brocode-led on-call. Customer team takes joint operations from day 15. Full operational handover — runbooks, dashboards, retraining cadence — countersigned by your platform lead.',
    metric: 'Customer team operating · day 15'
  }
];

const proofItems = [
  { value: '0 bytes', label: 'Data egressed across all deployments' },
  { value: '100 %', label: 'Customer-held keys (Thales / Entrust)' },
  { value: '90 days', label: 'From signed SoW to go-live' },
  { value: '8 → 32', label: 'H100 nodes in the reference variants' }
];

const cases = [
  {
    sector: 'UAE federal entity — air-gapped',
    body: '32x H100 sovereign appliance, fully air-gapped. Llama-3.1-70B + Jais-30B in production for 1,400 internal users. Zero data egress, full TDRA review passed. RAG over the entity\'s internal Arabic correspondence corpus, all in-appliance.',
    metric: '1,400 users · 0 egress'
  },
  {
    sector: 'GCC tier-1 bank — HSM-backed',
    body: '16x H100 appliance behind Thales Luna HSM, customer-owned KMS. RAG over 4.2 million internal documents (Arabic + English). Used for internal copilot + KYC summarisation under CBUAE / SAMA model-risk review.',
    metric: '4.2M docs · CBUAE-approved'
  },
  {
    sector: 'Defence-adjacent prime',
    body: '8x H100 air-gapped node, Mistral-Large-2 fine-tuned on the entity\'s technical corpus. Full STIG / CIS hardening, third-party PenTest pass. Cleared-personnel delivery from week 1. Operational by week 13.',
    metric: 'STIG pass · cleared delivery'
  }
];

export default function SelfHostedLlmPage() {
  return (
    <>
      {/* HERO — sovereign rack render */}
      <section className="relative isolate overflow-hidden bg-[#04070D] text-white">
        <Parallax speed={0.3} className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <CircuitBackdrop />
        </Parallax>

        <div className="container-site relative z-10 pb-20 pt-28 md:pb-28 md:pt-36">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Self-Hosted LLM Infrastructure' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#76B900]">
                  Sovereign GenAI · 8x H100 · 90 days
                </p>
                <h1 className="mt-5 text-balance text-display-xl">
                  Your hardware. Your keys. Your model weights. In your data centre.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  A customer-owned LLM appliance — 8x H100 or H200 nodes, NVLink fabric, behind your Thales / Entrust
                  HSM. Llama 3, Mistral, Qwen, DeepSeek, Jais — your choice, your weights. Deployed and
                  STIG-hardened in <strong className="text-white">under 90 days</strong>.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    href="#contact-form"
                    variant="primary"
                    size="lg"
                    className="bg-[#76B900] text-[#04070D] hover:bg-[#8FD216]"
                    event="quote_open"
                  >
                    Request the design session
                  </MagneticButton>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
                    data-event="whatsapp_hero"
                    data-page={SLUG}
                  >
                    <WhatsAppIcon /> WhatsApp under NDA
                  </a>
                </div>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[#76B900]">
                  0 bytes egressed · 100 % customer-held keys · TDRA-registered · NVIDIA Elite Partner
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <SovereignRack />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080B12] py-14">
        <div className="container-site">
          <ProofBand items={proofItems} variant="dark" />
        </div>
      </section>

      {/* Why SaaS is closed */}
      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Why the SaaS path is closed for your workload class"
                title="The line your CISO has already drawn. We respect it."
                description="For citizen records, signals-adjacent data, customer KYC, and intelligence-adjacent corpora, the residual telemetry plane on a multi-tenant SaaS LLM is structurally non-compliant. The question is what to deploy instead."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {[
              {
                title: 'OpenAI Enterprise / ChatGPT Enterprise',
                body: 'US-resident inference, US-held keys. Structurally non-compliant for the workloads in scope — there is no path to in-country residency.'
              },
              {
                title: 'Azure OpenAI UAE North',
                body: 'Geographically in-country, but the keys, the control plane, the telemetry plane, and the tenancy fabric are Microsoft-managed and multi-tenant. For the CISOs we sell to, this is the wrong side of the line.'
              },
              {
                title: 'AWS Bedrock / Google Vertex AI',
                body: 'Same structural objection as Azure plus weaker regional residency in the GCC. Ruled out for citizen / KYC / signals-adjacent workload classes.'
              },
              {
                title: 'G42 / Presight / Core42 cloud-LLM',
                body: 'Strong sovereign posture. Excellent for many buyers. For peer entities or buyers with a vendor-neutrality mandate, a customer-owned appliance is the requested posture — and we are the vendor-neutral alternative.'
              }
            ].map((row, i) => (
              <Reveal key={row.title} delay={i * 0.05}>
                <div className="grid grid-cols-12 items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6">
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-sm font-semibold text-ink-900">{row.title}</p>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <p className="text-sm leading-relaxed text-ink-700">{row.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reference architecture */}
      <section className="bg-[#04070D] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The sovereign LLM appliance"
            title="One reference, three deployment postures."
            description="The same physical architecture, with three network zonings depending on data classification. The customer-managed boundary is identical in all three; only the perimeter moves."
          />
          <Reveal>
            <BentoGrid className="mt-12">
              <BentoCell span="xl" variant="dark">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Reference architecture</p>
                <h3 className="mt-3 text-2xl font-semibold">8x H100 SXM5 · NVLink · HSM-backed · vLLM + Triton</h3>
                <ArchitectureDiagram />
                <p className="mt-5 text-sm text-white/60">
                  Operations boundary: Brocode operates the stack under SLA during deployment and warranty; customer
                  team takes joint operations from day 15. The platform-operations pattern is documented in{' '}
                  <Link href="/services/mlops-ai-infrastructure" className="text-[#76B900] underline">
                    MLOps & AI Infrastructure
                  </Link>
                  .
                </p>
              </BentoCell>
              <BentoCell span="md" variant="brand">
                <p className="text-xs font-mono uppercase tracking-widest text-white/70">Posture 1</p>
                <h4 className="mt-2 text-xl font-semibold">Air-gapped</h4>
                <p className="mt-3 text-sm text-white/85">
                  Zero external network. Model updates on signed media. Default for Restricted / Top-Secret-equivalent
                  classifications.
                </p>
              </BentoCell>
              <BentoCell span="md">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Posture 2</p>
                <h4 className="mt-2 text-xl font-semibold text-ink-900">DMZ-gated</h4>
                <p className="mt-3 text-sm text-ink-700">
                  Customer-controlled DMZ. Brocode operational access via customer-managed jump host with full
                  session recording. Default for Confidential workloads.
                </p>
              </BentoCell>
              <BentoCell span="md">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Posture 3</p>
                <h4 className="mt-2 text-xl font-semibold text-ink-900">Sovereign cloud-bursted</h4>
                <p className="mt-3 text-sm text-ink-700">
                  Steady-state on-appliance with overflow to in-country sovereign cloud (G42 Core42) under
                  customer-managed keys. Default where elastic capacity matters.
                </p>
              </BentoCell>
            </BentoGrid>
          </Reveal>
        </div>
      </section>

      {/* Model menu */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Model menu"
            title="Seven open-weight models. Your choice. Your weights."
            description="The base models we ship by default. All open-weight, all running fully customer-resident. The customer-specific choice is informed by Arabic strength, context length, throughput, and licence posture."
          />
          <Reveal>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="bg-[#F6F8FB] text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                    <th className="px-5 py-4">Model</th>
                    <th className="px-5 py-4">Arabic strength</th>
                    <th className="px-5 py-4">Context</th>
                    <th className="px-5 py-4">Throughput (8x H100)</th>
                    <th className="px-5 py-4">Licence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {modelMenu.map((m) => (
                    <tr key={m.name} className="hover:bg-[#F6F8FB]/50">
                      <td className="px-5 py-4 font-semibold text-ink-900">{m.name}</td>
                      <td className="px-5 py-4 text-ink-700">{m.arabic}</td>
                      <td className="px-5 py-4 font-mono text-ink-700">{m.ctx}</td>
                      <td className="px-5 py-4 font-mono text-ink-700">{m.throughput}</td>
                      <td className="px-5 py-4 text-xs text-ink-600">{m.licence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-6 text-xs text-ink-500">
            Throughput on a 70B-class model at 256-token input / 256-token output, FP8 / INT8 path on H100. Jais-30B is
            the default Arabic-first option; see{' '}
            <Link href="/services/natural-language-processing" className="underline">
              Natural Language Processing
            </Link>{' '}
            for the Arabic safety eval set.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#F6F8FB] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Brocode vs OpenAI / Azure / Bedrock / G42 cloud-LLM."
            description="What each option actually delivers on the controls your CISO is signing for. Not features — controls."
          />
          <Reveal>
            <div className="mt-12">
              <CompareTable
                brandLabel="Brocode-installed appliance"
                competitors={[
                  'Azure OpenAI UAE North',
                  'OpenAI Enterprise',
                  'AWS Bedrock',
                  'G42 cloud-LLM'
                ]}
                rows={compareRows}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three objections */}
      <section className="bg-[#04070D] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The three objections from your CISO"
            title="What gets asked in the security review."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                q: 'Data sovereignty in writing — prompts, embeddings, weights, logs, all in country, under our control.',
                a: 'Written residency posture document on day one of the engagement. Customer HSM holds keys, customer KMS issues envelopes, telemetry terminates inside boundary. Air-gapped posture is supported with no external network egress at all.'
              },
              {
                q: 'Open-weight is great until I have to maintain it. Who patches Llama?',
                a: 'Brocode does, as part of the support line. Quarterly bundles with regression reports against your safety eval. You decide whether to promote. We have refused two upstream releases in the last year for Arabic safety regression.'
              },
              {
                q: 'Capex justification — how do I defend this to the CFO vs the Azure OpenAI consumption line?',
                a: 'TCO crossover sits between month 14 and month 22 depending on traffic class. Below 50M tokens / month we will tell you Azure is cheaper. The actual argument is residency + key custody + multi-year cost certainty.'
              }
            ].map((o, i) => (
              <Reveal key={o.q} delay={i * 0.07}>
                <GlassCard tone="dark" padding="md" className="h-full">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Objection {i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{o.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{o.a}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 90-day delivery */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="90-day delivery"
            title="Week-by-week. Cleared-personnel intake for federal / defence."
            description="A delivery plan that respects security review timelines. The classification ceiling on your form dictates the cleared-personnel onboarding in weeks 1–3."
          />
          <Reveal>
            <ScrollTimeline steps={deliveryWeeks} className="mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-[#F6F8FB] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Anonymised references"
            title="Three live appliances. Customer details under NDA only."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-[#04070D] p-8 text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">{c.sector}</p>
                  <p className="mt-5 flex-grow text-sm leading-relaxed text-white/75">{c.body}</p>
                  <p className="mt-6 rounded-full bg-[#76B900]/15 px-4 py-2 text-center text-sm font-semibold text-[#76B900]">
                    {c.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            Customer logos remain anonymised indefinitely on this page. Case-study deltas reviewable under NDA via{' '}
            <Link href="/industries/government-public-sector" className="underline">
              Government & Public Sector
            </Link>{' '}
            or{' '}
            <Link href="/industries/banking-financial-services" className="underline">
              Banking & Financial Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead-magnet */}
      <section className="bg-white py-24">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Sovereign LLM Reference Architecture & 36-Month TCO Pack"
            description="A 48-page technical pack covering the full 8x H100 reference architecture, the Excel TCO model, the hardware bill of materials, and the STIG hardening checklist."
            contents={[
              'Hardware BoM — 8x H100 SXM5 reference node (and 16x, 32x variants)',
              'Power and cooling sizing for UAE / KSA data centres',
              'vLLM + Triton + TensorRT-LLM serving stack — config and tuning',
              '36-month TCO model vs Azure OpenAI UAE North and OpenAI Enterprise',
              'Customer HSM / KMS patterns — Thales Luna and Entrust nShield'
            ]}
            filePath="/downloads/sovereign-llm-tco-pack.pdf"
            ctaLabel="Email me the TCO pack"
            thumbnail="/images/services/self-hosted-llm-infrastructure.jpg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F6F8FB] py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="What CISOs and procurement leads ask first."
              description="Eight questions our principal infrastructure architect answers in nearly every confidential session. No marketing softening."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="contact-form" className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-[#76B900]">Confidential design session</p>
              <h2 className="mt-3 text-display-lg text-ink-900">
                Sixty minutes with our principal infrastructure architect — under NDA.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Seven fields — classification, concurrent users, token budget, deployment posture, key custody,
                regulator, base model preference. Submissions at Restricted or above route to the cleared intake.
              </p>
              <div className="mt-8 rounded-2xl border border-ink-100 bg-[#F6F8FB] p-6">
                <p className="text-sm font-semibold text-ink-900">Or skip the form.</p>
                <p className="mt-2 text-sm text-ink-700">
                  Message our principal infrastructure architect directly on WhatsApp, under NDA.
                </p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  <WhatsAppIcon /> Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card md:p-10">
                <QuoteForm config={formConfig} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'Registry, retraining, drift, and lineage for the appliance estate.'
          },
          {
            label: 'Document Intelligence',
            href: '/services/document-intelligence',
            description: 'Arabic OCR ingest feeding the appliance RAG layer.'
          },
          {
            label: 'Natural Language Processing',
            href: '/services/natural-language-processing',
            description: 'Arabic safety eval and intent classification on top of the LLM.'
          },
          {
            label: 'Government & Public Sector',
            href: '/industries/government-public-sector',
            description: 'Sovereign GenAI deployments for federal entities.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'Tier-1 bank copilot and KYC summarisation under CBUAE / SAMA.'
          }
        ]}
      />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request design session" />

      <Script
        id="ld-service-self-hosted-llm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sovereign On-Premise LLM Appliance',
            serviceType: 'Customer-owned LLM infrastructure deployment',
            provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait'],
            description:
              'A customer-owned LLM appliance (8x H100 / H200) with customer HSM, customer KMS, customer-held weights. Deployed and STIG-hardened in the customer data centre in 90 days. Zero data egress.',
            url: `${SITE.url}/services/${SLUG}`
          })
        }}
      />
      <Script
        id="ld-faq-self-hosted-llm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
    </svg>
  );
}

function CircuitBackdrop() {
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full" aria-hidden>
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 60 + 20}
          x2="1200"
          y2={i * 60 + 20}
          stroke="#76B900"
          strokeOpacity="0.18"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 60 + 20}
          y1="0"
          x2={i * 60 + 20}
          y2="800"
          stroke="#76B900"
          strokeOpacity="0.12"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 480 240" className="mt-5 h-auto w-full" role="img" aria-label="Sovereign LLM appliance architecture">
      <rect x="6" y="14" width="468" height="216" rx="14" fill="#0B131F" stroke="#76B900" strokeOpacity="0.35" />
      <text x="20" y="32" fill="#76B900" fontSize="9" fontFamily="ui-monospace, monospace">
        customer-owned boundary
      </text>

      {/* HSM */}
      <rect x="20" y="50" width="100" height="50" rx="8" fill="#04070D" stroke="#E6CE89" strokeOpacity="0.7" />
      <text x="32" y="72" fill="white" fontSize="11" fontWeight="600">
        HSM
      </text>
      <text x="32" y="88" fill="#E6CE89" fontSize="9">
        Thales / Entrust
      </text>

      {/* KMS */}
      <rect x="20" y="115" width="100" height="50" rx="8" fill="#04070D" stroke="#E6CE89" strokeOpacity="0.7" />
      <text x="32" y="137" fill="white" fontSize="11" fontWeight="600">
        KMS
      </text>
      <text x="32" y="153" fill="#E6CE89" fontSize="9">
        Customer-managed
      </text>

      {/* H100 node */}
      <rect x="150" y="50" width="180" height="115" rx="8" fill="#0B1A14" stroke="#76B900" strokeOpacity="0.7" />
      <text x="162" y="68" fill="white" fontSize="11" fontWeight="600">
        8x H100 SXM5 · NVLink
      </text>
      <text x="162" y="84" fill="#76B900" fontSize="9">
        vLLM + Triton + TensorRT-LLM
      </text>
      {/* GPU dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={`gpu-${i}`}
          x={162 + (i % 4) * 38}
          y={100 + Math.floor(i / 4) * 28}
          width="32"
          height="20"
          rx="3"
          fill="#04070D"
          stroke="#76B900"
          strokeOpacity="0.6"
        />
      ))}

      {/* Models */}
      <rect x="350" y="50" width="115" height="50" rx="8" fill="#04070D" stroke="#76B900" strokeOpacity="0.5" />
      <text x="362" y="72" fill="white" fontSize="11" fontWeight="600">
        Models
      </text>
      <text x="362" y="88" fill="#76B900" fontSize="9">
        Llama · Mistral · Jais
      </text>

      <rect x="350" y="115" width="115" height="50" rx="8" fill="#04070D" stroke="#76B900" strokeOpacity="0.5" />
      <text x="362" y="137" fill="white" fontSize="11" fontWeight="600">
        RAG store
      </text>
      <text x="362" y="153" fill="#76B900" fontSize="9">
        Milvus / Qdrant
      </text>

      {/* Network zone box */}
      <rect x="20" y="180" width="445" height="40" rx="8" fill="#04070D" stroke="#E6CE89" strokeOpacity="0.4" />
      <text x="32" y="202" fill="white" fontSize="11" fontWeight="600">
        Network zoning: air-gap · DMZ · sovereign cloud-burst
      </text>
      <text x="32" y="215" fill="#E6CE89" fontSize="9">
        STIG / CIS hardened · firmware attested · CC-on for Top-Secret tier
      </text>

      {/* Connections */}
      <path d="M 120 75 L 150 75" stroke="#E6CE89" strokeWidth="1.2" />
      <path d="M 120 140 L 150 140" stroke="#E6CE89" strokeWidth="1.2" />
      <path d="M 330 75 L 350 75" stroke="#76B900" strokeWidth="1.2" />
      <path d="M 330 140 L 350 140" stroke="#76B900" strokeWidth="1.2" />
    </svg>
  );
}
