export interface LearningModule {
  id: string;
  category: 'Digital Skills' | 'Business' | 'Mindset' | 'Books' | 'Design' | 'Crafting';
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
    resources: { name: string; type: 'Free' | 'Paid' | 'AI'; url?: string }[];
    challenges: string[];
    career: string;
    story?: string;
  };
}

export const learningModules: LearningModule[] = [
  // ==================================================================================
  // 1. DIGITAL MASTERY (10 Cards)
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
      realWorldUses: [
        "Negotiation: 'Act as a Harvard Negotiator. Help me script a reply to ask for a raise.'",
        "Learning: 'Explain Quantum Physics like I am 12 years old. Use analogies involving pizza.'",
        "Coding: 'Find the bug in this code, explain why it happened, and fix it.'",
        "Health: 'Here is my fridge content. Create a high-protein meal plan for the week.'"
      ],
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
        { level: "Easy", task: "Use Google Autocomplete to find 5 questions people ask about your hobby." },
        { level: "Medium", task: "Write a blog post title that includes a 'Power Keyword' (e.g., Ultimate, Guide, Fast)." },
        { level: "Hard", task: "Update an old piece of content to be 2x longer and more helpful, then measure the traffic change." }
      ],
      tips: [
        "Don't write for robots; write for humans. Google is smart enough to know the difference now.",
        "Long-tail keywords (e.g., 'best running shoes for flat feet') are easier to win than short ones ('shoes').",
        "Consistency beats intensity. One article a week for a year > 10 articles in one week."
      ],
      resources: [
        { name: "Google Search Console", type: "Free" },
        { name: "Ubersuggest", type: "Free/Paid" },
        { name: "AnswerThePublic", type: "Free" }
      ],
      challenges: [
        "The 'Snippet Sniper': Find a question on Google where the answer is bad. Write a better 50-word answer to try and steal the 'Featured Snippet'."
      ],
      career: "SEO experts charge $100-$300/hour. Or you can build your own niche sites and live off the ad revenue."
    }
  },
  {
    id: 'd3',
    category: 'Digital Skills',
    title: 'Viral Content Strategy',
    shortDescription: 'Cracking the code of human attention.',
    fullExplanation: 'The algorithm isn\'t a black box; it\'s a mirror of human psychology. If you can grab attention (Hook), hold it (Retention), and satisfy it (Reward), you can grow an audience of millions on YouTube, TikTok, or Instagram.',
    visualType: 'icon',
    visualContent: '🔥',
    tags: ['Social', 'Growth', 'Psychology'],
    structuredContent: {
      hook: "1 billion hours of video are watched daily. Most creators get 0 views. The difference isn't luck; it's psychology.",
      reality: "The algorithm isn't a black box. It's a mirror. It shows people what they want. If you blame the algorithm, you lose. If you study human nature, you win.",
      concept: "Viral Content is a **Value Exchange**. You ask for their Time (Attention). You must give them Value (Entertainment, Education, or Emotion). If the Value > Time, they share it.",
      power: "*   **Reach:** Touch millions of lives instantly.\n*   **Authority:** People trust who they see.\n*   **Leverage:** One video can bring 10,000 customers.",
      roadmap: [
        "Step 1: The Hook (First 3 Seconds)",
        "Step 2: Storytelling & Pacing (Retention)",
        "Step 3: Packaging (Titles & Thumbnails)",
        "Step 4: Analytics & Iteration"
      ],
      secrets: [
        "**The Pattern Interrupt:** Change the angle, sound, or visual every 3-5 seconds to reset the brain's attention span.",
        "**The 'Curiosity Gap':** Write titles that make it impossible *not* to click (e.g., 'I survived 50 hours in Antarctica').",
        "**Comments are Content:** Your next video idea is in your comment section."
      ],
      examples: [
        "**MrBeast:** Spends $10,000 on a thumbnail because he knows if they don't click, the video doesn't exist.",
        "**Educational TikTok:** 'Here is a Excel trick your boss doesn't want you to know.' (Instant authority + Secret).",
        "**Storytelling:** 'I tried to sell a pen to Elon Musk.' (High stakes + Celebrity name)."
      ],
      mindset: "Attention is the new oil. But you have to drill for it. Stop posting what *you* want. Post what *they* need.",
      
      // Legacy
      achievement: "Stop shouting into the void. Command attention. Build a loyal army of fans who hang on your every word.",
      story: "**The MrBeast Formula**\n\nJimmy (MrBeast) didn't get lucky. He spent 1,000 days with his friends analyzing the YouTube algorithm.\n\n**The Discovery:** It wasn't about the camera quality. It was about the **CTR** (Click Through Rate) and **Retention** (Watch Time).\n\n**The Fix:** He spent more time on the *Thumbnail* than the video. He cut every boring second. He treated attention like oxygen. Today, he is the biggest creator on earth.",
      exercises: [
        { level: "Easy", task: "Write 10 headlines for a single video idea. Pick the best one." },
        { level: "Medium", task: "Create a 60-second TikTok/Short that has a 'Pattern Interrupt' every 5 seconds." },
        { level: "Hard", task: "Analyze a viral video frame-by-frame. Write down exactly why you kept watching." }
      ],
      tips: [
        "The Thumbnail is 50% of the work. If they don't click, they can't watch.",
        "Start 'In Media Res' (in the middle of the action). No logos. No intros.",
        "Reply to every comment in the first hour. The algorithm loves engagement."
      ],
      resources: [
        { name: "CapCut", type: "Free" },
        { name: "Canva", type: "Free" },
        { name: "YouTube Studio", type: "Free" }
      ],
      challenges: [
        "The '30-Day Sprint': Post 1 Short/Reel every day for 30 days. Don't look at the views. Just improve 1% each time."
      ],
      career: "Content Creators are the new media companies. Brands pay $5k-$50k for a single sponsored post."
    }
  },
  {
    id: 'd4',
    category: 'Digital Skills',
    title: 'Social Media Strategy',
    shortDescription: 'Turning followers into fans and customers.',
    fullExplanation: 'Social media is not a megaphone; it is a telephone. It is about listening, engaging, and building a tribe. The goal is not "more followers"; it is "more trust."',
    visualType: 'icon',
    visualContent: '📱',
    tags: ['Branding', 'Community', 'Trust'],
    structuredContent: {
      hook: "Social Media is not a megaphone. It is a cocktail party. If you stand on a chair and scream about your product, you get kicked out.",
      reality: "Most brands treat social media like a billboard. That is why they fail. The goal is not to broadcast; it is to **build a tribe**.",
      concept: "Social Media Strategy is **Community Architecture**. You are building a digital city.\n*   **Twitter/X:** The Town Square (Ideas & News).\n*   **Instagram:** The Art Gallery (Visuals & Lifestyle).\n*   **LinkedIn:** The Office (Professional & Networking).\n*   **TikTok:** The Stage (Entertainment & Trends).",
      power: "*   **Trust:** People buy from friends, not logos.\n*   **Feedback:** Instant access to what your customers are thinking.\n*   **Moat:** A loyal community is the only defense against competition.",
      roadmap: [
        "Phase 1: Foundation (Bio, Avatar, Niche)",
        "Phase 2: Consistency (Posting Schedule)",
        "Phase 3: Engagement (Replying & DMs)",
        "Phase 4: Monetization (Selling without selling)"
      ],
      secrets: [
        "**The 80/20 Rule:** 80% Value (Help/Entertain), 20% Ask (Sell). Violate this and you die.",
        "**Document, Don't Create:** Don't try to be a guru. Just show your journey. 'Here is what I learned today' beats 'Here is what you should do'.",
        "**The 'Dream 100':** Interact with the top 100 people in your niche every day. You will borrow their audience."
      ],
      examples: [
        "**Wendy's Twitter:** Roasts people. Acts like a funny friend. Result: Massive viral brand awareness.",
        "**Gymshark:** Built a billion-dollar brand by sending free clothes to fitness influencers before 'influencer marketing' was a word.",
        "**Justin Welsh:** Built a $5M business on LinkedIn just by writing about solopreneurship every day."
      ],
      mindset: "Don't chase followers. Chase **connections**. 1,000 true fans are better than 100,000 bots.",
      
      // Legacy
      achievement: "Turn strangers into friends, and friends into customers. Build a personal brand that opens doors you didn't even know existed.",
      story: "**The $0 Marketing Budget**\n\nGymshark is now a billion-dollar company. But they started in a garage.\n\n**The Strategy:** They didn't buy ads. They sent free t-shirts to their favorite fitness YouTubers (who were small at the time).\n\n**The Result:** The YouTubers wore the shirts in videos because they genuinely liked them. Their fans asked 'Where can I buy that?' Gymshark built a community, not just a customer list.",
      exercises: [
        { level: "Easy", task: "Optimize your bio. Who are you? Who do you help? (e.g., 'Helping Dads get fit')." },
        { level: "Medium", task: "Comment on 5 posts from 'Big Accounts' in your niche. Add value, don't spam." },
        { level: "Hard", task: "Post a 'Vulnerable Story' about a time you failed. Watch the engagement soar." }
      ],
      tips: [
        "Consistency > Virality. Showing up every day builds trust.",
        "Don't 'Post and Ghost'. Stick around for 15 mins after posting to reply to comments.",
        "Use 'Hooks' in your captions. The first line is the most important."
      ],
      resources: [
        { name: "Buffer", type: "Free" },
        { name: "Typefully", type: "Free" },
        { name: "Canva", type: "Free" }
      ],
      challenges: [
        "The 'Go Live' Fear: Go live for 10 minutes. Talk about one thing you learned this week. It will be scary. Do it anyway."
      ],
      career: "Social Media Managers earn $50k-$100k. Personal Brands earn unlimited upside."
    }
  },
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
    title: 'Data Analytics',
    shortDescription: 'Reading the matrix of business.',
    fullExplanation: 'Data is the voice of your customer. They might lie in surveys, but their actions (clicks, purchases, time spent) never lie. Analytics is the skill of listening to that truth and making decisions based on facts, not feelings.',
    visualType: 'chart',
    visualContent: '📊',
    tags: ['Data', 'Logic', 'Truth'],
    structuredContent: {
      hook: "Gut feelings are great for lunch, but terrible for business. Stop guessing. Start knowing.",
      reality: "Amateurs guess. Pros measure. If you can't measure it, you can't improve it. Data is not boring math. It is the map to the treasure.",
      concept: "Data Analytics is the skill of listening to the truth.\n*   **Descriptive:** What happened? ('Sales are down.')\n*   **Diagnostic:** Why? ('The website broke.')\n*   **Predictive:** What will happen? ('We will lose money next week.')\n*   **Prescriptive:** What should we do? ('Fix the server now!')",
      power: "*   **Truth:** Numbers don't lie. People do.\n*   **Optimization:** You can double your profit without finding new customers, just by fixing leaks.\n*   **Confidence:** Make decisions knowing you are right.",
      roadmap: [
        "Step 1: Collection (Google Analytics/Excel)",
        "Step 2: Visualization (Seeing the story)",
        "Step 3: Insight (Finding the 'Why')",
        "Step 4: Action (Changing the strategy)"
      ],
      secrets: [
        "**Pirate Metrics (AARRR):** Acquisition, Activation, Retention, Referral, Revenue. The only metrics that matter for startups.",
        "**Correlation vs Causation:** Just because ice cream sales and shark attacks both go up in summer doesn't mean ice cream causes shark attacks.",
        "**The 5-Second Rule:** If you can't explain the chart in 5 seconds, it's too complex."
      ],
      examples: [
        "**Marketing:** Knowing which ad makes money and which burns money.",
        "**Product:** Seeing where users get stuck in your app.",
        "**Personal Finance:** Tracking exactly where every dollar goes.",
        "**Health:** Tracking sleep and food to optimize energy."
      ],
      mindset: "You are not a gambler. You are a **Scientist**. You don't 'hope' it works. You test, you measure, you learn.",
      
      // Legacy
      achievement: "Find the hidden money in your business. Turn confusion into clarity. From Gambler → Scientist.",
      story: "**Moneyball**\n\nThe Oakland A's baseball team was poor. They couldn't buy star players.\n\n**The Pivot:** They stopped looking at 'athleticism' and started looking at 'data'. They found undervalued players who had high 'On-Base Percentage' but looked funny.\n\n**The Result:** They broke a 103-year record for consecutive wins. They beat teams with 10x their budget. **Data > Money.**",
      exercises: [
        { level: "Easy", task: "Track your screen time for a week. Visualize it in a simple chart." },
        { level: "Medium", task: "Create a Pivot Table in Excel to find the most expensive category in your bank statement." },
        { level: "Hard", task: "Set up Google Analytics on a personal site and track 'User Flow'." }
      ],
      tips: [
        "Correlation is not Causation. Just because ice cream sales and shark attacks both go up in summer doesn't mean ice cream causes shark attacks.",
        "Keep it simple. If you can't explain the chart in 5 seconds, it's too complex.",
        "Garbage In, Garbage Out. Ensure your data is clean."
      ],
      resources: [
        { name: "Google Analytics", type: "Free" },
        { name: "Tableau Public", type: "Free" },
        { name: "Excel / Sheets", type: "Free" }
      ],
      challenges: [
        "The 'Truth' Audit: Look at your last 3 months of spending. What does the data say about your priorities? Does it match what you *say* your priorities are?"
      ],
      career: "Data Analysts start at $70k. Data Scientists earn $150k+. It is the language of the C-Suite."
    }
  },
  {
    id: 'd7',
    category: 'Digital Skills',
    title: 'No-Code Development',
    shortDescription: 'Building empires without code.',
    fullExplanation: 'You used to need \$100k and a CTO to build a tech startup. Now you need \$50 and a weekend. No-Code tools allow you to drag-and-drop your way to fully functional apps, marketplaces, and SaaS products.',
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
      story: "**The \$0 Millionaire**\n\nTara wanted to build an art recommendation app. Developers quoted her **$500,000**. She had $0.\n\n**The Pivot:** She used Bubble (a no-code tool) to build it herself on nights and weekends.\n\n**The Result:** She launched 'Kollecto' in 3 weeks, got thousands of users, and generated millions in revenue. She became her own CTO. She didn't wait for a technical co-founder; she became one.",
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
    id: 'd8',
    category: 'Digital Skills',
    title: 'Cyber Security',
    shortDescription: 'Protecting your digital kingdom.',
    fullExplanation: 'Your entire life is online. Your money, your memories, your identity. Security isn\'t about paranoia; it\'s about hygiene. It\'s about locking the door so you can sleep soundly.',
    visualType: 'icon',
    visualContent: '🛡️',
    tags: ['Security', 'Safety', 'Privacy'],
    structuredContent: {
      hook: "The internet is a battlefield. You are walking through it naked. Let's put some armor on you.",
      reality: "Hackers don't target \"systems.\" They target **you**. 90% of hacks happen because a human clicked a link or used \"Password123\". You are the firewall.",
      concept: "Security is about layers (Defense in Depth).\n1.  **Password Manager:** If you know your password, it's not strong enough. Let a machine generate it: *Xy9#mK2$pL*.\n2.  **2FA (Two-Factor Auth):** Even if they have your password, they can't get in without your phone. Use an App (Authy), not SMS.\n3.  **Updates:** Those annoying \"Update Now\" popups? They are patching holes that hackers use. Click them.",
      power: "*   **Asset Protection:** Keep your money where it belongs.\n*   **Identity:** Preventing identity theft saves you years of legal hell.\n*   **Privacy:** Keep your private life private.",
      roadmap: [
        "Phase 1: Hygiene (Passwords & 2FA)",
        "Phase 2: Network (VPNs & Updates)",
        "Phase 3: Privacy (Data Removal)",
        "Phase 4: Defense (Phishing Awareness)"
      ],
      secrets: [
        "**Phishing 101 - The Hook:** Urgency. \"Your account is locked!\" The scammers rely on fear to make you act fast.",
        "**The Line:** A fake link. \"Click here to fix.\" Always check the URL.",
        "**The Rule:** Never click. Go to the app/site directly."
      ],
      examples: [
        "**Personal:** Keeping your bank account safe.",
        "**Family:** Protecting your kids' photos and location.",
        "**Business:** Ensuring client data doesn't leak.",
        "**Travel:** Using airport Wi-Fi without getting snooped on."
      ],
      mindset: "You are not a victim. You are a **Fortress**. Security is not an inconvenience; it is a necessity.",
      // Legacy
      achievement: "Lock your digital doors. Sleep soundly. Protect your money and your name. From Victim → Fortress.",
      story: "**The HVAC Hack**\n\nTarget (the massive store) got hacked. 40 million credit cards stolen.\n\n**The Twist:** The hackers didn't break into Target's servers. They stole the password of the **Air Conditioning Repairman** (HVAC) who had access to the network.\n\n**The Lesson:** You are only as strong as your weakest link. Don't be the HVAC guy.",
      exercises: [
        { level: "Easy", task: "Check 'Have I Been Pwned' to see if your email was leaked." },
        { level: "Medium", task: "Install a Password Manager (Bitwarden/1Password) and change your top 5 passwords." },
        { level: "Hard", task: "Set up a Hardware Key (YubiKey) for your primary email." }
      ],
      tips: [
        "Don't use the same password twice. Ever.",
        "Cover your webcam. Yes, really.",
        "If it's free, YOU are the product. Check your privacy settings."
      ],
      resources: [
        { name: "Bitwarden", type: "Free" },
        { name: "Malwarebytes", type: "Free" },
        { name: "Privacy.com", type: "Free" }
      ],
      challenges: [
        "The 'Lockdown': Enable 2FA on every single account you own. Email, Social, Bank, Amazon. All of it."
      ],
      career: "Cybersecurity is the only field with 0% unemployment. Millions of unfilled jobs."
    }
  },
  {
    id: 'd9',
    category: 'Digital Skills',
    title: 'Growth Hacking',
    shortDescription: 'Science applied to marketing.',
    fullExplanation: 'Growth hacking isn\'t magic. It\'s the scientific method applied to sales. It\'s running rapid experiments to find the "One Thing" that explodes your growth. It\'s about doing more with less.',
    visualType: 'chart',
    visualContent: '📈',
    tags: ['Growth', 'Experiments', 'Scale'],
    structuredContent: {
      hook: "Marketing burns money. Growth Hacking prints money. Stop shouting, start experimenting.",
      reality: "Traditional marketing is \"Mad Men\" (creative guessing). Growth Hacking is \"Moneyball\" (data-driven winning). You don't need a budget. You need a brain.",
      concept: "Growth Hacking is the **Lab Coat Mindset**.\nA marketer says: \"I think this blue button looks nice.\"\nA growth hacker says: \"Let's test Blue vs. Red and see which one makes more money.\"\n**Data wins arguments.**",
      power: "*   **Leverage:** One small change can double your revenue.\n*   **Speed:** Find out what works in hours, not months.\n*   **Cost:** Grow without paying Zuckerberg.",
      roadmap: [
        "Step 1: Product Market Fit (Do they want it?)",
        "Step 2: The Funnel (Where do they drop off?)",
        "Step 3: Rapid Experimentation (Testing)",
        "Step 4: Viral Loops (Referrals)"
      ],
      secrets: [
        "**The Viral Loop:** How to get free users forever: User gets value -> User invites friend -> Friend joins -> Repeat.",
        "**The Pirate Funnel (AARRR):** Acquisition, Activation, Retention (The King), Referral, Revenue.",
        "**Retention is King:** Don't fill a leaky bucket. Fixing retention is 10x cheaper than buying new users."
      ],
      examples: [
        "**Startups:** Getting first users with $0.",
        "**Creators:** Growing a newsletter via referrals.",
        "**E-Commerce:** Increasing 'Average Order Value' with upsells.",
        "**Apps:** Gamifying the experience to keep users coming back."
      ],
      mindset: "You are not a gambler. You are a **Scientist**. Every failure is just data. Every win is scalable. From Unknown → Viral.",
      // Legacy
      achievement: "Get 10,000 users for $0. Turn your product into a virus (the good kind). From Unknown → Viral.",
      story: "**The Dropbox Hack**\n\nDropbox was dying. Ads were too expensive.\n\n**The Hack:** They added a button: *\"Get 500MB free for every friend you invite.\"*\n\n**The Result:** Signups went up 60% permanently. They grew from 100k to 4 million users in 15 months. They didn't buy ads; they turned their users into their sales team.",
      exercises: [
        { level: "Easy", task: "Analyze a 'Referral Program' (like Uber or Airbnb). How do they incentivize you?" },
        { level: "Medium", task: "Design a 'Viral Loop' for a lemonade stand." },
        { level: "Hard", task: "Run an A/B test on a landing page headline." }
      ],
      tips: [
        "Retention is King. Don't fill a leaky bucket.",
        "Speed of testing is the #1 predictor of success.",
        "Steal like an artist. See what competitors are doing and improve it."
      ],
      resources: [
        { name: "Google Optimize", type: "Free" },
        { name: "Viral Loops", type: "Paid" },
        { name: "Hotjar", type: "Free" }
      ],
      challenges: [
        "The '100 User' Sprint: Get 100 people to sign up for a newsletter/waitlist without spending $1. Use forums, DMs, and content."
      ],
      career: "Head of Growth is one of the highest-paid roles in tech. It's high pressure, high reward."
    }
  },
  {
    id: 'd10',
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
      story: "**The Centaur**\n\nIn chess, a 'Centaur' is a Human + AI team. \n*   Human = Strategy & Intuition.\n*   AI = Calculation & Speed.\n\n**The Truth:** A Centaur beats a Human. But a Centaur also beats a pure AI. \n**The Goal:** Don't compete with AI. Collaborate with it. Become the Centaur.",
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

  // ==================================================================================
  // 2. BUSINESS & STRATEGY (10 Cards)
  // ==================================================================================
  {
    id: 'b1',
    category: 'Business',
    title: 'The Lean Startup',
    shortDescription: 'Build fast, fail fast, learn faster.',
    fullExplanation: 'The old way: Write a 50-page business plan, raise money, build for 2 years, launch, and fail. The Lean way: Build a prototype in 2 days, try to sell it, learn from customers, and iterate. Stop wasting time building things nobody wants.',
    visualType: 'book',
    visualContent: '🚀',
    tags: ['Startup', 'Methodology', 'Speed'],
    structuredContent: {
      hook: "Most startups fail not because they couldn't build the product, but because they built the WRONG product.",
      reality: "The old way: Write a 50-page business plan, raise money, build for 2 years, launch, and fail. The Lean way: Build a prototype in 2 days, try to sell it, learn from customers, and iterate.",
      concept: "The **Build-Measure-Learn Loop** is the engine of innovation.\n1.  **Build:** Create a small experiment.\n2.  **Measure:** Collect data. (Did they click? Did they buy?)\n3.  **Learn:** Why did it happen?\n4.  **Repeat.**",
      power: "*   **Vanity Metrics:** \"We got 10,000 likes!\" (Who cares? Likes don't pay bills).\n*   **Actionable Metrics:** \"We got 10 sales.\" (This proves value).\n*   **Efficiency:** Validate a million-dollar idea without spending a million dollars.",
      roadmap: [
        "Step 1: The Hypothesis (I think people want X)",
        "Step 2: The MVP (The smallest version of X)",
        "Step 3: The Test (Do they buy?)",
        "Step 4: Pivot or Persevere"
      ],
      secrets: [
        "**Kill Your Darlings:** If the data says your idea is bad, **kill it.** Don't fall in love with your solution. Fall in love with the *problem*.",
        "**The $1 Challenge:** Make your first $1 from a stranger online. It changes your brain chemistry.",
        "**Surveys Lie:** Wallets tell the truth. Don't ask \"Would you buy this?\" Ask \"Will you buy this right now?\""
      ],
      examples: [
        "**Entrepreneurship:** Testing a new business idea.",
        "**Corporate:** Launching a new product line.",
        "**Freelancing:** Testing a new service offering.",
        "**Life:** Trying a new diet (The Lean Body?)."
      ],
      mindset: "Fail fast. Failure is not the opposite of success; it is part of success. You either win or you learn.",
      // Legacy
      achievement: "Validate a million-dollar idea without spending a million dollars.",
      story: "**The Zappos Test**\n\nNick wanted to sell shoes online. Everyone said: \"People need to try shoes on!\"\n\n**The Test:** He didn't build a warehouse. He went to a local shoe store, took photos, and put them on a simple website. When someone bought a pair, he walked to the store, bought them, and mailed them.\n\n**The Result:** He proved people *would* buy shoes online. He sold Zappos to Amazon for **$1.2 Billion**. He started with a camera and a website.",
      exercises: [
        { level: "Easy", task: "Write down 3 assumptions you have about a business idea." },
        { level: "Medium", task: "Create a 'Landing Page' (using Carrd) to test one of those assumptions." },
        { level: "Hard", task: "Try to pre-sell a product that doesn't exist yet (be ethical: refund if you don't build it)." }
      ],
      tips: [
        "If you aren't embarrassed by the first version of your product, you launched too late.",
        "Talk to customers. Surveys lie. Wallets tell the truth.",
        "Fail fast. Failure is just learning what doesn't work."
      ],
      resources: [
        { name: "The Lean Startup (Book)", type: "Paid" },
        { name: "Steve Blank (Blog)", type: "Free" },
        { name: "Y Combinator Library", type: "Free" }
      ],
      challenges: [
        "The '$1 Challenge': Make your first $1 from a stranger online. It changes your brain chemistry."
      ],
      career: "Product Managers who understand Lean methodology are the CEOs of the product."
    }
  }
];
