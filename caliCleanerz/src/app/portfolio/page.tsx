import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title:
    "Our Work | Window, Solar & Pressure Washing Portfolio | Cali Cleanerz",
  description:
    "See real results from Cali Cleanerz in San Diego. Browse before and after photos of window cleaning, solar panel cleaning, gutter cleaning, and power washing projects.",
  alternates: {
    canonical: "https://calicleanerz.com/portfolio",
  },
  openGraph: {
    title:
      "Our Work | Window, Solar & Pressure Washing Portfolio | Cali Cleanerz",
    description:
      "See real results from Cali Cleanerz in San Diego. Browse before and after photos of window cleaning, solar panel cleaning, gutter cleaning, and power washing projects.",
    url: "https://calicleanerz.com/portfolio",
    siteName: "Cali Cleanerz",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cali Cleanerz Portfolio - San Diego Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Work | Window, Solar & Pressure Washing Portfolio | Cali Cleanerz",
    description:
      "See real results from Cali Cleanerz in San Diego. Browse before and after photos of window cleaning, solar panel cleaning, gutter cleaning, and power washing projects.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <PortfolioClient />;
}
