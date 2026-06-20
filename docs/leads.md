# Leads & contact form

## Public contact form

**Route:** `/contact`  
**Partner route:** `/partners`  
**API:** `POST /api/enquiry`  
**WhatsApp CTA API:** `POST /api/whatsapp-cta`

### Lead fields (CRM Lite)

| Field | Required |
| --- | --- |
| Name | Yes |
| Email | Yes |
| Phone | No |
| Company | No |
| Interest Type | No (dropdown) |
| Source Page | Auto (`pathname` from form) |
| Message | Yes |
| Channel (`source`) | Auto (`contact-form`, `partner-form`, `whatsapp_cta`) |
| Status | Admin (`new` default) |
| Notes | Admin |
| Created Date | Auto |

See **[Lead CRM Lite Guide](./nexynth-labs/14-lead-crm-lite-guide.md)** for full schema and future dashboard spec.

## Storage (phase 2 — file backend)

Leads are persisted to:

```
data/leads.json
```

Created automatically on first submission. This file is gitignored.

**Production TODO:** Migrate to PostgreSQL — see `docs/nexynth-labs/14-lead-crm-lite-guide.md` §7.

## Admin CRM Lite

**Route:** `/admin/leads`

| API | Purpose |
| --- | --- |
| `GET /api/admin/leads` | List leads |
| `GET /api/admin/leads/[id]` | Lead detail JSON |
| `PATCH /api/admin/leads/[id]` | Update status and/or notes |
| `GET /api/admin/leads/export` | Download CSV |

### Statuses

New · Contacted · Qualified · Not Fit · Closed

Roles with access:

| Role | Access |
| --- | --- |
| SUPER_ADMIN | Read & write |
| ADMIN | Read only |
| MARKETING_ADMIN | Read only |
| SALES_ADMIN | Read & write |

## Email notifications — TODO

Email is **not** sent yet. Leads are stored locally only.

### Configure SMTP (future)

Add to `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=noreply@nexynthlabs.com
LEADS_NOTIFY_EMAIL=nexynthlabs@gmail.com
```

Implementation stub: `src/lib/leads/email.ts`

## Query parameters

| Param | Effect on form |
| --- | --- |
| `?service=web-development` | Pre-selects service interest |
| `?intent=partner` | Pre-selects GetPandit partnership |
| `?interest=investor` on `/partners` | Pre-selects partner interest |
