import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "whoami", label: "Whoami" },
  { id: "parcours", label: "Parcours" },
  { id: "skills", label: "Skills" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

const NAV_IDS = NAV.map((n) => n.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_IDS as unknown as string[], 120);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 20);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-border"
          : "bg-transparent border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="font-mono text-sm font-bold tracking-tight text-text hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <span className="text-accent">~/</span>routs
          <span className="text-accent">.gg</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent ${
                active === item.id ? "bg-bg-second text-text border border-border" : "text-text-muted hover:text-text"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-second text-text-muted hover:text-text md:hidden focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Navigation mobile">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === item.id ? "bg-bg-second text-accent border border-accent/20" : "text-text-muted hover:bg-bg-second hover:text-text"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
