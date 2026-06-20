# Homepage Story Flow Guide

**Audience:** Product, marketing, engineers  
**Page:** `src/app/(site)/page.tsx`  
**Orchestrator:** `src/components/home/HomeStoryFlow.tsx`  
**Copy:** `src/config/home.ts`, `src/config/home-network-burst.ts`

## Section order (HomeStoryFlow)

| # | Section | Component | Anchor id |
| --- | --- | --- | --- |
| 1 | Hero | `HomeHero` | — |
| 2 | Nexynth Platform Ecosystem | `HomeAiNetworkBurstSection` → `HomeEcosystemStorySection` | `ai-network` |
| 3 | Products | `HomeProductsSection` | — |
| 4 | AI Workflow | `HomeAiWorkflowSection` | — |
| 5 | Delivery journey | `HomeDeliveryJourneySection` | `delivery-journey` |
| 6+ | … | See `HomeStoryFlow.tsx` | — |

## Delivery journey (`#delivery-journey`)

**Config:** `src/config/home-delivery-journey.ts`  
**Visual:** `DeliveryJourneyVisual.tsx` (six-stage interactive timeline)

Replaces the former homepage cloud/request-path section. Storytelling focus:

**Discover → Design → Build → AI Integration → Launch → Scale**

Each stage exposes a business outcome on hover (desktop) or tap (mobile). Technical request-path architecture moved to `/engineering` (`EngineeringRequestPathSection`).

## Nexynth Platform Ecosystem (`#ai-network`)

**Config:** `src/config/home-network-burst.ts`  
**Visual:** `src/components/home/ai-network-burst/` (canvas + interactive nodes)  
**Storytelling:** `HomeEcosystemStorySection.tsx` (client scroll reveal)

### Narrative flow

1. **Intro (light)** — badge, headline, description above the graphic  
2. **Platform (dark card)** — centered interactive ecosystem map  
3. **Capabilities (dark cards)** — five one-line value cards below the graphic  

### Scroll reveal sequence

On enter viewport (respects `prefers-reduced-motion`):

1. Headline fades in  
2. Description slides up  
3. Ecosystem graphic container reveals  
4. Satellite nodes + connection lines animate in order: AI Agents → Mobile → Cloud → GetPandit → Enterprise  
5. **Nexynth Platform** activates last (full glow)  
6. Capability cards stagger in  

### Layout notes

- Reduced top padding (`pt-4` / `sm:pt-5` / `lg:pt-6`) vs standard `py-section` to tighten gap after hero CTAs  
- Graphic is centered (`max-w-4xl`) with hub at 50% horizontal anchor  
- Copy edits → `homeNetworkBurstCopy` and `homeEcosystemCapabilities` in `home-network-burst.ts`

## Related

- [48-home-hero-guide.md](./48-home-hero-guide.md)
- [47-header-navigation-guide.md](./47-header-navigation-guide.md)
