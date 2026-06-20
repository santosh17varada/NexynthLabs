import { NextResponse } from "next/server";
import { NEWSLETTER_LEAD_SOURCE } from "@/config/newsletter";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";

type NewsletterBody = {
  email?: string;
  name?: string;
  sourcePage?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: NewsletterBody = {};

  try {
    body = (await request.json()) as NewsletterBody;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const name = body.name?.trim() ?? "";
  const sourcePage = body.sourcePage?.trim() || "unknown";

  if (!email) {
    return NextResponse.json({ message: "Please provide your email address." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const lead = await createLead({
      name: name || "Newsletter subscriber",
      email,
      phone: "",
      company: "",
      interestType: "Newsletter",
      sourcePage,
      message: "Newsletter subscription request",
      notes:
        "TODO: sync to email provider (Mailchimp, Brevo, SendGrid, etc.) when integration ships.",
      source: NEWSLETTER_LEAD_SOURCE,
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing.",
      leadId: lead.id,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[newsletter] Failed to store subscription:", error);
    return NextResponse.json(
      { message: "Unable to subscribe right now. Please try again later." },
      { status: 500 },
    );
  }
}
