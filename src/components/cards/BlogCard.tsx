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
    <div className="group flex flex-col bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-all h-full relative">
      {/* Blog Image */}
      <Link href={`/blog/${slug}`} className="relative aspect-video w-full bg-gray-200 block overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          unoptimized={imageUrl.endsWith('.svg')}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-0" />
        
        {/* Staff Pick Badge */}
        {showStaffPick && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide shadow-sm">
              Tum Bi Sikho.
            </span>
          </div>
        )}

        {/* Category Badge - positioned top right */}
        <div className="absolute top-3 right-3 z-10">
             <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
              {category}
            </span>
        </div>
      </Link>

      {/* Blog Content */}
      <div className="p-4 flex flex-col flex-grow">
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
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover/title:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {excerpt}
        </p>

        {/* Divider & Footer */}
        <div className="mt-auto border-t border-gray-100 pt-3 flex items-center justify-between text-xs text-gray-600 font-medium">
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
