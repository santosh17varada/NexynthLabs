# WhatsApp Business Guide — Nexynth Labs Website

**Version:** 1.0  
**Status:** Click-to-chat readiness on the corporate site. **No WhatsApp Business API provider is connected yet.**

This guide covers marketing click-to-chat on `nexynthlabs.com` and documents how to enable full provider integration later.

---

## 1. What is implemented today

| Feature | Status |
| --- | --- |
| `wa.me` click-to-chat on `/contact` and `/partners` | Ready |
| Config + env placeholders for number and provider | Ready |
| CTA click tracking (`source: whatsapp_cta`) | Ready |
| WhatsApp Business API message send/receive | **Not implemented** |
| Site-wide floating WhatsApp FAB | **Intentionally omitted** (UX) |

---

## 2. Configuration files

| Path | Purpose |
| --- | --- |
| `src/config/whatsapp.ts` | Env key names, CTA copy, lead marker constants |
| `src/lib/whatsapp/index.ts` | Resolve phone, build `wa.me` URL, visibility rules |
| `src/config/integrations.ts` | Integration registry slot `whatsapp-business` |
| `src/lib/integrations/messaging.ts` | API dispatch stub (`sendWhatsAppMessage`) |
| `src/components/whatsapp/WhatsAppCtaCard.tsx` | Inline CTA card |
| `src/components/whatsapp/WhatsAppCtaButton.tsx` | Client button + tracking beacon |
| `src/app/api/whatsapp-cta/route.ts` | Records `whatsapp_cta` leads |

---

## 3. Environment variables

Set in `.env.local` or hosting dashboard. **Never commit secrets.**

| Variable | Public | Purpose |
| --- | --- | --- |
| `INTEGRATIONS_WHATSAPP_PROVIDER` | No | `whatsapp-cloud-api` \| `twilio-whatsapp` \| `gupshup-whatsapp` |
| `NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE` | Yes | Business number for click-to-chat (E.164) |
| `WHATSAPP_BUSINESS_PHONE` | No | Server-side fallback for number resolution |
| `WHATSAPP_API_TOKEN` | No | Provider API token (future API adapter) |
| `WHATSAPP_API_KEY` | No | Optional alias for some BSPs |
| `WHATSAPP_PHONE_NUMBER_ID` | No | Meta Cloud API phone number ID |
| `NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED` | Yes | Set `false` to hide CTAs; default is visible |
| `INTEGRATIONS_WHATSAPP_BUSINESS_STATUS` | No | `disabled` \| `configured` \| `active` |

### Default behaviour (no env)

- Click-to-chat uses the marketing phone from `src/config/site-values.ts` (`+91 99514 29687`).
- CTAs show on Contact and Partners unless `NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED=false`.

---

## 4. Lead tracking (`whatsapp_cta`)

When a visitor clicks **Chat on WhatsApp**:

1. `POST /api/whatsapp-cta` records a lead with `source: whatsapp_cta`.
2. WhatsApp opens in a new tab via `wa.me`.
3. No visitor email is captured at click time (internal marker email on the lead row).

Admin leads table can filter by source when source column is added in phase 2.

---

## 5. UX decision — no floating button

A site-wide floating WhatsApp bubble is **not** enabled because it:

- Overlaps mobile CTAs and safe-area insets
- Duplicates Contact / Partners entry points
- Can feel intrusive on legal and blog pages

Inline cards on high-intent pages are preferred. Revisit only with explicit product approval.

---

## 6. Future provider integration checklist

1. Choose provider slug → set `INTEGRATIONS_WHATSAPP_PROVIDER`.
2. Add secrets: `WHATSAPP_API_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` (Cloud API).
3. Implement adapter in `src/lib/integrations/messaging.ts` → `sendWhatsAppMessage()`.
4. Set `INTEGRATIONS_WHATSAPP_BUSINESS_STATUS=active` only after webhook + template review.
5. Keep **transactional booking messages** on `getpandit.com` product stack.
6. Update Privacy Policy / Cookie Policy if webhooks store message metadata.

See also [Integrations Guide](./12-integrations-guide.md) and [Architecture Diagram 6](./10-architecture-diagrams.md#6-future-whatsapp-sms-and-payment-flow).

---

## 7. Verification

```bash
npm run lint
npm run build
```

Manual test:

1. Open `/contact` → click **Chat on WhatsApp** → WhatsApp opens with prefilled text.
2. Check `data/leads.json` for a new row with `"source": "whatsapp_cta"`.
3. Set `NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED=false` → CTAs hidden after redeploy.

---

## 8. Related documents

- [Environment Variables Guide](./06-environment-variables.md)
- [Integrations Guide](./12-integrations-guide.md)
- [Functional Specification](./01-functional-specification.md) — Contact & Partners
