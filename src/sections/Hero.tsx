"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Parallax effect calculations
  const parallaxValue = -scrollPosition * 0.2;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-20 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated grayscale shapes with Apple-inspired styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden -z-5"
        style={{ y: parallaxValue * 0.5 }}
      >
        {/* Enhanced grayscale gradient blobs with subtle translucency */}
        <motion.div
          animate={{
            x: [0, 10, -5, 0],
            y: [0, -15, 5, 0],
            scale: [1, 1.05, 0.98, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-gray-200/40 to-gray-300/40 dark:from-gray-700/25 dark:to-gray-800/25 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -15, 10, 0],
            y: [0, 10, -10, 0],
            scale: [1, 0.95, 1.02, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-gray-300/30 to-gray-400/30 dark:from-gray-600/20 dark:to-gray-700/20 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, 5, -15, 0],
            y: [0, -5, 10, 0],
            scale: [1, 1.02, 0.97, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-gray-200/30 to-gray-300/30 dark:from-gray-600/15 dark:to-gray-700/15 blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-noise opacity-3 dark:opacity-5 -z-5"></div>

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-25 dark:opacity-15 -z-5"></div>

      {/* Main content with improved spacing and width */}
      <div className="container relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto mt-4 md:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Accent header with Apple-inspired styling */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="relative inline-block px-6 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/60 backdrop-blur-md font-medium text-lg text-gray-600 dark:text-gray-300 shadow-sm">
              Global OCC Import & Export Solutions
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400 rounded-full origin-left"
              ></motion.span>
            </span>
          </motion.div>

          {/* Main heading with Apple-inspired gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-800 dark:text-gray-100"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-white">
              Global Trade & Co.
            </span>
          </motion.h1>

          {/* Description with improved readability */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            With over two decades of experience in the international shipping and trading industry, we are your reliable partner for OCC import/export and high-sea sales across the United Arab Emirates, the United States, Canada, the United Kingdom, and beyond.
          </motion.p>

          {/* Button group with Apple-inspired styling */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="#services"
                className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-gradient-to-b from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-lg shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-gray-800 bg-gray-100/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
              >
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with Apple-inspired styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
            />
            {/* Add subtle pulse animation around the scroll indicator */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-gray-400/20 dark:border-gray-500/20"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}