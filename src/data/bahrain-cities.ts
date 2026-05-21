/**
 * Per-city SEO and content data for the /bahrain/ai-development-in-[city] pages.
 *
 * Each entry drives a fully SEO-optimised landing page for a Bahraini city. The
 * page template lives at src/app/bahrain/[slug]/page.tsx and is rendered statically
 * via generateStaticParams.
 */

export type BahrainiCity = {
  slug: string;
  name: string;
  possessive: string;
  region: string;
  economicSnapshot: string;
  heroH1: string;
  heroLead: string;
  heroEyebrow: string;
  metaDescription: string;
  keywords: string[];
  sectorAngles: { name: string; href: string; angle: string }[];
  positioningCopy: string;
  ownershipBullets: { t: string; d: string }[];
  cityFaq: { question: string; answer: string }[];
  relatedCitySlugs: string[];
};

const sharedNlpKeywords = (city: string) => [
  `AI development company ${city}`,
  `AI development ${city}`,
  `artificial intelligence company ${city}`,
  `machine learning company ${city}`,
  `generative AI ${city}`,
  `AI consulting ${city}`,
  `enterprise AI ${city}`,
  `MLOps ${city}`,
  `Arabic NLP company ${city}`,
  `LLM development ${city}`,
  `deep learning company ${city}`,
  `computer vision company ${city}`,
  `AI software development ${city}`,
  `AI integration services ${city}`,
  `AI governance ${city}`
];

