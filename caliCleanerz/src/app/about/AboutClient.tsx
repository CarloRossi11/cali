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
        backgroundSrc="/ripped/greenroom.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
        <p>
          Our mission is simple: to exceed expectations and ensure that every window shines brilliantly while every customer walks away completely satisfied.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        {/* <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>Services</h1>
            <p>
              Woodwright & Millwork provides custom kitchens and bathrooms,
              built-ins, cabinetry, and tailored closet systems designed to
              elevate your home’s function and style. We offer full-service
              remodeling and detailed carpentry work, from trim and storage
              solutions to complete room transformations. Our specialty woodwork
              and custom millwork add unique character and craftsmanship to any
              space, giving each project a refined, handcrafted finish.
            </p>
          </div>
          <div className={styles.founderImage}>
            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and custom millwork</li>
            </ul>
          </div>
        </div> */}
        <div className={styles.company}>
          <h1>About The Company</h1>
          <p>
            "With over 10 years of experience, CaLi Cleanerz Window Cleaning provides top-notch service to keep your windows sparkling. Specializing in both interior and exterior window cleaning, we also offer expert gutter cleaning and solar panel cleaning to enhance your home's aesthetic and efficiency. Trust our skilled team to deliver exceptional results with every job, ensuring your property shines bright under the San Diego sun. Satisfaction guaranteed! Fully Insured-NAIC #12831 EIN #33-4820557"
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <a className={styles.primary} href={"/pages/contact"}>
            Contact
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
