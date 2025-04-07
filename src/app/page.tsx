"use client";

import { Suspense, useEffect } from 'react';
import Navbar from "@/components/common/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import ContactForm from "@/sections/ContactForm";
import Footer from "@/components/common/Footer";
import { motion, useScroll, useSpring } from 'framer-motion';

// Progress indicator component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Section transition component with enhanced effects
const SectionTransition = ({ children, delay = 0, id }: { children: React.ReactNode, delay?: number, id?: string }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier curve for Apple-like easing
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Background blob component
const BackgroundBlob = ({ color, position, size }: { color: string, position: string, size: string }) => (
  <div 
    className={`absolute blur-3xl rounded-full opacity-20 ${position} ${size} ${color} animate-blob pointer-events-none`}
    style={{ filter: 'blur(80px)' }}
  />
);

export default function Home() {
  // Add noise texture effect
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 100, 100);
      
      for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
          const value = Math.floor(Math.random() * 15);
          ctx.fillStyle = `rgba(0, 0, 0, 0.0${value})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      
      const noisePattern = canvas.toDataURL('image/png');
      document.documentElement.style.setProperty('--noise-texture', `url(${noisePattern})`);
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <BackgroundBlob color="bg-blue-300" position="-top-40 -left-20" size="w-96 h-96" />
        <BackgroundBlob color="bg-purple-300" position="top-1/4 -right-20" size="w-80 h-80" />
        <BackgroundBlob color="bg-green-300" position="bottom-1/4 left-1/3" size="w-72 h-72" />
        <BackgroundBlob color="bg-amber-300" position="-bottom-20 right-1/4" size="w-64 h-64" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light" />
      </div>
      
      <Navbar />
      
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Loading amazing content...
            </p>
          </div>
        </div>
      }>
        <div>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>

          <SectionTransition id="about">
            <section className="bg-white dark:bg-gray-900 py-32 scroll-mt-20 relative overflow-hidden">
              <About />
            </section>
          </SectionTransition>

          <SectionTransition id="services" delay={0.1}>
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32 scroll-mt-20 relative overflow-hidden">
              <Services />
            </section>
          </SectionTransition>

          <SectionTransition id="portfolio" delay={0.2}>
            <section className="bg-white dark:bg-gray-900 py-32 scroll-mt-20 relative overflow-hidden">
              <Portfolio />
            </section>
          </SectionTransition>

          <SectionTransition id="contact" delay={0.3}>
            <ContactForm />
          </SectionTransition>
        </div>
      </Suspense>

      <Footer />
    </main>
  );
}