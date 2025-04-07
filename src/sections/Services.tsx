"use client";

import { motion } from 'framer-motion';
import { Ship, FileText, BarChart } from 'lucide-react';

const services = [
  {
    title: "Import Solutions",
    description: "End-to-end procurement and customs clearance services for global products with complete compliance management.",
    icon: Ship,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Export Management",
    description: "Comprehensive documentation, shipping arrangements, and logistics solutions for exporters from initial planning to final delivery.",
    icon: FileText,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Trade Consulting",
description: "Strategic market analysis, regulatory compliance guidance, and risk assessment to optimize your Global Trade & Co. operations.",
    icon: BarChart,
    gradient: "from-amber-500 to-orange-500"
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-semibold text-lg mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Comprehensive Trade Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Tailored services designed to streamline your international trade operations and drive business growth
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] group"
              >
                <div className="p-8 md:p-10">
                  <div className="mb-6 p-5 rounded-full bg-gradient-to-r ${service.gradient} inline-block">
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#contact"
                    className={`inline-flex items-center bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-medium group-hover:underline`}
                  >
                    Learn more
                    <motion.svg 
                      className="w-4 h-4 ml-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}