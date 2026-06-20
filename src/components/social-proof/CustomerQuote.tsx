import Image from "next/image";
import { ApprovalBadge } from "@/components/social-proof/ApprovalBadge";
import type { CustomerQuote as CustomerQuoteData, SocialProofTone } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type CustomerQuoteProps = {
  quote: CustomerQuoteData;
  tone?: SocialProofTone;
  variant?: "card" | "pullquote";
  className?: string;
};

export function CustomerQuote({
  quote,
  tone = "light",
  variant = "pullquote",
  className,
}: CustomerQuoteProps) {
  const isDark = tone === "dark";
  const isCard = variant === "card";

  return (
    <blockquote
      className={cn(
        "relative overflow-hidden",
        isCard
          ? cn(
              "flex h-full flex-col rounded-ds-lg border p-5 sm:p-6",
              isDark
                ? "border-glass-border-dark bg-glass-dark/50 text-on-dark"
                : "border-border/60 bg-surface shadow-soft",
            )
          : cn(
              "rounded-ds-xl border p-6 sm:p-8",
              isDark
                ? "border-glass-border-dark bg-glass-dark/50 text-on-dark"
                : "border-electric-violet/20 bg-gradient-brand-subtle shadow-soft",
            ),
        className,
      )}
    >
      {(quote.eyebrow || quote.status) && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          {quote.eyebrow ? (
            <p className="text-eyebrow text-electric-blue">
              {quote.eyebrow}
            </p>
          ) : (
            <span />
          )}
          {quote.status ? <ApprovalBadge status={quote.status} /> : null}
        </div>
      )}

      {!isCard ? (
        <span
          className={cn(
            "pointer-events-none absolute -left-1 -top-2 font-serif text-6xl leading-none opacity-20",
            isDark ? "text-electric-cyan" : "text-electric-violet",
          )}
          aria-hidden="true"
        >
          &ldquo;
        </span>
      ) : null}

      <p
        className={cn(
          "relative flex-1 leading-relaxed",
          isCard ? "text-base sm:text-lg" : "text-lg font-medium sm:text-xl",
          isDark ? "text-on-dark" : "text-foreground",
        )}
      >
        {isCard ? <>&ldquo;{quote.text}&rdquo;</> : quote.text}
      </p>

      <footer className={cn("mt-6 flex items-center gap-3", isCard && "border-t border-border/60 pt-4")}>
        {quote.image ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border/60">
            <Image
              src={quote.image.src}
              alt={quote.image.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : null}
        <div>
          <cite
            className={cn(
              "not-italic text-sm font-semibold",
              isDark ? "text-on-dark" : "text-foreground",
            )}
          >
            {quote.attribution}
          </cite>
          {quote.role || quote.company ? (
            <p className={cn("text-sm", isDark ? "text-on-dark-muted" : "text-muted")}>
              {[quote.role, quote.company].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>
      </footer>
    </blockquote>
  );
}
