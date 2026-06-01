"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function MarqueeStrip() {
  const { t } = useLanguage();
  const items = [...t.home.marquee, ...t.home.marquee];

  return (
    <div
      className="overflow-hidden border-y border-site-line bg-white/25 py-4 backdrop-blur-md"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-12">
        {items.map((line, i) => (
          <span
            key={`${line}-${i}`}
            className="whitespace-nowrap font-body text-[10px] font-medium uppercase tracking-[0.2em] text-site-muted md:text-xs"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
