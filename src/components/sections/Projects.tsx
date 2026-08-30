import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";
import { projects } from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";
import type { ProjectItem } from "../../types";

export function Projects() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section
      id="projets"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <SectionTitle>PROJETS</SectionTitle>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-second hover:border-accent/30 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg">
              <button
                onClick={() => setSelected(p)}
                className="absolute inset-0 h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                aria-label={`Aperçu du projet ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector(".fallback")) {
                      const div = document.createElement("div");
                      div.className = "fallback flex h-full w-full items-center justify-center font-mono text-xs text-text-muted bg-bg";
                      div.textContent = p.title;
                      parent.appendChild(div);
                    }
                  }}
                />
              </button>
              {(p.demo || p.github) && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                  <div className="pointer-events-auto flex gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Voir la démo"
                        className="group/btn inline-flex items-center justify-center gap-0 overflow-hidden rounded-full bg-accent px-2.5 py-1.5 text-white shadow-lg hover:bg-accent-light transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ExternalLink size={14} className="shrink-0" />
                        <span className="max-w-[80px] opacity-100 ml-1.5 lg:max-w-0 lg:opacity-0 lg:ml-0 lg:group-hover/btn:max-w-[80px] lg:group-hover/btn:opacity-100 lg:group-hover/btn:ml-1.5 whitespace-nowrap overflow-hidden transition-all duration-300 text-xs font-semibold">Démo</span>
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Voir le code"
                        className="group/btn inline-flex items-center justify-center gap-0 overflow-hidden rounded-full bg-white px-2.5 py-1.5 text-black shadow-lg hover:bg-zinc-100 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <Github size={14} className="shrink-0" />
                        <span className="max-w-[80px] opacity-100 ml-1.5 lg:max-w-0 lg:opacity-0 lg:ml-0 lg:group-hover/btn:max-w-[80px] lg:group-hover/btn:opacity-100 lg:group-hover/btn:ml-1.5 whitespace-nowrap overflow-hidden transition-all duration-300 text-xs font-medium">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-sm font-semibold text-text">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-text-muted">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title ?? ""} fullscreen>
        {selected && (
          <div className="flex h-screen w-screen items-center justify-center p-4">
            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-screen max-w-screen h-auto w-auto object-contain"
              loading="lazy"
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
