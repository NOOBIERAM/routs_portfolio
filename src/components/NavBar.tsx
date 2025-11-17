import React, { useState, useEffect } from "react"
import { Menu, X, Globe, Rocket } from "lucide-react"

const NavBar: React.FC = ()=> {

    const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Formation", href: "/formation" },
    { label: "Vie Étudiants", href: "/vie-etudiants" },
    { label: "A propos", href: "/direction" },
    { label: "Concours", href: "https://concours.eni.mg", external: true },
  ]

  const fakeLanguages = ["Français", "English", "Español", "عربي"]

  return (
    <>
      {/* Navbar principale */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[75%] 
        rounded-full border transition-all duration-500
        ${
          isScrolled
            ? "bg-white/50 backdrop-blur-lg border-white/30 shadow-[0_10px_48px_rgba(0,0,0,0.05)]"
            : "bg-white/20 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 relative">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-gray/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Lang Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1 transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Globe className="w-5 h-5" />
                </button>

                {langOpen && (
                  <div
                    className={`absolute right-0 mt-3 w-40 rounded-xl border shadow-lg overflow-hidden animate-fadeIn 
                    ${
                      isScrolled
                        ? "bg-white/90 border-gray-200"
                        : "bg-white/20 border-white/30 backdrop-blur-md"
                    }`}
                  >
                    {fakeLanguages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLangOpen(false)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200
                        ${
                          isScrolled
                            ? "text-gray-800 hover:bg-gray-100"
                            : "text-white/90 hover:bg-white/30"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`md:hidden mt-2 pb-4 space-y-2 rounded-xl border shadow-inner animate-fadeIn 
              ${
                isScrolled
                  ? "bg-white/90 border-gray-200"
                  : "bg-white/10 backdrop-blur-md border-white/20"
              }`}
            >
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`block px-4 py-2 text-xl font-medium rounded-lg transition-all duration-200
                  ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-100"
                      : "text-white/90 hover:bg-white/20 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Lang Selector */}
              <div className="px-4 py-2 relative">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <Globe className="w-5 h-5" /> Langue
                </button>

                {langOpen && (
                  <div
                    className={`absolute left-0 mt-3 w-40 rounded-xl border shadow-lg overflow-hidden animate-fadeIn 
                    ${
                      isScrolled
                        ? "bg-white/90 border-gray-200"
                        : "bg-white/20 border-white/30 backdrop-blur-md"
                    }`}
                  >
                    {fakeLanguages.map((lang) => (
                      <button
                        key={lang}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors
                        ${
                          isScrolled
                            ? "text-gray-800 hover:bg-gray-100"
                            : "text-white/90 hover:bg-white/30"
                        }`}
                        onClick={() => setLangOpen(false)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bouton retour haut */}
      <div
        className={`fixed z-50 bottom-6 right-6 transition-all duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
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
    </>
  )
}

export default NavBar