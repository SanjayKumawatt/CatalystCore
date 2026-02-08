import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Workflow, 
  Cpu, 
  Zap, 
  Users, 
  Timer, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} />,
    text: "Understands your documents",
    description: "Digests complex technical manuals and PDFs."
  },
  {
    icon: <Workflow size={24} />,
    text: "Interprets diagrams & workflows",
    description: "Reads visual data to map operational logic."
  },
  {
    icon: <Cpu size={24} />,
    text: "Automates complex tasks",
    description: "Turns manual processes into autonomous actions."
  },
  {
    icon: <Zap size={24} />,
    text: "Provides real-time decision support",
    description: "Instant insights when you need them most."
  },
  {
    icon: <Users size={24} />,
    text: "Assists employees and customers",
    description: "24/7 intelligent support for your stakeholders."
  },
  {
    icon: <Timer size={24} />,
    text: "Improves resolution speed",
    description: "Drastically reduces time-to-resolve for incidents."
  },
  {
    icon: <Eye size={24} />,
    text: "Enhances operational visibility",
    description: "See exactly what's happening across your systems."
  }
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const WhyCatalystCore = () => {
  return (
    <section className="relative w-full py-24 bg-[#022c22] text-white overflow-hidden font-sans">
      
      {/* Background Subtle Gradient for separation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#022c22] to-[#011c16] pointer-events-none z-0" />
      
      {/* Decorative Line */}
      <div className="absolute left-0 top-24 w-1 h-32 bg-gradient-to-b from-transparent via-[#d9f99d] to-transparent opacity-50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Top Content: The Problem --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Why <span className="text-[#d9f99d]">CatalystCore</span> Exists
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              In most organizations, valuable knowledge is locked inside long documents, scattered files, legacy systems, and the minds of experienced employees.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              As teams scale, workflows become harder to maintain, and new employees struggle to access the information they need to perform tasks efficiently.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative"
          >
            <div className="absolute -top-4 -right-4 bg-[#d9f99d] text-[#022c22] p-3 rounded-full shadow-lg">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              CatalystCore was built to solve this.
            </h3>
            <p className="text-gray-300">
              We transform operational knowledge into an intelligent software layer that bridges the gap between static data and active resolution.
            </p>
          </motion.div>
        </div>

        {/* --- Middle Content: The Solution (Feature Grid) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgba(217, 249, 157, 0.5)' }}
              className={`p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group ${index === 6 ? 'md:col-span-2 lg:col-span-2 xl:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#d9f99d]/10 flex items-center justify-center text-[#d9f99d] mb-4 group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {feature.text}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Content: Closing Statement --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-[#d9f99d]/50 to-transparent">
            <div className="px-8 py-3 bg-[#022c22] rounded-full border border-white/10">
              <p className="text-lg md:text-xl font-medium text-[#d9f99d]">
                We combine engineering, AI, and automation to help businesses operate at their peak.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyCatalystCore;