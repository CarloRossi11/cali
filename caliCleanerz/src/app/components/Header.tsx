import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <div className={styles.linkGroup}>
          <Link className={styles.button} href={"/"}>
            <h3>Home</h3>
          </Link>
          <Link className={styles.button} href={"/about"}>
            <h3>About</h3>
          </Link>
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
        <div className={styles.linkGroup}>
          <Link className={styles.button} href={"/contact"}>
            <h3>Contact</h3>
          </Link>
          <Link className={styles.button} target="_blank" href={"https://l.instagram.com/?u=https%3A%2F%2Fwindowcleaner.com%2FCaLi_CleanerZ%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnePKKRSUH_uTU30Bfx3HZZzMu_eSe5ixw7RwB2aEkoODuXBmg9RHGH8OZaP4_aem_SHDIyRMjU1EldefutSRL3A&e=AT3qlr4ZmMKjP9NVusXQIGSYXas8RgBGOMjUgIvhUJBY60fhxkvYiA-OAHbTCxhUge-FS_yBQuTkydv32y_o_noIrOrtKPizSqOMqKOqvw"}>
            <h3>Shop</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
