import type { Metadata } from "next";
import { jobOpenings } from "@/config/careers";
import { getPanditMarketingFaqs } from "@/config/getpandit-marketing";
import { getFlagshipProduct, productCatalog, type CatalogProduct } from "@/config/products";
import { homeProductItems } from "@/config/home-products";
import { getLeadershipProfilePath, getPrimaryFounder } from "@/config/leadership";
import type { KnowledgeArticle } from "@/types/knowledge";
import type { LeadershipProfile } from "@/types/leadership";
import { flagshipProductName } from "@/config/site-values";
import { siteConfig } from "@/config/site";
import {
  buildJsonLdDocument,
  buildJsonLdGraph,
  buildProductNode,
  buildStandardPageJsonLd,
} from "@/lib/json-ld";
import { buildPersonNode } from "@/lib/json-ld/nodes";
import { absoluteUrl } from "@/lib/json-ld/urls";
import { getDefaultOgImage } from "@/lib/json-ld/og";

export { absoluteUrl } from "@/lib/json-ld/urls";
export { getDefaultOgImage } from "@/lib/json-ld/og";
export {
  buildAiCapabilityPageJsonLd,
  buildEventsPageJsonLd,
  buildInnovationLabPageJsonLd,
  buildLeadershipIndexJsonLd,
  buildLeadershipProfileJsonLd,
  buildPartnersPageJsonLd,
  buildTestimonialsPageJsonLd,
} from "@/lib/json-ld/marketing-pages";

const { seo } = siteConfig;

export type PageSeoKey = keyof typeof siteConfig.seo.pages;

const PAGE_PATHS: Record<PageSeoKey, string> = {
  home: "/",
  about: "/about",
  founderStory: "/founder",
  companyLeadership: "/leadership",
  leadership: "/leadership",
  companyVision: "/vision",
  vision: "/vision",
  services: "/services",
  technologyExcellence: "/technology",
  engineeringExcellence: "/engineering",
  aiShowcase: "/ai-showcase",
  aiCapability: "/ai",
  products: "/products",
  productEcosystem: "/products/ecosystem",
  getpandit: "/getpandit",
  careers: "/careers",
  careersCulture: "/careers/culture",
  blog: "/blog",
  portfolio: "/case-studies",
  caseStudies: "/case-studies",
  clientSuccess: "/client-success",
  contact: "/contact",
  partners: "/partners",
  publicRoadmap: "/roadmap",
  statusPage: "/status",
  securityCenter: "/security",
  trustCenter: "/trust",
  knowledgeResources: "/resources",
  knowledgeGuides: "/guides",
  aiReadinessScore: "/ai-readiness-score",
  bookConsultation: "/book-consultation",
  requestProposal: "/request-proposal",
  partnerPortal: "/partners/portal",
  innovationLab: "/innovation-lab",
  events: "/events",
  testimonials: "/testimonials",
  faq: "/faq",
  mediaKit: "/media-kit",
  brandSystem: "/brand",
  developers: "/developers",
  privacyPolicy: "/privacy-policy",
  terms: "/terms",
  cookiePolicy: "/cookie-policy",
  disclaimer: "/disclaimer",
};

function getTwitterHandle(): string | undefined {
  const twitter = siteConfig.socialLinks.twitter?.trim();
  if (!twitter) return undefined;
  return twitter.startsWith("@") ? twitter : `@${twitter.replace(/^https?:\/\/(www\.)?(twitter|x)\.com\//i, "")}`;
}

