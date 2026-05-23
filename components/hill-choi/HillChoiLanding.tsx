import { Hero } from "./Hero/Hero";
import { LogoBar } from "./LogoBar/LogoBar";
import { Navbar } from "./Navbar/Navbar";
import { Services } from "./Services/Services";
import styles from "./HillChoiLanding.module.css";

export function HillChoiLanding() {
  return (
    <div className={`hill-choi-page ${styles.page}`}>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Services />
      </main>
      <div id="about" className={styles.srOnly} aria-hidden />
      <div id="contact" className={styles.srOnly} aria-hidden />
    </div>
  );
}
