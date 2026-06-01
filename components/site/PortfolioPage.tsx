"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { WorkShowcase } from "./WorkShowcase";

export function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <div className="site-container pb-20 pt-10 md:pt-16">
      <header className="max-w-4xl">
        <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
          {t.portfolio.title.map((word, i) => (
            <h1
              key={`${word}-${i}`}
              className="display-stacked text-display-md md:text-display-lg"
            >
              {word}
            </h1>
          ))}
        </div>
        <p className="paren-note mt-8">{t.portfolio.introParen}</p>
      </header>

      <section className="mt-16 border-t border-site-fg pt-16">
        <h2 className="font-display text-2xl font-bold uppercase md:text-3xl">
          {t.portfolio.traitsTitle}
        </h2>
        <div className="mt-8 grid gap-px bg-site-fg md:grid-cols-3">
          {t.portfolio.traits.map((trait) => (
            <article key={trait.title} className="bg-site-bg p-6 md:p-8">
              <h3 className="font-display text-xl font-bold uppercase">{trait.title}</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-site-muted">
                {trait.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <WorkShowcase works={t.portfolio.works} title={t.portfolio.worksTitle} />
      </div>

      <section className="mt-20 border-t border-site-fg pt-16">
        <h2 className="font-display text-2xl font-bold uppercase md:text-3xl">
          {t.portfolio.softwareTitle}
        </h2>
        <p className="paren-note mt-4">{t.portfolio.softwareParen}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.software.map((app, i) => (
            <li
              key={app.name}
              className="flex items-center justify-between border border-site-fg bg-white px-5 py-4 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="font-display text-lg font-bold uppercase">{app.name}</p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.15em] text-site-muted">
                  {app.category}
                </p>
              </div>
              <span className="font-display text-2xl text-site-muted/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
