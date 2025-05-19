"use client";

import { useState, useEffect } from 'react';
import { Star, Award, Globe, Briefcase, Users, ChevronRight, X, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

// About Us sections with expandable details
const aboutSections = [
  {
    id: "history",
    title: "Our History",
    shortDescription: "Two decades of excellence in OCC trade since our founding in 2003.",
    detailedDescription: "Founded in 2003, Global Trade & Co. has established itself as a premier name in global OCC (Old Corrugated Containers) trade with headquarters in the United Arab Emirates. Over the past two decades, we have expanded our operations to over 30 countries, becoming a reliable partner for businesses worldwide. Our journey has been marked by consistent growth, innovation in sustainable trade practices, and adaptation to changing market conditions.",
    icon: Star,
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    features: [
      "Established in 2003 in the UAE",
      "Expanded to international markets by 2007",
      "Pioneered sustainable OCC trading practices in 2012",
      "Achieved ISO certification in 2015",
      "Launched digital trade platform in 2020",
      "Reached 30+ country presence by 2023"
    ]
  },
  {
    id: "expertise",
    title: "Our Expertise",
    shortDescription: "Specialized knowledge in global OCC trading, sustainability practices, and market analysis.",
    detailedDescription: "At Global Trade & Co., our expertise extends beyond simple buying and selling of OCC materials. We have developed specialized knowledge in quality assessment, market trend analysis, logistics optimization, and sustainability initiatives. Our team consists of industry veterans with deep understanding of the global recycling markets, international shipping regulations, and regional compliance requirements. This expertise allows us to navigate complex trade environments efficiently while maximizing value for our partners.",
    icon: Award,
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    features: [
      "OCC material quality assessment",
      "International shipping and logistics",
      "Market trend analysis and forecasting",
      "Regulatory compliance across regions",
      "Sustainable trade practices",
      "Supply chain optimization"
    ]
  },
  {
    id: "team",
    title: "Our Team",
    shortDescription: "Dedicated professionals with extensive experience in global trade and recycling industries.",
    detailedDescription: "The backbone of Global Trade & Co. is our diverse and talented team of professionals who bring decades of combined experience in the OCC and recycling industries. Our team includes international trade specialists, logistics experts, market analysts, quality control professionals, and customer relationship managers. Each member contributes unique perspectives and specialized skills, creating a collaborative environment that drives innovation and excellence in all our operations.",
    icon: Users,
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    features: [
      "International trade specialists",
      "Logistics and supply chain experts",
      "Market analysts and researchers",
      "Quality control professionals",
      "Customer relationship managers",
      "Sustainability consultants"
    ]
  },
];

export default function AboutUs() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animations after component mount
    setAnimateIn(true);
  }, []);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    // Scroll to top of section for better UX
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="bg-white dark:bg-zinc-950 no-top-padding">
      <div className="container mx-auto px-4">
        {/* Section header - reduced spacing */}
        <div className={`text-center mb-6 transition-all duration-700 ${animateIn ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-zinc-200 dark:bg-zinc-800/60">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Our Journey & Expertise
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
            About <span className="text-zinc-700 dark:text-zinc-300">Global Trade & Co.</span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Your trusted partner in global OCC trading with over two decades of industry experience
          </p>
        </div>

        {/* Main content area - reduced gap */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left column - Image/Stats */}
          <div className="md:w-1/2">
            <div className={`relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 shadow-md transition-all duration-700 delay-300 ${animateIn ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              {/* Placeholder for hero image */}
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 dark:text-zinc-400">Company Image</span>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 inset-x-0">
                <div className="grid grid-cols-4 divide-x divide-zinc-200 dark:divide-zinc-700">
                  <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm py-4 text-center">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">20+</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Years</p>
                  </div>

                  <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm py-4 text-center">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">30+</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Countries</p>
                  </div>

                  <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm py-4 text-center">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">500+</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Projects</p>
                  </div>

                  <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm py-4 text-center">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">250+</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:w-1/2">
            <div className={`space-y-4 transition-all duration-700 delay-300 ${animateIn ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Two Decades of Excellence in OCC Trade
              </h3>

              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Founded in 2003, Global Trade & Co. has established itself as a premier name in global OCC (Old Corrugated Containers) trade with headquarters in the United Arab Emirates.
              </p>

              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                We specialize in OCC import and export, providing reliable supply chains and competitive pricing while navigating complex international trade regulations.
              </p>

              <div className="pt-3">
                <a href="#services" className="inline-flex items-center justify-center px-6 py-3 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-medium rounded-lg transition-all duration-300">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* About Section Cards - 3 cards in active section view */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                  Learn More About Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {aboutSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={section.id}
                        className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/60 px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        onClick={() => handleSectionClick(section.id)}
                      >
                        <Icon className={`w-5 h-5 ${section.iconColor}`} />
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{section.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-zinc-100 dark:bg-zinc-800/60 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Globe className="w-5 h-5 text-zinc-700 dark:text-zinc-400 mr-2" />
                    <h4 className="font-bold text-zinc-700 dark:text-zinc-400">Our Vision</h4>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    To be the global leader in OCC trading, setting industry standards for quality, sustainability, and creating lasting value for our partners worldwide.
                  </p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800/60 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-5 h-5 text-zinc-700 dark:text-zinc-400 mr-2" />
                    <h4 className="font-bold text-zinc-700 dark:text-zinc-400">Our Mission</h4>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    To provide exceptional value through reliable supply chains and competitive pricing while prioritizing environmental responsibility and sustainable business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Section Details */}
        {activeSection && (
          <div className={`mt-10 animate-fade-in`}>
            {aboutSections.map((section) => {
              if (section.id !== activeSection) return null;

              const Icon = section.icon;

              return (
                <div
                  key={section.id}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                >
                  <div className="relative">
                    {/* Header with gradient background */}
                    <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-800 dark:to-zinc-950 p-6 mb-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-3 rounded-full mr-4">
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                        </div>
                        <button
                          onClick={() => setActiveSection(null)}
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Content with proper padding after the header */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Left column - Section description */}
                        <div className="md:w-3/5">
                          <h4 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Overview</h4>
                          <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                            {section.detailedDescription}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <a
                              href="#contact"
                              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-medium rounded-lg transition-all duration-300"
                            >
                              Contact Us
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>

                            <button
                              onClick={() => setActiveSection(null)}
                              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 transition-all duration-300"
                            >
                              Back to overview
                            </button>
                          </div>
                        </div>

                        {/* Right column - Highlights */}
                        <div className="md:w-2/5">
                          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700">
                            <h4 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Highlights</h4>
                            <ul className="space-y-2">
                              {section.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-zinc-500 dark:bg-zinc-400"></span>
                                  <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Additional CTA card */}
                          <div className="mt-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                            <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Want to know more?</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
                              Our team is ready to provide additional information about our company and services.
                            </p>
                            <a
                              href="#contact"
                              className="text-sm font-medium inline-flex items-center text-zinc-700 dark:text-zinc-300 hover:underline"
                            >
                              Get in touch with us
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}