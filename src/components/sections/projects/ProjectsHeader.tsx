import React from "react";

export const ProjectsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="pixel-badge inline-block mb-3">
        My Work
      </div>
      <h2 className="text-3xl mb-4">Projects</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        A selection of my projects showcasing problem-solving abilities 
        and technical expertise across different domains.
      </p>
    </div>
  );
};