import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroJournal } from "./HeroJournal";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-6rem)] pt-16 lg:pt-32 flex flex-col justify-center relative overflow-hidden"
      aria-label="Hero Section"
    >      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
          <motion.div 
            className="order-1 flex items-center lg:pl-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >            
            <HeroContent />
          </motion.div>
          
          <motion.div 
            className="order-2 hidden lg:block lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroJournal />
          </motion.div>
        </div>

        {/* Mobile Journal - Shown at bottom on small screens */}
        <motion.div 
          className="mt-12 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <HeroJournal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;