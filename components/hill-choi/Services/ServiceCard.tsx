import { ServiceIcon } from "./ServiceIcon";
import styles from "./ServiceCard.module.css";

type IconVariant = "lines" | "texture" | "strokes";

interface ServiceCardProps {
  title: string;
  iconVariant: IconVariant;
}

const description =
  "This is a template Figma file, turned into code using Anima. Learn more at ";

export function ServiceCard({ title, iconVariant }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <ServiceIcon variant={iconVariant} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description}
        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer">
          AnimaApp.com
        </a>
      </p>
    </article>
  );
}
