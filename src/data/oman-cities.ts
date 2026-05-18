/**
 * Per-city SEO and content data for the /oman/ai-development-in-[city] pages.
 *
 * Each entry drives a fully SEO-optimised landing page for an Omani city. The
 * page template lives at src/app/oman/[slug]/page.tsx and is rendered statically
 * via generateStaticParams.
 */

export type OmaniCity = {
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

export const OMANI_CITIES: OmaniCity[] = [
  // ============================================================
  // MUSCAT GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-muscat',
    name: 'Muscat',
    possessive: "Muscat's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "Oman's capital and the regulatory, financial and government centre of the Sultanate — home to the Central Bank of Oman, the Capital Market Authority, ministerial headquarters, the country's largest banks, telecoms and the headquarters of most Vision 2040 programmes.",
    heroEyebrow: 'AI engineering for Muscat',
    heroH1: 'Production AI for Muscat.',
    heroLead:
      "We build the AI systems that Muscat's regulators, banks, ministries, telecom operators and Vision 2040 programme offices actually put into production — staffed by named senior engineers, priced in OMR, and aligned to CBO, MTCIT, the National AI Strategy and Oman PDPL (Royal Decree 6/2022) from day one.",
    metaDescription:
      'AI development company in Muscat — production AI for CBO-supervised banks, Omani ministries, capital-markets institutions, telecom operators and Vision 2040 programme offices. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth, OMR billing and a 12-week production path. ISO 27001, SOC 2 Type II, ISO 42001.',
    keywords: [
      ...sharedNlpKeywords('Muscat'),
      'AI development company Oman capital',
      'Muscat AI services',
      'CBO model risk AI Muscat',
      'MTCIT aligned AI Muscat',
      'Oman PDPL AI Muscat',
      'Vision 2040 AI Muscat',
      'National AI Strategy partner Muscat',
      'Muscat Securities Market AI',
      'AI for Omani ministries'
    ],
    sectorAngles: [
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'CBO model risk files, AML, fraud and credit AI for Muscat-headquartered Omani banks.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'MTCIT-aligned and National-AI-Strategy-mapped AI for ministries and authorities in Muscat.' },
      { name: 'Capital markets', href: '/industries/banking-financial-services', angle: 'CMA-aligned surveillance, NLP and analytics for Muscat Securities Market-listed issuers and asset managers.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for Muscat hospital networks and health authorities.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Muscat-headquartered developers and Vision 2040 sponsors.' }
    ],
    positioningCopy:
      'Muscat is where the procurement-committee bar is highest in the Sultanate — and where CBO, MTCIT and the National AI Strategy expectations land first. We arrive with the evidence pack already drafted: PDPL DPIA against Royal Decree 6/2022, CBO-style model risk file, Oman cybersecurity-framework mapping, and a written 12-week production path that fits inside the steering-committee cadence Muscat boards run on.',
    ownershipBullets: [
      { t: 'We build', d: "Bespoke AI systems for Muscat banks, ministries and Vision 2040 programme offices." },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Muscat team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you deliver inside CBO, MTCIT and Oman PDPL expectations for a Muscat-headquartered entity?',
        answer:
          'Yes. Every Muscat engagement ships a PDPL Data Protection Impact Assessment aligned to Royal Decree 6/2022, a CBO-style model risk file where the entity is CBO-supervised, an Oman cybersecurity-framework controls mapping, and a National AI Strategy / MTCIT alignment cross-walk. We draft the evidence pack alongside the build — not as a separate workstream after the fact.'
      },
      {
        question: 'Do you co-deliver with an Oman-registered partner when a Muscat sponsor requires one?',
        answer:
          'Yes. Where a Muscat procurement office requires an Oman-registered counterparty (common for ministerial entities and CBO-supervised banks), we co-deliver with a vetted Oman-resident partner under a transparent flow-down agreement. Brocode engineers remain named on the work; the local partner provides the contracting entity and any required in-country personnel commitments.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muttrah', 'ai-development-in-seeb', 'ai-development-in-bawshar']
  },
  {
    slug: 'ai-development-in-muttrah',
    name: 'Muttrah',
    possessive: "Muttrah's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "Muscat's historic commercial waterfront and the home of Port Sultan Qaboos, the Muttrah Souq, the country's traditional gold and silver trade, and a long-standing concentration of family-business holdings, hospitality groups and tourism operators on the capital's harbour.",
    heroEyebrow: 'AI engineering for Muttrah',
    heroH1: 'Production AI for Muttrah.',
    heroLead:
      "We build the AI systems that Muttrah's hospitality groups, retail and souq family businesses, Port Sultan Qaboos operators and capital-area tourism authorities actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      "AI development company in Muttrah — production AI for hospitality groups, Muttrah Souq retail and family businesses, Port Sultan Qaboos operators and Muscat-Governorate tourism authorities. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.",
    keywords: [
      ...sharedNlpKeywords('Muttrah'),
      'AI for hospitality Muttrah',
      'AI for retail Muttrah Souq',
      'AI for Port Sultan Qaboos',
      'AI for tourism Muscat waterfront',
      'AI for family business Muttrah'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue management, demand forecasting and multilingual guest NLP for Muttrah hotels and cruise-side tourism operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual conversational AI and demand AI for Muttrah Souq family retail businesses.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Port-side ETA, customs document intelligence and cruise-logistics AI around Port Sultan Qaboos.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'SME and family-business banking AI for Muttrah branches of Omani banks.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Heritage-property analytics and hospitality-yield AI for the Muttrah corniche.' }
    ],
    positioningCopy:
      "Muttrah is one of the most distinctive operating environments in Muscat — heritage retail, cruise-driven tourism and a small-business density that runs on family-office capital. Production AI here is about footfall, yield and multilingual customer-facing automation. We arrive with templates calibrated for Muscat-area hospitality and souq retail and a 12-week path that respects the heritage character of the corniche.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Muttrah hospitality, retail and family-business operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Muttrah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you handle multilingual conversational AI for the cruise and souq tourism flow into Muttrah?',
        answer:
          'Yes. Every guest- or shopper-facing AI we build for Muttrah runs MSA Arabic, Omani-dialect Arabic and English as first-class languages, with optional Hindi, Urdu and German layers tuned to typical Muscat cruise itineraries. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      },
      {
        question: 'Can you tie AI uplift to a specific KPI for a Muttrah family-business retailer?',
        answer:
          'Yes. Muttrah engagements typically tie to footfall conversion, average basket value, repeat-visit cohort growth or seasonal-load yield management. We bake the KPI into the discovery gate; the model is contractually expected to move it; if it does not, the engagement does not proceed past the week-four Go/No-Go.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muscat', 'ai-development-in-seeb', 'ai-development-in-qurayyat']
  },
  {
    slug: 'ai-development-in-seeb',
    name: 'Seeb',
    possessive: "Seeb's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "Home of Muscat International Airport and a large concentration of logistics, freight-forwarding, retail and services companies — the gateway by air to Oman and one of the largest residential and commercial wilayats in Muscat Governorate.",
    heroEyebrow: 'AI engineering for Seeb',
    heroH1: 'Production AI for Seeb.',
    heroLead:
      "We build the AI systems that Seeb's airport-ecosystem operators, freight-forwarding majors, retail and logistics groups and large residential-services companies actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Seeb — production AI for Muscat International Airport-ecosystem operators, freight forwarders, retail groups and Muscat-Governorate logistics and services companies. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Seeb'),
      'AI for Muscat International Airport',
      'AI for logistics Seeb',
      'AI for freight forwarding Oman',
      'AI for retail Seeb',
      'airport AI Oman'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Air-cargo ETA prediction, customs document intelligence and freight-forwarding AI around Muscat International Airport.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting, footfall analytics and Arabic conversational AI for Seeb-headquartered retail and mall groups.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Airport-corridor hospitality AI and multilingual passenger-services automation.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Airport-authority, customs and immigration AI for Muscat-Governorate operations.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Travel-spend, FX and retail-banking AI for Seeb-branched Omani banks.' }
    ],
    positioningCopy:
      "Seeb runs the airport and the air-cargo backbone of Oman — and the AI question is operational at airport speed. ETA prediction, baggage-handling vision, customs document intelligence, and demand AI for the retail layer around the airport. We arrive with reference architectures calibrated for the air-cargo and airport-services operating rhythm and a 12-week path that integrates with your TMS, WMS and airport-authority systems.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Seeb airport-ecosystem, logistics and retail operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Seeb operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience integrating AI with Muscat International Airport-ecosystem systems?',
        answer:
          'Our airport and air-cargo work covers ETA prediction, baggage-handling computer vision, gate-system OCR, customs document intelligence and demand AI for airport-corridor retail. We treat each engagement as bespoke and ship a reference pipeline against your specific TMS / WMS / airport-authority environment in the discovery phase.'
      },
      {
        question: 'Can you integrate AI with the major freight-forwarder TMS and customs systems used in Seeb?',
        answer:
          'Yes. Our integrations cover the major freight-forwarder TMS platforms, the Bayan Oman customs interface and the principal Omani port-community and air-cargo systems. We document the integration in discovery and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muscat', 'ai-development-in-bawshar', 'ai-development-in-al-amerat']
  },
  {
    slug: 'ai-development-in-bawshar',
    name: 'Bawshar',
    possessive: "Bawshar's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "A large Muscat Governorate wilayat covering much of the western capital — home to corporate HQs, mixed-use real estate (including the Al Mouj development), tourism and hospitality groups, and a fast-growing residential commercial belt along the Muscat Expressway.",
    heroEyebrow: 'AI engineering for Bawshar',
    heroH1: 'Production AI for Bawshar.',
    heroLead:
      "We build the AI systems that Bawshar's corporate HQs, mixed-use real-estate developers, hospitality groups and capital-area commercial operators actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Bawshar — production AI for corporate HQs, mixed-use real-estate developers (including the Al Mouj corridor), hospitality and capital-area commerce in the Muscat Governorate. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bawshar'),
      'AI for Al Mouj',
      'AI for real estate Muscat',
      'AI for hospitality Bawshar',
      'AI for corporate HQ Muscat',
      'Muscat Expressway commercial AI'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Bawshar mixed-use developers including the Al Mouj corridor.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue and demand AI for Bawshar hotels, resorts and integrated-tourism complexes.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Mall and lifestyle-centre footfall AI for Bawshar commercial real estate.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Corporate and wealth-management AI for Bawshar-corporate-HQ banking relationships.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Muscat Municipality and capital-area public-sector AI initiatives.' }
    ],
    positioningCopy:
      "Bawshar covers the western half of Muscat and is the de-facto corporate-HQ belt of the capital. Production AI here means real-estate yield, hospitality revenue management, mall analytics and corporate-banking automation. We arrive with templates calibrated for Muscat-area developer and hospitality operating rhythms and a 12-week path that integrates with your existing ERP and PMS stacks.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bawshar real-estate, hospitality and corporate operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bawshar operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle PropTech AI for a Bawshar mixed-use developer such as the Al Mouj corridor?',
        answer:
          'Yes. Our PropTech work covers valuation models, leasing-velocity prediction, tenant-mix optimisation, energy and OPEX forecasting and demand AI for mixed-use developments. We integrate with the major PropTech stacks (Yardi, MRI, RealPage) and Omani-built equivalents, and demonstrate KPI uplift on a single asset before scaling.'
      },
      {
        question: 'Do you integrate with the major PMS, revenue-management and CRS systems used in Bawshar hospitality?',
        answer:
          'Yes. Our hospitality integrations cover Opera Cloud, Infor HMS, Protel and the major revenue-management and CRS stacks. For Bawshar we document the integration in discovery and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muscat', 'ai-development-in-seeb', 'ai-development-in-al-amerat']
  },
  {
    slug: 'ai-development-in-al-amerat',
    name: 'Al Amerat',
    possessive: "Al Amerat's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "A large primarily residential wilayat in the southern interior of Muscat Governorate, with a growing services, retail and SME economy and increasing connection to the broader Muscat commercial belt.",
    heroEyebrow: 'AI engineering for Al Amerat',
    heroH1: 'Production AI for Al Amerat.',
    heroLead:
      "We build the AI systems that Al Amerat's retail and services SMEs, residential-real-estate developers, Muscat Municipality public-sector teams and Muscat-Governorate logistics operators actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Al Amerat — production AI for Muscat-Governorate residential developers, retail and services SMEs, Muscat Municipality and last-mile logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Amerat'),
      'AI for residential real estate Muscat',
      'AI for Muscat Municipality',
      'AI for SME Al Amerat',
      'AI for last-mile logistics Muscat'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Al Amerat developers and Muscat-Governorate landlords.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Al Amerat retail and consumer SMEs.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Muscat Municipality public-services AI and Al Amerat civic-data analytics.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI from the Muscat commercial belt into Al Amerat residential catchments.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Muscat-Governorate health-centre operations.' }
    ],
    positioningCopy:
      "Al Amerat is primarily residential — and the AI buyer is more often a Muscat-Governorate municipality, a residential developer or a services SME than a regulated enterprise. The brief is pragmatic: civic services automation, last-mile efficiency, residential PropTech, and consumer-facing Arabic NLP. We arrive with templates calibrated for residential-belt operations and a 12-week path that fits SME-scale budget bands.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Amerat residential, retail and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Amerat operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to SME-size budgets typical of Al Amerat operators?',
        answer:
          'Yes. We routinely scope Muscat-Governorate engagements at sub-OMR-200K budget bands, with a single focused production system rather than a broad transformation. The discovery is still four weeks fixed-scope and the production path is twelve weeks, but the team size, scope and runtime cost are calibrated to SME economics.'
      },
      {
        question: 'Do you handle Muscat Municipality and Al Amerat civic-data analytics work?',
        answer:
          'Yes. Our public-sector work in Muscat Governorate covers civic-services NLP, complaint-routing automation, permit-processing OCR and operational forecasting. We align the evidence pack to MTCIT, Oman PDPL and the National AI Strategy from day one.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muscat', 'ai-development-in-bawshar', 'ai-development-in-qurayyat']
  },
  {
    slug: 'ai-development-in-qurayyat',
    name: 'Qurayyat',
    possessive: "Qurayyat's",
    region: 'Muscat Governorate',
    economicSnapshot:
      "A coastal wilayat on the southeastern edge of Muscat Governorate — historically a fishing and pearling town, now a growing centre for fisheries, aquaculture, coastal tourism and small-scale logistics linking Muscat to the Ash Sharqiyah Region.",
    heroEyebrow: 'AI engineering for Qurayyat',
    heroH1: 'Production AI for Qurayyat.',
    heroLead:
      "We build the AI systems that Qurayyat's fisheries co-operatives, aquaculture operators, coastal-tourism authorities and Muscat-Ash-Sharqiyah corridor logistics operators actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Qurayyat — production AI for Muscat-Governorate fisheries, aquaculture, coastal tourism and corridor logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Qurayyat'),
      'AI for fisheries Qurayyat',
      'AI for aquaculture Oman',
      'AI for coastal tourism Muscat',
      'AI for Muscat Ash Sharqiyah corridor'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries and aquaculture yield, sorting and supply-chain AI for Qurayyat operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain logistics from Qurayyat to Muscat retail and on to the Ash Sharqiyah corridor.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand AI for the Qurayyat coastal-tourism catchment and emerging eco-tourism operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Muscat Municipality and fisheries-authority AI for Qurayyat operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale retail and conversational AI for Qurayyat consumer businesses.' }
    ],
    positioningCopy:
      "Qurayyat sits on the southeastern coast of Muscat Governorate. The AI question is fisheries yield, cold-chain efficiency to Muscat retail, and coastal-tourism demand. We arrive with sector templates calibrated for Omani fisheries and aquaculture and a 12-week path that demonstrates KPI uplift on a single landing site or vessel cohort before scaling to the wider fleet.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Qurayyat fisheries, aquaculture and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Qurayyat operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with fisheries and aquaculture AI in an Omani coastal setting?',
        answer:
          'Our fisheries and aquaculture work covers vessel-tracking ML, catch-volume forecasting, sorting computer vision and cold-chain demand AI. For Qurayyat we calibrate on local landing-site data and integrate with the Ministry of Agriculture, Fisheries and Water Resources reporting interfaces.'
      },
      {
        question: 'Can you handle cold-chain logistics AI from Qurayyat to the Muscat catchment?',
        answer:
          'Yes. Our cold-chain work covers temperature-deviation prediction, shelf-life forecasting, transport-utilisation AI and demand modelling into Muscat retail. We integrate with the operator TMS and the relevant authority interfaces, and demonstrate cycle-time and spoilage uplift on a single product line before scaling.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-muscat', 'ai-development-in-sur', 'ai-development-in-bidiyah']
  },

  // ============================================================
  // DHOFAR GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-salalah',
    name: 'Salalah',
    possessive: "Salalah's",
    region: 'Dhofar Governorate',
    economicSnapshot:
      "Capital of the Dhofar Governorate and the major port city of southern Oman — home to the Port of Salalah (one of the largest trans-shipment hubs in the Indian Ocean), the Salalah Free Zone, a globally distinctive khareef-monsoon tourism economy, and the centre of the frankincense trade.",
    heroEyebrow: 'AI engineering for Salalah',
    heroH1: 'Production AI for Salalah.',
    heroLead:
      "We build the AI systems that Salalah's Port of Salalah operators, Salalah Free Zone tenants, khareef-season tourism authorities, hospitality groups, and Dhofar-Governorate public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Salalah — production AI for the Port of Salalah, Salalah Free Zone tenants, khareef-season tourism authorities, hospitality groups and Dhofar-Governorate public sector. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Salalah'),
      'AI for Port of Salalah',
      'AI for Salalah Free Zone',
      'AI for khareef tourism Dhofar',
      'AI for Dhofar Governorate',
      'AI for frankincense supply chain'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Container-yard CV, vessel-ETA prediction and customs document intelligence for Port of Salalah trans-shipment operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Khareef-season revenue management, demand forecasting and multilingual guest NLP for Dhofar hotel groups.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Salalah Free Zone manufacturing AI — defect detection, throughput optimisation and OEE uplift for downstream operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Khareef-season operations AI and Dhofar-Governorate municipality analytics.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual retail conversational AI for the Salalah khareef tourism flow.' }
    ],
    positioningCopy:
      "Salalah carries two of the most distinctive AI workloads in Oman simultaneously: trans-shipment-grade port AI and a once-a-year khareef-monsoon tourism surge that briefly multiplies operational demand. Both have to be production-grade. We arrive with port-environment reference architectures, surge-capacity forecasting models calibrated for khareef, and a 12-week production path that respects the Dhofar operational calendar.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Salalah port, free-zone, tourism and public-sector teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Salalah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience delivering AI inside the Port of Salalah environment?',
        answer:
          'Our port-environment work covers container-yard computer vision, gate-system OCR, vessel-ETA prediction and trans-shipment optimisation across several GCC ports. For Salalah we ship a reference architecture for your specific terminal operating system (Navis N4, CTOS, in-house) on the first technical session, and a sample inference pipeline against your own video feeds during discovery.'
      },
      {
        question: 'Can you handle the seasonal load profile of khareef-season tourism in Salalah?',
        answer:
          'Yes. Khareef compresses an annual tourism cycle into 90 days. Our revenue-management, demand-forecasting and operations-AI models are recalibrated on Dhofar khareef seasonality at the start of each engagement, with auto-scaling inference clusters for the surge period and a steady-state cost view for the rest of the year.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-taqah', 'ai-development-in-mirbat', 'ai-development-in-thumrait']
  },
  {
    slug: 'ai-development-in-taqah',
    name: 'Taqah',
    possessive: "Taqah's",
    region: 'Dhofar Governorate',
    economicSnapshot:
      "A coastal town east of Salalah, historically a frankincense and fisheries centre, now a growing Dhofar-Governorate tourism destination with archaeological sites, beach hospitality and a small fisheries-and-aquaculture economy.",
    heroEyebrow: 'AI engineering for Taqah',
    heroH1: 'Production AI for Taqah.',
    heroLead:
      "We build the AI systems that Taqah's fisheries co-operatives, archaeology-and-tourism authorities, beach-hospitality operators and Dhofar-Governorate public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Taqah — production AI for Dhofar-Governorate fisheries, archaeology-and-tourism authorities and beach-hospitality operators. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Taqah'),
      'AI for fisheries Taqah',
      'AI for tourism Dhofar coast',
      'AI for archaeology Oman',
      'AI for hospitality Taqah'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand and multilingual guest AI for Taqah beach-hospitality and archaeological-tourism operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries and aquaculture yield, sorting and supply-chain AI for Taqah co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Dhofar-Governorate municipality and antiquities-authority analytics for Taqah operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain fisheries logistics from Taqah to Salalah and beyond.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual visitor-retail AI for Taqah tourism operators.' }
    ],
    positioningCopy:
      "Taqah is a smaller-volume but operationally distinctive Dhofar town — coastal fisheries, archaeology-led tourism and a beach-hospitality belt. The AI brief is yield, demand and multilingual visitor experience. We arrive with fisheries and tourism templates calibrated for Dhofar conditions and a 12-week path that fits the scale of Taqah operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Taqah fisheries, tourism and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Taqah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the smaller-scale operator economics typical of Taqah AI engagements?',
        answer:
          'Yes. Dhofar coastal-town engagements are typically sub-OMR-200K and target a single production system rather than a broad transformation. The discovery is still four weeks fixed-scope and the production path is twelve weeks, but team size, scope and runtime cost are calibrated to the operator scale.'
      },
      {
        question: 'Do you bundle Taqah work with adjacent Dhofar engagements such as Salalah or Mirbat?',
        answer:
          'Yes. Most Dhofar engagements run as a single programme that touches multiple coastal towns at once — Salalah, Taqah, Mirbat and Thumrait — with shared data layers and per-town operational overlays. We can deliver Taqah-only or bundle it inside a Dhofar-wide programme; we will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-salalah', 'ai-development-in-mirbat', 'ai-development-in-thumrait']
  },
  {
    slug: 'ai-development-in-mirbat',
    name: 'Mirbat',
    possessive: "Mirbat's",
    region: 'Dhofar Governorate',
    economicSnapshot:
      'A historic coastal town in eastern Dhofar — formerly a major frankincense and horse trading port, now a small fishing town and an emerging cultural-and-heritage tourism destination.',
    heroEyebrow: 'AI engineering for Mirbat',
    heroH1: 'Production AI for Mirbat.',
    heroLead:
      "We build the AI systems that Mirbat's fisheries co-operatives, heritage-tourism authorities, small-scale hospitality operators and Dhofar-Governorate public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Mirbat — production AI for Dhofar-Governorate fisheries, heritage tourism and small-scale hospitality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mirbat'),
      'AI for fisheries Mirbat',
      'AI for heritage tourism Dhofar',
      'AI for small hospitality Mirbat'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand and multilingual guest AI for Mirbat heritage-tourism and small-resort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Mirbat co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Dhofar-Governorate heritage and antiquities AI for Mirbat operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain fisheries logistics from Mirbat to Salalah retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail AI for Mirbat heritage-tourism operators.' }
    ],
    positioningCopy:
      "Mirbat is a small town with a disproportionately rich heritage and a workable fisheries economy. The AI question is honest and small-scale: yield, demand and visitor experience. We arrive with templates calibrated for Dhofar coastal operators and a 12-week path that demonstrates KPI uplift on a single line before scaling.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mirbat fisheries, heritage-tourism and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mirbat operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the small-operator economics typical of Mirbat AI engagements?',
        answer:
          'Yes. Mirbat-scale engagements are typically sub-OMR-150K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — but team size and scope are sized to the operator.'
      },
      {
        question: 'Do you bundle Mirbat work with adjacent Dhofar engagements?',
        answer:
          'Yes. Mirbat typically benefits from being part of a wider Dhofar programme covering Salalah, Taqah and Thumrait, with shared data layers and per-town operational overlays. We can deliver Mirbat-only or bundle inside a Dhofar-wide programme and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-salalah', 'ai-development-in-taqah', 'ai-development-in-thumrait']
  },
  {
    slug: 'ai-development-in-thumrait',
    name: 'Thumrait',
    possessive: "Thumrait's",
    region: 'Dhofar Governorate',
    economicSnapshot:
      'An interior town in northern Dhofar — historically associated with the Royal Air Force of Oman base at Thumrait, with a small services economy and an increasing role in the upstream oil-and-gas operating area of central-southern Oman.',
    heroEyebrow: 'AI engineering for Thumrait',
    heroH1: 'Production AI for Thumrait.',
    heroLead:
      "We build the AI systems that Thumrait's upstream oil-and-gas operators, services contractors, Dhofar-Governorate public-sector teams and inland-corridor logistics operators actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Thumrait — production AI for inland Dhofar upstream oil-and-gas operators, services contractors and corridor logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Thumrait'),
      'AI for upstream oil and gas Dhofar',
      'AI for services contractors Thumrait',
      'AI for inland logistics Oman'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Field-services scheduling, well-data analytics and predictive-maintenance AI for inland-Dhofar upstream operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Rig-mobilisation logistics and supply-chain AI across the Dhofar inland corridor.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Dhofar-Governorate inland-services AI for Thumrait municipality and authority operations.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Engineering-services workflow AI for Thumrait-headquartered contractors.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Working-capital, invoice-finance and trade-finance AI for Thumrait services contractors.' }
    ],
    positioningCopy:
      "Thumrait is small but operationally meaningful — it sits in the upstream oil-and-gas operating area of central-southern Oman and runs a services economy around field operations. The AI question is field-services efficiency, predictive maintenance and supply-chain cycle time. We arrive with templates calibrated for upstream Omani operations and a 12-week path that integrates with your field-services management software stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Thumrait upstream-services and inland-logistics operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Thumrait operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you tie AI uplift to field-services KPIs for a Thumrait upstream contractor?',
        answer:
          'Yes. Every Thumrait engagement starts with a one-page financial-uplift hypothesis — typically tied to mobilisation cycle time, fleet utilisation, invoice cycle time, or claims-leakage. We bake the KPI into the discovery gate, and the model is contractually expected to move it.'
      },
      {
        question: 'Do you integrate with the field-services management software typically run in Thumrait?',
        answer:
          'Yes. Our reference integrations cover ServiceMax, IFS Field Service Management, Salesforce Field Service, Oracle Field Service Cloud and several in-house Omani-built field-services platforms. We document the integration as part of the discovery deliverable and ship a working sample against your sandbox before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-salalah', 'ai-development-in-taqah', 'ai-development-in-mirbat']
  },

  // ============================================================
  // NORTH AL BATINAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-sohar',
    name: 'Sohar',
    possessive: "Sohar's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      "One of Oman's largest industrial cities and a major commercial port on the Gulf of Oman — home to the Port of Sohar and the Sohar Free Zone, large-scale steel, aluminium, petrochemical and downstream operations, and a deep-water container terminal connected to global trade lanes.",
    heroEyebrow: 'AI engineering for Sohar',
    heroH1: 'Production AI for Sohar.',
    heroLead:
      "We build the AI systems that Sohar's petrochemical majors, steel and aluminium operators, Port of Sohar and Sohar Free Zone tenants, and North Al Batinah industrial-services companies actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Sohar — production AI for petrochemical majors, steel and aluminium operators, the Port of Sohar, Sohar Free Zone tenants and North Al Batinah industrial services. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sohar'),
      'AI for Port of Sohar',
      'AI for Sohar Free Zone',
      'AI for steel manufacturing Oman',
      'AI for aluminium manufacturing Oman',
      'AI for petrochemicals Sohar',
      'industrial AI North Al Batinah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for Sohar petrochemical, steel and aluminium plants.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Container-yard CV, vessel-ETA prediction and customs document intelligence for Port of Sohar operators.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for Sohar downstream operations.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Sohar Free Zone authority operational AI and North Al Batinah municipality analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Sohar industrial zone.' }
    ],
    positioningCopy:
      "Sohar is Oman's largest industrial city outside Duqm and the AI question is industrial-grade by definition. Plants run 24/7. Process safety is non-negotiable. The historian and SCADA stack is dense. We arrive with senior industrial-AI engineers, reference architectures against the petrochemical, steel and aluminium operator stacks, and a 12-week production path that integrates with your HAZOP and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sohar petrochemicals, steel, aluminium and port teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sohar plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and SCADA stack typical of a Sohar petrochemical or metals plant?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major SCADA stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific environment in the discovery phase.'
      },
      {
        question: 'How do you handle process safety and management-of-change for AI in a Sohar plant?',
        answer:
          'Every industrial AI we build for Sohar clients integrates with your existing HAZOP and management-of-change regime. We document failure-mode and effects analysis on the AI decision boundary, build operator-override fallbacks on confidence drops, and align the model evidence pack to IEC 61511 / IEC 61508 functional-safety expectations as appropriate.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-shinas', 'ai-development-in-liwa', 'ai-development-in-saham']
  },
  {
    slug: 'ai-development-in-shinas',
    name: 'Shinas',
    possessive: "Shinas's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      'A coastal wilayat on the northern Al Batinah coast and a small-port and fisheries town with a passenger-ferry link to the UAE, increasing fisheries-and-aquaculture activity, and a growing role in cross-border logistics with the UAE Northern Emirates.',
    heroEyebrow: 'AI engineering for Shinas',
    heroH1: 'Production AI for Shinas.',
    heroLead:
      "We build the AI systems that Shinas's fisheries co-operatives, aquaculture operators, cross-border logistics companies, and North-Al-Batinah public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Shinas — production AI for North-Al-Batinah fisheries, aquaculture, cross-border logistics with the UAE and small-port operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Shinas'),
      'AI for fisheries Shinas',
      'AI for aquaculture North Al Batinah',
      'AI for cross-border logistics Oman UAE',
      'AI for Shinas port'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries and aquaculture yield, sorting and supply-chain AI for Shinas co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cross-border logistics and customs document intelligence for Shinas-UAE freight and passenger flows.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Al-Batinah municipality and fisheries-authority AI for Shinas operations.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand AI for the small Shinas coastal-tourism and ferry-corridor flow.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Cross-border consumer-trade AI for Shinas retailers and SMEs.' }
    ],
    positioningCopy:
      "Shinas is a working coastal town — fisheries, aquaculture and the Oman-UAE ferry corridor. The AI question is yield, cycle time, and cross-border customs efficiency. We arrive with templates calibrated for Omani fisheries and Oman-UAE freight integration, and a 12-week production path that respects the scale and seasonal rhythm of Shinas operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Shinas fisheries, aquaculture and cross-border logistics operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Shinas operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with Oman-UAE cross-border freight and customs AI from Shinas?',
        answer:
          'Yes. Our cross-border work covers customs document intelligence (including Arabic OCR on Bayan Oman customs paperwork and the UAE equivalents), ETA prediction across border-crossings, and freight-pricing AI. We integrate with the operator TMS and the relevant authority interfaces and demonstrate cycle-time uplift on a single freight lane before scaling.'
      },
      {
        question: 'Can you handle aquaculture AI in a North-Al-Batinah coastal setting?',
        answer:
          'Yes. Our aquaculture work covers stocking-density optimisation, feed-conversion ML, water-quality forecasting and harvest-timing models. For Shinas we calibrate on local sea-surface-temperature and stocking data and integrate with the Ministry of Agriculture, Fisheries and Water Resources reporting interfaces.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sohar', 'ai-development-in-liwa', 'ai-development-in-saham']
  },
  {
    slug: 'ai-development-in-liwa',
    name: 'Liwa',
    possessive: "Liwa's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      "A North-Al-Batinah wilayat north of Sohar — home to a major petrochemicals industrial cluster including the OQ-led Liwa Plastics Industries Complex (LPIC), and a growing petrochemical-supply-chain ecosystem.",
    heroEyebrow: 'AI engineering for Liwa',
    heroH1: 'Production AI for Liwa.',
    heroLead:
      "We build the AI systems that Liwa's petrochemical operators, OQ-ecosystem manufacturers, downstream-services contractors and North-Al-Batinah industrial-supply-chain companies actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Liwa — production AI for OQ-ecosystem petrochemical operators, downstream manufacturers and North-Al-Batinah industrial supply chain. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Liwa'),
      'AI for petrochemicals Liwa',
      'AI for OQ ecosystem',
      'AI for Liwa Plastics Industries Complex',
      'AI for downstream Oman',
      'industrial AI North Al Batinah Liwa'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for Liwa petrochemical and downstream operators.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for Liwa LPIC and adjacent assets.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Petrochemicals supply-chain AI for the Liwa-Sohar-Shinas corridor.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Al-Batinah industrial-authority AI for Liwa operations.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Liwa industrial zone.' }
    ],
    positioningCopy:
      "Liwa is one of Oman's most economically significant petrochemical sites and the AI brief is industrial-grade. Plants run 24/7; the OQ-ecosystem operating expectations are demanding; the historian-and-SCADA stack is non-trivial. We arrive with senior industrial-AI engineers, reference architectures against the petrochemical operator stack, and a 12-week production path that integrates with your existing process-safety and management-of-change regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Liwa petrochemicals, downstream and supply-chain teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Liwa plant and corporate teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of a Liwa petrochemicals complex?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific environment in the discovery phase.'
      },
      {
        question: 'How do you align AI deliverables with OQ-ecosystem governance and Omani process-safety expectations?',
        answer:
          'Every industrial AI we build for Liwa clients integrates with your existing HAZOP and management-of-change regime, documents failure-mode and effects analysis on the AI decision boundary, and aligns the evidence pack to IEC 61511 / IEC 61508 functional-safety expectations and to OQ-style operational governance.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sohar', 'ai-development-in-shinas', 'ai-development-in-saham']
  },
  {
    slug: 'ai-development-in-saham',
    name: 'Saham',
    possessive: "Saham's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      'A North-Al-Batinah coastal wilayat between Sohar and Al Khaburah — historically an agricultural and fisheries town and now an emerging logistics and services support area for the wider Al Batinah industrial corridor.',
    heroEyebrow: 'AI engineering for Saham',
    heroH1: 'Production AI for Saham.',
    heroLead:
      "We build the AI systems that Saham's agricultural co-operatives, fisheries operators, North-Al-Batinah logistics companies and Saham-municipality public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Saham — production AI for North-Al-Batinah agriculture, fisheries, services and corridor logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Saham'),
      'AI for agriculture Saham',
      'AI for fisheries Saham',
      'AI for North Al Batinah corridor logistics'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agriculture, fisheries and food-processing yield, grading and supply-chain AI for Saham co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'North-Al-Batinah corridor logistics from Saham to Sohar, Liwa and the UAE land border.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Al-Batinah municipality and authority AI for Saham operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Saham retail and SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale demand AI for the Saham coastal-tourism flow.' }
    ],
    positioningCopy:
      "Saham is a working town in the Al Batinah industrial-and-agricultural corridor. The AI brief is honest and operational — yield, cycle time, corridor logistics, civic services. We arrive with sector templates calibrated for the Al Batinah operating rhythm and a 12-week production path that demonstrates KPI uplift on a single line before scaling.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Saham agriculture, fisheries, logistics and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Saham operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to mid-size operator economics typical of Saham?',
        answer:
          'Yes. Saham-scale engagements typically sit in the OMR 100K-300K budget band, with a single production system and a tight operator-scale team. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Saham work with adjacent Al Batinah engagements such as Sohar or Al Khaburah?',
        answer:
          'Yes. Most Al Batinah corridor engagements span multiple wilayats with shared data layers and per-town overlays. We can deliver Saham-only or bundle into a corridor-wide programme and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sohar', 'ai-development-in-shinas', 'ai-development-in-al-khaburah']
  },
  {
    slug: 'ai-development-in-al-khaburah',
    name: 'Al Khaburah',
    possessive: "Al Khaburah's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      'A North-Al-Batinah coastal wilayat between Saham and Suwaiq — primarily an agricultural and fisheries town with a small services and retail economy.',
    heroEyebrow: 'AI engineering for Al Khaburah',
    heroH1: 'Production AI for Al Khaburah.',
    heroLead:
      "We build the AI systems that Al Khaburah's agricultural co-operatives, fisheries operators, small-scale food-processing manufacturers and North-Al-Batinah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Al Khaburah — production AI for North-Al-Batinah agriculture, fisheries and small-scale food processing. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Khaburah'),
      'AI for agriculture Al Khaburah',
      'AI for fisheries Al Khaburah',
      'AI for food processing North Al Batinah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agriculture, fisheries and food-processing yield, grading and supply-chain AI for Al Khaburah co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain logistics from Al Khaburah farms and landings to Muscat and Sohar retail.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Al-Batinah municipality and agricultural-authority AI for Al Khaburah operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Al Khaburah retail and SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale demand AI for the Al Khaburah coastal flow.' }
    ],
    positioningCopy:
      "Al Khaburah is a smaller-volume Al Batinah town with a workable agriculture and fisheries economy. The AI brief is yield, cold-chain efficiency and operational uplift on small-operator economics. We arrive with templates calibrated for the Al Batinah operating rhythm and a 12-week production path that fits the scale of Al Khaburah operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Khaburah agriculture, fisheries and food-processing operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Khaburah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the small-operator economics typical of Al Khaburah AI engagements?',
        answer:
          'Yes. Al Khaburah-scale engagements are typically sub-OMR-150K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — but team size and scope are sized to the operator.'
      },
      {
        question: 'Do you bundle Al Khaburah work with adjacent Al Batinah engagements?',
        answer:
          'Yes. Al Khaburah typically benefits from being part of a wider Al Batinah corridor programme covering Saham, Suwaiq and Sohar, with shared data layers and per-town overlays. We can deliver Al Khaburah-only or bundle and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-saham', 'ai-development-in-suwaiq', 'ai-development-in-sohar']
  },
  {
    slug: 'ai-development-in-suwaiq',
    name: 'Suwaiq',
    possessive: "Suwaiq's",
    region: 'North Al Batinah Governorate',
    economicSnapshot:
      'A North-Al-Batinah coastal wilayat with a notable agricultural belt and fisheries economy — particularly known for dates and other agricultural produce flowing to Muscat and the wider Omani retail market.',
    heroEyebrow: 'AI engineering for Suwaiq',
    heroH1: 'Production AI for Suwaiq.',
    heroLead:
      "We build the AI systems that Suwaiq's date and agricultural co-operatives, fisheries operators, food-processing manufacturers and North-Al-Batinah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Suwaiq — production AI for North-Al-Batinah date and agricultural co-operatives, fisheries and small-scale food processing. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Suwaiq'),
      'AI for date industry Suwaiq',
      'AI for agriculture Suwaiq',
      'AI for fisheries Suwaiq',
      'AI for North Al Batinah agri-business'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date-industry, agriculture and food-processing yield, grading and supply-chain AI for Suwaiq co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain and dry-goods logistics from Suwaiq agri-co-operatives to Omani and GCC retail.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Al-Batinah municipality and agricultural-authority AI for Suwaiq operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Suwaiq retail and family businesses.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Working-capital and trade-finance AI for Suwaiq agri-business operators.' }
    ],
    positioningCopy:
      "Suwaiq is a working Al Batinah agricultural town with date production at its core. The AI brief translates directly into co-operative margin: yield prediction at the farm block, grading computer vision on the packing line, cold-chain demand into Omani and GCC retail. We arrive with date-industry templates and a 12-week path that demonstrates KPI uplift on a single SKU before scaling.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Suwaiq date, agriculture and fisheries operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Suwaiq operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the operational rhythm of a Suwaiq date-industry co-operative?',
        answer:
          'Yes. Our date-industry work covers yield prediction at the farm block, automated grading using computer vision on the packing line, demand forecasting into Omani and GCC retail, and Arabic conversational AI for co-operative member services. We calibrate the models on each co-operative’s last three harvests and demonstrate uplift on a single SKU before scaling.'
      },
      {
        question: 'Do you integrate with the retail POS and ERP stacks typically used by Suwaiq agri-businesses?',
        answer:
          'Yes. Our integrations cover Microsoft Dynamics 365, SAP, Oracle, Odoo and several Omani-built agri-business platforms. We document the integration in discovery and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-khaburah', 'ai-development-in-saham', 'ai-development-in-barka']
  },

  // ============================================================
  // SOUTH AL BATINAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-rustaq',
    name: 'Rustaq',
    possessive: "Rustaq's",
    region: 'South Al Batinah Governorate',
    economicSnapshot:
      'A historic interior wilayat in South Al Batinah — home to Rustaq Fort, the surrounding agricultural and date-producing belt, the Ain Al Kasfah hot springs and an emerging cultural-and-heritage tourism economy.',
    heroEyebrow: 'AI engineering for Rustaq',
    heroH1: 'Production AI for Rustaq.',
    heroLead:
      "We build the AI systems that Rustaq's agricultural co-operatives, heritage-tourism authorities, hospitality operators and South-Al-Batinah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Rustaq — production AI for South-Al-Batinah agriculture, heritage tourism and small-scale hospitality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Rustaq'),
      'AI for heritage tourism Rustaq',
      'AI for agriculture Rustaq',
      'AI for South Al Batinah'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand and multilingual guest AI for Rustaq heritage-tourism and hot-springs hospitality operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield, grading and supply-chain AI for Rustaq co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Al-Batinah heritage and antiquities AI for Rustaq operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain agricultural logistics from Rustaq to Muscat retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail AI for Rustaq tourism operators.' }
    ],
    positioningCopy:
      "Rustaq pairs interior agriculture with heritage tourism. The AI question is yield on the agricultural side and demand-and-visitor-experience on the tourism side. We arrive with templates calibrated for both, and a 12-week production path that demonstrates measurable KPI uplift on a single product line or hospitality asset before scaling.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Rustaq agriculture, heritage-tourism and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Rustaq operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with heritage-tourism AI in an interior Omani town?',
        answer:
          'Yes. Our heritage-tourism work covers demand forecasting, multilingual visitor NLP across MSA Arabic, Omani-dialect Arabic and English (with optional German, French, Hindi and Urdu layers), and operational analytics for fort and hot-springs operators. We calibrate on local seasonality and integrate with the Ministry of Heritage and Tourism interfaces.'
      },
      {
        question: 'Can you bundle Rustaq with adjacent South-Al-Batinah engagements?',
        answer:
          'Yes. Rustaq, Nakhal, Barka and Awabi work well as a bundled South-Al-Batinah programme with shared data layers and per-town overlays. We can deliver Rustaq-only or bundle into a governorate-wide programme and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-nakhal', 'ai-development-in-awabi', 'ai-development-in-barka']
  },
  {
    slug: 'ai-development-in-nakhal',
    name: 'Nakhal',
    possessive: "Nakhal's",
    region: 'South Al Batinah Governorate',
    economicSnapshot:
      'A South-Al-Batinah wilayat famous for Nakhal Fort, the Ain A’Thawwarah hot springs, agricultural date production, and growing weekend tourism from Muscat into the foothills of the Western Hajar mountains.',
    heroEyebrow: 'AI engineering for Nakhal',
    heroH1: 'Production AI for Nakhal.',
    heroLead:
      "We build the AI systems that Nakhal's agricultural co-operatives, hot-springs and heritage-tourism operators, weekend-hospitality groups and South-Al-Batinah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Nakhal — production AI for South-Al-Batinah agriculture, heritage tourism, hot-springs hospitality and weekend-tourism flow from Muscat. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Nakhal'),
      'AI for heritage tourism Nakhal',
      'AI for hot springs tourism Oman',
      'AI for weekend tourism Muscat',
      'AI for agriculture Nakhal'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Weekend-tourism demand AI and multilingual guest NLP for Nakhal hot-springs and fort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield, grading and supply-chain AI for Nakhal co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Al-Batinah heritage and antiquities AI for Nakhal operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain agricultural logistics from Nakhal to Muscat retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Weekend visitor-retail AI for Nakhal tourism operators.' }
    ],
    positioningCopy:
      "Nakhal runs a peaked-weekend Muscat-tourism flow alongside its agricultural base. Our AI brief here is to manage that peaked demand — multilingual NLP for guests, dynamic-pricing models for hospitality, and operational forecasting on the agricultural side. We arrive with templates calibrated for weekend-peaked tourism and a 12-week production path that fits the scale of Nakhal operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Nakhal tourism, hospitality and agriculture operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Nakhal operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle weekend-peaked tourism demand in Nakhal?',
        answer:
          'Yes. Our revenue-management and demand-forecasting models are recalibrated on the local weekend-peak load profile at the start of each engagement. The operational dashboard surfaces weekend and weekday views separately to support the steering committee, and the auto-scaling inference layer is sized for the surge.'
      },
      {
        question: 'Do you bundle Nakhal work with adjacent South-Al-Batinah engagements?',
        answer:
          'Yes. Nakhal, Rustaq, Awabi and Barka work well as a bundled programme with shared data layers and per-town overlays. We will price Nakhal-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-rustaq', 'ai-development-in-awabi', 'ai-development-in-barka']
  },
  {
    slug: 'ai-development-in-barka',
    name: 'Barka',
    possessive: "Barka's",
    region: 'South Al Batinah Governorate',
    economicSnapshot:
      'A South-Al-Batinah coastal wilayat on the route between Muscat and Sohar — known for its agricultural belt, halwa production, coastal-tourism operators, and a growing commercial-and-services economy on the Muscat Expressway corridor.',
    heroEyebrow: 'AI engineering for Barka',
    heroH1: 'Production AI for Barka.',
    heroLead:
      "We build the AI systems that Barka's agricultural and halwa-producing operators, coastal-hospitality groups, corridor-logistics companies and South-Al-Batinah public-sector teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Barka — production AI for South-Al-Batinah agriculture, halwa production, coastal hospitality and Muscat-Sohar corridor logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Barka'),
      'AI for agriculture Barka',
      'AI for halwa production Oman',
      'AI for coastal hospitality Barka',
      'AI for Muscat Sohar corridor'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Halwa, food-processing and agricultural yield, grading and supply-chain AI for Barka operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Muscat-Sohar corridor logistics and cold-chain AI for Barka operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Coastal-hospitality demand AI for Barka beach resorts and weekend-tourism operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Al-Batinah municipality and authority AI for Barka operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Barka retail and family businesses.' }
    ],
    positioningCopy:
      "Barka mixes agriculture, halwa production, coastal hospitality and corridor logistics in a single wilayat. The AI brief is operationally diverse but consistently SME-scale: yield, cycle time, hospitality revenue and corridor freight. We arrive with sector templates calibrated for the South-Al-Batinah operating rhythm and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Barka agriculture, halwa, hospitality and logistics operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Barka operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the Muscat-Sohar corridor logistics workload from a Barka operator?',
        answer:
          'Yes. Our corridor-logistics work covers ETA prediction, freight-pricing AI, fleet-utilisation models and customs document intelligence. For Barka we integrate with the operator TMS and the Bayan Oman customs interface, and demonstrate cycle-time uplift on a single freight lane before scaling.'
      },
      {
        question: 'Do you handle Omani-built halwa and food-processing AI work?',
        answer:
          'Yes. Our food-processing work covers grading computer vision on the packing line, yield prediction, batch-quality consistency models and demand forecasting into Omani and GCC retail. For Barka we calibrate on local batch-quality and seasonality data.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-suwaiq', 'ai-development-in-rustaq', 'ai-development-in-muscat']
  },
  {
    slug: 'ai-development-in-awabi',
    name: 'Awabi',
    possessive: "Awabi's",
    region: 'South Al Batinah Governorate',
    economicSnapshot:
      'A small mountain-foothills wilayat in South Al Batinah — primarily agricultural, with a falaj-irrigated date and fruit production base and a growing role in adventure-and-hiking tourism into the Western Hajar mountains.',
    heroEyebrow: 'AI engineering for Awabi',
    heroH1: 'Production AI for Awabi.',
    heroLead:
      "We build the AI systems that Awabi's agricultural co-operatives, falaj-irrigation authorities, adventure-tourism operators and South-Al-Batinah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Awabi — production AI for South-Al-Batinah mountain-foothills agriculture, falaj irrigation, adventure tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Awabi'),
      'AI for falaj irrigation Oman',
      'AI for mountain agriculture Awabi',
      'AI for adventure tourism Oman'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Mountain-foothills date, fruit and agricultural yield AI for Awabi co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Falaj-irrigation authority AI and South-Al-Batinah civic-services analytics for Awabi.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Adventure-tourism demand AI and multilingual guest NLP for Awabi mountain operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain mountain-to-coast agricultural logistics from Awabi to Muscat and Sohar retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Awabi retail and visitor operators.' }
    ],
    positioningCopy:
      "Awabi is small but the falaj-irrigated agriculture is operationally distinctive — and there is a real adventure-tourism demand layer emerging in the Western Hajar foothills. The AI brief is yield, water-allocation modelling, and demand forecasting on the tourism side. We arrive with templates calibrated for mountain-foothills agriculture and a 12-week path that fits small-operator economics.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Awabi agriculture, falaj-irrigation and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Awabi operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience modelling falaj-irrigation water allocation in an Omani setting?',
        answer:
          'Yes. Our falaj-irrigation work covers water-allocation optimisation, leakage detection, sensor-fusion ML on flow data, and yield-uplift modelling tied to allocation patterns. For Awabi we calibrate on local hydrology and integrate with the relevant Omani authority interfaces.'
      },
      {
        question: 'Can you handle small-operator economics typical of Awabi engagements?',
        answer:
          'Yes. Awabi-scale engagements are typically sub-OMR-100K and target a single focused production system — for example, a falaj-allocation model or a date-yield forecaster. The discovery is still four weeks fixed-scope and the production path is twelve weeks, sized to the operator.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-rustaq', 'ai-development-in-nakhal', 'ai-development-in-barka']
  },

  // ============================================================
  // AD DAKHILIYAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-nizwa',
    name: 'Nizwa',
    possessive: "Nizwa's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      "Capital of Ad Dakhiliyah Governorate and the historic capital of inland Oman — home to Nizwa Fort, the Nizwa Souq, the University of Nizwa, a major date-and-agricultural belt, and one of the largest year-round cultural-tourism flows in the Sultanate.",
    heroEyebrow: 'AI engineering for Nizwa',
    heroH1: 'Production AI for Nizwa.',
    heroLead:
      "We build the AI systems that Nizwa's date and agricultural co-operatives, cultural-tourism authorities, heritage-hospitality operators, University-of-Nizwa research labs and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Nizwa — production AI for Ad-Dakhiliyah date and agricultural co-operatives, cultural-tourism authorities, heritage-hospitality operators and University-of-Nizwa research labs. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Nizwa'),
      'AI for cultural tourism Nizwa',
      'AI for date industry Nizwa',
      'AI for heritage hospitality Oman',
      'AI for University of Nizwa research',
      'AI for Ad Dakhiliyah Governorate'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Cultural-tourism demand AI and multilingual guest NLP for Nizwa heritage-hospitality and fort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield, grading and supply-chain AI for Nizwa co-operatives.' },
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML, generative AI and LLM fine-tuning infrastructure for the University of Nizwa.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dakhiliyah heritage and antiquities AI for Nizwa operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail AI and Arabic conversational AI for Nizwa Souq and tourism operators.' }
    ],
    positioningCopy:
      "Nizwa is the largest cultural-tourism flow in inland Oman, with a serious agricultural belt and a research-active university. The AI brief is multi-track: demand and multilingual guest NLP on the tourism side, yield and grading on the agriculture side, and research-grade ML support for the university. We arrive with templates for all three and a 12-week production path that respects Ad-Dakhiliyah operational rhythms.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Nizwa tourism, agriculture, university and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Nizwa team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you support university-research-grade ML work alongside operational engagements in Nizwa?',
        answer:
          'Yes. Where the University of Nizwa or a similar Ad-Dakhiliyah research lab is the buyer, we propose engagements that supplement the in-house research team — senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions.'
      },
      {
        question: 'Can you handle multilingual cultural-tourism NLP for the Nizwa visitor flow?',
        answer:
          'Yes. Every Nizwa visitor-facing NLP we build runs MSA Arabic, Omani-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, German, French and Mandarin layers tuned to the Nizwa heritage-tourism flow. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-bahla', 'ai-development-in-izki', 'ai-development-in-samail']
  },
  {
    slug: 'ai-development-in-bahla',
    name: 'Bahla',
    possessive: "Bahla's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      'A historic Ad-Dakhiliyah wilayat — home to the UNESCO-listed Bahla Fort, a centuries-old pottery and crafts tradition, a date-and-agricultural belt, and a growing cultural-tourism and crafts-export economy.',
    heroEyebrow: 'AI engineering for Bahla',
    heroH1: 'Production AI for Bahla.',
    heroLead:
      "We build the AI systems that Bahla's pottery and crafts co-operatives, cultural-tourism authorities, agricultural co-operatives, heritage-hospitality operators and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Bahla — production AI for Ad-Dakhiliyah pottery and crafts co-operatives, UNESCO-heritage cultural-tourism, agriculture and heritage hospitality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bahla'),
      'AI for UNESCO heritage Bahla',
      'AI for pottery industry Oman',
      'AI for cultural tourism Bahla',
      'AI for crafts export Oman'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'UNESCO-heritage cultural-tourism demand AI and multilingual guest NLP for Bahla fort and surrounding operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Pottery and crafts production AI — quality computer vision and demand forecasting for Bahla co-operatives.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Crafts e-commerce demand AI and multilingual conversational AI for Bahla export operations.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'UNESCO-heritage authority AI and Ad-Dakhiliyah municipality analytics for Bahla.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Crafts-export logistics AI from Bahla to international retail.' }
    ],
    positioningCopy:
      "Bahla pairs a UNESCO-heritage tourism asset with a centuries-old crafts economy. The AI brief is genuinely distinctive: pottery quality CV, crafts-export demand modelling, and multilingual heritage-tourism NLP. We arrive with templates calibrated for crafts-and-tourism operators and a 12-week production path that respects the heritage and the small-scale operator economics.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bahla pottery, crafts, tourism and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bahla operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with pottery-and-crafts production AI?',
        answer:
          'Our crafts-production work covers computer-vision quality grading on hand-shaped items, demand forecasting for export markets, and conversational AI for crafts e-commerce. For Bahla we calibrate the CV models on local production batches and integrate with the co-operative ERP, with a week-four gate on demonstrated grading-consistency uplift.'
      },
      {
        question: 'Can you handle UNESCO-heritage-site visitor analytics for Bahla?',
        answer:
          'Yes. Our heritage-site work covers crowd-density CV, visitor-flow modelling, multilingual NLP for guided experiences, and conservation-aware operational analytics. We align the evidence pack to UNESCO operational expectations and to the relevant Omani heritage-authority requirements.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-nizwa', 'ai-development-in-izki', 'ai-development-in-adam']
  },
  {
    slug: 'ai-development-in-adam',
    name: 'Adam',
    possessive: "Adam's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      'A southern Ad-Dakhiliyah wilayat that serves as the gateway from inland Oman into the central desert and Al Wusta Governorate — with a small agricultural base, growing logistics activity, and a strategic position on the road south to Haima, Duqm and Salalah.',
    heroEyebrow: 'AI engineering for Adam',
    heroH1: 'Production AI for Adam.',
    heroLead:
      "We build the AI systems that Adam's agricultural co-operatives, north-south corridor logistics companies, fuel and services operators on the Salalah road and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Adam — production AI for Ad-Dakhiliyah agriculture, north-south corridor logistics on the Muscat-Salalah road, and services operators. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Adam'),
      'AI for corridor logistics Adam',
      'AI for agriculture Ad Dakhiliyah',
      'AI for Muscat Salalah road'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'North-south corridor logistics AI from Adam along the Muscat-Salalah road, including ETA prediction and fleet utilisation.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agricultural yield and supply-chain AI for Adam co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dakhiliyah municipality and corridor-authority AI for Adam operations.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Fuel and services-operator AI for the Adam-Haima-Duqm corridor.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale corridor-services retail AI for Adam operators.' }
    ],
    positioningCopy:
      "Adam is small in population but strategically important — it sits on the only major road from northern Oman south to Duqm and Salalah, and the AI question is therefore corridor efficiency: ETA prediction, fleet utilisation, fuel-services demand, and last-mile freight to Al Wusta. We arrive with corridor-logistics templates and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Adam corridor logistics, agriculture and services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Adam operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with long-haul corridor-logistics AI in Oman?',
        answer:
          'Yes. Our corridor work covers ETA prediction, fleet-utilisation models, fuel-stop optimisation, and demand modelling for fuel-services and roadside-retail operators. For Adam we calibrate on the Muscat-Salalah corridor traffic pattern and integrate with the operator TMS and the relevant authority interfaces.'
      },
      {
        question: 'Can you bundle Adam with adjacent Al-Wusta or Ad-Dakhiliyah corridor engagements?',
        answer:
          'Yes. Adam often works best as part of a wider Muscat-Salalah corridor programme also touching Haima, Duqm and Nizwa with shared data layers. We will price Adam-only and a corridor-bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-nizwa', 'ai-development-in-bahla', 'ai-development-in-haima']
  },
  {
    slug: 'ai-development-in-izki',
    name: 'Izki',
    possessive: "Izki's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      'A historic Ad-Dakhiliyah agricultural wilayat between Nizwa and Samail — known for its falaj-irrigated date and fruit production and a small heritage-tourism economy around its old quarters and palm groves.',
    heroEyebrow: 'AI engineering for Izki',
    heroH1: 'Production AI for Izki.',
    heroLead:
      "We build the AI systems that Izki's agricultural co-operatives, falaj-irrigation authorities, small-scale heritage-tourism operators and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Izki — production AI for Ad-Dakhiliyah falaj-irrigated agriculture, heritage tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Izki'),
      'AI for falaj irrigation Izki',
      'AI for agriculture Ad Dakhiliyah',
      'AI for heritage tourism Izki'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date, fruit and agricultural yield AI for Izki co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Falaj-irrigation authority AI and Ad-Dakhiliyah civic-services analytics for Izki.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Heritage-tourism demand AI for Izki old-quarter and palm-grove operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain agricultural logistics from Izki to Muscat retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Izki retail operators.' }
    ],
    positioningCopy:
      "Izki runs a long-established falaj-irrigated agricultural economy. The AI brief is yield, water-allocation modelling, and small-scale heritage-tourism demand. We arrive with templates for both and a 12-week production path that fits small-operator economics and respects the falaj-allocation rhythms of the wilayat.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Izki agriculture, falaj-irrigation and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Izki operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you model falaj-irrigation water allocation in Izki?',
        answer:
          'Yes. Our falaj-irrigation work covers water-allocation optimisation, leakage detection, sensor-fusion ML on flow data, and yield-uplift modelling tied to allocation patterns. For Izki we calibrate on local hydrology and integrate with the relevant Omani authority interfaces.'
      },
      {
        question: 'Do you bundle Izki with adjacent Ad-Dakhiliyah engagements?',
        answer:
          'Yes. Izki, Nizwa, Samail and Bidbid work well as a bundled Ad-Dakhiliyah programme covering agriculture, heritage tourism and municipality services. We can deliver Izki-only or bundle and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-nizwa', 'ai-development-in-samail', 'ai-development-in-bidbid']
  },
  {
    slug: 'ai-development-in-samail',
    name: 'Samail',
    possessive: "Samail's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      'A long, populous Ad-Dakhiliyah wilayat covering the Samail Gap — a strategic agricultural and logistics corridor between Muscat and the Omani interior, with a notable date-production belt and a small services economy.',
    heroEyebrow: 'AI engineering for Samail',
    heroH1: 'Production AI for Samail.',
    heroLead:
      "We build the AI systems that Samail's agricultural co-operatives, corridor-logistics operators on the Muscat-Nizwa road, services-and-retail SMEs and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Samail — production AI for Ad-Dakhiliyah corridor agriculture, Muscat-Nizwa road logistics and services SMEs. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Samail'),
      'AI for Samail Gap corridor',
      'AI for agriculture Samail',
      'AI for Muscat Nizwa road'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Muscat-Nizwa corridor logistics AI through the Samail Gap, including ETA and fleet utilisation.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield, grading and supply-chain AI for Samail co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dakhiliyah municipality and corridor-authority AI for Samail operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Corridor-retail demand AI for Samail SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale corridor-tourism demand AI for Samail operators.' }
    ],
    positioningCopy:
      "Samail sits in the Samail Gap, the historic corridor between Muscat and the Omani interior — and the AI brief is therefore inherently about flow: corridor logistics, fleet utilisation, and the agricultural and retail base that supplies the corridor. We arrive with templates calibrated for Muscat-Nizwa corridor flow and a 12-week production path sized to Samail-scale operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Samail corridor logistics, agriculture and services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Samail operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle Muscat-Nizwa corridor logistics AI from a Samail operator?',
        answer:
          'Yes. Our corridor work covers ETA prediction, freight-pricing AI, fleet-utilisation models and demand modelling for fuel and roadside-services operators. For Samail we calibrate on the Samail Gap traffic pattern and integrate with the operator TMS.'
      },
      {
        question: 'Do you bundle Samail with adjacent Ad-Dakhiliyah and Muscat-Governorate engagements?',
        answer:
          'Yes. Samail often works best alongside Bidbid, Izki and Nizwa as a Muscat-Nizwa corridor programme. We will price Samail-only and a corridor-bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-bidbid', 'ai-development-in-izki', 'ai-development-in-nizwa']
  },
  {
    slug: 'ai-development-in-bidbid',
    name: 'Bidbid',
    possessive: "Bidbid's",
    region: 'Ad Dakhiliyah Governorate',
    economicSnapshot:
      'A small Ad-Dakhiliyah wilayat at the northern entrance of the Samail Gap on the road from Muscat — primarily agricultural, with a small services economy serving the Muscat-Nizwa corridor.',
    heroEyebrow: 'AI engineering for Bidbid',
    heroH1: 'Production AI for Bidbid.',
    heroLead:
      "We build the AI systems that Bidbid's agricultural co-operatives, corridor-services operators and Ad-Dakhiliyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Bidbid — production AI for Ad-Dakhiliyah small-scale agriculture, Muscat-Nizwa corridor services and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bidbid'),
      'AI for agriculture Bidbid',
      'AI for corridor services Bidbid',
      'AI for Samail Gap entrance'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale agricultural yield AI for Bidbid co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Muscat-Nizwa corridor-entry logistics AI for Bidbid operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dakhiliyah municipality and corridor-authority AI for Bidbid.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale corridor-retail demand AI for Bidbid SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale corridor-tourism demand AI for Bidbid operators.' }
    ],
    positioningCopy:
      "Bidbid is small but operationally part of the Muscat-Nizwa corridor. The AI brief is honest and small-scale: agricultural yield, corridor-services demand, and civic-services efficiency. We arrive with templates that fit Bidbid-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bidbid agriculture, corridor-services and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bidbid operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to very small-operator economics typical of Bidbid?',
        answer:
          'Yes. Bidbid-scale engagements are typically sub-OMR-80K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — but team size and scope are tightly sized to the operator.'
      },
      {
        question: 'Do you bundle Bidbid into a Muscat-Nizwa corridor programme?',
        answer:
          'Yes. Bidbid typically benefits from being part of a wider Muscat-Nizwa corridor programme with Samail, Izki and Nizwa, sharing data layers and per-town overlays. We will price Bidbid-only and a corridor-bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-samail', 'ai-development-in-muscat', 'ai-development-in-izki']
  },

  // ============================================================
  // NORTH ASH SHARQIYAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-ibra',
    name: 'Ibra',
    possessive: "Ibra's",
    region: 'North Ash Sharqiyah Governorate',
    economicSnapshot:
      'A historic North-Ash-Sharqiyah wilayat — long the regional centre of the Sharqiyah, known for its old quarters, weekly markets, livestock and date trade, and a growing public-sector and SME services economy.',
    heroEyebrow: 'AI engineering for Ibra',
    heroH1: 'Production AI for Ibra.',
    heroLead:
      "We build the AI systems that Ibra's livestock and date markets, agricultural co-operatives, heritage-tourism authorities, services SMEs and North-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Ibra — production AI for North-Ash-Sharqiyah livestock and date markets, agriculture, heritage tourism and services SMEs. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Ibra'),
      'AI for livestock market Ibra',
      'AI for date market Ibra',
      'AI for North Ash Sharqiyah',
      'AI for heritage tourism Ibra'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Livestock, date and agricultural yield, grading and supply-chain AI for Ibra co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Ash-Sharqiyah municipality and authority AI for Ibra operations.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Heritage-tourism demand AI for Ibra old-quarter and market operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Sharqiyah corridor logistics and cold-chain AI for Ibra operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Ibra retail and SMEs.' }
    ],
    positioningCopy:
      "Ibra is the historic centre of the Sharqiyah and a working agricultural and market town. The AI brief mixes livestock-and-date market analytics, heritage-tourism demand modelling, and SME-scale municipality services. We arrive with templates calibrated for North-Ash-Sharqiyah operations and a 12-week production path sized to Ibra-scale operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Ibra livestock, date, tourism and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Ibra operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with livestock-market analytics in an Omani setting?',
        answer:
          'Yes. Our livestock-market work covers pricing-trend ML, demand forecasting, sale-volume analytics and supply-chain mapping. For Ibra we calibrate on the local market cycle and integrate with the relevant co-operative ERP and authority reporting interfaces.'
      },
      {
        question: 'Can you bundle Ibra with adjacent North-Ash-Sharqiyah engagements?',
        answer:
          'Yes. Ibra, Al Mudaybi, Bidiyah and Dima Wa Tayeen work well as a bundled North-Ash-Sharqiyah programme with shared data layers and per-town overlays. We will price Ibra-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-mudaybi', 'ai-development-in-bidiyah', 'ai-development-in-dima-wa-tayeen']
  },
  {
    slug: 'ai-development-in-al-mudaybi',
    name: 'Al Mudaybi',
    possessive: "Al Mudaybi's",
    region: 'North Ash Sharqiyah Governorate',
    economicSnapshot:
      'A North-Ash-Sharqiyah agricultural wilayat south of Ibra with a notable date and fruit production base and a small services and retail economy.',
    heroEyebrow: 'AI engineering for Al Mudaybi',
    heroH1: 'Production AI for Al Mudaybi.',
    heroLead:
      "We build the AI systems that Al Mudaybi's agricultural co-operatives, food-processing SMEs and North-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Al Mudaybi — production AI for North-Ash-Sharqiyah agriculture, food processing and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Mudaybi'),
      'AI for agriculture Al Mudaybi',
      'AI for date industry Al Mudaybi',
      'AI for food processing North Ash Sharqiyah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date, fruit and food-processing yield, grading and supply-chain AI for Al Mudaybi co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain agricultural logistics from Al Mudaybi to Muscat retail.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Ash-Sharqiyah municipality and agricultural-authority AI for Al Mudaybi.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI for Al Mudaybi retail operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale visitor-demand AI for Al Mudaybi operators.' }
    ],
    positioningCopy:
      "Al Mudaybi is a small-volume agricultural town with date production at its core. The AI brief is yield, grading and cold-chain demand modelling. We arrive with date-industry templates and a 12-week production path that demonstrates KPI uplift on a single SKU before scaling.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Mudaybi agriculture and food-processing operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Mudaybi operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle Al-Mudaybi-scale operator economics?',
        answer:
          'Yes. Al-Mudaybi-scale engagements are typically sub-OMR-100K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Al Mudaybi with adjacent North-Ash-Sharqiyah engagements?',
        answer:
          'Yes. Al Mudaybi pairs naturally with Ibra and Bidiyah as a North-Ash-Sharqiyah programme. We will price Al-Mudaybi-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-ibra', 'ai-development-in-bidiyah', 'ai-development-in-sur']
  },
  {
    slug: 'ai-development-in-bidiyah',
    name: 'Bidiyah',
    possessive: "Bidiyah's",
    region: 'North Ash Sharqiyah Governorate',
    economicSnapshot:
      'A North-Ash-Sharqiyah wilayat that serves as the principal gateway to the Wahiba Sands desert — with a growing desert-tourism economy of camps and adventure operators alongside a small agricultural base.',
    heroEyebrow: 'AI engineering for Bidiyah',
    heroH1: 'Production AI for Bidiyah.',
    heroLead:
      "We build the AI systems that Bidiyah's desert-tourism camp operators, adventure-tourism authorities, Wahiba Sands hospitality groups and North-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Bidiyah — production AI for Wahiba Sands desert-tourism camp operators, adventure-tourism authorities and North-Ash-Sharqiyah municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bidiyah'),
      'AI for Wahiba Sands tourism',
      'AI for desert tourism Oman',
      'AI for adventure tourism Bidiyah'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Desert-camp revenue management, demand forecasting and multilingual guest NLP for Bidiyah and Wahiba Sands operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile supply AI from Bidiyah to remote Wahiba Sands camps.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Ash-Sharqiyah tourism-authority AI for Bidiyah and Wahiba operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail and multilingual conversational AI for Bidiyah tourism operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale agricultural and food-processing AI for Bidiyah co-operatives.' }
    ],
    positioningCopy:
      "Bidiyah anchors one of Oman's most distinctive tourism workloads — desert camps in the Wahiba Sands. The AI brief is demand modelling under multi-day-stay seasonality, multilingual guest NLP, last-mile supply optimisation to remote camps, and revenue-management for fragmented operators. We arrive with desert-tourism templates and a 12-week production path calibrated for the Wahiba operating rhythm.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bidiyah desert-tourism, hospitality and camp operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bidiyah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you handle multilingual guest NLP for the international Wahiba Sands flow?',
        answer:
          'Yes. Every guest-facing AI we build for Bidiyah runs MSA Arabic, Omani-dialect Arabic and English as first-class languages, with optional German, French, Italian, Mandarin and Russian layers tuned to typical Wahiba Sands inbound visitor mix. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      },
      {
        question: 'Can you handle last-mile supply AI to remote desert camps?',
        answer:
          'Yes. Our remote-camp work covers demand forecasting, supply consolidation, route optimisation under sand and route-unreliability constraints, and inventory analytics on perishables. For Bidiyah we calibrate on the typical Wahiba Sands camp footprint and demonstrate cycle-time uplift on a single camp before scaling.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-ibra', 'ai-development-in-al-mudaybi', 'ai-development-in-sur']
  },
  {
    slug: 'ai-development-in-dima-wa-tayeen',
    name: 'Dima Wa Tayeen',
    possessive: "Dima Wa Tayeen's",
    region: 'North Ash Sharqiyah Governorate',
    economicSnapshot:
      'A mountain-and-coastal wilayat in North Ash Sharqiyah — agricultural in the interior, with fisheries along the coast at Daghmar and an emerging adventure-tourism and wadi-trekking destination.',
    heroEyebrow: 'AI engineering for Dima Wa Tayeen',
    heroH1: 'Production AI for Dima Wa Tayeen.',
    heroLead:
      "We build the AI systems that Dima Wa Tayeen's mountain agricultural co-operatives, fisheries operators at Daghmar, adventure-tourism authorities and North-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Dima Wa Tayeen — production AI for North-Ash-Sharqiyah mountain agriculture, Daghmar fisheries, adventure tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Dima Wa Tayeen'),
      'AI for mountain agriculture Oman',
      'AI for fisheries Daghmar',
      'AI for adventure tourism Sharqiyah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Mountain agricultural and fisheries yield AI for Dima Wa Tayeen co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Wadi-trekking and adventure-tourism demand AI for Dima Wa Tayeen operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'North-Ash-Sharqiyah municipality AI for Dima Wa Tayeen.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Mountain-to-coast and Daghmar-fisheries logistics AI.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Dima Wa Tayeen visitor and SME operators.' }
    ],
    positioningCopy:
      "Dima Wa Tayeen is small but operationally diverse — mountain agriculture in the interior, coastal fisheries at Daghmar, and an emerging adventure-tourism layer. The AI brief is yield, cycle time and small-scale demand modelling. We arrive with templates for each strand and a 12-week production path sized to local operator economics.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dima Wa Tayeen agriculture, fisheries and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Dima Wa Tayeen operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle mountain-agriculture AI in Dima Wa Tayeen?',
        answer:
          'Yes. Our mountain-agriculture work covers yield prediction calibrated for altitude and microclimate variation, water-allocation modelling and supply-chain demand AI. For Dima Wa Tayeen we calibrate on local data and integrate with the relevant Omani authority interfaces.'
      },
      {
        question: 'Do you bundle Dima Wa Tayeen with adjacent Sharqiyah engagements?',
        answer:
          'Yes. Dima Wa Tayeen typically benefits from being part of a wider Sharqiyah programme with Ibra, Bidiyah and Sur. We will price Dima-Wa-Tayeen-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-ibra', 'ai-development-in-sur', 'ai-development-in-al-mudaybi']
  },

  // ============================================================
  // SOUTH ASH SHARQIYAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-sur',
    name: 'Sur',
    possessive: "Sur's",
    region: 'South Ash Sharqiyah Governorate',
    economicSnapshot:
      'Capital of the South Ash Sharqiyah Governorate and a historic shipbuilding and maritime port on the Gulf of Oman — with the LNG-producing operations at Qalhat nearby, a substantial fisheries economy, and an emerging tourism and coastal-leisure flow.',
    heroEyebrow: 'AI engineering for Sur',
    heroH1: 'Production AI for Sur.',
    heroLead:
      "We build the AI systems that Sur's LNG and downstream-energy operators at Qalhat, fisheries co-operatives, maritime and shipbuilding heritage operators, coastal-tourism authorities and South-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Sur — production AI for Qalhat LNG operations, South-Ash-Sharqiyah fisheries, maritime heritage and coastal tourism. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sur'),
      'AI for Qalhat LNG',
      'AI for fisheries Sur',
      'AI for maritime heritage Oman',
      'AI for South Ash Sharqiyah'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for the Qalhat LNG complex near Sur.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries and food-processing yield, grading and supply-chain AI for Sur co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Coastal-tourism demand AI and multilingual guest NLP for Sur hospitality operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Port and fisheries logistics AI from Sur to the Omani and GCC retail base.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Ash-Sharqiyah municipality and authority AI for Sur operations.' }
    ],
    positioningCopy:
      "Sur is operationally distinctive — a historic shipbuilding port that today also hosts a major LNG complex at Qalhat alongside a working fisheries economy and a growing coastal-tourism flow. The AI brief therefore spans industrial-grade asset AI and SME-scale fisheries-and-tourism work. We arrive with reference architectures for both and a 12-week production path that integrates with your specific operational stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sur LNG, fisheries, tourism and maritime-heritage operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sur operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of the Qalhat LNG operating environment?',
        answer:
          'Yes. Our LNG-environment reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks. We treat the historian as a primary data layer and align AI deliverables to IEC 61511 / IEC 61508 functional-safety expectations and to LNG-operator HAZOP and management-of-change regimes.'
      },
      {
        question: 'Do you handle fisheries-grade AI on the Sur landings?',
        answer:
          'Yes. Our fisheries work covers vessel-tracking ML, catch-volume forecasting, sorting computer vision and cold-chain demand AI. For Sur we calibrate on local landing-site data and integrate with the Ministry of Agriculture, Fisheries and Water Resources reporting interfaces.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-jalan-bani-bu-ali', 'ai-development-in-jalan-bani-bu-hassan', 'ai-development-in-masirah']
  },
  {
    slug: 'ai-development-in-jalan-bani-bu-ali',
    name: 'Jalan Bani Bu Ali',
    possessive: "Jalan Bani Bu Ali's",
    region: 'South Ash Sharqiyah Governorate',
    economicSnapshot:
      'A historic South-Ash-Sharqiyah wilayat south of Sur — known for its old quarters, distinctive mosque architecture, agricultural date production, fisheries and a heritage-tourism flow on the Sur-Ras Al Hadd route.',
    heroEyebrow: 'AI engineering for Jalan Bani Bu Ali',
    heroH1: 'Production AI for Jalan Bani Bu Ali.',
    heroLead:
      "We build the AI systems that Jalan Bani Bu Ali's agricultural co-operatives, fisheries operators, heritage-tourism authorities and South-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Jalan Bani Bu Ali — production AI for South-Ash-Sharqiyah agriculture, fisheries, heritage tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jalan Bani Bu Ali'),
      'AI for agriculture Jalan Bani Bu Ali',
      'AI for fisheries Jalan Bani Bu Ali',
      'AI for heritage tourism South Ash Sharqiyah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield AI for Jalan Bani Bu Ali co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Heritage-tourism demand AI for Jalan Bani Bu Ali operators on the Sur-Ras Al Hadd route.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Ash-Sharqiyah heritage and antiquities AI for Jalan Bani Bu Ali.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain fisheries and agricultural logistics from Jalan Bani Bu Ali.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail AI for Jalan Bani Bu Ali tourism operators.' }
    ],
    positioningCopy:
      "Jalan Bani Bu Ali is small in population but operationally interesting — historic mosque architecture, a working date and fisheries economy, and a heritage-tourism flow that bundles naturally with Sur. We arrive with templates calibrated for South-Ash-Sharqiyah operators and a 12-week production path that fits the scale of local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jalan Bani Bu Ali agriculture, fisheries and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Jalan Bani Bu Ali operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you bundle Jalan Bani Bu Ali into a wider Sur-area engagement?',
        answer:
          'Yes. Jalan Bani Bu Ali, Jalan Bani Bu Hassan and Sur work well as a South-Ash-Sharqiyah programme with shared data layers and per-town overlays. We will price Jalan-Bani-Bu-Ali-only and a bundle option in the discovery deliverable.'
      },
      {
        question: 'Do you handle small-scale heritage-tourism AI for a wilayat on the Sur-Ras-Al-Hadd route?',
        answer:
          'Yes. Our heritage-tourism work covers demand forecasting, multilingual visitor NLP and operational analytics for fort and old-quarter operators. For Jalan Bani Bu Ali we calibrate on the local route seasonality and align with the relevant Omani heritage-authority requirements.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sur', 'ai-development-in-jalan-bani-bu-hassan', 'ai-development-in-masirah']
  },
  {
    slug: 'ai-development-in-jalan-bani-bu-hassan',
    name: 'Jalan Bani Bu Hassan',
    possessive: "Jalan Bani Bu Hassan's",
    region: 'South Ash Sharqiyah Governorate',
    economicSnapshot:
      'A South-Ash-Sharqiyah wilayat adjacent to Jalan Bani Bu Ali — historic in character, with a date and agricultural production base, fisheries activity, and a small heritage-tourism flow.',
    heroEyebrow: 'AI engineering for Jalan Bani Bu Hassan',
    heroH1: 'Production AI for Jalan Bani Bu Hassan.',
    heroLead:
      "We build the AI systems that Jalan Bani Bu Hassan's agricultural co-operatives, fisheries operators, heritage-tourism authorities and South-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Jalan Bani Bu Hassan — production AI for South-Ash-Sharqiyah agriculture, fisheries, heritage tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jalan Bani Bu Hassan'),
      'AI for agriculture Jalan Bani Bu Hassan',
      'AI for fisheries Jalan Bani Bu Hassan',
      'AI for heritage tourism South Ash Sharqiyah'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield AI for Jalan Bani Bu Hassan co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Heritage-tourism demand AI for Jalan Bani Bu Hassan operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'South-Ash-Sharqiyah municipality AI for Jalan Bani Bu Hassan.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain fisheries and agricultural logistics from Jalan Bani Bu Hassan.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Jalan Bani Bu Hassan operators.' }
    ],
    positioningCopy:
      "Jalan Bani Bu Hassan pairs naturally with Jalan Bani Bu Ali as the second of the two historic Jalan wilayats. The AI brief is yield, demand and small-scale heritage-tourism work. We arrive with templates calibrated for the wider South-Ash-Sharqiyah operating rhythm and a 12-week production path sized to local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jalan Bani Bu Hassan agriculture, fisheries and tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Jalan Bani Bu Hassan operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you bundle Jalan Bani Bu Hassan into a wider Sur-area engagement?',
        answer:
          'Yes. Jalan Bani Bu Hassan, Jalan Bani Bu Ali and Sur work well as a single South-Ash-Sharqiyah programme. We can deliver Jalan-Bani-Bu-Hassan-only or bundle and will price both shapes in the discovery deliverable.'
      },
      {
        question: 'Do you handle small-operator economics typical of Jalan Bani Bu Hassan?',
        answer:
          'Yes. Jalan-Bani-Bu-Hassan-scale engagements are typically sub-OMR-100K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path — sized to the operator.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sur', 'ai-development-in-jalan-bani-bu-ali', 'ai-development-in-masirah']
  },
  {
    slug: 'ai-development-in-masirah',
    name: 'Masirah',
    possessive: "Masirah's",
    region: 'South Ash Sharqiyah Governorate',
    economicSnapshot:
      "An island wilayat off the southeast coast of Oman — home to one of the largest sea-turtle nesting populations in the world, a working fisheries economy, a Royal Air Force of Oman base, and a growing eco-and-adventure tourism flow.",
    heroEyebrow: 'AI engineering for Masirah',
    heroH1: 'Production AI for Masirah.',
    heroLead:
      "We build the AI systems that Masirah's fisheries co-operatives, sea-turtle conservation authorities, eco-tourism operators and South-Ash-Sharqiyah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Masirah — production AI for South-Ash-Sharqiyah island fisheries, sea-turtle conservation, eco-tourism and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Masirah'),
      'AI for fisheries Masirah',
      'AI for sea turtle conservation Oman',
      'AI for eco tourism Masirah',
      'AI for island operations Oman'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Island-fisheries yield, sorting and supply-chain AI for Masirah co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Sea-turtle conservation and environmental-authority AI for Masirah.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Eco-tourism demand AI for Masirah camp and lodge operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Island ferry and supply logistics AI for Masirah operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale visitor-retail AI for Masirah operators.' }
    ],
    positioningCopy:
      "Masirah is an island, which gives the AI brief a distinctive shape — fisheries yield and stock-management on one side, conservation-driven environmental analytics for the sea-turtle population on the other, and logistics constrained by the daily ferry. We arrive with templates calibrated for island operations and a 12-week production path sized to local operator economics.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Masirah fisheries, conservation and eco-tourism operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Masirah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with sea-turtle conservation analytics in an Omani island setting?',
        answer:
          'Yes. Our conservation-AI work covers nesting-site detection from drone imagery, hatchling-survival modelling, beach-visitor-flow analytics with environmental constraints, and reporting automation for environmental authorities. For Masirah we calibrate on local nesting data and align the evidence pack to the Omani environmental-authority requirements.'
      },
      {
        question: 'Can you handle the daily-ferry logistics constraint typical of Masirah supply chains?',
        answer:
          'Yes. Our island-supply work covers demand forecasting under ferry-window constraints, perishable-inventory optimisation, and consolidation of mainland-side shipments. For Masirah we calibrate on the ferry schedule and the local consumption pattern.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sur', 'ai-development-in-jalan-bani-bu-ali', 'ai-development-in-mahout']
  },

  // ============================================================
  // AD DHAHIRAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-ibri',
    name: 'Ibri',
    possessive: "Ibri's",
    region: 'Ad Dhahirah Governorate',
    economicSnapshot:
      "Capital of the Ad Dhahirah Governorate in northwestern Oman — an agricultural, livestock, and mining-services centre with growing logistics activity on the corridor towards the UAE land border and the Ad Dhahirah copper-and-mining belt.",
    heroEyebrow: 'AI engineering for Ibri',
    heroH1: 'Production AI for Ibri.',
    heroLead:
      "We build the AI systems that Ibri's agricultural and livestock co-operatives, Ad-Dhahirah mining-services operators, corridor-logistics companies and Ad-Dhahirah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Ibri — production AI for Ad-Dhahirah agriculture, livestock, mining services and northwestern-corridor logistics. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Ibri'),
      'AI for mining services Ibri',
      'AI for agriculture Ad Dhahirah',
      'AI for livestock Ibri',
      'AI for corridor logistics northwestern Oman'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Mining-services, livestock and agricultural yield, grading and supply-chain AI for Ibri operators.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Mining and minerals-processing AI for the Ad-Dhahirah copper belt around Ibri.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Corridor logistics from Ibri to the UAE land border and to Sohar industrial port.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dhahirah municipality and authority AI for Ibri operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI for Ibri retail and family businesses.' }
    ],
    positioningCopy:
      "Ibri is the capital of Ad Dhahirah and the regional hub for mining services, agriculture and livestock. The AI brief is operational: yield, fleet utilisation, mining-services scheduling and corridor logistics towards the UAE land border. We arrive with templates calibrated for the Ad-Dhahirah operating rhythm and a 12-week production path that integrates with your operator stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Ibri mining-services, agriculture, livestock and logistics operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Ibri operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with mining-services AI in the Ad-Dhahirah copper belt?',
        answer:
          'Yes. Our mining-services work covers fleet-utilisation models, ore-grade prediction from sensor data, predictive maintenance on processing equipment and supply-chain demand AI. For Ibri we calibrate on local production data and integrate with the mining-operator ERP and HSE management systems.'
      },
      {
        question: 'Can you handle corridor logistics AI from Ibri to the UAE land border?',
        answer:
          'Yes. Our cross-border work covers customs document intelligence (including Arabic OCR on Bayan Oman and UAE customs paperwork), ETA prediction across border-crossings, and freight-pricing AI. For Ibri we integrate with the operator TMS and demonstrate cycle-time uplift on a single freight lane before scaling.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-yanqul', 'ai-development-in-dhank', 'ai-development-in-al-buraimi']
  },
  {
    slug: 'ai-development-in-yanqul',
    name: 'Yanqul',
    possessive: "Yanqul's",
    region: 'Ad Dhahirah Governorate',
    economicSnapshot:
      'A small Ad-Dhahirah wilayat northwest of Ibri — historically agricultural, increasingly known for copper-mining operations and mineral-processing activity in the Yanqul mining belt.',
    heroEyebrow: 'AI engineering for Yanqul',
    heroH1: 'Production AI for Yanqul.',
    heroLead:
      "We build the AI systems that Yanqul's copper-mining operators, mineral-processing facilities, mining-services contractors and Ad-Dhahirah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Yanqul — production AI for Ad-Dhahirah copper-mining operators, mineral-processing facilities and mining-services contractors. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Yanqul'),
      'AI for copper mining Oman',
      'AI for mineral processing Yanqul',
      'AI for mining services Ad Dhahirah'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Ore-grade prediction, predictive maintenance and asset-performance AI for Yanqul copper-mining operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Mineral-processing throughput, recovery-rate and quality AI for Yanqul facilities.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Mining supply-chain and concentrate-haulage AI for Yanqul operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dhahirah mining-authority and municipality AI for Yanqul operations.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Mining-camp and industrial real-estate AI for Yanqul operations.' }
    ],
    positioningCopy:
      "Yanqul is small in population but operationally significant on the mining side. The AI brief is industrial: ore-grade prediction, recovery-rate optimisation, predictive maintenance and concentrate-haulage logistics. We arrive with senior industrial-AI engineers, reference architectures against the major mining-operator stacks, and a 12-week production path that integrates with your HSE and operations regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Yanqul copper-mining and mineral-processing operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Yanqul operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with copper-mining AI in an Omani setting?',
        answer:
          'Yes. Our mining work covers ore-grade prediction from XRF and sensor data, recovery-rate optimisation in concentrators, predictive maintenance on draglines and mills, and concentrate-haulage AI. For Yanqul we calibrate on local production data and integrate with the operator ERP and HSE management systems.'
      },
      {
        question: 'How do you align AI deliverables with Omani mining-authority and HSE expectations?',
        answer:
          'Every mining AI we build for Yanqul clients integrates with your existing HSE management system, documents failure-mode analysis on the AI decision boundary, and aligns the evidence pack to the relevant Omani mining-authority and safety-regime expectations.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-ibri', 'ai-development-in-dhank', 'ai-development-in-al-buraimi']
  },
  {
    slug: 'ai-development-in-dhank',
    name: 'Dhank',
    possessive: "Dhank's",
    region: 'Ad Dhahirah Governorate',
    economicSnapshot:
      'A small Ad-Dhahirah agricultural wilayat — primarily known for date production and a small-scale services and retail economy serving the Ibri-Yanqul corridor.',
    heroEyebrow: 'AI engineering for Dhank',
    heroH1: 'Production AI for Dhank.',
    heroLead:
      "We build the AI systems that Dhank's agricultural co-operatives, date-industry operators, small-services SMEs and Ad-Dhahirah municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Dhank — production AI for Ad-Dhahirah agriculture, date industry and small-scale services. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Dhank'),
      'AI for agriculture Dhank',
      'AI for date industry Ad Dhahirah',
      'AI for Dhank municipality'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Date and agricultural yield AI for Dhank co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Ibri-Yanqul corridor logistics AI for Dhank operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ad-Dhahirah municipality AI for Dhank operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Dhank retail and SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale visitor-demand AI for Dhank operators.' }
    ],
    positioningCopy:
      "Dhank is small and operationally agricultural. The AI brief is honest and small-scale: yield, cycle time and civic-services efficiency. We arrive with templates that fit Dhank-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dhank agriculture and small-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Dhank operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to very small-operator economics typical of Dhank?',
        answer:
          'Yes. Dhank-scale engagements are typically sub-OMR-80K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Dhank with adjacent Ad-Dhahirah engagements?',
        answer:
          'Yes. Dhank, Ibri and Yanqul work well as a bundled Ad-Dhahirah programme with shared data layers and per-town overlays. We will price Dhank-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-ibri', 'ai-development-in-yanqul', 'ai-development-in-al-buraimi']
  },

  // ============================================================
  // AL BURAIMI GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-al-buraimi',
    name: 'Al Buraimi',
    possessive: "Al Buraimi's",
    region: 'Al Buraimi Governorate',
    economicSnapshot:
      "Capital of the Al Buraimi Governorate and the principal Omani border town with the UAE — a cross-border trade hub historically linked to Al Ain, with growing logistics, retail and family-business activity, and a strategic position on the Oman-UAE corridor.",
    heroEyebrow: 'AI engineering for Al Buraimi',
    heroH1: 'Production AI for Al Buraimi.',
    heroLead:
      "We build the AI systems that Al Buraimi's cross-border trade and logistics operators, family-business retail groups, agricultural co-operatives and Al-Buraimi municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Al Buraimi — production AI for Oman-UAE cross-border trade, logistics, family-business retail and Al-Buraimi municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Buraimi'),
      'AI for cross-border trade Al Buraimi',
      'AI for Oman UAE logistics',
      'AI for Al Buraimi Governorate',
      'AI for border-city retail Oman'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Oman-UAE cross-border freight, customs and ETA-prediction AI for Al Buraimi operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Border-city retail demand AI and Arabic conversational AI for Al Buraimi family businesses.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Cross-border trade-finance AI for Al-Buraimi-headquartered traders.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Buraimi municipality and customs-authority AI for the border-corridor operation.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Light-manufacturing and agri-business AI for Al-Buraimi co-operatives.' }
    ],
    positioningCopy:
      "Al Buraimi is the border with the UAE — and the AI brief is therefore inherently cross-border: customs document intelligence, freight ETA, trade-finance and the retail flow that follows the border crossing. We arrive with Oman-UAE customs and corridor templates already calibrated and a 12-week production path that integrates with the Bayan Oman customs and UAE federal customs interfaces.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Buraimi cross-border, retail and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Buraimi operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience integrating with Bayan Oman customs and UAE customs interfaces?',
        answer:
          'Yes. Our cross-border integrations cover Bayan Oman customs, UAE federal customs, the major port-community systems and the principal Omani and UAE TMS platforms. We document the integration surface as part of the discovery deliverable and ship a working sample against your sandbox environment before contract sign on the build phase.'
      },
      {
        question: 'Can you handle the dual-jurisdiction governance posture typical of Al Buraimi operators?',
        answer:
          'Yes. Many Al Buraimi clients operate under both Omani PDPL (Royal Decree 6/2022) and the UAE PDPL. We deliver a dual-jurisdiction evidence pack with both DPIAs, an Oman cybersecurity-framework mapping and a UAE NCA cross-walk where the cross-border data flow demands it.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mahdah', 'ai-development-in-ibri', 'ai-development-in-yanqul']
  },
  {
    slug: 'ai-development-in-mahdah',
    name: 'Mahdah',
    possessive: "Mahdah's",
    region: 'Al Buraimi Governorate',
    economicSnapshot:
      'A small Al-Buraimi-Governorate wilayat near the UAE border — primarily agricultural, with a small services economy and a strategic position on local cross-border activity.',
    heroEyebrow: 'AI engineering for Mahdah',
    heroH1: 'Production AI for Mahdah.',
    heroLead:
      "We build the AI systems that Mahdah's agricultural co-operatives, cross-border services SMEs and Al-Buraimi municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Mahdah — production AI for Al-Buraimi-Governorate agriculture, cross-border services and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mahdah'),
      'AI for agriculture Mahdah',
      'AI for cross-border services Al Buraimi',
      'AI for Mahdah municipality'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agricultural yield AI for Mahdah co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cross-border services and small-freight AI for Mahdah.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Buraimi municipality AI for Mahdah operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Mahdah retail.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale visitor-demand AI for Mahdah operators.' }
    ],
    positioningCopy:
      "Mahdah is small but sits within the Al-Buraimi cross-border economic context. The AI brief is operationally small-scale: yield, cross-border services and civic efficiency. We arrive with templates that fit Mahdah-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mahdah agriculture and small-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mahdah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle very small-operator economics typical of Mahdah?',
        answer:
          'Yes. Mahdah-scale engagements are typically sub-OMR-80K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Mahdah work with adjacent Al-Buraimi engagements?',
        answer:
          'Yes. Mahdah typically benefits from being part of a wider Al-Buraimi programme with the capital Al Buraimi. We will price Mahdah-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-buraimi', 'ai-development-in-ibri', 'ai-development-in-yanqul']
  },

  // ============================================================
  // AL WUSTA GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-haima',
    name: 'Haima',
    possessive: "Haima's",
    region: 'Al Wusta Governorate',
    economicSnapshot:
      "Capital of the Al Wusta Governorate in central Oman — a desert town that serves as the administrative centre for the central desert and the gateway between the populated north and Duqm in the south.",
    heroEyebrow: 'AI engineering for Haima',
    heroH1: 'Production AI for Haima.',
    heroLead:
      "We build the AI systems that Haima's central-desert public-sector teams, corridor-logistics operators on the Muscat-Duqm-Salalah road, services contractors and Al-Wusta municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Haima — production AI for Al-Wusta public-sector, Muscat-Duqm-Salalah corridor logistics and services contractors. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Haima'),
      'AI for Al Wusta Governorate',
      'AI for central desert logistics Oman',
      'AI for Haima municipality'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Muscat-Duqm-Salalah corridor logistics AI for Haima operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Wusta municipality and governorate AI for Haima operations.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Upstream-services AI for the central-desert oil-and-gas operating area around Haima.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Corridor-services retail demand AI for Haima.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale corridor-stop hospitality demand AI for Haima.' }
    ],
    positioningCopy:
      "Haima is small in population but operationally central — it is the administrative seat of Al Wusta and the principal corridor stop between the populated north and Duqm. The AI brief is corridor logistics, services-scheduling and Al-Wusta public-sector operations. We arrive with templates calibrated for central-corridor flow and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Haima corridor-logistics, services and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Haima operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle Muscat-Duqm-Salalah corridor logistics AI from Haima?',
        answer:
          'Yes. Our corridor work covers ETA prediction, freight-pricing AI, fleet-utilisation models and demand modelling for fuel and roadside-services operators. For Haima we calibrate on the central-desert traffic pattern and integrate with the operator TMS.'
      },
      {
        question: 'Do you bundle Haima with adjacent Al-Wusta engagements such as Duqm or Mahout?',
        answer:
          'Yes. Haima often works best alongside Duqm and Mahout as an Al-Wusta corridor and SEZ programme. We will price Haima-only and a corridor-bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-duqm', 'ai-development-in-mahout', 'ai-development-in-adam']
  },
  {
    slug: 'ai-development-in-duqm',
    name: 'Duqm',
    possessive: "Duqm's",
    region: 'Al Wusta Governorate',
    economicSnapshot:
      "The Special Economic Zone at Duqm (SEZAD) — Oman's largest Vision 2040 industrial flagship, with a deep-water port, a dry dock, a refinery (OQ8), petrochemicals, logistics, fisheries and tourism investment, and one of the largest infrastructure programmes in the GCC.",
    heroEyebrow: 'AI engineering for Duqm',
    heroH1: 'Production AI for Duqm.',
    heroLead:
      "We build the AI systems that Duqm's SEZAD tenants, port and dry-dock operators, OQ8 refinery and petrochemical teams, logistics majors, fisheries clusters and Vision-2040 programme offices actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT, Oman PDPL and the relevant sector regulator.",
    metaDescription:
      'AI development company in Duqm — production AI for SEZAD tenants, the Port of Duqm and dry dock, the OQ8 refinery and petrochemicals, Duqm fisheries and Vision-2040 programme offices. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Duqm'),
      'AI for SEZAD',
      'AI for Port of Duqm',
      'AI for Duqm dry dock',
      'AI for OQ8 refinery',
      'AI for Vision 2040 Duqm',
      'AI for Duqm fisheries cluster',
      'industrial AI Al Wusta'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Container-yard CV, vessel-ETA prediction and customs document intelligence for the Port of Duqm and SEZAD logistics operators.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for the OQ8 refinery and Duqm petrochemicals.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Dry-dock operations, defect detection and OEE uplift AI for Duqm industrial tenants.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'SEZAD authority and Vision-2040 programme-office AI for Duqm operations.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and SEZAD asset-utilisation AI for the Duqm zone.' }
    ],
    positioningCopy:
      "Duqm is the AI flagship of Vision 2040 — and the brief is industrial-grade by definition. SEZAD operators want production AI that earns its keep at scale. Port, refinery, dry dock and petrochemicals all run 24/7; the governance overhead is real; the programme schedule is the master. We arrive with senior industrial-AI engineers, reference architectures against the relevant operator stacks, and a 12-week production path that slots inside the SEZAD programme cadence.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Duqm SEZAD, port, refinery, dry-dock and fisheries teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Duqm operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you deliver into SEZAD-tenant programmes with a Vision-2040 reporting overhead?',
        answer:
          'Yes — most of our Duqm engagements are scoped under SEZAD-tenant master agreements with explicit Vision-2040 programme reporting. We are familiar with the SEZAD gating rhythm, the master-schedule constraint and the typical sponsor governance overhead, and we structure the 12-week production path to slot into your programme schedule and steering cadence.'
      },
      {
        question: 'Can you integrate AI with the historian and DCS typical of the OQ8 refinery and Duqm petrochemicals?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks. We treat the historian as a primary data layer and align AI deliverables to IEC 61511 / IEC 61508 functional-safety expectations and to refinery-operator HAZOP and management-of-change regimes.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-haima', 'ai-development-in-mahout', 'ai-development-in-sur']
  },
  {
    slug: 'ai-development-in-mahout',
    name: 'Mahout',
    possessive: "Mahout's",
    region: 'Al Wusta Governorate',
    economicSnapshot:
      'An Al-Wusta coastal wilayat between Duqm and Sur — known for fisheries, the Barr Al Hikman wetlands (a major migratory-bird habitat), and a small services economy supporting the Al-Wusta coastline.',
    heroEyebrow: 'AI engineering for Mahout',
    heroH1: 'Production AI for Mahout.',
    heroLead:
      "We build the AI systems that Mahout's fisheries co-operatives, environmental and conservation authorities (notably for the Barr Al Hikman wetlands), coastal-services operators and Al-Wusta municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Mahout — production AI for Al-Wusta fisheries, Barr Al Hikman wetlands conservation, coastal services and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mahout'),
      'AI for fisheries Mahout',
      'AI for Barr Al Hikman wetlands',
      'AI for environmental conservation Oman',
      'AI for Al Wusta coast'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Mahout co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Environmental and conservation AI for Barr Al Hikman wetlands and Al-Wusta municipality operations.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Eco-tourism demand AI for Mahout and Barr Al Hikman operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain fisheries logistics from Mahout to Muscat and Duqm.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale visitor and resident demand AI for Mahout.' }
    ],
    positioningCopy:
      "Mahout is small but ecologically distinctive — the Barr Al Hikman wetlands rank as one of the most important migratory-bird habitats in the western Indian Ocean. The AI brief mixes fisheries yield, environmental analytics for conservation, and small-operator economics. We arrive with templates for each and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mahout fisheries, conservation and small-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mahout operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with wetland-conservation AI in an Omani setting?',
        answer:
          'Yes. Our conservation-AI work covers migratory-bird-population modelling from imagery, habitat-quality forecasting, visitor-flow analytics under environmental constraints, and reporting automation for environmental authorities. For Mahout and Barr Al Hikman we calibrate on local seasonality and align the evidence pack to Omani environmental-authority requirements.'
      },
      {
        question: 'Can you bundle Mahout work with adjacent Al-Wusta engagements?',
        answer:
          'Yes. Mahout often pairs with Duqm and Haima as an Al-Wusta programme. We will price Mahout-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-duqm', 'ai-development-in-haima', 'ai-development-in-masirah']
  },

  // ============================================================
  // MUSANDAM GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-khasab',
    name: 'Khasab',
    possessive: "Khasab's",
    region: 'Musandam Governorate',
    economicSnapshot:
      'Capital of the Musandam Governorate at the northern tip of the Arabian Peninsula — a fjord-tourism destination, a fisheries centre, and a strategic location on the Strait of Hormuz with significant maritime and tourism activity.',
    heroEyebrow: 'AI engineering for Khasab',
    heroH1: 'Production AI for Khasab.',
    heroLead:
      "We build the AI systems that Khasab's fjord-tourism operators, fisheries co-operatives, hospitality groups, maritime-services contractors and Musandam municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Khasab — production AI for Musandam fjord tourism, fisheries, hospitality, maritime services and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Khasab'),
      'AI for fjord tourism Khasab',
      'AI for fisheries Musandam',
      'AI for maritime services Khasab',
      'AI for Musandam Governorate'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Fjord-tourism demand AI and multilingual guest NLP for Khasab dhow-cruise and resort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Khasab co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Musandam maritime and cross-border ferry logistics AI from Khasab.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Musandam municipality and maritime-authority AI for Khasab operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail and multilingual conversational AI for Khasab tourism operators.' }
    ],
    positioningCopy:
      "Khasab anchors Oman's most geographically distinctive tourism workload — the Musandam fjords. The AI brief is demand modelling for short-stay tourists, multilingual NLP across European, GCC and South-Asian visitor flows, fisheries yield on the working side, and maritime-services AI on the Strait-of-Hormuz operating frontier. We arrive with templates calibrated for Musandam operations and a 12-week production path that respects the operational rhythm of the exclave.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Khasab tourism, fisheries and maritime operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Khasab operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with fjord-tourism multilingual NLP in a Musandam setting?',
        answer:
          'Yes. Every guest-facing AI we build for Khasab runs MSA Arabic, Omani-dialect Arabic and English as first-class languages, with optional German, French, Italian, Mandarin, Hindi and Urdu layers tuned to typical Musandam dhow-cruise and resort visitor mix. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      },
      {
        question: 'Can you handle the exclave-logistics constraint typical of Musandam supply chains?',
        answer:
          'Yes. Musandam is geographically separated from mainland Oman, with supply flowing via the UAE land corridor or by sea. Our supply-chain work covers demand forecasting under that constraint, perishable-inventory optimisation, and consolidation of mainland and cross-border shipments. For Khasab we calibrate on the local route and seasonality pattern.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-dibba-al-bayah', 'ai-development-in-bukha', 'ai-development-in-madha']
  },
  {
    slug: 'ai-development-in-dibba-al-bayah',
    name: 'Dibba Al Bayah',
    possessive: "Dibba Al Bayah's",
    region: 'Musandam Governorate',
    economicSnapshot:
      "A coastal Musandam wilayat at the southern end of the governorate — known for its scenic coastline, growing eco-and-resort tourism flow, fisheries and a small services economy.",
    heroEyebrow: 'AI engineering for Dibba Al Bayah',
    heroH1: 'Production AI for Dibba Al Bayah.',
    heroLead:
      "We build the AI systems that Dibba Al Bayah's eco-and-resort tourism operators, fisheries co-operatives, Musandam coastal-services contractors and Musandam municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Dibba Al Bayah — production AI for Musandam eco-and-resort tourism, fisheries, coastal services and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Dibba Al Bayah'),
      'AI for eco tourism Dibba',
      'AI for resort tourism Musandam',
      'AI for fisheries Dibba Al Bayah'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Eco-resort revenue management, demand forecasting and multilingual guest NLP for Dibba Al Bayah operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Dibba Al Bayah co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Musandam coastal logistics and supply AI for Dibba Al Bayah operations.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Musandam municipality AI for Dibba Al Bayah operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Visitor-retail AI for Dibba Al Bayah operators.' }
    ],
    positioningCopy:
      "Dibba Al Bayah pairs a working fisheries base with an emerging eco-and-resort tourism economy. The AI brief is yield, demand and small-operator economics. We arrive with templates calibrated for Musandam operations and a 12-week production path sized to local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dibba Al Bayah tourism, fisheries and small-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Dibba Al Bayah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you handle eco-resort revenue and demand AI in a Musandam coastal setting?',
        answer:
          'Yes. Our eco-resort work covers revenue management, demand forecasting on Musandam seasonality, multilingual guest NLP and operational analytics on small-footprint resorts. For Dibba Al Bayah we calibrate on the local visitor pattern and integrate with the operator PMS.'
      },
      {
        question: 'Can you bundle Dibba Al Bayah with adjacent Musandam engagements?',
        answer:
          'Yes. Dibba Al Bayah, Khasab, Bukha and Madha work well as a bundled Musandam programme with shared data layers and per-town overlays. We will price Dibba-Al-Bayah-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-khasab', 'ai-development-in-bukha', 'ai-development-in-madha']
  },
  {
    slug: 'ai-development-in-bukha',
    name: 'Bukha',
    possessive: "Bukha's",
    region: 'Musandam Governorate',
    economicSnapshot:
      'A small Musandam coastal wilayat with a historic fort, an active fisheries economy, and a growing small-tourism flow benefiting from proximity to Khasab and the Musandam fjords.',
    heroEyebrow: 'AI engineering for Bukha',
    heroH1: 'Production AI for Bukha.',
    heroLead:
      "We build the AI systems that Bukha's fisheries co-operatives, small-tourism operators, heritage-authority teams and Musandam municipality services actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Bukha — production AI for Musandam fisheries, small-scale tourism, heritage and municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bukha'),
      'AI for fisheries Bukha',
      'AI for small-scale tourism Musandam',
      'AI for Bukha heritage'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale fisheries yield and supply-chain AI for Bukha co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale tourism demand AI for Bukha operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Musandam heritage and municipality AI for Bukha operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Musandam coastal logistics AI for Bukha operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Bukha SMEs.' }
    ],
    positioningCopy:
      "Bukha is small but operationally part of the Musandam exclave economy. The AI brief is yield, demand and civic services at small-operator scale. We arrive with templates that fit Bukha-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bukha fisheries, tourism and small-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bukha operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to small-operator economics typical of Bukha?',
        answer:
          'Yes. Bukha-scale engagements are typically sub-OMR-80K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Bukha into a wider Musandam programme?',
        answer:
          'Yes. Bukha typically benefits from being part of a wider Musandam programme with Khasab, Dibba Al Bayah and Madha. We will price Bukha-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-khasab', 'ai-development-in-dibba-al-bayah', 'ai-development-in-madha']
  },
  {
    slug: 'ai-development-in-madha',
    name: 'Madha',
    possessive: "Madha's",
    region: 'Musandam Governorate (exclave)',
    economicSnapshot:
      'A small Omani exclave fully surrounded by UAE territory in the Musandam-related area — primarily agricultural, with a small services-and-retail economy and a notable cross-border operational context.',
    heroEyebrow: 'AI engineering for Madha',
    heroH1: 'Production AI for Madha.',
    heroLead:
      "We build the AI systems that Madha's agricultural co-operatives, small-services operators, cross-border family businesses and Musandam-related municipality teams actually put into production — staffed by named senior engineers, priced in OMR, and aligned to MTCIT and Oman PDPL.",
    metaDescription:
      'AI development company in Madha — production AI for Omani-exclave agriculture, cross-border small services and municipality operations inside Madha. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Madha'),
      'AI for Omani exclave Madha',
      'AI for cross-border services Oman UAE',
      'AI for Madha agriculture'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale agricultural yield AI for Madha co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cross-border services and small-freight AI for the Madha exclave context.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Musandam-related municipality AI for Madha operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Cross-border small-retail demand AI for Madha SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale visitor-demand AI for Madha.' }
    ],
    positioningCopy:
      "Madha is operationally distinctive as a small Omani exclave fully surrounded by UAE territory — the AI brief is therefore both small-operator and inherently cross-border in context. We arrive with templates that fit small-exclave economics, dual-jurisdiction PDPL-aware data handling, and a 12-week production path sized to local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Madha agriculture, services and small SMEs.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Madha operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'How do you handle the dual-jurisdiction context for an exclave operator in Madha?',
        answer:
          'Madha is Omani territory and Oman PDPL (Royal Decree 6/2022) applies; the surrounding territory is UAE and many operators run dual-jurisdiction operations. We deliver a dual-jurisdiction evidence pack with an Oman PDPL DPIA, a UAE PDPL DPIA where the data flow demands it, and a clear data-residency posture aligned to both regulators.'
      },
      {
        question: 'Can you scope to very small-operator economics typical of Madha?',
        answer:
          'Yes. Madha-scale engagements are typically sub-OMR-60K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path — but tightly sized to the operator.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-khasab', 'ai-development-in-bukha', 'ai-development-in-dibba-al-bayah']
  },
];

export function getOmaniCityBySlug(slug: string): OmaniCity | undefined {
  return OMANI_CITIES.find((c) => c.slug === slug);
}

export const OMANI_CITY_SLUGS = OMANI_CITIES.map((c) => c.slug);
