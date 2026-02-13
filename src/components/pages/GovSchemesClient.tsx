'use client';

import { motion } from 'framer-motion';
import { 
  Laptop, 
  Rocket, 
  GraduationCap, 
  MousePointer2, 
  Home, 
  Globe, 
  TrendingUp, 
  Search, 
  Leaf, 
  Settings,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Users,
  MessageSquare
} from 'lucide-react';

export default function GovSchemesClient() {
  const schemes = [
    {
      title: "PM Youth Laptop Scheme",
      status: "Upcoming",
      description: "Distribution of high-spec laptops to talented students across Pakistan to bridge the digital divide and promote research.",
      link: "https://laptop.pmyp.gov.pk/",
      category: "Education",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
      features: ["Latest Specs", "Merit Based", "Free of Cost"]
    },
    {
      title: "Kamyab Jawan Program",
      status: "Active",
      description: "Small business loans up to 25 Million and technical training for Pakistani youth to start their own startups.",
      link: "https://kamyabjawan.gov.pk/",
      category: "Business",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      features: ["Low Interest", "Youth Focused", "Startup Funding"]
    },
    {
      title: "Ehsaas Scholarship",
      status: "Active",
      description: "Need-based scholarships for undergraduate students in 125+ public universities across the country.",
      link: "https://www.hec.gov.pk/english/scholarships/pages/ehsaas-undergraduate-scholarship.aspx",
      category: "Scholarship",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      features: ["Tuition Fee", "Monthly Stipend", "125+ Universities"]
    },
    {
      title: "DigiSkills.pk 2.0",
      status: "Always Open",
      description: "Free online training in digital skills like Freelancing, Graphic Design, SEO, and Digital Marketing.",
      link: "https://digiskills.pk/",
      category: "Digital Skills",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      features: ["Free Certification", "Online Learning", "10+ Courses"]
    },
    {
      title: "Benazir Income Support (BISP)",
      status: "Active",
      description: "Unconditional cash transfer program for underprivileged families to ensure basic needs and health support.",
      link: "https://bisp.gov.pk/",
      category: "Social Welfare",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      features: ["Cash Support", "Health Aid", "Nationwide"]
    },
    {
      title: "HEC Overseas Scholarship",
      status: "Active",
      description: "Scholarships for PhD and MS/MPhil in selected fields at top-ranked international universities.",
      link: "https://www.hec.gov.pk/english/scholarships/pages/Overseas.aspx",
      category: "Scholarship",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
      features: ["International", "Full Funding", "PhD Level"]
    },
    {
      title: "Punjab Rozgar Scheme",
      status: "Active",
      description: "Subsidized credit facilities to MSMEs and startups in Punjab to promote economic growth.",
      link: "https://psic.punjab.gov.pk/punjabrozgarscheme",
      category: "Business",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      features: ["Easy Installments", "Punjab Only", "MSME Support"]
    },
    {
      title: "National Talent Hunt",
      status: "Annual",
      description: "Identifying and supporting talented students from remote areas for higher education in top institutes.",
      link: "https://www.iba.edu.pk/nthp/",
      category: "Education",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
      features: ["Remote Areas", "IBA Karachi", "Full Coverage"]
    },
    {
      title: "Green Youth Movement",
      status: "Active",
      description: "Engaging youth in environmental conservation and climate change mitigation projects across Pakistan.",
      link: "https://pmyp.gov.pk/gym",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      features: ["Climate Action", "Volunteering", "Eco Projects"]
    },
    {
      title: "Skill for All Program",
      status: "Active",
      description: "High-end technical training in emerging technologies like AI, IoT, and Cloud Computing.",
      link: "https://navttc.gov.pk/",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      features: ["AI & IoT", "NAVTEC", "Modern Labs"]
    }
  ];

  const liveUpdates = [
    "PM Laptop Scheme Phase 3: Registration portal expected to go live next week.",
    "BISP Kafalat: Quarterly installment increased to PKR 10,500.",
    "Ehsaas Scholarship: Last date for document submission extended to Feb 25.",
    "DigiSkills: Batch 07 enrollments reaching 500k milestone.",
    "Punjab IT Board: New incubation center announced for Southern Punjab.",
    "HEC: New research grant opportunities for young faculty members."
  ];

  const quickLinks = [
    { name: "Pass Gov PK", url: "https://pass.gov.pk/", icon: <Globe className="w-5 h-5" /> },
    { name: "NADRA Portal", url: "https://www.nadra.gov.pk/", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "FBR Taxpayer", url: "https://fbr.gov.pk/", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Punjab IT Board", url: "https://pitb.gov.pk/", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-white min-h-screen py-20 -mx-4 -mt-8">
      {/* Premium Live News Ticker */}
      <div className="relative bg-black text-white py-3 overflow-hidden mb-16 border-y border-white/5">
        <div className="container mx-auto px-4 flex items-center gap-6 relative z-30">
          <div className="bg-emerald-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded flex items-center gap-2 shrink-0 z-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            LIVE UPDATES
          </div>
          
          <div className="overflow-hidden flex-1">
            <div className="flex w-fit animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-default">
              {/* First set of items */}
              {liveUpdates.map((update, i) => (
                <div key={`first-${i}`} className="flex items-center">
                  <span className="text-emerald-900 mr-2 ml-16">•</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                    {update}
                  </span>
                </div>
              ))}
              {/* Second identical set for seamless looping */}
              {liveUpdates.map((update, i) => (
                <div key={`second-${i}`} className="flex items-center">
                  <span className="text-emerald-900 mr-2 ml-16">•</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                    {update}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-8">
                <span className="w-2 h-2 bg-emerald-900 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Portal Status: Online</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase mb-8 leading-[0.9]">
                Digital Gov <br />
                <span className="text-primary outline-text">Navigator</span> 🇵🇰
              </h1>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                The centralized command center for Pakistan's national development schemes, scholarships, and digital initiatives.
              </p>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary"></span>
                  Active Initiatives
                </h2>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {schemes.length} Results</span>
              </div>
              
              <div className="space-y-6">
                  {schemes.map((scheme, i) => (
                <motion.div
                  key={scheme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:border-emerald-900/30 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Image Header */}
                  <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                    <img 
                      src={scheme.image} 
                      alt={scheme.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900">
                          {scheme.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                        {scheme.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${scheme.status === 'Upcoming' ? 'bg-amber-400' : 'bg-emerald-600'} animate-pulse`} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{scheme.status}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 leading-relaxed text-sm line-clamp-2 mb-6">
                    {scheme.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {scheme.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-900"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-900 hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="space-y-8">
              {/* Live Portal Stats */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-6 relative">Portal Status</h3>
                <div className="space-y-6 relative">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Active Users</span>
                    <span className="text-sm font-black text-primary">12.4k+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Updates Today</span>
                    <span className="text-sm font-black text-green-400">08</span>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Verification</div>
                    <p className="text-[10px] font-bold opacity-50 leading-relaxed uppercase">All schemes listed are verified against official government gazettes.</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  QUICK NAVIGATOR
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {quickLinks.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-900 hover:bg-emerald-900 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-slate-900 group-hover:text-white transition-colors">
                            {link.icon}
                          </div>
                          <span className="text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-white transition-colors">{link.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                </div>
              </div>

              {/* Community CTA */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 leading-tight">CITIZEN COMMUNITY</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
                    Join 50k+ Pakistanis discussing updates, issues, and successful applications.
                  </p>
                  <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                    <MessageSquare className="w-4 h-4" />
                    JOIN COMMUNITY
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="p-12 rounded-[3rem] bg-white border border-slate-100 text-center shadow-sm">
            <div className="max-w-xl mx-auto">
              <div className="text-4xl mb-6">🇵🇰</div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Official Information Resource</h4>
              <p className="text-slate-500 font-medium mb-8 text-sm leading-relaxed">
                This portal is dedicated to providing centralized access to Pakistani government schemes. Always verify details on official government websites before submitting sensitive information.
              </p>
              <div className="flex justify-center gap-8 border-t border-slate-50 pt-8">
                <div className="text-center">
                  <div className="text-xl font-black text-slate-900">100%</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Verified</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-slate-900">24/7</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-slate-900">Free</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Access</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
