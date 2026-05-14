# Conversion Brief — Recommendation Systems (Retail, Media, Super-Apps)

---

## 1. Page Slug & URL
`/services/recommendation-systems`

## 2. Primary Audience Persona
Head of Digital Product, Head of E-commerce, Head of Personalisation, or VP Growth at:
- **a regional retailer** (Carrefour-MAF, LuLu Online, Apparel Group, Chalhoub, Noon, Amazon.ae merchant arm, Sharaf DG),
- **a streaming / media platform** (Anghami, OSN+, Shahid, StarzPlay, Dubai-based MENA platforms),
- **or a fintech / super-app** (Careem, Talabat, e& Money, Tabby, Tamara).

1,500–15,000 employees. Reports to a Chief Digital Officer or Chief Product Officer. They have a board-set growth KPI — `AOV +8 %`, `7-day retention +20 %`, `Watch-time +12 %`, or `cross-sell uplift on the super-app +X %`. They own the personalisation roadmap and the recommender stack. They are sceptical of "AI personalisation" pitches that don't engage with cold-start, sparsity, and Arabic-catalogue specifics.

## 3. Visitor Intent at Arrival
The visitor just searched for a recommender-systems partner with experience in regional catalogues — Arabic content, fragmented brand-name spellings, ramadan and event-driven demand cycles, and the long tail of small-volume titles or SKUs. They are mid-**evaluation** stage. They have an Algolia / Coveo search-first setup that does "you may also like" but not real personalisation, possibly an AWS Personalize trial that failed cold-start, and an in-house Python team that built a basic matrix-factorisation model that has plateaued. They want a partner who can ship a real ranking stack — not a vendor card.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"recommendation engine ecommerce uae"`
- **Ad group:** `Recommendation Systems – Retail/Media/Super-App – GCC`

## 5. Secondary Keyword Cluster
1. personalisation engine retailer middle east
2. streaming recommender arabic content
3. super app cross sell ai gcc
4. cold start recommendation regional catalogue
5. learn to rank ecommerce uae
6. session based recommender retail
7. ramadan demand personalisation
8. amazon personalize alternative

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (e-commerce HQs, streaming HQs, super-app HQs in DIFC and Dubai Internet City), Abu Dhabi (fintech HQs).
- **Secondary:** KSA (Riyadh — Noon, Jahez, Tabby; Jeddah — Centrepoint, Lulu), Egypt (Talabat, large e-commerce), Qatar, Kuwait, Bahrain.
- **Tertiary:** Pakistan (large e-commerce, Careem regional), Turkey (regional content platforms), India (GCC-owned e-commerce arms).

## 7. The One Painful Problem
Their homepage carousel "for you" ranking is **based on store popularity**, not the user — because their Algolia/Coveo setup ranks for relevance but not personalisation, and their AWS Personalize POC collapsed on Arabic-only customers and short-history sessions. The result: CTR on the personalised row is **2.1 %**, AOV is flat, and the CDO has set a six-month deadline for a real lift.

## 8. The Stakes
- The board has approved a year-long growth plan that assumes personalisation contributes a measurable AOV / retention lift. Missing that contribution forces the CDO to re-baseline the whole roadmap.
- Two regional competitors have publicly demonstrated personalisation features (a peer retailer's "for you" tab, a peer streaming service's hyper-personalised continue-watching strip); analyst reviews are starting to compare.
- A failed POC has burned cloud spend and engineering goodwill; another visible failure costs the personalisation programme its independent budget.
- For streaming: licensing economics depend on watch-time on long-tail catalogues — a recommender that only surfaces top 100 titles is a renewal-negotiation problem.

## 9. The Promise (H1 Direction)
A ranking stack tuned for regional catalogues — Arabic-aware, cold-start-aware, event-cycle-aware — that lifts measurable CTR, AOV, retention or watch-time in your customer's first 90 days, with a public A/B holdout your CDO can defend.

## 10. The Unique Mechanism
- **Retrieval layer (candidate generation):** Two-tower neural retrieval (TensorFlow Recommenders), ANN search on Vespa or Milvus, optional fall-through to Elasticsearch lexical for cold inventory. For media catalogues: a multimodal item tower using CLIP and Whisper-generated transcripts for Arabic content metadata enrichment.
- **Ranking layer:** A learn-to-rank model — DeepFM, DIN (Deep Interest Network), DCN-v2, and a Transformer-based BST (Behaviour Sequence Transformer) — chosen per use case. Catboost as a strong tabular fallback for thin-data segments.
- **Cold-start:** Item-content embeddings via fine-tuned **CLIP** (multilingual), product-title and review embeddings via **bge-m3**, an Arabic title canonicaliser for brand-name spelling variants (Adidas / أديداس / addidas), and a contextual-bandit head (LinUCB and Thompson Sampling via Vowpal Wabbit) for new items and new users.
- **Session and event awareness:** A session encoder using GRU4Rec-style sequence modelling, with explicit Ramadan / Eid / Back-to-School / White Friday boost embeddings learned from prior-cycle behaviour.
- **Causal & business-rule layer:** Uplift modelling (CausalML) for "show this to users it actually moves", plus business-rule overlays (stock-out, margin floor, exclusivity) declared in YAML and enforced before rendering.
- **Serving:** Triton Inference Server with ONNX-exported models; <40 ms p99 latency target for the personalised row; feature store on Feast + Redis online layer.
- **Eval & experimentation:** Offline replay with counterfactual estimation; online with Brocode's lightweight experimentation harness on GrowthBook or LaunchDarkly; a public "uplift dashboard" the CDO can show the board.
- **The "Lift Pilot":** A free 6-week scoping where Brocode ingests anonymised event logs and produces a measurable offline replay lift estimate, plus a recommended ranking-stack architecture, before any contract.

## 11. Top 3 Objections
- **O1:** "Algolia / Coveo already rank our catalogue. Why do we need a separate recommender — won't this duplicate effort?"
- **O2:** "Our catalogue has thousands of brand-name spelling variants and a long Arabic-only tail. AWS Personalize couldn't handle it. Can you?"
- **O3:** "We need to ship in a quarter. We don't have 18 months to build a feature store and a ranking platform from scratch."

## 12. Proof Strategy
- A "Cold-Start Benchmark" lead magnet (see field 13) showing AWS Personalize, Algolia AI Recommend, Coveo and the Brocode stack on a shared cold-start scenario.
- Anonymised UAE retailer reference: homepage "for you" row CTR 2.1 % → 6.4 %, AOV +9.8 % vs control, on a 50/50 A/B holdout across 14 weeks.
- Anonymised regional streaming reference: long-tail watch-time +18.3 %, continue-watching CTR +11 %, with a published holdout methodology.
- Anonymised super-app reference: cross-sell from rides to food on Careem-class super-app, attach-rate +14 % at session start.
- Partner badges: AWS Advanced Tier, Google Cloud Partner, Snowflake Select Partner, Vespa Cloud partner, NVIDIA Inception Premier, ISO 27001, SOC 2 Type II.
- A live demo on the page with a sample Arabic-and-English mixed catalogue showing cold-start vs warm-start behaviour.

## 13. The Lead Magnet
**"The GCC Cold-Start Benchmark — How AWS Personalize, Algolia AI Recommend, Coveo and a Custom Two-Tower Stack Behave on an Arabic-Heavy 240,000-SKU Catalogue"** — 32-page PDF + a downloadable replay dataset (anonymised) + a one-page CDO board-format summary. Headline figure: on net-new users (no history), Brocode's two-tower + bandit stack delivered **HR@10 of 0.41** vs AWS Personalize at **0.18** and Algolia AI Recommend at **0.22** on the shared replay set.

## 14. Primary CTA Wording
**"Start a free 6-week Lift Pilot on your event logs"** — secondary CTA: **"Book a 45-minute personalisation roadmap session"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I run [personalisation / e-commerce / product / streaming] at [organisation]. Our recommender isn't moving the KPI. Could we schedule a 30-minute call to discuss a Lift Pilot on our data?

## 16. Quote Form Fields
1. **Business model** (single select: e-commerce — physical goods / e-commerce — digital goods / streaming or media / super-app — multi-vertical / fintech / marketplace / other)
2. **Catalogue size** (single select: <5K / 5K–50K / 50K–500K / >500K items)
3. **Languages in catalogue** (multi-select: Arabic — MSA / Arabic — dialectal / English / French / Urdu / Hindi / Turkish / other)
4. **Primary KPI to lift** (single select: CTR on personalised row / AOV / 7-day retention / 30-day retention / watch-time / cross-sell attach-rate / subscription churn)
5. **Current stack** (multi-select: AWS Personalize / Algolia AI Recommend / Coveo / Bloomreach / Dynamic Yield / homegrown / Elasticsearch only / none)
6. **Event volume per day** (single select: <100K / 100K–1M / 1M–10M / >10M)

## 17. Hero Media Direction
A high-fidelity phone-frame mockup of a regional e-commerce app's home screen, dropped slightly to the right of the frame. The "For You" row scrolls horizontally on its own at a slow, natural pace. Each tile fades in with a subtle ranking-score pill — `0.94`, `0.91`, `0.88` — that appears for a fraction of a second on tile load. A small overlay in the top-right reads `personalised for: returning user · session 2 · Riyadh · iftar window`. Below the phone, a thin Looker-style A/B bar shows `Treatment CTR 6.4 % · Control CTR 2.1 % · p < 0.001`. The product imagery is a mix of Arabic-only brand cards and global brands, deliberately. Background plain, with a faint Brocode-navy gradient. The hero must NOT look like a generic "recommender 3D-render" — it should look like a screen-recording of a real app.

## 18. Section-by-Section Outline
1. **Hero** — phone with a live "For You" row scrolling and an A/B uplift bar.
2. **Where regional recommenders fail** — three concrete failure modes (Arabic brand-spellings, cold-start on Ramadan launches, long-tail catalogue) with a one-line example per card.
3. **The Brocode ranking stack** — layered diagram (retrieval / ranking / cold-start / business rules / serving) with chosen tools per layer.
4. **Cold-start, properly** — CLIP item embeddings, bge-m3 text embeddings, contextual bandits — how a new user or new item gets a sensible first ranking.
5. **Event-cycle awareness** — how Ramadan, Eid, White Friday and Back-to-School cycles are encoded in the model, with a year-on-year chart.
6. **Eval & A/B** — offline replay + online holdout + uplift dashboard the CDO can defend at the board.
7. **Serving and integration** — Triton + ONNX, Vespa / Milvus, latency targets, headless commerce integration (Salesforce Commerce Cloud, commercetools, Shopify Plus, custom).
8. **Case studies** — retailer, streaming, super-app — each with one quantified outcome and a public holdout chart.
9. **Lift Pilot offer** — full-width CTA with form.
10. **Comparison band** — vs Algolia / Coveo / AWS Personalize / Bloomreach / Dynamic Yield / in-house.
11. **FAQ** (FAQ schema) — cold-start, multilingual coverage, latency, A/B methodology, data exit.

## 19. Internal Linking Strategy
1. `/services/predictive-analytics` — for the retailer audience that also needs demand forecasting alongside personalisation. Linked from case studies.
2. `/services/generative-ai-development` — for the LLM-powered explanation / search overlap. Linked from cold-start section.
3. `/services/mlops-ai-infrastructure` — for the feature store and training-loop story. Linked from serving section.
4. `/industries/retail-ecommerce` — primary industry hub. Linked from case studies.
5. `/industries/hospitality-tourism` — for the streaming/super-app personalisation overlap with travel and dining recommenders. Linked from case studies.

## 20. Differentiation Angle vs Competitors
- **vs Algolia AI Recommend / Coveo** — emphasise that those are search-first products with personalisation bolted on. Brocode is recommender-first. Highlight the cold-start delta on Arabic catalogues (HR@10 0.41 vs 0.22 in the lead-magnet benchmark) and the integration pattern that **keeps** Algolia/Coveo for search while inserting Brocode for the personalised row.
- **vs AWS Personalize / Google Recommendations AI** — emphasise that hyperscaler recommenders treat Arabic as a single locale and collapse on dialect/brand-name variation and on short-history users; Brocode's CLIP + bge-m3 + canonicaliser stack is built for the regional catalogue.
- **vs Bloomreach Discovery / Dynamic Yield** — emphasise the engineering ownership of the model layer (the customer keeps the trained embeddings and the eval harness) and the per-event run cost at GCC volumes.
- **vs in-house Python recommender** — emphasise the productionisation (Triton + ONNX serving, feature store on Feast + Redis, GrowthBook experimentation) and the cold-start toolchain that a 4-person in-house team can't reasonably build in a single quarter.

---

## Production notes
- All uplift figures (2.1 % → 6.4 %, +9.8 % AOV, +18.3 % long-tail watch-time, HR@10 0.41) require sign-off from the personalisation engineering lead before publish.
- The live demo on the page requires a sanitised Arabic catalogue and a documented opt-in for any visitor interactions.
- Hero "For You" mockup must be reviewed by an Arabic UX writer — every visible Arabic title must be real and clean, not garbled.
