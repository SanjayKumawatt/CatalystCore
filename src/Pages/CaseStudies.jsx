import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Zap, 
  BarChart3, 
  TrendingDown, 
  TrendingUp, 
  Timer, 
  Search,
  ArrowRight,
  Target
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: "NovaMach Industries",
    industry: "Heavy Manufacturing",
    icon: <Factory size={32} />,
    challenge: "Slow resolution times for complex machinery issues.",
    outcome: "Reduced issue resolution time by 47% and cut manual document lookup by 70%.",
    stats: [
      { value: "47%", label: "Faster Resolution", icon: <Timer size={16} /> },
      { value: "70%", label: "Less Lookup Time", icon: <Search size={16} /> }
    ]
  },
  {
    id: 2,
    company: "HelixPower Systems",
    industry: "Energy & Utilities",
    icon: <Zap size={32} />,
    challenge: "Technicians needed faster access to technical guidance.",
    outcome: "Field team productivity improved by 42% with step-by-step automation.",
    stats: [
      { value: "42%", label: "Productivity Boost", icon: <TrendingUp size={16} /> }
    ]
  },
  {
    id: 3,
    company: "BlueArc Analytics",
    industry: "Data Services",
    icon: <BarChart3 size={32} />,
    challenge: "Scattered documentation across systems causing operational delays.",
    outcome: "38% reduction in operational delays using CatalystCore’s knowledge automation tools.",
    stats: [
      { value: "38%", label: "Fewer Delays", icon: <TrendingDown size={16} /> }
    ]
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
    transition: { duration: 0.6 }
  }
};

const References = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[#d9f99d] blur-[200px] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9f99d]/10 text-[#d9f99d] text-sm font-medium mb-6 border border-[#d9f99d]/20">
              <Target size={16} />
              <span>Real World Impact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Case Studies & <br />
              <span className="text-[#d9f99d]">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how industry leaders are transforming their operations with CatalystCore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d9f99d]/50 transition-all duration-300 group hover:bg-[#033a2d]/40"
            >
              {/* Card Header: Company Info */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/10 rounded-xl text-[#d9f99d] group-hover:scale-110 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-[#d9f99d] transition-colors">
                  {study.company}
                </h2>
              </div>

              {/* Card Body: Challenge & Outcome */}
              <div className="p-8 space-y-6 flex-grow">
                {/* Challenge Section */}
                <div className="relative pl-4 border-l-2 border-red-500/30">
                  <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Outcome Section */}
                <div className="relative pl-4 border-l-2 border-[#d9f99d]/50">
                  <h3 className="text-xs font-bold text-[#d9f99d] uppercase tracking-wider mb-2">The Outcome</h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">
                    {study.outcome}
                  </p>
                </div>
              </div>

              {/* Card Footer: Key Stats (Big Numbers) */}
              <div className="bg-[#011c16]/50 border-t border-white/5 p-6 mt-auto">
                <div className="grid grid-cols-2 gap-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className={`${study.stats.length === 1 ? 'col-span-2' : ''}`}>
                      <div className="flex items-center gap-2 text-[#d9f99d] mb-1">
                        {stat.icon}
                        <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                      </div>
                      <p className="text-xs text-gray-500 uppercase font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-[#033a2d] to-[#022c22] rounded-3xl border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be our next success story.
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl">
            Join the organizations that are transforming complexity into clarity with CatalystCore.
          </p>
          <Link 
            to="/request-demo"
            className="inline-flex items-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-3 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,249,157,0.3)]"
          >
            Start Your Transformation
            <ArrowRight size={20} />
          </Link>
        </motion.div>

      </section>

    </div>
  );
};

export default References;