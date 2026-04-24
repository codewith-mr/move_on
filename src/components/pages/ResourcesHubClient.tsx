'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Component: Asset Table Row (The "Amazing" Part)
const AssetTableRow = ({ 
    type, 
    folders, 
    files, 
    accent 
}: { 
    type: string; 
    folders: string; 
    files: string; 
    accent: string;
}) => (
    <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-100 group/row hover:bg-slate-50 transition-colors px-6">
        <div className="text-[13px] font-bold text-slate-900 tracking-tight line-clamp-1">{type}</div>
        <div className="text-[11px] font-mono text-slate-400 font-medium">{folders} folders</div>
        <div className="text-[11px] font-mono text-slate-400 font-medium">{files} files</div>
        <div className="text-right">
            <button className={`text-[10px] font-black uppercase tracking-[0.1em] ${accent} opacity-50 group-hover/row:opacity-100 transition-all hover:underline`}>
                CLICK HERE
            </button>
        </div>
    </div>
);

// Component: Domain Card
const DomainCard = ({ 
    category 
}: { 
    category: {
        id: string;
        tag: string;
        title: string;
        description: string;
        color: string;
        bg: string;
        border: string;
        accent: string;
        icon: React.ReactNode;
        assets: Array<{ type: string; folders: string; files: string }>;
    }
}) => (
    <div id={category.id} className="mb-24 last:mb-0 scroll-mt-48 group">
        <div className="flex items-center gap-5 mb-8 px-4">
            <div className={`w-14 h-14 rounded-[2rem] ${category.bg} flex items-center justify-center text-2xl shadow-sm border border-slate-100 rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                <div className={category.color}>{category.icon}</div>
            </div>
            <div>
                <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-widest uppercase border ${category.border} ${category.color} bg-white shadow-sm`}>{category.tag}</span>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{category.title.toUpperCase()}</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium max-w-xl">{category.description}</p>
            </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] transition-shadow duration-700">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 px-10 py-6 bg-slate-50/50 border-b border-slate-200 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
                <div>Graphics Type</div>
                <div>Folders</div>
                <div>Files</div>
                <div className="text-right">Action</div>
            </div>

            {/* Table Body */}
            <div className="py-2">
                {category.assets.map((asset, i) => (
                    <AssetTableRow 
                        key={i} 
                        type={asset.type} 
                        folders={asset.folders} 
                        files={asset.files} 
                        accent={category.accent} 
                    />
                ))}
            </div>

            {/* Table Footer */}
            <div className="px-10 py-8 bg-slate-50/30 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${category.bg.replace('bg-', 'bg-').replace('-50', '-500')} animate-pulse`}></div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Protocol_Sync_Active</span>
                </div>
                <button className={`group/btn flex items-center gap-4 px-8 py-3 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all`} suppressHydrationWarning>
                    Access Library
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    </div>
);

