import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from "../assets/logo.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: 'Company', path: '/company' },
    { name: 'Solution', path: '/solution' },
    { name: 'Platform', path: '/platform' },
    { name: 'Case Studies', path: '/case' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="relative w-full bg-[#022c22] text-white overflow-hidden font-sans">
      {/* Right Side Gradient Overlay (Visual Effect from Image) */}
      <div className="absolute top-0 right-0 h-full w-[40%] bg-gradient-to-l from-[#3f7a6e]/40 to-transparent -skew-x-12 origin-bottom-right pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {/* Logo text color matched to the lime green in image */}
              <img src={logo} className='h-13' alt="" />
              <span className="text-[#d9f99d] mt-2 text-2xl font-bold tracking-tight">
                CATALYSTCORE
              </span>
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-[#d9f99d] transition-colors duration-200 text-[15px] font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            
            
            <Link to={"/get-in-touch"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/80 px-6 py-2 rounded-lg text-white font-medium hover:bg-white hover:text-[#022c22] transition-all duration-300"
            >
Get In Touch            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#d9f99d] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (AnimatePresence for smooth slide in/out) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#022c22] border-t border-white/10 relative z-20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 hover:text-[#d9f99d]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col space-y-4 px-3">
                <div className="flex items-center gap-2 text-white">
                  <Globe size={20} />
                  <span>Global Site</span>
                </div>
                <button className="w-full border border-white/80 px-4 py-2 rounded-lg text-white font-medium hover:bg-white hover:text-[#022c22] transition-all text-center">
                  Request a demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;