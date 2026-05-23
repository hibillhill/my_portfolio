import type { ReactNode } from "react";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function RetroWindow({
  title,
  children,
  className = "",
  icon,
}: RetroWindowProps) {
  return (
    <div className={`retro-window ${className}`}>
      <div className="retro-titlebar">
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <span className="flex gap-1" aria-hidden>
          <span className="inline-block h-3 w-3 border border-black bg-y2k-white dark:border-y2k-green dark:bg-black" />
          <span className="inline-block h-3 w-3 border border-black bg-y2k-silver dark:border-y2k-green" />
          <span className="inline-block h-3 w-3 border border-black bg-y2k-pink" />
        </span>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
