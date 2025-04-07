"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient inspired by Apple design */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#111] dark:from-black dark:to-[#111] -z-10"></div>
      
      {/* Animated colorful shapes */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden -z-5"
      >
        {/* Colorful gradient blobs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-overlay opacity-40 blur-3xl"></div>
        <div className="absolute top-3/4 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mix-blend-overlay opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mix-blend-overlay opacity-30 blur-3xl"></div>
      </motion.div>
      
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 -z-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-lg font-medium mb-6"
          >
            Global OCC Import & Export Solutions
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white"
          >
              
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Global Trade & Co.
 
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
With over two decades of experience in the international shipping and trading industry, we are your reliable partner for OCC import/export and high-sea sales across the United Arab Emirates, the United States, Canada, the United Kingdom, and beyond.          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          >
            <Link 
              href="#services" 
              className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              Our Services
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Improved scroll indicator with subtle animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-lg shadow-lg"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}