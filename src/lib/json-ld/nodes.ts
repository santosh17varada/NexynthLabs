import type { CatalogProduct } from "@/config/products";
import { siteConfig } from "@/config/site";
import { flagshipProductName } from "@/config/site-values";
import { getLeadershipProfilePath } from "@/config/leadership";
import type { Testimonial } from "@/types/testimonials";
import type { LeadershipProfile } from "@/types/leadership";
import {
  breadcrumbId,
  faqId,
  organizationId,
  webPageId,
  websiteId,
} from "@/lib/json-ld/constants";
import type { BreadcrumbCrumb, FaqStructuredItem, JsonLdNode } from "@/lib/json-ld/types";
import { absoluteUrl } from "@/lib/json-ld/urls";
import { getDefaultOgImage } from "@/lib/json-ld/og";

const { seo } = siteConfig;

export function buildOrganizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.companyName,
    url: siteConfig.domain,
  };
}

export function buildWebSiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.brandName,
    url: siteConfig.domain,
    publisher: { "@id": organizationId },
  };
}

export function buildWebPageNode(options: {
  title: string;
  description: string;
  path: string;
  breadcrumbPath?: string;
}): JsonLdNode {
  const breadcrumbRef = breadcrumbId(options.breadcrumbPath ?? options.path);

  return {
    "@type": "WebPage",
    "@id": webPageId(options.path),
    name: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    publisher: { "@id": organizationId },
    inLanguage: seo.locale.replace("_", "-"),
    breadcrumb: { "@id": breadcrumbRef },
  };
}

export function buildBreadcrumbNode(
  path: string,
  crumbs: readonly BreadcrumbCrumb[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path),
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.brandName,
        item: absoluteUrl("/"),
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    ],
  };
}

export function buildFaqNode(
  path: string,
  items: readonly FaqStructuredItem[],
): JsonLdNode | null {
  if (items.length === 0) {
    return null;
  }

  return {
    "@type": "FAQPage",
    "@id": faqId(path),
    isPartOf: { "@id": webPageId(path) },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceNode(options: {
  path: string;
  name: string;
  description: string;
  serviceId?: string;
}): JsonLdNode {
  return {
    "@type": "Service",
    "@id": options.serviceId ?? `${absoluteUrl(options.path)}#service`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    provider: { "@id": organizationId },
    areaServed: "IN",
  };
}

export function buildProductNode(product: CatalogProduct): JsonLdNode {
  const productUrl = product.internalHref.startsWith("http")
    ? product.internalHref
    : absoluteUrl(product.internalHref);

  return {
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    url: productUrl,
    brand: { "@id": organizationId },
    ...(product.status === "live"
      ? {
          offers: {
            "@type": "Offer",
            url: product.bookingHref.startsWith("http")
              ? product.bookingHref
              : absoluteUrl(product.bookingHref),
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

export function buildPersonNode(profile: LeadershipProfile): JsonLdNode {
  const url = absoluteUrl(getLeadershipProfilePath(profile.slug));
  const sameAs = [profile.socialLinks?.linkedin, profile.socialLinks?.twitter].filter(
    Boolean,
  ) as string[];

  return {
    "@type": "Person",
    "@id": `${url}#person`,
    name: profile.name,
    jobTitle: profile.title,
    description: profile.excerpt,
    url,
    ...(profile.imagePath
      ? {
          image: {
            "@type": "ImageObject",
            url: absoluteUrl(profile.imagePath),
          },
        }
      : {}),
    worksFor: { "@id": organizationId },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildReviewNode(testimonial: Testimonial): JsonLdNode {
  return {
    "@type": "Review",
    "@id": `${absoluteUrl("/testimonials")}#review-${testimonial.id}`,
    reviewBody: testimonial.quote,
    author: {
      "@type": "Person",
      name: testimonial.name,
      jobTitle: testimonial.role,
      worksFor: {
        "@type": "Organization",
        name: testimonial.company,
      },
    },
    itemReviewed: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.companyName,
    },
  };
}

export function buildItemListNode(options: {
  path: string;
  name: string;
  items: readonly { name: string; description?: string; url?: string }[];
  listId?: string;
}): JsonLdNode | null {
  if (options.items.length === 0) {
    return null;
  }

  return {
    "@type": "ItemList",
    "@id": options.listId ?? `${absoluteUrl(options.path)}#item-list`,
    name: options.name,
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}

export function buildFlagshipProductNode(): JsonLdNode {
  return {
    "@type": "Product",
    "@id": `${absoluteUrl("/getpandit")}#product`,
    name: flagshipProductName,
    url: absoluteUrl("/getpandit"),
    brand: { "@id": organizationId },
    image: getDefaultOgImage().url,
  };
}
