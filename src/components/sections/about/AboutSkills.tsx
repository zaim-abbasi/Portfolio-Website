import React from "react";
import { Code, Database, Globe, Layers } from "lucide-react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    icon: <Code size={24} />,
    title: "Frontend",
    description: "Building elegant and responsive user interfaces",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    icon: <Globe size={24} />,
    title: "Backend",
    description: "Creating robust and scalable server solutions",
    technologies: ["Node", "Next", "Python"]
  },
  {
    icon: <Database size={24} />,
    title: "Databases",
    description: "Managing data with modern database solutions",
    technologies: ["Supabase", "MongoDB", "MsSQL", "MySQL"]
  },
  {
    icon: <Layers size={24} />,
    title: "Architecture",
    description: "Designing scalable system architectures",
    technologies: ["Microservices", "REST", "System Design"]
  }
];

export const AboutSkills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};