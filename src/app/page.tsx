import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/ui/Hero';
import CourseCard from '@/components/cards/CourseCard';
import BlogCard from '@/components/cards/BlogCard';
import TipCard from '@/components/cards/TipCard';
import ToolCard from '@/components/cards/ToolCard';
import StaggeredList from '@/components/ui/StaggeredList';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const settings = await prisma.homeSettings.findFirst({ where: { id: 1 } });
  
  const [featuredCoursesLinks, latestBlogsLinks, latestTipsLinks] = await Promise.all([
    prisma.homeSettingsFeaturedCourse.findMany({ where: { homeSettingsId: settings?.id || 1 } }),
    prisma.homeSettingsLatestBlog.findMany({ where: { homeSettingsId: settings?.id || 1 } }),
    prisma.homeSettingsLatestTip.findMany({ where: { homeSettingsId: settings?.id || 1 } })
  ]);

  const [featuredCourses, latestBlogPosts, latestTips] = await Promise.all([
    prisma.course.findMany({ where: { id: { in: featuredCoursesLinks.map(l => l.courseId) } } }),
    prisma.blog.findMany({ where: { id: { in: latestBlogsLinks.map(l => l.blogId) } } }),
    prisma.tip.findMany({ where: { id: { in: latestTipsLinks.map(l => l.tipId) } } })
  ]);

  const bannerTitle = settings?.bannerTitle || 'Learn Practical Skills That Convert Directly Into Income';
  const bannerSubtitle = settings?.bannerSubtitle || 'Actionable courses, tools, and resources for freelancers, content creators, and side-hustlers';
  const bannerCtaText = settings?.bannerCtaText || 'Explore Courses';
  const bannerCtaLink = settings?.bannerCtaLink || '/courses';
  const bannerSecondaryCtaText = settings?.bannerSecondaryCtaText || 'Try Free Tools';
  const bannerSecondaryCtaLink = settings?.bannerSecondaryCtaLink || '/tools';
  const featuredTools = [
    {
      id: '1',
      slug: 'seo-analyzer',
      title: 'SEO Analyzer',
      description: "Analyze your website's SEO performance and get actionable recommendations to improve your search engine rankings.",
      category: 'SEO',
      imageUrl: '/tool-image.svg',
      isPopular: true,
    },
    {
      id: '2',
      slug: 'income-calculator',
      title: 'Freelance Income Calculator',
      description: 'Calculate your potential freelance income based on your rates, hours, and expenses. Plan your financial future with confidence.',
      category: 'Calculators',
      imageUrl: '/tool-image.svg',
      isNew: true,
    },
  ];
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Mini Categories Section */}
      <section className="py-8 border-b border-neutral-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-xl font-heading font-bold text-neutral-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Popular Categories
            </h2>
            <Link
              href="/courses"
              className="text-sm text-neutral-500 hover:text-primary transition-colors font-medium flex items-center group"
            >
              Browse All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Category chips */}
          <StaggeredList className="flex flex-wrap gap-2.5" itemClassName="">
            {[
              'Freelancing',
              'Content Creation',
              'Trading',
              'Marketing',
              'Investing',
              'AI & Machine Learning',
              'Data Science',
              'Cloud Computing',
            ].map((cat) => (
              <Link
                key={cat}
                href={`/courses?category=${encodeURIComponent(cat)}`}
                className="inline-flex items-center px-4 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-600 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                {cat}
              </Link>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Start Learning"
            title="Featured Courses"
            description="Explore our highest-rated courses designed to help you succeed."
          />
          
          <div className="flex justify-end mb-6">
             <Link
              href="/courses"
              className="text-primary hover:text-accent transition-colors font-semibold flex items-center group"
            >
              View All Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={String(course.id)}
                id={String(course.id)}
                slug={course.slug}
                title={course.title}
                description={course.description}
                instructor={course.instructor || 'Admin'}
                level={course.level}
                duration={course.duration}
                price={course.price}
                discountPrice={0}
                rating={course.rating || 0}
                reviewCount={course.reviewCount || 0}
                imageUrl={course.imageUrl}
                category={course.category}
                isStaffPick={true}
                tags={course.tags ? course.tags.split(',').map(t => t.trim()) : []}
              />
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Strategic Hubs: Gov Portal */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Official Access"
            title="Gov Portal"
            description="Navigate government schemes, subsidies, and official documentation with precision and ease."
          />
          <div className="mt-12 bg-blue-50 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 border border-blue-100">
            <div className="md:w-1/2">
              <div className="text-4xl mb-6">🏛️</div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">Empowering Citizens through Digital Access</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Stay updated with the latest government initiatives designed to support small businesses, 
                freelancers, and students. We simplify complex bureaucratic processes into actionable steps.
              </p>
              <Link href="/gov-schemes" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all">
                Enter Gov Portal <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="md:w-1/3 aspect-square bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-8xl grayscale opacity-20">🏛️</div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Global Scholar */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            subtitle="International Paths"
            title="Global Scholar"
            description="Access international education paths, scholarships, and global career guidance for the modern student."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 text-left group hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4">International Education</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed">Comprehensive guides on studying abroad, university selections, and application protocols.</p>
              <Link href="/global-scholar" className="text-emerald-600 font-black text-xs uppercase tracking-widest hover:underline">Explore Guides →</Link>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 text-left group hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🌎</div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4">Scholarship Network</h3>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed">Vetted scholarship opportunities from top institutions and global organizations.</p>
              <Link href="/global-scholar" className="text-emerald-600 font-black text-xs uppercase tracking-widest hover:underline">View Scholarships →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Earn & Careers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Income Growth"
            title="Earn & Careers"
            description="Master the skills that directly translate to income opportunities in the digital economy."
          />
          <div className="mt-12 bg-amber-50 rounded-[3rem] p-12 overflow-hidden relative border border-amber-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="max-w-2xl relative z-10">
              <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-6 uppercase tracking-tighter">Your Path to <span className="text-amber-600 italic">Financial Freedom.</span></h3>
              <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
                From freelancing mastery to corporate career acceleration—we provide the blueprint for 
                modern professionals to scale their earnings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/earn-careers" className="px-8 py-4 bg-amber-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20">
                  Career Blueprint
                </Link>
                <Link href="/earn-careers" className="px-8 py-4 bg-white text-amber-600 border border-amber-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-50 transition-all">
                  Earning Paths
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Self Development */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            subtitle="Personal Mastery"
            title="Self Development"
            description="Upgrade your mindset and soft skills to navigate the complexities of the modern world."
          />
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { i: '🧠', t: 'Mindset', d: 'Master the psychology of success and resilience.' },
                { i: '🗣️', t: 'Communication', d: 'High-impact speaking and persuasive writing.' },
                { i: '⚡', t: 'Productivity', d: 'Systems to maximize output and focus.' },
                { i: '🎨', t: 'Creativity', d: 'Unlocking original ideas and digital art.' }
              ].map((item) => (
                <div key={item.t} className="bg-white p-8 rounded-[2rem] border border-neutral-100 flex flex-col items-center group hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.i}</div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-neutral-900 mb-3">{item.t}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Link href="/self-development" className="inline-flex items-center px-10 py-5 bg-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20">
                Explore Growth Paths <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Resources Hub */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="The Builder's Library"
            title="Resources Hub"
            description="A curated collection of free templates, checklists, and assets to accelerate your projects."
          />
          <div className="mt-12 bg-rose-50 rounded-[3rem] p-12 flex flex-col md:flex-row gap-12 border border-rose-100">
            <div className="md:w-1/3 aspect-video bg-white rounded-2xl shadow-inner border border-rose-100 flex items-center justify-center">
              <div className="text-6xl grayscale opacity-10">📂</div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4 uppercase tracking-tight">Stop Building From Scratch.</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Download our professional-grade templates for business proposals, content calendars, 
                and financial tracking—vetted by our community of experts.
              </p>
              <Link href="/resources" className="inline-flex items-center text-rose-600 font-black text-xs uppercase tracking-widest group">
                Access All Assets <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Opportunities */}
      <section className="py-24 bg-neutral-900 text-white mx-6 rounded-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-4 block">Vetted Paths</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-8 text-white">
              Strategic <span className="text-emerald-400 italic">Opportunities.</span>
            </h2>
            <p className="text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Discover legitimate side-hustles, vetted projects, and income-generating paths updated weekly.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { t: 'High-Ticket Sales', d: 'Connect with brands needing vetted closer talent.', i: '💰' },
              { t: 'Digital Agency', d: 'Blueprint for scaling service-based businesses.', i: '🏢' },
              { t: 'Arbitrage Master', d: 'Finding market gaps for quick profit turnarounds.', i: '⚖️' }
            ].map((opp) => (
              <div key={opp.t} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="text-3xl mb-6">{opp.i}</div>
                <h4 className="text-lg font-black uppercase tracking-tight text-emerald-400 mb-3">{opp.t}</h4>
                <p className="text-white text-sm font-medium leading-relaxed">{opp.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/opportunities" className="inline-block px-12 py-6 bg-emerald-500 text-neutral-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
              Access Full Dashboard <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Promise"
            title="Why Choose TBS?"
            description="We focus on practical skills that directly translate to income opportunities, with a proven track record of helping students succeed."
          />

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">Action-Oriented Learning</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our courses focus on practical skills and actionable steps, not just theory. Learn by doing.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">Expert Instructors</h3>
              <p className="text-neutral-600 leading-relaxed">
                Learn from industry professionals who have achieved success in their respective fields.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">Income-Focused</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our courses are designed to help you earn more money through freelancing, content creation, or trading.
              </p>
            </div>
          </StaggeredList>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Read Our Blog"
            title="Latest Insights"
            description="Stay updated with the latest trends and strategies."
          />

           <div className="flex justify-end mb-6">
            <Link
              href="/blog"
              className="text-primary hover:text-accent transition-colors font-semibold flex items-center group"
            >
              View All Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogPosts.map((post) => (
              <BlogCard key={String(post.id)}
                id={String(post.id)}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                author={{ name: post.authorName, avatar: post.authorAvatar || '/user-avatar.svg' }}
                category={post.category}
                publishDate={post.publishDate}
                readTime={post.readTime || '5 min read'}
                imageUrl={post.imageUrl}
              />
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Latest Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Quick Tips"
            title="Tips & Tricks"
            description="Bite-sized knowledge to boost your productivity."
          />

          <div className="flex justify-end mb-6">
            <Link
              href="/tips-tricks"
              className="text-primary hover:text-accent transition-colors font-semibold flex items-center group"
            >
              View All Tips
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestTips.map((tip) => (
              <TipCard key={String(tip.id)}
                id={tip.id}
                slug={tip.slug}
                title={tip.title}
                description={tip.description}
                category={tip.category}
                readTime={tip.readTime}
                imageUrl={tip.imageUrl}
                createdAt={tip.createdAt}
              />
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
           <SectionHeader
             subtitle="Useful Tools"
             title="Featured Apps & Tools"
             description="Powerful tools to automate your workflow and calculate your success."
           />

          <div className="flex justify-end mb-6">
            <Link
              href="/tools"
              className="text-primary hover:text-accent transition-colors font-semibold flex items-center group"
            >
              View All Apps & Tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <StaggeredList className="container mx-auto px-4 text-center" itemClassName="">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-secondary text-xl max-w-2xl mx-auto mb-8">
            Join thousands of students who are already learning practical skills and earning more income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="px-8 py-3 bg-secondary text-primary rounded-md hover:bg-white transition-colors font-body font-bold text-lg"
            >
              Browse Courses
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-transparent border-2 border-secondary text-white rounded-md hover:bg-accent transition-colors font-body font-bold text-lg"
            >
              Sign Up Free
            </Link>
          </div>
        </StaggeredList>
      </section>
    </MainLayout>
  );
}
