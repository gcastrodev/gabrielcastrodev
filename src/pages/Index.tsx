import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection";
import { AboutSection } from "@/components/AboutSection";
import { TechBadgesSection } from "@/components/TechBadgesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <GridBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <TechBadgesSection />
        <HowItWorksSection />
        <SolutionsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
