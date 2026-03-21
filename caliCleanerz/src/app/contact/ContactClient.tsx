"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "motion/react";
import Reveal from "../components/Reveal";
import { useRef } from "react";

export default function Page() {
  const MotionLink = motion.create(Link);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={styles.wrapper} ref={heroRef}>
      <Navbar />

      {/* Hero */}
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>CONTACT</h1>
            <p>
              Please complete the form below and we will get back to you soon to
              discuss the next steps for your project.
            </p>
          </div>
        </Reveal>
        <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="/city.webp"
            alt="San Diego skyline"
            fill
            priority
            className={styles.overlayImage}
          />
        </motion.div>
      </div>

      <div className={styles.main}>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
