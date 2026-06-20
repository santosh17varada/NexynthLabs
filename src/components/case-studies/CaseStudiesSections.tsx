import { PageSection } from "@/components/layout/PageSection";
import { CaseStudyCardPremium } from "@/components/case-studies/CaseStudyCardPremium";
import { CaseStudyFeatured } from "@/components/case-studies/CaseStudyFeatured";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import type { CaseStudy } from "@/types/portfolio";

type CaseStudiesFeaturedSectionProps = {
  studies: CaseStudy[];
};

export function CaseStudiesFeaturedSection({ studies }: CaseStudiesFeaturedSectionProps) {
  if (studies.length === 0) return null;

  const copy = caseStudiesPageCopy.featured;

  return (
    <PageSection id="featured-case-studies" variant="surface">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-10 space-y-8">
        {studies.map((study) => (
          <CaseStudyFeatured key={study.id} study={study} />
        ))}
      </div>
    </PageSection>
  );
}

type CaseStudiesGridSectionProps = {
  studies: CaseStudy[];
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function CaseStudiesGridSection({
  studies,
  title,
  description,
  eyebrow,
}: CaseStudiesGridSectionProps) {
  const copy = caseStudiesPageCopy.allStudies;

  if (studies.length === 0) {
    return (
      <PageSection variant="default">
        <p className="text-center text-muted">No published case studies yet. Check back soon.</p>
      </PageSection>
    );
  }

  return (
    <PageSection id="all-case-studies" variant="default">
      <SectionHeading
        eyebrow={eyebrow ?? copy.eyebrow}
        title={title ?? copy.title}
        description={description ?? copy.description}
      />
      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {studies.map((study) => (
          <CaseStudyCardPremium key={study.id} study={study} />
        ))}
      </div>
    </PageSection>
  );
}

export function CaseStudiesDisclaimer() {
  return (
    <PageSection variant="muted" divider={false} containerClassName="py-8 sm:py-10">
      <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
        {caseStudiesPageCopy.disclaimer}
      </p>
    </PageSection>
  );
}
