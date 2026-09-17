import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ietservice.lk"),
  title: "IET Service Point | New Digital Experience Coming Soon",
  description:
    "IET Service Point in Inuvil, Jaffna is preparing a new digital experience for three-wheeler service, TVS genuine parts and online booking.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IET Service Point | Service Reimagined",
    description:
      "A new digital experience for trusted three-wheeler service and genuine parts in Jaffna.",
    url: "https://ietservice.lk",
    siteName: "IET Service Point",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
