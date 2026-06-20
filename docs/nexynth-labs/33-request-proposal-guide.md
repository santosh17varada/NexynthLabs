# Request Proposal (RFP) — Nexynth Labs Website

**Route:** `/request-proposal`  
**Legacy redirect:** `/rfp` → `/request-proposal`  
**Config:** `src/config/request-proposal.ts`  
**API:** `POST /api/request-proposal` (reuses lead CRM lite)  
**Last updated:** June 2026

---

## Purpose

Enterprise and project proposal intake without a public bid portal or login. Submissions flow into the same lead store as contact and consultation forms when the API is available.

---

## Form fields

| Field | Required | Config / API key |
| --- | --- | --- |
| Name | Yes | `name` |
| Email | Yes | `email` |
| Phone | No | `phone` |
| Company | No | `company` |
| Project type | Yes | `projectType` |
| Budget range | No | `budgetRange` |
| Timeline | No | `timeline` |
| Requirements | Yes | `requirements` → stored as `message` |

### Project types

AI · Web App · Mobile App · Cloud · Integration · GetPandit Partnership · Other

Prefill via `?projectType=ai` (aliases: `web`, `mobile`, `getpandit`, etc.).

---

## Backend behavior

| Layer | Status |
| --- | --- |
| `POST /api/request-proposal` | **Implemented** — writes to `data/leads.json` |
| Lead source | `request_proposal` |
| Interest type | `RFP: {project type label}` |
| Notes | Budget + timeline + TODO for file uploads |
| SMTP notification | Same as other leads — env-gated |

### Frontend fallback (no API)

If the API returns an error, the form shows a **mailto** link with prefilled subject/body (`buildRequestProposalMailto`). No data is lost when file storage is unavailable in a given deployment.

---

## TODO (documented — not implemented)

- [ ] RFP document / attachment upload (`multipart` or S3 presign)
- [ ] Dedicated bid portal with auth (explicitly out of scope for corporate v1)
- [ ] PostgreSQL lead migration — see [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [ ] Auto-acknowledgement email to submitter (SMTP)
- [ ] CRM webhook (HubSpot / Zoho) for RFP queue
- [ ] `REQUEST_PROPOSAL_API_ENABLED` env to force mailto-only mode (optional)

---

## Components

| File | Role |
| --- | --- |
| `RequestProposalForm.tsx` | Client form, validation, API submit, mailto fallback |
| `request-proposal/page.tsx` | Hero, form card, process sidebar |

---

## Mobile layout

- Single column form on mobile; name/email and phone/company in 2-col grid `sm+`
- Budget and timeline side-by-side `sm+`
- Full-width submit button on mobile
- Process steps stack below form on small screens (`lg` sidebar)

---

## Navigation & SEO

- Main nav: **Request proposal**
- Footer knowledge: **Request proposal**
- SEO key: `requestProposal`
- Sitemap: `/request-proposal`
- Analytics: `rfp_submit` (planned event)

---

## Editing

1. Project types, budget bands, copy — `src/config/request-proposal.ts`
2. Lead labels — `src/config/leads-crm.ts`
3. Run `npm run build`

---

## Related

- [Book Consultation Guide](./24-book-consultation-guide.md)
- [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [Contact / enquiry](../leads.md)
