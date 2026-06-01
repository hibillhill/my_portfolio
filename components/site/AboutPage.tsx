"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="site-container pb-20 pt-10 md:pt-16">
      <header className="max-w-4xl">
        <h1 className="display-stacked text-display-lg">{t.about.headline[0]}</h1>
        <h1 className="display-stacked text-display-xl">{t.about.headline[1]}</h1>
        <h1 className="display-stacked text-display-lg">{t.about.headline[2]}</h1>
        <p className="paren-note mt-8">{t.about.headlineParen}</p>
      </header>

      <section className="mt-16 grid gap-12 border-t border-site-fg pt-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl font-bold uppercase leading-none md:text-5xl">
            {t.about.hiTitle}
          </h2>
          <p className="mt-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-site-muted">
            {t.about.role}
          </p>
          <Link
            href="mailto:hillers.choi@example.com"
            className="btn-connect mt-8 inline-flex"
          >
            {t.about.cta}
          </Link>
        </div>

        <div className="space-y-6 font-body text-sm leading-relaxed md:text-base lg:col-span-7">
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
          <p>{t.about.bio3}</p>
        </div>
      </section>

      <section className="mt-20 border-t border-site-fg pt-16">
        <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
          {t.about.traitsTitle}
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.about.traits.map((trait) => (
            <article
              key={trait.title}
              className="border border-site-fg bg-white p-6 transition-transform hover:-translate-y-0.5"
            >
              <h4 className="font-display text-lg font-bold uppercase">{trait.title}</h4>
              <p className="mt-3 font-body text-sm leading-relaxed text-site-muted">
                {trait.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-site-fg pt-16">
        <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
          {t.about.clientsTitle}
        </h3>
        <p className="paren-note mt-4">{t.about.clientsParen}</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.clients.map((client, i) => (
            <li
              key={client}
              className="flex items-baseline gap-3 border-b border-site-fg/20 py-3 font-body text-sm md:text-base"
            >
              <span className="font-display text-xs text-site-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {client}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
