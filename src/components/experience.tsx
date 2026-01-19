import { Code2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Experience() {
  const { t } = useTranslation()

  const experiences = t("experience.items", { returnObjects: true }) as Array<{
    title: string
    company: string
    period: string
    description: string
  }>

  return (
    <section id="experience" className="py-8 md:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("experience.title")}
          </h2>
          <div className="w-12 h-0.5 bg-[#2ec766]" />
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative reveal">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-[#2ec766]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2ec766] leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] sm:text-xs text-muted-foreground border border-border px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mt-4 ml-0 sm:ml-14">
                <p className="text-muted-foreground text-xs sm:text-sm whitespace-pre-line leading-relaxed text-pretty">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
