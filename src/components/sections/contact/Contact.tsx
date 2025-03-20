import React from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="pixel-container">
        <ContactHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;