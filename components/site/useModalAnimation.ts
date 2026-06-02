"use client";

import { useEffect, useState } from "react";

export function useModalAnimation(isOpen: boolean, onClose: () => void) {
  const [mounted, setMounted] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setClosing(false);
      document.body.style.overflow = "hidden";
    } else if (mounted) {
      setClosing(true);
      const timer = setTimeout(() => {
        setMounted(false);
        setClosing(false);
        document.body.style.overflow = "";
      }, 280);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted, onClose]);

  const requestClose = () => {
    if (!closing) onClose();
  };

  return { mounted, closing, requestClose };
}
