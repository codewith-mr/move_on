'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

// Component: Deep Mastery Section (Detailed Guidance)
const MasterySection = ({ 
    number, 
    title, 
    subtitle, 
    description, 
    steps, 
    tips, 
    icon, 
    color, 
    bg 
}: { 
    number: string; 
    title: string; 
    subtitle: string; 
    description: string; 
    steps: { title: string; desc: string }[]; 
    tips: string[]; 
    icon: string; 
    color: string; 
    bg: string;
}) => (
    <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 border-b border-slate-50 last:border-0"
    >
        <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: The Overview */}
            <div className="lg:w-1/3">
                <div className="sticky top-40">
                    <div className="flex items-center gap-4 mb-8">
                        <span className={`text-[10px] font-black tracking-[0.5em] uppercase ${color}`}>MODULE_{number}</span>
                        <div className="h-px w-12 bg-slate-100"></div>
                    </div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6 uppercase">
                        {title}
                    </h2>
                    <p className={`text-sm font-bold ${color} uppercase tracking-widest mb-8`}>{subtitle}</p>
                    <p className="text-slate-500 font-medium leading-relaxed mb-12 italic">
                        &quot;{description}&quot;
                    </p>
                    <div className={`w-20 h-20 rounded-3xl ${bg} flex items-center justify-center text-4xl shadow-sm border border-white`}>
                        {icon}
                    </div>
                </div>
            </div>

            {/* Right: Deep Guidance */}
            <div className="lg:w-2/3 space-y-16">
                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-slate-900/10 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.05)]">
                            <span className="text-3xl font-black text-slate-100 group-hover:text-slate-900 transition-colors duration-500 mb-6 block">0{i+1}</span>
                            <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{step.title}</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pro Tips Panel */}
                <div className={`p-10 rounded-[3rem] ${bg} border border-white shadow-inner`}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')} animate-pulse`}></div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">Advanced_Optimization</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {tips.map((tip, i) => (
                            <div key={i} className="flex gap-4">
                                <span className={`${color} font-black text-xs mt-1`}>+</span>
                                <p className="text-xs font-bold text-slate-600 uppercase tracking-wide leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
);

