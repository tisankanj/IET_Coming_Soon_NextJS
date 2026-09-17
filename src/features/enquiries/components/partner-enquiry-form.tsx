"use client";

import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { PARTNER_CATEGORY_OPTIONS } from "@/content/en/enquiries";
import { submitPartnerEnquiry } from "@/features/enquiries/actions";
import { PHONE_INPUT_PATTERN } from "@/features/enquiries/client-validation";
import { ConsentField, FormField } from "@/features/enquiries/components/form-parts";
import { SingleStepForm } from "@/features/enquiries/components/single-step-form";

export function PartnerEnquiryForm() {
  return (
    <SingleStepForm
      action={submitPartnerEnquiry}
      submitLabel="Prepare partnership enquiry"
      successTitle="Partnership enquiry ready"
      submitEvent="partner_enquiry_submit"
    >
      {(errors) => (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField name="name" label="Full name" error={errors.name}>
              {(props) => (
                <Input {...props} name="name" autoComplete="name" required minLength={2} maxLength={80} />
              )}
            </FormField>
            <FormField name="role" label="Role" optional error={errors.role}>
              {(props) => <Input {...props} name="role" autoComplete="organization-title" maxLength={80} />}
            </FormField>
          </div>
          <FormField name="company" label="Company or organization" error={errors.company}>
            {(props) => (
              <Input
                {...props}
                name="company"
                autoComplete="organization"
                required
                minLength={2}
                maxLength={120}
              />
            )}
          </FormField>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField name="email" label="Work email" error={errors.email}>
              {(props) => (
                <Input {...props} name="email" type="email" autoComplete="email" required maxLength={160} />
              )}
            </FormField>
            <FormField name="phone" label="Phone" optional error={errors.phone}>
              {(props) => (
                <Input
                  {...props}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern={PHONE_INPUT_PATTERN}
                />
              )}
            </FormField>
          </div>
          <FormField name="category" label="Partnership area" error={errors.category}>
            {(props) => (
              <NativeSelect {...props} name="category" required defaultValue="">
                <NativeSelectOption value="" disabled>
                  Choose an area
                </NativeSelectOption>
                {PARTNER_CATEGORY_OPTIONS.map((option) => (
                  <NativeSelectOption key={option.value} value={option.value}>
                    {option.label}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            )}
          </FormField>
          <FormField
            name="message"
            label="What would you like to discuss?"
            hint="Your brand or product, the partnership model you have in mind and any timelines."
            error={errors.message}
          >
            {(props) => <Textarea {...props} name="message" required minLength={10} maxLength={1200} />}
          </FormField>
          <ConsentField
            text="I agree that IET Service Point may contact me about this partnership enquiry."
            error={errors.consent}
          />
        </>
      )}
    </SingleStepForm>
  );
}
