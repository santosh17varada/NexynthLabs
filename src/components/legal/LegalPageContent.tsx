import type { LegalDocument } from "@/config/legal";
import { LEGAL_REVIEW_NOTICE } from "@/config/legal";
import { PageSection } from "@/components/layout/PageSection";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { legalProseClasses } from "@/components/ui/variants";
import { buildWebPageJsonLd } from "@/lib/seo";

type LegalPageContentProps = {
  document: LegalDocument;
  path: string;
};

export function LegalPageContent({ document, path }: LegalPageContentProps) {
  const webPageJsonLd = buildWebPageJsonLd(
    document.title,
    document.description,
    path,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />
      <MarketingHero
        eyebrow="Legal"
        title={document.title}
        description={document.description}
        variant="dark"
      />
      <PageSection as="article" size="narrow">
        <div className={legalProseClasses.notice} role="note">
          {LEGAL_REVIEW_NOTICE}
        </div>
        <p className="mb-8 mt-6 text-sm text-muted">
          Last updated:{" "}
          <time dateTime={document.lastUpdated}>
            {new Date(document.lastUpdated).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <div className="space-y-10">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={legalProseClasses.sectionTitle}>{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={legalProseClasses.body}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageSection>
    </>
  );
}
