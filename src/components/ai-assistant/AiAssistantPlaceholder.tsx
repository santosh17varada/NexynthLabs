"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aiAssistantCopy,
  aiAssistantUseCases,
} from "@/config/ai-assistant";

type AiAssistantPanelProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
};

function AiAssistantPanel({ open, onClose, titleId }: AiAssistantPanelProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const {
    panelTitle,
    panelSubtitle,
    comingSoonBadge,
    disabledNotice,
    inputPlaceholder,
    sendLabel,
    sendDisabledHint,
    closeLabel,
    useCasesTitle,
    contactFallback,
    faqFallback,
  } = aiAssistantCopy;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-end sm:justify-end sm:p-4 sm:pb-[max(1rem,env(safe-area-inset-bottom))]"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full sm:max-w-md"
      >
        <Card
          as="article"
          className="flex max-h-[min(85dvh,32rem)] w-full flex-col overflow-hidden rounded-t-2xl border-border/80 shadow-xl sm:rounded-ds-lg"
        >
        <header className="flex items-start justify-between gap-3 border-b border-border/60 px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 id={titleId} className="text-lg font-semibold text-foreground">
                {panelTitle}
              </h2>
              <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                {comingSoonBadge}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{panelSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground"
            aria-label={closeLabel}
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          <p className="rounded-xl border border-dashed border-electric-blue/40 bg-electric-blue/5 p-3 text-sm leading-relaxed text-muted">
            {disabledNotice}
          </p>

          <h3 className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
            {useCasesTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            {aiAssistantUseCases.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-11 flex-col justify-center rounded-xl border border-border px-3 py-2.5 transition-colors hover:border-electric-blue/40 hover:bg-background"
                >
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="text-xs text-muted">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <footer className="border-t border-border/60 bg-surface px-4 py-4 sm:px-5">
          <label htmlFor="ai-assistant-input" className="sr-only">
            {inputPlaceholder}
          </label>
          <textarea
            ref={inputRef}
            id="ai-assistant-input"
            rows={2}
            disabled
            placeholder={inputPlaceholder}
            className="w-full resize-none rounded-xl border border-border bg-background px-3 py-3 text-base text-muted outline-none"
            aria-describedby="ai-assistant-send-hint"
          />
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              disabled
              title={sendDisabledHint}
              className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-xl bg-primary/40 px-4 text-sm font-semibold text-primary-foreground/80 sm:w-auto"
            >
              {sendLabel}
            </button>
            <p id="ai-assistant-send-hint" className="text-xs text-muted">
              {sendDisabledHint}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link
              href={contactFallback.href}
              onClick={onClose}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {contactFallback.label} →
            </Link>
            <Link
              href={faqFallback.href}
              onClick={onClose}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {faqFallback.label} →
            </Link>
          </div>
        </footer>
        </Card>
      </div>
    </div>
  );
}

/** Floating “Ask Nexynth AI” widget — non-functional until server API is configured. */
export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const { widgetLabel, widgetAriaLabel } = aiAssistantCopy;

  useEffect(() => {
    document.body.classList.add("has-ai-assistant");
    return () => {
      document.body.classList.remove("has-ai-assistant");
    };
  }, []);

  return (
    <>
      <div className="ai-assistant-widget pointer-events-none fixed bottom-0 right-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pointer-events-auto inline-flex min-h-11 max-w-[min(calc(100vw-2rem),16rem)] items-center gap-2 rounded-full border border-electric-blue/30 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] sm:max-w-[18rem]"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-controls={open ? "ai-assistant-panel" : undefined}
          aria-label={widgetAriaLabel}
        >
          <span
            className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-brand"
            aria-hidden="true"
          />
          <span className="truncate">{widgetLabel}</span>
        </button>
      </div>

      <div id="ai-assistant-panel">
        <AiAssistantPanel open={open} onClose={() => setOpen(false)} titleId={titleId} />
      </div>
    </>
  );
}

/** Inline section for Home / AI Showcase — same readiness messaging without floating UI. */
export function AiAssistantSection() {
  const { section, comingSoonBadge, disabledNotice, contactFallback, faqFallback } =
    aiAssistantCopy;

  return (
    <section className="border-t border-border/60 bg-surface" aria-label={section.title}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <Card className="mt-8 p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
              {comingSoonBadge}
            </span>
            <p className="text-sm text-muted">{section.footnote}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{disabledNotice}</p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiAssistantUseCases.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex h-full min-h-11 flex-col rounded-xl border border-border px-4 py-3 transition-colors hover:border-electric-blue/40 hover:bg-background"
                >
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="mt-1 text-xs text-muted">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link
              href={contactFallback.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {contactFallback.label} →
            </Link>
            <Link
              href={faqFallback.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {faqFallback.label} →
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
