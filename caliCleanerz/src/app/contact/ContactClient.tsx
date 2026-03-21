"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../Navbar";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <Navbar/>
      <HeroOverlay
        backgroundSrc="/city.webp"
        height="500px"
        overlayDarkness={0.5}
        fadeIn
        priority
      >
        <h1>CONTACT</h1>
        <p>
          Please complete the form below and we will get back to you soon to discuss the next steps for your project.{" "}
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}