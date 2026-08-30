import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-second/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="flex items-center justify-center gap-2 font-mono text-sm text-text-muted">
          <Copyright size={14} />
          <span>2025 — RoutsGG — NOOBIERAM</span>
        </p>
      </div>
    </footer>
  );
}
