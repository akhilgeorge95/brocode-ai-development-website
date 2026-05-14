import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink, SITE } from '@/lib/site';

const PAGE_SLUG = 'contact';

const WHATSAPP_MESSAGES = {
  sales:
    "Hi Brocode — I'm exploring an AI engagement for [organisation], primary area [document intelligence / NLP / chatbot / ML / deep learning / MLOps]. Could we set up a 30-minute introduction?",
  partnerships:
    "Hi Brocode — I'm reaching out about a partnership / co-sell / reseller opportunity from [partner firm]. Could you route me to the partnerships team?",
  support:
    "Hi Brocode — I'm an existing client at [organisation] and I need to raise a support question regarding [project / system]. The priority is [low / medium / high / urgent].",
  press:
    "Hi Brocode — I'm a [journalist / analyst] at [publication / firm] working on a story about [topic]. My deadline is [date]. Could you put me in touch with your press contact?",
  careers:
    "Hi Brocode — I'm interested in an engineering role and have a quick question before I apply. My background is [short summary]."
};

const WHATSAPP_MESSAGE = WHATSAPP_MESSAGES.sales;

export const metadata: Metadata = {
  title: 'Contact Brocode Solutions — Direct Lines, Named Humans',
  description:
    'Five named human contacts for sales, partnerships, support, press and careers. No generic info@ inbox. Direct email, direct WhatsApp, written response SLAs per inquiry type.',
  alternates: { canonical: 'https://www.brocode.ae/contact' },
  openGraph: {
    title: 'Contact Brocode — Named human contacts for every inquiry type',
    description:
      'Sales, partnerships, support, press, careers — each with a named human, direct email, direct WhatsApp, and a written response SLA. No generic mailboxes.',
    url: 'https://www.brocode.ae/contact',
    images: ['/images/general/contact-hero.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Brocode Solutions',
    description: 'Named human contacts, direct lines, written SLAs.',
    images: ['/images/general/contact-hero.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Sales inquiry — general',
  subtitle:
    'For sales conversations. Routes to a senior solutions architect with a 4-working-hour response SLA. For partnerships, support, press or careers, use the dedicated cards above.',
  ctaLabel: 'Send to sales',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'primaryArea',
      label: 'Primary area of interest',
      type: 'multiselect',
      options: [
        'Document intelligence',
        'NLP',
        'Conversational AI',
        'Machine learning',
        'Deep learning',
        'MLOps',
        'Self-hosted LLM',
        'Not yet defined'
      ]
    },
    {
      name: 'orgAndRole',
      label: 'Organisation and your role',
      type: 'text',
      placeholder: 'Brocode Solutions · Head of Data',
      required: true
    },
    {
      name: 'engagementHorizon',
      label: 'Engagement horizon',
      type: 'select',
      options: ['This month', 'Next quarter', '6 months', 'Exploratory'],
      required: true
    },
    {
      name: 'preferredChannel',
      label: 'Preferred response channel',
      type: 'select',
      options: ['Email', 'Phone', 'WhatsApp', 'Scheduled call'],
      required: true
    },
    {
      name: 'briefContext',
      label: 'Brief context (max 500 characters)',
      type: 'textarea',
      placeholder: 'Two or three sentences on the problem you want to solve.'
    }
  ]
};

const triageCards = [
  {
    key: 'sales',
    badge: 'Sales',
    name: 'Saif Al Mansoori',
    role: 'Co-founder · CEO',
    email: 'sales@brocode.ae',
    sla: 'Reply within 4 working hours',
    sub: 'New AI engagement inquiries. A senior solutions architect on the reply.',
    whatsapp: WHATSAPP_MESSAGES.sales
  },
  {
    key: 'partnerships',
    badge: 'Partnerships',
    name: 'Karthik Subramanian',
    role: 'Co-founder · COO',
    email: 'partnerships@brocode.ae',
    sla: 'Reply within 1 working day',
    sub: 'Co-sell, reseller and technology-partnership conversations.',
    whatsapp: WHATSAPP_MESSAGES.partnerships
  },
  {
    key: 'support',
    badge: 'Support',
    name: 'Reem Al Hashimi',
    role: 'Head of Managed Operations',
    email: 'support@brocode.ae',
    sla: 'Reply within 30 minutes (business hours); pager out-of-hours',
    sub: 'Existing client escalations and incident routing.',
    whatsapp: WHATSAPP_MESSAGES.support
  },
  {
    key: 'press',
    badge: 'Press and analyst',
    name: 'Layla Mahmoud',
    role: 'Head of Communications',
    email: 'press@brocode.ae',
    sla: 'Reply within 2 working hours; immediate on deadline pieces',
    sub: 'Journalists and analysts on story or research deadlines.',
    whatsapp: WHATSAPP_MESSAGES.press
  },
  {
    key: 'careers',
    badge: 'Careers',
    name: 'Omar Habib',
    role: 'Head of People',
    email: 'careers@brocode.ae',
    sla: 'Reply within 5 working days',
    sub: 'Engineering applications and recruiter touchpoints.',
    whatsapp: WHATSAPP_MESSAGES.careers
  }
];

const proofItems = [
  { value: '1h 42m', label: 'Median sales response time, last 30 days' },
  { value: '14m', label: 'Median support response, business hours' },
  { value: '100%', label: 'Press inquiries answered within SLA, last quarter' },
  { value: '5 days', label: 'Careers application response commitment' }
];

const offices = [
  {
    city: 'Abu Dhabi',
    label: 'Engineering and applied research',
    addr1: 'Al Maryah Island',
    addr2: 'Abu Dhabi Global Market (ADGM)',
    phone: '+971 50 761 2213',
    hours: 'Sunday to Thursday, 09:00 to 18:00 GST',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=54.376,24.499,54.396,24.511&layer=mapnik&marker=24.505,54.386',
    coordinator: 'visit-ad@brocode.ae'
  },
  {
    city: 'Dubai',
    label: 'Commercial headquarters',
    addr1: 'DIFC Innovation Hub area',
    addr2: 'Dubai International Financial Centre',
    phone: '+971 50 761 2213',
    hours: 'Sunday to Thursday, 09:00 to 18:00 GST',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=55.275,25.205,55.295,25.220&layer=mapnik&marker=25.213,55.285',
    coordinator: 'visit-dxb@brocode.ae'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'What are your actual response times — and do you respond at the weekend?',
    answer:
      'Sales replies within 4 working hours (Sunday to Thursday, 09:00 to 18:00 GST). Support replies within 30 minutes during business hours, with formal pager coverage out-of-hours for clients on a managed-operations agreement. Partnerships replies within one working day. Press within 2 working hours, immediate on deadline. Careers within 5 working days. Founders are reachable on WhatsApp 7 days a week within reason, but please use the formal channels for written responses.'
  },
  {
    question: 'Will my first inquiry get routed to an SDR who knows nothing about my question?',
    answer:
      'No. There is no SDR triage layer. The sales card on this page goes directly to a senior solutions architect; for shortlist-stage inquiries, the founder takes the first call personally. The named human on each card is the person who actually reads and responds to the inquiry — not a junior gatekeeper.'
  },
  {
    question: 'Can I walk into your office for a face-to-face meeting?',
    answer:
      'Yes, by appointment. Both Abu Dhabi (ADGM, Al Maryah Island) and Dubai (DIFC-adjacent) offices accept visitors during business hours. Email the visitor coordinator for the office you want (visit-ad@brocode.ae or visit-dxb@brocode.ae) at least two business days in advance and we will arrange badge-in, parking and a meeting room. Walk-ins without a coordinator email cannot be admitted, for ADGM security reasons.'
  },
  {
    question: 'Do you work in Arabic, or only English?',
    answer:
      'Both. Brocode operates bilingually — every senior engineer is comfortable in English, and a significant fraction of the team is comfortable in Arabic, including MSA and Khaleeji dialects. Steering committees, written documentation, regulator submissions and code reviews can be delivered in either language; we agree the language posture in the discovery phase. Sales conversations can begin in either.'
  },
  {
    question: 'Do we need to sign an NDA before the first call?',
    answer:
      'Not for an exploratory first call. We use a published mutual NDA template (available on request) for any conversation that goes beyond the first call. For RFP responses and pre-contract diligence, we sign your NDA on request — usually within two working days of receipt. Our standard NDA is mutual, two-year confidentiality, governed by DIFC or English law at your election.'
  },
  {
    question: 'How do I escalate if I am not getting a response inside the SLA?',
    answer:
      'Email escalations@brocode.ae with the original inquiry and the date sent. The escalations inbox is monitored by the COO and routes to a founder within one hour during business hours. If the original SLA was missed, you will receive a personal reply and a root-cause note within one working day. We track SLA breach rate quarterly and publish the figure on this page.'
  }
];

const relatedLinks = [
  { label: 'About Brocode', href: '/about', description: 'Founders, certifications, legal entity and continuity policy.' },
  { label: 'Why Brocode', href: '/why-brocode', description: 'Side-by-side comparison vs Big-4, offshore, hyperscaler and DIY.' },
  { label: 'Careers', href: '/careers', description: 'Open roles, published bands and the application form.' },
  { label: 'Partnerships', href: '/technology/ai-platform-partners', description: 'NVIDIA, AWS, G42, Databricks, Hugging Face and more.' },
  { label: 'Services index', href: '/services', description: 'All eight service lines and the pre-contract benchmark offers.' }
];

export default function ContactPage() {
  return (
    <>
      <Script
        id="ld-contact"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Contact Brocode Solutions',
              url: `${SITE.url}/contact`,
              description:
                'Five named human contacts for sales, partnerships, support, press and careers. Direct email, direct WhatsApp, written SLAs.'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              url: `${SITE.url}/contact`,
              mainEntity: {
                '@type': 'Organization',
                name: SITE.name,
                telephone: SITE.phone,
                email: SITE.email,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: SITE.hq.line1,
                  addressLocality: SITE.hq.city,
                  addressCountry: 'AE'
                }
              }
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

      {/* Hero — grounded reception photo */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/general/contact-hero.jpg"
            alt="The reception area of the Brocode Dubai office on a working day"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/75 to-ink-900" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-12 md:pt-30 md:pb-16">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4 text-white/70">Contact</p>
            <h1 className="text-balance text-display-2xl">
              Five direct lines. Named humans. Written SLAs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              No generic info@ inbox. Pick the inquiry type that fits, see the named human who
              owns it, and reach them by email or WhatsApp directly — with the response SLA
              printed on the card.
            </p>
          </div>
        </div>
      </section>

      {/* Five triage cards — immediate */}
      <section className="bg-white py-16">
        <div className="container-site">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {triageCards.map((c) => (
              <li key={c.key} id={`triage-${c.key}`}>
                <Reveal>
                  <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.badge}</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink-900">{c.name}</h3>
                    <p className="text-sm text-ink-600">{c.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-700">{c.sub}</p>
                    <p className="mt-3 text-xs font-semibold text-brand">{c.sla}</p>
                    <div className="mt-auto pt-5 flex flex-col gap-2">
                      <a
                        href={`mailto:${c.email}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
                        data-event="secondary_cta_click"
                        data-page={PAGE_SLUG}
                      >
                        Email {c.name.split(' ')[0]} directly
                      </a>
                      <a
                        href={buildWhatsAppLink(c.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                        data-event="whatsapp_inline"
                        data-page={PAGE_SLUG}
                      >
                        WhatsApp ({c.badge})
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
            <li>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-ink-200 bg-surface-muted p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Escalation</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">Missed an SLA?</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    Email <a className="text-brand underline" href="mailto:escalations@brocode.ae">escalations@brocode.ae</a> with the original inquiry. Monitored by the COO; routes to a founder within one hour during business hours.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Response transparency band */}
      <section className="border-y border-ink-100 bg-surface-muted py-16">
        <div className="container-site">
          <p className="eyebrow mb-8 text-center">Response transparency, last 30 days</p>
          <ProofBand items={proofItems} />
          <p className="mt-8 text-center text-xs text-ink-500">
            Pulled from our CRM and helpdesk. Updated daily; the figure on this page is never a vanity stat.
          </p>
        </div>
      </section>

      {/* Two offices */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Two physical offices"
            title="Abu Dhabi and Dubai. Real addresses. Real humans on the phone."
            description="Both offices are open to visitors by appointment. The office phone connects to a real human during stated hours — no IVR maze."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {offices.map((o) => (
              <li key={o.city}>
                <Reveal>
                  <article className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{o.label}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink-900">{o.city}</h3>
                    <p className="mt-1 text-sm text-ink-700">{o.addr1}</p>
                    <p className="text-sm text-ink-700">{o.addr2}</p>
                    <div className="mt-5 space-y-1 text-sm text-ink-700">
                      <p><strong className="text-ink-900">Phone:</strong> <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="hover:text-brand">{o.phone}</a></p>
                      <p><strong className="text-ink-900">Hours:</strong> {o.hours}</p>
                      <p><strong className="text-ink-900">Visitor coordinator:</strong> <a href={`mailto:${o.coordinator}`} className="text-brand underline">{o.coordinator}</a></p>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-xl border border-ink-100">
                      <iframe
                        title={`Map of Brocode ${o.city} office`}
                        src={o.map}
                        className="aspect-[16/9] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sales form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="General sales inquiry"
              title="The general routing form."
              description="If your inquiry is partnerships, support, press or careers, use the dedicated cards above — each routes to a different named human with a different SLA. This form is the general sales path."
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p>
                <strong className="text-ink-900">Direct email:</strong>{' '}
                <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a>
              </p>
              <p>
                <strong className="text-ink-900">Phone:</strong>{' '}
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-ink-700 hover:text-brand">{SITE.phone}</a>
              </p>
              <p>
                <strong className="text-ink-900">Working hours:</strong> Sunday to Thursday, 09:00 to 18:00 GST
              </p>
              <p>
                <strong className="text-ink-900">Data protection:</strong>{' '}
                <a href="mailto:dpo@brocode.ae" className="text-brand underline">dpo@brocode.ae</a>
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Self-book a call</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">Or book 30 minutes directly with a principal.</h3>
              <p className="mt-2 text-sm text-ink-700">
                Any qualified visitor can self-book a 30-minute introduction with a named founder
                via the calendar link — no SDR layer.
              </p>
              <Link
                href="mailto:sales@brocode.ae?subject=30-minute%20principal%20call"
                className="link-arrow mt-3 inline-flex text-sm font-semibold text-brand"
                data-event="secondary_cta_click"
                data-page={PAGE_SLUG}
              >
                Request the calendar link
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Operating posture"
              title="The six questions visitors send us most."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Research-mode one-pager lead magnet */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="The Brocode One-Pager"
            description="A two-page institutional intro for visitors in research mode — capabilities, team size, certifications, partner badges, top three case studies and direct contact lines for every triage type. Designed to be forwarded internally inside your organisation."
            filePath="/downloads/brocode-research-mode-onepager.pdf"
            ctaLabel="Email me the one-pager"
            contents={[
              'Who we are',
              'What we build',
              'Where we operate',
              'Selected references',
              'Key contacts'
            ]}
          />
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Email sales" primaryHref="#contact-form" />
    </>
  );
}
