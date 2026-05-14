import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'healthcare';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm the [CIO / CMIO / Quality Director] at [hospital]. We're scoping a clinical AI initiative around [imaging / sepsis / patient flow] and need a partner who integrates with our EHR and Malaffi/NABIDH. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'Clinical AI for JCI-Accredited UAE Hospitals — Imaging, Sepsis, Flow, Arabic NLP',
  description:
    'Clinical AI for JCI-accredited UAE hospitals. MONAI imaging on PACS, HL7 FHIR EHR integration, Malaffi and NABIDH consent patterns, and a clinician-led adoption programme that reaches 78 % clinician adoption at 90 days.',
  alternates: { canonical: 'https://www.brocode.ae/industries/healthcare' },
  openGraph: {
    title: 'Clinical AI for JCI-Accredited UAE Hospitals',
    description:
      'Imaging, sepsis, patient flow and Arabic clinical NLP — integrated with Cerner / Epic / TrakCare and Malaffi / NABIDH.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/healthcare'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical AI for JCI-Accredited UAE Hospitals',
    description: 'Inference runs in your hospital. Data stays in your hospital.'
  }
};

const faqItems: FAQItem[] = [
  {
    question: 'Where is the clinical evidence on a population that looks like ours?',
    answer:
      'Every imaging and clinical model is fine-tuned on the hospital\'s own corpus before go-live; the regulatory pack includes performance metrics on the hospital\'s population, not a US/EU benchmark transplanted in. For sepsis early-warning, validation runs on 18 months of historical ICU data with cohort analysis across age, comorbidity, and care-setting. Clinician adoption data — not just AUC — is the headline metric we report.'
  },
  {
    question: 'Our Cerner / Epic instance is heavily customised. How do you avoid breaking the radiologist workflow?',
    answer:
      'HL7 FHIR R4 connectors with named bridges for Cerner / Oracle Health (Millennium, CareAware), Epic (Bridges, Open.Epic), InterSystems TrakCare and SystmOne. CDS Hooks for in-workflow inference. Imaging integration runs through DICOM and HL7 ORM/ORU on the PACS (GE Centricity, Philips IntelliSpace, Sectra, Carestream) and never re-routes the worklist outside the existing reading workflow. We shadow your radiologists for the first sprint and explicitly enumerate what we will not change.'
  },
  {
    question: 'Patient data cannot leave the country. Where does inference run?',
    answer:
      'Inference runs in your hospital. The default architecture is on-premise on an NVIDIA Clara appliance inside the hospital network; sovereign cloud (G42 / Khazna) is the alternative where the operator prefers a managed estate. Data residency, key management, audit trail and Malaffi/NABIDH consent flows are documented for the DoH / DHA / MOHAP regulatory pack.'
  },
  {
    question: 'How do you handle Malaffi and NABIDH consent and data-sharing patterns?',
    answer:
      'Malaffi (Abu Dhabi HIE) and NABIDH (Dubai HIE) consent flows are documented in the integration pattern library, including opt-in / opt-out handling and the de-identification rules used for model training versus inference. The legal team reviews the consent diagram before any patient data is queried. Where the entity is a payer or regulator, we map to the HIE governance role rather than the provider role.'
  },
  {
    question: 'What is the clinical adoption programme, and why does it reach 78 %?',
    answer:
      'Six weeks of clinical-champion shadowing per use case, in-workflow placement (the AI surfaces where the clinician already looks), threshold tuning with the informatics team, and an explicit decision on what the AI will and will not change in the workflow. The median UAE hospital AI pilot reaches 23 % clinician adoption at 90 days; deployments using our adoption playbook reach 78 %. The eight failure modes we observed are documented in the lead magnet.'
  },
  {
    question: 'How do you handle model drift and retraining post go-live?',
    answer:
      'Drift detectors run on input features and on output distributions, with thresholds set against historical baselines. Retraining cadence is documented; periodic clinical validation is part of the operating model, not a one-off. The medical director and the quality committee receive a quarterly validation report with cohort breakdown. We refresh the model card and intended-use statement on every retrain.'
  },
  {
    question: 'What is your regulatory positioning for MOHAP / DoH / DHA?',
    answer:
      'Every model ships with a model card, an intended-use statement, a performance-monitoring plan, and a bias-and-equity review aligned to MOHAP medical-device guidance. Where the use case meets FDA 510(k) or CE MDR Class IIa criteria, we structure the documentation to that pathway. ISO 13485 alignment statement is part of the procurement pack.'
  },
  {
    question: 'How do you compare to a point clinical-AI vendor like Aidoc or Qure.ai?',
    answer:
      'They are single-modality products; we are a delivery partner. Where a third-party product is the best fit, we integrate it and own the hospital-side adoption programme — EHR integration, PACS routing, clinical change management, and regulatory pack. Where the hospital needs a custom model (Arabic clinical NLP, hospital-specific patient-flow forecasting), we build it. Most engagements are a mix.'
  }
];

