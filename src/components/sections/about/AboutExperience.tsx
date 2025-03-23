import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "NADRA",
    type: "Internship",
    location: "Islamabad, Pakistan",
    duration: "Jun 2023 - Aug 2023",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "LDAP", "Spring Boot", "Tesseract OCR"],
    points: [
      "Built a document archival system that improved storage, retrieval, and security of official records. Used custom OCR and full-text indexing to speed up searches by 92%, ensuring 99.8% uptime.",
      "Deployed a Multi-Factor Authentication (MFA) system for NADRA's Outlook Web Access, securing 12,000+ employees. Integrated TOTP, LDAP, an admin portal, and AES-256 encryption, reducing credential risks by 68%.",
      "Developed an internal email authentication system for NADRA with CAPTCHA login, QR code 2FA, and adaptive account locking to enhance security and reliability.",
      "Created an intranet app for automated device compliance checks, preventing unauthorized access and ensuring policy adherence. Integrated with an existing portal, auto-installed on non-compliant devices, and securely collected system data."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "FAST NUCES",
    type: "Research Project",
    location: "Islamabad, Pakistan",
    duration: "Jan 2023 - May 2023",
    technologies: ["React.js", "JavaFX", "C#", "MySQL", "MS SQL", "WinForms"],
    points: [
      "Bookstore Management System: Built a three-tier library management system using JavaFX and MySQL. Features include sub-admin management, role-based user access, e-books, a second-hand book market, community chat, and book reviews, improving library operations and user engagement.",
      "TA and Demonstrator Management System: Developed a TA and Lab Demonstrator management system using C# and MS SQL. Included student applications, CRUD operations for TAs, feedback interaction, and role-specific dashboards to streamline academic assistance.",
      "EduLib System: Co-developed EduLib, a React.js-based library management system focused on user-friendliness and responsiveness. Applied React development, UI/UX design, and software engineering principles to enhance usability."
    ]
  }
];

export const AboutExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10">              
          <h3 className="text-xl mb-6 font-mono pb-2 border-b-2 border-accent/10 flex justify-between items-center">
            <span>Experience</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="h-8 w-8 rounded-lg border-2 border-accent/20 hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="h-8 w-8 rounded-lg border-2 border-accent/20 hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </h3>
          
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceItem {...experiences[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-accent/20"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};