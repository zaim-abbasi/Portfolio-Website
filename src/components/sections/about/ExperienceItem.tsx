import React from "react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  technologies: string[];
  points: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  type,
  location,
  duration,
  technologies,
  points
}) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-0.5 h-full bg-accent/10 rounded-full">
        <motion.div 
          className="absolute top-0 w-full h-full bg-accent/20 rounded-full origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="flex flex-col pl-8 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div>
            <span className="font-bold block font-mono text-lg group-hover:text-accent transition-colors">
              {role}
            </span>
            <span className="text-muted-foreground/70 font-mono">
              {company} • {type}
            </span>
            <span className="text-muted-foreground/70 block font-mono text-sm">
              {location}
            </span>
          </div>
          <span className="text-accent/80 font-mono text-sm mt-1 md:mt-0 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
            {duration}
          </span>
        </div>
        
        <div className="mt-3">
          <ul className="list-disc pl-4 text-muted-foreground/70 space-y-2 font-mono text-sm marker:text-accent">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-2 py-1 text-xs border border-accent/10 bg-accent/5 hover:bg-accent/10 hover:border-accent/20 transition-colors rounded-md font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};