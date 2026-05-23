import { ServiceCard } from "./ServiceCard";
import styles from "./Services.module.css";

const services = [
  { title: "Product design", iconVariant: "lines" as const },
  { title: "Art direction", iconVariant: "texture" as const },
  { title: "Visual design", iconVariant: "strokes" as const },
];

export function Services() {
  return (
    <section className={styles.section} id="portfolio" aria-labelledby="services-heading">
      <div className={styles.inner}>
        <h2 id="services-heading" className={styles.srOnly}>
          Services
        </h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              iconVariant={service.iconVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
