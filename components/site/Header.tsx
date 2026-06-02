"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ConnectModal } from "./ConnectModal";

export function Header() {
  const pathname = usePathname();
  const { t, toggleLocale, locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/portfolio", label: t.nav.portfolio },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="glass-header sticky top-0 z-50">
        <div className="site-container flex h-16 items-center justify-between gap-4 md:h-20">
          <Link
            href="/"
            className="bounce-hover font-display text-lg font-bold uppercase tracking-tight md:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            {t.meta.siteName}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              className="bounce-hover glass hidden rounded-full px-3 py-2 font-body text-[10px] font-semibold uppercase tracking-wider sm:inline-flex"
              aria-label="Toggle language"
            >
              {t.lang.label}
            </button>
            <button
              type="button"
              onClick={() => setConnectOpen(true)}
              className="btn-connect hidden sm:inline-flex"
            >
              {t.nav.connect}
            </button>
            <button
              type="button"
              className="bounce-press glass rounded-full p-2.5 md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          className={`overflow-hidden border-t border-site-line transition-all duration-500 ease-spring md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-label="Mobile"
        >
          <ul className="site-container flex flex-col gap-4 py-4">
            {links.map((link, i) => (
              <li
                key={link.href}
                className="animate-bounce-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Link
                  href={link.href}
                  className={`nav-link block text-base ${isActive(link.href) ? "nav-link-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={toggleLocale} className="nav-link w-full text-left">
                {locale === "en" ? "中文" : "EN"}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn-connect w-full"
                onClick={() => {
                  setMenuOpen(false);
                  setConnectOpen(true);
                }}
              >
                {t.nav.connect}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <ConnectModal isOpen={connectOpen} onClose={() => setConnectOpen(false)} />
    </>
  );
}
