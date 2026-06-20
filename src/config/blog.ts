import {
  getDomainHostname,
  getFlagshipProduct,
  getProductHostname,
  siteConfig,
} from "@/config/site";

const flagship = getFlagshipProduct();
const domainHost = getDomainHostname();
const productHost = getProductHostname(flagship);

export const blogPosts = [
  {
    slug: "introducing-nexynth-labs",
    title: `Introducing ${siteConfig.brandName}`,
    excerpt: `Why we started ${siteConfig.brandName} in ${siteConfig.address.city} and how we think about building technology with cultural context.`,
    publishedAt: "2025-06-01",
    author: siteConfig.copy.contentTeam,
    sections: [
      {
        heading: "Our mission",
        paragraphs: [
          `${siteConfig.companyName} was founded to build digital products that respect tradition while meeting modern expectations for speed, transparency, and trust.`,
          `Based in ${siteConfig.address.line2}, ${siteConfig.address.city}, we combine product discipline with deep empathy for the communities we serve.`,
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          `Our first product, ${flagship.name}, is live on its own domain. This corporate site shares our story, services, and ways to partner with us.`,
        ],
      },
    ],
  },
  {
    slug: "why-getpandit-is-separate",
    title: `Why ${flagship.name} Lives on Its Own Domain`,
    excerpt:
      "A note on keeping product flows independent from the corporate website for safer releases and clearer user journeys.",
    publishedAt: "2025-06-10",
    author: siteConfig.copy.contentTeam,
    sections: [
      {
        heading: "Separation by design",
        paragraphs: [
          `${flagship.name} operates at ${productHost} so booking, authentication, and product-specific features can evolve without touching the marketing site.`,
          `Visitors on ${domainHost} can learn about the company and follow a clear CTA to the product — nothing more, nothing less.`,
        ],
      },
    ],
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogPageCopy = {
  listTitle: `Insights from ${siteConfig.brandName}`,
};
