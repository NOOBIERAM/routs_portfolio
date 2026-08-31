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

      <div className="mt-8 overflow-hidden rounded-lg border border-accent/20 bg-terminal shadow-lg shadow-black/10">
        <div className="border-2 border-accent/30 m-1 sm:m-2 rounded-md overflow-hidden bg-terminal">
          {/* tmux header — single terminal */}
          <div className="flex items-center justify-between border-b border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs">
            <span className="flex items-center gap-2 min-w-0">
              <span className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse shrink-0 sm:hidden" aria-hidden="true" />
              <span className="text-accent font-bold truncate">tmux</span>
              <span className="text-text-muted hidden sm:inline truncate">— routs@routsgg: ~/contact</span>
              <span className="hidden lg:inline-flex items-center gap-1 ml-2 text-[10px] leading-none">
                <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-terminal">0:neofetch*</span>
                <span className="rounded bg-accent/15 px-1.5 py-0.5 text-text-muted border border-accent/20">1:qr</span>
              </span>
            </span>
            <span className="text-text-muted/60 hidden sm:inline shrink-0">tmux 2 panes • utf-8</span>
          </div>

          {/* tmux split — 2 panes in one terminal */}
          <div className="grid lg:grid-cols-[1.65fr_340px] divide-y lg:divide-y-0 lg:divide-x divide-accent/20">
            {/* pane 0 — neofetch */}
            <div className="relative p-4 sm:p-6">
              <div className="absolute top-2 right-2 hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] leading-none text-text-muted/70">
                <span className="h-3 w-3 rounded-sm border border-accent/30 bg-accent/10 flex items-center justify-center text-accent font-bold">0</span>
                <span>neofetch</span>
              </div>
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
                      <span className="text-text">Antananarivo, MG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* pane 1 — QR */}
            <div className="relative flex flex-col items-center gap-4 p-5 sm:p-6 bg-bg-second/20 lg:bg-terminal">
              <div className="absolute top-2 right-2 hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] leading-none text-text-muted/70">
                <span className="h-3 w-3 rounded-sm border border-border bg-bg-second flex items-center justify-center text-text-muted font-bold">1</span>
                <span>qr</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-text-muted mt-1 sm:mt-0">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span>RoutGG</span>
                <span className="text-text-muted/50">— scan</span>
              </div>
              <div className="relative p-2">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 -left-1.5 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 -right-1.5 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-accent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-accent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent"
                />
                <img
                  src="/qrcode.png"
                  alt="QR code RoutGG — scannez pour voir mes contacts"
                  width={180}
                  height={180}
                  loading="lazy"
                  className="h-42 w-42 object-contain rounded-sm"
                />
              </div>
              <p className="text-center font-mono text-xs leading-relaxed text-text-muted">
                Scannez pour <span className="text-text font-medium">voir mes contacts</span>
              </p>
            </div>
          </div>

          {/* tmux status bar */}
          <div className="flex items-center justify-between gap-2 border-t border-accent/20 bg-accent/10 px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs leading-none">
            <span className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <span className="hidden sm:inline text-text-muted">[0]</span>
              <span className="rounded-sm bg-accent px-1.5 py-1 font-bold text-terminal">0:neofetch*</span>
              <span className="rounded-sm border border-accent/20 bg-terminal px-1.5 py-1 text-text-muted">1:qr</span>
            </span>
            <span className="hidden sm:inline text-text-muted/70 truncate">routs@routsgg • tmux • 2 panes</span>
            <span className="text-accent font-bold shrink-0">contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
