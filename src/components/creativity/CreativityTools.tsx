'use client';

import { motion } from 'framer-motion';

const tools = [
  { 
    id: 1, 
    name: 'Mind Mapper', 
    desc: 'Visualize your thoughts in a node-based graph.', 
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    color: 'bg-indigo-500' 
  },
  { 
    id: 2, 
    name: 'Mood Board', 
    desc: 'Collect and organize visual inspiration.', 
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'bg-rose-500' 
  },
  { 
    id: 3, 
    name: 'Pomodoro Focus', 
    desc: 'Timer for deep work sessions.', 
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-orange-500' 
  },
  { 
    id: 4, 
    name: 'Color Palette', 
    desc: 'Generate harmonious color schemes.', 
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    color: 'bg-teal-500' 
  },
  { 
    id: 5, 
    name: 'Oblique Strategies', 
    desc: 'Brian Eno\'s cards for breaking creative blocks.', 
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    color: 'bg-blue-500' 
  },
  { 
    id: 6, 
    name: 'Writer\'s Zen', 
    desc: 'Distraction-free writing environment.', 
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    color: 'bg-neutral-800' 
  },
];

export default function CreativityTools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <motion.div
          key={tool.id}
          whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm transition-all group cursor-pointer relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20 ${tool.color}`} />
          
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-800 group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-sm text-neutral-500 mt-1 leading-snug">{tool.desc}</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
             <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-primary flex items-center gap-1 transition-colors">
               Launch Tool
               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
