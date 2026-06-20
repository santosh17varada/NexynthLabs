"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  buildRequestProposalMailto,
  getInitialRequestProposalProjectType,
  getRequestProposalBudgetOptions,
  getRequestProposalProjectTypeOptions,
  getRequestProposalTimelineOptions,
  requestProposalPageCopy,
} from "@/config/request-proposal";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type FormState = "idle" | "submitting" | "success" | "error";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  requirements: "",
};

function RequestProposalFormFields() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const projectTypeParam = searchParams.get("projectType");

  const initialProjectType = getInitialRequestProposalProjectType(projectTypeParam);

  const [form, setForm] = useState({
    ...emptyForm,
    projectType: initialProjectType,
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypeOptions = useMemo(() => getRequestProposalProjectTypeOptions(), []);
  const budgetOptions = useMemo(() => getRequestProposalBudgetOptions(), []);
  const timelineOptions = useMemo(() => getRequestProposalTimelineOptions(), []);

  const mailtoFallback = useMemo(
    () =>
      buildRequestProposalMailto({
        name: form.name || "[Your name]",
        email: form.email || "[Your email]",
        phone: form.phone,
        company: form.company,
        projectType: form.projectType || "other",
        budgetRange: form.budgetRange,
        timeline: form.timeline,
        requirements: form.requirements || "[Your requirements]",
      }),
    [form],
  );

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
      const response = await fetch("/api/request-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourcePage: pathname,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit proposal request.");
      }

      setForm({
        ...emptyForm,
        projectType: initialProjectType,
      });
      setState("success");
      trackPlannedEvent("rfp_submit", {
        source_page: pathname,
        project_type: form.projectType || "unspecified",
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
          <label htmlFor="rfp-name" className="mb-2 block text-sm font-medium text-foreground">
            Name *
          </label>
          <input
            id="rfp-name"
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
          <label htmlFor="rfp-email" className="mb-2 block text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            id="rfp-email"
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
          <label htmlFor="rfp-phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="rfp-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rfp-company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="rfp-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rfp-project-type" className="mb-2 block text-sm font-medium text-foreground">
          Project type *
        </label>
        <select
          id="rfp-project-type"
          name="projectType"
          required
          className={inputClass}
          value={form.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
        >
          {projectTypeOptions.map((option) => (
            <option key={option.value || "default"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rfp-budget" className="mb-2 block text-sm font-medium text-foreground">
            Budget range
          </label>
          <select
            id="rfp-budget"
            name="budgetRange"
            className={inputClass}
            value={form.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
          >
            {budgetOptions.map((option) => (
              <option key={option.value || "default"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rfp-timeline" className="mb-2 block text-sm font-medium text-foreground">
            Timeline
          </label>
          <select
            id="rfp-timeline"
            name="timeline"
            className={inputClass}
            value={form.timeline}
            onChange={(e) => updateField("timeline", e.target.value)}
          >
            {timelineOptions.map((option) => (
              <option key={option.value || "default"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="rfp-requirements"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Requirements *
        </label>
        <textarea
          id="rfp-requirements"
          name="requirements"
          rows={6}
          required
          className={`${inputClass} resize-y`}
          value={form.requirements}
          onChange={(e) => updateField("requirements", e.target.value)}
          placeholder="Describe goals, users, integrations, compliance needs, and success criteria."
        />
      </div>

      {state === "success" && (
        <p
          className="rounded-xl border border-electric-blue/30 bg-electric-violet/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {requestProposalPageCopy.successMessage}
        </p>
      )}

      {state === "error" && (
        <div
          className="space-y-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <p>{errorMessage}</p>
          <p>{requestProposalPageCopy.fallbackNote}</p>
          <a
            href={mailtoFallback}
            className="inline-flex min-h-11 items-center font-semibold text-red-900 underline"
          >
            Email proposal request instead →
          </a>
        </div>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending..." : requestProposalPageCopy.submitLabel}
      </Button>
    </form>
  );
}

export function RequestProposalForm() {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading form...</p>}>
      <RequestProposalFormFields />
    </Suspense>
  );
}
