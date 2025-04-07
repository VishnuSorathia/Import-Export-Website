import React from 'react';
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute left-1/4 top-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-20 w-80 h-80 rounded-full bg-gradient-to-r from-pink-600/20 to-orange-600/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Top footer section with more detailed content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-white text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                 Global Trade & Co.
                </span>
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connecting markets across continents with precision and care since 2012.
              Your trusted partner for seamless international trade solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r from-blue-600 to-blue-700 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="h-1 w-0 group-hover:w-6 bg-gradient-to-r from-blue-500 to-purple-500 mr-3 rounded-full transition-all duration-300"></span> 
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="h-1 w-0 group-hover:w-6 bg-gradient-to-r from-blue-500 to-purple-500 mr-3 rounded-full transition-all duration-300"></span> 
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="h-1 w-0 group-hover:w-6 bg-gradient-to-r from-blue-500 to-purple-500 mr-3 rounded-full transition-all duration-300"></span> 
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="h-1 w-0 group-hover:w-6 bg-gradient-to-r from-blue-500 to-purple-500 mr-3 rounded-full transition-all duration-300"></span> 
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex">
                <div className="p-2 bg-white/10 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-gradient-blue-purple" />
                </div>
                <div>
                  <p className="text-white font-medium">Mumbai Headquarters</p>
                  <p className="text-gray-300">Trade Tower, Marine Drive</p>
                  <p className="text-gray-300">Mumbai, 400001, India</p>
                </div>
              </li>
              <li className="flex">
                <div className="p-2 bg-white/10 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-gradient-blue-purple" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:contact@globaltradepro.in" className="text-gray-300 hover:text-white transition-colors">
                    contact@globaltradepro.in
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="p-2 bg-white/10 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-gradient-blue-purple" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:+912212345678" className="text-gray-300 hover:text-white transition-colors">
                    +91 22 1234 5678
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white text-xl font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-white">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
            
            <div className="pt-6">
              <h4 className="text-white text-xl font-bold mb-4">Subscribe</h4>
              <div className="flex mt-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="py-3 px-4 bg-white/10 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle section with compliance badges */}
        <div className="flex flex-wrap justify-center gap-6 py-10 border-t border-white/10">
          <div className="flex items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <span className="text-white text-sm font-medium">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <span className="text-white text-sm font-medium">AEO Trusted Trader</span>
          </div>
          <div className="flex items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <span className="text-white text-sm font-medium">FIEO Member</span>
          </div>
          <div className="flex items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <span className="text-white text-sm font-medium">WTO Compliant</span>
          </div>
        </div>
        
        {/* Bottom section with copyright and links */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} GlobalTradePro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}