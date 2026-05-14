import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FAQ } from '@/components/ui/FAQ';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';
import type { FAQItem } from '@/components/ui/FAQ';

const SLUG = 'faqs';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I've read the FAQs and I'd like to request a quote for [use case] at [organisation]. I've also downloaded / would like the Procurement Pack. Could we schedule the commercial call this week?";

export const metadata: Metadata = {
  title: 'AI Consultancy FAQs UAE — Pricing, IP, Timelines, Exit Clauses | Brocode',
  description:
    'The 40 commercial, legal, and operational questions every GCC enterprise asks before signing an AI consultancy SoW — answered in writing, with pricing bands, timeline norms, IP language, and exit-clause templates.',
  alternates: { canonical: '/insights/faqs' },
  openGraph: {
    title: 'Brocode AI — FAQs',
    description:
      'Published pricing bands, default client-owned IP, 30-day shadow hand-over, 90-day hyper-care, 6 % average redline rate.',
    url: 'https://www.brocode.ae/insights/faqs',
    images: [{ url: '/images/insights/faqs.jpg' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode AI — FAQs',
    description: 'Pricing bands, IP terms, exit clauses, hand-over templates — in writing.'
  }
};

const PRICING_FAQS: FAQItem[] = [
  {
    question: 'How much does an AI project cost?',
    answer:
      'Published bands by engagement type, in USD, calibrated to UAE / GCC market rates as of Q1 2026:\n\n· Discovery (4 weeks): 35,000 - 80,000\n· Build (12 - 26 weeks): 180,000 - 950,000\n· Run (annual support and managed service): 60,000 - 340,000\n· Managed strategic partnership (annual, multi-use-case): 700,000 - 3,200,000\n\nThe band depends on data complexity, regulatory scope, named-engineer seniority, and on-site mix. The Procurement Pack PDF lists the assumptions behind every band. Where a use case sits below the band floor, we will say so on the commercial call rather than scope something that will not pay back.'
  },
  {
    question: 'What is the pricing model — fixed price, time and materials, or outcome-based?',
    answer:
      'Discovery is always fixed-price; the four-week scope is too tight for anything else to be honest. Build is usually milestone-based time and materials with a not-to-exceed ceiling, against named acceptance criteria per milestone. Outcome-based pricing is offered on a second or third engagement where the baseline is measurable and the deflection / lift can be cleanly attributed. We do not lead with outcome-based pricing on a first engagement — it costs both sides time we could have spent on the system.'
  },
  {
    question: 'Are there hidden fees — licences, cloud passthrough, third-party tools?',
    answer:
      'No. The SoW carries a single rate card with all named engineers, an explicit infrastructure line (with a fixed mark-up or zero mark-up — your choice), and a third-party-tool register. Any tool that needs a separate licence is listed and quoted upfront. Cloud pass-through is invoiced at cost with the supplier invoice attached, unless the client requests a flat 7.5 % handling fee instead of evidence. There is no separate change-order rate.'
  },
  {
    question: 'Do you offer a free pilot or proof-of-concept?',
    answer:
      'Yes, on a defined set of services — Arabic OCR (500-document benchmark), Khaleeji ASR (200-call benchmark), demand forecasting (3-week tournament). These free benchmarks are pre-contract; we share the methodology, the results, and the conditions under which we would or would not recommend going to a paid build. For larger use cases, we offer a fixed-price 4-week Discovery rather than a free pilot — a free pilot at that scale tends to compromise the depth of evaluation.'
  },
  {
    question: 'How does payment work — milestones, monthly, on completion?',
    answer:
      'Discovery is invoiced 50 % on signature and 50 % on delivery. Build is invoiced monthly against milestone progress, with the final 10 % held against acceptance. Run is invoiced quarterly in advance. Managed-service partnerships are invoiced monthly with a 30-day notice clause on either side. All invoices are in USD or AED; payment terms are 30 days unless your procurement framework specifies otherwise.'
  },
  {
    question: 'Will you respond to RFPs and tenders?',
    answer:
      'Yes. We respond to tenders from UAE federal entities, ADGM-registered firms, DIFC-registered firms, KSA PIF-portfolio companies, Qatar government bodies, and tier-1 banks across the GCC. We do not respond to RFPs with timelines under three weeks, undefined scope, or evaluation criteria weighted entirely on price. Our pre-qualification documents — ISO 27001 SOA, SOC 2 Type II report, ISO 42001 attestation, sub-processor register, DPA template — are pre-packaged and routed within 48 hours of an NDA.'
  }
];

const TIMELINE_FAQS: FAQItem[] = [
  {
    question: 'How quickly can you start?',
    answer:
      'For Discovery engagements: typical first day on-site within 10 working days of SoW signature, conditional on visa state for senior engineers (most are UAE-resident or hold long-term residency). For Build engagements: 15 to 25 working days, depending on environment access and the security review cycle on the client side. The Procurement Pack includes a sample week-by-week timeline from first conversation to first day on-site.'
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'Across the last 80 engagements: Discovery is 4 weeks. Build is 12 to 26 weeks, median 18. The "From Notebook to Live Model in 90 Days" recipe is the modal shape: 4 weeks discover, 12 weeks build, 4 weeks harden. The longest builds we run are 9-month, multi-use-case platform engagements. Where a sponsor wants a 6-week build we will usually say so on the commercial call and propose a tighter scope rather than agree to it.'
  },
  {
    question: 'How long does it take to get an SoW signed?',
    answer:
      'For UAE clients using the Procurement Pack: median 21 days from first commercial conversation, against a regional benchmark of 74 days for AI consultancies. The acceleration comes from publishing pricing bands, IP terms, exit clauses, and the sample MSA / DPA upfront, so the redlining cycle compresses. The Procurement Pack lists every clause likely to be redlined and our default position on each.'
  },
  {
    question: 'Can you accelerate the timeline?',
    answer:
      'Yes, by adding a second engineer pair in parallel, by tightening scope, or by running a fixed-price 4-week sprint pattern. We will not accelerate by hiding the security review, by skipping the model-risk evidence pack, or by deferring acceptance criteria — each of these creates a debt that is paid back at audit with interest.'
  },
  {
    question: 'What happens if a milestone slips?',
    answer:
      'Slippage is caught in fortnightly steering, with the root cause and the recovery plan documented in the steering deck. Where slippage is attributable to us (resource, technical), we absorb the impact within the not-to-exceed ceiling. Where it is attributable to client side (data access, third-party integration, security review), we propose either a scope adjustment or a timeline adjustment, with the financial implication on the table the same week. We do not let slippage compound silently.'
  }
];

const SCOPE_FAQS: FAQItem[] = [
  {
    question: 'How do you handle scope changes?',
    answer:
      'Change requests under 5 % of the not-to-exceed ceiling are handled inside the steering cadence with a documented note. Above 5 %, we issue a Change Order with the new scope, the schedule impact, and the price impact. Across the last 80 engagements, our average change-order value is 9 % of original SoW — most often driven by scope being correctly expanded once data realities surface, not by re-scoping the original work.'
  },
  {
    question: 'What is included in a typical SoW?',
    answer:
      'A 14-to-22-page SoW with: named engineers and their seniority, weekly cadence, milestone-level acceptance criteria, the not-to-exceed ceiling, the rate card, the IP register, the data-handling annex, the regulator-mapping where applicable, the exit clause, and the success criteria. Sample SoWs are in the Procurement Pack with sample-only labels.'
  },
  {
    question: 'Will the team work with our existing engineers?',
    answer:
      'Yes — embedded pair-programming, joint architecture review, and co-authored documentation are the default. We avoid the "your team and our team" anti-pattern; the team is one team, with named senior engineers from both sides on every architectural review. Knowledge transfer is structured from day one, with a 30-day shadow hand-over at the end.'
  },
  {
    question: 'Can we change priorities mid-engagement?',
    answer:
      'Yes, within the not-to-exceed ceiling and with documented re-prioritisation at the steering meeting. We track decisions in a single decision log. Reversing a decision is fine; reversing it without recording the reason is not — it compounds into a documentation gap at audit.'
  }
];

const IP_FAQS: FAQItem[] = [
  {
    question: 'Who owns the model weights and the code?',
    answer:
      'Default contract clause: the client owns the model weights, the fine-tuned adapters, and all engagement-generated code. Brocode retains the methodology, the reference architectures, and any pre-existing libraries we bring in (these are listed in a Joint Background-IP Register attached to every SoW). The weights and the code are placed in the client\'s GitHub organisation from day one — not at hand-over. If we cannot agree on client-owned weights, we will say so on the commercial call.'
  },
  {
    question: 'What about data — do you train on it, retain it, or take it home?',
    answer:
      'No, no, and no. Client data is processed inside the client\'s environment under the engagement DPA. It is not used to train any Brocode-side or third-party model. Anonymised aggregated metrics may be retained for internal benchmark purposes only where the SoW explicitly allows it; the default is that nothing is retained. When the engagement ends, every Brocode-controlled artefact containing client data is destroyed and a destruction certificate is issued.'
  },
  {
    question: 'What is the IP position on prompts, evaluation sets, and test data?',
    answer:
      'Prompts written for the engagement, evaluation sets curated for the engagement, and test data created for the engagement are client-owned. Where we incorporate a public open-source prompt library or an open evaluation harness (e.g. Khaleeji Benchmark), we declare it in the Joint Background-IP Register with the open-source licence terms. Client-owned evaluation sets are not redistributed without explicit written permission.'
  },
  {
    question: 'Can we use the model after the engagement ends?',
    answer:
      'Yes — that is the default. Client owns the weights, the code, and the deployment artefacts. The model continues to run on client infrastructure (or on the cloud account in the client\'s name) without any Brocode dependency. The Procurement Pack contains a sample clause that explicitly disclaims any "kill-switch" or "phone home" hook in the deployed code.'
  },
  {
    question: 'Do you retain methodology and reference architectures?',
    answer:
      'Yes — Brocode retains the methodology, the reference architectures, the playbook templates, and the internal libraries that we bring across engagements. These are background IP and listed in the Joint Background-IP Register. The client gets a non-exclusive, perpetual licence to use anything that ships in the SoW for the original purpose; we keep the right to reuse our patterns on other engagements.'
  },
  {
    question: 'What is the average redline rate on a Brocode SoW?',
    answer:
      'Across the last 80 signed SoWs, average redline rate is 6 % of clauses against a regional industry benchmark of 28 %. The published pricing bands, the client-owned-weights default, the visible exit clause, and the pre-baked DPA are the four levers that drive the rate down. Most of the redlining we do see is jurisdiction-specific (DIFC vs ADGM vs DHC vs onshore) rather than substantive.'
  }
];

const RESIDENCY_FAQS: FAQItem[] = [
  {
    question: 'Where will our data live during the engagement?',
    answer:
      'Default: UAE-resident infrastructure in the client\'s tenancy on AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, or on-prem (client-controlled). Where the engagement is for a CBUAE-supervised bank or a federal entity, we default to G42 Cloud or on-prem. Where the engagement is for a non-regulated UAE entity, we usually default to AWS UAE North or Azure UAE North. The decision is recorded in the data-handling annex of the SoW.'
  },
  {
    question: 'Can Brocode engineers access client data?',
    answer:
      'Only the named engineers on the SoW, only through the client\'s identity provider, only for the duration of the engagement. Access is logged, reviewed quarterly, and revoked on hand-over. We do not export client data to Brocode-controlled storage; analysis happens in the client environment. The Procurement Pack includes a sample access matrix.'
  },
  {
    question: 'What about cross-border processing — sub-processors and third parties?',
    answer:
      'Listed in the sub-processor register, attached to the DPA, refreshed when changes occur with 30-day prior notice to the client. Default position: sub-processors providing infrastructure (hyperscaler regions, Hugging Face model hosting, OpenAI / Anthropic APIs where the client has approved them) are listed and bound by back-to-back DPAs. We do not engage sub-processors outside the register without prior written approval.'
  },
  {
    question: 'How does this map to UAE PDPL, DIFC DP Law, and PDPL in KSA?',
    answer:
      'The DPA template is aligned to UAE Federal Decree-Law 45/2021 (PDPL), DIFC DP Law 2020, and KSA PDPL (effective Sep 2024). The transfer mechanism for any out-of-region processing uses 2021/914 SCCs by default, with the EU adequacy decision relied upon where applicable. Sector overlays (e.g. CBUAE / FSRA / NCA) are added in the data-handling annex when the engagement is in a regulated sector.'
  },
  {
    question: 'What if the regulator changes the residency requirements mid-engagement?',
    answer:
      'A clause in the MSA addresses material regulatory change: either party may invoke it, the parties have 30 days to agree a mitigation, and failing agreement, the engagement may be terminated for change-of-law with pro-rata fees due. Across the last five years we have invoked this clause twice — both ended in a renegotiated architecture and a continued engagement, not termination.'
  }
];

const SECURITY_FAQS: FAQItem[] = [
  {
    question: 'What certifications does Brocode hold?',
    answer:
      'ISO 27001 (Statement of Applicability available on NDA), SOC 2 Type II (full report available on NDA), ISO 42001 (AI management system) attestation, ISO 9001 (quality management), plus internal alignment to UAE PDPL, GDPR, and DIFC DP Law. We carry professional indemnity and cyber-liability insurance at limits that match the engagement scale. Certificate copies are in the Procurement Pack.'
  },
  {
    question: 'Will you accept our security review and penetration test?',
    answer:
      'Yes. We respond to client-driven security reviews on a typical 5-business-day SLA, accept third-party penetration tests on systems we have deployed (with reasonable scope), and provide evidence for SIG / SIG Lite / CAIQ / VSA / your firm\'s questionnaire. Most clients re-use 80 % of their previous-year questionnaire; we keep the answers current so the delta is small.'
  },
  {
    question: 'How are you aligned to CBUAE, FSRA, NCA, and SAMA expectations?',
    answer:
      'The "Model Risk Management for AI" whitepaper details our control mapping. Briefly: we treat AI as a regulated model class under SR 11-7-equivalent expectations, the three-lines-of-defence operating model is the default, and the regulator-evidence pack (model card, datasheet, bias and fairness test pack, explainability suite, periodic validation report) is built in from day one. Whitepaper here: /insights/whitepapers.'
  },
  {
    question: 'Do you carry insurance?',
    answer:
      'Professional indemnity insurance to USD 10 million per claim and USD 30 million aggregate. Cyber-liability insurance to USD 5 million per claim. Employer\'s liability and public liability are standard. Where a client requires a higher tower for a specific engagement, we will source it and the cost is a transparent line item in the SoW.'
  },
  {
    question: 'How do you handle a security incident on a deployed system?',
    answer:
      'Incident response is documented in the runbook every engagement ships with: detection (alerting and observability layer), triage (severity bands and named on-call), containment (rollback or feature-flag kill, depending on the system), recovery, and post-mortem. Notification to the client is within 4 hours of triage confirmation; regulator notification is the client\'s responsibility, with our evidence pack to support it.'
  },
  {
    question: 'Can the client audit your engineers and processes?',
    answer:
      'Yes. The MSA carries an audit clause allowing the client (or its appointed auditor) up to one audit per year with 30-day notice, plus an unscheduled audit on a serious security or compliance trigger. We do not subject our engineers to client-side polygraphs or invasive personal data collection — these are explicitly excluded in the MSA.'
  }
];

const EXIT_FAQS: FAQItem[] = [
  {
    question: 'What happens when the engagement ends?',
    answer:
      'Three things, in this order: (1) a 90-day hyper-care period where the original engineers remain on-call for hot-fix issues; (2) a 30-day shadow hand-over where the client\'s chosen run team operates the system while the Brocode team observes and answers; (3) a full documentation pack — architecture records, runbooks, model cards, eval suites, BoM — handed over with sign-off. After the 120 days, the engagement is closed and the system is operating without Brocode dependency.'
  },
  {
    question: 'Do we get the model weights?',
    answer:
      'Yes — from day one, not at hand-over. Weights, fine-tuned adapters, and engagement-generated code live in the client\'s GitHub organisation throughout. The Procurement Pack includes a sample clause confirming that weights and code are not "leased" — they are owned by the client at the moment of creation.'
  },
  {
    question: 'Can we run the system without you?',
    answer:
      'Yes. By design. The architecture is documented, the dependencies are pinned in a CHANGELOG, the runbook covers the operational scenarios, the eval harness runs on every model push, and the on-call rota is transferable. The 30-day shadow hand-over exists precisely to prove this — if the client\'s team cannot operate the system at the end of those 30 days, we have not finished the engagement.'
  },
  {
    question: 'What about exit assistance if we move to another vendor?',
    answer:
      'We support a transition to another vendor at our standard rate-card without surcharge. We hand over the full code, the weights, the runbooks, the eval suite, and the steering history. We will brief the incoming vendor under a tripartite NDA. We do not have a "non-compete" clause that prevents the client engaging another vendor on the same system.'
  },
  {
    question: 'Will the model "phone home" or call our credentials back to you?',
    answer:
      'No. The deployed code contains no Brocode-controlled telemetry, no licence-check call-back, and no kill-switch. The Procurement Pack carries a sample clause that explicitly disclaims any of these. If a third-party library we use carries telemetry, we declare it in the Joint Background-IP Register and offer an alternative if the client requires.'
  },
  {
    question: 'What is the run-on cost after you leave?',
    answer:
      'A function of the architecture choice: hyperscaler-hosted models attract token costs at provider pricing; self-hosted models attract GPU pricing (the "Sovereign LLM TCO Pack" lead-magnet models this for 36 months). We share the projected run-on cost as part of the discovery output, refreshed at hand-over with the actual six-month trailing data. There is no Brocode-side run-on cost unless the client chooses to retain a managed-service relationship.'
  },
  {
    question: 'What if a key Brocode engineer leaves during the engagement?',
    answer:
      'Notification within 5 business days of internal departure notice, with a named successor of equivalent seniority within 15 business days. The successor shadows for two weeks before the original engineer rolls off. Where the client is not satisfied with the successor, the SoW carries a clause allowing the client to terminate without penalty.'
  },
  {
    question: 'Can we retain a smaller Brocode footprint after Build — a "lights-on" relationship?',
    answer:
      'Yes — that is the Run engagement type. Typical Run scopes: monthly drift review, quarterly model refresh, ad-hoc consultation at a retainer-with-credit pattern (e.g. 40 hours per quarter at an agreed rate-card). Run engagements are renewable annually with a 30-day exit notice on either side.'
  }
];

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request a quote — bring this page and the Procurement Pack to the call.',
  subtitle:
    'A senior commercial lead replies within one business day. Average SoW signature in 21 days from this point for UAE clients using the Procurement Pack.',
  ctaLabel: 'Request the commercial call',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'engagementType',
      label: 'Engagement type',
      type: 'select',
      required: true,
      options: [
        'Discovery only',
        'Discovery + Build',
        'Build + Run',
        'Managed Service',
        'Strategic partner across multiple use cases'
      ]
    },
    {
      name: 'useCase',
      label: 'Primary use case category',
      type: 'select',
      required: true,
      options: [
        'Document Intelligence',
        'NLP',
        'Computer Vision',
        'Forecasting',
        'LLM Application',
        'Agentic System',
        'MLOps Platform',
        'Other'
      ]
    },
    {
      name: 'budget',
      label: 'Budget band already approved',
      type: 'select',
      options: [
        '<USD 100K',
        'USD 100K - 500K',
        'USD 500K - 1.5M',
        'USD 1.5M - 5M',
        '>USD 5M',
        'Not yet approved'
      ]
    },
    {
      name: 'goLive',
      label: 'Target go-live window',
      type: 'select',
      options: ['<3 months', '3 - 6 months', '6 - 9 months', '9 - 12 months', '>12 months']
    },
    {
      name: 'procurement',
      label: 'Procurement framework',
      type: 'select',
      options: [
        'Open RFP',
        'Closed shortlist',
        'Sole-source',
        'Existing supplier framework',
        'Pilot via direct award'
      ]
    },
    {
      name: 'unresolved',
      label: 'What still needs resolving before SoW?',
      type: 'multiselect',
      options: [
        'Pricing model',
        'IP and weights ownership',
        'Data residency',
        'Hand-over and exit',
        'Insurance and liability',
        'Other'
      ]
    }
  ]
};

