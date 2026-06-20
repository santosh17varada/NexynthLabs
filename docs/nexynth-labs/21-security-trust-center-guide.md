# Security & Trust Center — Nexynth Labs Website

**Routes:** `/security` · `/trust`  
**Config:** `src/config/security-trust.ts`  
**Last updated:** June 2026

---

## Purpose

Two complementary pages describe **security practices** and **trust/privacy direction** without false compliance claims. Content is config-driven and requires final legal and security professional review.

---

## Page split

| Route | Focus | Sections |
| --- | --- | --- |
| `/security` | Technical security | Secure hosting, SSL readiness, Payment security readiness, Access control |
| `/trust` | Data & compliance direction | Data protection, Privacy practices, Future compliance roadmap |

### All content sections (config IDs)

| Section | Route | Config `id` |
| --- | --- | --- |
| Data protection | `/trust` | `data-protection` |
| Secure hosting | `/security` | `secure-hosting` |
| SSL readiness | `/security` | `ssl-readiness` |
| Privacy practices | `/trust` | `privacy-practices` |
| Access control | `/security` | `access-control` |
| Payment security readiness | `/security` | `payment-security-readiness` |
| Compliance roadmap | `/trust` | `complianceRoadmapItems` (below fold) |

---

## Final review disclaimer

**Required before production reliance.** Security and trust copy is readiness language only — not a certification, audit, or legal opinion.

On-site notices (from `src/config/security-trust.ts`):

- **`securityReviewNotice`** — shown on `/security` and combined on `/trust`:
  > Security and trust content on this site describes current practices and readiness only. It is not a certification, audit report, or legal opinion. Final security and legal review by qualified professionals is required before production reliance or regulatory submission.

- **`LEGAL_REVIEW_NOTICE`** (from `src/config/legal.ts`) — appended on `/trust`:
  > These documents are provided for informational purposes only. Final legal review by qualified counsel is required before production reliance or regulatory submission.

### Release checklist

- [ ] Counsel reviews Privacy, Terms, Cookie, and Disclaimer
- [ ] Security lead reviews `/security` and `/trust` copy for accuracy
- [ ] No SOC 2, ISO 27001, PCI DSS, or DPDP **compliance** claims unless explicitly configured and approved
- [ ] Compliance roadmap statuses match actual project state
- [ ] Product separation (getpandit.com) remains clear in trust narratives

---

## Compliance claims — do not

- Do not state SOC 2, ISO 27001, PCI DSS certification, or DPDP compliance unless counsel confirms
- Use **readiness**, **practices**, **planned**, and **in review** language
- Keep `securityReviewNotice` and `LEGAL_REVIEW_NOTICE` visible on pages

---

## Future compliance roadmap

Configured in `complianceRoadmapItems` on `/trust`:

| Item | Default status |
| --- | --- |
| Final legal & privacy review | In review |
| Independent security assessment | Planned |
| India DPDP alignment review | Planned |
| Cookie consent & analytics governance | Planned |
| SOC 2 / ISO 27001 evaluation | Future |

---

## Editing

1. Open `src/config/security-trust.ts`
2. Update section `points`, roadmap items, or notices
3. Run `npm run build` and coordinate legal review for policy changes

---

## Navigation & SEO

- Footer column: **Security & trust** (`navigation.trust`)
- Footer bar: Security + Trust Center links alongside legal policies
- SEO keys: `securityCenter`, `trustCenter`
- Sitemap: both routes included

---

## Related documents

- [legal.md](../legal.md) — counsel review requirements
- [Privacy Policy](../src/config/legal.ts)
- [Status Page Guide](./20-status-page-guide.md)
- [Technology Excellence Guide](./18-technology-excellence-guide.md)
