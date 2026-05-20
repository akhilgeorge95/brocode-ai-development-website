import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink, SITE } from '@/lib/site';
import { QATARI_CITIES, getQatariCityBySlug, type QatariCity } from '@/data/qatar-cities';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return QATARI_CITIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const city = getQatariCityBySlug(params.slug);
  if (!city) return {};
  const pageUrl = `${SITE.url}/qatar/${city.slug}`;
  const title = `AI Development Company in ${city.name}, Qatar | Brocode`;
  return {
    title,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        'en-QA': pageUrl,
        'en-AE': pageUrl,
        'en-GB': pageUrl,
        'ar-QA': pageUrl,
        'x-default': pageUrl
      }
    },
    openGraph: {
      title,
      description: city.metaDescription,
      url: pageUrl,
      locale: 'en_QA',
      alternateLocale: ['en_AE', 'en_GB', 'ar_QA'],
      images: ['/images/general/og-default.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Production AI for ${city.name}. ${city.region}. Engineering depth in the State of Qatar, not slideware.`,
      images: ['/images/general/og-default.jpg']
    }
  };
}

const sharedProofItems = [
  { value: '120+', label: 'AI systems shipped to production across the GCC' },
  { value: '32', label: 'Regulated GCC enterprises served — incl. Qatari banks, ministries, energy' },
  { value: '4.1m', label: 'Months median time-to-first-production-system' },
  { value: '99.95%', label: 'Average model-serving uptime' }
];

const sharedCompareRows: CompareRow[] = [
  {
    feature: 'Named engineers on every engagement',
    brocode: true,
    competitors: ['Partners visible, engineers not', 'Offshore bench, no in-region residency', 'Global PSO bench, US-billed']
  },
  {
    feature: 'Time-to-first-production-system (median, Qatar)',
    brocode: '4.1 months',
    competitors: ['9.7 months', '7.3 months', '6.9 months'],
    note: 'Source: 27-enterprise GCC shortlist benchmark, 2024-2025 (Qatar sub-sample of 6).'
  },
  {
    feature: 'QAR billing and Qatar-compatible agreement option',
    brocode: true,
    competitors: [true, 'Often signed via reseller', 'US or Ireland entity']
  },
  {
    feature: 'In-country and PDPL-aligned sovereign-cloud delivery',
    brocode: 'Default',
    competitors: ['Available, often costed-up', 'Limited', 'Single-cloud only']
  },
  {
    feature: 'Arabic engineering depth (MSA + Qatari dialect)',
    brocode: 'In-region linguists, fine-tuned models, ALLaM-ready',
    competitors: ['Limited regional NLP team', 'Some MSA, little dialect', 'Generic models only']
  },
  {
    feature: 'Rate vs Big-4 published GCC card',
    brocode: '45-55%',
    competitors: ['100% (baseline)', '30-45%', '70-90%']
  },
  {
    feature: 'ISO 27001 + SOC 2 Type II + ISO 42001 + PDPL alignment',
    brocode: true,
    competitors: [true, 'Partial', 'Partial']
  }
];