const PROOF = [
  { value: '21 days', label: 'Average SoW signature for UAE clients with the Procurement Pack' },
  { value: '6 %', label: 'Average redline rate across the last 80 SoWs (region: 28 %)' },
  { value: '40', label: 'Written answers across seven commercial, legal, and operational blocks' },
  { value: '90 + 30', label: 'Days of hyper-care plus shadow hand-over on every engagement' }
];

const BLOCKS = [
  { id: 'pricing', label: 'Pricing', count: 6, reviewer: 'Reem Saleh, Head of Delivery', items: PRICING_FAQS },
  { id: 'timelines', label: 'Timelines', count: 5, reviewer: 'Reem Saleh, Head of Delivery', items: TIMELINE_FAQS },
  { id: 'scope', label: 'Scope', count: 4, reviewer: 'Reem Saleh, Head of Delivery', items: SCOPE_FAQS },
  { id: 'ip', label: 'IP & Data', count: 6, reviewer: 'Head of Legal', items: IP_FAQS },
  { id: 'residency', label: 'Residency', count: 5, reviewer: 'Aisha Al Hosani, Head of AI Risk', items: RESIDENCY_FAQS },
  { id: 'security', label: 'Security', count: 6, reviewer: 'Aisha Al Hosani, Head of AI Risk', items: SECURITY_FAQS },
  { id: 'exit', label: 'Hand-over & Exit', count: 8, reviewer: 'Reem Saleh, Head of Delivery', items: EXIT_FAQS }
];

