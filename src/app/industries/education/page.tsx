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
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const PAGE_SLUG = 'education';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [school / university / regulator]. We're scoping AI on [adaptive learning / Arabic content / student success / admin automation] and would like to discuss curriculum-aligned content. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for Education — Arabic Adaptive Learning, Student Success, UAE Curriculum',
  description:
    'Education AI for UAE schools, universities and regulators. Arabic curriculum content generation, adaptive learning, student-success early-warning and admin automation. Aligned to MoE, ADEK, KHDA and UAE PDPL.',
  alternates: { canonical: 'https://www.brocode.ae/industries/education' },
  openGraph: {
    title: 'AI for Education — Arabic Adaptive Learning, Student Success, UAE Curriculum',
    description:
      'Arabic-first. Curriculum-aligned. Student data stays in the UAE. Built for ADEK, KHDA, MoE and the UAE university estate.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/education',
    images: ['/images/industries/education.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education AI for UAE Schools and Universities',
    description:
      'Jais + AraBERT-v2 curriculum-aligned content. LTI 1.3 / xAPI integration. UAE PDPL aligned.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a curriculum-aligned Arabic content sample for your subject',
  subtitle:
    'A senior education engagement lead reviews your curriculum and SIS/LMS, then sends a curriculum-aligned content sample inside one business day for the curriculum officer to assess.',
  ctaLabel: 'Request the sample',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'entityType',
      label: 'Entity type',
      type: 'select',
      required: true,
      options: [
        'Regulator',
        'Public school district',
        'Private school group',
        'Single private school',
        'University',
        'TVET institution',
        'Corporate L&D'
      ]
    },
    {
      name: 'curriculum',
      label: 'Curriculum',
      type: 'multiselect',
      options: [
        'UAE National Curriculum',
        'British',
        'American',
        'IB',
        'Indian CBSE',
        'French',
        'MoE KSA',
        'Other'
      ]
    },
    {
      name: 'sisLms',
      label: 'SIS / LMS',
      type: 'text',
      placeholder: 'PowerSchool / Engage / Veracross / Banner / Blackboard / Canvas / D2L / Moodle'
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Arabic content generation',
        'Adaptive learning',
        'Student-success early-warning',
        'Admin automation',
        'Assessment & test prep',
        'Generative-AI policy support'
      ]
    },
    {
      name: 'dataResidency',
      label: 'Student data residency requirement',
      type: 'select',
      required: true,
      options: ['Must remain in UAE', 'GCC acceptable', 'Hyperscaler regional acceptable', 'No constraint']
    },
    {
      name: 'existingRelationships',
      label: 'Existing research / vendor relationships',
      type: 'text',
      placeholder: 'MBZUAI / Khalifa / Blackboard / Canvas / Century Tech / ALEKS / other'
    }
  ]
};

const useCases = [
  {
    title: 'Arabic curriculum-aligned content',
    body: 'Jais + AraBERT-v2 with a Khaleeji dialect head, post-trained on UAE National Curriculum, ADEK private-school framework and KHDA inspection-aligned learning outcomes. Lesson plans, formative items and reading passages with citation-traceable provenance.'
  },
  {
    title: 'Bayesian adaptive learning',
    body: 'Bayesian knowledge-tracing layered on Blackboard, Canvas, D2L Brightspace or Moodle via LTI 1.3 and xAPI/Caliper. Per-student mastery trajectories with teacher-facing override controls.'
  },
  {
    title: 'Student-success early-warning',
    body: 'Survival-analysis models on SIS data (PowerSchool, Engage, Veracross, Banner), LMS engagement, attendance and assessment. Drop-out and probation risk with a 4-8 week lead time and a faculty-facing intervention card.'
  },
  {
    title: 'Admin automation in Arabic',
    body: 'Document intelligence on parent correspondence, transcripts, MoE Equivalency certificates and admissions forms. Bilingual chat agents for admissions and student services that handle Khaleeji, MSA and English.'
  },
  {
    title: 'Arabic IELTS / EmSAT item generation',
    body: 'Difficulty-calibrated test-prep items with documented exposure controls. Integrity-aware generation so the same root form is not reused inside the exposure window.'
  },
  {
    title: 'Teacher copilot for lesson planning',
    body: 'Curriculum-grounded lesson plan and formative-assessment generator. Cuts lesson preparation time; reviewed inside the institution\'s LMS workflow before reaching students.'
  },
  {
    title: 'Generative-AI policy support',
    body: 'Drafts a defensible school or university generative-AI policy mapped to ADEK / KHDA / MoE expectations and UAE PDPL. Used as the baseline for the parent-facing communication and the staff handbook.'
  },
  {
    title: 'Research-support copilot for faculty',
    body: 'Literature-review and grant-drafting copilot grounded in the institution\'s licensed databases. Useful at MBZUAI-adjacent universities and the wider research estate.'
  },
  {
    title: 'Bilingual student-services agent',
    body: 'Long-tail Q&A on admissions, finance, timetabling and registration in Khaleeji Arabic and English. Handles the queries that would otherwise sit in the registrar\'s inbox for two weeks.'
  }
];

