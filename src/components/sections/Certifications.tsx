import { Award, ExternalLink } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { certifications } from "../../data/certifications";
import { useReveal } from "../../hooks/useReveal";

export function Certifications() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <SectionTitle>CERTIFICATIONS</SectionTitle>
      <div className="mt-10 grid gap-6">
        {certifications.map((c) => (
          <div
            key={c.verifyUrl}
            className="flex flex-col sm:flex-row gap-5 rounded-xl border border-border bg-bg-second p-5 sm:p-6 hover:border-accent/30 transition-colors"
          >
            <img
              src={c.image}
              alt={`Certificat ${c.title}`}
              width={260}
              height={180}
              loading="lazy"
              className="h-auto w-full sm:w-[260px] rounded-lg border border-border object-cover bg-bg"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="flex flex-1 flex-col">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent">
                <Award size={14} /> {c.issuer} — {c.date}
              </div>
              <h3 className="mt-2 text-base font-semibold text-text">{c.title}</h3>
              <p className="mt-1 text-sm text-text-muted">Certification intermédiaire validée sur HackerRank.</p>
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-bg px-4 py-2 text-xs font-medium text-text-muted hover:text-accent hover:border-accent/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink size={12} /> Vérifier le certificat
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
