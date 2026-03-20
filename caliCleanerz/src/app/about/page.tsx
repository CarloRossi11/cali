import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Cali Cleanerz - San Diego Window Cleaning Experts",
  description:
    "With over 10 years of experience, Cali Cleanerz is San Diego's trusted team for window cleaning, solar panel cleaning, and power washing. Meet the team behind the shine.",
  alternates: {
    canonical: "https://calicleanerz.com/about",
  },
  openGraph: {
    title: "About Us | Cali Cleanerz - San Diego Cleaning Experts",
    description:
      "With over 10 years of experience, Cali Cleanerz is San Diego's trusted team for window cleaning, solar panel cleaning, and power washing. Meet the team behind the shine.",
    url: "https://calicleanerz.com/about",
    siteName: "Cali Cleanerz",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Cali Cleanerz - San Diego Cleaning Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cali Cleanerz - San Diego Cleaning Experts",
    description:
      "With over 10 years of experience, Cali Cleanerz is San Diego's trusted team for window cleaning, solar panel cleaning, and power washing. Meet the team behind the shine.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AboutClient />;
}
