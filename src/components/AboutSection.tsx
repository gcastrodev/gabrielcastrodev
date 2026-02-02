import { motion } from "framer-motion";
import { Palette, Zap, Shield, HeadphonesIcon, Search, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Design Único",
    description: "Visual exclusivo que representa sua marca e diferencia você da concorrência.",
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Seu site aparece no Google quando seus clientes procuram pelo que você oferece.",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Carregamento instantâneo que mantém visitantes engajados e melhora conversões.",
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Proteção SSL e melhores práticas de segurança para você e seus clientes.",
  },
  {
    icon: Rocket,
    title: "Entrega Rápida",
    description: "Seu site no ar em semanas, não meses. Processo ágil e sem enrolação.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Atendimento direto comigo. Sem robôs, sem espera, sem burocracia.",
  },
];

const stats = [
  { number: "2+", label: "Anos de Experiência" },
  { number: "10+", label: "Projetos Lançados" },
  { number: "100%", label: "Clientes Satisfeitos" },
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

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 section-light relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-[hsl(222_47%_11%)]">
            Por que criar seu site{" "}
            <span className="text-gradient font-semibold">comigo?</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] max-w-2xl mx-auto text-lg">
            Não é só um site bonito. É uma ferramenta de negócio que trabalha 24 horas por dia para você.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className={`bento-card-light ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(222_47%_11%)] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[hsl(220_9%_46%)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="stats-card-light"
        >
          {/* Stats intro text */}
          <p className="text-center text-[hsl(220_9%_46%)] mb-8 text-sm uppercase tracking-wider font-medium">
            Nossa experiência em números que geram resultados
          </p>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divider-light">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
