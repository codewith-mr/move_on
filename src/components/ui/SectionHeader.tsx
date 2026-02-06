import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {/* Unique Badge/Pill Design for Subtitle */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="text-primary font-bold tracking-widest uppercase text-xs">
          {subtitle}
        </span>
      </div>
      
      {/* Title with improved typography */}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
        {title}
      </h2>
      
      {/* Description with decent readability */}
      {description && (
        <p className={`text-neutral-500 text-lg md:text-xl leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
