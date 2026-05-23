"use client";

import { useMemo, useState } from "react";
import { Disc3 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function PortfolioGallery() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="font-pixel text-xs uppercase tracking-widest text-y2k-pink dark:text-y2k-green">
          ✦ Portfolio Gallery
        </p>
        <h1 className="font-display text-3xl font-bold md:text-5xl">
          <span className="holographic-text">作品資料夾</span>
        </h1>
        <p className="max-w-xl font-mono text-sm leading-relaxed opacity-90">
          每個專案都是一張復古光碟 / 視窗 — 收錄 UI Research、Web Design、App
          Redesign 等完整 Case Study。
        </p>
      </header>

      <div className="retro-window max-w-2xl">
        <div className="retro-titlebar">
          <span className="flex items-center gap-2">
            <Disc3 className="h-3.5 w-3.5" />
            retro-search.com
          </span>
        </div>
        <div className="p-4">
          <label htmlFor="portfolio-search" className="sr-only">
            搜尋專案
          </label>
          <input
            id="portfolio-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: UI Research, Web Design, App Redesign..."
            className="retro-input"
          />
          <p className="mt-2 font-mono text-xs opacity-60">
            找到 {filtered.length} 個專案
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="retro-window p-8 text-center font-mono">
          <p className="text-lg">找不到專案 ✧</p>
          <p className="mt-2 text-sm opacity-70">試試其他關鍵字</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
