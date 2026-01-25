"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ImageShuffle from "./components/ImageShuffle";
import HeroOverlay from "./components/HeroOverlay";
import ContactForm from "./components/ContactForm";
import InstagramPreview from "./components/InstagramPreview";

const GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=65+Glen+Rd+PMB+252+Garner+NC+27529";

const APPLE_MAPS =
  "https://maps.apple.com/?address=65+Glen+Rd.+PMB+252,+Garner,+NC+27529";

const address = "65 Glen Rd. PMB 252, Garner, NC 27529";

export default function HomeClient() {
  const isMobile = useIsMobile(850);
  const [mapsLink, setMapsLink] = useState(GOOGLE_MAPS);

  useEffect(() => {
    const isApple = /iPhone|iPad|Macintosh/.test(navigator.userAgent);

    if (isApple) {
      setMapsLink(APPLE_MAPS);
    }
  }, []);

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
              src="/logoEmailed.png"
              alt="Cali Cleaners logo"
              width={300}
              height={75}
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

        <div className={styles.igSection}>
          <InstagramPreview username="_cali_cleanerz_" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
