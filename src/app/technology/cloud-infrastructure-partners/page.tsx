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
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'cloud-infrastructure-partners';
const PAGE_URL = '/technology/cloud-infrastructure-partners';

export const metadata: Metadata = {
  title: 'UAE Cloud Infrastructure Partners — AWS, Azure, OCI, G42, Khazna | Brocode',
  description:
    'Brocode deploys AI workloads across seven UAE cloud estates — AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, Khazna, du Cloud and e&. Six-week landing zone with a regulator-evidence pack mapped to TDRA, CBUAE, FSRA and NCA.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'UAE Sovereign & Hybrid Cloud Atlas — Brocode',
    description:
      'Seven estates. One control plane. One regulator-evidence pack.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/cloud-infrastructure-partners.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a 60-minute landing-zone design session',
  subtitle:
    'A principal cloud architect walks the regulator overlay, residency story and Terraform module skeleton for your UAE estates.',
  ctaLabel: 'Book a technical review',
  whatsappMessage:
    "Hi Brocode — I'm planning AI landing zones across [AWS UAE North / Azure UAE North / OCI Abu Dhabi / G42 Cloud / Khazna on-prem] for [organisation]. I'd like to book the 60-minute landing-zone design session this fortnight.",
  fields: [
    {
      name: 'targetEstates',
      label: 'Target estates',
      type: 'multiselect',
      options: ['AWS UAE North', 'AWS Bahrain', 'Azure UAE North', 'OCI Abu Dhabi', 'G42 Cloud', 'Khazna', 'du Cloud', 'On-prem appliance']
    },
    {
      name: 'workloadProfile',
      label: 'Workload profile',
      type: 'multiselect',
      options: ['LLM training', 'LLM inference', 'Classical ML', 'Data lake', 'Vector search', 'Agentic']
    },
    {
      name: 'regulator',
      label: 'Regulator overlay required',
      type: 'multiselect',
      options: ['TDRA', 'CBUAE', 'FSRA-ADGM', 'DFSA-DIFC', 'NCA-KSA', 'DHA', 'SEHA', 'Other']
    },
    {
      name: 'keyManagement',
      label: 'Key-management requirement',
      type: 'select',
      options: ['Cloud-managed', 'Customer-managed (BYOK)', 'External key store', 'HSM-backed']
    },
    {
      name: 'landingZoneState',
      label: 'Existing landing zone in place?',
      type: 'select',
      options: ['Greenfield', 'Partial', 'Mature — needs AI overlay']
    },
    {
      name: 'timeTarget',
      label: 'Target time-to-first-workload',
      type: 'select',
      options: ['<6 weeks', '6–12 weeks', '12–26 weeks', '>26 weeks']
    }
  ]
};

type Estate = {
  id: string;
  name: string;
  type: 'Hyperscaler' | 'Microsoft' | 'Oracle' | 'Sovereign' | 'Carrier' | 'On-prem';
  region: string;
  latency: string;
  partnership: string;
  byok: string;
  regulator: string;
  shines: string;
  caveat: string;
};

