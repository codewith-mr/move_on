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
    <header className="bg-background shadow-1 sticky top-0 z-50 print:hidden">
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
              className={`flex items-center gap-1 font-body font-semibold transition-colors ${isActive('/courses') || isActive('/gov-schemes') || isActive('/global-scholar') ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              Courses
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Premium Minimalist Redesign */}
            {isCoursesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] max-w-[90vw] pt-4 z-[60]">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex">
                    <div className="w-64 flex flex-col divide-y divide-slate-100">
                      <Link 
                        href="/courses" 
                        className="flex items-center gap-3 px-5 py-4 transition-all duration-150 group hover:bg-slate-50 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-slate-200 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M5 6h5v5H5zM14 6h5v5h-5zM5 13h5v5H5zM14 13h5v5h-5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-primary">All Courses</div>
                          <div className="text-[12px] text-slate-500 group-hover:text-slate-600">Browse full structured learning tracks.</div>
                        </div>
                      </Link>
                      <Link 
                        href="/gov-schemes" 
                        className="flex items-center gap-3 px-5 py-4 transition-all duration-150 group hover:bg-slate-50 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-emerald-200 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-emerald-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M12 4l7 3v5c0 4.418-3.134 6.84-7 8-3.866-1.16-7-3.582-7-8V7z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-emerald-700">Gov Portal</div>
                          <div className="text-[12px] text-slate-500 group-hover:text-slate-600">Pakistani schemes, subsidies, and updates.</div>
                        </div>
                      </Link>
                      <Link 
                        href="/global-scholar" 
                        className="flex items-center gap-3 px-5 py-4 transition-all duration-150 group hover:bg-slate-50 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-sky-200 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-sky-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="7"
                              strokeWidth={1.6}
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.4}
                              d="M5 12h14M12 5a9 9 0 010 14M12 5a9 9 0 000 14"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-sky-700">Global Scholar</div>
                          <div className="text-[12px] text-slate-500 group-hover:text-slate-600">Scholarships, visas, and studying abroad.</div>
                        </div>
                      </Link>
                    </div>
                    <div className="w-px bg-slate-100" />
                    <div className="flex-1 grid grid-cols-2 gap-3 p-4">
                      <Link 
                        href="/earn-careers" 
                        className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group border border-transparent hover:border-emerald-200 hover:bg-emerald-50/40 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-emerald-300 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-emerald-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M9 7V6a2 2 0 012-2h2a2 2 0 012 2v1"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M7 7h10v10H7z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M9 12h6"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-emerald-700">Earn & Careers</div>
                          <div className="text-[12px] text-slate-500 leading-snug group-hover:text-slate-600">
                            Freelancing, online earning, remote jobs, internships, and side hustles for students.
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/self-development" 
                        className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group border border-transparent hover:border-indigo-200 hover:bg-indigo-50/40 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-indigo-300 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-indigo-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M12 5a3 3 0 110 6 3 3 0 010-6z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M5 19a7 7 0 0114 0"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-indigo-700">Self Development</div>
                          <div className="text-[12px] text-slate-500 leading-snug group-hover:text-slate-600">
                            Productivity, study systems, health, confidence, and habits for independent students.
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/resources" 
                        className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group border border-transparent hover:border-amber-200 hover:bg-amber-50/40 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-amber-300 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-amber-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M7 4h9l3 3v13H7z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M7 10h10M7 14h8"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-amber-700">Resources Hub</div>
                          <div className="text-[12px] text-slate-500 leading-snug group-hover:text-slate-600">
                            PDFs, templates, roadmaps, and forms that support study and career moves.
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/opportunities" 
                        className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group border border-transparent hover:border-sky-200 hover:bg-sky-50/40 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center transition-all shadow-sm group-hover:bg-white group-hover:border-sky-300 group-hover:shadow-md group-hover:scale-105">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-700 transition-colors group-hover:text-sky-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="7"
                              strokeWidth={1.6}
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.6}
                              d="M10 14l4-4M11 9h3v3"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 tracking-tight group-hover:text-sky-700">Opportunities</div>
                          <div className="text-[12px] text-slate-500 leading-snug group-hover:text-slate-600">
                            Scholarships, internships, government jobs, competitions, and exchange programs.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
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
              href="/earn-careers" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/earn-careers') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Earn & Careers
            </Link>
            <Link 
              href="/self-development" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/self-development') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Self Development
            </Link>
            <Link 
              href="/resources" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/resources') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources Hub
            </Link>
            <Link 
              href="/opportunities" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/opportunities') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
            <Link 
              href="/gov-schemes" 
              className={`font-body font-semibold py-2 transition-colors ${isActive('/gov-schemes') ? 'text-primary' : 'text-text hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gov Portal
            </Link>
            <Link 
               href="/global-scholar" 
               className={`font-body font-semibold py-2 transition-colors ${isActive('/global-scholar') ? 'text-primary' : 'text-text hover:text-primary'}`}
               onClick={() => setIsMenuOpen(false)}
             >
               Global Scholar
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
