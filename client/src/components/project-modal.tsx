import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modalVariants } from "@/lib/animations";

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    image: string;
    overview: string;
    features?: string[];
    improvements?: string[];
    deliverables?: string[];
    results?: string;
    approach?: string;
    tools: string[];
    challenges?: string[];
    achievements?: string[];
    scope?: string[];
    technologies?: string[];
    impact?: string;
    methodology?: string[];
    skills?: string;
    links?: { label: string; url: string; type?: 'link' | 'download' }[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={onClose}
          data-testid="project-modal-overlay"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            data-testid={`project-modal-${project.id}`}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold" data-testid="modal-title">{project.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="modal-close"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={project.image}
                    alt={`${project.title} detailed view`}
                    className="rounded-lg w-full"
                    data-testid="modal-image"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Project Overview</h4>
                  <p className="text-muted-foreground mb-6" data-testid="modal-overview">
                    {project.overview}
                  </p>
                  
                  {project.links && project.links.length > 0 && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Project Links</h4>
                      <div className="flex flex-wrap gap-3 mb-6" data-testid="modal-links">
                        {project.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target={link.type === 'download' ? undefined : "_blank"}
                            rel={link.type === 'download' ? undefined : "noopener noreferrer"}
                            download={link.type === 'download' ? true : undefined}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                            data-testid={`link-${index}`}
                          >
                            {link.label}
                            {link.type === 'download' ? (
                              <Download className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {project.features && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-features">
                        {project.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.improvements && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Improvements Made</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-improvements">
                        {project.improvements.map((improvement, index) => (
                          <li key={index}>• {improvement}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.deliverables && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Deliverables</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-deliverables">
                        {project.deliverables.map((deliverable, index) => (
                          <li key={index}>• {deliverable}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.results && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Results</h4>
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-foreground" data-testid="modal-results">
                          {project.results}
                        </p>
                      </div>
                    </>
                  )}
                  
                  {project.challenges && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Challenges Overcome</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-challenges">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>• {challenge}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.achievements && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-achievements">
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>• {achievement}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.scope && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Project Scope</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-scope">
                        {project.scope.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.methodology && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Methodology</h4>
                      <ul className="text-muted-foreground space-y-2 mb-6" data-testid="modal-methodology">
                        {project.methodology.map((method, index) => (
                          <li key={index}>• {method}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.approach && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Design Approach</h4>
                      <p className="text-sm text-muted-foreground mb-6" data-testid="modal-approach">
                        {project.approach}
                      </p>
                    </>
                  )}
                  
                  {project.impact && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Impact & Learning</h4>
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-foreground" data-testid="modal-impact">
                          {project.impact}
                        </p>
                      </div>
                    </>
                  )}
                  
                  {project.skills && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Skills Developed</h4>
                      <p className="text-sm text-muted-foreground mb-6" data-testid="modal-skills">
                        {project.skills}
                      </p>
                    </>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.technologies && (
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2" data-testid="modal-technologies">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Tools Used</h4>
                      <div className="flex flex-wrap gap-2" data-testid="modal-tools">
                        {project.tools.map((tool) => (
                          <span key={tool} className="bg-muted px-3 py-1 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}