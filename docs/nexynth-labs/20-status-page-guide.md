# Status Page — Nexynth Labs Website

**Route:** `/status`  
**Config:** `src/config/status-page.ts`  
**Last updated:** June 2026

---

## Purpose

Lightweight **config-maintained** service health page. It does **not** connect to uptime monitors, synthetic checks, or third-party status APIs in phase 3.

---

## Status values

| Status | Use when |
| --- | --- |
| **Operational** | Service is available as expected |
| **Degraded** | Partial outage or reduced performance |
| **Maintenance** | Planned or active maintenance window |
| **Planned** | Not yet live / integration placeholder |

Edit `serviceHealthComponents` in `src/config/status-page.ts`.

---

## Default components

| Component | Default status |
| --- | --- |
| Nexynth Website | Operational |
| GetPandit Website | Operational |
| API | Operational |
| Database | Planned |
| Email Service | Planned |
| WhatsApp Service | Planned |
| SMS Service | Planned |
| Payment Service | Planned |

---

## Manual review date

Optional `lastReviewedAt` in `statusPageCopy` — ISO date string shown only when set. Do not auto-generate from `new Date()` on the server (that would imply live checks).

---

## Future monitoring TODO

| Item | Priority | Notes |
| --- | --- | --- |
| Uptime probe for nexynthlabs.com (home, `/api/enquiry` health) | P1 | Vercel cron, Better Stack, or UptimeRobot |
| Separate probe for getpandit.com | P1 | Product domain — do not conflate with corporate deploy |
| `GET /api/status` JSON endpoint | P2 | Machine-readable mirror of config or live checks |
| Webhook to update config / KV on incident | P2 | Requires secure ops pipeline — not public write |
| Incident history / subscribe (RSS, email) | P3 | Statuspage.io, Instatus, or custom |
| Admin UI to flip statuses without deploy | P3 | After database CMS |
| Sentry / APM linkage for Degraded auto-flag | P3 | Optional; document false-positive handling |
| DLT / payment / SMS provider health dashboards | P3 | Link out — do not scrape vendor status without API |

**Env placeholders (future):** `STATUS_MONITORING_ENABLED`, `STATUS_WEBHOOK_URL`, `BETTERSTACK_HEARTBEAT_URL` — add to `.env.example` when implementing.

**Implementation order:** (1) external uptime on public URLs, (2) JSON API, (3) incident log, (4) optional automation.

---

## Components

| File | Role |
| --- | --- |
| `ServiceStatusBadge.tsx` | Status pill with colour dot |
| `ServiceStatusList.tsx` | Grouped service cards |

**Mobile:** Service cards stack vertically; status badge moves below description on narrow viewports (`flex-col` → `sm:flex-row`). Overall summary card is centered with readable counts.

---

## Navigation & SEO

- Main nav: **Status** → `/status`
- SEO key: `statusPage`
- Sitemap: included

---

## Related documents

- [Integrations Guide](./12-integrations-guide.md)
- [Deployment Guide](./05-deployment-guide.md)
- [Public Roadmap Guide](./19-public-roadmap-guide.md)
