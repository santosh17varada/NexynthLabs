import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutLeadershipSection } from "@/components/leadership/LeadershipEmbeds";
import Link from "next/link";
import { PageSection } from "@/components/layout/PageSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innerLinkClass } from "@/components/ui/variants";
import { aboutContent } from "@/config/about";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildAboutPageJsonLd()} />
      <AboutHeroSection />

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading title={aboutContent.story.title} />
            <div className="mt-6 space-y-4">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link href="/leadership" className={`mt-6 inline-flex min-h-11 items-center text-sm ${innerLinkClass}`}>
              Leadership →
            </Link>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/founder" className={`inline-flex min-h-11 items-center text-sm ${innerLinkClass}`}>
                Founder story →
              </Link>
              <Link href="/vision" className={`inline-flex min-h-11 items-center text-sm ${innerLinkClass}`}>
                Vision →
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutContent.stats.map((stat) => (
              <Card key={stat.label} variant="glass">
                <p className="text-eyebrow text-electric-blue">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {aboutContent.values.map((value) => (
            <Card key={value.title} as="article" variant="elevated">
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <AboutLeadershipSection />

      <CtaBanner
        title="Let's work together"
        description="Partnerships, services, or product conversations — we respond within two business days."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="View careers"
        secondaryHref="/careers"
      />
    </>
  );
}
