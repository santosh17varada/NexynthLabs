import { brandName, flagshipProductName } from "@/config/site-values";
import type { KnowledgeArticle, KnowledgeCategory } from "@/types/knowledge";

export const knowledgeCategoryLabels: Record<KnowledgeCategory, string> = {
  ai: "AI",
  "product-engineering": "Product Engineering",
  devops: "DevOps",
  "mobile-apps": "Mobile Apps",
  "digital-transformation": "Digital Transformation",
  "spiritual-technology": "Spiritual Technology",
} as const;

export const knowledgeCategories = Object.keys(
  knowledgeCategoryLabels,
) as KnowledgeCategory[];

export const resourcesPageCopy = {
  hero: {
    eyebrow: "Knowledge center",
    title: "Resources",
    description: `Download brochures and overview decks, or browse reference articles from ${brandName} — config-driven content with honest placeholder labels until PDFs are published.`,
  },
  articlesTitle: "Reference articles",
  articlesDescription: "Filter by topic or search titles — short reads on AI, engineering, DevOps, and spiritual technology.",
  empty: "No resources match your filters. Try another category or search term.",
} as const;

export const guidesPageCopy = {
  hero: {
    eyebrow: "Knowledge center",
    title: "Guides",
    description: `Step-by-step and checklist-style guides for teams building with ${brandName} patterns — honest, practical, and editable in config.`,
  },
  empty: "No guides match your filters. Try another category or search term.",
} as const;

/**
 * Knowledge articles — edit in config until CMS editors ship.
 * `listingType` determines /resources vs /guides URL prefix.
 */
