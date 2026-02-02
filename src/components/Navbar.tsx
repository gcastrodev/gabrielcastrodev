import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInDarkSection, setIsInDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Check if we're in the hero section (dark) or content sections (light)
      setIsInDarkSection(window.scrollY < window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = isScrolled 
    ? isInDarkSection 
      ? "bg-[hsl(var(--dark-bg))]/90 backdrop-blur-xl border-b border-[hsl(var(--dark-border))]"
      : "bg-white/90 backdrop-blur-xl border-b border-[hsl(220_13%_91%)]"
    : "";

  const textClass = isInDarkSection 
    ? "text-white" 
    : "text-[hsl(222_47%_11%)]";

  const mutedTextClass = isInDarkSection 
    ? "text-[hsl(215_20%_65%)]" 
    : "text-[hsl(220_9%_46%)]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg ${textClass}`}>
              Desenvolvimento Visionário<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${mutedTextClass} hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5543998487963"
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2.5 px-5 rounded-lg font-medium text-sm border transition-colors ${isInDarkSection ? 'border-[hsl(var(--dark-border))] text-white hover:border-primary/50' : 'border-[hsl(220_13%_91%)] text-[hsl(222_47%_11%)] hover:border-primary/50'}`}
            >
              Orçamento Rápido
            </a>
            <a
              href="https://wa.me/5543998487963"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-6 text-sm"
            >
              Fale comigo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${isInDarkSection ? 'hover:bg-[hsl(var(--dark-muted))]' : 'hover:bg-[hsl(220_14%_96%)]'}`}
          >
            {isMobileMenuOpen ? <X className={`w-6 h-6 ${textClass}`} /> : <Menu className={`w-6 h-6 ${textClass}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-6 border-t ${isInDarkSection ? 'border-[hsl(var(--dark-border))]' : 'border-[hsl(220_13%_91%)]'}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-colors font-medium ${textClass} ${isInDarkSection ? 'hover:bg-[hsl(var(--dark-muted))]' : 'hover:bg-[hsl(220_14%_96%)]'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5543998487963"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 justify-center"
              >
                Fale comigo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
