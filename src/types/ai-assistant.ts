export type AiAssistantUseCaseId =
  | "services"
  | "products"
  | "careers"
  | "getpandit"
  | "partnerships";

export type AiAssistantUseCase = {
  id: AiAssistantUseCaseId;
  label: string;
  description: string;
  href: string;
};

export type AiAssistantProvider = "openai" | "groq";
