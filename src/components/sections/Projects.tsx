import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { projects } from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";

const cornerBtn =
  "group/btn pointer-events-auto inline-flex h-8 items-center justify-center overflow-hidden rounded-lg border border-border bg-bg-second/95 px-2 text-text shadow-lg backdrop-blur-sm transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
const cornerLabel =
  "mr-0 max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 group-hover/btn:mr-1.5 group-hover/btn:max-w-[64px] group-hover/btn:opacity-100 group-focus-visible/btn:mr-1.5 group-focus-visible/btn:max-w-[64px] group-focus-visible/btn:opacity-100";

export function Projects() {
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

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const primary = p.demo ?? p.github;
          return (
            <article
              key={p.id}
              className={`group/card flex flex-col transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: visible ? `${Math.min(i, 6) * 60}ms` : "0ms" }}
            >
              <div className="group/img relative aspect-16/10 overflow-hidden rounded-lg border border-border bg-bg transition-colors duration-300 group-hover/card:border-accent/40">
                <img
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-[1.03]"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector(".fallback")) {
                      const div = document.createElement("div");
                      div.className =
                        "fallback flex h-full w-full items-center justify-center font-mono text-xs text-text-muted bg-bg";
                      div.textContent = p.title;
                      parent.appendChild(div);
                    }
                  }}
                />

                {(p.demo || p.github) && (
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 opacity-100 translate-y-0 transition-all duration-500 ease-out sm:translate-y-3 sm:opacity-0 sm:group-hover/img:translate-y-0 sm:group-hover/img:opacity-100">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Voir la démo"
                        className={cornerBtn}
                      >
                        <span className={cornerLabel}>demo</span>
                        <ExternalLink size={14} className="shrink-0" />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Voir le dépôt"
                        className={cornerBtn}
                      >
                        <span className={cornerLabel}>repo</span>
                        <Github size={14} className="shrink-0" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <a
                  href={primary}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-3 focus-visible:outline-none"
                >
                  <h3 className="text-sm font-medium text-text transition-colors group-hover/card:text-accent">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="mt-0.5 shrink-0 text-text-muted transition-all duration-300 group-hover/card:-translate-y-px group-hover/card:translate-x-px group-hover/card:text-accent"
                  />
                </a>

                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                  {p.description}
                </p>

                <p className="mt-3 font-mono text-[11px] leading-relaxed text-text-muted/80">
                  {p.stack.join("  ·  ")}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
