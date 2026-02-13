'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { learningModules, LearningModule } from '../creativity/learning/learning-data';

// Component: Pathway Card (Minimalist, Swiss Style, High-End)
const PathwayCard = ({ module, index }: { module: LearningModule, index: number }) => (
  <Link href={`/creativity/learning/${module.id}`} className="group block h-full">
    <div className="flex flex-col h-full p-8 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-900 transition-colors duration-300">
        
        {/* Header: Number & Category */}
        <div className="flex justify-between items-start mb-8">
             <span className="text-xs font-bold tracking-widest text-neutral-300">
                {module.id.toUpperCase()}
            </span>
             <span className="px-3 py-1 bg-neutral-50 text-[10px] font-bold uppercase tracking-widest text-neutral-500 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                {module.category}
            </span>
        </div>

        {/* Content */}
        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                {module.title}
            </h3>
            <p className="text-base text-neutral-500 font-medium leading-relaxed line-clamp-3">
                {module.shortDescription}
            </p>
        </div>

        {/* Footer: Action */}
        <div className="mt-8 pt-6 border-t border-neutral-50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-900">
            <span>Start Learning</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
    </div>
  </Link>
);

// Component: Featured Manifesto Section
const ManifestoHeader = () => (
    <div className="py-24 px-6 border-b border-neutral-100 bg-white">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-10 leading-[0.9]">
                BUILD <br/>
                <span className="text-neutral-200">YOUR</span> <br/>
                FREEDOM.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-20 h-2 bg-neutral-900"></div>
                <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-2xl">
                    School taught you how to get a job. We teach you how to build a life. 
                    Master the high-leverage skills—from AI to Psychology—that create wealth, independence, and impact.
                </p>
            </div>
        </div>
    </div>
);

// Component: Section Title
const SectionTitle = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
    <div className="mb-12 group">
        {/* Swiss Style Rule: Defines Section Start */}
        <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-neutral-900/10 flex-grow"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
                Section {number}
            </span>
            <div className="w-24 h-px bg-neutral-900/10"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 pb-6 border-b border-neutral-100">
            <h2 className="text-6xl font-black text-neutral-100 leading-none group-hover:text-neutral-200 transition-colors duration-500">{number}</h2>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-2">{subtitle}</h3>
                <p className="text-xl text-neutral-500 font-medium">{title}</p>
            </div>
        </div>
    </div>
);

