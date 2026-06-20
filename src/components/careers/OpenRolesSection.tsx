import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCareersMailtoLink } from "@/config/site";

type OpenRolesPlaceholderProps = {
  title: string;
  description: string;
  highlights: readonly string[];
  ctaLabel: string;
};

export function OpenRolesPlaceholder({
  title,
  description,
  highlights,
  ctaLabel,
}: OpenRolesPlaceholderProps) {
  return (
    <Card className="p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 space-y-2.5">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <Button href={getCareersMailtoLink()} variant="gradient" size="lg" className="mt-8">
        {ctaLabel}
      </Button>
    </Card>
  );
}

export function OpenRolesSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby="open-roles-heading">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 space-y-6">{children}</div>
    </section>
  );
}

export function CultureTeaserCard({
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Card className="p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
      >
        {ctaLabel} →
      </Link>
    </Card>
  );
}
