# Conversion Brief — Quality Assurance for AI

---

## 1. Page Slug & URL
`/technology/quality-assurance`

## 2. Primary Audience Persona
Head of Risk, Chief Compliance Officer, Chief Audit Executive, or Head of Model Risk Management at a UAE / GCC tier-1 bank, insurer, federal regulator-adjacent entity, or large healthcare group, 1,500–25,000 employees. Sits in the second or third line of defence, reports into the Audit & Risk Committee of the board, and has signing authority on model-risk attestations. Has been told by the board to "approve AI use cases without becoming a bottleneck" — but has personally seen one AI model in production drift into bias, one LLM hallucinate into a customer-facing channel, and one vendor refuse to share its eval harness when audit asked.

## 3. Visitor Intent at Arrival
The visitor just searched for an AI vendor's approach to model evaluation, bias testing, red-teaming, and audit evidence — they need to see the test suite, not the model. Stage: **late evaluation, often gate-keeping**. They will not approve vendor onboarding until the QA story is documented, evidenced, and aligned to CBUAE Model Risk guidance, FSRA Principles for Adoption of AI, or NCA's AI ethics framework, depending on jurisdiction. They will look for an actual eval-harness screenshot and the names of the bias-and-fairness packs we run.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[ai model evaluation harness uae]`
- **Ad group:** `QA for AI – Risk & Audit – Enterprise`

## 5. Secondary Keyword Cluster
1. llm red teaming uae bank
2. ai bias and fairness testing gcc
3. model risk management cbuae
4. mlops drift monitoring uae
5. adversarial robustness testing ai
6. fsra ai principles vendor evidence
7. ai audit evidence pack middle east
8. regression suite for machine learning

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (CBUAE-supervised banks, FAB, ADCB, federal risk functions), Dubai (Emirates NBD, Mashreq, DIFC FSRA-regulated firms)
- **Secondary:** KSA (SAMA-regulated banks, Saudi Re, Bupa Arabia), Qatar (QCB-regulated banks, QIB risk function), Bahrain (CBB-regulated banks)
- **Tertiary:** Oman (CBO), Kuwait (CBK) — risk functions that mirror UAE practice

## 7. The One Painful Problem
The visitor has just had an internal-audit finding that the bank's first production LLM has no documented evaluation harness, no bias-and-fairness baseline, and no drift monitoring — and the regulator has now asked the same question for the next vendor submission, due in 30 days.

## 8. The Stakes
- An adverse audit finding on AI governance escalates to the Board Audit Committee within one cycle — the visitor's annual review depends on closing the gap before the next committee.
- A regulator follow-up on AI model risk that the visitor cannot answer in writing risks a Matter Requiring Attention or, in the worst case, a remediation plan filed with the regulator.
- A biased model in customer-facing flow is a reputational incident, a regulatory incident, and a press incident on the same day.
- An unvendored eval-harness means every new model launch becomes an internal-audit dispute.

## 9. The Promise (H1 Direction)
The full test suite that sits behind every Brocode model in production — model-evaluation harness, regression pack, bias-and-fairness battery, drift detectors, LLM red-teaming and adversarial-robustness tests — packaged as an audit-evidence bundle the second and third lines of defence can attach directly to the regulator submission.

## 10. The Unique Mechanism
- **Model-evaluation harness:** an in-house extension of `lm-evaluation-harness` for classical ML and a custom LLM eval framework on top of OpenAI Evals + DeepEval + Promptfoo, wired to MLflow so every evaluation run is versioned and re-runnable.
- **Regression suite:** golden-dataset regression for every model release; CI-blocking thresholds on accuracy, precision, recall, F1, calibration, and (for LLMs) faithfulness and answer-relevance via RAGAS.
- **Bias and fairness pack:** demographic-parity, equalised-odds, equal-opportunity, predictive-parity tests using Fairlearn + AIF360, with a UAE-context demographic schema (nationality bands, language preference, residency status) — never US Census categories.
- **Drift detectors:** Evidently AI + a custom Brocode population-stability-index pack, with alerting wired to the client's ticketing system; covariate drift, concept drift, and prediction drift monitored independently.
- **LLM red-teaming:** weekly automated red-team using `garak` + a Brocode-curated UAE adversarial prompt pack (Arabic jailbreaks, dialect-coded harm prompts, regulator-sensitive topic probes), with manual red-team passes by a named in-house team before every production release.
- **Adversarial robustness for classical ML:** Adversarial Robustness Toolbox (ART) evasion and poisoning tests on tabular and vision models.
- **Guardrails plane in production:** NVIDIA NeMo Guardrails + Llama Guard 3 + an Arabic policy classifier, with prompt and response logging to a tamper-evident WORM store for the audit trail.
- **The "Audit-Evidence Bundle"**: a per-release artefact pack handed to the client risk function — evaluation report, bias and fairness report, red-team report, drift baseline, regression diff, and a CBUAE / FSRA / NCA control mapping.

## 11. Top 3 Objections
- **O1:** "Show me your eval harness, not a slide about it. We need to see what tests you ran, on what data, with what thresholds, and what failed."
- **O2:** "Bias testing on US Census categories does not work for our customer base. Do you actually test fairness with a UAE-context demographic schema?"
- **O3:** "Will your evidence bundle survive a CBUAE / FSRA / NCA review? Show me the control mapping, not a generic 'we comply.'"

## 12. Proof Strategy
- A redacted sample Audit-Evidence Bundle as a downloadable PDF — full evaluation report, bias report, red-team report, drift baseline, regression diff, control mapping.
- A live page section showing a sanitised eval-harness output (HTML report) with thresholds and pass/fail.
- An anonymised UAE tier-1 bank case study: model-risk function reduced AI use-case approval cycle from 9 weeks to 11 days after adopting our evidence bundle.
- Control-mapping snippets to CBUAE Model Risk guidance, FSRA Principles for Adoption of AI, NCA's AI ethics framework.
- ISO 27001, SOC 2 Type II, ISO 42001 (AI management system) certifications.
- A pull-quote from an anonymised second-line risk head: "First vendor that gave us audit evidence before audit asked."

## 13. The Lead Magnet
**"The Brocode 2026 AI Audit-Evidence Bundle: Sample Reports and Control Mappings for CBUAE, FSRA and NCA"** — 64-page PDF combining one redacted full evidence bundle, a control-mapping appendix (CBUAE Model Risk, FSRA AI Principles, NCA AI Ethics), and a fill-in template the client risk team can adopt. Headline figure: **average AI use-case approval cycle reduced from 9 weeks to 11 days** for three UAE tier-1 banks using the bundle.

## 14. Primary CTA Wording
**"Book a 60-minute audit-evidence review with our Head of AI Risk & QA"** — secondary CTA: **"Download the 2026 AI Audit-Evidence Bundle"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — our risk function at [organisation] needs to see your AI evaluation, bias, red-teaming and drift evidence ahead of a [CBUAE / FSRA / NCA / internal-audit] submission. I'd like to book the 60-minute audit-evidence review and receive the sample bundle.

## 16. Quote Form Fields
1. **Your line of defence** (single select: First / Second / Third / Independent reviewer)
2. **Regulator overlay** (multi-select: CBUAE / FSRA-ADGM / DFSA-DIFC / SAMA / NCA / DHA / SEHA / internal-audit only)
3. **Model type in scope** (multi-select: classical ML / deep learning / LLM in RAG / LLM agent / computer vision / forecasting)
4. **What you most need evidence for** (multi-select: model evaluation / bias and fairness / red-teaming / drift monitoring / adversarial robustness / lineage and reproducibility)
5. **Audit submission deadline** (date picker)
6. **Existing tooling in place** (free text — MLflow / SageMaker Model Monitor / Azure ML / homegrown / none)

## 17. Hero Media Direction
A clinical, dark-mode dashboard hero. Centre-screen: an evaluation-harness UI mock-up showing seven test categories (accuracy, calibration, robustness, fairness, faithfulness, drift, red-team), each with a pass/warn/fail chip; one of the chips animates from "warn" to "pass" on viewport entry, with a tooltip showing the threshold that flipped. Right side: a thin vertical strip listing the audit-evidence artefacts that get generated automatically (Evaluation Report, Bias Report, Red-Team Report, Drift Baseline, Regression Diff, Control Mapping), each ticking on as the dashboard loads. Palette: deep slate background, single signal-cyan accent, sand-gold for the pass chips. No "shield with AI inside it" cliché.

## 18. Section-by-Section Outline
1. **Hero** — the evaluation-harness dashboard with the artefact strip.
2. **Why generic QA shops fail at AI** — a 140-word framing piece on why functional testing without an eval harness is not AI QA.
3. **The seven test categories we run on every model** — seven cards (accuracy, calibration, robustness, fairness, faithfulness, drift, red-team) with tools named, thresholds, and a sample output snippet.
4. **Bias and fairness with a UAE-context demographic schema** — what the schema is, why US Census categories are wrong, the Fairlearn / AIF360 stack.
5. **LLM red-teaming with the UAE adversarial pack** — sample prompt categories, automated cadence, manual cadence.
6. **Drift detection in production** — Evidently AI + Brocode PSI pack, alert routing.
7. **The Audit-Evidence Bundle** — what the bundle contains, who signs it on the Brocode side, how it maps to CBUAE / FSRA / NCA.
8. **Case study** — UAE tier-1 bank: 9 weeks to 11 days approval cycle.
9. **Lead-magnet block** — full-width download for the 2026 Audit-Evidence Bundle.
10. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/technology/methodology` — the Harden phase produces the Audit-Evidence Bundle. Link from section 7.
2. `/technology/stack` — the QA stack is part of the published stack. Link from section 3.
3. `/services/mlops-ai-infrastructure` — drift monitoring sits in MLOps. Link from section 6.
4. `/services/responsible-ai-governance` — the control-mapping work routes here. Link from section 7.
5. `/industries/banking-financial-services` — the dominant industry for QA-driven procurement. Link in the related band.

## 20. Differentiation Angle vs Competitors
- **vs traditional QA shops (Cigniti, Qualitest regional offices)** — strong on functional testing, no model-evaluation harness, no bias-and-fairness battery, no LLM red-teaming pack.
- **vs Big-4 risk assurance (KPMG / PwC AI assurance)** — slow, expensive, deliverable-led; their evidence packs cost more and ship later, and rarely include an actual eval-harness run, just a methodology overview.
- **vs internal QA teams** — typically no AI evaluation skills in-house; staffing the seven test categories needs 4–6 specialist hires the visitor cannot fund.
- **vs the model vendor's own "evals"** — model vendors test their own models on their own benchmarks; we test the model **in your product**, on **your data**, with **your demographic schema** and **your regulator's controls**.

---

## Production notes
- The redacted Audit-Evidence Bundle must be re-redacted by Legal whenever the underlying engagement source data changes — never reuse a stale redaction.
- Control mappings to CBUAE, FSRA and NCA must be re-validated whenever those regulators publish updated guidance.
- The "9 weeks to 11 days" figure is engagement-specific; reconcile quarterly with Risk & Compliance lead.
- The UAE adversarial prompt pack contains harmful content by design; the page must never preview specific prompts publicly — only categories.
