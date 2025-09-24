import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Alex Chen. Designed and built with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
