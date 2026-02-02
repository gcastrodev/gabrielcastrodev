import { Sparkles, Instagram, Linkedin, Github } from "lucide-react";

const footerLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://www.instagram.com/gabriel.caastroo/", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/gabriel-castro-b39b50358/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/gcastrodev", icon: Github, label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-[hsl(220_13%_91%)] section-light">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[hsl(222_47%_11%)]">Gabriel Castro</span>
            </a>
            <p className="text-[hsl(220_9%_46%)] text-sm leading-relaxed">
              Desenvolvedor especializado em criar sites que transformam visitantes em clientes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[hsl(222_47%%)] mb-4">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[hsl(220_9%_46%)] hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[hsl(222_47%_11%)] mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-light"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[hsl(220_13%_91%)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(220_9%_46%)]">
            © {new Date().getFullYear()} Gabriel Castro. Todos os direitos reservados.
          </p>
          <p className="text-sm text-[hsl(220_9%_46%)]">
            Feito com 💜 por Gabriel Castro
          </p>
        </div>
      </div>
    </footer>
  );
};
