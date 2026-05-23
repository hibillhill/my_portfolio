"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectSearch } from "@/components/ProjectSearch";
import { projects } from "@/lib/data";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/portfolio", label: "作品集" },
  { href: "/about", label: "關於我" },
];

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b-2 border-black transition-colors duration-300 dark:border-y2k-green ${
          scrolled
            ? "bg-y2k-white/95 backdrop-blur-sm dark:bg-black/95"
            : "bg-y2k-white dark:bg-black"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link href="/" className="group shrink-0">
            <span className="font-display text-lg font-bold tracking-tight md:text-xl">
              <span className="holographic-text glitch-hover">Hill Choi</span>
            </span>
            <span className="mt-0.5 block font-pixel text-[10px] uppercase tracking-[0.2em] text-y2k-pink dark:text-y2k-green">
              UI/UX Designer
            </span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex" aria-label="主要導航">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pixel-underline px-3 py-2 font-mono text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-y2k-pink dark:text-y2k-cyan"
                      : "hover:text-y2k-pink dark:hover:text-y2k-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="retro-btn !px-2.5 !py-2"
              aria-label="開啟專案搜尋"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />
          </div>
        </div>

        <nav
          className="flex justify-center gap-4 border-t-2 border-black py-2 sm:hidden dark:border-y2k-green"
          aria-label="行動導航"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-pixel text-[10px] uppercase ${
                  active ? "text-y2k-pink dark:text-y2k-cyan" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <ProjectSearch
        projects={projects}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
