# Conversion Brief — Intelligent Process Automation (RPA + AI for Back-Office)

---

## 1. Page Slug & URL
`/services/intelligent-process-automation`

## 2. Primary Audience Persona
COO, Chief Operating Officer, Head of Shared Services, Head of Global Business Services (GBS), or Head of Operational Excellence at a UAE or KSA enterprise — typically a bank, insurer, telco, energy major, large retailer, healthcare group, or a regional conglomerate / holding portfolio. 3,000–50,000 employees. The shared-services or GBS centre runs **invoice processing, claims adjudication, KYC / onboarding, procure-to-pay exceptions, order-to-cash exceptions, payroll exceptions, regulatory reporting, reconciliations**. The mandate, signed at ExCo level, is to **industrialise the back-office**: cut unit cost per transaction, lift first-pass yield, and free FTEs from repetitive judgement work. The visitor probably has a UiPath / Blue Prism / Automation Anywhere estate already — and it has plateaued.

## 3. Visitor Intent at Arrival
The visitor has just searched for an intelligent-automation partner who can extend their existing RPA estate with real AI — OCR for the invoices, classification for the inbound emails, decisioning for the exception queues, generative drafting for customer responses — and who can do so without replatforming. They are in **evaluation** stage. The COO is being told by their RPA Centre of Excellence that "we have automated all the easy stuff; the next wave needs AI", and the COO is being shown a Gartner chart of "hyperautomation" and wants a real, costed plan. They want to see actual transaction-level economics — not "save 40 % FTE" hand-waving.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"intelligent process automation uae"`
- **Ad group:** `IPA – RPA + AI – Shared Services & GBS – UAE & KSA`

## 5. Secondary Keyword Cluster
1. rpa ai hyperautomation gcc
2. invoice automation accounts payable bank
3. claims automation insurance uae
4. kyc automation onboarding ksa
5. exception handling ai uipath
6. cognitive automation shared services
7. document understanding invoice ksa
8. generative ai back office automation

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (GBS centres of regional groups, tier-1 bank ops, insurer GBS, Majid Al Futtaim, Emirates Group Finance), Abu Dhabi (ADNOC GBS, federal-entity shared services, FAB ops)
- **Secondary:** KSA (Aramco GBS, SABIC GBS, banks under SAMA, large takaful insurers), Qatar (QatarEnergy shared services, QNB ops), Oman, Kuwait, Bahrain
- **Tertiary:** Egypt, Pakistan, India, Philippines — captive GBS hubs of GCC enterprises

## 7. The One Painful Problem
Their RPA Centre of Excellence has automated the deterministic 60 % of every process, but the remaining 40 % — the exceptions, the unstructured documents, the judgement calls, the email triage — is exactly where the cost and the cycle time sit, and pure RPA bots fall over the moment a supplier changes invoice layout or a customer writes the request in Arabic.

## 8. The Stakes
- The ExCo unit-cost target is set against an annualised baseline; missing it means the GBS centre is reported as "not delivering its plan" at the next operating review.
- The RPA estate's licence cost is climbing while incremental volume automated is falling — the COO will be challenged at the board on RPA ROI within 2–3 quarters.
- Exception backlogs in claims / KYC / AP create regulator-visible cycle-time misses (CBUAE, SAMA, takaful-supervisor) and audit findings.
- The talent in the GBS centre is leaving. Bright finance / operations analysts will not stay in a centre whose only investment story is "more bots." The COO loses the operations bench.
- Competitor GBS centres (the peer banks' GBS, the peer telco's GBS) are publishing "AI-augmented operations" stories. Standing still is a strategic-positioning loss.

## 9. The Promise (H1 Direction)
An AI-augmented operations layer that runs alongside your UiPath / Blue Prism / Automation Anywhere estate — extracting documents, classifying inbound work, deciding exceptions, drafting responses — so first-pass yield clears 85 % and unit cost drops without replatforming your RPA stack.

## 10. The Unique Mechanism
- A deliberate **"RPA + AI co-existence" architecture**: Brocode does not replace the customer's RPA estate, it augments it. Each automation gets a documented split — **what the bot does (deterministic steps, screen scrapes, posting)** and **what the AI service does (document understanding, classification, decisioning, drafting)** — connected via the customer's orchestrator (**UiPath Orchestrator, Blue Prism Hub, Automation Anywhere Control Room, Microsoft Power Automate**) and a thin **REST + queue** boundary.
- An **AI service library** Brocode has hardened across 50+ back-office automations:
  - **Document understanding**: Brocode's Arabic-strong OCR pipeline (Surya + PaddleOCR-Arabic + AraBERT-v2) plus **LayoutLMv3** and **Donut** for unstructured invoices, claims forms, KYC packs.
  - **Email & ticket classification**: fine-tuned **AraBERT-v2** + **mDeBERTa-v3** with a Khaleeji adapter, plus rule overrides for VIP routing.
  - **Decisioning on exceptions**: **XGBoost / LightGBM** for tabular exception scoring with **SHAP** explanations for auditor sign-off; **OpenSearch** for case-similarity retrieval.
  - **Generative drafting**: customer-resident **Llama-3.1-70B / Mistral-Large-2** on Brocode's sovereign LLM appliance (or on the customer's existing one) with **Llama Guard 3 + NeMo Guardrails** and a redaction step for PII.
  - **Process mining & opportunity scanner**: **Celonis / UiPath Process Mining / Apromore** integration to ground every automation in measured cycle-time and rework data, not anecdote.
- A **"transaction-level economics" model**: every candidate automation is sized in **cost-per-transaction (before vs after)** and **first-pass-yield (before vs after)** before SoW signature. Not "save N FTEs". The COO can defend the number at the board.
- A **judgement-task control pattern**: every AI decision above a configurable threshold routes to a human reviewer; below threshold auto-completes with a SHAP-explained audit row. Aligned to **SOX, IFRS 17, CBUAE / SAMA model-risk, takaful supervisor expectations**.
- A **fixed-fee "Process Sprint"** delivery: 6 weeks per process, including discovery, build, UAT, hypercare. Three processes in parallel per pod. No open-ended T&M.

## 11. Top 3 Objections
- **O1:** "Our RPA Centre of Excellence will see this as a threat. How do you actually integrate with them, not replace them?"
- **O2:** "Pure RPA vendors (UiPath, Automation Anywhere) all say they have AI now. Why would I not just buy more UiPath Document Understanding licences?"
- **O3:** "Big-4 RPA / IPA practices have been selling this for years and our experience has been: junior teams, slow, expensive, and the bots break in production. How is Brocode different?"

## 12. Proof Strategy
- Anonymised UAE tier-1 bank reference: Accounts Payable automation — Arabic + English invoice extraction + 3-way match + UiPath posting to SAP — **cost per invoice down from AED 18 to AED 3.40, first-pass yield from 41 % to 88 %**, full SAMA / CBUAE control-trace.
- Anonymised regional takaful insurer reference: claims-triage automation — document extraction + decisioning + UiPath claims-system posting — **mean time-to-first-decision down from 4.2 days to 9 hours**, claims-handler productivity up 2.3x.
- Anonymised telco reference: B2B contract-onboarding automation — KYC extraction + risk decisioning + Power Automate flow — **onboarding cycle down from 11 days to 36 hours**.
- Anonymised GBS reference (multi-OpCo group): 17 processes automated in 14 months, **AED 14M annualised cost-out**, RPA Centre of Excellence retained and re-skilled (zero displacement).
- **Sample "cost-per-transaction" model** downloadable as part of the lead magnet.
- Partner / certification stack: **UiPath Partner (Advanced), Blue Prism Partner, Automation Anywhere Partner, Microsoft Power Platform Specialist, Celonis Partner, ISO 27001, SOC 2 Type II, NVIDIA Inception, AWS Advanced Tier**.
- A documented **"RPA CoE coexistence pledge"** — Brocode commits in writing to the customer's RPA CoE remaining the orchestration owner.

## 13. The Lead Magnet
**"The Intelligent Automation Economics Pack: 8 Real Back-Office Processes with Cost-per-Transaction Models (Invoicing, Claims, KYC, Procurement, Payroll Exceptions, Reconciliation, Customer Email Triage, Regulatory Reporting)"** — a 44-page PDF + the cost-per-transaction Excel model (editable) + a sample SHAP-explained decision audit row. Headline figure: across 50+ delivered automations, **median cost-per-transaction reduction of 71 %** and **median first-pass-yield uplift from 47 % to 86 %** within 6 months of go-live.

## 14. Primary CTA Wording
**"Book a 60-minute back-office economics review with our operations lead"** — secondary mid-page CTA: **"Download the intelligent automation economics pack"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I am COO / Head of Shared Services at [organisation]. Our RPA estate has plateaued and I want to talk about AI-augmented back-office automation (invoicing, claims, KYC, exceptions). Could we book an hour with your operations lead to walk through our top three processes?

## 16. Quote Form Fields
1. **Top 3 processes you would automate first** (multi-select: AP invoicing / claims adjudication / KYC & onboarding / order-to-cash exceptions / payroll exceptions / procurement / regulatory reporting / customer email triage / reconciliations / other — free text)
2. **Existing RPA estate** (single select: UiPath / Blue Prism / Automation Anywhere / Microsoft Power Automate / mixed / none yet)
3. **Annual transaction volume across the top 3 processes** (single select: <100K / 100K–1M / 1M–10M / >10M)
4. **Document mix** (multi-select: printed Arabic / handwritten Arabic / mixed Arabic-English / structured PDFs / Excel files / emails / EDI / scanned forms)
5. **Existing process-mining tool in use** (single select: Celonis / UiPath Process Mining / Apromore / Power BI process insights / none)
6. **Regulator(s) in scope** (multi-select: CBUAE / SAMA / DFSA / FSRA / ADGM FSRA / takaful supervisor / SOX / IFRS 17 / VAT / ICV / none)
7. **Current RPA Centre of Excellence size** (single select: 0 / 1–5 / 6–20 / 21–50 / >50 FTE)

## 17. Hero Media Direction
A single-frame "before-and-after" of a real back-office desktop, rendered cleanly. **Left half — "Before":** a stack of paper invoices in Arabic and English on a worn desk, a clerk's hand keying numbers into a SAP screen visible on a monitor edge, a small ticker reading **"AED 18 / invoice"** and **"41 % first-pass yield"**. **Right half — "After":** the same desk, much cleaner; a single tablet shows a streamlined exception queue with one item highlighted, a small SHAP explanation card next to it; the ticker now reads **"AED 3.40 / invoice"** and **"88 % first-pass yield"**. A thin horizontal arrow runs between the two halves labelled **"6-week process sprint"**. Warm, human, calm — not robotic. Absolutely no humanoid robot, no "AI brain", no clerk-being-replaced visual. The clerk is still in the picture on the right side, just doing higher-value work.

## 18. Section-by-Section Outline
1. **Hero** — the before-and-after desktop with the cost-per-invoice and first-pass-yield tickers and the "6-week process sprint" arrow.
2. **Why RPA estates plateau at the 60 % mark** — three-card explainer (unstructured documents, judgement exceptions, Arabic-language inbound) with one real example per card.
3. **The RPA + AI co-existence architecture** — single-page reference diagram showing the bot lane, the AI service lane, the orchestrator boundary, and the audit-lineage capture.
4. **The eight back-office processes we have hardened** — tabs for AP invoicing, claims, KYC, procurement, payroll exceptions, reconciliation, email triage, regulatory reporting — each tab with a cost-per-transaction before/after and the AI services used.
5. **Transaction-level economics model** — interactive cost-per-transaction calculator (volume, document mix, exception rate, Arabic share) with a "request your tailored model" hand-off.
6. **The 6-week process sprint** — week-by-week delivery cadence with the named pod, hypercare, and go-live criteria.
7. **The RPA CoE coexistence pledge** — Brocode's written commitment that the customer's CoE remains the orchestration owner, with a sample joint operating model.
8. **Case studies** — bank AP, takaful claims, telco B2B onboarding, GBS multi-process — each with the cost-per-transaction and first-pass-yield deltas.
9. **Controls, audit, and regulator mapping** — SHAP-explained decision rows, human-in-the-loop thresholds, IFRS / SOX / CBUAE / SAMA / takaful mapping.
10. **FAQ** (FAQ schema) — UiPath vs Brocode, displacement of FTEs, audit defensibility, model-update cadence, Arabic-document coverage, hypercare SLAs.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/document-intelligence` — the document-understanding layer in every IPA automation; the deeper read for buyers whose primary pain is invoice / KYC / claims extraction. Linked from section 4 (AP and claims tabs) and section 2.
2. `/services/ai-integration-services` — the integration plane (UiPath ↔ SAP ↔ AI service ↔ audit) is the architectural backbone; linked from the architecture diagram in section 3.
3. `/services/conversational-ai-chatbots` — for customers extending IPA into customer-facing email / chat triage; linked from section 4 (email-triage tab).
4. `/services/ai-consulting-strategy` — for COOs who realise the conversation is bigger than one process and need a portfolio view; linked from section 5 and section 8.
5. `/industries/banking-financial-services` — the dominant industry for this page; linked from the case-study band.

