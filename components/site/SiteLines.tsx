"use client";

import { useEffect, useState } from "react";

function useScrollMotion() {
  const [scrollY, setScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      setVelocity(((y - lastY) / dt) * 48);
      setScrollY(y);
      lastY = y;
      lastTime = now;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { scrollY, velocity };
}

interface CurveLayer {
  id: string;
  d: string;
  parallaxY: number;
  parallaxX: number;
  rotate: number;
  opacity?: number;
  strokeWidth?: number;
}

const curves: CurveLayer[] = [
  {
    id: "wave-top",
    d: "M -8 11 C 18 8, 32 14, 50 11 S 82 8, 108 12",
    parallaxY: 0.07,
    parallaxX: 0.35,
    rotate: 0.012,
    opacity: 0.55,
  },
  {
    id: "wave-mid",
    d: "M -10 42 Q 28 38, 50 44 T 110 41",
    parallaxY: -0.11,
    parallaxX: -0.28,
    rotate: -0.01,
    opacity: 0.45,
  },
  {
    id: "wave-low",
    d: "M -6 76 C 22 80, 38 72, 55 77 S 88 82, 112 74",
    parallaxY: 0.09,
    parallaxX: 0.22,
    rotate: 0.008,
    opacity: 0.4,
  },
  {
    id: "curve-left",
    d: "M 6 -5 C 2 28, 10 52, 5 75 S 8 98, 6 108",
    parallaxY: -0.06,
    parallaxX: 0.18,
    rotate: 0.015,
    opacity: 0.38,
    strokeWidth: 0.07,
  },
  {
    id: "curve-mid",
    d: "M 36 -8 C 33 35, 39 58, 36 82 S 34 102, 36 112",
    parallaxY: 0.08,
    parallaxX: -0.15,
    rotate: -0.011,
    opacity: 0.32,
    strokeWidth: 0.06,
  },
  {
    id: "curve-right",
    d: "M 94 -6 C 98 30, 90 55, 95 78 S 92 100, 94 110",
    parallaxY: -0.1,
    parallaxX: 0.25,
    rotate: 0.009,
    opacity: 0.42,
    strokeWidth: 0.07,
  },
  {
    id: "arc-diagonal",
    d: "M 14 -8 C 26 35, 18 68, 28 108",
    parallaxY: 0.12,
    parallaxX: -0.4,
    rotate: 0.018,
    opacity: 0.28,
    strokeWidth: 0.06,
  },
  {
    id: "arc-diagonal-alt",
    d: "M 88 -5 C 76 38, 84 72, 74 112",
    parallaxY: -0.13,
    parallaxX: 0.38,
    rotate: -0.016,
    opacity: 0.24,
    strokeWidth: 0.06,
  },
];

export function SiteLines() {
  const { scrollY, velocity } = useScrollMotion();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="site-lines" aria-hidden>
      <svg
        className="site-lines-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="site-line-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(10,10,10,0)" />
            <stop offset="12%" stopColor="rgba(10,10,10,0.12)" />
            <stop offset="50%" stopColor="rgba(10,10,10,0.16)" />
            <stop offset="88%" stopColor="rgba(10,10,10,0.12)" />
            <stop offset="100%" stopColor="rgba(10,10,10,0)" />
          </linearGradient>
          <linearGradient id="site-line-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(10,10,10,0)" />
            <stop offset="10%" stopColor="rgba(10,10,10,0.1)" />
            <stop offset="90%" stopColor="rgba(10,10,10,0.1)" />
            <stop offset="100%" stopColor="rgba(10,10,10,0)" />
          </linearGradient>
        </defs>

        {curves.map((curve, index) => {
          const isVertical =
            curve.id.startsWith("curve-") || curve.id.startsWith("arc-");
          const motionOff = !isMounted || reducedMotion;
          const ty = motionOff ? 0 : scrollY * curve.parallaxY;
          const tx = motionOff ? 0 : velocity * curve.parallaxX;
          const rot = motionOff ? 0 : scrollY * curve.rotate;
          const hideOnMobile =
            curve.id === "curve-mid" || curve.id === "arc-diagonal-alt";

          return (
            <g
              key={curve.id}
              className={hideOnMobile ? "site-lines-hide-mobile" : undefined}
              style={{
                transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg)`,
                transformOrigin: "center center",
                transition: motionOff
                  ? undefined
                  : "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <path
                d={curve.d}
                fill="none"
                stroke={isVertical ? "url(#site-line-grad-v)" : "url(#site-line-grad-h)"}
                strokeWidth={curve.strokeWidth ?? 0.09}
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                opacity={curve.opacity}
                className="site-lines-path"
                style={{
                  animationDelay: `${index * 0.4}s`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
