import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  fadeInVariants,
  projectCardVariants,
  staggerChildren,
} from "@/lib/animations";
import ProjectModal from "@/components/project-modal";

const portfolioProjects = [
  {
    id: "hospice-website",
    category: "CURRENT PROFESSIONAL PROJECT",
    title: "Hospice Facility Solution",
    description:
      "A full-stack portfolio website built from scratch, combining advanced functionality with modern design. Brand identity with a new logo design",
    image: "https://i.ibb.co/S4JGdd7y/6e81f610234.png",
    tags: ["Full-Stack", "Wordpress", "PHP", "UI/UX", "Brand identity"],
    overview:
      "My most complex project to date - a complete portfolio website showcasing my design and development capabilities. This project represents my journey into full-stack development while maintaining strong design principles. Built with React, TypeScript, and modern development practices.",
    features: [
      "Custom responsive design with dark/light theme support",
      "Smooth animations and micro-interactions using Framer Motion",
      "Full-stack contact form with backend validation",
      "Interactive portfolio showcases with modal presentations",
      "Custom logo design with theme-aware switching",
      "Mobile-first responsive design approach",
    ],
    challenges: [
      "Learning full-stack development from scratch",
      "Implementing complex animations while maintaining performance",
      "Creating a cohesive design system",
      "Balancing visual appeal with usability",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
    ],
    tools: ["Figma", "VSCode", "Git", "Replit"],
  },
  {
    id: "internship-project",
    category: "PROFESSIONAL PROJECT",
    title: "Brand Website & iOS App Design",
    description:
      "Comprehensive website design and devlopment and iOS app prototype design during professional internship experience.",
    image: "https://i.ibb.co/RGLhxQXX/Screenshot-2023-12-17-at-20-45-31.png",
    tags: ["Web Design", "iOS", "Professional", "Team Work"],
    overview:
      "During my internship, I had the opportunity to work on both web and mobile platforms, designing and developing a comprehensive business solution. This project taught me how to work within professional constraints while delivering high-quality design solutions.",
    achievements: [
      "Successfully designed and developed a responsive business website",
      "Created iOS app interface and user experience",
      "Collaborated with development team and stakeholders",
      "Delivered projects within deadline and budget constraints",
      "Gained real-world experience in professional design workflow",
    ],
    scope: [
      "Website design and development from concept to launch",
      "iOS app prototyping and design system creation",
      "User research and stakeholder collaboration",
      "Cross-platform design consistency",
      "Professional client communication",
    ],
    impact:
      "This internship validated my ability to work in a professional environment and deliver real business value through design and development.",
    tools: ["Figma", "Sketch", "Xcode", "HTML/CSS", "JavaScript"],
  },
  {
    id: "ecommerce-redesign",
    category: "PERSONAL PROJECT",
    title: "iOS App Design Prototype",
    description:
      "Comprehensive UX research and redesign project focusing on conversion optimization and user experience.",
    image: "https://i.ibb.co/rKwGXzsY/3e8a7f9ebcc.png",
    tags: ["UX Research", "Web Design", "Academic"],
    overview:
      "An academic project that challenged me to redesign an existing e-commerce platform through comprehensive user research, testing, and iterative design. This project established my foundation in user-centered design methodology.",
    methodology: [
      "Conducted user interviews and usability testing",
      "Performed competitive analysis and market research",
      "Created user personas and journey maps",
      "Developed wireframes and high-fidelity prototypes",
      "Implemented and tested design solutions",
    ],
    improvements: [
      "Streamlined checkout process reducing steps by 50%",
      "Enhanced product discovery with intuitive navigation",
      "Improved mobile responsiveness and accessibility",
      "Integrated trust signals and social proof elements",
    ],
    results:
      "The redesign demonstrated measurable improvements in user testing, with increased task completion rates and positive user feedback on the enhanced experience.",
    tools: ["Figma", "User Research", "Prototyping", "Usability Testing"],
  },
  {
    id: "brand-identity",
    category: "EDUCATION PROJECT",
    title: "Purpose-driven Fashion Brand Strategy",
    description:
      "Complete brand identity development showcasing strategic thinking and visual design skills.",
    image: "https://i.ibb.co/fzY9zL7F/76a742700f3.png",
    tags: ["Branding", "Logo Design", "Academic"],
    overview:
      "A comprehensive brand identity project that developed my skills in strategic brand thinking and visual identity design. Created for a fictional sustainable fashion startup, demonstrating ability to translate brand values into visual communication.",
    deliverables: [
      "Primary and secondary logo variations",
      "Comprehensive color palette and typography system",
      "Brand guidelines and application standards",
      "Business collateral and digital templates",
      "Brand strategy and positioning framework",
    ],
    approach:
      "Developed a brand identity that authentically communicates sustainability values through thoughtful color choices, organic forms, and clean typography that builds trust and conveys environmental consciousness.",
    skills:
      "This project strengthened my strategic thinking, attention to detail, and ability to create cohesive visual systems that support business objectives.",
    tools: ["Adobe Illustrator", "InDesign", "Figma", "Brand Strategy"],
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

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
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-testid="portfolio-title"
            >
              Featured Work
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="portfolio-description"
            >
              From complex full-stack development to professional design work
              and academic foundations, these projects showcase my growth and
              capabilities across the design and development spectrum.
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
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted px-2 py-1 rounded text-xs"
                      >
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
