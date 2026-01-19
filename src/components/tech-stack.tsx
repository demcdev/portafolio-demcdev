import { useTranslation } from "react-i18next"

const technologies = [
  { name: "React", icon: "/tech/React.svg" },
  { name: "Next.js", icon: "/tech/NextJS.svg" },
  { name: "TypeScript", icon: "/tech/TypeScript.svg" },
  { name: "JavaScript", icon: "/tech/JavaScript.svg" },
  { name: "Tailwind", icon: "/tech/Tailwind.svg" },
  { name: "HTML", icon: "/tech/HTML.svg" },
  { name: "CSS", icon: "/tech/CSS.svg" },
  { name: "Sass", icon: "/tech/Sass.svg" },
  { name: "Angular", icon: "/tech/Angular.svg" },
  { name: "Astro", icon: "/tech/Astromd.svg" },
  { name: "Node.js", icon: "/tech/NodeJS.svg" },
  { name: "Express", icon: "/tech/Express.svg" },
  { name: "MongoDB", icon: "/tech/MongoDB.svg" },
  { name: "Python", icon: "/tech/Python.svg" },
  { name: "GraphQL", icon: "/tech/GraphQL.svg" },
  { name: "Shopify", icon: "/tech/Shopify.svg" },
  { name: "Vtex", icon: "/tech/Vtex.svg" },
  { name: "GitHub", icon: "/tech/GitHub.svg" },
]

export function TechStack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("stack.toolkit")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            {t("stack.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            {t("stack.subtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-card hover:bg-card/80 rounded-xl md:rounded-3xl p-2 md:p-4 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2 md:gap-3 reveal"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
