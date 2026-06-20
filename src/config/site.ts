export type SiteAddress = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  full: string;
};

export type SocialLinks = {
  linkedin: string;
  twitter: string;
  instagram: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type PageSeo = {
  title: string;
  description: string;
};

import { flattenHeaderNavLinks } from "@/config/header-navigation";
import { productCatalog } from "@/config/products";
import { serviceCatalog } from "@/config/services";
import {
  address,
  brandLogoMarkPath,
  brandName,
  companyName,
  domain,
  email,
  flagshipProductName,
  phone,
  phoneDisplay,
  tagline,
} from "@/config/site-values";

export const siteConfig = {
  companyName,
  brandName,
  tagline,
  email,
  phone,
  phoneDisplay,
  address,
  domain,
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
  } satisfies SocialLinks,
  services: serviceCatalog,
  products: productCatalog,
  navigation: {
    /** Derived from grouped header nav — every former flat link remains reachable. */
    main: flattenHeaderNavLinks(),
    company: [
      { label: "About", href: "/about" },
      { label: "Founder story", href: "/founder" },
      { label: "Leadership", href: "/leadership" },
      { label: "Vision", href: "/vision" },
      { label: "Careers", href: "/careers" },
      { label: "Public roadmap", href: "/roadmap" },
    ],
    products: [
      { label: "Product Ecosystem", href: "/products/ecosystem" },
      { label: flagshipProductName, href: "/getpandit" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
    trust: [
      { label: "Security", href: "/security" },
      { label: "Trust Center", href: "/trust" },
    ],
    knowledge: [
      { label: "Resources", href: "/resources" },
      { label: "Guides", href: "/guides" },
      { label: "AI Readiness Score", href: "/ai-readiness-score" },
      { label: "Book consultation", href: "/book-consultation" },
      { label: "Request proposal", href: "/request-proposal" },
      { label: "Innovation Lab", href: "/innovation-lab" },
      { label: "Events", href: "/events" },
      { label: "FAQ", href: "/faq" },
      { label: "Media kit", href: "/media-kit" },
      { label: "Developers", href: "/developers" },
      { label: "Partner Portal", href: "/partners/portal" },
      { label: "Careers culture", href: "/careers/culture" },
    ],
  },
  seo: {
    defaultTitle: `${brandName} | AI-First Product Engineering`,
    titleTemplate: `%s | ${brandName}`,
    defaultDescription: `${brandName} builds AI-native products, cloud platforms, and enterprise integrations from ${address.city}. Explore ${flagshipProductName} and book a consultation.`,
    keywords: [
      brandName,
      companyName,
      flagshipProductName,
      `${address.city} technology company`,
      "AI-first product engineering",
      "spiritual technology",
      "product engineering India",
      "Hyderabad software company",
      "AI automation India",
      "agentic AI",
      "pandit booking platform",
    ],
    locale: "en_IN",
    ogImagePath: "/opengraph-image",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    logoPath: brandLogoMarkPath,
    pages: {
      home: {
        title: "AI-First Product Engineering",
        description: `${brandName} — AI-native products, cloud platforms, and enterprise integrations from ${address.city}. Explore ${flagshipProductName} and book a consultation.`,
      },
      about: {
        title: "About Nexynth Labs",
        description:
          "Nexynth Labs is an AI-native product company building platforms, automation systems, and digital products that help businesses launch, operate, and scale.",
      },
      founderStory: {
        title: "Founder Story",
        description: `Personal founder story from Santosh Kumar Varada — background, experience, why ${brandName} and ${flagshipProductName} exist, lessons learned, and future vision. Trust-first narrative from ${address.city}.`,
      },
      companyLeadership: {
        title: "Leadership",
        description: `${brandName} executive team — Santosh Kumar Varada, Founder & CEO, and Swathi Varada, Co-Founder & Director. Enterprise technology leadership and ${flagshipProductName} product vision.`,
      },
      leadership: {
        title: "Leadership",
        description: `${brandName} executive team — founders with 18+ years technology leadership, AI-driven product engineering, and ${flagshipProductName} as the flagship platform.`,
      },
      companyVision: {
        title: "Vision",
        description: `${brandName} mission and vision — practical AI, spiritual technology, platform thinking, and honest readiness communication from ${address.city}.`,
      },
      vision: {
        title: "Our Vision",
        description: `${brandName} vision — why we exist, the future of digital products, AI-driven platforms, marketplace innovation, ${flagshipProductName} direction, and long-term company roadmap from ${address.city}.`,
      },
      services: {
        title: "Engineering Services",
        description: `AI, product engineering, cloud platforms, mobile apps, and enterprise integrations from ${brandName} — scoped honestly with clear delivery pillars.`,
      },
      technologyExcellence: {
        title: "Technology Excellence",
        description: `${brandName} engineering capabilities — Next.js, NestJS, React Native, MongoDB, AWS, AI agents, WhatsApp and SMS APIs, payment gateways, DevOps, and security practices.`,
      },
      engineeringExcellence: {
        title: "Engineering Excellence",
        description: `${brandName} engineering — cloud-native architecture, backend systems, API design, marketplace patterns, mobile, security, scalability, observability, CI/CD, and infrastructure. Technical credibility without hype.`,
      },
      aiShowcase: {
        title: "AI Showcase",
        description: `Explore ${brandName} AI automation, agentic use cases, business process automation, customer support AI, web/mobile integrations, and future product ideas — practical AI without hype.`,
      },
      aiCapability: {
        title: "AI Engineering & Intelligent Systems",
        description: `${brandName} AI capabilities — strategy, agentic workflows, LLM platforms, retrieval systems, assistants, enterprise AI, and governance. AI-first product engineering from Hyderabad.`,
      },
      innovationLab: {
        title: "Innovation Lab",
        description: `${brandName} Innovation Lab — AI experiments, automation concepts, future product ideas, agentic AI research, ${flagshipProductName} evolution, and prototypes. Every item labeled Concept, Prototype, Planned, or Live.`,
      },
      events: {
        title: "Events & Webinars",
        description: `${brandName} events — upcoming meetups, webinars, product launches, AI sessions, and past events. Status labels: Upcoming, Planned, Completed. Enquiry-led registration until ticketing ships.`,
      },
      testimonials: {
        title: "Testimonials",
        description: `Approved customer quotes from ${brandName} partners and clients. Only testimonials with written permission are published — filter by services, product, partnership, AI, and engineering.`,
      },
      faq: {
        title: "FAQ",
        description: `Frequently asked questions about ${brandName} — services, products, ${flagshipProductName}, partnerships, careers, security, and contact. Searchable help center.`,
      },
      mediaKit: {
        title: "Media Kit",
        description: `${brandName} press kit — company profile, logos, brand colors, typography, boilerplate copy, contact details, and downloadable asset placeholders for journalists and partners.`,
      },
      brandSystem: {
        title: "Brand System",
        description: `${brandName} design system — logo guidelines, color and gradient tokens, typography, spacing, motion, component standards, and accessibility for marketing and product UI.`,
      },
      developers: {
        title: "Developers",
        description: `${brandName} API and developer ecosystem vision — coming-soon APIs, ${flagshipProductName} integrations, planned webhooks, and documentation roadmap. No live API keys on this site.`,
      },
      products: {
        title: "Products",
        description: `Explore ${brandName} products — ${flagshipProductName} live on getpandit.com, plus AI platforms, web apps, and an honest product ecosystem roadmap.`,
      },
      productEcosystem: {
        title: "Product Ecosystem",
        description: `Explore the ${brandName} product ecosystem — ${flagshipProductName} (live), AI agents, temple management, vendor marketplace, enterprise automation, and coming-soon platforms. Honest readiness labels only.`,
      },
      portfolio: {
        title: "Portfolio",
        description: `Products and client work from ${brandName} — engineering, integrations, and platforms we build and ship.`,
      },
      caseStudies: {
        title: "Case Studies",
        description: `Published delivery stories from ${brandName} — challenge, approach, architecture, execution, and honest outcomes including ${flagshipProductName}.`,
      },
      clientSuccess: {
        title: "Client Success Stories",
        description: `Anonymized client success stories from ${brandName} — problem, approach, solution, qualitative outcomes, and technologies. No fabricated metrics or client names.`,
      },
      getpandit: {
        title: `${flagshipProductName} — Online Pandit Booking Platform`,
        description: `${flagshipProductName} on getpandit.com — find pandits, book pujas, astrology consultations, and partner onboarding. India's flagship devotional booking platform by ${brandName}.`,
      },
      careers: {
        title: "Careers at Nexynth Labs",
        description: `Join ${brandName} in ${address.city} — culture, engineering principles, growth, benefits, hiring process, and open roles. Premium product team building ${flagshipProductName}. Email applications.`,
      },
      careersCulture: {
        title: "Culture",
        description: `Life at ${brandName} — engineering culture, innovation mindset, learning, and remote/hybrid readiness in ${address.city} and across India.`,
      },
      blog: {
        title: "Blog & Insights",
        description: `Product engineering insights, ${flagshipProductName} updates, and company news from ${brandName} — practical notes without hype.`,
      },
      contact: {
        title: "Contact Nexynth Labs",
        description: `Contact ${companyName} in ${address.city} — consultations, projects, partnerships, products, and ${flagshipProductName}. Multi-step enquiry form with qualification.`,
      },
      partners: {
        title: "Investors & Partners",
        description: `Partner or invest with ${brandName} — product opportunities, ${flagshipProductName} partnerships, temple and vendor models, and technology alliances. Submit an enquiry online.`,
      },
      partnerPortal: {
        title: "Partner Portal Readiness",
        description: `Partner Portal readiness for ${brandName} — benefits, process, and eligibility for temple, service, technology, vendor, and investor partners. Apply via enquiry; no public login yet.`,
      },
      publicRoadmap: {
        title: "Public Roadmap",
        description: `Honest ${brandName} roadmap — Now, Next, and Future milestones for ${flagshipProductName}, platform work, integrations, and AI — without invented dates.`,
      },
      statusPage: {
        title: "System Status",
        description: `Service health overview for ${brandName} — website, ${flagshipProductName}, API, database, email, WhatsApp, SMS, and payment placeholders. Config-maintained; not live monitoring.`,
      },
      securityCenter: {
        title: "Security",
        description: `${brandName} security practices — secure hosting, SSL readiness, payment security architecture, and access control. Readiness statements only; not a certification.`,
      },
      trustCenter: {
        title: "Trust Center",
        description: `${brandName} trust center — data protection, privacy practices, and compliance roadmap. Final legal and security review required before reliance.`,
      },
      knowledgeResources: {
        title: "Resources",
        description: `${brandName} resources — downloadable company brochure, services brochure, product deck, ${flagshipProductName} overview, architecture overview, and knowledge articles.`,
      },
      knowledgeGuides: {
        title: "Guides",
        description: `${brandName} knowledge center guides — practical checklists and how-tos for products, integrations, and trust-heavy domains.`,
      },
      aiReadinessScore: {
        title: "AI Readiness Score",
        description: `Free 10-question AI readiness assessment from ${brandName} — instant Beginner, Emerging, Ready, or Advanced tier with optional team follow-up.`,
      },
      bookConsultation: {
        title: "Book Free Consultation",
        description: `Request a free consultation with ${brandName} — AI, web and mobile apps, GetPandit partnerships, and payment/SMS/WhatsApp integrations.`,
      },
      requestProposal: {
        title: "Request Proposal",
        description: `Submit an RFP to ${brandName} — AI, web app, mobile, cloud, integration, or GetPandit partnership. Share budget range, timeline, and requirements.`,
      },
      privacyPolicy: {
        title: "Privacy Policy",
        description: `How ${companyName} collects, uses, stores, and protects personal information on ${new URL(domain).hostname} and related services.`,
      },
      terms: {
        title: "Terms & Conditions",
        description: `Terms governing use of the ${brandName} corporate website and services operated by ${companyName}.`,
      },
      cookiePolicy: {
        title: "Cookie Policy",
        description: `How ${brandName} uses cookies, analytics, and similar technologies on ${new URL(domain).hostname}.`,
      },
      disclaimer: {
        title: "Disclaimer",
        description: `Important disclaimers about information on ${new URL(domain).hostname} and ${companyName} products including ${flagshipProductName}.`,
      },
    },
  },
  copy: {
    contentTeam: `${brandName} Team`,
    registrationLine: `Registered in ${address.city}, ${address.state}, ${address.country}`,
    headquarters: `${address.city}, ${address.country}`,
    adminCmsLabel: `${brandName} CMS`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type Service = (typeof siteConfig.services)[number];

export type {
  CatalogService,
  ServiceCategoryId,
  ServiceCta,
} from "@/config/services";

export {
  getFeaturedServices,
  getServiceById,
  getServicesByCategory,
  serviceCatalog,
  serviceCategories,
  servicesPageCopy,
} from "@/config/services";

export type {
  CatalogProduct,
  Product,
  ProductCapability,
  ProductCta,
  ProductStatus,
} from "@/config/products";

export {
  getFlagshipProduct,
  getLiveProducts,
  getPrimaryCtaLabel,
  getProductBySlug,
  getProductHostname,
  productCatalog,
  productsPageCopy,
  getPanditPageCopy,
} from "@/config/products";

export function getDomainHostname(): string {
  return new URL(siteConfig.domain).hostname;
}

export function getTelLink(): string {
  return `tel:+91${siteConfig.phone}`;
}

export function getMailtoLink(subject?: string): string {
  const base = `mailto:${siteConfig.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export function getCareersMailtoLink(): string {
  return getMailtoLink(`Careers at ${siteConfig.brandName}`);
}

export function getApplicationMailtoLink(jobTitle: string): string {
  return getMailtoLink(`Application: ${jobTitle}`);
}
