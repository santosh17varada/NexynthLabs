import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  heroCtaOnDarkClasses,
  heroCtaStackClasses,
  marketingHeroPaddingClasses,
  sectionHeadingDescriptionClass,
  sectionHeadingEyebrowClass,
  type ContainerSize,
  type MarketingHeroVariant,
  type SectionHeadingTone,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

export type MarketingHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  badges?: ReactNode;
  meta?: ReactNode;
  trustBadges?: readonly string[];
  actions?: ReactNode;
  /** @deprecated Use `actions` */
  children?: ReactNode;
  footer?: ReactNode;
  media?: ReactNode;
  variant?: MarketingHeroVariant;
  containerSize?: ContainerSize;
  titleClassName?: string;
  className?: string;
  containerClassName?: string;
};

function TrustBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-ds-full border border-glass-border bg-glass/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft backdrop-blur-sm">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function resolveTone(variant: MarketingHeroVariant): SectionHeadingTone {
  if (variant === "dark" || variant === "gradient" || variant === "product" || variant === "enterprise") {
    return "dark";
  }
  return "light";
}

function resolveMeshVariant(variant: MarketingHeroVariant): "dark" | "light" | "gradient" {
  if (variant === "gradient") return "gradient";
  if (variant === "default" || variant === "compact") return "light";
  return "dark";
}

function resolveMeshDensity(variant: MarketingHeroVariant): "full" | "subtle" {
  if (variant === "default" || variant === "compact") return "subtle";
  return "full";
}

function usesTopDivider(variant: MarketingHeroVariant): boolean {
  return variant === "product" || variant === "enterprise";
}

function usesTwoColumn(variant: MarketingHeroVariant, hasMedia: boolean): boolean {
  if (!hasMedia) return false;
  return variant === "default" || variant === "product";
}

function usesBadgeRow(variant: MarketingHeroVariant, badge?: ReactNode, badges?: ReactNode): boolean {
  return Boolean(badges) || Boolean(badge) || variant === "product" || variant === "enterprise";
}

export function MarketingHero({
  eyebrow,
  title,
  description,
  badge,
  badges,
  meta,
  trustBadges,
  actions,
  children,
  footer,
  media,
  variant = "dark",
  containerSize,
  titleClassName,
  className,
  containerClassName,
}: MarketingHeroProps) {
  const tone = resolveTone(variant);
  const isDark = tone === "dark";
  const ctaContent = actions ?? children;
  const isTwoColumn = usesTwoColumn(variant, Boolean(media));
  const isProductHero = variant === "product" && isTwoColumn;
  const showBadgeRow = usesBadgeRow(variant, badge, badges);
  const resolvedContainerSize = containerSize ?? (isTwoColumn ? "wide" : "default");

  const copyBlock = (
    <div
      className={cn(
        "min-w-0",
        !isTwoColumn && (variant === "enterprise" || variant === "dark") && "max-w-3xl",
        isProductHero && "max-lg:mx-auto max-lg:max-w-2xl max-lg:text-center",
      )}
    >
      {showBadgeRow ? (
        <div
          className={cn(
            "motion-hero-reveal flex flex-wrap items-center gap-2",
            isProductHero && "max-lg:justify-center",
          )}
        >
          {badges ?? (
            <>
              {badge ? (
                <Badge variant="gradient" className="text-on-dark">
                  {badge}
                </Badge>
              ) : null}
              {eyebrow ? (
                <span className={cn("text-eyebrow", sectionHeadingEyebrowClass("dark"))}>
                  {eyebrow}
                </span>
              ) : null}
            </>
          )}
        </div>
      ) : eyebrow ? (
        <Eyebrow tone={tone} className="lcp-visible motion-hero-reveal">
          {eyebrow}
        </Eyebrow>
      ) : null}

      <h1
        className={cn(
          "lcp-visible motion-hero-reveal text-balance font-semibold tracking-tight",
          showBadgeRow ? "mt-4 max-w-2xl sm:mt-6" : "max-w-3xl",
          isDark ? "text-display-lg text-on-dark" : "text-display-lg text-foreground",
          !showBadgeRow && !isTwoColumn && "mt-0",
          !showBadgeRow && isTwoColumn && "mt-4 max-w-2xl",
          titleClassName,
        )}
      >
        {title}
      </h1>

      {description ? (
        <p
          className={cn(
            "lcp-visible motion-fade-reveal motion-delay-2 text-base leading-relaxed",
            isTwoColumn ? "mt-4 max-w-xl sm:mt-6 sm:text-lg" : "mt-3 max-w-2xl sm:mt-6 sm:text-lg",
            sectionHeadingDescriptionClass(tone),
            variant === "default" && "lg:text-xl lg:leading-relaxed",
          )}
        >
          {description}
        </p>
      ) : null}

      {meta ? (
        <div className="motion-fade-reveal motion-delay-2 mt-4">{meta}</div>
      ) : null}

      {trustBadges && trustBadges.length > 0 ? (
        <ul
          className="motion-fade-reveal motion-delay-3 mt-6 flex flex-wrap gap-2 sm:mt-8"
          aria-label="Core capabilities"
        >
          {trustBadges.map((label) => (
            <li key={label}>
              <TrustBadge label={label} />
            </li>
          ))}
        </ul>
      ) : null}

      {ctaContent ? (
        <div
          className={cn(
            isDark ? heroCtaOnDarkClasses : heroCtaStackClasses,
            "motion-fade-reveal",
            isProductHero && "max-lg:justify-center",
            trustBadges?.length ? "motion-delay-4 mt-8 sm:mt-10" : "motion-delay-3 mt-6 sm:mt-8",
            showBadgeRow && !trustBadges?.length && "mt-6 sm:mt-8",
          )}
        >
          {ctaContent}
        </div>
      ) : null}

      {footer ? (
        <div
          className={cn(
            "motion-fade-reveal motion-delay-4 mt-6 text-sm",
            isDark ? "text-on-dark-muted" : "text-muted",
          )}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        variant === "default" && "mobile-bleed-guard",
        isDark ? "border-glass-border-dark text-on-dark" : "border-border/60",
        className,
      )}
    >
      <MeshBackground
        variant={resolveMeshVariant(variant)}
        density={resolveMeshDensity(variant)}
        showGrid="desktop"
        className="absolute inset-0"
      />
      {variant === "default" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-electric-blue/[0.06] via-transparent to-background"
          aria-hidden="true"
        />
      ) : null}
      {usesTopDivider(variant) ? (
        <SectionDivider variant="strong" className="absolute inset-x-0 top-0" />
      ) : null}

      <Container
        size={resolvedContainerSize}
        className={cn("relative", marketingHeroPaddingClasses[variant], containerClassName)}
      >
        {isTwoColumn ? (
          <div
            className={cn(
              "grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16",
              variant === "default"
                ? "items-center"
                : variant === "product"
                  ? "items-center"
                  : "items-center",
            )}
          >
            {copyBlock}
            <div className={cn("min-w-0", isProductHero && "max-lg:mx-auto")}>{media}</div>
          </div>
        ) : (
          copyBlock
        )}
      </Container>
    </section>
  );
}
