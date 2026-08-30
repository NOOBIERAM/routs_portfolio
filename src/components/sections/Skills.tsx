import { Code2, Brackets, Smartphone, Database, Settings2, Workflow, Cpu } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { skills } from "../../data/skills";
import { useReveal } from "../../hooks/useReveal";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brackets,
  Smartphone,
  Database,
  Settings2,
  Workflow,
  Cpu,
};

export function Skills() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <SectionTitle>SKILLS</SectionTitle>
      <div className="mt-10 grid gap-6 sm:gap-6">
        {skills.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Code2;
          return (
            <div key={cat.title} className="rounded-xl border border-border bg-bg-second p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-accent" />
                <h3 className="text-sm font-semibold text-text">{cat.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.flatMap((item) => {
                  const nodes: React.ReactNode[] = [];
                  if (cat.title === "Outils" && item.name === "Docker") {
                    nodes.push(<div key="break-devops" className="basis-full h-0" aria-hidden="true" />);
                  }
                  nodes.push(
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text-muted"
                    >
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt=""
                          width={16}
                          height={16}
                          loading="lazy"
                          className="h-4 w-4 object-contain"
                          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                        />
                      )}
                      {item.name}
                    </span>
                  );
                  return nodes;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
