import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub Profile",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "mailto:hello@example.com",
      icon: Mail,
      label: "Email Contact",
    },
  ];

  return (
    <div className="flex gap-6 pt-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border-2 hover:bg-accent hover:text-accent-foreground transition-colors group relative overflow-hidden"
          aria-label={label}
        >
          <Icon size={20} className="relative z-10" />
          <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
        </a>
      ))}
    </div>
  );
};