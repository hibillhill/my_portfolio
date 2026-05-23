"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, Disc3 } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectSearchProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  variant?: "overlay" | "inline";
}

export function ProjectSearch({
  projects,
  isOpen,
  onClose,
  variant = "overlay",
}: ProjectSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [projects, query]);

  const panel = (
    <div className="retro-window w-full max-w-lg">
      <div className="retro-titlebar">
        <span className="flex items-center gap-2">
          <Disc3 className="h-3.5 w-3.5" />
          Search.exe — v1.0
        </span>
        {variant === "overlay" && (
          <button
            type="button"
            onClick={onClose}
            className="border border-black bg-y2k-pink px-1.5 font-pixel text-[10px] hover:bg-white dark:border-y2k-green"
            aria-label="關閉"
          >
            X
          </button>
        )}
      </div>
      <div className="space-y-4 p-4">
        <p className="font-mono text-xs opacity-70">
          輸入關鍵字搜尋專案（例：UI Research, Web Design, App Redesign）
        </p>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="retro-input pl-10"
            autoFocus={variant === "overlay" && isOpen}
            aria-label="搜尋專案"
          />
        </div>
        <ul className="max-h-56 space-y-2 overflow-y-auto" role="listbox">
          {filtered.length === 0 ? (
            <li className="font-mono text-sm opacity-60">找不到符合的專案 ✧</li>
          ) : (
            filtered.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/portfolio/${project.id}`}
                  onClick={() => {
                    setQuery("");
                    onClose();
                  }}
                  className="block border-2 border-transparent px-2 py-2 font-mono text-sm transition-colors hover:border-black hover:bg-y2k-cyan/20 dark:hover:border-y2k-green dark:hover:bg-y2k-green/10"
                  role="option"
                >
                  <span className="font-display font-bold">{project.title}</span>
                  <span className="mt-0.5 block text-xs opacity-70">
                    {project.tags.join(" · ")}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );

  if (variant === "inline") {
    return panel;
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="專案搜尋"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{panel}</div>
    </div>
  );
}
