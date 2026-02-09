import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitMerge, 
  Database, 
  Users, 
  Terminal, 
  CheckCircle2, 
  AlertCircle, 
  Cpu 
} from 'lucide-react';

const features = [
  {
    icon: <GitMerge size={32} />,
    title: "Built for Complex Workflows",
    description: "While most AI tools are built for simple text queries, CatalystCore is designed for:",
    points: [
      "Multi-step system reasoning",
      "Technical interpretation",
      "Operational decision-making",
      "Deep knowledge understanding"
    ]
  },
  {
    icon: <Database size={32} />,
    title: "No Data Migration Required",
    description: "Use your existing tools. CatalystCore integrates seamlessly without forcing you to move data.",
    points: [] // Empty points for layout balance, handled in render
  },
  {
    icon: <Users size={32} />,
    title: "Human + AI Hybrid",
    description: "CatalystCore is not a replacement - it's an enhancement. It assists teams, preserves expertise, and reduces errors.",
    points: []
  }
];

const WhatMakesDifferent = () => {
  return (
    <section className="relative w-full py-24 bg-[#022c22] text-white overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,249,157,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,249,157,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What Makes <span className="text-[#d9f99d]">CatalystCore</span> Different
          </motion.h2>
        </div>

        {/* --- Top Section: 3 Feature Cards --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="bg-[#d9f99d]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#d9f99d] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {feature.points.length > 0 && (
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d9f99d]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Section: Example Use Case (Terminal Style) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#0a1512]"
        >
          {/* Terminal Header */}
          <div className="bg-[#0f241e] px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 text-xs font-mono text-gray-400 flex items-center gap-2">
              <Terminal size={12} />
              catalyst_core_terminal - v2.4.0
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-6">
            
            {/* Input Line */}
            <div className="flex flex-col md:flex-row gap-4 border-b border-white/10 pb-6">
              <div className="text-red-400 flex items-center gap-2 min-w-[100px]">
                <AlertCircle size={18} />
                <span className="font-bold">ISSUE DETECTED:</span>
              </div>
              <div className="text-white">
                "Compressor Model BX-44 shows pressure drop and Error Code E112."
              </div>
            </div>

            {/* Processing Steps */}
            <div className="space-y-2 pl-4 border-l-2 border-dashed border-white/10 py-2">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">System Processing</div>
              {[
                "Analyzes the error code...",
                "Checks historical service logs...",
                "Reads relevant troubleshooting document...",
                "Locates pressure sensor schematic...",
                "Verifies part inventory..."
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-[#d9f99d]/70">
                  <Cpu size={14} className="animate-pulse" />
                  <span>{step}</span>
                  <span className="text-[#d9f99d] ml-auto text-xs">[OK]</span>
                </div>
              ))}
            </div>

            {/* Final Output */}
            <div className="bg-[#d9f99d]/10 border border-[#d9f99d]/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-[#d9f99d] font-bold mb-2">
                <CheckCircle2 size={18} />
                <span>RESOLUTION GENERATED:</span>
              </div>
              <p className="text-white leading-relaxed">
                “A probable cause is faulty valve alignment. <span className="text-[#d9f99d]">Calibrate Valve V12 using Workflow 6B.</span> If unresolved, replace Pressure Sensor PS-22. <span className="text-gray-400 text-xs block mt-1">(Inventory check: 4 units available)</span>”
              </p>
            </div>

            {/* Footer Text */}
            <div className="text-center pt-2">
              <p className="text-gray-500 text-xs md:text-sm italic">
                // This is the power of intelligent automation.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatMakesDifferent;