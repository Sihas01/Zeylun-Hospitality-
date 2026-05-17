import type { Metadata } from "next";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

const siteDescription =
  "Connected hospitality systems for modern guest acquisition, communication, and operational workflows. Designed for boutique hotels, villas, and premium hospitality brands.";
const siteUrl = "https://hospitality.zeylun.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeylun Hospitality Systems — Connected Guest Acquisition & Operations",
    template: "%s — Zeylun Hospitality Systems"
  },
  description: siteDescription,
  keywords: [
    "hospitality systems",
    "guest acquisition",
    "hospitality operations",
    "boutique hotel workflows",
    "villa booking systems",
    "guest communication",
    "WhatsApp hospitality workflows",
    "direct booking",
    "hospitality automation",
    "Zeylun Hospitality Systems"
  ],
  applicationName: "Zeylun Hospitality Systems",
  authors: [{ name: "Zeylun Hospitality Systems" }],
  creator: "Zeylun Hospitality Systems",
  publisher: "Zeylun Hospitality Systems",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Zeylun Hospitality Systems — Connected Guest Acquisition & Operations",
    description: siteDescription,
    url: siteUrl,
    siteName: "Zeylun Hospitality Systems",
    images: [
      {
        url: "/images/zeylun-hero-hospitality.png",
        width: 1600,
        height: 900,
        alt: "Zeylun Hospitality Systems for premium guest acquisition and operations"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeylun Hospitality Systems — Connected Guest Acquisition & Operations",
    description: siteDescription,
    images: ["/images/zeylun-hero-hospitality.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
