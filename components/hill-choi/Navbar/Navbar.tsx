import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "#about", label: "About me" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/hill" className={styles.logo}>
          HILL CHOI
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
