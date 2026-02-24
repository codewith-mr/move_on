'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { learningModules } from './learning-data';

const sections = [
  {
    id: 'digital',
    title: 'Digital Mastery',
    description: 'Master the tools, platforms, and algorithms that drive the modern web ecosystem.',
    category: 'Digital Skills'
  },
  {
    id: 'business',
    title: 'Business & Strategy',
    description: 'Proven frameworks for building, scaling, and managing successful ventures.',
    category: 'Business'
  },
  {
    id: 'mindset',
    title: 'Mindset & Growth',
    description: 'Mental models, habits, and psychological principles for peak performance.',
    category: 'Mindset'
  },
  {
    id: 'design',
    title: 'Design Essentials',
    description: 'Core principles of visual communication, color theory, and aesthetics.',
    category: 'Design'
  },
  {
    id: 'books',
    title: 'Knowledge Library',
    description: 'Distilled wisdom and key takeaways from the world\'s most impactful books.',
    category: 'Books'
  },
  {
    id: 'crafting',
    title: 'Crafting & Creation',
    description: 'Building, making, designing, and creating with hands + mind.',
    category: 'Crafting'
  },
  {
    id: 'earn',
    title: 'Earn & Careers',
    description: 'Practical paths from skills to income, jobs, and long-term career growth.',
    category: 'Earn & Careers'
  },
  {
    id: 'self',
    title: 'Self Development',
    description: 'Productivity, habits, and mental models so students can perform at their peak.',
    category: 'Self Development'
  },
  {
    id: 'resources',
    title: 'Resources Library',
    description: 'Ready-to-use PDFs, templates, and guides that make execution faster.',
    category: 'Resources'
  },
  {
    id: 'opportunities',
    title: 'Opportunities Radar',
    description: 'Scholarships, internships, and programs that turn learning into real chances.',
    category: 'Opportunities'
  }
];

export default function DeepLearningGrid() {
  return (
    <div className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-32">
      {sections.map((section, index) => {
        const sectionModules = learningModules.filter(m => m.category === section.category);
        if (sectionModules.length === 0) return null;

        return (
          <section key={section.id} className="relative">
            {/* Minimal Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-neutral-200 pb-8">
               <div className="space-y-4 max-w-2xl">
                 <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400">
                   <span>0{index + 1}</span>
                   <span className="h-px w-8 bg-neutral-200"></span>
                   <span>{section.category}</span>
                 </div>
                 
                 <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                     {section.title}
                   </h2>
                   <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                     {section.description}
                   </p>
                 </div>
               </div>
               
               {/* Minimal Stats */}
               <div className="hidden md:flex items-center gap-4 text-xs font-medium text-neutral-400">
                 <span>{sectionModules.length} Modules</span>
                 <span className="text-neutral-300">/</span>
                 <span>Est. {sectionModules.length * 5}m Read</span>
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sectionModules.map((module, idx) => {
                return (
                  <Link href={`/creativity/learning/${module.id}`} key={module.id} className="block h-full">
                    <motion.div
                      layoutId={`card-${module.id}`}
                      whileHover={{ y: -4 }}
                      className="group bg-white border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-neutral-900 transition-all duration-300 h-full flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                           <span className="font-mono text-xs text-neutral-300 group-hover:text-neutral-500 transition-colors">
                             {module.id.toUpperCase()}
                           </span>
                           <div className="w-6 h-6 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                           </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-tight group-hover:underline decoration-1 underline-offset-4">
                            {module.title}
                            </h3>
                            
                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                            {module.shortDescription}
                            </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-3 overflow-hidden">
                         {module.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
