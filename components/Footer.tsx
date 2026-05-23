import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { socialLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t-2 border-black dark:border-y2k-green">
      <Marquee reverse />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="retro-window">
          <div className="retro-titlebar">
            <span>footer.sys — READ ONLY</span>
          </div>
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-pixel text-xs uppercase tracking-widest text-y2k-pink dark:text-y2k-green">
                © {year} Hill Choi
              </p>
              <p className="mt-2 max-w-md font-mono text-sm leading-relaxed opacity-90">
                UI/UX Designer · 在使用者需求與商業目標之間，打造可被記住的體驗。
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn !p-2.5"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn-secondary !p-2.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.email}
                className="retro-btn-pink !p-2.5"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <Link href="/about#contact" className="retro-btn !text-xs">
                聯絡我 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
