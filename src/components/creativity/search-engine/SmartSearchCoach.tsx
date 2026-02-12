'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SmartSearchCoach() {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);

  // Simple heuristic-based coaching logic
  useEffect(() => {
    if (!query) {
      setSuggestion(null);
      setExplanation(null);
      return;
    }

    const lowerQ = query.toLowerCase();

    if (lowerQ.includes('learn') || lowerQ.includes('how to')) {
      if (lowerQ.includes('design') || lowerQ.includes('coding')) {
        setSuggestion(`${query.replace('how to learn', 'complete roadmap')} filetype:pdf OR site:github.com`);
        setExplanation("Using 'filetype:pdf' helps find structured guides/books. 'site:github.com' finds developer roadmaps.");
      } else {
        setSuggestion(`"${query}" guide beginner to advanced site:medium.com`);
        setExplanation("Quotes force exact match. Searching specific high-quality sites like Medium often yields better tutorials.");
      }
    } else if (lowerQ.includes('pdf') && !lowerQ.includes('filetype:')) {
      setSuggestion(`${query} filetype:pdf`);
      setExplanation("Always use 'filetype:pdf' operator instead of just typing 'pdf' for cleaner results.");
    } else if (lowerQ.split(' ').length < 3 && query.length > 2) {
      setSuggestion(`define: ${query} OR "${query} vs"`);
      setExplanation("Short queries are ambiguous. Try 'define:' for definitions or 'vs' to compare concepts.");
    } else {
      setSuggestion(null);
      setExplanation(null);
    }

  }, [query]);

  const lessons = [
    { title: 'The Power of Quotes', content: 'Use "search term" to force an exact match.', example: '"UX design principles"' },
    { title: 'Filetype Hunter', content: 'Find specific documents like PDFs or PPTs.', example: 'machine learning filetype:pdf' },
    { title: 'Site Specific', content: 'Search only within a specific website.', example: 'react hooks site:reddit.com' },
    { title: 'Exclude Words', content: 'Use - to remove unwanted results.', example: 'jaguar speed -car' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
          <span className="text-4xl">🧠</span> Smart Search Coach
        </h2>
        <p className="text-neutral-500 mt-2">I'll teach you how to speak the language of search engines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
        {/* Interactive Coach Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-neutral-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <label className="block text-sm font-bold text-neutral-400 mb-2 uppercase tracking-wide">Test Your Query</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. how to learn design..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 text-xl px-6 py-4 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <div className="mt-8 min-h-[120px]">
              {suggestion ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 border border-green-500/30 rounded-xl p-6 relative"
                >
                  <div className="absolute -top-3 left-6 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Coach Suggestion
                  </div>
                  <div className="font-mono text-lg text-green-300 mb-2">{suggestion}</div>
                  <p className="text-sm text-neutral-300 border-t border-white/10 pt-2 mt-2">
                    💡 <span className="font-bold text-white">Why?</span> {explanation}
                  </p>
                </motion.div>
              ) : (
                 <div className="flex items-center justify-center h-full text-neutral-500 italic">
                    Type a query above to get real-time coaching...
                 </div>
              )}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <h3 className="font-bold text-blue-900 mb-2">Did you know?</h3>
             <p className="text-blue-700 text-sm">
                Adding <code className="bg-white px-2 py-0.5 rounded text-blue-600 font-mono font-bold">after:2023</code> to your Google search will only show results from 2024 onwards. Perfect for finding up-to-date tech tutorials.
             </p>
          </div>
        </div>

        {/* Quick Lessons Sidebar */}
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
          <h3 className="font-bold text-neutral-400 uppercase text-xs tracking-wider mb-4">Core Operators</h3>
          {lessons.map((lesson, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-5 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
              <h4 className="font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">{lesson.title}</h4>
              <p className="text-sm text-neutral-500 mb-3">{lesson.content}</p>
              <div className="bg-neutral-100 p-2 rounded text-xs font-mono text-neutral-600 group-hover:bg-neutral-900 group-hover:text-green-400 transition-colors">
                {lesson.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
