'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard, { CourseCardProps } from '@/components/cards/CourseCard';

export default function CoursesClient({ courses, availableCategories }: { courses: CourseCardProps[], availableCategories: string[] }) {
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('Most Popular');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<CourseCardProps[]>(courses);
  const searchParams = useSearchParams();

  // Combine default categories with available ones, removing duplicates
  const categories = useMemo(() => ['All', ...availableCategories.filter(c => c !== 'All')], [availableCategories]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
    } else {
      const newCategories = selectedCategories.includes('All')
        ? [category]
        : selectedCategories.includes(category)
          ? selectedCategories.filter(c => c !== category)
          : [...selectedCategories, category];
      setSelectedCategories(newCategories.length === 0 ? ['All'] : newCategories);
    }
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams, categories]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sortCourses = useCallback((coursesToSort: CourseCardProps[], option: string) => {
    switch (option) {
      case 'Newest':
        return [...coursesToSort].sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)).reverse();
      case 'Rating':
        return [...coursesToSort].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      default:
        return [...coursesToSort].sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
    }
  }, []);

  const applyFilters = useCallback(() => {
    let result = [...courses];

    if (!selectedCategories.includes('All')) {
      result = result.filter(course => selectedCategories.includes(course.category));
    }

    if (selectedLevels.length > 0) {
      result = result.filter(course => selectedLevels.includes(course.level));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
      );
    }

    result = sortCourses(result, sortOption);

    setFilteredCourses(result);
    setCurrentPage(1);
  }, [courses, selectedCategories, selectedLevels, sortOption, sortCourses, searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Pagination Logic
  const standardPageSize = 10;
  const totalPages = Math.ceil(filteredCourses.length / standardPageSize);
  
  const startIndex = (currentPage - 1) * standardPageSize;
  const endIndex = startIndex + standardPageSize;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Show pagination if we have more than 1 page
  const showPagination = totalPages > 1;

  return (
    <>
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Courses That Create Real Results
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Practical, action-oriented courses designed to help you earn more income through freelancing, content creation, and investing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-1 p-6 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-text mb-4">Filters</h2>

              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold text-text mb-2">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-neutral-700 cursor-pointer hover:text-primary transition-colors">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold text-text mb-2">Level</h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`level-${level}`}
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleLevelChange(level)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor={`level-${level}`} className="ml-2 text-sm text-neutral-700 cursor-pointer hover:text-primary transition-colors">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <h2 className="text-2xl font-heading font-bold text-text">
                {filteredCourses.length} Courses Available
              </h2>
              <div className="flex items-center gap-4">
                {/* Mini Active Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="pl-9 pr-4 py-2 w-48 md:w-64 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    suppressHydrationWarning={true}
                  />
                  <svg 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <div className="flex items-center bg-white shadow-sm rounded-lg px-4 py-2">
                  <label htmlFor="sort" className="mr-3 text-sm font-medium text-neutral-700 cursor-pointer hover:text-primary transition-colors">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="border-none text-sm font-medium text-primary hover:text-accent focus:ring-0 focus:outline-none bg-transparent cursor-pointer transition-colors"
                    suppressHydrationWarning={true}
                  >
                    <option className="text-neutral-800 hover:text-accent hover:bg-gray-50">Most Popular</option>
                    <option className="text-neutral-800 hover:text-accent hover:bg-gray-50">Newest</option>
                    <option className="text-neutral-800 hover:text-accent hover:bg-gray-50">Rating</option>
                  </select>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {currentCourses.length > 0 ? (
                <motion.div 
                  key={currentPage + selectedCategories.join(',') + selectedLevels.join(',') + sortOption + searchQuery}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                  {currentCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300"
                >
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No courses found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategories(['All']);
                      setSelectedLevels([]);
                    }}
                    className="mt-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {filteredCourses.length > 0 && (
              <div className="mt-12 flex flex-col items-center gap-8">
                {showPagination && (
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-md border border-gray-300 text-sm font-medium ${currentPage === 1 ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-700 hover:bg-gray-50'}`}
                    >
                      Previous
                    </button>

                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-2 rounded-md ${currentPage === pageNum ? 'bg-primary text-white' : 'border border-gray-300 text-neutral-700 hover:bg-gray-50'} text-sm font-medium`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="px-3 py-2 text-sm text-neutral-700">...</span>
                  )}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-neutral-700 hover:bg-gray-50"
                    >
                      {totalPages}
                    </button>
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md border border-gray-300 text-sm font-medium ${currentPage === totalPages ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-700 hover:bg-gray-50'}`}
                  >
                    Next
                  </button>
                </nav>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