// FAQPage JSON-LD: a substantial subset
const ALL_FAQS = [...PRICING_FAQS, ...TIMELINE_FAQS, ...IP_FAQS, ...EXIT_FAQS];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: 'https://www.brocode.ae/insights/faqs',
  mainEntity: ALL_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
};

export default function FaqsPage() {
  return (
    <>
      <Script id="faqs-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Question-first hero — seven-tab document + three numeric tiles */}
      <section className="relative isolate overflow-hidden bg-[#faf8f3]">
        <div className="container-site relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Commercial FAQs' }]} />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Commercial FAQs · last reviewed Feb 2026
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                The 40 questions every GCC enterprise asks before signing an AI SoW — answered in writing.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                Pricing bands, timeline norms, IP language, residency posture, security certifications, exit clauses,
                and hand-over templates. Seven blocks. Forty answers. One downloadable Procurement Pack designed to
                drop into your file as-is.
              </p>

              {/* Seven-tab strip */}
              <div className="mt-10 overflow-x-auto">
                <ul className="flex gap-2 pb-2">
                  {BLOCKS.map((b, i) => (
                    <li key={b.id}>
                      <a
                        href={`#block-${b.id}`}
                        className={
                          i === 3
                            ? 'inline-flex items-center gap-2 rounded-t-xl border-b-2 border-brand bg-white px-4 py-3 text-xs font-semibold text-ink-900 shadow-card'
                            : 'inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 text-xs font-semibold text-ink-700 hover:border-brand'
                        }
                      >
                        {b.label}
                        <span className={i === 3 ? 'text-brand' : 'text-ink-400'}>{b.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Type-on sample answer */}
              <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">IP & Data — sample answer</p>
                <p className="mt-2 font-mono text-sm text-ink-900">
                  Client owns model weights, adapters, and all engagement-generated code. Brocode retains methodology
                  and reference architectures.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#quote" variant="primary" size="lg" event="quote_open">
                  Request a quote
                </MagneticButton>
                <MagneticButton href="#pack" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 64-page Procurement Pack
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <GlassCard padding="md" className="bg-white">
                <p className="font-mono text-3xl font-bold text-brand">21 days</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Average SoW signature</p>
                <p className="mt-1 text-xs text-ink-600">
                  For UAE clients using the Procurement Pack — against a regional benchmark of 74 days.
                </p>
              </GlassCard>
              <GlassCard padding="md" className="bg-white">
                <p className="font-mono text-3xl font-bold text-brand">6 %</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Average redline rate</p>
                <p className="mt-1 text-xs text-ink-600">
                  Across the last 80 signed SoWs. Regional benchmark: 28 %.
                </p>
              </GlassCard>
              <GlassCard padding="md" className="bg-white">
                <p className="font-mono text-3xl font-bold text-brand">40 in writing</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Answers, with sample clauses</p>
                <p className="mt-1 text-xs text-ink-600">
                  Most consultancies refuse to commit any of this to writing. The existence of this page is the point.
                </p>
              </GlassCard>
              <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/insights/faqs.jpg"
                  alt="A procurement officer reviewing a printed FAQs document with a pen poised in hand"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to use this page */}
      <section className="bg-white py-16">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How to use this page"
              title="Read top-to-bottom, jump by tab, or download the pack."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-700">
                The page is sequenced by procurement order: pricing first, then timelines, scope, IP, residency,
                security, and exit. The accordion below is the same 40 answers, in the same order, that the
                Procurement Pack contains. If the answer to your question is not here, the inline link at the end of
                each block routes you to the partner who answers it in writing within two business days.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                If a question is sector-specific (CBUAE, FSRA, NCA, SAMA), the answer flags it. If a clause carries
                regional jurisdiction sensitivity (DIFC vs ADGM vs DHC vs onshore), the Procurement Pack carries the
                variant. Pricing bands are reviewed every six months — stale bands are worse than no bands.
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

      {/* The seven FAQ blocks */}
      {BLOCKS.map((block, i) => (
        <section
          key={block.id}
          id={`block-${block.id}`}
          className={i % 2 === 0 ? 'bg-surface-muted py-22' : 'bg-white py-22'}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Block {i + 1} of 7 · {block.count} questions
                </p>
                <h2 className="mt-3 text-display-md text-ink-900">{block.label}</h2>
                <p className="mt-4 text-sm text-ink-600">
                  Reviewed quarterly by {block.reviewer}.
                </p>
                {block.id === 'pricing' && (
                  <div className="mt-6 rounded-xl border border-ink-100 bg-white p-5 text-sm">
                    <p className="font-semibold text-ink-900">Pricing bands (USD)</p>
                    <ul className="mt-3 space-y-1.5 text-ink-700">
                      <li>Discovery (4w): 35K - 80K</li>
                      <li>Build (12-26w): 180K - 950K</li>
                      <li>Run (annual): 60K - 340K</li>
                    </ul>
                  </div>
                )}
                {block.id === 'ip' && (
                  <div className="mt-6 rounded-xl border-l-2 border-brand bg-amber-50/40 p-5 text-sm">
                    <p className="font-semibold text-ink-900">Default IP clause</p>
                    <p className="mt-2 text-ink-700">
                      Client owns model weights, adapters, and all engagement-generated code. Brocode retains
                      methodology and reference architectures. Joint Background-IP Register attached to every SoW.
                    </p>
                  </div>
                )}
                {block.id === 'exit' && (
                  <div className="mt-6 rounded-xl border border-ink-100 bg-white p-5 text-sm">
                    <p className="font-semibold text-ink-900">Hand-over template</p>
                    <ul className="mt-3 space-y-1.5 text-ink-700">
                      <li>90 days hyper-care</li>
                      <li>30 days shadow hand-over</li>
                      <li>Full documentation pack</li>
                      <li>Code in client GitHub from day one</li>
                    </ul>
                  </div>
                )}
                <p className="mt-6 text-xs text-ink-500">
                  This question doesn&apos;t answer your case?{' '}
                  <Link href="/contact" className="font-semibold text-brand underline" data-event="secondary_cta_click" data-page={SLUG}>
                    Talk to {block.reviewer.split(',')[0]}
                  </Link>
                </p>
              </div>
              <div className="lg:col-span-8">
                <FAQ items={block.items} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Procurement Pack download */}
      <section id="pack" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Brocode 2026 AI Procurement Pack"
            description="A 64-page PDF containing all 40 FAQ answers, the sample MSA, the sample SoW with the change-control framework, the sample DPA, and a one-page Vendor Due Diligence Q&A answers sheet. Designed to drop into your procurement file as-is."
            contents={[
              'All 40 FAQ answers, in the same order as this page',
              'Sample MSA (DIFC and English-law variants) with redline-friendly Word version',
              'Sample SoW with change-control framework',
              'Sample DPA (UAE PDPL + GDPR + DIFC DP Law aligned)',
              'Vendor Due Diligence Q&A answers sheet (1 page) for procurement files',
              'Pricing bands, reviewed every six months'
            ]}
            filePath="/downloads/procurement-pack.pdf"
            ctaLabel="Email me the Procurement Pack"
            thumbnail="/images/insights/faqs.jpg"
            industries={['Banking & financial services', 'Insurance', 'Energy & utilities', 'Government & public sector', 'Healthcare', 'Telecoms', 'Retail & consumer', 'Professional services', 'Technology', 'Other']}
          />
        </div>
      </section>

      {/* Quote Form — this is the most bottom-funnel insights page */}
      <section id="quote" className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Request a quote"
              title="Bring this page and the Procurement Pack to the commercial call."
              description="A senior commercial lead replies within one business day. Pricing bands are agreed in the first call; SoW typically signed in 21 days for UAE clients."
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
                Message us on WhatsApp
              </a>
              {' '}— a senior commercial lead answers within working hours.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-surface-muted p-8 shadow-card">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Where to go next"
        items={[
          { label: 'Contact', href: '/contact', description: 'Direct routes to commercial, legal, and delivery leads.' },
          { label: 'Development methodology', href: '/technology/methodology', description: 'Timeline and delivery answers at depth.' },
          { label: 'Quality assurance for AI', href: '/technology/quality-assurance', description: 'Security, audit, and regulator alignment at depth.' },
          { label: 'Services', href: '/services', description: 'For visitors who want a scope example to bring to the quote call.' },
          { label: 'About Brocode', href: '/about', description: 'The team behind the answers — see who answers each block.' }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Request a quote"
        primaryHref="#quote"
      />
    </>
  );
}