const ESTATES: Estate[] = [
  {
    id: 'aws',
    name: 'AWS UAE North + Bahrain',
    type: 'Hyperscaler',
    region: 'me-central-1 / me-south-1',
    latency: '2.1ms',
    partnership: 'AWS Advanced Tier Services Partner',
    byok: 'KMS with external key store; AWS CloudHSM available',
    regulator: 'TDRA, CBUAE Outsourcing, ADGM DP',
    shines: 'SageMaker / Bedrock-fronted GenAI; mature service breadth; cross-region resilience to Bahrain',
    caveat: 'GenAI model availability still trails US regions by one quarter; plan model rotations accordingly'
  },
  {
    id: 'azure',
    name: 'Azure UAE North + UAE Central',
    type: 'Microsoft',
    region: 'uaenorth / uaecentral',
    latency: '1.8ms',
    partnership: 'Microsoft AI Cloud Partner — Data & AI + Build & Modernize AI Apps',
    byok: 'Azure Key Vault HSM customer-managed keys; double encryption available',
    regulator: 'TDRA, CBUAE, FSRA-ADGM',
    shines: 'Azure OpenAI Service joint deployments; deep Microsoft 365 integration; identity through Entra ID',
    caveat: 'Some Azure OpenAI models are gated on UAE North; capacity should be reserved upfront'
  },
  {
    id: 'oci',
    name: 'OCI Abu Dhabi + Dubai',
    type: 'Oracle',
    region: 'me-abudhabi-1 / me-dubai-1',
    latency: '2.4ms',
    partnership: 'Oracle Cloud partner — Dedicated Region @ Customer experience',
    byok: 'OCI Vault with external HSM integration; dedicated region option',
    regulator: 'TDRA, CBUAE, FSRA-ADGM, NCA-KSA',
    shines: 'Oracle DB-heavy estates; dedicated region @ customer for entities that need OCI on their own floor',
    caveat: 'Smaller GenAI service catalogue; we typically pair OCI compute with externally-hosted model APIs'
  },
  {
    id: 'g42',
    name: 'G42 Cloud',
    type: 'Sovereign',
    region: 'Abu Dhabi sovereign',
    latency: '0.9ms',
    partnership: 'Core42 Compute partnership; G42 Inception-fronted',
    byok: 'Sovereign HSM; no foreign-operator access; metadata residency declared',
    regulator: 'TDRA, federal sovereign workloads, NESA',
    shines: 'Arabic LLM training on G42 GPU pods; federal-grade residency; sovereign inference path',
    caveat: 'Service catalogue narrower than hyperscalers — pair with a hyperscaler estate for non-sovereign workloads'
  },
  {
    id: 'khazna',
    name: 'Khazna data centres',
    type: 'On-prem',
    region: 'Abu Dhabi + Dubai colocation',
    latency: '0.4ms',
    partnership: 'Khazna colocation partner; NVIDIA DGX-ready halls',
    byok: 'Client-owned HSM; physical-security clearance regime',
    regulator: 'Federal sensitive; defence-adjacent allowed under clearance',
    shines: 'Sensitive corpus training; dedicated GPU racks; OEM HGX H100 / H200 builds',
    caveat: 'Lead time on GPU procurement should be confirmed at landing-zone design'
  },
  {
    id: 'du',
    name: 'du Cloud',
    type: 'Carrier',
    region: 'Dubai South + Samacom',
    latency: '1.1ms',
    partnership: 'du enterprise partnership for managed AI appliances',
    byok: 'Carrier-managed HSM; client-controlled key wrapping available',
    regulator: 'TDRA, DHA-aligned hosting',
    shines: 'Telco-adjacent workloads; managed AI appliance with carrier-grade SLAs; competitive cross-connect fabric',
    caveat: 'GPU portfolio narrower than hyperscalers; works best as the residency tier next to a hyperscaler'
  },
  {
    id: 'eand',
    name: 'e& enterprise / Etisalat',
    type: 'Carrier',
    region: 'Abu Dhabi + Dubai',
    latency: '1.3ms',
    partnership: 'e& enterprise hosting partnership',
    byok: 'Carrier-managed HSM with client key escrow',
    regulator: 'TDRA, federal-aligned carrier hosting',
    shines: 'National operator hosting for state-owned and federal-adjacent entities; long-standing carrier SLAs',
    caveat: 'Best paired with a hyperscaler estate where the workload needs hyperscaler-only AI services'
  }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'AI workloads on hyperscaler + G42 + on-prem on one control plane',
    brocode: true,
    competitors: [false, false, false]
  },
  {
    feature: 'Six-week landing zone with regulator-evidence pack',
    brocode: 'Yes — Terraform skeleton per cloud, pre-mapped controls',
    competitors: ['12–20 weeks', '16–26 weeks', 'Sovereign-only, longer for hyperscaler']
  },
  {
    feature: 'TDRA / CBUAE / FSRA / NCA control mapping shipped at gate',
    brocode: 'Yes — sample available pre-engagement',
    competitors: ['On request, post-engagement', 'Built per engagement', 'TDRA only']
  },
  {
    feature: 'Sovereign HSM and external key store options documented per cloud',
    brocode: true,
    competitors: [false, 'Generic guidance only', false]
  },
  {
    feature: 'Production AI landing zones since 2022',
    brocode: '47 across seven UAE estates',
    competitors: ['<10 in-cloud', '12–18 mainly hyperscaler', '15–20 G42-only']
  },
  {
    feature: 'Cross-cloud observability and FinOps from day one',
    brocode: 'Single OpenTelemetry plane, single FinOps view',
    competitors: ['Per-cloud silos', 'Spreadsheet-driven', 'G42-only view']
  }
];

