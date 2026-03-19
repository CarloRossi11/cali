import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Window and Solar Cleaning Services | Cali Cleanerz",
  description:
    "Professional window cleaning, solar panel cleaning, and power washing services in San Diego, CA. Enhance your view and energy efficiency with Cali Cleanerz.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Window and Solar Cleaning Services | Cali Cleanerz",
    description:
      "Professional window cleaning, solar panel cleaning, and power washing services in San Diego, CA. Enhance your view and energy efficiency with Cali Cleanerz.",
    url: "https://calicleanerz.com/",
    siteName: "Cali Cleanerz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Window and Solar Cleaning Services | Cali Cleanerz",
    description:
      "Professional window cleaning, solar panel cleaning, and power washing services in San Diego, CA. Enhance your view and energy efficiency with Cali Cleanerz.",
  },
};

export default function Page() {
  return <HomeClient />;
}