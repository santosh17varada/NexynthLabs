# Deployment Guide — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026

---

## 1. Overview

The Nexynth Labs website is a **Next.js 16** application designed for modern hosting platforms with Node.js or serverless support. Public pages are static-friendly; API routes and admin auth require a server runtime.

**Production domain:** `https://nexynthlabs.com`  
**Product domain (external):** `https://getpandit.com` — not deployed from this repo.

---

## 2. Prerequisites

| Requirement | Version |
| --- | --- |
| Node.js | 20 LTS or newer |
| npm | 10+ |
| Git | Any recent version |

---

## 3. Local development

```bash
cd nexynthlabs-website
npm install
cp .env.example .env.local
# Edit .env.local — set ADMIN_SESSION_SECRET at minimum
npm run dev
```

| URL | Purpose |
| --- | --- |
| http://localhost:3000 | Public site |
| http://localhost:3000/admin/login | Admin CMS |

---

## 4. Pre-deploy checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` passes (~83 public static/SSG routes)
- [ ] `node scripts/phase3-qa-check.mjs` passes (against `npm run start`)
- [ ] `npm run qa:regression` passes — see [Final Regression QA](./45-final-regression-qa-report.md)
- [ ] `src/config/site-values.ts` → `domain` set to production URL
- [ ] `.env` / host secrets configured (see [Environment Variables Guide](./06-environment-variables.md))
- [ ] `ADMIN_PASSWORD` changed from default `changeme`
- [ ] `ADMIN_SESSION_SECRET` is a long random string (32+ chars)
- [ ] Legal pages reviewed by counsel ([legal.md](../legal.md))
- [ ] GetPandit external URLs verified in `src/config/products.ts`

---

## 5. Build commands

```bash
npm ci          # or npm install
npm run build
npm run start   # production server on port 3000
```

**Output:** Static pages, SSG blog routes, dynamic OG image routes, API route handlers.

---

## 6. Recommended hosting

| Platform | Fit | Notes |
| --- | --- | --- |
| **Vercel** | Excellent | Native Next.js; zero-config deploy from Git |
| **Netlify** | Good | Next.js runtime adapter required |
| **Cloudflare Pages** | Good | Next.js support via `@cloudflare/next-on-pages` or Workers |
| **Self-hosted Node** | Good | `npm run build && npm run start` behind reverse proxy |
| **Static export only** | Limited | API routes and admin will not work without adaptation |

### 6.1 Vercel (recommended)

1. Import Git repository
2. Framework preset: **Next.js**
3. Root directory: `nexynthlabs-website` (if monorepo) or repo root
4. Add environment variables in project settings
5. Deploy

**Build command:** `npm run build`  
**Output:** Managed by Vercel

### 6.2 Self-hosted (Docker-friendly pattern)

```bash
# On server
git pull
npm ci
npm run build
# Use pm2, systemd, or similar:
npm run start
```

Place **nginx** or **Caddy** in front for TLS:

```
server {
  listen 443 ssl;
  server_name nexynthlabs.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

---

## 7. Domain configuration

### 7.1 DNS records

| Host | Type | Value |
| --- | --- | --- |
| `@` (apex) | A or ALIAS | Hosting provider IP / target |
| `www` | CNAME | Hosting provider or apex |

### 7.2 Canonical host

Choose **one** canonical host and redirect the other:

- **Recommended:** `https://nexynthlabs.com` (apex) with `www` → apex redirect
- Update `domain` in `src/config/site-values.ts` to match

### 7.3 HTTPS

Enable TLS at the host or reverse proxy. Next.js does not terminate TLS directly in most deployments.

---

## 8. Environment variables

Set in the hosting dashboard or `.env.local` (never commit secrets).

| Variable | Required for prod | Purpose |
| --- | --- | --- |
| `ADMIN_PASSWORD` | Yes | Admin login password |
| `ADMIN_SESSION_SECRET` | Yes | Session cookie signing |
| `SMTP_*` | No (phase 2) | Lead email notifications |

Full reference: [Environment Variables Guide](./06-environment-variables.md).

---

## 9. Post-deploy verification

| Check | How |
| --- | --- |
| Home page loads | Visit `/` |
| Contact form | Submit test lead; verify in `/admin/leads` |
| GetPandit links | Click "Visit GetPandit" → `getpandit.com` |
| Sitemap | `https://nexynthlabs.com/sitemap.xml` |
| Robots | `https://nexynthlabs.com/robots.txt` |
| OG image | `https://nexynthlabs.com/opengraph-image` |
| Admin blocked from index | View source — `noindex` on `/admin` |
| Mobile layout | [Mobile QA Checklist](./09-mobile-qa-checklist.md) |

---

## 10. CI/CD pipeline (example)

GitHub Actions workflow sketch:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: nexynthlabs-website
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
          cache-dependency-path: nexynthlabs-website/package-lock.json
      - run: npm ci
      - run: npm run lint
      - run: npm run build
        env:
          ADMIN_PASSWORD: ci-test-password
          ADMIN_SESSION_SECRET: ci-test-secret-minimum-32-characters-long
```

Connect the hosting provider to auto-deploy on `main` merge after CI passes.

---

## 11. Data persistence (leads)

**Phase 1:** Leads are stored in `data/leads.json` on the server filesystem.

| Hosting model | Consideration |
| --- | --- |
| Single Node server | File persists across restarts |
| Serverless / ephemeral | **File may not persist** — migrate to database before production leads |
| Vercel serverless | Use Vercel Blob, or PostgreSQL (phase 2) |

> **Action required for serverless production:** Implement PostgreSQL lead storage (see [Future Roadmap](./08-future-roadmap.md)) before relying on lead capture in production on ephemeral filesystems.

---

## 12. Rollback

| Scenario | Action |
| --- | --- |
| **Bad deployment (Vercel)** | Dashboard → Deployments → Promote previous deployment to Production |
| **Bad deployment (Git)** | Revert commit on `main`; push; wait for CI/CD redeploy |
| **Bad deployment (self-hosted)** | Checkout previous tag/commit; `npm ci && npm run build`; restart process |
| **Broken env vars** | Restore previous values in host dashboard; redeploy |
| **Leads data corruption** | Restore `data/leads.json` from backup (file store only) |
| **Emergency** | CDN/host maintenance page or DNS rollback |

After any rollback, re-run [post-deploy verification](#9-post-deploy-verification).

**Full QA rollback matrix:** [Final QA Report — Rollback steps](./11-final-qa-report.md#13-rollback-steps)

---

## 13. Performance recommendations

- Enable CDN caching for `/_next/static/*`
- Compress assets at edge (Brotli/gzip — usually automatic on major hosts)
- Monitor Core Web Vitals after launch
- Add real images to `public/` as WebP/AVIF when brand assets are ready

---

## 14. GetPandit separation (deployment)

- **Do not** deploy GetPandit from this repository
- **Do not** configure reverse proxy from `nexynthlabs.com` to GetPandit APIs
- Corporate site only **links** to `getpandit.com`

---

## 15. Related documents

- [Final QA Report](./11-final-qa-report.md) — implemented/pending items, risks, rollback
- [Environment Variables Guide](./06-environment-variables.md)
- [SEO Guide](./07-seo-guide.md) — Search Console submission
- [Architecture Document](./03-architecture.md)
