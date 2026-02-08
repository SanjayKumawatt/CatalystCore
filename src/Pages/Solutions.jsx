import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MonitorCheck, 
  MapPin, 
  Headphones, 
  Lightbulb, 
  GitBranch, 
  BookOpen,
  Check,
  ArrowRight 
} from 'lucide-react';

const solutions = [
  {
    title: "Technical Support Automation",
    description: "Instant, accurate resolutions for technical queries.",
    icon: <MonitorCheck size={32} />,
    features: [
      "Automated troubleshooting",
      "Document-based reasoning",
      "Issue classification",
      "Real-time recommendations",
      "Ticket enrichment"
    ],
    footer: "Reduce escalations and speed up response times."
  },
  {
    title: "Field Service Intelligence",
    description: "Empower technicians with guided workflows.",
    icon: <MapPin size={32} />,
    features: [
      "Guided workflows",
      "Step-by-step resolutions",
      "Diagram interpretation",
      "Automated documentation",
      "Part identification",
      "Historical issue context"
    ],
    footer: "Technicians work faster, with fewer errors."
  },
  {
    title: "Customer Support Automation",
    description: "Deliver world-class support without increasing headcount.",
    icon: <Headphones size={32} />,
    features: [
      "Intelligent chat & email automation",
      "Self-service assistance",
      "Context-aware suggestions",
      "Smart routing",
      "Post-resolution reporting"
    ],
    footer: "24/7 availability with consistent quality."
  },
  {
    title: "Operational Decision Support",
    description: "Use AI to make smarter choices.",
    icon: <Lightbulb size={32} />,
    features: [
      "Process optimization",
      "Predictive insights",
      "Knowledge mapping",
      "Real-time recommendations",
      "Problem detection"
    ],
    footer: "Data-driven decisions, faster than ever."
  },
  {
    title: "Workflow Automation",
    description: "CatalystCore automates complex manual tasks.",
    icon: <GitBranch size={32} />,
    features: [
      "Report generation",
      "Document lookup",
      "Policy validation",
      "Inventory checks",
      "Escalation logic",
      "Task handoffs"
    ],
    footer: "Streamline operations and reduce bottlenecks."
  },
  {
    title: "Knowledge Retention",
    description: "Preserve critical expertise and make it accessible.",
    icon: <BookOpen size={32} />,
    features: [
      "AI-powered document ingestion",
      "Knowledge structuring",
      "Semantic search",
      "Auto-summarization",
      "Companion guidance systems"
    ],
    footer: "Your organizational brain, digitized."
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Solution = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#033a2d] to-[#022c22] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Solutions <span className="text-[#d9f99d]">for Every Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Empower your entire organization with intelligence that scales.
          </motion.p>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-[#033a2d]/60 hover:border-[#d9f99d]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 bg-[#d9f99d]/10 rounded-xl text-[#d9f99d] group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-white/5 font-mono group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d9f99d] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed min-h-[50px]">
                {item.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-[#d9f99d] mt-0.5 flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Card Footer (Highlight) */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <p className="text-sm font-medium text-[#d9f99d] italic">
                  "{item.footer}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[1px] rounded-lg bg-gradient-to-r from-transparent via-[#d9f99d]/50 to-transparent">
            <div className="bg-[#022c22] rounded-lg p-8 md:p-12 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your operations?</h2>
              <Link 
                to="/request-demo"
                className="inline-flex items-center justify-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-3 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,249,157,0.3)]"
              >
                Start Your Transformation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
};

export default Solution;