const integrationStack = [
  {
    label: 'LMS integration',
    detail: 'LTI 1.3 and xAPI/Caliper into Blackboard, Canvas, D2L Brightspace and Moodle. Adaptive-learning content and analytics flow back into the LMS gradebook.'
  },
  {
    label: 'SIS integration',
    detail: 'PowerSchool, Engage, Veracross and Banner. Survival-analysis features keyed to attendance, assessment and engagement.'
  },
  {
    label: 'Arabic NLP stack',
    detail: 'Jais foundation model fine-tuned for the GCC, plus AraBERT-v2 for downstream tasks. Khaleeji dialect head built and curated with UAE curriculum officers.'
  },
  {
    label: 'Assessment platforms',
    detail: 'Renaissance, ALEKS and NWEA MAP signal ingestion where in use. Arabic IELTS and EmSAT item generation alongside.'
  },
  {
    label: 'MBZUAI co-research framework',
    detail: 'Documented co-research pattern for universities running a translational pilot with MBZUAI faculty. Brocode acts as the production-engineering counterpart.'
  },
  {
    label: 'Sovereign data layer',
    detail: 'Training and inference inside a UAE-resident environment. Student PII does not leave the country. Named DPO point of contact.'
  }
];

const regulatorAnchors = [
  {
    name: 'UAE Federal Decree-Law 45 (PDPL)',
    detail: 'Brocode delivery aligned to UAE PDPL with a named DPO. Conformance statement included in the procurement pack.'
  },
  {
    name: 'KHDA, ADEK & MoE',
    detail: 'Curriculum alignment evidence for KHDA inspection cycles, ADEK private-school framework and MoE National Curriculum mapping.'
  },
  {
    name: 'Child protection regime',
    detail: 'Aligned to the UAE Cyberbullying and Child Protection legislation. Age-appropriate guardrails and parent-consent workflows on every generative deployment.'
  },
  {
    name: 'ISO 27001 / 27018 / SOC 2 Type II',
    detail: 'Information-security and cloud-PII certifications evidenced in the vendor security pack. Reviewed quarterly.'
  }
];

