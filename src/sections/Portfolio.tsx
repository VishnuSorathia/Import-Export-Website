"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Calendar, Building, Download, Upload } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect, SetStateAction } from 'react';

// Project data structure with grayscale color values
const projects = [
  {
    id: 1,
    title: "Automotive Parts to USA",
    category: "Export",
    description: "Facilitated export of precision-engineered automotive components to leading manufacturers in the United States",
    detailedDescription: "Managed a complex logistics network to deliver just-in-time automotive components to assembly plants across the United States. Implemented digital tracking solutions that reduced transit times by 15% and ensured compliance with international trade regulations.",
    image: "/projects/automotive.jpg",
    year: 2024,
    client: "AutoTech Industries",
    location: "Detroit, Michigan",
    value: "$2.4M",
    color: "from-gray-700 to-gray-900" // Updated to grayscale
  },
  {
    id: 2,
    title: "Electronics from UAE",
    category: "Import",
    description: "Managed import logistics for consumer electronics from Dubai tech hub to Indian retail chains",
    detailedDescription: "Established a streamlined import channel for premium consumer electronics from Dubai's technology hub. Coordinated with customs authorities to expedite clearance procedures and implemented quality control checkpoints to maintain product integrity throughout the supply chain.",
    image: "/projects/electronics.jpg",
    year: 2023,
    client: "DigiWorld Solutions",
    location: "Dubai, UAE",
    value: "$1.8M",
    color: "from-gray-500 to-gray-700" // Updated to grayscale
  },
  {
    id: 3,
    title: "Textiles to UK",
    category: "Export",
    description: "Executed comprehensive export strategy for premium textiles to luxury retailers across the United Kingdom",
    detailedDescription: "Developed and executed a bespoke export program for high-end textiles to prestigious British retailers. Created specialized packaging solutions to preserve fabric quality during transit and navigated post-Brexit customs regulations successfully.",
    image: "/projects/textiles.jpg",
    year: 2023,
    client: "FabricElite Ltd.",
    location: "London, UK",
    value: "$1.2M",
    color: "from-gray-600 to-gray-800" // Updated to grayscale
  },
  {
    id: 4,
    title: "Medical Supplies to Germany",
    category: "Export",
    description: "Streamlined export processes for critical medical equipment adhering to strict EU regulations",
    detailedDescription: "Orchestrated the export of sensitive medical equipment to healthcare facilities across Germany. Ensured full compliance with EU MDR regulations and maintained temperature-controlled shipping environments throughout the logistics chain.",
    image: "/projects/medical.jpg",
    year: 2024,
    client: "MediGlobal GmbH",
    location: "Berlin, Germany",
    value: "$3.5M",
    color: "from-gray-400 to-gray-600" // Updated to grayscale
  },
  {
    id: 5,
    title: "Agriculture Products from Brazil",
    category: "Import",
    description: "Established import channels for organic produce with complete supply chain transparency",
    detailedDescription: "Created a sustainable import framework for certified organic agricultural products from Brazil. Implemented blockchain-based tracking to provide end-to-end transparency and ensure compliance with international organic certification standards.",
    image: "/projects/agriculture.jpg",
    year: 2023,
    client: "NatureFarms Co.",
    location: "São Paulo, Brazil",
    value: "$950K",
    color: "from-gray-500 to-gray-700" // Updated to grayscale
  },
  {
    id: 6,
    title: "Industrial Equipment to Singapore",
    category: "Export",
    description: "Delivered turnkey export solutions for heavy machinery with specialized handling requirements",
    detailedDescription: "Coordinated the export of oversized industrial equipment to Singapore's expanding manufacturing sector. Arranged specialized freight solutions including chartered cargo ships and custom load-securing systems to ensure safe transit of high-value machinery.",
    image: "/projects/industrial.jpg",
    year: 2024,
    client: "SingTech Industries",
    location: "Singapore",
    value: "$4.2M",
    color: "from-gray-600 to-gray-800" // Updated to grayscale
  },
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  image: string;
  year: number;
  client: string;
  location: string;
  value: string;
  color: string;
}

