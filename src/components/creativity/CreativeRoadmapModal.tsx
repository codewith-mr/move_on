import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CreativeResource {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  accentColor: string;
}

interface RoadmapStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
}

interface RoadmapContent {
  steps: RoadmapStep[];
  backgroundGradient: string;
  particleColor: string;
}

interface CreativeRoadmapModalProps {
  resource: CreativeResource;
  onClose: () => void;
}

// --- Specialized Content Components ---

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState<string[]>(['#FF5733', '#33FF57', '#3357FF', '#F333FF']);
  
  const generate = () => {
     setColors(Array(4).fill(0).map(() => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')));
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mt-4">
      <h4 className="text-white font-bold mb-4">Interactive Lab: Palette Generator</h4>
      <div className="flex h-24 rounded-xl overflow-hidden mb-4 shadow-lg ring-1 ring-white/10">
        {colors.map((color, i) => (
          <div key={i} className="flex-1 flex items-end justify-center pb-2 text-[10px] md:text-xs font-mono font-bold text-white/90 bg-blend-overlay" style={{ backgroundColor: color }}>
            <span className="bg-black/20 px-1 rounded">{color}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={generate}
        className="w-full py-3 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors shadow-lg active:scale-95 duration-200"
      >
        Generate Fresh Harmony
      </button>
    </div>
  );
};

const FlowChecklist = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mt-4 text-white">
       <h4 className="font-bold mb-3">The Flow Checklist</h4>
       <ul className="space-y-3 text-sm">
         <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">1</span>
            <span>Clear Goals: Know exactly what to do next.</span>
         </li>
         <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">2</span>
            <span>Immediate Feedback: See results instantly.</span>
         </li>
         <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">3</span>
            <span>Balance: Skill level matches challenge.</span>
         </li>
       </ul>
    </div>
  );
};

const TypographyPairing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-[#F5F5F0] p-6 rounded-2xl text-neutral-900 shadow-lg">
        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 block">Classic</span>
        <h3 className="font-serif text-3xl mb-2">The Serif Header</h3>
        <p className="font-sans text-neutral-600 text-sm leading-relaxed">
          Paired with a clean sans-serif body, this creates a timeless, editorial look perfect for storytelling.
        </p>
      </div>
      <div className="bg-[#1a1a1a] p-6 rounded-2xl text-white shadow-lg">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">Modern</span>
        <h3 className="font-sans font-black text-3xl mb-2 tracking-tighter">BOLD SANS</h3>
        <p className="font-mono text-neutral-400 text-xs leading-relaxed">
          MONOSPACE ACCENTS ADD TECHNICAL FLAIR. IDEAL FOR DIGITAL-FIRST BRANDS.
        </p>
      </div>
    </div>
  );
};

// --- Data Definition ---

const ROADMAP_DATA: Record<number, RoadmapContent> = {
  // Color Theory
  3: {
    backgroundGradient: "from-slate-900 via-purple-900 to-slate-900",
    particleColor: "bg-purple-500",
    steps: [
      {
        title: "The Basics",
        subtitle: "Hue, Saturation, & Value",
        description: "Before we paint, we must understand the atoms of color. Hue is the identity, Saturation is the intensity, and Value is the brightness.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
      },
      {
        title: "Harmony Rules",
        subtitle: "The Math of Beauty",
        description: "Great palettes aren't random. They follow geometric relationships on the color wheel: Analogous for calm, Complementary for energy, Triadic for balance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        )
      },
      {
        title: "Psychology & Context",
        subtitle: "Speaking Without Words",
        description: "Red raises blood pressure. Blue builds trust. Learn how culture and biology shape our emotional response to color.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
      },
      {
        title: "Mastery: Application",
        subtitle: "Create Your System",
        description: "Apply your knowledge. Use the 60-30-10 rule for composition and ensure accessibility with contrast checks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        content: <ColorPaletteGenerator />
      }
    ]
  },
  // Flow State
  1: {
    backgroundGradient: "from-blue-900 via-indigo-900 to-black",
    particleColor: "bg-blue-400",
    steps: [
      {
        title: "Understanding Flow",
        subtitle: "The Zone Defined",
        description: "Flow is a state of optimal experience where self-consciousness dissolves and time distorts. It's not magic; it's neurobiology.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      },
      {
        title: "Setting the Stage",
        subtitle: "Environment & Triggers",
        description: "Eliminate friction. Your workspace should be a cockpit designed for focus. Remove phone notifications and set clear boundaries.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
      },
      {
        title: "The Challenge-Skill Ratio",
        subtitle: "Finding the Sweet Spot",
        description: "Too hard = Anxiety. Too easy = Boredom. Flow lives in the 'Goldilocks Zone' of just manageable difficulty.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
        content: <FlowChecklist />
      },
      {
        title: "Deep Work Rituals",
        subtitle: "Sustaining Momentum",
        description: "Train your brain to enter flow on command through specific pre-work rituals (coffee, music, breathing).",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      }
    ]
  },
  // Typography
  4: {
    backgroundGradient: "from-neutral-900 via-neutral-800 to-neutral-900",
    particleColor: "bg-white",
    steps: [
        {
            title: "Anatomy of Type",
            subtitle: "The Vocabulary",
            description: "Ascenders, descenders, x-height, and serifs. Knowing the parts helps you understand the whole.",
            icon: <span className="font-serif italic font-bold text-xl">Aa</span>
        },
        {
            title: "Hierarchy & Scale",
            subtitle: "Guiding the Eye",
            description: "Size isn't the only tool. Use weight, color, and spacing to tell the reader what matters most.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
        },
        {
            title: "The Art of Pairing",
            subtitle: "Contrast & Concord",
            description: "Combine fonts that share a mood but differ in structure. A geometric sans loves a humanist serif.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
            content: <TypographyPairing />
        },
        {
            title: "Micro-Typography",
            subtitle: "The Devil in the Details",
            description: "Kerning (space between letters), Tracking (overall spacing), and Leading (line height) make or break readability.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        }
    ]
  }
};

const DEFAULT_ROADMAP: RoadmapContent = {
    backgroundGradient: "from-slate-900 to-slate-800",
    particleColor: "bg-slate-400",
    steps: [
        { title: "Coming Soon", subtitle: "Under Construction", description: "This roadmap is being curated.", icon: <div /> }
    ]
};

export default function CreativeRoadmapModal({ resource, onClose }: CreativeRoadmapModalProps) {
  const data = ROADMAP_DATA[resource.id] || DEFAULT_ROADMAP;
  const [activeStep, setActiveStep] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background with Gradient & Noise */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.backgroundGradient}`}>
         <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></div>
         {/* Abstract Landscape Blobs */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
         <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full ${data.particleColor} opacity-20 blur-[100px] animate-pulse`}></div>
         <div className={`absolute top-1/2 -left-20 w-72 h-72 rounded-full ${data.particleColor} opacity-10 blur-[80px]`}></div>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-16">
        
        {/* Left Side: Header & Progress */}
        <div className="md:w-1/3 flex flex-col h-full justify-center">
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-white/80 mb-4">
                    {resource.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {resource.title}
                </h2>
                <p className="text-white/60 text-lg">
                    {resource.description}
                </p>
            </motion.div>

            {/* Progress Indicator (Desktop) */}
            <div className="hidden md:flex flex-col gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10"></div>
                
                {data.steps.map((step, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`relative z-10 flex items-center gap-4 group text-left w-full p-2 rounded-xl transition-all ${activeStep === index ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5'}`}
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${activeStep === index ? 'bg-white text-neutral-900 border-white scale-110' : 'bg-neutral-900 text-white border-white/20 group-hover:border-white/50'}`}>
                            {index + 1}
                        </div>
                        <div>
                            <h4 className={`font-bold transition-colors ${activeStep === index ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                                {step.title}
                            </h4>
                            <p className="text-xs text-white/40 hidden xl:block">{step.subtitle}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Right Side: Active Step Content (The "Scenery") */}
        <div className="md:w-2/3 h-full flex items-center justify-center relative">
            {/* Curved Path Background (Decorative) */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
                <path d="M0,350 Q100,100 200,300 T400,100" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
            </svg>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Glowing Accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${data.backgroundGradient}`}></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/10 rounded-xl text-white">
                            {data.steps[activeStep].icon}
                        </div>
                        <div>
                            <span className="text-white/40 font-mono text-sm uppercase tracking-widest">Level {activeStep + 1}</span>
                            <h3 className="text-3xl font-bold text-white">{data.steps[activeStep].title}</h3>
                        </div>
                    </div>

                    <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                        <p>{data.steps[activeStep].description}</p>
                        
                        {/* Interactive/Rich Content */}
                        {data.steps[activeStep].content && (
                            <motion.div 
                                initial={{ opacity: 0, marginTop: 0 }}
                                animate={{ opacity: 1, marginTop: 24 }}
                                transition={{ delay: 0.2 }}
                            >
                                {data.steps[activeStep].content}
                            </motion.div>
                        )}
                    </div>

                    {/* Navigation Buttons (Mobile/Bottom) */}
                    <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
                        <button 
                            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                            disabled={activeStep === 0}
                            className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${activeStep === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white hover:text-white/80'}`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            Prev
                        </button>
                        <button 
                            onClick={() => setActiveStep(prev => Math.min(data.steps.length - 1, prev + 1))}
                            disabled={activeStep === data.steps.length - 1}
                            className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${activeStep === data.steps.length - 1 ? 'text-white/20 cursor-not-allowed' : 'text-white hover:text-white/80'}`}
                        >
                            Next
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}