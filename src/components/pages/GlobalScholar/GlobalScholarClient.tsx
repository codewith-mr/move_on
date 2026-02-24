'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  GraduationCap,
  FileText,
  Compass,
  ChevronRight,
  BookOpen,
  Trophy,
  Plane,
  Coins,
  Briefcase,
  MapPin,
  ClipboardCheck,
  Search,
  Microscope,
  Users,
  Luggage,
  ShieldCheck,
  Zap,
  MessagesSquare,
  Headphones,
  Laptop,
  Gift,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Printer,
} from 'lucide-react';

type EducationLevel =
  | 'matric'
  | 'intermediate'
  | 'bachelor'
  | 'masters'
  | 'phd'
  | 'diploma';

type LevelOption = {
  key: EducationLevel;
  label: string;
  badge: string;
};

type StreamOption = {
  key: string;
  label: string;
  badge: string;
};

type DirectionItem = {
  title: string;
  desc: string;
  tag?: string;
};

type FieldSpecificPlan = {
  studyPath: DirectionItem[];
  skillsPath: DirectionItem[];
};

type StreamPlan = {
  headline: string;
  summary: string;
  fields: DirectionItem[];
  studyPath: DirectionItem[];
  skillsPath: DirectionItem[];
  fieldPlans?: Record<string, FieldSpecificPlan>;
};

const getNext30DaysActions = (level: EducationLevel, fieldTitle?: string): DirectionItem[] => {
  const focus = fieldTitle || 'this direction';
  if (level === 'matric') {
    return [
      {
        title: 'Talk To A Teacher Or Counselor',
        desc: `Discuss whether ${focus} matches your strengths and interests.`,
      },
      {
        title: 'Improve One Core Subject',
        desc: 'Pick maths, English or science and follow a clear daily revision plan.',
      },
      {
        title: 'Do One Small Project',
        desc: 'Join or start a tiny project or activity related to your chosen stream.',
      },
    ];
  }
  if (level === 'intermediate') {
    return [
      {
        title: 'Shortlist 3–5 Target Degrees',
        desc: `Write down exact degree names linked to ${focus} in Pakistan and abroad.`,
      },
      {
        title: 'Check Country And Test Requirements',
        desc: 'Note language tests, entry tests and key documents for these options.',
      },
      {
        title: 'Start One Focused Skill Track',
        desc: 'Pick a single online course or resource and commit to regular practice.',
      },
    ];
  }
  if (level === 'bachelor') {
    return [
      {
        title: 'Clarify Post-Degree Goal',
        desc: `Decide what role or route you want after graduation in line with ${focus}.`,
      },
      {
        title: 'Map Scholarships Or Funding',
        desc: 'List 3–5 relevant scholarships or programs and their deadlines.',
      },
      {
        title: 'Upgrade One Portfolio Item',
        desc: 'Improve or complete one project you can show in applications.',
      },
    ];
  }
  if (level === 'masters') {
    return [
      {
        title: 'Draft A Short Intent Statement',
        desc: `Write one page on why you want to follow ${focus} and where.`,
      },
      {
        title: 'Contact At Least One Program',
        desc: 'Email an admissions office or professor with a clear question.',
      },
      {
        title: 'Organise Documents',
        desc: 'Collect transcripts, CV and certificates in one place and update them.',
      },
    ];
  }
  if (level === 'phd') {
    return [
      {
        title: 'Refine Your Research Theme',
        desc: `Write a short summary of the problem area you want for ${focus}.`,
      },
      {
        title: 'Identify 5–10 Potential Hosts',
        desc: 'List supervisors or groups whose work aligns with your interests.',
      },
      {
        title: 'Prepare A Contact Template',
        desc: 'Draft a concise email you can adapt when reaching out.',
      },
    ];
  }
  return [
    {
      title: 'Clarify Time And Budget',
      desc: `Decide how much time and money you can invest into ${focus} now.`,
    },
    {
      title: 'Pick One Course Or Provider',
      desc: 'Choose a specific institute or online provider and review their outline.',
    },
    {
      title: 'Plan Practice Or Work Use',
      desc: 'Decide where you will apply the new skills once the course starts.',
    },
  ];
};

const educationLevels: LevelOption[] = [
  { key: 'matric', label: 'Matric / O-Levels', badge: 'Foundation' },
  { key: 'intermediate', label: 'Intermediate / A-Levels', badge: 'Undergraduate Track' },
  { key: 'bachelor', label: 'Bachelor / Hons', badge: 'Masters Track' },
  { key: 'masters', label: 'Masters / MPhil', badge: 'PhD Or Industry' },
  { key: 'phd', label: 'PhD / Research', badge: 'Post-Doc And Beyond' },
  { key: 'diploma', label: 'Diploma / Short Course', badge: 'Skill Upgrade' },
];

const streamsByLevel: Record<EducationLevel, StreamOption[]> = {
  matric: [
    { key: 'science', label: 'Science', badge: 'F.Sc / ICS Route' },
    { key: 'arts', label: 'Arts / Humanities', badge: 'FA Route' },
    { key: 'commerce', label: 'Commerce Basics', badge: 'I.Com Route' },
  ],
  intermediate: [
    { key: 'fsc-pre-eng', label: 'F.Sc Pre-Engineering', badge: 'Engineering And Tech' },
    { key: 'fsc-pre-med', label: 'F.Sc Pre-Medical', badge: 'Medical And Life Sciences' },
    { key: 'ics', label: 'ICS (Computer Science)', badge: 'CS And Data' },
    { key: 'icom', label: 'I.Com (Commerce)', badge: 'Business And Finance' },
    { key: 'fa-arts', label: 'FA (Arts)', badge: 'Social Sciences And Media' },
    { key: 'fa-humanities', label: 'FA (Humanities)', badge: 'Policy And Education' },
  ],
  bachelor: [
    { key: 'engg', label: 'Engineering / STEM', badge: 'MS / Tech Careers' },
    { key: 'cs-it', label: 'Computer Science / IT', badge: 'Global Tech Roles' },
    { key: 'business', label: 'Business / Commerce', badge: 'MBA And Management' },
    { key: 'social-science', label: 'Social Sciences', badge: 'Policy And Research' },
    { key: 'health', label: 'Health / Allied', badge: 'Clinical And Public Health' },
  ],
  masters: [
    { key: 'ms-course', label: 'Course Based Masters', badge: 'Industry Focus' },
    { key: 'ms-research', label: 'Research Masters / MPhil', badge: 'PhD Preparation' },
  ],
  phd: [
    { key: 'research-academic', label: 'Academic Track', badge: 'Faculty And Labs' },
    { key: 'industry-rd', label: 'Industry R&D Track', badge: 'Applied Research' },
  ],
  diploma: [
    { key: 'tech-skill', label: 'Tech Skill Diploma', badge: 'Freelance And Remote Work' },
    { key: 'creative-skill', label: 'Creative Skill Diploma', badge: 'Design And Content' },
    { key: 'business-skill', label: 'Business Skill Diploma', badge: 'Sales And Operations' },
  ],
};

