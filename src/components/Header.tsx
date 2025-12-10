import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { colors } from "../constants/colors"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.jpg"
              alt="Sonhalize Logo"
              className="h-10 w-10 object-cover rounded"
            />
            <span
              className="text-2xl font-serif"
              style={{ color: colors.primary }}
            >
              Sonhalize Personalizados
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: colors.primary }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("horario")}
              className="hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Horário
            </button>
            <button
              onClick={() => scrollToSection("form")}
              className="px-6 py-2 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.gold }}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-left hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-left hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:opacity-70 transition-opacity"
              style={{ color: colors.primary }}
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("form")}
              className="px-6 py-2 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.secondary }}
            >
              Solicitar Orçamento
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
