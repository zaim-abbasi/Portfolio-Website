import React from "react";
import { NavigationMenu } from "./NavigationMenu";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40">
      <nav className="flex flex-col items-center justify-center h-full">
        <NavigationMenu />
      </nav>
    </div>
  );
};