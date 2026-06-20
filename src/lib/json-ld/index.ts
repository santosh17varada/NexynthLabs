export { JSON_LD_CONTEXT, organizationId, websiteId, webPageId, breadcrumbId, faqId } from "@/lib/json-ld/constants";
export { absoluteUrl } from "@/lib/json-ld/urls";
export { getDefaultOgImage } from "@/lib/json-ld/og";
export { buildJsonLdGraph, buildJsonLdDocument, stripJsonLdContext } from "@/lib/json-ld/graph";
export {
  buildOrganizationNode,
  buildWebSiteNode,
  buildWebPageNode,
  buildBreadcrumbNode,
  buildFaqNode,
  buildServiceNode,
  buildProductNode,
  buildPersonNode,
  buildReviewNode,
  buildItemListNode,
  buildFlagshipProductNode,
} from "@/lib/json-ld/nodes";
export { buildStandardPageJsonLd } from "@/lib/json-ld/page-graph";
export type {
  BreadcrumbCrumb,
  FaqStructuredItem,
  JsonLdDocument,
  JsonLdNode,
} from "@/lib/json-ld/types";
export type { StandardPageJsonLdOptions } from "@/lib/json-ld/page-graph";
export {
  buildAiCapabilityPageJsonLd,
  buildPartnersPageJsonLd,
  buildEventsPageJsonLd,
  buildTestimonialsPageJsonLd,
  buildInnovationLabPageJsonLd,
  buildLeadershipIndexJsonLd,
  buildLeadershipProfileJsonLd,
} from "@/lib/json-ld/marketing-pages";
