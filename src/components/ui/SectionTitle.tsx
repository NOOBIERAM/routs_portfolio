type Props = {
  children: string;
  id?: string;
};

export function SectionTitle({ children, id }: Props) {
  return (
    <h2
      id={id}
      className="font-mono text-[clamp(18px,3.2vw,26px)] font-bold tracking-tight text-text"
    >
      <span className="text-accent">$</span> <span className="text-text-muted">~/</span>
      {children}
    </h2>
  );
}
