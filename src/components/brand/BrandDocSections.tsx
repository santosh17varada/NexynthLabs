import type { ReactNode } from "react";
import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IllustrationGallery } from "@/illustrations/IllustrationGallery";
import { illustrationFrameworkCopy } from "@/config/illustrations";
import { MotionShowcase } from "@/components/motion/MotionShowcase";
import { ProductDemoShowcase } from "@/components/product-demo/ProductDemoShowcase";
import { ProductShowcaseShowcase } from "@/components/product-showcase/ProductShowcaseShowcase";
import { SocialProofShowcase } from "@/components/social-proof/SocialProofShowcase";
import { productDemoCopy } from "@/config/product-demos";
import { productShowcaseCopy } from "@/config/product-showcase";
import { motionSystemCopy } from "@/config/motion-system";
import { socialProofCopy } from "@/config/social-proof";
import {
  brandAccessibility,
  brandButtonStandards,
  brandCardStandards,
  brandColors,
  brandFoundations,
  brandGradients,
  brandIconography,
  brandIllustration,
  brandLogo,
  brandMeta,
  brandMotion,
  brandRadii,
  brandShadows,
  brandSpacing,
  brandTypography,
} from "@/brand/tokens";
import {
  buttonBaseClasses,
  buttonSizeClasses,
  buttonVariantClasses,
  cardPaddingClasses,
  cardVariantClasses,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

function DocBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-ds-lg border border-border/60 bg-surface/80 p-4 sm:p-5">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BrandFoundationsSection() {
  return (
    <PageSection id="foundations" variant="surface">
      <SectionHeading
        eyebrow="Brand foundations"
        title={`${brandMeta.brand} identity`}
        description={brandFoundations.essence}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {brandFoundations.principles.map((item) => (
          <Card key={item.id} variant="glass" padding="sm">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <DocBlock title="Voice">
          {brandFoundations.voice.join(" · ")}
        </DocBlock>
        <DocBlock title="Avoid">
          {brandFoundations.voiceAvoid.join(" · ")}
        </DocBlock>
      </div>
      <p className="mt-6 text-sm text-muted">{brandFoundations.productSeparation}</p>
    </PageSection>
  );
}

export function BrandLogoSection() {
  return (
    <PageSection id="logo" variant="default">
      <SectionHeading
        eyebrow="Logo guidelines"
        title="Logo system"
        description={brandLogo.clearSpace}
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brandLogo.assets.map((asset) => (
          <figure
            key={asset.id}
            className={cn(
              "overflow-hidden rounded-ds-xl border border-glass-border shadow-soft",
              asset.background,
            )}
          >
            <div className="relative flex min-h-[140px] items-center justify-center p-8">
              <Image
                src={asset.path}
                alt=""
                width={200}
                height={48}
                unoptimized
                className="max-h-12 w-auto"
              />
            </div>
            <figcaption className="border-t border-border/60 bg-surface px-4 py-3 text-sm">
              <p className="font-semibold text-foreground">{asset.title}</p>
              <p className="mt-1 text-xs text-muted">Min width {asset.minWidthPx}px</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <DocBlock title="Minimum sizes">
          <ul className="mt-2 space-y-1">
            {brandLogo.minSizes.map((row) => (
              <li key={row.context}>
                <span className="font-medium text-foreground">{row.context}:</span> {row.size}
              </li>
            ))}
          </ul>
        </DocBlock>
        <DocBlock title="Don&apos;ts">
          <BulletList items={brandLogo.donts} />
        </DocBlock>
      </div>
    </PageSection>
  );
}

export function BrandSpacingSection() {
  return (
    <PageSection id="spacing" variant="muted">
      <SectionHeading
        eyebrow="Spacing rules"
        title="4px spacing scale"
        description={`Base unit ${brandSpacing.baseUnit}px — use Tailwind spacing or CSS vars for consistent rhythm.`}
      />
      <div className="mt-8 space-y-3">
        {brandSpacing.scale.map((step) => (
          <div
            key={step.token}
            className="flex flex-wrap items-center gap-4 rounded-ds-md border border-border/60 bg-surface px-4 py-3"
          >
            <code className="w-36 shrink-0 font-mono text-xs text-electric-blue">{step.token}</code>
            <div
              className="h-3 rounded-full bg-gradient-brand"
              style={{ width: step.rem }}
              aria-hidden
            />
            <span className="text-sm text-muted">
              {step.rem}
              {step.px ? ` (${step.px}px)` : ""} — {step.usage}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(brandSpacing.layout).map(([key, value]) => (
          <DocBlock key={key} title={key}>
            <code className="font-mono text-xs">{value}</code>
          </DocBlock>
        ))}
      </div>
    </PageSection>
  );
}

export function BrandTypographySection() {
  return (
    <PageSection id="typography" variant="default">
      <SectionHeading
        eyebrow="Typography system"
        title="Geist Sans & Mono"
        description={brandTypography.families.sans.usage}
      />
      <div className="mt-8 space-y-6">
        {brandTypography.scale.map((row) => (
          <div
            key={row.id}
            className="rounded-ds-lg border border-glass-border bg-glass/80 p-5 backdrop-blur-sm sm:p-6"
          >
            <p className="text-eyebrow text-electric-blue">{row.id}</p>
            <p className={cn("mt-2 text-foreground", row.className)}>{row.sample}</p>
            <p className="mt-2 font-mono text-xs text-muted">{row.specs}</p>
          </div>
        ))}
      </div>
      <BulletList items={brandTypography.rules} />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <DocBlock title="Sans stack">
          <code className="text-xs">{brandTypography.families.sans.stack}</code>
        </DocBlock>
        <DocBlock title="Mono stack">
          <code className="text-xs">{brandTypography.families.mono.stack}</code>
        </DocBlock>
      </div>
    </PageSection>
  );
}

export function BrandColorSection() {
  const groups = ["core", "premium", "semantic"] as const;

  return (
    <PageSection id="colors" variant="surface">
      <SectionHeading
        eyebrow="Color system"
        title="Palette tokens"
        description="Core legacy palette plus premium electric accents. Use CSS variables in components."
      />
      {groups.map((group) => (
        <div key={group} className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{group}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandColors
              .filter((color) => color.group === group)
              .map((color) => (
                <div
                  key={color.token}
                  className="overflow-hidden rounded-ds-lg border border-glass-border bg-surface shadow-soft"
                >
                  <div className="h-20" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <p className="font-semibold text-foreground">{color.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {color.hex} · {color.cssVar}
                    </p>
                    <p className="mt-2 text-sm text-muted">{color.usage}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </PageSection>
  );
}

export function BrandGradientSection() {
  return (
    <PageSection id="gradients" variant="default">
      <SectionHeading
        eyebrow="Gradient system"
        title="Brand gradients & mesh"
        description="Use utility classes bg-gradient-brand, bg-gradient-brand-subtle, ds-mesh, ds-mesh-dark."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {brandGradients.map((gradient) => (
          <div
            key={gradient.id}
            className="overflow-hidden rounded-ds-xl border border-glass-border shadow-soft"
          >
            <div
              className={cn(
                "h-28",
                gradient.id === "brand" && "bg-gradient-brand",
                gradient.id === "brand-subtle" && "bg-gradient-brand-subtle",
                gradient.id === "mesh" && "ds-mesh",
                gradient.id === "mesh-dark" && "ds-mesh-dark",
                gradient.id === "gold-shine" && "bg-gradient-gold-shine",
              )}
            />
            <div className="p-4">
              <p className="font-semibold text-foreground">{gradient.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">{gradient.cssVar}</p>
              <p className="mt-2 text-sm text-muted">{gradient.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export function BrandIconographySection() {
  return (
    <PageSection id="iconography" variant="muted">
      <SectionHeading
        eyebrow="Iconography"
        title="Icon sizes & style"
        description={brandIconography.touchTarget}
      />
      <div className="mt-8 flex flex-wrap gap-6">
        {brandIconography.sizes.map((size) => (
          <div key={size.token} className="text-center">
            <div
              className="mx-auto flex items-center justify-center rounded-ds-md border border-electric-blue/30 bg-electric-blue/10 text-electric-blue"
              style={{ width: size.rem, height: size.rem }}
            >
              ◆
            </div>
            <p className="mt-2 font-mono text-xs text-muted">{size.token}</p>
            <p className="text-xs text-muted">{size.px}px</p>
          </div>
        ))}
      </div>
      <BulletList items={brandIconography.style} />
    </PageSection>
  );
}

export function BrandIllustrationSection() {
  return (
    <PageSection id="illustration" variant="default">
      <SectionHeading
        eyebrow="Illustration framework"
        title={illustrationFrameworkCopy.title}
        description={illustrationFrameworkCopy.description}
      />
      <BulletList items={brandIllustration.rules} />
      <div className="mt-6">
        <DocBlock title="Diagram palette">
          <BulletList items={brandIllustration.palette} />
        </DocBlock>
      </div>
      <div className="mt-10">
        <IllustrationGallery />
      </div>
    </PageSection>
  );
}

export function BrandMotionSection() {
  return (
    <PageSection id="motion" variant="surface">
      <SectionHeading
        eyebrow="Motion system"
        title={motionSystemCopy.title}
        description={motionSystemCopy.description}
      />
      <div className="mt-10">
        <MotionShowcase />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <DocBlock title="Legacy utilities">
          <ul className="mt-2 space-y-1 font-mono text-xs">
            {brandMotion.patterns.map((pattern) => (
              <li key={pattern.className}>
                .{pattern.className} — {pattern.usage}
              </li>
            ))}
          </ul>
        </DocBlock>
        <DocBlock title="Accessibility">
          <p>{brandMotion.reducedMotion}</p>
          <p className="mt-2">{brandAccessibility.motion}</p>
        </DocBlock>
      </div>
    </PageSection>
  );
}

export function BrandSocialProofSection() {
  return (
    <PageSection id="social-proof" variant="surface">
      <SectionHeading
        eyebrow="Social proof"
        title={socialProofCopy.framework.title}
        description={socialProofCopy.framework.description}
      />
      <div className="mt-10">
        <SocialProofShowcase />
      </div>
    </PageSection>
  );
}

export function BrandProductShowcaseSection() {
  return (
    <PageSection id="product-showcase" variant="muted">
      <SectionHeading
        eyebrow="Product showcase"
        title={productShowcaseCopy.framework.title}
        description={productShowcaseCopy.framework.description}
      />
      <div className="mt-10">
        <ProductShowcaseShowcase />
      </div>
    </PageSection>
  );
}

export function BrandProductDemoSection() {
  return (
    <PageSection id="product-demos" variant="default">
      <SectionHeading
        eyebrow="Product demos"
        title={productDemoCopy.framework.title}
        description={productDemoCopy.framework.description}
      />
      <div className="mt-10">
        <ProductDemoShowcase />
      </div>
    </PageSection>
  );
}

export function BrandComponentSection() {
  return (
    <PageSection id="components" variant="default">
      <SectionHeading
        eyebrow="Component rules"
        title="Buttons & cards"
        description="Standards map to src/components/ui/variants.ts — use Button and Card primitives."
      />

      <h3 className="mt-10 text-lg font-semibold text-foreground">Button standards</h3>
      <p className="mt-2 text-sm text-muted">{brandButtonStandards.base}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {(Object.keys(buttonVariantClasses) as Array<keyof typeof buttonVariantClasses>).map(
          (variant) => (
            <span
              key={variant}
              className={cn(
                buttonBaseClasses,
                buttonVariantClasses[variant],
                buttonSizeClasses.md,
                "pointer-events-none",
              )}
            >
              {variant}
            </span>
          ),
        )}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {brandButtonStandards.variants.map((v) => (
          <DocBlock key={v.id} title={v.id}>
            {v.usage}
            <p className="mt-2 font-mono text-xs">{v.classHint}</p>
          </DocBlock>
        ))}
      </div>

      <h3 className="mt-12 text-lg font-semibold text-foreground">Card standards</h3>
      <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(cardVariantClasses) as Array<keyof typeof cardVariantClasses>).map(
          (variant) => (
            <Card key={variant} variant={variant} padding="sm">
              <p className="font-semibold capitalize text-foreground">{variant}</p>
              <p className="mt-2 text-sm text-muted">
                {brandCardStandards.variants.find((v) => v.id === variant)?.usage}
              </p>
            </Card>
          ),
        )}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {brandCardStandards.padding.map((p) => (
          <DocBlock key={p.id} title={`Padding ${p.id}`}>
            <code className="text-xs">{cardPaddingClasses[p.id as keyof typeof cardPaddingClasses]}</code>
            <p className="mt-2">{p.usage}</p>
          </DocBlock>
        ))}
      </div>
      <BulletList items={brandCardStandards.rules} />

      <h3 className="mt-12 text-lg font-semibold text-foreground">Radii & shadows</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Object.values(brandRadii).map((radius) => (
          <div
            key={radius.token}
            className="rounded-ds-lg border border-border bg-surface p-4 text-center shadow-soft"
            style={{ borderRadius: radius.value }}
          >
            <p className="text-xs font-semibold">{radius.token}</p>
            <p className="mt-1 text-xs text-muted">{radius.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {brandShadows.map((shadow) => (
          <p key={shadow.id} className="text-sm text-muted">
            <code className="text-xs text-electric-blue">{shadow.cssVar}</code> — {shadow.usage}
          </p>
        ))}
      </div>
    </PageSection>
  );
}

export function BrandAccessibilitySection() {
  return (
    <PageSection id="accessibility" variant="muted">
      <SectionHeading
        eyebrow="Accessibility standards"
        title="Contrast, focus, and semantics"
        description="WCAG-oriented defaults for marketing and form experiences."
      />
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="py-2 pr-4 font-semibold">Pair</th>
              <th className="py-2 pr-4 font-semibold">Level</th>
              <th className="py-2 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {brandAccessibility.contrast.map((row) => (
              <tr key={row.pair} className="border-b border-border/60">
                <td className="py-3 pr-4 text-foreground">{row.pair}</td>
                <td className="py-3 pr-4 text-muted">{row.level}</td>
                <td className="py-3 text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <DocBlock title="Focus">
          {brandAccessibility.focus.width} ring · offset {brandAccessibility.focus.offset} ·{" "}
          {brandAccessibility.focus.color}
          <p className="mt-2">{brandAccessibility.focus.rule}</p>
        </DocBlock>
        <DocBlock title="Touch targets">
          Minimum {brandAccessibility.touch.minTarget} — {brandAccessibility.touch.rule}
        </DocBlock>
      </div>
      <BulletList items={brandAccessibility.semantics} />
      <p className="mt-4 text-sm text-muted">{brandAccessibility.motion}</p>
    </PageSection>
  );
}
