import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  technologies
}) => {
  return (
    <div className="pixel-card bg-card hover:border-accent transition-all duration-300">
      <div className="p-2 border-2 w-fit mb-4 text-accent border-accent">
        {icon}
      </div>
      <h3 className="text-xl mb-2 font-pixel">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="px-3 py-1 text-sm border-2 border-muted hover:border-accent transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};