import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import barbeariaImage from "@/assets/project-barbearia.png";
import dashboardImage from "@/assets/project-barbearia-dashboard.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 bg-gradient-hero-dark relative overflow-hidden section-dark">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--dark-muted))] border border-[hsl(var(--dark-border))] mb-8"
            >
              <span className="status-dot" />
              <span className="text-sm text-[hsl(215_20%_65%)]">
                Disponível para novos projetos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white"
            >
              Transformo sua Visão em um{" "}
              <span className="text-gradient font-semibold">Negócio Digital</span> de Alto Desempenho
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[hsl(215_20%_65%)] mb-10 max-w-xl"
            >
              Sites modernos, otimizados para conversão e que geram autoridade no Google. 
              Seu próximo cliente está a um clique de distância.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5543998487963"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                <Sparkles className="w-5 h-5" />
                Quero meu site
              </a>
              <a href="#projetos" className="btn-outline-dark text-lg">
                Ver Portfólio
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right visual - 3D Mockup representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main device mockup */}
            <div className="relative">
              {/* Laptop mockup */}
              <motion.div
                className="relative z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-[hsl(var(--dark-card))] border border-[hsl(var(--dark-border))] rounded-2xl p-3 shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <div className="flex-1 mx-4 h-6 rounded-lg bg-[hsl(var(--dark-muted))] flex items-center px-3">
                      <span className="text-xs text-[hsl(215_20%_65%)]">seusite.com.br</span>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden border border-[hsl(var(--dark-border))]">
                    <img 
                      src={barbeariaImage} 
                      alt="Projeto Barbearia" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="h-4 bg-[hsl(var(--dark-card))] border-x border-b border-[hsl(var(--dark-border))] rounded-b-xl mx-8" />
                <div className="h-2 bg-[hsl(var(--dark-muted))] border border-[hsl(var(--dark-border))] rounded-b-2xl mx-4" />
              </motion.div>

              {/* Floating phone */}
              <motion.div
                className="absolute -right-8 bottom-10 z-30"
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-32 bg-[hsl(var(--dark-card))] border border-[hsl(var(--dark-border))] rounded-3xl p-2 shadow-2xl">
                  <div className="w-12 h-1.5 bg-[hsl(var(--dark-muted))] rounded-full mx-auto mb-2" />
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-[hsl(var(--dark-border))]">
                    <img 
                      src={dashboardImage} 
                      alt="Dashboard do Projeto" 
                      className="w-full h-full object-cover object-left-top"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating code icon */}
              <motion.div
                className="absolute -left-4 top-10 z-10"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              {/* Glow effects */}
              <div className="absolute inset-0 -z-10 blur-3xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
