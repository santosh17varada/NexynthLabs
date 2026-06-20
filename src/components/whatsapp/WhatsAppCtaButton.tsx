"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { whatsAppPageCopy } from "@/config/whatsapp";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type WhatsAppCtaButtonProps = {
  chatUrl: string;
  page: string;
  context?: string;
  label?: string;
  variant?: "accent" | "outline" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function WhatsAppCtaButton({
  chatUrl,
  page,
  context,
  label = whatsAppPageCopy.ctaLabel,
  variant = "outline",
  size = "lg",
  className = "",
}: WhatsAppCtaButtonProps) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);

    try {
      trackPlannedEvent("whatsapp_cta_click", { source_page: page, context });
      await fetch("/api/whatsapp-cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, context }),
        keepalive: true,
      });
    } catch {
      // Non-blocking — still open WhatsApp if tracking fails
    }

    window.open(chatUrl, "_blank", "noopener,noreferrer");
    setPending(false);
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={`w-full sm:w-auto ${className}`}
      disabled={pending}
      onClick={handleClick}
    >
      {pending ? "Opening..." : label}
    </Button>
  );
}
