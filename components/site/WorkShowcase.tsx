"use client";

import { useState } from "react";
import type { WorkItem } from "@/lib/i18n";
import { Reveal } from "./Reveal";

interface WorkShowcaseProps {
  works: WorkItem[];
  title: string;
}

export function WorkShowcase({ works, title }: WorkShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = works[active] ?? works[0];

  if (!current) return null;

  return (
    <Reveal>
      <section className="border-t border-site-line pt-12 md:pt-16">
        <h2 className="mb-8 font-body text-xs font-semibold uppercase tracking-[0.2em]">
          {title}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            key={current.id}
            className={`group work-card work-fade flex min-h-[280px] items-end p-6 md:min-h-[360px] md:p-8 ${current.color}`}
          >
            <div className="relative z-10">
              <p className="tag-glass inline-block font-body text-xs uppercase tracking-[0.2em]">
                {current.index}/{works.length}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">
                {current.title}
              </h3>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>

          <div className="flex flex-col justify-between">
            <div key={`desc-${current.id}`} className="work-fade">
              <p className="glass rounded-2xl p-4 font-body text-sm leading-relaxed md:p-5 md:text-base">
                {current.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span key={tag} className="tag-glass bounce-hover">
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
                  className={`bounce-hover min-w-[3rem] rounded-full px-3 py-2 font-body text-xs uppercase tracking-wider transition-all duration-300 ease-spring ${
                    i === active
                      ? "bg-site-fg text-site-bg shadow-glass"
                      : "glass hover:bg-white/60"
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
    </Reveal>
  );
}
