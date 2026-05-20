/**
 * Per-city SEO and content data for the /qatar/ai-development-in-[city] pages.
 *
 * Each entry drives a fully SEO-optimised landing page for a Qatari city. The
 * page template lives at src/app/qatar/[slug]/page.tsx and is rendered statically
 * via generateStaticParams.
 */

export type QatariCity = {
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

export const QATARI_CITIES: QatariCity[] = [
  {
    slug: 'ai-development-in-doha',
    name: 'Doha',
    possessive: "Doha's",
    region: 'Doha Municipality',
    economicSnapshot:
      "Qatar's capital and the regulatory, financial and government centre of the State — home to the Qatar Central Bank, the Qatar Financial Centre, the Qatar Financial Markets Authority, ministerial headquarters, the largest Qatari banks and telecoms, Hamad International Airport, and the headquarters of most Qatar National Vision 2030 programmes.",
    heroEyebrow: 'AI engineering for Doha',
    heroH1: 'Production AI for Doha.',
    heroLead:
      "We build the AI systems that Doha's regulators, banks, QFC-licensed firms, ministries, telecom operators, aviation ecosystem and Qatar National Vision 2030 programme offices actually put into production — staffed by named senior engineers, priced in QAR, and aligned to QCB, QFCRA, NCSA-NIA, MCIT and Qatar PDPL (Law No. 13 of 2016) from day one.",
    metaDescription:
      'AI development company in Doha — production AI for QCB-supervised banks, QFC-licensed financial firms, Qatari ministries, telecom operators, Hamad International Airport ecosystem and Vision 2030 programme offices. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth, QAR billing and a 12-week production path. ISO 27001, SOC 2 Type II, ISO 42001.',
    keywords: [
      ...sharedNlpKeywords('Doha'),
      'AI development company Qatar capital',
      'Doha AI services',
      'QCB model risk AI Doha',
      'QFCRA AI Doha',
      'QFC AI development',
      'Qatar PDPL AI Doha',
      'NCSA NIA AI Doha',
      'Qatar National Vision 2030 AI Doha',
      'AI for Hamad International Airport',
      'AI for QNB ecosystem'
    ],
    sectorAngles: [
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'QCB and QFCRA model risk files, AML, fraud and credit AI for Doha-headquartered Qatari banks and QFC-licensed firms.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'MCIT-aligned and Qatar-National-AI-Strategy-mapped AI for ministries and authorities in Doha.' },
      { name: 'Capital markets', href: '/industries/banking-financial-services', angle: 'QFMA-aligned surveillance, NLP and analytics for Qatar Stock Exchange issuers and asset managers.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Air-cargo ETA prediction, customs document intelligence and aviation-ecosystem AI around Hamad International Airport.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for Doha hospital networks and MOPH authorities.' }
    ],
    positioningCopy:
      'Doha is where the procurement-committee bar is highest in Qatar — and where QCB, QFCRA, NCSA and MCIT expectations land first. We arrive with the evidence pack already drafted: PDPL DPIA against Law No. 13 of 2016, QCB-style model risk file, NCSA National Information Assurance controls mapping, and a written 12-week production path that fits inside the steering-committee cadence Doha boards run on.',
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Doha banks, QFC firms, ministries and Vision 2030 programme offices.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Doha team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you deliver inside QCB, QFCRA and NCSA-NIA expectations for a Doha-headquartered entity?',
        answer:
          'Yes. Every Doha engagement ships a PDPL Data Protection Impact Assessment aligned to Law No. 13 of 2016, a QCB-style model risk file where the entity is QCB-supervised (and QFCRA-aligned for QFC firms), an NCSA National Information Assurance (NIA) controls mapping, and an MCIT / Qatar National AI Strategy cross-walk. We draft the evidence pack alongside the build — not as a separate workstream after the fact.'
      },
      {
        question: 'Do you co-deliver with a Qatar-registered or QFC-resident partner when a Doha sponsor requires one?',
        answer:
          'Yes. Where a Doha procurement office requires a Qatar-registered counterparty (common for ministerial entities and QCB-supervised banks) or a QFC-resident counterparty (for QFC firms), we co-deliver with a vetted Qatari partner under a transparent flow-down agreement. Brocode engineers remain named on the work; the local partner provides the contracting entity and any required in-country personnel commitments.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-rayyan', 'ai-development-in-lusail', 'ai-development-in-umm-salal']
  },
  {
    slug: 'ai-development-in-al-rayyan',
    name: 'Al Rayyan',
    possessive: "Al Rayyan's",
    region: 'Al Rayyan Municipality',
    economicSnapshot:
      "Qatar's largest municipality by population — home to Education City and the Qatar Foundation, the Aspire Zone and Khalifa International Stadium, large residential developments, and a significant concentration of research, sports and education ecosystems linked to Qatar National Vision 2030.",
    heroEyebrow: 'AI engineering for Al Rayyan',
    heroH1: 'Production AI for Al Rayyan.',
    heroLead:
      "We build the AI systems that Al Rayyan's Education City research labs, Qatar Foundation programme offices, Aspire Zone sports-ecosystem operators, residential-real-estate developers and Al-Rayyan Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Al Rayyan — production AI for Education City research, Qatar Foundation programmes, Aspire Zone sports ecosystem, residential developers and Al-Rayyan Municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Rayyan'),
      'AI for Education City Qatar',
      'AI for Qatar Foundation',
      'AI for Aspire Zone',
      'AI for Khalifa Stadium',
      'AI for sports analytics Qatar',
      'AI for research Qatar',
      'AI for Al Rayyan Municipality'
    ],
    sectorAngles: [
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML, generative AI and LLM fine-tuning infrastructure for Education City institutions and Qatar Foundation research labs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Sports-tourism demand AI and multilingual guest NLP for Aspire Zone, Khalifa Stadium and Al Rayyan hospitality operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Qatar-National-Vision-2030 programme AI and Al-Rayyan Municipality operational analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Al Rayyan residential and mixed-use developers.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP and operational AI for Al-Rayyan-area hospital networks.' }
    ],
    positioningCopy:
      "Al Rayyan combines Qatar's research and education backbone (Education City, Qatar Foundation, Aspire Zone) with a large residential and municipal economy. The AI brief is multi-track: research-grade ML for the universities and labs, sports and venue analytics for the Aspire-Khalifa ecosystem, and operational AI for the municipality. We arrive with templates for all three and a 12-week production path that fits Al Rayyan's procurement and programme cadence.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Rayyan research, sports-ecosystem and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Rayyan team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you support research-grade ML work for Education City institutions in Al Rayyan?',
        answer:
          'Yes. Where an Education City institution or Qatar Foundation research lab is the buyer, we propose engagements that supplement the in-house research team — senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions. We expect a pair-programming rhythm with two of your engineers in the pod from day one.'
      },
      {
        question: 'Can you handle sports-and-venue AI for the Aspire-Khalifa Al Rayyan ecosystem?',
        answer:
          'Yes. Our sports-venue work covers ticketing demand AI, crowd-density CV at the stadium, multilingual guest NLP, performance analytics and operational forecasting for major-event days. For Al Rayyan we calibrate on the local event calendar and integrate with the venue operator stack.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-doha', 'ai-development-in-lusail', 'ai-development-in-al-wakrah']
  },
  {
    slug: 'ai-development-in-al-wakrah',
    name: 'Al Wakrah',
    possessive: "Al Wakrah's",
    region: 'Al Wakrah Municipality',
    economicSnapshot:
      "A coastal municipality south of Doha — historically a fishing and pearling town, now a fast-growing residential and commercial centre with Al Janoub Stadium, the Al Wakrah Souq, and a corridor of new mixed-use developments along the southern Doha extension.",
    heroEyebrow: 'AI engineering for Al Wakrah',
    heroH1: 'Production AI for Al Wakrah.',
    heroLead:
      "We build the AI systems that Al Wakrah's residential developers, retail and souq family businesses, sports-and-tourism operators around Al Janoub Stadium, fisheries co-operatives and Al-Wakrah Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Al Wakrah — production AI for southern-Doha residential developers, Al Janoub Stadium sports-tourism, Al Wakrah Souq retail, fisheries co-operatives and Al-Wakrah Municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Wakrah'),
      'AI for Al Janoub Stadium',
      'AI for Al Wakrah Souq',
      'AI for fisheries Al Wakrah',
      'AI for residential real estate southern Doha',
      'AI for Al Wakrah Municipality'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for Al Wakrah residential and mixed-use developers along the southern Doha corridor.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Sports-and-event demand AI and multilingual guest NLP for Al Janoub Stadium and Al-Wakrah-area hospitality operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Souq and consumer-retail demand AI for Al Wakrah family businesses.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Al-Wakrah-coast co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Wakrah Municipality and southern-Doha-corridor authority AI.' }
    ],
    positioningCopy:
      "Al Wakrah pairs a heritage coastal town with a fast-growing residential and sports-ecosystem layer. The AI brief is real-estate yield, event-driven hospitality demand, family-business retail and the working fisheries economy along the coast. We arrive with templates calibrated for southern-Doha-corridor operators and a 12-week production path sized to the operator.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Wakrah real-estate, sports-ecosystem, retail and fisheries operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Wakrah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle stadium-and-event AI for Al Janoub Stadium and the Al Wakrah event calendar?',
        answer:
          'Yes. Our stadium-and-event work covers ticketing demand AI, crowd-density CV, multilingual visitor NLP and operational forecasting on major-event days. For Al Janoub Stadium we calibrate on the Qatari sports-calendar pattern and integrate with the venue operator stack.'
      },
      {
        question: 'Do you have experience with souq and family-business retail AI in Qatar?',
        answer:
          'Yes. Our souq-retail work covers footfall conversion, basket-size optimisation, multilingual Arabic conversational AI and supplier-side demand AI. For Al Wakrah we calibrate on the local visitor mix and the souq-retailer ERP / POS stacks.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-doha', 'ai-development-in-mesaieed', 'ai-development-in-al-rayyan']
  },
  {
    slug: 'ai-development-in-al-khor',
    name: 'Al Khor',
    possessive: "Al Khor's",
    region: 'Al Khor Municipality',
    economicSnapshot:
      "A northern coastal city on the way to the Ras Laffan industrial city — a long-established fishing and pearling town with a substantial residential and services base, the Al Bayt Stadium, and a strategic position on the corridor to the Ras Laffan LNG complex.",
    heroEyebrow: 'AI engineering for Al Khor',
    heroH1: 'Production AI for Al Khor.',
    heroLead:
      "We build the AI systems that Al Khor's fisheries co-operatives, Al-Bayt-Stadium-ecosystem operators, Ras-Laffan-corridor logistics companies, residential developers and Al-Khor Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Al Khor — production AI for northern-coast fisheries, Al Bayt Stadium sports-tourism, Ras-Laffan-corridor logistics and Al-Khor Municipality operations. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Khor'),
      'AI for Al Bayt Stadium',
      'AI for fisheries Al Khor',
      'AI for Ras Laffan corridor',
      'AI for Al Khor Municipality'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Ras-Laffan-corridor logistics, freight-pricing and customs-document intelligence AI for Al-Khor operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Fisheries yield, sorting and supply-chain AI for Al-Khor co-operatives.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Sports-and-event demand AI and multilingual guest NLP for Al Bayt Stadium and Al-Khor hospitality operators.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential and mixed-use real-estate AI for Al-Khor developers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Khor Municipality and corridor-authority AI for operations linked to Ras Laffan.' }
    ],
    positioningCopy:
      "Al Khor sits between the coastal fishing economy and the Ras Laffan industrial corridor — and the AI brief reflects that mix: fisheries yield on one side, corridor logistics into Ras Laffan on the other, plus sports-and-event AI for Al Bayt Stadium and municipality services. We arrive with templates for each strand and a 12-week production path sized to local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Khor fisheries, corridor-logistics and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Khor operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle Ras-Laffan-corridor logistics AI from an Al-Khor operator?',
        answer:
          'Yes. Our corridor work covers ETA prediction, freight-pricing AI, fleet-utilisation models and customs document intelligence. For Al Khor we calibrate on the Ras-Laffan-corridor traffic pattern and integrate with the operator TMS and the relevant authority interfaces.'
      },
      {
        question: 'Do you bundle Al Khor work with Ras Laffan industrial-AI programmes?',
        answer:
          "Yes. Most Al-Khor corridor engagements pair naturally with a Ras-Laffan-side industrial AI programme — for example, port and inbound-freight AI inside Ras Laffan plus the supply-chain leg on the Al-Khor corridor. We can deliver Al-Khor-only or bundle and will price both shapes in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-ras-laffan', 'ai-development-in-doha', 'ai-development-in-umm-salal']
  },
  {
    slug: 'ai-development-in-umm-salal',
    name: 'Umm Salal',
    possessive: "Umm Salal's",
    region: 'Umm Salal Municipality',
    economicSnapshot:
      'A largely residential municipality north of Doha — covering Umm Salal Mohammed and Umm Salal Ali — with heritage sites, agricultural areas and a growing role as a residential and light-services belt for the wider Doha catchment.',
    heroEyebrow: 'AI engineering for Umm Salal',
    heroH1: 'Production AI for Umm Salal.',
    heroLead:
      "We build the AI systems that Umm Salal's residential developers, retail and services SMEs, agricultural and heritage-tourism operators and Umm-Salal Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Umm Salal — production AI for northern-Doha residential developers, retail and services SMEs, agriculture, heritage-tourism operators and Umm-Salal Municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Umm Salal'),
      'AI for Umm Salal Mohammed',
      'AI for residential real estate northern Doha',
      'AI for Umm Salal Municipality',
      'AI for heritage tourism Qatar'
    ],
    sectorAngles: [
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Residential valuation, leasing and tenant analytics for Umm Salal developers and northern-Doha landlords.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Umm-Salal Municipality and civic-services AI for northern-Doha residential operations.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand AI and Arabic conversational AI for Umm Salal retail and services SMEs.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Heritage-tourism demand AI for Umm Salal Mohammed historical sites and small-resort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale agricultural and food-processing AI for Umm Salal co-operatives.' }
    ],
    positioningCopy:
      "Umm Salal is primarily residential and operationally part of the northern-Doha catchment. The AI brief is real-estate yield, civic-services efficiency, family-business retail and small-scale heritage and agricultural work. We arrive with templates calibrated for northern-Doha residential operations and a 12-week production path sized to local operators.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Umm Salal residential, retail and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Umm Salal operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to mid-size residential and municipal operator economics typical of Umm Salal?',
        answer:
          'Yes. Umm Salal-scale engagements typically sit in the QAR 500K to 2M budget band, with a single production system and a tight operator-scale team. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — sized to the operator.'
      },
      {
        question: 'Do you bundle Umm Salal with adjacent municipality engagements in Doha or Al Khor?',
        answer:
          'Yes. Northern-Doha municipality engagements work well as a programme spanning Umm Salal, parts of Doha Municipality and Al Khor Municipality, with shared data layers and per-municipality overlays. We can deliver Umm-Salal-only or bundle and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-doha', 'ai-development-in-al-rayyan', 'ai-development-in-al-khor']
  },
  {
    slug: 'ai-development-in-lusail',
    name: 'Lusail',
    possessive: "Lusail's",
    region: 'Al Daayen Municipality',
    economicSnapshot:
      "Qatar's flagship Vision 2030 smart-and-sustainable city north of Doha — home to Lusail Iconic Stadium (the FIFA World Cup 2022 final venue), Lusail Marina, large-scale residential and mixed-use developments, and one of the most advanced urban-and-data infrastructure programmes in the GCC.",
    heroEyebrow: 'AI engineering for Lusail',
    heroH1: 'Production AI for Lusail.',
    heroLead:
      "We build the AI systems that Lusail's smart-city programme offices, mixed-use developers, Lusail Marina and corporate-HQ tenants, Lusail Iconic Stadium operators and Al-Daayen Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      "AI development company in Lusail — production AI for Qatar's flagship Vision 2030 smart city: mixed-use developers, Lusail Iconic Stadium, Lusail Marina, corporate HQs and the Al-Daayen Municipality smart-city programme. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.",
    keywords: [
      ...sharedNlpKeywords('Lusail'),
      'AI for Lusail smart city',
      'AI for Lusail Iconic Stadium',
      'AI for Lusail Marina',
      'AI for Vision 2030 Qatar',
      'AI for Al Daayen Municipality',
      'smart city AI Qatar'
    ],
    sectorAngles: [
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Smart-city programme AI for Lusail under the Vision 2030 mandate, including civic-data analytics and operational forecasting.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Mixed-use, marina and high-end residential analytics for Lusail developers and asset owners.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Sports-and-event demand AI and multilingual guest NLP for Lusail Iconic Stadium and Lusail-area hospitality operators.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Corporate and wealth-management AI for Lusail-headquartered corporate tenants.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Mall, marina and lifestyle-centre footfall AI for Lusail commercial real estate.' }
    ],
    positioningCopy:
      "Lusail is the AI flagship of Vision 2030 in Qatar — purpose-built as a smart-and-sustainable city, dense with data, and operationally distinctive. The AI brief here is genuinely city-scale: smart-city operations, mixed-use real-estate yield, stadium-and-event analytics, and corporate-HQ-tenant work. We arrive with senior engineers, smart-city reference architectures, and a 12-week production path that slots inside the Lusail programme cadence.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Lusail smart-city, real-estate, hospitality and corporate teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Lusail operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you deliver into Vision-2030 smart-city programmes with the governance overhead typical of Lusail?',
        answer:
          'Yes — many of our Lusail engagements are scoped under smart-city programme office master agreements with explicit Vision-2030 reporting expectations. We are familiar with the gating rhythm, the master-schedule constraint and the typical sponsor governance overhead, and we structure the 12-week production path to slot into your programme schedule and steering cadence.'
      },
      {
        question: 'Can you handle stadium-and-event AI for Lusail Iconic Stadium?',
        answer:
          'Yes. Our stadium-and-event work covers ticketing demand AI, crowd-density CV, multilingual visitor NLP and operational forecasting on major-event days. For Lusail Iconic Stadium we calibrate on the Qatari major-event calendar and integrate with the venue operator stack and the wider Lusail smart-city data layer where applicable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-doha', 'ai-development-in-al-rayyan', 'ai-development-in-al-wakrah']
  },
  {
    slug: 'ai-development-in-mesaieed',
    name: 'Mesaieed',
    possessive: "Mesaieed's",
    region: 'Al Wakrah Municipality',
    economicSnapshot:
      "An industrial city south of Doha and the location of Mesaieed Industrial City — home to QatarEnergy refining and petrochemicals operations, the Mesaieed Industrial Port, Qatar Steel, QAFAC, QVC and a dense ecosystem of downstream industrial operators.",
    heroEyebrow: 'AI engineering for Mesaieed',
    heroH1: 'Production AI for Mesaieed.',
    heroLead:
      "We build the AI systems that Mesaieed's QatarEnergy refining and petrochemicals operators, Qatar Steel and downstream-industrial manufacturers, Mesaieed Industrial Port operators and Mesaieed Industrial City authority teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Mesaieed — production AI for QatarEnergy refining and petrochemicals, Qatar Steel, downstream manufacturers, Mesaieed Industrial Port and the Mesaieed Industrial City authority. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mesaieed'),
      'AI for QatarEnergy Mesaieed',
      'AI for Qatar Steel',
      'AI for Mesaieed Industrial City',
      'AI for Mesaieed Port',
      'AI for petrochemicals Qatar',
      'industrial AI Qatar'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for Mesaieed petrochemicals, steel and downstream plants.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for QatarEnergy refining and Mesaieed downstream operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Industrial port, terminal and supply-chain AI for Mesaieed Industrial Port operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Mesaieed Industrial City authority operational AI and industrial-zone analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Mesaieed industrial zone.' }
    ],
    positioningCopy:
      "Mesaieed is industrial-grade by definition — refineries, petrochemicals, steel and an industrial port. Plants run 24/7. Process safety is non-negotiable. The historian and SCADA stack is dense. We arrive with senior industrial-AI engineers, reference architectures against the relevant operator stacks, and a 12-week production path that integrates with your HAZOP and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Mesaieed petrochemicals, steel, refining and port teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Mesaieed plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of a Mesaieed petrochemical or steel plant?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific Mesaieed environment in the discovery phase.'
      },
      {
        question: 'How do you handle process safety and management-of-change for AI in a Mesaieed plant?',
        answer:
          'Every industrial AI we build for Mesaieed clients integrates with your existing HAZOP and management-of-change regime. We document failure-mode and effects analysis on the AI decision boundary, build operator-override fallbacks on confidence drops, and align the model evidence pack to IEC 61511 / IEC 61508 functional-safety expectations.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-wakrah', 'ai-development-in-doha', 'ai-development-in-dukhan']
  },
  {
    slug: 'ai-development-in-dukhan',
    name: 'Dukhan',
    possessive: "Dukhan's",
    region: 'Al Rayyan Municipality',
    economicSnapshot:
      "An oil town on the western coast of Qatar — home to the Dukhan Field, the oldest oil-producing field in Qatar, and a dense ecosystem of QatarEnergy upstream operations, services contractors and engineering-support functions.",
    heroEyebrow: 'AI engineering for Dukhan',
    heroH1: 'Production AI for Dukhan.',
    heroLead:
      "We build the AI systems that Dukhan's QatarEnergy upstream operators, oilfield-services contractors, engineering-support functions and Dukhan-area public-sector teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Dukhan — production AI for QatarEnergy upstream operations at the Dukhan Field, oilfield-services contractors and engineering-support functions on the western coast of Qatar. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Dukhan'),
      'AI for Dukhan Field',
      'AI for QatarEnergy upstream',
      'AI for oilfield services Qatar',
      'AI for Dukhan operations',
      'upstream AI Qatar'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Well-data analytics, reservoir ML, predictive maintenance and field-services scheduling AI for QatarEnergy upstream operations at Dukhan.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Engineering-services workflow and reliability AI for Dukhan-headquartered contractors.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Rig-mobilisation, parts-and-materials and supply-chain AI for the Dukhan upstream ecosystem.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Dukhan-area public-sector operational AI and oil-and-gas authority analytics.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Trade-finance and working-capital AI for Dukhan oilfield-services contractors.' }
    ],
    positioningCopy:
      "Dukhan is the historic heartland of Qatari upstream oil-and-gas. The AI brief is field operations: well-performance ML, predictive maintenance, field-services scheduling and supply-chain cycle time. We arrive with senior upstream-AI engineers, on-premise GPU patterns, and a 12-week production path that integrates with the QatarEnergy operating-systems stack.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dukhan upstream and oilfield-services teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Dukhan operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you work alongside in-house QatarEnergy upstream ML teams without overlapping the work?',
        answer:
          "Yes — and most of our Dukhan engagements are exactly that shape. We propose the work as a pod that supplements the in-house team rather than replacing it: senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and Hugging Face contributions. We expect a pair-programming rhythm with two of your engineers in the pod from day one."
      },
      {
        question: 'How do you handle on-premise GPU deployment for upstream ML work in Dukhan?',
        answer:
          'Our on-premise GPU reference architectures cover NVIDIA DGX H100 and HGX H100 racks, NetApp ONTAP and Pure Storage FlashBlade for data, NVIDIA Run:ai or Slurm for orchestration, and a security-hardened boundary that maps to NCSA National Information Assurance controls. We publish the BoM and 36-month TCO in your discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mesaieed', 'ai-development-in-doha', 'ai-development-in-ras-laffan']
  },
  {
    slug: 'ai-development-in-ras-laffan',
    name: 'Ras Laffan',
    possessive: "Ras Laffan's",
    region: 'Al Khor Municipality',
    economicSnapshot:
      "Ras Laffan Industrial City (RLIC) on the northeast coast — home to the world's largest LNG export facility, the QatarEnergy LNG operations, major petrochemicals and downstream operators (Qatargas / RasGas legacy assets, Qatar Petrochemical Company, QAPCO, RLOC), and the deep-water Ras Laffan Port.",
    heroEyebrow: 'AI engineering for Ras Laffan',
    heroH1: 'Production AI for Ras Laffan.',
    heroLead:
      "We build the AI systems that Ras Laffan's LNG and petrochemicals majors, QatarEnergy LNG operating teams, Ras Laffan Port operators, downstream contractors and Ras Laffan Industrial City authority teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Ras Laffan — production AI for the world-leading LNG complex, QatarEnergy LNG operating teams, petrochemicals operators, Ras Laffan Port and the Ras Laffan Industrial City authority. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Ras Laffan'),
      'AI for Ras Laffan Industrial City',
      'AI for QatarEnergy LNG',
      'AI for Ras Laffan Port',
      'AI for LNG operations Qatar',
      'AI for petrochemicals Ras Laffan',
      'industrial AI Qatar Ras Laffan'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for QatarEnergy LNG operations at Ras Laffan.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Throughput, reliability and OEE uplift AI for Ras Laffan petrochemicals and downstream operators.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'LNG cargo ETA, terminal CV and customs-document intelligence for the Ras Laffan Port operating environment.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Ras Laffan Industrial City authority operational AI and industrial-zone analytics.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Ras Laffan industrial zone.' }
    ],
    positioningCopy:
      "Ras Laffan is the largest LNG facility on the planet — and the AI brief is industrial-grade at LNG-operator scale. Plants run 24/7; the QatarEnergy LNG operating governance is rigorous; the process-safety regime is non-negotiable. We arrive with senior industrial-AI engineers, reference architectures against the LNG-operator stack, and a 12-week production path that integrates with your existing HAZOP, management-of-change and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Ras Laffan LNG, petrochemicals and port teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Ras Laffan plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and DCS typical of the Ras Laffan LNG operating environment?',
        answer:
          'Yes. Our LNG-environment reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21 and the major DCS stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and align AI deliverables to IEC 61511 / IEC 61508 functional-safety expectations and to LNG-operator HAZOP and management-of-change regimes.'
      },
      {
        question: 'How do you align AI deliverables with QatarEnergy LNG governance and NCSA-NIA expectations?',
        answer:
          'Every Ras Laffan engagement integrates with your existing operational-excellence and HSE management system, documents failure-mode analysis on the AI decision boundary, and aligns the evidence pack to NCSA National Information Assurance controls and to QatarEnergy LNG operational-governance expectations.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-khor', 'ai-development-in-mesaieed', 'ai-development-in-al-shamal']
  },
  {
    slug: 'ai-development-in-al-shamal',
    name: 'Al Shamal',
    possessive: "Al Shamal's",
    region: 'Al Shamal Municipality',
    economicSnapshot:
      'The northernmost municipality of Qatar — primarily a fishing and small-services town with heritage sites, a small residential base, and a strategic coastal position close to Ras Laffan.',
    heroEyebrow: 'AI engineering for Al Shamal',
    heroH1: 'Production AI for Al Shamal.',
    heroLead:
      "We build the AI systems that Al Shamal's fisheries co-operatives, small-services SMEs, heritage and small-tourism operators and Al-Shamal Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Al Shamal — production AI for northern-coast fisheries, small-services SMEs, heritage tourism and Al-Shamal Municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Shamal'),
      'AI for fisheries Al Shamal',
      'AI for Al Shamal Municipality',
      'AI for northern Qatar coast'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale fisheries yield, sorting and supply-chain AI for Al-Shamal co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Shamal Municipality operational AI and northern-coast civic-services analytics.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Northern-coast logistics AI for Al-Shamal operators and Ras-Laffan-adjacent supply.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale heritage-and-coastal-tourism demand AI for Al-Shamal operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Small-scale demand AI for Al-Shamal retail and SMEs.' }
    ],
    positioningCopy:
      "Al Shamal is small in population but operationally part of the northern-coast fisheries and the Ras-Laffan-adjacent corridor. The AI brief is yield, cycle time, civic-services efficiency and small-scale heritage-tourism work. We arrive with templates that fit Al-Shamal-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Shamal fisheries, services and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Shamal operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to small-operator economics typical of Al Shamal?',
        answer:
          'Yes. Al-Shamal-scale engagements typically sit in the sub-QAR-1M budget band and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — but team size and scope are sized to the operator.'
      },
      {
        question: 'Do you bundle Al Shamal work with Ras Laffan industrial engagements?',
        answer:
          'Yes. Al Shamal pairs naturally with a Ras Laffan industrial-AI programme — for example, the industrial-side production AI inside Ras Laffan plus the coastal-fisheries and small-services leg in Al Shamal. We can deliver Al-Shamal-only or bundle and will price both shapes in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-ruwais', 'ai-development-in-ras-laffan', 'ai-development-in-al-khor']
  },
  {
    slug: 'ai-development-in-al-ruwais',
    name: 'Al Ruwais',
    possessive: "Al Ruwais's",
    region: 'Al Shamal Municipality',
    economicSnapshot:
      "A small fishing village at the northern tip of Qatar — part of Al Shamal Municipality — with a working fisheries economy, a small heritage and coastal-services base, and proximity to the Ras Laffan industrial city.",
    heroEyebrow: 'AI engineering for Al Ruwais',
    heroH1: 'Production AI for Al Ruwais.',
    heroLead:
      "We build the AI systems that Al Ruwais's fisheries co-operatives, heritage and small-coastal-services operators and Al-Shamal Municipality teams actually put into production — staffed by named senior engineers, priced in QAR, and aligned to MCIT, NCSA-NIA and Qatar PDPL.",
    metaDescription:
      'AI development company in Al Ruwais — production AI for northern-tip fisheries, heritage and small-coastal-services operators and Al-Shamal Municipality. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Al Ruwais'),
      'AI for fisheries Al Ruwais',
      'AI for northern tip Qatar',
      'AI for Al Ruwais municipality'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Small-scale fisheries yield and supply-chain AI for Al-Ruwais co-operatives.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Al-Shamal Municipality and Al-Ruwais civic-services AI.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Northern-tip logistics AI for Al-Ruwais operators and Ras-Laffan-adjacent supply.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Small-scale heritage and coastal-tourism demand AI for Al-Ruwais operators.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Very small-scale demand AI for Al-Ruwais retail and SMEs.' }
    ],
    positioningCopy:
      "Al Ruwais is small and operationally part of the Al-Shamal fisheries and Ras-Laffan-adjacent corridor. The AI brief is honest and small-scale: yield, cycle time and civic-services efficiency. We arrive with templates that fit Al-Ruwais-scale operators and a 12-week production path sized accordingly.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Al Ruwais fisheries, services and municipality teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-country.' },
      { t: 'We hand over', d: 'Engineered transition to your Al Ruwais operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you scope an AI engagement to very small-operator economics typical of Al Ruwais?',
        answer:
          'Yes. Al-Ruwais-scale engagements are typically sub-QAR-500K and target a single focused production system. The shape is the same — four-week discovery, twelve-week production path, regulator-aligned evidence pack — but team size and scope are tightly sized to the operator.'
      },
      {
        question: 'Do you bundle Al Ruwais into a wider Al Shamal or Ras Laffan programme?',
        answer:
          'Yes. Al Ruwais typically benefits from being part of a wider Al-Shamal Municipality programme covering both Al Ruwais and Al Shamal, or paired with a Ras Laffan industrial-AI programme. We will price Al-Ruwais-only and a bundle option in the discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-al-shamal', 'ai-development-in-ras-laffan', 'ai-development-in-al-khor']
  }
];

export function getQatariCityBySlug(slug: string): QatariCity | undefined {
  return QATARI_CITIES.find((c) => c.slug === slug);
}

export const QATARI_CITY_SLUGS = QATARI_CITIES.map((c) => c.slug);
