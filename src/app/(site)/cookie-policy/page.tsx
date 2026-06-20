import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { cookiePolicy } from "@/config/legal";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("cookiePolicy");

export default function CookiePolicyPage() {
  return <LegalPageContent document={cookiePolicy} path="/cookie-policy" />;
}
