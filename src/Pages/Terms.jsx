import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d9f99d] transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-3 text-[#d9f99d] mb-4">
            <Scale size={32} />
            <span className="font-bold tracking-wider uppercase text-sm">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 text-sm">
            <span><strong>Effective Date:</strong> 2024</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Company:</strong> CatalystCore Info Private Limited</span>
          </div>
        </motion.div>
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-300 leading-relaxed"
        >

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">1</span>
              Acceptance of Terms
            </h2>
            <p className="pl-11">
              By accessing or using our website, you agree to comply with these Terms & Conditions. If you disagree with any part, please discontinue use.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">2</span>
              Definitions
            </h2>
            <ul className="list-disc pl-16 space-y-2">
              <li><strong>“Website”</strong> refers to catalystcoreinfo.in</li>
              <li><strong>“Company”, “We”, “Us”</strong> refers to CatalystCore Info Private Limited</li>
              <li><strong>“User”, “You”</strong> refers to anyone accessing the website</li>
            </ul>
          </section>

          {/* 3. Website Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">3</span>
              Website Use
            </h2>
            <p className="mb-3 pl-11">You agree not to:</p>
            <ul className="list-disc pl-16 space-y-1">
              <li>Misuse the site</li>
              <li>Attempt unauthorized access</li>
              <li>Copy or redistribute content</li>
              <li>Use site for unlawful activities</li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">4</span>
              Intellectual Property
            </h2>
            <p className="pl-11">
              All content, text, logos, designs, graphics, and software on catalystcoreinfo.in are the intellectual property of CatalystCore Info Private Limited. Unauthorized use is prohibited.
            </p>
          </section>

          {/* 5. User Submissions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">5</span>
              User Submissions
            </h2>
            <p className="mb-3 pl-11">If you submit information or documents through our forms, you grant us permission to:</p>
            <ul className="list-disc pl-16 space-y-1 mb-4">
              <li>Review</li>
              <li>Analyze</li>
              <li>Contact you regarding your inquiry</li>
            </ul>
            <p className="pl-11 text-[#d9f99d]">We will not publish or share your data without your consent.</p>
          </section>

          {/* 6. Availability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">6</span>
              Availability
            </h2>
            <p className="mb-3 pl-11">We reserve the right to:</p>
            <ul className="list-disc pl-16 space-y-1 mb-4">
              <li>Modify functionality</li>
              <li>Restrict access</li>
              <li>Suspend the website for maintenance</li>
            </ul>
            <p className="pl-11">without prior notice.</p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">7</span>
              Limitation of Liability
            </h2>
            <p className="mb-3 pl-11">We are not liable for:</p>
            <ul className="list-disc pl-16 space-y-1">
              <li>Loss of business or revenue</li>
              <li>Data inaccuracies</li>
              <li>Service interruptions</li>
              <li>Third-party actions</li>
            </ul>
          </section>

          {/* 8. Links to Other Websites */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">8</span>
              Links to Other Websites
            </h2>
            <p className="pl-11">
              We are not responsible for content on external websites linked through our platform.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">9</span>
              Governing Law
            </h2>
            <p className="pl-11">
              These terms are governed by the laws of India.
            </p>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">10</span>
              Changes to Terms
            </h2>
            <p className="pl-11">
              We may revise these Terms at any time. Continued use indicates acceptance of updated terms.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">11</span>
              Contact Information
            </h2>
            <div className="pl-11 bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-2">For legal concerns:</p>
              <a href="mailto:legal@catalystcoreinfo.in" className="text-[#d9f99d] hover:underline font-bold text-lg flex items-center gap-2">
                legal@catalystcoreinfo.in
              </a>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;