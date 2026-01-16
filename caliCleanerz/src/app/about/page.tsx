import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Cali Cleanerz",
  description:
    "Learn about Cali Cleanerz, a leading window cleaning company in San Diego.",
  alternates: {
    canonical: "https://calicleanerz.netlify.app/about",
  },
  openGraph: {
    title: "About Cali Cleanerz",
    description:
      "Learn about Cali Cleanerz, a leading window cleaning company in San Diego.",
    url: "https://calicleanerz.netlify.app/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
