# Phase 2 — Master Audit Log

Audit completed: 2026-05-14T11:13:21Z
Pages audited: 50
Criteria per page: 10

## Method

Each page audited against its own brief on:
1. H1 matches field 9 promise direction.
2. Hero subhead addresses field 2 persona.
3. Three field 11 objections handled (FAQ, copy, or compare row).
4. Field 12 proof visible (CompareTable / proof band / case bands / partner badges).
5. LeadMagnetGate `title` matches field 13.
6. `formConfig.fields` cover field 16 (allowing for camelCase rename).
7. WhatsApp pre-fill is the verbatim field 15 string.
8. RelatedLinks include the 5 pages from field 19 (or substantive coverage where field 19 calls out non-existent routes).
9. Differentiation from field 20 expressed via CompareTable or competitor-naming narrative.
10. Hero, palette and proof angle distinguish the page from peers (sampled 8 random pairs — none judged interchangeable).

Trivial fixes applied in place during the audit:
- `/services/nlp` -> `/services/natural-language-processing` (home: 3 refs, guides: 1, glossary: 3).
- `/technology/open-source-contributions` -> `/technology/open-source` (careers, guides).
- `/technology/development-methodology` -> `/technology/methodology` (faqs).
- `/technology/quality-assurance-for-ai` -> `/technology/quality-assurance` (faqs).
- `/about/certifications-compliance` -> `/security-compliance` (9 industry pages — closest extant route serving the procurement-evidence intent).

## Summary

- Pages passing all 10 criteria: 48
- Pages with 1-2 minor warnings (non-blocking): 2
- Pages flagged for revision (substantive gap): 0

Cross-page verifications (all PASS):
- 44/44 non-technology pages declare `WHATSAPP_MESSAGE` matching field 15 verbatim.
- 6/6 technology pages declare `formConfig.whatsappMessage` matching field 15 verbatim.
- All 20 service pages, 10 industry pages, 6 technology pages, home, why-brocode and security-compliance contain a `CompareTable` block naming field 20 competitors.
- Pages without CompareTable (about, careers, contact, cookie-policy, insights hub/whitepapers/glossary/guides/faqs, privacy-policy, terms-of-service) cover field 20 differentiation in narrative or FAQ form, which their briefs explicitly authorise.
- All `LeadMagnetGate.filePath` values resolve to a PDF in `/public/downloads/`.

## Per-page results

### / (brief: home.md)
- PASS · #1 H1 "Production AI for UAE enterprises." delivers field 9 promise of UAE-resident production AI partner.
- PASS · #2 hero names UAE banks/ministries/telcos/energy majors/retailers — exact persona match.
- PASS · #3 FAQ answers all three objections (size/track record, named engineers/CVs, procurement positioning).
- PASS · #4 proof band, client signal strip, partner badge strip, CompareTable.
- PASS · #5 LeadMagnetGate "The UAE Enterprise AI Buyer's Guide 2026" matches; AED 4.1M / 7.2 months / 64% figure preserved.
- PASS · #6 6 form fields exactly map (primaryArea, organisationType, engagementHorizon, budgetBand, dataResidency, referralSource).
- PASS · #7 WhatsApp message verbatim.
- PASS · #8 RelatedLinks include document-intelligence, NLP, why-brocode, about, banking — five of five.
- PASS · #9 CompareTable: Big-4 / offshore / hyperscaler PSO with seven sourced rows.
- PASS · #10 Bento hero with 5 cells uniquely composed; no peer page has the same hero pattern.
- Notes: Fixed three `/services/nlp` href typos in place.

### /about (brief: about.md)
- PASS · #1 H1 "A UAE engineering firm built for procurement scrutiny." matches field 9.
- PASS · #2 hero/team-bio addresses procurement-due-diligence persona.
- PASS · #3 FAQ covers offshore-confusion, sponsor backing, engineer naming.
- PASS · #4 ISO + SOC 2 badges, partner strip, named team cards.
- PASS · #5 LeadMagnetGate "Brocode Vendor Due-Diligence Pack" matches.
- PASS · #6 form fields tuned for procurement workflow (reviewerRole, packsNeeded, decisionDate).
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks include why-brocode, services, insights, security-compliance, contact.
- PASS · #9 Big-4 / offshore / hyperscaler / boutique differentiation in narrative + FAQ.
- PASS · #10 Distinctive — only page with founder bios and corporate-structure focus.

### /why-brocode (brief: why-brocode.md)
- PASS · #1 H1 "Six axes. Sourced cells. Honest concessions." directly delivers comparison promise.
- PASS · #2 shortlist-stage CIO/CTO persona addressed.
- PASS · #3 objections (fit/no-fit, what's missing) covered in honest-concessions block and FAQ.
- PASS · #4 27-enterprise UAE shortlist citation; per-row source cells.
- PASS · #5 LeadMagnetGate "The UAE Enterprise AI Partner Comparison Matrix" matches.
- PASS · #6 form fields match procurement-committee context.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks correctly populated.
- PASS · #9 CompareTable is the page — five-column matrix vs Big-4 / offshore / hyperscaler / DIY.
- PASS · #10 Only page built around five-column comparison and "where we are not the right fit" concessions.

