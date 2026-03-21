"use client";

import styles from "./portfolio.module.css";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
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
            <h1>PORTFOLIO</h1>
          </div>
        </Reveal>
        <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="/artsyLogo.webp"
            alt="CaLi Cleanerz portfolio"
            fill
            priority
            className={styles.overlayImage}
          />
        </motion.div>
      </div>

      <div className={styles.main}>
        <ImageViewer
          images={[
            { src: "/solarSunset.jpeg", alt: "Sunset with clean solar" },
            { src: "/solarShiny.jpeg", alt: "Shiny Solar" },
            { src: "/seeThrough.JPG", alt: "Scenic see through" },
            { src: "/roofSolar.jpeg", alt: "Cloudy skies, clean panels" },
            { src: "/city.png", alt: "city views" },
            { src: "/solarCompare.jpeg", alt: "clean vs dirty solar" },
            { src: "/patio.png", alt: "patio" },
            { src: "/levelsBack.jpeg", alt: "cleaned building" },
          ]}
        />
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
      </div>

      <Footer />
    </div>
  );
}