const sharedBaseFaqs: FAQItem[] = [
  {
    question: 'Do you sell any AI products, SaaS, or licensed models?',
    answer:
      'No. Brocode Solutions is a services firm. We do not sell a Brocode platform, a Brocode-branded model, an API subscription, or a SaaS tenancy. Every system we build for you uses open-source frameworks and portable commercial software you license directly from the vendor. The code, the models, the weights, and the infrastructure belong to you on creation — and the engineered handover to your team is part of the standard deliverable, not a separate workstream.'
  },
  {
    question: 'How do you handle Qatar PDPL, QCB / QFCRA model risk and NCSA-NIA alignment?',
    answer:
      'Sovereign deployment inside the State is our default — Microsoft Azure Qatar, Google Cloud Doha, Ooredoo Cloud and on-premise tenancies are all in our deployment library. Customer-managed keys via Thales or Entrust HSM is standard. Every engagement ships a PDPL DPIA aligned to Law No. 13 of 2016, a QCB-style model risk file where applicable (and QFCRA-aligned for QFC firms), an NCSA National Information Assurance controls mapping, and an MCIT / Qatar National AI Strategy cross-walk. We publish the deployment pattern for your environment in the discovery phase.'
  },
  {
    question: 'Where do you sit on the procurement landscape — Big-4 alternative or niche specialist?',
    answer:
      'We are a regional specialist with depth across eight service lines, audited to ISO 27001 and SOC 2 Type II, and priced at 45 to 55 percent of Big-4 published GCC rate cards. We are not the right partner for a 50-country simultaneous rollout or for pure regulated-audit-firm work. The comparison matrix in our buyer guide tells you when to call us and when not to.'
  },
  {
    question: 'What does a typical Qatari engagement look like and how long does it take?',
    answer:
      'A discovery is four weeks, fixed-scope and fixed-price. A first production system is twelve weeks from kickoff for most ML and NLP work. A regulator-aligned handover pack — PDPL DPIA against Law No. 13 of 2016, model card, datasheet, NCSA-NIA mapping, QCB / QFCRA-style model risk file when applicable — is part of the standard deliverable, not a separate workstream.'
  }
];

const serviceTileTemplate = (city: QatariCity) => [
  {
    title: 'Document intelligence',
    href: '/services/document-intelligence',
    angle: `Arabic OCR, KYC and contract extraction at ${city.name} enterprise scale.`,
    result: 'Pre-contract free 500-document benchmark on your data.'
  },
  {
    title: 'NLP and Arabic',
    href: '/services/natural-language-processing',
    angle: 'MSA and Qatari-dialect NLP with AraBERT-v2, CAMeLBERT, Jais and ALLaM.',
    result: 'Open benchmark on eight models published quarterly.'
  },
  {
    title: 'Conversational AI',
    href: '/services/conversational-ai-chatbots',
    angle: `Contact-centre assistants that survive Qatari-dialect calls in ${city.name}.`,
    result: 'Contractual containment SLAs, not lab demos.'
  },
  {
    title: 'Machine learning development',
    href: '/services/machine-learning-development',
    angle: 'Models that pass QCB and QFCRA review and stay in production.',
    result: '12-week production path with named gates.'
  },
  {
    title: 'Deep learning',
    href: '/services/deep-learning-solutions',
    angle: 'Computer vision, time-series, and applied research at GPU scale.',
    result: 'On-premise DGX and H100 access in-country.'
  },
  {
    title: 'MLOps and infrastructure',
    href: '/services/mlops-ai-infrastructure',
    angle: `The operating backbone that keeps ${city.name} models earning their keep.`,
    result: 'Reference architectures for Microsoft Azure Qatar, Google Cloud Doha and Ooredoo Cloud.'
  },
  {
    title: 'Self-hosted LLM',
    href: '/services/self-hosted-llm-infrastructure',
    angle: 'Customer-owned LLM appliances with HSM-backed keys, hosted in-country.',
    result: '36-month TCO pack and hardware BoM included.'
  },
  {
    title: 'Responsible AI and governance',
    href: '/services/responsible-ai-governance',
    angle: 'Regulator-grade evidence files for QCB, QFCRA, NCSA-NIA, ISO 42001 and Qatar PDPL.',
    result: 'Model cards, datasheets, bias packs and PDPL DPIA as standard.'
  }
];

