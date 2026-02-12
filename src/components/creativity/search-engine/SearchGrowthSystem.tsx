'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntelligenceDashboard from './IntelligenceDashboard';
import SmartSearchCoach from './SmartSearchCoach';
import SearchSkillTrainer from './SearchSkillTrainer';
import QueryOptimizer from './QueryOptimizer';
import ResourceDiscovery from './ResourceDiscovery';
import DigitalIQBooster from './DigitalIQBooster';
import SearchPlayground from './SearchPlayground';
import { UserSearchProfile } from './types';

// Mock Initial Data
const initialProfile: UserSearchProfile = {
  id: 'u1',
  userId: 'curr_user',
  level: 5,
  xp: 2450,
  rank: 'Data Detective',
  streak: 12,
  skills: {
    search: 65,
    research: 40,
    filtering: 55,
    aiPrompting: 70,
    curiosity: 85,
  },
  dailyProgress: {
    searchesCompleted: 14,
    challengesSolved: 2,
    resourcesFound: 5,
  },
  achievements: [
    { id: 'a1', title: 'Boolean Master', description: 'Used 50 boolean operators', icon: '🔍', unlockedAt: new Date() },
    { id: 'a2', title: 'Source Skeptic', description: 'Verified 10 sources', icon: '🛡️', unlockedAt: new Date() },
  ],
};

type Tab = 'dashboard' | 'coach' | 'trainer' | 'optimizer' | 'discovery' | 'iq' | 'playground';

export default function SearchGrowthSystem() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [profile, setProfile] = useState<UserSearchProfile>(initialProfile);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'coach', label: 'Search Coach', icon: '🧠' },
    { id: 'trainer', label: 'Skill Trainer', icon: '🏋️' },
    { id: 'optimizer', label: 'Query AI', icon: '⚡' },
    { id: 'discovery', label: 'Resources', icon: '💎' },
    { id: 'iq', label: 'Digital IQ', icon: '💡' },
    { id: 'playground', label: 'Playground', icon: '🎮' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden min-h-[800px] flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-neutral-50 border-r border-neutral-100 p-6 flex-shrink-0">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-neutral-800 leading-tight">
            Search<span className="text-primary">Intel</span>
          </h2>
          <p className="text-xs text-neutral-500 font-medium tracking-wide uppercase mt-1">Growth System</p>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white shadow-md transform scale-105'
                  : 'text-neutral-500 hover:bg-white hover:text-neutral-800 hover:shadow-sm'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mini Stats in Sidebar */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-neutral-400 uppercase">Level {profile.level}</span>
            <span className="text-xs font-bold text-primary">{profile.xp} XP</span>
          </div>
          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent" 
              style={{ width: `${(profile.xp % 1000) / 10}%` }}
            />
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs font-medium text-neutral-600">
             <span className="text-orange-500">🔥 {profile.streak} Day Streak</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-6 md:p-10 overflow-y-auto h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {activeTab === 'dashboard' && <IntelligenceDashboard profile={profile} />}
            {activeTab === 'coach' && <SmartSearchCoach />}
            {activeTab === 'trainer' && <SearchSkillTrainer profile={profile} setProfile={setProfile} />}
            {activeTab === 'optimizer' && <QueryOptimizer />}
            {activeTab === 'discovery' && <ResourceDiscovery profile={profile} />}
            {activeTab === 'iq' && <DigitalIQBooster profile={profile} setProfile={setProfile} />}
            {activeTab === 'playground' && <SearchPlayground profile={profile} setProfile={setProfile} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
