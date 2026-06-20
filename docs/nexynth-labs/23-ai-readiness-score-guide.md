# AI Readiness Score — Nexynth Labs Website

**Route:** `/ai-readiness-score`  
**API:** `POST /api/ai-readiness-score`  
**Config:** `src/config/ai-readiness-score.ts`  
**Last updated:** June 2026

---

## Purpose

Lead magnet: 10-question self-assessment with instant tier result (Beginner, Emerging, Ready, Advanced) and optional CRM capture.

---

## Scoring

| Tier | Score range (of 40) |
| --- | --- |
| Beginner | 10–16 |
| Emerging | 17–23 |
| Ready | 24–31 |
| Advanced | 32–40 |

Each question: 1–4 points. Logic in `src/lib/ai-readiness-score/score.ts`.

---

## Lead capture

| Field | Required |
| --- | --- |
| Name | Yes |
| Email | Yes |
| Phone | No |
| Company | No |

**Source:** `ai_readiness_score` (stored in `data/leads.json` via `createLead`).

**Interest type:** `AI Readiness: {Tier}`  
**Notes:** score summary  
**Message:** full question breakdown

---

## Backend behaviour

| Scenario | Behaviour |
| --- | --- |
| API + file storage OK | Lead saved; success message |
| Storage fails (503) | **Frontend still shows score**; warning banner |
| Invalid answers | 400; form error |

### Future TODO (when backend unavailable)

| Item | Notes |
| --- | --- |
| PostgreSQL lead backend | Required for serverless production — see Lead CRM guide |
| `localStorage` draft of answers | Optional offline resume |
| Email score PDF to submitter | After SMTP configured |
| Dedicated analytics event | `ai_readiness_score_submit` in planned events |
| Admin filter by AI readiness tier | Parse `notes` or structured field |

---

## Editing questions

1. Edit `aiReadinessQuestions` in `src/config/ai-readiness-score.ts`
2. Adjust `aiReadinessTierThresholds` if scale changes
3. Update tier copy in `aiReadinessTierDescriptions`
4. Run `npm run build`

---

## Navigation & SEO

- Footer knowledge links include **AI Readiness Score**
- SEO key: `aiReadinessScore`
- Sitemap: included

---

## Related documents

- [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [AI Showcase](/ai-showcase)
- [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md)
