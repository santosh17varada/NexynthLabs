# Lead CRM Lite — Nexynth Labs Website

**Version:** 1.0  
**Storage (phase 2):** File-based `data/leads.json`  
**Database backend:** Not implemented — documented below as TODO

---

## 1. Overview

Lead CRM Lite captures enquiries from public forms and WhatsApp CTAs, stores them locally, and provides a minimal admin workflow at `/admin/leads`. Authentication remains the existing phase-1 admin session — no new auth system.

| Capability | Phase 2 status |
| --- | --- |
| Public forms (contact, partner) | Done |
| WhatsApp CTA tracking | Done |
| File storage | Done |
| Admin lead list | Done |
| Lead detail (expand row) | Done (lite) |
| Status update | Done |
| Internal notes | Done |
| Export CSV | Done |
| PostgreSQL backend | **TODO** |
| Dedicated lead detail route | **TODO** (documented) |

---

## 2. Lead schema

| Field | Key | Set by | Notes |
| --- | --- | --- | --- |
| Name | `name` | Public form | Required |
| Email | `email` | Public form | Required (except WhatsApp CTA marker) |
| Phone | `phone` | Public form | Optional |
| Company | `company` | Public form | Optional |
| Interest Type | `interestType` | Public form / resolver | Service or partner slug label |
| Source Page | `sourcePage` | Client pathname or API | e.g. `/contact`, `/partners` |
| Message | `message` | Public form | Required for forms |
| Channel | `source` | API | `contact-form`, `partner-form`, `whatsapp_cta`, etc. |
| Status | `status` | Admin | See §3 |
| Notes | `notes` | Admin | Internal only |
| Created Date | `createdAt` | System | ISO 8601 |

Config: `src/config/leads-crm.ts`  
Types: `src/types/lead.ts`  
Legacy rows with `serviceInterest` or `in_progress` status are normalized on read.

---

## 3. Status workflow

| Value | Label |
| --- | --- |
| `new` | New |
| `contacted` | Contacted |
| `qualified` | Qualified |
| `not_fit` | Not Fit |
| `closed` | Closed |

Legacy `in_progress` maps to **Contacted** automatically.

---

## 4. Architecture

```
Public forms / WhatsApp CTA
        ↓
POST /api/enquiry  |  POST /api/whatsapp-cta
        ↓
src/lib/leads/store.ts → data/leads.json
        ↓
GET /api/admin/leads
PATCH /api/admin/leads/[id]  (status, notes)
GET /api/admin/leads/export  (CSV)
        ↓
/admin/leads (LeadsTable)
```

---

## 5. APIs

### Public

| Method | Path | Purpose |
| --- | --- | --- |
| POST | `/api/enquiry` | Contact & partner form submissions |
| POST | `/api/whatsapp-cta` | WhatsApp CTA click tracking |

### Admin (session required)

| Method | Path | Role | Purpose |
| --- | --- | --- | --- |
| GET | `/api/admin/leads` | read+ | List leads |
| GET | `/api/admin/leads/[id]` | read+ | Single lead (detail API) |
| PATCH | `/api/admin/leads/[id]` | write | Update `status` and/or `notes` |
| GET | `/api/admin/leads/export` | read+ | Download CSV |

---

## 6. Future admin dashboard (not overbuilt in phase 2)

### 6.1 Lead list (current: `LeadsTable`)

- [x] Sort by created date (newest first)
- [x] Mobile card layout + desktop table
- [x] Filter by status — **TODO phase 3**
- [x] Search by email/name — **TODO phase 3**

### 6.2 Lead detail (current: expandable row)

- [x] Full message + notes in expanded view
- [ ] Dedicated `/admin/leads/[id]` page — **TODO**
- [ ] Activity timeline (status changes) — **TODO**

### 6.3 Status update

- [x] Dropdown / quick actions (write roles)
- [ ] Bulk status update — **TODO**

### 6.4 Notes

- [x] Per-lead textarea (write roles)
- [ ] Markdown / @mentions — **not planned phase 2**

### 6.5 Export CSV

- [x] `GET /api/admin/leads/export`
- [ ] Scheduled exports / S3 — **TODO**

---

## 7. Backend TODO (when PostgreSQL is ready)

1. Add `DATABASE_URL` and ORM schema `cms_leads` matching §2 fields.
2. Implement `LeadRepository` with `file` | `database` switch in `src/config/leads-crm.ts`.
3. Migrate `data/leads.json` → database one-time script.
4. Keep `POST /api/enquiry` contract stable for frontend forms.
5. Add indexes on `status`, `createdAt`, `source`.
6. Serverless: **do not** rely on file storage in production multi-instance deploys.

Until then, **frontend forms remain fully functional**; leads persist to `data/leads.json` on single-instance hosts.

---

## 8. Configuration files

| Path | Purpose |
| --- | --- |
| `src/config/leads-crm.ts` | Status labels, field catalog, storage mode |
| `src/lib/leads/store.ts` | CRUD (file) |
| `src/lib/leads/normalize.ts` | Legacy migration |
| `src/lib/leads/export.ts` | CSV export |
| `src/components/admin/LeadsTable.tsx` | Admin UI |

---

## 9. Verification

```bash
npm run lint
npm run build
```

1. Submit `/contact` form → check `data/leads.json` for new row with `sourcePage: "/contact"`.
2. `/admin/leads` → change status, add notes, export CSV.
3. Click WhatsApp CTA → row with `source: whatsapp_cta`.

---

## 10. Related documents

- [Leads & contact form (legacy)](../leads.md)
- [Admin User Guide](./04-admin-user-guide.md)
- [Environment Variables](./06-environment-variables.md)
