export interface LearningModule {
  id: string;
  category:
    | 'Digital Skills'
    | 'Business'
    | 'Mindset'
    | 'Books'
    | 'Design'
    | 'Crafting'
    | 'Earn & Careers'
    | 'Self Development'
    | 'Resources'
    | 'Opportunities';
  title: string;
  shortDescription: string;
  fullExplanation: string;
  visualType: 'chart' | 'icon' | 'book' | 'checklist' | 'quote' | 'design' | 'color-wheel' | 'anatomy' | 'type-scale';
  visualContent?: string; // For book covers, specific icon names, or emoji
  tags: string[];
  structuredContent?: {
    hook: string;
    reality: string; // Step 2: Reality Connection
    concept: string; // Step 3: Concept Explanation (Zero Level)
    power: string;   // Step 4: Why This Skill Is Powerful
    roadmap: string[]; // Step 5: Step-by-Step Learning Path
    secrets: string[]; // Step 6: Hidden Secrets & Smart Tricks
    examples: string[]; // Step 7: Real-Life Examples (formerly realWorldUses)
    mindset: string; // Step 8: Mindset Boost + Motivation
    
    // Legacy/Optional fields to keep type compatibility or extra info
    achievement: string; 
    exercises: { level: 'Easy' | 'Medium' | 'Hard'; task: string }[];
    tips: string[];
    resources: { name: string; type: 'Free' | 'Paid' | 'AI' | 'Free/Paid'; url?: string }[];
    challenges: string[];
    career: string;
    story?: string;
  };
}

