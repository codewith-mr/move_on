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
            suppressHydrationWarning={true}
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
  price,
  discountPrice,
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
    <div 
      className="group flex flex-col bg-white rounded-2xl overflow-hidden h-full relative shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none z-10" />

      {/* Course Image */}
      <Link href={`/courses/${slug}`} className="relative h-44 w-full bg-gray-100 block overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-0" />
        
        {/* Staff Pick Badge */}
        {showStaffPick && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Tum Bi Sikho.
            </span>
          </div>
        )}
      </Link>

      {/* Course Content */}
      <div className="p-5 flex flex-col flex-grow relative z-0">
        {/* Instructor & Rating Row */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ring-1 ring-gray-100">
               <Image 
                 src={avatarUrl} 
                 alt={instructor}
                 fill
                 className="object-cover"
               />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-bold text-gray-900 line-clamp-1 max-w-[100px]">
                {instructor}
              </span>
              {/* Verified Badge */}
              <svg className="w-2.5 h-2.5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-100/50">
            <svg className="w-2.5 h-2.5 text-amber-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-[9px] font-bold text-amber-700">{rating.toFixed(1)}</span>
            <span className="text-[9px] text-amber-600/70">({formatCount(reviewCount)})</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/courses/${slug}`} className="mb-1 block group/title">
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover/title:text-primary transition-colors flex items-start">
            {title}
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
          </h3>
        </Link>
        
        {/* Meta Info Row (Level, Duration, Students) */}
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium mb-2 whitespace-nowrap overflow-hidden">
           <div className="flex items-center gap-1 flex-shrink-0" title={`Level: ${level}`}>
              <LevelIcon level={level} />
              <span>{level}</span>
           </div>
           
           <div className="w-0.5 h-0.5 rounded-full bg-gray-300 flex-shrink-0" />
           
           <div className="flex items-center gap-1 flex-shrink-0">
             <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             <span>{duration}</span>
           </div>
           
           <div className="w-0.5 h-0.5 rounded-full bg-gray-300 flex-shrink-0" />
           
           <div className="flex items-center gap-1 flex-shrink-0">
             <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
             </svg>
             <span>{formatCount(students)}</span>
           </div>
        </div>

        {/* Tags Popover */}
        <div className="mb-2">
          <TagsPopover tags={displayTags} category={category} />
        </div>

        {/* Divider & Footer (Price & Button) */}
        <div className="mt-auto border-t border-gray-100 pt-2 flex items-center justify-between">
          <div className="flex flex-col">
            {discountPrice ? (
               <div className="flex items-baseline gap-1.5">
                 <span className="text-base font-bold text-gray-900">${discountPrice}</span>
                 <span className="text-[10px] text-gray-400 line-through">${price}</span>
               </div>
            ) : (
               <span className="text-base font-bold text-gray-900">{price === 0 ? 'Free' : `$${price}`}</span>
            )}
          </div>

          <Link href={`/courses/${slug}`} className="px-3 py-1.5 bg-neutral-900 hover:bg-primary text-white text-[10px] font-bold rounded-md transition-all shadow-sm hover:shadow-md hover:scale-105">
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
