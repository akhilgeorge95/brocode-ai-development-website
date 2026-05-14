# Conversion Brief — Self-Hosted LLM Infrastructure (Sovereign GenAI)

---

## 1. Page Slug & URL
`/services/self-hosted-llm-infrastructure`

## 2. Primary Audience Persona
CISO, Head of Platform Security, or Head of Cyber Governance at a UAE or KSA regulated entity — a federal entity (Ministry of Interior, Ministry of Defence, GHQ, Presidential Court, NESA-supervised), a tier-1 bank under CBUAE / SAMA supervision, a sovereign-wealth or holding entity (Mubadala, ADQ, PIF portfolio), or a defence-adjacent prime (EDGE Group, SAMI, tawazun ecosystem). 2,000–25,000 employees. The mandate, often signed at board level after a "GenAI policy" exercise, is unambiguous: GenAI is allowed, **but no prompt, no context, no document, no embedding may leave the country, and no foreign vendor may hold the keys**. They are the budget owner and the final security signatory.

## 3. Visitor Intent at Arrival
The visitor has just searched for an on-premise or sovereign-resident LLM deployment partner. They have already had the Azure OpenAI UAE North conversation and concluded that Microsoft-managed keys, shared tenancy, and the residual telemetry plane are not acceptable for their workload class. They have looked at G42's Jais and Presight's offerings and have a policy / relationship concern (or simply want a vendor-neutral build). They are in **decision** stage — typically writing a security-led RFP or a sole-source justification — and they want to see a concrete reference architecture, the exact hardware bill of materials, the key-management diagram, and a credible deployment timeline. They are not interested in "we can also help with strategy."

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[on premise llm deployment uae]`
- **Ad group:** `Sovereign GenAI – On-Prem LLM Appliance – Regulated`

## 5. Secondary Keyword Cluster
1. private llm deployment gcc
2. sovereign generative ai uae federal
3. on prem llama 3 deployment bank
4. customer owned llm appliance
5. tdra compliant llm infrastructure
6. vllm h100 enterprise deployment
7. air gapped genai government
8. llm key management hsm

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (federal entities, defence primes, ADGM tier-1 banks, sovereign holdings), Dubai (DIFC tier-1 banks, government-of-Dubai entities)
- **Secondary:** KSA (Aramco, SAMI, banks under SAMA), Qatar (Ministry of Interior, QNB, Qatar Investment Authority portfolio), Oman, Kuwait, Bahrain
- **Tertiary:** Egypt (sovereign + banking), Pakistan (federal + defence-adjacent), Indonesia, Malaysia — markets with similar sovereignty postures

## 7. The One Painful Problem
The business wants GenAI **now** — copilots, document summarisation, RAG over internal corpora — but the security and legal teams have categorically blocked every SaaS option because the data classification (citizen records, signals, customer KYC, intelligence-adjacent) cannot leave national borders, and the entity will not accept a deployment where the cloud provider holds the keys.

## 8. The Stakes
- A high-profile data-exfiltration incident through an "innocent" SaaS LLM call (the kind of incident that has already happened at peer entities) is a regulator-visible event and a board resignation event.
- The business sponsors will, under pressure, deploy shadow GenAI through personal accounts if a sanctioned path is not delivered — which is exactly the loss-of-control scenario the CISO is trying to prevent.
- Vision 2031 / Vision 2030 alignment commitments at the board level depend on demonstrable, sovereign-resident AI capability. Missing the milestone has political cost beyond the entity itself.
- Foreign-vendor key custody is, for several of these entities, a national-security objection — not a procurement preference. Getting it wrong means the deployment cannot proceed at all.

## 9. The Promise (H1 Direction)
A customer-owned, in-country, air-gap-capable LLM appliance — your hardware, your keys, your model weights — running production-grade open-weight models with sub-second latency, deployed and certified in your data centre in under 90 days.

## 10. The Unique Mechanism
- A purpose-built **sovereign LLM appliance** delivered as physical hardware that the customer owns outright: **8x NVIDIA H100 SXM5** or **8x H200** per node, NVLink-connected, behind a customer-owned **Thales Luna / Entrust nShield HSM** for key custody and a **customer-managed KMS** (no Brocode key shadow, no vendor escrow).
- Inference stack: **vLLM** with continuous batching, **NVIDIA Triton Inference Server** for multi-model routing, **TensorRT-LLM** for the FP8 / INT8 optimised path on H100/H200, and a **prefill-decode disaggregation** layout for long-context RAG.
- Default base models, all open-weight and fully customer-resident: **Llama-3.1-70B-Instruct** and **Llama-3.1-405B-Instruct** (Meta licence terms reviewed and signed by the customer entity), **Mistral-Large-2** / **Mixtral-8x22B-Instruct**, **Qwen2.5-72B-Instruct**, **DeepSeek-V3** (customer choice), and **Jais-30B-Chat-v3** as the default Arabic-strong option for entities that want Arabic-tuned dialogue.
- A **fine-tuning lane** using **LoRA / QLoRA** on customer corpora that never leaves the appliance, plus a **safety / guardrails** layer built on **Llama Guard 3** and **NVIDIA NeMo Guardrails**.
- Networking & isolation: deployable in **fully air-gapped**, **DMZ-gated**, or **TDRA-cloud-bursted** configurations; full SBOM; full **STIG / CIS hardening**; firmware attestation; **Confidential Computing** path on H100 (CC-on) for the highest-classification tenants.
- RAG layer: **Milvus** or **Qdrant** vector store, **Unstructured.io + Brocode's Arabic OCR pipeline** for ingest, **BGE-M3 / GTE-Qwen2** multilingual embeddings — all in-appliance.
- A **90-day delivery method**: weeks 1–3 site survey + HSM / KMS / network design, 4–8 hardware delivery + rack + STIG hardening, 9–11 model deployment + RAG corpus ingest + safety eval, 12–13 PenTest + customer acceptance, week 14 go-live.
- A **classified-environment delivery team**: cleared personnel for federal / defence engagements where required.

## 11. Top 3 Objections
- **O1:** "Data sovereignty in writing — the prompts, the embeddings, the model weights, the logs, all must remain in country and under our control. Prove the residency posture and the key custody."
- **O2:** "Open-weight models are great until I have to maintain them — who patches Llama next quarter, who curates the safety evals against my use case, who proves it has not regressed on Arabic?"
- **O3:** "Capex justification — a multi-million-dirham appliance versus an Azure OpenAI consumption line. How do I defend this to the CFO when the consumption model looks cheaper on day one?"

## 12. Proof Strategy
- Anonymised UAE federal entity reference: 32x H100 sovereign appliance, fully air-gapped, Llama-3.1-70B + Jais-30B in production, 1,400 internal users, zero data egress, full TDRA review passed.
- Anonymised tier-1 GCC bank reference: 16x H100 appliance behind Thales Luna HSM, RAG over 4.2 million internal documents (Arabic + English), customer-owned KMS, used for internal copilot + KYC summarisation under CBUAE / SAMA review.
- Anonymised defence-adjacent prime: 8x H100 air-gapped node, Mistral-Large-2 fine-tuned on internal technical corpus, full STIG hardening, third-party PenTest pass.
- **TCO comparison white-paper**: 36-month TCO of a sovereign appliance vs Azure OpenAI UAE North vs OpenAI Enterprise, modelled across three traffic classes (50M / 500M / 5B tokens / month). Headline: appliance TCO becomes lower than Azure OpenAI between month 14 and month 22 depending on traffic class.
- Partner / certification stack: **NVIDIA Elite Partner, NVIDIA Inception, Thales Cyber Partner, Entrust Partner, Red Hat Premier, ISO 27001, SOC 2 Type II, TDRA-registered, NESA-aligned, CIS / STIG hardening templates**.

## 13. The Lead Magnet
**"The Sovereign LLM Reference Architecture & 36-Month TCO Pack"** — a 48-page technical PDF + an Excel TCO model + the full hardware bill of materials (BoM) for the 8x H100 and 16x H100 reference appliances + the STIG hardening checklist. Headline figure: **break-even vs Azure OpenAI between month 14 and month 22**, with **zero data egress** and **customer-held HSM keys** through the full lifecycle.

## 14. Primary CTA Wording
**"Request a sovereign LLM appliance design session with our principal infrastructure architect"** — secondary mid-page CTA: **"Download the sovereign LLM TCO pack"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I am CISO / Head of Platform Security at [entity]. We need a customer-owned, in-country LLM deployment with our own HSM and KMS. Could we arrange a confidential architecture session under NDA?

## 16. Quote Form Fields
1. **Data classification ceiling** (single select: Public / Internal / Confidential / Restricted-equivalent / Top-Secret-equivalent — for federal / defence)
2. **Expected concurrent users** (single select: <100 / 100–1,000 / 1,000–10,000 / >10,000)
3. **Token budget per month** (single select: <50M / 50M–500M / 500M–5B / >5B)
4. **Preferred deployment posture** (single select: fully air-gapped / DMZ-gated / sovereign cloud-bursted / hybrid)
5. **Key custody requirement** (single select: customer HSM (Thales / Entrust) / customer-managed KMS / FIPS 140-3 Level 3+ required / no specific requirement)
6. **Regulator / framework in scope** (multi-select: TDRA / NESA / CBUAE / SAMA / DFSA / ADGM FSRA / Defence-cleared / other)
7. **Preferred base model family** (multi-select: Llama 3 / Mistral / Qwen / DeepSeek / Jais / open — advise me)

## 17. Hero Media Direction
A photographic-style render of a **single rack** in a server room: matte-black, NVIDIA-green LEDs pulsing softly, with a stylised translucent overlay showing the logical components — **H100 SXM5 node, NVLink fabric, HSM appliance, KMS, vLLM cluster** — labelled in clean monospace. A subtle "Owned by [Customer]" tag appears on the rack door. Behind the rack, on a glass wall, the outline of the UAE map glows faintly with a single pin on the customer's data-centre city. No cartoon clouds. No "AI brain". The lighting is low-key, technical, serious — closer to a security-product hero than a SaaS hero. Optional caption ticker beneath the rack: "0 bytes egressed. 100 % customer-held keys."

## 18. Section-by-Section Outline
1. **Hero** — the rack render with the "0 bytes egressed" ticker and the in-country pin.
2. **Why the SaaS path is closed for your workload class** — a frank explainer of where Azure OpenAI, OpenAI Enterprise, Bedrock, Vertex, and even regional cloud-LLM-as-a-Service options fall short on residency, key custody, and tenancy isolation.
3. **The sovereign LLM appliance** — full reference architecture with HSM / KMS overlay, NVLink topology, network zoning (air-gap / DMZ / cloud-burst), and a one-paragraph "what the customer owns vs what Brocode operates" boundary.
4. **Model menu** — Llama 3.x, Mistral-Large-2, Qwen2.5, DeepSeek-V3, Jais — with a comparison table on Arabic strength, context length, throughput on H100, and licence posture.
5. **Fine-tuning & safety on-appliance** — LoRA / QLoRA flow, Llama Guard 3 + NeMo Guardrails, Arabic safety eval set.
6. **90-day delivery plan** — week-by-week Gantt with HSM / STIG / PenTest milestones.
7. **TCO vs Azure OpenAI / OpenAI Enterprise** — interactive TCO chart with the lead-magnet CTA.
8. **Case studies** — federal entity, tier-1 bank, defence-adjacent prime — each with residency, latency, and adoption deltas (no entity names).
9. **Security & assurance pack** — TDRA, NESA, STIG, CIS, FIPS 140-3 mapping, PenTest model.
10. **FAQ** (FAQ schema) — model updates, weight escrow, vendor lock-in, hardware refresh, support SLAs, classified-personnel delivery.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — once an LLM is on-appliance, the customer needs registry, monitoring, and retraining hygiene. Linked from section 3 (operations boundary) and section 9.
2. `/services/document-intelligence` — most sovereign LLM deployments are paired with an Arabic OCR ingest pipeline to feed RAG. Linked from section 5 and the case-study band.
3. `/services/natural-language-processing` — for the Arabic safety eval and intent classification layer. Linked from section 5.
4. `/industries/government-public-sector` — the dominant industry for this page; linked from the case-study band.
5. `/industries/banking-financial-services` — the second-dominant; linked from the case-study band and the regulator-mapping section.

## 20. Differentiation Angle vs Competitors
- **vs OpenAI Enterprise / ChatGPT Enterprise** — OpenAI is US-resident inference with US-held keys; for any UAE / KSA federal, defence, or tier-1 banking workload class this is structurally non-compliant. Brocode delivers customer-owned, in-country inference with no transatlantic plane.
- **vs Azure OpenAI UAE North** — Azure UAE North is geographically in-country but the keys, the control plane, the telemetry plane, and the tenancy fabric are Microsoft-managed and multi-tenant. For the CISOs we sell to, this is the wrong side of the line. Brocode's appliance is single-tenant, customer-key, and physically owned by the customer.
- **vs AWS Bedrock / Google Vertex AI** — same structural objection as Azure plus weaker regional residency posture in the GCC; ruled out for the workload classes in scope.
- **vs G42 / Presight / Inception / Core42 cloud-LLM offerings** — strong sovereign posture and excellent for many customers; for a subset of buyers (peer entities, mandate of vendor neutrality, sensitivity to a single regional dependency, or political concerns at the parent-ministry level), a vendor-neutral, customer-owned appliance is the requested posture. Brocode is the vendor-neutral alternative when G42 / Core42 is not the right fit.
- **vs Cohere North / Mistral Enterprise** — both are credible model vendors; neither delivers the full appliance, HSM integration, STIG hardening, and 90-day in-country delivery as a single contract. Brocode integrates their models where they are the right choice.
- **vs in-house build** — strong in-house infra teams **can** stand up a vLLM cluster on 8x H100; they cannot, in 90 days, deliver the HSM integration, the STIG / CIS hardening, the safety eval, the Arabic guardrails, the TDRA / NESA review pack, and the PenTest. Brocode does, and trains the customer's team to operate it.

---

## Production notes
- All claims about residency, key custody, and FIPS posture require legal review before publish.
- Customer logos remain anonymised on this page indefinitely; case-study deltas are reviewable under NDA only.
- The hero render must not depict any identifiable customer data-centre interior.
- The base-model list (Llama / Mistral / Qwen / DeepSeek / Jais) must be reviewed quarterly; licence terms change and one of these may need to be dropped.
- For federal / defence engagements, the contact path on this page should route to a dedicated cleared-engagement intake, not the standard sales queue.
