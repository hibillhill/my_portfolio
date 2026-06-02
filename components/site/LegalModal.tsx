"use client";

import { Fragment } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useModalAnimation } from "./useModalAnimation";
import type { LegalType } from "./legal-types";

export type { LegalType };

function renderWithEmail(text: string, email: string) {
  if (!text.includes(email)) return text;

  const parts = text.split(email);
  return parts.map((part, index) => (
    <Fragment key={`${index}-${part.slice(0, 24)}`}>
      {part}
      {index < parts.length - 1 && (
        <a
          href={`mailto:${email}`}
          className="font-medium text-site-fg underline decoration-site-fg/30 underline-offset-2 hover:decoration-site-fg"
        >
          {email}
        </a>
      )}
    </Fragment>
  ));
}

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  const { t } = useLanguage();
  const isOpen = type !== null;
  const { mounted, closing, requestClose } = useModalAnimation(isOpen, onClose);

  if (!mounted || !type) return null;

  const doc = t.legal[type];
  const contactEmail = t.connect.email;

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
          <h2
            id="legal-title"
            className="font-display text-xl font-bold uppercase leading-tight md:text-2xl"
          >
            {doc.title}
          </h2>
          <button
            type="button"
            onClick={requestClose}
            className="bounce-press shrink-0 rounded-full border border-site-fg/20 bg-white/50 p-1.5 backdrop-blur-sm hover:bg-white/80"
            aria-label={t.connect.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-5 font-body text-sm leading-relaxed text-site-muted">
          <p>{doc.intro}</p>

          {doc.sections.map((section) => (
            <section key={section.title}>
              <h3 className="mb-2 font-display text-xs font-bold uppercase tracking-wide text-site-fg">
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mb-2 last:mb-0">
                  {renderWithEmail(paragraph, contactEmail)}
                </p>
              ))}
              {section.list && section.list.length > 0 && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 48)}>
                      {renderWithEmail(item, contactEmail)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {doc.lastUpdated && (
            <p className="border-t border-site-fg/10 pt-4 text-xs uppercase tracking-wider text-site-fg/60">
              {doc.lastUpdated}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