const TIMELINE: TimelineStep[] = [
  {
    label: 'Week 1',
    title: 'Residency workshop and target architecture',
    description: 'Workload-by-workload residency classification, regulator overlay map, target architecture across the chosen estates, and the cross-cloud network fabric (Megaport, Equinix Fabric, G42 cross-connect).',
    metric: 'Deliverables signed by client architect'
  },
  {
    label: 'Week 2',
    title: 'Terraform module skeleton and identity baseline',
    description: 'Module skeleton committed to your repo; identity baseline (Entra ID / IAM Identity Center / OCI IAM / G42 IDP) federated; first key-management proof on customer-managed keys.',
    metric: 'IaC merged to main'
  },
  {
    label: 'Weeks 3–4',
    title: 'Landing zones provisioned',
    description: 'Per-cloud landing zones built from the skeleton: VPC / VNet topology, encryption-at-rest baselines, audit log routing, OpenTelemetry collector pattern, KServe / SageMaker / Azure ML / OCI Data Science target setup.',
    metric: '4 cloud accounts hardened'
  },
  {
    label: 'Week 5',
    title: 'First workload deployed end-to-end',
    description: 'One end-to-end AI workload (typically a RAG service or a model-serving endpoint) deployed against the live landing zone with full observability and key-management proofs.',
    metric: 'First workload live'
  },
  {
    label: 'Week 6',
    title: 'Regulator-evidence pack handed over',
    description: 'TDRA / CBUAE / FSRA / NCA control-mapping pack handed to the second line of defence. Gate review with internal audit. Hyper-care plan signed.',
    metric: 'Evidence pack signed off'
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do you handle key management — can we really keep our keys in our own HSM?',
    answer:
      'Yes — each estate is configured with a customer-managed key strategy. On AWS we use KMS with an external key store backed by your CloudHSM or on-premise HSM. On Azure we use Key Vault HSM with customer-managed keys and optional double encryption. On OCI we use OCI Vault with external HSM integration. On G42 Cloud we use the sovereign HSM. On Khazna we work directly with your owned HSM. The landing-zone Terraform sets all of this up by variable; no manual ClickOps.'
  },
  {
    question: 'What is your exit story if we need to leave one of these clouds?',
    answer:
      'The landing zone is Terraform-managed and the workload is Kubernetes-portable. The exit pattern is: re-target the Terraform module skeleton to the destination cloud, re-deploy the workload container, re-point the data plane through the network fabric, validate against the regulator-evidence pack on the new estate. We have run this pattern twice for clients who moved a workload from a hyperscaler to G42 Cloud after a residency-policy change; both transitions were under eight weeks.'
  },
  {
    question: 'How does cross-cloud observability actually work?',
    answer:
      'We instrument every workload with OpenTelemetry and route traces, metrics and logs to a single observability plane (typically Grafana Cloud, Datadog or a client-owned Prometheus + Loki + Tempo stack). Each cloud emits to the same plane through a regional collector, so your SRE team sees the whole estate on one set of dashboards rather than per-cloud silos.'
  },
  {
    question: 'How do you control cost across multiple clouds?',
    answer:
      'A unified FinOps view aggregates Cost & Usage Reports, Azure billing exports, OCI cost tracking and G42 utilisation into a single dashboard with anomaly alerts. Reserved capacity (Savings Plans, Azure Reserved Instances, OCI Universal Credits, G42 commitments) is modelled as part of the three-year plan, including egress and GPU. The atlas in the lead magnet contains the per-estate cost-band reference for the most common AI workload shapes.'
  },
  {
    question: 'Why include carrier estates like du Cloud and e& if hyperscalers are richer?',
    answer:
      'Two reasons. First, several state-owned and federal-adjacent entities have policy preferences for national-operator hosting and we will not pretend that constraint away. Second, the carrier estates often have the most favourable cross-connect fabric to the rest of the UAE estate, which matters for hybrid topologies where the carrier hosts the residency tier next to a hyperscaler that hosts the heavy compute.'
  },
  {
    question: 'Will the six-week landing zone actually pass a regulator review?',
    answer:
      'The regulator-evidence pack is pre-mapped to TDRA, CBUAE Outsourcing Regulation, ADGM Data Protection, FSRA Principles for Adoption of AI and NCA ECC. Three CBUAE-supervised banks have passed an internal-audit review at week six; one TDRA submission cleared at week seven without RFIs. The pack template ships as part of the atlas, with an editable section per regulator.'
  }
];

const PROOF_ITEMS = [
  { value: '47', label: 'Production AI landing zones since 2022' },
  { value: '42d', label: 'Average time-to-first-workload' },
  { value: '7', label: 'UAE cloud estates operated' },
  { value: '4', label: 'Regulator overlays mapped at gate' }
];

