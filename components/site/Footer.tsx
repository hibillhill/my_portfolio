"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LegalModal, type LegalType } from "./LegalModal";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Threads", href: "https://threads.net" },
];

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
      <footer className="mt-24 border-t border-site-fg md:mt-32">
        <div className="site-container py-12 md:py-16">
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
                      className="font-body text-sm transition-opacity hover:opacity-50"
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
              <ul className="space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm transition-opacity hover:opacity-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-site-fg pt-6">
            <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.2em]">
              {t.footer.legal}
            </p>
            <ul className="flex flex-wrap gap-4">
              {legalItems.map((item) => (
                <li key={item.type}>
                  <button
                    type="button"
                    onClick={() => setLegalType(item.type)}
                    className="font-body text-sm underline-offset-4 transition-opacity hover:underline hover:opacity-70"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
