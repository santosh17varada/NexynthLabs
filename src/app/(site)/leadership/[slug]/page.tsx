import { notFound } from "next/navigation";
import { LeadershipProfileDetail } from "@/components/leadership/LeadershipProfileDetail";
import { LeadershipSectionNav } from "@/components/leadership/LeadershipSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getLeadershipProfile,
  getLeadershipProfilePath,
  leadershipPageCopy,
  leadershipProfiles,
} from "@/config/leadership";
import { buildLeadershipProfileJsonLd, createPageMetadata } from "@/lib/seo";

type LeadershipProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return leadershipProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: LeadershipProfilePageProps) {
  const { slug } = await params;
  const profile = getLeadershipProfile(slug);
  if (!profile) return {};

  const title = profile.seoTitle ?? `${profile.name} — ${profile.title}`;
  const description = profile.seoDescription ?? profile.excerpt;

  return createPageMetadata(title, description, {
    path: getLeadershipProfilePath(slug),
  });
}

export default async function LeadershipProfilePage({ params }: LeadershipProfilePageProps) {
  const { slug } = await params;
  const profile = getLeadershipProfile(slug);

  if (!profile) notFound();

  const { closingCta } = leadershipPageCopy;

  return (
    <>
      <JsonLd data={buildLeadershipProfileJsonLd(profile)} />
      <MarketingHero
        eyebrow="Leadership"
        title={profile.name}
        description={profile.title}
        variant="compact"
      />
      <LeadershipSectionNav />
      <LeadershipProfileDetail profile={profile} />

      <Container className="border-t border-border/60 py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
          {leadershipPageCopy.disclaimer}
        </p>
      </Container>

      <CtaBanner
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primary.label}
        primaryHref={closingCta.primary.href}
        secondaryLabel="All leaders"
        secondaryHref="/leadership"
      />
    </>
  );
}