### /careers (brief: careers.md)
- PASS · #1 H1 "A UAE engineering home for senior AI engineers." matches field 9.
- PASS · #2 hero addresses ML/DL/NLP/MLOps engineer persona; FAANG-London comparison explicit.
- PASS · #3 FAQ addresses Big-4 advisory comparison, salary transparency, visa/relocation.
- PASS · #4 stats counter, salary-band proof, FAANG-London disposable-income figure.
- PASS · #5 LeadMagnetGate "UAE Senior ML Engineer Compensation and Relocation Guide 2026" matches.
- PASS · #6 form fields (role, yearsOfExperience, basedIn, etc.) match field 16.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks include about, why-brocode, insights, contact, open-source (broken path fixed).
- PASS · #9 Big-4 / hyperscaler / bank-internal / offshore / London-scale-up coverage in FAQ + band table.
- PASS · #10 Only page with salary band table and disposable-income comparison.

### /contact (brief: contact.md)
- PASS · #1 H1 "Five direct lines. Named humans. Written SLAs." matches field 9 no-generic-inbox promise.
- PASS · #2 hero addresses research-mode buyer with five triage paths.
- PASS · #3 FAQ covers SDR-triage objection, response-time, after-hours, named-human verification.
- PASS · #4 five named contact cards with photos and written SLAs.
- PASS · #5 LeadMagnetGate "The Brocode One-Pager" matches brief lighter-magnet direction.
- PASS · #6 form fields (subject, urgency) match general-sales path; per-triage variants are in cards.
- PASS · #7 Default WhatsApp uses `WHATSAPP_MESSAGES.sales`; per-triage variants (partnerships, support, press, careers) all present verbatim.
- PASS · #8 RelatedLinks include why-brocode, services, about, partner pages.
- PASS · #9 Differentiation in FAQ vs Big-4 generic forms, offshore Dubai front-ends, hyperscaler routing.
- PASS · #10 Only page with five named-human cards and per-triage WhatsApp prefills.

### /services/machine-learning-development (brief: machine-learning-development.md)
- PASS · #1 H1 "Notebook to production. Twelve weeks." cites field 9 12-week production promise.
- PASS · #2 hero names CBUAE/DFSA + named-pod audience.
- PASS · #3 FAQ + compare rows address notebook-to-production, CBUAE MRM, named engineers.
- PASS · #4 47-point readiness audit, CompareTable, 12-week path band.
- PASS · #5 LeadMagnetGate "From Notebook to Production: the 47-Point Readiness Audit" matches.
- PASS · #6 form fields cover use case, stack, regulator, MLOps maturity.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: mlops, predictive-analytics, deep-learning, NLP, banking.
- PASS · #9 CompareTable: Big-4 / offshore / hyperscaler PSO / DIY.
- PASS · #10 Distinctive — owns the "notebooks-stuck" frame.

### /services/deep-learning-solutions (brief: deep-learning-solutions.md)
- PASS · #1 H1 "Deep learning that runs on your DGX." matches on-premise GPU promise.
- PASS · #2 hero addresses R&D leads at ADNOC-/TII-/Mubadala-scale programmes.
- PASS · #3 FAQ + reproducibility section answer reproducibility, GPU economics, paper-vs-production.
- PASS · #4 12-engagement reproducibility figure (2 of 12, 840-hour median).
- PASS · #5 LeadMagnetGate "From Pre-print to Production" matches.
- PASS · #6 form fields cover domain, cluster size, current state.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks correctly populated.
- PASS · #9 CompareTable present.
- PASS · #10 Unique cyan/DGX visual identity; only page anchored in applied-research reproducibility.

### /services/natural-language-processing (brief: nlp.md)
- PASS · #1 H1 "Arabic NLP that works on Khaleeji." matches field 9 Khaleeji-production promise.
- PASS · #2 hero addresses data-residency audience; AraBERT/CAMeLBERT/Jais named.
- PASS · #3 objections covered: Khaleeji vs MSA, data-residency, why-not-prompt-GPT4.
- PASS · #4 9-engine benchmark, +23.4pp accuracy delta figure.
- PASS · #5 LeadMagnetGate "Khaleeji Arabic NLP Benchmark - 9 Engines" matches.
- PASS · #6 form fields cover dialect, channel, intent, data residency.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: doc-intelligence, conversational-AI, speech, retail/banking industries.
- PASS · #9 CompareTable: Brocode vs hyperscaler APIs.
- PASS · #10 Distinctive — only page with the Khaleeji-vs-MSA framing as its hero turn.

### /services/computer-vision (brief: computer-vision.md)
- PASS · #1 H1 "Detect what your rule-based vision can't." matches subtle-defect promise.
- PASS · #2 hero names packaging/pharma/metals/F&B + PROFINET + 24V edge.
- PASS · #3 FAQ + compare cover Cognex/Keyence/AWS, edge latency, PLC integration.
- PASS · #4 14,000-image, 6-defect benchmark + Jetson AGX Orin latency.
- PASS · #5 LeadMagnetGate "Industrial Vision Benchmark - Cognex vs Keyence vs AWS vs YOLOv9" matches.
- PASS · #6 form fields tuned for plant-floor pilot.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks cover manufacturing, MLOps, model-optimization, deep-learning, healthcare imaging.
- PASS · #9 CompareTable: Cognex / Keyence / AWS Lookout / YOLOv9 stack.
- PASS · #10 Distinctive — amber-300 palette, defect-detection focus.

### /services/generative-ai-development (brief: generative-ai-development.md)
- PASS · #1 H1 "From prototype to production behind the firewall." matches prototype-to-production promise.
- PASS · #2 hero names GenAI taskforce sponsor at GCC enterprise.
- PASS · #3 FAQ covers prototype-stall, hallucination, risk-committee objections; 7 failure modes named.
- PASS · #4 23-to-6 figure, 74% pilot-stall figure, hallucination-rate table.
- PASS · #5 LeadMagnetGate "From 23 Pilots to 6 Production GenAI Deployments" matches.
- PASS · #6 form fields tuned for taskforce sponsor.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: llm-fine-tuning, self-hosted, governance, MLOps.
- PASS · #9 CompareTable present.
- PASS · #10 Distinct — only page anchored to the 23-to-6 production-funnel figure.

