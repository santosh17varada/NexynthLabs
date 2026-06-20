import { NextResponse } from "next/server";
import { whatsAppCtaLeadMarker } from "@/config/whatsapp";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";

type WhatsAppCtaBody = {
  page?: string;
  context?: string;
};

export async function POST(request: Request) {
  let body: WhatsAppCtaBody = {};

  try {
    body = (await request.json()) as WhatsAppCtaBody;
  } catch {
    body = {};
  }

  const page = body.page?.trim() || "unknown";
  const context = body.context?.trim();
  const message = context
    ? `Visitor opened WhatsApp click-to-chat from ${page} (${context}).`
    : `Visitor opened WhatsApp click-to-chat from ${page}.`;

  try {
    const lead = await createLead({
      name: whatsAppCtaLeadMarker.name,
      email: whatsAppCtaLeadMarker.email,
      phone: "",
      company: "",
      interestType: whatsAppCtaLeadMarker.interestType,
      sourcePage: page.startsWith("/") ? page : `/${page}`,
      message,
      source: "whatsapp_cta",
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[whatsapp-cta] Failed to record lead:", error);
    return NextResponse.json(
      { message: "Unable to record WhatsApp CTA event." },
      { status: 500 },
    );
  }
}
