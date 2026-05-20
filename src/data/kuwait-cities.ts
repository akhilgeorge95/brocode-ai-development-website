/**
 * Per-city SEO and content data for the /kuwait/ai-development-in-[city] pages.
 *
 * Each entry drives a fully SEO-optimised landing page for a Kuwaiti city. The
 * page template lives at src/app/kuwait/[slug]/page.tsx and is rendered statically
 * via generateStaticParams.
 */

export type KuwaitiCity = {
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

export const KUWAITI_CITIES: KuwaitiCity[] = [
  // ============================================================
  // AL ASIMAH (CAPITAL) GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-kuwait-city',
    name: 'Kuwait City',
    possessive: "Kuwait City's",
    region: 'Al Asimah (Capital) Governorate',
    economicSnapshot:
      "Kuwait's capital and the regulatory, financial and government centre of the State — home to the Central Bank of Kuwait, the Capital Markets Authority, Boursa Kuwait, the largest Kuwaiti banks (NBK, KFH and peers), ministerial headquarters, CITRA, and the headquarters of most Kuwait Vision 2035 (New Kuwait) programmes.",
    heroEyebrow: 'AI engineering for Kuwait City',
    heroH1: 'Production AI for Kuwait City.',
    heroLead:
      "We build the AI systems that Kuwait City's regulators, banks, Boursa-Kuwait-listed firms, ministries, telecom operators and Kuwait Vision 2035 programme offices actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CBK, CMA-Kuwait, CITRA-DPPR (Resolution No. 26/2021), NCSC-NCSF and KIAS from day one.",
    metaDescription:
      "AI development company in Kuwait City — production AI for CBK-supervised banks, Boursa-Kuwait-listed firms, Kuwaiti ministries, telecom operators and Vision 2035 (New Kuwait) programme offices. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth, KWD billing and a 12-week production path. ISO 27001, SOC 2 Type II, ISO 42001.",
    keywords: [
      ...sharedNlpKeywords('Kuwait City'),
      'AI development company Kuwait capital',
      'Kuwait City AI services',
      'CBK model risk AI Kuwait City',
      'CMA Kuwait AI',
      'Boursa Kuwait AI',
      'CITRA DPPR AI Kuwait City',
      'NCSC NCSF AI Kuwait City',
      'KIAS AI Kuwait City',
      'Kuwait National AI Strategy partner Kuwait City',
      'Vision 2035 AI Kuwait City',
      'AI for NBK',
      'AI for KFH'
    ],
    sectorAngles: [
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'CBK model risk files, AML, fraud and credit AI for Kuwait-City-headquartered banks (NBK, KFH and peers).' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'CITRA-aligned and Kuwait-National-AI-Strategy-mapped AI for ministries and authorities in Kuwait City.' },
      { name: 'Capital markets', href: '/industries/banking-financial-services', angle: 'CMA-Kuwait-aligned surveillance, NLP and analytics for Boursa Kuwait issuers and asset managers.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for Kuwait City hospital networks and MoH authorities.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Kuwait City CBD developers and Vision 2035 sponsors.' }
    ],
    positioningCopy:
      "Kuwait City is where the procurement-committee bar is highest in the State — and where CBK, CMA-Kuwait, CITRA, NCSC and KIAS expectations land first. We arrive with the evidence pack already drafted: DPPR DPIA against CITRA Resolution No. 26/2021, CBK-style model risk file, KIAS and NCSC-NCSF controls mapping, and a written 12-week production path that fits inside the steering-committee cadence Kuwait City boards run on.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Kuwait City banks, Boursa firms, ministries and Vision 2035 programme offices.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Kuwait City team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you deliver inside CBK, CMA-Kuwait, CITRA-DPPR and KIAS expectations for a Kuwait-City-headquartered entity?',
        answer:
          'Yes. Every Kuwait City engagement ships a DPPR Data Protection Impact Assessment aligned to CITRA Resolution No. 26/2021, a CBK-style model risk file where the entity is CBK-supervised (and a CMA-Kuwait cross-walk for Boursa-Kuwait-listed firms), an NCSC National Cybersecurity Framework and Kuwait Information Assurance Standard (KIAS) controls mapping, and a CITRA / Kuwait National AI Strategy cross-walk. We draft the evidence pack alongside the build — not as a separate workstream after the fact.'
      },
      {
        question: 'Do you co-deliver with a Kuwait-registered partner when a Kuwait City sponsor requires one?',
        answer:
          'Yes. Where a Kuwait City procurement office requires a Kuwait-registered counterparty (common for ministerial entities and CBK-supervised banks), we co-deliver with a vetted Kuwait-resident partner under a transparent flow-down agreement. Brocode engineers remain named on the work; the local partner provides the contracting entity and any required in-country personnel commitments.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-hawalli', 'ai-development-in-salmiya', 'ai-development-in-al-farwaniyah']
  },

  // ============================================================
  // HAWALLI GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-hawalli',
    name: 'Hawalli',
    possessive: "Hawalli's",
    region: 'Hawalli Governorate',
    economicSnapshot:
      "Capital of the Hawalli Governorate and one of the densest urban-and-commercial areas in Kuwait — a long-established centre for retail, services, family businesses, healthcare and education, with strong consumer-and-SME activity flowing into the wider Hawalli-Salmiya commercial belt.",
    heroEyebrow: 'AI engineering for Hawalli',
    heroH1: 'Production AI for Hawalli.',
    heroLead:
      "We build the AI systems that Hawalli's retail and services groups, family-business commercial operators, healthcare networks, education institutions and Hawalli-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Hawalli — production AI for Hawalli-Governorate retail, services, family-business commerce, healthcare and education operators. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Hawalli'),
      'AI for retail Hawalli',
      'AI for healthcare Hawalli',
      'AI for Hawalli Governorate',
      'AI for family business Kuwait'
    ],
    sectorAngles: [
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting, footfall analytics and Arabic conversational AI for Hawalli retail and family-business groups.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for Hawalli hospital networks and clinics.' },
      { name: 'Education', href: '/industries/education', angle: 'Education-sector AI and operational analytics for Hawalli-area schools and institutions.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Hawalli-Governorate municipality and civic-services AI.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Commercial and residential real-estate AI for the Hawalli commercial belt.' }
    ],
    positioningCopy:
      "Hawalli has the densest mix of retail, services, family businesses and consumer demand in Kuwait. The AI brief is footfall, demand modelling, multilingual customer-facing automation and operational uplift across SME and mid-market operators. We arrive with templates calibrated for the Hawalli operating rhythm and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Hawalli retail, healthcare, education and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Hawalli operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the multilingual customer base typical of Hawalli retail and services?',
        answer:
          'Yes. Every customer-facing AI we build for Hawalli runs MSA Arabic, Kuwaiti-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, Tagalog and Bengali layers tuned to the Hawalli consumer mix. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      },
      {
        question: 'Do you bundle Hawalli with adjacent Hawalli-Governorate engagements?',
        answer:
          'Yes. Hawalli, Salmiya, Jabriya, Bayan and Salwa pair naturally as a Hawalli-Governorate programme with shared data layers and per-area overlays. We will price Hawalli-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-salmiya', 'ai-development-in-jabriya', 'ai-development-in-kuwait-city']
  },
  {
    slug: 'ai-development-in-salmiya',
    name: 'Salmiya',
    possessive: "Salmiya's",
    region: 'Hawalli Governorate',
    economicSnapshot:
      "One of Kuwait's most significant retail, hospitality and entertainment districts — home to large mall and lifestyle developments, the Salmiya corniche, a deep expatriate residential base, and a concentration of mid-market and family-business consumer brands.",
    heroEyebrow: 'AI engineering for Salmiya',
    heroH1: 'Production AI for Salmiya.',
    heroLead:
      "We build the AI systems that Salmiya's mall and retail groups, hospitality operators, family-business consumer brands, real-estate developers and Hawalli-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Salmiya — production AI for Hawalli-Governorate mall and retail groups, hospitality, family-business consumer brands and residential real estate. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Salmiya'),
      'AI for retail Salmiya',
      'AI for malls Kuwait',
      'AI for hospitality Salmiya',
      'AI for Salmiya corniche'
    ],
    sectorAngles: [
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Mall footfall analytics, demand forecasting, multilingual conversational AI and supplier-side demand AI for Salmiya mall and family-business operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue management, demand forecasting and multilingual guest NLP for Salmiya hotel and corniche-hospitality operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Mall, lifestyle-centre and residential real-estate analytics for Salmiya developers and asset owners.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Retail-banking and consumer-credit AI for Salmiya-branched Kuwaiti banks.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Hawalli-Governorate municipality and civic-services AI for the Salmiya commercial belt.' }
    ],
    positioningCopy:
      "Salmiya runs one of the densest retail-and-hospitality clusters in Kuwait — and the AI brief is mall footfall, mall basket-size, hospitality revenue management and corniche-hospitality demand. We arrive with mall-operator and hospitality reference architectures and a 12-week production path that integrates with the major PMS, mall-management and POS stacks you already run.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Salmiya mall, retail, hospitality and real-estate teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Salmiya operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you integrate with the major mall-management and PMS stacks typical of Salmiya operators?',
        answer:
          'Yes. Our integrations cover Yardi, MRI and RealPage on the mall-management side, Opera Cloud, Infor HMS and Protel on the hospitality side, and the major revenue-management and CRS stacks. We document the integration in discovery and ship a working sample against your sandbox environment before contract sign on the build phase.'
      },
      {
        question: "Can you handle Salmiya's multilingual expat consumer base?",
        answer:
          'Yes. Every guest- or shopper-facing AI we build for Salmiya runs MSA Arabic, Kuwaiti-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, Tagalog and Bengali layers tuned to the Salmiya expat demographic. We publish per-language intent-recognition accuracy in the contract.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-hawalli', 'ai-development-in-bayan', 'ai-development-in-salwa']
  },
  {
    slug: 'ai-development-in-salwa',
    name: 'Salwa',
    possessive: "Salwa's",
    region: 'Hawalli Governorate',
    economicSnapshot:
      'An upscale residential district in the Hawalli Governorate — known for high-end villas, premium residential property and a small but established cluster of professional services and family-office operations.',
    heroEyebrow: 'AI engineering for Salwa',
    heroH1: 'Production AI for Salwa.',
    heroLead:
      "We build the AI systems that Salwa's premium-residential developers, family-office operators, professional-services firms and Hawalli-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Salwa — production AI for Hawalli-Governorate premium residential, family-office and professional-services operators. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Salwa'),
      'AI for premium residential Salwa',
      'AI for family office Kuwait Salwa',
      'AI for professional services Salwa'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Premium-residential valuation, leasing and tenant analytics for Salwa developers and family-office landlords.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Wealth-management and family-office AI for Salwa-headquartered investors and treasury teams.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Hawalli-Governorate municipality AI for Salwa civic-services.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'High-value-customer demand AI and multilingual conversational AI for Salwa retail operators.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Premium-clinic and concierge-healthcare operational AI for Salwa providers.' }
    ],
    positioningCopy:
      "Salwa is small in footprint but high-value in operator profile — premium residential and family-office buyers. The AI brief is wealth-tier analytics, premium-residential PropTech and concierge-services operational efficiency. We arrive with templates calibrated for high-value Kuwaiti operators and a 12-week production path that fits the scale of family-office and premium-residential operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Salwa residential, family-office and professional-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Salwa team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with family-office wealth and treasury AI in a Kuwaiti setting?',
        answer:
          'Yes. Our family-office work covers portfolio analytics, treasury-cash forecasting, FX risk modelling, alternative-asset valuation and document-intelligence for legal and investment workflows. For Salwa we align the data-handling posture to CITRA DPPR and provide a clear separation of beneficial-owner data with HSM-backed key control.'
      },
      {
        question: 'Can you scope an AI engagement to family-office economics typical of Salwa?',
        answer:
          'Yes. Salwa-scale engagements typically sit in the KWD 100K to 500K budget band, with a single production system and a tight engineer-led team. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-bayan', 'ai-development-in-salmiya', 'ai-development-in-hawalli']
  },
  {
    slug: 'ai-development-in-jabriya',
    name: 'Jabriya',
    possessive: "Jabriya's",
    region: 'Hawalli Governorate',
    economicSnapshot:
      "A residential district in the Hawalli Governorate built around the Kuwait University Health Sciences Center, the Mubarak Al-Kabeer Hospital and the Faculty of Medicine — making it the single most concentrated healthcare and medical-education area in the State of Kuwait.",
    heroEyebrow: 'AI engineering for Jabriya',
    heroH1: 'Production AI for Jabriya.',
    heroLead:
      "We build the AI systems that Jabriya's Mubarak Al-Kabeer Hospital, Kuwait University Health Sciences Center, MoH-aligned clinics, medical-education research labs and Hawalli-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to MoH, CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Jabriya — production AI for Mubarak Al-Kabeer Hospital, Kuwait University Health Sciences Center, MoH-aligned clinics and medical-education research. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jabriya'),
      'AI for Mubarak Al Kabeer Hospital',
      'AI for Kuwait University Health Sciences Center',
      'AI for medical education Kuwait',
      'AI for healthcare Jabriya',
      'clinical NLP Kuwait'
    ],
    sectorAngles: [
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage, operational and research AI for Mubarak Al-Kabeer Hospital and Jabriya-area MoH-aligned providers.' },
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML, generative AI and LLM fine-tuning infrastructure for the Kuwait University Health Sciences Center and Faculty of Medicine.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'MoH-aligned operational AI and Hawalli-Governorate municipality services for Jabriya.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential real-estate AI for Jabriya developers and landlords serving the medical-and-academic community.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and conversational AI for Jabriya retail and student-services operators.' }
    ],
    positioningCopy:
      "Jabriya is the medical heart of Kuwait — Mubarak Al-Kabeer Hospital, the Kuwait University Health Sciences Center and a tightly clustered MoH-aligned provider ecosystem. The AI brief is clinical NLP, imaging triage, operational AI for the hospital, and research-grade ML for the academic side. We arrive with senior clinical-AI engineers and a 12-week production path that integrates with MoH evidence-pack expectations.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jabriya healthcare, medical-research and university teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Jabriya operations and research teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with clinical NLP and imaging-triage AI inside a major Kuwaiti hospital?',
        answer:
          'Yes. Our clinical-AI work covers MSA Arabic and Kuwaiti-dialect clinical NLP on EHR notes, imaging triage on radiology PACS, theatre-utilisation forecasting and operational analytics on patient flow. For Jabriya we calibrate on the local clinical-coding and EHR pattern and align the evidence pack to MoH and CITRA DPPR expectations.'
      },
      {
        question: 'Can you support research-grade ML alongside operational delivery for the Kuwait University Health Sciences Center?',
        answer:
          'Yes. Where the Kuwait University Health Sciences Center or the Faculty of Medicine is the buyer, we propose engagements that supplement the in-house research team — senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-hawalli', 'ai-development-in-bayan', 'ai-development-in-salwa']
  },
  {
    slug: 'ai-development-in-bayan',
    name: 'Bayan',
    possessive: "Bayan's",
    region: 'Hawalli Governorate',
    economicSnapshot:
      'An upscale residential district in the Hawalli Governorate — known for the concentration of foreign embassies, high-end villas, premium retail and a long-established cluster of consular-and-diplomatic services.',
    heroEyebrow: 'AI engineering for Bayan',
    heroH1: 'Production AI for Bayan.',
    heroLead:
      "We build the AI systems that Bayan's embassy and consular-services operators, premium-residential developers, high-value retail groups and Hawalli-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Bayan — production AI for Hawalli-Governorate premium residential, embassies and consular services, high-value retail and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Bayan'),
      'AI for premium residential Bayan',
      'AI for embassies Kuwait',
      'AI for consular services Bayan',
      'AI for Bayan retail'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Premium-residential valuation, leasing and tenant analytics for Bayan developers and landlords.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Hawalli-Governorate municipality AI for Bayan operations and visitor-services analytics.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'High-value demand AI and multilingual conversational AI for Bayan premium-retail operators.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Wealth-management and private-banking AI for Bayan-served customers.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Premium-hospitality demand AI for Bayan boutique operators and concierge providers.' }
    ],
    positioningCopy:
      "Bayan is a high-value, diplomatically-dense residential district. The AI brief is premium-residential PropTech, high-value retail and multilingual operational AI sized to the consular-and-embassy mix in the area. We arrive with templates calibrated for high-value Kuwaiti operators and a 12-week production path that fits the scale.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Bayan residential, retail and consular-services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Bayan team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the multilingual diplomatic-and-international demographic typical of Bayan?',
        answer:
          'Yes. Every Bayan visitor-facing AI we build runs MSA Arabic, Kuwaiti-dialect Arabic and English as first-class languages, with optional French, German, Mandarin, Hindi and Urdu layers tuned to the Bayan diplomatic and expat mix. We benchmark per-language intent-recognition accuracy in discovery.'
      },
      {
        question: 'Do you bundle Bayan with adjacent Hawalli-Governorate engagements?',
        answer:
          'Yes. Bayan pairs naturally with Salwa, Salmiya and the wider Hawalli-Governorate residential and retail belt. We will price Bayan-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-salwa', 'ai-development-in-salmiya', 'ai-development-in-hawalli']
  },

  // ============================================================
  // AL FARWANIYAH GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-al-farwaniyah',
    name: 'Al Farwaniyah',
    possessive: "Al Farwaniyah's",
    region: 'Al Farwaniyah Governorate',
    economicSnapshot:
      "Capital of the Al Farwaniyah Governorate and home to Kuwait International Airport — the dominant airport-ecosystem, freight-forwarding, retail and residential catchment of central Kuwait, with a deep concentration of logistics, aviation-services and SME activity around the airport corridor.",
    heroEyebrow: 'AI engineering for Al Farwaniyah',
    heroH1: 'Production AI for Al Farwaniyah.',
    heroLead:
      "We build the AI systems that Al Farwaniyah's Kuwait International Airport ecosystem, freight-forwarding majors, aviation-services contractors, retail groups and Farwaniyah-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR, KIAS and the relevant sector regulator.",
    metaDescription:
      'AI development company in Al Farwaniyah — production AI for Kuwait International Airport ecosystem, freight-forwarding majors, aviation-services contractors, retail and Farwaniyah-Governorate municipality. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Farwaniyah'),
      'AI for Kuwait International Airport',
      'AI for aviation Kuwait',
      'AI for freight forwarding Kuwait',
      'AI for Al Farwaniyah Governorate'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Air-cargo ETA prediction, customs document intelligence and freight-forwarding AI around Kuwait International Airport.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Airport-corridor hospitality AI and multilingual passenger-services automation.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting, footfall analytics and Arabic conversational AI for Al-Farwaniyah retail and mall groups.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Airport-authority, customs and immigration AI for Al-Farwaniyah-Governorate operations.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Travel-spend, FX and retail-banking AI for Al-Farwaniyah-branched Kuwaiti banks.' }
    ],
    positioningCopy:
      "Al Farwaniyah is the airport and air-cargo backbone of Kuwait — and the AI question is operational at airport speed. ETA prediction, baggage-handling vision, customs document intelligence and demand AI for the retail layer around the airport corridor. We arrive with reference architectures calibrated for the air-cargo and airport-services operating rhythm and a 12-week path that integrates with your TMS, WMS and airport-authority systems.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al-Farwaniyah airport-ecosystem, logistics and retail operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Farwaniyah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience integrating AI with Kuwait International Airport-ecosystem systems?',
        answer:
          'Our airport and air-cargo work covers ETA prediction, baggage-handling computer vision, gate-system OCR, customs document intelligence and demand AI for airport-corridor retail. We treat each engagement as bespoke and ship a reference pipeline against your specific TMS / WMS / airport-authority environment in the discovery phase.'
      },
      {
        question: 'Can you integrate AI with the major freight-forwarder TMS and customs systems used in Al Farwaniyah?',
        answer:
          'Yes. Our integrations cover the major freight-forwarder TMS platforms, the Kuwaiti customs interface and the principal air-cargo systems. We document the integration in discovery and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-kuwait-city', 'ai-development-in-hawalli', 'ai-development-in-al-jahra']
  },

  // ============================================================
  // AL JAHRA GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-al-jahra',
    name: 'Al Jahra',
    possessive: "Al Jahra's",
    region: 'Al Jahra Governorate',
    economicSnapshot:
      "Capital of the Al Jahra Governorate in northwestern Kuwait — historically agricultural and military, today a centre for agriculture, food processing, industrial activity at the Sulaibiya zone, and the principal Kuwaiti land-corridor towards the Iraqi border.",
    heroEyebrow: 'AI engineering for Al Jahra',
    heroH1: 'Production AI for Al Jahra.',
    heroLead:
      "We build the AI systems that Al Jahra's agricultural co-operatives, food-processing manufacturers, Sulaibiya-zone industrial operators, north-corridor logistics companies and Jahra-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Al Jahra — production AI for northwestern-Kuwait agriculture, food processing, Sulaibiya-zone industry and Iraq-border-corridor logistics. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Jahra'),
      'AI for agriculture Al Jahra',
      'AI for food processing Sulaibiya',
      'AI for north corridor logistics Kuwait',
      'AI for Al Jahra Governorate'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agriculture, food-processing and Sulaibiya-zone industrial yield, grading and supply-chain AI for Al-Jahra operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'North-corridor logistics from Al Jahra towards the Iraqi land border, including customs document intelligence and ETA prediction.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Jahra-Governorate municipality and authority AI for civic-and-corridor operations.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Sulaibiya industrial-services AI and northwest-Kuwait utility analytics.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI for Al-Jahra retail and family-business consumer operators.' }
    ],
    positioningCopy:
      "Al Jahra is the agricultural and industrial north of Kuwait, and the land-corridor towards Iraq. The AI brief is yield on the agriculture side, throughput on the Sulaibiya industrial side, and corridor logistics towards the border. We arrive with sector templates calibrated for the Jahra operating rhythm and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Jahra agriculture, food-processing, industrial and corridor-logistics teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Jahra operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with food-processing AI in a Sulaibiya / Al-Jahra setting?',
        answer:
          'Yes. Our food-processing work covers grading computer vision on the packing line, yield prediction, batch-quality consistency models and demand forecasting into Kuwaiti and GCC retail. For Al Jahra we calibrate on local batch-quality and seasonality data and integrate with the operator ERP.'
      },
      {
        question: 'Can you handle Iraq-border corridor logistics AI from an Al-Jahra operator?',
        answer:
          'Yes. Our cross-border work covers customs document intelligence (including Arabic OCR on Kuwaiti and Iraqi customs paperwork), ETA prediction across border-crossings, and freight-pricing AI. For Al Jahra we integrate with the operator TMS and demonstrate cycle-time uplift on a single freight lane before scaling.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-farwaniyah', 'ai-development-in-kuwait-city', 'ai-development-in-al-ahmadi']
  },

  // ============================================================
  // AL AHMADI GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-al-ahmadi',
    name: 'Al Ahmadi',
    possessive: "Al Ahmadi's",
    region: 'Al Ahmadi Governorate',
    economicSnapshot:
      "Capital of the Al Ahmadi Governorate and the oil-and-energy heart of Kuwait — home to Kuwait Oil Company (KOC) headquarters, the Mina Al-Ahmadi and Mina Abdullah refineries, the KIPIC Al-Zour Refinery operating area, and the densest concentration of upstream, downstream and oilfield-services activity in the State.",
    heroEyebrow: 'AI engineering for Al Ahmadi',
    heroH1: 'Production AI for Al Ahmadi.',
    heroLead:
      "We build the AI systems that Al Ahmadi's KOC, KNPC, KPC and KIPIC operators, Mina Al-Ahmadi and Mina Abdullah refineries, oilfield-services contractors and Ahmadi-Governorate authority teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR, KIAS and the relevant sector regulator.",
    metaDescription:
      'AI development company in Al Ahmadi — production AI for KOC, KNPC, KPC and KIPIC operators, Mina Al-Ahmadi and Mina Abdullah refineries, Al-Zour Refinery operating area, and the oilfield-services ecosystem. Named engineers, CITRA-DPPR-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Ahmadi'),
      'AI for KOC',
      'AI for KNPC',
      'AI for KIPIC',
      'AI for Mina Al Ahmadi refinery',
      'AI for Mina Abdullah refinery',
      'AI for Al Zour refinery',
      'industrial AI Kuwait Al Ahmadi',
      'upstream AI Kuwait'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Well-data analytics, reservoir ML, predictive maintenance and process-control AI for KOC upstream and KNPC / KIPIC downstream operations.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for the Mina Al-Ahmadi, Mina Abdullah and Al-Zour refineries.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Rig-mobilisation, port-and-terminal and oilfield-services supply-chain AI for the Al-Ahmadi ecosystem.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Ahmadi-Governorate authority operational AI and industrial-zone analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Al-Ahmadi industrial zone.' }
    ],
    positioningCopy:
      "Al Ahmadi is the heart of Kuwaiti oil-and-energy — and the AI brief is industrial-grade at KPC-ecosystem scale. Plants run 24/7. Process safety is non-negotiable. The historian and SCADA stack is dense. We arrive with senior industrial-AI engineers, reference architectures against the KOC, KNPC and KIPIC operator stacks, and a 12-week production path that integrates with your HAZOP and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Ahmadi upstream, downstream, refining and oilfield-services teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Ahmadi plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of a Mina Al-Ahmadi / Mina Abdullah / Al-Zour operating environment?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific Al-Ahmadi environment in the discovery phase.'
      },
      {
        question: 'How do you handle process safety and management-of-change for AI in an Al-Ahmadi refinery?',
        answer:
          'Every industrial AI we build for Al Ahmadi clients integrates with your existing HAZOP and management-of-change regime. We document failure-mode and effects analysis on the AI decision boundary, build operator-override fallbacks on confidence drops, and align the model evidence pack to IEC 61511 / IEC 61508 functional-safety expectations and to KPC-ecosystem operational-governance.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-fahaheel', 'ai-development-in-mangaf', 'ai-development-in-mahboula']
  },
  {
    slug: 'ai-development-in-fahaheel',
    name: 'Fahaheel',
    possessive: "Fahaheel's",
    region: 'Al Ahmadi Governorate',
    economicSnapshot:
      'A coastal town in the Al Ahmadi Governorate just north of the major refineries — historically a fishing town, today a dense retail, hospitality and family-business hub serving the wider Al-Ahmadi industrial population, with the Souq Al-Kout shopping complex on the corniche.',
    heroEyebrow: 'AI engineering for Fahaheel',
    heroH1: 'Production AI for Fahaheel.',
    heroLead:
      "We build the AI systems that Fahaheel's retail and family-business groups (including Souq Al-Kout operators), hospitality groups, services SMEs and Ahmadi-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Fahaheel — production AI for Al-Ahmadi-Governorate retail (incl. Souq Al-Kout operators), hospitality, family-business commerce and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Fahaheel'),
      'AI for Souq Al Kout',
      'AI for Fahaheel retail',
      'AI for hospitality Fahaheel',
      'AI for Al Ahmadi commercial belt'
    ],
    sectorAngles: [
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Mall and souq footfall, basket-size and multilingual conversational AI for Souq Al-Kout and Fahaheel retail operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Corniche-and-coastal hospitality demand AI and multilingual guest NLP for Fahaheel operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile and Al-Ahmadi-corridor logistics AI for Fahaheel-based operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Ahmadi-Governorate municipality AI for Fahaheel civic-services.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Commercial and residential real-estate AI for the Fahaheel corniche and surrounds.' }
    ],
    positioningCopy:
      "Fahaheel is the commercial and retail heart of Al-Ahmadi Governorate — and the consumer-facing AI brief is footfall, basket size, hospitality demand and operational efficiency for souq and family-business operators. We arrive with templates calibrated for Souq-Al-Kout-style operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Fahaheel retail, souq, hospitality and family-business operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Fahaheel operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you handle multilingual conversational AI for the Fahaheel and Souq Al-Kout consumer mix?',
        answer:
          'Yes. Every consumer-facing AI we build for Fahaheel runs MSA Arabic, Kuwaiti-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, Tagalog and Bengali layers tuned to the Al-Ahmadi-Governorate demographic. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      },
      {
        question: 'Can you bundle Fahaheel with adjacent Al-Ahmadi-Governorate engagements?',
        answer:
          'Yes. Fahaheel, Mangaf, Mahboula and Al Fintas work well as a bundled Al-Ahmadi consumer-and-residential programme with shared data layers and per-area overlays. We will price Fahaheel-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-ahmadi', 'ai-development-in-mangaf', 'ai-development-in-al-fintas']
  },
  {
    slug: 'ai-development-in-mangaf',
    name: 'Mangaf',
    possessive: "Mangaf's",
    region: 'Al Ahmadi Governorate',
    economicSnapshot:
      'A residential and commercial area in the Al Ahmadi Governorate north of Fahaheel — with a substantial expatriate residential base, a dense retail and services economy, and proximity to the oil-and-refining belt.',
    heroEyebrow: 'AI engineering for Mangaf',
    heroH1: 'Production AI for Mangaf.',
    heroLead:
      "We build the AI systems that Mangaf's residential developers, retail and services SMEs, family-business operators and Al-Ahmadi-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Mangaf — production AI for Al-Ahmadi-Governorate residential, retail and services SMEs, family-business commerce and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mangaf'),
      'AI for Mangaf residential',
      'AI for Mangaf retail',
      'AI for Al Ahmadi residential belt'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Mangaf developers and Al-Ahmadi-Governorate landlords.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Mangaf retail and family-business consumer brands.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale hospitality demand AI for Mangaf coastal operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Ahmadi-Governorate municipality AI for Mangaf civic-services.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI from the Al-Ahmadi commercial belt into Mangaf residential catchments.' }
    ],
    positioningCopy:
      "Mangaf is a working residential-and-retail belt within Al-Ahmadi-Governorate. The AI brief is real-estate yield, demand AI for consumer-facing operators, and last-mile efficiency. We arrive with templates calibrated for Al-Ahmadi-residential operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mangaf residential, retail and services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mangaf operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the multilingual expat consumer base typical of Mangaf?',
        answer:
          'Yes. Every consumer-facing AI we build for Mangaf runs MSA Arabic, Kuwaiti-dialect Arabic and English as first-class languages, with optional Hindi, Urdu, Tagalog and Bengali layers tuned to the Mangaf expat demographic. We benchmark per-language intent-recognition accuracy in discovery.'
      },
      {
        question: 'Do you scope engagements to mid-size operator economics typical of Mangaf?',
        answer:
          'Yes. Mangaf-scale engagements are typically sub-KWD-200K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-ahmadi', 'ai-development-in-mahboula', 'ai-development-in-fahaheel']
  },
  {
    slug: 'ai-development-in-mahboula',
    name: 'Mahboula',
    possessive: "Mahboula's",
    region: 'Al Ahmadi Governorate',
    economicSnapshot:
      'A coastal residential area in the Al Ahmadi Governorate between Mangaf and Al Fintas — with a substantial expatriate residential population, a dense small-retail-and-services economy, and a coastal-leisure footprint along the Gulf shoreline.',
    heroEyebrow: 'AI engineering for Mahboula',
    heroH1: 'Production AI for Mahboula.',
    heroLead:
      "We build the AI systems that Mahboula's residential developers, retail and services SMEs, coastal-hospitality operators and Al-Ahmadi-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Mahboula — production AI for Al-Ahmadi-Governorate coastal residential, retail and services SMEs, coastal hospitality and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mahboula'),
      'AI for Mahboula residential',
      'AI for coastal hospitality Al Ahmadi',
      'AI for Mahboula retail'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Coastal residential valuation, leasing and tenant analytics for Mahboula developers.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Mahboula retail and family-business operators.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Coastal-hospitality demand AI for Mahboula seafront operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Ahmadi-Governorate municipality AI for Mahboula civic-services.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI for the Mahboula residential catchment.' }
    ],
    positioningCopy:
      "Mahboula pairs a working coastal-residential base with a dense small-retail-and-services economy. The AI brief is residential PropTech, consumer demand AI and coastal-hospitality demand modelling. We arrive with templates calibrated for Al-Ahmadi-coastal operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mahboula residential, retail and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mahboula operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to small-operator economics typical of Mahboula?',
        answer:
          'Yes. Mahboula-scale engagements are typically sub-KWD-150K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Mahboula with adjacent Al-Ahmadi-Governorate engagements?',
        answer:
          'Yes. Mahboula pairs naturally with Mangaf, Fahaheel and Al Fintas as a bundled Al-Ahmadi consumer-and-residential programme. We will price Mahboula-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mangaf', 'ai-development-in-fahaheel', 'ai-development-in-al-fintas']
  },
  {
    slug: 'ai-development-in-al-fintas',
    name: 'Al Fintas',
    possessive: "Al Fintas's",
    region: 'Al Ahmadi Governorate',
    economicSnapshot:
      'A coastal residential area in the Al Ahmadi Governorate just south of Mahboula — primarily residential, with a small-retail-and-services economy, and proximity to the wider Al-Ahmadi commercial and oil belt.',
    heroEyebrow: 'AI engineering for Al Fintas',
    heroH1: 'Production AI for Al Fintas.',
    heroLead:
      "We build the AI systems that Al Fintas's residential developers, retail and services SMEs and Al-Ahmadi-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Al Fintas — production AI for Al-Ahmadi-Governorate coastal residential, retail and services SMEs and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Fintas'),
      'AI for Al Fintas residential',
      'AI for Al Fintas retail',
      'AI for Al Ahmadi coastal belt'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Coastal residential valuation, leasing and tenant analytics for Al Fintas developers.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Al Fintas retail and SMEs.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Ahmadi-Governorate municipality AI for Al Fintas civic-services.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale hospitality demand AI for Al Fintas coastal operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI for the Al Fintas residential catchment.' }
    ],
    positioningCopy:
      "Al Fintas is a small-volume coastal residential belt in Al-Ahmadi-Governorate. The AI brief is honest and small-scale: residential PropTech, consumer demand AI and last-mile efficiency. We arrive with templates that fit Al-Fintas-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Fintas residential, retail and services operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Fintas operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to very small-operator economics typical of Al Fintas?',
        answer:
          'Yes. Al-Fintas-scale engagements are typically sub-KWD-120K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — tightly sized to the operator.'
      },
      {
        question: 'Do you bundle Al Fintas with adjacent Al-Ahmadi engagements?',
        answer:
          'Yes. Al Fintas typically benefits from being part of a wider Al-Ahmadi-Governorate consumer-and-residential programme also touching Mahboula, Mangaf and Fahaheel. We will price Al-Fintas-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mahboula', 'ai-development-in-mangaf', 'ai-development-in-fahaheel']
  },

  // ============================================================
  // MUBARAK AL-KABEER GOVERNORATE
  // ============================================================
  {
    slug: 'ai-development-in-mubarak-al-kabeer',
    name: 'Mubarak Al-Kabeer',
    possessive: "Mubarak Al-Kabeer's",
    region: 'Mubarak Al-Kabeer Governorate',
    economicSnapshot:
      'A primarily residential governorate created in 1999 by separation from Hawalli — covering Sabah Al-Salem, Mubarak Al-Kabeer and Adan, with a growing residential, services and family-business economy and a small commercial belt.',
    heroEyebrow: 'AI engineering for Mubarak Al-Kabeer',
    heroH1: 'Production AI for Mubarak Al-Kabeer.',
    heroLead:
      "We build the AI systems that Mubarak Al-Kabeer's residential developers, services SMEs, family-business operators and Mubarak-Al-Kabeer-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Mubarak Al-Kabeer — production AI for Mubarak-Al-Kabeer-Governorate residential developers, services SMEs, family-business operators and municipality. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mubarak Al-Kabeer'),
      'AI for Mubarak Al Kabeer residential',
      'AI for Mubarak Al Kabeer Governorate',
      'AI for residential real estate Kuwait'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Mubarak-Al-Kabeer developers and landlords.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Mubarak-Al-Kabeer-Governorate municipality and civic-services AI.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Mubarak-Al-Kabeer retail and family-business operators.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Mubarak-Al-Kabeer health-centre operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile delivery AI for Mubarak-Al-Kabeer residential catchments.' }
    ],
    positioningCopy:
      "Mubarak Al-Kabeer is primarily residential and operationally part of the southern Kuwait City catchment. The AI brief is real-estate yield, consumer demand AI, civic-services efficiency and last-mile work. We arrive with templates calibrated for Kuwait residential operators and a 12-week production path sized to local operator economics.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mubarak Al-Kabeer residential, retail and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mubarak Al-Kabeer operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to mid-size residential and municipal operator economics typical of Mubarak Al-Kabeer?',
        answer:
          'Yes. Mubarak-Al-Kabeer-scale engagements typically sit in the KWD 100K to 400K budget band, with a single production system and a tight engineer-led team. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Mubarak Al-Kabeer with adjacent municipality engagements?',
        answer:
          'Yes. Mubarak Al-Kabeer pairs naturally with Sabah Al-Salem, Jabriya and the wider Hawalli-Governorate residential belt. We will price Mubarak-Al-Kabeer-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-sabah-al-salem', 'ai-development-in-jabriya', 'ai-development-in-hawalli']
  },
  {
    slug: 'ai-development-in-sabah-al-salem',
    name: 'Sabah Al-Salem',
    possessive: "Sabah Al-Salem's",
    region: 'Mubarak Al-Kabeer Governorate',
    economicSnapshot:
      "A residential area within the Mubarak Al-Kabeer Governorate — named after the late Sheikh Sabah Al-Salem — with a deep residential base, education and services activity, and a connection to the broader Mubarak-Al-Kabeer civic ecosystem.",
    heroEyebrow: 'AI engineering for Sabah Al-Salem',
    heroH1: 'Production AI for Sabah Al-Salem.',
    heroLead:
      "We build the AI systems that Sabah Al-Salem's residential developers, education and services SMEs, family-business operators and Mubarak-Al-Kabeer-Governorate municipality teams actually put into production — staffed by named senior engineers, priced in KWD, and aligned to CITRA-DPPR and KIAS.",
    metaDescription:
      'AI development company in Sabah Al-Salem — production AI for Mubarak-Al-Kabeer-Governorate residential, education and services SMEs and municipality operations. Named engineers, CITRA-DPPR-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Sabah Al-Salem'),
      'AI for Sabah Al Salem residential',
      'AI for education Sabah Al Salem',
      'AI for Mubarak Al Kabeer Governorate Sabah Al Salem'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Sabah Al-Salem developers and landlords.' },
      { name: 'Education', href: '/industries/education', angle: 'Education-sector AI and operational analytics for Sabah-Al-Salem schools and student-services operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Mubarak-Al-Kabeer-Governorate municipality AI for Sabah Al-Salem civic-services.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Sabah Al-Salem retail and SMEs.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Primary-care NLP and demand AI for Sabah Al-Salem health-centre operators.' }
    ],
    positioningCopy:
      "Sabah Al-Salem is a working residential and education-services district in Mubarak-Al-Kabeer-Governorate. The AI brief is residential PropTech, education-sector operational AI, family-business retail and civic services. We arrive with templates calibrated for the Kuwait residential operator and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Sabah Al-Salem residential, education and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Sabah Al-Salem operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle education-sector AI for a Sabah-Al-Salem-area school or institution?',
        answer:
          'Yes. Our education-sector work covers admissions analytics, student-outcome ML, multilingual student-services NLP and operational analytics for school groups. For Sabah Al-Salem we calibrate on the local enrolment pattern and align with the Ministry of Education and CITRA DPPR expectations.'
      },
      {
        question: 'Do you bundle Sabah Al-Salem with adjacent Mubarak-Al-Kabeer and Hawalli engagements?',
        answer:
          'Yes. Sabah Al-Salem, Mubarak Al-Kabeer, Jabriya and Salwa work well as a residential-belt programme. We will price Sabah-Al-Salem-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mubarak-al-kabeer', 'ai-development-in-jabriya', 'ai-development-in-salwa']
  }
];

export function getKuwaitiCityBySlug(slug: string): KuwaitiCity | undefined {
  return KUWAITI_CITIES.find((c) => c.slug === slug);
}

export const KUWAITI_CITY_SLUGS = KUWAITI_CITIES.map((c) => c.slug);
