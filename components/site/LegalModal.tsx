"use client";

import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useModalAnimation } from "./useModalAnimation";

export type LegalType = "terms" | "privacy" | "cookies";

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

const titles: Record<
  LegalType,
  (t: ReturnType<typeof useLanguage>["t"]) => string
> = {
  terms: (t) => t.footer.terms,
  privacy: (t) => t.footer.privacy,
  cookies: (t) => t.footer.cookies,
};

export function LegalModal({ type, onClose }: LegalModalProps) {
  const { t } = useLanguage();
  const isOpen = type !== null;
  const { mounted, closing, requestClose } = useModalAnimation(isOpen, onClose);

  if (!mounted || !type) return null;

  return (
    <div
      className={`legal-overlay ${closing ? "legal-overlay-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={requestClose}
    >
      <div className="legal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="legal-title" className="font-display text-2xl font-bold uppercase">
            {titles[type](t)}
          </h2>
          <button
            type="button"
            onClick={requestClose}
            className="bounce-press rounded-full border border-site-fg/20 bg-white/50 p-1.5 backdrop-blur-sm hover:bg-white/80"
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
