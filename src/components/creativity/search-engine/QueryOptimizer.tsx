'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Platform = 'Google' | 'YouTube' | 'ChatGPT' | 'GitHub' | 'Scholar';

export default function QueryOptimizer() {
  const [input, setInput] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('Google');
  const [optimized, setOptimized] = useState('');
  const [copied, setCopied] = useState(false);

  const platforms: { id: Platform; icon: string; color: string }[] = [
    { id: 'Google', icon: '🔍', color: 'bg-blue-500' },
    { id: 'YouTube', icon: '▶️', color: 'bg-red-500' },
    { id: 'ChatGPT', icon: '🤖', color: 'bg-emerald-500' },
    { id: 'GitHub', icon: '💻', color: 'bg-neutral-800' },
    { id: 'Scholar', icon: '🎓', color: 'bg-indigo-500' },
  ];

  const generateQuery = () => {
    if (!input) return;
    
    let result = '';
    const q = input.trim();

    switch (selectedPlatform) {
      case 'Google':
        result = `${q} (guide OR tutorial) -pinterest site:reddit.com OR site:medium.com after:2023`;
        break;
      case 'YouTube':
        result = `${q} "tutorial" duration:long, HD`;
        break;
      case 'ChatGPT':
        result = `Act as an expert in the field. Explain "${q}" to me step-by-step using analogies. Provide 3 real-world examples and a list of common pitfalls to avoid. Format the output as a markdown guide.`;
        break;
      case 'GitHub':
        result = `${q} stars:>1000 language:typescript sort:updated`;
        break;
      case 'Scholar':
        result = `"${q}" source:psychology OR source:neuroscience filetype:pdf`;
        break;
    }
    setOptimized(result);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(optimized);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4">AI Query Optimizer</h2>
        <p className="text-neutral-500 text-lg">Turn vague thoughts into precision-guided missiles for information.</p>
      </div>

      <div className="bg-white border border-neutral-200 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Input Section */}
        <div className="flex-1 p-8 bg-neutral-50 border-r border-neutral-100 flex flex-col">
          <label className="block text-sm font-bold text-neutral-400 mb-4 uppercase tracking-wide">
            1. What are you looking for?
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., learn react hooks..."
            className="w-full bg-white border border-neutral-200 rounded-xl p-4 h-32 resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all mb-8 text-lg"
          />

          <label className="block text-sm font-bold text-neutral-400 mb-4 uppercase tracking-wide">
            2. Choose your weapon
          </label>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  selectedPlatform === p.id
                    ? `${p.color} text-white border-transparent shadow-lg scale-105`
                    : 'bg-white border-neutral-200 text-neutral-500 hover:bg-neutral-50'
                }`}
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-xs font-bold">{p.id}</span>
              </button>
            ))}
          </div>

          <button
            onClick={generateQuery}
            disabled={!input}
            className="mt-auto w-full py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            ⚡ Optimize Query
          </button>
        </div>

        {/* Output Section */}
        <div className="flex-1 p-8 flex flex-col bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

           <label className="block text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wide relative z-10">
            3. Optimized Result
          </label>
          
          <div className="flex-1 flex items-center justify-center relative z-10">
            <AnimatePresence mode="wait">
              {optimized ? (
                <motion.div
                  key={optimized}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 font-mono text-lg leading-relaxed break-words shadow-inner">
                    {optimized}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-black hover:bg-neutral-200'
                      }`}
                    >
                      {copied ? (
                        <>✓ Copied to Clipboard</>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy Result
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-neutral-600">
                  <div className="text-4xl mb-4 opacity-30">🚀</div>
                  <p>Ready to boost your search intelligence...</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
