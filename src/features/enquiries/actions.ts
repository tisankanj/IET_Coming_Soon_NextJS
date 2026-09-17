"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { CONTACT_LINKS } from "@/config/site";
import {
  BOOKING_SERVICE_OPTIONS,
  optionLabel,
  TIME_OPTIONS,
  VEHICLE_TYPE_OPTIONS,
} from "@/content/en/enquiries";
import { bookingSchema, partnerEnquirySchema, partsEnquirySchema } from "@/features/enquiries/schemas";
import { createReference, isRateLimited, looksAutomated } from "@/features/enquiries/spam-guard";
import type { EnquiryState, SummaryLine } from "@/features/enquiries/types";

// Approved flow: validate on the server, give the enquiry a reference, then hand it to WhatsApp.
// Nothing is stored or emailed yet, so no personal data leaves the visitor's device until they
// press Send in WhatsApp.

const BLOCKED_STATE: EnquiryState = {
  status: "error",
  message: "We could not send this form. Please call or WhatsApp us instead.",
  fieldErrors: {},
};

const RATE_LIMITED_STATE: EnquiryState = {
  status: "error",
  message: "You have sent several requests in a short time. Please call or WhatsApp us, or try again later.",
  fieldErrors: {},
};

async function clientKey() {
  const headerList = await headers();
  return headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function validationErrorState(error: z.ZodError): EnquiryState {
  const fieldErrors: Record<string, string> = {};
  const flattened = z.flattenError(error).fieldErrors as Record<string, string[] | undefined>;
  for (const [field, messages] of Object.entries(flattened)) {
    if (messages && messages.length > 0) {
      fieldErrors[field] = messages[0];
    }
  }
  return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
}

function buildWhatsAppUrl(title: string, reference: string, summary: SummaryLine[]) {
  const lines = [title, `Reference: ${reference}`, ""];
  for (const line of summary) {
    lines.push(`${line.label}: ${line.value}`);
  }
  return `${CONTACT_LINKS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Only the reference and form type are logged. Names, phone numbers and messages are never logged.
function logPreparedEnquiry(event: string, reference: string) {
  console.info(JSON.stringify({ event, reference }));
}

export async function submitBooking(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (looksAutomated(formData)) {
    return BLOCKED_STATE;
  }

  const result = bookingSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return validationErrorState(result.error);
  }

  if (isRateLimited(await clientKey())) {
    return RATE_LIMITED_STATE;
  }

  const booking = result.data;
  const reference = createReference("B");
  const vehicleParts = [
    optionLabel(VEHICLE_TYPE_OPTIONS, booking.vehicleType),
    [booking.vehicleBrand, booking.vehicleModel].filter(Boolean).join(" "),
    booking.registration ? `(${booking.registration})` : "",
  ];

  const summary: SummaryLine[] = [
    { label: "Name", value: booking.name },
    { label: "Phone", value: booking.phone },
    { label: "WhatsApp", value: booking.whatsappSame === "yes" ? "Same as phone" : booking.whatsapp },
    { label: "Vehicle", value: vehicleParts.filter(Boolean).join(", ") },
    { label: "Service", value: optionLabel(BOOKING_SERVICE_OPTIONS, booking.service) },
    {
      label: "Preferred date",
      value: `${booking.preferredDate}, ${optionLabel(TIME_OPTIONS, booking.preferredTime)}`,
    },
  ];
  if (booking.problem) {
    summary.push({ label: "Problem", value: booking.problem });
  }

  logPreparedEnquiry("enquiry.booking.prepared", reference);
  return {
    status: "success",
    reference,
    summary,
    whatsappUrl: buildWhatsAppUrl("IET Service Point booking request", reference, summary),
  };
}

export async function submitPartsEnquiry(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (looksAutomated(formData)) {
    return BLOCKED_STATE;
  }

  const result = partsEnquirySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return validationErrorState(result.error);
  }

  if (isRateLimited(await clientKey())) {
    return RATE_LIMITED_STATE;
  }

  const enquiry = result.data;
  const reference = createReference("P");
  const summary: SummaryLine[] = [
    { label: "Name", value: enquiry.name },
    { label: "Phone", value: enquiry.phone },
    { label: "Vehicle model", value: [enquiry.vehicleModel, enquiry.modelYear].filter(Boolean).join(", ") },
    { label: "Part needed", value: enquiry.partDescription },
  ];
  if (enquiry.partNumber) {
    summary.push({ label: "Part number", value: enquiry.partNumber });
  }
  if (enquiry.quantity) {
    summary.push({ label: "Quantity", value: enquiry.quantity });
  }

  logPreparedEnquiry("enquiry.parts.prepared", reference);
  return {
    status: "success",
    reference,
    summary,
    whatsappUrl: buildWhatsAppUrl("IET Service Point genuine parts enquiry", reference, summary),
  };
}

export async function submitPartnerEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (looksAutomated(formData)) {
    return BLOCKED_STATE;
  }

  const result = partnerEnquirySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return validationErrorState(result.error);
  }

  if (isRateLimited(await clientKey())) {
    return RATE_LIMITED_STATE;
  }

  const enquiry = result.data;
  const reference = createReference("R");
  const summary: SummaryLine[] = [
    { label: "Name", value: enquiry.name },
    { label: "Company", value: enquiry.company },
  ];
  if (enquiry.role) {
    summary.push({ label: "Role", value: enquiry.role });
  }
  summary.push({ label: "Email", value: enquiry.email });
  if (enquiry.phone) {
    summary.push({ label: "Phone", value: enquiry.phone });
  }
  summary.push({ label: "Partnership area", value: enquiry.category });
  summary.push({ label: "Message", value: enquiry.message });

  logPreparedEnquiry("enquiry.partnership.prepared", reference);
  return {
    status: "success",
    reference,
    summary,
    whatsappUrl: buildWhatsAppUrl("IET Service Point partnership enquiry", reference, summary),
  };
}
