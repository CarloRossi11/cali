"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import ImageShuffle from "./components/ImageShuffle";
import HeroOverlay from "./components/HeroOverlay";
import ContactForm from "./components/ContactForm";
import InstagramPreview from "./components/InstagramPreview";
import GoogleReviews from "./components/GoogleReviews";
import Navbar from "./Navbar";
import { motion, useTransform, useScroll } from "motion/react";

///////////
// ToDo: //
///////////
// Add motion
// add portfolio functionality?
// update contact button

// update google profile

export default function HomeClient() {

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"], // tracks while hero is in view
  });

  // Move image upward as user scrolls down — adjust the output range to taste
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        <Navbar />
      </div>

      <section className={styles.intro}>

        <div className={styles.introLeft}>
          
           {/* <Reveal direction="right"> */}
          <div className={styles.heroText}>
            <Image
              src="/redHorizontal.png"
              alt="Cali Cleanerz logo"
              width={300}
              height={100}
              priority
            />
          </div>
        {/* </Reveal> */}
         <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="/viewz.jpg"
            alt="Rooftop View"
            fill
            className={styles.overlayImage}
          />
        </motion.div>
        </div>

        <div className={styles.introRight}>
          <h1>CaLi Cleanerz</h1>
          <h2>San Diego Window Cleaning & Pressure Washing</h2>
          <a className={styles.linkHover} href="tel:+16107639226">
            610-763-9226
          </a>
          <section className={styles.contact}>
            <ContactForm />
          </section>

          {/* <div className={styles.ctas}>
              <Link className={styles.primary} href="/contact">
                Contact
              </Link>
            </div> */}
        </div>
      </section>
      {/* </div> */}

      <main className={styles.main}>
        <section className={styles.weDo}>
          <div className={styles.weDoLeft}>
            <ImageShuffle
              images={[
                { src: "/seeThrough.JPG", alt: "Sceinc see through" },
                { src: "/roofSolar.jpeg", alt: "Cloudy skies, clean panels" },
                { src: "/solarCompare.jpeg", alt: "clean vs dirty solar" },
                { src: "/levelsBack.jpeg", alt: "cleaned building" },
              ]}
            />
          </div>

          <div className={styles.weDoRight}>
            <h3>Premium Window Cleaning & Pressure Washing</h3>
            <p>
              With over 10 years of experience, CaLi Cleanerz specializes in
              interior and exterior window, gutter, and solar panel cleaning, plus power washing.
              Trust our skilled San Diego team to enhance your home’s efficiency
              and curb appeal with exceptional results.
            </p>
            <div className={styles.ctas}>
              {/* <Link className={styles.primary} href="/about">
                View Services
              </Link> */}
            </div>
          </div>
        </section>

        <div>
          <GoogleReviews />
        </div>

        <div className={styles.igSection}>
          <InstagramPreview username="_cali_cleanerz_" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
