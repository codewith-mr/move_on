'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Component: Opportunity Card (New Grid Style)
const OpportunityCard = ({ 
    title, 
    source, 
    link, 
    tags, 
    icon, 
    description,
    type 
}: { 
    title: string; 
    source: string; 
    link: string; 
    tags: string[]; 
    icon: string; 
    description: string;
    type: 'gov' | 'private' | 'abroad' | 'remote' | 'onsite';
}) => {
    const colors = {
        gov: 'border-blue-100 bg-blue-50/30 text-blue-600',
        private: 'border-emerald-100 bg-emerald-50/30 text-emerald-600',
        abroad: 'border-indigo-100 bg-indigo-50/30 text-indigo-600',
        remote: 'border-rose-100 bg-rose-50/30 text-rose-600',
        onsite: 'border-amber-100 bg-amber-50/30 text-amber-600'
    };

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colors[type]}`}>
                        {icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{source}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                            {tag}
                        </span>
                    ))}
                </div>

                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all group/btn"
                >
                    Apply on Official Site
                    <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </motion.div>
    );
};

export default function OpportunitiesClient() {
    const opportunitySectors = [
        {
            title: "Pakistani Gov Opportunities",
            description: "Official government portals for job seekers, digital skills, and youth schemes in Pakistan.",
            type: "gov" as const,
            opportunities: [
                {
                    title: "National Job Portal",
                    source: "NJP.GOV.PK",
                    link: "https://njp.gov.pk/",
                    icon: "🏛️",
                    description: "The primary hub for all federal government job opportunities and career tracks.",
                    tags: ["Federal Jobs", "Verified", "Pan Pakistan"]
                },
                {
                    title: "DigiSkills Learning",
                    source: "PITB / IGNITE",
                    link: "https://digiskills.pk/",
                    icon: "💻",
                    description: "Free digital skills training program to empower Pakistani youth for the global market.",
                    tags: ["Free Training", "Digital Skills", "Certification"]
                },
                {
                    title: "PPSC / FPSC Hub",
                    source: "GOVT EXAMS",
                    link: "https://ppsc.gop.pk/",
                    icon: "⚖️",
                    description: "Direct links to provincial and federal public service commission exam notifications.",
                    tags: ["Public Service", "Admin", "Career"]
                }
            ]
        },
        {
            title: "Private Sector & Internships",
            description: "Top job boards and internship portals for private sector growth in Pakistan.",
            type: "private" as const,
            opportunities: [
                {
                    title: "Rozee.pk Portal",
                    source: "ROZEE",
                    link: "https://www.rozee.pk/",
                    icon: "💼",
                    description: "Pakistan's largest job board for corporate, tech, and creative roles in major cities.",
                    tags: ["Top Jobs", "Corporate", "Pakistan"]
                },
                {
                    title: "Mustakbil.com Hub",
                    source: "MUSTAKBIL",
                    link: "https://www.mustakbil.com/",
                    icon: "🏢",
                    description: "A comprehensive platform for finding jobs and internships across various industries in Pakistan.",
                    tags: ["Jobs", "Internships", "Diverse"]
                },
                {
                    title: "LinkedIn Pakistan",
                    source: "LINKEDIN",
                    link: "https://www.linkedin.com/jobs/jobs-in-pakistan/",
                    icon: "🌐",
                    description: "Professional networking and job search tailored for the Pakistani corporate landscape.",
                    tags: ["Networking", "Professional", "Global"]
                }
            ]
        },
        {
            title: "Abroad & Global Scholar",
            description: "International scholarships specifically available for Pakistani students.",
            type: "abroad" as const,
            opportunities: [
                {
                    title: "HEC Overseas Scholarships",
                    source: "HEC.GOV.PK",
                    link: "https://www.hec.gov.pk/english/scholarships/Pages/default.aspx",
                    icon: "🌍",
                    description: "The official Higher Education Commission portal for international PhD and Masters funding.",
                    tags: ["Fully Funded", "Masters", "PhD"]
                },
                {
                    title: "Chevening Pakistan",
                    source: "UK GOVT",
                    link: "https://www.chevening.org/scholarship/pakistan/",
                    icon: "🇬🇧",
                    description: "Prestigious UK government scholarship for Pakistani leaders and professionals.",
                    tags: ["UK", "Leadership", "Masters"]
                },
                {
                    title: "Fulbright Pakistan",
                    source: "USEFP",
                    link: "https://usefp.org/scholarships/fulbright-degree.cfm",
                    icon: "🇺🇸",
                    description: "One of the largest Fulbright programs in the world, specifically for Pakistani scholars.",
                    tags: ["USA", "Masters", "PhD"]
                },
                {
                    title: "Commonwealth Scholarship",
                    source: "CSC UK",
                    link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/",
                    icon: "🇬🇧",
                    description: "High-impact funding for students from Commonwealth countries to study in the UK.",
                    tags: ["UK", "Masters", "Fully Funded"]
                },
                {
                    title: "Australia Awards",
                    source: "DFAT AU",
                    link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships",
                    icon: "🇦🇺",
                    description: "Prestigious scholarships for Pakistani professionals to drive change through Australian education.",
                    tags: ["Australia", "Masters", "Leadership"]
                },
                {
                    title: "Turkiye Burslari",
                    source: "TURKIYE GOVT",
                    link: "https://www.turkiyeburslari.gov.tr/",
                    icon: "🇹🇷",
                    description: "Full-funded scholarship program for undergraduate and postgraduate studies in Turkey.",
                    tags: ["Turkey", "All Levels", "Fully Funded"]
                },
                {
                    title: "MEXT Japan",
                    source: "JAPAN GOVT",
                    link: "https://www.pk.emb-japan.go.jp/itpr_en/Education.html",
                    icon: "🇯🇵",
                    description: "Japanese government funding for Pakistani students to study in top Japanese universities.",
                    tags: ["Japan", "Research", "Undergrad"]
                },
                {
                    title: "Stipendium Hungaricum",
                    source: "HEC / HUNGARY",
                    link: "https://stipendiumhungaricum.hu/",
                    icon: "🇭🇺",
                    description: "Fully funded higher education opportunities in Hungary for Pakistani students via HEC.",
                    tags: ["Hungary", "HEC", "Masters/PhD"]
                }
            ]
        },
        {
            title: "Remote & Global Gigs",
            description: "Work for global companies from your home. Mastering location independence.",
            type: "remote" as const,
            opportunities: [
                {
                    title: "We Work Remotely",
                    source: "WWR",
                    link: "https://weworkremotely.com/",
                    icon: "🏠",
                    description: "The world's largest remote job board for tech, design, and management.",
                    tags: ["Global", "No-Commute", "High-Pay"]
                },
                {
                    title: "Upwork Global Gigs",
                    source: "UPWORK",
                    link: "https://www.upwork.com/",
                    icon: "🌐",
                    description: "Master the freelance protocol and bid for high-value international projects.",
                    tags: ["Freelance", "USD Pay", "Skill-Based"]
                },
                {
                    title: "RemoteOK Hub",
                    source: "REMOTEOK",
                    link: "https://remoteok.com/",
                    icon: "✨",
                    description: "Daily updated feed of the most competitive remote roles across the globe.",
                    tags: ["Tech", "Design", "Remote First"]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white" suppressHydrationWarning>
            
            {/* Unique Clean Hero (Different from Self Dev) */}
            <section className="bg-white pt-24 pb-20 px-6 border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-[10px] font-black tracking-widest uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <span>Global Opportunity Feed</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 uppercase leading-none">
                                SCALE YOUR <br/>
                                <span className="text-blue-600">HORIZON.</span>
                            </h1>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                                We connect Pakistani students with high-leverage opportunities. No noise, just official paths to Government, Private, Abroad, and Remote careers.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex-shrink-0 md:w-80">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Radar Statistics</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-2xl font-black text-slate-900">1,200+</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase">Live Portals Tracked</div>
                                </div>
                                <div className="h-px bg-slate-200 w-full"></div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900">5 Sectors</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase">Strategic Domains</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Opportunity Grid Sections */}
            <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
                {opportunitySectors.map((sector, i) => (
                    <section key={i}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">{sector.title}</h2>
                                <p className="text-sm text-slate-500 font-medium">{sector.description}</p>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                Sector_0{i+1}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sector.opportunities.map((opp, j) => (
                                <OpportunityCard key={j} {...opp} type={sector.type} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* Simple Clean CTA */}
            <section className="bg-slate-900 py-32 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        Our Mission is <br/>
                        <span className="text-blue-400">Maximum Opportunity.</span>
                    </h2>
                    <p className="text-lg text-slate-400 font-medium mb-12">
                        We don&apos;t just list links. We curate the most powerful paths for your future.
                        Start your application process today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/global-scholar" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all">
                            Global Scholar Hub
                        </Link>
                        <Link href="/gov-schemes" className="px-10 py-5 border border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                            Gov Scheme Portal
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
