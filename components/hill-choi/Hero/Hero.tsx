import styles from "./Hero.module.css";
import { HeroShapes } from "./HeroShapes";

export function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.overline}>Aspiring UX/UI Designer</p>
          <h1 id="hero-title" className={styles.title}>
            Hill Choi
          </h1>
          <p className={styles.subtext}>
            I made this by myself and I am proud of myself :)
          </p>
        </div>
        <div className={styles.visual}>
          <HeroShapes />
        </div>
      </div>
    </section>
  );
}
