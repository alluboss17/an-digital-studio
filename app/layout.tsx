import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andigitalstudio.com"),
  title: "AN Digital Studio | High-Performance Websites & Automation",
  description:
    "We build lightning-fast Next.js websites and custom automated data workflows to help growing businesses scale and capture more leads.",
  openGraph: {
    siteName: "AN Digital Studio",
    title: "AN Digital Studio | High-Performance Websites & Automation",
    description:
      "We build lightning-fast Next.js websites and custom automated data workflows to help growing businesses scale and capture more leads.",
    url: "https://andigitalstudio.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AN Digital Studio",
    alternateName: "AN Digital Studio",
    url: "https://andigitalstudio.com",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}