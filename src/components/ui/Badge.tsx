type Props = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: Props) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium";
  const variants = {
    default: "border-border bg-bg-second text-text-muted",
    accent: "border-accent/30 bg-accent/10 text-accent",
  };
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
