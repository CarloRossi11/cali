"use client";

import styles from "./about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import HeroOverlay from "../components/HeroOverlay";
import Image from "next/image";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/jungleSolar.jpeg"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
        <p>
          Exceed expectations and ensure that every window shines brilliantly
          while every customer walks away completely satisfied.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>Services</h1>
            <p>
              With over 10 years of experience, CaLi Cleanerz Window Cleaning
              provides top-notch service to keep your windows sparkling.
              Specializing in both interior and exterior window cleaning, we
              also offer expertpower washing, gutter cleaning, and solar panel cleaning to
              enhance your home's aesthetic and efficiency. Trust our skilled
              team to deliver exceptional results with every job, ensuring your
              property shines bright under the San Diego sun.
            </p>
          </div>
          <div className={styles.founderImage}>
            <ul>
              <li>Windows</li>
              <li>Solar</li>
              <li>Pressure washing</li>
              <li>Gutter cleaning</li>
              <li>Screen cleaning</li>
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
          <a className={styles.primary} href={"./contact"}>
            Contact
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
