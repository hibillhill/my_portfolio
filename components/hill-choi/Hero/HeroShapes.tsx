import styles from "./HeroShapes.module.css";

function PinkStarburst() {
  return (
    <svg
      className={styles.pinkStar}
      viewBox="0 0 100 100"
      fill="var(--hc-pink)"
      aria-hidden
    >
      <polygon points="50,5 61,35 92,35 67,55 77,88 50,68 23,88 33,55 8,35 39,35" />
      <polygon
        points="50,18 56,38 76,38 61,52 67,72 50,60 33,72 39,52 24,38 44,38"
        opacity="0.35"
      />
    </svg>
  );
}

function OrangeStar() {
  return (
    <svg
      className={styles.orangeStar}
      viewBox="0 0 24 24"
      fill="var(--hc-orange)"
      aria-hidden
    >
      <path d="M12 2l2.2 7.2L22 12l-7.8 2.8L12 22l-2.2-7.2L2 12l7.8-2.8L12 2z" />
    </svg>
  );
}

export function HeroShapes() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={styles.tealCircle}>
        <div className={styles.lavenderOval} />
      </div>
      <div className={styles.creamCircle}>
        <OrangeStar />
      </div>
      <div className={styles.yellowCircle}>
        <PinkStarburst />
      </div>
    </div>
  );
}
