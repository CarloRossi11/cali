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

      {/* <div className={styles.heroViewport}> */}
      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <HeroOverlay
            backgroundSrc="/jungleSolar.jpeg"
            height="700px"
            // aspectRatio="16/9"
            overlayDarkness={0.5}
            gradientOverlay
            fadeIn
          >
            <Image
              className={styles.logo}
              src="/surf.avif"
              alt="Woodwright Millwork logo"
              width={300}
              height={75}
              priority
            />
            <p>Windows · Doors · Solar</p>
          </HeroOverlay>
        </div>

        <div className={styles.introRight}>
          <h1>Cali Cleanerz</h1>
          <h2>San Diego Window Cleaning</h2>
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
                { src: "/drive/ceiling.jpg", alt: "Custom wood ceiling" },
                { src: "/ripped/stairs.webp", alt: "Custom wood stairs" },
                { src: "/drive/float.jpg", alt: "Floating wood shelves" },
              ]}
            />
          </div>

          <div className={styles.weDoRight}>
            <h2>Custom Carpentry & Millwork Services</h2>
            <p>
              We design and build custom kitchens, bathrooms, cabinetry,
              built-ins, and specialty millwork tailored to your home and style.
            </p>

            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and millwork</li>
            </ul>

            <div className={styles.ctas}>
              <Link className={styles.primary} href="/about">
                View Services
              </Link>
            </div>
          </div>
        </section>

        <HeroOverlay
          backgroundSrc="/ripped/puppy.webp"
          height="500px"
          aspectRatio="16/9"
          overlayDarkness={0.75}
          gradientOverlay
          fadeIn
        >
          {/* <Image
            className={styles.logo}
            src="/woddwrightLogo.webp"
            alt="Woodwright Millwork logo"
            width={75}
            height={75}
            priority
          /> */}
          <p>Custom Carpentry · Built-Ins · Kitchens & Bathrooms</p>
        </HeroOverlay>

      </main>

      <Footer />
    </div>
  );
}
