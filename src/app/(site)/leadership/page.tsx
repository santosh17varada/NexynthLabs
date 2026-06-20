import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  LeadershipGovernanceSection,
  LeadershipSectionNav,
  LeadershipTeamGridSection,
} from "@/components/leadership/LeadershipSections";
import {
  buildLeadershipIndexJsonLd,
  createPageMetadataFromKey,
} from "@/lib/seo";
import { leadershipPageCopy } from "@/config/leadership";

export const metadata = createPageMetadataFromKey("leadership");

export default function LeadershipPage() {
  const { hero, disclaimer, closingCta } = leadershipPageCopy;

  return (
    <>
      <JsonLd data={buildLeadershipIndexJsonLd()} />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <LeadershipSectionNav />
      <LeadershipTeamGridSection />
      <LeadershipGovernanceSection />

      <Container className="border-t border-border/60 py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
          {disclaimer}
        </p>
      </Container>

      <CtaBanner
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primary.label}
        primaryHref={closingCta.primary.href}
        secondaryLabel={closingCta.secondary.label}
        secondaryHref={closingCta.secondary.href}
      />
    </>
  );
}
