import styles from "./LogoBar.module.css";
import {
  AwwwardsLogo,
  AppleLogo,
  BehanceLogo,
  DribbbleLogo,
  GoogleLogo,
} from "./BrandLogos";

const brands = [
  { id: "behance", Logo: BehanceLogo, label: "Behance" },
  { id: "google", Logo: GoogleLogo, label: "Google" },
  { id: "apple", Logo: AppleLogo, label: "Apple" },
  { id: "dribbble", Logo: DribbbleLogo, label: "Dribbble" },
  { id: "awwwards", Logo: AwwwardsLogo, label: "Awwwards" },
] as const;

export function LogoBar() {
  return (
    <section className={styles.section} aria-label="Featured brands">
      <div className={styles.inner}>
        <ul className={styles.logos}>
          {brands.map(({ id, Logo, label }) => (
            <li key={id} className={styles.item}>
              <Logo name={label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
