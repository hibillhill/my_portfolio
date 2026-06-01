"use client";

import { useState } from "react";
import type { WorkItem } from "@/lib/i18n";

interface WorkShowcaseProps {
  works: WorkItem[];
  title: string;
}

export function WorkShowcase({ works, title }: WorkShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = works[active] ?? works[0];

  if (!current) return null;

  return (
    <section className="border-t border-site-fg pt-12 md:pt-16">
      <h2 className="mb-8 font-body text-xs font-semibold uppercase tracking-[0.2em]">
        {title}
      </h2>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className={`group work-card flex min-h-[280px] items-end p-6 md:min-h-[360px] md:p-8 ${current.color}`}
        >
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em]">
              {current.index}/{works.length}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase md:text-3xl">
              {current.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="font-body text-sm leading-relaxed md:text-base">
              {current.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-site-fg px-2 py-0.5 font-body text-[10px] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {works.map((work, i) => (
              <button
                key={work.id}
                type="button"
                onClick={() => setActive(i)}
                className={`min-w-[3rem] border border-site-fg px-3 py-2 font-body text-xs uppercase tracking-wider transition-colors ${
                  i === active
                    ? "bg-site-fg text-site-bg"
                    : "bg-transparent hover:bg-site-fg/10"
                }`}
                aria-label={`${work.index}/${works.length}`}
                aria-current={i === active}
              >
                {work.index}/{works.length}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
