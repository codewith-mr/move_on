'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  { id: 'idea', name: 'Idea Generator', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { id: 'story', name: 'Story Builder', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { id: 'prompt', name: 'Design Prompts', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'startup', name: 'Startup Ideas', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'brainstorm', name: 'Brainstorm AI', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
];

export default function CreativityPlayground() {
  const [activeTool, setActiveTool] = useState('idea');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    
    // Simulate AI Delay
    setTimeout(() => {
      setIsGenerating(false);
      setOutput(generateMockResponse(activeTool, input));
    }, 1500);
  };

  const generateMockResponse = (tool: string, query: string) => {
    switch (tool) {
      case 'idea':
        return `Here are 5 creative ideas for "${query}":\n\n1. A gamified app that turns ${query} into a daily quest.\n2. A subscription box service focused on niche ${query} collectibles.\n3. An AI-powered tool that predicts trends in ${query}.\n4. A community-driven platform for swapping ${query} resources.\n5. An interactive VR experience simulating ${query} in history.`;
      case 'story':
        return `Title: The ${query} Paradox\n\nThe sun had barely risen when Elara found the artifact. It wasn't just any ${query}, but one that pulsed with a rhythm matching her own heartbeat...`;
      case 'prompt':
        return `**UI/UX Prompt:** Design a mobile interface for a "${query}" application. Focus on accessibility and use a Neumorphic design style.\n\n**Art Prompt:** A surrealist digital painting depicting "${query}" as a floating island in the sky.`;
      case 'startup':
        return `**Startup Name:** ${query}ify\n**Pitch:** The Uber for ${query}. Connects local experts with users needing instant help with ${query}.\n**Revenue Model:** Commission-based marketplace + Premium subscription.`;
      case 'brainstorm':
        return `Brainstorming angles for "${query}":\n- **Perspective 1 (User):** How does it solve their immediate pain point?\n- **Perspective 2 (Tech):** Can blockchain or AI enhance it?\n- **Perspective 3 (Market):** Is there an untapped blue ocean here?\n- **Constraint:** What if you had to build it for $0?`;
      default:
        return 'No output generated.';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 flex items-center gap-3">
          <span className="p-2 bg-primary/10 rounded-lg text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </span>
          AI Creativity Playground
        </h2>
        <p className="text-neutral-500 mt-2">Experiment with ideas, generate stories, and brainstorm with our AI creative engine.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tools */}
        <div className="w-full lg:w-1/4 flex flex-col gap-2">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => { setActiveTool(tool.id); setOutput(null); setInput(''); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                activeTool === tool.id 
                  ? 'bg-primary text-white shadow-md transform scale-105' 
                  : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
              </svg>
              <span className="font-medium">{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Main Interface */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
            <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">
              {activeTool === 'idea' ? 'Enter a Topic' : 
               activeTool === 'story' ? 'Story Keywords' : 
               activeTool === 'prompt' ? 'Design Context' : 
               activeTool === 'startup' ? 'Industry / Interest' : 'Problem to Solve'}
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., Sustainable Coffee Shop, Time Travel, Cyberpunk UI..."
                className="flex-1 bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !input}
                className={`px-6 py-3 rounded-xl font-bold text-white transition-all flex items-center gap-2 ${
                  isGenerating || !input ? 'bg-neutral-300 cursor-not-allowed' : 'bg-primary hover:bg-accent shadow-lg hover:shadow-xl active:scale-95'
                }`}
              >
                {isGenerating ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                Generate
              </button>
            </div>
          </div>

          <AnimatePresence mode='wait'>
            {output && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm relative group"
              >
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-400 hover:text-primary" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">Result</h3>
                <div className="prose prose-neutral max-w-none text-neutral-700 whitespace-pre-wrap font-medium">
                  {output}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
