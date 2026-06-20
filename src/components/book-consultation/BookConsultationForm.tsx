"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  bookConsultationPageCopy,
  getConsultationTopicOptions,
  getInitialConsultationTopic,
} from "@/config/book-consultation";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type FormState = "idle" | "submitting" | "success" | "error";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  topic: "",
  preferredDate: "",
  message: "",
};

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function BookConsultationFormFields() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const topicParam = searchParams.get("topic");

  const initialTopic = getInitialConsultationTopic(topicParam);

  const [form, setForm] = useState({
    ...emptyForm,
    topic: initialTopic,
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const topicOptions = useMemo(() => getConsultationTopicOptions(), []);
  const minDate = useMemo(() => todayIsoDate(), []);

  const inputClass =
    "w-full min-h-11 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20";

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourcePage: pathname,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit consultation request.");
      }

      setForm({
        ...emptyForm,
        topic: initialTopic,
      });
      setState("success");
      trackPlannedEvent("consultation_submit", {
        source_page: pathname,
        topic: form.topic || "unspecified",
      });
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="consult-name" className="mb-2 block text-sm font-medium text-foreground">
            Name *
          </label>
          <input
            id="consult-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="consult-email" className="mb-2 block text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            id="consult-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="consult-phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="consult-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="consult-company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="consult-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="consult-topic" className="mb-2 block text-sm font-medium text-foreground">
            Topic *
          </label>
          <select
            id="consult-topic"
            name="topic"
            required
            className={inputClass}
            value={form.topic}
            onChange={(e) => updateField("topic", e.target.value)}
          >
            {topicOptions.map((option) => (
              <option key={option.value || "default"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="consult-preferred-date"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Preferred date
          </label>
          <input
            id="consult-preferred-date"
            name="preferredDate"
            type="date"
            min={minDate}
            className={inputClass}
            value={form.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="consult-message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="consult-message"
          name="message"
          rows={5}
          className={`${inputClass} resize-y`}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Share context, goals, timeline, or questions for the call."
        />
      </div>

      {state === "success" && (
        <p
          className="rounded-xl border border-electric-blue/30 bg-electric-violet/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {bookConsultationPageCopy.successMessage}
        </p>
      )}

      {state === "error" && (
        <p
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending..." : bookConsultationPageCopy.submitLabel}
      </Button>
    </form>
  );
}

export function BookConsultationForm() {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading form...</p>}>
      <BookConsultationFormFields />
    </Suspense>
  );
}