export default function QatarCityPage({ params }: { params: Params }) {
  const city = getQatariCityBySlug(params.slug);
  if (!city) notFound();

  const pageSlug = city.slug;
  const pagePath = `/qatar/${city.slug}`;
  const pageUrl = `${SITE.url}${pagePath}`;

  const whatsappMessage = `Hi Brocode — I'm exploring AI delivery partners for [organisation] in ${city.name}, Qatar. The first area we want to discuss is [document intelligence / Arabic NLP / chatbot / ML / deep learning / MLOps / generative AI / not sure yet]. Could we schedule a 30-minute call?`;

  const formConfig: PageFormConfig = {
    pageSlug,
    title: `Talk to an expert — ${city.name} desk`,
    subtitle: `One short qualification form. A senior engineer on our Qatar delivery desk — not an SDR — responds within one business day with a named contact and a proposed shape for the engagement in ${city.name}.`,
    ctaLabel: 'Talk to an expert',
    whatsappMessage,
    fields: [
      {
        name: 'primaryArea',
        label: 'Primary area of interest',
        type: 'multiselect',
        options: [
          'Document intelligence',
          'NLP and Arabic',
          'Conversational AI',
          'Machine learning',
          'Deep learning',
          'MLOps and infrastructure',
          'Self-hosted LLM',
          'Not sure yet — recommend'
        ]
      },
      {
        name: 'organisationType',
        label: 'Organisation type',
        type: 'select',
        options: [
          'Bank or financial services (QCB-supervised)',
          'QFC firm (QFCRA-regulated)',
          'Capital markets (QFMA-supervised)',
          'Telecom (CRA-supervised)',
          'Government or public sector (MCIT / Qatar National AI Strategy aligned)',
          'Energy or utilities (QatarEnergy / Ras Laffan LNG / Kahramaa)',
          'Healthcare (MOPH-supervised)',
          'Aviation (Qatar Airways / Hamad International Airport)',
          'Retail or consumer',
          'Logistics or ports',
          'Real estate (Lusail / The Pearl / Msheireb)',
          'Sports, events or tourism',
          'Education or research (Qatar Foundation / Education City)',
          'Qatar National Vision 2030 programme',
          'Family office or holding',
          'Other'
        ],
        required: true
      },
      {
        name: 'engagementHorizon',
        label: 'Engagement horizon',
        type: 'select',
        options: [
          'Scoping in the next 30 days',
          'Next 90 days',
          'Next 6 months',
          'Exploratory only'
        ],
        required: true
      },
      {
        name: 'budgetBand',
        label: 'Approximate budget band',
        type: 'select',
        options: [
          '<QAR 500K',
          'QAR 500K to 2M',
          'QAR 2M to 5M',
          'QAR 5M to 15M',
          '>QAR 15M',
          'Not yet defined'
        ]
      },
      {
        name: 'dataResidency',
        label: 'Data residency requirement',
        type: 'select',
        options: [
          'Must stay in Qatar (PDPL Law No. 13 of 2016)',
          'GCC acceptable',
          'Global cloud acceptable',
          'Not yet defined'
        ]
      },
      {
        name: 'referralSource',
        label: 'How did you hear about Brocode?',
        type: 'text',
        placeholder: 'Referral / Google / LinkedIn / analyst / event'
      }
    ]
  };

  const serviceTiles = serviceTileTemplate(city);
  const faqItems: FAQItem[] = [...city.cityFaq, ...sharedBaseFaqs];

  const relatedCities = city.relatedCitySlugs
    .map((s) => getQatariCityBySlug(s))
    .filter((c): c is QatariCity => Boolean(c));

  const relatedLinks = [
    {
      label: 'AI development in Qatar (country overview)',
      href: '/qatar/ai-development-in-qatar',
      description: 'The State-wide page — QCB, QFCRA, NCSA-NIA, Qatar PDPL and the 12-week production path.'
    },
    ...relatedCities.slice(0, 2).map((c) => ({
      label: `AI development in ${c.name}`,
      href: `/qatar/${c.slug}`,
      description: `${c.economicSnapshot.split('—')[0].trim()}.`
    })),
    {
      label: 'Why Brocode',
      href: '/why-brocode',
      description: 'Side-by-side comparison vs Big-4, offshore, hyperscaler PSO and DIY.'
    },
    {
      label: city.sectorAngles[0].name,
      href: city.sectorAngles[0].href,
      description: city.sectorAngles[0].angle
    }
  ];

  return (
    <>
      <Script
        id={`ld-${pageSlug}`}
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': ['Organization', 'ProfessionalService'],
              '@id': `${SITE.url}/#organization`,
              name: SITE.name,
              alternateName: ['Brocode AI', 'Brocode AI Development'],
              url: SITE.url,
              logo: `${SITE.url}/images/general/og-default.jpg`,
              image: `${SITE.url}/images/general/og-default.jpg`,
              email: SITE.email,
              telephone: SITE.phone,
              priceRange: 'QAR 500K - QAR 15M+',
              foundingDate: SITE.foundingDate,
              openingHours: SITE.openingHours,
              description: city.metaDescription,
              address: {
                '@type': 'PostalAddress',
                streetAddress: `${SITE.hq.line1}, ${SITE.hq.line2}`,
                addressLocality: SITE.hq.city,
                addressRegion: SITE.hq.region,
                addressCountry: SITE.hq.countryCode
              },
              areaServed: [
                { '@type': 'City', name: city.name, containedInPlace: { '@type': 'Country', name: 'Qatar', identifier: 'QA' } },
                { '@type': 'AdministrativeArea', name: city.region },
                { '@type': 'Country', name: 'Qatar', identifier: 'QA' }
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: SITE.phone,
                  email: SITE.email,
                  areaServed: ['QA', 'AE', 'SA', 'OM', 'BH', 'KW'],
                  availableLanguage: ['English', 'Arabic']
                }
              ],
              sameAs: [SITE.social.linkedin, SITE.social.github, SITE.social.twitter, SITE.social.youtube]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${pageUrl}#webpage`,
              url: pageUrl,
              name: `AI Development Company in ${city.name}, Qatar | Brocode`,
              inLanguage: ['en-QA', 'en-AE', 'ar-QA'],
              isPartOf: { '@id': `${SITE.url}/#website` },
              about: {
                '@type': 'Thing',
                name: `AI development services for enterprises in ${city.name}, ${city.region}, Qatar`
              },
              primaryImageOfPage: `${SITE.url}/images/general/og-default.jpg`
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'AI Development',
              name: `AI Development in ${city.name}, Qatar`,
              provider: { '@id': `${SITE.url}/#organization` },
              areaServed: {
                '@type': 'City',
                name: city.name,
                containedInPlace: { '@type': 'Country', name: 'Qatar', identifier: 'QA' }
              },
              audience: {
                '@type': 'BusinessAudience',
                name: `${city.name} enterprises across ${city.sectorAngles.map((s) => s.name.toLowerCase()).join(', ')}`
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'QAR',
                priceRange: 'QAR 500K - QAR 15M+',
                availability: 'https://schema.org/InStock'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'Qatar', item: `${SITE.url}/qatar/ai-development-in-qatar` },
                { '@type': 'ListItem', position: 3, name: city.name, item: pageUrl }
              ]
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

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">{city.heroEyebrow}</p>
              <h1 className="text-balance text-display-2xl">{city.heroH1}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                {city.heroLead}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Talk to an expert
                </MagneticButton>
                <MagneticButton href="#buyers-guide" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the buyer guide
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={pageSlug}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                >
                  WhatsApp us
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60">
                ISO 27001 · SOC 2 Type II · ISO 42001 · Qatar PDPL-aligned · NVIDIA Inception Premier · AWS Advanced Tier · Microsoft AI Partner
              </p>
            </div>

            <div className="lg:col-span-6">
              <BentoGrid>
                <BentoCell span="lg" variant="brand">
                  <Link href={city.sectorAngles[0].href} className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{city.sectorAngles[0].name}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{city.name} — production AI on day one.</h2>
                    <p className="mt-3 text-sm text-white/85">{city.sectorAngles[0].angle}</p>
                    <span className="link-arrow mt-4 inline-flex text-sm font-semibold text-white">Explore</span>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/natural-language-processing" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">NLP and Arabic</p>
                    <h2 className="mt-2 text-xl font-semibold">MSA and Qatari dialect.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      AraBERT-v2, CAMeLBERT, Jais and ALLaM — fine-tuned on a Qatari-dialect annotation lab.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="light">
                  <Link href={city.sectorAngles[1].href} className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{city.sectorAngles[1].name}</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">{city.region}.</h2>
                    <p className="mt-3 text-sm text-ink-700">{city.sectorAngles[1].angle}</p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="glass">
                  <Link href="/services/mlops-ai-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">MLOps</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">1,247 req/min.</h2>
                    <p className="mt-3 text-sm text-ink-700">
                      Live serving with vLLM, Triton, Ray and MLflow on Microsoft Azure Qatar, Google Cloud Doha and Ooredoo Cloud.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/self-hosted-llm-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Sovereign LLM</p>
                    <h2 className="mt-2 text-xl font-semibold">In-Qatar. HSM keys.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      Customer-owned LLM appliance. 8 x H100 SXM5. PDPL-aligned. 36-month TCO pack.
                    </p>
                  </Link>
                </BentoCell>
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-white py-16">
        <div className="container-site">
          <p className="eyebrow mb-8 text-center">A live view of what we ship</p>
          <ProofBand items={sharedProofItems} />
          <p className="mt-10 text-center text-xs text-ink-500">
            Numbers refreshed quarterly with delivery-lead sign-off. Buyer-guide source benchmark: 38-enterprise GCC re-tender sample, 2024-2025 (Qatar sub-sample of 8).
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">A different kind of AI partner for {city.name}</p>
              <h2 className="text-display-lg text-balance text-ink-900">
                A services firm, not a product company.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-600">
                We do not sell AI products, SaaS, licensed models, or branded platforms. We sell senior
                engineering time. Every engagement in {city.name} runs as a fixed-shape pod with named
                engineers, a written 12-week production path, and a PDPL- and QCB-aligned handover pack —
                and at the end, the system belongs to you.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed text-ink-700 md:text-2xl md:leading-relaxed">
                {city.positioningCopy}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {city.ownershipBullets.map((card) => (
                  <li key={card.t} className="rounded-2xl border border-ink-100 bg-surface-muted p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{card.t}</p>
                    <p className="mt-2 text-sm text-ink-700">{card.d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service bento routing */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Capability map"
            title={`Eight service lines. One accountable engineering org — delivering in ${city.name}.`}
            description={`Each tile routes to a service page with the named engineers, the reference architecture, a pre-contract benchmark offer, and the QAR rate band for ${city.name} delivery.`}
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceTiles.map((s, i) => (
              <li key={s.href}>
                <Reveal delay={i * 0.03}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{s.angle}</p>
                    <p className="mt-4 text-xs font-semibold text-brand">{s.result}</p>
                    <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">See service</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery model */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-30">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <Image src="/images/general/datacenter.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900" />
        </Parallax>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow={`The Brocode delivery model in ${city.name}`}
              title="A fixed-shape pod. A 12-week path. A PDPL- and QCB-ready handover."
              description={`Same model, same gates, same evidence — whether the work in ${city.name} is Arabic OCR for a Qatari ministry, a fraud model for a QCB-supervised bank, or a deep-learning programme on a QatarEnergy / Ras Laffan LNG asset.`}
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              { n: '01', t: 'Weeks 1-4 · Discovery', d: 'Data feasibility, KPI sign-off, reference architecture, PDPL DPIA aligned to Law No. 13 of 2016, NCSA-NIA mapping and QCB / QFCRA / MCIT review. Fixed scope, fixed price, Go/No-Go gate at week four.' },
              { n: '02', t: 'Weeks 5-8 · Hardened build', d: 'Production engineering on day one. Two-week increments. Pair-programming with two of your engineers in the pod. No notebooks shipped.' },
              { n: '03', t: 'Weeks 9-12 · Regulator-ready evidence', d: 'PDPL DPIA, model card, datasheet, bias and fairness pack, security review, NCSA-NIA control mapping, QCB / QFCRA-style model risk file when applicable, runbook and handover.' },
              { n: '04', t: 'Run phase', d: 'Optional managed-operations agreement with SLAs, retraining cadence and a quarterly model-risk review. Your team in the driving seat from day one of week thirteen.' }
            ].map((p) => (
              <Reveal key={p.n}>
                <div className="flex items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <span className="text-display-md text-brand">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.t}</h3>
                    <p className="mt-2 text-white/80">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific sector relevance */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow={`Sectors we serve in ${city.name}`}
            title={`Where AI moves the P&L for ${city.possessive} enterprises.`}
            description={city.economicSnapshot}
          />
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {city.sectorAngles.map((sector) => (
              <li key={`${sector.href}-${sector.name}`}>
                <Link
                  href={sector.href}
                  className="flex h-full flex-col rounded-2xl border border-ink-100 bg-surface-muted p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                >
                  <h3 className="text-base font-semibold text-ink-900">{sector.name}</h3>
                  <p className="mt-2 text-sm text-ink-600">{sector.angle}</p>
                  <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">Explore</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we compare */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow={`How we compare in ${city.name}`}
            title="Brocode vs Big-4, offshore and hyperscaler PSO."
            description="The procurement-committee version of the comparison — sourced cells, honest concessions, and a printable matrix in the buyer guide."
          />
          <div className="mt-10">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Big-4 consultancy', 'Offshore dev shop', 'Hyperscaler PSO']}
              rows={sharedCompareRows}
            />
          </div>
          <p className="mt-6 text-sm text-ink-500">
            See the side-by-side on six axes including DIY on{' '}
            <Link href="/why-brocode" className="text-brand underline">/why-brocode</Link>.
          </p>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="buyers-guide" className="bg-white py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={pageSlug}
            title="The GCC Enterprise AI Buyer's Guide 2026 — Qatar edition"
            description={`44 pages on how to choose between Big-4 consultancies, offshore dev shops, hyperscaler PSO and regional specialists for Qatari delivery — written by Brocode but vendor-agnostic in tone. Headline figure: the median cost of a vendor swap inside 24 months is QAR 4.1M and 7.2 months of lost delivery time, with 64% of swaps driven by compliance failure or absent engineers post-kickoff.`}
            filePath="/downloads/uae-enterprise-ai-buyers-guide.pdf"
            ctaLabel="Email me the buyer guide"
            contents={[
              `Procurement reality in ${city.name} and Qatar`,
              'In-country and PDPL-aligned deployment options',
              'QCB, QFCRA and NCSA-NIA model risk and governance',
              '46-question vendor checklist',
              'Six-month implementation rhythm',
              'Reference architectures for Microsoft Azure Qatar, Google Cloud Doha and Ooredoo Cloud'
            ]}
          />
        </div>
      </section>

      {/* Related Qatar cities — internal linking */}
      {relatedCities.length > 0 ? (
        <section className="border-y border-ink-100 bg-surface-muted py-14">
          <div className="container-site">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
              Production AI delivered across Qatar
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/qatar/${c.slug}`}
                    className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.region}</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink-900">AI development in {c.name}</h3>
                    <p className="mt-2 text-sm text-ink-600">{c.economicSnapshot.split('—')[0].trim()}.</p>
                    <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">Explore</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-ink-500">
              Looking for the State-wide overview?{' '}
              <Link href="/qatar/ai-development-in-qatar" className="text-brand underline">
                AI development in Qatar
              </Link>
              .
            </p>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={`Questions we hear from ${city.name} buyers`}
              title="The procurement-committee version of the FAQ."
              description={`These are the questions our delivery leads field most often from ${city.name} CIO offices, sector-regulated risk teams, and Qatari procurement reviewers.`}
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={`Talk to an expert — ${city.name} desk`}
              title="One short form. A senior engineer on the reply."
              description={`No SDR triage layer. The form below routes to the delivery principal covering ${city.name} accounts, who responds within one business day with a named contact and a proposed shape of the engagement.`}
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct:</strong> <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a></p>
              <p><strong className="text-ink-900">Phone:</strong> {SITE.phone}</p>
              <p><strong className="text-ink-900">GCC HQ:</strong> {SITE.hq.line1}, {SITE.hq.line2}, {SITE.hq.city}</p>
              <p><strong className="text-ink-900">{city.name} delivery:</strong> On-rotation engineering pods into {city.name}, {city.region}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />

      <StickyMobileBar whatsappMessage={whatsappMessage} primaryLabel="Talk to an expert" primaryHref="#contact-form" />
    </>
  );
}
