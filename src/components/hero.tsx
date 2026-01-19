import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-muted/30 pt-6 md:pt-12 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="mt-0 text-2xl md:text-4xl font-bold mb-1 animate-reveal-up" style={{ animationDelay: '100ms', opacity: 0 }}>
              {t("hero.hello")}
              <span className="text-[#2ec766]">.</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2 animate-reveal-up" style={{ animationDelay: '200ms', opacity: 0 }}>
              <div className="h-[2px] w-12 bg-[#2ec766]" />
              <p className="text-lg md:text-2xl m-0 font-medium text-muted-foreground">
                {t("hero.im")}
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-10 tracking-tight leading-tight text-foreground animate-reveal-up" style={{ animationDelay: '300ms', opacity: 0 }}>
              {t("hero.role")}
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 animate-reveal-up" style={{ animationDelay: '400ms', opacity: 0 }}>
              <Button asChild className="bg-[#2ec766] hover:bg-[#28b35c] text-white rounded-md px-8 py-4 md:py-6 text-lg font-semibold border-none transition-all hover-lift w-full sm:w-auto">
                <a href="mailto:demcdev@gmail.com">
                  {t("header.contact")}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted rounded-md px-8 py-4 md:py-6 text-lg font-semibold transition-all hover-lift w-full sm:w-auto">
                <a href="/files/CV_DiegoMora_FrontendDeveloper.pdf" download>
                  {t("hero.myResume")}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '500ms', opacity: 0 }}>
            <div className="relative w-[220px] h-[220px] md:w-[450px] md:h-[450px]">
              {/* Circular Background with Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ec766]/20 to-transparent border border-[#2ec766]/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-[#2ec766]/20" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#2ec766]/40 shadow-[0_0_50px_rgba(46,199,102,0.2)]">
                <img
                  src="/diegomora.webp"
                  alt="Diego Mora"
                  className="w-full object-cover translate-y-4"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 text-4xl text-[#2ec766]/40 font-light rotate-12 select-none">&lt;</div>
              <div className="absolute -bottom-4 -right-4 text-4xl text-[#2ec766]/40 font-light -rotate-12 select-none">&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
