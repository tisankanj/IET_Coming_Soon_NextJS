import { AlertTriangleIcon, CheckIcon, InfoIcon } from "lucide-react";
import { cn } from "cn";

import type { ServiceSection } from "@/content/types";

// Renders the typed content blocks of a service page, so each page can mix blocks in its own order.
export function ServiceSections({ sections }: { sections: ServiceSection[] }) {
  return (
    <div className="flex flex-col gap-16">
      {sections.map((section) => {
        if (section.type === "checklist") {
          return (
            <section key={section.title} className="reveal">
              <h2 className="font-display text-title font-semibold">{section.title}</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 border-t pt-4 text-subtle-foreground">
                    <CheckIcon
                      className="mt-0.5 size-5 shrink-0 text-brand-blue dark:text-brand-cyan"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          );
        }

        if (section.type === "symptoms") {
          return (
            <section key={section.title} className="reveal">
              <h2 className="font-display text-title font-semibold">{section.title}</h2>
              <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.title} className="border-l-2 border-brand-orange pl-5">
                    <dt className="font-display font-semibold">{item.title}</dt>
                    <dd className="mt-1.5 text-subtle-foreground">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        }

        if (section.type === "prose") {
          return (
            <section key={section.title} className="reveal max-w-2xl">
              <h2 className="font-display text-title font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lead text-subtle-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        }

        const isSafety = section.tone === "safety";
        const Icon = isSafety ? AlertTriangleIcon : InfoIcon;
        return (
          <aside
            key={section.title}
            className={cn(
              "reveal flex gap-4 rounded-panel border p-6",
              isSafety
                ? "border-brand-orange/50 bg-brand-orange/[0.06]"
                : "border-brand-blue/30 bg-brand-blue/[0.05]",
            )}
          >
            <Icon
              className={cn(
                "mt-0.5 size-6 shrink-0",
                isSafety ? "text-brand-orange" : "text-brand-blue dark:text-brand-cyan",
              )}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-display text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-subtle-foreground">{section.body}</p>
            </div>
          </aside>
        );
      })}
    </div>
  );
}