## 20. Differentiation Angle vs Competitors
- **vs UiPath Document Understanding + UiPath AI Center** — credible on structured-document extraction inside a UiPath-pure estate; weak on Arabic accuracy, weak on generative drafting, vendor-locked to UiPath's release cadence and pricing. Brocode plugs into UiPath Orchestrator as a stronger AI tier and unlocks Arabic and generative use-cases that UiPath's native AI cannot deliver at the same accuracy.
- **vs Automation Anywhere IQ Bot / Document Automation** — same pattern as UiPath; AA's Arabic posture is weaker than UiPath's and the generative integration is immature. Brocode is the AI augmentation layer, not a competitor.
- **vs Blue Prism Decipher / SS&C Blue Prism** — Blue Prism's strength is governance and enterprise scaling; the AI tier is the gap. Brocode complements Blue Prism's orchestration with the AI services it lacks.
- **vs Microsoft Power Automate + AI Builder / Copilot Studio** — improving fast inside the Microsoft estate; weak on Arabic, weak on sovereign deployment, locked to Azure. Brocode integrates with Power Automate where the customer is Microsoft-first, and ships the Arabic / sovereign components Microsoft cannot.
- **vs Big-4 RPA / IPA practices (Accenture, Deloitte, EY, KPMG)** — large benches, volume-billed, junior-heavy on the build side, slow on the AI side (most Big-4 AI is subcontracted). Brocode delivers fixed-fee 6-week process sprints with named senior people and a transaction-economics commitment in the SoW.
- **vs offshore IPA pure-plays** — competitive on price, weak on Arabic, weak on senior architecture, weak on regulator-mapped control design. Brocode brings on-site senior pods and a control-trace posture that survives a CBUAE / SAMA / SOX review.
- **vs in-house RPA Centre of Excellence going it alone** — the CoE has the orchestration depth but not the AI-engineering bench. Brocode coexists rather than competes: most engagements result in the CoE being **larger** and **more senior** at the end of the engagement, not smaller.

---

## Production notes
- The cost-per-transaction numbers (AED 18 → AED 3.40, 41 % → 88 %) are anchored to a specific bank-AP case; the lead magnet must include a clear methodology section explaining the assumptions.
- The "no FTE displacement" stance is a Brocode commercial posture for most GBS engagements; the FAQ must be honest that some engagements do result in role redesign, with explicit re-skilling commitments.
- Vendor logos (UiPath, Blue Prism, Automation Anywhere, Microsoft, Celonis) require partner-programme compliance before visible use.
- The hero "before" image must not depict any identifiable employee.
- The interactive cost-per-transaction calculator needs an obvious disclaimer that final pricing depends on volume and document mix.