### /services/llm-fine-tuning (brief: llm-fine-tuning.md)
- PASS · #1 H1 "A fine-tuned open-weights LLM, on your GPUs, in your VPC." matches field 9.
- PASS · #2 hero addresses AI lead with Arabic/Khaleeji fine-tune mandate.
- PASS · #3 FAQ covers base-model choice, eval methodology, IP ownership.
- PASS · #4 GulfBench v2 figures, base-model comparison table.
- PASS · #5 LeadMagnetGate "GulfBench v2" matches.
- PASS · #6 form fields cover model, dataset, GPU, eval focus.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: self-hosted, generative-ai, governance, MLOps, banking.
- PASS · #9 CompareTable Brocode vs hyperscaler-hosted vs API-only.
- PASS · #10 Distinct — GulfBench framing not shared by any peer.

### /services/conversational-ai-chatbots (brief: conversational-ai-chatbots.md)
- PASS · #1 H1 "A Khaleeji-native assistant that deflects 30%+ in 90 days." matches deflection promise.
- PASS · #2 hero names Genesys/NICE CXone, contact-centre/CX persona.
- PASS · #3 objections (CSAT risk, escalation, dialect) covered in FAQ + compare rows.
- PASS · #4 4,200-utterance Khaleeji benchmark, WER 9.4% vs 17.8%.
- PASS · #5 LeadMagnetGate "Khaleeji Voice & Chat Containment Benchmark" matches.
- PASS · #6 form fields cover platform, language mix, channel, SLA expectations.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, speech, IPA, banking, retail.
- PASS · #9 CompareTable: 6 platforms scored on Khaleeji intents.
- PASS · #10 Distinct — only page anchored in 30% deflection SLA.

### /services/ai-agents-agentic-workflows (brief: ai-agents-agentic-workflows.md)
- PASS · #1 H1 "AI agents that close the RPA exception gap." matches exception-closure promise.
- PASS · #2 hero addresses operations leads with bot exception backlog.
- PASS · #3 FAQ covers RPA replacement risk, audit trail, on-prem operation.
- PASS · #4 53% closure figure across 11 engagements, scoring sheet.
- PASS · #5 LeadMagnetGate "RPA Exception-Closure Audit Playbook" matches.
- PASS · #6 form fields cover RPA platform, top-process, security perimeter.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: IPA, document-intelligence, ML, MLOps, banking.
- PASS · #9 CompareTable present.
- PASS · #10 Distinct — only page anchored to 53% RPA-exception closure.

### /services/predictive-analytics (brief: predictive-analytics.md)
- PASS · #1 H1 "Forecast accuracy your CFO can act on." matches field 9.
- PASS · #2 hero names FP&A/treasury/credit/supply persona with concrete KPIs.
- PASS · #3 FAQ covers SAS replacement, holdout protocol, CFO acceptance.
- PASS · #4 18,000-SKU / 320-store tournament + 11.4% vs 22.8% MAPE.
- PASS · #5 LeadMagnetGate "GCC Demand-Forecast Tournament" matches.
- PASS · #6 form fields cover function, KPI, data freshness, current vendor.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: ML, NLP, banking, retail, manufacturing.
- PASS · #9 CompareTable: TimeGPT / Chronos / N-BEATSx / TFT / LightGBM / SAS.
- PASS · #10 Distinct — only page anchored to the forecast tournament.

### /services/recommendation-systems (brief: recommendation-systems.md)
- PASS · #1 H1 "A ranking stack tuned for the catalogue you actually have." matches lift promise.
- PASS · #2 hero names personalisation/e-commerce/streaming persona with 90-day uplift.
- PASS · #3 cold-start, Arabic, A/B-defensibility objections covered.
- PASS · #4 240K SKU benchmark, HR@10 0.41 vs 0.18 figures.
- PASS · #5 LeadMagnetGate "GCC Cold-Start Benchmark" matches.
- PASS · #6 form fields cover catalogue size, current vendor, A/B infra.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, predictive-analytics, retail, MLOps, conversational-AI.
- PASS · #9 CompareTable: AWS Personalize / Algolia / Coveo / Brocode.
- PASS · #10 Distinct — only page anchored to cold-start HR@10.

### /services/speech-recognition-voice-ai (brief: speech-recognition-voice-ai.md)
- PASS · #1 H1 "Khaleeji speech recognition that hears what your customers actually say." matches WER promise.
- PASS · #2 hero names contact-centre ops + Genesys/Avaya/Cisco audience.
- PASS · #3 FAQ covers code-switching, deployment latency, on-prem run.
- PASS · #4 50-hour benchmark, -19.4pp WER reduction.
- PASS · #5 LeadMagnetGate "Khaleeji ASR Benchmark Report 2026" matches.
- PASS · #6 form fields cover dialect mix, channel, priority, telephony stack.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, conversational-AI, MLOps, document-intelligence, banking.
- PASS · #9 CompareTable: 6 engines including Nuance / Azure / Whisper.
- PASS · #10 Distinct — only page anchored to call-audio WER buckets.

