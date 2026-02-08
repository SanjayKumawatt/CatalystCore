import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

import logo from "../assets/logo.png"


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#022c22] text-white font-sans border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top Section: 3 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex  gap-1 mb-6">
              <img src={logo} className='h-13' alt="" />
              <span className="text-[#d9f99d] mt-2 text-2xl font-bold tracking-tight">
                CATALYSTCORE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming operational complexity into clarity with AI-driven automation and contextual reasoning.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/solution" className="hover:text-[#d9f99d] transition-colors">Solution</Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-[#d9f99d] transition-colors">Platform</Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-[#d9f99d] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-[#d9f99d] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#d9f99d] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 & 4 (Combined): Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg text-[#d9f99d] group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:contact@catalystcoreinfo.in" className="text-gray-300 hover:text-white transition-colors">
                    contact@catalystcoreinfo.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg text-[#d9f99d] group-hover:bg-[#d9f99d] group-hover:text-[#022c22] transition-colors duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-gray-300 leading-relaxed max-w-sm">
                    Off 111, Mahavir Arcade, Gp 68, Thaermax Chowk, Akurdi, Pune, Pune City, Maharashtra, India, 411035.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright & Legal Links --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} CatalystCore Info Pvt Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#d9f99d] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-[#d9f99d] transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;