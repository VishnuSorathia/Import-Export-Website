"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define a more robust projects array with additional fields
const projects = [
  {
    id: 1,
    title: "Automotive Parts to USA",
    category: "Export",
    description: "Facilitated export of precision-engineered automotive components to leading manufacturers in the United States",
    image: "/projects/automotive.jpg",
    year: 2024,
    client: "AutoTech Industries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Electronics from UAE",
    category: "Import",
    description: "Managed import logistics for consumer electronics from Dubai tech hub to Indian retail chains",
    image: "/projects/electronics.jpg",
    year: 2023,
    client: "DigiWorld Solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Textiles to UK",
    category: "Export",
    description: "Executed comprehensive export strategy for premium textiles to luxury retailers across the United Kingdom",
    image: "/projects/textiles.jpg",
    year: 2023,
    client: "FabricElite Ltd.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Medical Supplies to Germany",
    category: "Export",
    description: "Streamlined export processes for critical medical equipment adhering to strict EU regulations",
    image: "/projects/medical.jpg",
    year: 2024,
    client: "MediGlobal GmbH",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 5,
    title: "Agriculture Products from Brazil",
    category: "Import",
    description: "Established import channels for organic produce with complete supply chain transparency",
    image: "/projects/agriculture.jpg",
    year: 2023,
    client: "NatureFarms Co.",
    color: "from-green-500 to-lime-500"
  },
  {
    id: 6,
    title: "Industrial Equipment to Singapore",
    category: "Export",
    description: "Delivered turnkey export solutions for heavy machinery with specialized handling requirements",
    image: "/projects/industrial.jpg",
    year: 2024,
    client: "SingTech Industries",
    color: "from-red-500 to-rose-500"
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Filter projects based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === filter.toLowerCase()));
    }
  }, [filter]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent font-semibold text-lg mb-4"
          >
            Our Portfolio
          </motion.span>
          
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6"
          >
                             Global Trade & Co. Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Explore our recent international trade achievements across multiple industries
          </motion.p>
          
          {/* Category filters - Apple-style pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('import')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                filter === 'import' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/25' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm'
              }`}
            >
              Import
            </button>
            <button 
              onClick={() => setFilter('export')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                filter === 'export' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/25' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm'
              }`}
            >
              Export
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Project content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full mb-3`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  
                  {/* Hidden details that appear on hover */}
                  <div className="overflow-hidden">
                    <motion.p 
                      className="text-gray-200 text-sm mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="flex justify-between text-sm text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span>Client: {project.client}</span>
                      <span>Year: {project.year}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}