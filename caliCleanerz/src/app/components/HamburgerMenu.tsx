"use client";

import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo (always visible) */}
      <div className={styles.logo}>
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

      {/* Hamburger icon */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="https://l.instagram.com/?u=https%3A%2F%2Fwindowcleaner.com%2FCaLi_CleanerZ%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnePKKRSUH_uTU30Bfx3HZZzMu_eSe5ixw7RwB2aEkoODuXBmg9RHGH8OZaP4_aem_SHDIyRMjU1EldefutSRL3A&e=AT3qlr4ZmMKjP9NVusXQIGSYXas8RgBGOMjUgIvhUJBY60fhxkvYiA-OAHbTCxhUge-FS_yBQuTkydv32y_o_noIrOrtKPizSqOMqKOqvw" target="_blank">Shop</Link>
        </li>
      </ul>
    </nav>
  );
  Link;
};

export default HamburgerMenu;
