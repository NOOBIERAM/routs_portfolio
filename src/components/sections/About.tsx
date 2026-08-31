import { useEffect, useState } from "react";
import { Shapes, Leaf, Lightbulb, CircleFadingArrowUp, Puzzle, Boxes, Smartphone, Brain, Folder, GitBranch } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { qualities } from "../../data/qualities";
import { useReveal } from "../../hooks/useReveal";

function formatTime(d: Date) {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

const iconMap: Record<string, React.ElementType> = {
  Shapes,
  Leaf,
  Lightbulb,
  CircleFadingArrowUp,
  Puzzle,
  Boxes,
  Smartphone,
  Brain,
};

const scattered = [
  "rotate-[-4.2deg] translate-y-[8px]  -translate-x-[4px]",
  "rotate-[3.6deg]  -translate-y-[10px] translate-x-[6px]",
  "rotate-[-1.8deg] translate-y-[14px]  translate-x-[2px]",
  "rotate-[4.5deg]  -translate-y-[6px]  -translate-x-[2px]",
  "rotate-[-2.8deg] translate-y-[4px]   translate-x-[8px]",
  "rotate-[2.4deg]  -translate-y-[12px] -translate-x-[6px]",
  "rotate-[-5deg]   translate-y-[10px]  translate-x-[4px]",
  "rotate-[3.2deg]  translate-y-[2px]   -translate-x-[8px]",
];

export function About() {
  const { ref, visible } = useReveal();
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(new Date())), 1_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="parcours"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <SectionTitle>WHOAMI</SectionTitle>

      {/* tmux frame — même thème que Contact */}
      <div className="mt-8 overflow-hidden rounded-lg border border-accent/20 bg-terminal shadow-xl shadow-black/20">
        <div className="border-2 border-accent/30 m-1 sm:m-2 rounded-md overflow-hidden bg-terminal">
          {/* tmux header — avec 3 btn fermer / réduire / agrandir */}
          <div className="flex items-center justify-between border-b border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs">
            <span className="flex items-center gap-2 min-w-0">
              <span className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90 border border-black/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90 border border-black/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/90 border border-black/10" />
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse shrink-0 sm:hidden" aria-hidden="true" />
              <span className="text-accent font-bold truncate">tmux</span>
              <span className="text-text-muted hidden sm:inline truncate">— routs@routsgg: ~/whoami</span>
              <span className="hidden lg:inline-flex items-center gap-1 ml-2 text-[10px] leading-none">
                <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-terminal">0:whoami*</span>
                <span className="rounded bg-accent/15 px-1.5 py-0.5 text-text-muted border border-accent/20">1:experience</span>
                <span className="hidden xl:inline rounded bg-accent/15 px-1.5 py-0.5 text-text-muted border border-accent/20">2:skills</span>
                <span className="hidden xl:inline rounded bg-accent/15 px-1.5 py-0.5 text-text-muted border border-accent/20">3:projects</span>
              </span>
            </span>
            <span className="text-text-muted/60 hidden sm:inline shrink-0">tmux 3.4 • utf-8</span>
          </div>

          {/* pane header — whoami */}
          <div className="flex items-center justify-between border-b border-accent/20 bg-terminal px-3 py-1.5 font-mono text-xs">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-accent font-bold">pane 0</span>
              <span className="text-text-muted">— ~/whoami.txt</span>
            </span>
            <span className="text-text-muted/60 hidden sm:inline">80×24 • utf-8</span>
          </div>

          {/* pane content */}
          <div className="p-5 sm:p-7">
            {/* zsh powerlevel10k prompt */}
            <div className="mb-4 font-mono text-xs select-none">
              <div className="flex flex-wrap items-stretch overflow-hidden rounded-md  border-white/10 [html.light_&]:border-border max-w-full">
                <div className="flex items-center gap-1.5 bg-[#264464] px-2.5 py-1.5 text-white">
                  <span className="hidden sm:inline">rotsi@routsgg</span>
                  <span className="sm:hidden">rotsi</span>
                </div>
                <div className="flex items-stretch bg-[#1a2e4a]">
                  <svg width="10" height="24" viewBox="0 0 10 24" className="h-auto w-[10px] block" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 0 L10 12 L0 24 Z" fill="#264464" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1a2e4a] px-2.5 py-1.5 text-accent">
                  <Folder size={12} className="shrink-0" />
                  <span>~</span>
                  <span className="hidden sm:inline opacity-60">/whoami</span>
                </div>
                <div className="flex items-stretch bg-accent">
                  <svg width="10" height="24" viewBox="0 0 10 24" className="h-auto w-[10px] block" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 0 L10 12 L0 24 Z" fill="#1a2e4a" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 bg-accent px-2.5 py-1.5 text-black font-bold">
                  <GitBranch size={12} className="shrink-0" />
                  <span>main</span>
                  <span className="hidden sm:inline font-normal opacity-70">✓</span>
                </div>
                <div className="flex items-stretch">
                  <svg width="10" height="24" viewBox="0 0 10 24" className="h-auto w-[10px] block" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 0 L10 12 L0 24 Z" fill="#14b8a6" />
                  </svg>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-accent font-bold">❯</span>
                <span className="text-text">cat</span>
                <span className="text-text-muted">~/whoami.txt</span>
                <span className="ml-1 inline-block h-[14px] w-[7px] translate-y-px bg-accent animate-[blink_700ms_steps(1)_infinite]" aria-hidden="true" />
              </div>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-text-muted max-w-3xl font-sans">
              <p className="text-text">
                Je suis <span className="font-semibold text-accent">Rotsiniaina RAMANANTSOA</span>, alias <span className="font-mono text-text border border-border rounded px-1">Rotsi</span> — développeur fullstack web &amp; mobile basé à Antananarivo, Madagascar. Passionné par le code propre, la POO et le mobile-first, je conçois des applications modernes de l&apos;architecture à l&apos;interface, avec une exigence forte sur la performance et l&apos;expérience utilisateur.
              </p>
              <p>
                Diplômé de l&apos;ENI Antananarivo (Génie Logiciel et Bases de Données), j&apos;ai mené des projets allant d&apos;applications de gestion et de messagerie sécurisée à des systèmes embarqués <span className="text-text">ESP32 / HC-SR04</span> et des solveurs algorithmiques (CSP, OR-Tools). Mon approche : autonomie, rigueur, créativité et apprentissage continu.
              </p>
              <p>
                Autonome, analytique et progressif, j&apos;aime résoudre des problèmes complexes et transformer une idée en produit fonctionnel — que ce soit en <span className="text-text">React, Vue, Node/NestJS, Spring Boot</span> ou <span className="text-text">React Native / Flutter</span>. Je recherche des missions où je peux apporter de la valeur rapidement et durablement.
              </p>
            </div>

            {/* pane divider — horizontal split like tmux */}
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-border">
              <span className="h-px flex-1 bg-border" />
              <span className="px-2 py-0.5 bg-bg-second text-text-muted">─ qualités ─</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            {/* qualities — dispersed panes */}
            <div className="mt-4">
              <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 px-1 py-4">
                {qualities.map((q, i) => {
                  const Icon = iconMap[q.icon] ?? Shapes;
                  return (
                    <div
                      key={q.label}
                      className={`group relative flex min-w-[118px] sm:min-w-[136px] flex-col items-center gap-2  px-4 py-4 sm:px-5 sm:py-5 text-center  transition-all duration-300 will-change-transform hover:z-20 hover:scale-[1.06] hover:!rotate-0 hover:!translate-y-0 hover:!translate-x-0  [html.light_&]:!border-border ${i === 0 ? "border-accent/50 [html.light_&]:!border-accent/50" : "border-white/10"} ${scattered[i % scattered.length]}`}
                    >
                      <Icon size={18} className="text-accent transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-xs font-medium leading-tight text-text">{q.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* tmux status bar — même que Contact */}
          <div className="flex items-center justify-between gap-2 border-t border-accent/20 bg-accent/10 px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs leading-none">
            <span className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <span className="hidden sm:inline text-text-muted">[0]</span>
              <span className="rounded-sm bg-accent px-1.5 py-1 font-bold text-terminal">0:whoami*</span>
              <span className="rounded-sm border border-accent/20 bg-terminal px-1.5 py-1 text-text-muted hidden sm:inline">1:experience</span>
              <span className="rounded-sm border border-accent/20 bg-terminal px-1.5 py-1 text-text-muted hidden lg:inline">2:skills</span>
            </span>
            <span className="hidden sm:inline text-text-muted/70 truncate">routs@routsgg • tmux • Antananarivo</span>
            <span className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline text-text-muted/60">utf-8</span>
              <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-terminal">100%</span>
              <span suppressHydrationWarning className="text-text-muted">{time}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
