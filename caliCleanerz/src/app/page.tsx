import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Window and Solar Cleaning Serivces | Cali Cleanerz",
  description: "Professional window and solar panel cleaning services in California. Enhance your view and energy efficiency with Cali Cleanerz.",
  alternates: {
    canonical: "https://calicleanerz.netlify.app/",
  },

  openGraph: {
    title: "Window and Solar Cleaning Serivces | Cali Cleanerz",
    description:"Professional window and solar panel cleaning services in California. Enhance your view and energy efficiency with Cali Cleanerz.",
    url: "https://calicleanerz.netlify.app/",
    siteName: "Cali Cleanerz",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HomeClient />;
}
