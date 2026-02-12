import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { learningModules, LearningModule } from '@/components/creativity/learning/learning-data';
import { marked } from 'marked';

// Helper to render Markdown safely
const MarkdownContent = ({ content, className = '', dark = false }: { content: string; className?: string; dark?: boolean }) => {
  const html = marked.parse(content || '', { async: false }) as string;
  return (
    <div 
      className={`prose prose-lg ${dark ? 'prose-invert' : 'prose-neutral'} max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};

// Explicit color mapping for Tailwind (reused)
const categoryStyles: Record<string, { bg: string, text: string, border: string, accent: string, icon: string }> = {
  'Digital Skills': { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200', accent: 'bg-blue-600', icon: '🔵' },
  'Business': { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', accent: 'bg-emerald-600', icon: '💼' },
  'Mindset': { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', accent: 'bg-purple-600', icon: '🧠' },
  'Books': { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', accent: 'bg-amber-600', icon: '📚' },
  'Design': { bg: 'bg-pink-50', text: 'text-pink-900', border: 'border-pink-200', accent: 'bg-pink-600', icon: '🎨' },
  'Crafting': { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-200', accent: 'bg-indigo-600', icon: '🛠️' },
};

const defaultStyle = { bg: 'bg-neutral-50', text: 'text-neutral-900', border: 'border-neutral-200', accent: 'bg-neutral-900', icon: '✨' };

export function generateStaticParams() {
  return learningModules.map((module) => ({
    id: module.id,
  }));
}

export default async function LearningModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const module = learningModules.find((m) => m.id === id);

  if (!module) {
    notFound();
  }

  return (
    <ModuleContent module={module} />
  );
}

function ModuleContent({ module }: { module: LearningModule }) {
  if (module.structuredContent) {
    return <StructuredLayout module={module} />;
  }
  return <StandardLayout module={module} />;
}

// 3. Standard Layout (Clean, Tech-focused Fallback)
function StandardLayout({ module }: { module: LearningModule }) {
  const styles = categoryStyles[module.category] || defaultStyle;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/creativity"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Creativity</span>
          </Link>
          <span className={`text-xs font-bold uppercase tracking-widest ${styles.text} border ${styles.border} ${styles.bg} px-3 py-1 rounded-full`}>
            {module.category}
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8">
              {/* Header */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-neutral-900 mb-8">
                {module.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-neutral-600 leading-relaxed mb-12 border-l-4 border-neutral-200 pl-6">
                {module.shortDescription}
              </p>

              {/* Content */}
              <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-p:text-neutral-600 prose-strong:text-neutral-900">
                <MarkdownContent content={module.fullExplanation} />
              </div>
           </div>
           
           {/* Sidebar Visual */}
           <div className="lg:col-span-4">
              <div className="sticky top-32">
                 <Visualizer module={module} variant="large" />
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

// 4. Structured Layout (Swiss Style / Professional)
function StructuredLayout({ module }: { module: LearningModule }) {
  if (!module.structuredContent) return <StandardLayout module={module} />;
  
  const { 
    hook, reality, concept, power, roadmap, secrets, examples, mindset,
    story, challenges, resources, achievement
  } = module.structuredContent;

  const styles = categoryStyles[module.category] || defaultStyle;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/creativity"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Creativity</span>
          </Link>
          <span className={`text-xs font-bold uppercase tracking-widest ${styles.text} border ${styles.border} ${styles.bg} px-3 py-1 rounded-full`}>
            {module.category}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-40 pb-24 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Curriculum</span>
                 <div className="h-px w-12 bg-neutral-200"></div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-900">{module.id.toUpperCase()}</span>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-neutral-900 mb-16">
                {module.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-2xl md:text-5xl font-medium text-neutral-800 leading-[1.1] max-w-4xl tracking-tight">
                {hook}
              </p>
           </div>
           <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32">
                 <div className="aspect-[3/4] bg-neutral-50 flex items-center justify-center p-12 border border-neutral-100 relative group overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    {/* Floating Accent Elements */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-neutral-200 group-hover:h-full transition-all duration-1000 ease-in-out`}></div>
                    <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700">
                       <Visualizer module={module} variant="large" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                       <div>
                          <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-neutral-300 mb-1">Visual ID</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">{module.id.toUpperCase()}</span>
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">v.2.0</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </header>

      {/* The Reality Check - High Contrast with Category Accent */}
      {reality && (
        <section className="bg-neutral-900 text-white py-32 md:py-48 relative overflow-hidden">
          {/* Decorative Swiss Background Elements */}
          <div className="absolute top-0 right-0 text-[30rem] font-black text-white/[0.03] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
            {module.id.toUpperCase()}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-12">
                   <div className={`w-12 h-2 ${styles.accent} mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]`}></div>
                   <span className="text-sm font-bold uppercase tracking-[0.4em] text-white/40">
                     The Reality
                   </span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="prose prose-2xl md:prose-[5rem] prose-invert max-w-none font-bold leading-[1.05] tracking-tight">
                  <MarkdownContent content={reality} dark={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-48">
            
            {/* 01. The Concept */}
            {concept && (
              <section className="group">
                <div className="flex items-center gap-6 mb-16">
                  <span className="text-6xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500">01</span>
                  <div className="h-px bg-neutral-100 flex-grow"></div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-900">The Concept</h2>
                </div>
                <div className="prose prose-2xl prose-neutral max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-neutral-600 prose-strong:text-neutral-900 prose-p:leading-relaxed">
                  <MarkdownContent content={concept} />
                </div>
              </section>
            )}

            {/* 02. Why It Matters */}
            {power && (
              <section className="group">
                <div className="flex items-center gap-6 mb-16">
                  <span className="text-6xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500">02</span>
                  <div className="h-px bg-neutral-100 flex-grow"></div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-900">Why It Matters</h2>
                </div>
                <div className="relative p-12 md:p-20 border border-neutral-100 bg-neutral-50/30 overflow-hidden">
                   <div className={`absolute top-0 left-0 w-2 h-full ${styles.accent}`}></div>
                   <div className="prose prose-xl prose-neutral max-w-none relative z-10">
                    <MarkdownContent content={power} />
                  </div>
                </div>
              </section>
            )}

            {/* 03. Insider Secrets */}
            {secrets && secrets.length > 0 && (
              <section className="group">
                <div className="flex items-center gap-6 mb-16">
                  <span className="text-6xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500">03</span>
                  <div className="h-px bg-neutral-100 flex-grow"></div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-900">Insider Secrets</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 border border-neutral-100">
                  {secrets.map((secret, i) => (
                    <div key={i} className="bg-white p-12 hover:bg-neutral-50 transition-colors duration-300 group/secret">
                      <div className={`w-8 h-1 ${styles.accent} mb-6 transform origin-left group-hover/secret:scale-x-150 transition-transform duration-500`}></div>
                      <div className="prose prose-lg text-neutral-800 font-medium">
                        <MarkdownContent content={secret} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 04. Real World Proof */}
            {(examples || story) && (
              <section className="group">
                <div className="flex items-center gap-6 mb-16">
                  <span className="text-6xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500">04</span>
                  <div className="h-px bg-neutral-100 flex-grow"></div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-900">Real World Proof</h2>
                </div>
                
                {story && (
                  <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Case Study</span>
                       <div className="h-px w-8 bg-neutral-100"></div>
                    </div>
                    <div className="bg-neutral-900 text-white p-12 md:p-24 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12">
                          <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L19.017 3C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L8 3C9.65685 3 11 4.34315 11 6V15C11 18.3137 8.31371 21 5 21H3Z"/></svg>
                       </div>
                       <div className="prose prose-2xl prose-invert max-w-none relative z-10 font-medium italic leading-snug">
                        <MarkdownContent content={story} dark={true} />
                      </div>
                    </div>
                  </div>
                )}

                {examples && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {examples.map((ex, i) => (
                      <div key={i} className="p-10 border border-neutral-100 hover:border-neutral-900 transition-all duration-500 group/ex">
                        <div className="text-[10px] font-bold text-neutral-300 mb-6 group-hover/ex:text-neutral-900 transition-colors tracking-widest uppercase">Example {i + 1}</div>
                        <div className="prose prose-neutral max-w-none">
                          <MarkdownContent content={ex} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

          </div>

          {/* Sidebar Column (Sticky) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-24">
              
              {/* Visualizer (Mobile Only - shown in hero on Desktop) */}
              <div className="lg:hidden border border-neutral-100 p-8 bg-neutral-50 flex items-center justify-center">
                 <Visualizer module={module} />
              </div>

              {/* Roadmap */}
              <div className="p-10 border border-neutral-100">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-900 mb-12 flex items-center justify-between">
                  <span>Learning Path</span>
                  <span className="w-8 h-px bg-neutral-200"></span>
                </h3>
                <div className="space-y-12">
                  {roadmap.map((step, i) => (
                    <div key={i} className="group/step">
                      <div className="flex items-center gap-4 mb-3">
                         <span className="text-[10px] font-bold text-neutral-300 group-hover/step:text-neutral-900 transition-colors">0{i + 1}</span>
                         <div className="h-px w-4 bg-neutral-100 group-hover/step:w-8 group-hover/step:bg-neutral-900 transition-all duration-500"></div>
                      </div>
                      <p className="text-xl font-bold text-neutral-900 leading-tight group-hover/step:translate-x-1 transition-transform duration-500">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              {challenges && challenges.length > 0 && (
                <div className="bg-neutral-900 p-12 text-white group/challenge">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">
                    Your Challenge
                  </h3>
                  {challenges.map((c, i) => (
                    <p key={i} className="text-2xl font-bold text-white leading-tight group-hover/challenge:translate-y-[-4px] transition-transform duration-500">
                      {c}
                    </p>
                  ))}
                  <div className={`w-full h-1 mt-8 bg-white/10 relative overflow-hidden`}>
                     <div className={`absolute inset-0 ${styles.accent} transform -translate-x-full group-hover/challenge:translate-x-0 transition-transform duration-1000`}></div>
                  </div>
                </div>
              )}

              {/* Tools */}
              {resources && (
                <div className="p-10 border border-neutral-100 bg-neutral-50/50">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-900 mb-8">
                    Toolkit
                  </h3>
                  <ul className="space-y-6">
                    {resources.map((res, i) => (
                      <li key={i} className="flex flex-col group/tool">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-lg font-bold text-neutral-700 group-hover/tool:text-neutral-900 transition-colors">{res.name}</span>
                           <span className={`text-[8px] font-black uppercase tracking-tighter ${styles.text} border ${styles.border} px-1.5 py-0.5 rounded-sm`}>
                             {res.type}
                           </span>
                        </div>
                        <div className="h-px w-0 bg-neutral-200 group-hover/tool:w-full transition-all duration-700"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      {/* Mindset Footer */}
      {mindset && (
        <footer className="bg-neutral-100 py-32 mt-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="block text-sm font-bold uppercase tracking-widest text-neutral-500 mb-10">
              Final Thought
            </span>
            <p className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight">
              "{mindset}"
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

// Mini Visualizers Component
function Visualizer({ module, variant = 'standard' }: { module: LearningModule, variant?: 'standard' | 'large' | 'portrait' }) {
  const styles = categoryStyles[module.category] || defaultStyle;

  // Specialized Visualizers based on visualType
  if (module.visualType === 'color-wheel') {
     return <ColorPaletteVisualizer module={module} />;
  }

  // Default visuals
  switch (module.visualType) {
    case 'chart':
      return (
        <div className="w-full max-w-xs aspect-square bg-white p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="50" cy="50" r="40" />
              <path d="M50 10V90M10 50H90" />
            </svg>
          </div>
          <div className="flex items-end justify-between h-32 gap-3 mb-6 relative z-10">
            {[40, 65, 35, 90, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-2 h-full group/bar">
                <div 
                  className={`w-full ${styles.accent} rounded-t-sm transition-all duration-700 ease-out origin-bottom scale-y-0 group-hover:scale-y-100`} 
                  style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
                />
                <div className="h-1 bg-neutral-100 w-full" />
              </div>
            ))}
          </div>
          <div className="relative z-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-1">Performance Index</div>
            <div className="text-lg font-black text-neutral-900 leading-none">Exponential Growth</div>
          </div>
        </div>
      );
    case 'book':
      return (
        <div className="relative w-56 h-80 perspective-1000 group cursor-pointer">
          <div className="absolute inset-0 bg-neutral-900 rounded-r-xl rounded-l-sm shadow-2xl transform rotate-Y-[-25deg] group-hover:rotate-Y-[-5deg] transition-transform duration-700 origin-left flex flex-col p-8 border-l-8 border-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] mb-auto">Swiss Design Library</div>
            <div className="text-7xl text-center my-8 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500">
              {module.visualContent || '📚'}
            </div>
            <div className="mt-auto">
              <div className={`w-8 h-1 ${styles.accent} mb-4`}></div>
              <div className="text-white font-black text-xl leading-[1.1] tracking-tight line-clamp-2">
                {module.title}
              </div>
            </div>
          </div>
          {/* Book Spine Shadow */}
          <div className="absolute -left-2 top-2 bottom-2 w-4 bg-black/20 blur-md -z-10 transform skew-y-12"></div>
        </div>
      );
    case 'checklist':
      return (
        <div className="w-full max-w-xs bg-neutral-900 p-8 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/10 transition-colors"></div>
           <div className="space-y-6 relative z-10">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center gap-4">
                 <div className={`w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors`}>
                   <div className={`w-2 h-2 rounded-full ${styles.accent} scale-0 group-hover:scale-100 transition-transform duration-500`} style={{ delay: `${i * 150}ms` }}></div>
                 </div>
                 <div className="h-1 bg-white/10 rounded-full flex-grow overflow-hidden">
                    <div className={`h-full ${styles.accent} w-0 group-hover:w-full transition-all duration-1000`} style={{ transitionDelay: `${i * 200}ms` }}></div>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-10 flex justify-between items-end relative z-10">
              <div>
                <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Status</div>
                <div className="text-white font-bold">Optimization</div>
              </div>
              <div className="text-2xl font-black text-white/20">100%</div>
           </div>
        </div>
      );
    case 'quote':
      return (
        <div className="text-center max-w-sm relative p-12 bg-white border border-neutral-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group overflow-hidden">
           <div className={`absolute top-0 left-0 w-full h-1 ${styles.accent}`}></div>
           <div className="text-[12rem] text-neutral-50 font-black leading-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 select-none group-hover:text-neutral-100 transition-colors duration-700 italic">"</div>
           <p className="text-3xl font-bold text-neutral-900 leading-tight relative z-10 tracking-tight">
             {module.visualContent?.replace(/"/g, '') || 'Intelligence made visible.'}
           </p>
           <div className="mt-10 flex items-center justify-center gap-4 relative z-10">
              <div className="h-px w-8 bg-neutral-200"></div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Philosophy</div>
              <div className="h-px w-8 bg-neutral-200"></div>
           </div>
        </div>
      );
    case 'icon':
      return (
        <div className="w-64 h-64 bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.12)] flex items-center justify-center border border-neutral-100 relative overflow-hidden group">
           {/* Background Grid Accent */}
           <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <span className="text-8xl transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 filter drop-shadow-2xl">
               {module.visualContent || (styles.icon)}
             </span>
             <div className={`mt-6 h-1 w-0 ${styles.accent} group-hover:w-12 transition-all duration-500 rounded-full`}></div>
           </div>

           {/* Decorative Corner Labels */}
           <div className="absolute top-8 left-8 text-[8px] font-black text-neutral-200 uppercase tracking-widest">Type: {module.visualType}</div>
           <div className="absolute bottom-8 right-8 text-[8px] font-black text-neutral-200 uppercase tracking-widest">{module.id.toUpperCase()}</div>
        </div>
      );
    case 'anatomy':
    case 'type-scale':
       return (
         <div className="bg-neutral-900 p-10 rounded-2xl shadow-2xl text-white w-full max-w-xs relative overflow-hidden border border-white/10 group">
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <span className="text-[8rem] font-black tracking-tighter leading-none block mb-4 group-hover:translate-x-2 transition-transform duration-500 italic">Aa</span>    
              <div className="space-y-6">
                <div className="flex justify-between text-[10px] text-white/40 font-black uppercase tracking-widest">
                  <span>Structural Analysis</span>
                  <span className="text-white/80">v2.0</span>
                </div>
                <div className="w-full bg-white/10 h-0.5 relative">
                  <div className={`absolute top-0 left-0 h-full ${styles.accent} w-[65%] group-hover:w-full transition-all duration-1000`}></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest">Kerning: Opt</div>
                  <div className="p-3 bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest">Grid: 12pt</div>
                </div>
              </div>
            </div>
         </div>
       );
    default:
      return (
        <div className="text-center group">
           <div className="text-9xl mb-6 transform group-hover:scale-110 transition-transform duration-700 filter drop-shadow-2xl grayscale group-hover:grayscale-0">   
             {module.visualContent || (styles.icon)}
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300">Default Visual</div>
        </div>
      );
  }
}

function ColorPaletteVisualizer({ module }: { module: LearningModule }) {       
  return (
    <div className="w-full max-w-md bg-white rounded-[2.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-hidden group">
      <div className="bg-neutral-50 rounded-[2rem] overflow-hidden flex flex-col">
         {/* Color Swatches */}
         <div className="h-56 flex gap-1 p-1">
            <div className="flex-[2] bg-[#1a1a1a] relative group/color overflow-hidden rounded-l-[1.5rem]">
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/color:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/50">#1A1A1A</div> 
            </div>
            <div className="flex-1 bg-[#FF3B30] relative group/color">
               <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/50 opacity-0 group-hover/color:opacity-100 transition-opacity">#FF3B30</div> 
            </div>
            <div className="flex-1 bg-[#007AFF] relative group/color">
               <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/50 opacity-0 group-hover/color:opacity-100 transition-opacity">#007AFF</div> 
            </div>
            <div className="flex-1 bg-[#4CD964] relative group/color rounded-r-[1.5rem]">
               <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/50 opacity-0 group-hover/color:opacity-100 transition-opacity">#4CD964</div> 
            </div>
         </div>

         {/* Meta Information */}
         <div className="p-8">
            <div className="flex justify-between items-start mb-8">
               <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2">Palette System</div>
                  <h4 className="text-2xl font-black text-neutral-900 tracking-tight">Swiss High Contrast</h4>
               </div>
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200"></div>)}
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white border border-neutral-100 rounded-xl">
                  <div className="text-[9px] font-bold text-neutral-400 uppercase mb-1">Contrast Ratio</div>
                  <div className="text-lg font-black text-neutral-900">21:1</div>
               </div>
               <div className="p-4 bg-white border border-neutral-100 rounded-xl">
                  <div className="text-[9px] font-bold text-neutral-400 uppercase mb-1">Accessibility</div>
                  <div className="text-lg font-black text-neutral-900 text-emerald-500">AAA</div>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-100 flex gap-4">
               <button className="flex-1 bg-neutral-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all transform hover:-translate-y-1">Download ASE</button>    
               <button className="w-14 h-14 border border-neutral-200 flex items-center justify-center rounded-xl hover:bg-neutral-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
