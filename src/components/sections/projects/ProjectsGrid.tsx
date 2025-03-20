import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "TA Management System",
    description: "Developed a comprehensive system to streamline assignments, schedules, and evaluations, implementing advanced database queries to enhance data handling and reporting, thus reducing administrative overhead.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com"
  },
  {
    title: "Multi-User Messaging Platform",
    description: "Architected a robust terminal-based multi-user messaging platform using advanced network protocols, enabling secure peer-to-peer communication across local networks.",
    tags: ["Python", "Networking", "Security"],
    repoUrl: "https://github.com"
  },
  {
    title: "Terminal Maze Game",
    description: "Designed a terminal-based Maze Game utilizing advanced data structures and pathfinding algorithms. Created a dynamic maze generation system with varying difficulty levels and integrated intelligent opponent AI.",
    tags: ["C++", "Algorithms", "Data Structures"],
    repoUrl: "https://github.com"
  }
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