function buildSocialMetadata(
  title: string,
  description: string,
  canonical: string,
  options?: {
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    ogImagePath?: string;
  },
): Pick<Metadata, "openGraph" | "twitter" | "alternates"> {
  const ogImage = getDefaultOgImage(options?.ogImagePath);
  const images = [ogImage];
  const twitterHandle = getTwitterHandle();

  return {
    alternates: {
      canonical,
    },
    openGraph: {
      type: options?.type ?? "website",
      locale: seo.locale,
      url: canonical,
      siteName: siteConfig.brandName,
      title,
      description,
      images,
      ...(options?.type === "article" && options.publishedTime
        ? { publishedTime: options.publishedTime }
        : {}),
      ...(options?.type === "article" && options.modifiedTime
        ? { modifiedTime: options.modifiedTime }
        : {}),
      ...(options?.type === "article" && options.authors
        ? { authors: options.authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  authors: [{ name: siteConfig.companyName, url: siteConfig.domain }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  applicationName: siteConfig.brandName,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...buildSocialMetadata(
    seo.defaultTitle,
    seo.defaultDescription,
    siteConfig.domain,
  ),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  options?: {
    path?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    noIndex?: boolean;
    ogImagePath?: string;
  },
): Metadata {
  const path = options?.path ?? "/";
  const canonical = absoluteUrl(path);
  const socialTitle =
    path === "/" ? seo.defaultTitle : `${title} | ${siteConfig.brandName}`;
  const documentTitle = path === "/" ? { absolute: seo.defaultTitle } : title;

  return {
    title: documentTitle,
    description,
    ...buildSocialMetadata(socialTitle, description, canonical, options),
    ...(options?.noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

export function createPageMetadataFromKey(pageKey: PageSeoKey): Metadata {
  const page = siteConfig.seo.pages[pageKey];
  const path = PAGE_PATHS[pageKey];

  return createPageMetadata(page.title, page.description, { path });
}

export function buildOrganizationJsonLd() {
  const logoUrl = absoluteUrl(seo.logoPath);
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);
  const founder = getPrimaryFounder();
  const founderId = `${absoluteUrl(getLeadershipProfilePath(founder.slug))}#person`;

  return {
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.companyName,
    legalName: siteConfig.companyName,
    alternateName: siteConfig.brandName,
    url: siteConfig.domain,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    description: seo.defaultDescription,
    email: siteConfig.email,
    telephone: `+91-${siteConfig.phone}`,
    founder: {
      "@type": "Person",
      "@id": founderId,
      name: founder.name,
      jobTitle: founder.title,
    },
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.address.city,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: siteConfig.address.country,
      },
    },
    knowsAbout: [
      "AI product engineering",
      "Cloud-native software",
      flagshipProductName,
      "Spiritual technology",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: `+91-${siteConfig.phone}`,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.brandName,
    alternateName: siteConfig.companyName,
    url: siteConfig.domain,
    description: seo.defaultDescription,
    inLanguage: seo.locale.replace("_", "-"),
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
  };
}

export function buildWebPageJsonLd(
  title: string,
  description: string,
  path: string,
) {
  const crumbName = path === "/" ? "Home" : title;

  return buildStandardPageJsonLd({
    path,
    title,
    description,
    breadcrumbs: [{ name: crumbName, path }],
  });
}

export function buildArticleJsonLd(post: {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  slug: string;
  imagePath?: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const image = post.imagePath ? absoluteUrl(post.imagePath) : getDefaultOgImage().url;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image,
    url,
  };
}

export function buildKnowledgeArticleJsonLd(
  article: Pick<KnowledgeArticle, "title" | "excerpt" | "publishedAt" | "slug" | "listingType">,
) {
  const basePath = article.listingType === "guide" ? "/guides" : "/resources";
  const url = absoluteUrl(`${basePath}/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: getDefaultOgImage().url,
    url,
    articleSection: article.listingType === "guide" ? "Guides" : "Resources",
  };
}

function buildCatalogProductJsonLd(product: CatalogProduct) {
  return buildProductNode(product);
}

export function buildProductsPageJsonLd() {
  const page = siteConfig.seo.pages.products;

  return buildStandardPageJsonLd({
    path: "/products",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "Products", path: "/products" }],
    extraNodes: [
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/products")}#catalog`,
        name: `${siteConfig.brandName} Products`,
        itemListElement: productCatalog.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: buildCatalogProductJsonLd(product),
        })),
      },
    ],
  });
}

export function buildServicesPageJsonLd() {
  const page = siteConfig.seo.pages.services;

  return buildStandardPageJsonLd({
    path: "/services",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "Services", path: "/services" }],
    service: {
      name: "Product Engineering Services",
      description: page.description,
    },
  });
}

export function buildAboutPageJsonLd() {
  const page = siteConfig.seo.pages.about;
  return buildWebPageJsonLd(page.title, page.description, "/about");
}

export function buildVisionPageJsonLd() {
  const page = siteConfig.seo.pages.vision;
  return buildWebPageJsonLd(page.title, page.description, "/vision");
}

