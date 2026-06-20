import { WhatsAppCtaButton } from "@/components/whatsapp/WhatsAppCtaButton";
import { Card } from "@/components/ui/Card";
import { whatsAppPageCopy } from "@/config/whatsapp";
import { getWhatsAppChatConfig } from "@/lib/whatsapp";

type WhatsAppCtaCardProps = {
  page: "/contact" | "/partners" | "/partners/portal";
  title: string;
  description: string;
  prefilledMessage: string;
  context?: string;
};

export function WhatsAppCtaCard({
  page,
  title,
  description,
  prefilledMessage,
  context,
}: WhatsAppCtaCardProps) {
  const config = getWhatsAppChatConfig(prefilledMessage);

  if (!config.ctaVisible) {
    return null;
  }

  return (
    <Card className="mt-6 border-electric-blue/20 bg-electric-blue/5 p-5 sm:p-6">
      <p className="text-eyebrow font-semibold text-electric-blue">
        WhatsApp Business
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
      <p className="mt-3 text-xs text-muted">{whatsAppPageCopy.readinessNote}</p>
      <div className="mt-5">
        <WhatsAppCtaButton
          chatUrl={config.chatUrl}
          page={page}
          context={context}
        />
      </div>
    </Card>
  );
}
