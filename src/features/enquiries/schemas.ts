import { z } from "zod";

import {
  BOOKING_SERVICE_OPTIONS,
  FIELD_MESSAGES,
  PARTNER_CATEGORY_OPTIONS,
  TIME_OPTIONS,
  VEHICLE_TYPE_OPTIONS,
  type ChoiceOption,
} from "@/content/en/enquiries";

// Server-side validation for all three enquiry forms. The browser checks the same rules first for
// quick feedback, but only these schemas decide what is accepted.

// +94, 94 or a leading 0, then the 9-digit local number.
const SRI_LANKA_PHONE = /^(?:\+94|94|0)?\d{9}$/;

export function todayInColombo() {
  // en-CA formats as YYYY-MM-DD, which compares correctly as a string.
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Colombo" }).format(new Date());
}

function stripPhoneFormatting(value: unknown) {
  return typeof value === "string" ? value.replace(/[\s()-]/g, "") : value;
}

function isOneOf(options: ChoiceOption[]) {
  return (value: string) => options.some((option) => option.value === value);
}

const nameField = z.string().trim().min(2, FIELD_MESSAGES.name).max(80, FIELD_MESSAGES.name);
const phoneField = z.preprocess(
  stripPhoneFormatting,
  z.string().regex(SRI_LANKA_PHONE, FIELD_MESSAGES.phone),
);
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");
const consentField = z.literal("yes", { error: FIELD_MESSAGES.consent });

export const bookingSchema = z
  .object({
    name: nameField,
    phone: phoneField,
    whatsappSame: z.enum(["yes", "no"], { error: FIELD_MESSAGES.whatsappSame }),
    whatsapp: z.preprocess(stripPhoneFormatting, z.string().optional().default("")),
    vehicleType: z.string().refine(isOneOf(VEHICLE_TYPE_OPTIONS), FIELD_MESSAGES.vehicleType),
    vehicleBrand: optionalText(40),
    vehicleModel: optionalText(60),
    registration: optionalText(20),
    service: z.string().refine(isOneOf(BOOKING_SERVICE_OPTIONS), FIELD_MESSAGES.service),
    problem: optionalText(800),
    preferredDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, FIELD_MESSAGES.preferredDate)
      .refine((date) => date >= todayInColombo(), FIELD_MESSAGES.preferredDate),
    preferredTime: z.string().refine(isOneOf(TIME_OPTIONS), FIELD_MESSAGES.preferredTime),
    consent: consentField,
  })
  .superRefine((booking, context) => {
    if (booking.whatsappSame === "no" && !SRI_LANKA_PHONE.test(booking.whatsapp)) {
      context.addIssue({ code: "custom", path: ["whatsapp"], message: FIELD_MESSAGES.whatsapp });
    }
    if (booking.service === "not-sure" && booking.problem.length < 10) {
      context.addIssue({ code: "custom", path: ["problem"], message: FIELD_MESSAGES.problem });
    }
  });

export const partsEnquirySchema = z.object({
  name: nameField,
  phone: phoneField,
  vehicleModel: z.string().trim().min(2, FIELD_MESSAGES.vehicleModel).max(60, FIELD_MESSAGES.vehicleModel),
  modelYear: optionalText(10),
  partDescription: z
    .string()
    .trim()
    .min(3, FIELD_MESSAGES.partDescription)
    .max(400, FIELD_MESSAGES.partDescription),
  partNumber: optionalText(40),
  quantity: z
    .string()
    .trim()
    .regex(/^(?:[1-9]\d?)?$/, FIELD_MESSAGES.quantity)
    .optional()
    .default(""),
  consent: consentField,
});

export const partnerEnquirySchema = z.object({
  name: nameField,
  company: z.string().trim().min(2, FIELD_MESSAGES.company).max(120, FIELD_MESSAGES.company),
  role: optionalText(80),
  email: z.email(FIELD_MESSAGES.email),
  phone: z.preprocess(
    stripPhoneFormatting,
    z
      .string()
      .regex(/^(?:(?:\+94|94|0)?\d{9})?$/, FIELD_MESSAGES.phone)
      .optional()
      .default(""),
  ),
  category: z.string().refine(isOneOf(PARTNER_CATEGORY_OPTIONS), FIELD_MESSAGES.category),
  message: z.string().trim().min(10, FIELD_MESSAGES.message).max(1200, FIELD_MESSAGES.message),
  consent: consentField,
});
