import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import "./globals.css";

//Rubik for headers
//Montserrat for smaller print

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["700"], // Bold for headers
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Normal + medium + bold for flexibility
});

export const metadata: Metadata = {
  title: "Cali Cleanerz - Expert Window, Solar, and Power Wshing in San Diego",
  description:
    "Cali Cleanerz offers top-notch window cleaning, solar panel cleaning, and power washing services in San Diego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: preconnect to Google Fonts if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${rubik.variable} ${montserrat.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cali Cleanerz",
              url: "https://calicleanerz.netlify.app",
              telephone: "+1-610-763-9226",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4204 45th st",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92115",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "San Diego",
              },
              serviceType: [
                "Window Cleaning",
                "Solar Panel Cleaning",
                "Power Washing",
                "Gutter Cleaning",
                "Window Washing",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
