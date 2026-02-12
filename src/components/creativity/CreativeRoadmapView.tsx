'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface RoadmapStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
  iconClassName?: string;
}

interface RoadmapContent {
  id: number;
  title: string;
  category: string;
  tags?: string[];
  description: string;
  backgroundGradient: string;
  accentColor: string;
  steps: RoadmapStep[];
}

// --- Interactive Components ---

const HslRgbComparator = () => {
  const [mode, setMode] = useState<'hsl' | 'rgb'>('hsl');
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(80);
  const [lightness, setLightness] = useState(50);
  const [red, setRed] = useState(34);
  const [green, setGreen] = useState(139);
  const [blue, setBlue] = useState(230);

  // Simple conversion for display (not perfect bidirectional sync for this demo to avoid loops)
  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       
       <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
             <h4 className="font-bold text-lg">Color Model Comparator</h4>
             <div className="flex bg-neutral-100 rounded-lg p-1">
                <button onClick={() => setMode('hsl')} className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${mode === 'hsl' ? 'bg-white shadow-sm text-blue-600' : 'text-neutral-500'}`}>HSL</button>
                <button onClick={() => setMode('rgb')} className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${mode === 'rgb' ? 'bg-white shadow-sm text-blue-600' : 'text-neutral-500'}`}>RGB</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
             <div className="space-y-6">
                {mode === 'hsl' ? (
                   <>
                      <div className="space-y-4">
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Hue <span>{hue}°</span></label>
                            <input type="range" min="0" max="360" value={hue} onChange={e => setHue(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer" style={{background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'}} />
                         </div>
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Saturation <span>{saturation}%</span></label>
                            <input type="range" min="0" max="100" value={saturation} onChange={e => setSaturation(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-200" />
                         </div>
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Lightness <span>{lightness}%</span></label>
                            <input type="range" min="0" max="100" value={lightness} onChange={e => setLightness(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-200" />
                         </div>
                      </div>
                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                         <h5 className="text-xs font-bold text-blue-800 mb-1 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Key Insight
                         </h5>
                         <p className="text-xs text-blue-700 leading-relaxed">
                            HSL is intuitive. Want it brighter? Increase Lightness. More vivid? Increase Saturation. The Hue stays constant.
                         </p>
                      </div>
                   </>
                ) : (
                   <>
                      <div className="space-y-4">
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Red <span>{red}</span></label>
                            <input type="range" min="0" max="255" value={red} onChange={e => setRed(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-red-100 accent-red-500" />
                         </div>
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Green <span>{green}</span></label>
                            <input type="range" min="0" max="255" value={green} onChange={e => setGreen(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-green-100 accent-green-500" />
                         </div>
                         <div>
                            <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between">Blue <span>{blue}</span></label>
                            <input type="range" min="0" max="255" value={blue} onChange={e => setBlue(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-blue-100 accent-blue-500" />
                         </div>
                      </div>
                      <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                         <h5 className="text-xs font-bold text-orange-800 mb-1 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            The RGB Trap
                         </h5>
                         <p className="text-xs text-orange-700 leading-relaxed">
                            Try making this color "lighter" using RGB. You have to adjust ALL three sliders carefully. In HSL, it's just one slider.
                         </p>
                      </div>
                   </>
                )}
             </div>

             <div className="flex flex-col items-center justify-center h-full min-h-[200px] bg-neutral-50 rounded-xl border border-neutral-200 relative">
                <div className="absolute -left-4 top-1/2 w-4 border-t border-dashed border-neutral-300 hidden md:block"></div>
                
                <div 
                   className="w-32 h-32 rounded-full shadow-lg transition-colors duration-200 mb-4 flex items-center justify-center text-white font-mono text-xs font-bold"
                   style={{ background: mode === 'hsl' ? hslColor : rgbColor }}
                >
                   {mode === 'hsl' ? 'HSL Mode' : 'RGB Mode'}
                </div>
                <div className="font-mono text-xs bg-white px-3 py-1 rounded border border-neutral-200 text-neutral-600">
                   {mode === 'hsl' ? hslColor : rgbColor}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const Rule603010Playground = () => {
  const [neutral, setNeutral] = useState('#f5f5f5');
  const [brand, setBrand] = useState('#3b82f6');
  const [accent, setAccent] = useState('#ef4444');

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
                <h4 className="font-bold text-lg">60-30-10 Composition</h4>
                <div className="text-[10px] font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-500">
                    BALANCE_CHECK
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div>
                    <label className="text-xs font-bold text-neutral-500 mb-1 block">60% Neutral (Surface)</label>
                    <div className="flex gap-2">
                        <input type="color" value={neutral} onChange={e => setNeutral(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-none" />
                        <span className="text-xs font-mono self-center text-neutral-400">{neutral}</span>
                    </div>
                </div>
                <div>
                    <label className="text-xs font-bold text-neutral-500 mb-1 block">30% Brand (Primary)</label>
                    <div className="flex gap-2">
                        <input type="color" value={brand} onChange={e => setBrand(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-none" />
                        <span className="text-xs font-mono self-center text-neutral-400">{brand}</span>
                    </div>
                </div>
                <div>
                    <label className="text-xs font-bold text-neutral-500 mb-1 block">10% Accent (Call-to-Action)</label>
                    <div className="flex gap-2">
                        <input type="color" value={accent} onChange={e => setAccent(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-none" />
                        <span className="text-xs font-mono self-center text-neutral-400">{accent}</span>
                    </div>
                </div>
            </div>

            {/* Mock Landing Page */}
            <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-64">
                 {/* Sidebar / Nav */}
                 <div className="w-full md:w-16 flex-shrink-0 flex md:flex-col items-center p-3 gap-4 border-b md:border-b-0 md:border-r border-black/5" style={{ background: neutral }}>
                     <div className="w-8 h-8 rounded-lg" style={{ background: brand }}></div>
                     <div className="w-6 h-6 rounded-full bg-black/10"></div>
                     <div className="w-6 h-6 rounded-full bg-black/10"></div>
                 </div>

                 {/* Main Content */}
                 <div className="flex-1 p-6 flex flex-col justify-center items-start" style={{ background: '#fff' }}>
                     <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: brand }}>New Feature</div>
                     <h3 className="text-2xl font-bold mb-3 text-neutral-800">Balance Your UI</h3>
                     <p className="text-sm text-neutral-500 mb-6 max-w-xs">
                        See how the distribution of color creates hierarchy. The eye is drawn to the accent color immediately.
                     </p>
                     <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg text-xs font-bold text-white shadow-md transition-transform hover:scale-105" style={{ background: accent }}>
                            Get Started
                        </button>
                        <button className="px-4 py-2 rounded-lg text-xs font-bold bg-transparent border transition-colors" style={{ borderColor: brand, color: brand }}>
                            Learn More
                        </button>
                     </div>
                 </div>

                 {/* Hero Image Area */}
                 <div className="w-full md:w-1/3 p-6 flex items-center justify-center relative overflow-hidden" style={{ background: `${neutral}e6` }}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(135deg, ${brand} 25%, transparent 25%), linear-gradient(225deg, ${brand} 25%, transparent 25%), linear-gradient(45deg, ${brand} 25%, transparent 25%), linear-gradient(315deg, ${brand} 25%, transparent 25%)`, backgroundSize: '20px 20px' }}></div>
                      <div className="w-24 h-24 rounded-2xl shadow-xl transform rotate-12 relative z-10" style={{ background: brand }}></div>
                      <div className="w-12 h-12 rounded-full shadow-lg absolute bottom-8 right-8 z-20 flex items-center justify-center text-white font-bold text-lg" style={{ background: accent }}>!</div>
                 </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg">
                <span className="font-bold text-black">Tip:</span>
                Use the neutral color for backgrounds and layout structure. Use brand color for cards, headers, and secondary actions. Save the accent color strictly for the "Buy Now" or "Sign Up" button.
            </div>
        </div>
    </div>
  );
};

const SemanticVariablesDemo = () => {
    const [activeTheme, setActiveTheme] = useState<'default' | 'forest' | 'sunset'>('default');

    const themes = {
        default: { primary: '#3b82f6', surface: '#eff6ff', text: '#1e3a8a' },
        forest: { primary: '#10b981', surface: '#ecfdf5', text: '#064e3b' },
        sunset: { primary: '#f97316', surface: '#fff7ed', text: '#7c2d12' }
    };

    const current = themes[activeTheme];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative">
             <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
             </div>

             <h4 className="font-bold text-lg mb-4 border-b pb-2">Semantic Token System</h4>

             <div className="flex flex-col md:flex-row gap-8">
                 <div className="w-full md:w-1/3 space-y-4">
                     <label className="text-xs font-bold uppercase text-neutral-500">Select Theme Context</label>
                     <div className="space-y-2">
                        {Object.keys(themes).map(theme => (
                            <button 
                                key={theme}
                                onClick={() => setActiveTheme(theme as any)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-between transition-all ${activeTheme === theme ? 'bg-neutral-900 text-white shadow-lg scale-105' : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'}`}
                            >
                                <span className="capitalize">{theme} Theme</span>
                                <div className="w-3 h-3 rounded-full" style={{ background: themes[theme as keyof typeof themes].primary }}></div>
                            </button>
                        ))}
                     </div>

                     <div className="bg-neutral-900 rounded-lg p-4 font-mono text-[10px] text-neutral-400 overflow-hidden">
                        <div className="text-purple-400">root <span className="text-white">{'{'}</span></div>
                        <div className="pl-4 text-neutral-300">--primary: <span className="text-green-400">{current.primary}</span>;</div>
                        <div className="pl-4 text-neutral-300">--surface: <span className="text-green-400">{current.surface}</span>;</div>
                        <div className="pl-4 text-neutral-300">--text-on-surface: <span className="text-green-400">{current.text}</span>;</div>
                        <div className="text-white">{'}'}</div>
                     </div>
                 </div>

                 <div className="flex-1 border-l border-dashed border-neutral-200 md:pl-8 flex flex-col justify-center">
                     <div className="relative">
                         <div className="absolute -left-8 top-1/2 w-8 border-t border-dashed border-neutral-300 hidden md:block"></div>
                         
                         <div className="rounded-xl p-6 shadow-sm transition-colors duration-500" style={{ background: current.surface }}>
                             <div className="flex items-start justify-between mb-4">
                                 <div className="p-2 rounded-lg bg-white shadow-sm">
                                     <svg className="w-6 h-6 transition-colors duration-500" style={{ color: current.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                 </div>
                                 <span className="text-xs font-bold uppercase tracking-wider opacity-50">Card Component</span>
                             </div>
                             <h3 className="text-xl font-bold mb-2 transition-colors duration-500" style={{ color: current.text }}>Semantic Power</h3>
                             <p className="text-sm mb-6 opacity-80" style={{ color: current.text }}>
                                 This component uses variables. It doesn't know what "blue" or "green" is. It only knows "--primary".
                             </p>
                             <button className="w-full py-3 rounded-lg font-bold text-white shadow-md transition-all duration-500 transform hover:scale-[1.02]" style={{ background: current.primary }}>
                                 Primary Action
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

const A11yContrastChecker = () => {
    const [bg, setBg] = useState('#ffffff');
    const [fg, setFg] = useState('#6b7280');

    // Helper to get relative luminance
    const getLuminance = (hex: string) => {
        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >>  8) & 0xff;
        const b = (rgb >>  0) & 0xff;
        
        const [lr, lg, lb] = [r, g, b].map(c => {
            const v = c / 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
    };

    const l1 = getLuminance(bg);
    const l2 = getLuminance(fg);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const score = ratio.toFixed(2);
    
    const isAA = ratio >= 4.5;
    const isAAA = ratio >= 7;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900">
             <h4 className="font-bold text-lg mb-4 border-b pb-2 flex justify-between items-center">
                Contrast Checker
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${isAA ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    Ratio: {score}:1
                </span>
             </h4>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                     <div>
                         <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block">Background Color</label>
                         <div className="flex gap-2">
                             <input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer border-neutral-200" />
                         </div>
                     </div>
                     <div>
                         <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block">Text Color</label>
                         <div className="flex gap-2">
                             <input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer border-neutral-200" />
                         </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4 mt-4">
                         <div className={`p-3 rounded-lg border text-center ${isAA ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                             <div className={`text-2xl font-bold mb-1 ${isAA ? 'text-green-600' : 'text-red-500'}`}>{isAA ? 'Pass' : 'Fail'}</div>
                             <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">AA Standard (4.5:1)</div>
                         </div>
                         <div className={`p-3 rounded-lg border text-center ${isAAA ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                             <div className={`text-2xl font-bold mb-1 ${isAAA ? 'text-green-600' : 'text-red-500'}`}>{isAAA ? 'Pass' : 'Fail'}</div>
                             <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">AAA Standard (7:1)</div>
                         </div>
                     </div>
                 </div>

                 <div className="flex items-center justify-center rounded-xl border border-neutral-200 relative overflow-hidden transition-colors duration-200" style={{ background: bg }}>
                      <div className="text-center p-6">
                          <h3 className="text-2xl font-bold mb-2 transition-colors duration-200" style={{ color: fg }}>Hello World</h3>
                          <p className="text-sm transition-colors duration-200" style={{ color: fg }}>
                              This is how your text looks against the background. 
                              {isAA ? ' Great job! This is readable.' : ' Warning: This may be hard to read.'}
                          </p>
                      </div>
                 </div>
             </div>
             
             <div className="mt-6 text-xs text-neutral-500">
                <span className="font-bold text-black">Did you know?</span> WCAG 2.0 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
             </div>
        </div>
    );
};

const HslGenerator = () => {
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(80);
  const [lightness, setLightness] = useState(50);
  
  const primary = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const primaryLight = `hsl(${hue}, ${saturation}%, ${Math.min(lightness + 40, 95)}%)`;
  const primaryDark = `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 30, 10)}%)`;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
          <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
            <h4 className="font-bold text-lg">HSL Generator</h4>
            <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500">INTERACTIVE</span>
                <span className="px-2 py-1 rounded bg-blue-100 text-[10px] font-mono font-bold text-blue-600">LIVE PREVIEW</span>
            </div>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
               <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-neutral-500">Hue <span className="text-neutral-300 ml-1">---</span></label>
                    <span className="text-xs font-mono text-neutral-400">{hue}°</span>
                 </div>
                 <input type="range" min="0" max="360" value={hue} onChange={e => setHue(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer" style={{background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'}} />
               </div>
               
               <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-neutral-500">Saturation <span className="text-neutral-300 ml-1">---</span></label>
                    <span className="text-xs font-mono text-neutral-400">{saturation}%</span>
                 </div>
                 <input type="range" min="0" max="100" value={saturation} onChange={e => setSaturation(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-100" />
               </div>

               <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-neutral-500">Lightness <span className="text-neutral-300 ml-1">---</span></label>
                    <span className="text-xs font-mono text-neutral-400">{lightness}%</span>
                 </div>
                 <input type="range" min="0" max="100" value={lightness} onChange={e => setLightness(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-100" />
               </div>
               
               <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 font-mono text-xs text-green-400 relative">
                  <div className="absolute -right-4 top-1/2 w-4 border-t border-dashed border-neutral-300 hidden md:block"></div>
                  color: {primary};
               </div>
            </div>
    
            {/* Mock UI */}
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 relative flex flex-col justify-between">
               {/* Dotted Connector */}
               <div className="absolute -left-4 top-1/2 w-4 border-t border-dashed border-neutral-300 hidden md:block"></div>

               <div className="flex gap-2 mb-6">
                  <div className="flex-1 aspect-square rounded-lg shadow-sm flex flex-col items-center justify-center text-[10px] font-bold text-white transition-colors" style={{ background: primary }}>
                    <span>PRI</span>
                    <span className="opacity-50 font-mono">{lightness}%</span>
                  </div>
                  <div className="flex-1 aspect-square rounded-lg shadow-sm flex flex-col items-center justify-center text-[10px] font-bold text-neutral-600 transition-colors" style={{ background: primaryLight }}>
                    <span>LGT</span>
                    <span className="opacity-50 font-mono">95%</span>
                  </div>
                  <div className="flex-1 aspect-square rounded-lg shadow-sm flex flex-col items-center justify-center text-[10px] font-bold text-white transition-colors" style={{ background: primaryDark }}>
                    <span>DRK</span>
                    <span className="opacity-50 font-mono">20%</span>
                  </div>
               </div>

               <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors" style={{background: primary}}>
                        JD
                      </div>
                      <div className="flex-1">
                         <div className="h-2 w-24 bg-neutral-100 rounded mb-1.5"></div>
                         <div className="h-2 w-16 bg-neutral-100 rounded"></div>
                      </div>
                   </div>
                   <button className="w-full py-2.5 rounded-lg text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]" style={{background: primary, boxShadow: `0 4px 12px ${primary}40`}}>
                      Follow User
                   </button>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
};

const WebTypographyDemo = () => {
    const [scale, setScale] = useState(1.25);
    
    const baseSize = 16;
    const h1 = Math.round(baseSize * Math.pow(scale, 4));
    const h2 = Math.round(baseSize * Math.pow(scale, 3));
    const h3 = Math.round(baseSize * Math.pow(scale, 2));
    const p = baseSize;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            <h4 className="font-bold text-lg mb-4 border-b pb-2 relative z-10">Modular Scale Tester</h4>
            <div className="mb-6 relative z-10">
                <label className="text-xs font-bold uppercase text-neutral-500 block mb-2">Scale Ratio: {scale}</label>
                <input type="range" min="1.05" max="1.6" step="0.05" value={scale} onChange={e => setScale(Number(e.target.value))} className="w-full accent-black" />
                <div className="flex justify-between text-xs text-neutral-400 mt-1">
                    <span>Minor Second (1.067)</span>
                    <span>Golden Ratio (1.618)</span>
                </div>
            </div>

            <div className="space-y-6 relative z-10">
                <div className="relative group">
                    <div className="absolute -left-6 top-1/2 w-4 border-t border-dashed border-red-300"></div>
                    <span className="text-xs text-red-400 absolute -left-12 top-1/2 -translate-y-1/2 font-mono">{h1}px</span>
                    <h1 style={{ fontSize: `${h1}px`, lineHeight: 1.1, fontWeight: 800 }}>Visual Hierarchy</h1>
                </div>
                <div className="relative group pl-4 border-l border-neutral-100">
                     <div className="absolute -left-4 top-1/2 w-4 border-t border-dashed border-blue-300"></div>
                     <span className="text-xs text-blue-400 absolute -left-12 top-1/2 -translate-y-1/2 font-mono">{h2}px</span>
                    <h2 style={{ fontSize: `${h2}px`, lineHeight: 1.2, fontWeight: 700 }}>Subheading Level</h2>
                </div>
                <div className="relative group pl-8 border-l border-neutral-100">
                    <span className="text-xs text-neutral-400 block mb-1">Body - {p}px</span>
                    <p style={{ fontSize: `${p}px`, lineHeight: 1.6 }} className="text-neutral-600 max-w-md">
                        Responsive web typography relies on fluid units and modular scales. Adjusting the ratio dramatically changes the feel of the content.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FlowEnvironmentChecklist = () => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900">
            <h4 className="font-bold text-lg mb-4 text-green-600 font-mono">&gt; init_workspace_protocol</h4>
            <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-green-500/50 transition-colors cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border-2 border-neutral-400 group-hover:border-green-500 group-hover:bg-green-500/20"></div>
                    <span className="text-neutral-600 group-hover:text-black">Notification_Killer.exe (Do Not Disturb)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500/50 transition-colors cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border-2 border-neutral-400 group-hover:border-blue-500 group-hover:bg-blue-500/20"></div>
                    <span className="text-neutral-600 group-hover:text-black">Theme_Light_High_Contrast (Visual Comfort)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-purple-500/50 transition-colors cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border-2 border-neutral-400 group-hover:border-purple-500 group-hover:bg-purple-500/20"></div>
                    <span className="text-neutral-600 group-hover:text-black">Music_LoFi_Beats (Binaural Focus)</span>
                </div>
            </div>
        </div>
    );
};

const NeuroLoopVisualizer = () => {
  const [phase, setPhase] = useState(0);
  const phases = [
    { name: 'Struggle', chemical: 'Norepinephrine', color: 'bg-orange-500', desc: 'Loading phase. High tension. Brain is gathering data.' },
    { name: 'Release', chemical: 'Nitric Oxide', color: 'bg-blue-400', desc: 'Letting go. Tension drops. The "Aha" moment prep.' },
    { name: 'Flow', chemical: 'Dopamine + Endorphins', color: 'bg-purple-600', desc: 'The Zone. Pattern recognition fires. Time dilation.' },
    { name: 'Recovery', chemical: 'Serotonin', color: 'bg-green-500', desc: 'Consolidation. Memory storage. Rest.' }
  ];
  
  const active = phases[phase];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <h4 className="font-bold text-lg">The Flow Cycle</h4>
            <div className="text-xs font-mono text-neutral-500">Step {phase + 1}/4</div>
        </div>

        <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
                 {/* Circular Progress */}
                 <svg className="w-full h-full transform -rotate-90">
                     <circle cx="96" cy="96" r="88" fill="none" stroke="#e5e5e5" strokeWidth="12" />
                     <circle cx="96" cy="96" r="88" fill="none" stroke={active.color.replace('bg-', 'text-')} strokeWidth="12" strokeDasharray="553" strokeDashoffset={553 - (553 * (phase + 1) / 4)} className="transition-all duration-500 ease-out" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                     <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${active.color.replace('bg-', 'text-')}`}>{active.name}</div>
                     <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">{active.chemical}</div>
                 </div>
            </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-4 mb-6 border-l-4 border-transparent transition-colors duration-300" style={{ borderColor: active.color.replace('bg-', '') }}>
            <p className="text-sm text-neutral-600">{active.desc}</p>
        </div>

        <button 
            onClick={() => setPhase((p) => (p + 1) % 4)}
            className="w-full py-3 rounded-lg font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
        >
            Next Phase
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
    </div>
  );
};

const TddCycleDemo = () => {
    const [step, setStep] = useState<'red' | 'green' | 'refactor'>('red');
    
    const content = {
        red: { title: 'Red', action: 'Write a failing test', code: 'expect(sum(1, 2)).toBe(3); // Error: sum is not defined', color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
        green: { title: 'Green', action: 'Make it pass', code: 'const sum = (a, b) => a + b; // Pass', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
        refactor: { title: 'Refactor', action: 'Improve code', code: 'const sum = (...args) => args.reduce((a, b) => a + b, 0);', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' }
    };

    const current = content[step];

    const next = () => {
        if (step === 'red') setStep('green');
        else if (step === 'green') setStep('refactor');
        else setStep('red');
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg">TDD Cycle</h4>
                <div className="flex gap-2">
                    <div className={`w-3 h-3 rounded-full ${step === 'red' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-neutral-200'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${step === 'green' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-neutral-200'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${step === 'refactor' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-neutral-200'}`}></div>
                </div>
            </div>

            <div className={`p-4 rounded-xl border ${current.bg} mb-6 transition-all duration-300`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${current.color}`}>{current.title} Phase</div>
                <div className="font-mono text-sm text-neutral-600 mb-4">{current.action}</div>
                <div className="bg-neutral-900 p-3 rounded-lg font-mono text-xs text-neutral-300 border border-neutral-800">
                    {current.code}
                </div>
            </div>

            <button onClick={next} className={`w-full py-3 rounded-lg font-bold transition-all transform active:scale-95 ${step === 'red' ? 'bg-red-600 hover:bg-red-700' : step === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                {step === 'red' ? 'Implement Solution' : step === 'green' ? 'Refactor Code' : 'New Feature (Fail)'}
            </button>
        </div>
    );
};

const FluidTypeScale = () => {
    const [rootSize, setRootSize] = useState(16);
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900">
            <h4 className="font-bold text-lg mb-4">Relative Units (rem)</h4>
            
            <div className="mb-8">
                <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between mb-2">
                    Root Font Size (User Preference)
                    <span>{rootSize}px</span>
                </label>
                <input type="range" min="12" max="24" value={rootSize} onChange={e => setRootSize(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-200 accent-black" />
                <p className="text-xs text-neutral-400 mt-2">Drag to simulate a user changing their browser font settings.</p>
            </div>

            <div className="space-y-4">
                <div className="flex items-baseline gap-4 border-b border-neutral-100 pb-2">
                    <span className="w-16 font-mono text-xs text-purple-600 font-bold">1rem</span>
                    <span className="text-xs text-neutral-400 w-12">= {rootSize}px</span>
                    <p style={{ fontSize: `${rootSize}px` }} className="truncate">The quick brown fox</p>
                </div>
                <div className="flex items-baseline gap-4 border-b border-neutral-100 pb-2">
                    <span className="w-16 font-mono text-xs text-purple-600 font-bold">1.5rem</span>
                    <span className="text-xs text-neutral-400 w-12">= {rootSize * 1.5}px</span>
                    <p style={{ fontSize: `${rootSize * 1.5}px` }} className="truncate">The quick brown fox</p>
                </div>
                <div className="flex items-baseline gap-4">
                    <span className="w-16 font-mono text-xs text-neutral-400 font-bold">16px</span>
                    <span className="text-xs text-neutral-400 w-12">Fixed</span>
                    <p style={{ fontSize: '16px' }} className="truncate text-neutral-400">The quick brown fox (Ignored user)</p>
                </div>
            </div>
        </div>
    );
};

const ModularScaleDemo = () => {
    const [ratio, setRatio] = useState(1.25);
    const ratios = [
        { name: 'Major Third', val: 1.25 },
        { name: 'Perfect Fourth', val: 1.333 },
        { name: 'Golden Ratio', val: 1.618 }
    ];

    const base = 16;
    const h3 = base * ratio;
    const h2 = h3 * ratio;
    const h1 = h2 * ratio;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900">
             <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg">Modular Scale</h4>
                <select 
                    value={ratio} 
                    onChange={e => setRatio(Number(e.target.value))}
                    className="bg-neutral-100 border-none text-xs font-bold rounded-lg px-3 py-1 cursor-pointer"
                >
                    {ratios.map(r => <option key={r.name} value={r.val}>{r.name} ({r.val})</option>)}
                </select>
             </div>

             <div className="space-y-6 relative">
                 <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-100"></div>
                 
                 <div className="pl-4 relative">
                     <div className="text-[10px] text-neutral-400 font-mono mb-1">h1 ({h1.toFixed(1)}px)</div>
                     <h1 style={{ fontSize: `${h1}px` }} className="font-bold leading-none">Heading 1</h1>
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500"></div>
                 </div>

                 <div className="pl-4 relative">
                     <div className="text-[10px] text-neutral-400 font-mono mb-1">h2 ({h2.toFixed(1)}px)</div>
                     <h2 style={{ fontSize: `${h2}px` }} className="font-bold leading-none">Heading 2</h2>
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                 </div>

                 <div className="pl-4 relative">
                     <div className="text-[10px] text-neutral-400 font-mono mb-1">h3 ({h3.toFixed(1)}px)</div>
                     <h3 style={{ fontSize: `${h3}px` }} className="font-bold leading-none">Heading 3</h3>
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-300"></div>
                 </div>

                 <div className="pl-4 relative">
                     <div className="text-[10px] text-neutral-400 font-mono mb-1">Body ({base}px)</div>
                     <p style={{ fontSize: `${base}px` }} className="leading-relaxed text-neutral-600">
                        The body text sets the rhythm. All other sizes are derived from this base using the ratio.
                     </p>
                     <div className="absolute left-0 top-2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-300"></div>
                 </div>
             </div>
        </div>
    );
};

const VerticalRhythmPlayground = () => {
    const [lineHeight, setLineHeight] = useState(1.5);
    const [showGrid, setShowGrid] = useState(true);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 mt-6 text-neutral-900 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg">Vertical Rhythm</h4>
                <button onClick={() => setShowGrid(!showGrid)} className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${showGrid ? 'bg-blue-100 text-blue-700' : 'bg-neutral-100 text-neutral-500'}`}>
                    {showGrid ? 'Grid On' : 'Grid Off'}
                </button>
            </div>

            <div className="mb-6">
                <label className="text-xs font-bold uppercase text-neutral-500 flex justify-between mb-2">
                    Line Height
                    <span>{lineHeight}</span>
                </label>
                <input type="range" min="1" max="2.5" step="0.1" value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-200 accent-blue-500" />
            </div>

            <div className="relative border border-neutral-200 rounded-lg h-48 overflow-hidden">
                {showGrid && (
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to bottom, #e0f2fe 1px, transparent 1px)', backgroundSize: '100% 24px' }}></div>
                )}
                
                <div className="p-4" style={{ lineHeight: lineHeight }}>
                    <p className="text-sm">
                        Good typography isn't just about the font you choose. It's about the space between the lines.
                        A consistent vertical rhythm helps the reader's eye travel across the page.
                        Align your line-height to a baseline grid (e.g., 24px) for professional results.
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- Data ---

const ROADMAPS: Record<string, RoadmapContent> = {
  "3": { // Color Theory
    id: 3,
    title: "UI Color Architecture",
    category: "System Design",
    tags: ["HSL", "Accessibility", "Design Tokens", "Theming"],
    description: "Master the engineering of color for digital products. From HSL manipulation to accessible contrast systems.",
    backgroundGradient: "from-blue-50 to-indigo-50",
    accentColor: "bg-blue-600",
    steps: [
      {
        title: "HSL vs RGB",
        subtitle: "The Developer's Palette",
        description: "Why use Hex codes when you can program color? Learn why HSL (Hue, Saturation, Lightness) is superior for creating dynamic color systems and hover states programmatically.",
        icon: <span className="font-mono font-bold text-xs whitespace-nowrap">hsl()</span>,
        iconClassName: "w-16 h-10",
        content: <HslRgbComparator />
      },
      {
        title: "The 60-30-10 Rule",
        subtitle: "UI Composition",
        description: "60% Neutral (Background/Surface), 30% Brand (Primary Actions), 10% Accent (Highlights/Alerts). This creates hierarchy and prevents visual fatigue.",
        icon: <div className="flex w-6 h-6 rounded border border-current overflow-hidden"><div className="w-[60%] bg-current opacity-20"></div><div className="w-[30%] bg-current opacity-60"></div><div className="w-[10%] bg-current"></div></div>,
        content: <Rule603010Playground />
      },
      {
        title: "Semantic Variables",
        subtitle: "System Architecture",
        description: "Don't name colors 'Red' or 'Blue'. Name them 'Danger', 'Success', 'Surface-Overlay'. This creates a maintainable design token system.",
        icon: <span className="font-mono font-bold text-[10px] whitespace-nowrap">var(--)</span>,
        iconClassName: "w-16 h-10",
        content: <SemanticVariablesDemo />
      },
      {
        title: "Accessibility (a11y)",
        subtitle: "WCAG Compliance",
        description: "Beauty means nothing if it's invisible. Ensure your text-to-background contrast ratio meets AA (4.5:1) or AAA (7:1) standards.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 5 8.268 7.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
        content: <A11yContrastChecker />
      }
    ]
  },
  "1": { // Flow State
    id: 1,
    title: "Developer Flow State",
    category: "Productivity Engineering",
    tags: ["Neuroscience", "Environment", "TDD", "Focus"],
    description: "Optimize your neural runtime environment. Techniques to achieve deep work and sustain high-velocity coding sessions.",
    backgroundGradient: "from-neutral-900 to-black",
    accentColor: "bg-green-500",
    steps: [
      {
        title: "The Neuro-Loop",
        subtitle: "Dopamine & Norepinephrine",
        description: "Flow is a biological hack. It requires high stakes (norepinephrine) and pattern recognition (dopamine). For devs, this means challenging bugs + rapid feedback.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        content: <NeuroLoopVisualizer />
      },
      {
        title: "Environment Config",
        subtitle: "IDE & Workspace",
        description: "Your environment triggers your state. Learn to set up a 'Cockpit' workspace that signals your brain it's time to focus.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
        content: <FlowEnvironmentChecklist />
      },
      {
        title: "The Red-Green-Refactor",
        subtitle: "Micro-Flow Triggers",
        description: "TDD (Test Driven Development) is a flow machine. Write a failing test (Challenge), make it pass (Reward), refactor (Mastery).",
        icon: <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>,
        content: <TddCycleDemo />
      },
      {
        title: "Deep Work Blocks",
        subtitle: "Temporal Isolation",
        description: "Context switching destroys flow. Use 90-minute ultradian rhythm blocks to align with your brain's natural energy cycles.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      }
    ]
  },
  "4": { // Typography
    id: 4,
    title: "Modern Web Typography",
    category: "Frontend Design",
    tags: ["Fluid Type", "Modular Scale", "Vertical Rhythm", "Performance"],
    description: "Beyond font-family. Controlling vertical rhythm, fluid scaling, and loading performance for professional interfaces.",
    backgroundGradient: "from-slate-50 to-neutral-100",
    accentColor: "bg-black",
    steps: [
      {
        title: "Fluid Units",
        subtitle: "px vs rem vs em",
        description: "Stop using pixels. 'rem' respects user settings, 'em' compounds for components, and 'ch' is perfect for readable line lengths (60ch).",
        icon: <span className="font-serif font-bold italic">rem</span>,
        content: <FluidTypeScale />
      },
      {
        title: "Modular Scales",
        subtitle: "Mathematical Harmony",
        description: "Don't guess font sizes. Use a ratio (like 1.25 Major Third) to generate a harmonious scale for all headers and body text.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>,
        content: <ModularScaleDemo />
      },
      {
        title: "Vertical Rhythm",
        subtitle: "The Invisible Grid",
        description: "Line-height should be unitless (e.g., 1.5). Spacing should follow a base unit (e.g., 4px or 8px) to keep the page feeling structured.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
        content: <VerticalRhythmPlayground />
      },
      {
        title: "Performance",
        subtitle: "FOUT & FOIT",
        description: "Fonts are heavy. Use 'font-display: swap' to show text immediately and subset your fonts to remove unused glyphs.",
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      }
    ]
  }
};

export default function CreativeRoadmapView({ id }: { id: string }) {
  const data = ROADMAPS[id];
  const [activeStep, setActiveStep] = useState(0);

  if (!data) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-neutral-300 mb-4">404</h1>
                <p className="text-neutral-500 mb-8">Resource roadmap not found.</p>
                <Link href="/creativity" className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-colors">
                    Back to Creativity
                </Link>
            </div>
        </div>
    );
  }

  const isDark = false; // Flow state is dark mode

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'} font-sans`}>
      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md ${isDark ? 'bg-black/80 border-b border-white/10' : 'bg-white/80 border-b border-neutral-100'}`}>
        <Link href="/creativity" className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Exit Module
        </Link>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-neutral-100'}`}>{data.category}</span>
      </nav>

      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <header className="mb-20 text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              >
                  {data.title}
              </motion.h1>

              {data.tags && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                  >
                      {data.tags.map(tag => (
                          <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-white/10 text-neutral-300' : 'bg-neutral-100 text-neutral-600'}`}>
                              {tag}
                          </span>
                      ))}
                  </motion.div>
              )}

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-xl ${isDark ? 'text-neutral-400' : 'text-neutral-500'} leading-relaxed`}
              >
                  {data.description}
              </motion.p>
          </header>

          {/* Roadmap Layout */}
          <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden lg:block ${isDark ? 'bg-white/10' : 'bg-neutral-100'}`}></div>

              <div className="space-y-32">
                  {data.steps.map((step, index) => {
                      const isEven = index % 2 === 0;
                      return (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${isEven ? '' : 'lg:flex-row-reverse'}`}
                          >
                              {/* Connector Dot */}
                              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 hidden lg:block ${isDark ? 'bg-black border-white' : 'bg-white border-black'} z-10`}></div>

                              {/* Content Side */}
                              <div className="flex-1 text-center lg:text-left">
                                  <div className={`inline-flex items-center justify-center ${step.iconClassName || 'w-12 h-12'} rounded-xl mb-6 shadow-lg ${isDark ? 'bg-white/10 text-white' : 'bg-white text-black border border-neutral-100'}`}>
                                      {step.icon}
                                  </div>
                                  <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${data.accentColor.replace('bg-', 'text-')}`}>{step.subtitle}</h4>
                                  <p className={`text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{step.description}</p>
                              </div>

                              {/* Visual/Interactive Side */}
                              <div className="flex-1 w-full">
                                  {step.content ? (
                                      step.content
                                  ) : (
                                      <div className={`aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group ${isDark ? 'bg-white/5 border border-white/10' : 'bg-neutral-50 border border-neutral-100'}`}>
                                          <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent'}`}></div>
                                          
                                          {/* Dotted lines for technical feel */}
                                          <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-neutral-500/20"></div>
                                          <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-neutral-500/20"></div>

                                          <div className="text-center relative z-10">
                                              <div className="opacity-50 scale-150 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                                                  {step.icon}
                                              </div>
                                              <span className="block mt-2 text-xs font-bold uppercase tracking-widest opacity-40">Concept Visualization</span>
                                              <span className={`block mt-1 text-sm font-mono font-bold ${data.accentColor.replace('bg-', 'text-')}`}>{step.subtitle}</span>
                                          </div>
                                      </div>
                                  )}
                              </div>
                          </motion.div>
                      );
                  })}
              </div>
          </div>
          
          {/* Footer / Completion */}
          <div className="mt-32 text-center">
              <div className={`inline-block p-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-neutral-100'} mb-8`}>
                  <div className={`px-6 py-2 rounded-full text-sm font-bold ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      Module Complete
                  </div>
              </div>

          </div>

      </div>
    </div>
  );
}