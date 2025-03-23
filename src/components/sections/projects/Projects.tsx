import React from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsFooter } from "./ProjectsFooter";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 text-sm font-mono text-accent/80 bg-accent/5 px-4 py-1.5 rounded-full border-2 border-accent/10">
            My Work
          </div>
          <h2 className="text-3xl mb-4 font-mono">Projects</h2>
          <p className="text-muted-foreground/70 max-w-2xl mx-auto font-mono">
            A selection of my projects showcasing problem-solving abilities 
            and technical expertise across different domains.
          </p>
        </motion.div>
        
        <ProjectsGrid />
        <ProjectsFooter />
      </div>
    </section>
  );
};

export default Projects;