import { useEffect, useState } from "react";

export function CustomCursor() {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const updateRing = () => {
      const lerp = prefersReduced ? 1 : 0.15;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;
      setRingPos({ x: ringX, y: ringY });
      raf = window.requestAnimationFrame(updateRing);
    };
    raf = window.requestAnimationFrame(updateRing);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotPos({ x: mouseX, y: mouseY });
      if (!visible) setVisible(true);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setIsClick(true);
    const onUp = () => setIsClick(false);
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hover = !!target?.closest(
        "a, button, [role='button'], [data-cursor='pointer'], label, select, summary",
      );
      setIsHover(hover);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    document.documentElement.classList.add("custom-cursor-enabled");

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, [visible]);

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{ left: dotPos.x, top: dotPos.y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      <div
        className={`custom-cursor-ring${isHover ? " is-hover" : ""}${isClick ? " is-click" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
}
