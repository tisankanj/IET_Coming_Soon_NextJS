import { PlusIcon } from "lucide-react";

import type { FaqItem } from "@/content/types";

type FaqListProps = {
  items: FaqItem[];
  title?: string;
};

// Native <details>: answers stay in the HTML for search engines and "Find in page", with no JS.
export function FaqList({ items, title = "Frequently asked questions" }: FaqListProps) {
  return (
    <section className="section-y">
      <div className="container-site grid gap-10 lg:grid-cols-12">
        <h2 className="reveal text-headline font-bold lg:col-span-4">{title}</h2>
        <div className="lg:col-span-8">
          {items.map((item) => (
            <details key={item.question} className="group border-b first:border-t">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <PlusIcon
                  className="mt-1 size-5 shrink-0 text-brand-orange transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-subtle-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
