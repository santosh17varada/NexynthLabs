"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildNewsletterMailto, newsletterCopy } from "@/config/newsletter";
import type { NewsletterSignupVariant } from "@/types/newsletter";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type FormState = "idle" | "submitting" | "success" | "error";

type NewsletterSignupProps = {
  variant?: NewsletterSignupVariant;
  className?: string;
};

const emptyForm = {
  email: "",
  name: "",
};

export function NewsletterSignup({ variant = "section", className = "" }: NewsletterSignupProps) {
  const pathname = usePathname();
  const [form, setForm] = useState(emptyForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const mailtoFallback = useMemo(
    () =>
      buildNewsletterMailto({
        email: form.email || "[your email]",
        name: form.name,
      }),
    [form.email, form.name],
  );

  const inputClass =
    "w-full min-h-11 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20";

  const isFooter = variant === "footer";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const trimmedEmail = form.email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setState("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          name: form.name.trim(),
          sourcePage: pathname,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to subscribe.");
      }

      setForm(emptyForm);
      setState("success");
      trackPlannedEvent("newsletter_submit", {
        source_page: pathname,
        variant,
      });
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <div className={className}>
      {!isFooter && (
        <div className="mb-6 max-w-xl">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            {newsletterCopy.title}
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">{newsletterCopy.description}</p>
        </div>
      )}

      {isFooter && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
          {newsletterCopy.title}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className={
          isFooter
            ? "space-y-3"
            : "flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end"
        }
        noValidate
      >
        <div className={isFooter ? "w-full" : "w-full sm:max-w-xs sm:flex-1"}>
          <label
            htmlFor={`newsletter-email-${variant}`}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {newsletterCopy.emailLabel} *
          </label>
          <input
            id={`newsletter-email-${variant}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
            placeholder="you@company.com"
          />
        </div>

        <div className={isFooter ? "w-full" : "w-full sm:max-w-xs sm:flex-1"}>
          <label
            htmlFor={`newsletter-name-${variant}`}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {newsletterCopy.nameLabel}
          </label>
          <input
            id={`newsletter-name-${variant}`}
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
            placeholder="Your name"
          />
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className={isFooter ? "w-full" : "w-full sm:w-auto"}
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Subscribing..." : newsletterCopy.submitLabel}
        </Button>
      </form>

      <p className={`text-xs text-muted ${isFooter ? "mt-3" : "mt-4"}`}>
        {newsletterCopy.privacyNote}{" "}
        <Link href="/privacy-policy" className="text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          {newsletterCopy.privacyLinkLabel}
        </Link>
        .
      </p>

      {state === "success" && (
        <p
          className="mt-4 rounded-xl border border-electric-blue/30 bg-electric-violet/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {newsletterCopy.successMessage}
        </p>
      )}

      {state === "error" && (
        <div
          className="mt-4 space-y-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <p>{errorMessage}</p>
          <p>{newsletterCopy.fallbackNote}</p>
          <a href={mailtoFallback} className="inline-flex font-semibold text-red-900 underline">
            Email subscribe request instead →
          </a>
        </div>
      )}
    </div>
  );
}
