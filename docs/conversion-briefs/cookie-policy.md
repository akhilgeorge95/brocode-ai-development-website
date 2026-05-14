# Conversion Brief — Cookie Policy

> The lightest of the four legal pages. Primary job: give GDPR-aware visitors a clean consent surface and a cookie-by-cookie disclosure. Secondary job: serve as a soft trust signal for procurement reviewers checking transparency.

---

## 1. Page Slug & URL
`/cookie-policy`

## 2. Primary Audience Persona
Two readers, both light-touch:
- **Reader A — GDPR-aware EU or UK visitor** (procurement, marketing, technical) who clicked the cookie banner's "manage preferences" or the footer "cookie policy" link. They want to (a) see exactly what trackers are on the site, (b) toggle categories on or off, and (c) leave the page in under three minutes with their consent state set.
- **Reader B — procurement or privacy reviewer** scanning Brocode's transparency posture as part of a wider vendor review. They are not actively managing consent; they are checking that the page exists, is current, lists sub-processors visible via cookies, and is consistent with the privacy policy.

## 3. Visitor Intent at Arrival
Reader A arrived from the cookie banner or footer link, mid-session, while doing something else on the site. Their intent is operational: set my preferences and get out. Reader B is in **evaluation** or **decision** stage of a vendor review and wants a 60-second confirmation of maturity. Neither reader is reading for entertainment; both want scannable information and a clear consent control.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"brocode cookie policy"`
- **Ad group:** `Brand – Legal – Cookies`

## 5. Secondary Keyword Cluster
1. brocode cookies list
2. brocode manage cookie preferences
3. brocode tracking technologies
4. brocode gdpr cookie consent
5. brocode third party cookies
6. brocode analytics cookies
7. brocode marketing pixels
8. brocode consent management

## 6. Geographic Targeting
- **Primary:** EU/EEA, UK (where ePrivacy Directive and PECR mandate granular consent)
- **Secondary:** UAE, KSA, GCC (PDPL alignment for cookies that process personal data)
- **Tertiary:** rest of world (defaulting to highest applicable standard)

## 7. The One Painful Problem
A privacy-aware visitor wants to know exactly which third parties are receiving signals when they browse brocode.ai, and most vendor cookie pages are either a generic IAB template with no actual cookie list or a wall of category descriptions with no toggle, leaving the visitor with no usable consent control.

## 8. The Stakes
- For Reader A, an opaque cookie page is a personal-data-protection concern and reduces trust in the rest of the website.
- For Reader B, a missing or stale cookie page is a finding in the vendor transparency review and a soft negative on the wider procurement decision.
- For Brocode, a non-compliant cookie experience on the EU/UK side is a direct regulatory exposure under GDPR and PECR.

## 9. The Promise (H1 Direction)
A cookie page that actually lists every cookie, every third-party domain, every purpose, and every retention window — with a real, granular consent control on the page itself, not buried in a separate widget.

## 10. The Unique Mechanism
- **In-page consent control** rendered as a clean, accessible UI (not a pop-up modal) — five toggles (Strictly necessary, Functional, Analytics, Marketing, Personalisation), each with an expandable list of the underlying cookies and trackers.
- **Cookie register** — a full per-cookie table: cookie name, domain, first or third party, provider, category, purpose, retention, and link to the provider's own privacy notice.
- **Quarterly automated cookie audit** — a scheduled scan of brocode.ai by a CMP-integrated scanner; the page carries the date of the last completed scan and any new cookies detected since.
- **OneTrust- or Cookiebot-integrated consent vault** — every consent choice is logged with a timestamp and an audit trail, exportable on request under GDPR Art. 7(1) demonstrability.
- **Granular per-category control** — Reader can accept Analytics but reject Marketing, with the change taking effect immediately without page reload.
- **Re-consent prompt** — consent is re-solicited every 12 months or whenever a new cookie in a previously consented category is added.

## 11. Top 3 Objections
- **O1:** "Show me the actual cookies you set — I don't want a category description, I want names, providers, and retention periods."
- **O2:** "Where is the consent control? I want to change my preferences on this page, not hunt for a widget in the footer."
- **O3:** "How current is this list? Cookie pages are notoriously stale — when was the last audit?"

## 12. Proof Strategy
- The full per-cookie table on the page itself, populated dynamically from the consent management platform — not a hand-edited list.
- A "last scanned" date visible at the top of the cookie register, refreshed automatically after each quarterly scan.
- A short, dated changelog of cookie additions and removals over the last 12 months.
- The in-page consent UI rendered above the fold, so Reader A sees the control immediately.
- A link to the privacy policy and the sub-processor list, so Reader B can confirm consistency in one click.

## 13. The Lead Magnet
Optional and lighter than the other three pages. **"Brocode Cookie Audit Report"** — a 4-page PDF generated from the most recent automated scan, listing every cookie set on brocode.ai with its provider, category, purpose, retention, and the consent rate (proportion of EU/UK visitors who consent to each category). Headline figure: **"Audited quarterly. 0 undisclosed cookies in the last four scans."** Available without a gate — this is a transparency signal, not a sales magnet.

## 14. Primary CTA Wording
**"Manage your cookie preferences"** — primary action is the in-page toggle. Secondary CTA in the footer of the page: **"Download the latest cookie audit report (PDF)"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I have a question about the cookies on brocode.ai or about your consent management. Could someone from your privacy team get back to me?

## 16. Quote Form Fields
This page does not run a quote form in the traditional sense. The "form" on the page is the consent control itself, which captures:
1. **Strictly necessary cookies** (always on — non-toggleable, with a clear explanation)
2. **Functional cookies** (toggle on / off)
3. **Analytics cookies** (toggle on / off — list of providers visible)
4. **Marketing cookies** (toggle on / off — list of providers visible)
5. **Personalisation cookies** (toggle on / off — list of providers visible)
6. **Consent timestamp** (captured automatically, exportable on request)

A small secondary link below the toggles, "Contact our DPO about cookies," routes to the privacy policy's DPO section for any free-text query.

## 17. Hero Media Direction
The lightest hero of the four pages. **Centre column:** a clean, accessible mock of the in-page consent UI itself rendered at full fidelity — five toggle rows, each with the category name, a one-line plain-English description, the number of cookies in that category, and the toggle state. The hero is the control; there is no separate decorative artwork. **Above the consent UI:** a small status strip: "Last automated cookie scan: 14 May 2026 — 23 cookies registered — 0 undisclosed since last scan." **Below the consent UI:** two pill-shaped buttons, "Accept all" and "Reject all (except strictly necessary)", and a quiet text link "Save my current selection." No imagery of biscuits, jars, or pixel-art clichés. The feel is that of a product feature, not a legal page.

## 18. Section-by-Section Outline
1. **Hero & in-page consent UI** — the five-category toggle control with last-scan date and 23 cookies registered figure.
2. **What cookies are and why we use them** — a 90-second plain-English explainer; no legalese.
3. **Cookie categories explained** — five short cards, one per category (Strictly necessary, Functional, Analytics, Marketing, Personalisation), each with examples of what breaks if you turn the category off.
4. **The full cookie register** — sortable, filterable table: cookie name, provider domain, first or third party, category, purpose, retention. Populated from the CMP.
5. **Third-party providers and their privacy notices** — a list of every third-party domain that sets a cookie on brocode.ai (e.g., Google Analytics 4, LinkedIn Insight Tag, HubSpot, Cloudflare, Microsoft Clarity if used), each with a link to the provider's own privacy notice.
6. **How to manage cookies in your browser** — links to the major browsers' cookie controls for visitors who want a deeper level of control beyond the on-page consent UI.
7. **Do Not Track and Global Privacy Control** — Brocode's position on GPC signals (honoured as a reject-all for marketing and analytics by default).
8. **Changes to this policy and re-consent** — when consent is re-solicited, how new cookies are handled, and the changelog reference.
9. **Contact the DPO about cookies** — short link block routing to the privacy policy DPO section.
10. **Changelog** — last 12 months of additions and removals to the cookie register, dated.

## 19. Internal Linking Strategy
1. `/privacy-policy` — cross-link from sections 5, 7, and 9; cookies that process personal data are governed by the privacy policy and the DPO is the contact path for cookie queries.
2. `/security-compliance` — cross-link from section 5; the sub-processor list on the security page overlaps with cookie providers and procurement reviewers will pair the two.
3. `/terms-of-service` — cross-link from section 2; the ToS governs the underlying website usage of which cookies are a part.
4. `/contact` — secondary contact path for general queries.
5. `/about` — links from section 2 to the corporate context.

## 20. Differentiation Angle vs Competitors
- **vs vendor sites running a banner-only consent** — emphasise the in-page granular consent UI and the full per-cookie register, versus a banner that offers only "Accept all" with no real control.
- **vs sites with a generic IAB-template cookie page** — emphasise the live, scanner-populated cookie list with quarterly audit dates, versus a hand-edited list that goes stale within weeks of publish.
- **vs hyperscaler-bundled cookie consent** — emphasise that the page covers Brocode's own cookies (analytics, marketing, CRM) rather than only the underlying CDN's; many AI vendor sites hand-wave their marketing-stack cookies and only disclose the CDN.
- **vs offshore AI vendors with no cookie page at all** — emphasise the existence of a granular, audited cookie page as a baseline maturity signal for EU/UK procurement reviewers, where the absence of one is itself a finding.

---

## Production notes
- The cookie register must be populated dynamically from the CMP (OneTrust, Cookiebot, or equivalent). Hand-edited cookie lists are out of scope.
- The "last scanned" date and the "23 cookies registered" figure must be auto-populated from the CMP.
- The in-page consent UI must be accessible (WCAG 2.2 AA) — keyboard-navigable, screen-reader-labelled, and operable without JavaScript fallback explained.
- The page must honour GPC signals at the network level; the implementation must be documented in the security page's controls section.
- The cookie audit report (lead magnet, ungated) must be regenerated after every quarterly scan and the previous version archived.
