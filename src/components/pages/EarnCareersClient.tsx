'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const cardTransition = {
  duration: 0.4,
  ease: 'easeOut',
};

export default function EarnCareersClient() {
  const zeroToIndependence = [
    {
      label: 'ZERO',
      color: 'bg-slate-900 text-emerald-100',
      description: 'No clarity. No focused skill. No online income yet.',
    },
    {
      label: 'SKILL',
      color: 'bg-emerald-50 text-emerald-900',
      description: 'One main digital skill with real projects behind it.',
    },
    {
      label: 'INCOME',
      color: 'bg-sky-50 text-sky-900',
      description: 'First ₹ / $ earned from your own work.',
    },
    {
      label: 'CAREER',
      color: 'bg-indigo-50 text-indigo-900',
      description: 'Stable, growing work: clients, job, or product.',
    },
    {
      label: 'FREEDOM',
      color: 'bg-amber-50 text-amber-900',
      description: 'Multiple income streams and location independence.',
    },
  ];

  const discoveryPillars = [
    {
      title: 'Interest energy',
      items: [
        'Which topics do you watch even when you are tired?',
        'What would you explore if you had 3 free hours daily for 30 days?',
        'Which kind of work makes you forget time?',
      ],
    },
    {
      title: 'Thinking style',
      items: [
        'Do you enjoy logic and systems or visuals and stories?',
        'Do you like fixing broken processes or imagining new ideas?',
        'Do you prefer writing, talking, or building things?',
      ],
    },
    {
      title: 'Reality and risk',
      items: [
        'How many hours per week can you invest?',
        'Do you have a laptop or only a phone? How strong is your internet?',
        'Do you prefer stable salary or are you okay with slow but big upside?',
      ],
    },
  ];

  const discoveryClusters = [
    {
      label: 'Maker / Builder',
      color: 'bg-emerald-50 text-emerald-900 border-emerald-100',
      fit: 'Web dev, AI engineering, cyber security, automation, startup builder.',
    },
    {
      label: 'Designer / Storyteller',
      color: 'bg-sky-50 text-sky-900 border-sky-100',
      fit: 'UI/UX, content creation, digital marketing, brand design.',
    },
    {
      label: 'Analyst / Thinker',
      color: 'bg-indigo-50 text-indigo-900 border-indigo-100',
      fit: 'Data science, research, strategy, operations.',
    },
    {
      label: 'Connector / Operator',
      color: 'bg-amber-50 text-amber-900 border-amber-100',
      fit: 'Client work, community, project management, sales.',
    },
  ];

  const mappingExamples = [
    {
      title: 'Web dev + freelancing',
      color: 'from-emerald-50 to-white',
      textColor: 'text-slate-800',
      titleColor: 'text-slate-900',
      stages: [
        'Learn HTML, CSS, JS and build 2–3 landing pages.',
        'Create 3–5 portfolio sites for local or imaginary clients.',
        'Offer landing page builds on freelance platforms and to local businesses.',
        'Raise prices and move into retainers, small SaaS, or long-term clients.',
      ],
    },
    {
      title: 'Content + creator business',
      color: 'from-sky-50 to-white',
      textColor: 'text-slate-800',
      titleColor: 'text-slate-900',
      stages: [
        'Post daily short content around one topic for 30–60 days.',
        'Turn best posts into longer content and simple lead magnets.',
        'Add small offers: templates, guides, audits, or 1:1 calls.',
        'Build memberships, courses, and collaborations around your brand.',
      ],
    },
    {
      title: 'AI + automation agency',
      color: 'from-slate-900 to-slate-950',
      textColor: 'text-slate-100',
      titleColor: 'text-emerald-100',
      stages: [
        'Learn how to connect AI tools with no-code automation platforms.',
        'Build 2–3 full workflows that save time for real use-cases.',
        'Sell “done-for-you automation setups” to small teams and founders.',
        'Scale into retainers and packaged automation products.',
      ],
    },
  ];

  const earningLevels = [
    {
      label: 'Beginner (0–3 months)',
      items: [
        'Micro tasks, caption writing, small design edits, basic research.',
        'Entry-level gigs on platforms to build speed and reliability.',
        'Goal: prove to yourself that you can earn online at all.',
      ],
    },
    {
      label: 'Intermediate (3–12 months)',
      items: [
        'One clear service offer with 3–5 strong projects behind it.',
        'Small but stable client base or part-time remote roles.',
        'Goal: consistent side income that supports your studies or life.',
      ],
    },
    {
      label: 'Advanced (12+ months)',
      items: [
        'Agencies, digital products, automation systems, niche authority.',
        'Multiple income streams built around one strong personal brand or skill.',
        'Goal: high leverage, freedom of time and location.',
      ],
    },
  ];

  const freelanceBlocks = [
    {
      title: 'Platforms and positioning',
      color: 'from-emerald-50 to-white',
      items: [
        'Choose one main platform first instead of chasing all of them.',
        'Position as “I help [niche] get [result] with [skill]”.',
        'Start narrow so you can stand out even as a beginner.',
      ],
    },
    {
      title: 'Profiles and proof',
      color: 'from-sky-50 to-white',
      items: [
        'Write a headline that talks about client results, not you.',
        'Use short, clear bullets in your profile about who you help and how.',
        'Show 3–5 projects with simple before/after explanations.',
      ],
    },
    {
      title: 'Proposals and trust',
      color: 'from-indigo-50 to-white',
      items: [
        'Open with one line that proves you read the brief.',
        'Share a tiny plan: “Step 1, Step 2, Step 3”.',
        'Offer a small paid test so the client feels low risk.',
      ],
    },
    {
      title: 'Pricing and retention',
      color: 'from-slate-900 to-slate-950',
      items: [
        'Start with fair starter pricing to get proof, then increase with each win.',
        'Offer basic, standard, and premium versions of the same service.',
        'Turn one-off projects into retainers and referrals by being proactive.',
      ],
    },
  ];

  const remoteBlocks = [
    {
      title: 'Job hunting system',
      items: [
        'Pick one target role like junior frontend dev or data analyst.',
        'Create a list of 30–50 target companies, not thousands.',
        'Apply weekly and track applications, replies, and interviews.',
      ],
    },
    {
      title: 'CV, portfolio, and ATS',
      items: [
        'Keep CV to one focused page with action + result bullets.',
        'Mirror key skills and words from the job description.',
        'Show 3–6 projects with clear context, tools, and outcomes.',
      ],
    },
    {
      title: 'LinkedIn and interviews',
      items: [
        'Post short insights weekly to show you are active in the field.',
        'Send messages that mention specific work from the person you contact.',
        'Practice common questions using simple stories with situation and result.',
      ],
    },
    {
      title: 'Internship to job',
      items: [
        'Ask regularly what you can do to be more useful to the team.',
        'Send short weekly summaries of what you did and learned.',
        'Ask clearly what it would take to be considered for a full-time role.',
      ],
    },
  ];

  const careerRoadmaps = [
    {
      title: 'Web development',
      stack: 'HTML, CSS, JavaScript, React/Next, APIs, Git.',
      projects: 'Portfolio, local business sites, dashboards, simple SaaS ideas.',
      income: 'Freelancing, dev jobs, templates, micro-SaaS.',
    },
    {
      title: 'UI/UX design',
      stack: 'Layout, typography, UX flows, prototypes, design systems.',
      projects: 'App redesigns, landing pages, onboarding flows, design systems.',
      income: 'Design roles, freelance UI/UX, template and asset stores.',
    },
    {
      title: 'AI engineering',
      stack: 'Python, ML basics, LLMs, vector search, deployment.',
      projects: 'Chatbots, AI assistants, recommendation tools, automations.',
      income: 'AI roles, consulting, AI-powered tools and products.',
    },
    {
      title: 'Prompt engineering',
      stack: 'LLM behaviour, system prompts, workflows, evaluation.',
      projects: 'Prompt packs, AI workflows, domain-specific assistants.',
      income: 'Prompt libraries, workshops, done-for-you AI workflow setups.',
    },
    {
      title: 'Data science',
      stack: 'Statistics, Python, SQL, visualisation, ML basics.',
      projects: 'Dashboards, reports, predictive models, data stories.',
      income: 'Analyst roles, freelance dashboards, analytics consulting.',
    },
    {
      title: 'Cyber security',
      stack: 'Networking, OS basics, web security, tools, labs.',
      projects: 'Labs, CTFs, vulnerability reports, security reviews.',
      income: 'Security roles, pentesting, bug bounties.',
    },
    {
      title: 'Content creation',
      stack: 'Storytelling, scripting, editing, platform mechanics.',
      projects: 'Shorts, long-form content, newsletters, series formats.',
      income: 'Brand deals, products, memberships, services.',
    },
    {
      title: 'Digital marketing',
      stack: 'Social, email, SEO, paid ads, funnels, analytics.',
      projects: 'Campaigns, landing pages, email sequences, reports.',
      income: 'Agency work, in-house roles, marketing for your own products.',
    },
    {
      title: 'Automation specialist',
      stack: 'No-code tools, APIs, Zapier/Make, AI integrations.',
      projects: 'Workflows that save hours for small teams and creators.',
      income: 'Automation setups, retainers, packaged workflow products.',
    },
    {
      title: 'Startup builder',
      stack: 'Problem discovery, MVPs, distribution, monetisation, basic fundraising.',
      projects: 'MVPs, pilot projects, early revenue experiments.',
      income: 'Product sales, subscriptions, services, equity.',
    },
  ];

  const mindsetBlocks = [
    {
      title: 'Mindset shifts',
      items: [
        'From “I need guarantees” to “I need feedback and experiments”.',
        'From “I will start when I am ready” to “I will start small today”.',
        'From only certificates to visible work and real outcomes.',
      ],
    },
    {
      title: 'Systems and habits',
      items: [
        'Daily 45–90 minute deep work block for skill and earning.',
        'Every day must include at least one output task, not only learning.',
        'Weekly review of progress, earnings, and what to improve next.',
      ],
    },
    {
      title: 'Handling failure',
      items: [
        'Treat each rejection as data about your message or offer, not about you.',
        'After each failed attempt, ask: what worked, what did not, what will I change?',
        'Keep your identity separate from your current income level.',
      ],
    },
  ];

  const aiBlocks = [
    {
      title: 'AI freelancing models',
      items: [
        'Offer AI-powered content systems, research support, or reporting for busy teams.',
        'Set up AI chatbots that answer customer questions using company knowledge.',
        'Sell repeatable AI workflows instead of random one-off tasks.',
      ],
    },
    {
      title: 'No-code and automation',
      items: [
        'Use no-code tools to build dashboards, portals, or simple CRMs.',
        'Automate lead capture, follow-ups, and reporting for small businesses.',
        'Bundle automations with human support for higher-priced offers.',
      ],
    },
    {
      title: 'Products and prompts',
      items: [
        'Create prompt packs and AI playbooks for specific niches.',
        'Turn your best workflows into templates and micro-SaaS ideas.',
        'Teach teams how to use AI tools safely and effectively.',
      ],
    },
  ];

  const gamifiedBlocks = [
    {
      title: 'Levels and XP',
      items: [
        'Levels from Beginner to Builder, Pro, and Leader.',
        'XP from lessons, projects, proposals, and earnings milestones.',
        'Visible progress bars so you always know where you stand.',
      ],
    },
    {
      title: 'Quests and missions',
      items: [
        'Starter quests like “create your first portfolio piece” or “send 5 proposals”.',
        'Intermediate missions like “reach your first 3 paying clients”.',
        'Advanced challenges like “hit your first $1k month from skills”.',
      ],
    },
    {
      title: 'Streaks and rewards',
      items: [
        'Daily and weekly streaks for learning and output tasks.',
        'Badges for first reply, first client, first $1, first $100, first $1k.',
        'Unlock new modules or templates as you cross income milestones.',
      ],
    },
  ];

  const toolsBlocks = [
    {
      title: 'Learning and practice',
      items: [
        'Platforms that match your chosen skill and level.',
        'Project-based courses that end with real work you can show.',
        'Communities where you can ask questions and share progress.',
      ],
    },
    {
      title: 'Work and portfolio',
      items: [
        'Portfolio builders for devs, designers, and content creators.',
        'Job boards and remote work platforms filtered by skill and region.',
        'AI tools that help you write, design, or debug faster.',
      ],
    },
    {
      title: 'Automation and focus',
      items: [
        'Task managers for planning learning and earning blocks.',
        'Automation platforms for repetitive online work.',
        'Simple sheets and dashboards to track time, tasks, and money.',
      ],
    },
  ];

  const executionBlocks = [
    {
      title: '30-day earning plan',
      items: [
        'Week 1: choose path, set up tools, and build first 2–3 mini projects.',
        'Week 2: publish your work in a simple portfolio or profile.',
        'Week 3: start outreach or applications with small, clear offers.',
        'Week 4: improve based on replies and push for your first paid project.',
      ],
    },
    {
      title: '90-day launch blueprint',
      items: [
        'Month 1: build skill depth and a solid portfolio base.',
        'Month 2: increase outreach, refine your messaging, and land first wins.',
        'Month 3: stabilise workflow, improve pricing, and document your systems.',
      ],
    },
    {
      title: '6-month growth roadmap',
      items: [
        'Double down on the clients, roles, or offers that bring most results.',
        'Trim activities that do not move income, skill, or opportunities forward.',
        'Experiment with a second income stream around your main skill.',
      ],
    },
    {
      title: '1-year transformation',
      items: [
        'Have one strong skill and one main income stream you can grow.',
        'Add a second stream like products, content, or automation services.',
        'Design your next 2–3 years for freedom, not only for job titles.',
      ],
    },
  ];

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-[0.16em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Earn & Careers</span>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-slate-900">
                Earn like a pro while you are still in class.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-700">
                Move from zero to skill to income to financial freedom with clear, student-friendly systems instead of random
                internet advice.
              </p>
            </div>
            <div className="sm:text-right text-xs sm:text-[13px] text-slate-500">
              <p>Built to connect with the Creativity Learning modules.</p>
              <p>Each card is short on purpose so you can act fast.</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  01 • Zero → Freedom map
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  A clear path from no clarity to financial independence
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                See where you are right now and what the next stage actually looks like so you can move with confidence.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
              {zeroToIndependence.map((stage, index) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 text-sm sm:text-[15px] text-slate-800"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/30 to-transparent" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold border ${stage.color}`}>
                      <span>{stage.label}</span>
                    </div>
                    <p>{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  02 • Career discovery engine
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Find your best-fit digital paths and earning style
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Use these questions and clusters to discover your hidden strengths, work style, and earning potential.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-[1.3fr,1.1fr]">
              <div className="space-y-4">
                {discoveryPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ ...cardTransition, delay: index * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-sm sm:text-[15px] text-slate-800"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/60 to-transparent" />
                    </div>
                    <div className="relative z-10 space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {pillar.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {pillar.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={cardTransition}
                className="space-y-4"
              >
                <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 text-sm sm:text-[15px] space-y-3">
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-200">
                    AI-style matching logic
                  </div>
                  <p className="text-slate-100/90">
                    Combine your answers across interest, thinking style, risk, and reality to see which cluster you fit into
                    and which earning style suits you best.
                  </p>
                  <p className="text-slate-100/80">
                    Start with one main skill and one earning style for the next 90 days instead of switching every two
                    weeks.
                  </p>
                </div>
                <div className="grid gap-3">
                  {discoveryClusters.map((cluster) => (
                    <div key={cluster.label} className={`rounded-2xl border ${cluster.color} bg-white p-4 text-sm sm:text-[15px]`}>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1">
                        {cluster.label}
                      </div>
                      <p className="text-slate-700">{cluster.fit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  03 • Skill → Income → Career
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  See how learning turns into income and then a career
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Pick one track and follow the stages instead of guessing. Each card is a real, testable sequence for your
                next 6–12 months.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mappingExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${example.color} p-6 sm:p-7 text-sm sm:text-[15px] ${example.textColor}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className={`text-sm sm:text-base font-semibold ${example.titleColor}`}>
                      {example.title}
                    </h3>
                    <ol className="space-y-1.5 list-decimal list-inside">
                      {example.stages.map((stage) => (
                        <li key={stage}>{stage}</li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  04 • Online earning ecosystem
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  From first ₹ / $ online to advanced digital income
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Start small with simple tasks, then move into stable services and finally into products and automated
                systems.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {earningLevels.map((level, index) => (
                <motion.div
                  key={level.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-xs sm:text-[13px] text-slate-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {level.label}
                    </h3>
                    <ul className="space-y-1.5">
                      {level.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  05 • Freelancing and client engine
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Turn skill into a predictable stream of clients and projects
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Use these blocks to go from “I have a skill” to “I know exactly how to get clients and keep them”.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-4">
              {freelanceBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${block.color} p-5 text-xs sm:text-[13px] text-slate-700`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-slate-700 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  06 • Remote job and internship engine
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Design your path into remote roles and serious experience
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Combine skill, proof, and visibility so that remote teams actually notice you and take you seriously.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-4">
              {remoteBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-xs sm:text-[13px] text-slate-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.16),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  07 • Future-proof career roadmaps
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Ten digital careers with clear skills, projects, and income options
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Pick one or two paths and follow the stack, project, and income ideas instead of copying random roadmaps
                from the internet.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {careerRoadmaps.map((roadmap, index) => (
                <motion.div
                  key={roadmap.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.03 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-sm sm:text-[15px] text-slate-800 transition-colors duration-300 group-hover:border-emerald-400"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {roadmap.title}
                    </h3>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Skill stack
                      </div>
                      <p>{roadmap.stack}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Projects
                      </div>
                      <p>{roadmap.projects}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Income streams
                      </div>
                      <p>{roadmap.income}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  08 • Earning psychology and mindset
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Think like someone whose skills will pay them for life
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Money follows skills, systems, and mindset. These cards keep your head clear when things are slow or
                confusing.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {mindsetBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-xs sm:text-[13px] text-slate-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.16),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  09 • AI and automation income
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Use AI to multiply your earning power, not replace you
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Combine your human judgement with AI tools so you can deliver more value faster than most people around
                you.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {aiBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-xs sm:text-[13px] text-slate-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  10 • Gamified learning and earning
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Turn your growth into a game you actually want to play daily
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Use levels, streaks, and quests so that showing up for your future feels fun, not heavy.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {gamifiedBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-xs sm:text-[13px] text-slate-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_70%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                  11 • Tools and execution system
                </div>
                <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                  Use the right tools and timelines so you do not waste years
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                Combine focused tools with 30-day, 90-day, 6-month, and 1-year plans so your energy builds into something
                real.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-[1.1fr,1.2fr]">
              <div className="grid gap-4">
                {toolsBlocks.map((block, index) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ ...cardTransition, delay: index * 0.04 }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-xs sm:text-[13px] text-slate-700"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_transparent_70%)]" />
                    </div>
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {block.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-slate-600 transition-colors" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={cardTransition}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-50 p-6 sm:p-7 text-xs sm:text-[13px] flex flex-col justify-between"
              >
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.45),_transparent_70%)]" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-100">
                    Real-world execution timeline
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {executionBlocks.map((block) => (
                      <div key={block.title} className="space-y-2">
                        <h3 className="text-sm font-semibold text-emerald-50">
                          {block.title}
                        </h3>
                        <ul className="space-y-1.5 text-slate-100/85">
                          {block.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-emerald-50/90">
                    Use the Creativity Learning tracks to build skills and this Earn & Careers system to turn those
                    skills into real income, career options, and long-term freedom.
                  </p>
                  <Link
                    href="/creativity"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-50 hover:text-emerald-200"
                  >
                    <span>Open Creativity Learning</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mt-2"
            >
              <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                    12 • Freedom dashboard
                  </div>
                  <h2 className="mt-2 text-lg sm:text-2xl font-semibold text-slate-900">
                    One glance to see if you are moving toward freedom
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 max-w-md">
                  Track the only three numbers that actually matter for your digital career: skill, proof, and income.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={cardTransition}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl border border-emerald-300/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 px-6 sm:px-8 py-7 sm:py-8 text-slate-50"
              >
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.4),_transparent_70%)]" />
                </div>
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm sm:text-base text-slate-100/90 max-w-xl">
                      Imagine a simple panel that tells you, today, how close you are to your first ₹ / $1, then ₹ / $100,
                      and then a serious digital income.
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>Live progress model</span>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        Skill score
                      </div>
                      <p className="text-sm text-slate-100/90">
                        0: only watching. 1: small projects. 2: real projects for real people. 3: people ask you for help.
                      </p>
                      <p className="text-xs text-emerald-100/80">
                        Aim to move this score by one step every 30 days using focused practice.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        Proof score
                      </div>
                      <p className="text-sm text-slate-100/90">
                        0: no portfolio. 1: 1–2 small pieces. 2: 3–6 strong case studies. 3: visible public work and
                        testimonials.
                      </p>
                      <p className="text-xs text-emerald-100/80">
                        Update this every time you finish a project, thread, video, or case study.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        Income score
                      </div>
                      <p className="text-sm text-slate-100/90">
                        0: ₹ / $0. 1: first ₹ / $1–100. 2: stable monthly side income. 3: income that can fund your own
                        decisions.
                      </p>
                      <p className="text-xs text-emerald-100/80">
                        Use the earlier sections to decide what to try next to move this number.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