export const learningModules: LearningModule[] = [
  // ==================================================================================
  // SECTION 1: LEVERAGE (01-04)
  // ==================================================================================
  {
    id: 'd1',
    category: 'Digital Skills',
    title: 'Prompt Engineering',
    shortDescription: 'The art of controlling superintelligence.',
    fullExplanation: 'Prompt engineering is not just "typing words." It is the skill of translating your human intent into machine execution.',
    visualType: 'icon',
    visualContent: '🗣️',
    tags: ['AI', 'Future', 'Leverage'],
    structuredContent: {
      hook: "This is something school never taught you — but it's the closest thing to telepathy. You think it, the machine builds it.",
      reality: "Most people treat AI like a Google Search bar. They type 3 words and get disappointed. **Here is the secret:** AI is not a search engine. It is a **Reasoning Engine**. It is an intern with a PhD but zero common sense. You must lead it.",
      concept: "Prompt Engineering is \"Programming with English.\" Instead of writing code like `print(\"Hello\")`, you write instructions like \"Explain this like I'm 5.\" The clearer your instructions, the better the output. Garbage in, garbage out.",
      power: "*   **Income Impact:** Do the work of 5 people. Freelance for 5 clients at once.\n*   **Career Impact:** Be the person who solves problems in minutes, not days.\n*   **Life Impact:** Reclaim your time. Automate the boring stuff so you can live.",
      roadmap: [
        "Level 1: The Basics (Role + Task + Context)",
        "Level 2: Few-Shot Prompting (Giving Examples)",
        "Level 3: Chain of Thought (Step-by-Step Logic)",
        "Expert: Building Automated Agent Swarms"
      ],
      secrets: [
        "**The 'God Mode' Framework (RTF):** Role (Who) + Task (What) + Format (How). Never just 'ask'.",
        "**The Magic Phrase:** 'Let's think step by step.' This forces the AI to use logic and reduces errors by 50%.",
        "**Talk Human:** Saying 'Please' and 'I need your help' actually improves results."
      ],
      examples: [
        "**Negotiation:** 'Act as a Harvard Negotiator. Help me script a reply to ask for a raise.'",
        "**Learning:** 'Explain Quantum Physics like I am 12 years old. Use analogies involving pizza.'",
        "**Coding:** 'Find the bug in this code, explain why it happened, and fix it.'"
      ],
      mindset: "You are not a user. You are a **Commander**. The AI is your army. Stop doing the heavy lifting. Your job is to set the vision; the AI's job is to execute. From Student → Commander.",
      
      // Legacy
      achievement: "Stop working hard. Start working smart. Turn 8 hours of drudgery into 15 minutes of supervision. From Student → Commander.",
      story: "**The $100,000 Question**\n\nMost people ask ChatGPT: *\"Write a blog post about coffee.\"*\nThey get a boring, generic result.\n\nA Pro Prompt Engineer asks: *\"Act as a world-class barista and historian. Write a passionate, 500-word story about the dark history of espresso, using the tone of Anthony Bourdain. Focus on the sensory details of the smell and the noise of the machine.\"*\n\n**The Result:** A masterpiece that went viral. The difference wasn't the AI; it was the **Prompt**. The Pro got paid $1,000 for that article. The amateur got ignored.",
      exercises: [
        { level: "Easy", task: "Use the RTF Framework to get ChatGPT to write a personalized birthday poem for your best friend." },
        { level: "Medium", task: "Use 'Few-Shot Prompting' to teach the AI your specific writing style." },
        { level: "Hard", task: "Create a 'Mega-Prompt' that takes a raw business idea and outputs a full Business Plan, Marketing Strategy, and 30 Days of Content." }
      ],
      tips: [
        "Talk to it like a human. Say 'Please' and 'Thank you' (it actually improves results slightly!).",
        "If it fails, tell it *why* it failed and ask it to try again.",
        "The magic phrase: 'Let's think step by step.' This forces the AI to use logic."
      ],
      resources: [
        { name: "ChatGPT (OpenAI)", type: "Free" },
        { name: "Claude 3.5 (Anthropic)", type: "Free" },
        { name: "Perplexity AI", type: "Free" }
      ],
      challenges: [
        "The 'No-Google' Day: Solve every problem today using only AI Prompts. No searching."
      ],
      career: "Prompt Engineers are being hired for $200k+ salaries. But more importantly: EVERY job is now an AI job."
    }
  },
  {
    id: 'd2',
    category: 'Digital Skills',
    title: 'SEO & Organic Traffic',
    shortDescription: 'How to be found when nobody knows you.',
    fullExplanation: 'You can have the best product in the world, but if nobody sees it, you are broke. SEO (Search Engine Optimization) is the art of planting flags in the digital ground so that customers find YOU instead of you chasing them.',
    visualType: 'chart',
    visualContent: '🔍',
    tags: ['Marketing', 'Google', 'Traffic'],
    structuredContent: {
      hook: "Want to hide a dead body? Put it on the second page of Google. Nobody looks there. Let's get you to Page One.",
      reality: "Most people think SEO is magic or 'tricking Google.' It's not. It's simply **Organizing the World's Information**.",
      concept: "SEO is a library system. Google is the librarian. Your website is a book. If your title is clear and your pages are readable, the librarian puts you on the top shelf. If you are messy, you go to the basement.",
      power: "*   **Free Traffic:** You don't pay for ads.\n*   **High Intent:** People are *searching* for you. They have credit cards in hand.\n*   **Asset Value:** An SEO-optimized site is digital real estate. It makes money while you sleep.",
      roadmap: [
        "Level 1: Keyword Research (Finding what people want)",
        "Level 2: On-Page SEO (Cleaning your house)",
        "Level 3: Content Creation (Answering questions)",
        "Expert: Backlinks (Digital Popularity Votes)"
      ],
      secrets: [
        "**The 'Long Tail' Strategy:** Don't fight for 'Shoes'. Fight for 'Red Velcro Running Shoes for Toddlers'. You will win.",
        "**Update Old Content:** Google loves fresh content. Changing the date and adding 100 words can double your traffic.",
        "**User Experience is SEO:** If your site is slow, you lose. Speed is a ranking factor."
      ],
      examples: [
        "**The Bakery:** Started a blog answering 'How to keep sourdough fresh.' Now ships bread nationwide.",
        "**The Plumber:** Wrote an article 'Why is my toilet making a hissing sound?' Now gets 50 calls a month from it.",
        "**The Affiliate:** Reviews 'Best Laptops for Students' and earns 5% on every Amazon sale."
      ],
      mindset: "You are not a writer. You are a **Problem Solver**. People have questions. You have answers. Be the most helpful person on the internet, and you will win.",
      
      // Legacy
      achievement: "Build an asset that pays you while you sleep. Stop renting attention from social media. Own your traffic.",
      story: "**The Bakery vs. Starbucks**\n\nA tiny local bakery couldn't afford TV ads. Starbucks was crushing them.\n\n**The Pivot:** They started a blog answering questions: *\"Best gluten-free cake in Seattle\"*, *\"How to keep sourdough fresh.\"*\n\n**The Result:** 6 months later, they were the #1 result on Google. People traveled across the city to find them. They didn't pay for attention; they **earned** it by being helpful. That is the power of SEO.",
      exercises: [
        { level: "Easy", task: "Use Google Trends to find 3 trending topics in your niche." },
        { level: "Medium", task: "Write a 500-word blog post answering a specific question your customers ask." },
        { level: "Hard", task: "Audit your own website (or a friend's) using a tool like PageSpeed Insights and fix 3 issues." }
      ],
      tips: [
        "Focus on the user, not the search engine.",
        "Keywords are important, but quality content is king.",
        "Be patient. SEO takes time to show results."
      ],
      resources: [
        { name: "Google Search Console", type: "Free" },
        { name: "Ahrefs / SEMrush", type: "Paid" },
        { name: "Ubersuggest", type: "Free/Paid" }
      ],
      challenges: [
        "The 'Page One' Challenge: Get one of your blog posts to the first page of Google for a specific long-tail keyword."
      ],
      career: "SEO Specialists are in high demand, with salaries ranging from $60k to $120k+."
    }
  },
  {
    id: 'd3',
    category: 'Digital Skills',
    title: 'Content Design',
    shortDescription: 'Making ideas beautiful and readable.',
    fullExplanation: 'Design is not just about making things look "pretty." It is about communication. In a world of infinite scrolling, Content Design is how you stop the thumb and earn the click.',
    visualType: 'design',
    visualContent: '🎨',
    tags: ['Design', 'Visuals', 'Communication'],
    structuredContent: {
      hook: "You have 0.05 seconds for a user to form an opinion about your website. Design isn't an 'extra'—it's the first thing they judge.",
      reality: "Good design is invisible. Bad design is everywhere. You don't need to be an artist to be a good designer; you just need to understand **Hierarchy and Contrast**.",
      concept: "Content Design is **Visual Storytelling**. You use layout, color, and typography to lead the eye from the most important thing to the least important thing.",
      power: "*   **Trust:** Professional design builds instant authority.\n*   **Retention:** People read what is easy to read.\n*   **Conversion:** Clear calls-to-action (CTAs) lead to more sales.",
      roadmap: [
        "Level 1: Typography (The power of fonts)",
        "Level 2: Color Theory (Emotional triggers)",
        "Level 3: Layout & Grids (The Swiss Style)",
        "Expert: Design Systems (Scaling your brand)"
      ],
      secrets: [
        "**The 'Squint Test':** Squint your eyes at your design. If you can still tell what the most important part is, it's a good layout.",
        "**Whitespace is your friend:** Don't crowd the page. Let your elements breathe.",
        "**Limit your fonts:** Use no more than 2 font families. One for headings, one for body text."
      ],
      examples: [
        "**Apple:** Uses massive whitespace and high-quality photography to signal luxury.",
        "**Medium:** Focused entirely on typography to make reading long articles effortless.",
        "**Stripe:** Built a multi-billion dollar business by having the best-looking documentation in the world."
      ],
      mindset: "Design is thinking made visual. If it's confusing to look at, it's because the idea is confusing. Simplify until it's clear.",
      
      // Legacy
      achievement: "Learn the rules of visual communication so you can break them. Build a brand that people recognize instantly.",
      story: "**The $300 Million Button**\n\nA major e-commerce site changed one button label from 'Register' to 'Continue'. \n\n**The Result:** Purchases increased by 45%, resulting in an extra $300 million in revenue in the first year. They didn't change the product; they changed the **Content Design**. Design is the difference between a bounce and a buy.",
      exercises: [
        { level: "Easy", task: "Redesign your email signature using only two fonts and one accent color." },
        { level: "Medium", task: "Create a social media post using the 'Rule of Thirds'." },
        { level: "Hard", task: "Design a landing page mockup in Figma focusing on visual hierarchy." }
      ],
      tips: [
        "Less is more. Always.",
        "Use high-quality images. No cheesy stock photos.",
        "Consistency is key to a professional look."
      ],
      resources: [
        { name: "Figma", type: "Free/Paid" },
        { name: "Canva", type: "Free/Paid" },
        { name: "Coolors.co", type: "Free" }
      ],
      challenges: [
        "The 'Design Audit': Take a look at your current project and remove 3 unnecessary elements to improve clarity."
      ],
      career: "Content Designers and UX/UI Designers earn between $70k and $150k+."
    }
  },
  {
    id: 'd4',
    category: 'Digital Skills',
    title: 'Personal Branding',
    shortDescription: 'The insurance policy for your career.',
    fullExplanation: 'In the digital age, your reputation is your most valuable asset. Personal branding is the process of intentionally managing how you are perceived by the world to unlock opportunities.',
    visualType: 'icon',
    visualContent: '🆔',
    tags: ['Career', 'Social Media', 'Reputation'],
    structuredContent: {
      hook: "If they don't know you, they can't hire you. Your brand is what people say about you when you're not in the room.",
      reality: "You already have a personal brand. It's called your digital footprint. The only question is: are you **controlling** it, or is it controlling you?",
      concept: "Personal Branding is **Permission Marketing**. You share your journey, your expertise, and your values so that the right people (clients, employers, partners) find you.",
      power: "*   **Inbound Opportunities:** Jobs and deals come to you.\n*   **Pricing Power:** Specialists with a brand charge 3x more than generalists.\n*   **Career Resilience:** You are no longer dependent on a single company.",
      roadmap: [
        "Level 1: The Foundation (Your 'Why' and 'Who')",
        "Level 2: Content Strategy (What to say)",
        "Level 3: Platform Selection (Where to say it)",
        "Expert: Community Building (Turning fans into family)"
      ],
      secrets: [
        "**The 'Curate vs Create' Rule:** You don't always have to have new ideas. Curate the best ideas from others and add your unique perspective.",
        "**Consistency > Intensity:** Posting once a week for a year is better than posting every day for a month and quitting.",
        "**Show your work:** Don't just show the finished product. Show the messy process. It builds trust."
      ],
      examples: [
        "**Gary Vaynerchuk:** Built a massive empire by documenting his life and business daily.",
        "**James Clear:** Became the world's leading habit expert by writing one high-quality newsletter a week.",
        "**Justin Welsh:** Built a multi-million dollar solo business by sharing his 'Solopreneur' journey on LinkedIn."
      ],
      mindset: "Don't be a 'Guru.' Be a 'Guide.' People don't want to follow someone who is perfect; they want to follow someone who is one step ahead of them.",
      
      // Legacy
      achievement: "Build a digital reputation that works for you 24/7. Become the 'Go-To' person in your niche.",
      story: "**The Laid-Off Engineer**\n\nAn engineer spent 5 years at a tech giant but never posted online. When he was laid off, he had to start from scratch. \n\n**The Contrast:** Another engineer at the same company spent 1 hour a week sharing his coding tips on Twitter. When he was laid off, he had 5 job offers in his inbox by the next morning. His brand was his **Insurance Policy**.",
      exercises: [
        { level: "Easy", task: "Update your LinkedIn headline to reflect the specific problem you solve." },
        { level: "Medium", task: "Write a 'Value-Add' post on your platform of choice sharing one thing you learned this week." },
        { level: "Hard", task: "Create a 'Personal Manifesto' that outlines your values and mission." }
      ],
      tips: [
        "Be authentic. People can smell a fake from a mile away.",
        "Focus on helping others, not just promoting yourself.",
        "Engage with your audience. It's a two-way conversation."
      ],
      resources: [
        { name: "LinkedIn", type: "Free" },
        { name: "Twitter/X", type: "Free" },
        { name: "Substack", type: "Free/Paid" }
      ],
      challenges: [
        "The '30-Day Content Challenge': Post one helpful tip or insight every day for 30 days."
      ],
      career: "Personal Branding can lead to speaking engagements, book deals, and high-paying consulting roles."
    }
  },

  // ==================================================================================
  // SECTION: EARN & CAREERS
  // ==================================================================================
  {
    id: 'ec1',
    category: 'Earn & Careers',
    title: 'Freelancing Foundations',
    shortDescription: 'Turn skills into income with client work instead of random gigs.',
    fullExplanation:
      'Freelancing is the fastest path from student to earner. Instead of waiting for someone to hire you full-time, you start solving small problems for real people and get paid for it.',
    visualType: 'checklist',
    visualContent: '💼',
    tags: ['Freelancing', 'Clients', 'Online Earning']
  },
  {
    id: 'ec2',
    category: 'Earn & Careers',
    title: 'Remote Job Ready',
    shortDescription: 'Prepare a portfolio, CV, and online presence for remote roles.',
    fullExplanation:
      'Remote jobs reward proof of skill more than degrees. To compete globally, you need a focused CV, portfolio, and presence that tells one clear story about what you can do.',
    visualType: 'icon',
    visualContent: '🌐',
    tags: ['Remote Work', 'CV', 'Portfolio']
  },
  {
    id: 'ec3',
    category: 'Earn & Careers',
    title: 'Side Hustle Blueprint',
    shortDescription: 'Design a small, low-risk income project around your strengths.',
    fullExplanation:
      'A side hustle is a small, controlled experiment in earning. Done right, it teaches you skills, brings in extra cash, and can grow into something bigger without risking your studies.',
    visualType: 'chart',
    visualContent: '📈',
    tags: ['Side Hustle', 'Experiments', 'Cashflow']
  },

  // ==================================================================================
  // SECTION: SELF DEVELOPMENT
  // ==================================================================================
  {
    id: 'sd1',
    category: 'Self Development',
    title: 'Student Productivity System',
    shortDescription: 'A simple way to juggle classes, work, and self-study without burnout.',
    fullExplanation:
      'Most students rely on motivation. High performers rely on systems. A good productivity system turns your goals into weekly and daily actions you can actually follow.',
    visualType: 'checklist',
    visualContent: '🧠',
    tags: ['Productivity', 'Planning', 'Focus']
  },
  {
    id: 'sd2',
    category: 'Self Development',
    title: 'Time Management For Busy Students',
    shortDescription: 'Plan weeks, not days, so deadlines stop being emergencies.',
    fullExplanation:
      'Time management is not about squeezing more tasks into a day. It is about protecting time for deep work, rest, and long-term projects that move your life forward.',
    visualType: 'chart',
    visualContent: '⏱️',
    tags: ['Time', 'Scheduling', 'Deadlines']
  },
  {
    id: 'sd3',
    category: 'Self Development',
    title: 'Confidence And Communication',
    shortDescription: 'Learn to speak, email, and present in a way that opens doors.',
    fullExplanation:
      'Opportunities often come through people. Clear, confident communication makes teachers, employers, and clients remember you and trust you with bigger responsibilities.',
    visualType: 'icon',
    visualContent: '🎤',
    tags: ['Confidence', 'Communication', 'Interviews']
  },

  // ==================================================================================
  // SECTION: RESOURCES
  // ==================================================================================
  {
    id: 'r1',
    category: 'Resources',
    title: 'Student Resource Library',
    shortDescription: 'Organised PDFs, templates, and cheat sheets for fast execution.',
    fullExplanation:
      'Instead of starting from a blank page every time, you can plug into checklists, templates, and roadmaps that give you a starting structure for work, study, and applications.',
    visualType: 'book',
    visualContent: '📚',
    tags: ['Templates', 'PDFs', 'Cheat Sheets']
  },
  {
    id: 'r2',
    category: 'Resources',
    title: 'Career Guide Collection',
    shortDescription: 'Short guides that explain what different careers really involve.',
    fullExplanation:
      'Job titles are confusing. Career guides translate them into plain language: what the work feels like day-to-day, what skills you need, and how to get a first opportunity.',
    visualType: 'book',
    visualContent: '📖',
    tags: ['Careers', 'Guides', 'Planning']
  },

  // ==================================================================================
  // SECTION: OPPORTUNITIES
  // ==================================================================================
  {
    id: 'o1',
    category: 'Opportunities',
    title: 'Scholarships And Programs Radar',
    shortDescription: 'A structured way to discover and track scholarships and exchanges.',
    fullExplanation:
      'There are more scholarships and exchange programs than most students realise. The challenge is not just finding them, but tracking deadlines and requirements calmly.',
    visualType: 'chart',
    visualContent: '🌍',
    tags: ['Scholarships', 'Exchange', 'Tracking']
  },
  {
    id: 'o2',
    category: 'Opportunities',
    title: 'Internships, Jobs, And Competitions',
    shortDescription: 'Use small opportunities to build experience before graduation.',
    fullExplanation:
      'Early internships, projects, and competitions give you stories for your CV and interviews. They also help you test whether you actually enjoy a field before committing.',
    visualType: 'icon',
    visualContent: '🏁',
    tags: ['Internships', 'Jobs', 'Competitions']
  },

  // ==================================================================================
  // SECTION 2: ATTENTION (05-08)
  // ==================================================================================
  {
    id: 'd5',
    category: 'Digital Skills',
    title: 'Automation & Systems',
    shortDescription: 'Cloning yourself with software.',
    fullExplanation: 'Time is your only limited resource. Automation allows you to break the link between "Hours Worked" and "Output." By connecting apps together, you can build a machine that runs your business while you sleep.',
    visualType: 'icon',
    visualContent: '⚙️',
    tags: ['NoCode', 'Efficiency', 'Scale'],
    structuredContent: {
      hook: "What if you could hire a 24/7 employee who never sleeps, never complains, and costs $0? Meet Automation.",
      reality: "You will never get rich trading time for money. There are only 24 hours in a day. To scale, you must **clone yourself** using software.",
      concept: "Automation is **Digital Plumbing**. You connect pipes (apps) so data flows automatically.\n*   **Trigger:** When this happens... (e.g., New email arrives)\n*   **Action:** Do this... (e.g., Save attachment to Dropbox)",
      power: "*   **Time Freedom:** Save 20+ hours a week.\n*   **Accuracy:** Robots don't make typos.\n*   **Scale:** Handle 1,000 customers as easily as 1.",
      roadmap: [
        "Level 1: The Mindset (If This, Then That)",
        "Level 2: Simple Integrations (Zapier/Make)",
        "Level 3: Complex Logic (Filters & Paths)",
        "Level 4: AI Agents (Auto-Decision Making)"
      ],
      secrets: [
        "**Start Small:** Don't automate a mess. Optimize the process manually first, *then* automate it.",
        "**The '5-Minute Rule':** If a task takes > 5 minutes and you do it > 3 times a week, automate it.",
        "**Webhooks:** The secret language that lets any app talk to any other app, even if they don't have a direct integration."
      ],
      examples: [
        "**The Freelancer:** Automatically sends a contract and invoice when a client books a call.",
        "**The E-commerce Store:** Automatically sends a 'We miss you' coupon if a customer hasn't bought in 30 days.",
        "**The Content Creator:** Automatically posts to Twitter, LinkedIn, and Facebook from a single dashboard."
      ],
      mindset: "If you are doing it twice, you are doing it wrong. Be the Architect, not the Bricklayer.",
      
      // Legacy
      achievement: "Build a machine that makes money. Stop trading time for dollars. From Operator → Owner.",
      story: "**The 500-Hour Unlock**\n\nA freelancer was drowning in admin: sending invoices, scheduling calls, organizing files.\n\n**The Fix:** She built a simple workflow using Zapier.\n*   Client fills form -> Trello Card Created -> Invoice Sent -> Welcome Email Fired.\n\n**The Result:** She saved 10 hours a week. That's 500 hours a year. She used that time to double her income. Automation didn't replace her; it **promoted** her.",
      exercises: [
        { level: "Easy", task: "Use 'Gmail Filters' to automatically label emails from your boss." },
        { level: "Medium", task: "Create a Zapier account. Connect Google Sheets to Gmail (send email when row added)." },
        { level: "Hard", task: "Build a 'Content Machine': When you post on Instagram, automatically save the image to Dropbox and post it to Pinterest." }
      ],
      tips: [
        "Start simple. Automate one tiny thing today.",
        "Document before you automate. Write down the steps on paper first.",
        "Watch out for 'Infinite Loops'. They can break things fast."
      ],
      resources: [
        { name: "Zapier", type: "Free" },
        { name: "Make (Integromat)", type: "Free" },
        { name: "IFTTT", type: "Free" }
      ],
      challenges: [
        "The 'Zero-Inbox' Week: Automate your email sorting so you only see important messages."
      ],
      career: "Automation Experts (Zapier Consultants) charge $150+/hour."
    }
  },
  {
    id: 'd6',
    category: 'Digital Skills',
    title: 'No-Code Development',
    shortDescription: 'Building empires without code.',
    fullExplanation: 'You used to need $100k and a CTO to build a tech startup. Now you need $50 and a weekend. No-Code tools allow you to drag-and-drop your way to fully functional apps, marketplaces, and SaaS products.',
    visualType: 'icon',
    visualContent: '🚀',
    tags: ['Startup', 'Building', 'Speed'],
    structuredContent: {
      hook: "The wall is down. You don't need a diploma to build the next Facebook. You just need an idea.",
      reality: "We are entering the era of the 'Citizen Developer'. Software is the new literacy. If you can't build, you are waiting for someone who can. No-Code gives you the power of a team of 10 engineers.",
      concept: "No-Code is **Digital Legos**. Building software used to be like blacksmithing—hard, hot, and slow. Now you snap blocks together. Need a login? Snap. Need a database? Snap.",
      power: "*   **Speed:** Build in days, not months.\n*   **Cost:** $50/month instead of $50,000 for a dev team.\n*   **Independence:** You don't need a technical co-founder. You ARE the technical co-founder.",
      roadmap: [
        "Phase 1: The Interface (Webflow/Framer)",
        "Phase 2: The Database (Airtable/Supabase)",
        "Phase 3: The Logic (Zapier/Make)",
        "Phase 4: The App (Bubble/FlutterFlow)"
      ],
      secrets: [
        "**The MVP Rule:** If it takes more than 2 weeks, you are overbuilding. Launch ugly.",
        "**Template Hacking:** Don't start from scratch. Buy a $50 template that is 80% done and customize the last 20%.",
        "**Database First:** Always design your database before your design. Logic follows data."
      ],
      examples: [
        "**Dividend Finance:** Built a billion-dollar fintech company using Bubble.",
        "**Lambda School:** Ran their entire backend on Airtable and Zapier for years.",
        "**You:** Can build a job board, a marketplace, or a CRM this weekend."
      ],
      mindset: "Stop saying 'I have an idea.' Start saying 'I built a prototype.' The gap between thinking and doing has never been smaller.",
      
      // Legacy
      achievement: "Turn ideas into apps in 48 hours. Become a one-person startup. From Dreamer → Builder.",
      story: "**The $0 Millionaire**\n\nTara wanted to build an art recommendation app. Developers quoted her **$500,000**. She had $0.\n\n**The Pivot:** She used Bubble (a no-code tool) to build it herself on nights and weekends.\n\n**The Result:** She launched 'Kollecto' in 3 weeks, got thousands of users, and generated millions in revenue. She became her own CTO. She didn't wait for a technical co-founder; she became one.",
      exercises: [
        { level: "Easy", task: "Build a personal portfolio site using Carrd or Framer." },
        { level: "Medium", task: "Build a 'Job Board' using Airtable and Softr." },
        { level: "Hard", task: "Build a clone of Instagram (core features) using Glide or Adalo." }
      ],
      tips: [
        "Start with a template. Don't reinvent the wheel.",
        "Focus on function, not beauty. Pretty apps that don't work are useless.",
        "Community is key. The No-Code community helps each other."
      ],
      resources: [
        { name: "Bubble", type: "Paid" },
        { name: "Webflow", type: "Free/Paid" },
        { name: "Glide", type: "Free" }
      ],
      challenges: [
        "The 'Weekend Launch': Have an idea on Friday night. Launch a working landing page with a signup form by Sunday night."
      ],
      career: "No-Code Developers charge $5k-$15k to build MVPs. It is the fastest path to freelance income."
    }
  },
  {
    id: 'd7',
    category: 'Digital Skills',
    title: 'AI Tool Mastery',
    shortDescription: 'Becoming a Centaur (Human + AI).',
    fullExplanation: 'Tools are just multipliers. If you are zero, 0 x AI = 0. But if you are one, 1 x AI = 100. This module is about building your "Stack"—the specific set of tools that turn you into a one-person army.',
    visualType: 'icon',
    visualContent: '🛠️',
    tags: ['AI', 'Productivity', 'Superpowers'],
    structuredContent: {
      hook: "In the 90s, if you didn't know Word, you couldn't get a job. Today, if you don't know AI, you won't keep one.",
      reality: "Tools are not the skill. The *application* of the tool is the skill. A carpenter is not paid for owning a hammer. He is paid for building a house. Don't collect tools. Build things.",
      concept: "A Centaur is half-human, half-AI.\n*   **Human:** Provides the Intent and Taste.\n*   **AI:** Provides the Speed and Execution.\nTogether, they are unstoppable.",
      power: "*   **Speed:** What took 10 hours now takes 10 minutes.\n*   **Quality:** You have a world-class editor/designer/coder on your shoulder.\n*   **Cost:** You don't need to hire a team. You *are* the team.",
      roadmap: [
        "Level 1: Text (ChatGPT/Claude)",
        "Level 2: Visuals (Midjourney/Canva)",
        "Level 3: Audio/Video (ElevenLabs/Runway)",
        "Level 4: Integration (Zapier/APIs)"
      ],
      secrets: [
        "**Chaining:** Don't use tools in isolation. Connect them. Script (ChatGPT) -> Visuals (Midjourney) -> Voiceover (ElevenLabs) -> Video (Runway).",
        "**The 'Context' Window:** The more you tell the AI about your project, the better it gets. Treat it like a new employee.",
        "**One-Shot vs Few-Shot:** Giving one example (One-Shot) or a few examples (Few-Shot) dramatically improves AI output."
      ],
      examples: [
        "**Design:** Creating mood boards instantly.",
        "**Writing:** Beating writer's block forever.",
        "**Coding:** Building apps without knowing syntax.",
        "**Learning:** Summarizing 50-page PDFs in 10 seconds."
      ],
      mindset: "Don't fear the machine. Ride the machine. You are the Pilot. From User → Centaur.",
      
      // Legacy
      achievement: "Build a 'Second Brain' and a 'Digital Team' that handles your grunt work, creative blocks, and technical tasks.",
      story: "**The Centaur**\n\nIn chess, a 'Centaur' is a Human + AI team. \n*   Human = Strategy & Intuition.\n*   AI = Calculation & Speed.\n\n**The Truth:** A Centaur beats a Human. But a Centaur also beats a pure AI. \n**The Goal:** Don't compete with AI. Collaboration with it. Become the Centaur.",
      exercises: [
        { level: "Easy", task: "Use ChatGPT to plan a 3-course meal and generate a shopping list." },
        { level: "Medium", task: "Use Midjourney to create a logo for a fake brand." },
        { level: "Hard", task: "Create a 30-second video entirely with AI (Script, Voice, Image, Motion)." }
      ],
      tips: [
        "AI hallucinates. Trust but verify.",
        "The specific tool matters less than your creativity.",
        "Stay curious. The tools change, but the principles stay the same."
      ],
      resources: [
        { name: "FutureTools.io", type: "Free" },
        { name: "Product Hunt", type: "Free" },
        { name: "There's an AI for That", type: "Free" }
      ],
      challenges: [
        "The 'AI-Only' Day: Try to perform your entire workday using AI assistance for every single task. See how much faster you go."
      ],
      career: "AI Operations Manager is a role that didn't exist 2 years ago. Now companies are hiring them to fix their workflows."
    }
  },
  {
    id: 'd8',
    category: 'Digital Skills',
    title: 'Marketing Psychology',
    shortDescription: 'The science of why people click.',
    fullExplanation: 'Marketing is not about tricking people; it is about understanding how the human brain makes decisions. When you master psychology, you stop guessing and start building things people actually want.',
    visualType: 'icon',
    visualContent: '🧠',
    tags: ['Psychology', 'Marketing', 'Sales'],
    structuredContent: {
      hook: "95% of purchasing decisions are subconscious. If you're only talking to the rational brain, you're missing the sale.",
      reality: "Humans are not rational creatures; we are rationalizing creatures. We buy based on emotion and justify with logic. Marketing Psychology is the map of those emotions.",
      concept: "Marketing Psychology is **Influence Design**. You use proven principles like Scarcity, Social Proof, and Reciprocity to nudge people toward a desired action.",
      power: "*   **Conversion:** Turn visitors into customers.\n*   **Loyalty:** Build deep emotional bonds with your audience.\n*   **Efficiency:** Spend less on ads by having better messaging.",
      roadmap: [
        "Level 1: The Cialdini Principles (Influence)",
        "Level 2: Cognitive Biases (Decision making)",
        "Level 3: Emotional Triggers (Copywriting)",
        "Expert: Behavioral Economics (Pricing & Strategy)"
      ],
      secrets: [
        "**The 'Decoy Effect':** Adding a third, less-attractive option can make your preferred option look like a steal.",
        "**Loss Aversion:** People are more motivated to avoid losing $100 than they are to gain $100. Frame your offer accordingly.",
        "**The Power of 'Because':** Giving a reason for a request—even a simple one—dramatically increases compliance."
      ],
      examples: [
        "**Booking.com:** Uses 'Only 1 room left!' to trigger Scarcity and Urgency.",
        "**Amazon:** Uses 'Customers who bought this also bought...' to leverage Social Proof.",
        "**Starbucks:** Uses a complex rewards program to build habits and Reciprocity."
      ],
      mindset: "Don't sell products. Sell transformations. People don't buy a drill; they buy a hole in the wall. Focus on the 'After' state.",
      
      // Legacy
      achievement: "Understand the hidden drivers of human behavior. Build products and campaigns that resonate on a deep, subconscious level.",
      story: "**The Jam Experiment**\n\nA grocery store set up a display with 24 flavors of jam. Lots of people stopped, but only 3% bought.\n\n**The Pivot:** They reduced the display to only 6 flavors. Fewer people stopped, but 30% bought.\n\n**The Lesson:** Choice Paralysis is real. More options often lead to fewer sales. Psychology taught them that **Simplicity Scales**.",
      exercises: [
        { level: "Easy", task: "Find 3 examples of 'Social Proof' on your favorite website." },
        { level: "Medium", task: "Rewrite a product description using 'Loss Aversion' framing." },
        { level: "Hard", task: "Design a pricing page using the 'Decoy Effect'." }
      ],
      tips: [
        "Always be ethical. Use your powers for good.",
        "Test everything. What works for one audience might not work for another.",
        "Focus on the benefits, not just the features."
      ],
      resources: [
        { name: "Influence by Robert Cialdini", type: "Paid" },
        { name: "Predictably Irrational by Dan Ariely", type: "Paid" },
        { name: "Marketing Examples", type: "Free" }
      ],
      challenges: [
        { level: "Ethics Check", task: "Audit your marketing and ensure you are providing genuine value and not just using 'dark patterns'." }
      ],
      career: "Marketing Psychologists and Growth Hackers can earn upwards of $150k in tech companies."
    }
  },

  // ==================================================================================
  // SECTION 3: WEALTH (09-11)
  // ==================================================================================
  {
    id: 'd9',
    category: 'Digital Skills',
    title: 'Data & Analytics',
    shortDescription: 'The scoreboard of your business.',
    fullExplanation: 'If you can\'t measure it, you can\'t improve it. Data & Analytics is the art of turning raw numbers into actionable insights that drive growth.',
    visualType: 'chart',
    visualContent: '📊',
    tags: ['Data', 'Analytics', 'Growth'],
    structuredContent: {
      hook: "In God we trust; all others must bring data. Stop guessing and start knowing.",
      reality: "Most people are drowning in data but starving for insights. Analytics isn't about the numbers; it's about the **questions** you ask them.",
      concept: "Data & Analytics is **Business Intelligence**. You track the user journey to find out where they are coming from, what they are doing, and why they are leaving.",
      power: "*   **Optimization:** Find the leaks in your funnel.\n*   **ROI:** Know exactly which marketing channels are making you money.\n*   **Prediction:** Use historical data to forecast future trends.",
      roadmap: [
        "Level 1: Tracking Basics (Google Analytics)",
        "Level 2: Conversion Rate Optimization (CRO)",
        "Level 3: Customer Lifetime Value (CLV)",
        "Expert: Data Science & Predictive Modeling"
      ],
      secrets: [
        "**The '80/20' Rule:** 80% of your results usually come from 20% of your efforts. Use data to find that 20%.",
        "**Correlation vs Causation:** Just because two things happen together doesn't mean one caused the other. Be a detective.",
        "**The Power of Cohorts:** Don't just look at total users. Look at how users who joined in January behave compared to those who joined in June."
      ],
      examples: [
        "**Netflix:** Uses data to decide which shows to produce (e.g., House of Cards).",
        "**Uber:** Uses real-time data to set prices and predict demand.",
        "**Airbnb:** Uses A/B testing on every single button and image to maximize bookings."
      ],
      mindset: "Numbers don't lie, but they can be misinterpreted. Always ask 'Why?' behind every 'What?'. Be data-informed, not just data-driven.",
      
      // Legacy
      achievement: "Master the tools of modern business. Turn data into a competitive advantage that competitors can't touch.",
      story: "**The $1 Billion Data Point**\n\nA small gaming company noticed that players who made a friend in the first 24 hours were 5x more likely to stay. \n\n**The Fix:** They redesigned the onboarding to focus entirely on social connection. \n\n**The Result:** Retention skyrocketed, leading to a multi-billion dollar exit. They didn't guess; they found the **One Metric That Mattered**.",
      exercises: [
        { level: "Easy", task: "Install Google Analytics on your website or blog." },
        { level: "Medium", task: "Identify your 'North Star Metric' (the one number that matters most)." },
        { level: "Hard", task: "Run an A/B test on a landing page headline." }
      ],
      tips: [
        "Keep it simple. Don't track everything.",
        "Focus on actionable metrics, not 'vanity' metrics (like likes).",
        "Data is a tool, not a substitute for intuition."
      ],
      resources: [
        { name: "Google Analytics 4", type: "Free" },
        { name: "Mixpanel", type: "Free/Paid" },
        { name: "Hotjar", type: "Free/Paid" }
      ],
      challenges: [
        "The 'Metric Clean-Up': Identify and stop tracking 3 vanity metrics that are distracting you."
      ],
      career: "Data Analysts and Data Scientists are among the highest-paid professionals in the world."
    }
  },
  {
    id: 'd10',
    category: 'Mindset',
    title: 'The Sovereign Mind',
    shortDescription: 'Unlocking the internal barriers to wealth.',
    fullExplanation: 'Your external world is a reflection of your internal state. If you have "money blocks" or a "fixed mindset," no amount of strategy will save you. This module is about upgrading your mental operating system.',
    visualType: 'icon',
    visualContent: '🧘',
    tags: ['Mindset', 'Wealth', 'Philosophy'],
    structuredContent: {
      hook: "The biggest bottleneck in your business isn't the market or the tech—it's you.",
      reality: "We are programmed by our environment, our education, and our past. Most of that programming is designed to keep us 'safe' (average). To be exceptional, you must **de-program**.",
      concept: "The Sovereign Mind is **Self-Mastery**. It is the ability to control your attention, your emotions, and your beliefs so you can act with clarity and courage.",
      power: "*   **Resilience:** Bounce back from failure instantly.\n*   **Clarity:** Make high-stakes decisions without fear.\n*   **Wealth:** Attract and keep money by having an 'Abundance Mindset'.",
      roadmap: [
        "Level 1: Awareness (Identifying your limiting beliefs)",
        "Level 2: Discipline (Controlling your inputs and habits)",
        "Level 3: Vision (Defining your own 'North Star')",
        "Expert: Non-Attachment (Playing the game without being played)"
      ],
      secrets: [
        "**The 'Internal Locus of Control':** Believe that YOU are responsible for your life, not luck or the economy.",
        "**Input Control:** Your mind is a garden. If you let in junk (news, toxic people), you will grow weeds. Guard the gates.",
        "**The '1% Rule':** Don't try to change everything at once. Just be 1% better every day."
      ],
      examples: [
        "**Naval Ravikant:** Built massive wealth by focusing on 'Specific Knowledge' and 'Leverage' through a clear mind.",
        "**Steve Jobs:** Used Zen meditation to develop the focus needed to create Apple.",
        "**Marcus Aurelius:** Used Stoic philosophy to lead the Roman Empire without losing his sanity."
      ],
      mindset: "You don't get what you want; you get who you are. Become the person who deserves the success you seek.",
      
      // Legacy
      achievement: "Break free from the mental chains of the '9-to-5' world. Build a mind that is unshakeable and a life that is truly yours.",
      story: "**The Two Builders**\n\nTwo people started the same business. One saw every setback as a disaster and quit after 3 months. The other saw every setback as a lesson and kept going for 3 years.\n\n**The Result:** The second person is now a multi-millionaire. The difference wasn't the business; it was the **Mindset**. The first person was a slave to their emotions; the second was Sovereign.",
      exercises: [
        { level: "Easy", task: "Write down 3 limiting beliefs you have about money." },
        { level: "Medium", task: "Go 24 hours without checking any news or social media." },
        { level: "Hard", task: "Define your 'Ideal Day' in detail and identify one step to move closer to it." }
      ],
      tips: [
        "Practice gratitude daily.",
        "Meditate to improve your focus.",
        "Surround yourself with people who challenge you."
      ],
      resources: [
        { name: "The Almanack of Naval Ravikant", type: "Free/Paid" },
        { name: "Meditations by Marcus Aurelius", type: "Free/Paid" },
        { name: "The Psychology of Money", type: "Paid" }
      ],
      challenges: [
        "The 'Fear Setting' Challenge: Identify your biggest fear and write down exactly what you would do if it came true."
      ],
      career: "A Sovereign Mind is the ultimate career advantage. It makes you a leader, not a follower."
    }
  },
  {
    id: 'd11',
    category: 'Business',
    title: 'The Lean Startup',
    shortDescription: 'How to build without wasting time.',
    fullExplanation: 'Most startups fail because they build something nobody wants. The Lean Startup is a methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.',
    visualType: 'checklist',
    visualContent: '📋',
    tags: ['Business', 'Strategy', 'Efficiency'],
    structuredContent: {
      hook: "Don't build a masterpiece in a vacuum. Build a prototype in the real world.",
      reality: "Planning is just guessing. The only way to know if your idea works is to put it in front of customers as fast as possible.",
      concept: "The Lean Startup is **Validated Learning**. You use the Build-Measure-Learn feedback loop to iterate your way to a successful product.",
      power: "*   **Speed:** Launch in weeks, not years.\n*   **Efficiency:** Don't waste money on features people don't use.\n*   **Certainty:** Build based on facts, not assumptions.",
      roadmap: [
        "Level 1: The MVP (Minimum Viable Product)",
        "Level 2: The Feedback Loop (Build-Measure-Learn)",
        "Level 3: Pivoting (When to change direction)",
        "Expert: Scaling (Moving from MVP to Growth)"
      ],
      secrets: [
        "**The 'Smoke Test':** Sell the product before you build it. Use a landing page and see if people click 'Buy'.",
        "**Vanilla MVP:** Use off-the-shelf tools to build your first version. Don't custom code anything yet.",
        "**Talk to Users:** 10 conversations are worth more than 1,000 surveys."
      ],
      examples: [
        "**Dropbox:** Started with a simple 3-minute video explaining the concept.",
        "**Zappos:** The founder took photos of shoes in a local store and posted them online to see if people would buy.",
        "**Airbnb:** The founders rented out air mattresses in their living room to prove the concept."
      ],
      mindset: "Failure is just data. If you're not embarrassed by your first version, you launched too late. Be a scientist, not an artist.",
      
      // Legacy
      achievement: "Master the art of the 'Smart Start'. Build a business that is built to last by starting small and iterating fast.",
      story: "**The $50,000 Mistake**\n\nA founder spent $50,000 and 6 months building a complex app for pet owners. When he launched, he realized people only wanted one simple feature: a way to find local dog walkers. \n\n**The Pivot:** He stripped away everything else and focused on that one feature. \n\n**The Lesson:** He could have learned that in one weekend for $50. Don't build the whole car; build a skateboard first.",
      exercises: [
        { level: "Easy", task: "Create a 1-page Business Model Canvas for your idea." },
        { level: "Medium", task: "Build a 'Coming Soon' landing page for a fake product." },
        { level: "Hard", task: "Interview 5 potential customers about a problem they have." }
      ],
      tips: [
        "Focus on the 'Minimum' in MVP.",
        "Measure what matters, not just everything.",
        "Be ready to pivot."
      ],
      resources: [
        { name: "The Lean Startup by Eric Ries", type: "Paid" },
        { name: "The Mom Test", type: "Paid" },
        { name: "Strategyzer", type: "Free/Paid" }
      ],
      challenges: [
        "The '24-Hour MVP': Build and launch a prototype of your idea in 24 hours."
      ],
      career: "Lean Startup principles are used by the world's most successful entrepreneurs and product managers."
    }
  }
];
