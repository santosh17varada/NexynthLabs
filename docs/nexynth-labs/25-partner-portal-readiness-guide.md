# Partner Portal Readiness — Nexynth Labs Website

**Route:** `/partners/portal`  
**Config:** `src/config/partner-portal.ts`  
**Enquiry API:** `POST /api/enquiry` (partner-form source)  
**Last updated:** June 2026

---

## Purpose

Readiness page for the future Partner Portal — benefits, onboarding process, and eligibility per partner type. **No login or self-service portal is implemented.** Applications use the existing partner enquiry form.

---

## Partner types

| ID | Label | Enquiry interest |
| --- | --- | --- |
| `temple` | Temple Partners | `temple-vendor-partner` |
| `service` | Service Partners | `getpandit-partnership` |
| `technology` | Technology Partners | `technology-partnership` |
| `vendor` | Vendors | `temple-vendor-partner` |
| `investor` | Investors | `investor-enquiry` |

Each type includes config-driven **Benefits**, **Process** (numbered steps), and **Eligibility** bullets, plus an **Apply** link to `#apply?interest={id}`.

---

## Page sections

1. **Hero** — readiness positioning; no public login
2. **Readiness banner** — explicit “enquiry only” notice
3. **Partner type nav** — jump links to each section
4. **Per-type blocks** — benefits, process, eligibility, apply CTA
5. **Apply form** — `LeadCaptureForm` with `mode="partner"` at `#apply`; pre-selects interest from `?interest=temple` via `getInitialPartnerInterest` in `src/config/contact.ts`
6. **Closing CTA** — links to `/partners` and `/book-consultation`

**Mobile:** Partner type nav wraps on small screens; benefits / process / eligibility stack in one column (`lg:grid-cols-3`). Apply section uses stacked layout until `lg` breakpoint.

---

## Not implemented (future)

| Item | Notes |
| --- | --- |
| Partner login / SSO | Separate product domain or admin-adjacent portal |
| Self-service onboarding | Document upload, KYC, profile wizard |
| Partner dashboard | Bookings, payouts, analytics |
| API keys for technology partners | Developer portal |
| Investor data room | Gated materials after NDA |

Until portal ships, all leads flow to `data/leads.json` with source `partner-form`.

---

## Editing

1. Update `partnerPortalTypes` in `src/config/partner-portal.ts`
2. Adjust copy in `partnerPortalPageCopy` and `partnerPortalReadinessNotice`
3. Extend `getInitialPartnerInterest` in `src/config/contact.ts` if new type IDs are added
4. Run `npm run build`

---

## Navigation & SEO

- Linked from `/partners` hero
- SEO key: `partnerPortal`
- Sitemap: `/partners/portal`

---

## Related

- [Partners page](/partners) — full opportunity grids
- [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [Book Consultation Guide](./24-book-consultation-guide.md)