const caseStudies = [
  {
    quote:
      'Arabic adaptive-learning rollout across grades 6-9. Mastery uplift of 13 percentage points on a standardised post-test, with curriculum officers reviewing every item set before release.',
    label: 'UAE school group — adaptive learning'
  },
  {
    quote:
      'Student-success early-warning caught 71 percent of at-risk first-year students six weeks before mid-term. Intervention uptake measured at faculty level and reported back to the Vice Chancellor.',
    label: 'UAE university — student success'
  },
  {
    quote:
      'Arabic admin automation cut parent-correspondence handling time by 58 percent in a pilot directorate. The DPO sign-off was completed inside the pilot window.',
    label: 'UAE regulator — administrative automation'
  },
  {
    quote:
      'Arabic adaptive-learning pilot reached 71 percent student usage at term-end using curriculum-aligned content, against a 24 percent median for generic ed-tech rollouts.',
    label: 'GCC school group — usage benchmark'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Curriculum-aligned to UAE MoE / ADEK / KHDA',
    brocode: true,
    competitors: ['English-first', false, 'Research, not production']
  },
  {
    feature: 'Khaleeji Arabic adaptive content quality',
    brocode: 'Curriculum-officer reviewed',
    competitors: ['Generic Arabic', 'Limited', 'Research-grade only']
  },
  {
    feature: 'LTI 1.3 / xAPI integration with Blackboard / Canvas / D2L / Moodle',
    brocode: true,
    competitors: ['Within own LMS', 'Limited', 'Bespoke per engagement']
  },
  {
    feature: 'Student data stays in UAE',
    brocode: true,
    competitors: ['Vendor cloud', 'Customer-defined', 'Customer-defined']
  },
  {
    feature: 'Survival-analysis early-warning on SIS data',
    brocode: true,
    competitors: ['Dashboards only', 'Strategy work', 'Research output']
  },
  {
    feature: 'MBZUAI co-research framework',
    brocode: 'Production-engineering counterpart',
    competitors: [false, false, 'Native']
  },
  {
    feature: 'Curriculum-officer review panel before release',
    brocode: true,
    competitors: [false, false, 'Per project']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Show me curriculum-aligned items, not generic Arabic GPT output.',
    answer:
      'The Brocode Arabic content stack is Jais + AraBERT-v2 with a Khaleeji dialect head, post-trained on UAE National Curriculum, ADEK private-school framework and KHDA inspection-aligned learning outcomes. Every item passes through a curriculum-officer review panel before release. The lead-magnet field guide walks through a worked grade-7 Arabic content example end to end.'
  },
  {
    question: 'Student data cannot leave the country. How is your stack deployed?',
    answer:
      'Training and inference run inside a UAE-resident environment of your choice — G42 Cloud, Khazna, Azure UAE North or your on-premise data centre. PII is encrypted in transit and at rest, with a named Brocode DPO point of contact aligned to UAE PDPL. LMS integrations are designed to avoid PII export at the LTI / xAPI boundary.'
  },
  {
    question: 'We have a research relationship with MBZUAI / Khalifa University. How do you complement that?',
    answer:
      'MBZUAI is a deep, novel research partner; Brocode is the production-engineering counterpart. The framework MoU template lets a university run a translational pilot with MBZUAI faculty and have Brocode deliver the LMS integration, the operating model and the curriculum-officer review panel around it. The two efforts are complementary, not duplicative — we routinely run alongside.'
  },
  {
    question: 'How do you handle parent consent and generative-AI policy?',
    answer:
      'Each generative deployment has age-appropriate guardrails, a parent-consent workflow and a documented policy mapped to ADEK / KHDA / MoE expectations. The lead-magnet field guide includes a baseline parent-communication template and the policy text. The institution\'s academic council still owns the final language; Brocode provides the defensible baseline.'
  },
  {
    question: 'How often does the model retrain, and who reviews the content?',
    answer:
      'Curriculum content models retrain at the start of each term and after every official curriculum revision. The curriculum-officer review panel signs off every item set before it reaches students. Adaptive-learning models retrain weekly inside the term against student outcomes; the academic lead signs off before promotion.'
  },
  {
    question: 'Can you operate inside a KHDA or ADEK inspection cycle?',
    answer:
      'Yes. Brocode supplies the evidence pack — model cards, item-level reviews, the DPO statement and the parent-consent workflow — in the format inspections expect. We have run alongside a KHDA inspection without disruption and have produced the documentation an ADEK assessor requested at the next cycle.'
  },
  {
    question: 'What about generative-AI use by students and teachers?',
    answer:
      'Brocode helps the institution draft and operationalise the generative-AI policy that the board has been asked about. The policy covers acceptable use, integrity controls, the staff handbook update and the parent-facing communication. We do not impose a policy — we provide the defensible baseline and the implementation pattern.'
  }
];

const relatedLinks = [
  {
    label: 'Natural Language Processing',
    href: '/services/natural-language-processing',
    description: 'Arabic content generation and admin-automation NLP under the hood.'
  },
  {
    label: 'Recommendation Systems',
    href: '/services/recommendation-systems',
    description: 'Adaptive-learning recommendation engine for the LMS.'
  },
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'Student-success early-warning and attrition modelling.'
  },
  {
    label: 'Document Intelligence',
    href: '/services/document-intelligence',
    description: 'Transcripts, MoE Equivalency and admissions documentation.'
  },
  {
    label: 'Certifications & Compliance',
    href: '/security-compliance',
    description: 'UAE PDPL conformance pack for student-data residency.'
  }
];

