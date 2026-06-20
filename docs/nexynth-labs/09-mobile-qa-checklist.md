# Mobile QA Checklist — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026  
**Applies to:** Public site at `nexynthlabs.com` (not GetPandit product app)

Use this checklist before each release. Test on real devices when possible; use browser DevTools for breakpoint sweeps.

---

## 1. Test breakpoints

| Width | Typical device | Priority |
| --- | --- | --- |
| **360px** | Small Android (Galaxy S series compact) | Required |
| **390px** | iPhone 12 / 13 / 14 | Required |
| **430px** | iPhone 14 Pro Max / large phones | Required |
| **768px** | iPad portrait / small tablet | Required |
| **1024px** | iPad landscape / small laptop | Required |
| **1280px+** | Desktop | Required |

**DevTools:** Chrome → Toggle device toolbar → set custom width or pick presets.

---

## 2. Global layout

| # | Check | Pass |
| --- | --- | --- |
| G-01 | No horizontal scroll at any breakpoint | ☐ |
| G-02 | Sticky header visible; content not hidden under header | ☐ |
| G-03 | Anchor links account for sticky header offset | ☐ |
| G-04 | Safe-area insets respected on notched devices (iOS) | ☐ |
| G-05 | Footer readable; address wraps without overflow | ☐ |
| G-06 | Legal footer links tappable (≥ 44px touch area) | ☐ |
| G-07 | Page loads in < 3s on 4G throttling (approximate) | ☐ |

---

## 3. Header & navigation

| # | Check | Pass |
| --- | --- | --- |
| H-01 | Below `lg`: hamburger visible; desktop nav hidden | ☐ |
| H-02 | Hamburger tap target ≥ 44×44px | ☐ |
| H-03 | Menu opens; shows all main nav items | ☐ |
| H-04 | Mobile menu includes GetPandit + Contact CTAs | ☐ |
| H-05 | Menu closes on link tap, backdrop tap, Escape, or route change | ☐ |
| H-06 | Body scroll locked while menu open | ☐ |
| H-07 | Brand name truncates gracefully on narrow screens | ☐ |
| H-08 | At `lg+`: full horizontal nav + header CTAs visible | ☐ |

---

## 4. Hero & typography

| # | Check | Pass |
| --- | --- | --- |
| T-01 | H1 readable at 360px (no clipped text) | ☐ |
| T-02 | Long eyebrow text wraps (e.g. company name on home) | ☐ |
| T-03 | Body text ≥ 16px on form inputs (no iOS zoom on focus) | ☐ |
| T-04 | Section headings scale appropriately sm → lg | ☐ |
| T-05 | Sufficient contrast on primary/accent buttons | ☐ |

**Pages to spot-check:** `/`, `/getpandit`, `/contact`, `/services`, `/portfolio`, `/case-studies/getpandit`, `/ai-showcase`, `/partners`

---

## 5. CTAs & buttons

| # | Check | Pass |
| --- | --- | --- |
| C-01 | Primary buttons ≥ 44px height | ☐ |
| C-02 | Stacked full-width CTAs below 768px | ☐ |
| C-03 | Home hero CTAs stack vertically on mobile | ☐ |
| C-04 | CtaBanner buttons full-width on mobile | ☐ |
| C-05 | GetPandit page: 4 CTAs usable at 360px (stacked/grid) | ☐ |
| C-06 | Service card CTAs full-width on mobile | ☐ |
| C-07 | Product card CTAs full-width on mobile | ☐ |
| C-08 | External GetPandit links open correctly | ☐ |

---

## 6. Cards & grids

| # | Check | Pass |
| --- | --- | --- |
| K-01 | Service cards: single column at mobile | ☐ |
| K-02 | Blog cards: readable excerpt; no overflow | ☐ |
| K-03 | Product catalog card: title scales (`text-2xl` base) | ☐ |
| K-04 | Job cards on `/careers`: stack cleanly | ☐ |
| K-05 | Card padding comfortable at 360px (`p-5`) | ☐ |

---

## 7. Contact form (`/contact`)

| # | Check | Pass |
| --- | --- | --- |
| F-01 | All fields usable at 360px width | ☐ |
| F-02 | Name/Email stack single column on mobile | ☐ |
| F-03 | Select dropdown opens and is readable | ☐ |
| F-04 | Textarea resizable; min height adequate | ☐ |
| F-05 | Submit button full-width on mobile | ☐ |
| F-06 | Success message visible after submit | ☐ |
| F-07 | Error validation messages readable | ☐ |
| F-08 | `?service=` URL prefill works on mobile | ☐ |
| F-09 | Contact details (email, phone, address) tappable | ☐ |
| F-10 | `tel:` and `mailto:` links work on device | ☐ |

---

## 8. Legal pages

| # | Check | Pass |
| --- | --- | --- |
| L-01 | Legal review notice banner visible | ☐ |
| L-02 | Section headings and paragraphs readable | ☐ |
| L-03 | Long email/address wraps in footer | ☐ |
| L-04 | All four legal pages checked: Privacy, Terms, Cookie, Disclaimer | ☐ |

---

## 9. Blog

