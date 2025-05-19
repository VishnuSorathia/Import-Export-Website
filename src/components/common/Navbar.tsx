"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Contact', path: '#contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? (theme === 'dark' 
              ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800' 
              : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200')
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setActiveLink('')}
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-300 dark:to-white">
              Global Trade & Co.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative py-2 text-base font-medium transition-colors ${
                    activeLink === item.path 
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                  onClick={() => setActiveLink(item.path)}
                >
                  {item.name}
                  {activeLink === item.path && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Theme toggle */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-zinc-300" />
                ) : (
                  <Moon className="w-5 h-5 text-zinc-700" />
                )}
              </button>
            )}
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-800 hover:to-black dark:from-zinc-300 dark:to-white dark:hover:from-white dark:hover:to-zinc-200 text-white dark:text-zinc-900 font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => setActiveLink('#contact')}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme toggle */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-zinc-300" />
                ) : (
                  <Moon className="w-5 h-5 text-zinc-700" />
                )}
              </button>
            )}
            
            <button
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    activeLink === item.path 
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/70'
                  }`}
                  onClick={() => {
                    setActiveLink(item.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
              <Link 
                href="#contact" 
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-800 hover:to-black dark:from-zinc-300 dark:to-white dark:hover:from-white dark:hover:to-zinc-200 text-white dark:text-zinc-900 font-medium rounded-lg transition-all duration-300"
                onClick={() => {
                  setActiveLink('#contact');
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}