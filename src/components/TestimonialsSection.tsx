import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gustavo Bitencourt",
    role: "Proprietário - Barbearia GB",
    content: "Minha barbearia ganhou presença online de verdade. Agora meus clientes agendam pelo celular a qualquer hora. Menos ligações, mais organização!",
    avatar: "GB",
  },
  {
    name: "Maria Castro",
    role: "Proprietária - Studio Beauty",
    content: "Ter um site profissional fez toda a diferença. Consigo vender produtos e agendar serviços em um só lugar. O Gabriel entendeu exatamente o que eu precisava.",
    avatar: "MC",
  },
  {
    name: "Cliente Satisfeito",
    role: "Empresário Local",
    content: "Atendimento excepcional do início ao fim. O site ficou exatamente como eu imaginava, moderno e fácil de usar. Recomendo muito!",
    avatar: "CS",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-32 section-light relative overflow-hidden">
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
            O que meus clientes{" "}
            <span className="text-gradient font-semibold">dizem</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] max-w-2xl mx-auto text-lg">
            Feedback real de quem confiou no meu trabalho.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="testimonial-card-light">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-[hsl(222_47%_11%)] mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[hsl(222_47%_11%)]">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-[hsl(220_9%_46%)]">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[hsl(220_14%_96%)] border border-[hsl(220_13%_91%)] flex items-center justify-center text-[hsl(222_47%_11%)] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-[hsl(220_13%_91%)] hover:bg-[hsl(220_9%_46%)]"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[hsl(220_14%_96%)] border border-[hsl(220_13%_91%)] flex items-center justify-center text-[hsl(222_47%_11%)] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
