'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CollaborationClient() {
  const benefits = [
    {
      title: "Student Opportunities",
      desc: "Every collaboration must provide new value, resources, or career paths for our student community.",
      icon: "🎓"
    },
    {
      title: "Shared Ecosystem",
      desc: "Tap into our community to share your expertise while building practical tools for student growth.",
      icon: "🤝"
    },
    {
      title: "Resource Synergy",
      desc: "Combine our design vaults and your specialized knowledge to build world-class learning assets.",
      icon: "🛠️"
    },
    {
      title: "Trusted Mission",
      desc: "Leverage the TBS authority to build high-integrity solutions that students can actually use.",
      icon: "🛡️"
    }
  ];

  const requirements = [
    {
      label: "Value Alignment",
      detail: "Your content or service must genuinely help students build skills or income."
    },
    {
      label: "Action Oriented",
      detail: "We don't do 'theory only'. Every collaboration must result in something practical."
    },
    {
      label: "Quality Standard",
      detail: "High-quality design, clear communication, and professional execution are non-negotiable."
    },
    {
      label: "Mutual Benefit",
      detail: "A clear win-win structure where both parties contribute and grow."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Collab_Protocol_v1.0</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8 uppercase">
              STUDENT <span className="text-slate-200 italic">FIRST.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
              We collaborate with creators and businesses for one primary reason: 
              <strong> to provide more value and opportunities for our students.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student First Promise Section */}
      <section className="py-20 px-6 bg-slate-900 text-white mx-6 rounded-[4rem]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl mb-8 mx-auto">🛡️</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-emerald-400">The Student-First Promise.</h2>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-0">
            Every partnership we form is audited for its impact on our students. 
            If a collaboration doesn&apos;t directly help you build skills, earn income, 
            or access better opportunities—we simply don&apos;t do it. 
            <span className="text-emerald-400 block mt-4 font-black uppercase tracking-wider">Your growth is our only metric for success.</span>
          </p>
        </div>
      </section>

      {/* Why Collab Section: Growth Synthesis */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 block">Synergy_Mapping</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                The Growth <br/>
                <span className="text-slate-200">Synthesis.</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 font-medium max-w-xs text-right">
              We don&apos;t just partner; we integrate. Our collaboration framework is built for compounding results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 bg-white hover:bg-slate-50 transition-colors relative overflow-hidden"
              >
                {/* Background Large Number */}
                <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-slate-50/50 group-hover:text-slate-100 transition-colors pointer-events-none select-none">
                  0{i+1}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-slate-900/10">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{benefit.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-md">{benefit.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-px bg-slate-900"></div>
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Active_Protocol</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-8">
              High-Value <br/>
              <span className="text-slate-300">Standards.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12">
              To ensure our students always receive top-tier guidance and tools, 
              we only partner with entities that meet our strict quality protocols.
            </p>
            <div className="space-y-6">
              {requirements.map((req, i) => (
                <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0">{i+1}</div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">{req.label}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{req.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative p-12 rounded-[3rem] bg-slate-900 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-emerald-400">Let&apos;s Talk Scale.</h3>
              <p className="text-white font-medium mb-12 leading-relaxed">
                Whether you are a solo creator, a small business, or a large entity—if you have a vision 
                that aligns with ours, we want to hear from you.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:collab@tbs.com" 
                  className="flex items-center justify-between w-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all group"
                >
                  <span className="text-sm font-black uppercase tracking-widest">Send Proposal</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </a>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] text-center mt-6">
                  Avg. Response Time: 48 Hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 px-6 text-center border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase">
            Not sure <br/>
            <span className="text-slate-200 italic">where to start?</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-12">
            Contact our team for a brief consultation on how we can create mutual growth for your brand and TBS.
          </p>
          <Link href="/contact" className="inline-block px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:bg-black transition-all">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
