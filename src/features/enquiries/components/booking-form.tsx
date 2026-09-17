"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { BOOKING_SERVICE_OPTIONS, TIME_OPTIONS, VEHICLE_TYPE_OPTIONS } from "@/content/en/enquiries";
import { submitBooking } from "@/features/enquiries/actions";
import { findInvalidFields, focusField, PHONE_INPUT_PATTERN } from "@/features/enquiries/client-validation";
import { EnquirySuccess } from "@/features/enquiries/components/enquiry-success";
import {
  ChoiceGroup,
  ConsentField,
  ErrorSummary,
  FormField,
  SpamTrap,
} from "@/features/enquiries/components/form-parts";
import { IDLE_STATE } from "@/features/enquiries/types";
import { track } from "@/lib/analytics";

const STEPS = ["Your details", "Vehicle", "Service", "Schedule"];

// Which step each field lives on, so a server error can send the visitor back to the right step.
const FIELD_STEP: Record<string, number> = {
  name: 0,
  phone: 0,
  whatsappSame: 0,
  whatsapp: 0,
  vehicleType: 1,
  vehicleBrand: 1,
  vehicleModel: 1,
  registration: 1,
  service: 2,
  problem: 2,
  preferredDate: 3,
  preferredTime: 3,
  consent: 3,
};

