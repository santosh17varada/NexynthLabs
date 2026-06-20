import { JSON_LD_CONTEXT } from "@/lib/json-ld/constants";
import type { JsonLdDocument, JsonLdNode } from "@/lib/json-ld/types";

export function stripJsonLdContext<T extends Record<string, unknown>>(node: T): JsonLdNode {
  const rest = { ...node };
  delete rest["@context"];
  return rest;
}

export function buildJsonLdGraph(nodes: JsonLdNode[]): JsonLdDocument {
  return {
    "@context": JSON_LD_CONTEXT,
    "@graph": nodes.map((node) => stripJsonLdContext(node)),
  };
}

export function buildJsonLdDocument(node: JsonLdNode): JsonLdDocument {
  return buildJsonLdGraph([node]);
}
