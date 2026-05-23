import { marqueeTexts } from "@/lib/data";

interface MarqueeProps {
  reverse?: boolean;
  className?: string;
}

export function Marquee({ reverse = false, className = "" }: MarqueeProps) {
  const items = [...marqueeTexts, ...marqueeTexts];

  return (
    <div
      className={`overflow-hidden border-y-2 border-black bg-y2k-pink py-2 dark:border-y2k-green dark:bg-black ${className}`}
      aria-hidden
    >
      <div
        className={`flex w-max gap-8 whitespace-nowrap font-pixel text-xs uppercase tracking-widest text-black dark:text-y2k-green ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((text, i) => (
          <span key={`${text}-${i}`} className="flex items-center gap-8">
            <span className="animate-blink">✧</span>
            {text}
            <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
