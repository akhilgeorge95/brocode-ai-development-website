# Conversion Brief — Document Intelligence (Arabic OCR & Extraction)

> **Reference brief — gold standard for the template.** All other briefs should match this depth and specificity.

---

## 1. Page Slug & URL
`/services/document-intelligence`

## 2. Primary Audience Persona
Head of Digital Transformation or Director of Information Management at a UAE federal entity (e.g., Ministry of Interior, GHQ, Court of Cassation) or large regional bank back-office, 500–5,000 employees, sponsored by the entity's CIO. They have a board-level mandate to digitise Arabic archives, classify and route incoming correspondence, or extract data from KYC packs by the end of the current fiscal year. Reports up to a board IT committee that has rejected previous tenders for being "off-the-shelf OCR with no Arabic accuracy evidence."

## 3. Visitor Intent at Arrival
The visitor just searched for an enterprise OCR vendor that can actually handle Arabic — including handwritten Arabic, mixed Arabic/English, and document classification — and that will deploy on-premise inside ADGM/DIFC or sovereign cloud. They are mid-to-late **evaluation** stage. They likely already have ABBYY / Microsoft Form Recognizer / Google Document AI quotes in front of them and are checking whether a specialist gives them better Arabic accuracy and a faster procurement path.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[arabic ocr enterprise uae]`
- **Ad group:** `Document Intelligence – Arabic OCR – UAE`

## 5. Secondary Keyword Cluster
1. arabic handwriting recognition uae
2. enterprise document extraction abu dhabi
3. arabic ocr api on-premise
4. invoice ocr arabic english bilingual
5. government document digitisation uae
6. KYC document extraction GCC
7. judicial archive OCR arabic
8. AI document classification banking middle east

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (federal entities, ADGM banks), Dubai (DIFC banks, RTA, courts)
- **Secondary:** KSA (NCA-regulated banks, Saudi Post archives), Qatar (ictQatar, Doha Bank ecosystem), Kuwait, Bahrain
- **Tertiary:** Pakistan, Egypt — Arabic-heavy markets with similar handwriting characteristics

## 7. The One Painful Problem
Their existing OCR stack drops to ~62 % accuracy on handwritten Arabic correspondence and refuses to classify it, so 40+ FTEs are still manually keying mail into the ERP — and the regulator has now told them to demonstrate end-to-end automated lineage by Q3.

## 8. The Stakes
- Their digitisation programme has already had one re-baseline; another slip means board-level escalation and a possible vendor change at the steering-committee level.
- The CIO has personally committed to a Vision-2031-aligned milestone; missing it costs reputation with the parent ministry.
- The 40 FTE manual-entry cost runs into seven figures annually and is a recurring budget question.

## 9. The Promise (H1 Direction)
Production-grade Arabic document intelligence — including handwritten Arabic — running on your own sovereign infrastructure, deployed in under 90 days, with a documented accuracy benchmark on **your** documents before contract signature.

## 10. The Unique Mechanism
- A purpose-built pipeline combining **Surya** (layout & line detection) + a fine-tuned **PaddleOCR** variant for Arabic glyphs, with a custom **CRAFT**-style detector trained on UAE government form geometries.
- Post-OCR Arabic NER + intent classifier built on a fine-tuned **AraBERT-v2** + a small in-house Khaleeji dialect head.
- TDRA-compliant on-premise deployment in a single rack, packaged as a Kubernetes-on-bare-metal appliance, with optional GPU bursting to G42 Cloud (UAE-resident).
- The "Pre-Contract Accuracy Benchmark": Brocode runs a free 500-document benchmark on the prospect's own corpus before the SoW is signed.

## 11. Top 3 Objections
- **O1:** "Arabic handwriting accuracy in production — show me real numbers, not Latin-script benchmarks."
- **O2:** "Data sovereignty — none of these documents can leave the country, and your appliance must pass our PenTest and TDRA review."
- **O3:** "Procurement timeline — our internal IT cycle is 9 months, can your team actually integrate with our existing SAP / OpenText / homegrown DMS in that window?"

## 12. Proof Strategy
- Pre-contract benchmark report on prospect's own documents (lead magnet, see field 13).
- Anonymised UAE federal-entity reference: 1.2 M Arabic letters processed, 96.4 % field-level accuracy, full audit trail.
- Anonymised GCC tier-1 bank reference: KYC pack extraction reducing handle time from 27 min to 3 min.
- Side-by-side accuracy table vs ABBYY FineReader Server, Microsoft Form Recognizer, Google Document AI on a shared 10 K Arabic document set (lead magnet).
- ISO 27001, SOC 2 Type II, NVIDIA Inception, AWS Advanced Tier, G42 Cloud partnership badges.

## 13. The Lead Magnet
**"Arabic OCR Accuracy Benchmark Report: 7 Engines Tested on 10,000 UAE Government & Banking Documents"** — 32-page PDF + an interactive accuracy explorer (filter by document type, handwriting prevalence, field type). Headline figure: **+18.7 % field-level accuracy** for the Brocode pipeline vs the best of the off-the-shelf engines on Arabic handwritten correspondence.

## 14. Primary CTA Wording
**"Request a free 500-document Arabic OCR benchmark on your corpus"** — secondary mid-page CTA: **"Book a 30-minute architecture review with our Arabic NLP lead"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I'd like to discuss enterprise Arabic OCR / document intelligence for [organisation]. Our priority is [handwritten Arabic / KYC / archive digitisation]. Could we schedule a 30-minute call?

## 16. Quote Form Fields
1. **Estimated monthly document volume** (single select: <10K / 10K–100K / 100K–1M / >1M)
2. **Document types** (multi-select: printed Arabic / handwritten Arabic / mixed Arabic-English / scanned forms / typed PDFs / structured invoices)
3. **Languages required** (multi-select: MSA / Khaleeji dialect / English / French / other)
4. **Target deployment** (single select: on-premise / sovereign cloud (G42, Khazna) / hyperscaler UAE region / hybrid)
5. **Existing DMS or ERP to integrate** (free text — SAP / OpenText / SharePoint / homegrown / none)
6. **Mandated go-live date** (date picker)

## 17. Hero Media Direction
Split-screen hero. **Left:** a tilted, slightly-shadowed scan of a real-looking handwritten Arabic government letter on a colour-correct A4. **Right:** a clean JSON structured-extraction panel populated with fields (recipient, date, intent, action items) appearing line-by-line with a soft type-on. Below the JSON, a thin accuracy meter ticks from 0 to 99.2 % over 1.5 seconds on viewport entry. Background: a very subtle parallax of an Arabic text matrix at 8 % opacity. Calm navy + sand-gold palette; no stock-OCR cliché of magnifying glasses or "robot reading documents."

## 18. Section-by-Section Outline
1. **Hero** — split-screen scan-to-JSON with the 99.2 % accuracy meter.
2. **Why generic OCR fails on Arabic** — three-card explainer (right-to-left layout, dialect glyphs, handwriting variability) with one real failure example per card.
3. **The Brocode Arabic OCR pipeline** — architecture diagram (Surya → PaddleOCR-Arabic → AraBERT-v2 → routing) with a clickable layer-by-layer accuracy contribution.
4. **Benchmark vs ABBYY / Microsoft / Google** — accuracy comparison table with the lead-magnet CTA.
5. **On-premise / sovereign deployment** — reference rack diagram, TDRA-readiness checklist.
6. **Case studies** — federal entity correspondence + GCC bank KYC, each with one quantified outcome.
7. **Integration patterns** — SAP / OpenText / Salesforce / custom DMS, with one-paragraph each.
8. **Pre-contract accuracy benchmark offer** — full-width visual CTA with form.
9. **FAQ** (built for FAQ schema) — accuracy, deployment, retraining, integrations, procurement.
10. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/natural-language-processing` — visitors who land on Arabic OCR always ask about downstream Arabic NLP. Link in section 7 and the related band.
2. `/services/mlops-ai-infrastructure` — to cover the retraining and drift question. Linked from the architecture diagram caption.
3. `/services/self-hosted-llm-infrastructure` — for the sovereign-deployment audience. Linked from section 5.
4. `/industries/government-public-sector` — the dominant industry for this page; linked from the case-study section.
5. `/industries/banking-financial-services` — secondary case-study link.

## 20. Differentiation Angle vs Competitors
- **vs ABBYY FineReader Server** — emphasise Arabic handwriting accuracy delta (+18.7 % on benchmark), TDRA-compliant on-prem appliance, and a 90-day deployment vs ABBYY's typical 6–9 month integration cycle with regional resellers.
- **vs Microsoft Form Recognizer / Azure AI Document Intelligence** — emphasise sovereign deployment (Azure UAE North requires Microsoft-managed keys; we ship customer-managed appliances) and Khaleeji dialect head (Form Recognizer treats Arabic as a single locale).
- **vs Google Document AI** — emphasise on-premise availability (Google's Document AI is cloud-only) and the pre-contract benchmark.
- **vs in-house build** — emphasise the 90-day timeline vs a typical 12–18 month in-house Arabic OCR programme, and the pre-trained Khaleeji dialect head.

---

## Production notes
- All accuracy numbers (96.4 %, +18.7 %) require confirmation from the lead engineer before publish.
- The accuracy benchmark must be regenerated quarterly to stay current with vendor updates.
- The Arabic letter mockup for the hero must be reviewed by an Arabic native speaker before publish — no fake/garbled glyphs.
