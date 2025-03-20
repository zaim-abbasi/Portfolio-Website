import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  repoUrl
}) => {
  return (
    <div className="pixel-card bg-card hover:border-accent h-auto">
      <div className="p-4">
        <h3 className="text-lg mb-2 font-pixel">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-xs border-2 border-muted hover:border-accent transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="pixel-button w-full"
          asChild
        >
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2"
          >
            <Github size={16} />
            <span>View Code</span>
          </a>
        </Button>
      </div>
    </div>
  );
};