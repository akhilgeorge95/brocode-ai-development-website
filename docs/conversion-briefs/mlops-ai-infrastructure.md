# Conversion Brief — MLOps & AI Infrastructure

---

## 1. Page Slug & URL
`/services/mlops-ai-infrastructure`

## 2. Primary Audience Persona
Head of Engineering, Head of Platform, or Principal ML Platform Lead at a UAE or KSA enterprise that already has a data-science function — typically a bank, insurer, telco, large retailer, energy major, or an aviation / logistics operator with 1,500–15,000 employees. The team has 5–30 models in some form of "production" (a Flask container behind an internal load balancer, an Airflow DAG that scores a table nightly, a SageMaker endpoint nobody owns) but no model registry, no automated retraining, no drift monitoring, no canarying, and no clean rollback path. They report into a CTO or Chief Data & AI Officer. The mandate is to "industrialise the AI estate" inside 12 months — and the board has stopped funding new models until the existing ones are governed.

## 3. Visitor Intent at Arrival
The visitor has just searched for an MLOps consultancy that can stand up a production-grade ML platform without locking them into a single hyperscaler, and that will integrate with what they already have (probably some mix of Databricks, SageMaker, MLflow-on-EC2, Kubeflow attempts, GitLab CI, and a homegrown feature store). They are mid-**evaluation** stage. They have likely read the Databricks pitch, the SageMaker pitch, and a Weights & Biases pitch, and they are looking for a partner who builds the platform with them rather than selling them a SKU. They want to see real reference architectures, not a glossy maturity model.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"mlops consulting uae"`
- **Ad group:** `MLOps Platform Build – Enterprise UAE & KSA`

## 5. Secondary Keyword Cluster
1. model registry and monitoring uae
2. ml platform engineering middle east
3. mlflow bentoml production deployment
4. ml model drift monitoring gcc
5. feature store implementation bank
6. ml ci cd pipeline gitlab kubernetes
7. ray serve enterprise deployment
8. ai platform vendor-neutral consultancy

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (DIFC banks, Emirates Group, du, e&, Majid Al Futtaim), Abu Dhabi (ADNOC, FAB, Aldar, Mubadala portfolio)
- **Secondary:** KSA (Saudi Aramco, SABIC, STC, Al Rajhi, SNB), Qatar (QatarEnergy, QNB), Oman, Bahrain
- **Tertiary:** India (GCCs of GCC enterprises), Singapore, London — engineering-led buyers who shortlist regional partners

## 7. The One Painful Problem
Their models live in notebooks and one-off containers, every retrain is a Jira ticket with the same data scientist as the only person who knows what runs where, drift is found by the business calling to complain, and the CTO has just told the platform team that **no new model goes live until there is a registry, lineage, drift monitoring, and a rollback path**.

## 8. The Stakes
- The board has gated new AI funding behind "platform readiness." Every quarter of delay is a quarter of the AI roadmap not shipping — and the business sponsors are loudly considering buying point solutions instead.
- A single high-profile drift incident (a credit model, a churn model, a fraud model) in front of the regulator is a career event for the head of engineering.
- The data-science team is haemorrhaging senior people because they cannot get their models to production cleanly — attrition cost alone is seven figures annually.
- The CTO has personally signed up to a "5-to-50 production models in 18 months" commitment to the executive committee. Without a platform, that number is undeliverable.

## 9. The Promise (H1 Direction)
A production-grade, vendor-neutral ML platform — model registry, automated retraining, drift monitoring, canary deployment, full lineage — stood up on **your** Kubernetes (any cloud, any region, including on-prem) in 16 weeks, with your team operating it on day one.

## 10. The Unique Mechanism
- A reference platform that Brocode has hardened across 14 deployments, built on a deliberately vendor-neutral stack: **MLflow** (registry & experiment tracking), **BentoML** + **Ray Serve** (model serving with autoscaling), **Feast** (feature store), **Airflow** or **Prefect** (orchestration), **Arize AI** or **Evidently** (drift & quality monitoring), **Great Expectations** (data validation), **DVC** + **LakeFS** (data versioning), **Argo CD** + **GitLab CI** (GitOps deployment), **Kyverno** + **OPA Gatekeeper** (policy), **Prometheus** + **Grafana** + **Loki** (platform observability).
- A proprietary **"Canary Deployer"** pattern: every model promotion goes through shadow-mode → percentage canary → full rollout, with auto-rollback gated on a model-level KPI window (configurable per model — e.g. revert if 7-day calibration drift exceeds threshold). This is something neither Databricks nor SageMaker ship by default.
- A **"Model Card + Lineage Sheet"** template aligned to **EU AI Act high-risk** documentation and **SAMA / CBUAE** model-governance requirements — generated automatically from the registry, not hand-typed.
- A **16-week "Platform-in-a-Box" delivery method**: weeks 1–4 discovery & landing zone, 5–10 platform install + 3 reference models migrated, 11–14 production hardening + runbooks, 15–16 enablement and handover. Fixed-fee, not T&M.
- Cloud-agnostic: deployable on **AWS EKS, Azure AKS, GCP GKE, OCI OKE, G42 Core42, on-prem OpenShift, or vanilla kubeadm** — Brocode does not require the customer to standardise on a hyperscaler.

## 11. Top 3 Objections
- **O1:** "We have a Databricks contract / a SageMaker estate already — we cannot rip and replace, and we cannot afford a second platform sitting next to the first one."
- **O2:** "We have tried this before. Two consultancies sold us a Kubeflow build that nobody on our team can operate, and the platform died six months later. How is this different?"
- **O3:** "Show me the run-cost. Our finance team will not approve a platform whose TCO is opaque, and our SRE team will not adopt a stack they cannot patch."

## 12. Proof Strategy
- Anonymised UAE tier-1 bank reference: 23 models migrated from notebooks to a registry-driven platform in 14 weeks, mean-time-to-production reduced from 11 weeks to 6 days, full SAMA / CBUAE model-governance pack auto-generated.
- Anonymised regional insurer reference: claims-fraud model retrained weekly via Airflow + MLflow + Arize drift gate, false-negative drift caught in 3 days vs prior 6-week detection lag.
- Anonymised energy major reference: predictive-maintenance estate (47 models across 6 assets) consolidated on a single Ray Serve cluster, GPU cost down 38 %.
- Reference architecture downloads for AWS / Azure / on-prem variants (lead magnet).
- Existing certifications and partner badges: **CNCF Kubernetes Certified Service Provider, ISO 27001, SOC 2 Type II, NVIDIA Inception, AWS Advanced Tier, Databricks Partner, Azure Specialisation in AI / ML**.
- Public commitment to leave the customer's team operating the platform — every engagement ends with a documented run-book audit signed off by the customer's SRE lead.

## 13. The Lead Magnet
**"The MLOps Reference Architecture Pack: 4 Production Blueprints (AWS, Azure, GCP, On-Prem) with Cost Models & Runbooks"** — a 60-page technical PDF + downloadable Terraform / Helm chart references + a TCO calculator spreadsheet. Headline figure: **median time-to-production reduced from 11 weeks to 6 days** across 14 Brocode deployments, with a per-model run-cost band of **AED 380–1,200 per month** depending on traffic class.

## 14. Primary CTA Wording
**"Book a 60-minute platform architecture review with our principal ML platform engineer"** — secondary mid-page CTA: **"Download the MLOps reference architecture pack"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I lead platform engineering at [organisation]. We have [N] models in some form of production and need to stand up a proper MLOps platform (registry, retraining, drift, canary). Could we get an hour with your principal platform engineer to walk through our current estate?

## 16. Quote Form Fields
1. **Models currently in production (any definition)** (single select: 1–5 / 6–15 / 16–30 / >30)
2. **Current orchestration & tooling** (multi-select: Airflow / Prefect / Kubeflow / SageMaker / Databricks Workflows / MLflow / homegrown / none)
3. **Target hosting** (single select: AWS / Azure / GCP / OCI / G42 Core42 / on-prem OpenShift / vanilla Kubernetes / hybrid)
4. **Top pain right now** (single select: no registry / no retraining / no drift monitoring / no rollback / model governance / GPU cost)
5. **Regulator(s) in scope** (multi-select: CBUAE / SAMA / DFSA / FSRA / ADGM FSRA / EU AI Act / none)
6. **Team size we'd be enabling** (single select: 1–3 / 4–10 / 11–25 / >25 platform & ML engineers)

## 17. Hero Media Direction
A wide, calm "platform topology" hero. The screen shows a stylised, isometric diagram of a Kubernetes cluster rendered as three horizontal lanes: **Build** (GitLab CI → MLflow → BentoML build), **Deploy** (Argo CD → Ray Serve shadow → canary → full), **Observe** (Arize drift → Prometheus → auto-rollback arrow looping back to Build). Tiny animated packets travel along the lanes. In the lower-right corner, a single metric card pulses: **"Mean time-to-production: 6 days"**. The whole composition uses a dark-graphite background with a single accent in NVIDIA-green for the GPU node row. No generic "AI brain" graphic. No stock cloud icons.

## 18. Section-by-Section Outline
1. **Hero** — isometric platform topology with the 6-day time-to-production card.
2. **The five symptoms of an MLOps estate that has stalled** — diagnostic checklist (no registry, no retraining, no drift signal, no rollback, no governance pack) — built so the visitor self-identifies.
3. **The Brocode reference platform** — full architecture diagram of the 11-component stack with vendor logos and a one-sentence "why this component" explanation per layer.
4. **The Canary Deployer pattern** — visual walkthrough of shadow → canary → full with the auto-rollback gate, including a sample dashboard.
5. **16-week Platform-in-a-Box delivery plan** — week-by-week Gantt with deliverables per week.
6. **Reference architectures by host** — tabs for AWS EKS, Azure AKS, on-prem OpenShift, G42 Core42 — each tab linked to the downloadable pack.
7. **Cost model** — interactive TCO calculator (traffic class, GPU class, model count) with a "request your custom TCO" hand-off.
8. **Case studies** — bank, insurer, energy major — each with a registry / drift / cost delta.
9. **Governance & regulatory mapping** — how the platform's auto-generated lineage and model cards map to SAMA, CBUAE, DFSA, FSRA, EU AI Act controls.
10. **FAQ** (FAQ schema) — Databricks coexistence, SageMaker coexistence, exit costs, run-cost, on-call model, retraining cadence.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/data-engineering-for-ai` — every MLOps engagement reveals upstream data-quality gaps; link from section 3 (feature store layer) and section 2 (diagnostic).
2. `/services/self-hosted-llm-infrastructure` — for customers extending the platform to host LLMs; linked from the architecture diagram caption.
3. `/services/ai-consulting-strategy` — for customers who realise mid-conversation they need a roadmap, not just a platform; linked from section 2.
4. `/industries/banking-financial-services` — dominant industry; linked from the bank case study.
5. `/services/document-intelligence` — for customers whose first production model is an OCR / extraction model; linked from the case-study band.

