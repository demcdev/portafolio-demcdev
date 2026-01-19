import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

const TAGS = {
  HTML: {
    name: "HTML",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/HTML.svg",
  },
  CSS: {
    name: "CSS",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/CSS.svg",
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Tailwind.svg",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/JavaScript.svg",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/TypeScript.svg",
  },
  REACT: {
    name: "React.js",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/React.svg",
  },
  ANGULAR: {
    name: "Angular",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Angular.svg",
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Astromd.svg",
  },
  VTEX: {
    name: "Vtex IO",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Vtex.svg",
  },
  SHOPIFY: {
    name: "Shopify",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Shopify.svg",
  },
  NODEJS: {
    name: "Node.js",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/NodeJS.svg",
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#192F5A] text-white",
    icon: "/tech/Python.svg",
  },
}

const PROJECTS = [
  {
    title: "Colchones Roomi",
    description: "WEB",
    link: "https://roomishop.mx/",
    image: "/projects/app-roomi.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.SHOPIFY],
  },
  {
    title: "Uniandes",
    description: "WEB",
    link: "https://tienda.uniandes.edu.co/",
    image: "/projects/app-uniandes.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.VTEX],
  },
  {
    title: "Clon Mercado Libre",
    description: "WEB",
    link: "https://clon-mercado-libre.netlify.app/",
    github: "https://github.com/DemcCode/clon-mercadolibre",
    image: "/projects/app-mercado-libre.webp",
    tags: [TAGS.HTML, TAGS.TAILWIND, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT],
  },
  {
    title: "Bancolombia Personas",
    description: "WEB",
    link: "https://www.bancolombia.com/personas",
    image: "/projects/app-bancolombia-personas.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.ANGULAR],
  },
  {
    title: "Tienda Juan Valdez",
    description: "WEB",
    link: "https://www.tiendajuanvaldez.com/",
    image: "/projects/app-juan-valdez.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.VTEX],
  },
  {
    title: "Tienda Mattelsa",
    description: "WEB",
    link: "https://www.mattelsa.net/",
    image: "/projects/app-mattelsa.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.VTEX],
  },
  {
    title: "Tienda Vine",
    description: "WEB",
    link: "https://www.vineonline.co.nz/",
    image: "/projects/app-vine.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.VTEX],
  },
  {
    title: "Tienda Supermall",
    description: "WEB",
    link: "https://www.supermall.pe/",
    image: "/projects/app-supermall.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.VTEX],
  },
  {
    title: "App de Posts con Login",
    description: "WEB",
    link: "https://app-posts.netlify.app/",
    github: "https://github.com/DemcCode/reto-tita-media",
    image: "/projects/app-posts.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.REACT],
  },
  {
    title: "App para agendar Citas",
    description: "WEB",
    link: "https://app-agendamiento-citas.netlify.app/",
    github: "/",
    image: "/projects/app-citas.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.ANGULAR],
  },
]

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="work" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-center mb-10 reveal">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              {t("projects.title")}
            </h2>
            <p className="mt-1 text-muted-foreground text-xs md:text-sm text-center">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-background hover-lift reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Hover Overlay - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm font-medium mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tag.class}`}
                    >
                      <img src={tag.icon} alt={tag.name} className="w-3.5 h-3.5" />
                      {tag.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl px-4 py-2 text-sm font-bold transition-all w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
