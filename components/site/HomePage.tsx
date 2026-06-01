"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { MarqueeStrip } from "./MarqueeStrip";
import { Reveal } from "./Reveal";
import { WorkShowcase } from "./WorkShowcase";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="site-container pb-8 pt-10 md:pb-12 md:pt-16 lg:pt-20">
        <Reveal>
          <div className="max-w-5xl">
            <h2 className="display-stacked text-display-md text-site-muted">
              {t.home.welcome[0]}
            </h2>
            <h2 className="display-stacked text-display-xl">{t.home.welcome[1]}</h2>
            {t.home.welcome[2] && (
              <h2 className="display-stacked text-display-md">{t.home.welcome[2]}</h2>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="paren-note mt-8 max-w-xl md:mt-12">{t.home.introParen}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 md:mt-20">
            <h1 className="display-stacked bounce-hover inline-block text-display-xl">
              {t.home.nameLine1}
            </h1>
            <h1 className="display-stacked bounce-hover inline-block text-display-xl">
              {t.home.nameLine2}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={280} className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1 md:mt-8">
          {t.home.roleLines.map((line, i) => (
            <span
              key={`${line}-${i}`}
              className={`bounce-hover inline-block font-display font-bold uppercase leading-none tracking-tight ${
                line === "&"
                  ? "text-display-md text-site-muted"
                  : "text-display-md md:text-display-lg"
              }`}
            >
              {line}
            </span>
          ))}
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-8 font-body text-xs font-medium uppercase tracking-[0.25em] text-site-muted md:mt-10">
            {t.home.tagline}
          </p>
        </Reveal>
      </section>

      <MarqueeStrip />

      <section className="site-container py-12 md:py-16">
        <Reveal>
          <Link
            href="/about"
            className="bounce-hover group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em]"
          >
            <span className="glass rounded-full px-3 py-1.5 transition-all group-hover:bg-site-fg group-hover:text-site-bg">
              →
            </span>
            {t.home.clickMore}
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <p className="glass-strong mt-10 max-w-2xl rounded-2xl p-5 font-body text-base leading-relaxed md:p-6 md:text-lg">
            {t.home.philosophy}
          </p>
        </Reveal>

        <WorkShowcase works={t.home.works} title={t.home.worksTitle} />
      </section>
    </>
  );
}
