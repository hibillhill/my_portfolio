"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { MarqueeStrip } from "./MarqueeStrip";
import { WorkShowcase } from "./WorkShowcase";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="site-container pb-8 pt-10 md:pb-12 md:pt-16 lg:pt-20">
        <div className="max-w-5xl">
          <h2 className="display-stacked text-display-md text-site-muted">
            {t.home.welcome[0]}
          </h2>
          <h2 className="display-stacked text-display-xl">{t.home.welcome[1]}</h2>
          {t.home.welcome[2] && (
            <h2 className="display-stacked text-display-md">{t.home.welcome[2]}</h2>
          )}
        </div>

        <p className="paren-note mt-8 max-w-xl md:mt-12">{t.home.introParen}</p>

        <div className="mt-12 md:mt-20">
          <h1 className="display-stacked text-display-xl">{t.home.nameLine1}</h1>
          <h1 className="display-stacked text-display-xl">{t.home.nameLine2}</h1>
        </div>

        <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1 md:mt-8">
          {t.home.roleLines.map((line, i) => (
            <span
              key={`${line}-${i}`}
              className={`font-display font-bold uppercase leading-none tracking-tight ${
                line === "&"
                  ? "text-display-md"
                  : "text-display-md md:text-display-lg"
              }`}
            >
              {line}
            </span>
          ))}
        </div>

        <p className="mt-8 font-body text-xs font-medium uppercase tracking-[0.25em] text-site-muted md:mt-10">
          {t.home.tagline}
        </p>
      </section>

      <MarqueeStrip />

      <section className="site-container py-12 md:py-16">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
        >
          <span className="border border-site-fg px-2 py-1 transition-colors group-hover:bg-site-fg group-hover:text-site-bg">
            →
          </span>
          {t.home.clickMore}
        </Link>

        <p className="mt-10 max-w-2xl font-body text-base leading-relaxed md:text-lg md:leading-relaxed">
          {t.home.philosophy}
        </p>

        <WorkShowcase works={t.home.works} title={t.home.worksTitle} />
      </section>
    </>
  );
}
