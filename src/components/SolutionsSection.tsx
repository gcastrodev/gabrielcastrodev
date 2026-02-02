import { motion } from "framer-motion";
import { Stethoscope, ShoppingCart, Target, Briefcase, Building2, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: Stethoscope,
    title: "Clínicas e Consultórios",
    description: "Sites profissionais para médicos, dentistas e profissionais de saúde que transmitem confiança e facilitam o agendamento.",
    features: ["Agendamento Online", "Integração WhatsApp", "SEO Local"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce para Lojas",
    description: "Lojas virtuais otimizadas para conversão, com checkout simplificado e integração de pagamentos.",
    features: ["Checkout Otimizado", "Gestão de Estoque", "Multi-pagamento"],
  },
  {
    icon: Target,
    title: "Landing Pages de Conversão",
    description: "Páginas de alta conversão para campanhas de marketing, lançamentos e captação de leads.",
    features: ["A/B Testing", "Analytics Integrado", "CRO Otimizado"],
  },
  {
    icon: Briefcase,
    title: "Portfólios Profissionais",
    description: "Sites elegantes para advogados, arquitetos, designers e outros profissionais liberais.",
    features: ["Design Premium", "Cases de Sucesso", "Blog Integrado"],
  },
  {
    icon: Building2,
    title: "Sites Corporativos",
    description: "Presença digital robusta para empresas que precisam transmitir solidez e credibilidade.",
    features: ["Multi-páginas", "Área de Contato", "Institucional"],
  },
  {
    icon: GraduationCap,
    title: "Plataformas Educacionais",
    description: "Ambientes digitais para cursos online, escolas e criadores de conteúdo educativo.",
    features: ["Área de Membros", "Vídeo Player", "Certificados"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-32 section-dark relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
            SOLUÇÕES PARA SEU NEGÓCIO
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white">
            Uma solução para{" "}
            <span className="text-gradient font-semibold">cada negócio</span>
          </h2>
          <p className="text-[hsl(215_20%_65%)] max-w-2xl mx-auto text-lg">
            Seja qual for o seu segmento, tenho a experiência para criar o site perfeito para as suas necessidades.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-[hsl(var(--dark-muted))]/50 backdrop-blur-sm rounded-3xl p-8 border border-[hsl(var(--dark-border))] hover:border-primary/50 transition-all duration-300 hover:bg-[hsl(var(--dark-muted))]/70">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-[hsl(215_20%_65%)] leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
