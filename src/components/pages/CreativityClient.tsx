'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Enhanced Mock Data
interface CreativeResource {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  colSpan?: string; // Tailwind class for column span
  rowSpan?: string; // Tailwind class for row span
  accentColor: string; // Hex or Tailwind class
  type: 'article' | 'tool' | 'inspiration' | 'video';
}

const resources: CreativeResource[] = [
  {
    id: 1,
    title: 'Mastering the Creative Flow',
    category: 'Deep Dive',
    description: 'Unlock the secrets to entering the flow state on command. A comprehensive guide for artists and developers.',
    imageUrl: '/placeholder-course.svg', // Using existing placeholder
    link: '#',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    accentColor: 'from-primary to-accent',
    type: 'article'
  },
  {
    id: 2,
    title: 'Daily UI Challenges',
    category: 'Practice',
    description: 'Sharpen your skills with daily micro-challenges.',
    imageUrl: '/placeholder-course.svg',
    link: '#',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    accentColor: 'from-secondary to-primary',
    type: 'inspiration'
  },
  {
    id: 3,
    title: 'Color Theory 101',
    category: 'Essentials',
    description: 'Understand the science of color to create stunning visuals.',
    imageUrl: '/placeholder-course.svg',
    link: '#',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    accentColor: 'from-amber-400 to-orange-500',
    type: 'tool'
  },
  {
    id: 4,
    title: 'Typography Rules',
    category: 'Design',
    description: 'The golden rules of type combination.',
    imageUrl: '/placeholder-course.svg',
    link: '#',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    accentColor: 'from-teal-500 to-primary',
    type: 'article'
  }
];

const prompts = [
  "Design a landing page for a time traveler.",
  "Create a color palette inspired by your favorite song.",
  "Write a function that describes your morning routine.",
  "Sketch a logo for a shop that sells dreams.",
  "Reimagine the interface of a toaster.",
  "Draw a sound.",
  "Code a button that runs away from the cursor.",
  "Write a haiku about debugging.",
  "Design a mobile app for cats.",
  "Create a texture using only text characters."
];

const strategies = [
  "Honor thy error as a hidden intention.",
  "Use an old idea.",
  "State the problem in words as clearly as possible.",
  "What would your closest friend do?",
  "Work at a different speed.",
  "Turn it upside down.",
  "Discard an axiom.",
  "Breathe more deeply."
];

const inspirationalQuotes = [
  "Creativity is intelligence having fun. – Albert Einstein",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "Everything you can imagine is real. – Pablo Picasso",
  "Design is not just what it looks like and feels like. Design is how it works. – Steve Jobs",
  "You can't use up creativity. The more you use, the more you have. – Maya Angelou",
  "To live a creative life, we must lose our fear of being wrong. – Joseph Chilton Pearce",
  "Creativity takes courage. – Henri Matisse",
  "Art is the only way to run away without leaving home. – Twyla Tharp",
  "The chief enemy of creativity is 'good' sense. – Pablo Picasso",
  "Logic will get you from A to B. Imagination will take you everywhere. – Albert Einstein",
  "Every child is an artist. The problem is how to remain an artist once we grow up. – Pablo Picasso",
  "Don't think. Thinking is the enemy of creativity. – Ray Bradbury",
  "You don't make art out of good intentions. – Gustave Flaubert",
  "I dream my painting and I paint my dream. – Vincent van Gogh"
];

