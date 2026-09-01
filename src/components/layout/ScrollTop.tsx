import { useEffect, useState } from "react";
import { Rocket, Download } from "lucide-react";
import { profile } from "../../data/profile";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!visible) return null;

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const showQR = visible && !inContact;

  return (
    <div
      className=" fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <div
        className={`transition-all duration-300 ${showQR ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"}`}
        aria-hidden={!showQR}
      >
        <div className="relative rounded-xl border border-border bg-white p-1.5 shadow-sm">
          <img
            src="/qrcode.png"
            alt="QR code — scanner pour voir mes contacts"
            width={96}
            height={96}
            loading="lazy"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 self-center">
        <a
          href={profile.cv}
          download
          aria-label="Télécharger le CV"
          className="group/btn inline-flex h-10 items-center justify-center gap-0 overflow-hidden rounded-lg border border-border bg-bg-second px-2.5 text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="max-w-[140px] opacity-100 whitespace-nowrap overflow-hidden transition-all duration-300 text-xs font-medium lg:max-w-0 lg:opacity-0 lg:ml-0 lg:group-hover/btn:max-w-[140px] lg:group-hover/btn:opacity-100 lg:group-hover/btn:mr-1.5 lg:group-focus-visible/btn:max-w-[140px] lg:group-focus-visible/btn:opacity-100 lg:group-focus-visible/btn:ml-1.5">
            Télécharger CV
          </span>
          <Download size={16} className="shrink-0" />
        </a>
        <button
          onClick={goTop}
          onMouseEnter={goTop}
          aria-label="Remonter en haut"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-second text-text-muted hover:text-accent hover:border-accent/30 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
        >
          <Rocket size={16} className="rotate-[-45deg]"/>
        </button>
      </div>
    </div>
  );
}
