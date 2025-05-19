"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  Globe,
  Clock,
  ShieldCheck,
  FileText,
  Award,
  ArrowRight
} from 'lucide-react';
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const complianceBadges = [
    { icon: <ShieldCheck className="w-5 h-5 text-gray-700 dark:text-gray-300" />, text: "ISO 9001 Certified" },
    { icon: <Award className="w-5 h-5 text-gray-700 dark:text-gray-300" />, text: "AEO Trusted Trader" },
    { icon: <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />, text: "FIEO Member" },
    { icon: <FileText className="w-5 h-5 text-gray-700 dark:text-gray-300" />, text: "WTO Compliant" }
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 theme-transition">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-500"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white">
                Global Trade & Co.
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connecting markets across continents with precision and care since 2012.
              Your trusted partner for seamless international trade solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="p-2 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 bg-gray-100 dark:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="p-2 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 bg-gray-100 dark:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 bg-gray-100 dark:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 bg-gray-100 dark:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center group transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <span className="h-1 w-0 group-hover:w-6 rounded-full transition-all duration-300 mr-3 bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Hours</h4>
            <ul className="space-y-2">
              {businessHours.map((item) => (
                <li key={item.day} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{item.day}:</span>
                  <span className="text-gray-900 dark:text-white">{item.hours}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Subscribe</h4>
              <div className="flex mt-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 w-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                />
                <button className="text-white dark:text-gray-900 py-3 px-6 rounded-r-lg transition-all duration-300 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h4>
            <address className="not-italic space-y-5">
              <div className="flex">
                <div className="p-2 rounded-full mr-4 bg-gray-100 dark:bg-gray-800">
                  <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Mumbai Headquarters</p>
                  <p className="text-gray-600 dark:text-gray-400">Trade Tower, Marine Drive</p>
                  <p className="text-gray-600 dark:text-gray-400">Mumbai, 400001, India</p>
                </div>
              </div>
              <div className="flex">
                <div className="p-2 rounded-full mr-4 bg-gray-100 dark:bg-gray-800">
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Us</p>
                  <a href="mailto:contact@globaltrade.com" className="transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    contact@globaltrade.com
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="p-2 rounded-full mr-4 bg-gray-100 dark:bg-gray-800">
                  <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Call Us</p>
                  <a href="tel:+912212345678" className="transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    +91 22 1234 5678
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Compliance badges section */}
        <div className="flex flex-wrap justify-center gap-6 py-10 border-t border-gray-200 dark:border-gray-800">
          {complianceBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm transition-all duration-300 bg-gray-100 dark:bg-gray-800">
              {badge.icon}
              <span className="text-sm font-medium text-gray-900 dark:text-white">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and links */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-gray-500 dark:text-gray-500">
              © {currentYear} Global Trade & Co. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm transition-colors text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm transition-colors text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm transition-colors text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}