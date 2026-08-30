type Props = {
  label: string;
  code: string;
  width?: number;
  active: boolean;
  isEnter?: boolean;
};

export function KeyboardKey({ label, width = 1, active, isEnter }: Props) {
  const flexGrow = width;
  const activeStyle = active
    ? isEnter
      ? "bg-accent/20 border-accent text-accent translate-y-[2px] scale-[0.96] shadow-[0_0_12px_rgba(20,184,166,0.35)]"
      : "bg-accent/15 border-accent text-accent translate-y-[2px] scale-[0.96]"
    : "bg-bg-second border-border text-text-muted";

  return (
    <div
      data-code={label}
      className={`flex items-center justify-center rounded-md border text-[clamp(9px,1.5vw,13px)] font-mono font-medium select-none transition-all duration-150
        ${activeStyle}
        h-[clamp(26px,5.2vw,42px)] min-w-[clamp(18px,4.5vw,44px)] px-1`}
      style={{ flexGrow }}
      aria-hidden="true"
    >
      <span className="truncate whitespace-nowrap leading-none">{label}</span>
    </div>
  );
}
