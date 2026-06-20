import {
  aiReadinessQuestions,
  aiReadinessTierThresholds,
} from "@/config/ai-readiness-score";
import type { AiReadinessScoreResult, AiReadinessTier } from "@/types/ai-readiness-score";

export function getAiReadinessMaxScore(): number {
  return aiReadinessQuestions.length * 4;
}

export function getAiReadinessMinScore(): number {
  return aiReadinessQuestions.length * 1;
}

export function resolveAiReadinessTier(totalScore: number): AiReadinessTier {
  const match = aiReadinessTierThresholds.find(
    (band) => totalScore >= band.minScore && totalScore < band.maxScore,
  );

  if (match) {
    return match.tier;
  }

  if (totalScore < getAiReadinessMinScore()) {
    return "beginner";
  }

  return "advanced";
}

export function calculateAiReadinessScore(
  answers: Record<string, number>,
): AiReadinessScoreResult | null {
  const questionIds = aiReadinessQuestions.map((q) => q.id);

  for (const id of questionIds) {
    const value = answers[id];
    if (value === undefined || value < 1 || value > 4) {
      return null;
    }
  }

  const totalScore = questionIds.reduce((sum, id) => sum + answers[id], 0);
  const maxScore = getAiReadinessMaxScore();
  const minScore = getAiReadinessMinScore();
  const tier = resolveAiReadinessTier(totalScore);

  return {
    tier,
    totalScore,
    maxScore,
    percentage: Math.round(
      ((totalScore - minScore) / (maxScore - minScore)) * 100,
    ),
  };
}

export function formatAiReadinessLeadMessage(
  result: AiReadinessScoreResult,
  answers: Record<string, number>,
): string {
  const lines = [
    `AI Readiness Score: ${result.tier} (${result.totalScore}/${result.maxScore}, ${result.percentage}%)`,
    "",
    "Question responses (1–4):",
    ...aiReadinessQuestions.map((q) => `- ${q.id} → ${answers[q.id]}`),
  ];
  return lines.join("\n");
}

export function formatAiReadinessLeadNotes(result: AiReadinessScoreResult): string {
  return `Tier: ${result.tier} | Score: ${result.totalScore}/${result.maxScore} (${result.percentage}%)`;
}
