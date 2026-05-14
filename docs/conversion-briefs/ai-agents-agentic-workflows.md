# Conversion Brief — AI Agents & Agentic Workflows (Operations Automation)

---

## 1. Page Slug & URL
`/services/ai-agents-agentic-workflows`

## 2. Primary Audience Persona
Chief Operating Officer or Head of Operations / Shared Services at a UAE/KSA mid-to-large enterprise — an insurer (Sukoon, Salama, Tawuniya, Bupa Arabia), a bank's operations division, a holding-company shared-services centre (Al-Futtaim, MAF, Al Rajhi Holding, Olayan), a healthcare group (NMC-Aster, M42, Mouwasat), or a logistics group (DP World, Aramex, Almajdouie). 800–8,000 employees, with a back-office of 200–1,500 processors. Reports to a Group CEO who has tabled "operational efficiency through AI" as the FY's top initiative. The persona owns process maps for claims, KYC, procurement P2P, expense, customer onboarding, supplier onboarding, and credit decisioning — and they are accountable for a documented productivity gain of 20–30 % over 18 months.

## 3. Visitor Intent at Arrival
The visitor just searched for an AI-agents partner who can replace or augment a UiPath / Automation Anywhere RPA estate with judgement-capable workflows that actually finish a case — claims triage, supplier KYC, expense audit, procurement-PO matching — without a human in the middle for every variant. They are mid-**evaluation** stage. They likely already have an RPA centre of excellence, a backlog of "RPA exceptions" that humans still touch, and a board paper asking why AutoGPT and OpenAI Operator demos haven't translated into a single production case in their group.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[ai agents enterprise operations uae]`
- **Ad group:** `Agentic Workflows – Operations – UAE/KSA`

## 5. Secondary Keyword Cluster
1. agentic ai workflow gcc
2. ai agents claims processing insurance uae
3. kyc automation agent banking ksa
4. procurement automation ai middle east
5. uipath alternative ai agents
6. langgraph crewai enterprise gcc
7. ai expense audit automation
8. agentic ai shared services

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (insurance HQs in DIFC, holding-company shared services in Business Bay, healthcare group HQs), Abu Dhabi (insurance, banking ops, Mubadala-portfolio shared services).
- **Secondary:** KSA (Riyadh — Tawuniya, Bupa Arabia, Saudi healthcare groups, retail conglomerates; Jeddah — logistics, family conglomerates), Qatar (QIC, Qatar Insurance), Bahrain (insurance back-offices), Kuwait (Gulf Insurance Group).
- **Tertiary:** Egypt (sovereign-owned insurers, multinational shared-services hubs), Pakistan (regional shared-services hubs).

## 7. The One Painful Problem
Their RPA estate covers the deterministic parts of a claim, an invoice or a KYC pack — but **64 %** of cases drop out as "exceptions" and end up on a human's queue, because the bot can't read a free-text claim narrative, compare two slightly-different supplier records, or decide whether a receipt actually matches an expense policy.

## 8. The Stakes
- The shared-services FTE budget has been frozen by the CFO; growth means doing more with the same headcount, and the current exception rate makes that impossible.
- Average claim handling time has slipped from 4.2 days to 5.7 days over four quarters, threatening regulator SLAs and pushing complaints to the Insurance Authority / CBUAE.
- The Group CEO is presenting an "AI productivity" number to the board in two quarters; the persona is the person who has to put a real figure next to that line.
- Senior process owners are starting to bypass the operations function and procure their own niche AI tools, fragmenting the operating model.

## 9. The Promise (H1 Direction)
Production-grade AI agents that close the RPA exception gap — for claims, KYC, procurement, expense and credit — running inside your security perimeter, with three live workflows and a verified productivity number in 90 days.

