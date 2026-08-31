import { Download, Mail, Github, Linkedin, Zap, MessageCircle } from "lucide-react";
import { profile } from "../../data/profile";
import { Badge } from "../ui/Badge";
import { useReveal } from "../../hooks/useReveal";

export function Hero() {
  const { ref, visible } = useReveal();
  return (
    <section
      id="accueil"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-sm text-accent mb-3">{profile.greeting}</p>
          <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold tracking-tight leading-none text-text">
            Je suis <span className="text-accent">{profile.nameShort}</span>
          </h1>
          <p className="mt-3 text-[clamp(16px,2.2vw,20px)] font-medium text-text-muted">{profile.title}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-muted">{profile.slogan}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="accent">
              <Zap size={14} className="mr-1.5" /> Disponible
            </Badge>
            <span className="text-xs text-text-muted font-mono">— ouvert aux opportunités</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer"
            >
              <Download size={16} /> Télécharger le CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-second px-6 py-3 text-sm font-semibold text-text hover:border-accent/30 hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <Mail size={16} /> Me contacter
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-text hover:border-accent/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-text hover:border-accent/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-text hover:border-accent/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
            <img
              src="/images/routs.webp"
              alt="Portrait de Rotsiniaina RAMANANTSOA"
              width={320}
              height={320}
              loading="eager"
              className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] rounded-full object-cover grayscale border-2 border-accent/40 bg-bg-second"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute -bottom-2 -right-2 rounded-full border border-border bg-bg-second px-3 py-1.5 font-mono text-xs text-text-muted shadow">
              <span className="text-accent">●</span> Antananarivo, MG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
