import type { CatalogProduct } from "@/config/products";
import type { Testimonial } from "@/types/testimonials";
import type { LeadershipProfile } from "@/types/leadership";
import { buildJsonLdGraph } from "@/lib/json-ld/graph";
import {
  buildBreadcrumbNode,
  buildFaqNode,
  buildItemListNode,
  buildPersonNode,
  buildProductNode,
  buildReviewNode,
  buildServiceNode,
  buildWebPageNode,
} from "@/lib/json-ld/nodes";
import type { BreadcrumbCrumb, FaqStructuredItem, JsonLdDocument, JsonLdNode } from "@/lib/json-ld/types";

export type StandardPageJsonLdOptions = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: readonly BreadcrumbCrumb[];
  faq?: readonly FaqStructuredItem[];
  service?: { name: string; description: string };
  product?: CatalogProduct;
  persons?: readonly LeadershipProfile[];
  reviews?: readonly Testimonial[];
  itemList?: {
    name: string;
    items: readonly { name: string; description?: string; url?: string }[];
    listId?: string;
  };
  extraNodes?: readonly JsonLdNode[];
};

export function buildStandardPageJsonLd(options: StandardPageJsonLdOptions): JsonLdDocument {
  const nodes: JsonLdNode[] = [
    buildBreadcrumbNode(options.path, options.breadcrumbs),
    buildWebPageNode({
      title: options.title,
      description: options.description,
      path: options.path,
    }),
  ];

  const faqNode = options.faq ? buildFaqNode(options.path, options.faq) : null;
  if (faqNode) nodes.push(faqNode);

  if (options.service) {
    nodes.push(
      buildServiceNode({
        path: options.path,
        name: options.service.name,
        description: options.service.description,
      }),
    );
  }

  if (options.product) {
    nodes.push(buildProductNode(options.product));
  }

  if (options.persons) {
    nodes.push(...options.persons.map((profile) => buildPersonNode(profile)));
  }

  if (options.reviews) {
    nodes.push(...options.reviews.map((testimonial) => buildReviewNode(testimonial)));
  }

  if (options.itemList) {
    const listNode = buildItemListNode({
      path: options.path,
      name: options.itemList.name,
      items: options.itemList.items,
      listId: options.itemList.listId,
    });
    if (listNode) nodes.push(listNode);
  }

  if (options.extraNodes) {
    nodes.push(...options.extraNodes);
  }

  return buildJsonLdGraph(nodes);
}
