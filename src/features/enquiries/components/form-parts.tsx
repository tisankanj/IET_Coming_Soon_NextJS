"use client";

import { useEffect, useRef } from "react";
import { cn } from "cn";

import { Label } from "@/components/ui/label";
import type { ChoiceOption } from "@/content/en/enquiries";

type ControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
};

type FormFieldProps = {
  name: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: (controlProps: ControlProps) => React.ReactNode;
};

// Label above, hint and error below, all linked to the control for screen readers.
export function FormField({ name, label, optional = false, hint, error, children }: FormFieldProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>
        {label}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children({ id: name, "aria-invalid": Boolean(error), "aria-describedby": describedBy })}
      {hint && (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type ChoiceGroupProps = {
  name: string;
  legend: string;
  options: ChoiceOption[];
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  columns?: string;
};

// Visible radio "cards" built on native radio inputs, so they submit with the form and work with the keyboard.
export function ChoiceGroup({
  name,
  legend,
  options,
  error,
  value,
  defaultValue,
  onChange,
  columns = "sm:grid-cols-2",
}: ChoiceGroupProps) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <fieldset aria-describedby={errorId} className="flex flex-col gap-3">
      <legend className="mb-3 text-sm font-semibold">{legend}</legend>
      <div className={cn("grid gap-3", columns)}>
        {options.map((option, index) => (
          <label
            key={option.value}
            className={cn(
              "flex min-h-14 cursor-pointer items-center gap-3 rounded-control border bg-background px-4 py-3 font-semibold transition-colors",
              "has-checked:border-brand-orange has-checked:bg-brand-orange/[0.06] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring",
              error ? "border-destructive" : "border-input",
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              required
              {...(value !== undefined
                ? { checked: value === option.value, onChange: () => onChange?.(option.value) }
                : { defaultChecked: defaultValue === option.value })}
              id={index === 0 ? name : undefined}
              className="size-4 shrink-0 accent-brand-orange"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} className="text-sm font-semibold text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function ConsentField({ text, error }: { text: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex cursor-pointer items-start gap-3 text-subtle-foreground">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          value="yes"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "consent-error" : undefined}
          className="mt-1 size-5 shrink-0 accent-brand-orange"
        />
        <span>{text}</span>
      </label>
      {error && (
        <p id="consent-error" className="text-sm font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

// Honeypot plus the time the form was opened. Both are checked on the server.
export function SpamTrap() {
  const startedAtRef = useRef<HTMLInputElement>(null);

  // Written straight to the input: the time the form appeared in this browser.
  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  return (
    <>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  );
}

type ErrorSummaryProps = {
  message: string;
  errors: Record<string, string>;
  summaryRef: React.RefObject<HTMLDivElement | null>;
};

export function ErrorSummary({ message, errors, summaryRef }: ErrorSummaryProps) {
  const entries = Object.entries(errors);

  return (
    <div
      ref={summaryRef}
      tabIndex={-1}
      role="alert"
      className="rounded-panel border border-destructive/40 bg-destructive/[0.06] p-5 outline-none focus-visible:outline-2 focus-visible:outline-ring"
    >
      <p className="font-semibold text-destructive">{message}</p>
      {entries.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {entries.map(([name, error]) => (
            <li key={name}>
              <a href={`#${name}`} className="text-foreground underline underline-offset-4">
                {error}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
