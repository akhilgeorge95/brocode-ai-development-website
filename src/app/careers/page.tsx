import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink, SITE } from '@/lib/site';

const PAGE_SLUG = 'careers';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm interested in a senior ML / deep learning / NLP / MLOps role at Brocode. I'm currently based in [city] and my background is [short summary]. Could we set up an informal 20-minute call before I apply?";

export const metadata: Metadata = {
  title: 'Careers — Senior AI & ML Engineer Jobs in Dubai & Abu Dhabi (UAE) | Brocode',
  description:
    'Senior AI, ML, deep learning, NLP and MLOps jobs based in Abu Dhabi and Dubai, UAE. Named work. On-premise GPU access. Published AED bands. Full UAE relocation. For engineers who want to ship production AI.',
  alternates: { canonical: 'https://www.brocode.ae/careers' },
  openGraph: {
    title: 'Careers at Brocode — Senior AI Engineering in the UAE',
    description:
      'Published AED bands. On-premise GPU access. 20% time on research. Full relocation. Two-stage interview. UAE-based engineering home for senior AI engineers.',
    url: 'https://www.brocode.ae/careers',
    images: ['/images/general/careers-hero.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocode Careers — Senior ML Engineer Jobs Dubai',
    description: 'Named work. Published bands. On-premise GPU. Full relocation.',
    images: ['/images/general/careers-hero.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Apply to Brocode',
  subtitle:
    'Every application is read by a senior engineer, not an ATS filter. We commit to a written response within five working days.',
  ctaLabel: 'Submit application',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'role',
      label: 'Role of interest',
      type: 'select',
      options: [
        'Senior ML engineer',
        'Senior deep learning engineer',
        'Senior NLP engineer',
        'Senior MLOps engineer',
        'Data engineer',
        'Applied research engineer',
        'Engineering manager',
        'General expression of interest'
      ],
      required: true
    },
    {
      name: 'seniority',
      label: 'Seniority level',
      type: 'select',
      options: ['3-5 years', '5-8 years', '8-12 years', '12+ years'],
      required: true
    },
    {
      name: 'location',
      label: 'Current location and willingness to relocate',
      type: 'select',
      options: [
        'Already in UAE',
        'Relocating within 3 months',
        'Relocating within 6 months',
        'Open but no timeline',
        'Remote-only'
      ],
      required: true
    },
    {
      name: 'technicalArea',
      label: 'Strongest technical area',
      type: 'multiselect',
      options: [
        'PyTorch',
        'JAX',
        'Hugging Face',
        'LangChain',
        'NVIDIA Triton',
        'Kubernetes',
        'Airflow',
        'Snowflake',
        'Databricks',
        'Arabic NLP',
        'Computer vision',
        'Reinforcement learning',
        'Other'
      ]
    },
    {
      name: 'visaStatus',
      label: 'Visa status',
      type: 'select',
      options: [
        'UAE citizen',
        'UAE resident',
        'GCC resident',
        'Requires sponsorship',
        'Family-sponsored',
        'Not applicable'
      ],
      required: true
    },
    {
      name: 'rightToWork',
      label: 'Right to work in UAE',
      type: 'select',
      options: ['Yes — already authorised', 'No — would need sponsorship', 'Not yet checked'],
      required: true
    },
    {
      name: 'earliestStart',
      label: 'Earliest start date',
      type: 'date'
    },
    {
      name: 'publicWork',
      label: 'Link to public work (GitHub / Hugging Face / Scholar / personal site)',
      type: 'text',
      placeholder: 'https://github.com/username'
    },
    {
      name: 'cv',
      label: 'CV or LinkedIn link',
      type: 'text',
      placeholder: 'LinkedIn URL or a link to a CV in Google Drive / Dropbox',
      required: true,
      helper: 'For file uploads (PDF/DOCX), email cv@brocode.ae after submitting this form.'
    },
    {
      name: 'note',
      label: 'A short note on the kind of work you want to do next',
      type: 'textarea',
      placeholder: 'Two or three sentences is plenty.'
    }
  ]
};

const proofItems = [
  { value: '38-52%', label: 'More disposable income vs equivalent FAANG London band' },
  { value: '20%', label: 'Engineering time on research and open-source' },
  { value: 'AED 15K', label: 'Annual learning and conference budget per engineer' },
  { value: '5 days', label: 'Application response SLA, no exceptions' }
];

const openRoles = [
  { title: 'Senior Machine Learning Engineer', team: 'Applied ML', location: 'Abu Dhabi · Hybrid', band: 'AED 38,000 — 52,000 / month', level: 'L5' },
  { title: 'Senior NLP Engineer (Khaleeji Arabic)', team: 'Language', location: 'Abu Dhabi or Dubai · Hybrid', band: 'AED 36,000 — 50,000 / month', level: 'L5' },
  { title: 'Senior Deep Learning Engineer (Computer Vision)', team: 'Vision', location: 'Abu Dhabi · On-site', band: 'AED 40,000 — 55,000 / month', level: 'L5' },
  { title: 'Senior MLOps Engineer', team: 'Platform', location: 'Abu Dhabi · On-site', band: 'AED 38,000 — 50,000 / month', level: 'L5' },
  { title: 'Applied Research Engineer (LLM Fine-tuning)', team: 'Research', location: 'Dubai · Hybrid', band: 'AED 42,000 — 58,000 / month', level: 'L5 / L6' },
  { title: 'Data Engineer (Streaming)', team: 'Data', location: 'Dubai · Hybrid', band: 'AED 28,000 — 40,000 / month', level: 'L4' },
  { title: 'Engineering Manager (ML Delivery)', team: 'Delivery', location: 'Abu Dhabi · On-site', band: 'AED 50,000 — 68,000 / month', level: 'M5' }
];

const personas = [
  {
    badge: 'Persona A · Relocator',
    name: 'Hana, Senior NLP Engineer, moving from Berlin',
    body: '"I was at a Berlin scale-up working on multilingual transformers. The work was interesting but every senior career step needed two more rounds of EU funding. Brocode published the AED band on the role, attached the relocation budget for a family of three including school search, and arranged the dependent visa in seven weeks. Most of my engineering time is now on a Khaleeji-specific fine-tuning workstream that ships to production. Three of my publications were co-written with the head of research in my first year."'
  },
  {
    badge: 'Persona B · UAE upgrader',
    name: 'Omar, MLOps Engineer, moving from a UAE bank internal team',
    body: '"I was running internal feature-store infrastructure at a UAE bank, working on the same backlog for three years with no external visibility. Brocode put my name on the reference architecture pack for the sovereign MLOps stack, sponsored my NeurIPS attendance with four conference days off the engagement clock, and gave me on-premise H100 access on day one. The first thing my interviewer did was ask which open-source project I wanted to contribute to during my 20% time."'
  }
];

const benefits = [
  { t: 'Named work', d: 'Every senior engineer has a public profile on the team page — publications, conference talks, GitHub and Hugging Face links explicitly supported.' },
  { t: 'On-premise GPU', d: 'NVIDIA DGX clusters, H100 / H200 on G42 Cloud, Hugging Face Enterprise. No queue behind corporate IT.' },
  { t: 'Published AED bands', d: 'Every role lists a tax-free band, the benefits envelope, and the relocation package range. No negotiation games at the offer stage.' },
  { t: 'Learning and growth allowance', d: 'AED 15,000 per engineer per year for conferences (NeurIPS, ICML, KDD, EMNLP), books, courses and certifications, plus four conference days off-clock.' },
  { t: '20% time on research', d: 'One day a week on internal research, open-source contribution, paper writing, or a Hugging Face model card — with publication review by the head of research.' },
  { t: 'Full relocation support', d: 'Employment visa, family visa sponsorship, three months of company-paid temporary accommodation, school-search assistance, shipping allowance, and a UAE banking and rental onboarding coordinator.' }
];

const interviewSteps: TimelineStep[] = [
  { label: 'Step 1', title: '45-minute technical screen', description: 'A senior engineer walks through your background, your strongest production project, and the kind of work you want to do next. No coding under timer.', metric: 'Same week scheduling' },
  { label: 'Step 2', title: 'Paid 1-day take-home', description: 'A scoped, real-world problem from our actual production work. Compensated at your published day rate. You keep the IP if we do not move forward.', metric: 'Paid AED 4,000 - 6,000' },
  { label: 'Step 3', title: '1-day on-site with the team', description: 'Pair-programming, a design discussion, and a 1-on-1 with the head of engineering. No whiteboard puzzles, no eight-round marathon.', metric: 'Travel covered if relocating' },
  { label: 'Step 4', title: 'Written offer within 5 working days', description: 'A clear written offer with the AED band, benefits envelope, relocation budget, the team you would join, and the first three projects on the docket.', metric: 'No verbal-then-renegotiate games' }
];

const faqItems: FAQItem[] = [
  {
    question: 'How is this different from joining a Big-4 advisory in Dubai?',
    answer:
      'Big-4 engineers ship slides; Brocode engineers ship code. Big-4 runs a six-round interview marathon; we run a two-stage process with a paid take-home. Big-4 publishes partner names but not engineer names; every Brocode engineer has a public team-page profile. The Big-4 advisory model bills on utilisation against a single client account; you would be on PowerPoint duty. Brocode bills on engineering output across multiple clients and a 20% research time allowance.'
  },
  {
    question: 'What does a Senior ML Engineer actually take home in AED with a family of two children?',
    answer:
      'The published L5 band is AED 38,000 to 52,000 per month tax-free. The benefits envelope adds premium health insurance for the engineer and four dependents, AED 15,000 annual learning budget, and a relocation package in the AED 80,000 to 140,000 range depending on origin city and family size. The compensation and relocation guide PDF below has the full disposable-income comparison vs FAANG London, including rent and school fees.'
  },
  {
    question: 'What is the engineering culture really — code review, on-call, publication, open-source?',
    answer:
      'Every pull request is reviewed by at least one senior engineer; merges to production require two reviews. On-call rotation is one-week-per-six-weeks for platform engineers, opt-in for ML engineers on systems they own. Publication policy is permissive — the head of research reviews for IP exposure only, not for marketing voice. Open-source contributions are encouraged on company time during the 20% research window; commits are made under your own GitHub identity.'
  },
  {
    question: 'Do you offer equity participation?',
    answer:
      'Yes. Senior engineers (L5+) join an equity participation programme on a four-year vesting schedule with a one-year cliff. The grant size scales with seniority and is documented in the written offer. Engineers below L5 join a phantom-equity bonus pool that pays out on liquidity events. Both schemes are explained in detail at the offer stage.'
  },
  {
    question: 'Do you sponsor work visas? Is family-visa sponsorship included?',
    answer:
      'Yes to both. Brocode is the employment-visa sponsor under our Dubai-mainland and ADGM entities. Family-visa sponsorship (spouse and dependent children) is included as part of the relocation package, with a dedicated visa coordinator who manages the process end-to-end. Most relocations close in 6-10 weeks from offer signature.'
  },
  {
    question: 'Do you hire remote-only engineers anywhere in the world?',
    answer:
      'We do not. Engineering decisions are made in the UAE; senior engineers sit in Dubai or Abu Dhabi on a hybrid model (three days in-office). We do hire delivery-bench engineers in Egypt and Pakistan, but those are not the engineering-leadership roles published here.'
  },
  {
    question: 'Is there an internship pathway or a return-to-work programme?',
    answer:
      'We run a six-month internship for final-year and MSc students each summer, with a structured project, a named senior mentor and a published stipend band. We also run a return-to-work cohort for engineers re-entering after a 6-24 month break — same interview process, with optional re-onboarding support and a focused first project.'
  }
];

const relatedLinks = [
  { label: 'About Brocode', href: '/about', description: 'Founders, certifications, legal entity and operating model.' },
  { label: 'Why Brocode', href: '/why-brocode', description: 'How we compare against the Big-4 and the hyperscalers you might also be considering.' },
  { label: 'Insights and engineering notes', href: '/insights', description: 'Published benchmarks, open-source releases and engineering blog.' },
  { label: 'Contact a hiring manager', href: '/contact', description: 'Direct line for non-application career questions.' },
  { label: 'Open-source contributions', href: '/technology/open-source', description: 'What Brocode engineers ship to GitHub.' }
];

export default function CareersPage() {
  return (
    <>
      <Script
        id="ld-careers"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Careers at Brocode Solutions',
              url: `${SITE.url}/careers`,
              description:
                'Senior ML, deep learning, NLP and MLOps roles in the UAE. Published AED bands, on-premise GPU access, full relocation support.'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer }
              }))
            }
          ])
        }}
      />

      {/* Documentary-style hero */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/general/careers-hero.jpg"
            alt="Two engineers reviewing a PyTorch training run together in the Brocode office"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/75 to-ink-900" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4 text-white/70">Engineering careers</p>
            <h1 className="text-balance text-display-2xl">
              A UAE engineering home for senior AI engineers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Named work. On-premise GPU access. Published AED bands. Full UAE relocation. The kind
              of engineering culture that publishes papers, owns GitHub repositories, and ships
              production systems to regulated GCC enterprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">Named work</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">On-premise GPU</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">Published bands</span>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href="#open-roles" variant="primary" size="lg" event="secondary_cta_click">
                See open roles
              </MagneticButton>
              <MagneticButton href="#application-form" variant="secondary" size="lg" event="quote_open">
                Apply or send a speculative note
              </MagneticButton>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_hero"
                data-page={PAGE_SLUG}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
              >
                WhatsApp the hiring lead
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles — immediate strip */}
      <section id="open-roles" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Open roles"
            title="Roles we are hiring for right now."
            description="Every card shows the AED band, the level, the team and the work location. AED-denominated, tax-free, refreshed quarterly by the head of people."
          />
          <ul className="mt-12 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
            {openRoles.map((r) => (
              <li key={r.title}>
                <div className="grid grid-cols-1 gap-3 p-7 transition hover:bg-surface-muted md:grid-cols-12 md:items-center md:gap-6">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{r.team} · {r.level}</p>
                    <h3 className="mt-1 text-lg font-semibold text-ink-900">{r.title}</h3>
                  </div>
                  <p className="md:col-span-3 text-sm text-ink-700">{r.band}</p>
                  <p className="md:col-span-3 text-sm text-ink-600">{r.location}</p>
                  <div className="md:col-span-2 md:text-right">
                    <Link
                      href="#application-form"
                      className="inline-flex rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
                      data-event="quote_open"
                      data-page={PAGE_SLUG}
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-500">
            Do not see a perfect-fit role?{' '}
            <Link href="#application-form" className="text-brand underline">
              Submit a general expression of interest
            </Link>{' '}
            — we hire whenever we meet someone we cannot ignore.
          </p>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-surface-muted py-16">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Two persona stories */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Two engineer stories"
            title="A relocator and a UAE upgrader."
            description="Two real Brocode engineers describe how they ended up here and what changed. Names anonymised at the engineers' request — full LinkedIn profiles available at the screen stage."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {personas.map((p) => (
              <li key={p.name}>
                <Reveal>
                  <article className="h-full rounded-2xl border border-ink-100 bg-surface-muted p-9">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.badge}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink-900">{p.name}</h3>
                    <p className="mt-5 text-base leading-relaxed text-ink-700">{p.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits — bento */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why senior engineers join Brocode"
            title="Six things we engineer into every role."
            description="Each is documented in the offer letter, not promised in a slide deck."
          />
          <div className="mt-12">
            <BentoGrid>
              <BentoCell span="lg" variant="brand">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{benefits[0].t}</p>
                <h3 className="mt-2 text-2xl font-semibold">Every engineer is publicly visible.</h3>
                <p className="mt-3 text-sm text-white/85">{benefits[0].d}</p>
              </BentoCell>
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{benefits[1].t}</p>
                <h3 className="mt-2 text-xl font-semibold">DGX + H100 / H200.</h3>
                <p className="mt-3 text-sm text-white/80">{benefits[1].d}</p>
              </BentoCell>
              <BentoCell span="md" variant="light">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{benefits[2].t}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">No offer-stage games.</h3>
                <p className="mt-3 text-sm text-ink-700">{benefits[2].d}</p>
              </BentoCell>
              <BentoCell span="md" variant="glass">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{benefits[3].t}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">AED 15K per year.</h3>
                <p className="mt-3 text-sm text-ink-700">{benefits[3].d}</p>
              </BentoCell>
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{benefits[4].t}</p>
                <h3 className="mt-2 text-xl font-semibold">One day a week.</h3>
                <p className="mt-3 text-sm text-white/80">{benefits[4].d}</p>
              </BentoCell>
              <BentoCell span="lg" variant="light">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{benefits[5].t}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink-900">A dedicated relocation coordinator.</h3>
                <p className="mt-3 text-sm text-ink-700">{benefits[5].d}</p>
              </BentoCell>
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Interview process */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-30">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <Image src="/images/general/code-screen.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900" />
        </Parallax>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The interview process"
              title="A two-stage process. Paid take-home. No whiteboard hazing."
              description="We aim to take you from first conversation to written offer in under three weeks. You will know exactly where you stand at every step."
            />
          </div>
          <div className="lg:col-span-7">
            <ScrollTimeline steps={interviewSteps} />
          </div>
        </div>
      </section>

      {/* Compensation guide lead magnet */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="The UAE Senior ML Engineer Compensation and Relocation Guide 2026"
            description="A 24-page PDF written for engineers, not recruiters. AED tax-free salary bands across Brocode and the wider UAE market (Big-4, banks, hyperscalers, scale-ups), cost-of-living modelling for a family of four in Dubai vs Abu Dhabi, visa and residency mechanics, schooling and healthcare cost ranges, and a relocation timeline checklist. Headline figure: a Senior ML Engineer in Brocode's published band takes home roughly 38-52% more disposable income than the equivalent FAANG band in London after rent and schooling, depending on family size."
            filePath="/downloads/brocode-compensation-relocation-guide.pdf"
            ctaLabel="Email me the guide"
            contents={[
              'Salary bands by role and seniority',
              'Equity participation',
              'Visa and dependent process',
              'Schools, healthcare, housing',
              'First 90 days in Abu Dhabi'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Relocation, equity and culture"
              title="The questions engineers send us before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="application-form" className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Apply or send a speculative note"
              title="A senior engineer reads every application."
              description="We commit to a written response within five working days — no ATS auto-reject. If your background does not match an open role, we will tell you honestly and route you to the next conversation."
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct:</strong> <a href="mailto:careers@brocode.ae" className="text-brand underline">careers@brocode.ae</a></p>
              <p><strong className="text-ink-900">Office:</strong> {SITE.hq.line1}, {SITE.hq.line2}</p>
              <p>
                <strong className="text-ink-900">WhatsApp the hiring lead:</strong>{' '}
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1faa53] underline"
                  data-event="whatsapp_inline"
                  data-page={PAGE_SLUG}
                >
                  Message on WhatsApp
                </a>
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-surface-muted p-7 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />
    </>
  );
}
