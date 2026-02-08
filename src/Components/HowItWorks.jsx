import React from 'react';
import { motion } from 'framer-motion';
import { 
  ScanSearch, 
  BrainCircuit, 
  Bot, 
  Zap, 
  Check 
} from 'lucide-react';

const pillars = [
  {
    id: "01",
    title: "Understanding",
    icon: <ScanSearch size={32} />,
    subtext: "Our system reads and interprets:",
    items: [
      "Manuals & technical documents",
      "Diagrams & schematics",
      "Standard operating procedures",
      "Internal knowledge bases",
      "Maintenance workflows",
      "Historical issue logs",
      "Equipment specifications",
      "ERP/CRM data"
    ],
    footer: "It extracts structure, meaning, dependencies, and actionable insight."
  },
  {
    id: "02",
    title: "Reasoning",
    icon: <BrainCircuit size={32} />,
    subtext: "CatalystCore performs contextual reasoning to answer:",
    items: [
      "“What caused this issue?”",
      "“Which part needs replacement?”",
      "“What steps should a technician follow?”",
      "“How can this workflow be optimized?”",
      "“How do these systems interact?”",
      "“What information is missing?”"
    ],
    footer: "It does not guess — it analyzes."
  },
  {
    id: "03",
    title: "Automation",
    icon: <Bot size={32} />,
    subtext: "Automates complex tasks using multi-agent technology:",
    items: [
      "Data lookup",
      "Document retrieval",
      "Troubleshooting workflows",
      "Policy validation",
      "Inventory checks",
      "Ticket enrichment",
      "Knowledge suggestions",
      "Real-time guidance"
    ],
    footer: "Everything works behind the scenes to deliver a complete solution."
  },
  {
    id: "04",
    title: "Action",
    icon: <Zap size={32} />,
    subtext: "CatalystCore generates:",
    items: [
      "Step-by-step resolutions",
      "Real-time recommendations",
      "Guided workflows",
      "Automated responses",
      "Insight dashboards",
      "Task triggers",
      "Workflow orchestration"
    ],
    footer: "Your teams operate faster. Your customers feel supported. Your business grows."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const HowItWorks = () => {
  return (
    <section className="relative w-full py-24 bg-[#022c22] text-white overflow-hidden font-sans">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#022c22] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How It Works: <span className="text-[#d9f99d]">Four Pillars</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#d9f99d] mx-auto rounded-full" 
          />
        </div>

        {/* --- Pillars Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col h-full bg-[#033a2d]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d9f99d]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-2"
            >
              {/* Top Border Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d9f99d] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 flex flex-col flex-grow">
                {/* Header: Number & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-[#d9f99d]/20 transition-colors">
                    {pillar.id}
                  </span>
                  <div className="p-3 bg-[#d9f99d]/10 rounded-xl text-[#d9f99d] group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d9f99d] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 italic border-l-2 border-[#d9f99d]/30 pl-3">
                  {pillar.subtext}
                </p>

                {/* List Items */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-[#d9f99d] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Highlight */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-[#d9f99d] font-medium text-sm leading-relaxed">
                    {pillar.footer}
                  </p>
                </div>
              </div>

              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-[#d9f99d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;