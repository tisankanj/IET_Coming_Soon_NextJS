import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";

import { AnalyticsListener } from "@/components/layout/analytics-listener";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { BUSINESS, SITE_URL } from "@/config/site";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BUSINESS.name,
  description:
    "IET Service Point in Inuvil, Jaffna provides trusted three-wheeler service, repairs and TVS genuine parts. TVS Authorized Three-Wheeler Dealer.",
  applicationName: BUSINESS.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#061521",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-control bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
          <MobileActionBar />
        </MotionProvider>
        <AnalyticsListener />
      </body>
    </html>
  );
}