export default function EducationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI for Education',
    serviceType: 'Education AI engineering',
    provider: {
      '@type': 'Organization',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae'
    },
    audience: {
      '@type': 'EducationalAudience',
      audienceType:
        'UAE Ministry of Education, ADEK, KHDA, SPEA, GEMS, Aldar Education, Taaleem, Bloom, Khalifa University, MBZUAI, NYU AD, Zayed University, AUS and GCC peers'
    },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait'],
    url: 'https://www.brocode.ae/industries/education',
    description:
      'Education AI built for UAE schools, universities and regulators — Arabic curriculum content generation, adaptive learning, student-success early-warning and administrative automation.'
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
      <Script id="ld-education" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-education-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — clean white + teal */}
      <section className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(15,76,129,0.06),transparent_55%)]"
        />
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Education' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Industries · Education
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                  Education AI for UAE schools, universities and regulators.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                  Arabic curriculum content generation, adaptive learning, student-success early-warning and
                  administrative automation — integrated with your SIS and LMS, aligned to MoE, ADEK and KHDA
                  data and child-protection regimes. Built for the curriculum officer, not the marketer.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#quote-form" variant="primary" size="lg" event="quote_open">
                    Request a curriculum-aligned sample
                  </MagneticButton>
                  <MagneticButton
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    variant="whatsapp"
                    size="lg"
                    event="whatsapp_hero"
                  >
                    WhatsApp the team
                  </MagneticButton>
                  <Link
                    href="#lead-magnet"
                    className="text-sm font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800"
                    data-event="secondary_cta_click"
                    data-page={PAGE_SLUG}
                  >
                    Download the Arabic Adaptive Learning Field Guide
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 max-w-xl text-sm text-ink-500">
                  Arabic-first. Curriculum-aligned. Student data stays in the UAE.
                </p>
              </Reveal>
            </div>

            {/* Split-frame hero: Arabic lesson + teacher early-warning dashboard */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <GlassCard padding="sm" className="overflow-hidden">
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/industries/education.jpg"
                      alt="Split view of a UAE-curriculum grade-7 Arabic lesson on tablet and a teacher early-warning dashboard"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 90vw"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 text-xs text-ink-900 shadow-card">
                      <div>
                        <p className="font-semibold">الدرس · القراءة · الصف السابع</p>
                        <p className="mt-0.5 text-ink-500">Grade 7 · MoE-aligned</p>
                      </div>
                      <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-800">
                        LTI 1.3
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-ink-900/85 px-4 py-3 text-[11px] text-white">
                      <div>
                        <p className="opacity-60">At-risk</p>
                        <p className="mt-0.5 text-sm font-semibold text-amber-300">5</p>
                      </div>
                      <div>
                        <p className="opacity-60">Lead time</p>
                        <p className="mt-0.5 text-sm font-semibold">6 wks</p>
                      </div>
                      <div>
                        <p className="opacity-60">Data</p>
                        <p className="mt-0.5 text-sm font-semibold">UAE-resident</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-xs text-ink-600">
                    Five students moved from on-track to at-risk in the last cycle. The intervention card
                    suggests a teacher action; the LMS gradebook stays the source of truth.
                  </p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="border-y border-ink-100 bg-teal-50/40 py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '13 pp', label: 'Mastery uplift on a standardised grade 6-9 Arabic post-test' },
              { value: '71%', label: 'At-risk first-year students caught 6 weeks before mid-term' },
              { value: '58%', label: 'Reduction in parent-correspondence handling time' },
              { value: '71%', label: 'Student usage at term-end with curriculum-aligned content' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem on the table"
            title="The parent body is asking, on TV, what the school's AI policy actually is."
            description="Arabic curriculum content is hand-built by curriculum officers and lags the English content by 12-18 months. The LMS adaptive-learning module produces English-only personalisation. The student-success early-warning report sits in a quarterly PDF instead of a live signal in the SIS. The next ADEK or KHDA inspection is approaching."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Arabic content lag</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The Arabic content is 12-18 months behind the English.</h3>
                <p className="mt-3 text-ink-600">
                  Generic LLM output fails the curriculum-officer review. The Brocode Jais + AraBERT-v2 stack is
                  post-trained on the UAE National Curriculum, ADEK and KHDA outcomes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">LMS data export</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Student PII must not leave the LMS perimeter.</h3>
                <p className="mt-3 text-ink-600">
                  Brocode integrates via LTI 1.3 and xAPI/Caliper. PII is kept inside the LMS-defined boundary,
                  with no export to a third-party cloud.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Child-protection regime</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Parent consent and age-appropriate guardrails are non-negotiable.</h3>
                <p className="mt-3 text-ink-600">
                  Brocode delivery is aligned to UAE PDPL, KHDA student-data guidance, ADEK data-protection
                  framework and the UAE Cyberbullying and Child Protection legislation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE-CASE BENTO */}
      <section className="bg-gradient-to-b from-white to-teal-50/40 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case map"
            title="Nine concrete AI use cases the curriculum officer and director of student success use weekly."
            description="Each panel below is in production with a UAE school group, university or regulator. Numbers are anonymised and approved by the engagement lead."
          />

          <div className="mt-12">
            <BentoGrid>
              {useCases.map((u, i) => (
                <BentoCell
                  key={u.title}
                  span={i === 0 || i === 6 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : i === 6 ? 'brand' : 'light'}
                >
                  <h3 className={`text-xl font-semibold ${i === 0 || i === 6 ? 'text-white' : 'text-ink-900'}`}>
                    {u.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 0 || i === 6 ? 'text-white/85' : 'text-ink-600'
                    }`}
                  >
                    {u.body}
                  </p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* INTEGRATION STACK */}
      <section className="py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Integration mechanism"
              title="Built to live inside the SIS and LMS you already run."
              description="LTI 1.3 and xAPI/Caliper. Named connectors for PowerSchool, Engage, Veracross and Banner. The MBZUAI co-research framework MoU template on the table from day one."
            />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationStack.map((p) => (
              <li key={p.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{p.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGULATORS / STANDARDS */}
      <section className="bg-teal-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Regulators & standards"
            title="Anchored to MoE, ADEK, KHDA and UAE PDPL — the frameworks your inspection cycle uses."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {regulatorAnchors.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-teal-300/20 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-teal-200">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Four anonymised cases across schools, universities and regulators."
            description="All numbers are signed off by the engagement lead and a named curriculum officer before publish."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.label} className="rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="text-base leading-relaxed text-ink-800">&ldquo;{c.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-700">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="bg-teal-50/40 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vs the alternatives on your shortlist"
            title="Ed-tech SaaS, Big-4 advisory, MBZUAI research or in-house build."
            description="A senior CDO has usually been offered all four. The comparison reflects the first-call brief our engagement leads hear."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['Ed-tech SaaS', 'Big-4 advisory', 'MBZUAI research']}
              rows={compareRows}
            />
          </div>
          <p className="mt-5 max-w-3xl text-sm text-ink-500">
            Compared with Blackboard, Canvas, ALEKS, Century Tech, Squirrel AI; PwC Education, EY Education,
            Deloitte, McKinsey; MBZUAI research collaboration.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Arabic Adaptive Learning Field Guide"
            description="26-page reference for UAE schools and universities. Covers the eight failure modes of Arabic content from generic LLMs, the LTI 1.3 + xAPI integration pattern for Blackboard, Canvas, D2L and Moodle, a worked Bayesian knowledge-tracing example on grade-7 Arabic and the UAE PDPL alignment for student data."
            contents={[
              'Jais + AraBERT-v2 curriculum post-training pattern',
              'LTI 1.3 + xAPI integration for the major LMS estates',
              'Worked Bayesian knowledge-tracing on grade-7 Arabic',
              'Survival-analysis early-warning sample on SIS data',
              'UAE PDPL alignment and parent-consent workflow',
              'MBZUAI co-research framework MoU template'
            ]}
            filePath="/downloads/arabic-adaptive-learning-field-guide.pdf"
            ctaLabel="Email me the field guide"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="The questions a Vice Chancellor or Director General asks before the inspection cycle."
              description="If something is missing here, message us on WhatsApp or send it via the form below."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="bg-teal-50/40 py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the engagement lead"
              title="Tell us about the curriculum, the LMS and the use case."
              description="Six short questions, then a senior education engineer sends a curriculum-aligned content sample inside one business day for the curriculum officer to assess."
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Prefer to chat?</p>
              <p className="mt-2 text-sm text-ink-700">
                Many CDOs and Directors of Digital Learning ping the team on WhatsApp first. The message is
                pre-filled with the use case so you do not type the brief twice.
              </p>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
              >
                Continue on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-9">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Request sample"
        primaryHref="#quote-form"
      />
    </>
  );
}
