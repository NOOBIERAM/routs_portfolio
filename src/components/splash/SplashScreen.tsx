import { useEffect, useState, useCallback } from "react";
import { useTypingSequence } from "../../hooks/useTypingSequence";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Keyboard } from "./Keyboard";
import { TerminalLine } from "./TerminalLine";

type Props = {
  onFinish: () => void;
};

export function SplashScreen({ onFinish }: Props) {
  const [exiting, setExiting] = useState(false);

  const handleComplete = useCallback(() => {
    setExiting(true);
    window.setTimeout(() => onFinish(), 400);
  }, [onFinish]);

  const { typed, activeCodes, showOutput, skip } = useTypingSequence(handleComplete);

  useLockBodyScroll(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Animation de chargement"
      onClick={skip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg px-4 py-6 sm:px-6 transition-all duration-400
        ${exiting ? "opacity-0 scale-[0.98] pointer-events-none" : "opacity-100 scale-100"}`}
      style={{ minHeight: "100dvh", paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xs font-mono text-text-muted hover:text-text border border-border rounded-lg px-3 py-1.5 bg-bg-second transition-colors focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
        aria-label="Passer l'animation"
      >
        Skip <span className="hidden sm:inline">— Échap</span>
      </button>

      <div
        className={`w-full flex flex-col gap-5 sm:gap-7 items-center transition-opacity duration-500 ${exiting ? "opacity-0" : "opacity-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <TerminalLine typed={typed} showOutput={showOutput} />
        <div className="w-full flex justify-center max-[767px]:scale-[0.9] max-[767px]:origin-top max-[380px]:scale-[0.78]">
          <Keyboard activeCodes={activeCodes} />
        </div>
        <p className="font-mono text-xs tracking-widest text-text-muted/70 uppercase">
          chargement du portfolio…
        </p>
      </div>
    </div>
  );
}
