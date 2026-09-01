import { useState } from "react";
import {
  Code2,
  Brackets,
  Smartphone,
  Database,
  Settings2,
  Workflow,
  Cpu,
  CircuitBoard,
  Microchip,
  GitBranch,
  Layers,
  LayoutPanelTop,
  List,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { skillTree, freeSkills, skills } from "../../data/skills";
import { useReveal } from "../../hooks/useReveal";
import type { SkillNode } from "../../types";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brackets,
  Smartphone,
  Database,
  Settings2,
  Workflow,
  Cpu,
  CircuitBoard,
  Microchip,
};

function countNodes(nodes: SkillNode[]): number {
  let c = 0;
  for (const n of nodes) {
    c += 1;
    if (n.children) c += countNodes(n.children);
  }
  return c;
}

function isMonoLogo(url?: string) {
  if (!url) return false;
  return url.includes("/ios") || url.includes("glyph-neue") || url.includes("prisma-orm") || url.includes("sequelize");
}

function SkillPill({ node, small }: { node: SkillNode; small?: boolean }) {
  const mono = isMonoLogo(node.logo);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border bg-bg px-2.5 py-1 text-xs font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-text ${small ? "text-[11px] px-2 py-0.5" : ""}`}
    >
      {node.logo ? (
        <span className={`${small ? "h-5 w-5" : "h-6 w-6"} shrink-0 flex items-center justify-center`}>
          <img
            src={node.logo}
            alt=""
            width={small ? 14 : 16}
            height={small ? 14 : 16}
            loading="lazy"
            className={`${small ? "h-3.5 w-3.5" : "h-4 w-4"} object-contain ${mono ? "invert brightness-0 [html.light_&]:invert-0 [html.light_&]:brightness-100" : ""}`}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
              const wrap = img.parentElement as HTMLElement | null;
              if (wrap) wrap.style.display = "none";
            }}
          />
        </span>
      ) : (
        <span className={`${small ? "h-5 w-5" : "h-6 w-6"} shrink-0 flex items-center justify-center`} aria-hidden />
      )}
      {node.name}
    </span>
  );
}

function BranchCard({ node }: { node: SkillNode }) {
  const hasChildren = !!(node.children && node.children.length > 0);

  const Icon = node.icon ? (iconMap[node.icon] ?? Code2) : Code2;

  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-bg-second p-5 sm:p-6 transition-all duration-300 hover:border-border/80 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden">
            {node.name === "HTML & CSS" ? (
              <span className="flex items-center -space-x-2">
                <img
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <img
                  src="https://img.icons8.com/fluency/48/css3.png"
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
              </span>
            ) : node.logo ? (
              <img
                src={node.logo}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className={`h-7 w-7 object-contain ${isMonoLogo(node.logo) ? "invert brightness-0 [html.light_&]:invert-0 [html.light_&]:brightness-100" : ""}`}
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
            ) : (
              <Icon size={18} className="text-text-muted" />
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-text truncate">{node.name}</h3>
            <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
              {hasChildren && (
                <>
                  <GitBranch size={12} className="shrink-0" />
                  {countNodes(node.children!)} dépendance{countNodes(node.children!) > 1 ? "s" : ""}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {hasChildren && (
        <div className="mt-4">
          <div className="relative pt-2 space-y-3">
            {node.children!.map((child) => {
              const childHasChildren = !!(child.children && child.children.length > 0);
              if (childHasChildren) {
                return (
                  <div
                    key={child.name}
                    className="rounded-lg "
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <SkillPill node={child} />
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5 ml-2 pl-2 border-l border-dashed border-border">
                      {child.children!.map((grand) => {

                        return <SkillPill key={grand.name} node={grand} small />;
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })}

            <div className="flex flex-wrap gap-2">
              {node.children!.filter((c) => !c.children || c.children.length === 0).map((child) => (
                <SkillPill key={child.name} node={child} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Skills() {
  const { ref, visible } = useReveal();
  const [view, setView] = useState<"tree" | "list">("tree");

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionTitle>SKILLS</SectionTitle>
        <div
          role="group"
          aria-label="Mode d'affichage"
          className="inline-flex items-center rounded-lg border border-border bg-bg-second p-1"
        >
          <button
            type="button"
            aria-pressed={view === "tree"}
            onClick={() => setView("tree")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${view === "tree"
                ? "bg-accent text-white shadow-sm"
                : "text-text-muted hover:text-text"
              }`}
          >
            <LayoutPanelTop size={14} aria-hidden className="rotate-x-180"/>
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${view === "list"
                ? "bg-accent text-white shadow-sm"
                : "text-text-muted hover:text-text"
              }`}
          >
            <List size={14} aria-hidden />
          </button>
        </div>
      </div>

      {view === "tree" ? (
        //Tree — layout asymétrique : gauche = faibles dépendances (hauteur auto), droite = JS/SQL (hauteur auto)
        <>
          <div className="mt-8 grid gap-4 sm:gap-6 lg:grid-cols-[0.6fr_1.6fr] items-start">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 items-start content-start">
              {skillTree
                .filter((n) => n.name === "JavaScript" || n.name === "SQL")
                .map((node) => (
                  <BranchCard key={node.name} node={node} />
                ))}
            </div>
            {/* Gauche : 6 cadrans légers — 2 colonnes auto-height */}
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 items-start content-start">
              {skillTree
                .filter((n) => n.name !== "JavaScript" && n.name !== "SQL")
                .map((node) => (
                  <BranchCard key={node.name} node={node} />
                ))}
            </div>
            {/* Droite : JS + SQL — 1 colonne, chaque cadran hauteur respective */}
            
          </div>

          <div className="mt-8 rounded-xl border border-border bg-bg-second p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <Layers size={16} className="text-text-muted" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text">Outils</h3>
              </div>
            </div>
            <div className="mx-auto mt-5 grid gap-6 place-content-center sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {freeSkills.map((group) => {
                const Icon = iconMap[group.icon] ?? Settings2;
                return (
                  <div key={group.label} className="min-w-0 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-3">
                      <Icon size={14} className="text-accent shrink-0" />
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted">{group.label}</h4>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text-muted hover:border-accent/20 transition-colors"
                        >
                          {item.logo && (
                            <span className="h-5 w-5 shrink-0 flex items-center justify-center">
                              <img
                                src={item.logo}
                                alt=""
                                width={14}
                                height={14}
                                loading="lazy"
                                className={`h-3.5 w-3.5 object-contain ${isMonoLogo(item.logo) ? "invert brightness-0 [html.light_&]:invert-0 [html.light_&]:brightness-100" : ""}`}
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.style.display = "none";
                                  const wrap = img.parentElement as HTMLElement | null;
                                  if (wrap) wrap.style.display = "none";
                                }}
                              />
                            </span>
                          )}
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (  //List
        <div className="mt-8 grid gap-4 sm:gap-6">
          {skills.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div key={cat.title} className="rounded-xl border border-border bg-bg-second p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-sm font-semibold text-text">{cat.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text-muted hover:border-accent/20 transition-colors"
                    >
                      {item.logo && (
                        <span className="h-6 w-6 shrink-0 flex items-center justify-center">
                          <img
                            src={item.logo}
                            alt=""
                            width={16}
                            height={16}
                            loading="lazy"
                            className={`h-4 w-4 object-contain ${isMonoLogo(item.logo) ? "invert brightness-0 [html.light_&]:invert-0 [html.light_&]:brightness-100" : ""}`}
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.display = "none";
                              const wrap = img.parentElement as HTMLElement | null;
                              if (wrap) wrap.style.display = "none";
                            }}
                          />
                        </span>
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
