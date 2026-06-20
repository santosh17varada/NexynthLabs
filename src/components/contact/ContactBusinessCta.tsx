import Link from "next/link";
import { siteConfig, getMailtoLink, getTelLink } from "@/config/site";
import { contactExperienceCopy } from "@/config/contact-experience";
import { bookConsultationHref } from "@/config/book-consultation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type ContactBusinessCtaProps = {
  className?: string;
  compact?: boolean;
};

export function ContactBusinessCta({ className, compact = false }: ContactBusinessCtaProps) {
  const { businessCta } = contactExperienceCopy;
  const { email, phone, phoneDisplay, address } = siteConfig;

  return (
    <div
      className={cn(
        "rounded-ds-xl border border-glass-border bg-gradient-brand-subtle p-5 shadow-soft sm:p-6",
        className,
      )}
    >
      <p className="text-eyebrow text-electric-blue">Business contact</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
        {businessCta.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {businessCta.description}
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-ds-md border border-border/60 bg-background/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {businessCta.emailLabel}
          </p>
          <a
            href={getMailtoLink()}
            className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-electric-blue"
          >
            {email}
          </a>
        </div>

        <div className="rounded-ds-md border border-border/60 bg-background/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {businessCta.phoneLabel}
          </p>
          <a
            href={getTelLink()}
            className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-electric-blue"
          >
            {phone}
          </a>
          <p className="mt-1 text-sm text-muted">{phoneDisplay}</p>
        </div>

        {!compact ? (
          <div className="rounded-ds-md border border-border/60 bg-background/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Office</p>
            <address className="mt-2 not-italic text-sm leading-relaxed text-foreground sm:text-base">
              {address.full}
            </address>
          </div>
        ) : null}
      </div>

      <div className="mobile-cta-stack mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={bookConsultationHref()} variant="gradient" size="md">
          {businessCta.consultationLabel}
        </Button>
        <Button href="/request-proposal" variant="outline" size="md">
          {businessCta.proposalLabel}
        </Button>
        <Link
          href={getMailtoLink()}
          className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue hover:underline"
        >
          Email directly →
        </Link>
      </div>
    </div>
  );
}
