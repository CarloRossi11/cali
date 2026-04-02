"use client";

import styles from "./about.module.css";
import Footer from "../components/Footer";
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
    offset: ["start start", "end start"], // tracks while hero is in view
  });

  // Move image upward as user scrolls down — adjust the output range to taste
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <div className={styles.wrapper} ref={heroRef}>
      <Navbar />

      {/* Hero */}
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>ABOUT</h1>
            <p>
              Exceed expectations and ensure that every window shines
              brilliantly while every customer walks away completely satisfied.
            </p>
          </div>
        </Reveal>
        <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="/jungleSolar.webp"
            alt="CaLi Cleanerz solar panel cleaning"
            fill
            priority
            className={styles.overlayImage}
          />
        </motion.div>
      </div>

      <div className={styles.main}>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>Services</h1>
            <p>
              With over 10 years of experience, CaLi Cleanerz Window Cleaning
              provides top-notch service to keep your windows sparkling.
              Specializing in both interior and exterior window cleaning, we
              also offer expert power washing, gutter cleaning, and solar panel
              cleaning plus trash bin deep cleans and grill cleaning to enhance your home's aesthetic and efficiency. Trust
              our skilled team to deliver exceptional results with every job,
              ensuring your property shines bright under the San Diego sun.
            </p>
          </div>
          <div className={styles.founderImage}>
            <ul>
              <li>Windows</li>
              <li>Solar</li>
              <li>Pressure washing</li>
              <li>Gutter cleaning</li>
              <li>Screen cleaning</li>
              <li>Trash bin deep cleaning</li>
              <li>Grill cleaning</li>
            </ul>
          </div>
        </div>
        <div className={styles.company}>
          <h1>About The Company</h1>
          <p>
            CaLi Cleanerz, where we set the standard for window cleaning in San
            Diego! With over a decade of experience, we confidently deliver
            top-tier service to both commercial and residential clients. Our
            mission is simple: to exceed expectations and ensure that every
            window shines brilliantly while every customer walks away completely
            satisfied. Fully Insured-NAIC #12831 EIN #33-4820557"
          </p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <MotionLink
            className={styles.primary}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            Contact
          </MotionLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
