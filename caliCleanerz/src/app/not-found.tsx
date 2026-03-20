import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        Looks like this page needs a good cleaning. Let's get you back on track.
      </p>
      <Link href="/" className={styles.button}>
        Back to Home
      </Link>
    </div>
  );
}