import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { CONFIG } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: `${CONFIG.brand} — Trusted Real Estate Experts | ${CONFIG.region}`,
    template: `%s | ${CONFIG.brand}`,
  },
  description: `${CONFIG.brand} helps families find their dream home in ${CONFIG.region}. Expert guidance on residential projects, PM Awas Yojana, home loans, and more. Contact ${CONFIG.contact} today.`,
  metadataBase: new URL(CONFIG.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: CONFIG.siteUrl,
    siteName: CONFIG.brand,
    title: `${CONFIG.brand} — Trusted Real Estate Experts`,
    description: `Find your dream home in ${CONFIG.region} with honest guidance from ${CONFIG.contact}. Verified residential projects, home loan assistance, and end-to-end buyer support.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFIG.brand} — Trusted Real Estate Experts`,
    description: `Find your dream home in ${CONFIG.region} with honest guidance from ${CONFIG.contact}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CONFIG.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${CONFIG.siteUrl}/#organization`,
                  name: CONFIG.brand,
                  url: CONFIG.siteUrl,
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: `+91-${CONFIG.phone.slice(3)}`,
                    contactType: "sales",
                    availableLanguage: ["English", "Hindi", "Gujarati", "Marathi"],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${CONFIG.siteUrl}/#website`,
                  url: CONFIG.siteUrl,
                  name: CONFIG.brand,
                  publisher: {
                    "@id": `${CONFIG.siteUrl}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <FloatingButtons />
        <Footer />
        <Analytics />
        {/* Spacer for mobile sticky CTA bar */}
        <div className="h-14 lg:hidden" />
      </body>
    </html>
  );
}
