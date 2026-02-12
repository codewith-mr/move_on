'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['All', 'Design', 'Writing', 'AI Art', 'Startup', 'Coding'];

const ideas = [
  { id: 1, title: 'Minimalist Plant App', category: 'Design', author: 'Emma', likes: 24, image: 'bg-emerald-100' },
  { id: 2, title: 'Cyberpunk Short Story', category: 'Writing', author: 'Leo', likes: 56, image: 'bg-indigo-100' },
  { id: 3, title: 'AI Generated Logos', category: 'AI Art', author: 'Max', likes: 12, image: 'bg-rose-100' },
  { id: 4, title: 'No-Code SaaS Platform', category: 'Startup', author: 'Sophie', likes: 89, image: 'bg-blue-100' },
];

export default function IdeaVault() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800">Idea Vault</h2>
          <p className="text-neutral-500">Explore creativity from the community.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-neutral-800 text-white shadow-md' 
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ideas.map((idea) => (
          <motion.div
            key={idea.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className={`h-40 ${idea.image} relative flex items-center justify-center`}>
              <span className="text-4xl opacity-20 font-black tracking-tighter text-neutral-900 uppercase">{idea.category}</span>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                {idea.category}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-lg text-neutral-800 mb-1 group-hover:text-primary transition-colors">{idea.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-500">
                    {idea.author[0]}
                  </div>
                  <span className="text-xs text-neutral-500 font-medium">{idea.author}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* View All Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="border-2 border-dashed border-neutral-200 rounded-2xl flex flex-col items-center justify-center p-6 text-neutral-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer min-h-[250px]"
        >
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <span className="font-bold text-sm">View More Ideas</span>
        </motion.div>
      </div>
    </div>
  );
}
