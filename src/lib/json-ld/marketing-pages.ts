import { eventSections } from "@/config/events";
import { getFaqStructuredDataItems } from "@/config/faqs";
import { innovationLabSections } from "@/config/innovation-lab";
import {
  getFeaturedLeadershipProfiles,
  getLeadershipProfilePath,
} from "@/config/leadership";
import { getFlagshipProduct } from "@/config/products";
import { siteConfig } from "@/config/site";
import { getApprovedTestimonials } from "@/config/testimonials";
import type { LeadershipProfile } from "@/types/leadership";
import { buildStandardPageJsonLd } from "@/lib/json-ld/page-graph";
import type { JsonLdDocument } from "@/lib/json-ld/types";
import { absoluteUrl } from "@/lib/json-ld/urls";

function pageCrumb(path: string, name: string) {
  return [{ name, path }] as const;
}

export function buildAiCapabilityPageJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.aiCapability;
  const faq = getFaqStructuredDataItems(["services"]).filter((item) =>
    /ai/i.test(item.question),
  );

  return buildStandardPageJsonLd({
    path: "/ai",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/ai", "AI"),
    faq,
    service: {
      name: "AI Engineering",
      description: page.description,
    },
  });
}

export function buildPartnersPageJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.partners;

  return buildStandardPageJsonLd({
    path: "/partners",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/partners", "Partners"),
    faq: getFaqStructuredDataItems("partnerships"),
    product: getFlagshipProduct(),
  });
}

export function buildEventsPageJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.events;
  const items = eventSections.flatMap((section) =>
    section.items.map((item) => ({
      name: item.title,
      description: item.description,
      url: absoluteUrl(`/events#${section.id}`),
    })),
  );

  return buildStandardPageJsonLd({
    path: "/events",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/events", "Events"),
    itemList: {
      name: "Nexynth Labs events and webinars",
      listId: `${absoluteUrl("/events")}#events`,
      items,
    },
  });
}

export function buildTestimonialsPageJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.testimonials;
  const reviews = getApprovedTestimonials();

  return buildStandardPageJsonLd({
    path: "/testimonials",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/testimonials", "Testimonials"),
    reviews,
  });
}

export function buildInnovationLabPageJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.innovationLab;
  const items = innovationLabSections.flatMap((section) =>
    section.items.map((item) => ({
      name: item.title,
      description: item.description,
      url: absoluteUrl(`/innovation-lab#${section.id}`),
    })),
  );

  return buildStandardPageJsonLd({
    path: "/innovation-lab",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/innovation-lab", "Innovation Lab"),
    itemList: {
      name: "Nexynth Labs innovation lab items",
      listId: `${absoluteUrl("/innovation-lab")}#innovation-lab`,
      items,
    },
    product: getFlagshipProduct(),
  });
}

export function buildLeadershipIndexJsonLd(): JsonLdDocument {
  const page = siteConfig.seo.pages.leadership;

  return buildStandardPageJsonLd({
    path: "/leadership",
    title: page.title,
    description: page.description,
    breadcrumbs: pageCrumb("/leadership", "Leadership"),
    persons: getFeaturedLeadershipProfiles(),
  });
}

export function buildLeadershipProfileJsonLd(profile: LeadershipProfile): JsonLdDocument {
  const path = getLeadershipProfilePath(profile.slug);
  const title = profile.seoTitle ?? `${profile.name} — ${profile.title}`;
  const description = profile.seoDescription ?? profile.excerpt;

  return buildStandardPageJsonLd({
    path,
    title,
    description,
    breadcrumbs: [
      { name: "Leadership", path: "/leadership" },
      { name: profile.name, path },
    ],
    persons: [profile],
  });
}
