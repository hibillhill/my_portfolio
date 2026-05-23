"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center border-2 border-black bg-y2k-silver shadow-hard-sm transition-all duration-200 hover:shadow-none dark:border-y2k-green dark:bg-black"
      aria-label={isDark ? "切換淺色模式" : "切換深色模式"}
      role="switch"
      aria-checked={isDark}
    >
      <span
        className={`absolute flex h-7 w-7 items-center justify-center border-2 border-black bg-y2k-green transition-all duration-200 dark:border-y2k-pink dark:bg-y2k-pink ${
          isDark ? "left-[calc(100%-1.85rem)]" : "left-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-black" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-black" />
        )}
      </span>
      <span className="sr-only">主題切換</span>
    </button>
  );
}
