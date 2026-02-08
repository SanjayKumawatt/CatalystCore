import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  Mail
} from 'lucide-react';

// --- DATA: Categories ---
const categories = [
  "AI & Automation",
  "Technical Intelligence",
  "Engineering Operations",
  "Software & Product Updates",
  "Knowledge Systems",
  "Process Optimization"
];

// --- DATA: Sample Articles ---
const articles = [
  {
    id: 1,
    title: "The Future of Technical Support: Beyond Traditional Automation",
    category: "Technical Intelligence",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Explore how generative AI is moving beyond simple chatbots to solve complex technical queries with reasoning and context."
  },
  {
    id: 2,
    title: "Why Multi-Agent AI Systems Are the Next Big Leap in Operations",
    category: "AI & Automation",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Multi-agent systems don't just answer questions—they execute tasks. Learn how they coordinate to automate entire workflows."
  },

  {
    id: 5,
    title: "Turning Organizational Knowledge Into Automated Workflows",
    category: "Knowledge Systems",
    date: "Sep 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Your company's best asset is its knowledge. Learn strategies to digitize, structure, and activate your institutional wisdom."
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Blog = () => {
  return (
    <div className="bg-[#022c22] min-h-screen font-sans text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#033a2d] to-[#022c22] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Insights & <span className="text-[#d9f99d]">Updates</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Latest news, technical deep dives, and product announcements from the CatalystCore team.
            </p>
          </div>
          
          
        </div>
      </section>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* --- SIDEBAR (Categories) --- */}
          <aside className="lg:col-span-1 space-y-10">
            


            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-[#033a2d] to-[#011c16] border border-[#d9f99d]/20 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#d9f99d] blur-[60px] opacity-10 pointer-events-none" />
              <Mail size={24} className="text-[#d9f99d] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-xs text-gray-400 mb-4">
                Get the latest insights on AI automation delivered to your inbox.
              </p>
              <button className="w-full bg-[#d9f99d] text-[#022c22] font-bold py-2 rounded hover:bg-white transition-colors text-sm">
                Subscribe
              </button>
            </div>

          </aside>

          {/* --- ARTICLES GRID --- */}
          <main className="lg:col-span-3">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-8"
            >
              {articles.map((article) => (
                <motion.article 
                  key={article.id}
                  variants={cardVariants}
                  className="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d9f99d]/50 transition-all duration-300 group hover:bg-[#033a2d]/40"
                >
                  {/* Article Image */}
                  <div className="md:w-1/3 h-56 md:h-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#022c22]/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="md:w-2/3 p-6 md:pl-0 md:py-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="text-[#d9f99d] font-medium px-2 py-1 bg-[#d9f99d]/10 rounded uppercase tracking-wider">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#d9f99d] transition-colors leading-tight">
                      <Link to="#">{article.title}</Link>
                    </h2>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                      {article.excerpt}
                    </p>

                    
                  </div>
                </motion.article>
              ))}
            </motion.div>

            
          </main>

        </div>
      </div>
    </div>
  );
};

export default Blog;