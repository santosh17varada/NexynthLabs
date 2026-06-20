import type { LeadSource } from "@/types/lead";
import { NextResponse } from "next/server";
import { resolveServiceInterestLabel } from "@/config/contact";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  interestType?: string;
  sourcePage?: string;
  message?: string;
  source?: string;
};

const ALLOWED_LEAD_SOURCES = new Set<LeadSource>([
  "contact-form",
  "partner-form",
  "whatsapp_cta",
  "careers",
  "other",
]);

function resolveLeadSource(raw: string | undefined): LeadSource {
  if (raw && ALLOWED_LEAD_SOURCES.has(raw as LeadSource)) {
    return raw as LeadSource;
  }
  return "contact-form";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resolveInterestType(body: LeadBody): string {
  if (body.interestType?.trim()) {
    return body.interestType.trim();
  }
  const serviceInterest = body.serviceInterest?.trim() ?? "";
  return serviceInterest
    ? resolveServiceInterestLabel(serviceInterest)
    : "Not specified";
}

export async function POST(request: Request) {
  const body = (await request.json()) as LeadBody;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const sourcePage = body.sourcePage?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please fill in name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    const lead = await createLead({
      name,
      email,
      phone,
      company,
      interestType: resolveInterestType(body),
      sourcePage,
      message,
      source: resolveLeadSource(body.source),
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received.",
      leadId: lead.id,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[leads] Failed to store lead:", error);
    return NextResponse.json(
      { message: "Unable to submit your enquiry. Please try again later." },
      { status: 500 },
    );
  }
}
