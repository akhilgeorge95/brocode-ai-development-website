# Conversion Brief — Open-Source Contributions

---

## 1. Page Slug & URL
`/technology/open-source`

## 2. Primary Audience Persona
Two overlapping personas: (a) a CTO or VP of Engineering at a UAE / GCC enterprise (bank, telco, energy, government technology arm) doing engineering-culture due diligence on a shortlisted AI partner — they want to know whether the consultancy's engineers contribute upstream or just consume; (b) a senior Arabic NLP researcher or principal engineer evaluating Brocode as a future employer or research collaborator. Both audiences are highly sceptical of marketing language and respond only to commit links, PR numbers, dataset cards, and benchmark releases.

## 3. Visitor Intent at Arrival
The visitor just searched for the vendor's open-source footprint — they want to verify our engineers have public, named, and traceable contributions to Hugging Face Transformers, vLLM, pgvector, Arabic NLP datasets, and benchmark suites. Stage: **awareness-to-evaluation crossover for buyers, awareness for researchers**. The buyer audience will use this page as a tie-breaker between two otherwise-equivalent vendors; the researcher audience will use it to decide whether to apply or partner.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"arabic nlp open source uae"`
- **Ad group:** `Engineering Culture – Open Source – Arabic NLP`

## 5. Secondary Keyword Cluster
1. arabic tokeniser hugging face contribution
2. vllm contributors middle east
3. khaleeji dialect benchmark dataset
4. arabic nlp dataset release uae
5. open source ai consultancy gcc
6. arabic ner dataset hugging face
7. pgvector contributor uae
8. arabic eval harness lm-evaluation-harness

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (MBZUAI / TII catchment), Dubai (Emirates NBD AI, RTA tech, Careem engineering)
- **Secondary:** KSA (KAUST, SDAIA, Aramco Digital), Qatar (QCRI), Egypt (Arabic NLP academic community)
- **Tertiary:** Global open-source contributors interested in joining the Arabic NLP ecosystem

## 7. The One Painful Problem
The visitor has shortlisted two vendors at the same price and similar partnership tier, and needs a defensible reason to choose one over the other — engineering-culture evidence (public commits, named maintainers, dataset releases) is the only signal left, but most consultancies' websites stop at "we love open source."

## 8. The Stakes
- For the buyer: a vendor whose engineers contribute upstream is a vendor who attracts and retains senior talent; the alternative is delivery-team churn mid-engagement, which costs the buyer six to nine months of context.
- For the buyer: a vendor that has published an Arabic dialect benchmark is a vendor that has done the work — the alternative is "we will figure out Arabic during the engagement", which has burned the visitor before.
- For the researcher: the wrong career move costs two years; this page is the proxy for whether Brocode is a place where serious Arabic NLP research happens.

## 9. The Promise (H1 Direction)
The public Arabic NLP and ML-infrastructure work our engineers ship in the open — every commit linked, every dataset cited, every benchmark reproducible — alongside the procurement-grade summary your CTO can paste into a vendor scorecard.

## 10. The Unique Mechanism
- **Arabic NLP datasets we have published** on Hugging Face Hub under the Brocode org: `brocode/khaleeji-dialect-corpus-v2` (1.4M utterances across UAE, KSA, Qatar, Kuwait, Bahrain dialect markers), `brocode/uae-government-correspondence-ner` (anonymised NER tags on Arabic correspondence templates), `brocode/arabic-financial-extraction-eval` (1,800 labelled Arabic invoices and KYC docs for extraction benchmarking).
- **Hugging Face `tokenizers` upstream PRs** — Arabic-script normalisation fixes (ZWNJ, tatweel, alef-variant handling), merged into the main tokenizers package.
- **vLLM contributions** — paged-attention edge-case fixes for right-to-left scripts, Arabic-locale tokenisation pathway, sample serving configs for Falcon-family and Jais models.
- **`lm-evaluation-harness` Arabic task pack** — a public PR adding seven Arabic MCQA and generation tasks aligned to the **Khaleeji Benchmark**.
- **The Khaleeji Benchmark** — an open evaluation suite for Arabic LLMs covering UAE / KSA / Qatar / Kuwait / Bahrain dialect comprehension, MSA reasoning, and Arabic-English code-switching; published with a public leaderboard.
- **pgvector contributions** — index-build performance fix on high-dimension Arabic-embedding workloads.
- **Public Brocode engineering blog** — six long-form engineering posts per year, each tied to a public artefact.
- **The "Open-Source Hour"** — every engineer at Brocode is paid for one Friday afternoon a week to contribute upstream, audited by the CTO.

## 11. Top 3 Objections
- **O1:** "Where are your actual commits? Show me the GitHub handles of your engineers and the PRs they've shipped."
- **O2:** "Is this 'Arabic NLP' real, or three demo notebooks? Show me a dataset card with statistics, licensing, and a download count."
- **O3:** "Are these contributions sustained or one-off? Anyone can land a single PR for marketing — show me an 18-month commit graph."

