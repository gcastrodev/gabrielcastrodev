import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing Estratégico",
    description: "Entendo seu negócio, objetivos e público-alvo para criar uma estratégia personalizada.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design e Prototipagem",
    description: "Crio layouts modernos e interativos para você visualizar e aprovar antes do desenvolvimento.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento e Otimização",
    description: "Codifico seu site com as melhores tecnologias, garantindo velocidade e SEO otimizado.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento e Suporte",
    description: "Publico seu site e ofereço suporte contínuo para garantir que tudo funcione perfeitamente.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-32 section-light relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            METODOLOGIA
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-[hsl(222_47%_11%)]">
            Como <span className="text-gradient font-semibold">funciona</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] max-w-2xl mx-auto text-lg">
            Um processo claro e transparente, do primeiro contato até o lançamento do seu site.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-white rounded-3xl p-8 border border-[hsl(220_13%_91%)] hover:border-primary/30 transition-all duration-300 hover:shadow-lg group h-full">
                  {/* Number badge */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-[hsl(222_47%_11%)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(220_9%_46%)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 text-primary/30">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
