import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Window, Solar, and Gutter Cleaning Portfolio",
  description:
    "View pristine results from Cali Cleanerz's window, solar panel, and gutter cleaning services in San Diego.",
  alternates: {
    canonical: "https://calicleanerz.netlify.app/portfolio",
  },
  openGraph: {
    title: "Cali Cleanerz Portfolio",
    description:
      "View pristine results from Cali Cleanerz's window, solar panel, and gutter cleaning services in San Diego.",
    url: "https://calicleanerz.netlify.app/portfolio",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
