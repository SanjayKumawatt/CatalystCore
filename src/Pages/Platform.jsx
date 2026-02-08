import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  ScanEye, 
  Workflow, 
  Network, 
  BarChart2, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Database,
  Cpu
} from 'lucide-react';

// --- DATA: Platform Sections ---
const features = [
  {
    id: "01",
    title: "CoreAI Reasoning Engine",
    subtitle: "The heart of CatalystCore.",
    description: "Built to interpret complex documents and execute multi-step reasoning, CoreAI understands written content the way a domain expert would. It connects information across various sources to find patterns, solutions, and decision pathways.",
    listTitle: "Key Features",
    listItems: [
      "Deep contextual comprehension",
      "Multi-step logical reasoning",
      "Technical workflow interpretation",
      "Data dependency mapping",
      "Issue extraction & classification",
      "Advanced knowledge alignment"
    ],
    icon: <BrainCircuit size={40} />,
    color: "from-green-400 to-emerald-600"
  },
  {
    id: "02",
    title: "VisionTech Interpreter",
    subtitle: "AI that understands diagrams, schematics, component layouts, and structural drawings.",
    description: "Perfect for engineering, manufacturing, and field service. It bridges the gap between visual data and textual knowledge.",
    listTitle: "Capabilities",
    listItems: [
      "Recognizes components",
      "Maps relationships",
      "Reads structured diagrams",
      "Connects diagram info with documents",
      "Identifies missing data",
      "Suggests corrections"
    ],
    icon: <ScanEye size={40} />,
    color: "from-blue-400 to-cyan-600"
  },
  {
    id: "03",
    title: "FlowOps Automation",
    subtitle: "Design, deploy, and monitor intelligent workflows without writing code.",
    description: "Everything works out-of-the-box with real-time connectivity.",
    listTitle: "What You Can Build",
    listItems: [
      "Digital Troubleshooting Assistants",
      "Technician Guidance Systems",
      "Automated Service Desk Processes",
      "Inventory Validation Agents",
      "Customer Support Bots",
      "Workflow Orchestration Systems"
    ],
    icon: <Workflow size={40} />,
    color: "from-purple-400 to-pink-600"
  },
  {
    id: "04",
    title: "DataLink Integrator",
    subtitle: "Connect CatalystCore to your existing tools and databases.",
    description: "Your tools stay the same. Your intelligence improves.",
    listTitle: "Supported Integrations",
    listItems: [
      "CRM (Zoho, HubSpot, Freshworks, etc.)",
      "ERP systems",
      "Databases",
      "Ticketing systems",
      "File repositories",
      "Document management tools",
      "Internal APIs"
    ],
    icon: <Network size={40} />,
    color: "from-orange-400 to-red-600"
  },
  {
    id: "05",
    title: "InsightBoard",
    subtitle: "A real-time analytics dashboard offering actionable intelligence.",
    description: "Identify improvement opportunities across teams with deep operational insights.",
    listTitle: "Offering",
    listItems: [
      "Workflow performance",
      "Repetitive issue patterns",
      "Knowledge gaps",
      "Resolution cycles",
      "Bottleneck detection",
      "Document quality insights",
      "Optimization recommendations"
    ],
    icon: <BarChart2 size={40} />,
    color: "from-yellow-400 to-amber-600"
  }
];

const summaryPoints = [
  "Process Efficiency",
  "Faster Resolution",
  "Accurate Guidance",
  "Operational Improvement",
  "Knowledge Scalability",
  "Automated Decision Support"
];

const Platform = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#134e4a] via-[#022c22] to-[#022c22] z-0" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#d9f99d] blur-[150px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9f99d]/10 text-[#d9f99d] text-sm font-medium mb-6 border border-[#d9f99d]/20">
              <Layers size={16} />
              <span>Unified Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              CatalystCore <br />
              <span className="text-[#d9f99d]">Intelligence Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A unified platform that understands your knowledge, powers your workflows, and automates your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE SECTIONS (ZIG-ZAG LAYOUT) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24 md:space-y-32 relative z-10">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* TEXT CONTENT */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-6xl font-bold text-white/5 font-mono absolute -ml-4 -mt-4 z-0 pointer-events-none select-none">
                  {feature.id}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9f99d] relative z-10 shadow-lg backdrop-blur-sm">
                  {feature.icon}
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                {feature.title}
              </h2>
              <p className="text-lg font-medium text-[#d9f99d] italic relative z-10">
                {feature.subtitle}
              </p>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* LIST BOX */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6 hover:border-[#d9f99d]/30 transition-colors duration-300">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 inline-block">
                  {feature.listTitle}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {feature.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d9f99d] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VISUAL / GRAPHIC (Placeholder) */}
            <div className="flex-1 w-full">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex items-center justify-center group">
                {/* Decorative Background Elements inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                
                {/* Center Icon Graphic with Glow */}
                <div className="relative z-10 text-white/80 group-hover:scale-110 transition-transform duration-500">
                   {/* Create a large abstract representation of the icon */}
                   {React.cloneElement(feature.icon, { size: 120, strokeWidth: 1, className: "opacity-50 text-[#d9f99d]" })}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#d9f99d]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                    <span>System Status</span>
                    <span className="text-[#d9f99d]">Active</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* --- PLATFORM SUMMARY --- */}
      <section className="relative py-24 mt-12 bg-[#011c16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Summary</h2>
            <p className="text-gray-400">CatalystCore delivers tangible business impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summaryPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#022c22] border border-white/10 p-6 rounded-xl flex items-center gap-4 shadow-lg hover:border-[#d9f99d]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#d9f99d]/10 flex items-center justify-center text-[#d9f99d] group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-lg font-medium text-white">{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Link 
              to="/request-demo"
              className="inline-flex items-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,249,157,0.3)]"
            >
              Get Started with CatalystCore
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Platform;