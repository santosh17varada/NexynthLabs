export type RequestProposalProjectTypeId =
  | "ai"
  | "web-app"
  | "mobile-app"
  | "cloud"
  | "integration"
  | "getpandit-partnership"
  | "other";

export type RequestProposalProjectTypeOption = {
  id: RequestProposalProjectTypeId;
  label: string;
};

export type RequestProposalBudgetId =
  | "unsure"
  | "under-5l"
  | "5l-15l"
  | "15l-50l"
  | "50l-plus"
  | "discuss";

export type RequestProposalTimelineId =
  | "asap"
  | "1-3-months"
  | "3-6-months"
  | "6-plus-months"
  | "flexible";