const compareRows: CompareRow[] = [
  { feature: 'On-premise inference inside the hospital', brocode: true, competitors: [false, 'Partial', false, 'Partial'] },
  { feature: 'HL7 FHIR R4 + CDS Hooks integration', brocode: true, competitors: [true, 'Partial', true, false] },
  { feature: 'Malaffi / NABIDH consent flow documented', brocode: true, competitors: ['Partial', false, false, 'Partial'] },
  { feature: 'Arabic clinical NLP (AraBERT-v2 clinical head)', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Clinician-led 6-week adoption programme', brocode: true, competitors: [false, false, false, 'Partial'] },
  { feature: 'Fine-tuned on hospital corpus before go-live', brocode: true, competitors: [false, 'Partial', false, true] },
  { feature: 'MOHAP medical-device documentation pack', brocode: true, competitors: ['Partial', 'Partial', false, false] },
  { feature: 'Cross-modality bench of pre-trained models', brocode: true, competitors: [true, false, 'Partial', false] },
  { feature: 'No telemetry to vendor; hospital owns the model', brocode: true, competitors: [false, false, false, true] }
];

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a clinical AI workflow review with our healthcare lead',
  subtitle:
    'A senior engineer with deployments inside JCI-accredited UAE hospitals responds within one business day. We share clinical-evidence references and integration patterns on the first call.',
  ctaLabel: 'Request the review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'facilityType',
      label: 'Facility type',
      type: 'select',
      required: true,
      options: ['Single hospital', 'Hospital group', 'Specialty centre', 'Health regulator', 'Payer']
    },
    {
      name: 'regulator',
      label: 'Regulator',
      type: 'select',
      required: true,
      options: ['DoH Abu Dhabi', 'DHA', 'MOHAP', 'MoH KSA', 'Other GCC']
    },
    {
      name: 'ehr',
      label: 'EHR / clinical system',
      type: 'select',
      options: ['Cerner / Oracle Health', 'Epic', 'InterSystems TrakCare', 'SystmOne', 'Allscripts', 'Homegrown', 'Other']
    },
    {
      name: 'hie',
      label: 'HIE participation',
      type: 'select',
      options: ['Malaffi', 'NABIDH', 'Both', 'Other', 'None']
    },
    {
      name: 'useCase',
      label: 'Priority clinical use case',
      type: 'multiselect',
      options: [
        'Radiology imaging',
        'Pathology',
        'Sepsis & deterioration',
        'Readmission',
        'Patient flow & OT',
        'Arabic clinical NLP',
        'Ambient documentation'
      ]
    },
    {
      name: 'deployment',
      label: 'Intended deployment',
      type: 'select',
      options: ['On-premise', 'Sovereign cloud (G42 / Khazna)', 'Hyperscaler healthcare region', 'Hybrid']
    }
  ]
};

