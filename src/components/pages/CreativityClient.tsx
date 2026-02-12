'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { learningModules, LearningModule } from '../creativity/learning/learning-data';

// Component: Pathway Card (Minimalist, Swiss Style, High-End)
const PathwayCard = ({ module, index }: { module: LearningModule, index: number }) => (
  <Link href={`/creativity/learning/${module.id}`} className="group block h-full">
    <div className="flex flex-col h-full p-8 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-900 transition-colors duration-300">
        
        {/* Header: Number & Category */}
        <div className="flex justify-between items-start mb-8">
             <span className="text-xs font-bold tracking-widest text-neutral-300">
                {String(index + 1).padStart(2, '0')}
            </span>
             <span className="px-3 py-1 bg-neutral-50 text-[10px] font-bold uppercase tracking-widest text-neutral-500 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                {module.category}
            </span>
        </div>

        {/* Content */}
        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                {module.title}
            </h3>
            <p className="text-base text-neutral-500 font-medium leading-relaxed line-clamp-3">
                {module.shortDescription}
            </p>
        </div>

        {/* Footer: Action */}
        <div className="mt-8 pt-6 border-t border-neutral-50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-900">
            <span>Start Learning</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
    </div>
  </Link>
);

// Component: Featured Manifesto Section
const ManifestoHeader = () => (
    <div className="py-24 px-6 border-b border-neutral-100 bg-white">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-10 leading-[0.9]">
                BUILD <br/>
                <span className="text-neutral-200">YOUR</span> <br/>
                FREEDOM.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-20 h-2 bg-neutral-900"></div>
                <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-2xl">
                    School taught you how to get a job. We teach you how to build a life. 
                    Master the high-leverage skills—from AI to Psychology—that create wealth, independence, and impact.
                </p>
            </div>
        </div>
    </div>
);

// Component: Section Title
const SectionTitle = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
    <div className="mb-12 group">
        {/* Swiss Style Rule: Defines Section Start */}
        <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-neutral-900/10 flex-grow"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
                Section {number}
            </span>
            <div className="w-24 h-px bg-neutral-900/10"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 pb-6 border-b border-neutral-100">
            <h2 className="text-6xl font-black text-neutral-100 leading-none group-hover:text-neutral-200 transition-colors duration-500">{number}</h2>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-2">{subtitle}</h3>
                <p className="text-xl text-neutral-500 font-medium">{title}</p>
            </div>
        </div>
    </div>
);

export default function CreativityClient() {
  // Logic: Flatten all high-value modules into a curated curriculum
  
  // Phase 1: The Tools (Digital Skills)
  const toolsModules = learningModules.filter(m => 
    ['d1', 'd5', 'd7', 'd10'].includes(m.id)
  );

  // Phase 2: The Strategy (Growth & SEO)
  const strategyModules = learningModules.filter(m => 
    ['d2', 'd3', 'd4', 'd9'].includes(m.id)
  );

  // Phase 3: The Foundation (Mindset & Business)
  const foundationModules = learningModules.filter(m => 
    ['d6', 'd8', 'b1'].includes(m.id) || (m.category === 'Mindset' && !['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'b1'].includes(m.id))
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
        
        {/* 1. Manifesto / Hero */}
        <ManifestoHeader />

        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
            
            {/* Phase 1: The New Leverage */}
            <section>
                <SectionTitle 
                    number="01"
                    subtitle="Leverage" 
                    title="Master the tools that multiply your time." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolsModules.map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

            {/* Phase 2: The Distribution */}
            <section>
                <SectionTitle 
                    number="02"
                    subtitle="Attention" 
                    title="Build an audience that listens." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategyModules.map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

             {/* Phase 3: The Empire */}
             <section>
                <SectionTitle 
                    number="03"
                    subtitle="Wealth" 
                    title="Structure your mind and business for scale." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foundationModules.slice(0, 6).map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

            {/* Footer Quote */}
            <div className="text-center pt-24 pb-12">
                <p className="text-4xl md:text-5xl font-black text-neutral-900 max-w-4xl mx-auto leading-tight mb-8">
                    "The best way to predict the future is to create it."
                </p>
                <div className="inline-block px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    Start Building
                </div>
            </div>

        </div>
    </div>
  );
}
