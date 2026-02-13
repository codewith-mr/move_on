"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = ({ logoUrl }: { logoUrl: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="bg-background shadow-1 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logoUrl} alt="TBS Logo" className="w-20" width={80} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            href="/" 
            className={`font-body font-semibold transition-colors ${isActive('/') && pathname === '/' ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 font-body font-semibold transition-colors ${isActive('/courses') || isActive('/gov-schemes') ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              Courses
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Premium Minimalist Redesign */}
            {isCoursesDropdownOpen && (
              <div className="absolute top-full left-0 w-64 pt-4 z-[60]">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/courses" 
                    className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:border-slate-200 transition-all shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 tracking-tight">The Academy</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Skill Mastery</div>
                    </div>
                  </Link>
                  <div className="h-px bg-slate-50 mx-5"></div>
                  <Link 
                    href="/gov-schemes" 
                    className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:border-slate-200 transition-all shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-600 group-hover:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 tracking-tight">Gov Portal</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pak Updates 🇵🇰</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link 
            href="/blog" 
            className={`font-body font-semibold transition-colors ${isActive('/blog') ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            Blog
          </Link>
          <Link 
            href="/tools" 
            className={`font-body font-semibold transition-colors ${isActive('/tools') ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            Apps & Tools
          </Link>
          <Link 
            href="/tips-tricks" 
            className={`font-body font-semibold transition-colors ${isActive('/tips-tricks') ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            Tips & Tricks
          </Link>
          <Link 
            href="/creativity" 
            className={`font-body font-semibold transition-colors ${isActive('/creativity') ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            Creativity
          </Link>
          <Link 
            href="/about" 
            className={`font-body font-semibold transition-colors ${isActive('/about') ? 'text-primary' : 'text-text hover:text-primary'}`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-neutral-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/') && pathname === '/' ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/courses') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              All Courses
            </Link>
            <Link 
              href="/gov-schemes" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/gov-schemes') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gov Schemes 🇵🇰
            </Link>
            <Link 
              href="/blog" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/blog') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/tools" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/tools') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Apps & Tools
            </Link>
            <Link 
              href="/tips-tricks" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/tips-tricks') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tips & Tricks
            </Link>
            <Link 
              href="/creativity" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/creativity') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Creativity
            </Link>
            <Link 
              href="/about" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/about') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
