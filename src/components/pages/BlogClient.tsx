'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import BlogCard, { BlogCardProps } from '@/components/cards/BlogCard';

export default function BlogClient({ posts, availableCategories = [] }: { posts: BlogCardProps[], availableCategories?: string[] }) {
  // Combine default categories with available ones, removing duplicates
  const categories = useMemo(() => ['All', ...availableCategories.filter(c => c !== 'All')], [availableCategories]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredPosts, setFilteredPosts] = useState<BlogCardProps[]>(posts);

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
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const applyFilters = useCallback(() => {
    let result = [...posts];

    if (!selectedCategories.includes('All')) {
      result = result.filter(post => selectedCategories.includes(post.category));
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query)
      );
    }

    // Sort by date desc (default)
    result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    setFilteredPosts(result);
  }, [posts, selectedCategories, searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Pagination Logic
  const itemsPerPage = 15;
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Latest Articles & Insights
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
             Explore our latest articles, tips, and insights to help you succeed in your online business journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
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
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <h2 className="text-2xl font-heading font-bold text-text">
                {filteredPosts.length} Articles Available
              </h2>
              
              {/* Mini Active Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
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
            </div>

            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-neutral-700">No articles match your filters. Try adjusting your criteria.</p>
              </div>
            )}

            {filteredPosts.length > 0 && totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-md border border-gray-300 text-sm font-medium ${currentPage === 1 ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-700 hover:bg-gray-50'}`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show first, last, current, and neighbors
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-2 rounded-md border ${currentPage === pageNum ? 'bg-primary text-white border-primary' : 'border-gray-300 text-neutral-700 hover:bg-gray-50'}`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return <span key={pageNum} className="px-2 text-gray-400">...</span>;
                    }
                    return null;
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md border border-gray-300 text-sm font-medium ${currentPage === totalPages ? 'text-neutral-400 cursor-not-allowed' : 'text-neutral-700 hover:bg-gray-50'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
