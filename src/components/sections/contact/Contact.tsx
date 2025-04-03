import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className={`${isMobile ? 'py-12' : 'py-24'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}
        >
          <div className="inline-block mb-3 text-sm font-mono text-accent/80 bg-accent/5 px-4 py-1.5 rounded-full border-2 border-accent/10">
            Get in Touch
          </div>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} mb-4 font-mono`}>Contact Me</h2>
          <p className="text-muted-foreground/70 max-w-2xl mx-auto font-mono text-sm md:text-base">
            Have a project or opportunity to discuss? Reach out—I'm always open to new challenges and collaborations.
          </p>
        </motion.div>
        
        <div className={`grid grid-cols-1 md:grid-cols-[1fr,1.2fr] ${isMobile ? 'gap-6' : 'gap-12'} items-stretch`}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;