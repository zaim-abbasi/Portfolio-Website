import React from "react";
import { ExperienceItem } from "./ExperienceItem";

const experience = {
  role: "Back End Engineer",
  company: "NADRA",
  type: "Internship",
  location: "Islamabad, Pakistan",
  technologies: ["ASP.NET", "C#", "Linux", "Java", "Spring Boot"],
  achievements: [
    "Developed a comprehensive MFA solution integrating Time-based One-Time Passwords (TOTP) for enhanced authentication and Lightweight Directory Access Protocol (LDAP) for real-time validation against NADRA's Active Directory (AD).",
    "Engineered a sophisticated Document Archival System to convert and store paper-based documents into secure servers. Utilized a scalable multi-tier architecture with full-text indexing and asynchronous data processing for efficient handling of large volumes of documents.",
    "Redesigned NADRA's Intra Email Service architecture, enhancing security through robust authentication (LDAP, MFA, OTP), encryption, and advanced threat mitigation. Implemented account locking, anomaly detection, and comprehensive logging to prevent unauthorized access and ensure data protection."
  ]
};

export const AboutExperience: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 gap-12">
        <div className="pixel-card bg-card border-2">              
          <h3 className="text-xl mb-6 font-pixel pb-2 border-b-2 border-dashed">Experience</h3>
          <ExperienceItem {...experience} />
        </div>
      </div>
    </div>
  );
};