export function buildCareersPageJsonLd() {
  const page = siteConfig.seo.pages.careers;

  const jobPostings = jobOpenings.map((job) => ({
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.companyName,
      sameAs: siteConfig.domain,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: siteConfig.address.country,
    },
    directApply: true,
    url: absoluteUrl("/careers"),
  }));

  return buildStandardPageJsonLd({
    path: "/careers",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "Careers", path: "/careers" }],
    extraNodes: jobPostings,
  });
}

export function buildFounderPageJsonLd() {
  const page = siteConfig.seo.pages.founderStory;
  return buildWebPageJsonLd(page.title, page.description, "/founder");
}

export function buildRoadmapPageJsonLd() {
  const page = siteConfig.seo.pages.publicRoadmap;
  return buildWebPageJsonLd(page.title, page.description, "/roadmap");
}

export function buildCaseStudiesPageJsonLd() {
  const page = siteConfig.seo.pages.caseStudies;
  return buildWebPageJsonLd(page.title, page.description, "/case-studies");
}

export function buildTechnologyPageJsonLd() {
  const page = siteConfig.seo.pages.technologyExcellence;
  return buildWebPageJsonLd(page.title, page.description, "/technology");
}

export function buildContactPageJsonLd() {
  const page = siteConfig.seo.pages.contact;
  return buildWebPageJsonLd(page.title, page.description, "/contact");
}

export function buildFaqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  const page = siteConfig.seo.pages.faq;

  return buildStandardPageJsonLd({
    path: "/faq",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "FAQ", path: "/faq" }],
    faq: items,
  });
}

export function buildCaseStudyJsonLd(study: {
  title: string;
  summary: string;
  projectName: string;
  customerName: string;
  industry: string;
  publishedAt: string;
  slug: string;
  images: readonly { src: string; alt: string }[];
}) {
  const url = absoluteUrl(`/case-studies/${study.slug}`);
  const image = study.images[0]?.src
    ? absoluteUrl(study.images[0].src)
    : getDefaultOgImage().url;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    datePublished: study.publishedAt,
    dateModified: study.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
    about: {
      "@type": "Organization",
      name: study.projectName,
    },
    articleSection: study.industry,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image,
    url,
  };
}

export function buildSiteJsonLdGraph() {
  return buildJsonLdGraph([buildOrganizationJsonLd(), buildWebSiteJsonLd()]);
}

export function buildHomePageJsonLd() {
  const homePage = siteConfig.seo.pages.home;
  const flagship = getFlagshipProduct();

  return buildStandardPageJsonLd({
    path: "/",
    title: seo.defaultTitle,
    description: homePage.description,
    breadcrumbs: [{ name: "Home", path: "/" }],
    product: flagship,
    extraNodes: [
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/")}#products`,
        name: "Nexynth Labs products and platforms",
        itemListElement: homeProductItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl(item.href),
        })),
      },
    ],
  });
}

export function buildGetPanditPageJsonLd() {
  const page = siteConfig.seo.pages.getpandit;
  const flagship = getFlagshipProduct();

  return buildStandardPageJsonLd({
    path: "/getpandit",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: flagshipProductName, path: "/getpandit" }],
    faq: getPanditMarketingFaqs,
    product: flagship,
  });
}

export function buildEngineeringPageJsonLd() {
  const page = siteConfig.seo.pages.engineeringExcellence;

  return buildStandardPageJsonLd({
    path: "/engineering",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "Engineering", path: "/engineering" }],
    service: {
      name: "Engineering Excellence",
      description: page.description,
    },
  });
}

export function buildBrandSystemPageJsonLd() {
  const page = siteConfig.seo.pages.brandSystem;

  return buildStandardPageJsonLd({
    path: "/brand",
    title: page.title,
    description: page.description,
    breadcrumbs: [{ name: "Brand System", path: "/brand" }],
    extraNodes: [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl("/brand")}#brand-guidelines`,
        name: `${siteConfig.brandName} Brand System`,
        description: page.description,
        url: absoluteUrl("/brand"),
        publisher: {
          "@id": `${siteConfig.domain}/#organization`,
        },
      },
    ],
  });
}

export function buildPersonJsonLd(profile: LeadershipProfile) {
  return buildJsonLdDocument(buildPersonNode(profile));
}
