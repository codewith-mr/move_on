'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const hubs = [
  {
    title: 'Gov Portal',
    subtitle: 'Official Schemes & Subsidies',
    desc: 'Navigate government schemes, subsidies, and official documentation with precision and ease.',
    link: '/gov-schemes',
    icon: '🏛️',
    gradient: 'from-blue-600 via-blue-800 to-slate-900',
    accent: 'bg-blue-400',
    tag: 'Digital_Gov_Node',
  },
  {
    title: 'Global Scholar',
    subtitle: 'International Education Paths',
    desc: 'International education paths, scholarships, and global career guidance for the modern student.',
    link: '/global-scholar',
    icon: '🌎',
    gradient: 'from-emerald-600 via-emerald-800 to-slate-900',
    accent: 'bg-emerald-400',
    tag: 'Scholar_Global_Sync',
  },
  {
    title: 'Earn & Careers',
    subtitle: 'Monetize Your Skills',
    desc: 'Master the skills that directly translate to income opportunities in the digital economy.',
    link: '/earn-careers',
    icon: '💼',
    gradient: 'from-amber-600 via-amber-800 to-slate-900',
    accent: 'bg-amber-400',
    tag: 'Income_Stream_Node',
  },
  {
    title: 'Self Development',
    subtitle: 'Master Your Mindset',
    desc: 'Upgrade your mindset and soft skills to navigate the complexities of the modern world.',
    link: '/self-development',
    icon: '🧠',
    gradient: 'from-purple-600 via-purple-800 to-slate-900',
    accent: 'bg-purple-400',
    tag: 'Mindset_Core_System',
  },
  {
    title: 'Resources Hub',
    subtitle: 'Free Templates & Guides',
    desc: 'A curated collection of free templates, checklists, and assets to accelerate your projects.',
    link: '/resources',
    icon: '📂',
    gradient: 'from-rose-600 via-rose-800 to-slate-900',
    accent: 'bg-rose-400',
    tag: 'Builder_Library_Assets',
  },
  {
    title: 'Opportunities',
    subtitle: 'Vetted Income Paths',
    desc: 'Discover legitimate side-hustles, vetted projects, and income-generating paths updated weekly.',
    link: '/opportunities',
    icon: '🚀',
    gradient: 'from-indigo-600 via-indigo-800 to-slate-900',
    accent: 'bg-indigo-400',
    tag: 'Alpha_Vetted_Node',
  },
  {
    title: 'Community',
    subtitle: 'Network with Builders',
    desc: 'Connect with a vetted network of entrepreneurs, freelancers, and growth-minded individuals.',
    link: '/community',
    icon: '👥',
    gradient: 'from-slate-700 via-slate-800 to-slate-900',
    accent: 'bg-slate-400',
    tag: 'Network_Trust_Protocol',
  },
  {
    title: 'Collab With Us',
    subtitle: 'Partner with TBS',
    desc: 'Scale your impact by partnering with the TBS ecosystem for high-value projects.',
    link: '/collaboration',
    icon: '🤝',
    gradient: 'from-teal-600 via-teal-800 to-slate-900',
    accent: 'bg-teal-400',
    tag: 'Partner_Node_Sync',
  },
];

const HubCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % hubs.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      if (newDirection === 1) return (prev + 1) % hubs.length;
      return (prev - 1 + hubs.length) % hubs.length;
    });
  };

  const currentHub = hubs[index];

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] md:min-h-[480px] lg:min-h-[540px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${currentHub.gradient} flex items-center`}
        >
          {/* Background Visual Effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className={`absolute top-1/4 right-1/4 w-96 h-96 ${currentHub.accent} opacity-10 rounded-full blur-[120px] animate-pulse`}></div>
          </div>

          <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter mb-5 sm:mb-6"
              >
                {currentHub.title} <br/>
                <span className="text-white/20 italic">{currentHub.subtitle.split(' ').pop()}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-6 sm:mb-8"
              >
                {currentHub.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 sm:gap-6 md:gap-8"
              >
                <Link
                  href={currentHub.link}
                  className="px-6 py-3 sm:px-7 sm:py-4 md:px-10 md:py-5 bg-white text-slate-900 rounded-2xl font-black text-[10px] sm:text-[11px] md:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-2xl shadow-black/20"
                >
                  Enter Hub Node →
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Large Background Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="hidden md:block absolute -right-10 md:-right-20 bottom-0 text-[18rem] sm:text-[22rem] md:text-[28rem] lg:text-[32rem] pointer-events-none select-none grayscale opacity-5"
          >
            {currentHub.icon}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-4 sm:left-6 md:left-12 z-20 flex items-center gap-6 pr-6 sm:pr-0">
        <div className="flex gap-2 sm:gap-3">
          {hubs.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 sm:w-12 bg-white' : 'w-3 sm:w-4 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <div className="hidden sm:block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
          Node_Sync: {index + 1} / {hubs.length}
        </div>
      </div>
      
      {/* Side Navigation Arrows */}
      <div className="hidden md:flex absolute right-12 bottom-12 z-20 gap-4">
        <button 
          onClick={() => paginate(-1)}
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md"
        >
          ←
        </button>
        <button 
          onClick={() => paginate(1)}
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HubCarousel;