export const BAHRAINI_CITIES: BahrainiCity[] = [
  // ============================================================
  // CAPITAL GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-manama',
    name: 'Manama',
    possessive: "Manama's",
    region: 'Capital Governorate',
    economicSnapshot:
      "Bahrain's capital and the regulatory, financial and government centre of the Kingdom — home to the Central Bank of Bahrain, the Bahrain Bourse, the largest Bahraini banks (NBB, BBK and peers), ministerial headquarters, iGA, the Bahrain Financial Harbour and the headquarters of most Bahrain Economic Vision 2030 programmes.",
    heroEyebrow: 'AI engineering for Manama',
    heroH1: 'Production AI for Manama.',
    heroLead:
      "We build the AI systems that Manama's regulators, banks, insurers, Bahrain Bourse-listed firms, Bahrain-Financial-Harbour tenants, ministries, telecom operators and Vision 2030 programme offices actually put into production — staffed by named senior engineers, priced in BHD, and aligned to CBB Rulebook, iGA, NHRA, NCSC and Bahrain PDPL (Law No. 30 of 2018) from day one.",
    metaDescription:
      "AI development company in Manama — production AI for CBB-supervised banks and insurers, Bahrain Bourse-listed firms, Bahrain Financial Harbour tenants, Bahraini ministries, telecom operators and Vision 2030 programme offices. Named engineers, PDPL-aligned sovereign deployment on AWS Middle East (Bahrain), Arabic NLP depth, BHD billing and a 12-week production path.",
    keywords: [
      ...sharedNlpKeywords('Manama'),
      'AI development company Bahrain capital',
      'Manama AI services',
      'CBB Rulebook model risk AI Manama',
      'Bahrain Bourse AI',
      'Bahrain Financial Harbour AI',
      'iGA AI Manama',
      'NCSC AI Manama',
      'AWS Bahrain region AI Manama',
      'AI for NBB',
      'AI for BBK'
    ],
    sectorAngles: [
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'CBB Rulebook model risk files, AML, fraud and credit AI for Manama-headquartered banks and insurers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'iGA-aligned and national-AI-strategy-mapped AI for ministries and authorities in Manama.' },
      { name: 'Capital markets', href: '/industries/banking-financial-services', angle: 'Surveillance, NLP and analytics for Bahrain Bourse issuers and asset managers headquartered at the Bahrain Financial Harbour.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for Manama hospital networks and NHRA-aligned providers.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Manama CBD developers and Bahrain Bay programme sponsors.' }
    ],
    positioningCopy:
      'Manama is where the procurement-committee bar is highest in the Kingdom — and where CBB Rulebook, iGA, NCSC and NHRA expectations land first. We arrive with the evidence pack already drafted: PDPL DPIA against Law No. 30 of 2018, CBB Rulebook-style model risk file, NCSC controls mapping, and a written 12-week production path that fits inside the steering-committee cadence Manama boards run on.',
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Manama banks, insurers, Bahrain Bourse and ministry programmes.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Manama team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you deliver inside CBB Rulebook, NCSC and Bahrain PDPL expectations for a Manama-headquartered entity?',
        answer:
          'Yes. Every Manama engagement ships a PDPL Data Protection Impact Assessment aligned to Law No. 30 of 2018, a CBB Rulebook-style model risk file where the entity is CBB-supervised (covering banking, insurance and capital-markets volumes as relevant), an NCSC controls mapping, and an iGA / national-AI cross-walk. We draft the evidence pack alongside the build — not as a separate workstream after the fact.'
      },
      {
        question: 'Do you co-deliver with a Bahrain-registered partner when a Manama sponsor requires one?',
        answer:
          'Yes. Where a Manama procurement office requires a Bahrain-registered counterparty (common for ministerial entities and CBB-supervised banks), we co-deliver with a vetted Bahrain-resident partner under a transparent flow-down agreement. Brocode engineers remain named on the work; the local partner provides the contracting entity and any required in-country personnel commitments.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muharraq', 'ai-development-in-sitra', 'ai-development-in-jidhafs']
  },
  {
    slug: 'ai-development-in-sitra',
    name: 'Sitra',
    possessive: "Sitra's",
    region: 'Capital Governorate',
    economicSnapshot:
      'A Capital-Governorate island just south of Manama — home to the Bapco refinery, the Sitra Industrial Area, the Sitra Port and tank-farm operations, and a long-established cluster of downstream-petrochemicals and industrial-services activity at the heart of Bahraini industry.',
    heroEyebrow: 'AI engineering for Sitra',
    heroH1: 'Production AI for Sitra.',
    heroLead:
      "We build the AI systems that Sitra's Bapco refinery operators, downstream-petrochemicals manufacturers, Sitra Port and tank-farm operators and industrial-services contractors actually put into production — staffed by named senior engineers, priced in BHD, and aligned to CBB Rulebook (where finance is in scope), iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Sitra — production AI for the Bapco refinery, downstream-petrochemicals manufacturers, Sitra Port and industrial-services contractors. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sitra'),
      'AI for Bapco refinery',
      'AI for Sitra Industrial Area',
      'AI for Sitra Port',
      'industrial AI Bahrain Sitra',
      'AI for petrochemicals Bahrain'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for the Bapco refinery and Sitra downstream operations.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for Sitra downstream-petrochemicals and industrial operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Tank-farm, port and product-distribution AI for Sitra refinery and industrial-services operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Sitra Industrial Area authority operational AI and Capital-Governorate industrial-zone analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Sitra industrial zone.' }
    ],
    positioningCopy:
      "Sitra is the industrial heart of Bahrain — and the AI brief is industrial-grade by definition. Plants run 24/7. Process safety is non-negotiable. The historian and SCADA stack is dense. We arrive with senior industrial-AI engineers, reference architectures against the Bapco-refinery and downstream-operator stacks, and a 12-week production path that integrates with your HAZOP and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sitra refinery, petrochemicals and port teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sitra plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of a Sitra / Bapco refinery operating environment?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific Sitra environment in the discovery phase.'
      },
      {
        question: 'How do you handle process safety and management-of-change for AI in a Sitra refinery?',
        answer:
          'Every industrial AI we build for Sitra clients integrates with your existing HAZOP and management-of-change regime. We document failure-mode and effects analysis on the AI decision boundary, build operator-override fallbacks on confidence drops, and align the model evidence pack to IEC 61511 / IEC 61508 functional-safety expectations.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-manama', 'ai-development-in-tubli', 'ai-development-in-awali']
  },
  {
    slug: 'ai-development-in-jidhafs',
    name: 'Jidhafs',
    possessive: "Jidhafs's",
    region: 'Capital Governorate',
    economicSnapshot:
      "A dense Capital-Governorate residential and commercial belt west of Manama — historically a fishing-and-services town, now a major SME, retail and family-business catchment for the wider Manama metropolitan area.",
    heroEyebrow: 'AI engineering for Jidhafs',
    heroH1: 'Production AI for Jidhafs.',
    heroLead:
      "We build the AI systems that Jidhafs's retail and family-business groups, services SMEs, residential developers and Capital-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Jidhafs — production AI for Capital-Governorate retail and family-business operators, services SMEs, residential developers and municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jidhafs'),
      'AI for Jidhafs retail',
      'AI for SME Bahrain Jidhafs',
      'AI for Capital Governorate Bahrain'
    ],
    sectorAngles: [
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting, footfall analytics and Arabic conversational AI for Jidhafs retail and family-business operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Jidhafs developers and Capital-Governorate landlords.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Capital-Governorate municipality AI for Jidhafs civic-services and SME-support programmes.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI from the Manama commercial belt into Jidhafs residential catchments.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Jidhafs health-centre operators.' }
    ],
    positioningCopy:
      "Jidhafs is a working SME-and-retail belt right next to Manama. The AI brief is footfall, demand AI for consumer-facing operators, residential PropTech and last-mile efficiency. We arrive with templates calibrated for SME and family-business operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jidhafs retail, services and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Jidhafs operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to SME-size budgets typical of Jidhafs operators?',
        answer:
          'Yes. Jidhafs-scale engagements are typically sub-BHD-200K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you handle multilingual conversational AI for the Jidhafs consumer base?',
        answer:
          'Yes. Every consumer-facing AI we build for Jidhafs runs MSA Arabic, Bahraini-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, Tagalog and Bengali layers tuned to the local consumer mix. We benchmark per-language intent-recognition accuracy in discovery.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-manama', 'ai-development-in-budaiya', 'ai-development-in-tubli']
  },
  {
    slug: 'ai-development-in-tubli',
    name: 'Tubli',
    possessive: "Tubli's",
    region: 'Capital Governorate',
    economicSnapshot:
      'A Capital-Governorate suburb south of Manama on Tubli Bay — a mix of light-industrial activity, residential developments, the Tubli Sewage Treatment Plant and a small services and retail economy.',
    heroEyebrow: 'AI engineering for Tubli',
    heroH1: 'Production AI for Tubli.',
    heroLead:
      "We build the AI systems that Tubli's light-industrial operators, water-and-wastewater utilities (incl. the Tubli Sewage Treatment Plant), residential developers and Capital-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Tubli — production AI for Capital-Governorate light industry, water-and-wastewater utilities, residential developers and municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Tubli'),
      'AI for light industry Tubli',
      'AI for water utilities Bahrain',
      'AI for Tubli Bay'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Asset-performance and predictive-maintenance AI for the Tubli water-and-wastewater utility and surrounding Capital-Governorate operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Light-industrial yield and throughput AI for Tubli operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential and light-industrial real-estate AI for Tubli developers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Capital-Governorate municipality AI for Tubli operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile and Manama-corridor logistics AI for Tubli-based operators.' }
    ],
    positioningCopy:
      "Tubli is a working light-industrial and residential belt on Tubli Bay. The AI brief is industrial-asset performance, utility operational AI and residential PropTech. We arrive with templates calibrated for Capital-Governorate operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Tubli light-industrial, utility and residential operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Tubli operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with water-and-wastewater utility AI in a Bahraini setting?',
        answer:
          'Yes. Our water-utility work covers predictive maintenance on pumps and treatment-train assets, leakage-detection ML, demand forecasting and asset-performance dashboards. For Tubli we calibrate on local plant data and integrate with the existing SCADA and historian environment.'
      },
      {
        question: 'Can you bundle Tubli with adjacent Capital-Governorate engagements?',
        answer:
          'Yes. Tubli pairs naturally with Manama, Sitra and Jidhafs as a Capital-Governorate programme with shared data layers and per-area overlays. We will price Tubli-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-manama', 'ai-development-in-sitra', 'ai-development-in-jidhafs']
  },

  // ============================================================
  // MUHARRAQ GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-muharraq',
    name: 'Muharraq',
    possessive: "Muharraq's",
    region: 'Muharraq Governorate',
    economicSnapshot:
      "Capital of the Muharraq Governorate on Muharraq Island — historically the original capital of Bahrain and the centre of the pearling trade, now home to Bahrain International Airport, the Pearling Path UNESCO World Heritage Site, a deep heritage-tourism flow, and a working family-business retail-and-services economy.",
    heroEyebrow: 'AI engineering for Muharraq',
    heroH1: 'Production AI for Muharraq.',
    heroLead:
      "We build the AI systems that Muharraq's Bahrain International Airport ecosystem, freight-forwarding majors, Pearling Path UNESCO heritage-tourism authorities, family-business retail operators, Gulf Air corporate functions and Muharraq-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Muharraq — production AI for the Bahrain International Airport ecosystem, freight-forwarders, Pearling Path UNESCO heritage tourism, family-business retail and Muharraq-Governorate municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Muharraq'),
      'AI for Bahrain International Airport',
      'AI for Gulf Air',
      'AI for Pearling Path UNESCO',
      'AI for Muharraq heritage tourism',
      'AI for Muharraq Governorate'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Air-cargo ETA prediction, customs document intelligence and freight-forwarding AI around Bahrain International Airport.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Pearling-Path heritage-tourism demand AI and multilingual guest NLP for Muharraq hospitality operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Muharraq-Governorate municipality, UNESCO-heritage and airport-authority AI for Muharraq operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Family-business and heritage-souq retail demand AI for Muharraq operators.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Travel-spend, FX and retail-banking AI for Muharraq-branched Bahraini banks.' }
    ],
    positioningCopy:
      "Muharraq carries two distinctive AI workloads — airport-and-air-cargo operations at Bahrain International Airport, and UNESCO-heritage-tourism flow around the Pearling Path. We arrive with reference architectures for both and a 12-week production path that integrates with the airport-authority systems and the heritage-tourism operator stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Muharraq airport, heritage-tourism and retail operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Muharraq operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience integrating AI with Bahrain International Airport-ecosystem systems?',
        answer:
          'Our airport and air-cargo work covers ETA prediction, baggage-handling computer vision, gate-system OCR, customs document intelligence and demand AI for airport-corridor retail. We treat each engagement as bespoke and ship a reference pipeline against your specific TMS / WMS / airport-authority environment in the discovery phase.'
      },
      {
        question: "Can you handle multilingual heritage-tourism NLP for Muharraq's Pearling Path UNESCO flow?",
        answer:
          'Yes. Every visitor-facing AI we build for Muharraq runs MSA Arabic, Bahraini-dialect Arabic and English as first-class languages, with optional French, German, Italian, Mandarin, Hindi and Urdu layers tuned to the typical Pearling-Path inbound visitor mix. We benchmark per-language intent-recognition accuracy in discovery.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-hidd', 'ai-development-in-manama', 'ai-development-in-hamad-town']
  },
  {
    slug: 'ai-development-in-al-hidd',
    name: 'Al Hidd',
    possessive: "Al Hidd's",
    region: 'Muharraq Governorate',
    economicSnapshot:
      "An industrial town in the Muharraq Governorate on the eastern edge of Muharraq Island — home to the Aluminium Bahrain (Alba) smelter (one of the largest single-site aluminium smelters in the world), the Khalifa Bin Salman Port, the Bahrain LNG receiving terminal, and a dense ecosystem of downstream-industrial and logistics operators.",
    heroEyebrow: 'AI engineering for Al Hidd',
    heroH1: 'Production AI for Al Hidd.',
    heroLead:
      "We build the AI systems that Al Hidd's Aluminium Bahrain (Alba) smelter operators, Khalifa Bin Salman Port and Bahrain LNG terminal operators, downstream-industrial manufacturers, logistics contractors and Muharraq-Governorate authority teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Al Hidd — production AI for the Aluminium Bahrain (Alba) smelter, Khalifa Bin Salman Port, Bahrain LNG receiving terminal, downstream-industrial manufacturers and Muharraq-Governorate authority operations. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Hidd'),
      'AI for Alba Aluminium Bahrain',
      'AI for Khalifa Bin Salman Port',
      'AI for Bahrain LNG',
      'AI for Al Hidd industrial',
      'industrial AI Bahrain Al Hidd'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for the Aluminium Bahrain (Alba) smelter and Al-Hidd downstream operators.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for the Bahrain LNG terminal and Al-Hidd power-and-industrial assets.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Container-yard CV, vessel-ETA prediction and customs document intelligence for the Khalifa Bin Salman Port and Bahrain Logistics Zone (BLZ).' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Muharraq-Governorate industrial-zone authority AI for Al-Hidd operations.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Al-Hidd industrial zone.' }
    ],
    positioningCopy:
      "Al Hidd is the industrial heart of Muharraq and one of the most operationally significant industrial clusters in the GCC — Alba alone is one of the largest aluminium smelters on the planet. The AI brief is industrial-grade at scale. We arrive with senior industrial-AI engineers, reference architectures against the Alba, port and LNG operator stacks, and a 12-week production path that integrates with your HAZOP and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Hidd aluminium, LNG, port and downstream-industrial teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Hidd plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of the Alba aluminium smelter operating environment?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific Al-Hidd environment in the discovery phase.'
      },
      {
        question: 'How do you handle port-environment AI integration with the Khalifa Bin Salman Port stack?',
        answer:
          'Our port integrations cover Navis N4, CTOS, TOPS and several in-house port-community systems, plus the AIS, BLZ and Bahrain Customs interfaces. For Al Hidd we document the integration in discovery and ship a sample inference pipeline against your specific terminal and shipping-line environment.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muharraq', 'ai-development-in-manama', 'ai-development-in-sitra']
  },

  // ============================================================
  // NORTHERN GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-hamad-town',
    name: 'Hamad Town',
    possessive: "Hamad Town's",
    region: 'Northern Governorate',
    economicSnapshot:
      'A large planned residential city in the Northern Governorate established in 1984 — home to a substantial Bahraini residential community, a growing retail-and-services economy, and educational and healthcare provision serving the wider Northern Governorate.',
    heroEyebrow: 'AI engineering for Hamad Town',
    heroH1: 'Production AI for Hamad Town.',
    heroLead:
      "We build the AI systems that Hamad Town's residential developers, retail and services SMEs, education and healthcare providers and Northern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Hamad Town — production AI for Northern-Governorate residential developers, retail and services SMEs, education and healthcare providers and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Hamad Town'),
      'AI for Hamad Town residential',
      'AI for Northern Governorate Bahrain',
      'AI for education Hamad Town'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Hamad Town developers and Northern-Governorate landlords.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Hamad Town retail and family-business operators.' },
      { name: 'Education', href: '/industries/education', angle: 'Education-sector AI and operational analytics for Hamad Town schools and student-services operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Northern-Governorate municipality AI for Hamad Town civic-services.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Hamad Town health-centre operators.' }
    ],
    positioningCopy:
      'Hamad Town is a planned residential city with a substantial Bahraini community and a growing services economy. The AI brief is residential PropTech, retail demand AI, education-sector operational AI and civic-services efficiency. We arrive with templates calibrated for Bahrain residential operators and a 12-week production path sized to the operator.',
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Hamad Town residential, retail, education and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Hamad Town operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to mid-size residential and municipal operator economics typical of Hamad Town?',
        answer:
          'Yes. Hamad-Town-scale engagements typically sit in the BHD 100K to 400K budget band, with a single production system and a tight engineer-led team. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Hamad Town with adjacent Northern-Governorate engagements?',
        answer:
          "Yes. Hamad Town pairs naturally with A'ali, Budaiya and Sanad as a Northern-Governorate residential-and-services programme. We will price Hamad-Town-only and a bundle option in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-aali', 'ai-development-in-budaiya', 'ai-development-in-sanad']
  },
  {
    slug: 'ai-development-in-aali',
    name: "A'ali",
    possessive: "A'ali's",
    region: 'Northern Governorate',
    economicSnapshot:
      "A Northern-Governorate residential town historically famous for its ancient burial mounds and a centuries-old pottery tradition — home to the A'ali Pottery industry, growing residential developments, and small retail-and-services activity.",
    heroEyebrow: "AI engineering for A'ali",
    heroH1: "Production AI for A'ali.",
    heroLead:
      "We build the AI systems that A'ali's pottery and crafts co-operatives, heritage-tourism authorities, residential developers, retail SMEs and Northern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      "AI development company in A'ali — production AI for Northern-Governorate pottery and crafts co-operatives, heritage tourism, residential developers, retail and municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.",
    keywords: [
      ...sharedNlpKeywords("A'ali"),
      'AI for pottery industry Bahrain',
      "AI for A'ali heritage",
      "AI for A'ali residential",
      'AI for Northern Governorate Bahrain'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: "Pottery and crafts quality computer vision, yield and demand-forecasting AI for A'ali co-operatives." },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: "Heritage-and-crafts tourism demand AI and multilingual guest NLP for A'ali burial-mounds and pottery-village operators." },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: "Crafts e-commerce and visitor-retail AI for A'ali operators." },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: "Residential valuation and tenant analytics for A'ali developers." },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: "Northern-Governorate heritage and municipality AI for A'ali operations." }
    ],
    positioningCopy:
      "A'ali pairs a heritage pottery-and-crafts economy with a growing residential and visitor-flow layer. The AI brief is quality CV on crafts production, demand modelling for visitor flow, and residential PropTech. We arrive with templates calibrated for crafts-and-heritage operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: "Bespoke AI systems for A'ali pottery, heritage-tourism and residential operators." },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: "Engineered transition to your A'ali operations team. No vendor lock-in." }
    ],
    cityFaq: [
      {
        question: "Do you have experience with crafts-production AI in an Omani / Bahraini setting?",
        answer:
          "Our crafts-production work covers computer-vision quality grading on hand-shaped items, demand forecasting for export markets, and conversational AI for crafts e-commerce. For A'ali we calibrate the CV models on local production batches and integrate with the co-operative ERP."
      },
      {
        question: "Can you bundle A'ali with adjacent Northern-Governorate engagements?",
        answer:
          "Yes. A'ali pairs naturally with Hamad Town, Budaiya and Sanad. We will price A'ali-only and a bundle option in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-hamad-town', 'ai-development-in-sanad', 'ai-development-in-budaiya']
  },
  {
    slug: 'ai-development-in-budaiya',
    name: 'Budaiya',
    possessive: "Budaiya's",
    region: 'Northern Governorate',
    economicSnapshot:
      "A Northern-Governorate coastal area along the Budaiya Highway — known for its agricultural farms, fisheries activity, palm groves, growing residential developments and a sustainable-agriculture and food-production footprint serving Bahrain.",
    heroEyebrow: 'AI engineering for Budaiya',
    heroH1: 'Production AI for Budaiya.',
    heroLead:
      "We build the AI systems that Budaiya's agricultural farms, fisheries co-operatives, food-processing manufacturers, residential developers and Northern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Budaiya — production AI for Northern-Governorate agriculture, fisheries, food processing, residential developers and municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Budaiya'),
      'AI for agriculture Bahrain',
      'AI for fisheries Budaiya',
      'AI for food processing Bahrain',
      'AI for Budaiya residential'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agriculture, fisheries and food-processing yield, grading and supply-chain AI for Budaiya co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain logistics from Budaiya farms and landings to Manama retail.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential and coastal real-estate AI for Budaiya developers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Northern-Governorate municipality and agricultural-authority AI for Budaiya operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Budaiya retail and family-business operators.' }
    ],
    positioningCopy:
      "Budaiya is the agricultural and coastal-residential face of Bahrain's Northern Governorate. The AI brief is yield prediction, cold-chain optimisation, and residential PropTech alongside small retail demand AI. We arrive with sector templates calibrated for Bahraini agriculture and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Budaiya agriculture, fisheries and residential operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Budaiya operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle agri-tech AI in a Budaiya farming setting?',
        answer:
          'Yes. Our agri-tech work covers yield prediction at the farm block, irrigation optimisation with sensor-fusion ML, harvest scheduling and cold-chain demand AI. For Budaiya we calibrate on local soil, climatic and crop data and integrate with the co-operative ERP.'
      },
      {
        question: 'Do you bundle Budaiya with adjacent Northern-Governorate engagements?',
        answer:
          "Yes. Budaiya pairs naturally with Hamad Town, A'ali, Jidhafs and Sanad. We will price Budaiya-only and a bundle option in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-hamad-town', 'ai-development-in-jidhafs', 'ai-development-in-aali']
  },
  {
    slug: 'ai-development-in-sanad',
    name: 'Sanad',
    possessive: "Sanad's",
    region: 'Northern Governorate',
    economicSnapshot:
      'A Northern-Governorate residential area south-west of Manama — primarily residential with a small services and retail economy and a connection to the broader Northern-Governorate civic ecosystem.',
    heroEyebrow: 'AI engineering for Sanad',
    heroH1: 'Production AI for Sanad.',
    heroLead:
      "We build the AI systems that Sanad's residential developers, services SMEs, family-business operators and Northern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Sanad — production AI for Northern-Governorate residential, services SMEs, family-business operators and municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sanad'),
      'AI for Sanad residential',
      'AI for Sanad SME',
      'AI for Northern Governorate Bahrain'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Sanad developers and Northern-Governorate landlords.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Sanad retail and family-business operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Northern-Governorate municipality AI for Sanad civic-services.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Sanad health-centre operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI for the Sanad residential catchment.' }
    ],
    positioningCopy:
      "Sanad is a working residential and services town in Northern-Governorate. The AI brief is honest and small-scale: residential PropTech, consumer demand AI and civic services. We arrive with templates that fit Sanad-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sanad residential, retail and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sanad operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to small-operator economics typical of Sanad?',
        answer:
          'Yes. Sanad-scale engagements are typically sub-BHD-150K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — tightly sized to the operator.'
      },
      {
        question: 'Do you bundle Sanad with adjacent Northern-Governorate engagements?',
        answer:
          "Yes. Sanad typically benefits from being part of a wider Northern-Governorate programme with Hamad Town, A'ali and Isa Town. We will price Sanad-only and a bundle option in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-hamad-town', 'ai-development-in-aali', 'ai-development-in-isa-town']
  },

  // ============================================================
  // SOUTHERN GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-riffa',
    name: 'Riffa',
    possessive: "Riffa's",
    region: 'Southern Governorate',
    economicSnapshot:
      "One of the largest cities in the Kingdom and the largest in the Southern Governorate — covering East Riffa, West Riffa and Riffa Views, with a substantial Bahraini residential community, a growing premium real-estate market, a deep retail and services economy and historic royal links.",
    heroEyebrow: 'AI engineering for Riffa',
    heroH1: 'Production AI for Riffa.',
    heroLead:
      "We build the AI systems that Riffa's residential and premium real-estate developers, retail and services groups, hospitality operators and Southern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Riffa — production AI for Southern-Governorate residential and premium real-estate developers (incl. Riffa Views), retail and services groups, hospitality and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Riffa'),
      'AI for Riffa residential',
      'AI for Riffa Views',
      'AI for East Riffa',
      'AI for West Riffa',
      'AI for Southern Governorate Bahrain'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Premium-residential and mixed-use valuation, leasing and tenant analytics for Riffa Views and Riffa-area developers.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Riffa retail and family-business operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Hospitality demand AI for Riffa hotels and golf-and-leisure operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Southern-Governorate municipality AI for Riffa civic-services and programme analytics.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Retail-banking, wealth and consumer-credit AI for Riffa-branched Bahraini banks.' }
    ],
    positioningCopy:
      "Riffa is the largest city in the Southern Governorate and one of the most economically significant residential and retail catchments in Bahrain. The AI brief is real-estate yield, premium-residential PropTech, retail demand AI and civic-services efficiency. We arrive with templates calibrated for Bahrain residential and premium-real-estate operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Riffa residential, retail, hospitality and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Riffa operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you handle premium real-estate PropTech for Riffa-area developers?',
        answer:
          'Yes. Our PropTech work covers valuation models, leasing-velocity prediction, tenant-mix optimisation, energy and OPEX forecasting and demand AI for mixed-use and premium-residential developments. For Riffa we integrate with the major PropTech stacks (Yardi, MRI, RealPage) and Bahraini-built equivalents.'
      },
      {
        question: 'Can you bundle Riffa with adjacent Southern-Governorate engagements?',
        answer:
          'Yes. Riffa pairs naturally with Isa Town, Sakhir and Awali as a Southern-Governorate programme. We will price Riffa-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-isa-town', 'ai-development-in-sakhir', 'ai-development-in-awali']
  },
  {
    slug: 'ai-development-in-isa-town',
    name: 'Isa Town',
    possessive: "Isa Town's",
    region: 'Southern Governorate',
    economicSnapshot:
      "A planned town in the Southern Governorate built in the 1960s — home to the main University of Bahrain campus, large residential developments, the Isa Town Mall and a growing education, residential and retail economy.",
    heroEyebrow: 'AI engineering for Isa Town',
    heroH1: 'Production AI for Isa Town.',
    heroLead:
      "We build the AI systems that Isa Town's University of Bahrain research labs, residential developers, retail groups (incl. Isa Town Mall operators) and Southern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Isa Town — production AI for the University of Bahrain Isa Town campus, residential developers, retail groups (incl. Isa Town Mall operators) and Southern-Governorate municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Isa Town'),
      'AI for University of Bahrain',
      'AI for Isa Town Mall',
      'AI for Isa Town residential',
      'AI for Southern Governorate Bahrain Isa Town'
    ],
    sectorAngles: [
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML, generative AI and LLM fine-tuning infrastructure for the University of Bahrain Isa Town campus.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Mall footfall and demand AI for Isa Town Mall and surrounding retail operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Isa Town developers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Southern-Governorate municipality AI for Isa Town civic-services.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and operational AI for Isa Town health-centre operators.' }
    ],
    positioningCopy:
      "Isa Town pairs a major university campus with planned residential and retail belts. The AI brief is research-grade ML support on the academic side, demand AI on the retail side, and residential PropTech on the housing side. We arrive with templates for each and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Isa Town university, retail and residential operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Isa Town team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you support research-grade ML work for the University of Bahrain in Isa Town?',
        answer:
          'Yes. Where the University of Bahrain is the buyer, we propose engagements that supplement the in-house research team — senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions. We expect a pair-programming rhythm with two of your engineers in the pod from day one.'
      },
      {
        question: 'Can you bundle Isa Town with adjacent Southern-Governorate engagements?',
        answer:
          'Yes. Isa Town pairs naturally with Riffa, Sakhir and Awali. We will price Isa-Town-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-riffa', 'ai-development-in-sakhir', 'ai-development-in-awali']
  },
  {
    slug: 'ai-development-in-zallaq',
    name: 'Zallaq',
    possessive: "Zallaq's",
    region: 'Southern Governorate',
    economicSnapshot:
      "A coastal town on the western edge of the Southern Governorate — home to large beachfront resorts and hospitality developments, the Al Areen Wildlife Park and Reserve, eco-tourism operators, and a growing weekend-leisure flow from Manama and the wider GCC.",
    heroEyebrow: 'AI engineering for Zallaq',
    heroH1: 'Production AI for Zallaq.',
    heroLead:
      "We build the AI systems that Zallaq's beachfront resort and hospitality operators, eco-tourism authorities (incl. Al Areen Wildlife Park), event-and-entertainment venues and Southern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Zallaq — production AI for Southern-Governorate beachfront hospitality, Al Areen Wildlife Park, eco-tourism and Southern-Governorate municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Zallaq'),
      'AI for Zallaq hospitality',
      'AI for Al Areen Wildlife Park',
      'AI for Bahrain beachfront resorts',
      'AI for eco tourism Bahrain'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Beachfront resort revenue management, demand forecasting and multilingual guest NLP for Zallaq hospitality operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Southern-Governorate environmental and tourism-authority AI for Al Areen and Zallaq operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail and multilingual conversational AI for Zallaq hospitality operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Coastal hospitality and resort real-estate AI for Zallaq developers and asset owners.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile and weekend-tourism logistics AI for the Zallaq operating belt.' }
    ],
    positioningCopy:
      "Zallaq carries the beachfront-and-eco-tourism workload of the Southern Governorate. The AI brief is revenue management, multilingual guest NLP, weekend-peaked demand forecasting and environmental analytics for Al Areen. We arrive with templates calibrated for GCC beachfront operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Zallaq hospitality, eco-tourism and event operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Zallaq operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle weekend-peaked tourism demand for Zallaq hospitality?',
        answer:
          'Yes. Our revenue-management and demand-forecasting models are recalibrated on the local weekend-peak load profile at the start of each engagement. The operational dashboard surfaces weekend and weekday views separately to support the steering committee, and the auto-scaling inference layer is sized for the surge.'
      },
      {
        question: 'Do you handle environmental-and-conservation AI for Al Areen Wildlife Park?',
        answer:
          'Yes. Our conservation-AI work covers species-monitoring imagery, visitor-flow analytics under environmental constraints, and reporting automation for environmental authorities. For Al Areen we align the evidence pack to Bahraini environmental-authority requirements.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sakhir', 'ai-development-in-awali', 'ai-development-in-riffa']
  },
  {
    slug: 'ai-development-in-sakhir',
    name: 'Sakhir',
    possessive: "Sakhir's",
    region: 'Southern Governorate',
    economicSnapshot:
      'A Southern-Governorate area that hosts the Bahrain International Circuit (BIC) — home to the Bahrain Grand Prix Formula 1 race — the University of Bahrain Sakhir campus, the Royal Stables and a growing sports-and-events tourism economy.',
    heroEyebrow: 'AI engineering for Sakhir',
    heroH1: 'Production AI for Sakhir.',
    heroLead:
      "We build the AI systems that Sakhir's Bahrain International Circuit operators, F1-and-motorsport ecosystem, University of Bahrain Sakhir campus research labs, Royal Stables and Southern-Governorate event-authority teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Sakhir — production AI for the Bahrain International Circuit, F1 and motorsport ecosystem, University of Bahrain Sakhir campus, Royal Stables and Southern-Governorate event authorities. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sakhir'),
      'AI for Bahrain International Circuit',
      'AI for F1 Bahrain',
      'AI for University of Bahrain Sakhir',
      'AI for sports events Sakhir'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'F1-weekend and event-tourism demand AI and multilingual guest NLP for Sakhir hospitality operators.' },
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML and applied-AI infrastructure for the University of Bahrain Sakhir campus.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Event-authority operational AI for the Bahrain International Circuit and Sakhir event programme.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Event-driven retail and concession AI for Sakhir circuit and venue operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Sports-and-events real-estate AI for Sakhir developers and asset owners.' }
    ],
    positioningCopy:
      "Sakhir runs one of the most operationally intense single-event workloads in the GCC — the Bahrain Grand Prix — alongside the University of Bahrain Sakhir campus and the Royal Stables. The AI brief is event-driven demand, multilingual NLP at scale during race-week, and research-grade ML support for the university. We arrive with templates calibrated for major-event operations and a 12-week production path that respects the F1 calendar.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sakhir BIC, university, event-authority and hospitality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sakhir operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle major-event AI for the Bahrain Grand Prix at the Bahrain International Circuit?',
        answer:
          'Yes. Our major-event work covers ticketing demand AI, crowd-density CV, multilingual visitor NLP, queue and ingress-egress modelling, and operational forecasting on race weekend. For the Bahrain International Circuit we calibrate on the global F1-event pattern and integrate with the venue operator stack.'
      },
      {
        question: 'Do you support research-grade ML for the University of Bahrain Sakhir campus?',
        answer:
          'Yes. Where the University of Bahrain Sakhir campus is the buyer, we propose engagements that supplement the in-house research team with senior engineers, a clear IP-and-publication framework, and a pair-programming rhythm with the university research staff.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-zallaq', 'ai-development-in-awali', 'ai-development-in-isa-town']
  },
  {
    slug: 'ai-development-in-awali',
    name: 'Awali',
    possessive: "Awali's",
    region: 'Southern Governorate',
    economicSnapshot:
      "A historic Southern-Governorate town built in the 1930s as the Bapco company-town for oil-industry employees — home to a long-established residential community linked to the Bahraini oil-and-gas economy, with a unique heritage-and-residential character.",
    heroEyebrow: 'AI engineering for Awali',
    heroH1: 'Production AI for Awali.',
    heroLead:
      "We build the AI systems that Awali's Bapco-ecosystem operators, oilfield-services contractors based on or near the historic Awali oilfield, residential property managers and Southern-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in BHD, and aligned to iGA, NCSC and Bahrain PDPL.",
    metaDescription:
      'AI development company in Awali — production AI for Bapco-ecosystem upstream operations, oilfield-services contractors, the historic Awali company town and Southern-Governorate municipality services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Awali'),
      'AI for Awali Bapco company town',
      'AI for Bahrain oil heritage',
      'AI for oilfield services Awali',
      'AI for Southern Governorate Bahrain Awali'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Well-data analytics, reservoir ML, predictive maintenance and field-services scheduling AI for the historic Awali oilfield and Bapco-ecosystem operations.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Engineering-services workflow and reliability AI for Awali-based contractors.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Historic residential real-estate AI for the Awali company town.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Southern-Governorate municipality and oil-and-gas-authority AI for Awali operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Rig-mobilisation, parts-and-materials and supply-chain AI for the Awali upstream ecosystem.' }
    ],
    positioningCopy:
      "Awali is the historic centre of Bahraini upstream oil-and-gas and a distinctive residential community with deep Bapco roots. The AI brief is field-operations efficiency on the upstream side, residential PropTech on the community side, and operational governance for the Bapco-ecosystem service contractors. We arrive with templates calibrated for the Bapco-ecosystem operating rhythm and a 12-week production path that integrates with your operator stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Awali Bapco-ecosystem, oilfield-services and residential operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Awali operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you work alongside in-house Bapco ML teams without overlapping the work?',
        answer:
          'Yes — and most of our Awali engagements are exactly that shape. We propose the work as a pod that supplements the in-house team rather than replacing it: senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions. We expect a pair-programming rhythm with two of your engineers in the pod from day one.'
      },
      {
        question: 'Do you bundle Awali with adjacent Bahrain industrial-AI engagements?',
        answer:
          'Yes. Awali pairs naturally with Sitra (Bapco refinery), Al Hidd (Alba smelter) and Sakhir (university research) as a Bahrain industrial-AI programme. We will price Awali-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sakhir', 'ai-development-in-sitra', 'ai-development-in-zallaq']
  }
];

export function getBahrainiCityBySlug(slug: string): BahrainiCity | undefined {
  return BAHRAINI_CITIES.find((c) => c.slug === slug);
}

export const BAHRAINI_CITY_SLUGS = BAHRAINI_CITIES.map((c) => c.slug);
