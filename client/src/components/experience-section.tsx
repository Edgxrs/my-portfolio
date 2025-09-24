import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInVariants } from "@/lib/animations";

const experiences = [
  {
    id: "current-project",
    period: "CURRENT PROJECT • 2024",
    title: "Full-Stack Website & Branding",
    description: "Currently working on a comprehensive project that includes building a complete website from scratch and creating the company's brand identity including logo design and visual guidelines.",
    projects: [
      {
        title: "Website Development",
        description: "Full responsive website with modern UI/UX principles",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      },
      {
        title: "Brand Identity",
        description: "Complete logo design and brand guidelines creation",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      }
    ],
    tags: ["Web Development", "Branding", "Logo Design", "UI/UX"]
  },
  {
    id: "internship",
    period: "INTERNSHIP • 2023-2024",
    title: "UX/UI Designer Intern at TechStart",
    description: "Designed and developed user interfaces for both web and mobile platforms. Created an iOS app that has been successfully published and is currently running in production.",
    projects: [
      {
        title: "Website Design",
        description: "Responsive web platform with focus on user engagement",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      },
      {
        title: "iOS App - Published",
        description: "Live iOS application with 5000+ downloads",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      }
    ],
    achievements: [
      "Increased user engagement by 40% through redesigned user flow",
      "Successfully launched iOS app with 4.8-star rating on App Store",
      "Collaborated with development team to ensure design feasibility",
      "Conducted user research and A/B testing for optimization"
    ],
    tags: ["iOS Design", "Web Design", "User Research", "A/B Testing"]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="experience-title">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="experience-description">
              My journey in the professional world, including internships and real-world projects 
              that have shaped my skills and perspective as a designer.
            </p>
          </motion.div>

          <div className="timeline relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ delay: index * 0.3 }}
                className="timeline-item relative pb-12"
                data-testid={`experience-${experience.id}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full top-6 z-10"></div>
                
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border ml-8 lg:ml-12">
                  <div className="text-sm text-primary font-medium mb-2">{experience.period}</div>
                  <h3 className="text-2xl font-semibold mb-4" data-testid={`experience-title-${experience.id}`}>
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`experience-description-${experience.id}`}>
                    {experience.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} data-testid={`project-${experience.id}-${projectIndex}`}>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                        <h4 className="font-semibold mt-3 mb-2">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {experience.achievements && (
                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1" data-testid={`achievements-${experience.id}`}>
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
