import { SectionTitle } from "../ui/SectionTitle";
import { experiences } from "../../data/experiences";
import { educationData } from "../../data/education";
import { Badge } from "../ui/Badge";
import { useReveal } from "../../hooks/useReveal";

export function Experience() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.65fr_0.9fr] items-start">
        {/* Colonne gauche : Expérience */}
        <div>
          <SectionTitle>EXPÉRIENCES</SectionTitle>
          <div className="mt-10 relative pl-6 border-l border-border space-y-10">
            {experiences.map((exp) => (
              <article key={exp.company} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-accent border-2 border-bg" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-semibold text-text">{exp.company}</h3>
                  <span className="text-sm text-text-muted">— {exp.role}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-accent">{exp.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Colonne droite : Éducation */}
        <div className="lg:sticky lg:top-24">
          <SectionTitle>ÉDUCATION</SectionTitle>
          <div className="mt-10 rounded-xl border border-border bg-bg-second p-6">
            <div className="relative pl-6 border-l border-border space-y-8">
              {educationData.map((ed) => (
                <div key={ed.period} className="relative">
                  <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-accent border-2 border-bg-second" aria-hidden="true" />
                  <p className="font-mono text-xs text-accent">
                    {ed.period} {ed.status === "current" ? "— en cours" : ""}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-text">{ed.degree}</h3>
                  <p className="text-xs leading-relaxed text-text-muted mt-1">{ed.school}</p>
                  <p className="text-xs text-text-muted">{ed.specialty}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-text-muted/60">ENI Fianarantsoa — Génie Logiciel et Bases de Données</p>
          </div>
        </div>
      </div>
    </section>
  );
}
