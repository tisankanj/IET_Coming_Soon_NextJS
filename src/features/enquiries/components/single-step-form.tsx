"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { findInvalidFields, focusField } from "@/features/enquiries/client-validation";
import { EnquirySuccess } from "@/features/enquiries/components/enquiry-success";
import { ErrorSummary, SpamTrap } from "@/features/enquiries/components/form-parts";
import { IDLE_STATE, type EnquiryState } from "@/features/enquiries/types";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type SingleStepFormProps = {
  action: (previous: EnquiryState, formData: FormData) => Promise<EnquiryState>;
  submitLabel: string;
  successTitle: string;
  startEvent?: AnalyticsEvent;
  submitEvent: AnalyticsEvent;
  children: (errors: Record<string, string>) => React.ReactNode;
};

// Shared shell for the parts and partnership forms: browser checks, server action, error summary and success.
export function SingleStepForm({
  action,
  submitLabel,
  successTitle,
  startEvent,
  submitEvent,
  children,
}: SingleStepFormProps) {
  const [state, formAction, pending] = useActionState(action, IDLE_STATE);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const serverErrors = state.status === "error" ? state.fieldErrors : {};
  const errors = { ...serverErrors, ...clientErrors };

  // Moving focus is a DOM side effect, so it belongs in an effect. No state is set here.
  useEffect(() => {
    if (state.status === "error") {
      summaryRef.current?.focus();
    }
  }, [state]);

  function handleFirstFocus() {
    if (startEvent && !startedRef.current) {
      startedRef.current = true;
      track(startEvent);
    }
  }

  // Dispatched by hand: with the form `action` prop, React 19 would clear typed fields after a server error.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const invalid = findInvalidFields(event.currentTarget);
    setClientErrors(invalid);
    const firstInvalid = Object.keys(invalid)[0];
    if (firstInvalid && formRef.current) {
      focusField(formRef.current, firstInvalid);
      return;
    }
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <EnquirySuccess
        title={successTitle}
        reference={state.reference}
        whatsappUrl={state.whatsappUrl}
        summary={state.summary}
        submitEvent={submitEvent}
      />
    );
  }

  let summaryMessage = "Please check the highlighted fields.";
  if (state.status === "error" && Object.keys(clientErrors).length === 0) {
    summaryMessage = state.message;
  }
  const showSummary = Object.keys(errors).length > 0 || state.status === "error";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstFocus}
      noValidate
      className="relative flex flex-col gap-6 rounded-panel border bg-card p-5 sm:p-8"
    >
      <SpamTrap />
      {showSummary && <ErrorSummary message={summaryMessage} errors={errors} summaryRef={summaryRef} />}
      {children(errors)}
      <div className="border-t pt-6">
        <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
          {pending ? <Spinner aria-label="Preparing" /> : null}
          {pending ? "Preparing" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
