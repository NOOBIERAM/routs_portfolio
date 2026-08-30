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
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Download size={16} />
      </a>
      <button
        onClick={goTop}
        onMouseEnter={goTop}
        aria-label="Remonter en haut"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      >
        <Rocket size={16} />
      </button>
    </div>
  );
}
