import Link from "next/link";
import { Folder } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group retro-window block overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-hard-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-y2k-pink"
    >
      <div className="retro-titlebar">
        <span className="flex items-center gap-2 truncate">
          <Folder className="h-3.5 w-3.5 shrink-0" />
          {project.id}.exe
        </span>
      </div>
      <div
        className={`relative h-36 bg-gradient-to-br ${project.thumbnailGradient} transition-opacity group-hover:opacity-90`}
      >
        <div
          className={`absolute bottom-3 left-3 border-2 border-black px-2 py-0.5 font-pixel text-[10px] uppercase ${project.folderColor} text-black shadow-hard-sm`}
        >
          OPEN
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-display text-lg font-bold leading-tight group-hover:text-y2k-pink dark:group-hover:text-y2k-cyan">
          {project.title}
        </h3>
        <p className="line-clamp-2 font-mono text-xs leading-relaxed opacity-80">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-black bg-y2k-chrome px-1.5 py-0.5 font-mono text-[10px] dark:border-y2k-cyan dark:bg-black dark:text-y2k-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
