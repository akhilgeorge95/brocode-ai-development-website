# Conversion Brief — LLM Fine-Tuning (For AI-Mature Teams)

---

## 1. Page Slug & URL
`/services/llm-fine-tuning`

## 2. Primary Audience Persona
Head of AI, Head of Machine Learning, or VP of Applied AI at an AI-mature organisation — a regional telco (e&, du, stc, Zain, Mobily, Ooredoo), a tier-1 bank with a standing data-science team, or a sovereign tech holding (G42, Presight, Bayanat, AIQ, Aramco Digital, sdaia-adjacent). They run a team of 15–80 ML engineers and applied scientists. They have a working baseline on Llama 3.x or Mistral, they understand LoRA vs full fine-tune trade-offs, they have GPU budget, and they are sceptical of vendors. They are evaluating whether to bring an external specialist in for domain adaptation, instruction tuning on a Khaleeji Arabic corpus, RLHF/DPO on policy-specific behaviours, or to build an evaluation harness their CISO can show to the regulator.

## 3. Visitor Intent at Arrival
The visitor just searched for an LLM fine-tuning partner with proven Arabic and domain results — telecoms care-flow, banking compliance, government policy — and a serious evaluation methodology. They are late-**evaluation** to early-**decision** stage. They probably already have an Azure OpenAI fine-tuning quote, an AWS Bedrock fine-tune trial, and a parked DIY effort on Llama running on bare-metal H100s. They want a vendor that respects their internal team, talks specifics about base models and eval datasets, and won't push them onto a proprietary model they can't run later.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[llm fine tuning services middle east]`
- **Ad group:** `LLM Fine-Tuning – Domain Adaptation – AI-Mature Teams`

## 5. Secondary Keyword Cluster
1. arabic llm fine tuning uae
2. llama 3 fine tune middle east
3. domain adapted language model gcc
4. rlhf dpo telco banking
5. khaleeji dialect llm training
6. llm evaluation harness arabic
7. self hosted llm inference h100 uae
8. instruction tuning sovereign data

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (G42, Presight, ADQ-portfolio AI teams, FAB, ADIB AI), Dubai (e&, ENBD AI lab, DEWA AI).
- **Secondary:** KSA (stc, Mobily AI, SNB AI, sdaia / NCAI ecosystem, Aramco Digital), Qatar (Ooredoo, QNB AI), Kuwait (Zain AI).
- **Tertiary:** Egypt (Vodafone Egypt, CIB), Pakistan (Jazz, large bank AI teams), Bahrain.

## 7. The One Painful Problem
Their team has fine-tuned Llama 3.1 70B for an internal customer-care assistant, and it scores 8.4 on their English benchmark but **3.1** on Khaleeji Arabic care intents — and a Llama Guard pass on the outputs flags 4.7 % of generations as unsafe, which their risk committee has frozen at the staging gate until the numbers move.

## 8. The Stakes
- The model was promised to go live to a 1.4 M-subscriber contact-centre pilot by the next quarter. A second delay forces a re-baselining and a write-off of GPU spend already committed.
- The Head of AI is being asked by the CIO whether the in-house team can deliver or whether the work should be split with a vendor. A "yes, with help" answer is acceptable; a "we'll keep trying" answer is not.
- The sovereign-tech holding context: a peer entity is already shipping a fine-tuned Arabic model in production; falling behind has political consequences.
- GPU run-rate on idle H100 capacity is a recurring CFO conversation.

## 9. The Promise (H1 Direction)
A fine-tuned open-weights LLM, on **your** GPUs, in **your** VPC — with documented gains on **your** evaluation harness, your dialect, your refusal policy and your safety classifier — delivered in 8 weeks under a co-build agreement that leaves your team owning every artefact.

## 10. The Unique Mechanism
- **Base-model selection:** Llama 3.3 70B, Llama 3.1 405B (quantised), Mistral-Large-2, Qwen 2.5 72B, Falcon Mamba (TII), Jais 70B (Inception/G42), and Gemma 3 — with a model-card-grade trade-off matrix produced for the customer's specific intents.
- **Adaptation methods:** QLoRA on rank 64–128 for narrow adaptation; full SFT for broader behavioural shifts; DPO and KTO for preference alignment; ORPO for combined alignment + SFT in one pass.
- **Training stack:** Axolotl + DeepSpeed ZeRO-3 + FlashAttention-3 on 8–64 H100s/H200s; Megatron-Core for multi-node 405B runs; Unsloth for fast LoRA iteration on smaller bases.
- **Khaleeji data pipeline:** Brocode's own 2.3 M-utterance Khaleeji care corpus (cleared for fine-tuning rights), AraDPO preference set, Argilla-managed annotator workflow with native Khaleeji reviewers in Abu Dhabi.
- **Evaluation:** lm-evaluation-harness + a Brocode "GulfBench" of 18 Arabic dialect and domain tasks (telco care, banking KYC, policy Q&A); DeepEval for hallucination and refusal regression; ALERT and Llama Guard 3 for safety scoring; pairwise judge ensembles with Claude Sonnet 4.5 + GPT-5 + a fine-tuned in-house judge to triangulate.
- **Serving readiness:** vLLM + speculative decoding with EAGLE-2; quantisation paths to AWQ INT4 and Marlin kernels; TensorRT-LLM packaging for production. Run-rate calculator delivered with the model.
- **The "Joint Eval Charter":** Customer and Brocode co-write the evaluation harness in week 1; no fine-tuning starts until both sides have signed off on the metrics.

## 11. Top 3 Objections
- **O1:** "Azure already gives us managed fine-tuning on GPT-4o-mini and o4-mini. Why bring in an open-weights specialist?"
- **O2:** "Our team can do this — we have a Llama run on bare-metal. What specifically are you bringing that we don't have?"
- **O3:** "How do you prove the lift is real and not eval contamination? Our risk committee will tear apart any single-benchmark number."

## 12. Proof Strategy
- A "Khaleeji LLM Leaderboard" lead magnet (see field 13) — a public, regularly-refreshed scorecard of open and closed models on a held-out Khaleeji care, banking and policy task suite.
- Anonymised telco reference: a Llama 3.3 70B fine-tune with QLoRA + DPO; Khaleeji care benchmark 3.1 → 8.2; safety violations 4.7 % → 0.4 %; inference cost down 38 % on vLLM + AWQ.
- Anonymised tier-1 bank reference: Mistral-Large-2 SFT on Arabic compliance circulars; 91 % factuality on a 2,400-question RAG eval; on-prem H100 deployment.
- Anonymised sovereign-tech holding reference: instruction-tuned Jais variant for an internal policy assistant, fully owned and run by the customer's MLOps team after 12 weeks.
- Partner badges: NVIDIA Inception Premier, NVIDIA NeMo partner, Hugging Face Enterprise partner, AWS Generative AI Competency, Azure AI partner, ISO 27001, SOC 2 Type II.
- Visible engineering blog posts and a public GitHub presence with reproducible eval harnesses.

## 13. The Lead Magnet
**"GulfBench v2 — A Khaleeji-Aware LLM Evaluation Harness, with 14 Open and Closed Models Scored on Telco, Banking and Government Tasks"** — a 38-page technical report + a downloadable JSONL of held-out tasks (200 examples redacted, full set available under NDA) + a Python reproducer on GitHub. Headline figure: a fine-tuned Llama 3.3 70B with QLoRA + DPO **outscores GPT-4o-mini fine-tuned and Azure-hosted by 21.6 GulfBench points** on Khaleeji care intents at one-twelfth the per-token inference cost.

## 14. Primary CTA Wording
**"Co-write a Joint Eval Charter with our principal scientist — 90 minutes, no commitment"** — secondary CTA: **"Download GulfBench v2 + the reproducer"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I lead AI at [organisation]. We're working on an Arabic/Khaleeji LLM fine-tune and want to compare notes on eval methodology and base-model selection. Could your principal scientist join a 60-minute call?

## 16. Quote Form Fields
1. **Current base model** (single select: Llama 3.x / Mistral / Qwen / Falcon / Jais / Gemma / closed API / not selected yet)
2. **Adaptation method you're considering** (multi-select: LoRA/QLoRA / full SFT / DPO/ORPO / continued pre-training / RLHF / unsure)
3. **Available GPU capacity** (single select: <8 H100 / 8–32 H100 / >32 H100 / hyperscaler reserved / none yet)
4. **Primary domain and language** (multi-select: telco care / banking / insurance / government policy / legal / healthcare; MSA / Khaleeji / Levantine / English / French)
5. **Eval harness status** (single select: production-grade / partial / none yet / using public benchmarks only)
6. **Constraints** (multi-select: must remain open-weights / customer-managed keys / on-prem / no data leaves country / safety review required)

## 17. Hero Media Direction
A close-up, slightly top-down camera on a single rack of H100 SXM5 modules — the gold contact pads catch the light, the NVLink switch glows faint cyan. The camera dollies slowly along the rack. Overlaid in a thin monospaced HUD on the right side of the frame: a live training run — `step 14,200 / 32,000`, `loss 0.412`, `eval/gulfbench: 7.8 (+4.7 vs base)`, `dpo_margin: 0.31`. A second, small inset shows a tokeniser view rendering an Arabic Khaleeji sentence — the byte-pair splits visualised as coloured chips. Colour grade: dark slate, gold accents from the GPUs, no neon. The aesthetic is "research-grade lab footage", not marketing render. The hero should signal to a Head of AI: "these people actually run training, not slides".

## 18. Section-by-Section Outline
1. **Hero** — H100 rack with a live training HUD and an Arabic tokeniser inset.
2. **The Joint Eval Charter** — what gets agreed in week 1 before any GPU is spun up.
3. **Base-model selection trade-off matrix** — Llama 3.3 / Mistral-Large-2 / Qwen 2.5 / Jais / Falcon Mamba with per-task pros and cons.
4. **Methods — when to use what** — LoRA vs full SFT vs DPO vs ORPO vs continued pre-training, with a decision tree.
5. **The Khaleeji data pipeline** — corpus, licensing, annotation workflow, dialect coverage.
6. **GulfBench evaluation methodology** — task design, judge ensembles, contamination controls.
7. **Serving readiness** — vLLM, speculative decoding, quantisation, run-rate calculator.
8. **Case studies** — telco care, banking compliance, sovereign policy assistant.
9. **Comparison band** — vs Azure OpenAI fine-tuning / vs AWS Bedrock custom / vs DIY / vs MBZUAI–TII research collabs.
10. **Joint Eval Charter CTA** — full-width with form.
11. **FAQ** (FAQ schema) — ownership, IP, deprecation, contamination, sovereignty.

## 19. Internal Linking Strategy
1. `/services/self-hosted-llm-infrastructure` — for the customer that needs the inference appliance, not just the model. Linked from section 7.
2. `/services/generative-ai-development` — for the broader GenAI capability that wraps the fine-tune. Linked from the case-studies section.
3. `/services/responsible-ai-governance` — for the safety/refusal-policy and red-team conversation. Linked from the methods section.
4. `/services/mlops-ai-infrastructure` — for the continuous training and drift conversation. Linked from FAQ.
5. `/industries/banking-financial-services` — primary industry hub for the banking-compliance fine-tune persona; linked from case studies.

## 20. Differentiation Angle vs Competitors
- **vs Azure OpenAI fine-tuning** — emphasise open-weights ownership, multi-region inference flexibility, and the 12 × cost delta on per-token inference at production scale. Note: Azure pushes you onto closed models you cannot serve elsewhere if the contract changes.
- **vs AWS Bedrock custom models** — similar argument, plus the Khaleeji-specific data pipeline that Bedrock does not provide and the in-region (UAE/KSA) inference patterns that avoid the Bahrain-region constraint.
- **vs DIY on bare-metal Llama / EC2 H100s** — emphasise the Joint Eval Charter, GulfBench, the annotation workflow, and the productionisation toolchain (vLLM + EAGLE-2 + AWQ INT4). DIY teams typically reach a working LoRA in 6–10 weeks; a productionised, safety-cleared, run-rate-optimised model takes 6–9 months without a partner.
- **vs MBZUAI / TII research collaborations** — emphasise commercial delivery cadence (8 weeks) vs research timelines (12–24 months), and a contractual commitment to customer-owned artefacts.

---

## Production notes
- All performance numbers (3.1 → 8.2, 21.6 GulfBench delta, 38 % cost down) require sign-off from the principal scientist before publish.
- GulfBench v2 task design must be vetted for contamination against the public eval suites referenced in the report.
- The hero rack footage to be filmed at the Brocode lab, with the actual customer-cleared tokeniser overlay — no stock GPU clips.