export default function Portfolio() {
  const { theme, resolvedTheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  // Filter projects based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === filter.toLowerCase()));
    }
  }, [filter]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const handleImportExportClick = (type: SetStateAction<string>) => {
    setActiveTab(type);
    setFilter(type);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative"
    >
      {/* Background pattern with grayscale aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-10 dark:opacity-15"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent font-semibold text-lg mb-4"
          >
            Our Portfolio
          </motion.span>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-gray-900 dark:text-gray-100"
          >
            Success Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
          >
            Explore our recent international trade achievements across multiple industries
          </motion.p>

          {/* Category filters with enhanced UI */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-flex rounded-xl p-1.5 bg-white dark:bg-gray-800 shadow-md">
              <button
                onClick={() => {
                  setFilter('all');
                  setActiveTab('all');
                }}
                className={`px-6 py-3.5 rounded-lg transition-all duration-300 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white text-white dark:text-gray-900 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => handleImportExportClick('import')}
                className={`px-6 py-3.5 rounded-lg transition-all duration-300 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'import'
                    ? 'bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 text-white dark:text-gray-900 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Upload size={16} />
                Import
              </button>
              <button
                onClick={() => handleImportExportClick('export')}
                className={`px-6 py-3.5 rounded-lg transition-all duration-300 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'export'
                    ? 'bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-600 text-white dark:text-gray-100 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Download size={16} />
                Export
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid with improved spacing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-white dark:bg-gray-800"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Project content overlay with improved spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500">
                  <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full mb-4`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                  {/* Details that show on hover with enhanced transitions */}
                  <div className="overflow-hidden">
                    <motion.p
                      className="text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-gray-200"
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex justify-between text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 text-gray-300"
                    >
                      <span className="flex items-center gap-2">
                        <Building size={14} />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <button
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details
                  <ExternalLink size={14} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg">
            Request Consultation
          </button>
        </div>
      </div>

      {/* Enhanced modal with grayscale theme */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Improved backdrop blur */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal content with enhanced spacing and UI */}
            <div className="min-h-screen py-10 px-4 flex items-center justify-center pointer-events-none w-full">
              <motion.div
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl pointer-events-auto my-8 max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 30 }}
              >
                {/* Enhanced close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full backdrop-blur-md transition-colors bg-white/20 hover:bg-white/30 text-white"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Hero image section with better contrast */}
                <div className="relative h-72 md:h-96">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                  {/* Title overlay with improved spacing */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${selectedProject.color} text-white text-sm font-medium rounded-full mb-4`}>
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
                  </div>
                </div>

                {/* Content section with enhanced typography */}
                <div className="p-8 md:p-10 text-gray-700 dark:text-gray-300">
                  <div className="flex flex-wrap gap-y-6 gap-x-10 mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Client</h4>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Year</h4>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project Value</h4>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{selectedProject.value}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Project Overview</h3>
                  <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Project achievements with enhanced UI */}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Key Achievements</h3>
                  <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-400 mt-2 mr-3"></span>
                      Successfully navigated complex international regulations to ensure compliance
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-400 mt-2 mr-3"></span>
                      Reduced shipping costs by 12% through optimized logistics planning
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-400 mt-2 mr-3"></span>
                      Implemented digital tracking solutions for enhanced supply chain visibility
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-400 mt-2 mr-3"></span>
                      Established long-term partnership with {selectedProject.client} for future trade opportunities
                    </li>
                  </ul>

                  {/* CTA button with grayscale color scheme */}
                  <div className="mt-10 flex justify-center">
                    <button className={`px-8 py-3.5 rounded-full bg-gradient-to-r ${selectedProject.color} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      Request Similar Service
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
