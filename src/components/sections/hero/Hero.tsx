import React from "react";
import { HeroContent } from "./HeroContent";
import { PixelAvatar, PixelComputer } from "@/components/pixel-art/PixelArt";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background grid with animated gradient */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pixel-blue/20 via-pixel-purple/20 to-pixel-green/20 animate-gradient"></div>
      </div>
      
      {/* Floating pixels in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pixel-blue/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">            
            <HeroContent />
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 right-0 -top-8">
                <PixelComputer className="opacity-80 w-48 h-48" />
              </div>
              <div className="relative z-10">
                <PixelAvatar className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;