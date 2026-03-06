"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ImageShuffle from "./components/ImageShuffle";
import HeroOverlay from "./components/HeroOverlay";
import ContactForm from "./components/ContactForm";
import InstagramPreview from "./components/InstagramPreview";
import GoogleReviews from "./components/GoogleReviews";

// ToDo: //
//////////
// Replace logos
// Add motion
// Increase White Space
// add portfolio
// 1.618 fonts

export default function HomeClient() {
  const isMobile = useIsMobile(850);

  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        {isMobile ? <HamburgerMenu /> : <Header />}
      </div>

      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <HeroOverlay
            backgroundSrc="/viewz.jpg"
            height="700px"
            // aspectRatio="16/9"
            overlayDarkness={0.5}
            gradientOverlay
            fadeIn
            contentX="50%"
            contentY="15%"
          >
            <Image
              className={styles.logo}
              src="/redhorizontal.png"
              alt="Cali Cleaners logo"
              width={300}
              height={100}
              priority
            />

          </HeroOverlay>
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
            <h2>Window Cleaning & Pressure Washing Services</h2>
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
