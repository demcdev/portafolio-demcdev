import { useTranslation } from "react-i18next"
import { MonitorSmartphone, Cpu, Cloud } from "lucide-react"

export function About() {
  const { t } = useTranslation()

  const services = t("about.services", { returnObjects: true }) as { title: string, subtitle: string }[]
  const stats = t("about.stats", { returnObjects: true }) as { value: string, label: string }[]

  const serviceIcons = [<MonitorSmartphone key="web" />, <Cpu key="ai" />, <Cloud key="cloud" />]

  return (
    <section id="about" className="py-8 md:py-16 bg-muted/30 text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Content (Title + Description + Stats) */}
          <div className="flex flex-col order-1 md:order-2 reveal-right" style={{ transitionDelay: '300ms' }}>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
              {t("about.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-xl whitespace-pre-line">
              {t("about.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2 reveal" style={{ transitionDelay: `${400 + (index * 100)}ms` }}>
                  <span className="text-3xl md:text-5xl font-black text-[#2ec766] tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex flex-col justify-center gap-8 md:gap-10 order-2 md:order-1">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-6 group reveal-left" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-background border border-border flex items-center justify-center text-[#2ec766] group-hover:bg-[#2ec766] group-hover:text-white transition-all duration-300 shadow-sm hover-lift">
                    {serviceIcons[index]}
                  </div>
                  {/* Vertical Line Connector */}
                  {index !== services.length - 1 && (
                    <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 w-[2px] h-8 md:h-10 bg-gradient-to-b from-[#2ec766] to-transparent" />
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight group-hover:text-[#2ec766] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
