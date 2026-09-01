import { SectionTitle } from "../ui/SectionTitle";
import { experiences } from "../../data/experiences";
import { educationData } from "../../data/education";
import { useReveal } from "../../hooks/useReveal";
import { GraduationCap } from "lucide-react";

export function Experience() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
    >
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.65fr_0.9fr] items-start">
        {/* Colonne gauche : Expérience */}
        <div>
          <SectionTitle>EXPÉRIENCES</SectionTitle>
          <div className="mt-10 relative pl-6 border-l border-border space-y-9">
            {experiences.map((exp) => {
              const current = exp.status === "current";
              return (
                <article key={exp.company} className="relative">
                  <span
                    className={`absolute -left-6.25 top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent ${
                      current ? "ring-4 ring-accent/15" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="font-mono text-xs text-accent">{exp.period}</p>
                    {current && (
                      <span className="rounded-full bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                        en cours
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-text">{exp.company}</h3>
                  <p className="text-sm text-text-muted">{exp.role}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm bg-bg-second border border-border/70 px-1.5 py-0.5 font-mono text-[10px] text-text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Colonne droite : Éducation */}
        <div className="lg:sticky lg:top-24">
          <SectionTitle>ÉDUCATION</SectionTitle>
          <div className="mt-10 relative pl-6 border-l border-border space-y-8 ">
            {educationData.map((ed) => (
              <article key={ed.period} className="relative">
                <span
                  className="absolute -left-6.25 top-1.5 h-3 w-3 rounded-full bg-accent border-2 border-bg"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-accent">
                  {ed.period}
                  {ed.status === "current" && <span className="text-text-muted"> — en cours</span>}
                </p>
                <h3 className="mt-1.5 text-sm font-semibold text-text">{ed.degree}</h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{ed.school}</p>
                <p className="text-xs text-text-muted">{ed.specialty}</p>
                {ed.diplome && (
                  <p className="mt-3 inline-flex items-center gap-1.5  border-l-3 border-accent bg-accent/10 rounded-sm px-2 py-1 font-mono text-[11px] ">
                    <GraduationCap size={12} className="shrink-0" />
                    Obtenu en {ed.diplome.period} · {ed.diplome.honors}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
