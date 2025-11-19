import { Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div
            className={`fixed z-50 bottom-6 right-6 transition-all duration-700 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all"
            >
                <Rocket className="w-5 h-5 text-gray-800" />
            </button>
        </div>
    )
}

export default ScrollTop