## 10. The Unique Mechanism
- **Orchestration:** LangGraph for stateful, branching agent graphs; CrewAI for multi-role agent teams where appropriate; Temporal for durable workflow execution; AutoGen for pair-agent patterns. The right tool per workflow, not a one-platform-fits-all.
- **Model selection:** Claude Sonnet 4.5 for long-context reasoning and tool use; GPT-5 reasoning for complex case adjudication; Llama 3.3 70B fine-tunes on customer policies for sovereign workloads; Mistral-Large-2 as a cost-tier fallback. A Brocode "model router" picks per step.
- **Tool layer:** First-class connectors for SAP S/4HANA, Oracle Fusion, Workday, ServiceNow, Salesforce, Coupa, Ariba, Guidewire, Duck Creek, Pega, OpenText, SharePoint, Outlook, Teams, and SAMA / CBUAE regulatory submission portals. UAE PASS and Nafath identity rails for KYC.
- **Memory and retrieval:** Qdrant + Mem0 long-term memory; case-history retrieval scoped to the customer's tenant.
- **Safety and oversight:** A "Supervisor Agent" pattern — every agent action is checked against a policy graph before commit, with mandatory human-in-the-loop gates for monetary, regulatory or customer-impact thresholds. Full Langfuse + Arize Phoenix traces with PII redaction.
- **Eval and shadow run:** A 4-week shadow-run phase where the agent runs alongside human processors on real cases without committing, and a side-by-side disagreement report is produced daily.
- **The "Exception-Closure Audit":** A free, on-site discovery sprint that takes the customer's last 90 days of RPA exceptions, clusters them by closure pattern, and produces a quantified estimate of which exceptions an agent can close — before any contract is signed.

## 11. Top 3 Objections
- **O1:** "RPA already failed to handle our exceptions reliably. Why will an LLM-based agent be different — won't it just hallucinate a decision?"
- **O2:** "Our regulator (CBUAE / Insurance Authority / SAMA / SCA) will not accept a black-box decision on a claim. How do we explain a denial to a customer or a regulator?"
- **O3:** "We already have UiPath / Automation Anywhere licences and a CoE. We're not throwing that away — how do you co-exist?"

