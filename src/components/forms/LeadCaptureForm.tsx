"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getInitialPartnerInterest,
  getInitialServiceInterest,
  getPartnerInterestOptions,
  getServiceInterestOptions,
} from "@/config/contact";
import type { LeadSource } from "@/types/lead";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type FormState = "idle" | "submitting" | "success" | "error";

type LeadCaptureFormMode = "contact" | "partner";

type LeadCaptureFormProps = {
  mode?: LeadCaptureFormMode;
  submitLabel?: string;
  interestLabel?: string;
};

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  message: "",
};

function LeadCaptureFormFields({
  mode = "contact",
  submitLabel,
  interestLabel,
}: LeadCaptureFormProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const serviceParam = searchParams.get("service");
  const intent = searchParams.get("intent");
  const interestParam = searchParams.get("interest") ?? searchParams.get("topic");

  const isPartner = mode === "partner";
  const interestOptions = isPartner
    ? getPartnerInterestOptions()
    : getServiceInterestOptions();
  const initialInterest = isPartner
    ? getInitialPartnerInterest(interestParam, intent)
    : getInitialServiceInterest(serviceParam, intent);

  const [form, setForm] = useState({
    ...emptyForm,
    serviceInterest: initialInterest,
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const leadSource: LeadSource = isPartner ? "partner-form" : "contact-form";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: leadSource,
          sourcePage: pathname,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit enquiry.");
      }

      setForm({
        ...emptyForm,
        serviceInterest: initialInterest,
      });
      setState("success");
      trackPlannedEvent(
        isPartner ? "partner_submit" : "contact_form_submit",
        { source_page: pathname },
      );
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  const inputClass =
    "w-full min-h-11 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20";

  const resolvedSubmitLabel =
    submitLabel ?? (isPartner ? "Send partner enquiry" : "Send enquiry");
  const resolvedInterestLabel =
    interestLabel ?? (isPartner ? "Partnership interest" : "Service interest");

  const successMessage = isPartner
    ? "Thank you. Your partner enquiry has been received. We will respond shortly."
    : "Thank you. Your enquiry has been received. We will respond shortly.";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name *
          </label>
          <input
            id="name"
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
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            id="email"
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
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company / organisation
          </label>
          <input
            id="company"
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
        <label
          htmlFor="serviceInterest"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {resolvedInterestLabel}
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          className={inputClass}
          value={form.serviceInterest}
          onChange={(e) => updateField("serviceInterest", e.target.value)}
        >
          {interestOptions.map((option) => (
            <option key={option.value || "default"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={
            isPartner
              ? "Tell us about your partnership model, geography, and timeline."
              : undefined
          }
        />
      </div>

      {state === "success" && (
        <p
          className="rounded-xl border border-electric-blue/30 bg-electric-violet/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {successMessage}
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
        {state === "submitting" ? "Sending..." : resolvedSubmitLabel}
      </Button>
    </form>
  );
}

export function LeadCaptureForm(props: LeadCaptureFormProps = {}) {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading form...</p>}>
      <LeadCaptureFormFields {...props} />
    </Suspense>
  );
}

/** @deprecated Use LeadCaptureForm */
export const EnquiryForm = LeadCaptureForm;

export function PartnerEnquiryForm() {
  return <LeadCaptureForm mode="partner" />;
}
