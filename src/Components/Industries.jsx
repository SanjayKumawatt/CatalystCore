import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Zap, 
  Car, 
  Wrench, 
  Monitor, 
  Signal, 
  Smartphone, 
  Sprout, 
  Stethoscope, 
  Truck,
  ArrowRight,
  Mail
} from 'lucide-react';

const industries = [
  { name: "Manufacturing", icon: <Factory size={24} /> },
  { name: "Energy & Utilities", icon: <Zap size={24} /> },
  { name: "Automotive", icon: <Car size={24} /> },
  { name: "Engineering Services", icon: <Wrench size={24} /> },
  { name: "SaaS & IT", icon: <Monitor size={24} /> },
  { name: "Telecom", icon: <Signal size={24} /> },
  { name: "Consumer Electronics", icon: <Smartphone size={24} /> },
  { name: "Agriculture Tech", icon: <Sprout size={24} /> },
  { name: "Healthcare Equipment", icon: <Stethoscope size={24} /> },
  { name: "Logistics & Supply Chain", icon: <Truck size={24} /> },
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

const Industries = () => {
  return (
    <section className="relative w-full py-24 bg-[#022c22] text-white overflow-hidden font-sans border-t border-white/5">
      
      {/* Background World Map / Network Effect (Subtle) */}
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-no-repeat bg-center bg-fixed opacity-[0.03] bg-contain pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: INDUSTRIES WE SERVE --- */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Industries <span className="text-[#d9f99d]">We Serve</span>
            </h2>
            <div className="h-1 w-20 bg-[#d9f99d] mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {industries.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 249, 157, 0.1)" }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-[#d9f99d] transition-all duration-300 group cursor-default"
              >
                <div className="mb-4 text-gray-400 group-hover:text-[#d9f99d] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base font-medium text-center text-gray-200 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- PART 2: CTA (GET STARTED) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#033a2d] border border-[#d9f99d]/30"
        >
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9f99d] blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d9f99d] blur-[100px] opacity-10 pointer-events-none" />

          <div className="px-6 py-16 md:px-12 md:py-20 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#d9f99d]/10 text-[#d9f99d] text-sm font-semibold mb-6 tracking-wider uppercase">
              Get Started
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform your organization with <br className="hidden md:block" />
              <span className="text-[#d9f99d]">intelligent automation.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              {/* Primary Button as Link */}
              <Link 
                to="/request-demo" 
                className="group flex items-center justify-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,249,157,0.4)] min-w-[200px]"
              >
                Request a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              {/* Email Link */}
              <a 
                href="mailto:contact@catalystcoreinfo.in" 
                className="group flex items-center gap-2 text-white hover:text-[#d9f99d] transition-colors duration-300 px-6 py-4 rounded-lg border border-white/20 hover:border-[#d9f99d]/50 hover:bg-white/5"
              >
                <Mail size={20} />
                <span className="text-lg font-medium">contact@catalystcoreinfo.in</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;