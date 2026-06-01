"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useModalAnimation } from "./useModalAnimation";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const { t } = useLanguage();
  const { mounted, closing, requestClose } = useModalAnimation(isOpen, onClose);

  if (!mounted) return null;

  return (
    <div
      className={`legal-overlay ${closing ? "legal-overlay-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-title"
      onClick={requestClose}
    >
      <div
        className="legal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="connect-title" className="font-display text-2xl font-bold uppercase">
            {t.connect.title}
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
        <p className="mb-6 font-body text-sm leading-relaxed">{t.connect.text}</p>
        <a href={`mailto:${t.connect.email}`} className="btn-connect w-full text-center">
          {t.connect.email}
        </a>
        <Link
          href="/about"
          onClick={requestClose}
          className="btn-connect-outline mt-3 w-full text-center"
        >
          {t.nav.about}
        </Link>
      </div>
    </div>
  );
}
