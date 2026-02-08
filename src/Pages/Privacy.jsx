import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <Shield size={32} />
            <span className="font-bold tracking-wider uppercase text-sm">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">1</span>
              Introduction
            </h2>
            <p>
              CatalystCore Info Private Limited (“Company”, “We”, “Us”, “Our”) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, disclose, and protect your data when you use our website <a href="https://catalystcoreinfo.in" className="text-[#d9f99d] hover:underline">https://catalystcoreinfo.in</a> or interact with our products and services. By using our website, you consent to the terms outlined in this Privacy Policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">2</span>
              Information We Collect
            </h2>
            
            <div className="mb-6 pl-11">
              <h3 className="text-lg font-bold text-white mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Inquiry details</li>
                <li>Uploaded documents (if any)</li>
                <li>Demo request information</li>
              </ul>
            </div>

            <div className="mb-6 pl-11">
              <h3 className="text-lg font-bold text-white mb-2">2.2 Information Automatically Collected</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Referring websites</li>
                <li>Cookies and usage analytics</li>
              </ul>
            </div>

            <div className="pl-11">
              <h3 className="text-lg font-bold text-white mb-2">2.3 Business Information (For Clients)</h3>
              <p className="mb-2">If you engage with us for demos or services, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Organizational documents</li>
                <li>Workflow descriptions</li>
                <li>Technical files</li>
                <li>System information (Only if voluntarily shared)</li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">3</span>
              How We Use Your Information
            </h2>
            <p className="mb-3">We use collected data to:</p>
            <ul className="list-disc pl-11 space-y-1 mb-4">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries</li>
              <li>Schedule and conduct demos</li>
              <li>Analyze website performance</li>
              <li>Communicate updates</li>
              <li>Maintain security</li>
              <li>Improve user experience</li>
              <li>Develop new features and products</li>
            </ul>
            <p className="pl-11 text-[#d9f99d]">We do not sell your data to third parties.</p>
          </section>

          {/* 4. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">4</span>
              Sharing of Information
            </h2>
            <p className="mb-3">We may share data with:</p>
            <ul className="list-disc pl-11 space-y-1 mb-4">
              <li>Service providers assisting our operations</li>
              <li>Legal authorities (if required by law)</li>
              <li>Internal team members under confidentiality</li>
            </ul>
            <p className="pl-11 text-[#d9f99d]">We do not share information with advertisers or unrelated third parties.</p>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">5</span>
              Data Security
            </h2>
            <p className="pl-11">
              We implement reasonable physical, electronic, and administrative safeguards to protect your information from unauthorized access or disclosure. However, no method of transmission is 100% secure. Users provide data at their own risk.
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">6</span>
              Cookies
            </h2>
            <p className="mb-3 pl-11">We use cookies to:</p>
            <ul className="list-disc pl-16 space-y-1 mb-4">
              <li>Improve personalization</li>
              <li>Analyze website usage</li>
              <li>Enhance navigation</li>
            </ul>
            <p className="pl-11">Users may disable cookies through browser settings.</p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">7</span>
              Data Retention
            </h2>
            <p className="mb-3 pl-11">We retain personal data only for as long as necessary to:</p>
            <ul className="list-disc pl-16 space-y-1">
              <li>Provide services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
            </ul>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">8</span>
              Your Rights
            </h2>
            <p className="mb-3 pl-11">You may request:</p>
            <ul className="list-disc pl-16 space-y-1 mb-4">
              <li>Access to your data</li>
              <li>Correction of your data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="pl-11">Contact: <a href="mailto:privacy@catalystcoreinfo.in" className="text-[#d9f99d] hover:underline">privacy@catalystcoreinfo.in</a></p>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">9</span>
              Third-Party Links
            </h2>
            <p className="pl-11">
              Our website may contain links to external sites. We are not responsible for their content or privacy practices.
            </p>
          </section>

          {/* 10. Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">10</span>
              Updates to This Policy
            </h2>
            <p className="pl-11">
              We may update this Privacy Policy periodically. Latest version will always be on this page.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-white/10 w-8 h-8 rounded flex items-center justify-center text-sm">11</span>
              Contact Information
            </h2>
            <div className="pl-11 bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-2">For privacy concerns:</p>
              <a href="mailto:privacy@catalystcoreinfo.in" className="text-[#d9f99d] hover:underline font-bold text-lg flex items-center gap-2">
                privacy@catalystcoreinfo.in
              </a>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;