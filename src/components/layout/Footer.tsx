import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative overflow-hidden border-t border-accent/10 bg-card/50 backdrop-blur-sm">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/5 via-accent/20 to-accent/5" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <a 
              href="#home" 
              className="font-mono text-xl tracking-wider inline-block group relative"
            >
              <span className="text-accent group-hover:text-accent/80 transition-colors">ZAIM</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <p className="text-sm text-muted-foreground/70 mt-2 font-mono">
              © {currentYear} • Crafting digital experiences with code
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <a 
              href="#home" 
              className="p-3 rounded-xl border-2 border-accent/10 hover:border-accent/20 hover:bg-accent/5 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-accent/80 group-hover:text-accent transition-colors" />
            </a>
            <span className="text-xs text-muted-foreground/70 mt-2 font-mono">
              BACK TO TOP
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-right flex flex-col items-center md:items-end"
          >
            <p className="font-mono text-muted-foreground/70">Software Engineer • Tech Enthusiast</p>
            <div className="flex gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-accent/60 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse [animation-delay:200ms]" />
              <div className="w-2 h-2 rounded-full bg-accent/20 animate-pulse [animation-delay:400ms]" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;