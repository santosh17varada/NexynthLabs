import { siteConfig, getMailtoLink, getTelLink } from "@/config/site";
import { contactExperienceCopy } from "@/config/contact-experience";
import { WhatsAppCtaCard } from "@/components/whatsapp/WhatsAppCtaCard";
import { ContactBusinessCta } from "@/components/contact/ContactBusinessCta";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookConsultationHref } from "@/config/book-consultation";
import { whatsAppPageCopy } from "@/config/whatsapp";
import { cn } from "@/lib/cn";

type ContactSidebarProps = {
  className?: string;
};

export function ContactSidebar({ className }: ContactSidebarProps) {
  const { email, phone, phoneDisplay, address } = siteConfig;
  const { sidebar } = contactExperienceCopy;

  return (
    <aside className={cn("space-y-6", className)}>
      <SectionHeading title={sidebar.title} description={sidebar.description} />

      <div className="grid gap-4">
        <Card variant="glass" padding="sm" className="sm:p-5">
          <p className="text-eyebrow text-electric-blue">Email</p>
          <a
            href={getMailtoLink()}
            className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-electric-blue"
          >
            {email}
          </a>
        </Card>

        <Card variant="glass" padding="sm" className="sm:p-5">
          <p className="text-eyebrow text-electric-blue">Phone</p>
          <a
            href={getTelLink()}
            className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-electric-blue"
          >
            {phone}
          </a>
          <p className="mt-1 text-sm text-muted">{phoneDisplay}</p>
        </Card>

        <Card variant="glass" padding="sm" className="sm:p-5">
          <p className="text-eyebrow text-electric-blue">Office</p>
          <address className="mt-2 not-italic text-sm leading-relaxed text-foreground sm:text-base">
            {address.full}
          </address>
        </Card>
      </div>

      <Card variant="glass" className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground">Book a consultation</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Prefer a structured discovery call? Choose your topic and preferred date — we confirm
          availability manually.
        </p>
        <div className="mt-4">
          <Button href={bookConsultationHref()} variant="gradient" size="md">
            Book free consultation
          </Button>
        </div>
      </Card>

      <WhatsAppCtaCard
        page="/contact"
        title={whatsAppPageCopy.contact.title}
        description={whatsAppPageCopy.contact.description}
        prefilledMessage={whatsAppPageCopy.contact.prefilledMessage}
        context="contact"
      />

      <ContactBusinessCta compact />
    </aside>
  );
}

/** @deprecated Use ContactSidebar */
export function ContactDetails() {
  return <ContactSidebar />;
}
