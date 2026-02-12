'use client';

export default function CreativeChallenges() {
  return (
    <div className="w-full">
      {/* Main Challenge Area - Full Width since Leaderboard is removed */}
      <div className="bg-neutral-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">Weekly Challenge</span>
              <span className="flex items-center gap-1 text-neutral-400 text-sm font-mono">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ends in 2d 14h
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-4">Reimagine the Coffee Cup</h2>
            <p className="text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Design a sustainable, futuristic coffee cup that solves the spill problem while looking like a piece of art. Use any medium: Sketch, 3D, or AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-neutral-900 px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-colors shadow-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Download Brief
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                View Inspiration Gallery
              </button>
            </div>
          </div>
          
          {/* Inspiration Preview (Static, No Login) */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">Community Ideas</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                             </svg>
                        </div>
                        <div className="text-sm">
                            <div className="font-bold text-white">Self-Heating Mug</div>
                            <div className="text-neutral-500 text-xs">Concept by Alex</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                             </svg>
                        </div>
                        <div className="text-sm">
                            <div className="font-bold text-white">Zero-G Cup</div>
                            <div className="text-neutral-500 text-xs">Sketch by Sarah</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
