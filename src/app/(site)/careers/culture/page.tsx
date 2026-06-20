import { CultureSections } from "@/components/careers/CultureSections";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { careersCulturePageCopy, cultureSections } from "@/config/careers";
import { getCareersMailtoLink } from "@/config/site";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("careersCulture");

export default function CareersCulturePage() {
  const { hero, disclaimer, footnote, closingCta } = careersCulturePageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} variant="dark">
        <Button href="/careers#open-positions" variant="gradient" size="lg">
          View open roles
        </Button>
        <Button href={getCareersMailtoLink()} external variant="outline" size="lg">
          Email careers
        </Button>
      </MarketingHero>

      <Container className="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <nav
          aria-label="Culture sections"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {cultureSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-muted transition-colors hover:border-electric-blue/40 hover:text-foreground"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </Container>

      <CultureSections sections={cultureSections} />

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">{footnote}</p>
      </Container>

      <CtaBanner
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primary.label}
        primaryHref={closingCta.primary.href}
        secondaryLabel="Email careers"
        secondaryHref={getCareersMailtoLink()}
      />
    </>
  );
}
