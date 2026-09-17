"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitPartsEnquiry } from "@/features/enquiries/actions";
import { PHONE_INPUT_PATTERN } from "@/features/enquiries/client-validation";
import { ConsentField, FormField } from "@/features/enquiries/components/form-parts";
import { SingleStepForm } from "@/features/enquiries/components/single-step-form";

export function PartsEnquiryForm() {
  return (
    <SingleStepForm
      action={submitPartsEnquiry}
      submitLabel="Prepare parts enquiry"
      successTitle="Parts enquiry ready"
      startEvent="parts_enquiry_start"
      submitEvent="parts_enquiry_submit"
    >
      {(errors) => (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField name="name" label="Full name" error={errors.name}>
              {(props) => (
                <Input {...props} name="name" autoComplete="name" required minLength={2} maxLength={80} />
              )}
            </FormField>
            <FormField name="phone" label="Mobile number" error={errors.phone}>
              {(props) => (
                <Input
                  {...props}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  pattern={PHONE_INPUT_PATTERN}
                />
              )}
            </FormField>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              name="vehicleModel"
              label="Vehicle model"
              hint="For example TVS King."
              error={errors.vehicleModel}
            >
              {(props) => <Input {...props} name="vehicleModel" required minLength={2} maxLength={60} />}
            </FormField>
            <FormField name="modelYear" label="Model year" optional error={errors.modelYear}>
              {(props) => <Input {...props} name="modelYear" inputMode="numeric" maxLength={10} />}
            </FormField>
          </div>
          <FormField
            name="partDescription"
            label="Part you need"
            hint="Describe the part. You can send a photo of the old part on WhatsApp after this form."
            error={errors.partDescription}
          >
            {(props) => <Textarea {...props} name="partDescription" required minLength={3} maxLength={400} />}
          </FormField>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField name="partNumber" label="Part number" optional error={errors.partNumber}>
              {(props) => <Input {...props} name="partNumber" maxLength={40} autoCapitalize="characters" />}
            </FormField>
            <FormField name="quantity" label="Quantity" optional error={errors.quantity}>
              {(props) => (
                <Input {...props} name="quantity" inputMode="numeric" pattern="^[1-9][0-9]?$" maxLength={2} />
              )}
            </FormField>
          </div>
          <ConsentField
            text="I agree that IET Service Point may contact me by phone or WhatsApp about this parts enquiry."
            error={errors.consent}
          />
        </>
      )}
    </SingleStepForm>
  );
}
