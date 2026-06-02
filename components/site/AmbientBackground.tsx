export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -left-[10%] top-[8%] h-[45vh] w-[45vh] animate-float rounded-full bg-site-lavender/50 blur-[80px]" />
      <div
        className="absolute right-[-5%] top-[30%] h-[40vh] w-[40vh] animate-float rounded-full bg-site-butter/55 blur-[72px]"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] h-[35vh] w-[35vh] animate-pulse-soft rounded-full bg-site-mint/45 blur-[70px]"
        style={{ animationDelay: "0.6s" }}
      />
      <div
        className="absolute bottom-[25%] right-[15%] h-[28vh] w-[28vh] animate-float rounded-full bg-site-blush/40 blur-[64px]"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-site-bg/80" />
    </div>
  );
}
