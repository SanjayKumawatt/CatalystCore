import React from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden font-sans">
      
      {/* --- 1. BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3870&auto=format&fit=crop" 
          alt="Background Technology" 
          className="w-full h-full object-cover"
        />
        
        {/* --- 2. DARK OVERLAY --- */}
        <div className="absolute inset-0 bg-[#022c22]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22] via-[#022c22]/80 to-[#022c22]/60"></div>
      </div>

      {/* --- 3. DECORATIVE EFFECTS --- */}
      <div className="absolute top-0 right-[-10%] h-full w-[50%] bg-gradient-to-l from-[#3f7a6e]/40 to-transparent -skew-x-12 blur-2xl pointer-events-none z-0" />

      {/* --- 4. CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
        
        <div className="max-w-4xl">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-white drop-shadow-lg"
          >
            <span className="text-[#d9f99d]">Intelligence</span> That Understands Your Operations.{' '}
            <span className="block mt-2">
              <span className="text-[#d9f99d]">Automation</span> That Elevates Them.
            </span>
          </motion.h1>

          {/* Body Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 space-y-6 leading-relaxed mb-10 drop-shadow-md"
          >
            <p>
              <strong className="text-white">CatalystCore Info Private Limited</strong> builds next-generation software powered by AI-driven automation and contextual reasoning.
            </p>
            <p>
              Our technology understands technical documentation, operational workflows, organizational knowledge, and real-time system data — enabling businesses to work smarter, faster, and with more reliability.
            </p>
            
            {/* Styled Quote Box */}
            <div className="border-l-4 border-[#d9f99d] pl-6 py-2 bg-black/20 backdrop-blur-sm rounded-r-lg">
              <p className="italic text-white">
                We help organizations transform complexity into clarity, decisions into actions, and information into automation.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Now using Link */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary Button as Link */}
            <Link 
              to="/request-demo" 
              className="group flex items-center justify-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,249,157,0.4)]"
            >
              Request a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            {/* Secondary Button as Link */}
            <Link 
              to="/platform" 
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 hover:border-white transition-all duration-300"
            >
              <PlayCircle className="text-[#d9f99d]" size={20} />
              Explore Platform
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;