const streamPlans: Record<string, StreamPlan> = {
  'matric:science': {
    headline: 'Science At Matric',
    summary:
      'You can move into engineering, medicine, computing or pure sciences depending on what you enjoy most.',
    fields: [
      { title: 'F.Sc Pre-Engineering', desc: 'For students strong in maths and physics.', tag: 'Engineering' },
      { title: 'F.Sc Pre-Medical', desc: 'For those interested in biology and health.', tag: 'Medicine' },
      { title: 'ICS', desc: 'Blends maths with computing for future CS paths.', tag: 'Computing' },
    ],
    studyPath: [
      {
        title: 'Choose Stream For Intermediate',
        desc: 'Pick F.Sc, ICS or equivalent based on which subjects you actually enjoy solving daily.',
      },
      {
        title: 'Start English And Test Awareness',
        desc: 'Understand basic IELTS, SAT and admission test requirements for countries you like.',
      },
      {
        title: 'Build Project Based Profile',
        desc: 'Join science fairs or small coding and robotics projects that you can show later.',
      },
    ],
    skillsPath: [
      {
        title: 'Maths Foundation',
        desc: 'Strengthen algebra, trigonometry and basic calculus for any science route.',
      },
      {
        title: 'Digital Skills',
        desc: 'Basic Excel, PowerPoint and typing; start an entry-level coding course.',
      },
      {
        title: 'English Communication',
        desc: 'Reading and speaking practice to prepare for future interviews and tests.',
      },
    ],
    fieldPlans: {
      'F.Sc Pre-Engineering': {
        studyPath: [
          {
            title: 'Secure Strong Maths And Physics Marks',
            desc: 'Give extra time to algebra, trigonometry and physics numericals in Matric.',
          },
          {
            title: 'Shortlist Colleges With Good F.Sc Pre-Eng',
            desc: 'Ask seniors and teachers which colleges support engineering focused students well.',
          },
          {
            title: 'Start Engineering Awareness',
            desc: 'Read about electrical, mechanical and civil branches so you pick subjects confidently later.',
          },
        ],
        skillsPath: [
          {
            title: 'Logical Problem Solving',
            desc: 'Solve puzzle style questions and basic quantitative problems regularly.',
          },
          {
            title: 'Tech Curiosity',
            desc: 'Follow channels or pages about engineering projects and inventions.',
          },
          {
            title: 'Maths Confidence',
            desc: 'Work through past papers to become fast and accurate with calculations.',
          },
        ],
      },
      'F.Sc Pre-Medical': {
        studyPath: [
          {
            title: 'Focus On Biology And Chemistry',
            desc: 'Strengthen diagrams, concepts and numericals that will continue in F.Sc.',
          },
          {
            title: 'Explore Schools With Strong Pre-Med',
            desc: 'Look for colleges known for MBBS and allied health preparation.',
          },
          {
            title: 'Understand Future Health Options',
            desc: 'Learn the difference between MBBS, nursing, allied health and biology degrees early.',
          },
        ],
        skillsPath: [
          {
            title: 'Attention To Detail',
            desc: 'Practice careful lab record keeping and neat diagram drawing.',
          },
          {
            title: 'Empathy For People',
            desc: 'Notice how you support friends and family; this matters in health careers.',
          },
          {
            title: 'Basic Health Literacy',
            desc: 'Read simple health articles to get used to medical language.',
          },
        ],
      },
      'ICS': {
        studyPath: [
          {
            title: 'Ensure Maths Comfort',
            desc: 'Get comfortable with algebra and functions that appear in ICS maths.',
          },
          {
            title: 'Confirm Access To Good CS Teachers',
            desc: 'Ask about lab facilities and teachers for computer science at your target college.',
          },
          {
            title: 'Plan Early For CS Degrees',
            desc: 'Look up BS CS and related programs so you know entry expectations.',
          },
        ],
        skillsPath: [
          {
            title: 'Intro To Programming',
            desc: 'Experiment with block based or beginner coding platforms.',
          },
          {
            title: 'Computer Literacy',
            desc: 'Practice typing, file management and basic troubleshooting.',
          },
          {
            title: 'English For Tech',
            desc: 'Learn common technical words you will see in CS books and tutorials.',
          },
        ],
      },
    },
  },
  'matric:arts': {
    headline: 'Arts And Humanities At Matric',
    summary:
      'You are a good fit for creative fields, social sciences, law, media and education.',
    fields: [
      { title: 'FA Arts', desc: 'Keeps doors open for media, design and education degrees.', tag: 'Creative' },
      { title: 'FA Humanities', desc: 'Leads into psychology, IR, sociology and related fields.', tag: 'Social' },
      { title: 'I.Com', desc: 'Possible if you like numbers and want a business angle.', tag: 'Business' },
    ],
    studyPath: [
      {
        title: 'Select FA Combination',
        desc: 'Pick subjects such as psychology, sociology or fine arts that match your interest.',
      },
      {
        title: 'Explore Future Degrees',
        desc: 'Look at BA, BS Social Sciences, Law or Design programs in Pakistan and abroad.',
      },
      {
        title: 'Build Portfolio',
        desc: 'Start a simple blog, drawing portfolio or debate record you can share later.',
      },
    ],
    skillsPath: [
      {
        title: 'Writing Skills',
        desc: 'Practice clear essays and articles; this supports almost every arts field.',
      },
      {
        title: 'Design Or Media Basics',
        desc: 'Canva, basic video editing or graphic tools for future creative work.',
      },
      {
        title: 'Public Speaking',
        desc: 'Join debates or speaking clubs to build confidence and leadership.',
      },
    ],
    fieldPlans: {
      'FA Arts': {
        studyPath: [
          {
            title: 'Choose Creative Friendly Subjects',
            desc: 'Select combinations that suit media, design or communication degrees later.',
          },
          {
            title: 'Map Local And Foreign Arts Degrees',
            desc: 'Look at BA and BS programs in media, design and communication.',
          },
          {
            title: 'Start Simple Portfolio',
            desc: 'Collect essays, drawings or content pieces that show your interests.',
          },
        ],
        skillsPath: [
          {
            title: 'Storytelling Practice',
            desc: 'Write or record short pieces about topics you care about.',
          },
          {
            title: 'Visual Sense',
            desc: 'Experiment with layouts, colours and basic design tools.',
          },
          {
            title: 'Confidence On Stage Or Camera',
            desc: 'Join school events or small videos to get used to being seen.',
          },
        ],
      },
      'FA Humanities': {
        studyPath: [
          {
            title: 'Select Social Science Or Language Mix',
            desc: 'Choose subjects like psychology, sociology or languages for future degrees.',
          },
          {
            title: 'Think Ahead To Law Or Social Degrees',
            desc: 'See how FA Humanities leads into LLB, IR and similar programs.',
          },
          {
            title: 'Engage With Reading',
            desc: 'Read newspapers and books to build habits needed later.',
          },
        ],
        skillsPath: [
          {
            title: 'Critical Thinking',
            desc: 'Practice asking why things happen, not only what happened.',
          },
          {
            title: 'Discussion Skills',
            desc: 'Take part in group discussions with respectful disagreement.',
          },
          {
            title: 'Note Taking',
            desc: 'Learn to summarise long passages into short key points.',
          },
        ],
      },
      'I.Com': {
        studyPath: [
          {
            title: 'Shift Towards Commerce',
            desc: 'Prepare mentally for accounting, business maths and commerce subjects.',
          },
          {
            title: 'Explore Commerce Routes Early',
            desc: 'Look at B.Com, BBA and related paths you can take after I.Com.',
          },
          {
            title: 'Check College Commerce Reputation',
            desc: 'Ask about results and support for commerce students.',
          },
        ],
        skillsPath: [
          {
            title: 'Number Comfort',
            desc: 'Smoothly handle percentages, profit, loss and basic financial maths.',
          },
          {
            title: 'Spreadsheet Basics',
            desc: 'Start using spreadsheets for lists and small calculations.',
          },
          {
            title: 'Professional Behaviour',
            desc: 'Practice punctuality and responsibility important in business settings.',
          },
        ],
      },
    },
  },
  'matric:commerce': {
    headline: 'Commerce At Matric',
    summary:
      'You are suited for accounting, finance, business management and related roles.',
    fields: [
      { title: 'I.Com', desc: 'Direct path into B.Com, BBA and accounting degrees.', tag: 'Commerce' },
      { title: 'ICS', desc: 'If you enjoy maths and want commerce plus computing.', tag: 'Tech-Business' },
      { title: 'FA With Economics', desc: 'Alternative if you like theory and policy.', tag: 'Economics' },
    ],
    studyPath: [
      {
        title: 'Decide On I.Com Or ICS',
        desc: 'I.Com gives a pure commerce base; ICS is better for data and tech careers.',
      },
      {
        title: 'Track Business Degrees',
        desc: 'Shortlist BBA, BS Accounting and Finance and related degrees in target countries.',
      },
      {
        title: 'Understand Entry Tests',
        desc: 'Note down admission tests or entry requirements used by your target universities.',
      },
    ],
    skillsPath: [
      {
        title: 'Excel And Spreadsheets',
        desc: 'Essential for accounting, finance and data roles worldwide.',
      },
      {
        title: 'Basic Accounting',
        desc: 'Double-entry, ledgers and simple financial statements.',
      },
      {
        title: 'English For Business',
        desc: 'Emails, presentations and meeting language for future work settings.',
      },
    ],
    fieldPlans: {
      'I.Com': {
        studyPath: [
          {
            title: 'Commit To Commerce Route',
            desc: 'Choose I.Com if you prefer accounting, finance and business subjects.',
          },
          {
            title: 'Plan For B.Com Or BBA',
            desc: 'Note which degrees locally and abroad value strong I.Com results.',
          },
          {
            title: 'Understand Entry Criteria',
            desc: 'Check grade and subject requirements for commerce degrees you like.',
          },
        ],
        skillsPath: [
          {
            title: 'Accounting Mindset',
            desc: 'Practice keeping small records of income and expenses accurately.',
          },
          {
            title: 'Spreadsheet Comfort',
            desc: 'Use spreadsheets for simple budgets and lists.',
          },
          {
            title: 'Business English',
            desc: 'Learn basic email and office phrases early.',
          },
        ],
      },
      'ICS': {
        studyPath: [
          {
            title: 'Blend Commerce With Computing',
            desc: 'Choose ICS if you like both numbers and computers.',
          },
          {
            title: 'Target Tech-Business Degrees',
            desc: 'Look up programs that mix CS, finance and business analytics.',
          },
          {
            title: 'Stay Open To Multiple Careers',
            desc: 'Keep both tech and commerce options in mind for later university applications.',
          },
        ],
        skillsPath: [
          {
            title: 'Intro Programming For Business',
            desc: 'Try coding small scripts that work with numbers and data.',
          },
          {
            title: 'Data Awareness',
            desc: 'Notice how businesses use data in marketing, sales and operations.',
          },
          {
            title: 'Communication Across Fields',
            desc: 'Practice explaining technical ideas to non technical people around you.',
          },
        ],
      },
      'FA With Economics': {
        studyPath: [
          {
            title: 'Strengthen Economics Interest',
            desc: 'Select FA subjects that support deep understanding of economics.',
          },
          {
            title: 'Plan For Policy Or Economics Degrees',
            desc: 'Shortlist degrees in economics, public policy or development.',
          },
          {
            title: 'Consider Future Exams',
            desc: 'See how economics supports CSS or other competitive exams.',
          },
        ],
        skillsPath: [
          {
            title: 'Graph And Data Reading',
            desc: 'Practice reading charts used in economics news and textbooks.',
          },
          {
            title: 'News And Policy Interest',
            desc: 'Follow economic and budget related stories regularly.',
          },
          {
            title: 'Clear Writing About Issues',
            desc: 'Write short explanations of economic events in simple language.',
          },
        ],
      },
    },
  },
  'intermediate:fsc-pre-eng': {
    headline: 'F.Sc Pre-Engineering',
    summary:
      'You can move into engineering, technology, data and applied sciences.',
    fields: [
      { title: 'BS Electrical / Mechanical', desc: 'Classical engineering with strong local and Gulf demand.', tag: 'Engineering' },
      { title: 'BS Computer Science', desc: 'For high-growth tech and software roles.', tag: 'Tech' },
      { title: 'BS Data Science / AI', desc: 'Combines maths with new-age analytics.', tag: 'Future' },
    ],
    studyPath: [
      {
        title: 'Pick Degree Direction',
        desc: 'Decide if you prefer core engineering, computing or data focused programs.',
      },
      {
        title: 'Shortlist 2–3 Target Countries',
        desc: 'Match your budget and language comfort with engineering or tech friendly destinations.',
      },
      {
        title: 'Understand Entry Requirements',
        desc: 'Note language scores, admission tests and documents required for each country.',
      },
    ],
    skillsPath: [
      {
        title: 'Maths And Physics Base',
        desc: 'Strengthen algebra, calculus and basic physics; this supports all three paths.',
      },
      {
        title: 'Programming Fundamentals',
        desc: 'C, Python or C++ along with problem solving on simple platforms.',
      },
      {
        title: 'English And Technical Writing',
        desc: 'Ability to explain projects clearly in reports and presentations.',
      },
    ],
    fieldPlans: {
      'BS Electrical / Mechanical': {
        studyPath: [
          {
            title: 'Focus On Core Engineering Subjects',
            desc: 'Give extra time to maths, physics and lab work linked to electrical or mechanical topics.',
          },
          {
            title: 'Target Engineering Focused Countries',
            desc: 'Look at Germany, Turkey and some EU states where classical engineering has clear routes.',
          },
          {
            title: 'Prepare For Specific Requirements',
            desc: 'Check if your target programs ask for entrance tests, portfolios or extra maths/physics proof.',
          },
        ],
        skillsPath: [
          {
            title: 'Tools For Engineering',
            desc: 'Learn CAD, circuit simulation or basic mechanical design tools as per your interest.',
          },
          {
            title: 'Hands-On Projects',
            desc: 'Do small hardware or build projects that show practical understanding, not only theory.',
          },
          {
            title: 'Industry Awareness',
            desc: 'Follow power, automotive or manufacturing trends in the countries you like.',
          },
        ],
      },
      'BS Computer Science': {
        studyPath: [
          {
            title: 'Shift Emphasis To Computing',
            desc: 'Along with maths, prioritise programming and algorithm related subjects early.',
          },
          {
            title: 'Shortlist CS Heavy Destinations',
            desc: 'Consider Germany, Finland, Canada and other tech hubs with strong CS programs.',
          },
          {
            title: 'Build Admission Ready Portfolio',
            desc: 'Plan simple apps or websites you can link inside your applications.',
          },
        ],
        skillsPath: [
          {
            title: 'Structured Programming Track',
            desc: 'Follow a clear path in one main language with front-end or back-end focus.',
          },
          {
            title: 'Problem Solving Practice',
            desc: 'Regularly solve coding problems to build logic and confidence.',
          },
          {
            title: 'Version Control And Showcasing',
            desc: 'Use Git and basic hosting so universities and employers can see your work.',
          },
        ],
      },
      'BS Data Science / AI': {
        studyPath: [
          {
            title: 'Strengthen Maths And Statistics',
            desc: 'Focus on calculus, probability and basic linear algebra beside your F.Sc syllabus.',
          },
          {
            title: 'Identify Data And AI Friendly Programs',
            desc: 'Search for degrees titled Data Science, AI, Machine Learning or Analytics.',
          },
          {
            title: 'Plan Transition Requirements',
            desc: 'Check if universities expect prior coding or specific maths grades for these programs.',
          },
        ],
        skillsPath: [
          {
            title: 'Python For Data',
            desc: 'Learn Python with libraries used for data analysis and simple models.',
          },
          {
            title: 'Data Mindset',
            desc: 'Practice reading charts, basic datasets and drawing simple conclusions.',
          },
          {
            title: 'Mini AI Projects',
            desc: 'Try tiny projects such as basic prediction or recommendation demos.',
          },
        ],
      },
    },
  },
  'intermediate:fsc-pre-med': {
    headline: 'F.Sc Pre-Medical',
    summary:
      'This route can lead to MBBS, dentistry, nursing, pharmacy and life sciences.',
    fields: [
      { title: 'MBBS / Dentistry', desc: 'Competitive but still a primary goal for many.', tag: 'Clinical' },
      { title: 'BS Nursing / Allied Health', desc: 'High global demand and clear immigration routes.', tag: 'Nursing' },
      { title: 'BS Biology / Biotechnology', desc: 'Leads to research, pharma and public health.', tag: 'Research' },
    ],
    studyPath: [
      {
        title: 'Choose Between Clinical And Science Degrees',
        desc: 'Decide if you want direct patient care (MBBS, nursing) or science and lab work (biology, biotechnology).',
      },
      {
        title: 'Understand Entry Tests And Cut-Offs',
        desc: 'Note MDCAT and related tests along with marks needed for your preferred route.',
      },
      {
        title: 'Compare Local And Overseas Options',
        desc: 'See how Pakistan, UK, Ireland, Germany and others handle medical and allied health degrees.',
      },
    ],
    skillsPath: [
      {
        title: 'Biology And Chemistry Strengthening',
        desc: 'Work on understanding concepts instead of only memorising; this helps in every health route.',
      },
      {
        title: 'Ethics And Empathy',
        desc: 'Practice listening and respectful communication; this is common to all patient-facing roles.',
      },
      {
        title: 'Health Tech Awareness',
        desc: 'Basic understanding of electronic health records and medical technology trends.',
      },
    ],
    fieldPlans: {
      'MBBS / Dentistry': {
        studyPath: [
          {
            title: 'Aim For Competitive Clinical Seats',
            desc: 'Focus on top MDCAT performance and strong F.Sc marks to qualify for MBBS or BDS.',
          },
          {
            title: 'Consider Public And Private Mix',
            desc: 'Shortlist both public and private colleges plus a small number of overseas options.',
          },
          {
            title: 'Prepare For Long Training Path',
            desc: 'Plan for 5+ years of study plus house job and any licensing exams abroad.',
          },
        ],
        skillsPath: [
          {
            title: 'Patient Communication',
            desc: 'Develop calm, clear ways to speak with people in stress or pain.',
          },
          {
            title: 'Manual Dexterity',
            desc: 'Activities that improve fine hand control help for clinical procedures.',
          },
          {
            title: 'Medical Current Affairs',
            desc: 'Follow updates about healthcare systems and new treatments.',
          },
        ],
      },
      'BS Nursing / Allied Health': {
        studyPath: [
          {
            title: 'Explore Nursing And Allied Programs',
            desc: 'Identify BS Nursing, physiotherapy and similar degrees locally and abroad.',
          },
          {
            title: 'Check International Nursing Routes',
            desc: 'Understand how UK, Ireland, Germany or other countries train and recognise nurses.',
          },
          {
            title: 'Plan Licensing Steps',
            desc: 'Map language exams and registration processes for your target country.',
          },
        ],
        skillsPath: [
          {
            title: 'Caring And Teamwork',
            desc: 'Build patience, kindness and ability to work well in hospital teams.',
          },
          {
            title: 'Practical Health Skills',
            desc: 'Basic first aid, vital signs and understanding of hospital routines.',
          },
          {
            title: 'Shift And Stress Management',
            desc: 'Learn strategies to manage long hours and emotional situations.',
          },
        ],
      },
      'BS Biology / Biotechnology': {
        studyPath: [
          {
            title: 'Focus On Science Foundations',
            desc: 'Give extra attention to biology, chemistry and basic lab skills.',
          },
          {
            title: 'Look For Research Or Lab Focused Degrees',
            desc: 'Shortlist programs strong in molecular biology, biotechnology or public health.',
          },
          {
            title: 'Think About Masters Or PhD Later',
            desc: 'Plan how you may continue into research degrees for long term growth.',
          },
        ],
        skillsPath: [
          {
            title: 'Lab Technique Basics',
            desc: 'Learn about lab safety, measurements and how experiments are documented.',
          },
          {
            title: 'Scientific Reading',
            desc: 'Practice reading simple research summaries and health articles.',
          },
          {
            title: 'Data Handling In Science',
            desc: 'Comfort with basic charts and tables used in biology and health studies.',
          },
        ],
      },
    },
  },
  'intermediate:ics': {
    headline: 'ICS (Computer Science)',
    summary:
      'Ideal for software, data, cyber security and other digital careers.',
    fields: [
      { title: 'BS Computer Science', desc: 'Core programming and systems knowledge.', tag: 'CS' },
      { title: 'BS Software Engineering', desc: 'Structured path to software development roles.', tag: 'Software' },
      { title: 'BS Data Science / AI', desc: 'For those who enjoy maths and analytics.', tag: 'Data' },
    ],
    studyPath: [
      {
        title: 'Clarify Domain Preference',
        desc: 'Decide if you like web, mobile, data, security or mixed work.',
      },
      {
        title: 'Shortlist CS Friendly Countries',
        desc: 'Consider Germany, Finland, Canada and other tech hubs with CS demand.',
      },
      {
        title: 'Plan Portfolio And Tests',
        desc: 'Build small real projects and understand language or admission test needs.',
      },
    ],
    skillsPath: [
      {
        title: 'Core Programming Skills',
        desc: 'Front-end, back-end or full stack foundations with one main language.',
      },
      {
        title: 'Problem Solving',
        desc: 'Practice logical problem sets and basic data structures.',
      },
      {
        title: 'Freelancing Readiness',
        desc: 'Learn how to present projects on GitHub and platforms in a professional way.',
      },
    ],
    fieldPlans: {
      'BS Computer Science': {
        studyPath: [
          {
            title: 'Strengthen Theory And Fundamentals',
            desc: 'Focus on discrete maths, algorithms and core programming ideas.',
          },
          {
            title: 'Aim For Broad CS Programs',
            desc: 'Choose degrees that cover systems, algorithms, networks and operating systems.',
          },
          {
            title: 'Prepare For Admission Tests',
            desc: 'Check if your target universities have CS specific entrance exams.',
          },
        ],
        skillsPath: [
          {
            title: 'Data Structures And Algorithms',
            desc: 'Practice standard problems used in CS interviews and contests.',
          },
          {
            title: 'Systems Awareness',
            desc: 'Understand how operating systems, networks and databases work at a high level.',
          },
          {
            title: 'Clean Coding Habits',
            desc: 'Learn to write readable, well structured code that others can understand.',
          },
        ],
      },
      'BS Software Engineering': {
        studyPath: [
          {
            title: 'Focus On Software Process',
            desc: 'Prefer programs with strong content on requirements, testing and project management.',
          },
          {
            title: 'Look For Project Heavy Degrees',
            desc: 'Select universities where you build several real or industry linked projects.',
          },
          {
            title: 'Align With Industry Tools',
            desc: 'Check which languages, frameworks and tools are used in your target markets.',
          },
        ],
        skillsPath: [
          {
            title: 'Full Stack Or Product Skills',
            desc: 'Learn to take a feature from idea to deployment using modern stacks.',
          },
          {
            title: 'Collaboration Practices',
            desc: 'Use Git, code reviews and task boards to work like a real team.',
          },
          {
            title: 'User And Business Understanding',
            desc: 'Think about user needs and business goals behind every feature.',
          },
        ],
      },
      'BS Data Science / AI': {
        studyPath: [
          {
            title: 'Strengthen Maths And Statistics',
            desc: 'Work on probability, linear algebra and basic calculus beyond class level.',
          },
          {
            title: 'Target Data Focused Programs',
            desc: 'Shortlist degrees with strong content in analytics, ML and AI.',
          },
          {
            title: 'Plan For Advanced Study',
            desc: 'Consider if you will later do a Masters in AI or related fields.',
          },
        ],
        skillsPath: [
          {
            title: 'Python And Data Tools',
            desc: 'Use Python with libraries for analysis, visualisation and simple models.',
          },
          {
            title: 'Data Thinking',
            desc: 'Practice reading, cleaning and interpreting small datasets often.',
          },
          {
            title: 'Model Basics',
            desc: 'Understand simple regression and classification models conceptually.',
          },
        ],
      },
    },
  },
  'intermediate:icom': {
    headline: 'I.Com (Commerce)',
    summary:
      'Set up for accounting, banking, business management and entrepreneurship.',
    fields: [
      { title: 'B.Com / BS Accounting And Finance', desc: 'Direct extension of your current subjects.', tag: 'Accounting' },
      { title: 'BBA', desc: 'Broader business with management and marketing pathways.', tag: 'Business' },
      { title: 'Professional Certifications', desc: 'ACCA, CA foundation and similar routes.', tag: 'Professional' },
    ],
    studyPath: [
      {
        title: 'Select Broad Commerce Direction',
        desc: 'Decide whether you feel closer to accounting, business management or direct professional tracks.',
      },
      {
        title: 'Identify Commerce Friendly Countries',
        desc: 'Explore Malaysia, Turkey, UAE and some European universities for business degrees.',
      },
      {
        title: 'Understand Funding Options',
        desc: 'Look at partial scholarships and part-time work policies for business students.',
      },
    ],
    skillsPath: [
      {
        title: 'Accounting And Office Basics',
        desc: 'Learn tools such as Excel for finance and basic office software.',
      },
      {
        title: 'Business Communication',
        desc: 'Email writing, presentation slides and meeting notes.',
      },
      {
        title: 'Sales And Customer Skills',
        desc: 'Practice explaining products clearly and handling basic objections.',
      },
    ],
    fieldPlans: {
      'B.Com / BS Accounting And Finance': {
        studyPath: [
          {
            title: 'Commit To Technical Accounting Route',
            desc: 'Aim for strong grades in accounting, finance and related I.Com subjects.',
          },
          {
            title: 'Shortlist Accounting Focused Degrees',
            desc: 'Look for B.Com and BS Accounting and Finance in Pakistan and abroad.',
          },
          {
            title: 'Plan Professional Add-Ons',
            desc: 'Decide whether you will add certifications such as ACCA after or alongside your degree.',
          },
        ],
        skillsPath: [
          {
            title: 'Advanced Excel And Ledgers',
            desc: 'Become comfortable with formulas, reports and basic bookkeeping layouts.',
          },
          {
            title: 'Accounting Software',
            desc: 'Learn at least one accounting package commonly used in your region.',
          },
          {
            title: 'Detail And Compliance Mindset',
            desc: 'Train yourself to be careful with numbers, dates and documentation.',
          },
        ],
      },
      'BBA': {
        studyPath: [
          {
            title: 'Choose Management Or Marketing Focus',
            desc: 'Decide if you want future roles in management, marketing, HR or another stream.',
          },
          {
            title: 'Target BBA Programs With Internships',
            desc: 'Prefer degrees that include internships or corporate projects.',
          },
          {
            title: 'Consider MBA As Next Step',
            desc: 'Think early about whether you will later aim for MBA in Pakistan or abroad.',
          },
        ],
        skillsPath: [
          {
            title: 'Presentation And Pitching',
            desc: 'Practice presenting ideas clearly using slides and basic storytelling.',
          },
          {
            title: 'Team And Leadership Skills',
            desc: 'Participate in group projects, societies or small ventures.',
          },
          {
            title: 'Market Awareness',
            desc: 'Follow trends in brands, startups and industries that interest you.',
          },
        ],
      },
      'Professional Certifications': {
        studyPath: [
          {
            title: 'Understand Certification Structures',
            desc: 'Learn how ACCA, CA foundation or similar routes are structured and examined.',
          },
          {
            title: 'Plan Degree And Certification Mix',
            desc: 'Decide if you will take a degree plus certification or rely mainly on the certification.',
          },
          {
            title: 'Check Global Recognition',
            desc: 'Confirm how your chosen certification is recognised in countries you may move to.',
          },
        ],
        skillsPath: [
          {
            title: 'Exam Discipline',
            desc: 'Develop strong study habits and time management for frequent, structured exams.',
          },
          {
            title: 'Internship Or Article-ship',
            desc: 'Plan for practical training periods that many certifications expect.',
          },
          {
            title: 'Professional Ethics',
            desc: 'Understand basic ethics and responsibility in handling money and reports.',
          },
        ],
      },
    },
  },
  'intermediate:fa-arts': {
    headline: 'FA (Arts)',
    summary:
      'Best for creative, communication, social sciences and media related degrees.',
    fields: [
      { title: 'BS Media Studies', desc: 'For content creation, journalism and production.', tag: 'Media' },
      { title: 'BS Psychology / Sociology', desc: 'Understanding people and society in depth.', tag: 'Social' },
      { title: 'Design Degrees', desc: 'Graphic, UI or communication design opportunities.', tag: 'Design' },
    ],
    studyPath: [
      {
        title: 'Align Subjects With Future Degree',
        desc: 'Choose FA subjects that match the bachelors programs you like most.',
      },
      {
        title: 'Research Universities With Strong Arts',
        desc: 'Look for good portfolios and faculty rather than only brand names.',
      },
      {
        title: 'Understand Portfolio Requirements',
        desc: 'Many creative degrees prefer samples of work over exam marks alone.',
      },
    ],
    skillsPath: [
      {
        title: 'Writing And Expression',
        desc: 'Practice clear writing and speaking; this supports media and social science tracks.',
      },
      {
        title: 'Content Creation',
        desc: 'Short videos, posts and articles on topics you care about.',
      },
      {
        title: 'Social Media Literacy',
        desc: 'Understand platforms, analytics basics and digital safety.',
      },
    ],
    fieldPlans: {
      'BS Media Studies': {
        studyPath: [
          {
            title: 'Focus On Media And Communication',
            desc: 'Choose FA subjects and activities that build your media profile.',
          },
          {
            title: 'Target Media Strong Universities',
            desc: 'Look for programs with TV, film, digital content or journalism labs.',
          },
          {
            title: 'Build Media Portfolio',
            desc: 'Collect sample videos, articles or social campaigns to show with applications.',
          },
        ],
        skillsPath: [
          {
            title: 'Storytelling And Scripting',
            desc: 'Practice turning ideas into short scripts or content outlines.',
          },
          {
            title: 'Basic Production Skills',
            desc: 'Learn simple video editing, audio and lighting basics.',
          },
          {
            title: 'Audience Understanding',
            desc: 'Think about who you are creating content for and why.',
          },
        ],
      },
      'BS Psychology / Sociology': {
        studyPath: [
          {
            title: 'Build Foundation In Social Sciences',
            desc: 'Choose subjects that expose you to psychology, sociology or related areas.',
          },
          {
            title: 'Research Degree Structures',
            desc: 'See which universities offer strong social science and research options.',
          },
          {
            title: 'Plan For Higher Study',
            desc: 'Consider future Masters or specialisations such as counselling or policy.',
          },
        ],
        skillsPath: [
          {
            title: 'Observation And Reflection',
            desc: 'Practice noticing behaviour and reflecting on why people act as they do.',
          },
          {
            title: 'Basic Research Skills',
            desc: 'Learn how surveys, interviews and simple data are used in social studies.',
          },
          {
            title: 'Empathy And Listening',
            desc: 'Develop active listening habits useful in counselling and group work.',
          },
        ],
      },
      'Design Degrees': {
        studyPath: [
          {
            title: 'Understand Design Specialisations',
            desc: 'Explore graphic, UI, product or communication design and see what fits you.',
          },
          {
            title: 'Shortlist Design Schools',
            desc: 'Look for institutes with strong studios and project based learning.',
          },
          {
            title: 'Prepare Design Portfolio',
            desc: 'Put together sketches, digital work and projects that show your style.',
          },
        ],
        skillsPath: [
          {
            title: 'Tool And Craft Basics',
            desc: 'Gain comfort with at least one major design or illustration tool.',
          },
          {
            title: 'Visual Thinking',
            desc: 'Practice turning words and ideas into simple visual layouts.',
          },
          {
            title: 'Feedback And Iteration',
            desc: 'Learn to accept critiques and improve designs step by step.',
          },
        ],
      },
    },
  },
  'intermediate:fa-humanities': {
    headline: 'FA (Humanities)',
    summary:
      'Good foundation for law, international relations, education and policy roles.',
    fields: [
      { title: 'LLB / Law', desc: 'For legal practice and policy development.', tag: 'Law' },
      { title: 'BS International Relations', desc: 'Diplomacy, think tanks and civil services preparation.', tag: 'IR' },
      { title: 'Education Degrees', desc: 'Formal paths into teaching and educational leadership.', tag: 'Education' },
    ],
    studyPath: [
      {
        title: 'Decide Between Law Or Policy',
        desc: 'Law suits detail oriented minds; IR fits global and political interests.',
      },
      {
        title: 'Map Exams And Pathways',
        desc: 'Understand local entrance tests and international options for these degrees.',
      },
      {
        title: 'Engage With Reading And Debate',
        desc: 'Follow quality news and discussions to build strong opinions and analysis.',
      },
    ],
    skillsPath: [
      {
        title: 'Critical Reading',
        desc: 'Practice summarising articles and identifying main arguments.',
      },
      {
        title: 'Argument And Reasoning',
        desc: 'Structure your views with evidence in writing and speech.',
      },
      {
        title: 'Basic Research Skills',
        desc: 'Learn to find reliable sources and reference correctly.',
      },
    ],
    fieldPlans: {
      'LLB / Law': {
        studyPath: [
          {
            title: 'Understand Law Degree Routes',
            desc: 'Check local and foreign LLB options and how bar admission works.',
          },
          {
            title: 'Develop Argument And Writing Strength',
            desc: 'Choose subjects and activities that build strong legal style writing.',
          },
          {
            title: 'Plan Internships And Court Exposure',
            desc: 'Look for chances to observe court or intern with legal professionals.',
          },
        ],
        skillsPath: [
          {
            title: 'Case Reading Skills',
            desc: 'Practice reading and summarising long, structured texts.',
          },
          {
            title: 'Public Speaking For Law',
            desc: 'Debates and moot courts help you get comfortable speaking formally.',
          },
          {
            title: 'Ethics And Responsibility',
            desc: 'Understand basic legal ethics and duties of lawyers.',
          },
        ],
      },
      'BS International Relations': {
        studyPath: [
          {
            title: 'Focus On Global Affairs',
            desc: 'Engage with history, politics and current affairs subjects.',
          },
          {
            title: 'Target IR Strong Universities',
            desc: 'Search for programs with active research and policy connections.',
          },
          {
            title: 'Connect With Civil Service Paths',
            desc: 'Understand how IR links to CSS, foreign service and think tanks.',
          },
        ],
        skillsPath: [
          {
            title: 'Policy Reading And Writing',
            desc: 'Practice writing short briefs about local or global issues.',
          },
          {
            title: 'Model UN And Discussion Forums',
            desc: 'Join MUNs or discussion circles to build diplomacy style skills.',
          },
          {
            title: 'Language And Cultural Awareness',
            desc: 'Consider learning another language relevant to target regions.',
          },
        ],
      },
      'Education Degrees': {
        studyPath: [
          {
            title: 'Decide Level You Want To Teach',
            desc: 'Think whether you prefer early years, school, college or training roles.',
          },
          {
            title: 'Explore B.Ed And Education BS',
            desc: 'Look for degrees that mix subject content with teaching practice.',
          },
          {
            title: 'Plan Practical Exposure',
            desc: 'Identify schools or organisations where you can observe or assist teaching.',
          },
        ],
        skillsPath: [
          {
            title: 'Classroom Communication',
            desc: 'Practice explaining ideas simply and clearly to different age groups.',
          },
          {
            title: 'Patience And Organisation',
            desc: 'Develop routines for planning lessons and managing groups.',
          },
          {
            title: 'Education Technology Basics',
            desc: 'Get comfortable with tools used for online and blended learning.',
          },
        ],
      },
    },
  },
  'bachelor:engg': {
    headline: 'Engineering Or STEM Bachelor',
    summary:
      'Ideal if you enjoy problem solving, maths and building things. Leads to strong demand in local and overseas markets.',
    fields: [
      { title: 'MS Engineering', desc: 'Specialise in power, telecom, structures or similar fields.', tag: 'Masters' },
      { title: 'MS Data / AI', desc: 'Use your maths background to shift into data driven roles.', tag: 'Data' },
      { title: 'Project Management', desc: 'Move into leadership and coordination of technical teams.', tag: 'Management' },
    ],
    studyPath: [
      {
        title: 'Strengthen Core Subjects',
        desc: 'Focus on maths, core engineering subjects and one programming language.',
      },
      {
        title: 'Pick Specialisation Direction',
        desc: 'Decide between pure engineering, data, management or research.',
      },
      {
        title: 'Explore Target Countries',
        desc: 'Shortlist countries where your discipline has clear job and visa routes.',
      },
    ],
    skillsPath: [
      {
        title: 'Industry Tools',
        desc: 'Learn CAD, simulations or relevant lab software for your branch.',
      },
      {
        title: 'Coding For Engineers',
        desc: 'Automate calculations and create small tools in Python or similar.',
      },
      {
        title: 'Professional Communication',
        desc: 'Present projects clearly to non technical people and hiring managers.',
      },
    ],
    fieldPlans: {
      'MS Engineering': {
        studyPath: [
          {
            title: 'Build Strong GPA In Core Subjects',
            desc: 'Prioritise grades in major engineering courses and final year project.',
          },
          {
            title: 'Shortlist Specialisation Fields',
            desc: 'Decide between power, telecom, structures or other branches.',
          },
          {
            title: 'Target Engineering Focused Countries',
            desc: 'Look at Germany, Turkey and similar regions with clear MS engineering routes.',
          },
        ],
        skillsPath: [
          {
            title: 'Advanced Tools And Labs',
            desc: 'Gain real experience with the software and equipment used in your field.',
          },
          {
            title: 'Research Or Design Exposure',
            desc: 'Join faculty projects or competitions to show depth in your chosen area.',
          },
          {
            title: 'Recommendation Network',
            desc: 'Maintain good relationships with faculty who can vouch for your skills.',
          },
        ],
      },
      'MS Data / AI': {
        studyPath: [
          {
            title: 'Strengthen Maths And Programming',
            desc: 'Take electives in statistics, signals, optimisation or computing.',
          },
          {
            title: 'Bridge Into Data Focus',
            desc: 'Work on small data or ML projects alongside your engineering degree.',
          },
          {
            title: 'Research Data Or AI Masters',
            desc: 'Look for programs that welcome engineering graduates into data roles.',
          },
        ],
        skillsPath: [
          {
            title: 'Python And Data Ecosystem',
            desc: 'Learn Python plus basic tools used for analysis and modelling.',
          },
          {
            title: 'Numerical Problem Solving',
            desc: 'Practice using code to solve mathematical and engineering style problems.',
          },
          {
            title: 'Showcase Hybrid Profile',
            desc: 'Highlight projects that mix physical systems with data or AI.',
          },
        ],
      },
      'Project Management': {
        studyPath: [
          {
            title: 'Understand PM Roles',
            desc: 'Study how project managers coordinate scope, time, cost and teams.',
          },
          {
            title: 'Target PM Friendly Degrees',
            desc: 'Look at MS project management or MBAs that value engineering backgrounds.',
          },
          {
            title: 'Collect Project Experience',
            desc: 'Lead or coordinate team projects that you can later present as case studies.',
          },
        ],
        skillsPath: [
          {
            title: 'Planning And Scheduling',
            desc: 'Learn basic tools for Gantt charts, tasks and progress tracking.',
          },
          {
            title: 'Team And Stakeholder Communication',
            desc: 'Practice writing updates and running meetings effectively.',
          },
          {
            title: 'Risk And Issue Management',
            desc: 'Get used to spotting problems early and suggesting solutions.',
          },
        ],
      },
    },
  },
  'bachelor:cs-it': {
    headline: 'Computer Science Or IT Bachelor',
    summary:
      'Fits students who enjoy logic, building applications and solving digital problems. Very flexible for work and study abroad.',
    fields: [
      { title: 'MS Computer Science', desc: 'Deepen knowledge in algorithms, systems and theory.', tag: 'Masters' },
      { title: 'MS Data Science / AI', desc: 'Move into analytics, machine learning and research labs.', tag: 'Data' },
      { title: 'Product Or Tech MBA', desc: 'Blend technical knowledge with business and leadership.', tag: 'Management' },
    ],
    studyPath: [
      {
        title: 'Select Focus Area',
        desc: 'Choose core direction such as web, mobile, data, security or research.',
      },
      {
        title: 'Build Strong Portfolio',
        desc: 'Create visible projects on GitHub and live demos that show your skills.',
      },
      {
        title: 'Research Scholarships',
        desc: 'Look for scholarships in Europe, Asia and North America for CS graduates.',
      },
    ],
    skillsPath: [
      {
        title: 'Modern Tech Stack',
        desc: 'Learn one front end, one back end and basic cloud deployment.',
      },
      {
        title: 'Problem Solving Practice',
        desc: 'Regular coding practice for interviews and algorithm based tests.',
      },
      {
        title: 'Freelancing Or Part Time',
        desc: 'Start small paid projects to gain experience and income.',
      },
    ],
    fieldPlans: {
      'MS Computer Science': {
        studyPath: [
          {
            title: 'Strengthen Theory Core',
            desc: 'Focus on algorithms, operating systems, databases and networks.',
          },
          {
            title: 'Aim For Research Or Top CS Schools',
            desc: 'Shortlist universities known for strong CS departments.',
          },
          {
            title: 'Prepare For GRE Or Similar',
            desc: 'If required, schedule and prepare for GRE or other entrance tests.',
          },
        ],
        skillsPath: [
          {
            title: 'Algorithmic Problem Solving',
            desc: 'Regularly solve problems from competitive programming or interview style sets.',
          },
          {
            title: 'Systems Literacy',
            desc: 'Understand how low level and high level systems connect.',
          },
          {
            title: 'Research Reading',
            desc: 'Start reading simplified research blogs or papers to build comfort.',
          },
        ],
      },
      'MS Data Science / AI': {
        studyPath: [
          {
            title: 'Strengthen Maths And Data Courses',
            desc: 'Prioritise statistics, linear algebra and ML related electives.',
          },
          {
            title: 'Target Data Focused Masters',
            desc: 'Look for programs that emphasise analytics, ML and AI projects.',
          },
          {
            title: 'Collect Data Projects',
            desc: 'Complete at least a few end to end data or ML projects.',
          },
        ],
        skillsPath: [
          {
            title: 'Data Tooling',
            desc: 'Use Python or R with libraries for analysis and models.',
          },
          {
            title: 'Model Interpretation',
            desc: 'Practice explaining results in simple language to non technical people.',
          },
          {
            title: 'Domain Context',
            desc: 'Learn basics of at least one domain such as finance or health.',
          },
        ],
      },
      'Product Or Tech MBA': {
        studyPath: [
          {
            title: 'Understand Product And Business Roles',
            desc: 'Learn what product managers and tech leaders actually do day to day.',
          },
          {
            title: 'Plan Work Experience Before MBA',
            desc: 'Aim for a few years of tech work before a strong MBA.',
          },
          {
            title: 'Shortlist Tech Friendly MBA Programs',
            desc: 'Look for MBAs with product or technology management focus.',
          },
        ],
        skillsPath: [
          {
            title: 'Communication With Stakeholders',
            desc: 'Practice explaining technical trade offs to business and design teams.',
          },
          {
            title: 'Basic Business Concepts',
            desc: 'Learn fundamentals of marketing, finance and strategy.',
          },
          {
            title: 'Leadership In Projects',
            desc: 'Take ownership of small features or teams to show leadership potential.',
          },
        ],
      },
    },
  },
  'bachelor:business': {
    headline: 'Business Or Commerce Bachelor',
    summary:
      'Designed for future managers, entrepreneurs and finance professionals. Works well with both local and overseas careers.',
    fields: [
      { title: 'MBA', desc: 'Classic route for management, consulting and corporate roles.', tag: 'Management' },
      { title: 'MS Finance / Accounting', desc: 'For specialist finance and audit careers.', tag: 'Finance' },
      { title: 'Marketing Or Supply Chain', desc: 'Target growth roles in digital and logistics sectors.', tag: 'Industry' },
    ],
    studyPath: [
      {
        title: 'Choose Functional Area',
        desc: 'Decide between finance, marketing, HR, supply chain or entrepreneurship.',
      },
      {
        title: 'Gain Practical Exposure',
        desc: 'Intern with companies or family business to see day to day operations.',
      },
      {
        title: 'Plan Future Degree Ladder',
        desc: 'Map when you want MBA or specialist Masters and in which country.',
      },
    ],
    skillsPath: [
      {
        title: 'Excel And Analytics',
        desc: 'Comfort with spreadsheets, dashboards and simple business data tools.',
      },
      {
        title: 'Sales And Negotiation',
        desc: 'Learn to talk to clients, handle objections and close deals ethically.',
      },
      {
        title: 'Content And Branding',
        desc: 'Understand basics of social media and digital marketing campaigns.',
      },
    ],
    fieldPlans: {
      'MBA': {
        studyPath: [
          {
            title: 'Plan Work Experience',
            desc: 'Identify roles you can take after Bachelor that support a strong MBA profile.',
          },
          {
            title: 'Shortlist MBA Destinations',
            desc: 'Compare MBAs in Pakistan, Europe, UK, USA and other regions.',
          },
          {
            title: 'Check GMAT Or Other Requirements',
            desc: 'Understand test scores, grades and experience needed for your target schools.',
          },
        ],
        skillsPath: [
          {
            title: 'Leadership And Initiative',
            desc: 'Lead societies, projects or small ventures that prove responsibility.',
          },
          {
            title: 'Case Study Thinking',
            desc: 'Practice breaking down business problems into causes and options.',
          },
          {
            title: 'Networking Comfort',
            desc: 'Get used to talking with seniors and professionals at events.',
          },
        ],
      },
      'MS Finance / Accounting': {
        studyPath: [
          {
            title: 'Deepen Finance Courses',
            desc: 'Take and excel in advanced finance, accounting and quantitative modules.',
          },
          {
            title: 'Explore Specialist Programs',
            desc: 'Search for MS Finance, Accounting or related programs globally.',
          },
          {
            title: 'Plan Certification Mix',
            desc: 'Consider how CFA, ACCA or similar can sit alongside a Masters.',
          },
        ],
        skillsPath: [
          {
            title: 'Advanced Modelling',
            desc: 'Use spreadsheets or software to build financial models.',
          },
          {
            title: 'Regulation Awareness',
            desc: 'Follow key trends in taxation, auditing and compliance.',
          },
          {
            title: 'Analytical Writing',
            desc: 'Practice writing brief, evidence based financial summaries.',
          },
        ],
      },
      'Marketing Or Supply Chain': {
        studyPath: [
          {
            title: 'Decide Between Marketing Or Operations',
            desc: 'See which subjects you enjoy more: campaigns or logistics.',
          },
          {
            title: 'Target Industry Relevant Masters',
            desc: 'Find programs focused on marketing, logistics or operations management.',
          },
          {
            title: 'Pursue Related Internships',
            desc: 'Choose internships in agencies, FMCGs or logistics as per your choice.',
          },
        ],
        skillsPath: [
          {
            title: 'Market And Customer Understanding',
            desc: 'Observe how brands talk to customers and how products reach them.',
          },
          {
            title: 'Data Use In Decisions',
            desc: 'Learn basic analytics tools used in marketing or supply chain dashboards.',
          },
          {
            title: 'Execution Discipline',
            desc: 'Practice planning and delivering campaigns or projects on time.',
          },
        ],
      },
    },
  },
  'bachelor:social-science': {
    headline: 'Social Sciences Bachelor',
    summary:
      'Suited for people who like people, society and ideas. Leads into policy, development and education roles.',
    fields: [
      { title: 'MS Public Policy / IR', desc: 'Shape policy, diplomacy and governance.', tag: 'Policy' },
      { title: 'Education And Counseling', desc: 'Move into teaching or student support roles.', tag: 'Education' },
      { title: 'Development Studies', desc: 'Work with NGOs and global organisations.', tag: 'Development' },
    ],
    studyPath: [
      {
        title: 'Pick Social Focus',
        desc: 'Clarify whether you lean towards law, psychology, IR or education.',
      },
      {
        title: 'Engage In Field Work',
        desc: 'Volunteer or intern with schools, clinics or NGOs for real context.',
      },
      {
        title: 'Explore Scholarships',
        desc: 'Many countries support social science students for Masters and research.',
      },
    ],
    skillsPath: [
      {
        title: 'Research And Writing',
        desc: 'Comfort with reports, policy briefs and academic style writing.',
      },
      {
        title: 'Data For Social Science',
        desc: 'Learn basic statistics and tools such as spreadsheets or simple software.',
      },
      {
        title: 'Community Leadership',
        desc: 'Organise small events or groups to prove leadership and initiative.',
      },
    ],
    fieldPlans: {
      'MS Public Policy / IR': {
        studyPath: [
          {
            title: 'Develop Policy Interests',
            desc: 'Focus on courses and reading related to governance, IR and public issues.',
          },
          {
            title: 'Shortlist Policy Or IR Masters',
            desc: 'Search for programs that feed into government, diplomacy or think tanks.',
          },
          {
            title: 'Plan Competitive Applications',
            desc: 'Collect writing samples and experiences that show policy engagement.',
          },
        ],
        skillsPath: [
          {
            title: 'Policy Writing',
            desc: 'Practice writing concise briefs with clear recommendations.',
          },
          {
            title: 'Debate And Negotiation',
            desc: 'Join debates or MUNs to build argument and diplomacy skills.',
          },
          {
            title: 'Current Affairs Depth',
            desc: 'Follow quality local and global news sources regularly.',
          },
        ],
      },
      'Education And Counseling': {
        studyPath: [
          {
            title: 'Select Education Or Psychology Focus',
            desc: 'Decide whether you lean more to teaching or counselling roles.',
          },
          {
            title: 'Explore Education Or Counselling Masters',
            desc: 'Identify programs with strong practicum or school partnerships.',
          },
          {
            title: 'Plan School Or Clinic Experience',
            desc: 'Arrange volunteering or assistant roles in educational settings.',
          },
        ],
        skillsPath: [
          {
            title: 'Empathy And Active Listening',
            desc: 'Strengthen your ability to listen without judgement.',
          },
          {
            title: 'Facilitation Skills',
            desc: 'Practice leading small group discussions or activities.',
          },
          {
            title: 'Record Keeping',
            desc: 'Learn to document observations and sessions carefully.',
          },
        ],
      },
      'Development Studies': {
        studyPath: [
          {
            title: 'Engage With Development Issues',
            desc: 'Study poverty, education, health and environment topics in depth.',
          },
          {
            title: 'Target Development Focused Programs',
            desc: 'Look for Masters that partner with NGOs or international bodies.',
          },
          {
            title: 'Seek Field Exposure',
            desc: 'Participate in community or NGO projects during your Bachelor.',
          },
        ],
        skillsPath: [
          {
            title: 'Field Research Skills',
            desc: 'Learn surveys, interviews and observation techniques.',
          },
          {
            title: 'Report And Grant Writing',
            desc: 'Practice writing short reports that could go to donors or boards.',
          },
          {
            title: 'Cultural Sensitivity',
            desc: 'Become aware of how culture affects development work.',
          },
        ],
      },
    },
  },
  'bachelor:health': {
    headline: 'Health Or Allied Bachelor',
    summary:
      'Best for students who care about patient health and medical systems. Can support strong migration paths.',
    fields: [
      { title: 'Advanced Clinical Degrees', desc: 'Specialise in nursing, physiotherapy or similar fields.', tag: 'Clinical' },
      { title: 'Public Health', desc: 'Move into policy, community and health system roles.', tag: 'Public Health' },
      { title: 'Health Management', desc: 'Combine care knowledge with hospital management.', tag: 'Management' },
    ],
    studyPath: [
      {
        title: 'Clarify Clinical Or Public Route',
        desc: 'Decide whether you prefer hands on patient work or system level roles.',
      },
      {
        title: 'Understand Licensing',
        desc: 'Check language and licensing exams for target countries in advance.',
      },
      {
        title: 'Track Pathways',
        desc: 'Follow official guidance from nursing and health councils for each region.',
      },
    ],
    skillsPath: [
      {
        title: 'Soft Skills For Care',
        desc: 'Empathy, clear communication and cultural sensitivity matter a lot.',
      },
      {
        title: 'Digital Health Tools',
        desc: 'Familiarity with hospital systems and secure record keeping.',
      },
      {
        title: 'Basic Data Handling',
        desc: 'Learn to work with patient and survey data with care and accuracy.',
      },
    ],
    fieldPlans: {
      'Advanced Clinical Degrees': {
        studyPath: [
          {
            title: 'Confirm Clinical Specialisation',
            desc: 'Decide whether you want to deepen nursing, physiotherapy or another allied field.',
          },
          {
            title: 'Review Country Specific Routes',
            desc: 'Check registration and Masters options for your profession in target countries.',
          },
          {
            title: 'Plan Exams And Experience',
            desc: 'Understand language tests and clinical experience needed for advanced degrees.',
          },
        ],
        skillsPath: [
          {
            title: 'Hands On Clinical Skills',
            desc: 'Seek extra practice in procedures relevant to your specialisation.',
          },
          {
            title: 'Teamwork In Care Settings',
            desc: 'Learn how nurses, doctors and therapists coordinate work.',
          },
          {
            title: 'Reflective Practice',
            desc: 'Get used to reflecting on what went well or poorly after each shift.',
          },
        ],
      },
      'Public Health': {
        studyPath: [
          {
            title: 'Shift To Population Level Thinking',
            desc: 'Study how health systems and policies affect whole communities.',
          },
          {
            title: 'Target MPH Or Public Health Masters',
            desc: 'Search for programs that mix epidemiology, policy and management.',
          },
          {
            title: 'Collect Data Or Community Experience',
            desc: 'Join surveys or outreach programs that deal with public health issues.',
          },
        ],
        skillsPath: [
          {
            title: 'Epidemiology Basics',
            desc: 'Learn simple ideas like incidence, prevalence and risk factors.',
          },
          {
            title: 'Program Evaluation',
            desc: 'Understand how health programs are measured and improved.',
          },
          {
            title: 'Advocacy And Communication',
            desc: 'Practice explaining health issues clearly to the public.',
          },
        ],
      },
      'Health Management': {
        studyPath: [
          {
            title: 'Understand Hospital Operations',
            desc: 'Observe how admissions, billing and wards are coordinated.',
          },
          {
            title: 'Shortlist Health Management Degrees',
            desc: 'Look for Masters combining management and healthcare knowledge.',
          },
          {
            title: 'Plan Leadership Path',
            desc: 'Think about roles such as ward manager or administrator you may aim for.',
          },
        ],
        skillsPath: [
          {
            title: 'Organisational Skills',
            desc: 'Practice scheduling, rostering and basic resource planning.',
          },
          {
            title: 'People Management',
            desc: 'Learn how to give feedback and handle conflict respectfully.',
          },
          {
            title: 'Quality And Safety Awareness',
            desc: 'Understand basic indicators of safe, high quality healthcare.',
          },
        ],
      },
    },
  },
  'masters:ms-course': {
    headline: 'Course Based Masters',
    summary:
      'Focuses on taught modules and projects. Best if you want to grow skills for industry roles in one or two years.',
    fields: [
      { title: 'Professional Masters', desc: 'Programs designed around specific industries and roles.', tag: 'Industry' },
      { title: 'Conversion Degrees', desc: 'Shift into new areas such as data or business.', tag: 'Shift' },
      { title: 'Co-op Or Internship Tracks', desc: 'Masters with built in work experience.', tag: 'Experience' },
    ],
    studyPath: [
      {
        title: 'Define Career Outcome',
        desc: 'Write down what job title and country you want after graduation.',
      },
      {
        title: 'Compare Program Designs',
        desc: 'Look at modules, project work and placement support in short listed universities.',
      },
      {
        title: 'Prepare Strong Application',
        desc: 'Align CV, statement and referees with the industry focus of the degree.',
      },
    ],
    skillsPath: [
      {
        title: 'Portfolio Or Case Studies',
        desc: 'Collect projects and outcomes that show your work to employers.',
      },
      {
        title: 'Networking Habits',
        desc: 'Use LinkedIn and events to connect with alumni and recruiters.',
      },
      {
        title: 'Interview Preparedness',
        desc: 'Practice explaining your experience and goals with clarity.',
      },
    ],
    fieldPlans: {
      'Professional Masters': {
        studyPath: [
          {
            title: 'Match Degree To Target Role',
            desc: 'Choose programs that directly train you for your desired job title.',
          },
          {
            title: 'Assess Industry Links',
            desc: 'Prefer degrees with strong ties to companies, guest lecturers and projects.',
          },
          {
            title: 'Plan Return On Investment',
            desc: 'Estimate tuition, living costs and expected salary after graduation.',
          },
        ],
        skillsPath: [
          {
            title: 'Domain Specific Tools',
            desc: 'Learn the main software and tools used in your chosen industry.',
          },
          {
            title: 'Professional Branding',
            desc: 'Align your CV, portfolio and online presence to your target roles.',
          },
          {
            title: 'Job Search Strategy',
            desc: 'Prepare a plan for internships and full time applications during the degree.',
          },
        ],
      },
      'Conversion Degrees': {
        studyPath: [
          {
            title: 'Identify New Field',
            desc: 'Clarify why you are moving into data, business or another new area.',
          },
          {
            title: 'Bridge Knowledge Gaps',
            desc: 'Self study basics before starting so you are not overwhelmed.',
          },
          {
            title: 'Target Supportive Programs',
            desc: 'Choose degrees designed for students coming from other backgrounds.',
          },
        ],
        skillsPath: [
          {
            title: 'Foundational Skills In New Field',
            desc: 'Focus on core concepts first rather than advanced topics.',
          },
          {
            title: 'Transferable Skill Mapping',
            desc: 'Show how your past experience still adds value in the new area.',
          },
          {
            title: 'Resilience In Transition',
            desc: 'Build habits that help you cope with starting again in a fresh domain.',
          },
        ],
      },
      'Co-op Or Internship Tracks': {
        studyPath: [
          {
            title: 'Focus On Work Integrated Programs',
            desc: 'Shortlist degrees that guarantee or strongly support internships.',
          },
          {
            title: 'Understand Visa And Work Rules',
            desc: 'Check if your target country allows co-op and part time work.',
          },
          {
            title: 'Plan Around Work Terms',
            desc: 'Organise finances and housing for periods when you may be working full time.',
          },
        ],
        skillsPath: [
          {
            title: 'Workplace Readiness',
            desc: 'Improve punctuality, communication and flexibility needed in real teams.',
          },
          {
            title: 'Reflection On Experience',
            desc: 'Learn to document what you are learning during each placement.',
          },
          {
            title: 'Reference And Network Building',
            desc: 'Aim to leave each co-op with mentors who can support your next steps.',
          },
        ],
      },
    },
  },
  'masters:ms-research': {
    headline: 'Research Masters Or MPhil',
    summary:
      'Mixes coursework with a research thesis. Good bridge to PhD or research heavy industry work.',
    fields: [
      { title: 'Direct PhD', desc: 'Use your thesis and publications to apply for funded PhDs.', tag: 'PhD' },
      { title: 'Research Roles', desc: 'Work in labs, think tanks and R and D teams.', tag: 'Research' },
      { title: 'Specialist Industry', desc: 'Move into highly technical positions in your field.', tag: 'Specialist' },
    ],
    studyPath: [
      {
        title: 'Select Research Area',
        desc: 'Choose a topic that you can see yourself exploring for several years.',
      },
      {
        title: 'Find Supervisors',
        desc: 'Identify supervisors whose work matches your interests and contact them early.',
      },
      {
        title: 'Target Output',
        desc: 'Aim for at least one quality paper or equivalent project from the degree.',
      },
    ],
    skillsPath: [
      {
        title: 'Academic Writing',
        desc: 'Learn structure, referencing and how to argue with evidence.',
      },
      {
        title: 'Methodology Tools',
        desc: 'Gain comfort with statistics, experiments or qualitative methods as needed.',
      },
      {
        title: 'Conference Participation',
        desc: 'Present work in seminars to gain feedback and build networks.',
      },
    ],
    fieldPlans: {
      'Direct PhD': {
        studyPath: [
          {
            title: 'Plan Thesis With PhD Continuation In Mind',
            desc: 'Choose a topic that can extend naturally into PhD level work.',
          },
          {
            title: 'Target PhD Friendly Countries',
            desc: 'Shortlist regions and universities that fund international PhDs.',
          },
          {
            title: 'Prepare Application Materials',
            desc: 'Draft research proposals and contact potential PhD supervisors early.',
          },
        ],
        skillsPath: [
          {
            title: 'Publication Strategy',
            desc: 'Aim to convert your Masters work into at least one solid paper.',
          },
          {
            title: 'Networking In Your Field',
            desc: 'Use conferences and online groups to meet future collaborators.',
          },
          {
            title: 'Long Term Research Planning',
            desc: 'Learn to plan multi year projects with milestones and risks.',
          },
        ],
      },
      'Research Roles': {
        studyPath: [
          {
            title: 'Identify Research Employers',
            desc: 'List labs, think tanks or R and D teams that hire in your area.',
          },
          {
            title: 'Align Dissertation With Employers',
            desc: 'Choose topics that closely match problems these organisations care about.',
          },
          {
            title: 'Plan Internships Or Assistantships',
            desc: 'Seek part time roles in labs while still studying.',
          },
        ],
        skillsPath: [
          {
            title: 'Project Documentation',
            desc: 'Keep clear lab notebooks and project reports.',
          },
          {
            title: 'Collaboration Across Disciplines',
            desc: 'Practice working with people from other backgrounds on shared problems.',
          },
          {
            title: 'Presentation Of Results',
            desc: 'Develop simple ways to visualise and explain data and findings.',
          },
        ],
      },
      'Specialist Industry': {
        studyPath: [
          {
            title: 'Connect With Technical Industries',
            desc: 'Map which sectors value advanced expertise from your discipline.',
          },
          {
            title: 'Select Industry Relevant Topics',
            desc: 'Choose research questions that can be applied in real products or services.',
          },
          {
            title: 'Learn About IP And NDAs',
            desc: 'Understand how research is handled when working with companies.',
          },
        ],
        skillsPath: [
          {
            title: 'Applied Problem Solving',
            desc: 'Practice turning open problems into projects with deliverables.',
          },
          {
            title: 'Stakeholder Alignment',
            desc: 'Learn to balance scientific rigour with deadlines and budgets.',
          },
          {
            title: 'Technical Communication',
            desc: 'Write and speak so both managers and engineers can follow your work.',
          },
        ],
      },
    },
  },
  'phd:research-academic': {
    headline: 'Academic Research Track',
    summary:
      'You plan to stay in universities or research institutes, teaching and publishing as a long term career.',
    fields: [
      { title: 'Post Doctoral Roles', desc: 'Short term advanced research positions after PhD.', tag: 'Post Doc' },
      { title: 'Faculty Positions', desc: 'Lecturer and professor tracks in universities.', tag: 'Faculty' },
      { title: 'Research Centres', desc: 'Work in specialist centres and policy institutes.', tag: 'Research' },
    ],
    studyPath: [
      {
        title: 'Clarify Academic Focus',
        desc: 'Decide whether you aim for teaching heavy or research heavy roles.',
      },
      {
        title: 'Build Publication Record',
        desc: 'Target solid journals and conferences that matter in your field.',
      },
      {
        title: 'Gain Teaching Experience',
        desc: 'Take assistant roles to build a strong teaching portfolio.',
      },
    ],
    skillsPath: [
      {
        title: 'Grant Writing',
        desc: 'Learn how to write funding proposals clearly and persuasively.',
      },
      {
        title: 'Supervision Skills',
        desc: 'Guide junior students and manage small research teams.',
      },
      {
        title: 'Public Communication',
        desc: 'Explain complex ideas to non experts through talks and articles.',
      },
    ],
    fieldPlans: {
      'Post Doctoral Roles': {
        studyPath: [
          {
            title: 'Plan Post Doc Timeline',
            desc: 'Decide when and where you want to do post doctoral work.',
          },
          {
            title: 'Identify Suitable Labs',
            desc: 'List groups whose work aligns with your PhD research.',
          },
          {
            title: 'Build Application Package',
            desc: 'Prepare research statements, sample work and references for post doc calls.',
          },
        ],
        skillsPath: [
          {
            title: 'Independent Research Leadership',
            desc: 'Take more ownership of project design and direction during your PhD.',
          },
          {
            title: 'Mentoring Juniors',
            desc: 'Actively support Masters and undergraduate students in your lab.',
          },
          {
            title: 'International Collaboration',
            desc: 'Seek co authors and co supervisors across institutions.',
          },
        ],
      },
      'Faculty Positions': {
        studyPath: [
          {
            title: 'Understand Faculty Expectations',
            desc: 'Learn about teaching, research and service requirements for academic roles.',
          },
          {
            title: 'Shape A Coherent Research Agenda',
            desc: 'Develop a multi year vision that connects your past and future work.',
          },
          {
            title: 'Build Teaching Portfolio',
            desc: 'Collect syllabi, feedback and materials from courses you assist.',
          },
        ],
        skillsPath: [
          {
            title: 'Course Design',
            desc: 'Practice designing modules and assessment plans.',
          },
          {
            title: 'Student Support',
            desc: 'Learn how to advise and guide students respectfully.',
          },
          {
            title: 'Academic Service',
            desc: 'Participate in committees, reviews or conference organisations.',
          },
        ],
      },
      'Research Centres': {
        studyPath: [
          {
            title: 'Target Themed Centres',
            desc: 'Identify institutes focused on topics closely related to your work.',
          },
          {
            title: 'Align Outputs With Centre Missions',
            desc: 'Shape your publications and proposals to fit their priorities.',
          },
          {
            title: 'Explore Fellowship Routes',
            desc: 'Look at fellow programs that place researchers inside such centres.',
          },
        ],
        skillsPath: [
          {
            title: 'Interdisciplinary Collaboration',
            desc: 'Get used to working with people from many departments.',
          },
          {
            title: 'Policy Or Industry Translation',
            desc: 'Practice turning academic findings into practical recommendations.',
          },
          {
            title: 'Long Form Writing',
            desc: 'Develop comfort with writing reports and monographs as needed.',
          },
        ],
      },
    },
  },
  'phd:industry-rd': {
    headline: 'Industry R And D Track',
    summary:
      'You want to work on advanced problems inside companies rather than stay inside universities.',
    fields: [
      { title: 'Corporate Labs', desc: 'Research teams inside large technology or science focused firms.', tag: 'Corporate' },
      { title: 'Innovation Teams', desc: 'Groups that build new products and services.', tag: 'Innovation' },
      { title: 'Technical Leadership', desc: 'Senior expert roles steering technical direction.', tag: 'Leadership' },
    ],
    studyPath: [
      {
        title: 'Select Industry Verticals',
        desc: 'Map which sectors such as health, finance or energy use your skills.',
      },
      {
        title: 'Align Research With Use Cases',
        desc: 'Choose topics that can connect to real world products or services.',
      },
      {
        title: 'Internships And Collaborations',
        desc: 'Seek joint projects with companies while you are still a student.',
      },
    ],
    skillsPath: [
      {
        title: 'Product Thinking',
        desc: 'Understand user needs, market fit and how research becomes products.',
      },
      {
        title: 'Team Collaboration',
        desc: 'Work well with engineers, designers and business staff.',
      },
      {
        title: 'IP And Patents Awareness',
        desc: 'Know basics of intellectual property and how companies protect it.',
      },
    ],
    fieldPlans: {
      'Corporate Labs': {
        studyPath: [
          {
            title: 'Identify Target Companies',
            desc: 'List firms whose research labs match your topic and interests.',
          },
          {
            title: 'Align Publications With Industry',
            desc: 'Choose venues and topics that corporate labs recognise and value.',
          },
          {
            title: 'Pursue Industry Collaborations',
            desc: 'Look for joint projects, internships or sponsored research opportunities.',
          },
        ],
        skillsPath: [
          {
            title: 'Applied Research Demos',
            desc: 'Create small prototypes that showcase your work in action.',
          },
          {
            title: 'Cross Functional Communication',
            desc: 'Practice explaining research to product, business and legal teams.',
          },
          {
            title: 'Awareness Of Corporate Culture',
            desc: 'Learn how performance and impact are evaluated inside companies.',
          },
        ],
      },
      'Innovation Teams': {
        studyPath: [
          {
            title: 'Learn Innovation Processes',
            desc: 'Study frameworks like design thinking and lean experimentation.',
          },
          {
            title: 'Connect Research To Products',
            desc: 'Focus on topics that can spin into features, tools or services.',
          },
          {
            title: 'Engage With Startups Or Incubators',
            desc: 'Seek programs where researchers and entrepreneurs collaborate.',
          },
        ],
        skillsPath: [
          {
            title: 'Rapid Prototyping',
            desc: 'Practice building quick versions of ideas to test value.',
          },
          {
            title: 'User Research',
            desc: 'Learn to interview and observe users to guide your work.',
          },
          {
            title: 'Pitching Ideas',
            desc: 'Develop short, clear pitches about what you are building and why.',
          },
        ],
      },
      'Technical Leadership': {
        studyPath: [
          {
            title: 'Understand Leadership Paths',
            desc: 'See how staff engineer, principal and similar roles work.',
          },
          {
            title: 'Target Companies With Dual Ladders',
            desc: 'Prefer organisations that support both management and expert tracks.',
          },
          {
            title: 'Build Visible Impact',
            desc: 'Shape projects in your PhD that clearly improve systems or processes.',
          },
        ],
        skillsPath: [
          {
            title: 'Strategic Thinking',
            desc: 'Practice connecting technical choices to business and product goals.',
          },
          {
            title: 'Influence Without Authority',
            desc: 'Learn to guide peers and juniors through persuasion and example.',
          },
          {
            title: 'Communication At Multiple Levels',
            desc: 'Adapt your message for executives, engineers and external partners.',
          },
        ],
      },
    },
  },
  'diploma:tech-skill': {
    headline: 'Tech Skill Diploma',
    summary:
      'Perfect if you want practical digital skills and faster earning potential alongside or after formal studies.',
    fields: [
      { title: 'Web Or App Development', desc: 'Work on building digital products for clients.', tag: 'Development' },
      { title: 'Data And Analytics', desc: 'Support companies and researchers with data tasks.', tag: 'Data' },
      { title: 'IT Support And Networks', desc: 'Help maintain systems for organisations.', tag: 'Support' },
    ],
    studyPath: [
      {
        title: 'Pick A Primary Track',
        desc: 'Select one main area such as web, mobile, data or support.',
      },
      {
        title: 'Complete A Structured Course',
        desc: 'Finish one serious course or diploma instead of many random tutorials.',
      },
      {
        title: 'Plan Next Degree Move',
        desc: 'Decide whether you will later convert this into a full degree.',
      },
    ],
    skillsPath: [
      {
        title: 'Portfolio Projects',
        desc: 'Create two or three real client style projects with clear results.',
      },
      {
        title: 'Client Experience',
        desc: 'Do small local or online jobs to learn how work flows in practice.',
      },
      {
        title: 'Time And Money Management',
        desc: 'Learn to manage workload, deadlines and basic budgeting.',
      },
    ],
    fieldPlans: {
      'Web Or App Development': {
        studyPath: [
          {
            title: 'Select Front End Or Back End Focus',
            desc: 'Decide whether you prefer UI and user flows or server logic.',
          },
          {
            title: 'Follow One Structured Track',
            desc: 'Finish a single complete course from basics to deployment.',
          },
          {
            title: 'Plan Transition To Degree Or Jobs',
            desc: 'Decide whether you will move into a CS degree or straight into work.',
          },
        ],
        skillsPath: [
          {
            title: 'Full Project Lifecycle',
            desc: 'Practice building apps from idea to deployment and updates.',
          },
          {
            title: 'Version Control And Collaboration',
            desc: 'Use Git and simple workflows with teammates or clients.',
          },
          {
            title: 'Performance And Security Basics',
            desc: 'Learn simple checks to keep apps responsive and safe.',
          },
        ],
      },
      'Data And Analytics': {
        studyPath: [
          {
            title: 'Choose Business Or Technical Angle',
            desc: 'Decide if you lean more towards dashboards or coding models.',
          },
          {
            title: 'Study Data Analysis Tools',
            desc: 'Use spreadsheets, BI tools or Python/R for analysis.',
          },
          {
            title: 'Explore Data Careers',
            desc: 'Look into analyst, BI, and junior data science roles.',
          },
        ],
        skillsPath: [
          {
            title: 'Data Cleaning And Prep',
            desc: 'Learn to clean messy datasets and handle missing values.',
          },
          {
            title: 'Visualisation Skills',
            desc: 'Create charts and dashboards that tell a clear story.',
          },
          {
            title: 'Business Question Thinking',
            desc: 'Practice turning questions from managers into data tasks.',
          },
        ],
      },
      'IT Support And Networks': {
        studyPath: [
          {
            title: 'Understand Support Roles',
            desc: 'Learn what helpdesk, NOC and junior admin jobs involve.',
          },
          {
            title: 'Study Networking Basics',
            desc: 'Cover essentials like IP, routing and common protocols.',
          },
          {
            title: 'Consider Certifications',
            desc: 'Look into entry level certificates that employers recognise.',
          },
        ],
        skillsPath: [
          {
            title: 'Troubleshooting Method',
            desc: 'Build a habit of testing issues step by step.',
          },
          {
            title: 'Ticketing And Documentation',
            desc: 'Learn to log, track and close support requests clearly.',
          },
          {
            title: 'Customer Friendly Attitude',
            desc: 'Handle non technical users with patience and clarity.',
          },
        ],
      },
    },
  },
  'diploma:creative-skill': {
    headline: 'Creative Skill Diploma',
    summary:
      'Good for students who enjoy design, content or media and want flexible ways to earn.',
    fields: [
      { title: 'Graphic And Brand Design', desc: 'Visual identity work for businesses.', tag: 'Design' },
      { title: 'Video And Content', desc: 'Editing, scripting and social content.', tag: 'Content' },
      { title: 'UI And Digital Products', desc: 'Design for apps and websites.', tag: 'Product' },
    ],
    studyPath: [
      {
        title: 'Choose Creative Niche',
        desc: 'Decide whether you prefer static design, motion, writing or product work.',
      },
      {
        title: 'Create A Showcase',
        desc: 'Build a simple online portfolio that shows your style and results.',
      },
      {
        title: 'Look At Further Study',
        desc: 'Consider degrees in design, media or communication if you love the work.',
      },
    ],
    skillsPath: [
      {
        title: 'Tool Mastery',
        desc: 'Get comfortable with at least one main design or editing tool.',
      },
      {
        title: 'Story And Strategy',
        desc: 'Understand how visuals support marketing or communication goals.',
      },
      {
        title: 'Client Collaboration',
        desc: 'Learn to take briefs, give options and respond to feedback.',
      },
    ],
    fieldPlans: {
      'Graphic And Brand Design': {
        studyPath: [
          {
            title: 'Study Brand Basics',
            desc: 'Learn about logos, colour, typography and brand systems.',
          },
          {
            title: 'Build Design Portfolio',
            desc: 'Create brand projects for real or imaginary clients.',
          },
          {
            title: 'Research Design Studios',
            desc: 'Look at agencies and in house teams you might want to join.',
          },
        ],
        skillsPath: [
          {
            title: 'Layout And Composition',
            desc: 'Practice arranging elements for clarity and impact.',
          },
          {
            title: 'File And Print Readiness',
            desc: 'Learn how to prepare files for print or digital delivery.',
          },
          {
            title: 'Feedback Handling',
            desc: 'Get used to revising designs based on client or mentor comments.',
          },
        ],
      },
      'Video And Content': {
        studyPath: [
          {
            title: 'Choose Content Style',
            desc: 'Decide whether you prefer short form, long form or scripted work.',
          },
          {
            title: 'Study Story Structure',
            desc: 'Learn how to plan intros, hooks and endings for videos.',
          },
          {
            title: 'Plan Channel Or Client Mix',
            desc: 'Think about whether you will grow your own channel or work for others.',
          },
        ],
        skillsPath: [
          {
            title: 'Editing Fluency',
            desc: 'Aim to edit quickly without sacrificing quality.',
          },
          {
            title: 'Sound And Lighting Basics',
            desc: 'Understand how audio and light affect overall quality.',
          },
          {
            title: 'Analytics Awareness',
            desc: 'Watch how audiences respond and adjust content accordingly.',
          },
        ],
      },
      'UI And Digital Products': {
        studyPath: [
          {
            title: 'Understand UX Fundamentals',
            desc: 'Learn about user flows, wireframes and usability.',
          },
          {
            title: 'Create Product Case Studies',
            desc: 'Design and document improvements to apps or websites.',
          },
          {
            title: 'Explore Further Degrees',
            desc: 'Consider HCI, interaction design or related programs if you enjoy the work.',
          },
        ],
        skillsPath: [
          {
            title: 'Design Systems Basics',
            desc: 'Learn to use consistent components and patterns.',
          },
          {
            title: 'Prototyping Skills',
            desc: 'Use tools to build interactive demos of your designs.',
          },
          {
            title: 'User Testing',
            desc: 'Practice simple tests to see where users struggle.',
          },
        ],
      },
    },
  },
  'diploma:business-skill': {
    headline: 'Business Skill Diploma',
    summary:
      'Useful when you want office ready skills without committing to long degrees at first.',
    fields: [
      { title: 'Office Administration', desc: 'Support roles in companies and organisations.', tag: 'Office' },
      { title: 'Sales And Customer Care', desc: 'Front line communication and relationship roles.', tag: 'Sales' },
      { title: 'Operations And Logistics', desc: 'Behind the scenes coordination and planning.', tag: 'Operations' },
    ],
    studyPath: [
      {
        title: 'Target Job Type',
        desc: 'Decide whether you want to sit in office, travel or mix both.',
      },
      {
        title: 'Match With Local Demand',
        desc: 'See which skills are hiring in your city and region right now.',
      },
      {
        title: 'Keep Door Open For Degrees',
        desc: 'If you enjoy the field, plan a Bachelor later to move up faster.',
      },
    ],
    skillsPath: [
      {
        title: 'Communication And Etiquette',
        desc: 'Polite and clear communication in professional settings.',
      },
      {
        title: 'Basic Tools',
        desc: 'Comfort with email, spreadsheets, presentations and office software.',
      },
      {
        title: 'Service Mindset',
        desc: 'Focus on solving problems for customers and colleagues.',
      },
    ],
    fieldPlans: {
      'Office Administration': {
        studyPath: [
          {
            title: 'Understand Office Roles',
            desc: 'Learn what reception, assistant and admin positions involve day to day.',
          },
          {
            title: 'Target Relevant Diplomas',
            desc: 'Choose courses that cover office procedures and software.',
          },
          {
            title: 'Plan Entry Level Job Search',
            desc: 'Prepare a basic CV and shortlist companies where you can start.',
          },
        ],
        skillsPath: [
          {
            title: 'Organisation And Filing',
            desc: 'Practice managing documents, calendars and simple records neatly.',
          },
          {
            title: 'Professional Behaviour',
            desc: 'Work on punctuality, reliability and appropriate dress.',
          },
          {
            title: 'Phone And Email Handling',
            desc: 'Learn polite scripts for answering calls and writing emails.',
          },
        ],
      },
      'Sales And Customer Care': {
        studyPath: [
          {
            title: 'Study Sales Basics',
            desc: 'Learn simple frameworks for understanding customer needs.',
          },
          {
            title: 'Explore Local Sales Opportunities',
            desc: 'Look for internships or starter roles in shops, call centres or online.',
          },
          {
            title: 'Plan Future Upskilling',
            desc: 'Consider later moving into marketing or business degrees.',
          },
        ],
        skillsPath: [
          {
            title: 'Listening And Questioning',
            desc: 'Practice asking the right questions before offering solutions.',
          },
          {
            title: 'Handling Objections',
            desc: 'Learn to respond calmly when people say no or hesitate.',
          },
          {
            title: 'Record Keeping For Leads',
            desc: 'Keep track of follow ups, promises and customer details carefully.',
          },
        ],
      },
      'Operations And Logistics': {
        studyPath: [
          {
            title: 'Understand How Goods Move',
            desc: 'Study simple supply chains from factory to customer.',
          },
          {
            title: 'Target Operations Focused Roles',
            desc: 'Look for warehouses, delivery services or producers who need coordinators.',
          },
          {
            title: 'Consider Future Degrees',
            desc: 'Think about BBA or supply chain degrees if you enjoy this work.',
          },
        ],
        skillsPath: [
          {
            title: 'Planning And Scheduling',
            desc: 'Practice making basic timetables and checklists for tasks.',
          },
          {
            title: 'Attention To Detail',
            desc: 'Reduce mistakes in orders, addresses and quantities.',
          },
          {
            title: 'Coordination With Teams',
            desc: 'Learn to communicate clearly between drivers, warehouses and clients.',
          },
        ],
      },
    },
  },
};

