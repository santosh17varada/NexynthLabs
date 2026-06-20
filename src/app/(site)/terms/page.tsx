import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { termsOfService } from "@/config/legal";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("terms");

export default function TermsPage() {
  return <LegalPageContent document={termsOfService} path="/terms" />;
}
