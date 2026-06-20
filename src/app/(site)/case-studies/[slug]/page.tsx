import { notFound } from "next/navigation";
import { AnalyticsPageView } from "@/components/analytics/AnalyticsPageView";
import { CaseStudyDetailPremium } from "@/components/case-studies/CaseStudyDetailPremium";
import { PageSection } from "@/components/layout/PageSection";
import { Badge } from "@/components/ui/Badge";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  caseStudies,
  getCaseStudyBySlug,
  getCaseStudyPath,
  getCaseStudyStatusLabel,
} from "@/config/portfolio";
import { buildCaseStudyJsonLd, createPageMetadata } from "@/lib/seo";

type CaseStudyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies
    .filter((study) => study.status === "published")
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study || study.status !== "published") {
    return {};
  }

  return createPageMetadata(study.title, study.summary, {
    path: getCaseStudyPath(slug),
    type: "article",
    publishedTime: study.publishedAt,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study || study.status !== "published") {
    notFound();
  }

  const jsonLd = buildCaseStudyJsonLd(study);
  const statusLabel = getCaseStudyStatusLabel(study);

  return (
    <>
      <AnalyticsPageView event="case_study_view" slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingHero
        variant="dark"
        containerClassName="py-12 sm:py-16 lg:py-20"
        titleClassName="text-display-md sm:text-display-lg"
        badges={
          <>
            <Badge variant="gradient" className="text-on-dark">
              Case study
            </Badge>
            <span className="rounded-full border border-glass-border-dark bg-glass-dark/50 px-2.5 py-1 text-xs font-semibold text-on-dark">
              {statusLabel}
            </span>
            <span className="text-sm text-on-dark-muted">{study.industry}</span>
          </>
        }
        title={study.title}
        description={study.summary}
        meta={
          <p className="text-sm font-medium text-electric-cyan">
            {study.projectName}
            <span className="text-on-dark-muted"> · {study.customerName}</span>
          </p>
        }
      />

      <PageSection variant="default" divider={false}>
        <CaseStudyDetailPremium study={study} />
      </PageSection>
    </>
  );
}