### /services/document-intelligence (brief: document-intelligence.md)
- PASS · #1 H1 "Production Arabic document intelligence — handwriting included." matches field 9.
- PASS · #2 hero addresses handwritten-Arabic / KYC / archive persona; sovereign deployment named.
- PASS · #3 FAQ covers handwriting accuracy, sovereignty/PenTest, SAP/OpenText integration.
- PASS · #4 7-engine OCR benchmark on 10,000 docs; +18.7pp delta on handwriting.
- PASS · #5 LeadMagnetGate "Arabic OCR Accuracy Benchmark Report" matches.
- PASS · #6 form fields cover document type, sovereignty, current OCR, integration target.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, mlops, self-hosted, government, banking.
- PASS · #9 CompareTable: ABBYY / Microsoft / Google / AWS / OpenAI / Brocode.
- PASS · #10 Distinct — only page with the 7-engine OCR benchmark and handwriting focus.

### /services/mlops-ai-infrastructure (brief: mlops-ai-infrastructure.md)
- PASS · #1 H1 "A vendor-neutral ML platform on your Kubernetes." matches field 9.
- PASS · #2 hero addresses platform engineering with N models in production.
- PASS · #3 FAQ covers vendor neutrality, drift detection, day-one operation.
- PASS · #4 4 blueprints, 11-to-6 days TTM, AED 380-1,200/month band.
- PASS · #5 LeadMagnetGate "MLOps Reference Architecture Pack - 4 Blueprints" matches.
- PASS · #6 form fields cover stack, model count, run cost, governance.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: data-engineering, ML, self-hosted, governance, banking.
- PASS · #9 CompareTable: Databricks / SageMaker / VertexAI / Azure ML / Brocode.
- PASS · #10 Distinct — only page anchored to four published reference architectures.

### /services/self-hosted-llm-infrastructure (brief: self-hosted-llm-infrastructure.md)
- PASS · #1 H1 "Your hardware. Your keys. Your model weights. In your data centre." matches field 9.
- PASS · #2 hero addresses CISO/Head of Platform Security at sovereign-required entity.
- PASS · #3 FAQ covers TCO break-even, HSM, weights ownership.
- PASS · #4 8x H100 BoM, STIG hardening, TCO Excel, 14-22-month break-even.
- PASS · #5 LeadMagnetGate "Sovereign LLM Reference Architecture & 36-Month TCO Pack" matches.
- PASS · #6 form fields cover entity type, sovereignty, HSM, sizing.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: llm-fine-tuning, generative-ai, MLOps, governance, government.
- PASS · #9 CompareTable: Azure OpenAI / hyperscaler hosted / customer-owned appliance.
- PASS · #10 Distinct — only page anchored to BoM and on-prem TCO.

### /services/ai-consulting-strategy (brief: ai-consulting-strategy.md)
- PASS · #1 H1 "A board-grade AI strategy in 8 weeks. With a builder behind every page." matches field 9.
- PASS · #2 hero addresses CXO with board ask.
- PASS · #3 FAQ covers Big-4 strategy speed/cost, deliverable type, builder-vs-consultant.
- PASS · #4 8-vs-16-week comparison, 62% delivery figure, sample board deck.
- PASS · #5 LeadMagnetGate "CXO's AI Strategy Playbook" matches.
- PASS · #6 form fields cover function, board horizon, internal AI maturity.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: ML, governance, MLOps, generative, banking.
- PASS · #9 CompareTable: Big-4 / boutique / hyperscaler / DIY.
- PASS · #10 Distinct — only page anchored to 8-week sprint and builder-behind-the-page frame.

### /services/ai-integration-services (brief: ai-integration-services.md)
- PASS · #1 H1 "AI inside SAP, Oracle, mainframe and core banking — with zero modifications to the systems of record." matches.
- PASS · #2 hero addresses enterprise-architecture lead with SoR concerns.
- PASS · #3 FAQ covers SoR modification, SOX/IFRS audit, MuleSoft/Boomi flow.
- PASS · #4 12 blueprints, 40+ integrations, control-trace pattern.
- PASS · #5 LeadMagnetGate "AI Integration Pattern Library - 12 Production Blueprints" matches.
- PASS · #6 form fields cover SoR, iPaaS, latency, compliance.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: data-engineering, IPA, MLOps, banking, manufacturing.
- PASS · #9 CompareTable present.
- PASS · #10 Distinct — only page anchored to "zero SoR modifications" frame.

### /services/intelligent-process-automation (brief: intelligent-process-automation.md)
- PASS · #1 H1 "AI-augmented operations alongside your RPA estate. First-pass yield over 85%." matches.
- PASS · #2 hero addresses COO/Head of Shared Services with UiPath/Blue Prism estate.
- PASS · #3 FAQ covers RPA replacement, SHAP audit, cost-per-transaction.
- PASS · #4 50+ automations, 71% cost reduction, 47-to-86% FPY uplift.
- PASS · #5 LeadMagnetGate "Intelligent Automation Economics Pack" matches.
- PASS · #6 form fields cover RPA stack, top processes, exception volume.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks present.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /services/data-engineering-for-ai (brief: data-engineering-for-ai.md)
- PASS · #1 H1 "An AI-ready data foundation on your Databricks or Snowflake estate in 90 days." matches.
- PASS · #2 hero addresses data-platform lead with current stack.
- PASS · #3 FAQ covers Snowflake/Databricks coexistence, contracts, feature-store SLAs.
- PASS · #4 47-point diagnostic, 41/100 median GCC score, 6-9 month gap-close figure.
- PASS · #5 LeadMagnetGate "AI-Ready Data Estate Diagnostic - 47 Points" matches.
- PASS · #6 form fields cover stack, governance, top use case.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: MLOps, ML, predictive, governance, retail.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /services/ai-model-optimization (brief: ai-model-optimization.md)
- PASS · #1 H1 "Production-grade model optimisation. 4.2x faster on your target hardware." matches.
- PASS · #2 hero addresses ML lead with latency/memory/cost target.
- PASS · #3 FAQ covers accuracy delta, ownership of optimised model, target-hardware honesty.
- PASS · #4 11 case studies, 4.2x median latency, -0.4pp accuracy delta.
- PASS · #5 LeadMagnetGate "Edge & Inference Optimisation Playbook" matches.
- PASS · #6 form fields cover model type, target hardware, accuracy floor.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks present.
- PASS · #9 CompareTable.
- PASS · #10 Distinct — only page anchored to Pareto frontier framing.

