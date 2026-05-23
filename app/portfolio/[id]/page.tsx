import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  Layers,
  Lightbulb,
  Users,
} from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";
import { getProjectById, projects } from "@/lib/data";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "專案未找到" };
  return {
    title: project.title,
    description: project.summary,
  };
}

const sections = [
  { id: "overview", icon: Lightbulb, label: "專案總覽", key: "overview" as const },
  { id: "research", icon: Users, label: "使用者研究與痛點", key: "research" as const },
  { id: "design", icon: Layers, label: "設計實作與商業考量", key: "design" as const },
  { id: "results", icon: BarChart3, label: "成果與反思", key: "results" as const },
];

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <article className="space-y-10 md:space-y-14">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 font-mono text-sm transition-colors hover:text-y2k-pink dark:hover:text-y2k-green"
      >
        <ArrowLeft className="h-4 w-4" />
        返回作品集
      </Link>

      <header className="space-y-4">
        <div
          className={`h-48 rounded-sm border-2 border-black bg-gradient-to-br shadow-hard md:h-56 dark:border-y2k-green ${project.thumbnailGradient}`}
        />
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black bg-y2k-cyan px-2 py-0.5 font-mono text-xs dark:border-y2k-green dark:bg-black dark:text-y2k-green"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-3xl font-bold md:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl font-mono text-sm leading-relaxed opacity-90">
          {project.summary}
        </p>
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="Case Study 章節">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="retro-btn !py-1.5 !text-[10px]"
          >
            <s.icon className="h-3 w-3" />
            {s.label}
          </a>
        ))}
      </nav>

      <RetroWindow title={`${project.id} — OVERVIEW.TXT`} className="scroll-mt-24">
        <section id="overview" className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-pixel text-xs uppercase text-y2k-pink dark:text-y2k-cyan">
              挑戰 Challenge
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed">
              {project.overview.challenge}
            </p>
          </div>
          <div>
            <h2 className="font-pixel text-xs uppercase text-y2k-pink dark:text-y2k-cyan">
              目標 Goal
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed">
              {project.overview.goal}
            </p>
          </div>
        </section>
      </RetroWindow>

      <RetroWindow title="USER_RESEARCH.LOG" className="scroll-mt-24">
        <section id="research">
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold">
            <Users className="h-5 w-5 text-y2k-pink dark:text-y2k-green" />
            使用者研究與痛點
          </h2>
          <p className="font-mono text-sm leading-relaxed">
            {project.userResearch}
          </p>
        </section>
      </RetroWindow>

      <RetroWindow title="DESIGN_PROCESS.DOC" className="scroll-mt-24">
        <section id="design">
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold">
            <Layers className="h-5 w-5 text-y2k-pink dark:text-y2k-green" />
            設計實作與商業考量
          </h2>
          <p className="font-mono text-sm leading-relaxed">
            {project.designProcess}
          </p>
        </section>
      </RetroWindow>

      <RetroWindow title="RESULTS.OUT" className="scroll-mt-24">
        <section id="results">
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold">
            <BarChart3 className="h-5 w-5 text-y2k-pink dark:text-y2k-green" />
            成果與反思
          </h2>
          <p className="font-mono text-sm leading-relaxed">
            {project.resultsReflection}
          </p>
        </section>
      </RetroWindow>
    </article>
  );
}
