"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, FileText, BarChart, ChevronRight, X } from 'lucide-react';
import { useTheme } from 'next-themes';

// Services data with updated grayscale color scheme
const services = [
  {
    id: "import",
    title: "Import Solutions",
    description: "End-to-end procurement and customs clearance services for global products with complete compliance management.",
    detailedDescription: "Our comprehensive import solutions streamline the entire process from sourcing products globally to ensuring smooth customs clearance. We handle documentation, regulatory compliance, duty optimization, and logistics coordination to minimize delays and costs. Our experienced team navigates complex import regulations across multiple jurisdictions, providing you with hassle-free importing experience.",
    icon: Ship,
    gradient: "from-gray-700 to-gray-900",
    accentColor: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-800",
    iconColor: "text-gray-700 dark:text-gray-300",
    features: [
      "Global supplier sourcing and verification",
      "Complete customs documentation management",
      "Regulatory compliance assurance",
      "Duty and tax optimization strategies",
      "Port handling and inland transportation",
      "Real-time shipment tracking"
    ]
  },
  {
    id: "export",
    title: "Export Management",
    description: "Comprehensive documentation, shipping arrangements, and logistics solutions for exporters from initial planning to final delivery.",
    detailedDescription: "Our export management services cover every aspect of the export process, from initial market analysis and documentation to final delivery at the destination. We ensure compliance with international trade regulations, optimize shipping routes, and coordinate with freight forwarders to deliver your products efficiently. Our expertise in export procedures helps you expand your global market presence with confidence.",
    icon: FileText,
    gradient: "from-gray-600 to-gray-800",
    accentColor: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-800",
    iconColor: "text-gray-700 dark:text-gray-300",
    features: [
      "Export documentation & compliance",
      "International shipping arrangements",
      "Cargo insurance coordination",
      "Packing and labeling consultation",
      "Letters of credit management",
      "Foreign market entry strategies"
    ]
  },
  {
    id: "consulting",
    title: "Trade Consulting",
    description: "Strategic market analysis, regulatory compliance guidance, and risk assessment to optimize your Global Trade & Co. operations.",
    detailedDescription: "Our trade consulting services provide expert guidance on international trade strategies, market analysis, and regulatory compliance. We help you navigate complex trade agreements, identify new market opportunities, and mitigate risks associated with global trade. Our consultants leverage industry expertise and market intelligence to develop customized trade strategies that align with your business objectives.",
    icon: BarChart,
    gradient: "from-gray-500 to-gray-700",
    accentColor: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    iconBg: "bg-gray-100 dark:bg-gray-800",
    iconColor: "text-gray-700 dark:text-gray-300",
    features: [
      "Trade agreement optimization",
      "Market entry strategy development",
      "Supply chain risk assessment",
      "Trade compliance training",
      "Export/Import cost analysis",
      "Customs valuation strategies"
    ]
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

export default function Services() {
  const { theme } = useTheme();
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleServiceClick = (id: string) => {
    setActiveService(id);
    // Scroll to top of section for better UX
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-gray-500/10 dark:bg-gray-500/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-gray-400/10 dark:bg-gray-400/20 blur-3xl"></div>

      {/* Section header */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent font-semibold text-lg mb-3"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6"
          >
            Comprehensive Trade Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Tailored services designed to streamline your international trade operations and drive business growth
          </motion.p>
        </motion.div>

        {/* Services content with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {!activeService ? (
            // Grid layout when no service is active
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              key="services-grid"
              exit={{ opacity: 0 }}
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800
                      transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className="p-8">
                      <div className={`mb-6 p-4 rounded-full ${service.iconBg} inline-flex`}>
                        <Icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 font-medium group-hover:underline"
                        >
                          Explore service
                          <motion.div
                            className="transition-transform"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </motion.div>
                        </span>

                        <span className={`${service.accentColor} px-3 py-1 text-xs font-medium rounded-full`}>
                          Learn more
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // Expanded view when a service is active
            <motion.div
              key="service-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              {services.map((service) => {
                if (service.id !== activeService) return null;

                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-500"
                  >
                    {/* Header with gradient background */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-3 rounded-full mr-4">
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                        <button
                          onClick={() => setActiveService(null)}
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                          aria-label="Close details"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="md:grid md:grid-cols-5 gap-10">
                        {/* Left column - Service description */}
                        <div className="md:col-span-3 mb-10 md:mb-0">
                          <h4 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Service Overview</h4>
                          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            {service.detailedDescription}
                          </p>

                          <div className="mt-10 flex flex-wrap gap-4">
                            <a
                              href="#contact"
                              className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-all duration-300`}
                            >
                              Get Started
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>

                            <button
                              onClick={() => setActiveService(null)}
                              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                            >
                              Back to services
                            </button>
                          </div>
                        </div>

                        {/* Right column - Features */}
                        <div className="md:col-span-2">
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                            <h4 className="text-lg font-semibold mb-5 text-gray-900 dark:text-gray-100">Key Features</h4>
                            <ul className="space-y-4">
                              {service.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + (idx * 0.05) }}
                                  className="flex items-start"
                                >
                                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-gray-700 dark:bg-gray-300"></span>
                                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Additional CTA card */}
                          <div className="mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Need customized solutions?</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                              Our team can develop tailored packages for your specific business requirements.
                            </p>
                            <a
                              href="#contact"
                              className="text-sm font-medium inline-flex items-center text-gray-900 dark:text-gray-100 hover:underline"
                            >
                              Contact our specialists
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