## 12. Proof Strategy
- An "Exception-Closure Audit" lead magnet (see field 13) demonstrating the methodology on anonymised data.
- Anonymised UAE insurer reference: motor-claims triage agent on Guidewire ClaimCenter, **47 %** of FNOL cases auto-closed within SLA, AHT down from 5.3 days to 2.1 days, complaint rate -22 %.
- Anonymised tier-1 bank reference: supplier-onboarding KYC agent with UAE PASS + Nafath + worldwide sanctions screening; onboarding time 14 days → 3 days; clean audit trail accepted by internal compliance.
- Anonymised retail conglomerate reference: P2P invoice-matching agent on SAP S/4HANA + Coupa; **88 %** three-way match auto-closure, AED 6.4 M annualised manual-effort saving.
- Side-by-side comparison: same 1,000 exception cases — UiPath, AutoGPT-style agent, Brocode LangGraph stack — with closure-rate and false-decision-rate columns (lead magnet).
- Partner badges: UiPath Services Partner (we extend, we don't replace), Anthropic-eligible deployment partner, NVIDIA Inception Premier, Microsoft Solutions Partner (AI), ISO 27001, SOC 2 Type II.

## 13. The Lead Magnet
**"The RPA Exception-Closure Audit Playbook — How to Quantify Which 64 % of Your Bot Exceptions an AI Agent Can Actually Close"** — 34-page PDF + a downloadable Exception-Closure Scoring Sheet (Excel) for an operations team to apply to its own backlog. Headline figure: across 11 regional engagements, **agentic workflows close 53 % of RPA exceptions** that humans were previously processing, with a 4 % false-decision rate that drops below 1 % after the first eight-week feedback cycle.

## 14. Primary CTA Wording
**"Book an on-site Exception-Closure Audit"** — secondary CTA: **"Download the Exception-Closure Scoring Sheet"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I run operations at [organisation]. We have a backlog of RPA exceptions that humans still process and want to scope an AI-agent pilot. Could we schedule an on-site discovery session?

## 16. Quote Form Fields
1. **Process(es) in scope** (multi-select: claims FNOL / claims adjudication / KYC onboarding / supplier KYC / procurement P2P / expense audit / credit decisioning / customer complaints / loan origination / other)
2. **Current automation estate** (multi-select: UiPath / Automation Anywhere / Blue Prism / Pega / homegrown scripts / no RPA yet)
3. **Core system(s) of record** (multi-select: SAP S/4HANA / Oracle Fusion / Workday / Salesforce / Guidewire / Duck Creek / Pega / Temenos / Finacle / FLEXCUBE / Coupa / Ariba / other)
4. **Daily case volume on the target process** (single select: <100 / 100–1,000 / 1,000–10,000 / >10,000)
5. **Regulatory regime** (multi-select: CBUAE / Insurance Authority / SAMA / DFSA / ADGM FSRA / SCA / DHA / DoH / not regulated)
6. **Decision authority threshold required** (free text — e.g., "agent may auto-close claims up to AED 25,000")

## 17. Hero Media Direction
A clean operations-floor wide shot, depth-of-field shallow, slightly low-angle. In the foreground, a screen on a processor's desk shows a Guidewire ClaimCenter case being worked on. A faint, ghosted overlay layer drifts in from the right side of the screen — a LangGraph trace renders node-by-node: `parse_FNOL → fraud_check → policy_lookup → coverage_decide → reserve_set → notify_customer`. Each node lights up green as it completes. The case status flips from "Pending — human review" to "Closed — agent". In the background, a wall display reads `Today: 412 cases auto-closed · AHT 1.9d · false-decision 0.7%`. Colour grade: muted office daylight, Brocode navy accent on the agent trace, no neon. The shot reads "calm, mature operations", not "robot taking over".

## 18. Section-by-Section Outline
1. **Hero** — operations floor with a live agent trace closing a claim case.
2. **Why 64 % of cases still hit a human** — the RPA exception problem in concrete terms with three real exception patterns.
3. **What an "agent" actually is here** — the LangGraph + Supervisor-Agent + Tool-layer architecture diagram, with the model-router callout.
4. **Use-case catalogue** — claims, KYC, procurement, expense, credit, complaints — each as a one-paragraph workflow.
5. **The 4-week shadow run** — how trust is established before agents take action.
6. **Regulator-ready explainability** — what an auditor sees: every step, every tool call, every policy check, exported in PDF and JSON.
7. **Co-existence with UiPath / AA / Blue Prism** — explicit pattern for orchestrating agents alongside existing RPA, not replacing it day one.
8. **Case studies** — insurer, bank, conglomerate — each with one quantified outcome.
9. **Exception-Closure Audit offer** — full-width CTA with form.
10. **FAQ** (FAQ schema) — hallucination, audit trail, model deprecation, ROI methodology, change management.
11. **Related capabilities** — five internal links (see field 19).

## 19. Internal Linking Strategy
1. `/services/generative-ai-development` — for the broader GenAI programme that wraps the agent estate. Linked from the architecture section.
2. `/services/document-intelligence` — the document-reading capability that feeds claims/KYC agents. Linked from the use-case section.
3. `/services/mlops-ai-infrastructure` — for the eval, drift and observability stack. Linked from the shadow-run section.
4. `/services/responsible-ai-governance` — for the regulator-ready narrative. Linked from the explainability section.
5. `/industries/banking-financial-services` — the dominant industry for this brief (insurer back-offices and bank operations). Linked from case studies.

## 20. Differentiation Angle vs Competitors
- **vs UiPath / Automation Anywhere / Blue Prism** — emphasise that RPA is rule-driven and exception-prone, that agents handle the judgement layer those bots can't, and that Brocode is a UiPath Services Partner — we don't ask the customer to throw away their RPA estate; we close its exceptions.
- **vs OpenAI Operator, AutoGPT-style frameworks, and "AI agent" startups with no enterprise reference** — emphasise the Supervisor-Agent pattern, the regulator-ready audit trail, the explicit human-in-the-loop gates, and named regional production references.
- **vs custom in-house agentic code (a hand-rolled LangChain script)** — emphasise the orchestration discipline (LangGraph + Temporal for durability, not a Python loop), the eval + shadow-run methodology, and the policy-graph supervisor that an in-house team would otherwise have to build from scratch.
- **vs Big-3 consultancies offering "agentic AI strategy"** — emphasise that this brief is a build engagement with fixed-fee delivery, not a 26-week assessment.

---

## Production notes
- All performance numbers (47 %, 88 %, 53 % closure, 4 % → 1 % false-decision) require lead-engineer sign-off before publish.
- The Exception-Closure Scoring Sheet must be sanitised — no client-identifiable categories.
- The "regulator-ready audit trail" claim must be reviewed by a compliance SME against current CBUAE / SAMA / Insurance Authority guidance before publish.
