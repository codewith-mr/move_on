'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserSearchProfile, DigitalIQLesson } from './types';

interface Props {
  profile: UserSearchProfile;
  setProfile: (p: UserSearchProfile) => void;
}

const lessons: DigitalIQLesson[] = [
  {
    id: 'l1',
    title: 'Spotting Fake News 101',
    duration: '2 min',
    category: 'Fake News',
    content: 'Always check the domain name. "abcnews.com.co" is NOT "abcnews.com". Reverse image search profile pictures of authors if they look generated.',
    quiz: {
      question: 'Which URL is likely fake?',
      options: ['nytimes.com', 'bbc.co.uk', 'cnn-breaking-news.xyz', 'stanford.edu'],
      correctIndex: 2
    }
  },
  {
    id: 'l2',
    title: 'Lateral Reading',
    duration: '3 min',
    category: 'Source Verification',
    content: 'Don\'t stay on the site you are evaluating. Open new tabs to search FOR the organization, not just WITHIN it. See what Wikipedia or Snopes says about them.',
    quiz: {
      question: 'What is Lateral Reading?',
      options: ['Reading fast', 'Reading multiple books', 'Checking other sources about a site', 'Reading sideways'],
      correctIndex: 2
    }
  },
  {
    id: 'l3',
    title: 'The Echo Chamber Effect',
    duration: '2 min',
    category: 'Deep Work',
    content: 'Algorithms show you what you agree with. To be smarter, intentionally search for opposing viewpoints to challenge your confirmation bias.',
    quiz: {
      question: 'How do you break an echo chamber?',
      options: ['Delete social media', 'Search for opposing views', 'Block people', 'Only read news'],
      correctIndex: 1
    }
  }
];

export default function DigitalIQBooster({ profile, setProfile }: Props) {
  const [activeLesson, setActiveLesson] = useState<DigitalIQLesson | null>(null);
  const [quizState, setQuizState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const handleAnswer = (idx: number) => {
    if (!activeLesson?.quiz) return;
    
    if (idx === activeLesson.quiz.correctIndex) {
      setQuizState('correct');
      // Mock XP gain
      setProfile({ ...profile, xp: profile.xp + 50 });
    } else {
      setQuizState('wrong');
    }
  };

  return (
    <div className="h-full flex flex-col">
       <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
          <span className="text-4xl">💡</span> Digital IQ Booster
        </h2>
        <p className="text-neutral-500 mt-2">Micro-lessons to upgrade your internet survival skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson.id}
            whileHover={{ y: -5 }}
            onClick={() => { setActiveLesson(lesson); setQuizState('idle'); }}
            className="bg-white border border-neutral-200 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                {lesson.category}
              </span>
              <span className="text-xs font-bold text-neutral-400">⏱ {lesson.duration}</span>
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{lesson.title}</h3>
            <p className="text-sm text-neutral-500 line-clamp-2">{lesson.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Lesson Modal Overlay */}
      <AnimatePresence>
        {activeLesson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveLesson(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setActiveLesson(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">{activeLesson.category}</span>
              <h2 className="text-3xl font-bold mb-6">{activeLesson.title}</h2>
              
              <div className="prose prose-lg text-neutral-600 mb-8">
                <p>{activeLesson.content}</p>
              </div>

              {activeLesson.quiz && (
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🤔</span> Quick Check: {activeLesson.quiz.question}
                  </h4>
                  
                  <div className="space-y-3">
                    {activeLesson.quiz.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={quizState === 'correct'}
                        className={`w-full text-left p-4 rounded-xl border transition-all font-medium ${
                          quizState === 'correct' && idx === activeLesson.quiz!.correctIndex
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : quizState === 'wrong' && quizState !== 'idle'
                            ? 'opacity-50'
                            : 'bg-white border-neutral-200 hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        {opt}
                        {quizState === 'correct' && idx === activeLesson.quiz!.correctIndex && ' ✅'}
                      </button>
                    ))}
                  </div>

                  {quizState === 'correct' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center text-green-600 font-bold"
                    >
                      Correct! +50 XP
                    </motion.div>
                  )}
                  {quizState === 'wrong' && (
                    <div className="mt-4 text-center text-red-500 font-bold">Try again!</div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
