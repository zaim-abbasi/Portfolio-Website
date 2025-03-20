import React from "react";

interface ExperienceItemProps {
  role: string;
  company: string;
  type: string;
  location: string;
  technologies: string[];
  achievements: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  type,
  location,
  technologies,
  achievements
}) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-1 h-full bg-accent"></div>
      <div className="flex justify-between mb-2 pl-4">
        <div>
          <span className="font-bold block">{role}</span>
          <span className="text-muted-foreground">{company} • {type}</span>
          <span className="text-muted-foreground block">{location}</span>
        </div>
      </div>
      <div className="pl-4 mt-4">
        <p className="text-sm font-medium mb-2">Technologies: {technologies.join(" • ")}</p>
        <ul className="list-disc pl-4 text-muted-foreground space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};