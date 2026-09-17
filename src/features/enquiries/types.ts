export type SummaryLine = {
  label: string;
  value: string;
};

export type EnquiryState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors: Record<string, string> }
  | { status: "success"; reference: string; whatsappUrl: string; summary: SummaryLine[] };

export const IDLE_STATE: EnquiryState = { status: "idle" };
