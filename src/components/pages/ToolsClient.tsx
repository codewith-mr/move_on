'use client';

import { useState } from 'react';
import ToolCard, { ToolCardProps } from '@/components/cards/ToolCard';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const apps: ToolCardProps[] = [
  { id: 'mobile-app-1', slug: 'mobile-app-1', title: 'TBS Mobile App', description: 'Access all your courses and resources on the go with our official mobile application.', category: 'Apps', imageUrl: '/placeholder-tool.svg', isNew: true },
  { id: 'desktop-app-1', slug: 'desktop-app-1', title: 'Desktop Assistant', description: 'A powerful desktop tool to help you manage your projects and productivity.', category: 'Apps', imageUrl: '/placeholder-tool.svg' },
];

// Custom SVG Icons for Categories
const CategoryIcons = {
  all: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  general: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  business: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  writing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  web: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  design: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  social: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M18 8l2 2 4-4" />
    </svg>
  ),
  developer: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  ),
  education: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
};

const toolCategories = [
  { id: 'all', name: 'All Tools', icon: CategoryIcons.all },
  { id: 'general', name: 'General Utilities', icon: CategoryIcons.general },
  { id: 'business', name: 'Business & Productivity', icon: CategoryIcons.business },
  { id: 'writing', name: 'Writing & Content', icon: CategoryIcons.writing },
  { id: 'web', name: 'Web & SEO', icon: CategoryIcons.web },
  { id: 'design', name: 'Design & Visual', icon: CategoryIcons.design },
  { id: 'social', name: 'Social Media & Marketing', icon: CategoryIcons.social },
  { id: 'developer', name: 'Developer & Tech', icon: CategoryIcons.developer },
  { id: 'education', name: 'Education & Learning', icon: CategoryIcons.education },
];

