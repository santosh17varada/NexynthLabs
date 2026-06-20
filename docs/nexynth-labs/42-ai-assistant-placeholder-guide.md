# Website AI Assistant Placeholder — Nexynth Labs Website

**Component:** `Ask Nexynth AI`  
**Config:** `src/config/ai-assistant.ts`  
**Last updated:** June 2026

---

## Purpose

Visual placeholder for a future on-site AI helper on the **corporate marketing site only**. No OpenAI, Groq, or other model API is called today. Visitors see **Coming soon** messaging and deep links to Services, Products, Careers, GetPandit, and Partnerships.

---

## UI surfaces

| Surface | Location | Behaviour |
| --- | --- | --- |
| **Floating widget** | All public pages (`(site)/layout.tsx`) | Bottom-right pill opens panel |
| **Inline section** | Home, `/ai-showcase` | Topic grid + disclaimers |

### Widget panel

- Coming soon badge
- Disabled textarea and Send button
- Use-case links (no chat)
- Contact + FAQ fallbacks
- Mobile: bottom sheet (`max-h 85dvh`), safe-area padding, backdrop dismiss, Escape to close

---

## Use cases (config)

| ID | Label | Route |
| --- | --- | --- |
| `services` | Services | `/services` |
| `products` | Products | `/products` |
| `careers` | Careers | `/careers` |
| `getpandit` | GetPandit | `/getpandit` |
| `partnerships` | Partnerships | `/partners` |

Edit `aiAssistantUseCases` in `src/config/ai-assistant.ts`.

---

## API status

`isAiAssistantApiConfigured()` returns `true` only when **all** of:

1. `AI_ASSISTANT_ENABLED=true`
2. Provider key set (`OPENAI_API_KEY` or `GROQ_API_KEY` per `AI_ASSISTANT_PROVIDER`)

The public UI remains **non-functional** until a server route (`POST /api/ai-assistant`) is implemented and wired to the component. Do not expose API keys to the browser.

---

## Future OpenAI / Groq integration (not built)

### Recommended architecture

```
Browser → POST /api/ai-assistant (server only)
       → rate limit + prompt guardrails
       → OpenAI Chat Completions OR Groq OpenAI-compatible API
       → streamed or JSON reply
       → optional lead capture on escalation
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `AI_ASSISTANT_ENABLED` | Master switch (`true` to allow server route) |
| `AI_ASSISTANT_PROVIDER` | `openai` (default) or `groq` |
| `OPENAI_API_KEY` | Server-only OpenAI key |
| `OPENAI_MODEL` | e.g. `gpt-4o-mini` |
| `GROQ_API_KEY` | Server-only Groq key |
| `GROQ_MODEL` | e.g. `llama-3.3-70b-versatile` |
| `AI_ASSISTANT_MAX_TOKENS` | Cap response size |
| `AI_ASSISTANT_RATE_LIMIT_PER_IP` | Abuse protection |

See `.env.example`.

### Provider notes

| Provider | Endpoint pattern | Notes |
| --- | --- | --- |
| **OpenAI** | `https://api.openai.com/v1/chat/completions` | Official SDK or fetch; store key server-side only |
| **Groq** | Groq OpenAI-compatible API | Drop-in for many OpenAI client libraries; faster inference for demos |

### Guardrails (required before go-live)

- System prompt scoped to Nexynth Labs public content only — no legal/medical advice
- Refuse credentials, internal URLs, and GetPandit product admin actions
- Human handoff links: `/contact`, `/book-consultation`, `/faq`
- Cookie consent + privacy policy update before logging prompts
- No PII in analytics events

### Implementation checklist

- [ ] `POST /api/ai-assistant` route with Zod validation
- [ ] Server reads `isAiAssistantApiConfigured()` — 503 when disabled
- [ ] RAG or static context from `src/config/*` (not live web crawl on v1)
- [ ] Stream responses to widget UI
- [ ] Replace disabled textarea when API live
- [ ] Status page + security review entries

---

## Components

| File | Export |
| --- | --- |
| `AiAssistantPlaceholder.tsx` | `AiAssistantWidget`, `AiAssistantSection` |

---

## Related

- [AI Showcase](/ai-showcase)
- [Innovation Lab](/innovation-lab)
- [AI Readiness Score](/ai-readiness-score)
- [Security & Trust Center](/trust)
