import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Globe, 
  Send, 
  CheckCircle, 
  Loader2 
} from 'lucide-react';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '', // Specific field to know user intent
    message: ''
  });

  // Submission Status: 'idle' | 'submitting' | 'success'
  const [status, setStatus] = useState('idle');

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate Network Request (2 seconds delay)
    setTimeout(() => {
      setStatus('success');
      // Reset form (Optional)
      setFormData({ name: '', email: '', purpose: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HERO HEADER --- */}
      <section className="pt-32 pb-10 px-4 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d9f99d] blur-[180px] opacity-[0.08] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Get in <span className="text-[#d9f99d]">Touch</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you have a question about our platform, need a demo, or want to explore partnership opportunities, our team is ready to answer all your questions.
        </p>
      </section>

      {/* --- MAIN CONTENT (Grid Layout) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Info Cards */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#d9f99d]/10 rounded-lg text-[#d9f99d] mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Office Address</h3>
                  <p className="text-gray-300 leading-relaxed">
                    CatalystCore Info Private Limited<br />
                    Off 111, Mahavir Arcade, GP 68,<br />
                    Thermax Chowk, Akurdi,<br />
                    Pune City, Maharashtra, India<br />
                    <strong>PIN: 411035</strong>
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10" />

              {/* Email & Web */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#d9f99d]/10 rounded-lg text-[#d9f99d] mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Contact Channels</h3>
                  <p className="text-gray-300 mb-1">
                    <span className="text-gray-500 text-sm uppercase tracking-wider mr-2">Email:</span>
                    <a href="mailto:contact@catalystcoreinfo.in" className="hover:text-[#d9f99d] transition-colors">
                      contact@catalystcoreinfo.in
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-gray-500 text-sm uppercase tracking-wider mr-2">Web:</span>
                    <a href="https://www.catalystcoreinfo.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9f99d] transition-colors">
                      www.catalystcoreinfo.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10" />

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#d9f99d]/10 rounded-lg text-[#d9f99d] mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Business Hours</h3>
                  <p className="text-gray-300">
                    Mon – Fri: 10 AM – 6 PM IST
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Closed on Weekends
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#033a2d]/30 border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Conditional Rendering: Form vs Success Message */}
            <AnimatePresence mode="wait">
              
              {status === 'success' ? (
                /* --- SUCCESS MESSAGE STATE --- */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#d9f99d] rounded-full flex items-center justify-center text-[#022c22] mb-6 shadow-[0_0_30px_rgba(217,249,157,0.4)]">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-8 max-w-xs">
                    Thank you for reaching out. Our team will review your request and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-[#d9f99d] font-medium hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>

              ) : (
                /* --- FORM STATE --- */
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 relative z-10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#022c22] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d9f99d] focus:ring-1 focus:ring-[#d9f99d] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-[#022c22] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d9f99d] focus:ring-1 focus:ring-[#d9f99d] transition-all"
                    />
                  </div>

                  {/* PURPOSE DROPDOWN (This is the field you asked for) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Purpose of Inquiry</label>
                    <div className="relative">
                      <select 
                        name="purpose"
                        required
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full bg-[#022c22] border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#d9f99d] focus:ring-1 focus:ring-[#d9f99d] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-500">Select a topic...</option>
                        <option value="Demo Request">Request a Demo</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership / Collaboration</option>
                        <option value="Careers">Careers / Jobs</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      {/* Custom Arrow Icon for Select */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full bg-[#022c22] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d9f99d] focus:ring-1 focus:ring-[#d9f99d] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#d9f99d] text-[#022c22] font-bold py-4 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;