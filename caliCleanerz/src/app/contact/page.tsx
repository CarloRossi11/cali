import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Cali Cleanerz",
  description:
    "Contact Cali Cleanerz to schedule your window cleaning service or request a free quote.",
  alternates: {
    canonical: "https://calicleanerz.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Cali Cleanerz",
    description:
      "Get in touch with Cali Cleanerz to schedule your window cleaning service or request a free quote.",
    url: "https://calicleanerz.netlify.app/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
