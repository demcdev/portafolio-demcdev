import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navLinks = [
    { href: "#about", label: t("header.about") },
    { href: "#stack", label: t("header.stack") },
    { href: "#work", label: t("header.work") },
    { href: "#experience", label: t("header.experience") },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-semibold text-lg text-foreground">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center border-4 border-[#2ec766]/40 shadow-[0_0_50px_rgba(46,199,102,0.2)]">
              <img src="/logo-dm.png" alt="Logo" className="object-contain" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-lg cursor-pointer"
              title={i18n.language === "en" ? "Cambiar a Español" : "Switch to English"}
            >
              <Languages className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
            >
              <Languages className="w-5 h-5" />
            </Button>
            <button
              type="button"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("header.toggleMenu")}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
