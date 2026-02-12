'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserSearchProfile } from './types';

interface Props {
  profile: UserSearchProfile;
  setProfile: (p: UserSearchProfile) => void;
}

export default function SearchPlayground({ profile, setProfile }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { q: "What year was the first iPhone released?", a: "2007" },
    { q: "Who wrote 'The Design of Everyday Things'?", a: "don norman" },
    { q: "What is the hex code for pure red?", a: "#ff0000" },
    { q: "What does 'HTTP' stand for?", a: "hypertext transfer protocol" },
  ];

  const [input, setInput] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setIsPlaying(true);
    setTimeLeft(60);
    setScore(0);
    setCurrentQuestion(0);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().includes(questions[currentQuestion].a)) {
      setScore(s => s + 100);
      setProfile({ ...profile, xp: profile.xp + 100 });
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(c => c + 1);
        setInput('');
      } else {
        setIsPlaying(false); // Win
      }
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      {!isPlaying && timeLeft === 60 ? (
        <div className="max-w-md">
          <div className="text-6xl mb-6">🎮</div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Speed Search Challenge</h2>
          <p className="text-neutral-500 mb-8">
            You have 60 seconds to answer as many questions as possible using Google/Search. 
            Test your information retrieval speed!
          </p>
          <button
            onClick={startGame}
            className="px-8 py-4 bg-primary text-white text-xl font-bold rounded-full hover:bg-accent transition-all shadow-lg hover:scale-105"
          >
            Start Challenge
          </button>
        </div>
      ) : !isPlaying && timeLeft < 60 ? (
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 max-w-md w-full">
           <div className="text-6xl mb-4">🏆</div>
           <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
           <div className="text-4xl font-bold text-primary mb-6">{score} Points</div>
           <p className="text-neutral-500 mb-8">You answered {currentQuestion} questions correctly.</p>
           <button
            onClick={startGame}
            className="w-full py-3 bg-neutral-900 text-white font-bold rounded-xl hover:bg-black transition-all"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl border border-neutral-100 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-neutral-400">Score: <span className="text-neutral-900">{score}</span></div>
            <div className={`text-3xl font-mono font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-neutral-900'}`}>
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-neutral-500 uppercase tracking-widest mb-2">Question {currentQuestion + 1}</h3>
            <p className="text-3xl font-bold text-neutral-900">{questions[currentQuestion].q}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type answer here..."
              className="w-full text-center text-2xl p-4 border-b-2 border-neutral-200 focus:border-primary outline-none transition-colors bg-transparent"
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
          
          <p className="mt-4 text-sm text-neutral-400">Press Enter to submit</p>
        </div>
      )}
    </div>
  );
}
