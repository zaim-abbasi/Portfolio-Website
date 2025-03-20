import React from "react";
import { AboutSkills } from "./AboutSkills";
import { AboutExperience } from "./AboutExperience";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="pixel-container">
        <div className="text-center mb-16">
          <div className="pixel-badge inline-block mb-3">
            About me
          </div>
          <h2 className="text-3xl mb-4">Skills & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Third-year Software Engineering student at FAST (Class of '26), passionate about 
            building scalable applications and learning new technologies.
          </p>
        </div>
        
        <AboutSkills />
        <AboutExperience />
      </div>
    </section>
  );
};

export default About;