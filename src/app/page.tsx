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
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  Palette, 
  ChevronRight, 
  FileText, 
  Download, 
  Layers, 
  Search, 
  TrendingUp, 
  Briefcase, 
  Globe,
  DollarSign,
  Rocket,
  BarChart,
  ShieldCheck,
  Star
} from 'lucide-react';

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
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Income Architecture</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-neutral-900 mb-8">
              Earn & <span className="text-amber-600 italic">Careers.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
              The definitive blueprint for financial independence. Transition from random gigs to high-leverage digital income streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {[
              { t: 'High-Ticket Sales', d: 'Mastering the art of vetted closer talent.', i: <DollarSign className="w-6 h-6" />, c: 'text-amber-600', bg: 'bg-amber-50', b: 'hover:border-amber-200' },
              { t: 'Freelance Ops', d: 'High-velocity client acquisition systems.', i: <Globe className="w-6 h-6" />, c: 'text-blue-600', bg: 'bg-blue-50', b: 'hover:border-blue-200' },
              { t: 'Content Assets', d: 'Building digital leverage through media.', i: <Rocket className="w-6 h-6" />, c: 'text-rose-600', bg: 'bg-rose-50', b: 'hover:border-rose-200' },
              { t: 'Remote Mastery', d: 'Accessing global roles with precision.', i: <Briefcase className="w-6 h-6" />, c: 'text-emerald-600', bg: 'bg-emerald-50', b: 'hover:border-emerald-200' }
            ].map((track) => (
              <div key={track.t} className={`p-8 rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm transition-all duration-500 group/track ${track.b} hover:shadow-xl hover:-translate-y-1`}>
                <div className={`w-14 h-14 rounded-2xl ${track.bg} flex items-center justify-center mb-8 ${track.c} transition-all duration-500 group-hover/track:scale-110 group-hover/track:rotate-3`}>
                  {track.i}
                </div>
                <h4 className="text-xl font-black uppercase text-neutral-900 mb-3 tracking-tight">{track.t}</h4>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">{track.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/earn-careers" className="inline-flex items-center px-12 py-6 bg-slate-900 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:scale-105 transition-all shadow-2xl shadow-slate-900/20 group">
              Access Earning Paths <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Self Development */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">Internal Operating System</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-neutral-900 mb-8">
              Self <span className="text-violet-600 italic">Development.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Upgrade your human software. Protocols for mindset, productivity, and authority that power high-performance careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {[
              { i: <Brain className="w-6 h-6" />, t: 'Mindset Mastery', l: 'PSYCHOLOGY', c: 'text-violet-600', bg: 'bg-violet-50', b: 'hover:border-violet-200' },
              { i: <BarChart className="w-6 h-6" />, t: 'Systemic Output', l: 'SYSTEMS', c: 'text-blue-600', bg: 'bg-blue-50', b: 'hover:border-blue-200' },
              { i: <ShieldCheck className="w-6 h-6" />, t: 'Social Authority', l: 'AUTHORITY', c: 'text-emerald-600', bg: 'bg-emerald-50', b: 'hover:border-emerald-200' },
              { i: <Star className="w-6 h-6" />, t: 'Daily Discipline', l: 'ROUTINE', c: 'text-rose-600', bg: 'bg-rose-50', b: 'hover:border-rose-200' }
            ].map((item) => (
              <div key={item.t} className={`p-8 rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm transition-all duration-500 group/sd ${item.b} hover:shadow-xl hover:-translate-y-1`}>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 ${item.c} transition-all duration-500 group-hover/sd:scale-110 group-hover/sd:rotate-3`}>
                  {item.i}
                </div>
                <div className={`text-[10px] font-black ${item.c} tracking-widest uppercase mb-2`}>{item.l}</div>
                <h4 className="text-xl font-black uppercase text-neutral-900 mb-3 tracking-tight">{item.t}</h4>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">High-performance protocols designed for modern builders.</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/self-development" className="inline-flex items-center px-12 py-6 bg-slate-900 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:scale-105 transition-all shadow-2xl shadow-slate-900/20 group">
              Explore Growth Paths <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Resources Hub */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-rose-50 rounded-[4rem] p-8 sm:p-16 border border-rose-100 relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-[10px] font-black text-rose-600 uppercase tracking-[0.4em] mb-4 block">The Builder's Library</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-neutral-900">
                  Resources <span className="text-rose-600 italic">Hub.</span>
                </h2>
                <p className="text-lg text-neutral-600 font-medium leading-relaxed mb-10">
                  Stop building from scratch. Access a curated collection of professional-grade templates, checklists, and digital assets designed to accelerate your projects.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { t: 'PS_VAULT', d: 'Raster Assets' },
                    { t: 'TF_ARCHIVE', d: 'Typography' },
                    { t: 'VC_BLUEPRINTS', d: 'Vectors' },
                    { t: 'MP_PROTOCOLS', d: 'Mockups' }
                  ].map((tag) => (
                    <div key={tag.t} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                      <div>
                        <div className="text-[10px] font-black text-rose-600 tracking-wider leading-none">{tag.t}</div>
                        <div className="text-xs text-neutral-400 font-bold uppercase mt-1">{tag.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/resources" className="inline-flex items-center px-10 py-5 bg-rose-600 text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 group">
                  Access All Assets <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 transform -rotate-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-black text-xs">PS</div>
                    <div className="h-2 w-12 bg-neutral-100 rounded-full mb-2"></div>
                    <div className="h-2 w-8 bg-neutral-50 rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-md border border-rose-100 transform rotate-1">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-black text-xs">TF</div>
                    <div className="h-2 w-16 bg-neutral-100 rounded-full mb-2"></div>
                    <div className="h-2 w-10 bg-neutral-50 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-rose-100 transform rotate-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="h-2 w-20 bg-neutral-100 rounded-full mb-2"></div>
                    <div className="h-2 w-12 bg-neutral-50 rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 transform -rotate-1">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="h-2 w-14 bg-neutral-100 rounded-full mb-2"></div>
                    <div className="h-2 w-10 bg-neutral-50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs: Opportunities */}
      <section className="py-24 bg-neutral-900 text-white mx-6 rounded-[4rem] relative overflow-hidden group/section">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-emerald-500"></div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">Vetted Paths</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                Strategic <br />
                <span className="text-emerald-400 italic">Opportunities.</span>
              </h2>
            </div>
            <div className="lg:max-w-xs">
              <p className="text-lg text-neutral-400 font-medium leading-relaxed">
                Discover legitimate side-hustles, vetted projects, and income-generating paths updated weekly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'High-Ticket Sales', d: 'Connect with brands needing vetted closer talent.', i: <Briefcase className="w-6 h-6" />, tag: 'INCOME' },
              { t: 'Digital Agency', d: 'Blueprint for scaling service-based businesses.', i: <Globe className="w-6 h-6" />, tag: 'SCALING' },
              { t: 'Market Arbitrage', d: 'Finding market gaps for quick profit turnarounds.', i: <TrendingUp className="w-6 h-6" />, tag: 'ARBITRAGE' }
            ].map((opp, i) => (
              <div key={opp.t} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-500 group/card relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover/card:opacity-40 transition-opacity">
                  <div className="text-[40px] font-black text-white/10">{i + 1}</div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 group-hover/card:scale-110 group-hover/card:bg-emerald-500/20 transition-all duration-500">
                  {opp.i}
                </div>
                <div className="text-[10px] font-black text-emerald-500/60 tracking-widest uppercase mb-3">{opp.tag}</div>
                <h4 className="text-xl font-black uppercase tracking-tight text-white mb-4">{opp.t}</h4>
                <p className="text-neutral-400 text-sm font-medium leading-relaxed">{opp.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center">
            <Link href="/opportunities" className="inline-flex items-center px-12 py-6 bg-emerald-500 text-neutral-900 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl shadow-emerald-500/40 group">
              Access Full Dashboard <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-8 flex items-center gap-6 opacity-40">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(n => (
                  <div key={n} className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-[10px] font-bold">U{n}</div>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Joined by 2.4k+ students</span>
            </div>
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
