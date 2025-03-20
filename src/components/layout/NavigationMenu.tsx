import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const NavigationMenu: React.FC = () => {
  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-mono text-sm tracking-wider hover:text-accent transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};