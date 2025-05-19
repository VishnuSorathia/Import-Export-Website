
// Create this as a new component in src/components/common/DiscoverMore.tsx

"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function DiscoverMore() {
  const [isVisible, setIsVisible] = useState(true);
  
  // Optional: Hide after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="w-full flex justify-center items-center py-2 bg-transparent no-padding"
      style={{ 
        background: "transparent", 
        border: "none", 
        boxShadow: "none",
        position: "relative",
        zIndex: 10
      }}
    >
      <button 
        onClick={scrollToAbout}
        className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 bg-transparent border-none"
        style={{ background: "transparent", border: "none" }}
      >
        <span className="text-sm font-medium">Discover More</span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <ArrowDown size={16} />
        </span>
      </button>
    </div>
  );
}
