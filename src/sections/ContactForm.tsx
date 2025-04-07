// src/sections/ContactForm.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ChevronRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    inquiry: false,
    message: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFocus = (field: string) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };
  
  const handleBlur = (field: string) => {
    if (!formData[field as keyof typeof formData]) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background with noise texture and gradient blobs */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black">
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] dark:opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-teal-400/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold mb-4 tracking-wide uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
          Engage with Global Trade & Co.

          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Partner with Global Trade Co. a leading provider of shipping, logistics, and international trade services. 
          We are your reliable partner for OCC import/export and high-sea sales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-5 overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm dark:backdrop-blur-lg">
            {/* Contact Info Side */}
            <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-blue-700 text-white p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Glass effect elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl shadow-inner">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Our Location</h4>
                      <p className="text-white/80">Ma Laxmi & Co Headquarters</p>
                      <p className="text-white/80">Mumbai, India</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl shadow-inner">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-white/80">+91 22 1234 5678</p>
                      <p className="text-white/80">+91 98765 43210</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl shadow-inner">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/80">info@malaxmiandco.com</p>
                      <p className="text-white/80">support@malaxmiandco.com</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669
                      4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v
                      8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069
                      4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849
                      0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072
                      2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98
                      6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
                      0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324
                      6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0
                      00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0
                      01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0
                      01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0
                      002.087-2.165z" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                      1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
                      13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24
                      22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <div className="md:col-span-3 bg-white dark:bg-black/80 backdrop-blur-xl p-12 relative overflow-hidden">
              {/* Subtle background elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Send Us a Message
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      focused.name 
                        ? 'border-2 border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-100 dark:shadow-purple-900/30' 
                        : 'border border-gray-200 dark:border-gray-700'
                    }`}></div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      className="w-full bg-transparent pt-6 pb-2 px-4 text-gray-900 dark:text-white outline-none relative z-10"
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focused.name 
                          ? 'transform -translate-y-3 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                          : 'top-4 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative group">
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      focused.email 
                        ? 'border-2 border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-100 dark:shadow-purple-900/30' 
                        : 'border border-gray-200 dark:border-gray-700'
                    }`}></div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full bg-transparent pt-6 pb-2 px-4 text-gray-900 dark:text-white outline-none relative z-10"
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focused.email 
                          ? 'transform -translate-y-3 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                          : 'top-4 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focused.phone 
                      ? 'border-2 border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-100 dark:shadow-purple-900/30' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}></div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className="w-full bg-transparent pt-6 pb-2 px-4 text-gray-900 dark:text-white outline-none relative z-10"
                  />
                  <label 
                    htmlFor="phone" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused.phone 
                        ? 'transform -translate-y-3 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                        : 'top-4 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Phone Number (Optional)
                  </label>
                </div>
                
                {/* Inquiry Type */}
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focused.inquiry 
                      ? 'border-2 border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-100 dark:shadow-purple-900/30' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}></div>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    onFocus={() => handleFocus('inquiry')}
                    onBlur={() => handleBlur('inquiry')}
                    className="w-full appearance-none bg-transparent pt-6 pb-2 px-4 text-gray-900 dark:text-white outline-none relative z-10"
                    required
                  >
                    <option value="" disabled></option>
                    <option value="import">OCC Import</option>
                    <option value="export">OCC Export</option>
                    <option value="highsea">High-Sea Sales</option>
                    <option value="logistics">Shipping & Logistics</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <label 
                    htmlFor="inquiry" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused.inquiry 
                        ? 'transform -translate-y-3 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                        : 'top-4 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Type of Inquiry
                  </label>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400 z-10">
                    <ChevronRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focused.message 
                      ? 'border-2 border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-100 dark:shadow-purple-900/30' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}></div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows={4}
                    className="w-full bg-transparent pt-6 pb-2 px-4 text-gray-900 dark:text-white outline-none relative z-10 resize-none"
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused.message 
                        ? 'transform -translate-y-3 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                        : 'top-4 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 font-medium transition-all hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-700/30"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Send Message</span>
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}