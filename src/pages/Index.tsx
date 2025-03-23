import React, { Suspense } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme";
import { useGoogleAnalytics } from "@/lib/analytics";

const Index: React.FC = () => {
  // Initialize Google Analytics
  useGoogleAnalytics();

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Simple gradient background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.15),transparent_50%)]" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] [background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCQoLDA0OILzIAAABrklEQVQ4y4WTu27DMAxFBRt1W6Fuk7lAti6ZAnTuZiBrh8zZ6y1snaGAtiCt/v8HUpRkS0iGAQP28eXlkSIfGKEBjETQXyNeP+COgTW0xD68vD3OL8//5nUcxTXj3CMbVHRogQvnXmXjLadteWTPiXwmsHEWWDniAG+lNWGXZyf4oOzxLgNvyF7k6dDqXoPBOQi0gD0Xz7IJOh1uGBNugZ0jzEGwJvD9h9+gQPHZEU4RuP8PWER6AjcXEJ5HBIu7RxBhQYCFP4KYdQQJB8f4jCDx+oq/RZDKJ4J3BH4qjOAswTPCZGH2CIJF4BZBcnyCMAeCnuBbBGG2ixB2EZQbIwGhIghLAm+3iFsE8RYhty9TAEKHcEcQ2gh2EbwjvEeQtxH4jrD3COohwjPCZ4LwgDDNhsD3CHyLkMpHBDUTRPuMwAQ/RBBHguLGEaEiyIEgPyN8j/Atwmg2BBURdPuQhT9EKEtCfkZYRBgJlJcEFRGKjcBjhFkQVPuQhdURzDKCaxHsKJVHhLGJYGuCHQgsIOiM4F0T+G0EvScUBFLYp6Eu8/FwBRVy/wLwzlkk/YQP+gAAAABJRU5ErkJggg==)]" />
        </div>

        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;