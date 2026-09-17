import { PARTNER_CATEGORIES } from "@/content/en/partners";
import { REPAIR_SERVICE, SERVICES } from "@/content/en/services";

export type ChoiceOption = {
  value: string;
  label: string;
};

export const BOOKING_SERVICE_OPTIONS: ChoiceOption[] = [
  ...SERVICES.map((service) => ({ value: service.id, label: service.name })),
  { value: REPAIR_SERVICE.id, label: "Repair a problem" },
  { value: "not-sure", label: "Not sure, please inspect" },
];

export const VEHICLE_TYPE_OPTIONS: ChoiceOption[] = [
  { value: "three-wheeler", label: "Three-wheeler" },
  { value: "other", label: "Other vehicle" },
];

export const TIME_OPTIONS: ChoiceOption[] = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "any", label: "Any time" },
];

export const PARTNER_CATEGORY_OPTIONS: ChoiceOption[] = [
  ...PARTNER_CATEGORIES.map((category) => ({ value: category.name, label: category.name })),
  { value: "Other", label: "Other" },
];

export function optionLabel(options: ChoiceOption[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

// One message per field, shared by browser checks and server validation so both say the same thing.
export const FIELD_MESSAGES = {
  name: "Enter your name.",
  phone: "Enter a valid Sri Lankan phone number, for example 075 253 0495.",
  whatsapp: "Enter the WhatsApp number, for example 075 253 0495.",
  whatsappSame: "Tell us which number has WhatsApp.",
  vehicleType: "Choose a vehicle type.",
  service: "Choose a service.",
  problem: "Describe the problem in a few words so we can plan the inspection.",
  preferredDate: "Choose today or a later date.",
  preferredTime: "Choose a preferred time.",
  consent: "Please agree so we can contact you about this request.",
  vehicleModel: "Enter your vehicle model, for example TVS King.",
  partDescription: "Tell us which part you need.",
  quantity: "Enter a quantity between 1 and 99.",
  company: "Enter your company or organization.",
  email: "Enter a valid email address.",
  category: "Choose a partnership area.",
  message: "Tell us a little about the partnership you have in mind.",
} as const;

export type FieldName = keyof typeof FIELD_MESSAGES;
