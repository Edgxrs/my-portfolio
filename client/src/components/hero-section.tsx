import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInVariants } from "@/lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
              Hello, I'm <span className="gradient-text">Alex</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              A passionate UX/UI Designer creating beautiful, functional digital experiences
              that solve real problems and delight users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#portfolio')}
                className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90"
                data-testid="cta-view-work"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border border-border px-8 py-3 font-medium hover:bg-muted"
                data-testid="cta-contact"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
