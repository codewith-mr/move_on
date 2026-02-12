'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserSearchProfile, SearchChallenge } from './types';

interface Props {
  profile: UserSearchProfile;
  setProfile: (p: UserSearchProfile) => void;
}

const challenges: SearchChallenge[] = [
  {
    id: 'c1',
    title: 'The Hidden PDF',
    difficulty: 'Beginner',
    description: 'Find the original PDF manual for the Apollo 11 Guidance Computer.',
    scenario: 'A retro-computing enthusiast needs the original source documentation.',
    task: 'Find the document and verify the publication year.',
    expectedQueryKeywords: ['apollo 11', 'guidance computer', 'manual', 'filetype:pdf'],
    hint: 'Use the filetype: operator to filter for PDF documents only.',
    xpReward: 150,
    solutionExplanation: 'A smart search would be: "Apollo 11 guidance computer manual filetype:pdf". The document is from 1969/1970.'
  },
  {
    id: 'c2',
    title: 'Academic Deep Dive',
    difficulty: 'Intermediate',
    description: 'Find a research paper about "Flow State" published after 2020.',
    scenario: 'You are writing a thesis on modern psychological productivity frameworks.',
    task: 'Locate a paper title.',
    expectedQueryKeywords: ['flow state', 'psychology', 'after:2020', 'site:edu', 'filetype:pdf'],
    hint: 'Combine "site:edu" with "after:2020" to find recent academic sources.',
    xpReward: 300,
    solutionExplanation: 'Try: "Flow state psychology site:edu after:2020 filetype:pdf"'
  }
];

export default function SearchSkillTrainer({ profile, setProfile }: Props) {
  const [activeChallenge, setActiveChallenge] = useState<SearchChallenge | null>(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'success' | 'error'>('idle');

  const handleStart = (c: SearchChallenge) => {
    setActiveChallenge(c);
    setFeedback('idle');
    setAnswer('');
  };

  const handleSubmit = () => {
    // Mock validation logic
    if (answer.length > 5) {
      setFeedback('success');
      // Update profile XP (mock)
      const newProfile = { ...profile, xp: profile.xp + (activeChallenge?.xpReward || 0) };
      setProfile(newProfile);
    } else {
      setFeedback('error');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
            <span className="text-4xl">🏋️</span> Search Skill Trainer
          </h2>
          <p className="text-neutral-500 mt-2">Daily workouts to build your information retrieval muscles.</p>
        </div>
        <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold text-sm">
           Daily Streak: {profile.streak} Days 🔥
        </div>
      </div>

      {activeChallenge ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-xl flex-1 flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
             <button 
               onClick={() => setActiveChallenge(null)}
               className="text-neutral-400 hover:text-neutral-900 font-bold flex items-center gap-2 text-sm"
             >
               ← Back to Challenges
             </button>
             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
               activeChallenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
             }`}>
               {activeChallenge.difficulty}
             </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">{activeChallenge.title}</h3>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">{activeChallenge.description}</p>
          
          <div className="bg-neutral-50 rounded-xl p-6 mb-8 border border-neutral-100">
            <h4 className="font-bold text-neutral-900 mb-2">Scenario</h4>
            <p className="text-neutral-600 italic">{activeChallenge.scenario}</p>
          </div>

          <div className="mt-auto space-y-4">
             <label className="block font-bold text-neutral-900">Your Answer / Findings</label>
             <textarea 
               value={answer}
               onChange={(e) => setAnswer(e.target.value)}
               placeholder="Paste the URL or title of the document you found..."
               className="w-full bg-white border border-neutral-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all h-32 resize-none"
             />
             
             {feedback === 'error' && (
               <p className="text-red-500 text-sm font-bold">That doesn't look quite right. Try again or check the hint!</p>
             )}
             
             {feedback === 'success' ? (
                <div className="bg-green-100 border border-green-200 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="text-green-800 font-bold text-xl">Challenge Complete!</h4>
                  <p className="text-green-700">You earned {activeChallenge.xpReward} XP</p>
                  <button 
                    onClick={() => setActiveChallenge(null)}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700"
                  >
                    Continue
                  </button>
                </div>
             ) : (
               <div className="flex gap-4">
                 <button className="flex-1 py-4 rounded-xl border border-neutral-200 font-bold text-neutral-500 hover:bg-neutral-50 transition-colors">
                   Get a Hint
                 </button>
                 <button 
                   onClick={handleSubmit}
                   className="flex-[2] py-4 rounded-xl bg-neutral-900 text-white font-bold hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                 >
                   Submit Findings
                 </button>
               </div>
             )}
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              whileHover={{ y: -5 }}
              onClick={() => handleStart(challenge)}
              className="bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-100 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-primary/10"></div>
              
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                  challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {challenge.difficulty}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{challenge.title}</h3>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-2">{challenge.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-xs font-bold text-neutral-400">+{challenge.xpReward} XP</span>
                   <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     →
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Locked Slots */}
          {[1, 2].map((i) => (
            <div key={i} className="border-2 border-dashed border-neutral-200 p-6 rounded-2xl flex items-center justify-center text-neutral-300">
               <div className="text-center">
                 <div className="text-2xl mb-2">🔒</div>
                 <div className="font-bold">Come back tomorrow</div>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
