import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let ticking = false;
    const update = () => {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) current = id;
      }
      // Bas de page : forcer la dernière section (contact trop court pour atteindre le haut)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        const last = ids[ids.length - 1];
        if (last && document.getElementById(last)) current = last;
      }
      setActive((prev) => (prev === current ? prev : current));
      ticking = false;
    };
    const handler = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    // Sections lazy (Suspense) montées après le premier render
    const t1 = window.setTimeout(update, 300);
    const t2 = window.setTimeout(update, 1200);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [ids, offset]);

  return active;
}
