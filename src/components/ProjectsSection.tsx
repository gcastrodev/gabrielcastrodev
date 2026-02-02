import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Import project images
import barbeariaImage from "@/assets/project-barbearia.png";
import studioBeautyImage from "@/assets/project-studio-beauty.png";

const projects = [
  {
    title: "Barbearia Gustavo Bitencourt",
    category: "Barbearia",
    description:
      "Site profissional com sistema de agendamento online integrado. Clientes marcam horário 24h, reduzindo ligações e aumentando a organização.",
    results: ["Agendamento Online", "Design Responsivo", "SEO Otimizado"],
    tags: ["Landing Page", "Agendamento", "React"],
    link: "https://barbeariagustavobitencourt.com.br",
    image: barbeariaImage,
  },
  {
    title: "Studio Beauty - Maria Castro",
    category: "Salão de Beleza",
    description:
      "E-commerce completo com agendamento de serviços. Venda de produtos e marcação de horários em uma única plataforma integrada.",
    results: ["E-commerce", "Pagamento Online", "Gestão Integrada"],
    tags: ["E-commerce", "Agendamento", "Stripe"],
    link: "https://studiobeautymariacastro.com.br",
    image: studioBeautyImage,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-32 section-ice relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-[hsl(222_47%_11%)]">
            Projetos <span className="text-gradient font-semibold">Reais</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] max-w-2xl mx-auto text-lg">
            Negócios que confiam no meu trabalho. Clique para conhecer cada projeto.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="project-card-light group"
            >
              {/* Image area */}
              <div className="h-56 relative overflow-hidden">
                {/* Project screenshot */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/50 text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                  {project.category}
                </span>

                {/* External link icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[hsl(222_47%_11%)] mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </h3>

                <p className="text-[hsl(220_9%_46%)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.results.map((result) => (
                    <span
                      key={result}
                      className="px-3 py-1.5 rounded-lg text-sm bg-emerald-50 text-emerald-700 border border-emerald-200"
                    >
                      ✓ {result}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[hsl(220_13%_91%)]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
