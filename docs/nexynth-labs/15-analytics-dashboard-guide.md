# Analytics Dashboard Readiness — Nexynth Labs Website

**Version:** 1.1  
**Status:** Event plumbing + conditional scripts. **No tracking loads without public env IDs.**

---

## 1. Overview

The corporate site prepares for marketing analytics dashboards (GA4, GTM, Meta Pixel, LinkedIn Insight Tag) without hard-coding vendor IDs in source.

| Principle | Detail |
| --- | --- |
| **Env-gated scripts** | `AnalyticsScripts` renders snippets only when `NEXT_PUBLIC_*` IDs are set |
| **Safe no-op** | `trackPlannedEvent()` returns immediately when no provider IDs exist — no network calls |
| **No paid tools by default** | Zero third-party requests in default dev/prod without env |
| **GTM-first events** | Custom events push to `dataLayer` when GTM is configured |
| **Cookie consent** | Do not enable production IDs until policy and consent align |

---

## 2. Provider placeholders

| Provider | Public env variable | Integration slot |
| --- | --- | --- |
| Google Analytics (GA4) | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `google-analytics` |
| Google Tag Manager | `NEXT_PUBLIC_GTM_CONTAINER_ID` | `google-tag-manager` |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | `meta-pixel` |
| LinkedIn Insight Tag | `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | `linkedin-insight-tag` |

Optional: `NEXT_PUBLIC_ANALYTICS_DEBUG=true` logs `[analytics:no-op]` or `[analytics:track]` to the browser console.

Registry: `src/config/integrations.ts`  
Runtime config: `src/lib/analytics/config.ts`  
Env template: `.env.example`

---

## 3. Planned events (Prompt 21)

| Event | When fired | Params | Wired in |
| --- | --- | --- | --- |
| `contact_form_submit` | Contact form success | `source_page` | `LeadCaptureForm` (contact mode) |
| `rfp_submit` | RFP form success | `source_page` | `RequestProposalForm` |
| `partner_submit` | Partner form success | `source_page` | `LeadCaptureForm` (partner mode) |
| `getpandit_cta_click` | External getpandit.com CTA click | `cta_id`, `href` | `ProductCtaGroup` |
| `whatsapp_cta_click` | WhatsApp CTA click | `source_page`, `context` | `WhatsAppCtaButton` |
| `consultation_submit` | Consultation form success | `source_page`, `topic` | `BookConsultationForm` |
| `resource_download_click` | Resource card download / request click | `asset_id`, `available`, `action`, `href` | `ResourceDownloadCard` |

### Supplementary events

| Event | When fired |
| --- | --- |
| `portfolio_view` | `/portfolio` mount |
| `case_study_view` | `/case-studies/[slug]` mount |
| `newsletter_submit` | Newsletter signup success |

Catalog: `src/config/analytics.ts` → `plannedAnalyticsEvents`

---

## 4. Safe no-op utility

```typescript
import { trackPlannedEvent } from "@/lib/analytics/track-client";

trackPlannedEvent("contact_form_submit", { source_page: "/contact" });
```

Behaviour (`src/lib/analytics/track-client.ts`):

1. **No provider env IDs** → immediate return (optional `console.debug` in dev or when `NEXT_PUBLIC_ANALYTICS_DEBUG=true`)
2. **GTM configured** → `dataLayer.push({ event, ...params })`
3. **GA configured** → `gtag('event', ...)`
4. **Meta configured** → `fbq('trackCustom', ...)`
5. **LinkedIn configured** → `lintrk('track', ...)`

`AnalyticsScripts` in `(site)/layout.tsx` loads vendor snippets **only** when `hasAnyProvider` is true.

---

## 5. Source layout

```
src/
├── config/analytics.ts           # Event catalog + env key names
├── types/analytics.ts
├── lib/analytics/
│   ├── config.ts                 # Server: getPublicAnalyticsConfig()
│   ├── track-client.ts           # trackPlannedEvent() — client only
│   └── index.ts
└── components/analytics/
    ├── AnalyticsScripts.tsx      # Conditional vendor snippets
    └── AnalyticsPageView.tsx     # Page-view events
```

---

## 6. Enabling tracking (staging / production)

1. Complete cookie consent policy updates if required.
2. Set one or more public IDs in hosting env (see `.env.example`).
3. Prefer **GTM-only** when orchestrating all tags — avoid duplicate GA page views if both GTM and GA snippets load.
4. In GTM, create triggers for each planned event name (custom event = `event` in dataLayer).
5. Set `NEXT_PUBLIC_ANALYTICS_DEBUG=true` locally to verify payloads without vendor dashboards.

**Do not** set `INTEGRATIONS_*_STATUS=active` unless following the full integrations lifecycle in [Integrations Guide](./12-integrations-guide.md). Scripts load when **public IDs exist**, independent of lifecycle status.

---

## 7. Future analytics dashboard (not built)

| Screen | Status |
| --- | --- |
| Internal traffic overview | TODO — use GA4 / GTM reports |
| Conversion funnel (form → lead) | TODO — join analytics + CRM |
| Event volume by page | TODO — GTM / GA exploration |
| Admin in-app analytics | **Out of scope** |

---

## 8. QA verification

See [Mobile QA Checklist § Analytics](./09-mobile-qa-checklist.md#11-analytics-readiness) and:

```bash
npm run lint && npm run build
```

**Without env IDs:** Network tab shows no requests to `googletagmanager.com`, `facebook.net`, or `licdn.com`.

**With debug env:** Console shows `[analytics:no-op]` or `[analytics:track]` on form submit / CTA click.

---

## 9. Related documents

- [Integrations Guide](./12-integrations-guide.md)
- [Architecture Diagram 4 — Analytics flow](./10-architecture-diagrams.md#4-analytics-flow)
- [Environment Variables](./06-environment-variables.md)
- [SEO Guide](./07-seo-guide.md)
