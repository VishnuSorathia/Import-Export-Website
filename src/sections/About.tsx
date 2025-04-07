"use client";

import { motion } from 'framer-motion';
import { Briefcase, Globe, Award, Recycle } from 'lucide-react';

const stats = [
  { id: 1, value: '20+', label: 'Years of Experience', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
  { id: 2, value: '100%', label: 'Compliance Assured', icon: Award, color: 'from-amber-500 to-orange-500' },
  { id: 3, value: 'Global', label: 'Network & Reach', icon: Globe, color: 'from-purple-500 to-pink-500' },
  { id: 4, value: 'Premium', label: 'OCC Quality', icon: Recycle, color: 'from-blue-500 to-cyan-500' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        {/* Background design element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        >
          <div className="absolute -top-64 -left-64 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-64 -right-64 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 filter blur-3xl opacity-10"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 relative z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold text-lg mb-4"
          >
            About Us
          </motion.span>
          
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-8"
          >
            A Reputable Global Shipping and Trade Provider
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 leading-relaxed"
          >
           With over two decades of experience in the international shipping and trading industry,                  Global Trade & Co.
           Global Trade & Co.
           has established itself as a leading importer, exporter, and high-sea sales specialist of OCC (Old Corrugated Containers). We cater to clients across the United Arab Emirates, the United States, Canada, the United Kingdom, and other global markets, providing seamless logistics, high-quality supply, and efficient trade solutions.          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl p-10 text-center transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={`p-5 rounded-full bg-gradient-to-r ${stat.color} mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-3 text-black">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}