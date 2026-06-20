import type { MetadataRoute } from "next";
import { blogPosts } from "@/config/blog";
import { getKnowledgeArticlePath, knowledgeArticles } from "@/config/knowledge";
import { getPublishedCaseStudies } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { siteContentRevision } from "@/config/site-values";

const staticContentLastModified = new Date(siteContentRevision);

const staticRoutes = [
  "",
  "/about",
  "/leadership",
  "/leadership/santosh-kumar-varada",
  "/leadership/swathi-varada",
  "/founder",
  "/vision",
  "/services",
  "/technology",
  "/engineering",
  "/ai",
  "/ai-showcase",
  "/innovation-lab",
  "/events",
  "/products",
  "/products/ecosystem",
  "/case-studies",
  "/client-success",
  "/testimonials",
  "/faq",
  "/media-kit",
  "/brand",
  "/developers",
  "/getpandit",
  "/careers",
  "/careers/culture",
  "/blog",
  "/resources",
  "/guides",
  "/ai-readiness-score",
  "/book-consultation",
  "/request-proposal",
  "/contact",
  "/partners",
  "/partners/portal",
  "/roadmap",
  "/status",
  "/security",
  "/trust",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = staticContentLastModified;

  const legalRoutes = new Set([
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
  ]);

  const pages = staticRoutes.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : legalRoutes.has(path) ? 0.4 : 0.8,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = getPublishedCaseStudies().map((study) => ({
    url: `${siteConfig.domain}/case-studies/${study.slug}`,
    lastModified: new Date(study.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const knowledgeRoutes = knowledgeArticles.map((article) => ({
    url: `${siteConfig.domain}${getKnowledgeArticlePath(article)}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts, ...caseStudyRoutes, ...knowledgeRoutes];
}
