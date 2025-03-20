import React from "react";
import { cn } from "@/lib/utils";

interface PixelArtProps {
  className?: string;
  color?: string;
}

export const PixelAvatar: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-blue"
}) => {
  return (
    <div className={cn("w-32 h-32 relative animate-float pixel-shadow", className)}>
      {/* Head */}
      <div className={cn("absolute w-16 h-16 top-4 left-8 transition-colors duration-300", color)}></div>
      
      {/* Eyes with blinking animation */}
      <div className="absolute w-2 h-2 bg-background top-10 left-12 animate-blink"></div>
      <div className="absolute w-2 h-2 bg-background top-10 left-18 animate-blink [animation-delay:0.2s]"></div>
      
      {/* Mouth with subtle animation */}
      <div className="absolute w-6 h-2 bg-background top-14 left-13 hover:w-8 transition-all duration-300"></div>
      
      {/* Animated Hair */}
      <div className="absolute w-4 h-2 bg-foreground top-4 left-8 animate-float [animation-delay:0.1s]"></div>
      <div className="absolute w-4 h-2 bg-foreground top-4 left-14 animate-float [animation-delay:0.2s]"></div>
      <div className="absolute w-2 h-2 bg-foreground top-4 left-12 animate-float [animation-delay:0.3s]"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-6 animate-float [animation-delay:0.4s]"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-24 animate-float [animation-delay:0.5s]"></div>
      
      {/* Glasses with glowing effect */}
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-12 animate-pulse"></div>
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-16 animate-pulse [animation-delay:0.2s]"></div>
      <div className="absolute w-1 h-1 bg-foreground/70 top-9 left-15 animate-pulse [animation-delay:0.4s]"></div>
      
      {/* Body with hover effect */}
      <div className="absolute w-12 h-8 bg-pixel-purple top-20 left-10 hover:bg-pixel-blue transition-colors duration-300"></div>
      
      {/* Arms with wave animation */}
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-6 animate-wave"></div>
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-22 animate-wave [animation-delay:0.3s]"></div>
      
      {/* Hands with glow effect */}
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-6 animate-pulse"></div>
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-24 animate-pulse [animation-delay:0.5s]"></div>
      
      {/* Pixel dust particles */}
      <div className="absolute inset-0 animate-sparkle pointer-events-none">
        <div className="absolute w-1 h-1 bg-pixel-blue/30 top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-pixel-purple/30 top-3/4 right-1/4"></div>
        <div className="absolute w-1 h-1 bg-pixel-green/30 bottom-1/4 left-1/3"></div>
      </div>
    </div>
  );
};

export const PixelComputer: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-green"
}) => {
  return (
    <div className={cn("w-32 h-32 relative animate-float delay-150 pixel-shadow", className)}>
      {/* Monitor with glowing screen */}
      <div className="absolute w-20 h-16 bg-foreground top-4 left-6 rounded-sm overflow-hidden">
        <div className={cn(
          "absolute w-16 h-12 top-2 left-2 pixel-scanlines animate-glow",
          color
        )}></div>
      </div>
      
      {/* Animated code on screen */}
      <div className="absolute top-6 left-8 w-16 h-12 overflow-hidden">
        <div className="animate-scroll">
          <div className="h-1 w-8 bg-background/20 mb-1"></div>
          <div className="h-1 w-12 bg-background/20 mb-1"></div>
          <div className="h-1 w-6 bg-background/20 mb-1"></div>
          <div className="h-1 w-10 bg-background/20 mb-1"></div>
        </div>
      </div>
      
      {/* Keyboard with hover effect */}
      <div className="absolute w-24 h-4 bg-foreground top-20 left-4 hover:bg-foreground/90 transition-colors duration-300">
        <div className="absolute w-22 h-1 bg-muted top-1 left-1 animate-pulse"></div>
      </div>
      
      {/* Computer base with shadow */}
      <div className="absolute w-8 h-2 bg-foreground/80 top-24 left-12 shadow-lg"></div>
      
      {/* Pixel dust effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-pixel-green/30 animate-float top-0 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-pixel-blue/30 animate-float delay-100 top-1/3 right-1/4"></div>
        <div className="absolute w-1 h-1 bg-pixel-purple/30 animate-float delay-200 bottom-1/4 left-1/3"></div>
      </div>
    </div>
  );
};