const tools: ToolCardProps[] = [
  { id: 'calculator', slug: 'calculator', title: 'Calculator', description: 'Basic, scientific, and financial calculations for all your mathematical needs.', category: 'General Utilities', imageUrl: '/tool-image.svg', isPopular: true, toolUrl: '/tools/calculator' },
  { id: 'unit-converter', slug: 'unit-converter', title: 'Unit Converter', description: 'Convert length, weight, temperature, currency, and more with this comprehensive unit conversion tool.', category: 'General Utilities', imageUrl: '/placeholder-tool.svg', isFree: true, toolUrl: '/tools/unit-converter' },
  { id: 'currency-converter', slug: 'currency-converter', title: 'Currency Converter', description: 'Get real-time exchange rates and convert between different currencies instantly.', category: 'General Utilities', imageUrl: '/placeholder-tool.svg', isFree: true, toolUrl: '/tools/currency-converter' },
  { id: 'date-calculator', slug: 'date-calculator', title: 'Date Calculator', description: 'Add or subtract days, find days between dates, and calculate time differences.', category: 'General Utilities', imageUrl: '/placeholder-tool.svg', toolUrl: '/tools/date-calculator' },
  { id: 'world-clock', slug: 'world-clock', title: 'World Clock / Time Zone Converter', description: 'Check the current time in multiple locations and convert between different time zones.', category: 'General Utilities', imageUrl: '/placeholder-tool.svg', toolUrl: '/tools/world-clock' },
  { id: 'pdf-tools', slug: 'pdf-tools', title: 'PDF Tools', description: 'Merge, split, compress, and convert PDF files to other formats like Word, Excel, and more.', category: 'General Utilities', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'invoice-generator', slug: 'invoice-generator', title: 'Invoice Generator', description: 'Create professional invoices for your business in seconds with customizable templates.', category: 'Business & Productivity', imageUrl: '/placeholder-tool.svg', isFree: true, toolUrl: '/tools/invoice-generator' },
  { id: 'todo-list', slug: 'todo-list', title: 'To-Do List & Task Manager', description: 'Organize your tasks, set priorities, and track your progress with this intuitive task manager.', category: 'Business & Productivity', imageUrl: '/placeholder-tool.svg', isNew: true },
  { id: 'meeting-scheduler', slug: 'meeting-scheduler', title: 'Meeting Scheduler', description: 'Schedule meetings efficiently by sharing your availability and letting others book time slots.', category: 'Business & Productivity', imageUrl: '/placeholder-tool.svg' },
  { id: 'time-tracker', slug: 'time-tracker', title: 'Time Tracker', description: 'Track time spent on projects and tasks to improve productivity and billing accuracy.', category: 'Business & Productivity', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'budget-tracker', slug: 'budget-tracker', title: 'Budget Tracker / Expense Manager', description: 'Monitor your income and expenses, create budgets, and gain insights into your spending habits.', category: 'Business & Productivity', imageUrl: '/placeholder-tool.svg' },
  { id: 'grammar-checker', slug: 'grammar-checker', title: 'Grammar Checker', description: 'Improve your writing by checking grammar, spelling, punctuation, and style issues.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'plagiarism-checker', slug: 'plagiarism-checker', title: 'Plagiarism Checker', description: 'Verify the originality of your content and avoid unintentional plagiarism.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg' },
  { id: 'ai-writing-assistant', slug: 'ai-writing-assistant', title: 'AI Writing Assistant', description: 'Generate, improve, and refine your content with the help of advanced AI technology.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg', isNew: true },
  { id: 'text-summarizer', slug: 'text-summarizer', title: 'Text Summarizer', description: 'Condense long articles and documents into concise summaries without losing key information.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'hashtag-generator', slug: 'hashtag-generator', title: 'Hashtag Generator', description: 'Create relevant hashtags for Instagram, TikTok, LinkedIn, and other social platforms.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'emoji-finder', slug: 'emoji-finder', title: 'Emoji Finder', description: 'Convert words to emojis or quickly find and copy the perfect emoji for your content.', category: 'Writing & Content', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'qr-code-generator', slug: 'qr-code-generator', title: 'QR Code Generator', description: 'Create custom QR codes for websites, contact information, Wi-Fi networks, and more.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'short-url-generator', slug: 'short-url-generator', title: 'Short URL Generator', description: 'Shorten long URLs for easier sharing on social media and in messages.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'meta-tag-generator', slug: 'meta-tag-generator', title: 'Meta Tag Generator', description: 'Create optimized meta tags for your website to improve SEO and social sharing.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg' },
  { id: 'favicon-generator', slug: 'favicon-generator', title: 'Favicon Generator', description: 'Create favicons for your website from images or text in various formats and sizes.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg' },
  { id: 'website-speed-checker', slug: 'website-speed-checker', title: 'Website Speed Checker', description: "Analyze your website's loading speed and get recommendations for improvement.", category: 'Web & SEO', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'mobile-friendly-test', slug: 'mobile-friendly-test', title: 'Mobile-Friendly Test Tool', description: 'Check if your website is optimized for mobile devices and get suggestions for improvements.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg' },
  { id: 'keyword-research-tool', slug: 'keyword-research-tool', title: 'Keyword Research Tool', description: 'Find high-value keywords for your content with search volume, competition, and difficulty metrics.', category: 'Web & SEO', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'image-resizer', slug: 'image-resizer', title: 'Image Resizer / Compressor', description: 'Resize and compress images without losing quality for faster website loading.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'color-picker', slug: 'color-picker', title: 'Color Picker / Palette Generator', description: 'Create harmonious color palettes for your designs and get color codes in various formats.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'online-design-tool', slug: 'online-design-tool', title: 'Online Design Tool', description: 'Create graphics, presentations, social media posts, and more with this versatile design tool.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'meme-generator', slug: 'meme-generator', title: 'Meme Generator', description: 'Create funny memes with popular templates or upload your own images.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'logo-maker', slug: 'logo-maker', title: 'Logo Maker', description: 'Design a professional logo for your business or project with customizable templates.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg' },
  { id: 'infographic-maker', slug: 'infographic-maker', title: 'Infographic Maker', description: 'Create visually appealing infographics to present data and information effectively.', category: 'Design & Visual', imageUrl: '/placeholder-tool.svg' },
  { id: 'social-media-scheduler', slug: 'social-media-scheduler', title: 'Social Media Post Scheduler', description: 'Plan and schedule your social media posts across multiple platforms in advance.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'social-hashtag-generator', slug: 'social-hashtag-generator', title: 'Hashtag Generator', description: 'Find trending and relevant hashtags to increase the reach of your social media posts.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'content-calendar', slug: 'content-calendar', title: 'Content Calendar Tool', description: 'Plan and organize your content strategy with a visual calendar and scheduling features.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg' },
  { id: 'bio-link-generator', slug: 'bio-link-generator', title: 'Bio Link Generator', description: 'Create a single link for your social media bio that leads to multiple destinations.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'caption-generator', slug: 'caption-generator', title: 'Caption Generator', description: 'Generate engaging captions for your social media posts to increase engagement.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg', isNew: true },
  { id: 'analytics-tools', slug: 'analytics-tools', title: 'Analytics Tools', description: 'Track engagement, followers, and trends across your social media platforms.', category: 'Social Media & Marketing', imageUrl: '/placeholder-tool.svg' },
  { id: 'json-formatter', slug: 'json-formatter', title: 'JSON Formatter / Validator', description: 'Format, validate, and beautify JSON data for easier reading and debugging.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'regex-tester', slug: 'regex-tester', title: 'Regex Tester', description: 'Test and debug regular expressions with real-time highlighting and explanation.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'lorem-ipsum', slug: 'lorem-ipsum', title: 'Lorem Ipsum Generator', description: 'Generate placeholder text for design mockups, layouts, and content drafts.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'code-formatter', slug: 'code-formatter', title: 'Code Beautifier / Formatter', description: 'Format and beautify code in various programming languages for better readability.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'uuid-generator', slug: 'uuid-generator', title: 'UUID Generator', description: 'Generate random UUIDs (Universally Unique Identifiers) for your applications.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'color-code-converter', slug: 'color-code-converter', title: 'Color Code Converter', description: 'Convert between different color formats like HEX, RGB, HSL, and CMYK.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'markdown-editor', slug: 'markdown-editor', title: 'Markdown Editor', description: 'Write and preview Markdown with syntax highlighting and live preview.', category: 'Developer & Tech', imageUrl: '/placeholder-tool.svg' },
  { id: 'citation-generator', slug: 'citation-generator', title: 'Citation Generator', description: 'Create citations in MLA, APA, Chicago, and other formats for academic papers.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'flashcard-app', slug: 'flashcard-app', title: 'Flashcard App', description: 'Create digital flashcards for effective studying and memorization.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg' },
  { id: 'language-translator', slug: 'language-translator', title: 'Language Translator', description: 'Translate text between multiple languages with high accuracy.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg', isPopular: true },
  { id: 'dictionary', slug: 'dictionary', title: 'Dictionary / Thesaurus', description: 'Look up word definitions, synonyms, antonyms, and usage examples.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg', isFree: true },
  { id: 'math-solver', slug: 'math-solver', title: 'Math Solver', description: 'Solve complex mathematical problems with step-by-step explanations.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg' },
  { id: 'mind-map-maker', slug: 'mind-map-maker', title: 'Mind Map Maker', description: 'Create visual mind maps to organize ideas, concepts, and information.', category: 'Education & Learning', imageUrl: '/placeholder-tool.svg', isNew: true },
];

export default function ToolsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All'); // All, Popular, New, Free

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
  };

  const applyFilters = (items: ToolCardProps[]) => {
    return items.filter(item => {
      // Category Filter
      if (selectedCategory !== 'All Tools' && item.category !== selectedCategory) {
        return false;
      }

      // Search Filter
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Type Filter
      let matchesType = true;
      if (filterType === 'Popular') matchesType = !!item.isPopular;
      if (filterType === 'New') matchesType = !!item.isNew;
      if (filterType === 'Free') matchesType = item.isFree !== false; // Default to free if undefined

      return matchesSearch && matchesType;
    });
  };

  const filteredApps = applyFilters(apps);
  const filteredTools = applyFilters(tools);
  
  const allFilteredItems = [...filteredApps, ...filteredTools];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      
      {/* Header Section */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
              Apps & Tools
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Supercharge your workflow with our curated collection of apps and utilities. 
              Everything you need to create, manage, and grow.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              
              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 px-1">Categories</h3>
                <div className="flex flex-col space-y-1">
                  {toolCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`flex items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group border ${
                        selectedCategory === category.name
                          ? 'bg-primary/5 text-primary shadow-sm border-primary'
                          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border-transparent'
                      }`}
                    >
                      <span className={`mr-3 transition-transform duration-300 ${selectedCategory === category.name ? 'scale-110' : 'group-hover:scale-110 text-neutral-400 group-hover:text-neutral-600'}`}>
                        {category.icon}
                      </span>
                      {category.name}
                      {selectedCategory === category.name && (
                         <motion.div 
                           layoutId="activeCategory"
                           className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                         />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-h-[500px]">
            
            {/* Header for List */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neutral-900">
                {selectedCategory === 'All Tools' ? 'All Resources' : selectedCategory}
                <span className="ml-3 text-sm font-normal text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                  {allFilteredItems.length}
                </span>
              </h2>
            </div>

            {/* Search & Filters Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative group flex-1">
                 <input 
                  type="text" 
                  placeholder="Search tools..." 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute left-4 top-3.5 h-5 w-5 text-neutral-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {['All', 'Popular', 'New', 'Free'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange(type)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all border whitespace-nowrap ${
                      filterType === type 
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-lg transform scale-105' 
                        : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              {allFilteredItems.length > 0 ? (
                <motion.div 
                  key={selectedCategory + filterType + searchQuery}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {allFilteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="h-full"
                    >
                      <ToolCard {...item} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-32 bg-white rounded-3xl border border-dashed border-neutral-200"
                >
                  <div className="text-5xl mb-4 opacity-50">🔍</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">No tools found</h3>
                  <p className="text-neutral-500 text-sm">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => {setSearchQuery(''); setFilterType('All'); setSelectedCategory('All Tools');}}
                    className="mt-6 px-5 py-2.5 bg-neutral-900 text-white text-sm rounded-xl font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* CTA Box */}
            <div className="mt-20 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
               <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Missing something?</h2>
                <p className="text-neutral-300 mb-8 max-w-lg mx-auto">
                  We're constantly adding new tools. Let us know what you need to speed up your workflow.
                </p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all hover:scale-105 shadow-lg">
                  Request a Tool
                </Link>
               </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
