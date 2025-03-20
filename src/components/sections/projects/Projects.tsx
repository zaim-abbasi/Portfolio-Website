import React from "react";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsFooter } from "./ProjectsFooter";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="pixel-container">
        <ProjectsHeader />
        <ProjectsGrid />
        <ProjectsFooter />
      </div>
    </section>
  );
};

export default Projects;