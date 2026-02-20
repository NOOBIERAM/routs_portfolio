import { Rocket, ScanEyeIcon, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return <>
        <div
            className={`max-md:hidden fixed z-50 top-6 right-6 transition-all duration-700 flex flex-col sm:flex-row space-y-2 sm:space-x-3 opacity-0 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div className="text-sm  group sm:w-max h-12 bg-second sm:px-3  flex items-center  justify-center border-3 border-gray-700 bg rounded-xl text-white/80 font-bold">
                <Zap size={20} className="text-teal-400 " />
                <span className="overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:mx-2 group-hover:max-w-[120px] ">Disponible</span>
            </div>

        </div>
        <div
            className={`fixed z-50 bottom-6 right-6 transition-all duration-700 flex flex-col sm:flex-row space-y-2 sm:space-x-3 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-12 sm:w-max h-12 sm:px-3 sm:space-x-3 flex items-center  justify-center border-3 border-white/80 bg-gray-800 rounded-xl  hover:text-teal-400 text-white/80 font-bold">
                <ScanEyeIcon className="hidden sm:block" size={20} /> <span>CV</span>
            </a>
            <button
                type="button"
                onMouseEnter={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all"
            >
                <Rocket className="w-5 text-gray-800 rotate-[-45deg]" />
            </button>

        </div>
    </>
}

export default ScrollTop