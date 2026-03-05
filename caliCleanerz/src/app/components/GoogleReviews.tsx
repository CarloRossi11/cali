import { reviews } from "../data/reviews";
import styles from "./googleReviews.module.css";

export default function GoogleReviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2>What Our Customers Say</h2>

      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.stars}>
              {"⭐".repeat(review.rating)}
            </div>

            <p className={styles.reviewText}>“{review.text}”</p>

            <div className={styles.reviewFooter}>
              <strong>{review.author}</strong>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://www.google.com/search?q=CaLi+Cleanerz+San+Diego+Window+Cleaning+Co"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.googleLink}
      >
        View All Reviews on Google →
      </a>
    </section>
  );
}