const RELATED = [
  { label: 'Technology Stack', href: '/technology/stack', description: 'The pinned stack the landing zones ship.' },
  { label: 'AI Platform Partners', href: '/technology/ai-platform-partners', description: 'AWS, Azure, OCI and G42 partnership tier evidence.' },
  { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'The Khazna on-prem appliance pattern in practice.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The cross-cloud control plane that operates the estate.' },
  { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'The industry where residency conversations dominate.' }
];

export default function CloudInfrastructurePartnersPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'UAE Sovereign & Hybrid Cloud Atlas — Brocode',
    description:
      'AI workloads deployable across seven UAE cloud and data-centre estates, with a six-week landing zone and a regulator-evidence pack.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/cloud-infrastructure-partners.jpg',
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

      {/* Hero — 7-up estate grid */}
      <section className="relative isolate overflow-hidden bg-[#0c1024] text-white" data-page={PAGE_SLUG}>
        <GradientMesh tone="midnight" className="opacity-60" />
        <Image
          src="/images/technology/cloud-infrastructure-partners.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-15"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'Cloud infrastructure partners' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">UAE estate atlas</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05]">
                AI workloads across seven UAE estates. One control plane.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Hyperscaler, sovereign, carrier and on-premise — designed together. Six-week
                landing zone. Regulator-evidence pack pre-mapped to TDRA, CBUAE, FSRA and NCA.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a 60-minute landing-zone design session
                </MagneticButton>
                <MagneticButton href="#lead-magnet" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 Cloud Atlas
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 7-up estate map grid */}
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {ESTATES.map((e) => (
              <div
                key={e.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-cyan-400/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">{e.type}</p>
                <p className="mt-2 text-sm font-semibold text-white">{e.name}</p>
                <p className="mt-1 font-mono text-[11px] text-white/55">{e.region}</p>
                <p className="mt-3 font-mono text-xs text-cyan-200">
                  <span className="text-white/55">latency · </span>{e.latency}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/70">
            Seven estates. One control plane. One regulator-evidence pack.
          </p>
        </div>
      </section>

      {/* Framing */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The UAE cloud reality in 2026"
              title="Hyperscaler-only and G42-only are both wrong defaults."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                A serious AI estate in the UAE in 2026 is not a single-cloud estate. The
                sovereign workload sits in G42 Cloud, the regulator-sensitive corpus sits
                in Khazna, the Azure OpenAI Service workload sits in Azure UAE North, the
                Bedrock-fronted GenAI workload sits in AWS UAE North, and the OCI-DB-heavy
                back-office sits in OCI Abu Dhabi — sometimes all five inside the same
                bank or federal entity.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                The integrator who can deliver this estate is rare. Hyperscaler-only shops
                dodge the sovereignty conversation; G42-only integrators cannot deliver
                Azure OpenAI Service or Bedrock when the workload demands it. We run all
                seven estates inside the same control plane, with a single OpenTelemetry
                trail and a single regulator-evidence pack.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Seven estates — detailed cards */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The seven estates"
            title="Where each shines, where each does not."
            description="Partnership tier, BYOK story, regulator alignment, the workload class each is built for, and the honest caveats."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {ESTATES.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{e.type}</p>
                      <h3 className="mt-1 text-xl font-semibold text-ink-900">{e.name}</h3>
                      <p className="mt-1 font-mono text-[11px] text-ink-500">{e.region}</p>
                    </div>
                    <span className="rounded-md bg-ink-900 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                      {e.latency}
                    </span>
                  </div>
                  <dl className="mt-5 space-y-3 text-sm">
                    <Row label="Partnership" value={e.partnership} />
                    <Row label="BYOK / HSM" value={e.byok} />
                    <Row label="Regulator alignment" value={e.regulator} />
                    <Row label="Where it shines" value={e.shines} />
                    <Row label="Where it does not" value={e.caveat} />
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="dark" />
        </div>
      </section>

      {/* Reference hybrid architecture */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Reference: a hybrid workload across three estates"
              title="UAE federal entity — Azure UAE North + G42 Cloud + Khazna on-prem."
              description="One audit trail. One observability plane. Three estates, each chosen for the slice of the workload it is genuinely best for."
            />
            <Link href="/technology/stack" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand">
              See the stack the workload runs on
            </Link>
          </div>
          <div className="lg:col-span-7">
            <GlassCard tone="light" padding="md">
              <ol className="space-y-5 text-sm">
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">tier.1 — inference</p>
                  <p className="mt-1 font-semibold text-ink-900">Azure UAE North</p>
                  <p className="text-ink-600">
                    Azure OpenAI Service for non-sovereign inference; customer-managed keys
                    in Key Vault HSM; private endpoint into the workload VNet.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">tier.2 — training</p>
                  <p className="mt-1 font-semibold text-ink-900">G42 Cloud</p>
                  <p className="text-ink-600">
                    Arabic LLM fine-tuning and RAG-index builds on G42 GPU pods; sovereign
                    HSM; metadata residency declared with the regulator at gate.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">tier.3 — sensitive corpus</p>
                  <p className="mt-1 font-semibold text-ink-900">Khazna on-premise appliance</p>
                  <p className="text-ink-600">
                    NVIDIA DGX appliance behind the client firewall for the most sensitive
                    documents; Brocode-managed control plane; client-owned HSM.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">cross-cut — control plane</p>
                  <p className="mt-1 font-semibold text-ink-900">Single OpenTelemetry plane + single FinOps view</p>
                  <p className="text-ink-600">
                    All three estates emit traces, metrics and logs to one observability
                    plane; cross-cloud egress and capacity reservations modelled in a single
                    FinOps dashboard.
                  </p>
                </li>
              </ol>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Six-week landing zone timeline */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Six-Week Landing Zone"
            title="Week by week, deliverable by deliverable."
            description="Each gate produces an artefact your second line of defence and internal audit can attach directly to the next regulator submission."
          />
          <div className="mt-12">
            <ScrollTimeline steps={TIMELINE} />
          </div>
        </div>
      </section>

      {/* Regulator evidence pack */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Regulator-evidence pack"
            title="Mapped to TDRA, CBUAE, FSRA-ADGM and NCA."
            description="Each control-mapping section ships in the Cloud Atlas with an editable annex per regulator."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'TDRA', focus: 'Telecommunications and Digital Government Regulatory Authority', mapsTo: 'Hosting, residency, telecom infrastructure controls' },
              { name: 'CBUAE', focus: 'Central Bank Outsourcing Regulation', mapsTo: 'Outsourcing notification, exit clauses, third-party risk' },
              { name: 'FSRA-ADGM', focus: 'Financial Services Regulatory Authority — ADGM', mapsTo: 'Principles for Adoption of AI; data protection regulations' },
              { name: 'NCA-KSA', focus: 'National Cybersecurity Authority — KSA', mapsTo: 'ECC, CCC and DCC control catalogues' }
            ].map((r) => (
              <GlassCard key={r.name} tone="dark" className="border-white/10 bg-white/5" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{r.name}</p>
                <p className="mt-2 text-sm font-medium text-white">{r.focus}</p>
                <p className="mt-3 text-sm text-white/70">{r.mapsTo}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CompareTable */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Versus the alternatives"
            title="Hyperscaler-only, G42-only, legacy on-prem — and what we do instead."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Hyperscaler-only SI', 'G42-only integrator', 'Legacy on-prem world']}
              rows={COMPARE_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="UAE Sovereign & Hybrid Cloud Atlas"
            description="The 56-page PDF, the Terraform landing-zone starter pack, and a CSV of measured cross-cloud latencies between UAE estates."
            contents={[
              'AWS UAE North landing-zone Terraform skeleton',
              'Azure UAE North landing-zone Terraform skeleton',
              'OCI Abu Dhabi landing-zone Terraform skeleton',
              'G42 Cloud sovereign landing-zone pattern',
              'Khazna on-prem appliance reference design',
              'du Cloud + e& enterprise hosting patterns',
              'Per-estate BYOK and HSM playbook',
              'TDRA / CBUAE / FSRA / NCA control mapping annex'
            ]}
            filePath="/downloads/uae-sovereign-hybrid-cloud-atlas.pdf"
            ctaLabel="Email me the Cloud Atlas"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Architecture questions"
              title="What infrastructure leads ask before the design session."
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
              eyebrow="Book the design session"
              title="A principal cloud architect, your estates, your regulator."
              description="A senior Brocode architect responds within one business day. If your landing-zone gate is inside two weeks, we will work in parallel with your account teams at AWS, Microsoft, OCI or G42."
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
        primaryLabel="Book a design session"
        primaryHref="#contact-form"
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-12 gap-3 border-t border-ink-100 pt-3 first:border-0 first:pt-0">
      <dt className="col-span-4 text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</dt>
      <dd className="col-span-8 text-ink-700">{value}</dd>
    </div>
  );
}
