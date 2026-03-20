import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Cali Cleanerz - Get a Free Quote Today",
  description:
    "Contact Cali Cleanerz to schedule window cleaning, solar panel cleaning, or power washing in San Diego. Call us at 610-763-9226 or request a free quote online.",
  alternates: {
    canonical: "https://calicleanerz.com/contact",
  },
  openGraph: {
    title: "Contact Us | Cali Cleanerz - Get a Free Quote Today",
    description:
      "Contact Cali Cleanerz to schedule window cleaning, solar panel cleaning, or power washing in San Diego. Call us at 610-763-9226 or request a free quote online.",
    url: "https://calicleanerz.com/contact",
    siteName: "Cali Cleanerz",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Cali Cleanerz - San Diego Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Cali Cleanerz - Get a Free Quote Today",
    description:
      "Contact Cali Cleanerz to schedule window cleaning, solar panel cleaning, or power washing in San Diego. Call us at 610-763-9226 or request a free quote online.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}
