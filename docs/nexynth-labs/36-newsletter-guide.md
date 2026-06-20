# Newsletter Signup — Nexynth Labs Website

**Component:** `NewsletterSignup`  
**Config:** `src/config/newsletter.ts`  
**API:** `POST /api/newsletter` (optional — mailto fallback on failure)  
**Last updated:** June 2026

---

## Purpose

Reusable newsletter subscription UI on **Home**, **Blog**, **Resources**, and **Footer**. Collects email (required) and name (optional) with client-side validation.

---

## Placements

| Location | Component | Variant |
| --- | --- | --- |
| `/` (Home) | `NewsletterSignupSection` | `section` |
| `/blog` | `NewsletterSignupSection` | `section` |
| `/resources` | `NewsletterSignupSection` | `section` |
| Site footer | `NewsletterSignup` | `footer` |

---

## Form fields

| Field | Required |
| --- | --- |
| Email | Yes |
| Name | No |

Privacy note links to `/privacy-policy`.

---

## Submission flow

| Layer | Status |
| --- | --- |
| `POST /api/newsletter` | Writes to lead CRM (`newsletter` source) |
| SMTP staff notification | Same as other leads — env-gated |
| **Fallback** | Mailto link on API/validation error |

---

## Email provider integration (TODO)

Not connected to a marketing ESP yet. Planned providers:

| Provider | Notes |
| --- | --- |
| **Mailchimp** | Audience + double opt-in |
| **Brevo (Sendinblue)** | Transactional + lists |
| **SendGrid** | Marketing contacts API |
| **ConvertKit** | Creator/newsletter focus |

### Implementation checklist

- [ ] Env vars: `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID` (or provider equivalent)
- [ ] `src/lib/integrations/newsletter.ts` — subscribe helper
- [ ] Call provider after `createLead` in `/api/newsletter`
- [ ] Double opt-in + unsubscribe URL in emails
- [ ] Cookie consent gate before loading provider scripts (see cookie policy)
- [ ] Sync unsubscribe webhooks back to CRM notes
- [ ] `newsletter_submit` analytics event (wired — GTM mapping in [Analytics Guide](./15-analytics-dashboard-guide.md))

---

## Components

| File | Role |
| --- | --- |
| `NewsletterSignup.tsx` | Client form — section or footer layout |
| `NewsletterSignupSection.tsx` | Bordered section wrapper with `Container` |

---

## Mobile layout

- Section: stacked fields on mobile; inline row `sm+` for email, name, button
- Footer: full-width stacked fields and submit button
- Min 44px touch targets on inputs and button

---

## Editing

1. Copy — `src/config/newsletter.ts`
2. Lead label — `src/config/leads-crm.ts` → `newsletter`
3. Run `npm run lint` and `npm run build`

---

## Related

- [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [Privacy Policy](/privacy-policy)
- [Cookie Policy](/cookie-policy)
