'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = 'bg-gradient-primary',
}: HeroProps) => {
  return (
    <section className={`${backgroundClass} py-20 md:py-24 px-4 overflow-hidden relative`}>
      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
       
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 max-w-5xl leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-secondary font-body text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <Image src="/tagline.png" alt="TBS Tagline" className="w-48 mb-6" width={192} height={48} /> */}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href={ctaLink}
            className="group relative px-6 py-3 bg-white text-primary rounded-full overflow-hidden shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:bg-neutral-50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 font-body font-bold text-base flex items-center gap-2">
              {ctaText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="group px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-body font-bold text-base flex items-center gap-2 backdrop-blur-sm"
            >
              <span>{secondaryCtaText}</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                 <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 transform group-hover:rotate-45 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          )}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-secondary/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/40 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[100px]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;