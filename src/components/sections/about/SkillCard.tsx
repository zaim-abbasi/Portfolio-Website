import React from "react";
import { motion } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card/50 backdrop-blur-sm rounded-2xl p-4 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-accent/5 border-2 border-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-mono group-hover:text-accent transition-colors duration-300">{title}</h3>
      </div>
      
      <p className="text-muted-foreground/70 mb-3 text-sm font-mono line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, techIndex) => (
          <motion.span 
            key={techIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: techIndex * 0.1 }}
            className="px-2 py-0.5 text-xs border border-accent/10 bg-accent/5 hover:bg-accent/10 hover:border-accent/20 transition-colors rounded-md font-mono"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};