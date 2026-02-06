'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface ToolCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
  isFree?: boolean;
  toolUrl?: string;
}

const ToolCard = ({
  slug,
  title,
  description,
  category,
  imageUrl,
  isPopular = false,
  isNew = false,
  isFree = true,
  toolUrl,
}: ToolCardProps) => {
  const linkHref = toolUrl || `/tools/${slug}`;

  return (
    <Link href={linkHref} className="block h-full">
      <div 
        className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
      >
        {/* Hover Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none z-10" />
        
        <div className="p-6 flex flex-col h-full relative z-0">
          {/* Header with Icon and Badges */}
          <div className="flex justify-between items-start mb-5">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover p-3 opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </div>
            
            <div className="flex flex-col items-end gap-1.5">
              {isNew && (
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                  New
                </span>
              )}
              {isPopular && (
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-50 text-amber-600 border border-amber-100 shadow-sm">
                  Hot
                </span>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-4 flex-1">
            <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors flex items-center">
              {title}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </h3>
            <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-primary transition-colors" />
              <span className="text-xs font-medium text-neutral-500">
                {category}
              </span>
            </div>
            
            {isFree && (
              <span className="text-[10px] font-bold text-green-700 bg-green-50/50 px-2.5 py-1 rounded-full border border-green-100/50">
                Free
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