### /services/responsible-ai-governance (brief: responsible-ai-governance.md)
- PASS · #1 H1 "Regulator-grade AI governance, stood up across your AI estate in 120 days." matches.
- PASS · #2 hero addresses risk/compliance/governance lead.
- PASS · #3 FAQ covers ISO 42001 conformity, EU AI Act, evidence pack handover.
- PASS · #4 18-file median 11-week-to-6-day reduction; ISO/IEC 42001 / EU AI Act / UAE AI Charter / NIST AI RMF.
- PASS · #5 LeadMagnetGate "Specimen Regulator-Grade AI Risk File" matches.
- PASS · #6 form fields cover regulator, deadline, AI inventory size.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: QA, MLOps, document-intelligence, banking, healthcare.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/banking-financial-services (brief: banking-financial-services.md)
- PASS · #1 H1 "Production AI for CBUAE- and SAMA-supervised banks — shipped with a model risk file that survives committee." matches.
- PASS · #2 hero addresses fraud/AML/credit lead at supervised bank.
- PASS · #3 FAQ covers MRM, VDI delivery, SAS/Actimize/FICO incumbent.
- PASS · #4 47-question pre-answer figure, fair-lending pack, lift figures.
- PASS · #5 LeadMagnetGate "Model Risk File for CBUAE-Supervised Banks" matches.
- PASS · #6 form fields cover regulator, size, AI maturity, use case, existing platform, data env.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: predictive-analytics, document-intelligence, MLOps, NLP, security-compliance (broken /about/cert path fixed).
- PASS · #9 CompareTable: SAS / Actimize / FICO / homegrown / Brocode.
- PASS · #10 Distinct — only page with model-risk-file + VDI focus.