export const knowledgeArticles: readonly KnowledgeArticle[] = [
  {
    id: "res-ai-overview",
    slug: "practical-ai-automation-overview",
    listingType: "resource",
    category: "ai",
    title: "Practical AI automation overview",
    excerpt:
      "How Nexynth Labs approaches AI and agentic workflows — outcome-first, human-in-the-loop, and without unused API spend.",
    publishedAt: "2026-06-01",
    readTimeMinutes: 5,
    sections: [
      {
        heading: "Outcome before models",
        paragraphs: [
          "Start with the workflow you want to improve — support triage, document extraction, or internal ops — then choose models and tools.",
          "Every AI initiative on client work should have measurable success criteria before production rollout.",
        ],
      },
      {
        heading: "Guardrails",
        paragraphs: [
          "Escalation to humans, audit logs, and eval datasets are part of architecture — not afterthoughts.",
          "See the AI Showcase for illustrative use cases; no live AI APIs run on this corporate marketing site.",
        ],
      },
    ],
  },
  {
    id: "res-product-config",
    slug: "config-driven-product-content",
    listingType: "resource",
    category: "product-engineering",
    title: "Config-driven product content",
    excerpt:
      "Why TypeScript config files power this corporate site until database CMS editors arrive — and how to add pages safely.",
    publishedAt: "2026-06-02",
    readTimeMinutes: 4,
    sections: [
      {
        heading: "Version-controlled content",
        paragraphs: [
          "Public pages read from src/config/* modules reviewed in pull requests — no hidden CMS database in phase 3.",
          "Product catalog, roadmap, and knowledge articles follow the same pattern for predictable releases.",
        ],
      },
    ],
  },
  {
    id: "res-devops-static",
    slug: "static-first-deployment",
    listingType: "resource",
    category: "devops",
    title: "Static-first deployment patterns",
    excerpt:
      "Maximise cacheable public routes, isolate admin/API dynamism, and keep secrets in host environment variables.",
    publishedAt: "2026-06-03",
    readTimeMinutes: 4,
    sections: [
      {
        heading: "Build and release",
        paragraphs: [
          "npm run lint && npm run build gate production deploys. Preview environments validate PRs before merge.",
          "File-based leads suit development; PostgreSQL migration is planned for serverless production hosts.",
        ],
      },
    ],
  },
  {
    id: "res-mobile-rn",
    slug: "react-native-readiness",
    listingType: "resource",
    category: "mobile-apps",
    title: "React Native readiness",
    excerpt:
      "Cross-platform mobile patterns aligned with web APIs — store release discipline without duplicating business logic.",
    publishedAt: "2026-06-04",
    readTimeMinutes: 3,
    sections: [
      {
        heading: "Shared models",
        paragraphs: [
          "TypeScript types and API contracts shared between Next.js web and React Native clients reduce drift.",
          "Mobile apps for GetPandit and ecosystem products remain on separate release trains from the corporate site.",
        ],
      },
    ],
  },
  {
    id: "res-digital-crm",
    slug: "enquiry-to-crm-lite",
    listingType: "resource",
    category: "digital-transformation",
    title: "From enquiry to CRM lite",
    excerpt:
      "How contact and partner forms feed a file-based leads inbox with status, notes, and CSV export — no enterprise CRM required on day one.",
    publishedAt: "2026-06-05",
    readTimeMinutes: 5,
    sections: [
      {
        heading: "Lead pipeline",
        paragraphs: [
          "POST /api/enquiry captures contact and partner submissions with source and sourcePage metadata.",
          "Admin users update status and notes; SMTP notifications remain planned.",
        ],
      },
    ],
  },
  {
    id: "res-spiritual-domains",
    slug: "spiritual-tech-domain-separation",
    listingType: "resource",
    category: "spiritual-technology",
    title: "Spiritual technology domain separation",
    excerpt: `Why ${flagshipProductName} runs on getpandit.com while ${brandName} stays on nexynthlabs.com — trust, SEO, and release safety.`,
    publishedAt: "2026-06-06",
    readTimeMinutes: 4,
    sections: [
      {
        heading: "Two domains, two speeds",
        paragraphs: [
          "Booking, payments, and messaging belong on the product domain. Corporate marketing can ship statically without coupling to product deploys.",
          "Families see clear boundaries between company story and live booking journeys.",
        ],
      },
    ],
  },
  {
    id: "guide-ai-guardrails",
    slug: "ai-agent-guardrails-checklist",
    listingType: "guide",
    category: "ai",
    title: "AI agent guardrails checklist",
    excerpt:
      "A pre-production checklist for agentic features — escalation, evals, logging, and cost controls.",
    publishedAt: "2026-06-08",
    readTimeMinutes: 6,
    sections: [
      {
        heading: "Before you ship",
        paragraphs: [
          "Define allowed tools and data sources; block unscoped file or network access.",
          "Write eval cases for happy path, refusal, and escalation scenarios.",
          "Set token and spend alerts; log prompts and outputs for support review where policy allows.",
        ],
      },
    ],
  },
  {
    id: "guide-product-labels",
    slug: "honest-product-readiness-labels",
    listingType: "guide",
    category: "product-engineering",
    title: "Honest product readiness labels",
    excerpt:
      "Use Live, In Progress, Planned, and Coming Soon consistently — on ecosystem and roadmap pages.",
    publishedAt: "2026-06-09",
    readTimeMinutes: 5,
    sections: [
      {
        heading: "Label rules",
        paragraphs: [
          "Live only when the product is publicly available on its stated domain.",
          "In Progress for active engineering; Planned for scoped but not started work; Coming Soon for early concepts.",
          "Never publish user counts or revenue on the corporate site without verified approval.",
        ],
      },
    ],
  },
  {
    id: "guide-devops-predeploy",
    slug: "pre-deploy-checklist",
    listingType: "guide",
    category: "devops",
    title: "Pre-deploy checklist",
    excerpt:
      "Corporate site go-live steps — lint, build, env secrets, legal review, and smoke tests.",
    publishedAt: "2026-06-10",
    readTimeMinutes: 7,
    sections: [
      {
        heading: "Engineering",
        paragraphs: [
          "npm run lint && npm run build pass on the release branch.",
          "Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET; never use .env.example defaults in production.",
          "Verify sitemap.xml, robots.txt, and key form submissions after deploy.",
        ],
      },
      {
        heading: "Legal and marketing",
        paragraphs: [
          "Counsel review of Privacy, Terms, Cookie, and Disclaimer before reliance.",
          "Do not enable analytics IDs until cookie policy and consent align.",
        ],
      },
    ],
  },
  {
    id: "guide-mobile-release",
    slug: "mobile-app-release-patterns",
    listingType: "guide",
    category: "mobile-apps",
    title: "Mobile app release patterns",
    excerpt:
      "Store submission, staged rollouts, and API compatibility for React Native product apps.",
    publishedAt: "2026-06-11",
    readTimeMinutes: 6,
    sections: [
      {
        heading: "Release train",
        paragraphs: [
          "Pin minimum API versions; feature-flag risky flows on the server when possible.",
          "Test on representative Android and iOS devices — not emulators alone.",
          "Keep corporate marketing site releases independent from app store review cycles.",
        ],
      },
    ],
  },
  {
    id: "guide-digital-partners",
    slug: "partner-onboarding-digital",
    listingType: "guide",
    category: "digital-transformation",
    title: "Digital partner onboarding",
    excerpt:
      "How partners submit interest via /partners, WhatsApp CTA, and tagged lead sources.",
    publishedAt: "2026-06-12",
    readTimeMinutes: 5,
    sections: [
      {
        heading: "Channels",
        paragraphs: [
          "Partner form posts with source partner-form and interest type from config dropdown.",
          "WhatsApp click-to-chat logs whatsapp_cta leads for follow-up during business hours.",
          "No public login — enquiries only.",
        ],
      },
    ],
  },
  {
    id: "guide-spiritual-trust",
    slug: "trust-signals-spiritual-booking",
    listingType: "guide",
    category: "spiritual-technology",
    title: "Trust signals for spiritual booking",
    excerpt:
      "Transparent pooja detail, pandit profiles, and honest readiness metrics — not vanity growth numbers.",
    publishedAt: "2026-06-13",
    readTimeMinutes: 6,
    sections: [
      {
        heading: "What families expect",
        paragraphs: [
          "Clear ritual context, language, and pricing before booking commitment.",
          "Corporate site publishes platform readiness; live booking metrics belong on the product domain when approved.",
          "Partner and temple models document integration-ready architecture without overclaiming live features.",
        ],
      },
    ],
  },
] as const;

export function getKnowledgeArticlesByType(
  listingType: KnowledgeArticle["listingType"],
): KnowledgeArticle[] {
  return knowledgeArticles.filter((article) => article.listingType === listingType);
}

export function getKnowledgeArticle(
  listingType: KnowledgeArticle["listingType"],
  slug: string,
): KnowledgeArticle | undefined {
  return knowledgeArticles.find(
    (article) => article.listingType === listingType && article.slug === slug,
  );
}

export function getKnowledgeArticlePath(article: KnowledgeArticle): string {
  const base = article.listingType === "resource" ? "/resources" : "/guides";
  return `${base}/${article.slug}`;
}
