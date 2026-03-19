import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import "./globals.css";

//Rubik for headers
//Montserrat for smaller print

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calicleanerz.com"),
  title: "Cali Cleanerz - Expert Window, Solar, and Power Washing in San Diego",
  description:
    "Top-notch window cleaning, solar panel cleaning, and power washing services in San Diego.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title:
      "Cali Cleanerz - Expert Window, Solar, and Power Washing in San Diego",
    description:
      "Top-notch window cleaning, solar panel cleaning, and power washing services in San Diego.",
    url: "https://calicleanerz.com",
    siteName: "Cali Cleanerz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cali Cleanerz - Professional Cleaning Services in San Diego",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cali Cleanerz - Expert Window, Solar, and Power Washing in San Diego",
    description:
      "Top-notch window cleaning, solar panel cleaning, and power washing services in San Diego.",
    images: ["/og-image.png"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${rubik.variable} ${montserrat.variable}`}>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cali Cleanerz",
              url: "https://calicleanerz.com",
              logo: "https://calicleanerz.com/logo.png",
              image: "https://calicleanerz.com/og-image.png",
              description:
                "Cali Cleanerz provides professional window cleaning, solar panel cleaning, power washing, and gutter cleaning services across San Diego, CA.",
              priceRange: "$$",
              telephone: "+1-610-763-9226",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92115",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "San Diego" },
                { "@type": "AdministrativeArea", name: "California" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cleaning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Window Cleaning",
                      description:
                        "Professional interior and exterior window cleaning for residential and commercial properties.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Solar Panel Cleaning",
                      description:
                        "Expert solar panel cleaning to maximize energy efficiency and panel performance.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Power Washing",
                      description:
                        "High-pressure power washing for driveways, patios, decks, and building exteriors.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gutter Cleaning",
                      description:
                        "Thorough gutter cleaning and debris removal to protect your home from water damage.",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.instagram.com/_cali_cleanerz_/"
              ],
            }),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cali Cleanerz",
              url: "https://calicleanerz.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://calicleanerz.com/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
