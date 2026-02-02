import { motion } from "framer-motion";
import { MessageCircle, FolderOpen, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-white">Disponível para novos projetos</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
            Pronto para transformar sua{" "}
            <span className="text-gradient font-semibold">presença digital?</span>
          </h2>

          <p className="text-[hsl(215_20%_65%)] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre o seu projeto. Respondo em até 24 horas com uma proposta personalizada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5543998487963"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg group"
            >
              <MessageCircle className="w-5 h-5" />
              Fazer Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-[hsl(var(--dark-border))] hover:border-primary/50 hover:bg-[hsl(var(--dark-muted))] transition-all"
            >
              <FolderOpen className="w-5 h-5" />
              Ver Portfólio
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[hsl(215_20%_65%)] text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
