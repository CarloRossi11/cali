import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { getMapsLink } from "../utils/maps";

const address = "65 Glen Rd. PMB 252, Garner, NC 27529";

export default function Footer() {
  const mapsLink = getMapsLink(address);
  return (
    <div className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.address}>
          <div className={styles.addressContainer}>
            
              <strong>Cali Cleanerz Co.</strong>
              
              <a className={styles.wrench} href="tel:+16107639226">
              610-763-9226
            </a>
            
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/iconRipped.png"
              alt="Cali Cleanerz logo"
              width={75}
              height={75}
              priority
            />
          </Link>
        </div>
        <div className={styles.copyright}>
          <div className={styles.socials}>
            <p className={styles.socialLabel}>Follow Us:</p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/_cali_cleanerz_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cali Cleanerz on Instagram"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/IG.png"
                  alt="Instagram icon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
          <p>©2025 Cali Cleanerz Co. All rights reserved.</p>
          <p>
            Website developed by{" "}
            <a
              href="https://techwrench.co/"
              target="_blank"
              className={styles.wrench}
            >
              Tech Wrench
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
