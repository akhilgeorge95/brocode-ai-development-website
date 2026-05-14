import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { RelatedLinks } from '@/components/RelatedLinks';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'case-studies';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'd like to see anonymised case studies from your work in the GCC. Could you share the relevant ones for [my sector] and arrange a reference call?";

export const metadata: Metadata = {
  title: 'Customer Stories — Anonymised Outcomes | Brocode',
  description:
    '24 anonymised customer stories from Brocode AI engagements across UAE banking, government, healthcare, energy, manufacturing, retail, hospitality and education.',
  alternates: { canonical: '/insights/case-studies' },
  openGraph: {
    title: 'Customer Stories — Brocode Solutions',
    description: '24 anonymised case studies from UAE / GCC engagements, with quantified outcomes.',
    url: 'https://www.brocode.ae/insights/case-studies',
    images: ['/images/insights/insights-hub.jpg']
  },
  twitter: { card: 'summary_large_image', title: 'Customer Stories — Brocode' }
};

const STORIES = [
  { sector: 'Banking', headline: 'Anti-money-laundering scoring engine for a UAE Tier-1 bank', outcome: 'False-positive rate cut by 38 %; investigation handle time reduced by 41 %.' },
  { sector: 'Government', headline: 'Arabic correspondence triage for a federal authority', outcome: '1.2 M documents processed; 96.4 % field-level accuracy on handwritten Arabic.' },
  { sector: 'Healthcare', headline: 'Clinical decision support inside a JCI-accredited group', outcome: '11-second median radiology pre-read; sepsis early-warning 4.7 hours sooner.' },
  { sector: 'Retail', headline: 'Demand forecasting through Ramadan and Eid windows', outcome: 'Stock-out rate down 27 %; full-price sell-through up 6.3 percentage points.' },
  { sector: 'Manufacturing', headline: 'Computer-vision defect detection on a regional steel line', outcome: 'Inspector time down 64 %; escaped defects reduced by 81 %.' },
  { sector: 'Energy', headline: 'Predictive maintenance for refinery rotating equipment', outcome: '14 unplanned trips avoided in 9 months; mean-time-between-failure +37 %.' },
  { sector: 'Real estate', headline: 'Off-plan valuation model for a Dubai developer', outcome: 'Median valuation error reduced from 7.2 % to 2.1 %; sales-cycle 19 days shorter.' },
  { sector: 'Logistics', headline: 'Cross-border lane optimisation for a GCC 3PL', outcome: 'Fuel cost down 11 %; on-time-in-full up 8.4 percentage points.' },
  { sector: 'Education', headline: 'Arabic adaptive learning for a UAE school group', outcome: 'Year-on-year MAP-test gain 18 % above the control cohort.' },
  { sector: 'Hospitality', headline: 'Dynamic pricing during Hajj and Ramadan for a luxury group', outcome: 'RevPAR uplift 12.3 %; ADR uplift 8.9 % vs prior-year comparable.' },
  { sector: 'Conversational AI', headline: 'Khaleeji-tuned assistant for a UAE telco contact centre', outcome: 'Containment 62 % on Arabic chat; AHT down 41 % on Khaleeji voice.' },
  { sector: 'MLOps', headline: 'MLOps platform build for a sovereign tech holding', outcome: 'Model deployment cycle 19 days → 1.7 days; rollback time 4 hours → 6 minutes.' }
];

const PROOF = [
  { value: '24', label: 'Anonymised customer stories on file' },
  { value: '11', label: 'Industries represented' },
  { value: '3', label: 'Reference calls per qualified prospect' },
  { value: '100 %', label: 'NDA-cleared before any data is shared' }
];

const relatedItems = [
  { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Co-authored research with regional operators.' },
  { label: 'Practitioner guides', href: '/insights/guides', description: 'Twelve long-form engineering guides.' },
  { label: 'AI glossary', href: '/insights/glossary', description: 'A curated 240-term reference.' },
  { label: 'Commercial FAQs', href: '/insights/faqs', description: '40 written answers on pricing, IP, residency, hand-over.' },
  { label: 'Contact', href: '/contact', description: 'Talk to a named human about an engagement.' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Brocode AI Customer Stories',
  url: 'https://www.brocode.ae/insights/case-studies',
  isPartOf: { '@type': 'WebSite', name: 'Brocode Solutions', url: 'https://www.brocode.ae' }
};

export default function CaseStudiesPage() {
  return (
    <>
      <Script id="case-studies-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" className="opacity-60" />
        <div className="container-site relative z-10 py-24 md:py-30">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Insights', href: '/insights' },
              { label: 'Customer stories' }
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Customer stories</p>
            <h1 className="mt-4 text-balance text-display-xl font-semibold leading-[1.05]">
              Twenty-four anonymised case studies, with the numbers attached.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Our customers are heavily regulated institutions, so headline case studies are mostly
              anonymous in public. The detailed version — including the reference call — is shared
              under NDA once we have a sense of your sector and use case.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact">Request the full stories under NDA</MagneticButton>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={SLUG}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp the team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-12">
        <div className="container-site">
          <ProofBand items={PROOF} variant="dark" />
        </div>
      </section>

      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="A sample of the catalogue"
            title="Twelve representative stories from across the GCC."
            description="Each is one of dozens we maintain in detail. The numbers below are public; the underlying client identity and methodology pack are shared under NDA."
          />
          <div className="mt-12">
            <BentoGrid>
              {STORIES.map((s, i) => (
                <BentoCell key={s.headline} span={i % 3 === 0 ? 'lg' : 'md'} variant="light">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{s.sector}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-900">{s.headline}</h3>
                  <p className="mt-3 text-sm text-ink-700">{s.outcome}</p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Get the case-study brief for your sector"
            description="Tell us your sector and we will share three NDA-cleared case studies relevant to your business — typically within one working day."
            contents={[
              'Three case studies relevant to your sector',
              'Quantified outcomes with methodology',
              'A reference-call introduction if applicable',
              'A 30-minute architecture review with the lead engineer'
            ]}
            filePath="/downloads/insights-sampler.pdf"
            ctaLabel="Send me the case-study brief"
            industries={[
              'Banking', 'Government', 'Healthcare', 'Retail', 'Manufacturing',
              'Real estate', 'Energy', 'Logistics', 'Education', 'Hospitality', 'Telecom'
            ]}
          />
        </div>
      </section>

      <RelatedLinks items={relatedItems} />
    </>
  );
}
