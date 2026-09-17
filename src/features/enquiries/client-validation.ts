import { FIELD_MESSAGES } from "@/content/en/enquiries";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// Browsers compile the pattern attribute with the regex "v" flag, which needs "(" and ")" escaped
// inside a character class. The server applies the exact Sri Lankan number rule.
export const PHONE_INPUT_PATTERN = "^\\+?[0-9\\s\\(\\)\\-]{9,16}$";

// Uses the browser's own constraint checks (required, pattern, min) inside one step or form,
// and returns the first message for each invalid field. The server re-checks everything.
export function findInvalidFields(container: HTMLElement) {
  const errors: Record<string, string> = {};
  const controls = container.querySelectorAll<FormControl>("input[name], select[name], textarea[name]");

  for (const control of controls) {
    if (control.type === "hidden" || control.disabled || errors[control.name]) {
      continue;
    }
    if (!control.checkValidity()) {
      const message = FIELD_MESSAGES[control.name as keyof typeof FIELD_MESSAGES];
      errors[control.name] = message ?? "Please check this field.";
    }
  }
  return errors;
}

export function focusField(form: HTMLFormElement, name: string) {
  const control = form.querySelector<HTMLElement>(`[name="${name}"]`);
  control?.focus();
}