// Component: Modern Skills Section (Dark Lab Edition)
const ModernSkillsSection = () => {
    const skills = [
        {
            title: "The Ghost Protocol",
            description: "Mastering digital anonymity and the 'invisible' distribution network that the elite use to bypass algorithms.",
            tag: "DISTRIBUTION",
            glow: "shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
            border: "border-blue-500/30",
            icon: "👻",
            color: "rgba(59, 130, 246, 0.5)"
        },
        {
            title: "Biological Leverage",
            description: "How to engineer your circadian rhythm and neurochemistry for 4-hour 'Deep Flow' states that outperform 40-hour weeks.",
            tag: "BIOLOGY",
            glow: "shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]",
            border: "border-green-500/30",
            icon: "🧬",
            color: "rgba(34, 197, 94, 0.5)"
        },
        {
            title: "The Alchemy of Status",
            description: "The hidden psychology of high-status signaling. How to command authority without saying a word.",
            tag: "PSYCHOLOGY",
            glow: "shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
            border: "border-purple-500/30",
            icon: "♟️",
            color: "rgba(168, 85, 247, 0.5)"
        },
        {
            title: "Memetic Warfare",
            description: "Engineering ideas that spread like viruses. Moving beyond 'content' into the realm of cultural contagion.",
            tag: "IDEOLOGY",
            glow: "shadow-[0_0_50px_-12px_rgba(239,68,68,0.5)]",
            border: "border-red-500/30",
            icon: "🧪",
            color: "rgba(239, 68, 68, 0.5)"
        },
        {
            title: "Capital Alchemy",
            description: "Turning digital attention into hard assets. The roadmap from 'Creator' to 'Venture Capitalist'.",
            tag: "FINANCE",
            glow: "shadow-[0_0_50px_-12px_rgba(234,179,8,0.5)]",
            border: "border-yellow-500/30",
            icon: "🏺",
            color: "rgba(234, 179, 8, 0.5)"
        },
        {
            title: "AI Synthesis",
            description: "Don't prompt AI. Build digital clones. Creating autonomous agents that work while your phone is off.",
            tag: "AUTOMATION",
            glow: "shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)]",
            border: "border-orange-500/30",
            icon: "🛰️",
            color: "rgba(249, 115, 22, 0.5)"
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#050505] -mx-6 rounded-[3rem] border border-white/5 relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">Accessing Restricted Knowledge</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">SHADOW</span> CURRICULUM.
                        </h2>
                        <p className="text-xl text-neutral-400 font-medium leading-relaxed">
                            Everything they didn't want you to know about power, attention, and wealth in the digital age. 
                            This isn't a classroom. This is the lab.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-5xl font-black text-white/10 mb-2">04</div>
                        <div className="text-[10px] font-bold text-white/30 tracking-[0.5em] uppercase">Phase IV: Mastery</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ 
                                scale: 1.02,
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className={`group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border ${skill.border} transition-all duration-500 ease-out overflow-hidden`}
                        >
                            {/* Hover Magnetic Glow Effect */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
                                    filter: 'blur(40px)',
                                    transform: 'scale(1.5)'
                                }}
                            ></div>

                            {/* Card Content */}
                            <div className="relative z-20">
                                <div className="flex justify-between items-center mb-12">
                                    <motion.div 
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                                        className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300"
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <span className="text-[9px] font-black tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-200 uppercase">
                                        {skill.tag}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:tracking-normal transition-all duration-300">
                                    {skill.title}
                                </h3>
                                
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                    {skill.description}
                                </p>
                            </div>

                            {/* Hover Reveal Border Animation */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/10 transition-all duration-300 pointer-events-none"></div>
                            
                            {/* The "Neural Trace" Animation (Bottom Line) */}
                            <motion.div 
                                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                            ></motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Component: The Distribution Engine (Replacing Biological Upgrade)
const DistributionEngine = () => {
    const modules = [
        {
            title: "Algorithm Mastery",
            metric: "Reach / Engagement",
            status: "DOMINATING",
            stats: ["Viral Velocity: +310%", "Retention: 82%"],
            icon: "📈",
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-100"
        },
        {
            title: "Network Leverage",
            metric: "Node Connectivity",
            status: "EXPANDING",
            stats: ["High-Value Nodes: 12", "Trust Score: 9.4"],
            icon: "🌐",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            title: "Asset Synthesis",
            metric: "Compound Growth",
            status: "ACTIVE",
            stats: ["Yield: Exponential", "Risk: Minimal"],
            icon: "💎",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Clean Modern Background */}
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left: The Distribution Visual (Clean Dashboard Aesthetic) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative aspect-square bg-[#fafafa] rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
                            {/* Animated Background Pulse */}
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_70%)] opacity-10"
                            ></motion.div>

                            {/* Dashboard Interface */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none font-sans">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[10px] text-slate-900 font-black tracking-widest uppercase">Engine_Live</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-400">SESSION_092</div>
                                </div>

                                {/* Central Chart/Visual */}
                                <div className="relative flex-1 flex items-center justify-center">
                                    <div className="w-full space-y-4">
                                        {[60, 40, 80, 50, 90].map((h, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-12 text-[8px] font-mono text-slate-400">CH_{i+1}</div>
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${h}%` }}
                                                        transition={{ duration: 1, delay: i * 0.1 }}
                                                        className="h-full bg-slate-900"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Floating Stats Label */}
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -right-4 top-1/4 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50"
                                    >
                                        <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Leverage</div>
                                        <div className="text-xl font-black text-slate-900">12.4x</div>
                                    </motion.div>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <div className="text-[8px] text-slate-400 uppercase">Growth_Trajectory</div>
                                        <div className="text-xs font-bold text-slate-900">EXPONENTIAL</div>
                                    </div>
                                    <div className="w-24 h-12">
                                        <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-emerald-500 stroke-2">
                                            <motion.path 
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 2 }}
                                                d="M0 35 Q 25 35, 50 20 T 100 5" 
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Minimal Accents */}
                        <div className="absolute top-1/2 -left-4 w-8 h-px bg-slate-200"></div>
                        <div className="absolute top-1/2 -right-4 w-8 h-px bg-slate-200"></div>
                    </div>

                    {/* Right: Content & Modules */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-900 text-white mb-8">
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Phase V: Leverage</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
                            DISTRIBUTION <br/>
                            <span className="text-slate-400">ENGINE.</span>
                        </h2>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                            The goal isn't just to create. The goal is to build an engine that distributes your value while you sleep. Leverage is the only path to freedom.
                        </p>

                        <div className="space-y-4">
                            {modules.map((module, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5, backgroundColor: '#ffffff' }}
                                    className={`group p-8 rounded-[2rem] bg-[#fcfcfc] border ${module.border} hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all cursor-default flex flex-col md:flex-row gap-8 items-start md:items-center`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${module.bg} ${module.color} flex items-center justify-center text-3xl shadow-sm`}>
                                        {module.icon}
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{module.title}</h4>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{module.metric}</p>
                                            </div>
                                            <div className={`text-[10px] font-black px-3 py-1 rounded-full ${module.bg} ${module.color} border ${module.border}`}>
                                                {module.status}
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            {module.stats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                                    <span className="text-[11px] text-slate-500 font-bold">{stat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Component: Global Network (Social Capital)
const NetworkSection = () => {
    return (
        <section className="py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <span className="text-[10px] font-black tracking-[0.5em] text-neutral-400 uppercase mb-6 block">Social Architecture</span>
                        <h2 className="text-6xl font-black tracking-tighter leading-none mb-8">YOUR NETWORK <br/>IS YOUR <span className="text-neutral-200">MOAT.</span></h2>
                        <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-10">
                            The best opportunities don't appear on job boards. 
                            They happen in closed DMs, private masterminds, and high-trust circles.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Value-First DM Frameworks",
                                "The 'Invisible' Mentor Strategy",
                                "Community as a Service (CaaS)"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center text-[10px] text-white">✓</div>
                                    <span className="font-bold text-neutral-900 uppercase tracking-widest text-xs">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Visual: The Connection Web */}
                    <div className="flex-1 relative">
                        <div className="w-full aspect-square border border-neutral-100 rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 border border-neutral-100 rounded-full scale-75"></div>
                            <div className="absolute inset-0 border border-neutral-100 rounded-full scale-50"></div>
                            
                            {/* Floating "Node" Avatars */}
                            {[
                                { t: 'top-0 left-1/2', c: 'bg-blue-500' },
                                { t: 'bottom-10 left-0', c: 'bg-purple-500' },
                                { t: 'bottom-20 right-0', c: 'bg-green-500' },
                                { t: 'top-20 right-10', c: 'bg-yellow-500' }
                            ].map((pos, i) => (
                                <motion.div 
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, delay: i, repeat: Infinity }}
                                    className={`absolute ${pos.t} w-12 h-12 rounded-full ${pos.c} shadow-xl border-4 border-white`}
                                />
                            ))}
                            <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl z-10">YOU</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Component: The Compound Effect (Recursive Growth)
const GrowthSection = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1 rounded-full border border-neutral-900 text-[10px] font-black uppercase tracking-widest mb-12">The Endgame</div>
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-12">
                    COMPOUND <br/> <span className="text-neutral-100">FOREVER.</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left items-center">
                    <div className="space-y-8">
                        <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                            <h4 className="text-2xl font-black mb-4 uppercase italic">Phase 01: Skill Stacking</h4>
                            <p className="text-neutral-500 font-medium">Learn 3 complementary skills that make you 1-of-1 in the market.</p>
                        </div>
                        <div className="p-8 bg-neutral-900 rounded-3xl text-white shadow-2xl shadow-neutral-900/20">
                            <h4 className="text-2xl font-black mb-4 uppercase italic">Phase 02: Asset Building</h4>
                            <p className="text-neutral-400 font-medium">Turn your time into products, software, or equity. Break the hourly rate.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="text-[120px] font-black text-neutral-100 absolute -top-20 -left-10 select-none">∞</div>
                        <p className="text-2xl font-bold text-neutral-900 leading-tight">
                            "The goal isn't to work forever. The goal is to build systems that work while you sleep, learn, and live."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Component: Proof of Work Section (The New Resume)
const ProofOfWorkSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    {/* Left Side: The "Degree" (Traditional) */}
                    <div className="flex-1 opacity-40 grayscale blur-[1px] transition-all hover:opacity-100 hover:grayscale-0 hover:blur-0">
                        <div className="text-[10px] font-black tracking-[0.4em] text-neutral-400 mb-6 uppercase">The Old Way</div>
                        <h3 className="text-4xl font-black text-neutral-900 mb-6 tracking-tighter">THE PAPER <br/>CERTIFICATE.</h3>
                        <div className="p-8 border-2 border-dashed border-neutral-200 rounded-lg bg-neutral-50 relative">
                            <div className="w-full h-48 flex items-center justify-center border border-neutral-200 bg-white">
                                <span className="text-sm font-serif italic text-neutral-400">Diploma of Conformity</span>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="h-2 w-3/4 bg-neutral-200 rounded"></div>
                                <div className="h-2 w-1/2 bg-neutral-200 rounded"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-white/60 opacity-0 hover:opacity-100 transition-opacity">
                                <span className="px-4 py-2 bg-red-500 text-white text-[10px] font-bold uppercase rounded-full tracking-widest">Low Signal</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle: The Divider */}
                    <div className="hidden lg:flex flex-col items-center gap-4">
                        <div className="w-px h-24 bg-gradient-to-b from-transparent via-neutral-200 to-transparent"></div>
                        <span className="text-xs font-black text-neutral-300">VS</span>
                        <div className="w-px h-24 bg-gradient-to-b from-transparent via-neutral-200 to-transparent"></div>
                    </div>

                    {/* Right Side: Proof of Work (The New Way) */}
                    <div className="flex-[1.5] w-full">
                        <div className="text-[10px] font-black tracking-[0.4em] text-blue-600 mb-6 uppercase">The New Signal</div>
                        <h3 className="text-5xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tighter leading-[0.9]">PROOF <br/>OF WORK.</h3>
                        
                        {/* Interactive Terminal / Code Window */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-neutral-900 bg-[#0A0A0B]">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1B] border-b border-neutral-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="text-[10px] font-mono text-neutral-500 tracking-widest">portfolio.exe</div>
                                <div className="w-10"></div>
                            </div>
                            
                            {/* Terminal Body */}
                            <div className="p-8 font-mono text-sm leading-relaxed">
                                <div className="flex gap-4 mb-4">
                                    <span className="text-blue-400">➜</span>
                                    <span className="text-white">analyze_talent --identity="student_03"</span>
                                </div>
                                <div className="text-neutral-500 mb-6">[SYSTEM] Scanning digital footprint...</div>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-1 h-8 bg-blue-500 rounded-full group-hover:scale-y-125 transition-transform"></div>
                                        <div>
                                            <div className="text-blue-400 font-bold">Public GitHub Repo</div>
                                            <div className="text-[11px] text-neutral-500">3 SaaS MVPs launched in 90 days.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-1 h-8 bg-purple-500 rounded-full group-hover:scale-y-125 transition-transform"></div>
                                        <div>
                                            <div className="text-purple-400 font-bold">Twitter/X Network</div>
                                            <div className="text-[11px] text-neutral-500">Connected to 12 tech founders via value-first DM.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-1 h-8 bg-green-500 rounded-full group-hover:scale-y-125 transition-transform"></div>
                                        <div>
                                            <div className="text-green-400 font-bold">Live Product Sales</div>
                                            <div className="text-[11px] text-neutral-500">$1.2k MRR from autonomous AI agent.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-800">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-neutral-600 tracking-widest uppercase">Employability Score</span>
                                        <span className="text-green-400 font-black">98.4%</span>
                                    </div>
                                    <div className="w-full h-1 bg-neutral-800 rounded-full mt-2">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '98.4%' }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                        ></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Callout */}
                <div className="mt-24 p-12 bg-neutral-900 rounded-[2.5rem] text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10 group-hover:bg-blue-500/20 transition-colors"></div>
                    <h4 className="text-3xl font-black mb-4">Stop asking for permission.</h4>
                    <p className="text-neutral-400 font-medium max-w-2xl mx-auto mb-8">
                        In the new economy, nobody cares about your degree. They care about what you've built. 
                        We don't teach you how to write a CV. We teach you how to be undeniable.
                    </p>
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full cursor-pointer hover:bg-neutral-100 transition-colors">
                        Build Your Proof <span className="text-lg">↗</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function CreativityClient() {
  // Logic: Flatten all high-value modules into a curated curriculum
  
  // Phase 1: The Tools (Digital Skills)
  const toolsModules = learningModules.filter(m => 
    ['d1', 'd2', 'd3', 'd4'].includes(m.id)
  );

  // Phase 2: The Strategy (Growth & SEO)
  const strategyModules = learningModules.filter(m => 
    ['d5', 'd6', 'd7', 'd8'].includes(m.id)
  );

  // Phase 3: The Foundation (Mindset & Business)
  const foundationModules = learningModules.filter(m => 
    ['d9', 'd10', 'd11'].includes(m.id)
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
        
        {/* 1. Manifesto / Hero */}
        <ManifestoHeader />

        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
            
            {/* Phase 1: The New Leverage */}
            <section>
                <SectionTitle 
                    number="01"
                    subtitle="Leverage" 
                    title="Master the tools that multiply your time." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolsModules.map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

            {/* Phase 2: The Distribution */}
            <section>
                <SectionTitle 
                    number="02"
                    subtitle="Attention" 
                    title="Build an audience that listens." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategyModules.map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

             {/* Phase 3: The Empire */}
             <section>
                <SectionTitle 
                    number="03"
                    subtitle="Wealth" 
                    title="Structure your mind and business for scale." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foundationModules.slice(0, 6).map((module, i) => (
                        <PathwayCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </section>

            {/* Phase 4: Restricted Knowledge */}
             <ModernSkillsSection />
 
             {/* Phase 5: The Proof */}
             <ProofOfWorkSection />

             {/* Phase 6: Deep Focus */}
             <DistributionEngine />

             {/* Phase 7: Social Capital */}
             <NetworkSection />

             {/* Phase 8: The Endgame */}
             <GrowthSection />
            <div className="text-center pt-24 pb-12">
                <p className="text-4xl md:text-5xl font-black text-neutral-900 max-w-4xl mx-auto leading-tight mb-8">
                    "The best way to predict the future is to create it."
                </p>
                <div className="inline-block px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    Start Building
                </div>
            </div>

        </div>
    </div>
  );
}
