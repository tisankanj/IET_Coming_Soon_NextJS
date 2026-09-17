import { ArrowUpRightIcon } from "lucide-react";

import { BUSINESS, SOCIAL_LINKS } from "@/config/site";

// Facebook's page plugin, embedded as a plain iframe. No Facebook script runs on the page, and the
// iframe only loads when a visitor scrolls near it. Facebook cannot show a photos tab in the plugin,
// so the links below point at the photo and reel tabs.
const PLUGIN_SRC = `https://www.facebook.com/plugins/page.php?${new URLSearchParams({
  href: SOCIAL_LINKS.facebook,
  tabs: "timeline",
  width: "500",
  height: "700",
  small_header: "false",
  adapt_container_width: "true",
  hide_cover: "false",
  show_facepile: "true",
}).toString()}`;

const LINKS = [
  { label: "All photos on Facebook", href: SOCIAL_LINKS.facebookPhotos },
  { label: "Reels on Facebook", href: SOCIAL_LINKS.facebookReels },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
];

export function FacebookFeed() {
  return (
    <section className="bg-surface-soft section-y">
      {/* grid-cols-1 matters: without it the column stretches to the plugin's 500px and the page scrolls sideways on a phone. */}
      <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div className="reveal max-w-xl">
          <h2 className="text-headline font-bold">Latest from our workshop.</h2>
          <p className="mt-6 text-lead text-subtle-foreground">
            Work in progress, finished vehicles and workshop updates, posted as they happen.
          </p>
          <ul className="mt-8 space-y-3">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_social"
                  data-track-location="feed"
                  className="group inline-flex items-center gap-2 font-semibold text-link"
                >
                  {link.label}
                  <ArrowUpRightIcon
                    className="size-4 transition-transform group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* The plugin sizes itself from the box it sits in, so the width is set here, not by the iframe. */}
        <div className="w-[500px] max-w-full min-w-0 overflow-hidden rounded-panel border bg-white">
          <iframe
            title={`Latest posts from ${BUSINESS.name} on Facebook`}
            src={PLUGIN_SRC}
            width={500}
            height={700}
            loading="lazy"
            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="block h-[700px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
