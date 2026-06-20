export type AiReadinessTier = "beginner" | "emerging" | "ready" | "advanced";

export type AiReadinessQuestion = {
  id: string;
  prompt: string;
  options: readonly {
    value: number;
    label: string;
  }[];
};

export type AiReadinessScoreResult = {
  tier: AiReadinessTier;
  totalScore: number;
  maxScore: number;
  percentage: number;
};

export type AiReadinessSubmission = {
  name: string;
  email: string;
  phone: string;
  company: string;
  answers: Record<string, number>;
};
