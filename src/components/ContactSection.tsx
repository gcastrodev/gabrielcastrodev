import { motion } from "framer-motion";
import { MessageCircle, Instagram, Linkedin, Github, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-32 section-light relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-[hsl(222_47%_11%)]">
            Vamos criar algo{" "}
            <span className="text-gradient font-semibold">incrível juntos?</span>
          </h2>
          <p className="text-[hsl(220_9%_46%)] text-lg mb-12">
            Seu próximo projeto começa com uma conversa. Me conta sua ideia e eu transformo em realidade.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5543998487963"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl mb-16 inline-flex"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>

          {/* Social links */}
          <div className="pt-12 border-t border-[hsl(220_13%_91%)]">
            <p className="text-sm text-[hsl(220_9%_46%)] mb-8 uppercase tracking-wider font-medium">
              Me encontre nas redes
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/gabriel.caastroo/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-light"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-castro-b39b50358/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-light"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/gcastrodev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-light"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@gabrielcastro.dev"
                className="social-link-light"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
