import { useEffect, useState } from "react";
import { Rocket, Download } from "lucide-react";
import { profile } from "../../data/profile";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={profile.cv}
        download
        aria-label="Télécharger le CV"
        className="group/btn inline-flex h-10 items-center justify-center gap-0 overflow-hidden rounded-lg border border-border bg-bg-second px-2.5 text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="max-w-[140px] opacity-100 whitespace-nowrap overflow-hidden transition-all duration-300 text-xs font-medium lg:max-w-0 lg:opacity-0 lg:ml-0 lg:group-hover/btn:max-w-[140px] lg:group-hover/btn:opacity-100 lg:group-hover/btn:mr-1.5 lg:group-focus-visible/btn:max-w-[140px] lg:group-focus-visible/btn:opacity-100 lg:group-focus-visible/btn:ml-1.5">
          Télécharger CV
        </span>
        <Download size={16} className="shrink-0" />
      </a>
      <button
        onClick={goTop}
        onMouseEnter={goTop}
        aria-label="Remonter en haut"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-second text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      >
        <Rocket size={16} className="rotate-[-45deg]"/>
      </button>
    </div>
  );
}
