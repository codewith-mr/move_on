'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserSearchProfile, ResourceRecommendation } from './types';

interface Props {
  profile: UserSearchProfile;
}

const allResources: ResourceRecommendation[] = [
  { id: 'r1', title: 'Refactoring UI', type: 'Course', url: '#', reason: 'Because you are interested in Design', tags: ['UI', 'Design'] },
  { id: 'r2', title: 'The Pragmatic Programmer', type: 'PDF', url: '#', reason: 'Essential reading for your level', tags: ['Coding', 'Career'] },
  { id: 'r3', title: 'Figma Auto Layout Guide', type: 'Video', url: '#', reason: 'Highly relevant to your recent searches', tags: ['Tools', 'Figma'] },
  { id: 'r4', title: 'Awesome React Repo', type: 'Repo', url: '#', reason: 'Trending in your tech stack', tags: ['React', 'Open Source'] },
  { id: 'r5', title: 'Nielsen Norman Group', type: 'Blog', url: '#', reason: 'Best for Research skills', tags: ['UX', 'Research'] },
  { id: 'r6', title: 'Obsidian', type: 'Tool', url: '#', reason: 'Boost your Knowledge Management', tags: ['Productivity'] },
];

export default function ResourceDiscovery({ profile }: Props) {
  const [filter, setFilter] = useState('Recommended');

  const filtered = filter === 'Recommended' 
    ? allResources 
    : allResources.filter(r => r.type === filter || r.tags.includes(filter));

  const filters = ['Recommended', 'Course', 'Tool', 'Video', 'Design', 'Coding'];

  return (
    <div className="h-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
          <span className="text-4xl">💎</span> Smart Resource Discovery
        </h2>
        <p className="text-neutral-500 mt-2">Curated gems found by our AI based on your learning patterns.</p>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              filter === f 
                ? 'bg-neutral-900 text-white shadow-lg' 
                : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((resource) => (
            <motion.div
              key={resource.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                  resource.type === 'Video' ? 'bg-red-100 text-red-600' :
                  resource.type === 'Course' ? 'bg-blue-100 text-blue-600' :
                  resource.type === 'Tool' ? 'bg-purple-100 text-purple-600' :
                  'bg-neutral-100 text-neutral-600'
                }`}>
                  {resource.type}
                </span>
                <span className="text-neutral-300 group-hover:text-primary transition-colors">↗</span>
              </div>

              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-xs text-neutral-400 bg-neutral-50 px-2 py-1 rounded border border-neutral-100">
                    Why: {resource.reason}
                 </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-50">
                {resource.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-neutral-500">#{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filtered.length === 0 && (
         <div className="text-center py-20 text-neutral-400">
            No resources found for this filter.
         </div>
      )}
    </div>
  );
}
