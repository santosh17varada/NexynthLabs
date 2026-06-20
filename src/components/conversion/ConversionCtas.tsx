import type { ReactNode } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookConsultationHref } from "@/config/book-consultation";
import { conversionCtas, type ConversionCta } from "@/config/conversion";
import { cn } from "@/lib/cn";

type ConversionMidBandProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  primary: ConversionCta;
  secondary?: ConversionCta;
  variant?: "surface" | "muted";
  children?: ReactNode;
  className?: string;
};

export function ConversionMidBand({
  id,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  variant = "muted",
  children,
  className,
}: ConversionMidBandProps) {
  return (
    <PageSection
      id={id}
      variant={variant}
      divider={false}
      containerClassName="py-12 sm:py-16"
      className={className}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-2xl"
        />
        <div className="mobile-cta-stack flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:max-w-md lg:flex-col xl:max-w-lg xl:flex-row">
          <Button
            href={primary.href}
            external={primary.external}
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto"
          >
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              external={secondary.external}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </PageSection>
  );
}

type ConsultationCtaProps = {
  title?: string;
  description?: string;
  topic?: string;
  className?: string;
  compact?: boolean;
};

export function ConsultationCta({
  title = "Book a consultation",
  description = "Tell us what you are building. We follow up to schedule a discovery call — slots confirmed manually.",
  topic,
  className,
  compact = false,
}: ConsultationCtaProps) {
  const href = topic ? bookConsultationHref(topic) : bookConsultationHref();

  return (
    <div
      className={cn(
        "rounded-ds-lg border border-border/70 bg-surface p-5 shadow-soft sm:p-6",
        className,
      )}
    >
      <p className="text-eyebrow font-semibold text-electric-blue">Consultation</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      {!compact ? (
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      ) : null}
      <div className={cn("mobile-cta-stack flex flex-col gap-3 sm:flex-row", compact ? "mt-4" : "mt-6")}>
        <Button href={href} variant="gradient" size="lg">
          Book a consultation
        </Button>
        <Button href={conversionCtas.contact.href} variant="outline" size="lg">
          Contact instead
        </Button>
      </div>
    </div>
  );
}

type ProductExploreCtaProps = {
  className?: string;
  showLiveProduct?: boolean;
};

export function ProductExploreCta({ className, showLiveProduct = true }: ProductExploreCtaProps) {
  return (
    <div
      className={cn(
        "rounded-ds-lg border border-border/70 bg-surface p-5 shadow-soft sm:p-6",
        className,
      )}
    >
      <p className="text-eyebrow font-semibold text-electric-blue">Products</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">Explore what we ship</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Compare live products, readiness labels, and case studies before you book a call.
      </p>
      <div className="mobile-cta-stack mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={conversionCtas.products.href} variant="gradient" size="lg">
          {conversionCtas.products.label}
        </Button>
        <Button href={conversionCtas.getpandit.href} variant="outline" size="lg">
          {conversionCtas.getpandit.label}
        </Button>
        {showLiveProduct ? (
          <Button href={conversionCtas.getpanditLive.href} external variant="ghost" size="lg">
            {conversionCtas.getpanditLive.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