const tinyChallenges = [
  "Draw your non-dominant hand.",
  "Write a story in 6 words.",
  "Find 5 red objects around you.",
  "Photograph a shadow.",
  "Doodle a monster using only triangles.",
  "Describe the taste of water.",
  "Make a beat using desk items.",
  "Stack 5 random objects.",
  "Write a thank you note to a tool.",
  "Close your eyes and listen for 1 minute.",
  "Draw a sound you hear right now.",
  "Invent a new word and define it.",
  "Create a texture rubbing of a surface."
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

export default function CreativityClient() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [inspiration, setInspiration] = useState<string>("Creativity is intelligence having fun. – Albert Einstein");
  const [inspirationKey, setInspirationKey] = useState(0);
  

  const [newsKey, setNewsKey] = useState(0);
  
  // Newsletter State
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  

  
  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        // keep subscribed state for visual feedback
      }, 2000);
    }
  };
  
  const refreshNews = () => {
    setNewsKey(prev => prev + 1);
  };

  // Initial Quotes for Daily Inspiration
  const generateInspiration = () => {
    const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
    setInspiration(randomQuote);
    setInspirationKey(prev => prev + 1);
  };




  return (
    // Light Theme Container - Clean & Professional Look with Brand Colors
    <div className="relative bg-white text-text rounded-3xl p-6 sm:p-10 min-h-[85vh] shadow-xl overflow-hidden border border-neutral-200">
      
      {/* Abstract Background Elements - Subtle Brand Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              Creativity
            </span>
            <span className="block text-2xl md:text-3xl mt-2 font-light text-neutral-500">
              Think. Build. Scale.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed">
            A curated collection of resources designed to spark your imagination and elevate your craft.
            Dive into advanced techniques and explore new perspectives.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {resources.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative group rounded-3xl overflow-hidden bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 ${item.colSpan || 'md:col-span-1'} ${item.rowSpan || 'md:row-span-1'}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={item.link} className="block h-full w-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover opacity-10 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="mb-auto">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/20 mb-3 text-white shadow-sm`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className={`font-bold text-white mb-2 leading-tight ${item.colSpan?.includes('col-span-2') ? 'text-3xl' : 'text-xl'} drop-shadow-md`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-neutral-200 text-sm line-clamp-2 ${hoveredId === item.id ? 'opacity-100' : 'opacity-90'} transition-opacity drop-shadow-sm`}>
                    {item.description}
                  </p>

                  <div className={`mt-4 flex items-center text-sm font-medium text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                    Explore Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Daily Inspiration Card - Replaced Spark */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 md:row-span-1 relative group rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-accent border border-white/20 shadow-xl cursor-pointer min-h-[300px] flex items-center justify-center"
            onClick={generateInspiration}
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-[50%] -right-[20%] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />
            <div className="absolute -bottom-[50%] -left-[20%] w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl" />
            
            {/* Burst Effect */}
             <AnimatePresence>
                <motion.div
                    key={inspirationKey}
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{ scale: 1.1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute w-full h-full bg-white/10 rounded-full pointer-events-none"
                    style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
                />
            </AnimatePresence>

            <div className="relative z-10 p-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
                <span className="inline-block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 text-white mb-6 shadow-lg">
                  Daily Inspiration
                </span>
                
                <div className="h-32 md:h-40 flex items-center justify-center w-full max-w-3xl relative">
                  <AnimatePresence mode='wait'>
                      <motion.div 
                          key={inspirationKey}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full"
                      >
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-4 drop-shadow-lg">
                          "{inspiration.split('–')[0].trim()}"
                        </h3>
                        <p className="text-white/80 font-medium uppercase tracking-widest text-sm">
                          — {inspiration.split('–')[1]?.trim() || 'Unknown'}
                        </p>
                      </motion.div>
                  </AnimatePresence>
                </div>
              
              <div className="flex items-center gap-3 text-white/90 text-sm font-medium group-hover:text-white transition-colors bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Tap for new insight
              </div>
            </div>
          </motion.div>

          {/* Creativity News & Newsletter Row (1 of 2 Layout) */}
          
          {/* Creativity News Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-white border border-neutral-200 p-8 flex flex-col relative overflow-hidden shadow-lg group hover:border-primary/30 transition-all min-h-[300px]"
          >
             <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text flex items-center gap-2">
                    <span className="w-2 h-8 bg-accent rounded-full"></span>
                    Creativity News
                </h3>
                <button 
                  onClick={refreshNews}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-primary transition-colors"
                  title="Refresh News"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${newsKey > 0 ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
             </div>
             
             <div className="flex flex-col gap-4 relative">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={newsKey}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-4 w-full"
                    >
                        {[
                            { title: "AI in Design: Friend or Foe?", time: "2h ago", tag: "Tech", url: "https://www.google.com/search?q=AI+in+Design+Friend+or+Foe" },
                            { title: "Color Trends for 2026 Released", time: "5h ago", tag: "Design", url: "https://www.google.com/search?q=Color+Trends+2026" },
                            { title: "How Deep Work Boosts Creativity", time: "1d ago", tag: "Productivity", url: "https://www.google.com/search?q=Deep+Work+Creativity" }
                        ].map((news, i) => (
                            <Link 
                                href={news.url} 
                                key={i} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start justify-between group/news cursor-pointer hover:bg-neutral-50 p-3 rounded-xl transition-colors"
                            >
                                <div>
                                    <h4 className="font-bold text-neutral-800 group-hover/news:text-primary transition-colors">{news.title}</h4>
                                    <span className="text-xs text-neutral-400 font-medium">{news.time}</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-1 rounded-md group-hover/news:bg-white group-hover/news:shadow-sm transition-all">{news.tag}</span>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
             </div>
             <div className="mt-auto pt-4 text-center">
                <Link href="https://news.google.com/search?q=creativity+design+tech" target="_blank" className="text-sm font-bold text-primary hover:text-accent transition-colors flex items-center justify-center gap-1 mx-auto">
                    View All News
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
             </div>
          </motion.div>

          {/* Newsletter Card (Revised Layout) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-neutral-900 text-white p-8 flex flex-col justify-center relative overflow-hidden shadow-lg group min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 z-0" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
                  <span className="text-xs font-bold text-primary-200 tracking-wide uppercase">Join 10,000+ Creators</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">The Creative Circle</h3>
                <p className="text-neutral-400 text-sm mb-6">Weekly insights, tools, and exclusive resources. No spam.</p>
              
              <div className="w-full flex flex-col gap-3">
                {subscribed ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
                   >
                     <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                     <h4 className="font-bold text-lg">Welcome to the Circle!</h4>
                     <p className="text-white/60 text-sm">Check your inbox for your welcome kit.</p>
                   </motion.div>
                ) : (
                  <>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/10 text-white placeholder-white/40 px-5 py-3.5 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <button 
                      onClick={handleSubscribe}
                      className="w-full bg-primary text-white px-6 py-3.5 rounded-xl font-bold hover:bg-accent transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:translate-x-1 duration-300"
                    >
                      Subscribe Free
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>



        </motion.div>
      </div>
    </div>
  );
}
