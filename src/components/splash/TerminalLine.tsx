type Props = {
  typed: string;
  showOutput: boolean;
};

export function TerminalLine({ typed, showOutput }: Props) {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="rounded-lg border border-border bg-bg-second px-4 sm:px-6 py-4 sm:py-5 font-mono text-[clamp(13px,2.5vw,16px)] leading-relaxed">
        <div className="flex flex-wrap items-center gap-0 text-left">
          <span className="text-text-muted shrink-0">rotsi@routsgg:~$&nbsp;</span>
          <span className="text-accent break-all">{typed}</span>
          <span
            className="ml-[1px] inline-block h-[1.15em] w-[9px] bg-accent animate-[blink_700ms_steps(1)_infinite] translate-y-[1px]"
            aria-hidden="true"
          />
        </div>
        {showOutput && (
          <div className="mt-2 flex items-center gap-2.5 text-text-muted text-[13px] sm:text-sm animate-[fadeInUp_300ms_ease]">
            <span className="text-accent">&gt;</span>
            <span>Booting portfolio…</span>
            <span
              aria-hidden="true"
              className="slash-inline slash-inline--spin inline-flex items-center justify-center shrink-0 ml-1 text-accent font-bold leading-none select-none"
            >
              /
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
