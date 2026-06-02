"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { instagramSocial } from "@/lib/social";
import { LegalModal, type LegalType } from "./LegalModal";
import { Reveal } from "./Reveal";

export function Footer() {
  const { t } = useLanguage();
  const [legalType, setLegalType] = useState<LegalType | null>(null);

  const sitemap = [
    { href: "/", label: t.footer.links.home },
    { href: "/about", label: t.footer.links.about },
    { href: "/portfolio", label: t.footer.links.portfolio },
  ];

  const legalItems: { type: LegalType; label: string }[] = [
    { type: "terms", label: t.footer.terms },
    { type: "privacy", label: t.footer.privacy },
    { type: "cookies", label: t.footer.cookies },
  ];

  return (
    <>
      <footer className="relative z-10 mt-24 border-t border-site-line md:mt-32">
        <Reveal>
          <div className="site-container py-12 md:py-16">
            <div className="glass-strong rounded-3xl p-6 md:p-10">
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2">
                  <p className="font-display text-xl font-bold uppercase md:text-2xl">
                    {t.meta.siteName}
                  </p>
                  <p className="mt-3 font-body text-xs text-site-muted md:text-sm">
                    {t.footer.copyright}
                  </p>
                </div>

                <div>
                  <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em]">
                    {t.footer.sitemap}
                  </p>
                  <ul className="space-y-2">
                    {sitemap.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="bounce-hover inline-block font-body text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em]">
                    {t.footer.social}
                  </p>
                  <a
                    href={instagramSocial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bounce-hover inline-block"
                    aria-label={`Instagram ${instagramSocial.handle}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={instagramSocial.qrSrc}
                      alt={`Instagram QR code ${instagramSocial.handle}`}
                      width={132}
                      height={132}
                      className="h-[132px] w-[132px] rounded-2xl border border-site-fg/10 bg-white shadow-sm"
                    />
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-site-line pt-6">
                <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {t.footer.legal}
                </p>
                <ul className="flex flex-wrap gap-4">
                  {legalItems.map((item) => (
                    <li key={item.type}>
                      <button
                        type="button"
                        onClick={() => setLegalType(item.type)}
                        className="bounce-hover font-body text-sm underline-offset-4 hover:underline"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </footer>

      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
