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
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink, SITE } from '@/lib/site';

const PAGE_SLUG = 'about';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm running vendor due diligence on Brocode for [organisation]. Could you put me in touch with your procurement contact for ISO certificates, DPA template and corporate-structure questions?";

export const metadata: Metadata = {
  title: 'About Brocode Solutions — UAE AI Engineering Firm',
  description:
    'Founded 2021. Headquartered in Abu Dhabi. ISO 27001 and SOC 2 Type II audited. Named founders, published team, transparent corporate structure for procurement due diligence.',
  alternates: { canonical: 'https://www.brocode.ae/about' },
  openGraph: {
    title: 'About Brocode Solutions — UAE AI Engineering Firm',
    description:
      'A UAE-headquartered AI engineering firm with named founders, audited compliance, and a published team. Built for enterprises that need to know exactly who they are buying from.',
    url: 'https://www.brocode.ae/about',
    images: ['/images/general/about-hero.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Brocode Solutions',
    description: 'UAE-headquartered. ISO 27001 + SOC 2 Type II. Named founders. Published team.',
    images: ['/images/general/about-hero.jpg']
  }
};

const proofItems = [
  { value: '2021', label: 'Year founded in Abu Dhabi' },
  { value: '85+', label: 'Engineers, researchers and designers' },
  { value: '2', label: 'UAE offices: Dubai and Abu Dhabi' },
  { value: '4', label: 'Independent audits (ISO 27001, SOC 2 II, ISO 42001, ISO 9001)' }
];

const founders = [
  {
    name: 'Saif Al Mansoori',
    role: 'Co-founder and Chief Executive',
    bio: 'Saif leads commercial and regulatory strategy at Brocode. Prior to founding Brocode in 2021, he spent eleven years across regional banking and the federal digital agenda, including senior roles inside two UAE federal authorities and a Tier-1 UAE bank. He has read every major UAE data-protection and AI policy paper from the regulator side, and signs every framework agreement personally.',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Dr Ayesha Khan',
    role: 'Co-founder and Chief Technology Officer',
    bio: 'Ayesha leads engineering and applied research. She holds a PhD in machine learning from a UK Russell-Group university and previously led production ML teams at a FAANG firm and a London-based AI scale-up. She wrote the first version of the Khaleeji NLP annotation standard that Brocode now contributes back to the open-source community, and chairs the model risk committee.',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Karthik Subramanian',
    role: 'Co-founder and Chief Operating Officer',
    bio: 'Karthik runs delivery, finance and people. Before Brocode, he spent eight years scaling delivery operations at a Big-4 firm in the GCC and three years at a regional family-office technology arm. He owns the published rate card, the published delivery rhythm and the post-engagement reference call programme — the three things procurement reviewers ask about first.',
    linkedin: 'https://www.linkedin.com/'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Who actually owns Brocode? Any UBO exposure we need to flag?',
    answer:
      'Brocode Solutions is privately held by its three named founders, each holding a disclosed equity percentage. There is no parent company, no sister entity in a sanctioned jurisdiction, and no PEP among the beneficial owners. A full ultimate-beneficial-owner declaration sits in the due-diligence pack, with a corporate-structure diagram and the trade-licence scan. We will sign a clean conflict-of-interest disclosure on request before any engagement.'
  },
  {
    question: 'Are you actually in the UAE, or is this an offshore shop with a registered agent in Dubai?',
    answer:
      'Brocode is a Dubai-mainland registered entity with an ADGM presence in Abu Dhabi. We hold a trade licence, a VAT registration, and a financial standing letter from a Tier-1 UAE bank — all available in the pack. The majority of senior engineering sits in the UAE. We are transparent about the delivery bench in Egypt and Pakistan for cost-tiered support work, which sits under UAE-signed DPAs and the same ISO 27001 SOA.'
  },
  {
    question: 'What is your financial standing and your continuity story if a founder leaves?',
    answer:
      'A bank-issued financial standing letter is available on request through the procurement contact. Our key-person continuity policy names a deputy for each founder, with a documented six-month transition plan tested annually. Insurance covers professional indemnity and cyber liability; the cover amount sits in the procurement pack. No single founder departure halts an engagement.'
  },
  {
    question: 'Do you sub-contract any of the work, and how do you flow your obligations down?',
    answer:
      'Roughly fifteen percent of delivery hours are performed by sub-processors — a named list is in the due-diligence pack and updated quarterly. Every sub-processor signs a back-to-back DPA aligned to our prime contract, sits inside the ISO 27001 Statement of Applicability, and is on the SOC 2 Type II audit scope where applicable.'
  },
  {
    question: 'Which insurance, dispute resolution and governing law do you contract under?',
    answer:
      'Default governing law is DIFC, with an arbitration seat in DIFC-LCIA. English law is the standard variant for international counterparties. Professional indemnity insurance is in place with a Tier-1 GCC carrier; cyber and tech E&O sit alongside. The cover amounts and policy summaries are in the MSA pack.'
  }
];

const relatedLinks = [
  { label: 'Why Brocode', href: '/why-brocode', description: 'Side-by-side comparison vs Big-4, offshore, hyperscaler PSO and DIY.' },
  { label: 'Security and compliance', href: '/security-compliance', description: 'ISO 27001 SOA, SOC 2 Type II report, sub-processor register, DPA template.' },
  { label: 'Contact a principal', href: '/contact', description: 'Named procurement contact, direct phone and WhatsApp.' },
  { label: 'Careers', href: '/careers', description: 'Open roles, published bands, relocation support.' },
  { label: 'Privacy policy', href: '/privacy-policy', description: 'UAE PDPL, GDPR and DIFC DP Law aligned DPA template.' }
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="ld-about"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/images/general/og-default.jpg`,
              foundingDate: '2021',
              address: {
                '@type': 'PostalAddress',
                streetAddress: SITE.hq.line1,
                addressLocality: SITE.hq.city,
                addressCountry: 'AE'
              },
              sameAs: [SITE.social.linkedin, SITE.social.github]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE.brand,
              url: SITE.url
            }
          ])
        }}
      />

      {/* Hero — grounded photographic */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/general/about-hero.jpg"
            alt="Senior engineers in the Brocode Dubai office during a working day"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/75 to-ink-900" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-28">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4 text-white/70">About Brocode Solutions</p>
            <h1 className="text-balance text-display-2xl">
              A UAE engineering firm built for procurement scrutiny.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Named founders. Published team. Audited compliance posture. A full due-diligence pack
              behind a single corporate-email gate — designed for the procurement reviewer's
              checklist, not for marketing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
                Founded 2021
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
                Dubai and Abu Dhabi
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
                ISO 27001 + SOC 2 Type II
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
                ISO 42001 attested
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-white py-16">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="text-display-lg text-balance text-ink-900">
                Founded in 2021 to close a specific gap.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-ink-700">
            <Reveal delay={0.05}>
              <p>
                Brocode Solutions was founded in 2021 by three principals who had spent the
                previous decade inside the regulators, the banks and the federal authorities of
                the UAE. They watched ambitious AI mandates outpace the regional engineering
                capacity to deliver them safely — and they watched the Big-4 sell strategy decks,
                the offshore shops fail compliance review, and the hyperscaler PSO teams bill in
                a foreign currency from a foreign entity.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We built a firm that could pass procurement on the first attempt. That meant
                three deliberate choices: name every senior engineer publicly, sit the legal
                entity inside the UAE under a Dubai-mainland licence with an ADGM presence, and
                run the same audit cycle the institutions we sell to run themselves — ISO 27001,
                SOC 2 Type II, ISO 42001 for AI management, and ISO 9001 for quality.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Today, Brocode runs production AI for Tier-1 UAE banks, federal authorities, a GCC
                telco, energy operators, JCI-accredited hospital groups and family-office
                holdings. The founders still sign every framework agreement personally, and the
                principal engineer you meet at the first call is the one who writes the code.
                Nothing about Brocode is a marketing claim — every line on this page is a line
                in the due-diligence pack below.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-30">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <Image src="/images/general/abu-dhabi-skyline.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/80 to-ink-900" />
        </Parallax>
        <div className="container-site grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-9 backdrop-blur">
              <p className="eyebrow mb-3 text-white/70">Mission</p>
              <h3 className="text-2xl font-semibold leading-snug">
                Make AI a dependable engineering discipline inside regulated UAE and GCC institutions.
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                We measure ourselves on systems running in production, not pitches won. The
                obsession is making the path from idea to live system shorter, safer, and more
                accountable for the institutions that sign in AED.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-9 backdrop-blur">
              <p className="eyebrow mb-3 text-white/70">Vision</p>
              <h3 className="text-2xl font-semibold leading-snug">
                A GCC where AI is built by the region, for the region — sovereign, bilingual, and trusted.
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                We back UAE Vision 2031 and the regional AI agenda with the engineering work that
                turns ambition into measurable outcomes — published benchmarks, named engineers
                and open contributions to the Khaleeji NLP and Arabic OCR research base.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Founders"
            title="Three named principals. Public profiles. No anonymous owners."
            description="Every founder is listed with photo, role, full LinkedIn and biography. UBO declaration is in the due-diligence pack."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {founders.map((f) => (
              <li key={f.name}>
                <Reveal>
                  <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-surface-muted p-8">
                    <div className="flex items-center gap-4">
                      <div className="grid h-16 w-16 flex-none place-items-center rounded-full bg-brand text-white text-xl font-semibold">
                        {f.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink-900">{f.name}</h3>
                        <p className="text-sm text-ink-600">{f.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-ink-700">{f.bio}</p>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand"
                    >
                      View LinkedIn profile
                    </a>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team principles — bento */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we organise the team"
            title="Six principles that shape the operating model."
            description="The procurement-relevant version of culture. Each principle is reflected in a contract clause, a controls register entry, or an audit obligation."
          />
          <div className="mt-12">
            <BentoGrid>
              <BentoCell span="lg" variant="brand">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Named engineers</p>
                <h3 className="mt-2 text-2xl font-semibold">Every senior engineer is publicly listed.</h3>
                <p className="mt-3 text-sm text-white/85">
                  Photo, role, country of residence, LinkedIn and (where relevant) GitHub or
                  Hugging Face profile. No anonymous benches. No "team of 50+ experts" claim
                  without the list.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">UAE residency</p>
                <h3 className="mt-2 text-xl font-semibold">Lead engineers sit in Dubai or Abu Dhabi.</h3>
                <p className="mt-3 text-sm text-white/80">
                  Disclosed delivery bench in Egypt and Pakistan, under UAE-signed DPAs.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="light">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Audited posture</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Four independent audits.</h3>
                <p className="mt-3 text-sm text-ink-700">
                  ISO 27001, SOC 2 Type II, ISO 42001 (AI management), ISO 9001 (quality). CSA STAR
                  registry entry refreshed annually.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="glass">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Senior on the ground</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">No remote-junior model.</h3>
                <p className="mt-3 text-sm text-ink-700">
                  Every engagement is led by a senior engineer accountable from kickoff to handover.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="light">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Knowledge transfer</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Handover is the project.</h3>
                <p className="mt-3 text-sm text-ink-700">
                  Two of your engineers pair-program inside the pod from week one. The system
                  belongs to you at week thirteen.
                </p>
              </BentoCell>
              <BentoCell span="lg" variant="dark">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Transparency by design</p>
                <h3 className="mt-2 text-2xl font-semibold">Published rate card, published delivery rhythm.</h3>
                <p className="mt-3 text-sm text-white/80">
                  We publish AED rate bands by role and seniority, named engagement gates, and the
                  reference-call programme. The buyer should be able to defend the choice of
                  Brocode in their procurement committee without redacting our pitch.
                </p>
              </BentoCell>
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Locations and corporate */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Locations and corporate structure"
            title="Two UAE offices. Disclosed delivery bench. UAE-signed contracts."
            description="The procurement reviewer can verify every line of this section against the trade licence and the corporate-structure diagram in the due-diligence pack."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { c: 'Abu Dhabi', a: 'Al Maryah Island, ADGM', t: 'Engineering and applied research' },
              { c: 'Dubai', a: 'DIFC Innovation Hub area', t: 'Global headquarters and commercial' },
              { c: 'Cairo and Alexandria', a: 'Egypt delivery bench', t: 'Disclosed sub-processor — cost-tiered support' },
              { c: 'Lahore and Karachi', a: 'Pakistan delivery bench', t: 'Disclosed sub-processor — cost-tiered support' }
            ].map((l) => (
              <li key={l.c}>
                <Reveal>
                  <div className="rounded-2xl border border-ink-100 bg-surface-muted p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{l.t}</p>
                    <p className="mt-3 text-xl font-semibold text-ink-900">{l.c}</p>
                    <p className="mt-1 text-sm text-ink-600">{l.a}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <p className="eyebrow mb-3">Legal entity</p>
              <h3 className="text-xl font-semibold text-ink-900">Brocode Solutions LLC</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Dubai mainland trade licence (number on request); ADGM commercial presence; UAE
                VAT-registered. Governing law on default MSA: DIFC, with an arbitration seat in
                DIFC-LCIA. English law variant available. Three founders are the only shareholders.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <p className="eyebrow mb-3">Insurance and continuity</p>
              <h3 className="text-xl font-semibold text-ink-900">Professional indemnity + cyber + tech E&O</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Tier-1 GCC carrier; cover amount in the procurement pack. Key-person continuity
                policy names a deputy for each founder, tested annually. Bank-issued financial
                standing letter from a Tier-1 UAE bank available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet — due diligence pack */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Brocode Vendor Due-Diligence Pack"
            description="Everything a procurement committee needs to clear a vendor approval in one pass. ISO 27001 certificate, SOC 2 Type II report letter, trade licence scan, VAT certificate, MSA template, DPA template, sample SoW, founder background-screening summary letter, and a corporate-structure diagram — mapped to the reviewer's standard 14-item checklist."
            filePath="/downloads/brocode-due-diligence-pack.pdf"
            ctaLabel="Email me the due-diligence pack"
            contents={[
              'Company overview and financials',
              'Engineering org chart',
              'Certifications: ISO 27001, SOC 2 Type II, ISO 42001',
              'Sub-processor list',
              'Insurance and contracting posture',
              'Sample references and case studies'
            ]}
            industries={[
              'Bank or financial services',
              'Government or public sector',
              'Telecom',
              'Energy',
              'Healthcare',
              'Other'
            ]}
          />
          <p className="mt-6 text-center text-sm text-ink-500">
            Procurement contact: <a href="mailto:procurement@brocode.ae" className="text-brand underline">procurement@brocode.ae</a>{' '}
            · {SITE.phone} · or message us on{' '}
            <a href={buildWhatsAppLink(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" data-event="whatsapp_inline" data-page={PAGE_SLUG} className="font-semibold text-[#1faa53] underline">WhatsApp</a>.
          </p>
        </div>
      </section>

      {/* FAQ for procurement */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ for procurement"
              title="The five questions reviewers ask us first."
              description="If your standard due-diligence checklist has a question that is not answered here, the procurement contact will reply within one business day."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Soft contact CTA */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-ink-100 bg-white p-10 md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-3">Direct procurement contact</p>
              <h2 className="text-display-md text-balance text-ink-900">
                Speak to a named procurement contact, not an info@ inbox.
              </h2>
              <p className="mt-4 text-ink-700">
                For ISO certificates, DPA template questions or corporate-structure clarifications,
                reach out directly. WhatsApp is read within UAE working hours; email replies sit
                under a one-business-day SLA.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                data-event="secondary_cta_click"
                data-page={PAGE_SLUG}
              >
                Email procurement
              </Link>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />
    </>
  );
}
