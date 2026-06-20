import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPartnerPortalEnquiryHref } from "@/config/partner-portal";
import type { PartnerPortalType } from "@/types/partner-portal";

export function PartnerPortalReadinessBanner({ message }: { message: string }) {
  return (
    <div className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-relaxed text-muted">{message}</p>
      </div>
    </div>
  );
}

type PartnerPortalTypeNavProps = {
  types: readonly PartnerPortalType[];
};

export function PartnerPortalTypeNav({ types }: PartnerPortalTypeNavProps) {
  return (
    <nav
      aria-label="Partner types"
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      {types.map((type) => (
        <a
          key={type.id}
          href={`#${type.id}`}
          className="inline-flex min-h-10 items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-electric-blue hover:text-electric-violet"
        >
          {type.label}
        </a>
      ))}
    </nav>
  );
}

type PartnerPortalTypeSectionsProps = {
  types: readonly PartnerPortalType[];
};

export function PartnerPortalTypeSections({ types }: PartnerPortalTypeSectionsProps) {
  return (
    <div className="space-y-16 sm:space-y-20">
      {types.map((type) => (
        <section
          key={type.id}
          id={type.id}
          className="scroll-mt-24"
          aria-labelledby={`${type.id}-title`}
        >
          <div className="max-w-3xl">
            <p className="text-eyebrow font-semibold text-electric-blue">
              {type.label}
            </p>
            <h2
              id={`${type.id}-title`}
              className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {type.label}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{type.summary}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card as="article" className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Benefits</h3>
              <ul className="mt-4 space-y-2.5">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card as="article" className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Process</h3>
              <ol className="mt-4 space-y-4">
                {type.process.map((step) => (
                  <li key={step.step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-violet/15 text-xs font-semibold text-foreground">
                      {step.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            <Card as="article" className="flex h-full flex-col p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Eligibility</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {type.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={getPartnerPortalEnquiryHref(type.id)}
                className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
              >
                Apply as {type.label} →
              </Link>
            </Card>
          </div>
        </section>
      ))}
    </div>
  );
}

type PartnerPortalTypesIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  types: readonly PartnerPortalType[];
};

export function PartnerPortalTypesIntro({
  eyebrow,
  title,
  description,
  types,
}: PartnerPortalTypesIntroProps) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">
        <PartnerPortalTypeNav types={types} />
      </div>
    </section>
  );
}