function todayInColombo() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Colombo" }).format(new Date());
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const initialService = BOOKING_SERVICE_OPTIONS.some((option) => option.value === requestedService)
    ? requestedService
    : "";

  const [state, formAction, pending] = useActionState(submitBooking, IDLE_STATE);
  const [handledState, setHandledState] = useState(state);
  const [step, setStep] = useState(0);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [whatsappSame, setWhatsappSame] = useState("yes");
  const [service, setService] = useState(initialService);
  const formRef = useRef<HTMLFormElement>(null);
  const stepRefs = useRef<Array<HTMLFieldSetElement | null>>([]);
  const summaryRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const startedRef = useRef(false);

  // When the server answers with errors, jump to the first step that has one (React's
  // "adjust state when a value changes" pattern, done during render instead of in an effect).
  if (state !== handledState) {
    setHandledState(state);
    if (state.status === "error") {
      const erroredSteps = Object.keys(state.fieldErrors).map((field) => FIELD_STEP[field] ?? 0);
      if (erroredSteps.length > 0) {
        setStep(Math.min(...erroredSteps));
      }
    }
  }

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.min = todayInColombo();
    }
  }, []);

  useEffect(() => {
    if (state.status === "error") {
      summaryRef.current?.focus();
    }
  }, [state]);

  const serverErrors = state.status === "error" ? state.fieldErrors : {};
  const errors = { ...serverErrors, ...clientErrors };

  function handleFirstFocus() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("book_service_start");
    }
  }

  function validateStep(index: number) {
    const container = stepRefs.current[index];
    const invalid = container ? findInvalidFields(container) : {};
    setClientErrors(invalid);
    const firstInvalid = Object.keys(invalid)[0];
    if (firstInvalid && formRef.current) {
      focusField(formRef.current, firstInvalid);
      return false;
    }
    return true;
  }

  function goToNextStep() {
    if (!validateStep(step)) {
      return;
    }
    const nextStep = step + 1;
    setStep(nextStep);
    track("book_service_step", { step: nextStep + 1 });
    requestAnimationFrame(() => stepRefs.current[nextStep]?.querySelector<HTMLElement>("legend")?.focus());
  }

  function goToPreviousStep() {
    setClientErrors({});
    setStep(step - 1);
  }

  // The action is dispatched by hand: with the form `action` prop, React 19 would clear every typed
  // field after a server validation error.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep(step)) {
      return;
    }
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <EnquirySuccess
        title="Booking details ready"
        reference={state.reference}
        whatsappUrl={state.whatsappUrl}
        summary={state.summary}
        submitEvent="book_service_submit"
      />
    );
  }

  const isLastStep = step === STEPS.length - 1;
  const showSummary = Object.keys(errors).length > 0 || state.status === "error";
  let summaryMessage = "Please check the highlighted fields.";
  if (state.status === "error" && Object.keys(clientErrors).length === 0) {
    summaryMessage = state.message;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstFocus}
      noValidate
      className="relative rounded-panel border bg-card p-5 sm:p-8"
    >
      <SpamTrap />

      <nav aria-label="Booking progress">
        <ol className="grid grid-cols-4 gap-2">
          {STEPS.map((label, index) => {
            const done = index < step;
            const current = index === step;
            return (
              <li key={label} aria-current={current ? "step" : undefined} className="flex flex-col gap-2">
                <span className={cn("h-1 rounded-full", done || current ? "bg-brand-orange" : "bg-border")} />
                <span
                  className={cn(
                    "flex items-center gap-1 text-xs font-semibold sm:text-sm",
                    current ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {done && <CheckIcon className="size-3.5 text-brand-orange" aria-hidden="true" />}
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">Step {index + 1}</span>
                </span>
              </li>
            );
          })}
        </ol>
        <p className="sr-only" aria-live="polite">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
      </nav>

      {showSummary && (
        <div className="mt-6">
          <ErrorSummary message={summaryMessage} errors={errors} summaryRef={summaryRef} />
        </div>
      )}

      <fieldset
        ref={(element) => {
          stepRefs.current[0] = element;
        }}
        hidden={step !== 0}
        className="mt-8 flex rise-in flex-col gap-6"
      >
        <legend tabIndex={-1} className="mb-2 font-display text-title font-semibold outline-none">
          Your details
        </legend>
        <FormField name="name" label="Full name" error={errors.name}>
          {(props) => (
            <Input
              {...props}
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
              enterKeyHint="next"
            />
          )}
        </FormField>
        <FormField
          name="phone"
          label="Mobile number"
          hint="Sri Lankan number, for example 075 253 0495."
          error={errors.phone}
        >
          {(props) => (
            <Input
              {...props}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              pattern={PHONE_INPUT_PATTERN}
              enterKeyHint="next"
            />
          )}
        </FormField>
        <ChoiceGroup
          name="whatsappSame"
          legend="Does this number have WhatsApp?"
          options={[
            { value: "yes", label: "Yes, same number" },
            { value: "no", label: "No, use another number" },
          ]}
          value={whatsappSame}
          onChange={setWhatsappSame}
          error={errors.whatsappSame}
        />
        {whatsappSame === "no" && (
          <FormField name="whatsapp" label="WhatsApp number" error={errors.whatsapp}>
            {(props) => (
              <Input
                {...props}
                name="whatsapp"
                type="tel"
                inputMode="tel"
                required
                pattern={PHONE_INPUT_PATTERN}
              />
            )}
          </FormField>
        )}
      </fieldset>

      <fieldset
        ref={(element) => {
          stepRefs.current[1] = element;
        }}
        hidden={step !== 1}
        className="mt-8 flex rise-in flex-col gap-6"
      >
        <legend tabIndex={-1} className="mb-2 font-display text-title font-semibold outline-none">
          Vehicle
        </legend>
        <ChoiceGroup
          name="vehicleType"
          legend="Vehicle type"
          options={VEHICLE_TYPE_OPTIONS}
          defaultValue="three-wheeler"
          error={errors.vehicleType}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            name="vehicleBrand"
            label="Brand"
            optional
            hint="For example TVS."
            error={errors.vehicleBrand}
          >
            {(props) => <Input {...props} name="vehicleBrand" maxLength={40} />}
          </FormField>
          <FormField
            name="vehicleModel"
            label="Model"
            optional
            hint="For example King."
            error={errors.vehicleModel}
          >
            {(props) => <Input {...props} name="vehicleModel" maxLength={60} />}
          </FormField>
        </div>
        <FormField name="registration" label="Registration number" optional error={errors.registration}>
          {(props) => <Input {...props} name="registration" maxLength={20} autoCapitalize="characters" />}
        </FormField>
      </fieldset>

      <fieldset
        ref={(element) => {
          stepRefs.current[2] = element;
        }}
        hidden={step !== 2}
        className="mt-8 flex rise-in flex-col gap-6"
      >
        <legend tabIndex={-1} className="mb-2 font-display text-title font-semibold outline-none">
          Service
        </legend>
        <ChoiceGroup
          name="service"
          legend="What do you need?"
          options={BOOKING_SERVICE_OPTIONS}
          value={service}
          onChange={setService}
          error={errors.service}
        />
        <FormField
          name="problem"
          label="Describe the problem"
          optional={service !== "not-sure"}
          hint="What you notice, when it started and when it happens. You can send photos on WhatsApp after this form."
          error={errors.problem}
        >
          {(props) => (
            <Textarea
              {...props}
              name="problem"
              maxLength={800}
              required={service === "not-sure"}
              minLength={service === "not-sure" ? 10 : undefined}
            />
          )}
        </FormField>
      </fieldset>

      <fieldset
        ref={(element) => {
          stepRefs.current[3] = element;
        }}
        hidden={step !== 3}
        className="mt-8 flex rise-in flex-col gap-6"
      >
        <legend tabIndex={-1} className="mb-2 font-display text-title font-semibold outline-none">
          Schedule
        </legend>
        <FormField name="preferredDate" label="Preferred date" error={errors.preferredDate}>
          {(props) => <Input {...props} ref={dateRef} name="preferredDate" type="date" required />}
        </FormField>
        <ChoiceGroup
          name="preferredTime"
          legend="Preferred time"
          options={TIME_OPTIONS}
          defaultValue="any"
          error={errors.preferredTime}
          columns="grid-cols-3"
        />
        <p className="text-sm text-muted-foreground">
          This is a request, not a confirmed slot. We confirm the time with you on WhatsApp or by phone.
        </p>
        <ConsentField
          text="I agree that IET Service Point may contact me by phone or WhatsApp about this booking."
          error={errors.consent}
        />
      </fieldset>

      <div className="mt-10 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={goToPreviousStep} disabled={pending}>
            <ArrowLeftIcon aria-hidden="true" />
            Back
          </Button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {isLastStep ? (
          <Button type="submit" size="lg" disabled={pending}>
            {pending && <Spinner aria-label="Preparing booking" />}
            {pending ? "Preparing" : "Prepare booking"}
          </Button>
        ) : (
          <Button type="button" size="lg" onClick={goToNextStep}>
            Continue
            <ArrowRightIcon aria-hidden="true" />
          </Button>
        )}
      </div>
    </form>
  );
}