export default function GlobalScholarClient() {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('intermediate');
  const [selectedStream, setSelectedStream] = useState<string>('');
  const [selectedFieldKey, setSelectedFieldKey] = useState<string>('');
  const mainGroups = [
    {
      groupTitle: "Admissions & Funding",
      description: "Everything you need to secure your spot and finance your education.",
      color: "blue",
      sections: [
        {
          title: "Premier Scholarships",
          icon: <Trophy className="w-5 h-5" />,
          items: [
            { name: "GKS (South Korea)", desc: "Fully funded Master's/PhD programs.", link: "#", tag: "Full Funding" },
            { name: "MEXT (Japan)", desc: "Premier scholarship for all levels.", link: "#", tag: "Japan" },
            { name: "Commonwealth (UK)", desc: "For Commonwealth country students.", link: "#", tag: "UK" },
            { name: "Fulbright (USA)", desc: "Prestigous US exchange program.", link: "#", tag: "USA" },
            { name: "DAAD (Germany)", desc: "Funding for postgraduate studies.", link: "#", tag: "Germany" },
            { name: "Turkiye Burslari", desc: "Comprehensive support in Turkey.", link: "#", tag: "Turkey" }
          ]
        },
        {
          title: "Entrance Exams",
          icon: <ClipboardCheck className="w-5 h-5" />,
          items: [
            { name: "SAT / ACT", desc: "Undergraduate admissions (USA/Canada).", link: "#", tag: "Undergrad" },
            { name: "GRE General", desc: "Required for Master's/PhD in USA.", link: "#", tag: "Graduate" },
            { name: "GMAT Focus", desc: "The standard for MBA admissions.", link: "#", tag: "Business" },
            { name: "MCAT / USMLE", desc: "Medical pathways to USA/Europe.", link: "#", tag: "Medical" },
            { name: "LSAT", desc: "Law school admissions standard.", link: "#", tag: "Law" },
            { name: "AP Exams", desc: "Earn early college credits.", link: "#", tag: "Credits" }
          ]
        },
        {
          title: "Financial Aid & Work",
          icon: <Coins className="w-5 h-5" />,
          items: [
            { name: "Part-time Work Rules", desc: "20h/week limits in UK/USA/EU.", link: "#", tag: "Work" },
            { name: "Minimum Wage Guide", desc: "Average student earnings abroad.", link: "#", tag: "Income" },
            { name: "Education Loans", desc: "Financing for international students.", link: "#", tag: "Loans" },
            { name: "Teaching Assistant", desc: "How to get TA/RA roles.", link: "#", tag: "Funded" },
            { name: "Fee Waivers", desc: "Saving on application costs.", link: "#", tag: "Savings" },
            { name: "Tax Returns", desc: "Filing taxes as a student worker.", link: "#", tag: "Legal" }
          ]
        }
      ]
    },
    {
      groupTitle: "Visa & Global Mobility",
      description: "Navigating legal requirements and exploring post-graduation paths.",
      color: "emerald",
      sections: [
        {
          title: "Visa Guidance",
          icon: <Plane className="w-5 h-5" />,
          items: [
            { name: "Schengen Area", desc: "Student visas for 27+ countries.", link: "#", tag: "Europe" },
            { name: "Australia Sub-500", desc: "Roadmap for Australian visa.", link: "#", tag: "Australia" },
            { name: "Canada Study Permit", desc: "SDS and non-SDS category guide.", link: "#", tag: "Canada" },
            { name: "USA F1 Visa", desc: "Interview tips and documentation.", link: "#", tag: "USA" },
            { name: "UK Student Visa", desc: "CAS letter and financial proof.", link: "#", tag: "UK" },
            { name: "Ireland Student Visa", desc: "Entry requirements for Irish Unis.", link: "#", tag: "Ireland" }
          ]
        },
        {
          title: "Stay-back Options",
          icon: <Compass className="w-5 h-5" />,
          items: [
            { name: "UK Graduate Visa", desc: "2-year post-study work permit.", link: "#", tag: "2 Years" },
            { name: "USA OPT / STEM", desc: "1-3 years work authorization.", link: "#", tag: "USA" },
            { name: "Canada PGWP", desc: "Direct path to Permanent Residency.", link: "#", tag: "PR Path" },
            { name: "Germany Job Seeker", desc: "18-month visa after graduation.", link: "#", tag: "Germany" },
            { name: "Australia 485 Visa", desc: "Graduate visa for alumni.", link: "#", tag: "Australia" },
            { name: "EU Blue Card", desc: "Highly skilled worker permit.", link: "#", tag: "Europe" }
          ]
        },
        {
          title: "Top Destinations",
          icon: <MapPin className="w-5 h-5" />,
          items: [
            { name: "Study in Germany", desc: "Zero tuition in public unis.", link: "#", tag: "Free" },
            { name: "Study in USA", desc: "Home to world's top rankings.", link: "#", tag: "Top Tier" },
            { name: "Study in UK", desc: "Short duration Master's degrees.", link: "#", tag: "Fast" },
            { name: "Study in Finland", desc: "Happiest country education.", link: "#", tag: "EU" },
            { name: "Study in Malaysia", desc: "Affordable quality education.", link: "#", tag: "Budget" },
            { name: "Study in Hungary", desc: "Hidden gem with full funding.", link: "#", tag: "Scholarship" }
          ]
        }
      ]
    },
    {
      groupTitle: "Skills & Essentials",
      description: "Critical preparation for a successful application and global career.",
      color: "amber",
      sections: [
        {
          title: "Language Mastery",
          icon: <BookOpen className="w-5 h-5" />,
          items: [
            { name: "IELTS Prep", desc: "Academic and General resources.", link: "#", tag: "English" },
            { name: "TOEFL iBT", desc: "American proficiency standard.", link: "#", tag: "USA" },
            { name: "Duolingo English", desc: "Affordable and widely accepted.", link: "#", tag: "Fast" },
            { name: "PTE Academic", desc: "Computer-based test guide.", link: "#", tag: "AU/NZ" },
            { name: "German (A1-C1)", desc: "Path to free German education.", link: "#", tag: "German" },
            { name: "Korean (TOPIK)", desc: "Essential for Korea paths.", link: "#", tag: "Korean" }
          ]
        },
        {
          title: "Career Scopes",
          icon: <Briefcase className="w-5 h-5" />,
          items: [
            { name: "AI & Data Science", desc: "Global demand and top unis.", link: "#", tag: "Tech" },
            { name: "Healthcare & Nursing", desc: "High demand in UK/Germany.", link: "#", tag: "Medical" },
            { name: "Sustainable Energy", desc: "Emerging green investment field.", link: "#", tag: "Future" },
            { name: "Digital Marketing", desc: "Flexible global career paths.", link: "#", tag: "Remote" },
            { name: "Cybersecurity", desc: "Protecting global infrastructure.", link: "#", tag: "Security" },
            { name: "Supply Chain", desc: "Essential global logistics roles.", link: "#", tag: "Logistics" }
          ]
        },
        {
          title: "Student Essentials",
          icon: <FileText className="w-5 h-5" />,
          items: [
            { name: "SOP Writing", desc: "Winning Statement of Purpose.", link: "#", tag: "Admissions" },
            { name: "CV/Resume Build", desc: "International standard templates.", link: "#", tag: "Career" },
            { name: "Bank Statements", desc: "Financial proof requirements.", link: "#", tag: "Legal" },
            { name: "WES Evaluation", desc: "Degree verification for USA/CA.", link: "#", tag: "Degrees" },
            { name: "Health Insurance", desc: "Choosing student health cover.", link: "#", tag: "Health" },
            { name: "Accommodation", desc: "Finding safe housing abroad.", link: "#", tag: "Housing" }
          ]
        }
      ]
    },
    {
      groupTitle: "Research & Community",
      description: "Deep dive into research opportunities and connecting with global networks.",
      color: "purple",
      sections: [
        {
          title: "Research & PhD",
          icon: <Microscope className="w-5 h-5" />,
          items: [
            { name: "Research Proposal", desc: "How to write a technical proposal.", link: "#", tag: "PhD/MS" },
            { name: "Finding Supervisors", desc: "Tips for cold-emailing professors.", link: "#", tag: "Networking" },
            { name: "Journal Publications", desc: "How to publish in Scopus/ISI journals.", link: "#", tag: "Academic" },
            { name: "Post-Doc Positions", desc: "Global opportunities for researchers.", link: "#", tag: "Career" },
            { name: "Conference Grants", desc: "Funding for international travel.", link: "#", tag: "Travel" },
            { name: "Lab Internships", desc: "Summer research programs abroad.", link: "#", tag: "Intern" }
          ]
        },
        {
          title: "Student Communities",
          icon: <Users className="w-5 h-5" />,
          items: [
            { name: "PSA Networks", desc: "Pakistani Student Associations abroad.", link: "#", tag: "Support" },
            { name: "Erasmus Alumni", desc: "Networking with European graduates.", link: "#", tag: "EU" },
            { name: "Discord Study Groups", desc: "Join global peer-to-peer groups.", link: "#", tag: "Social" },
            { name: "Mentorship Program", desc: "Get guided by senior scholars.", link: "#", tag: "Advice" },
            { name: "Volunteer Abroad", desc: "Building your global profile.", link: "#", tag: "CV Boost" },
            { name: "LinkedIn for Students", desc: "Optimizing profile for global jobs.", link: "#", tag: "Professional" }
          ]
        },
        {
          title: "Alumni Success",
          icon: <Zap className="w-5 h-5" />,
          items: [
            { name: "Interview Series", desc: "Stories of successful scholars.", link: "#", tag: "Inspire" },
            { name: "Mistakes to Avoid", desc: "Lessons learned by seniors.", link: "#", tag: "Warning" },
            { name: "Culture Shock Guide", desc: "Adapting to life in a new country.", link: "#", tag: "Lifestyle" },
            { name: "Salary Insights", desc: "What to expect after graduation.", link: "#", tag: "Finance" },
            { name: "Startup Support", desc: "Launching business as a student.", link: "#", tag: "Business" },
            { name: "Mental Health", desc: "Resources for overseas students.", link: "#", tag: "Wellness" }
          ]
        }
      ]
    },
    {
      groupTitle: "Departure & Security",
      description: "Final steps before flying and staying safe while living overseas.",
      color: "rose",
      sections: [
        {
          title: "Pre-Departure",
          icon: <Luggage className="w-5 h-5" />,
          items: [
            { name: "Packing Checklist", desc: "What to take and what to leave.", link: "#", tag: "Travel" },
            { name: "Air Ticket Hacks", desc: "Finding cheap student flights.", link: "#", tag: "Budget" },
            { name: "Sim Card & Bank", desc: "Setting up your life on day one.", link: "#", tag: "Essentials" },
            { name: "Forex & Currency", desc: "Best ways to carry money abroad.", link: "#", tag: "Finance" },
            { name: "Airport Pickups", desc: "University-led arrival services.", link: "#", tag: "Arrival" },
            { name: "Legal Documents", desc: "Must-have copies for your flight.", link: "#", tag: "Legal" }
          ]
        },
        {
          title: "Safety & Legal",
          icon: <ShieldCheck className="w-5 h-5" />,
          items: [
            { name: "Emergency Contacts", desc: "Embassy and local help numbers.", link: "#", tag: "Safety" },
            { name: "Know Your Rights", desc: "Legal protection for students.", link: "#", tag: "Legal" },
            { name: "Avoiding Scams", desc: "Housing and job scam alerts.", link: "#", tag: "Warning" },
            { name: "Health Systems", desc: "How to use local healthcare.", link: "#", tag: "Medical" },
            { name: "Driving License", desc: "Converting license abroad.", link: "#", tag: "Transport" },
            { name: "Work Rights Guide", desc: "Protecting your labor rights.", link: "#", tag: "Work" }
          ]
        },
        {
          title: "Language & Culture",
          icon: <MessagesSquare className="w-5 h-5" />,
          items: [
            { name: "Slang & Idioms", desc: "Speaking like a local (US/UK/AU).", link: "#", tag: "Language" },
            { name: "Dining Etiquette", desc: "Social norms in various cultures.", link: "#", tag: "Social" },
            { name: "Public Transport", desc: "Navigating trains/buses easily.", link: "#", tag: "Life" },
            { name: "Grocery Savings", desc: "Eating healthy on a budget.", link: "#", tag: "Budget" },
            { name: "Part-time English", desc: "English for workplace success.", link: "#", tag: "Skill" },
            { name: "Local Festivals", desc: "Participating in local life.", link: "#", tag: "Culture" }
          ]
        }
      ]
    },
    {
      groupTitle: "Expertise & Perks",
      description: "Direct support from experts and exclusive digital benefits for students.",
      color: "indigo",
      sections: [
        {
          title: "Consultation",
          icon: <Headphones className="w-5 h-5" />,
          items: [
            { name: "1-on-1 Strategy", desc: "Personalized roadmap with experts.", link: "#", tag: "Expert" },
            { name: "Document Review", desc: "Professional SOP/CV editing.", link: "#", tag: "Premium" },
            { name: "Interview Mock", desc: "Practice for visa & admissions.", link: "#", tag: "Success" },
            { name: "Legal Advisory", desc: "Expert help with complex visa cases.", link: "#", tag: "Legal" },
            { name: "Finance Planning", desc: "Managing block accounts/funds.", link: "#", tag: "Finance" },
            { name: "University Selection", desc: "Finding the right fit for you.", link: "#", tag: "Choice" }
          ]
        },
        {
          title: "Digital Skills",
          icon: <Laptop className="w-5 h-5" />,
          items: [
            { name: "Freelancing 101", desc: "Earn while studying overseas.", link: "#", tag: "Income" },
            { name: "Coding for Scholars", desc: "High-paying part-time skill.", link: "#", tag: "Tech" },
            { name: "Data Analytics", desc: "Essential skill for research/jobs.", link: "#", tag: "Research" },
            { name: "AI Tools Guide", desc: "Using AI for academic success.", link: "#", tag: "AI" },
            { name: "Graphic Design", desc: "Visualizing research and work.", link: "#", tag: "Design" },
            { name: "Cloud Essentials", desc: "Modern infrastructure knowledge.", link: "#", tag: "Cloud" }
          ]
        },
        {
          title: "Student Perks",
          icon: <Gift className="w-5 h-5" />,
          items: [
            { name: "Student Discounts", desc: "ISIC and local brand deals.", link: "#", tag: "Save" },
            { name: "Free Software", desc: "Access to premium student tools.", link: "#", tag: "Free" },
            { name: "Bank Offers", desc: "Zero-fee accounts for scholars.", link: "#", tag: "Finance" },
            { name: "Travel Benefits", desc: "Discounted flights and trains.", link: "#", tag: "Travel" },
            { name: "Event Passes", desc: "Free entry to academic summits.", link: "#", tag: "Events" },
            { name: "Book Grants", desc: "Vouchers for study materials.", link: "#", tag: "Grants" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 print:bg-white print:pb-0">
      {/* Hero Header */}
      <div className="bg-slate-900 pt-32 pb-40 px-4 relative overflow-hidden print:hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">The Global Scholar Hub</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            TRANSFORM YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ACADEMIC DESTINY</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
          >
            A curated roadmap for the next generation of global leaders. 
            From scholarships to stay-back visas, we have mapped every step.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mt-12 relative z-20">
        <div className="space-y-24">
          <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-100 px-6 md:px-10 py-8 flex flex-col lg:flex-row gap-8 items-stretch print:shadow-none print:border-slate-200 print:rounded-xl print:px-6 print:py-6">
            <div className="lg:w-[36%] flex flex-col gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Two-Step Roadmap</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  Tell us your class and stream.
                </h2>
                <p className="text-slate-500 text-sm md:text-base">
                  First pick your current level, then your stream such as F.Sc, FA or I.Com. We then suggest degrees, study paths and skill tracks.
                </p>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
                    Step 1 · Current Education
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {educationLevels.map(level => (
                      <button
                        key={level.key}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(level.key);
                          const firstStream = streamsByLevel[level.key]?.[0];
                          setSelectedStream(firstStream ? firstStream.key : '');
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          selectedLevel === level.key
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
                    Step 2 · Subject Group
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(streamsByLevel[selectedLevel] || []).map(stream => (
                      <button
                        key={stream.key}
                        type="button"
                        onClick={() => setSelectedStream(stream.key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          selectedStream === stream.key || (!selectedStream && streamsByLevel[selectedLevel]?.[0]?.key === stream.key)
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {stream.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                  <span>
                    Roadmap adapts as you change level and subject group.
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-[64%] flex flex-col gap-4">
              {(() => {
                const levelStreams = streamsByLevel[selectedLevel] || [];
                const effectiveStream = selectedStream || (levelStreams[0]?.key ?? '');
                const planKey = `${selectedLevel}:${effectiveStream}`;
                const plan = streamPlans[planKey];
                if (!plan) {
                  return (
                    <div className="flex-1 bg-slate-50 rounded-2xl border border-dashed border-slate-200 px-5 py-6 flex items-center justify-center text-sm text-slate-500">
                      Select a combination above to see a tailored roadmap.
                    </div>
                  );
                }
                const availableFieldKeys = plan.fields.map(field => `${planKey}::${field.title}`);
                const defaultFieldKey = availableFieldKeys[0] || '';
                const effectiveFieldKey = availableFieldKeys.includes(selectedFieldKey)
                  ? selectedFieldKey
                  : defaultFieldKey;
                const activeField = plan.fields.find(field => `${planKey}::${field.title}` === effectiveFieldKey);
                return (
                  <>
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 px-5 py-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                            Suggested Directions
                          </div>
                          <div className="mt-1 text-sm font-semibold text-slate-800">
                            {plan.headline}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(streamsByLevel[selectedLevel] || [])
                            .filter(s => s.key === effectiveStream)
                            .map(s => (
                              <span
                                key={s.key}
                                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                              >
                                {s.badge}
                              </span>
                            ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {plan.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {plan.fields.map(field => {
                          const fieldKey = `${planKey}::${field.title}`;
                          const isActiveField = fieldKey === effectiveFieldKey;
                          return (
                            <button
                              key={field.title}
                              type="button"
                              onClick={() => setSelectedFieldKey(fieldKey)}
                              className={`text-left px-3 py-2 rounded-xl border text-xs text-slate-700 flex flex-col gap-1 flex-1 min-w-[140px] transition-all ${
                                isActiveField
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-white border-slate-100 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className={`font-semibold ${isActiveField ? 'text-white' : 'text-slate-900'}`}>
                                  {field.title}
                                </span>
                                {field.tag && (
                                  <span
                                    className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full ${
                                      isActiveField ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
                                    }`}
                                  >
                                    {field.tag}
                                  </span>
                                )}
                              </div>
                              <span className={`text-[11px] ${isActiveField ? 'text-slate-100' : 'text-slate-500'}`}>
                                {field.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 flex flex-col gap-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            Study Path
                          </div>
                          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                            Degrees And Countries
                          </span>
                        </div>
                        {activeField && (
                          <div className="text-[10px] text-slate-500 mb-1">
                            Focused on:{" "}
                            <span className="font-semibold text-slate-800">
                              {activeField.title}
                            </span>
                          </div>
                        )}
                        <div className="space-y-2">
                          {(plan.fieldPlans?.[activeField?.title || '']?.studyPath || plan.studyPath).map(item => (
                            <div key={item.title} className="rounded-xl bg-white px-3 py-2 border border-slate-100">
                              <div className="text-xs font-semibold text-slate-900">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-600">
                                {item.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                            Next 30 Days
                          </div>
                          <div className="space-y-1.5">
                            {getNext30DaysActions(selectedLevel, activeField?.title).map(item => (
                              <div key={item.title} className="rounded-lg bg-white px-3 py-1.5 border border-slate-100">
                                <div className="text-[11px] font-semibold text-slate-900">
                                  {item.title}
                                </div>
                                <div className="text-[10px] text-slate-600">
                                  {item.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 flex flex-col gap-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            Skill Path
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                            Skills And Earning
                          </span>
                        </div>
                        {activeField && (
                          <div className="text-[10px] text-slate-500 mb-1">
                            Skills to support:{" "}
                            <span className="font-semibold text-slate-800">
                              {activeField.title}
                            </span>
                          </div>
                        )}
                        <div className="space-y-2">
                          {(plan.fieldPlans?.[activeField?.title || '']?.skillsPath || plan.skillsPath).map(item => (
                            <div key={item.title} className="rounded-xl bg-white px-3 py-2 border border-slate-100">
                              <div className="text-xs font-semibold text-slate-900">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-600">
                                {item.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all print:hidden"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print / Save This Roadmap</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
          {mainGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="print:hidden">
              <div className="mb-10 px-4">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-2 flex items-center gap-3">
                  <span className={`w-2 h-8 rounded-full bg-${group.color}-500`} />
                  {group.groupTitle}
                </h2>
                <p className="text-slate-500 font-medium">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {group.sections.map((section, sectionIdx) => (
                  <motion.div
                    key={sectionIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIdx * 0.1 }}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col"
                  >
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                      <h3 className="font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                        <span className="text-slate-400">{section.icon}</span>
                        {section.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">
                        {section.items.length} Guides
                      </span>
                    </div>
                    
                    <div className="p-3 flex flex-col gap-2 flex-grow">
                      {section.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.link}
                          className="group p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex items-center justify-between"
                        >
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400 px-1.5 py-0.5 rounded-md bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1">{item.desc}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1" />
                        </a>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-slate-50/50 border-t border-slate-50 mt-auto">
                      <button className="w-full py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors">
                        Explore Category
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search/Help CTA */}
      <section className="container mx-auto max-w-4xl px-4 mt-32 print:hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-blue-600 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl shadow-blue-200"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
              Cannot find what you are looking for?
            </h2>
            <p className="text-blue-100 font-medium mb-10 max-w-lg mx-auto">
              Our counselors are ready to help you navigate the complex world of global education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/20">
                Book a Free Call
              </button>
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-12 pr-6 py-4 bg-blue-700/50 border border-blue-500/50 text-white placeholder:text-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-64 transition-all"
                />
                <Search className="w-5 h-5 text-blue-300 absolute left-4" />
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-[100px]" />
        </motion.div>
      </section>
    </div>
  );
}
