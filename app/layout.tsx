import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const siteName = "AN Digital Studio";
const siteUrl = "https://www.andigitalstudio.com";
const defaultDescription =
  "Websites and enquiry systems for UK builders, roofers and renovation businesses. Clear messaging, mobile-first design and a practical path from visit to quote request.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Websites for UK Trades Businesses | AN Digital Studio", template: "%s | AN Digital Studio" },
  description: defaultDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: "Websites for UK Trades Businesses | AN Digital Studio",
    description: defaultDescription,
    url: `${siteUrl}/`,
    images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites for UK Trades Businesses | AN Digital Studio",
    description: defaultDescription,
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f5f7fc", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: `${siteUrl}/`,
    email: "hello@andigitalstudio.com",
    logo: `${siteUrl}/logo-make.png`,
    description: defaultDescription,
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#f5f7fc] text-slate-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
