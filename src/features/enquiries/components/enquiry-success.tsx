"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2Icon, PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import type { SummaryLine } from "@/features/enquiries/types";

type EnquirySuccessProps = {
  title: string;
  reference: string;
  whatsappUrl: string;
  summary: SummaryLine[];
  submitEvent: AnalyticsEvent;
};

// The enquiry is only delivered when the visitor presses Send in WhatsApp, so the page says so plainly.
export function EnquirySuccess({ title, reference, whatsappUrl, summary, submitEvent }: EnquirySuccessProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const trackedReferenceRef = useRef("");

  useEffect(() => {
    headingRef.current?.focus();
    // One submit event per reference, even when React runs this effect twice.
    if (trackedReferenceRef.current !== reference) {
      trackedReferenceRef.current = reference;
      track(submitEvent, { reference });
    }
  }, [reference, submitEvent]);

  return (
    <div className="rise-in rounded-panel border bg-card p-6 sm:p-10">
      <CheckCircle2Icon className="size-10 text-brand-orange" aria-hidden="true" />
      <h2 ref={headingRef} tabIndex={-1} className="mt-5 font-display text-title font-semibold outline-none">
        {title}
      </h2>
      <p className="mt-3 text-subtle-foreground">
        Your reference is <strong className="font-display text-foreground tabular-nums">{reference}</strong>.
        It is not sent yet: tap Send on WhatsApp to share these details with our team. You can attach photos
        in the same chat.
      </p>

      <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-control bg-surface-soft p-5 text-sm sm:grid-cols-[auto_1fr]">
        {summary.map((line) => (
          <div key={line.label} className="contents">
            <dt className="font-semibold text-muted-foreground">{line.label}</dt>
            <dd className="break-words text-foreground">{line.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-location="enquiry_success"
          >
            <WhatsAppIcon />
            Send on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location="enquiry_success"
            className="tabular-nums"
          >
            <PhoneIcon aria-hidden="true" />
            Or call {BUSINESS.phoneDisplay}
          </a>
        </Button>
      </div>
    </div>
  );
}