export default function ResourcesHubClient() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Custom SVG Icons
    const icons = {
        photoshop: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4.12-4.12L8.3 11.47l2.7 2.7 5.7-5.7 1.41 1.41L11 17z"/></svg>,
        corel: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>,
        fonts: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/></svg>,
        png: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12.99H5V6.3l7-2.33v9.02z"/></svg>,
        mockups: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>,
        stock: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
        vectors: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM10.622 8.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.333V8.748a.4.4 0 01.622-.333z"/></svg>,
        premiere: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H5V5h14v14zM8 15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm4 2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm4-5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1z"/></svg>,
        aftereffects: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>,
        indesign: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>,
        powerpoint: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
    };

    const categories = [
        { id: 'photoshop', tag: 'PS_COLLECTION', title: 'Photoshop Collection', description: 'Raster design assets for social and digital identity.', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', accent: 'text-blue-600', icon: icons.photoshop, assets: [{ type: 'Instagram Stories', folders: '11', files: '500+' }, { type: 'Flyers', folders: '13', files: '500+' }, { type: 'Backgrounds', folders: '2', files: '70+' }, { type: 'Animated stories', folders: '7', files: '20+' }, { type: 'Banners', folders: '1', files: '100+' }, { type: 'Social networks', folders: '29', files: '1400+' }, { type: 'Visiting card', folders: '2', files: '15+' }, { type: 'Digital card', folders: '3', files: '50+' }, { type: 'Youtube Assets', folders: '1', files: '80+' }, { type: 'Facebook covers', folders: '50', files: '60+' }] },
        { id: 'corel', tag: 'CD_COLLECTION', title: 'Corel Draw Collection', description: 'Precision vectors for T-shirts and technical graphics.', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'text-emerald-600', icon: icons.corel, assets: [{ type: 'Tshirts Collection', folders: '34', files: '2500+' }, { type: 'Flipflops & Shoes', folders: '14', files: '1000+' }, { type: 'Icons Library', folders: '1', files: '1000+' }, { type: 'Logo A-Z Pack', folders: '26', files: '400+' }, { type: 'Cushions & Pillows', folders: '11', files: '400+' }, { type: 'Helmet Designs', folders: '1', files: '500+' }, { type: 'Cup & Mug Prints', folders: '1', files: '500+' }] },
        { id: 'fonts', tag: 'TF_VAULT', title: 'Typography Vault', description: 'Repository of 125,000 professional font sources.', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', accent: 'text-indigo-600', icon: icons.fonts, assets: [{ type: '125 Thousand Sources', folders: '1', files: '125k+' }, { type: 'Fonts Mega Pack', folders: '30', files: '100+' }, { type: 'Vintage Sources', folders: '1', files: '1k+' }, { type: 'Rock Sources', folders: '1', files: '1k+' }] },
        { id: 'png', tag: 'PN_LIBRARY', title: 'PNG Asset Library', description: 'HD transparent assets sorted by alphabetic domain.', color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100', accent: 'text-sky-600', icon: icons.png, assets: [{ type: 'AM-AR Series', folders: '1', files: '250+' }, { type: 'AS-AZ Series', folders: '1', files: '300+' }, { type: 'CO-CO Series', folders: '1', files: '250+' }, { type: 'CP-CZ Series', folders: '1', files: '150+' }, { type: 'DA-DE Series', folders: '1', files: '350+' }] },
        { id: 'mockups', tag: 'MP_PROTOCOLS', title: 'Mockup Protocols', description: 'Visualization systems for professional presentations.', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', accent: 'text-rose-600', icon: icons.mockups, assets: [{ type: 'Brands Collection', folders: '3', files: '1000+' }, { type: 'Computers & Tech', folders: '6', files: '150+' }, { type: 'Cell Phones', folders: '4', files: '350+' }, { type: 'Clothing Mockups', folders: '4', files: '150+' }] },
        { id: 'stock', tag: 'ST_ARCHIVE', title: 'Stock Photo Archive', description: 'Atmospheric nodes for curated visual depth.', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', accent: 'text-teal-600', icon: icons.stock, assets: [{ type: 'Animals Archive', folders: '23', files: '500+' }, { type: 'Cars & Transport', folders: '52', files: '350+' }, { type: 'Foods & Beverage', folders: '53', files: '100+' }, { type: 'Electronics Archive', folders: '39', files: '500+' }] },
        { id: 'vectors', tag: 'VC_LAB', title: 'Vector Art Lab', description: 'Scalable illustrative blueprints for creative warfare.', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', accent: 'text-violet-600', icon: icons.vectors, assets: [{ type: 'Art Tattoo Pack', folders: '1', files: '250+' }, { type: 'Logos Mega Lab', folders: '1', files: '1000+' }, { type: 'Shields & Icons', folders: '38', files: '100+' }, { type: 'Lion Cartoon Set', folders: '1', files: '300+' }] },
        { id: 'premiere', tag: 'PR_VIDEO', title: 'Premiere & Video', description: 'High-end graphics and cinematic grading blueprints.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', accent: 'text-red-600', icon: icons.premiere, assets: [{ type: 'Tokyo Graphics', folders: '1', files: '1' }, { type: 'Color Grade LUTs', folders: '12', files: '150+' }, { type: 'Transitions Pack', folders: '5', files: '40+' }] },
        { id: 'motion-ae', tag: 'AE_ARCHIVE', title: 'After Effects Archive', description: 'Kinetic motion presets and cinematic HUD triggers.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', accent: 'text-orange-600', icon: icons.aftereffects, assets: [{ type: 'Cyberpunk V3', folders: '1', files: '1' }, { type: 'HUD 2.0 Archive', folders: '1', files: '2' }, { type: 'Infinity Tool V3', folders: '1', files: '3' }, { type: 'Motion Pro Glitch', folders: '1', files: '1' }] },
        { id: 'print-id', tag: 'ID_COLLECTION', title: 'InDesign Collection', description: 'Professional editorial and layout blueprints.', color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100', accent: 'text-slate-600', icon: icons.indesign, assets: [{ type: 'Magazine Library', folders: '21', files: '100+' }, { type: 'Newspaper Sets', folders: '5', files: '25+' }, { type: 'Menu Protocols', folders: '1', files: '25+' }] },
        { id: 'powerpoint', tag: 'PP_MASTERY', title: 'PowerPoint Mastery', description: 'Strategic deck logic and persuasive slide systems.', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100', accent: 'text-orange-500', icon: icons.powerpoint, assets: [{ type: 'Corporate Decks', folders: '10', files: '300+' }, { type: 'Student Layouts', folders: '8', files: '200+' }, { type: 'Infographic Slides', folders: '15', files: '500+' }] }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white pb-40 overflow-x-hidden" suppressHydrationWarning>
            
            {/* extraordinary Hero with Parallax Text */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 bg-white overflow-hidden">
                {/* Background Digital Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                </div>

                <motion.div 
                    style={{ opacity: heroOpacity }}
                    className="max-w-7xl mx-auto relative z-10 text-center"
                >
                    <div className="flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 mb-16"
                        >
                            <span className="px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.5em] uppercase">Status: Vault_Active</span>
                            <div className="h-px w-24 bg-slate-200"></div>
                            <span className="text-[11px] font-mono text-slate-400 font-bold tracking-widest">BUILD_V_8.0.4</span>
                        </motion.div>
                        
                        <h1 className="text-[15vw] lg:text-[14rem] font-black text-slate-900 tracking-tighter leading-[0.7] mb-12 uppercase select-none">
                            POWER <br/>
                            <span className="text-slate-100">VAULT.</span>
                        </h1>
                        
                        <p className="text-3xl lg:text-5xl text-slate-400 font-medium leading-tight max-w-4xl tracking-tight">
                            We move beyond simple resources. <br/>
                            We provide the <span className="text-slate-900 font-black italic underline decoration-[12px] underline-offset-[20px]">leverage</span> to dominate.
                        </p>
                    </div>
                </motion.div>

                {/* Animated Background Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[150px] opacity-40 animate-pulse -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-[150px] opacity-40 animate-pulse delay-1000 -z-10"></div>
            </section>

            {/* Premium Interactive Dock (The Control Hub) */}
            <nav className="sticky top-[73px] z-40 bg-white/80 backdrop-blur-3xl border-b border-slate-200 py-6 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar py-2">
                    <div className="flex items-center gap-4 min-w-max px-4">
                        {categories.map((cat, i) => (
                            <motion.a
                                key={i}
                                href={`#${cat.id}`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ y: -4 }}
                                className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-900 transition-all"
                            >
                                <div className={`text-xl ${cat.color} filter group-hover:drop-shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                                    {cat.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-none">{cat.title.split(' ')[0]}</span>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.1em] leading-none mt-1">{cat.tag.split('_')[0]}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Archive Content */}
            <main className="max-w-6xl mx-auto px-6 py-40">
                {categories.map((category, index) => (
                    <DomainCard key={index} category={category} />
                ))}
            </main>

            {/* extraordinary Creative Footer */}
            <section className="py-60 px-6 relative overflow-hidden bg-[#050505] text-white rounded-[6rem] mx-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_70%)] opacity-10"></div>
                
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-5xl mb-16 mx-auto animate-bounce">🧬</div>
                        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.7] mb-16 uppercase">
                            SYSTEM <br/>
                            <span className="text-neutral-700 italic">EVOLVING.</span>
                        </h2>
                        <p className="text-2xl text-neutral-400 font-medium leading-relaxed max-w-3xl mx-auto mb-20">
                            The Vault is never complete. We are currently engineering the next phase of digital synthesis.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-20">
                            {['SMART_NODES', 'AI_ARCHIVE', 'MEGA_SYNTH', 'LIVE_SYNC'].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse"></div>
                                    <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
