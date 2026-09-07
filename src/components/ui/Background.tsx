export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base — reprend --color-bg */}
      <div className="absolute inset-0 bg-bg" />

      {/* dot grid subtil — fade vers le bas pour rester compact */}
      <div
        className="absolute inset-0 opacity-80 "
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 85% 62% at 50% 0%, #000 72%, transparent 112%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 62% at 50% 0%, #000 72%, transparent 112%)",
        }}
      />

      {/* halos accent très légers — statiques, pas d'anim */}
      <div className="absolute -top-[18%] right-[-14%] h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-[80px]" />
      <div className="absolute bottom-[8%] left-[-10%] h-[360px] w-[640px] rounded-full bg-accent/[0.06] blur-[90px]" />
    </div>
  );
}
