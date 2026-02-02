import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Supabase", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Stripe", icon: "💳" },
];

export const TechStackSection = () => {
  return (
    <section className="py-20 border-y border-[hsl(var(--dark-border))] section-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[hsl(215_20%_65%)] text-sm uppercase tracking-wider font-medium">
            Tecnologias que utilizo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(var(--dark-bg))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(var(--dark-bg))] to-transparent z-10" />

          {/* Marquee container */}
          <div className="flex gap-8 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[hsl(var(--dark-muted))]/50 border border-[hsl(var(--dark-border))] whitespace-nowrap"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
