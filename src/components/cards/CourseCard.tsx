'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface CourseCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  duration: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: any[];
  instructorAvatar?: string;
  studentCount?: number;
  isStaffPick?: boolean;
  tags?: string[];
}

const LevelIcon = ({ level }: { level: string }) => {
  const activeLevel = 
    level === 'Beginner' ? 1 : 
    level === 'Intermediate' ? 2 : 
    level === 'Advanced' ? 3 : 0;

  // Standard cellular signal icon style
  return (
    <svg 
      className="w-3.5 h-3.5" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M2 20h4V14H2v6zm7 0h4V10H9v10zm7 0h4V4h-4v16z" 
        fill="none" 
      />
      {/* Bar 1 (Low) */}
      <rect 
        x="3" y="14" width="4" height="6" rx="1"
        className={`transition-colors ${activeLevel >= 1 ? 'fill-purple-600' : 'fill-gray-300'}`} 
      />
      {/* Bar 2 (Medium) */}
      <rect 
        x="10" y="8" width="4" height="12" rx="1"
        className={`transition-colors ${activeLevel >= 2 ? 'fill-purple-600' : 'fill-gray-300'}`} 
      />
      {/* Bar 3 (High) */}
      <rect 
        x="17" y="2" width="4" height="18" rx="1"
        className={`transition-colors ${activeLevel >= 3 ? 'fill-purple-600' : 'fill-gray-300'}`} 
      />
    </svg>
  );
};

const TagsPopover = ({ tags, category }: { tags: string[], category: string }) => {
  const [show, setShow] = useState(false);
  
  // Combine category with tags if not already included
  const allTags = [category, ...tags.filter(t => t !== category)];
  
  // Show max 2 tags to ensure single line fit
  const maxVisible = 2;
  const visibleTags = allTags.slice(0, maxVisible);
  const remainingCount = Math.max(0, allTags.length - maxVisible);

  return (
    <div className="flex flex-nowrap gap-2 items-center relative overflow-hidden">
      {visibleTags.map((tag, i) => (
        <span key={i} className="bg-gray-100 text-gray-700 text-[10px] px-2 py-1 rounded-md font-medium whitespace-nowrap">
          {tag}
        </span>
      ))}
      
      {remainingCount > 0 && (
        <>
          <button 
            className="text-gray-500 hover:text-primary text-[10px] font-bold py-1 transition-colors relative whitespace-nowrap flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
            onBlur={() => setTimeout(() => setShow(false), 200)}
          >
            +{remainingCount}
          </button>
          
          {show && (
            <div className="absolute top-full left-0 mt-2 p-2 bg-white border border-gray-100 shadow-lg rounded-lg z-20 w-48 flex flex-wrap gap-2 animate-in fade-in zoom-in-95 duration-200">
              {allTags.slice(maxVisible).map((tag, i) => (
                <span key={i} className="bg-gray-50 text-gray-600 text-[10px] px-1.5 py-0.5 rounded border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const CourseCard = ({
  slug,
  title,
  instructor,
  level,
  duration,
  rating = 0,
  reviewCount = 0,
  imageUrl,
  category,
  instructorAvatar,
  studentCount,
  tags = [],
}: CourseCardProps) => {
  
  // Mock data for missing fields if not provided
  const students = studentCount || (title.length * 42 + instructor.length * 17 + 1200);
  // User requested "Tum Bi Sikho." tag on EACH course card
  const showStaffPick = true; 
  const avatarUrl = instructorAvatar || '/user-avatar.svg';

  // Format student count (e.g. 6.4k)
  const formatCount = (num: number) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num.toString();
  };

  // Generate some dummy tags if none provided, based on category
  const defaultTags = [
    'Fundamentals', 'Techniques', 'Pro Tips', 'Masterclass', 'Guide', 
    'Tutorial', 'Workshop', 'Series', 'Bootcamp', 'Certification', 'Skills',
    'Career', 'Strategy', 'Best Practices'
  ];
  
  // Deterministic shuffle/slice based on title length to vary tags per card
  const seed = title.length;
  const count = 5 + (seed % 6); // 5 to 10 tags
  const start = seed % defaultTags.length;
  const rotatedTags = [...defaultTags.slice(start), ...defaultTags.slice(0, start)].slice(0, count);

  const displayTags = tags.length > 0 ? tags : rotatedTags;

  return (
    <div className="group flex flex-col bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-all h-full relative">
      {/* Course Image */}
      <Link href={`/courses/${slug}`} className="relative aspect-video w-full bg-gray-200 block overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-0" />
        
        {/* Staff Pick Badge */}
        {showStaffPick && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide shadow-sm">
              Tum Bi Sikho.
            </span>
          </div>
        )}
      </Link>

      {/* Course Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Instructor & Rating Row */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ring-1 ring-gray-100">
               <Image 
                 src={avatarUrl} 
                 alt={instructor}
                 fill
                 className="object-cover"
               />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-gray-900 line-clamp-1 max-w-[120px]">
                {instructor}
              </span>
              {/* Verified Badge */}
              <svg className="w-3 h-3 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded-md border border-gray-100">
            <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-xs font-bold text-gray-900">{rating.toFixed(1)}</span>
            <span className="text-[10px] text-gray-500">({reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/courses/${slug}`} className="mb-3 block group/title">
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover/title:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Tags */}
        <div className="mb-4">
          <TagsPopover tags={displayTags} category={category} />
        </div>

        {/* Divider */}
        <div className="mt-auto border-t border-gray-100 pt-3 flex items-center justify-between text-xs text-gray-600 font-medium">
          <div className="flex items-center gap-4">
            {/* Level */}
            <div className="flex items-center gap-1.5" title={`Level: ${level}`}>
              <LevelIcon level={level} />
              <span className="hidden sm:inline">{level}</span>
            </div>
            
            {/* Students */}
            <div className="flex items-center gap-1.5" title={`${formatCount(students)} students`}>
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{formatCount(students)}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-1.5" title={`Duration: ${duration}`}>
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{duration.replace(' hours', 'h').replace(' hour', 'h')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
