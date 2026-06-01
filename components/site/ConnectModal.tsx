"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="legal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-title"
      onClick={onClose}
    >
      <div className="legal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="connect-title" className="font-display text-2xl font-bold uppercase">
            {t.connect.title}
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
        <p className="mb-6 font-body text-sm leading-relaxed">{t.connect.text}</p>
        <a
          href={`mailto:${t.connect.email}`}
          className="btn-connect w-full text-center"
        >
          {t.connect.email}
        </a>
        <Link
          href="/about"
          onClick={onClose}
          className="btn-connect-outline mt-3 w-full text-center"
        >
          {t.nav.about}
        </Link>
      </div>
    </div>
  );
}
