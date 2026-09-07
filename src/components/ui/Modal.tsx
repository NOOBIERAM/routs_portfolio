import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  fullscreen?: boolean;
};

export function Modal({ open, onClose, title, children, fullscreen }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center ${fullscreen ? "p-0" : "p-4"}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        className={
          fullscreen
            ? "relative flex h-screen w-screen max-h-none max-w-none items-center justify-center overflow-hidden bg-black p-0"
            : "relative my-auto max-h-[92dvh] w-full max-w-5xl overflow-auto rounded-xl border border-border bg-bg-second shadow-2xl"
        }
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Fermer"
          className={`absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors focus-visible:ring-2 focus-visible:ring-accent cursor-pointer z-10 ${fullscreen ? "bg-white/10 text-white hover:bg-white/20 border-white/20" : "bg-bg text-text-muted hover:text-text border-border"}`}
        >
          <X size={16} />
        </button>
        <div className={fullscreen ? "flex h-full w-full items-center justify-center p-0" : "p-6 sm:p-8"}>{children}</div>
      </div>
    </div>
  );
}
