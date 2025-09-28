import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInVariants, projectCardVariants, staggerChildren } from "@/lib/animations";
import ProjectModal from "@/components/project-modal";

const portfolioProjects = [
  {
    id: "food-delivery",
    category: "EDUCATION PROJECT",
    title: "Food Delivery App",
    description: "A comprehensive mobile app design focusing on user experience and visual hierarchy for food ordering.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["UI/UX", "Mobile", "Prototyping"],
    overview: "This educational project focused on creating a comprehensive food delivery application with emphasis on user experience research, information architecture, and visual design. The project included user personas, journey mapping, wireframing, and high-fidelity prototyping.",
    features: [
      "Intuitive restaurant browsing and filtering",
      "Streamlined ordering process",
      "Real-time order tracking",
      "Personalized recommendations",
      "Integrated payment system"
    ],
    tools: ["Figma", "Principle", "User Research", "Prototyping"]
  },
  {
    id: "ecommerce",
    category: "EDUCATION PROJECT",
    title: "E-commerce Platform",
    description: "Redesign of an existing e-commerce platform with focus on conversion optimization and user flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Web Design", "UX Research", "Figma"],
    overview: "A complete redesign of an existing e-commerce platform focusing on improving conversion rates, reducing cart abandonment, and enhancing overall user experience. The project involved extensive user research and A/B testing of key interaction points.",
    improvements: [
      "Simplified checkout process (reduced from 6 to 3 steps)",
      "Enhanced product discovery with smart filters",
      "Improved mobile responsiveness",
      "Better product imagery and information hierarchy",
      "Trust signals and social proof integration"
    ],
    results: "The redesign resulted in a 25% increase in conversion rate and 40% reduction in cart abandonment during user testing phase.",
    tools: ["Figma", "User Research", "A/B Testing", "Analytics"]
  },
  {
    id: "brand-identity",
    category: "EDUCATION PROJECT",
    title: "Brand Identity System",
    description: "Complete brand identity development including logo, color palette, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tags: ["Branding", "Logo Design", "Identity"],
    overview: "Development of a comprehensive brand identity system for a fictional sustainable fashion startup. The project included logo design, color palette development, typography selection, and application across various touchpoints.",
    deliverables: [
      "Primary and secondary logo variations",
      "Comprehensive color system",
      "Typography guidelines",
      "Business card and stationery design",
      "Social media templates",
      "Brand guidelines document"
    ],
    approach: "The brand identity reflects the company's commitment to sustainability through earthy colors, organic shapes, and clean typography that communicates trust and authenticity.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Figma", "Brand Strategy"]
  }
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="portfolio-title">My Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-description">
              A collection of projects that showcase my journey as a designer, from educational assignments 
              to professional work and personal ventures.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                initial="rest"
                whileHover="hover"
                className="project-card bg-card rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer"
                onClick={() => setSelectedProject(project)}
                data-testid={`project-card-${project.id}`}
              >
                <img 
                  src={project.image}
                  alt={`${project.title} design`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-muted px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