const useCases = [
  {
    title: 'Chest X-ray triage',
    body: 'MONAI-based model on PACS with worklist re-prioritisation. UAE multi-site reference: 18 % faster turnaround on critical findings, clinician adoption above 80 % at 90 days.',
    span: 'lg' as const,
    metric: '18 % faster · 80 % adoption'
  },
  {
    title: 'Head CT haemorrhage detection',
    body: 'Pre-trained model fine-tuned on the hospital corpus. Reading-room priority tag, full audit trail through PACS.',
    span: 'md' as const
  },
  {
    title: 'Mammography density & lung-nodule',
    body: 'Tertiary-screening assist with confidence calibration on the hospital population. Documented for CE MDR Class IIa positioning.',
    span: 'md' as const
  },
  {
    title: 'Sepsis early warning',
    body: 'Tertiary hospital reference: 24 % alert-volume reduction with no loss in sensitivity, validated on 18 months of historical ICU data.',
    span: 'md' as const,
    metric: '−24 % alert volume'
  },
  {
    title: 'Readmission prediction',
    body: 'Hospital-specific 30-day readmission model with SHAP-based explainability for case-management teams.',
    span: 'md' as const
  },
  {
    title: 'Patient flow & OT utilisation',
    body: 'Quality-and-flow reference: OT utilisation uplift of 11 percentage points across two surgical departments. ED LWBS forecasting alongside.',
    span: 'md' as const,
    metric: '+11 pp OT utilisation'
  },
  {
    title: 'Arabic clinical NLP',
    body: 'Fine-tuned AraBERT-v2 clinical head on de-identified Arabic notes for problem-list extraction, family history, and social determinants.',
    span: 'md' as const
  },
  {
    title: 'Ambient documentation',
    body: 'In-room dictation with structured note drafting; clinician signs the note rather than writes it. Bilingual Arabic / English handling.',
    span: 'md' as const
  },
  {
    title: 'Pathology slide triage',
    body: 'Whole-slide image triage on NVIDIA Clara, integrating upstream of the digital pathology viewer rather than replacing it.',
    span: 'md' as const
  }
];

const integrationSteps: TimelineStep[] = [
  {
    label: 'Layer 1',
    title: 'EHR & PACS',
    description: 'Cerner / Oracle Health, Epic, InterSystems TrakCare, SystmOne on the EHR side; GE Centricity, Philips IntelliSpace, Sectra, Carestream on PACS. HL7 ORM / ORU on the imaging worklist.'
  },
  {
    label: 'Layer 2',
    title: 'HIE & consent',
    description: 'Malaffi (Abu Dhabi) and NABIDH (Dubai) consent flows with documented opt-in / opt-out. De-identification rules for training vs inference are explicit.'
  },
  {
    label: 'Layer 3',
    title: 'Model serving',
    description: 'MONAI on NVIDIA Clara appliance inside the hospital network. CDS Hooks for in-workflow inference. Arabic clinical NLP head where notes are bilingual.'
  },
  {
    label: 'Layer 4',
    title: 'Regulatory pack',
    description: 'Model card, intended-use statement, performance-monitoring plan, bias-and-equity review aligned to MOHAP medical-device guidance and FDA 510(k) / CE MDR Class IIa where applicable.'
  },
  {
    label: 'Layer 5',
    title: 'Clinical adoption',
    description: 'Six-week clinical-champion shadowing per use case. Threshold tuning with the informatics team. Quarterly clinical validation reports to the quality committee.'
  }
];

