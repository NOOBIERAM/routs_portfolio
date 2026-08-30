import { Moon, Sun } from "lucide-react";

type Props = {
  theme: "dark" | "light";
  toggle: () => void;
};

export function ThemeToggle({ theme, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      aria-label={`Passer en mode ${theme === "dark" ? "clair" : "sombre"}`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-second text-text-muted hover:text-text hover:border-accent/40 transition-colors focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