## 20. Differentiation Angle vs Competitors
- **vs Databricks Lakehouse / Mosaic AI** — Databricks is excellent inside Databricks; the moment the customer has models served outside Databricks (which every enterprise does), the registry, monitoring, and governance story fragments. Brocode builds a platform that treats Databricks as one of many model sources, not the centre of the universe — and that the customer can keep running if they ever leave Databricks.
- **vs AWS SageMaker** — SageMaker is a strong managed-service for AWS-native teams but assumes the customer has standardised on AWS, on SageMaker Pipelines, and on SageMaker Model Registry. Multi-cloud enterprises and on-prem-required regulated entities cannot use it as a primary platform. Brocode's vendor-neutral stack runs on EKS without locking the customer into the SageMaker SKUs.
- **vs Weights & Biases / Comet / Neptune** — these are excellent **components**, not platforms. They give experiment tracking but do not deploy models, do not canary, do not auto-rollback, do not feed governance packs. Brocode either integrates them as the tracking layer or replaces them with MLflow, depending on the customer's existing stance.
- **vs Big-4 (Accenture, Deloitte, KPMG, EY) MLOps practices** — Big-4 engagements typically deliver slide-ware plus a junior-heavy build team. Brocode delivers a fixed-fee 16-week platform with named senior engineers (CV-visible) and a documented run-book handover, not a 30-FTE staff-aug shop.
- **vs in-house DIY** — strong in-house platform teams **can** build this; they typically take 12–18 months and lose two senior engineers to the market mid-build. Brocode delivers in 16 weeks and trains the customer's team to operate it, so the in-house engineers own it on day 113.

---

## Production notes
- The 6-day mean-time-to-production figure must be re-confirmed with the principal platform engineer before publish; the underlying 14-deployment sample needs a refresh note in the lead magnet.
- The reference Terraform / Helm artefacts in the lead magnet must be reviewed by Brocode's security lead and stripped of any customer-identifying configuration.
- Vendor logos in section 3 require permission for visible use — check MLflow / Bento / Ray / Arize partner programmes.
- The interactive TCO calculator needs a clear disclaimer that final pricing depends on negotiated cloud commits.
