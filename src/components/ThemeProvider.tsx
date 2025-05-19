"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Enhanced animation preferences
  const reducedMotionPreference = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    setMounted(true);
    
    // Apply initial color theme class to document for smoother transitions
    document.documentElement.classList.add('theme-transition');
    
    return () => {
      document.documentElement.classList.remove('theme-transition');
    };
  }, []);

  if (!mounted) {
    return (
      <div className="theme-initializing">
        {children}
      </div>
    );
  }

  return (
    <NextThemesProvider {...props}>
      <MotionConfig reducedMotion={reducedMotionPreference ? "always" : "user"}>
        <div className="theme-ready transition-colors duration-300">
          {children}
        </div>
      </MotionConfig>
    </NextThemesProvider>
  );
}