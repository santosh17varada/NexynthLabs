# Environment Variables Guide — Nexynth Labs Website

**Version:** 1.0

All secrets must be set in `.env.local` (local) or the hosting provider's environment dashboard (production). **Never commit `.env.local` or real secrets to Git.**

Template file: `.env.example` at the repository root.

---

## 1. Quick start (local)

```bash
cp .env.example .env.local
```

Minimum for admin CMS locally:

```env
ADMIN_PASSWORD=changeme
ADMIN_SESSION_SECRET=replace-with-a-long-random-string-at-least-32-chars
```

Generate a secret (example):

```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 2. Variable reference

### 2.1 Admin authentication (required for CMS)

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `ADMIN_PASSWORD` | **Yes** (prod) | `changeme` in dev | Shared password for all `CMS_DEV_USERS` emails in phase 1 |
| `ADMIN_SESSION_SECRET` | **Yes** (prod) | None | HMAC secret for signing `nexynth_admin_session` cookie |

**Used in:** `src/lib/auth.ts`, `src/app/api/admin/login/route.ts`

**Security notes:**

- Rotate `ADMIN_SESSION_SECRET` if compromised (invalidates all sessions)
- Use a unique password per environment (staging ≠ production)
- Phase 2 will replace shared password with per-user hashes

#### Optional legacy fallbacks

| Variable | Purpose |
| --- | --- |
| `ADMIN_EMAIL` | Legacy single-admin email (if implemented in auth fallback) |
| `ADMIN_ROLE` | Legacy role override |

These are commented in `.env.example` and not primary in phase 1.

---

### 2.2 Lead email notifications (phase 2 — optional)

| Variable | Required | Example | Description |
| --- | --- | --- | --- |
| `SMTP_HOST` | For email | `smtp.resend.com` | SMTP server hostname |
| `SMTP_PORT` | For email | `587` | SMTP port (TLS) |
| `SMTP_USER` | For email | `resend` | SMTP username |
| `SMTP_PASSWORD` | For email | `re_...` | SMTP password / API key |
| `SMTP_FROM` | For email | `noreply@nexynthlabs.com` | From address |
| `LEADS_NOTIFY_EMAIL` | For email | `nexynthlabs@gmail.com` | Inbox for new lead alerts |

**Used in:** `src/lib/leads/email.ts` (stub — not active until implemented)

**Status:** Email is **not sent** today. Leads save to `data/leads.json` only.

---

### 2.3 Database & CMS (phase 2 — planned)

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string for CMS content and leads |
| `CMS_WEBHOOK_REBUILD_URL` | Deploy hook URL to rebuild site on publish |

Not used in phase 1. Documented for forward compatibility.

---

### 2.5 Third-party integrations (placeholders — not active)

All integration slots default to **disabled**. Configuration architecture lives in `src/config/integrations.ts`; resolution helpers in `src/lib/integrations/`.

**Full guide:** [12 — Integrations Guide](./12-integrations-guide.md)

#### Analytics (corporate site — phase 3)

| Variable | Public | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Yes | GA4 measurement ID |
| `GA_API_SECRET` | No | Optional Measurement Protocol secret |
| `NEXT_PUBLIC_GTM_CONTAINER_ID` | Yes | GTM container ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | Yes | Meta Pixel ID |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | Yes | LinkedIn Insight Tag partner ID |
| `NEXT_PUBLIC_ANALYTICS_DEBUG` | Yes | `true` for console event logging |
| `META_CONVERSIONS_API_TOKEN` | No | Optional Conversions API token |
| `INTEGRATIONS_GOOGLE_ANALYTICS_STATUS` | No | `disabled` \| `configured` \| `active` |
| `INTEGRATIONS_GOOGLE_TAG_MANAGER_STATUS` | No | Lifecycle override |
| `INTEGRATIONS_META_PIXEL_STATUS` | No | Lifecycle override |

**Status:** No tracking scripts are injected. Enable only after cookie policy review.

#### CRM (corporate site — phase 2)

| Variable | Description |
| --- | --- |
| `INTEGRATIONS_CRM_PROVIDER` | `hubspot` \| `salesforce` \| `zoho-crm` \| `pipedrive` \| `custom` |
| `CRM_API_BASE_URL` | API base for custom CRM |
| `CRM_API_KEY` | Server-side API key |
| `CRM_PIPELINE_ID` | Default pipeline / stage |
| `CRM_SYNC_ENABLED` | `true` to sync leads (when adapter exists) |
| `INTEGRATIONS_CRM_STATUS` | Lifecycle override |

**Used in:** `src/lib/integrations/crm.ts` (stub)

#### Messaging & payments (primarily GetPandit — phase 4)

| Variable | Scope |
| --- | --- |
| `INTEGRATIONS_WHATSAPP_PROVIDER`, `WHATSAPP_*`, `NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE`, `NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED` | WhatsApp Business |
| `INTEGRATIONS_SMS_PROVIDER`, `SMS_*` | SMS gateway |
| `INTEGRATIONS_PAYMENT_PROVIDER`, `PAYMENT_*`, `NEXT_PUBLIC_PAYMENT_KEY_ID` | Payment gateway |

**Used in:** `src/lib/integrations/messaging.ts`, `payments.ts` (stubs)

---

### 2.4 Site URL (optional)

| Variable | Purpose | Phase 1 alternative |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Override canonical domain per environment | Edit `domain` in `src/config/site-values.ts` |

Phase 1 uses `siteConfig.domain` from config files, not env. Consider env-based domain in phase 2 for staging previews.

---

## 3. Environment matrix

| Variable | Local dev | Staging | Production |
| --- | --- | --- | --- |
| `ADMIN_PASSWORD` | `changeme` OK | Unique strong password | Unique strong password |
| `ADMIN_SESSION_SECRET` | Any 32+ char string | Unique random | Unique random |
| `SMTP_*` | Optional / unset | Optional | Set when email enabled |
| `DATABASE_URL` | N/A (phase 2) | Staging DB | Production DB |

---

## 4. How variables are loaded

Next.js automatically loads:

1. `.env` — all environments
2. `.env.local` — all environments, **gitignored**
3. `.env.development` / `.env.production` — per `NODE_ENV`
4. `.env.development.local` / `.env.production.local` — per env, gitignored

**Precedence:** `.env.local` overrides `.env`.

Server-only variables (no `NEXT_PUBLIC_` prefix) are **not** exposed to the browser.

---

## 5. Hosting provider setup

### Vercel

1. Project → **Settings** → **Environment Variables**
2. Add each variable for Production, Preview, and/or Development
3. Redeploy after changes

### Netlify

Site → **Site configuration** → **Environment variables**

### Docker / VPS

Pass via `-e` flags, `docker-compose.yml` `environment:` block, or systemd `EnvironmentFile`.

---

## 6. Verification

After setting variables:

```bash
# Local
npm run dev
# Log in at /admin/login with super@nexynthlabs.com + ADMIN_PASSWORD

# Production build locally
ADMIN_PASSWORD=test ADMIN_SESSION_SECRET=test-secret-32-chars-minimum-length npm run build
```

---

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Admin login always fails | Wrong `ADMIN_PASSWORD` | Verify env in host dashboard; redeploy |
| Session drops immediately | Missing / short `ADMIN_SESSION_SECRET` | Set 32+ random characters |
| Env not picked up | Forgot redeploy | Redeploy after adding vars |
| Works locally, fails in prod | Vars not set on host | Add to production environment |

---

## 8. Security checklist

- [ ] `.env.local` in `.gitignore`
- [ ] No secrets in `src/config/` or committed files
- [ ] Production `ADMIN_PASSWORD` ≠ `changeme`
- [ ] `ADMIN_SESSION_SECRET` generated with cryptographic randomness
- [ ] SMTP credentials stored only in host secrets manager
- [ ] Limit who can view production env vars in hosting dashboard

---

## 9. Related documents

- [Admin User Guide](./04-admin-user-guide.md)
- [Deployment Guide](./05-deployment-guide.md)
- [Integrations Guide](./12-integrations-guide.md)
- [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md)
- [WhatsApp Business Guide](./13-whatsapp-business-guide.md)
