import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  MapPin, 
  User, // Added generic user icon
  ArrowRight 
} from 'lucide-react';
import HowItWorks from '../Components/HowItWorks';
import Industries from '../Components/Industries';

// --- DATA: Team Members (Images Removed) ---
const team = [
  {
    name: "Raghav Mendiratta",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with a passion for simplifying complexity through AI."
  },
  {
    name: "Ishaan Verma",
    role: "Co-Founder & CTO",
    bio: "Architecting the core reasoning engine behind CatalystCore."
  },
  {
    name: "Mira Kulshreshtha",
    role: "Head of AI Systems",
    bio: "Expert in multi-agent systems and deep learning architectures."
  },
  {
    name: "Sahil Deshpande",
    role: "VP of Product Engineering",
    bio: "Building scalable, user-centric engineering solutions."
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Company = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Map Effect */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-no-repeat bg-center bg-fixed opacity-[0.03] bg-contain pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9f99d]/10 text-[#d9f99d] text-sm font-medium mb-6 border border-[#d9f99d]/20">
              <MapPin size={16} />
              <span>Based in Pune, India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-[#d9f99d]">CatalystCore</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              CatalystCore Info Private Limited is an emerging IT and AI-driven software company based in Pune, India. 
              Our mission is to simplify complexity using intelligent automation and contextual understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-10 rounded-2xl relative overflow-hidden group hover:border-[#d9f99d]/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#d9f99d]/10 rounded-lg flex items-center justify-center text-[#d9f99d] mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower organizations with intelligent systems capable of understanding complex information and automating sophisticated workflows.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#033a2d] to-[#022c22] border border-white/10 p-10 rounded-2xl relative overflow-hidden group hover:border-[#d9f99d]/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#d9f99d]/10 rounded-lg flex items-center justify-center text-[#d9f99d] mb-6">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a leading global provider of AI-driven operational intelligence, defining the future of work through automation.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOUNDING TEAM (UPDATED: No Images/Socials) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Founding Team</h2>
          <div className="h-1 w-20 bg-[#d9f99d] mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/5 rounded-xl border border-white/10 hover:border-[#d9f99d]/50 transition-all duration-300 p-8 text-center hover:bg-[#033a2d]/40"
            >
              {/* Generic Avatar Icon */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#033a2d] to-[#022c22] rounded-full flex items-center justify-center text-[#d9f99d] mb-6 border border-white/10 group-hover:border-[#d9f99d]/50 transition-colors shadow-lg">
                <User size={32} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d9f99d] transition-colors">
                    {member.name}
                </h3>
                <p className="text-[#d9f99d]/80 text-sm font-medium mb-4 uppercase tracking-wide">
                    {member.role}
                </p>
                <div className="h-[1px] w-12 bg-white/10 mx-auto mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <HowItWorks/>
      </section>
      <section>
        <Industries/>
      </section>
      

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 bg-[#011c16] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join us on our journey.</h2>
          <p className="text-gray-400 mb-8">
            We are always looking for brilliant minds to join our engineering and AI teams in Pune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#d9f99d] text-[#022c22] px-8 py-3 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300"
              >
                Work With Us
                <ArrowRight size={20} />
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;