export default function SelfDevelopmentClient() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const modules = [
        {
            number: "01",
            title: "Focus Architecture",
            subtitle: "Peak Productivity Protocol",
            description: "Deep work is not a talent—it's a structured environment you build for your mind.",
            icon: "⚡",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            steps: [
                { title: "Time Blocking", desc: "Assign specific blocks for deep work. No emails, no notifications, just high-leverage execution." },
                { title: "Eisenhower Grid", desc: "Learn to distinguish between what is urgent and what is truly important for your future." },
                { title: "The 90-Min Cycle", desc: "Work in 90-minute sprints followed by 15-minute resets to match your brain's natural rhythm." },
                { title: "Digital Isolation", desc: "Physically remove your phone from your line of sight. Your focus is a limited resource." }
            ],
            tips: ["USE NOISE-CANCELLING FREQUENCIES", "BATCH ALL LOW-LEVEL TASKS", "SET DAILY TOP 3 TARGETS", "IMPLEMENT AN 'OFF' SWITCH AT 8PM"]
        },
        {
            number: "02",
            title: "Mindset Synthesis",
            subtitle: "Resilience & Confidence Lab",
            description: "The internal narrative you tell yourself determines the external results you achieve.",
            icon: "🧠",
            color: "text-blue-600",
            bg: "bg-blue-50",
            steps: [
                { title: "Fixed vs Growth", desc: "Shift from 'I'm not good at this' to 'I haven't mastered this yet.' Language dictates capability." },
                { title: "Stress Inversion", desc: "View stress as a biological indicator of growth. Your system is upgrading under pressure." },
                { title: "Mental Models", desc: "Build a library of logic systems (First Principles, Occam's Razor) to solve complex problems." },
                { title: "Radical Ownership", desc: "Take 100% responsibility for your environment, results, and reactions." }
            ],
            tips: ["PRACTICE NEGATIVE VISUALIZATION", "AUDIT YOUR INNER MONOLOGUE", "CELEBRATE FAILURE AS DATA", "MAINTAIN A GROWTH JOURNAL"]
        },
        {
            number: "03",
            title: "Biological Optimization",
            subtitle: "The Vitality Blueprint",
            description: "Your brain is a physical organ. If your biology is weak, your creative output will be mediocre.",
            icon: "🥗",
            color: "text-rose-600",
            bg: "bg-rose-50",
            steps: [
                { title: "Circadian Sync", desc: "Optimize your sleep cycles. Morning light and evening darkness are non-negotiable for focus." },
                { title: "Cognitive Nutrition", desc: "Fuel your mind with high-status fats and proteins. Avoid glucose spikes that cause brain fog." },
                { title: "Movement Micro-Dose", desc: "Short bursts of movement every 2 hours to flush your system with fresh oxygen." },
                { title: "Dopamine Detox", desc: "Reduce low-effort stimulation (endless scrolling) to restore your sensitivity to real work." }
            ],
            tips: ["HYDRATE WITH ELECTROLYTES", "GET 10 MINS MORNING SUNLIGHT", "IMPLEMENT A COLD RESET", "STOP EATING 3 HOURS BEFORE SLEEP"]
        },
        {
            number: "04",
            title: "Influence & Clarity",
            subtitle: "Elite Communication System",
            description: "The most brilliant ideas are useless if you cannot articulate them with absolute authority.",
            icon: "🗣️",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            steps: [
                { title: "Active Synthesis", desc: "Learn to listen and summarize complex ideas into simple, high-impact statements." },
                { title: "Influence Frameworks", desc: "Master the art of storytelling to persuade and lead within your creative domain." },
                { title: "Visual Authority", desc: "Align your body language and presence with the value of the ideas you are sharing." },
                { title: "The Pitch Logic", desc: "Learn to structure every interaction with a hook, a value prop, and a clear call to action." }
            ],
            tips: ["RECORD & AUDIT YOUR SPEECH", "MASTER THE ART OF THE PAUSE", "SIMPLIFY YOUR EXPLANATIONS", "BUILD A NETWORKING DATABASE"]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white" suppressHydrationWarning>
            
            {/* Immersive Hero: The Mastery Archive */}
            <section ref={heroRef} className="relative pt-16 pb-32 px-6 border-b border-slate-100 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <motion.div
                                style={{ opacity: heroOpacity }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black tracking-[0.3em] uppercase">System: Human_Upgrade</div>
                                    <div className="h-px w-20 bg-slate-200"></div>
                                    <span className="text-[10px] font-mono text-slate-400 font-bold tracking-widest">VERSION_2.0.1</span>
                                </div>
                                
                                <h1 className="text-[12vw] lg:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.75] mb-8 uppercase">
                                    SELF <br/>
                                    <span className="text-slate-100">MASTERY.</span>
                                </h1>
                                
                                <p className="text-3xl lg:text-5xl text-slate-500 font-medium leading-tight max-w-3xl">
                                    Don&apos;t just work harder. <br/>
                                    <span className="text-slate-900 underline decoration-8 decoration-slate-900/5 underline-offset-[12px]">Upgrade the system</span> that does the work.
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="lg:col-span-4 flex flex-col items-end">
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-right max-w-xs"
                            >
                                <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-6">Mastery_Nodes</div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                                    Accessing deep-level protocols for cognitive and biological performance. 
                                    Four domains of mastery are currently synchronized.
                                </p>
                                <div className="flex justify-end gap-3">
                                    <div className="w-12 h-1.5 bg-slate-900 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Domain Navigator */}
            <section className="sticky top-[73px] z-40 bg-white/80 backdrop-blur-2xl border-b border-slate-100 py-8 px-6 shadow-sm">
                <motion.div 
                    style={{ width: progressWidth }}
                    className="absolute bottom-0 left-0 h-[2px] bg-slate-900 origin-left"
                />
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 overflow-x-auto no-scrollbar">
                    {modules.map((m, i) => (
                        <a key={i} href={`#module-${m.number}`} className="group flex items-center gap-4 shrink-0">
                            <span className="text-[10px] font-black text-slate-200 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{m.number}</span>
                            <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{m.title}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Deep Mastery Modules Content */}
            <main className="max-w-7xl mx-auto px-6">
                {modules.map((module, index) => (
                    <div key={index} id={`module-${module.number}`} className="scroll-mt-32">
                        <MasterySection {...module} />
                    </div>
                ))}
            </main>

            {/* High-Impact Performance Section */}
            <section className="py-60 px-6 bg-slate-900 text-white relative overflow-hidden rounded-[6rem] mx-6 mb-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_70%)] opacity-10"></div>
                
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-5xl mb-12 mx-auto animate-pulse">⚙️</div>
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.75] mb-12 uppercase">
                            <span className="text-emerald-400">THE DAILY</span> <br/>
                            <span className="text-white/40">PERFORMANCE.</span>
                        </h2>
                        <p className="text-2xl text-white font-medium leading-relaxed max-w-3xl mx-auto mb-20">
                            Excellence is not an event. It is a recurring series of automated protocols that happen while others are still sleeping.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
                            {[
                                { t: "MORNING_SYNC", d: "Light, hydration, and high-priority execution within the first 60 minutes." },
                                { t: "DEEP_FOCUS", d: "Uninterrupted 90-minute sprints focused on your highest-leverage goal." },
                                { t: "EVENING_RESET", d: "Cognitive off-loading, review of the day, and biological prep for sleep." }
                            ].map((item, i) => (
                                <div key={i} className="text-left group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                                    <h4 className="text-xl font-black uppercase tracking-widest mb-4 text-white group-hover:text-emerald-400 transition-colors">{item.t}</h4>
                                    <p className="text-[15px] text-slate-200 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Resource Call to Action */}
            <section className="py-40 px-6 text-center border-t border-slate-100">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-12">
                        <div className="w-2 h-2 rounded-full bg-slate-900 animate-bounce"></div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">Next_Evolution</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-none">
                        Ready to <br/>
                        <span className="text-slate-200 italic">Dominate?</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16">
                        The tools are here. The systems are live. The only missing variable is your decision to begin the upgrade.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/creativity" className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:bg-black transition-all" suppressHydrationWarning>
                            Open Creativity Lab
                        </Link>
                        <button className="px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:border-slate-900 transition-all" suppressHydrationWarning>
                            Join The Community
                        </button>
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
