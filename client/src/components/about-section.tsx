import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInVariants, skillBarVariants } from "@/lib/animations";

const skills = [
  { name: "UI/UX Design", percentage: "95%" },
  { name: "Prototyping", percentage: "90%" },
  { name: "Web Development", percentage: "75%" },
  { name: "Branding", percentage: "85%" },
  { name: "Content Creation", percentage: "80%"},
  { name: "Social Media", percentage: "95%"},
];

const tools = [
  "Figma",
  "Adobe XD",
  "TypeScript",
  "HTML/CSS",
  "JavaScript",
  "AI Tools",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-muted">
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
              data-testid="about-title"
            >
              About Me
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="about-description"
            >
              I'm a dedicated designer with a passion for creating intuitive and
              beautiful digital experiences. Currently looking to network and collaborate
              while gaining experience through internships and
              personal projects in the meantime. 
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://i.ibb.co/ccXNvNk2/F8744-E31-FFCF-4-D8-D-BE75-720-D37-EEBFCF-1-105-c.jpg"
                alt="Edgars profile photo"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                data-testid="profile-image"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.4 }}
            >
              <h3
                className="text-2xl font-semibold mb-6"
                data-testid="skills-title"
              >
                My Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    data-testid={`skill-${skill.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, "-")}`}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.percentage}
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={
                          isInView
                            ? { width: skill.percentage }
                            : { width: "0%" }
                        }
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: 0.6 + index * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4
                  className="text-lg font-semibold mb-4"
                  data-testid="tools-title"
                >
                  Tools I Use
                </h4>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-background px-3 py-1 rounded-full text-sm border border-border"
                      data-testid={`tool-${tool
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
