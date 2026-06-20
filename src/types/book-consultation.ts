export type ConsultationTopicId =
  | "ai"
  | "web-app"
  | "mobile-app"
  | "getpandit-partnership"
  | "integrations"
  | "other";

export type ConsultationTopicOption = {
  id: ConsultationTopicId;
  label: string;
};
