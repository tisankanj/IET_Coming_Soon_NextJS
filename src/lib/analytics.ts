// Event names from the frontend spec (section 24). Events go to window.dataLayer,
// so GA4 or Tag Manager can read them once a measurement ID is added.

export const ANALYTICS_EVENTS = [
  "click_call",
  "click_whatsapp",
  "click_directions",
  "book_service_start",
  "book_service_step",
  "book_service_submit",
  "parts_enquiry_start",
  "parts_enquiry_submit",
  "partner_enquiry_submit",
  "view_tvs_authority",
  "view_founder_profile",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

type AnalyticsParams = Record<string, string | number>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function isAnalyticsEvent(value: string | undefined): value is AnalyticsEvent {
  return ANALYTICS_EVENTS.some((event) => event === value);
}

export function track(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
