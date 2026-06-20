export type JsonLdNode = Record<string, unknown>;

export type JsonLdDocument = {
  "@context": typeof import("@/lib/json-ld/constants").JSON_LD_CONTEXT;
  "@graph": JsonLdNode[];
};

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

export type FaqStructuredItem = {
  question: string;
  answer: string;
};
