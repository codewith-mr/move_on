'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  author,
  category,
  publishDate,
  readTime,
  imageUrl,
}: BlogCardProps) => {
  // Staff pick badge similar to CourseCard
  const showStaffPick = true;

  return (
    <div 
      className="group flex flex-col bg-white rounded-2xl overflow-hidden h-full relative shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none z-10" />

      {/* Blog Image */}
      <Link href={`/blog/${slug}`} className="relative aspect-video w-full bg-gray-100 block overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          unoptimized={imageUrl.endsWith('.svg')}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
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

        {/* Category Badge - positioned top right */}
        <div className="absolute top-3 right-3 z-10">
             <span className="bg-white/90 backdrop-blur-sm text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              {category}
            </span>
        </div>
      </Link>

      {/* Blog Content */}
      <div className="p-5 flex flex-col flex-grow relative z-0">
        {/* Author Row */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ring-1 ring-gray-100">
               <Image 
                 src={author.avatar || '/user-avatar.svg'} 
                 alt={author.name}
                 fill
                 className="object-cover"
               />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-gray-900 line-clamp-1 max-w-[120px]">
                {author.name}
              </span>
              {/* Verified Badge */}
              <svg className="w-3 h-3 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
          </div>
          
          <div className="text-[10px] text-gray-500 font-medium">
             {publishDate}
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`} className="mb-2 block group/title">
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

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
            {excerpt}
        </p>

        {/* Divider & Footer */}
        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-600 font-medium">
          <div className="flex items-center gap-4">
            {/* Read Time */}
             <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>

          <Link href={`/blog/${slug}`} className="flex items-center text-primary hover:text-accent transition-colors font-semibold text-[10px]">
            Read More
            <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
