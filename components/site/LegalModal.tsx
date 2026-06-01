"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export type LegalType = "terms" | "privacy" | "cookies";

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

const titles: Record<LegalType, (t: ReturnType<typeof useLanguage>["t"]) => string> = {
  terms: (t) => t.footer.terms,
  privacy: (t) => t.footer.privacy,
  cookies: (t) => t.footer.cookies,
};

export function LegalModal({ type, onClose }: LegalModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="legal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={onClose}
    >
      <div className="legal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="legal-title" className="font-display text-2xl font-bold uppercase">
            {titles[type](t)}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-site-fg p-1.5 transition-opacity hover:opacity-60"
            aria-label={t.connect.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="font-body text-sm leading-relaxed text-site-muted">
          {t.footer.legalPlaceholder}
        </p>
      </div>
    </div>
  );
}
