import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Wrench, 
  MapPin, 
  Settings, 
  Factory, 
  Cloud, 
  Briefcase, 
  BookOpen 
} from 'lucide-react';

const teams = [
  { name: "Customer Support", icon: <Headphones size={24} /> },
  { name: "Technical Support", icon: <Wrench size={24} /> },
  { name: "Field Service", icon: <MapPin size={24} /> },
  { name: "Operations & Maintenance", icon: <Settings size={24} /> },
  { name: "Manufacturing", icon: <Factory size={24} /> },
  { name: "IT & Cloud Management", icon: <Cloud size={24} /> },
  { name: "Enterprise Workflows", icon: <Briefcase size={24} /> },
  { name: "Internal Documentation Teams", icon: <BookOpen size={24} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const DigitalExpert = () => {
  return (
    <section className="relative w-full py-24 bg-[#022c22] text-white overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f4c3a]/30 via-[#022c22] to-[#022c22] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            A <span className="text-[#d9f99d]">Digital Expert</span> for Every Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            CatalystCore acts as a digital system of intelligence that serves diverse operational needs across your organization.
          </motion.p>
        </div>

        {/* --- Teams Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {teams.map((team, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="group relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-[#d9f99d]/50"
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d9f99d]/10 text-[#d9f99d] group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors duration-300">
                {team.icon}
              </div>
              
              {/* Team Name */}
              <h3 className="text-lg font-semibold text-white group-hover:text-[#d9f99d] transition-colors">
                {team.name}
              </h3>
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-transparent group-hover:border-r-[#d9f99d] transition-all duration-300 opacity-50" />
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Highlight Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0f4c3a] to-[#022c22] border border-white/10 p-8 md:p-12 text-center shadow-2xl"
        >
          {/* Background pattern inside the box */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,249,157,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              "Whether you want to automate resolutions, guide technicians, reduce response times, or understand operational patterns..."
            </h3>
            <div className="h-1 w-24 bg-[#d9f99d] mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl font-bold text-[#d9f99d]">
              - CatalystCore becomes your always-active digital specialist.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalExpert;