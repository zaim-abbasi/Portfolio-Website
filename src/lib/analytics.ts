import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare gtag as a global function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Initialize gtag function
window.gtag = function (...args: any[]) {
  window.dataLayer.push(args);
};

// Hook to initialize Google Analytics
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-5XE2FESRKW";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5XE2FESRKW');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};
