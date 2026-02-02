import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega do meu site?",
    answer: "Depende da complexidade do projeto. Sites institucionais ficam prontos em 1-2 semanas. Projetos com e-commerce ou funcionalidades avançadas podem levar 3-4 semanas. Você receberá um cronograma detalhado antes de começarmos.",
  },
  {
    question: "Quanto custa um site?",
    answer: "Cada projeto é único. O valor varia de acordo com as funcionalidades, número de páginas e complexidade. Entre em contato pelo WhatsApp para uma conversa rápida e receba um orçamento personalizado sem compromisso.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Ofereço suporte gratuito por 30 dias após a entrega para ajustes e dúvidas. Depois, você pode contratar um plano de manutenção mensal que inclui atualizações, backups e suporte contínuo.",
  },
  {
    question: "O site será otimizado para celular?",
    answer: "Absolutamente! Todos os sites são desenvolvidos com design responsivo, funcionando perfeitamente em celulares, tablets e desktops. Hoje, mais de 60% dos acessos vêm de dispositivos móveis.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer: "Sim. Aplico as melhores práticas de SEO técnico em todos os projetos: velocidade otimizada, estrutura correta, meta tags, sitemap e muito mais. Isso dá ao seu site as melhores chances de rankear bem.",
  },
  {
    question: "Como funciona o processo de criação?",
    answer: "É simples: 1) Conversamos sobre suas necessidades. 2) Apresento uma proposta detalhada. 3) Você aprova e começamos. 4) Desenvolvo o site com entregas parciais para feedback. 5) Lançamos seu site!",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-32 section-ice relative">
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
            Perguntas{" "}
            <span className="text-gradient font-semibold">Frequentes</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre como trabalho e o que esperar do seu projeto.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item-light"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[hsl(222_47%_11%)] hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(220_9%_46%)] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
