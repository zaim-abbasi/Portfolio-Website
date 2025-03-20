import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pixel-card border-2 hover:border-accent">            
      <form onSubmit={handleSubmit}>              
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-pixel text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pixel-borders focus:border-accent"
            placeholder="Your Name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-pixel text-sm">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="pixel-borders focus:border-accent"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-pixel text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="pixel-borders min-h-[150px] focus:border-accent"
            placeholder="Your message here..."
          />
        </div>
        
        <Button 
          type="submit" 
          className="pixel-button w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-white animate-pulse"></span>
              <span>Sending...</span>
            </span>
          ) : (
            <>
              <Send size={16} />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};