const relatedItems = [
  { label: 'Computer Vision', href: '/services/computer-vision', description: 'MONAI-based medical imaging stack on PACS with DICOM worklist routing.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic clinical NLP and ambient documentation for bilingual hospitals.' },
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Sepsis, readmission, and patient-flow forecasting on the hospital data warehouse.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Model monitoring, drift, and clinical validation cadence for quality teams.' },
  { label: 'Certifications & Compliance', href: '/security-compliance', description: 'ISO 13485 alignment, ISO 27001, SOC 2 Type II, MOHAP medical-device pathway evidence.' }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Clinical AI delivery for JCI-accredited UAE hospitals',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait'],
  audience: {
    '@type': 'Audience',
    audienceType: 'JCI-accredited hospitals, hospital groups, and health regulators in the UAE and GCC'
  },
  description:
    'Clinical and operational AI for JCI-accredited hospitals — imaging on MONAI, sepsis early-warning, patient flow, and Arabic clinical NLP — integrated with Cerner / Epic / TrakCare and Malaffi / NABIDH.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
};

export default function HealthcarePage() {
  return (
    <>
      <Script
        id="ld-service-healthcare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-healthcare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — clean white + teal accent reading-room composition */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/industries/healthcare.jpg"
            alt="Radiologist reviewing chest imaging in a UAE hospital reading room"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>

        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Healthcare' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow uppercase tracking-[0.18em] text-accent-dark">
                Clinical AI · JCI hospitals &amp; UAE health regulators
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                Clinical AI built for JCI-accredited UAE hospitals — integrated with your EHR, your PACS, and your HIE.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
                Imaging on MONAI. Sepsis early-warning that nurses actually trust. Patient-flow forecasting on your
                data warehouse. Arabic clinical NLP. Every model fine-tuned on your corpus before go-live, with a
                regulatory pack aligned to MOHAP, DoH and DHA, and a clinician-led adoption programme that reaches
                78 % adoption at 90 days.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#quote-form" size="lg" event="quote_open" variant="primary">
                  Request a clinical workflow review
                </MagneticButton>
                <MagneticButton
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  size="lg"
                  variant="whatsapp"
                  event="whatsapp_hero"
                >
                  WhatsApp our healthcare lead
                </MagneticButton>
              </div>

              <p className="mt-6 text-sm text-ink-500">
                Inference runs in your hospital. Data stays in your hospital.
              </p>
            </div>

            {/* PACS worklist mock */}
            <div className="lg:col-span-5">
              <GlassCard tone="light" padding="lg" className="border-ink-100">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-wider text-accent-dark">PACS worklist · re-prioritised</p>
                  <p className="text-ink-500">MONAI v1.3</p>
                </div>
                <div className="mt-4 rounded-lg border border-accent-dark/30 bg-accent-dark/[0.06] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink-900">Chest X-ray · CR-22988</span>
                    <span className="rounded-full bg-accent-dark/15 px-2 py-0.5 text-[10px] font-semibold text-accent-dark">
                      Priority · 0.96
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-600">Bounding box: right upper-lobe opacity · triage: priority</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center justify-between rounded-lg border border-ink-100 bg-white p-3">
                    <span className="text-ink-700">CR-22921 · chest</span>
                    <span className="text-[11px] text-ink-500">routine</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg border border-ink-100 bg-white p-3">
                    <span className="text-ink-700">CT-22919 · head</span>
                    <span className="text-[11px] text-ink-500">routine</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg border border-ink-100 bg-white p-3">
                    <span className="text-ink-700">MG-22914 · mammo</span>
                    <span className="text-[11px] text-ink-500">screening</span>
                  </li>
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-ink-500">
                  <div className="rounded-md bg-surface-muted px-3 py-2">
                    <p className="font-semibold text-ink-700">Inference</p>
                    <p>On-prem · NVIDIA Clara</p>
                  </div>
                  <div className="rounded-md bg-surface-muted px-3 py-2">
                    <p className="font-semibold text-ink-700">HIE</p>
                    <p>Malaffi / NABIDH consent</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-surface-muted py-14">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '9', label: 'UAE healthcare clients served' },
              { value: '78%', label: 'Clinician adoption at 90 days (playbook deployments)' },
              { value: '−24%', label: 'Sepsis alert-volume reduction at constant sensitivity' },
              { value: '100%', label: 'PHI workloads inside UAE borders' }
            ]}
          />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The painful problem"
            title="Radiology backlog up 38 %. ICU sepsis alerts at 70 % false-positive. Malaffi data unused."
            description="The on-call sub-specialty roster cannot cover after-hours reads. Nurses are tuning out the deterioration alerts. The data warehouse holds Malaffi feeds that no clinically actionable model touches. The last EHR-bundled AI pilot lost momentum after the champion clinician moved on."
          />

          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Failure mode 1</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Clinician adoption</h3>
              <p className="mt-2 text-ink-600">
                The median UAE hospital AI pilot reaches 23 % clinician adoption at 90 days. The system stays in the
                building, the clinicians work around it. Adoption is the only metric that matters past month two.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Failure mode 2</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">EHR fragility</h3>
              <p className="mt-2 text-ink-600">
                Heavily customised Cerner and Epic instances break under naive integrations. A worklist disruption is
                a safety event before it is an IT ticket.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Failure mode 3</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">HIE consent</h3>
              <p className="mt-2 text-ink-600">
                Malaffi and NABIDH governance is non-negotiable. Consent flows, de-identification rules, and the
                opt-in / opt-out pattern have to be documented before any patient row is queried.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use cases bento */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case grid"
            title="Nine clinical and operational plays we have shipped inside UAE hospitals."
            description="Imaging, sepsis, flow, Arabic clinical NLP. Each fine-tuned on your corpus, validated against held-out data, and supported by a six-week clinician adoption sprint."
          />
          <BentoGrid className="mt-12">
            {useCases.map((u) => (
              <BentoCell key={u.title} span={u.span} variant="light">
                <h3 className="text-lg font-semibold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.body}</p>
                {u.metric && (
                  <p className="mt-4 inline-flex rounded-full bg-accent-dark/10 px-3 py-1 text-xs font-semibold text-accent-dark">
                    {u.metric}
                  </p>
                )}
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism — integration timeline */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Integration mechanism"
              title="Inside your EHR. Inside your PACS. Inside your hospital."
              description="MONAI on NVIDIA Clara. HL7 FHIR R4 with named connectors for Cerner / Epic / TrakCare. CDS Hooks for in-workflow inference. Malaffi and NABIDH consent flows documented for legal."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-ink-100 bg-surface-muted p-3">
                <p className="font-semibold text-accent-dark">Imaging stack</p>
                <p className="mt-1 text-ink-600">MONAI · NVIDIA Clara · DICOM</p>
              </div>
              <div className="rounded-lg border border-ink-100 bg-surface-muted p-3">
                <p className="font-semibold text-accent-dark">EHR connectors</p>
                <p className="mt-1 text-ink-600">Cerner · Epic · TrakCare</p>
              </div>
              <div className="rounded-lg border border-ink-100 bg-surface-muted p-3">
                <p className="font-semibold text-accent-dark">HIE patterns</p>
                <p className="mt-1 text-ink-600">Malaffi · NABIDH consent</p>
              </div>
              <div className="rounded-lg border border-ink-100 bg-surface-muted p-3">
                <p className="font-semibold text-accent-dark">Arabic clinical NLP</p>
                <p className="mt-1 text-ink-600">AraBERT-v2 clinical head</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-2xl border border-ink-100 bg-surface-muted p-8">
            <ScrollTimeline steps={integrationSteps} />
          </div>
        </div>
      </section>

      {/* Regulator standards block */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Regulator &amp; standards"
              title="Aligned to the reviewers in the room."
              description="DoH Abu Dhabi. MOHAP. DHA. JCI surveyors. Every model ships with a clinical evidence pack the medical director and quality committee can read on first pass."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">MOHAP / DoH / DHA</p>
              <p className="mt-2 text-sm text-ink-700">
                Model card, intended-use statement, performance-monitoring plan, and a bias-and-equity review aligned
                to MOHAP medical-device guidance. The same pack has passed pre-market review for a UAE hospital
                group.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">FDA 510(k) / CE MDR</p>
              <p className="mt-2 text-sm text-ink-700">
                Imaging models targeted at Class IIa pathways structure documentation accordingly. Substantial
                equivalence reasoning and clinical evaluation are written for the assessor, not the marketing brief.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">JCI alignment</p>
              <p className="mt-2 text-sm text-ink-700">
                Clinical decision support effectiveness, alert-fatigue handling, and human-in-the-loop checkpoints
                are documented to JCI expectations on clinical informatics governance.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">ISO &amp; HIPAA posture</p>
              <p className="mt-2 text-sm text-ink-700">
                ISO 13485 alignment statement for clinical-software development, ISO 27001, SOC 2 Type II, HIPAA-aligned
                controls for international affiliates. Partnerships with NVIDIA Inception, Microsoft for Healthcare,
                Snowflake Healthcare &amp; Life Sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Three anonymised clinical outcomes."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">UAE multi-site · Imaging</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  18 % faster turnaround on critical chest X-ray findings
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Clinician adoption above 80 % at 90 days. Full audit trail through PACS. Co-authored adoption paper
                  with the clinical champion (anonymised in public; named under NDA).
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Tertiary hospital · ICU</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  24 % sepsis alert-volume reduction with constant sensitivity
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Validated on 18 months of historical ICU data with cohort analysis across age and comorbidity.
                  Quarterly clinical validation in place.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Quality &amp; flow</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +11 pp OT utilisation across two surgical departments
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Patient-flow forecasting on the hospital data warehouse. ED LWBS prediction alongside. No EHR
                  modification required.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Differentiation"
            title="Brocode vs the four archetypes already on your evaluation."
            description="EHR-vendor module, point clinical-AI vendor, hyperscaler healthcare practice, or your CMIO in-house team. Where each fits — and where it does not."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['EHR-vendor module (Cerner / Epic / Oracle Health)', 'Point AI vendor (Aidoc / Lunit / Qure.ai)', 'Hyperscaler healthcare practice', 'In-house CMIO build']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Clinical AI Adoption Playbook for JCI Hospitals in the UAE"
            description="A 30-page field guide covering the eight clinician-adoption failure modes we observed across UAE deployments, the Malaffi / NABIDH integration pattern with consent flow diagrams, the MOHAP medical-device regulatory pathway, and a worked example of in-workflow CDS for sepsis. Headline figure: the median UAE hospital AI pilot reaches 23 % clinician adoption at 90 days; deployments using this playbook reach 78 %."
            contents={[
              'Regulatory pathway (DOH, MOHAP, DHA)',
              'Malaffi / NABIDH integration patterns with consent flow',
              'HL7 FHIR pipelines and CDS Hooks worked example',
              'MONAI medical imaging stack reference architecture',
              'Clinician change-management playbook',
              'Sample IRB submission'
            ]}
            filePath="/downloads/clinical-ai-adoption-playbook.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Clinical &amp; integration FAQ"
              title="The eight questions every quality committee raises."
              description="If yours is not here, raise it in the form below. We answer in writing before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-white py-22 md:py-30" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow uppercase text-accent-dark">Start the conversation</p>
            <h2 className="mt-4 text-display-md text-ink-900">
              Request a clinical AI workflow review with our healthcare lead.
            </h2>
            <p className="mt-5 text-ink-600">
              Tell us the facility type, the regulator, the EHR, and the priority use case. A senior engineer comes
              back within one business day with a shape, a team, and a first conversation.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Prefer WhatsApp?{' '}
              <Link
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="font-semibold text-accent-dark"
              >
                Message our healthcare lead directly.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm config={formConfig} />
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request review" primaryHref="#quote-form" />
    </>
  );
}
