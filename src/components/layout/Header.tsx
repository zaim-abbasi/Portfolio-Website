import React from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./NavigationMenu";
import { MobileMenu } from "./MobileMenu";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? "py-3 bg-background/95 backdrop-blur-sm border-b" 
          : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="font-mono text-xl tracking-wider">
          <span className="text-accent">ZAIM</span>
          <span className="text-foreground">.DEV</span>
        </a>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
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