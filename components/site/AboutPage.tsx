"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="site-container pb-20 pt-10 md:pt-16">
      <Reveal>
        <section className="glass-strong rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <h2 className="font-display text-4xl font-bold uppercase leading-none md:text-5xl">
                {t.about.hiTitle}
              </h2>
              <p className="mt-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-site-muted">
                {t.about.role}
              </p>
              <Link
                href={`mailto:${t.connect.email}`}
                className="btn-connect mt-8 inline-flex"
              >
                {t.about.cta}
              </Link>
            </div>

            <div className="flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:self-start">
              <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/70 shadow-glass sm:max-w-[260px] lg:max-w-none lg:w-full">
                <Image
                  src="/images/hill-about.png"
                  alt="Hill Choi with her dogs"
                  fill
                  className="object-cover object-[50%_22%]"
                  sizes="(max-width: 1024px) 260px, 300px"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6 font-body text-sm leading-relaxed md:text-base lg:col-start-1 lg:row-start-2">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={150}>
        <section className="mt-20 border-t border-site-line pt-16">
          <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
            {t.about.traitsTitle}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.about.traits.map((trait) => (
              <article key={trait.title} className="glass-card h-full p-6">
                <h4 className="font-display text-lg font-bold uppercase">{trait.title}</h4>
                <p className="mt-3 font-body text-sm leading-relaxed text-site-muted">
                  {trait.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section className="mt-20 border-t border-site-line pt-16">
          <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
            {t.about.clientsTitle}
          </h3>
          <p className="paren-note mt-4">{t.about.clientsParen}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.clients.map((client, i) => (
              <li
                key={client}
                className="bounce-hover glass flex items-baseline gap-3 rounded-xl px-4 py-3 font-body text-sm md:text-base"
              >
                <span className="font-display text-xs text-site-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {client}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
