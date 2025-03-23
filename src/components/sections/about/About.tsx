import React from "react";
import { motion } from "framer-motion";
import { AboutSkills } from "./AboutSkills";
import { AboutExperience } from "./AboutExperience";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 text-sm font-mono text-accent/80 bg-accent/5 px-4 py-1.5 rounded-full border-2 border-accent/10">
            About me
          </div>
          <h2 className="text-3xl mb-4 font-mono">Skills & Experience</h2>
          <p className="text-muted-foreground/70 max-w-2xl mx-auto font-mono">
            Third-year Software Engineering student at FAST (Class of '26), passionate about 
            building scalable applications and learning new technologies.
          </p>
        </motion.div>
        
        <AboutSkills />
        <AboutExperience />
      </div>
    </section>
  );
};

export default About;