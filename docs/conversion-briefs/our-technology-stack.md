# Conversion Brief — Our Technology Stack

---

## 1. Page Slug & URL
`/technology/stack`

## 2. Primary Audience Persona
Chief Architect, Head of Platform Engineering, or Principal MLOps Engineer at a UAE / GCC enterprise (bank, telco, energy major, federal entity, sovereign-wealth-fund portfolio company) with 1,000–25,000 employees, asked by their CIO or Chief AI Officer to do technical due diligence on a shortlisted AI consultancy before procurement issues the SoW. They have 8–15 years of hands-on engineering experience, run the architecture review board, and have full veto power on tooling choices. They are sceptical of slide-ware, want to see GitHub commit histories, ADRs, and reference architectures — not glossy "AI platform" diagrams.

## 3. Visitor Intent at Arrival
The visitor just searched for the stack underneath a vendor they are evaluating — they want to verify our engineers are competent, our tooling is opinionated and modern, and we will not lock them into a proprietary black box. Stage: **mid-evaluation, pre-procurement**. They are reading this in parallel with our case studies and our open-source contributions page. They will reject the vendor in the next 48 hours if the stack page is generic, partner-logo-only, or avoids naming actual tools.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"ai consultancy technology stack uae"`
- **Ad group:** `Technology – Stack Transparency – Architect`

## 5. Secondary Keyword Cluster
1. mlops stack uae enterprise
2. ai platform engineering middle east
3. vllm production deployment uae
4. pytorch consultancy abu dhabi
5. ray cluster on g42 cloud
6. terraform aws uae north
7. dbt airflow data stack gcc
8. kubernetes ai workloads sovereign cloud

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (federal, ADNOC ecosystem, Mubadala portfolio), Dubai (DIFC banks, Emirates Group, RTA)
- **Secondary:** KSA (Aramco Digital, NEOM technology functions, STC), Qatar (Qatar Airways, QIB, Ooredoo), Bahrain (BENEFIT, Bank ABC)
- **Tertiary:** Singapore, London — regional architects benchmarking GCC vendors against global SIs

## 7. The One Painful Problem
The visitor has been burnt before by a "platform-agnostic" consultancy that turned out to be three contractors gluing together n8n, LangChain demos and a Streamlit front-end — and they now need to verify, in a 30-minute reading session, that this vendor actually runs a production-grade stack with version-pinned dependencies, ADRs, and a deployable reference architecture.

## 8. The Stakes
- A wrong vendor recommendation lands on the architect's name in the post-mortem deck two years from now when the platform cannot scale past one model.
- The CIO has personally promised the board a "no-rip-and-replace" architecture; choosing a vendor with an opaque or proprietary stack puts that promise — and the architect's seat at the architecture review board — at risk.
- Procurement closes the AI vendor framework next quarter; if this vendor cannot satisfy technical due diligence inside two weeks, they fall off the framework for the next two fiscal years.

## 9. The Promise (H1 Direction)
The exact, version-pinned production stack we run for every Brocode engagement — published, opinionated, portable to your sovereign environment, and walked through line-by-line in a one-hour architecture review with the engineer who owns it.

## 10. The Unique Mechanism
- **Languages & frameworks:** Python 3.11, TypeScript 5, Go 1.22; PyTorch 2.4 + Hugging Face Transformers 4.45 for training, vLLM 0.6 + TensorRT-LLM for inference, LangGraph for agentic orchestration.
- **Data & feature plane:** Apache Airflow 2.9, dbt-core 1.8, Apache Iceberg on S3-compatible object storage, Trino for federated query, Feast for the feature store, Kafka for event streams.
- **ML platform plane:** Ray 2.30 for distributed training, MLflow 2.16 for experiment tracking and the model registry, DVC for dataset versioning, Weights & Biases for run-level observability, Evidently AI + a Brocode-built eval harness for drift and bias.
- **Serving & infra plane:** Kubernetes 1.30 (EKS / AKS / OKE / G42 K8s), Istio service mesh, KServe for model serving, Argo CD for GitOps, Terraform 1.9 + Terragrunt for IaC, Vault for secrets, OpenTelemetry + Prometheus + Grafana + Loki for observability.
- **Vector & retrieval plane:** pgvector on Postgres 16 as the default, Qdrant and Weaviate for high-cardinality workloads, Elastic 8 for hybrid lexical + vector.
- **Guardrails plane:** NVIDIA NeMo Guardrails, Llama Guard 3, plus an in-house Arabic policy classifier; full prompt + response logging to a tamper-evident audit store.
- **The "Stack Walk-Through":** every engagement opens with the assigned principal engineer reading the live ADR repository with the client's architecture team — no slides, just the repo.

## 11. Top 3 Objections
- **O1:** "Show me your stack — not your partners. Anyone can put an AWS badge on a deck."
- **O2:** "Is this stack portable to our environment? We will not accept a Brocode-only managed runtime."
- **O3:** "How do I know your engineers actually use this stack? Where are the commits, the ADRs, the live system I can see?"

## 12. Proof Strategy
- A public, version-pinned `STACK.md` excerpt rendered live on the page.
- Three anonymised reference architectures (federal RAG, retail bank fraud, energy major predictive maintenance) downloadable as PDFs with the same component names.
- Live links to our public Hugging Face org, our vLLM upstream contributions, and our pgvector + Arabic-tokenizer PRs (see `/technology/open-source`).
- ISO 27001, SOC 2 Type II, NVIDIA Inception Premier, AWS Advanced Tier, Microsoft AI Cloud Partner, Databricks Lakehouse Partner badges with the partnership year and the partner-side contact named.
- Architect testimonial pull-quote — anonymised UAE tier-1 bank Chief Architect: "First vendor whose stack page survived our 90-minute ARB."

## 13. The Lead Magnet
**"The Brocode Production Stack: 2026 Edition — A Reference Architecture for Sovereign AI Platforms in the GCC"** — 48-page PDF + a downloadable Terraform module skeleton + a Mermaid-source architecture diagram pack. Headline figure: **174 production deployments** across UAE, KSA and Qatar built on this exact stack, with zero proprietary lock-in components.

## 14. Primary CTA Wording
**"Book a one-hour stack walk-through with our Principal Platform Engineer"** — secondary CTA mid-page: **"Download the 2026 reference architecture pack"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I'm doing technical due diligence on a shortlisted vendor for [organisation]. I'd like to book the one-hour stack walk-through with your principal platform engineer. Our environment is [AWS UAE / Azure UAE North / G42 / on-prem].

## 16. Quote Form Fields
1. **Your role** (single select: Chief Architect / Head of Platform / Principal MLOps / Other)
2. **Target deployment environment** (multi-select: AWS UAE North / Azure UAE North / OCI Abu Dhabi / G42 Cloud / Khazna on-prem / hybrid)
3. **Workload profile** (multi-select: LLM inference / classical ML training / streaming / batch ETL / agentic systems / vector search at scale)
4. **Stack constraints we should know about** (free text — existing IaC tool, mandated registry, banned vendors, regulator overlay)
5. **Architecture review board date** (date picker — so we can align the walk-through to their cycle)
6. **Preferred walk-through depth** (single select: 30-minute overview / 60-minute deep-dive / 2-hour ADR-by-ADR)

## 17. Hero Media Direction
A single-screen, dark-mode IDE-style hero. On the left, a vertical tree of the stack (Languages, Data, ML Platform, Serving, Vector, Guardrails) auto-expanding on viewport entry, each node revealing the version pin. On the right, a live-style architecture diagram with the same nodes lighting up as the tree expands — connecting lines drawn in a soft cyan over a deep navy background. A single line of monospace text under the diagram reads "STACK.md • last updated [dynamic date] • commit [short SHA]". No stock-photography engineers. No abstract "neural network" art.

## 18. Section-by-Section Outline
1. **Hero** — the live stack tree and architecture diagram with the commit-SHA line.
2. **Why we publish our stack** — a 120-word architect-to-architect statement signed by our CTO.
3. **The six planes of the Brocode stack** — six expandable cards (Languages, Data, ML Platform, Serving, Vector, Guardrails) with every tool and version pin.
4. **Three reference architectures** — federal RAG, retail bank fraud, energy major predictive maintenance, each as a one-click downloadable PDF.
5. **Portability promise** — explicit statement of what is portable, what is optional, what is replaceable; no Brocode-only runtime.
6. **ADRs we have published** — five linked ADR titles from anonymised engagements.
7. **The Stack Walk-Through** — what happens in the one-hour session, who attends from Brocode, what the client receives at the end.
8. **Lead-magnet block** — full-width download for the 2026 reference architecture pack.
9. **FAQ** (built for FAQ schema) — versioning policy, upgrade cadence, deprecation, IP ownership of generated code.
10. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/technology/ai-platform-partners` — the architect will immediately ask "and what badges back this stack up?" Link from the Guardrails and Serving cards.
2. `/technology/cloud-infrastructure-partners` — the portability promise needs the cloud landing zones page as evidence. Link from section 5.
3. `/technology/open-source` — the "where are your commits" objection routes here. Link from section 2.
4. `/technology/methodology` — the architect wants to see how the stack is delivered. Link from section 7.
5. `/services/mlops-ai-infrastructure` — the dominant service for visitors of this page. Link in the related band.

## 20. Differentiation Angle vs Competitors
- **vs offshore consultancies (TCS / Infosys / Wipro GCC delivery centres)** — they pitch a "platform-agnostic" stack that resolves to whatever the client already has; we publish the opinionated stack we actually run, version-pinned, with ADRs.
- **vs Big-4 (Accenture / Deloitte / EY / PwC AI practices)** — they use whatever the client's enterprise architecture mandates and rebadge it as their methodology; we own a stack and we will tell you when your enterprise architecture is wrong.
- **vs sovereign tech holdings (G42-owned integrators, single-cloud SIs)** — they are locked to one cloud and one model family; our stack runs unmodified on AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, and Khazna on-prem.
- **vs in-house build** — the 2026 reference architecture pack shortcuts a 9–14 month platform-engineering programme into a 6-week landing zone.

---

## Production notes
- The "last updated" date and commit SHA on the hero must be wired to the live `STACK.md` repo — not hard-coded.
- All version pins must be reviewed by the CTO quarterly; stale pins are worse than no pins.
- The three reference-architecture PDFs must be anonymised by Legal before publish — no client-identifiable terminology in the Mermaid source.
