import React from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./NavigationMenu";
import { MobileMenu } from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, isMobile]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-background/95 backdrop-blur-sm border-b" 
          : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a 
          href="#home" 
          className="font-mono text-xl tracking-wider relative group"
        >
          <span className="text-accent group-hover:text-accent/80 transition-colors">ZAIM</span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 md:block hidden" />
        </a>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="relative border-2 hover:border-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </Button>
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40"
                >
                  <nav className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center gap-8">
                      <a
                        href="#home"
                        className="font-mono text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </a>
                      <a
                        href="#about"
                        className="font-mono text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About
                      </a>
                      <a
                        href="#projects"
                        className="font-mono text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Projects
                      </a>
                      <a
                        href="#contact"
                        className="font-mono text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </a>
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <NavigationMenu />
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;