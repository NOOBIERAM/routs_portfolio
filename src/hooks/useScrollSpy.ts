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
      setActive(current);
      ticking = false;
    };
    const handler = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}
