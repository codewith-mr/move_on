'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface TipCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string | null;
  imageUrl: string;
  createdAt: Date;
}

const TipCard = ({
  slug,
  title,
  description,
  category,
  readTime,
  imageUrl,
  createdAt,
}: TipCardProps) => {
  // Format date
  const publishDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div 
      className="group flex flex-col bg-white rounded-2xl overflow-hidden h-full relative shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none z-10" />

      {/* Tip Image */}
      <Link href={`/tips-tricks/${slug}`} className="relative aspect-video w-full bg-gray-100 block overflow-hidden">
        <Image
          src={imageUrl || '/placeholder-tip.jpg'} // Fallback image if needed
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        
        {/* Category Badge - positioned top left */}
        <div className="absolute top-3 left-3 z-10">
             <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
              {category}
            </span>
        </div>
      </Link>

      {/* Tip Content */}
      <div className="p-6 flex flex-col flex-grow relative z-0">
        
        {/* Meta Row */}
        <div className="flex justify-between items-center mb-3 text-xs text-neutral-500 font-medium">
             <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {publishDate}
             </div>
             {readTime && (
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime}
                </div>
             )}
        </div>

        {/* Title */}
        <Link href={`/tips-tricks/${slug}`} className="mb-2 block group/title">
          <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover/title:text-primary transition-colors flex items-start">
            {title}
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
          </h3>
        </Link>
        
        {/* Description */}
        <p className="text-sm text-neutral-600 line-clamp-3 mb-4 flex-grow leading-relaxed">
            {description}
        </p>

        {/* Read More Button */}
        <div className="mt-auto pt-4 border-t border-gray-100">
            <Link href={`/tips-tricks/${slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors group/link">
                Read Tip
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