## 12. Proof Strategy
- A live "Contributions Wall" — embed of GitHub commit graphs for the Brocode org and the named individual GitHub handles of our principal engineers (with consent).
- Direct links to merged PRs (with PR number) on Hugging Face `tokenizers`, vLLM, `lm-evaluation-harness`, and pgvector — not screenshots.
- Hugging Face dataset cards rendered live with download counts and licence badges.
- The Khaleeji Benchmark leaderboard embedded with the most recent scores for Falcon, Jais, Claude, GPT-4, and the Brocode fine-tunes.
- Conference talks list — talks given at NeurIPS Arabic NLP workshops, ArabicNLP, Hugging Face community calls, and regional meetups, each with a video link.

## 13. The Lead Magnet
**"The Brocode 2026 Open-Source Report: Arabic NLP Datasets, vLLM PRs, and the Khaleeji Benchmark"** — 36-page PDF with the full commit ledger by repository, every dataset card with provenance and statistics, the Khaleeji Benchmark methodology, and a public bibliography. Headline figure: **312 merged PRs across 14 upstream projects, 7 public Arabic datasets totalling 4.6M labelled records, and 1 open Arabic-LLM benchmark** since the Open-Source Hour policy started in 2023.

## 14. Primary CTA Wording
**"Talk to one of our open-source maintainers about your Arabic NLP roadmap"** — secondary CTA: **"Download the 2026 Open-Source Report"** — tertiary CTA in the careers band: **"Join Brocode engineering"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I'd like to speak with one of your Arabic NLP maintainers about [Arabic LLM evaluation / dataset licensing / vLLM serving / Khaleeji dialect handling] for [organisation or research group].

## 16. Quote Form Fields
1. **Reason for reaching out** (single select: vendor evaluation / dataset licensing / research collaboration / careers / press)
2. **Which open-source artefact prompted the visit?** (multi-select: Khaleeji Benchmark / Hugging Face datasets / vLLM PRs / tokenizers PRs / engineering blog / other)
3. **Affiliation** (free text — organisation or research group)
4. **Use case or research question** (free text — short)
5. **GitHub / Hugging Face handle (optional)** (free text)
6. **Preferred maintainer specialism** (single select: Arabic NLP / serving infra / data engineering / MLOps)

## 17. Hero Media Direction
A full-width "contribution graph" hero. The visual is a real GitHub-style contribution heatmap stitched across the Brocode org repos and named maintainer handles, spanning the trailing 18 months — dense green cells visible across every week. To the right of the heatmap, four numeric tiles count up on viewport entry: PRs merged, datasets published, benchmark releases, conference talks. Background is a dark editor-style charcoal with a single line of monospace text underneath: "Open-Source Hour: every engineer, every Friday afternoon, since 2023." No "open hand holding a globe" cliché.

## 18. Section-by-Section Outline
1. **Hero** — the contribution heatmap and four counters.
2. **Why we publish in the open** — a 140-word statement signed by the CTO and the head of Arabic NLP, framed for both buyers and researchers.
3. **Contributions Wall** — live commit graphs by repository (tokenizers, vLLM, lm-evaluation-harness, pgvector, Brocode org).
4. **Arabic NLP datasets we have published** — three dataset cards rendered inline with statistics, licence, download count.
5. **The Khaleeji Benchmark** — methodology, scoreboard embed, link to the GitHub leaderboard.
6. **Engineering blog highlights** — six long-form posts with one-line takeaways and read-time.
7. **Conference talks and community** — talks given at ArabicNLP, Hugging Face, vLLM community calls, with video links.
8. **The Open-Source Hour policy** — what it is, how it is audited, why we keep funding it.
9. **Lead-magnet block** — full-width download for the 2026 Open-Source Report.
10. **Two routes onwards** — "talk to a maintainer" for buyers; "join Brocode engineering" for researchers.

## 19. Internal Linking Strategy
1. `/technology/stack` — every contribution maps back to a component in the stack. Link from section 3.
2. `/services/natural-language-processing` — the Arabic NLP service is the commercial reflection of the open-source work. Link from section 4.
3. `/services/generative-ai-development` — the vLLM and serving contributions back the LLM-apps service. Link from section 3.
4. `/about/team` — the named maintainers' bios live here. Link from the Contributions Wall handles.
5. `/about/careers` — the researcher audience routes here. Link from section 10.

## 20. Differentiation Angle vs Competitors
- **vs offshore consultancies** — engineering teams rotate per engagement and contribute nothing upstream; we publish a paid Open-Source Hour and a public commit ledger.
- **vs Big-4 AI practices** — they publish glossy whitepapers and zero merged PRs; we publish merged PRs and zero glossy whitepapers (the report is plain).
- **vs sovereign-cloud-only integrators** — they treat Arabic NLP as an internal moat and publish nothing; we publish the Khaleeji Benchmark and the dialect corpus.
- **vs in-house build** — a buyer would have to hire and retain four to six Arabic NLP engineers for two years to ship what is already public from us today.

---

## Production notes
- Every named maintainer handle on the Contributions Wall must have signed a "public attribution" consent — Legal holds the list.
- Dataset cards must be re-pulled from Hugging Face Hub on each deploy so download counts stay current.
- The Khaleeji Benchmark leaderboard must be refreshed within 14 days of any major frontier-model release.
