"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { ContactBusinessCta } from "@/components/contact/ContactBusinessCta";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  FormStepIndicator,
  formErrorClassName,
  formInputClassName,
  formSelectClassName,
  formSuccessClassName,
  formTextareaClassName,
} from "@/components/forms/FormFieldPrimitives";
import {
  getInitialServiceInterest,
  resolvePartnerInterestLabel,
  resolveServiceInterestLabel,
} from "@/config/contact";
import {
  contactExperienceCopy,
  contactInquiryOptions,
  contactQualificationFields,
  formatQualificationBlock,
  getInitialContactInquiry,
  getPartnershipInterestOptions,
  getProjectServiceOptions,
  mapConsultationTopicFromGoal,
  resolveContactInterestType,
  type ContactInquiryId,
  type QualificationField,
} from "@/config/contact-experience";
import { resolveConsultationTopicLabel } from "@/config/book-consultation";
import { trackPlannedEvent } from "@/lib/analytics/track-client";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

type DetailsForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  serviceInterest: string;
  partnershipInterest: string;
  preferredDate: string;
};

const emptyDetails: DetailsForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  serviceInterest: "",
  partnershipInterest: "",
  preferredDate: "",
};

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function QualificationFieldInput({
  field,
  value,
  onChange,
}: {
  field: QualificationField;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `qual-${field.id}`;

  if (field.type === "textarea") {
    return (
      <FormField id={id} label={field.label} required={field.required}>
        <textarea
          id={id}
          name={field.id}
          rows={4}
          className={formTextareaClassName}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </FormField>
    );
  }

  if (field.type === "select") {
    return (
      <FormField id={id} label={field.label} required={field.required}>
        <select
          id={id}
          name={field.id}
          className={formSelectClassName}
          value={value}
          required={field.required}
          onChange={(e) => onChange(e.target.value)}
        >
          {field.options?.map((option) => (
            <option key={option.value || "default"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
    );
  }

  return (
    <FormField id={id} label={field.label} required={field.required}>
      <input
        id={id}
        name={field.id}
        type="text"
        className={formInputClassName}
        value={value}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormField>
  );
}

function ContactEnterpriseFormFields() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const intentParam = searchParams.get("intent");
  const serviceParam = searchParams.get("service");
  const interestParam = searchParams.get("interest") ?? searchParams.get("topic");

  const initialInquiry = getInitialContactInquiry(intentParam, serviceParam, interestParam);
  const initialService = getInitialServiceInterest(serviceParam, intentParam);

  const [step, setStep] = useState(1);
  const [inquiry, setInquiry] = useState<ContactInquiryId>(initialInquiry);
  const [qualification, setQualification] = useState<Record<string, string>>({});
  const [details, setDetails] = useState<DetailsForm>({
    ...emptyDetails,
    serviceInterest: initialService,
    partnershipInterest:
      initialInquiry === "partnership" || initialInquiry === "getpandit"
        ? interestParam?.includes("getpandit")
          ? "getpandit-partnership"
          : ""
        : "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copy = contactExperienceCopy.form;
  const minDate = useMemo(() => todayIsoDate(), []);
  const qualificationFields = contactQualificationFields[inquiry];
  const isBusiness = inquiry === "business";
  const isConsultation = inquiry === "consultation";

  function updateQualification(fieldId: string, value: string) {
    setQualification((current) => ({ ...current, [fieldId]: value }));
  }

  function updateDetail(field: keyof DetailsForm, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function validateQualification(): boolean {
    for (const field of qualificationFields) {
      if (field.required && !qualification[field.id]?.trim()) {
        setErrorMessage(`Please complete: ${field.label}`);
        return false;
      }
    }
    setErrorMessage("");
    return true;
  }

  function handleContinueFromIntent() {
    setErrorMessage("");
    if (isBusiness) {
      return;
    }
    setStep(2);
  }

  function handleContinueFromQualification() {
    if (!validateQualification()) return;
    setStep(3);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const qualificationBlock = formatQualificationBlock(inquiry, qualification);
    const baseMessage = details.message.trim();
    const fullMessage = `${baseMessage}${qualificationBlock}`.trim();

    try {
      if (isConsultation) {
        const topic = mapConsultationTopicFromGoal(qualification.primaryGoal ?? "");
        const response = await fetch("/api/book-consultation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: details.name,
            email: details.email,
            phone: details.phone,
            company: details.company,
            topic,
            preferredDate: details.preferredDate,
            message: fullMessage,
            sourcePage: pathname,
          }),
        });
        const data = (await response.json()) as { message?: string };
        if (!response.ok) {
          throw new Error(data.message ?? "Unable to submit consultation request.");
        }
        trackPlannedEvent("consultation_submit", {
          source_page: pathname,
          topic: topic || "unspecified",
        });
      } else {
        const serviceInterest =
          inquiry === "project"
            ? details.serviceInterest
            : inquiry === "partnership"
              ? qualification.partnershipModel || details.partnershipInterest
              : inquiry === "getpandit"
                ? "getpandit-partnership"
                : inquiry === "product"
                  ? "product-opportunity"
                  : details.serviceInterest;

        const interestType = resolveContactInterestType(inquiry, {
          serviceInterest: resolveServiceInterestLabel(details.serviceInterest),
          partnershipInterest:
            resolvePartnerInterestLabel(
              qualification.partnershipModel || details.partnershipInterest,
            ) ?? details.partnershipInterest,
          productFocus:
            qualificationFields
              .find((f) => f.id === "productFocus")
              ?.options?.find((o) => o.value === qualification.productFocus)?.label ??
            qualification.productFocus,
          getpanditRole:
            qualificationFields
              .find((f) => f.id === "getpanditRole")
              ?.options?.find((o) => o.value === qualification.getpanditRole)?.label ??
            qualification.getpanditRole,
          consultationTopic: resolveConsultationTopicLabel(
            mapConsultationTopicFromGoal(qualification.primaryGoal ?? ""),
          ),
        });

        const response = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: details.name,
            email: details.email,
            phone: details.phone,
            company: details.company,
            serviceInterest,
            interestType,
            message: fullMessage,
            source: inquiry === "partnership" ? "partner-form" : "contact-form",
            sourcePage: pathname,
          }),
        });
        const data = (await response.json()) as { message?: string };
        if (!response.ok) {
          throw new Error(data.message ?? "Unable to submit enquiry.");
        }
        trackPlannedEvent(
          inquiry === "partnership" ? "partner_submit" : "contact_form_submit",
          { source_page: pathname, inquiry },
        );
      }

      setDetails({
        ...emptyDetails,
        serviceInterest: initialService,
      });
      setQualification({});
      setState("success");
      setStep(1);
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  const submitLabel = isConsultation ? copy.requestConsultation : copy.submit;

  return (
    <div
      id="contact-form"
      className="rounded-ds-xl border border-glass-border bg-glass/90 p-5 shadow-elevated backdrop-blur-sm sm:p-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{copy.title}</h2>
          <p className="mt-2 text-sm text-muted">{copy.description}</p>
        </div>
      </div>

      {!isBusiness ? (
        <div className="mt-6">
          <FormStepIndicator steps={copy.stepLabels} currentStep={step} />
        </div>
      ) : null}

      <p className="mt-4 text-xs text-muted">{copy.fieldsRequired}</p>

      {state === "success" ? (
        <p className={cn(formSuccessClassName, "mt-6")} role="status">
          {isConsultation ? copy.successConsultation : copy.successEnquiry}
        </p>
      ) : null}

      {state === "error" && errorMessage ? (
        <p className={cn(formErrorClassName, "mt-6")} role="alert">
          {errorMessage}
        </p>
      ) : null}

      {isBusiness ? (
        <div className="mt-6">
          <ContactBusinessCta />
        </div>
      ) : null}

      {!isBusiness && step === 1 ? (
        <div className="mt-6 space-y-4">
          <p className="text-sm font-medium text-foreground">What brings you here?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactInquiryOptions.map((option) => {
                const selected = inquiry === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setInquiry(option.id);
                      setErrorMessage("");
                    }}
                className={cn(
                  "rounded-ds-lg border p-4 text-left transition-all duration-200 sm:p-5",
                  option.id === "business" ? "sm:col-span-2" : undefined,
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40",
                      selected
                        ? "border-electric-blue/40 bg-gradient-brand-subtle shadow-soft"
                        : "border-glass-border bg-background/80 hover:border-electric-blue/25 hover:shadow-soft",
                    )}
                    aria-pressed={selected}
                  >
                    <p className="text-eyebrow text-electric-blue">{option.eyebrow}</p>
                    <p className="mt-2 font-semibold text-foreground">{option.title}</p>
                    <p className="mt-1 text-sm text-muted">{option.description}</p>
                  </button>
                );
              })}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            {!isBusiness ? (
              <Button type="button" variant="gradient" size="lg" onClick={handleContinueFromIntent}>
                {copy.continue}
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {!isBusiness && step === 2 ? (
        <div className="mt-6 space-y-5">
          <p className="text-sm font-medium text-foreground">Help us qualify your enquiry</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {qualificationFields.map((field) => (
              <div
                key={field.id}
                className={field.type === "textarea" ? "sm:col-span-2" : undefined}
              >
                <QualificationFieldInput
                  field={field}
                  value={qualification[field.id] ?? ""}
                  onChange={(value) => updateQualification(field.id, value)}
                />
              </div>
            ))}
          </div>

          <div className="mobile-cta-stack flex flex-col gap-3 pt-2 sm:flex-row">
            <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
              {copy.back}
            </Button>
            <Button type="button" variant="gradient" size="lg" onClick={handleContinueFromQualification}>
              {copy.continue}
            </Button>
          </div>
        </div>
      ) : null}

      {!isBusiness && step === 3 ? (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="contact-name" label="Name" required>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={formInputClassName}
                value={details.name}
                onChange={(e) => updateDetail("name", e.target.value)}
              />
            </FormField>
            <FormField id="contact-email" label="Email" required>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={formInputClassName}
                value={details.email}
                onChange={(e) => updateDetail("email", e.target.value)}
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="contact-phone" label="Phone">
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={formInputClassName}
                value={details.phone}
                onChange={(e) => updateDetail("phone", e.target.value)}
              />
            </FormField>
            <FormField id="contact-company" label="Company / organisation">
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                className={formInputClassName}
                value={details.company}
                onChange={(e) => updateDetail("company", e.target.value)}
              />
            </FormField>
          </div>

          {inquiry === "project" ? (
            <FormField id="contact-service" label="Service area">
              <select
                id="contact-service"
                name="serviceInterest"
                className={formSelectClassName}
                value={details.serviceInterest}
                onChange={(e) => updateDetail("serviceInterest", e.target.value)}
              >
                {getProjectServiceOptions().map((option) => (
                  <option key={option.value || "default"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>
          ) : null}

          {inquiry === "partnership" ? (
            <FormField id="contact-partnership" label="Partnership interest">
              <select
                id="contact-partnership"
                name="partnershipInterest"
                className={formSelectClassName}
                value={details.partnershipInterest || qualification.partnershipModel || ""}
                onChange={(e) => updateDetail("partnershipInterest", e.target.value)}
              >
                {getPartnershipInterestOptions().map((option) => (
                  <option key={option.value || "default"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>
          ) : null}

          {isConsultation ? (
            <FormField id="contact-preferred-date" label="Preferred consultation date">
              <input
                id="contact-preferred-date"
                name="preferredDate"
                type="date"
                min={minDate}
                className={formInputClassName}
                value={details.preferredDate}
                onChange={(e) => updateDetail("preferredDate", e.target.value)}
              />
            </FormField>
          ) : null}

          <FormField id="contact-message" label="Message" required>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className={formTextareaClassName}
              value={details.message}
              onChange={(e) => updateDetail("message", e.target.value)}
              placeholder={
                inquiry === "getpandit"
                  ? "Tell us about your ceremony, partnership, or question about getpandit.com."
                  : "Share goals, constraints, integrations, and timeline."
              }
            />
          </FormField>

          <div className="mobile-cta-stack flex flex-col gap-3 pt-2 sm:flex-row">
            <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)}>
              {copy.back}
            </Button>
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? copy.submitting : submitLabel}
            </Button>
          </div>
        </form>
      ) : null}

      {step === 1 && !isBusiness ? (
        <div className="mt-8 border-t border-border/60 pt-6">
          <p className="text-sm text-muted">Need procurement or general business contact?</p>
          <button
            type="button"
            className="mt-2 text-sm font-semibold text-electric-blue hover:underline"
            onClick={() => setInquiry("business")}
          >
            View business contact options →
          </button>
        </div>
      ) : null}

      {isBusiness ? (
        <div className="mt-6">
          <button
            type="button"
            className="text-sm font-semibold text-electric-blue hover:underline"
            onClick={() => {
              setInquiry(initialInquiry === "business" ? "consultation" : initialInquiry);
              setStep(1);
            }}
          >
            ← Back to enquiry form
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function ContactEnterpriseForm() {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading form...</p>}>
      <ContactEnterpriseFormFields />
    </Suspense>
  );
}
