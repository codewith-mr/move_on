export interface UserSearchProfile {
  id: string;
  userId: string;
  level: number;
  xp: number;
  rank: string; // e.g., "Novice Seeker", "Data Detective", "Information Architect"
  streak: number;
  skills: {
    search: number; // 0-100
    research: number;
    filtering: number;
    aiPrompting: number;
    curiosity: number;
  };
  dailyProgress: {
    searchesCompleted: number;
    challengesSolved: number;
    resourcesFound: number;
  };
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface SearchChallenge {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  scenario: string;
  task: string;
  expectedQueryKeywords: string[];
  hint: string;
  xpReward: number;
  solutionExplanation: string;
}

export interface SearchTip {
  id: string;
  category: 'Google' | 'AI' | 'Academic' | 'Social';
  title: string;
  content: string;
  example: {
    bad: string;
    good: string;
  };
}

export interface ResourceRecommendation {
  id: string;
  title: string;
  type: 'Blog' | 'Course' | 'Tool' | 'Video' | 'PDF' | 'Repo';
  url: string;
  reason: string; // "Because you struggled with regex..."
  tags: string[];
}

export interface DigitalIQLesson {
  id: string;
  title: string;
  duration: string; // "2 min"
  category: 'Fake News' | 'Source Verification' | 'AI Ethics' | 'Deep Work';
  content: string;
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
  };
}

// Simulated Database Schema
export interface DatabaseSchema {
  users: UserSearchProfile[];
  challenges: SearchChallenge[];
  lessons: DigitalIQLesson[];
  resources: ResourceRecommendation[];
}