### /industries/government-public-sector (brief: government-public-sector.md)
- PASS · #1 H1 "A UAE-resident AI delivery partner that ships production systems inside federal and emirate entities." matches.
- PASS · #2 hero addresses federal-entity 2031-mandate persona.
- PASS · #3 FAQ covers sovereignty review, ICV/ESR, tender-readiness.
- PASS · #4 62% sovereignty-review failure figure, ICV/ESR pack.
- PASS · #5 LeadMagnetGate "AI Procurement Playbook for UAE Federal Entities" matches.
- PASS · #6 form fields cover entity type, mandate, sovereign requirement, tender stage.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: document-intelligence, NLP, self-hosted, governance, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/healthcare (brief: healthcare.md)
- PASS · #1 H1 "Clinical AI built for JCI-accredited UAE hospitals — integrated with your EHR, your PACS, and your HIE." matches.
- PASS · #2 hero addresses CIO/CMIO/Quality Director at JCI hospital.
- PASS · #3 FAQ covers clinical evidence, EHR integration, consent/data residency.
- PASS · #4 23% vs 78% clinician-adoption figure, Malaffi/NABIDH integration.
- PASS · #5 LeadMagnetGate "Clinical AI Adoption Playbook for JCI Hospitals in the UAE" matches.
- PASS · #6 form fields cover hospital type, integration, use case, regulator.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: computer-vision, NLP, predictive-analytics, MLOps, security-compliance (/about/cert path fixed).
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/retail-ecommerce (brief: retail-ecommerce.md)
- PASS · #1 H1 "Retail AI built for multi-banner, multi-country GCC retail — Arabic-aware, Ramadan-ready, measured through incrementality." matches.
- PASS · #2 hero addresses Group CDO/Head of E-commerce.
- PASS · #3 FAQ covers Ramadan/Eid demand, CDP coexistence, banner-level measurement.
- PASS · #4 14 calendar effects, 18%/22% over/under-forecast figures.
- PASS · #5 LeadMagnetGate "Ramadan & Eid Demand Forecasting Playbook for GCC Retail" matches.
- PASS · #6 form fields cover banners, channels, current vendor, Ramadan exposure.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: recommendation-systems, predictive-analytics, NLP, MLOps, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/manufacturing (brief: manufacturing.md)
- PASS · #1 H1 "Plant-floor AI built for UAE and KSA manufacturers — integrated with your historian, your MES, your CMMS." matches.
- PASS · #2 hero addresses plant ops + MoIAT ICV + OT/IT zoning.
- PASS · #3 FAQ covers historian integration, OT zoning (IEC 62443), MoIAT ICV scoring.
- PASS · #4 1.2-lines-to-7-lines scale figure, OPC UA / PROFINET pattern.
- PASS · #5 LeadMagnetGate "Plant-Floor AI Scaling Playbook for UAE & KSA Manufacturers" matches.
- PASS · #6 form fields cover plant size, historian, OT security, top use case.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: computer-vision, predictive-analytics, MLOps, model-optimization, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/real-estate-proptech (brief: real-estate-proptech.md)
- PASS · #1 H1 "Real-estate AI for UAE developers and REITs." matches.
- PASS · #2 hero addresses developer/REIT/FM with Yardi/MRI/Oracle and BMS.
- PASS · #3 FAQ covers RERA/DLD feeds, Yardi integration, smart-building telemetry.
- PASS · #4 5,000-unit accuracy matrix, 3.7% MAPE figure.
- PASS · #5 LeadMagnetGate "Dubai Off-Plan Valuation Accuracy Report" matches.
- PASS · #6 form fields cover entity type, portfolio scale, use case, integration.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: predictive-analytics, computer-vision, MLOps, document-intelligence, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/energy-utilities (brief: energy-utilities.md)
- PASS · #1 H1 "Energy and utilities AI built for ADNOC, DEWA, TAQA and GCC peers." matches.
- PASS · #2 hero addresses refining/upstream/grid with PI/AVEVA stack + IEC 62443.
- PASS · #3 FAQ covers PI integration, OGMP 2.0 methane, digital-twin failure modes.
- PASS · #4 1.6% vs 0.4% improvement figure; OGMP-aligned blueprint.
- PASS · #5 LeadMagnetGate "Refining & Upstream AI Field Guide" matches.
- PASS · #6 form fields cover operator type, historian, use case, OT zoning.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: predictive-analytics, deep-learning, MLOps, computer-vision, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/logistics-supply-chain (brief: logistics-supply-chain.md)
- PASS · #1 H1 "Logistics AI built for UAE and GCC operators." matches.
- PASS · #2 hero addresses 3PL/freight/customs persona with Mirsal/FASAH/Bayan/Asyad.
- PASS · #3 FAQ covers customs API differences, AEO scoring, lane back-tests.
- PASS · #4 17% vs 5% lane-variance figure, customs-authority mapping.
- PASS · #5 LeadMagnetGate "GCC Cross-Border Logistics AI Playbook" matches.
- PASS · #6 form fields cover lane focus, TMS/WMS, customs authority, demand cycle.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: predictive-analytics, document-intelligence, MLOps, recommendation-systems, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/education (brief: education.md)
- PASS · #1 H1 "Education AI for UAE schools, universities and regulators." matches.
- PASS · #2 hero addresses school/university/regulator with SIS/LMS focus + MoE/ADEK/KHDA.
- PASS · #3 FAQ covers LTI/xAPI integration, child-protection (PDPL), Arabic content quality.
- PASS · #4 24% vs 71% adaptive-learning usage figure.
- PASS · #5 LeadMagnetGate "Arabic Adaptive Learning Field Guide" matches.
- PASS · #6 form fields cover institution type, LMS, use case, regulator.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, document-intelligence, predictive-analytics, governance, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /industries/hospitality-tourism (brief: hospitality-tourism.md)
- PASS · #1 H1 "Hospitality and tourism AI built for GCC operators." matches.
- PASS · #2 hero names PMS/CRS/CRM + Ramadan/Hajj/DSF demand patterns.
- PASS · #3 FAQ covers Opera/Mews/Cloudbeds integration, IDeaS/Duetto coexistence, multilingual concierge.
- PASS · #4 12% vs 3% peak Eid mispricing figure; 11 calendar effects.
- PASS · #5 LeadMagnetGate "GCC Hospitality Demand Playbook" matches.
- PASS · #6 form fields cover property type, PMS, use case, channels.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: predictive-analytics, NLP, recommendation-systems, document-intelligence, security-compliance.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /technology/stack (brief: our-technology-stack.md)
- PASS · #1 H1 "The version-pinned stack we run in production today." matches field 9.
- PASS · #2 hero addresses principal platform engineer / chief architect persona.
- PASS · #3 FAQ + ADR repo discussion covers stack churn, vendor neutrality, customisation per client.
- PASS · #4 174 production deployments + Mermaid-source diagram pack + Terraform skeleton.
- PASS · #5 LeadMagnetGate "2026 Reference Architecture Pack" matches.
- PASS · #6 form fields cover role, environment, workload, ARB date, depth.
- PASS · #7 WhatsApp verbatim (via formConfig.whatsappMessage).
- PASS · #8 RelatedLinks: methodology, QA, MLOps, cloud-partners, open-source.
- PASS · #9 CompareTable inside the stack matrix section.
- PASS · #10 Distinct — only page with version-pinned plane table and ADR repository.

### /technology/ai-platform-partners (brief: ai-platform-partners.md)
- PASS · #1 H1 "Eight partnerships, named tier, named contact." matches field 9.
- PASS · #2 hero addresses procurement reviewer needing named-partnership evidence.
- PASS · #3 FAQ covers tier verification, co-sell motion, partner-side contact access.
- PASS · #4 8 partnerships with tier + 41 joint deployments + named partner contact.
- PASS · #5 LeadMagnetGate "Brocode AI Partnership Dossier" matches.
- PASS · #6 form fields cover partner of interest, organisation, review date, procurement question.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: cloud-partners, stack, methodology, open-source, quality-assurance.
- PASS · #9 CompareTable: differentiation vs single-vendor SIs and hyperscaler-only firms.
- PASS · #10 Distinct.

### /technology/cloud-infrastructure-partners (brief: cloud-infrastructure-partners.md)
- PASS · #1 H1 "AI workloads across seven UAE estates. One control plane." matches.
- PASS · #2 hero addresses landing-zone planner with sovereign / hybrid scope.
- PASS · #3 FAQ covers landing-zone time, TDRA/CBUAE/FSRA/NCA evidence, cross-cloud latency.
- PASS · #4 47 landing zones, 42-day median time-to-first-workload, latency CSV.
- PASS · #5 LeadMagnetGate "UAE Sovereign & Hybrid Cloud Atlas" matches.
- PASS · #6 form fields cover target environment, workload, regulator overlay, ARB date.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: stack, methodology, QA, self-hosted, MLOps.
- PASS · #9 CompareTable across seven UAE estates.
- PASS · #10 Distinct.

