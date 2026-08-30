import { Mail, Github, Linkedin, MessageCircle, Globe, MapPin } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { profile } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";

const asciiContact = `
      .--.
     /    \\
    |  -- |
    | |  | |
    |  -- |
     \\    /
      \`--\`
   .--------.
  /  CONTACT \\
 |   @mail   |
  \\  ______/
`;

export function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <SectionTitle>CONTACT</SectionTitle>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
        Un projet en tête ? N&apos;hésitez pas à me contacter — réponse rapide garantie.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.65fr_340px]">
        {/* neofetch */}
        <div className="overflow-hidden rounded-lg border border-accent/20 bg-terminal shadow-lg shadow-black/10">
          <div className="border-2 border-accent/30 m-1 sm:m-2 rounded-md overflow-hidden bg-terminal">
            <div className="flex items-center justify-between border-b border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span className="text-accent font-bold">neofetch</span>
                <span className="text-text-muted">— contact</span>
              </span>
              <span className="text-text-muted/60 hidden sm:inline">80×18 • utf-8</span>
            </div>

            <div className="p-4 sm:p-6">
              <div className="font-mono text-xs mb-4 flex items-center gap-2">
                <span className="text-accent">❯</span>
                <span className="text-text">neofetch</span>
                <span className="text-text-muted">--contact</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-[140px_1fr] items-start font-mono text-xs">
                <pre className="text-accent leading-[1.2] text-[11px] sm:text-xs select-none overflow-x-auto whitespace-pre flex justify-center sm:justify-start">
                  {asciiContact}
                </pre>

                <div className="min-w-0 leading-relaxed">
                  <p className="font-bold">
                    <span className="text-accent">routs</span>
                    <span className="text-text-muted">@</span>
                    <span className="text-accent">routsgg</span>
                  </p>
                  <p className="text-border leading-none">------------------</p>
                  <div className="mt-3 space-y-1.5">
                    <p className="flex items-center gap-2 truncate">
                      <Mail size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">Email:</span>
                      <a href={`mailto:${profile.email}`} className="truncate text-text hover:text-accent underline decoration-border underline-offset-2 transition-colors">
                        {profile.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">Tél:</span>
                      <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="text-text hover:text-accent transition-colors">
                        {profile.whatsappLabel}
                      </a>
                      <span className="hidden sm:inline text-text-muted">(WhatsApp)</span>
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <Github size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">GitHub:</span>
                      <a href={profile.github} target="_blank" rel="noreferrer" className="truncate text-text hover:text-accent transition-colors">
                        github.com/NOOBIERAM
                      </a>
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <Linkedin size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">LinkedIn:</span>
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="truncate text-text hover:text-accent transition-colors">
                        linkedin.com/in/noobieram
                      </a>
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <Globe size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">Site:</span>
                      <a href={profile.site} target="_blank" rel="noreferrer" className="text-text hover:text-accent transition-colors">
                        routsgg.me
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={12} className="shrink-0 text-accent" />
                      <span className="font-bold text-accent">Lieu:</span>
                      <span className="text-text">Fianarantsoa, MG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RoutGG image */}
        <div className="rounded-xl border border-border bg-bg-second p-5 sm:p-6 flex flex-col items-center gap-4 h-fit lg:sticky lg:top-24">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span>RoutGG</span>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-md">
            <img
              src="/RoutGG.png"
              alt="QR code RoutGG — scannez pour voir mes contacts"
              width={180}
              height={180}
              loading="lazy"
              className="h-[180px] w-[180px] object-contain"
            />
          </div>
          <p className="text-center font-mono text-xs leading-relaxed text-text-muted">
            Scannez pour <span className="text-text font-medium">voir mes contacts</span>
          </p>
        </div>
      </div>
    </section>
  );
}
