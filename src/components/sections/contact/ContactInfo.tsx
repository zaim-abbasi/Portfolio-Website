import React from "react";
import { ContactInfoCard } from "./ContactInfoCard";
import { Github, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <ContactInfoCard
        icon={<Mail size={24} />}
        title="Email"
        content="zaim.abbasi@example.com"
        action={{
          href: "mailto:zaim.abbasi@example.com",
          text: "Send an email"
        }}
      />
      
      <ContactInfoCard
        icon={<MapPin size={24} />}
        title="Location"
        content="San Francisco, CA"
        subContent="Available for remote work worldwide"
      />
      
      <ContactInfoCard
        icon={<MessageSquare size={24} />}
        title="Social"
        socialLinks={[
          {
            icon: <Github size={20} />,
            href: "https://github.com"
          },
          {
            icon: <Linkedin size={20} />,
            href: "https://linkedin.com"
          }
        ]}
      />
    </div>
  );
};