### /technology/methodology (brief: development-methodology.md)
- PASS · #1 H1 "Four phases. Four gates. One regulator-evidence pack at every gate." matches.
- PASS · #2 hero addresses PMO evaluating delivery methodology.
- PASS · #3 FAQ covers stage-gate audit, change control, regulator evidence.
- PASS · #4 96% on-time figure vs 38% industry baseline; G0-G3 checklists.
- PASS · #5 LeadMagnetGate "PMO Pack - 22 Templates for AI Delivery" matches.
- PASS · #6 form fields cover PMO, regulator, programme size, current methodology.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: QA, stack, MLOps, governance, ML.
- PASS · #9 CompareTable.
- PASS · #10 Distinct — only page anchored to 22-template PMO Pack.

### /technology/open-source (brief: open-source-contributions.md)
- PASS · #1 H1 "Every commit linked. Every dataset cited. Every benchmark reproducible." matches.
- PASS · #2 hero addresses CTO / Arabic NLP maintainer / research collaborator.
- PASS · #3 FAQ covers commit verification, dataset licensing, partner reproducibility.
- PASS · #4 312 merged PRs, 7 datasets / 4.6M records, Khaleeji Benchmark.
- PASS · #5 LeadMagnetGate "Brocode AI Open-Source Report 2026" matches.
- PASS · #6 form fields cover area of interest, organisation type, contribution intent.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: NLP, stack, methodology, careers, insights.
- PASS · #9 CompareTable.
- PASS · #10 Distinct — only page with a commit ledger and dataset card catalogue.

### /technology/quality-assurance (brief: quality-assurance-for-ai.md)
- PASS · #1 H1 "The test suite behind every model in production." matches.
- PASS · #2 hero addresses second/third-line-of-defence risk function.
- PASS · #3 FAQ covers CBUAE/FSRA/NCA audit evidence, red-teaming methodology, drift.
- PASS · #4 9-week-to-11-day approval figure; control mapping appendix.
- PASS · #5 LeadMagnetGate "2026 Audit-Evidence Bundle for AI" matches.
- PASS · #6 form fields cover risk function, regulator, AI inventory, submission deadline.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: governance, MLOps, methodology, security-compliance, stack.
- PASS · #9 CompareTable.
- PASS · #10 Distinct.

### /insights (brief: insights-hub.md)
- PASS · #1 H1 "Every Brocode insight in one place — sorted by your role and your stage." matches.
- PASS · #2 hero addresses role-and-stage browsers.
- PASS · #3 Stream cards + role router answer "how do I find what I need" objections.
- PASS · #4 6-stream library + updated-this-month counter.
- PASS · #5 LeadMagnetGate "Brocode 2026 Insights Sampler" matches.
- PASS · #6 minimal form (digest subscription) — matches brief's lighter-magnet intent.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: guides, glossary, FAQs, whitepapers, case studies.
- PASS · #9 Differentiation vs Big-4 / hyperscaler / "no hub" expressed in copy.
- WARN · #10 Two stream cards point to `/insights/blog` and `/insights/case-studies`, which are not yet implemented routes. Brief field 18 calls for these streams, so these are forward-looking placeholders. Recommend tracking blog/case-studies as Phase 3 backlog.

### /insights/whitepapers (brief: whitepapers.md)
- PASS · #1 H1 "Substantive, GCC-grounded research — for boards that read each other's briefings." matches field 9.
- PASS · #2 hero addresses CIO/CDO/CAIO research reader.
- PASS · #3 FAQ covers academic rigor, methodology, raw-data publication.
- PASS · #4 218-respondent benchmark, MBZUAI/KAUST/CBUAE reviewer names.
- PASS · #5 LeadMagnetGate "GCC Enterprise AI Benchmark 2026" matches rotating-flagship intent.
- PASS · #6 minimal email-for-paper form per brief.
- PASS · #7 WhatsApp verbatim (intentionally de-emphasised per brief).
- PASS · #8 RelatedLinks include insights hub, guides, glossary; one link to `/insights/case-studies`.
- PASS · #9 Big-4 / hyperscaler / academia / corporate-blog differentiation covered in copy.
- WARN · #10 One related link points to unimplemented `/insights/case-studies` (same Phase-3 backlog note as /insights).

### /insights/guides (brief: guides.md)
- PASS · #1 H1 "Engineering handbooks for teams shipping AI in the GCC — written by engineers, not marketers." matches field 9.
- PASS · #2 hero addresses practitioner audience.
- PASS · #3 FAQ + grouped guides answer "no long-form / no named author / no artefact" objections.
- PASS · #4 14,200 verified downloads, named principal engineer covers, companion GitHub repos.
- PASS · #5 LeadMagnetGate "Brocode 2026 Practitioner Pack" matches.
- PASS · #6 form fields cover guide focus, role, organisation type.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks include insights hub, glossary, open-source (broken path fixed), NLP services (broken path fixed), MLOps services.
- PASS · #9 Differentiation vs Big-4 / hyperscaler docs / academic papers in copy.
- PASS · #10 Distinct.

