import React from "react";
import { Code, Database, Globe, Layers } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      description: "Building elegant and responsive user interfaces",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      icon: <Globe size={24} />,
      title: "Backend",
      description: "Creating robust and scalable server solutions",
      technologies: ["Node", "Next", "Python"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      description: "Managing data with modern database solutions",
      technologies: ["Supabase", "MongoDB", "MsSQL", "MySQL"]
    },
    {
      icon: <Layers size={24} />,
      title: "Architecture",
      description: "Designing scalable system architectures",
      technologies: ["Microservices", "REST", "System Design"]
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="pixel-container">
        <div className="text-center mb-16">
          <div className="pixel-badge inline-block mb-3">
            About me
          </div>
          <h2 className="text-3xl mb-4">Skills & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Third-year Software Engineering student at FAST (Class of '26), passionate about 
            building scalable applications and learning new technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="pixel-card bg-card hover:border-accent transition-all duration-300"
            >
              <div className="p-2 border-2 w-fit mb-4 text-accent border-accent">
                {skill.icon}
              </div>
              <h3 className="text-xl mb-2 font-pixel">{skill.title}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 text-sm border-2 border-muted hover:border-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12">
            <div className="pixel-card bg-card border-2">              
              <h3 className="text-xl mb-6 font-pixel pb-2 border-b-2 border-dashed">Experience</h3>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-accent"></div>
                <div className="flex justify-between mb-2 pl-4">
                  <div>
                    <span className="font-bold block">Back End Engineer</span>
                    <span className="text-muted-foreground">NADRA • Internship</span>
                    <span className="text-muted-foreground block">Islamabad, Pakistan</span>
                  </div>
                </div>
                <div className="pl-4 mt-4">
                  <p className="text-sm font-medium mb-2">Technologies: ASP.NET • C# • Linux • Java • Spring Boot</p>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-2">
                    <li>Developed a comprehensive MFA solution integrating Time-based One-Time Passwords (TOTP) for enhanced authentication and Lightweight Directory Access Protocol (LDAP) for real-time validation against NADRA's Active Directory (AD).</li>
                    <li>Engineered a sophisticated Document Archival System to convert and store paper-based documents into secure servers. Utilized a scalable multi-tier architecture with full-text indexing and asynchronous data processing for efficient handling of large volumes of documents.</li>
                    <li>Redesigned NADRA's Intra Email Service architecture, enhancing security through robust authentication (LDAP, MFA, OTP), encryption, and advanced threat mitigation. Implemented account locking, anomaly detection, and comprehensive logging to prevent unauthorized access and ensure data protection.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;