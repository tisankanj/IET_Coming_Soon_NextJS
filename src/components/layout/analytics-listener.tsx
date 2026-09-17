"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { isAnalyticsEvent, track } from "@/lib/analytics";

// One listener for the whole site. Links opt in with data-track="click_call" and sections with
// data-track-view="view_tvs_authority", so server components stay free of client JS.
export function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target =
        event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      if (!target || !isAnalyticsEvent(target.dataset.track)) {
        return;
      }
      track(target.dataset.track, { page: pathname, location: target.dataset.trackLocation ?? "" });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting && isAnalyticsEvent(element.dataset.trackView)) {
            track(element.dataset.trackView, { page: pathname });
            // Count each section once per page view.
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.4 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-track-view]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