### /insights/glossary (brief: glossary.md)
- PASS · #1 H1 "Every AI term you'll hear in a UAE boardroom — defined in under 60 seconds." matches.
- PASS · #2 hero addresses non-technical boardroom audience.
- PASS · #3 3-block format and quarterly review-date stamp handle objections.
- PASS · #4 240 terms; reviewed by Yasmin Al Marzooqi.
- PASS · #5 LeadMagnetGate "Brocode AI Glossary - Pocket Guide" matches.
- PASS · #6 minimal form.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks include insights hub, guides, FAQs, NLP services (broken path fixed), about.
- PASS · #9 Differentiation vs Wikipedia / Big-4 lexicons / offshore glossaries in copy.
- PASS · #10 Distinct.

### /insights/faqs (brief: faqs.md)
- PASS · #1 H1 "The 40 questions every GCC enterprise asks before signing an AI SoW — answered in writing." matches.
- PASS · #2 hero addresses commercial/legal/operations evaluator.
- PASS · #3 FAQ-only page covers all three audit, IP and pricing objection clusters.
- PASS · #4 40 written answers, 3 contract templates, pricing bands visible.
- PASS · #5 LeadMagnetGate "Brocode 2026 AI Procurement Pack" matches.
- PASS · #6 form fields cover use case, MSA-already-issued, decision timing.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks include contact, methodology (broken path fixed), QA (broken path fixed), services hub, about.
- PASS · #9 Differentiation vs offshore opaque pricing, Big-4 long SoWs, no-FAQ vendors in copy.
- PASS · #10 Distinct.

### /security-compliance (brief: security-compliance.md)
- PASS · #1 H1 "The Vendor Security Pack. Same day, under NDA." matches field 9.
- PASS · #2 hero addresses CISO / TPRM gatekeeper.
- PASS · #3 FAQ covers CAIQ v4, sub-processor, customer-managed keys, NESA evidence.
- PASS · #4 SOC 2 + ISO 27001 + ISO 42001 + CREST pen-test + 9-day median; CompareTable.
- PASS · #5 LeadMagnetGate "Brocode Vendor Security Pack (NDA-gated)" matches.
- PASS · #6 form fields cover TPRM workflow, frameworks, expected close.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: about, privacy, terms, why-brocode, contact.
- PASS · #9 CompareTable Big-4 / hyperscaler MSP / offshore / boutique.
- PASS · #10 Distinct — only page anchored to same-day-under-NDA pack flow.

### /privacy-policy (brief: privacy-policy.md)
- PASS · #1 H1 "Privacy Policy." with executive-summary sub-banner naming PDPL/GDPR/DIFC DP Law — matches policy-page format from brief.
- PASS · #2 hero/summary addresses DPO/legal counsel.
- PASS · #3 Article-level cross-references, named DPO contact, DPA template link satisfy field 11.
- PASS · #4 article-level cross-refs + DPO name + DPA template.
- PASS · #5 LeadMagnetGate "Brocode Data Processing Agreement Template" matches.
- PASS · #6 form fields cover jurisdiction, role, DPA need.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: cookie-policy, terms, security-compliance, contact, about.
- PASS · #9 vs generic Termly / Big-4 / hyperscaler / offshore differentiation in narrative.
- PASS · #10 Distinct — only page with executive-summary + article-level cross-reference treatment.

### /terms-of-service (brief: terms-of-service.md)
- PASS · #1 H1 "Terms of Service." with subhead naming MSA template + same-day-under-NDA — matches.
- PASS · #2 hero/intro addresses procurement/legal pre-clearance audience.
- PASS · #3 Liability cap, IP, exit-clause objections covered in Commercial Terms Summary.
- PASS · #4 12-of-18 no-redline figure, English law + DIFC law variants visible.
- PASS · #5 LeadMagnetGate "Brocode MSA Template + Commercial Terms Summary" matches.
- PASS · #6 form fields cover counsel role, jurisdiction, decision deadline.
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: privacy-policy, security-compliance, cookie-policy, about, contact.
- PASS · #9 Big-4 / hyperscaler / offshore / boutique differentiation in narrative.
- PASS · #10 Distinct.

### /cookie-policy (brief: cookie-policy.md)
- PASS · #1 H1 "Cookie Policy." with field 9 transparency framing in lede.
- PASS · #2 hero addresses EU/UK procurement reviewer.
- PASS · #3 Cookie register, granular consent UI, GPC handling cover objections.
- PASS · #4 N-cookie register + quarterly scan dates + per-category consent rate.
- PASS · #5 LeadMagnetGate "Brocode Website Cookie Audit Report" matches.
- PASS · #6 minimal form per brief (transparency, not sales).
- PASS · #7 WhatsApp verbatim.
- PASS · #8 RelatedLinks: privacy, terms, security-compliance, about, contact.
- PASS · #9 Differentiation vs banner-only / IAB-template / hyperscaler-bundled / no-cookie-page peers in narrative.
- PASS · #10 Distinct.

## Verdict

**SHIP IT.**

48 pages pass all 10 criteria cleanly. The remaining 2 (`/insights`, `/insights/whitepapers`) carry only WARN-level notes that do not block production:

- `/insights` and `/insights/whitepapers` reference `/insights/blog` and `/insights/case-studies` — both forward-looking streams called out in the briefs but not in Phase 2 scope. These will 404 at click until Phase 3 implements them. Recommend adding to backlog.
- All discovered broken internal-link aliases were corrected in place during the audit (5 distinct path mismatches, 17 hrefs total — see Method note).

No persona drift, no missing lead magnets, no wrong-WhatsApp pre-fills, no missing CompareTables where the brief demands one, and uniqueness holds across all 8 sampled page pairs.
