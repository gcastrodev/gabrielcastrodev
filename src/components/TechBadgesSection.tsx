import { motion } from "framer-motion";
import { Shield, Zap, Code, Award, Lock, CheckCircle2 } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SSL Seguro",
    description: "Certificado HTTPS",
  },
  {
    icon: Zap,
    title: "100/100 Performance",
    description: "Google PageSpeed",
  },
  {
    icon: Code,
    title: "Código Limpo",
    description: "Boas práticas",
  },
  {
    icon: Award,
    title: "SEO Otimizado",
    description: "Rank no Google",
  },
  {
    icon: Lock,
    title: "LGPD Compliant",
    description: "Privacidade",
  },
  {
    icon: CheckCircle2,
    title: "Responsivo",
    description: "Todos dispositivos",
  },
];

const partners = [
  { name: "Google Analytics", icon: "📊" },
  { name: "Meta Pixel", icon: "📱" },
  { name: "Vercel", icon: "▲" },
  { name: "Cloudflare", icon: "☁️" },
  { name: "Stripe", icon: "💳" },
  { name: "Hotjar", icon: "🔥" },
];

export const TechBadgesSection = () => {
  return (
    <section className="py-20 section-light border-y border-[hsl(220_13%_91%)]">
      <div className="section-container">
        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            DIFERENCIAIS TÉCNICOS
          </p>
          <h3 className="text-2xl md:text-3xl font-light text-[hsl(222_47%_11%)]">
            Qualidade garantida em cada projeto
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-4 border border-[hsl(220_13%_91%)] hover:border-primary/30 transition-all duration-300 hover:shadow-md text-center h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-[hsl(222_47%_11%)] text-sm mb-1">
                  {badge.title}
                </h4>
                <p className="text-[hsl(220_9%_46%)] text-xs">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners/Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[hsl(220_9%_46%)] text-sm mb-8 uppercase tracking-wider font-medium">
            Integrações e Ferramentas que Utilizo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[hsl(220_14%_96%)] border border-[hsl(220_13%_91%)] hover:border-primary/30 transition-colors"
              >
                <span className="text-xl">{partner.icon}</span>
                <span className="font-medium text-[hsl(222_47%_11%)] text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
