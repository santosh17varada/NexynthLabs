"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  aiReadinessPageCopy,
  aiReadinessQuestions,
  aiReadinessTierDescriptions,
  aiReadinessTierLabels,
} from "@/config/ai-readiness-score";
import {
  calculateAiReadinessScore,
} from "@/lib/ai-readiness-score/score";
import type { AiReadinessScoreResult } from "@/types/ai-readiness-score";

type FormState = "idle" | "submitting" | "done";

const emptyContact = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

export function AiReadinessScoreForm() {
  const pathname = usePathname();
  const [contact, setContact] = useState(emptyContact);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [saveWarning, setSaveWarning] = useState("");
  const [result, setResult] = useState<AiReadinessScoreResult | null>(null);

  const answeredCount = useMemo(
    () => aiReadinessQuestions.filter((q) => answers[q.id] !== undefined).length,
    [answers],
  );

  const inputClass =
    "w-full min-h-11 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20";

  function setAnswer(questionId: string, value: number) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSaveWarning("");

    const computed = calculateAiReadinessScore(answers);

    if (!computed) {
      setErrorMessage("Please answer all 10 questions before submitting.");
      return;
    }

    if (!contact.name.trim() || !contact.email.trim()) {
      setErrorMessage("Please provide your name and email.");
      return;
    }

    setState("submitting");
    setResult(computed);

    try {
      const response = await fetch("/api/ai-readiness-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          answers,
          sourcePage: pathname,
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        saved?: boolean;
        result?: AiReadinessScoreResult;
      };

      if (data.result) {
        setResult(data.result);
      }

      if (!response.ok || data.saved === false) {
        setSaveWarning(
          data.message ??
            aiReadinessPageCopy.backendNote,
        );
      }

      setState("done");
    } catch {
      setSaveWarning(aiReadinessPageCopy.backendNote);
      setState("done");
    }
  }

  if (state === "done" && result) {
    const tierCopy = aiReadinessTierDescriptions[result.tier];

    return (
      <Card className="border-electric-blue/30 bg-electric-blue/5 p-6 sm:p-8">
        <p className="text-sm font-medium text-muted">Your AI Readiness Score</p>
        <p className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          {aiReadinessTierLabels[result.tier]}
        </p>
        <p className="mt-2 text-sm text-muted">
          {result.totalScore} / {result.maxScore} points ({result.percentage}% of scale)
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">{tierCopy.summary}</p>
        <ul className="mt-6 space-y-2">
          {tierCopy.nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2.5 text-sm text-muted">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                aria-hidden="true"
              />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        {saveWarning && (
          <p className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-muted">
            {saveWarning}
          </p>
        )}
        {!saveWarning && (
          <p className="mt-6 text-sm text-muted">
            We received your details. Our team may follow up during business hours.
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/ai-showcase" variant="gradient">
            Explore AI Showcase
          </Button>
          <Button href="/contact?service=ai-solutions" variant="outline">
            Discuss your roadmap
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            onClick={() => {
              setContact(emptyContact);
              setAnswers({});
              setResult(null);
              setSaveWarning("");
              setErrorMessage("");
              setState("idle");
            }}
          >
            Retake assessment
          </button>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <div>
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          {aiReadinessPageCopy.questionsTitle}
        </h2>
        <p className="mt-2 text-sm text-muted sm:text-base">
          {aiReadinessPageCopy.questionsNote}{" "}
          <span className="font-medium text-foreground">
            {answeredCount} / {aiReadinessQuestions.length} answered
          </span>
        </p>
        <ol className="mt-8 space-y-8">
          {aiReadinessQuestions.map((question, index) => (
            <li key={question.id}>
              <fieldset>
                <legend className="text-base font-medium text-foreground sm:text-lg">
                  <span className="text-electric-blue">{index + 1}.</span> {question.prompt}
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {question.options.map((option) => {
                    const checked = answers[question.id] === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                          checked
                            ? "border-accent bg-electric-violet/10 text-foreground"
                            : "border-border text-muted hover:border-electric-blue/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={checked}
                          onChange={() => setAnswer(question.id, option.value)}
                          className="h-4 w-4 shrink-0 accent-accent"
                          required
                        />
                        <span>{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-t border-border/60 pt-10">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          {aiReadinessPageCopy.formTitle}
        </h2>
        <p className="mt-2 text-sm text-muted">{aiReadinessPageCopy.formNote}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ai-score-name" className="mb-2 block text-sm font-medium">
              Name *
            </label>
            <input
              id="ai-score-name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              value={contact.name}
              onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="ai-score-email" className="mb-2 block text-sm font-medium">
              Email *
            </label>
            <input
              id="ai-score-email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              value={contact.email}
              onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="ai-score-phone" className="mb-2 block text-sm font-medium">
              Phone
            </label>
            <input
              id="ai-score-phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              value={contact.phone}
              onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="ai-score-company" className="mb-2 block text-sm font-medium">
              Company
            </label>
            <input
              id="ai-score-company"
              type="text"
              autoComplete="organization"
              className={inputClass}
              value={contact.company}
              onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {errorMessage && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-foreground">
          {errorMessage}
        </p>
      )}

      <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto">
        {state === "submitting" ? "Calculating…" : aiReadinessPageCopy.submitLabel}
      </Button>
    </form>
  );
}
