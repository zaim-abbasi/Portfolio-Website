import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroJournal } from "./HeroJournal";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="home" 
      className="min-h-[100svh] flex flex-col justify-center relative overflow-hidden"
      aria-label="Hero Section"
    >      
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] ${isMobile ? 'gap-6 pt-20' : 'gap-12 pt-32'} items-center`}>
          <motion.div 
            className="order-1 flex items-center lg:pl-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >            
            <HeroContent />
          </motion.div>
          
          {!isMobile && (
            <motion.div 
              className="order-2 hidden lg:block lg:max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroJournal />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;