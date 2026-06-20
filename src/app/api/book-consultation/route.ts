import { NextResponse } from "next/server";
import {
  BOOK_CONSULTATION_LEAD_SOURCE,
  resolveConsultationTopicLabel,
} from "@/config/book-consultation";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";

type BookConsultationBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  topic?: string;
  preferredDate?: string;
  message?: string;
  sourcePage?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatConsultationMessage(body: BookConsultationBody): string {
  const parts: string[] = [];
  const message = body.message?.trim();

  if (message) {
    parts.push(message);
  }

  const preferredDate = body.preferredDate?.trim();
  if (preferredDate) {
    parts.push(`Preferred consultation date: ${preferredDate}`);
  }

  return parts.join("\n\n") || "Consultation request — no additional message.";
}

function formatConsultationNotes(preferredDate: string): string {
  if (!preferredDate) {
    return "Manual scheduling — calendar integration not yet connected.";
  }
  return `Preferred date: ${preferredDate}. Manual scheduling — calendar integration not yet connected.`;
}

export async function POST(request: Request) {
  let body: BookConsultationBody = {};

  try {
    body = (await request.json()) as BookConsultationBody;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const topic = body.topic?.trim() ?? "";
  const preferredDate = body.preferredDate?.trim() ?? "";
  const sourcePage = body.sourcePage?.trim() || "/book-consultation";

  if (!name || !email || !topic) {
    return NextResponse.json(
      { message: "Please fill in name, email, and topic." },
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
      interestType: `Consultation: ${resolveConsultationTopicLabel(topic)}`,
      sourcePage,
      message: formatConsultationMessage(body),
      notes: formatConsultationNotes(preferredDate),
      source: BOOK_CONSULTATION_LEAD_SOURCE,
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your consultation request has been received.",
      leadId: lead.id,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[book-consultation] Failed to store lead:", error);
    return NextResponse.json(
      { message: "Unable to submit your request. Please try again later." },
      { status: 500 },
    );
  }
}
