import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";
import { ProjectCard } from "@/components/ProjectCard";
import { skillBadges, projects } from "@/lib/data";

const categoryLabels = {
  design: "Design Tools",
  frontend: "Front-End Stack",
  process: "Process & UX",
} as const;

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative">
        <div className="mb-4 flex items-center gap-2 font-pixel text-xs uppercase tracking-widest text-y2k-pink dark:text-y2k-green">
          <Sparkles className="h-4 w-4 animate-blink" />
          <span>Portfolio v2.0 — Y2K Edition</span>
          <span className="animate-blink">✧</span>
        </div>

        <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          <span className="block text-black dark:text-y2k-white">
            Hi, I&apos;m{" "}
          </span>
          <span className="holographic-text animate-glitch">Hill Choi.</span>
        </h1>
        <p className="mt-4 font-pixel text-sm uppercase tracking-[0.15em] text-y2k-pink md:text-base dark:text-y2k-cyan">
          UI/UX Designer
        </p>
        <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed md:text-lg">
          我擅長在
          <strong className="text-y2k-pink dark:text-y2k-green">
            {" "}
            使用者需求
          </strong>
          與
          <strong className="text-y2k-pink dark:text-y2k-green">
            {" "}
            商業目標
          </strong>
          之間取得完美平衡 — 用設計解決真實問題，用前端將想法落地。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/portfolio" className="retro-btn">
            查看作品集
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about#contact" className="retro-btn-secondary">
            聯絡我
          </Link>
        </div>
      </section>

      <section>
        <RetroWindow title="skills.dat — 工具與技能卡牌">
          <p className="mb-6 font-mono text-sm opacity-80">
            設計工具 × 前端基礎 × UX 方法論 — 滑鼠移過卡牌看看 ✦
          </p>
          {(["design", "frontend", "process"] as const).map((cat) => (
            <div key={cat} className="mb-8 last:mb-0">
              <h3 className="mb-3 font-pixel text-xs uppercase tracking-widest text-y2k-pink dark:text-y2k-cyan">
                {categoryLabels[cat]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillBadges
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div key={skill.name} className="skill-badge min-w-[7rem]">
                      <span className="text-2xl" aria-hidden>
                        {skill.emoji}
                      </span>
                      <span className="font-display text-sm font-bold">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </RetroWindow>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl neon-text">
              精選專案
            </h2>
            <p className="mt-1 font-mono text-sm opacity-80">
              點擊資料夾開啟 Case Study
            </p>
          </div>
          <Link
            href="/portfolio"
            className="retro-btn !py-1.5 !text-[10px]"
          >
            全部專案 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
