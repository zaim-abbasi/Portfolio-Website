import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export const HeroContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-pixel mb-2 text-accent animate-pulse">Hi, I'm Zaim Abbasi</h2>
        <h1 className="text-2xl md:text-3xl font-pixel mb-4 leading-relaxed">
          Software Engineer
          <span className="text-accent">.</span>
          Full Stack Developer
        </h1>
      </div>
      
      <p className="text-lg max-w-md leading-relaxed font-mono text-muted-foreground">
        I craft elegant solutions to complex problems, bringing ideas to life through clean code and intuitive design.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Button 
          className="bg-accent text-accent-foreground font-pixel text-sm h-10 pixel-button group relative overflow-hidden"
          asChild
        >
          <a href="#projects" className="relative z-10">
            <span className="relative z-10">View my Work</span>
            <div className="absolute inset-0 bg-accent-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </a>
        </Button>

        <Button 
          variant="outline"
          className="font-pixel text-sm h-10 pixel-button group relative overflow-hidden"
          asChild
        >
          <a href="/cv.pdf" download className="relative z-10">
            <FileDown size={16} className="mr-2 relative z-10" />
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </a>
        </Button>
      </div>
      
      <SocialLinks />
    </div>
  );
};