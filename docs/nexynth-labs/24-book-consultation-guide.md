# Book Free Consultation — Nexynth Labs Website

**Route:** `/book-consultation`  
**API:** `POST /api/book-consultation`  
**Config:** `src/config/book-consultation.ts`  
**Last updated:** June 2026

---

## Purpose

Structured lead capture for discovery calls — topic, preferred date, and contact details — without live calendar booking.

---

## Form fields

| Field | Required |
| --- | --- |
| Name | Yes |
| Email | Yes |
| Phone | No |
| Company | No |
| Topic | Yes |
| Preferred date | No (indicative only) |
| Message | No |

### Topics

| ID | Label |
| --- | --- |
| `ai` | AI |
| `web-app` | Web App |
| `mobile-app` | Mobile App |
| `getpandit-partnership` | GetPandit Partnership |
| `integrations` | Payment/SMS/WhatsApp Integration |
| `other` | Other |

Pre-select topic via query: `/book-consultation?topic=ai`

---

## Lead capture

**Source:** `book_consultation` (stored in `data/leads.json` via `createLead`).

| CRM field | Value |
| --- | --- |
| `interestType` | `Consultation: {Topic label}` |
| `message` | User message + preferred date line |
| `notes` | Preferred date + manual scheduling note |

---

## Calendar integration (not implemented)

| Item | Status |
| --- | --- |
| Google Calendar API | **TODO** — embed availability, create events on confirm |
| Calendly embed | **TODO** — alternative zero-backend scheduling |
| Timezone selection | **TODO** — IST default for India-first clients |
| ICS / email invite | **TODO** — after SMTP + calendar provider |
| Admin “confirm slot” workflow | **TODO** — mark lead contacted with booked time |

Until integration ships, the team confirms slots manually by email or phone. The form shows a footer note and stores `notes` indicating manual scheduling.

### Recommended integration path

1. **Phase A — Calendly embed** (fastest): replace or supplement the date field with an embedded widget; still POST lead on submit for CRM parity.
2. **Phase B — Google Calendar**: service account + booking API; validate slots server-side; write event + attendee invite.
3. **Phase C — Admin**: filter `book_consultation` leads; status `contacted` when slot confirmed.

---

## CTAs

| Page | Placement |
| --- | --- |
| Home | Hero button + bottom CTA banner secondary |
| Services | Closing CTA banner primary |
| Technology | Hero button + closing CTA banner primary |
| Innovation Lab | Closing CTA banner primary (`?topic=ai`) |
| Contact | Sidebar card above enquiry form |
| AI Showcase | Hero, section CTAs, closing banner (additional) |

Footer knowledge links include **Book consultation**.

---

## Backend behaviour

| Scenario | Behaviour |
| --- | --- |
| API + file storage OK | Lead saved; success message |
| Storage fails (500) | Error message; user can retry |
| Invalid input | 400 with validation message |

---

## Editing

1. Update `consultationTopics` in `src/config/book-consultation.ts`
2. Adjust copy in `bookConsultationPageCopy`
3. Run `npm run build`

---

## Navigation & SEO

- SEO key: `bookConsultation`
- Sitemap: included
- Planned analytics event: `consultation_submit`
