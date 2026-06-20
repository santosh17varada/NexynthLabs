import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Logo } from "@/components/ui/Logo";
import { DeferredAiAssistant } from "@/components/layout/DeferredAiAssistant";
import { DeferredPageConversionLayer } from "@/components/layout/DeferredPageConversionLayer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { MotionPreferenceSync } from "@/components/motion/MotionPreferenceSync";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { LocaleReadinessBanner } from "@/components/i18n/LocaleReadinessBanner";
import { buildSiteJsonLdGraph, siteMetadata } from "@/lib/seo";

export const metadata = siteMetadata;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteJsonLd = buildSiteJsonLdGraph();

  return (
    <LocaleProvider>
      <MotionPreferenceSync />
      <div className="flex min-h-dvh flex-col">
        <JsonLd data={siteJsonLd} />
        <AnalyticsScripts />
        <SkipToContent />
        <Header
          brand={
            <Logo
              className="min-w-0 justify-self-start"
              showDescriptor
              priority
            />
          }
        />
        <LocaleReadinessBanner />
        <main
          id="main-content"
          className="flex min-w-0 flex-1 flex-col overflow-x-clip"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
        <DeferredPageConversionLayer />
        <DeferredAiAssistant />
      </div>
    </LocaleProvider>
  );
}
