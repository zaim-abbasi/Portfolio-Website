import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Digital Content Platform",
    description:
      "Built a platform for creators to monetize content with paywalls and instant payments. Supports credit cards, PayPal, and crypto, ensuring secure transactions and reliable earnings.",
    tags: ["React.js", "Supabase", "Node.js", "Tailwind CSS"],
    repoUrl: "https://github.com/zaim-abbasi",
  },
  {
    title: "AI Social Analytics",
    description:
      "Created an AI-powered social analytics app that tracks trends, detects intent, and helps businesses generate leads using real-time sentiment analysis across different online platforms.",
    tags: ["React.js", "Node.js", "MongoDB", "Social Media APIs"],
    repoUrl: "https://github.com/zaim-abbasi",
  },
  {
    title: "Multi-User Messaging Platform",
    description:
      "Developed a messaging platform with secure peer-to-peer communication using advanced network protocols, encryption, and authentication to enable seamless multi-user interactions over local networks.",
    tags: ["Java", "Networking", "Socket Programming"],
    repoUrl: "https://github.com/zaim-abbasi",
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};