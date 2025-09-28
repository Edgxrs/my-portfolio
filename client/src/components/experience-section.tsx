import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInVariants } from "@/lib/animations";

const experiences = [
  {
    id: "education",
    period: "FOUNDATION • 2022-2024",
    title: "Design Education & Skill Development",
    description:
      "Developed a base set of skills in UX/UI design as well as various other fields such as frontend development, content creation and brand development. This was done through acquiring an Academy Profession degree in Multimedia Design at the Copenhagen School of Design and Technology (KEA). ",
    projects: [
      {
        title: "UX/UI + Design Skills",
        description:
          "Learned and practiced various design methods and approaches. Worked extensively with platforms like XD and Figma.",
        image:
          "https://i.ibb.co/fYwVPQXQ/Screenshot-2025-09-28-at-22-04-57.pngs",
      },
      {
        title: "Frontend Development",
        description:
          "Developed a skillset in order to bring the design solutions - as well as different functional solutions - to life through coding.",
        image:
          "https://i.ibb.co/4wQVKZhB/Screenshot-2025-09-28-at-18-46-12.png",
      },
    ],
    achievements: [
      "Mastered fundamental design principles and methodology",
      "Learned comprehensive UX research and testing techniques",
      "Developed skills in visual design and brand strategy",
      "Established foundation for professional design career",
    ],
    tags: [
      "Design Education",
      "UX Research",
      "Brand Strategy",
      "Coding",
      "Teamwork",
    ],
  },
  {
    id: "internship",
    period: "PROFESSIONAL • 2023",
    title: "UX/UI Designer Intern at Compar",
    description:
      "Gained real-world experience designing and developing user interfaces for both web and mobile platforms. This internship taught me how to work within professional constraints while delivering high-quality design solutions that meet business objectives.",
    projects: [
      {
        title: "Website Design",
        description:
          "Responsive web platform designed and developed from concept to launch",
        image:
          "https://i.ibb.co/KzjVG3CM/Screenshot-2025-09-27-at-17-09-58.png",
      },
      {
        title: "iOS Application",
        description:
          "Mobile app interface design with focus on user experience",
        image: "https://i.ibb.co/1G7rn7jq/Untitled-design.png",
      },
    ],
    achievements: [
      "Successfully delivered web and mobile projects within professional deadlines",
      "Collaborated with development team and stakeholders on design decisions",
      "Gained experience in professional design workflow and client communication",
      "Validated ability to work in real-world business environment",
    ],
    tags: [
      "Professional Experience",
      "Web Design",
      "iOS Prototyping",
      "Team Collaboration",
    ],
  },
  {
    id: "current-project",
    period: "CURRENT • 2025",
    title: "Independent Full-Stack Developer & Designer",
    description:
      "Taking on complex challenges by building complete solutions for a healthcare facility from design to development. Currently working on a comprehensive website that showcases both my design thinking and technical capabilities, marking my transition into full-stack development.",
    projects: [
      {
        title: "Hospice Website",
        description:
          "Full-stack application with custom functionality and responsive design",
        image:
          "https://i.ibb.co/4gJ1pmph/Screenshot-2025-09-27-at-17-36-04.png",
      },
      {
        title: "Brand Identity System",
        description: "Complete logo design with dark/light theme integration",
        image:
          "https://i.ibb.co/gLj2KPTr/Screenshot-2025-09-27-at-17-34-06.png",
      },
    ],
    achievements: [
      "Self-taught full-stack development while maintaining design quality",
      "Built complex animations and interactions using modern web technologies",
      "Implemented responsive design with accessibility best practices",
      "Created cohesive brand identity with theme-aware components",
    ],
    tags: [
      "Full-Stack Development",
      "PHP",
      "TypeScript",
      "Wordpress",
      "Branding",
      "UI/UX",
    ],
  },
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
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-testid="experience-title"
            >
              My Journey
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="experience-description"
            >
              From academic foundations through professional experience to
              current independent projects, this timeline shows my growth as a
              designer and developer.
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
                  <div className="text-sm text-primary font-medium mb-2">
                    {experience.period}
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    data-testid={`experience-title-${experience.id}`}
                  >
                    {experience.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-6"
                    data-testid={`experience-description-${experience.id}`}
                  >
                    {experience.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {experience.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        data-testid={`project-${experience.id}-${projectIndex}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                        <h4 className="font-semibold mt-3 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {experience.achievements && (
                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul
                        className="text-sm text-muted-foreground space-y-1"
                        data-testid={`achievements-${experience.id}`}
                      >
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>• {achievement}</li>
                          )
                        )}
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