| # | Check | Pass |
| --- | --- | --- |
| B-01 | Blog index cards stack on mobile | ☐ |
| B-02 | Article page readable line length | ☐ |
| B-03 | Published date and author visible | ☐ |

---

## 10. Admin (mobile smoke test)

| # | Check | Pass |
| --- | --- | --- |
| A-01 | Login form usable at 390px | ☐ |
| A-02 | Sidebar modules scroll horizontally on mobile | ☐ |
| A-03 | Module links ≥ 44px tap height | ☐ |
| A-04 | Leads table readable or scrollable | ☐ |
| A-05 | Logout button accessible | ☐ |

---

## 11. Performance & behaviour

| # | Check | Pass |
| --- | --- | --- |
| P-01 | No layout shift on hero load (CLS) | ☐ |
| P-02 | Images (when added) use appropriate sizes | ☐ |
| P-03 | `prefers-reduced-motion`: smooth scroll disabled | ☐ |
| P-04 | Fonts load without long FOIT | ☐ |
| P-05 | Back/forward navigation works | ☐ |

**Optional:** Run Lighthouse mobile audit in Chrome DevTools (target Performance ≥ 90).

---

## 12. Cross-browser matrix

Test at **390px** minimum on:

| Browser | Platform | Pass |
| --- | --- | --- |
| Safari | iOS | ☐ |
| Chrome | Android | ☐ |
| Chrome | Desktop (responsive mode) | ☐ |
| Firefox | Desktop (responsive mode) | ☐ |
| Edge | Desktop (responsive mode) | ☐ |

---

## 13. GetPandit boundary checks

| # | Check | Pass |
| --- | --- | --- |
| GP-01 | "Visit GetPandit" opens `getpandit.com` in new tab | ☐ |
| GP-02 | No GetPandit login UI embedded on corporate site | ☐ |
| GP-03 | Mobile GetPandit CTAs unchanged by corporate layout fixes | ☐ |

---

## 14. Release sign-off

| Role | Name | Date | Signature |
| --- | --- | --- | --- |
| QA | | | |
| Design | | | |
| Engineering | | | |

**Build verified:**

```bash
npm run lint
npm run build
```

**Deployment URL tested:** ___________________________

**Notes / defects:**

```
(Document issues found during QA)
```

---

## 15. Phase 2 pages (portfolio, AI, partners)

| # | Check | Pass |
| --- | --- | --- |
| P2-01 | `/portfolio` — cards stack; no horizontal scroll at 360px | ☐ |
| P2-02 | `/case-studies/getpandit` — long content readable; images scale | ☐ |
| P2-03 | `/ai-showcase` — section cards single column on mobile | ☐ |
| P2-04 | `/partners` — partner form + WhatsApp card usable at 390px | ☐ |
| P2-05 | GetPandit metrics grid readable on small screens | ☐ |
| P2-06 | Partner interest dropdown readable on iOS | ☐ |

---

## 16. Analytics readiness

**Default (no env IDs):** No third-party analytics network requests.

| # | Check | Pass |
| --- | --- | --- |
| A-01 | Without analytics env: no requests to GTM / GA / Meta / LinkedIn domains | ☐ |
| A-02 | With `NEXT_PUBLIC_ANALYTICS_DEBUG=true`: form submit logs `[analytics:no-op]` or `[analytics:track]` | ☐ |
| A-03 | Contact form success fires `contact_form_submit` when IDs configured | ☐ |
| A-04 | Partner form success fires `partner_submit` when IDs configured | ☐ |
| A-05 | External GetPandit CTA fires `getpandit_cta_click` | ☐ |
| A-06 | WhatsApp CTA fires `whatsapp_cta_click` | ☐ |
| A-07 | RFP submit fires `rfp_submit` when IDs configured | ☐ |
| A-08 | Consultation submit fires `consultation_submit` | ☐ |
| A-09 | Resource download card fires `resource_download_click` | ☐ |
| A-10 | Cookie policy reviewed before enabling production tracking IDs | ☐ |

See [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md).

---

## 17. Phase 3 pages (FAQ, media kit, developers, i18n, AI)

| # | Check | Pass |
| --- | --- | --- |
| P3-01 | `/faq` — search input usable; accordion taps at 360px | ☐ |
| P3-02 | `/media-kit` — asset cards stack; copy button tappable | ☐ |
| P3-03 | `/developers` — readiness badges readable; no horizontal scroll | ☐ |
| P3-04 | Language switcher in header — opens/closes; ≥ 44px tap target | ☐ |
| P3-05 | Locale readiness banner dismissible on mobile | ☐ |
| P3-06 | AI assistant floating button — opens panel; does not cover CTAs | ☐ |
| P3-07 | AI panel — disabled input; topic links navigate correctly | ☐ |
| P3-08 | `/events`, `/testimonials`, `/client-success` — cards single column | ☐ |
| P3-09 | `/request-proposal`, `/book-consultation` — forms usable on iOS | ☐ |
| P3-10 | `/ai-readiness-score` — question flow scrollable; submit CTA visible | ☐ |

---

## 18. Related documents

- [Functional Specification](./01-functional-specification.md) — mobile NFRs
- [Deployment Guide](./05-deployment-guide.md) — post-deploy verification
- [Architecture Document](./03-architecture.md) — mobile CSS utilities
