'use client';

import React from 'react';
import { UserSearchProfile } from './types';
import { motion } from 'framer-motion';

interface Props {
  profile: UserSearchProfile;
}

export default function IntelligenceDashboard({ profile }: Props) {
  const stats = [
    { label: 'Search Ability', value: profile.skills.search, color: 'bg-blue-500' },
    { label: 'Research Depth', value: profile.skills.research, color: 'bg-purple-500' },
    { label: 'Info Filtering', value: profile.skills.filtering, color: 'bg-green-500' },
    { label: 'AI Prompting', value: profile.skills.aiPrompting, color: 'bg-pink-500' },
    { label: 'Curiosity Index', value: profile.skills.curiosity, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">Intelligence Dashboard</h2>
          <p className="text-neutral-500 mt-2">Your cognitive growth & search capability analysis.</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Current Rank</div>
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {profile.rank}
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill Matrix */}
        <div className="md:col-span-2 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Skill Matrix
          </h3>
          <div className="space-y-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-sm font-bold mb-1">
                  <span className="text-neutral-600">{stat.label}</span>
                  <span className="text-neutral-900">{stat.value}%</span>
                </div>
                <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full ${stat.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Progress */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          
          <h3 className="font-bold text-lg mb-6 relative z-10">Daily Activity</h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <div className="text-3xl font-bold">{profile.dailyProgress.searchesCompleted}</div>
              <div className="text-sm text-neutral-400">Smart Searches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">{profile.dailyProgress.challengesSolved}</div>
              <div className="text-sm text-neutral-400">Challenges Solved</div>
            </div>
             <div>
              <div className="text-3xl font-bold text-orange-400">{profile.dailyProgress.resourcesFound}</div>
              <div className="text-sm text-neutral-400">Resources Discovered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Row */}
      <div>
        <h3 className="font-bold text-lg mb-4">Recent Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.achievements.map((ach) => (
            <motion.div
              key={ach.id}
              whileHover={{ y: -5 }}
              className="bg-white border border-neutral-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-2">{ach.icon}</div>
              <div className="font-bold text-sm text-neutral-900">{ach.title}</div>
              <div className="text-xs text-neutral-500 mt-1">{ach.description}</div>
            </motion.div>
          ))}
          
          {/* Locked Achievement Placeholder */}
          <div className="bg-neutral-50 border border-neutral-100 border-dashed p-4 rounded-xl flex flex-col items-center text-center justify-center opacity-60">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-bold text-sm text-neutral-400">Locked</div>
            <div className="text-xs text-neutral-400 mt-1">Keep searching...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
